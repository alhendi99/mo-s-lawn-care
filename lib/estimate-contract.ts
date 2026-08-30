export const estimateErrorCodes = [
  'invalid_request',
  'invalid_contact',
  'delivery_unavailable',
  'delivery_failed',
] as const

export type EstimateErrorCode = (typeof estimateErrorCodes)[number]

export type EstimateRequestPayload = {
  name: string
  phone: string
  email: string
  service: string
  message: string
  website: string
  locale: 'en' | 'es'
}

export type EstimateRequestInput = Partial<Record<keyof EstimateRequestPayload, unknown>>

export type EstimateSentResponse = {
  ok: true
  delivery: 'sent'
  submissionId: string
}

export type EstimateSuppressedResponse = {
  ok: true
  delivery: 'suppressed'
}

export type EstimateErrorResponse = {
  ok: false
  errorCode: EstimateErrorCode
}

export type EstimateApiResponse =
  | EstimateSentResponse
  | EstimateSuppressedResponse
  | EstimateErrorResponse

export class SubmissionInFlightGuard {
  #inFlight = false

  claim() {
    if (this.#inFlight) return false
    this.#inFlight = true
    return true
  }

  release() {
    this.#inFlight = false
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isStableSubmissionId(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9_-]{8,200}$/.test(value)
}

export function parseEstimateApiResponse(value: unknown): EstimateApiResponse | null {
  if (!isRecord(value) || typeof value.ok !== 'boolean') return null

  if (value.ok === true && value.delivery === 'sent' && isStableSubmissionId(value.submissionId)) {
    return { ok: true, delivery: 'sent', submissionId: value.submissionId }
  }

  if (value.ok === true && value.delivery === 'suppressed') {
    return { ok: true, delivery: 'suppressed' }
  }

  if (
    value.ok === false &&
    typeof value.errorCode === 'string' &&
    estimateErrorCodes.includes(value.errorCode as EstimateErrorCode)
  ) {
    return { ok: false, errorCode: value.errorCode as EstimateErrorCode }
  }

  return null
}
