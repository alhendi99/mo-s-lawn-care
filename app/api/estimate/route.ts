import { Resend } from 'resend'
import { EstimateRequestEmail } from '@/components/estimate-request-email'
import type { EstimateErrorCode, EstimateRequestInput } from '@/lib/estimate-contract'
import { services } from '@/lib/site'

export const runtime = 'nodejs'

function textValue(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function errorResponse(errorCode: EstimateErrorCode, status: number) {
  return Response.json({ ok: false, errorCode }, { status })
}

export async function POST(request: Request) {
  let payload: EstimateRequestInput

  try {
    payload = (await request.json()) as EstimateRequestInput
  } catch {
    return errorResponse('invalid_request', 400)
  }

  // Honeypot: silently accept bot submissions without sending an email.
  if (textValue(payload.website, 200)) {
    return Response.json({ ok: true, delivery: 'suppressed' })
  }

  const name = textValue(payload.name, 120)
  const phone = textValue(payload.phone, 40)
  const email = textValue(payload.email, 254)
  const requestedService = textValue(payload.service, 120)
  const service = (
    services.some((approvedService) => approvedService === requestedService)
    || requestedService === 'Not sure yet'
  ) ? requestedService : ''
  const message = textValue(payload.message, 2000)
  const phoneDigits = phone.replace(/\D/g, '')

  if (!name || phoneDigits.length < 10 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return errorResponse('invalid_contact', 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.RESEND_TO_EMAIL

  if (!apiKey || !from || !to) {
    console.error('Resend is missing RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL.')
    return errorResponse('delivery_unavailable', 503)
  }

  try {
    const submissionId = crypto.randomUUID()
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email || undefined,
      subject: `New estimate request from ${name}`,
      html: EstimateRequestEmail({ name, phone, email, service, message }),
      tags: [
        { name: 'source', value: 'estimate-form' },
        { name: 'submission_id', value: submissionId },
      ],
    })

    if (error) {
      console.error('Resend email error:', error)
      return errorResponse('delivery_failed', 502)
    }

    return Response.json({ ok: true, delivery: 'sent', submissionId })
  } catch (error) {
    console.error('Resend request failed:', error)
    return errorResponse('delivery_failed', 502)
  }
}
