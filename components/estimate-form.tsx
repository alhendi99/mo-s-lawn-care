'use client'

import { useState } from 'react'
import { services, site } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'mt-2 h-12 w-full border border-[color:var(--rule)] bg-white px-3.5 text-[0.9375rem] text-ink outline-none transition-colors duration-200 focus:border-[color:var(--accent)]'

const labelClass = 'block text-[0.6875rem] font-semibold tracking-[0.16em] text-ink-soft uppercase'

export function EstimateForm() {
  const [status, setStatus] = useState<Status>('idle')

  // Connect a real endpoint by setting `site.formEndpoint` in lib/site.ts
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (!site.formEndpoint) {
      console.log('[v0] Estimate request (no endpoint configured):', data)
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="zip">
          ZIP Code
        </label>
        <input
          id="zip"
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="service">
          What do you need help with?
        </label>
        <select id="service" name="service" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} h-auto py-3 leading-relaxed`}
          placeholder="Tell us about the property and what's going on out there."
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-solid w-full" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Get a free estimate'}
        </button>

        <p aria-live="polite" className="mt-3 min-h-5 text-[0.8125rem] text-ink-soft">
          {status === 'sent' && "Thanks — your request was captured. We'll be in touch."}
          {status === 'error' && 'Something went wrong. Please try again.'}
        </p>
      </div>
    </form>
  )
}
