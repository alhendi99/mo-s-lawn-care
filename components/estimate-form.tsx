'use client'

import { useRef, useState } from 'react'
import {
  analytics,
  createFormAnalyticsContext,
  FormStartGuard,
  mapEstimateErrorCode,
  trackSuccessfulEstimateDelivery,
  type EstimatePlacement,
} from '@/lib/analytics'
import {
  parseEstimateApiResponse,
  SubmissionInFlightGuard,
  type EstimateRequestPayload,
} from '@/lib/estimate-contract'
import { services, site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type FieldName = 'name' | 'phone' | 'email'
type FieldErrors = Partial<Record<FieldName, string>>

const requiredFields: FieldName[] = ['name', 'phone']
const fieldOrder: FieldName[] = ['name', 'phone', 'email']

const fieldClass =
  'mt-1.5 h-11 w-full border-0 border-b border-[color:var(--rule)] bg-transparent px-0 text-base text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/85 hover:border-ink/35 focus:border-accent aria-invalid:border-red-700 aria-invalid:focus:border-red-700'

const labelClass =
  'block text-[0.75rem] font-semibold tracking-[0.14em] text-ink-soft uppercase'

export function EstimateForm({ placement = 'homepage_estimate' }: { placement?: EstimatePlacement }) {
  const { locale, t } = useI18n()
  const controlledPlacement: EstimatePlacement = placement === 'contact_page'
    ? 'contact_page'
    : 'homepage_estimate'
  const idPrefix = controlledPlacement === 'contact_page' ? 'contact-estimate' : 'homepage-estimate'
  const fieldId = (field: string) => `${idPrefix}-${field}`
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const submissionInFlight = useRef(new SubmissionInFlightGuard())
  const formStartGuard = useRef(new FormStartGuard())
  const statusRef = useRef<HTMLParagraphElement>(null)

  function analyticsContext() {
    const pagePath = typeof window === 'undefined' ? '/' : window.location.pathname
    return createFormAnalyticsContext(controlledPlacement, locale, pagePath)
  }

  function focusStatusMessage() {
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  function handleMeaningfulInteraction(
    event: React.PointerEvent<HTMLFormElement> | React.KeyboardEvent<HTMLFormElement>,
  ) {
    const field = event.target
    if (
      !(field instanceof HTMLInputElement) &&
      !(field instanceof HTMLSelectElement) &&
      !(field instanceof HTMLTextAreaElement)
    ) {
      return
    }

    if (formStartGuard.current.claim(field.name, event.type, event.nativeEvent.isTrusted)) {
      analytics.formStart(analyticsContext())
    }
  }

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const field = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    const name = field.name as FieldName

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const nextErrors: FieldErrors = {}

    if (!name) nextErrors.name = t('Please enter your name.')

    const phoneDigits = phone.replace(/\D/g, '')
    if (!phone) {
      nextErrors.phone = t('Please enter your phone number.')
    } else if (phoneDigits.length < 10) {
      nextErrors.phone = t('Enter a valid 10-digit phone number.')
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = t('Enter a valid email address.')
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      const firstInvalidField = fieldOrder.find((fieldName) => nextErrors[fieldName])
      if (firstInvalidField) {
        requestAnimationFrame(() => {
          const input = form.elements.namedItem(firstInvalidField)
          if (input instanceof HTMLElement) input.focus()
        })
      }
      return
    }

    if (!submissionInFlight.current.claim()) return
    setErrors({})
    setStatus('sending')

    try {
      const data: EstimateRequestPayload = {
        name,
        phone,
        email,
        service: String(formData.get('service') ?? ''),
        message: String(formData.get('message') ?? ''),
        website: String(formData.get('website') ?? ''),
        locale,
      }
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const body: unknown = await res.json().catch(() => null)
      const response = parseEstimateApiResponse(body)

      if (!res.ok || !response || !response.ok) {
        const errorType = response && !response.ok
          ? mapEstimateErrorCode(response.errorCode)
          : 'unexpected_response'
        analytics.formSubmitError(analyticsContext(), errorType)
        setStatus('error')
        focusStatusMessage()
        return
      }

      trackSuccessfulEstimateDelivery(response, analyticsContext())
      setStatus('sent')
      setErrors({})
      form.reset()
      focusStatusMessage()
    } catch {
      setStatus('error')
      focusStatusMessage()
    } finally {
      submissionInFlight.current.release()
    }
  }

  return (
    <form
      id={fieldId('form')}
      data-estimate-placement={controlledPlacement}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onPointerDownCapture={handleMeaningfulInteraction}
      onKeyDownCapture={handleMeaningfulInteraction}
      noValidate
      aria-busy={status === 'sending'}
      className="relative"
    >
      <div className="pointer-events-none absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={fieldId('website')}>{t('Website')}</label>
        <input id={fieldId('website')} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex items-end justify-between gap-5 border-b border-[color:var(--rule)] pb-5">
        <div>
          <p className="eyebrow text-accent">{t('Start here')}</p>
          <h3 id={fieldId('heading')} className="mt-3 font-display text-2xl leading-none font-bold tracking-[-0.035em] text-ink uppercase sm:text-3xl">
            {t('Request an estimate')}
          </h3>
        </div>
        <p className="shrink-0 text-[0.75rem] tracking-[0.1em] text-ink-soft uppercase">
          * {t('Required')}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass} htmlFor={fieldId('name')}>
            {t('Name')} <span className="text-accent">*</span>
          </label>
          <input
            id={fieldId('name')}
            name="name"
            required
            autoComplete="name"
            placeholder={t('Your name')}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? fieldId('name-error') : undefined}
          />
          {errors.name && (
            <p id={fieldId('name-error')} role="alert" className="mt-2 text-sm font-medium text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass} htmlFor={fieldId('phone')}>
            {t('Phone')} <span className="text-accent">*</span>
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={t('Your phone number')}
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? fieldId('phone-error') : undefined}
          />
          {errors.phone && (
            <p id={fieldId('phone-error')} role="alert" className="mt-2 text-sm font-medium text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="col-span-2">
          <label className={labelClass} htmlFor={fieldId('email')}>
            {t('Email')} <span className="font-normal tracking-normal normal-case">({t('optional')})</span>
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? fieldId('email-error') : undefined}
          />
          {errors.email && (
            <p id={fieldId('email-error')} role="alert" className="mt-2 text-sm font-medium text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div className="col-span-2">
          <label className={labelClass} htmlFor={fieldId('service')}>
            {t('What do you need help with?')}
          </label>
          <div className="relative">
            <select
              id={fieldId('service')}
              name="service"
              defaultValue=""
              className={`${fieldClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                {t('Select a service')}
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {t(s)}
                </option>
              ))}
              <option value="Not sure yet">{t('Not sure yet')}</option>
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-1 bottom-3 text-sm text-accent"
            >
              ↓
            </span>
          </div>
        </div>

        <div className="col-span-2">
          <label className={labelClass} htmlFor={fieldId('message')}>
            {t("Tell us what's going on")}
          </label>
          <textarea
            id={fieldId('message')}
            name="message"
            rows={2}
            className={`${fieldClass} min-h-20 resize-y py-2 leading-relaxed`}
            placeholder={t('Property details, timing, or the problem you want solved.')}
          />
        </div>

        <button
          type="submit"
          className="group col-span-2 mt-2 flex min-h-14 w-full items-center justify-between bg-evergreen px-6 text-[0.875rem] font-bold tracking-[0.12em] text-paper uppercase transition-colors duration-200 hover:bg-evergreen-700 disabled:cursor-wait disabled:opacity-65"
          disabled={status === 'sending'}
        >
          <span>{t(status === 'sending' ? 'Sending your request…' : 'Request my free estimate')}</span>
          <span
            aria-hidden="true"
            className="text-lg transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <div className="col-span-2 flex flex-col gap-1.5 text-xs text-ink-soft sm:flex-row sm:items-start sm:justify-between">
          <p
            ref={statusRef}
            id={fieldId('status')}
            role="status"
            aria-live="polite"
            tabIndex={-1}
            className="min-h-4 outline-none sm:max-w-[17rem] sm:text-right"
          >
            {status === 'sent' && (
              <span className="font-semibold text-accent">{t("Thanks — we'll be in touch.")}</span>
            )}
            {status === 'error' && (
              <span className="text-red-700">{t('Something went wrong. Please try again.')}</span>
            )}
          </p>
        </div>
      </div>
    </form>
  )
}
