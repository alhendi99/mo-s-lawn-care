import type { Locale } from './i18n.tsx'
import type {
  EstimateApiResponse,
  EstimateErrorCode,
  EstimateSentResponse,
} from './estimate-contract.ts'
import { isStableSubmissionId } from './estimate-contract.ts'

export const analyticsEventNames = [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
] as const

export type AnalyticsEventName = (typeof analyticsEventNames)[number]
export type EstimatePlacement = 'homepage_estimate' | 'contact_page'
export type FormSubmitErrorType =
  | 'invalid_request'
  | 'invalid_contact'
  | 'delivery_unavailable'
  | 'delivery_failed'
  | 'unexpected_response'

export type FormAnalyticsContext = Readonly<{
  formId: 'estimate_form'
  formName: 'estimate_request'
  leadType: 'estimate_request'
  pagePath: string
  placement: EstimatePlacement
  language: Locale
}>

export type ContactAnalyticsContext = Readonly<{
  pagePath: string
  language: Locale
}>

type AnalyticsParameters = Readonly<Record<string, string>>
type AnalyticsTransport = (eventName: AnalyticsEventName, parameters: AnalyticsParameters) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (command: 'event', eventName: AnalyticsEventName, parameters: AnalyticsParameters) => void
    __mosGa4Enabled?: boolean
  }
}

function browserTransport(eventName: AnalyticsEventName, parameters: AnalyticsParameters) {
  if (typeof window === 'undefined' || window.__mosGa4Enabled !== true) return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, parameters)
}

export function sanitizePagePath(value: string) {
  const path = value.split(/[?#]/, 1)[0]
  return path.startsWith('/') ? path : '/'
}

export function createFormAnalyticsContext(
  placement: EstimatePlacement,
  language: Locale,
  pagePath: string,
): FormAnalyticsContext {
  return {
    formId: 'estimate_form',
    formName: 'estimate_request',
    leadType: 'estimate_request',
    pagePath: sanitizePagePath(pagePath),
    placement: placement === 'contact_page' ? 'contact_page' : 'homepage_estimate',
    language: language === 'es' ? 'es' : 'en',
  }
}

function formParameters(context: FormAnalyticsContext): AnalyticsParameters {
  return {
    form_id: 'estimate_form',
    form_name: 'estimate_request',
    lead_type: 'estimate_request',
    page_path: sanitizePagePath(context.pagePath),
    placement: context.placement === 'contact_page' ? 'contact_page' : 'homepage_estimate',
    language: context.language === 'es' ? 'es' : 'en',
  }
}

function contactParameters(
  context: ContactAnalyticsContext,
  linkUrl: 'tel:' | 'mailto:',
): AnalyticsParameters {
  return {
    page_path: sanitizePagePath(context.pagePath),
    link_url: linkUrl,
    placement: 'site_contact',
    language: context.language === 'es' ? 'es' : 'en',
  }
}

export function createAnalyticsClient(transport: AnalyticsTransport = browserTransport) {
  function send(eventName: AnalyticsEventName, parameters: AnalyticsParameters) {
    try {
      transport(eventName, parameters)
    } catch {
      // Measurement is observational and must never interrupt user workflows.
    }
  }

  return {
    generateLead(context: FormAnalyticsContext) {
      send('generate_lead', formParameters(context))
    },
    formStart(context: FormAnalyticsContext) {
      send('form_start', formParameters(context))
    },
    formSubmitError(context: FormAnalyticsContext, errorType: FormSubmitErrorType) {
      const safeErrorType: FormSubmitErrorType = [
        'invalid_request',
        'invalid_contact',
        'delivery_unavailable',
        'delivery_failed',
        'unexpected_response',
      ].includes(errorType)
        ? errorType
        : 'unexpected_response'
      send('form_submit_error', {
        ...formParameters(context),
        error_type: safeErrorType,
      })
    },
    clickToCall(context: ContactAnalyticsContext) {
      send('click_to_call', contactParameters(context, 'tel:'))
    },
    clickEmail(context: ContactAnalyticsContext) {
      send('click_email', contactParameters(context, 'mailto:'))
    },
  }
}

export type AnalyticsClient = ReturnType<typeof createAnalyticsClient>
export const analytics = createAnalyticsClient()

const legitimateEstimateFields = new Set(['name', 'phone', 'email', 'service', 'message'])
const legitimateInteractionTypes = new Set(['pointerdown', 'keydown'])

export class FormStartGuard {
  #started = false

  claim(fieldName: string, interactionType: string, isTrusted: boolean) {
    if (this.#started || !isTrusted) return false
    if (!legitimateEstimateFields.has(fieldName)) return false
    if (!legitimateInteractionTypes.has(interactionType)) return false
    this.#started = true
    return true
  }
}

type SessionStorageLike = Pick<Storage, 'getItem' | 'setItem'>
const leadStorageKey = 'mos.ga4.generated_lead_ids'

export class SuccessfulLeadDeduper {
  #claimed = new Set<string>()
  #storage: SessionStorageLike | null

  constructor(storage: SessionStorageLike | null = null) {
    this.#storage = storage
    if (!storage) return

    try {
      const saved = JSON.parse(storage.getItem(leadStorageKey) ?? '[]') as unknown
      if (Array.isArray(saved)) {
        for (const value of saved) {
          if (isStableSubmissionId(value)) this.#claimed.add(value)
        }
      }
    } catch {
      // Storage is an optional dedupe enhancement; analytics must remain non-blocking.
    }
  }

  claim(submissionId: string) {
    if (!isStableSubmissionId(submissionId) || this.#claimed.has(submissionId)) return false
    this.#claimed.add(submissionId)

    if (this.#storage) {
      try {
        this.#storage.setItem(leadStorageKey, JSON.stringify([...this.#claimed].slice(-50)))
      } catch {
        // A storage failure must not affect the estimate workflow.
      }
    }

    return true
  }
}

let browserLeadDeduper: SuccessfulLeadDeduper | null = null

function getBrowserLeadDeduper() {
  if (browserLeadDeduper) return browserLeadDeduper
  let storage: SessionStorageLike | null = null
  if (typeof window !== 'undefined') {
    try {
      storage = window.sessionStorage
    } catch {
      // Session storage may be unavailable under strict browser privacy settings.
    }
  }
  browserLeadDeduper = new SuccessfulLeadDeduper(storage)
  return browserLeadDeduper
}

export function trackSuccessfulEstimateDelivery(
  response: EstimateApiResponse,
  context: FormAnalyticsContext,
  client: AnalyticsClient = analytics,
  deduper: SuccessfulLeadDeduper = getBrowserLeadDeduper(),
) {
  if (!response.ok || response.delivery !== 'sent') return false
  if (!deduper.claim(response.submissionId)) return false
  client.generateLead(context)
  return true
}

export function mapEstimateErrorCode(errorCode: EstimateErrorCode): FormSubmitErrorType {
  return errorCode
}

export function isSentEstimateResponse(response: EstimateApiResponse): response is EstimateSentResponse {
  return response.ok && response.delivery === 'sent'
}

export function classifyContactHref(href: string): 'tel' | 'mailto' | null {
  const normalized = href.trim().toLowerCase()
  if (normalized.startsWith('tel:')) return 'tel'
  if (normalized.startsWith('mailto:')) return 'mailto'
  return null
}
