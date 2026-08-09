import { Resend } from 'resend'
import { EstimateRequestEmail } from '@/components/estimate-request-email'

export const runtime = 'nodejs'

type EstimatePayload = {
  name?: unknown
  phone?: unknown
  email?: unknown
  service?: unknown
  message?: unknown
  website?: unknown
}

function textValue(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(request: Request) {
  let payload: EstimatePayload

  try {
    payload = (await request.json()) as EstimatePayload
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: silently accept bot submissions without sending an email.
  if (textValue(payload.website, 200)) {
    return Response.json({ ok: true })
  }

  const name = textValue(payload.name, 120)
  const phone = textValue(payload.phone, 40)
  const email = textValue(payload.email, 254)
  const service = textValue(payload.service, 120)
  const message = textValue(payload.message, 2000)
  const phoneDigits = phone.replace(/\D/g, '')

  if (!name || phoneDigits.length < 10 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return Response.json({ error: 'Please check the required contact fields.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.RESEND_TO_EMAIL

  if (!apiKey || !from || !to) {
    console.error('Resend is missing RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL.')
    return Response.json({ error: 'Email delivery is not configured.' }, { status: 503 })
  }

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email || undefined,
      subject: `New estimate request from ${name}`,
      react: EstimateRequestEmail({ name, phone, email, service, message }),
      tags: [{ name: 'source', value: 'estimate-form' }],
    })

    if (error) {
      console.error('Resend email error:', error)
      return Response.json({ error: 'Unable to send the estimate request.' }, { status: 502 })
    }

    return Response.json({ ok: true, id: data?.id })
  } catch (error) {
    console.error('Resend request failed:', error)
    return Response.json({ error: 'Unable to send the estimate request.' }, { status: 502 })
  }
}
