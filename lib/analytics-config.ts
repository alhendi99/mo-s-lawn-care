export type Ga4DisabledReason =
  | 'not-production'
  | 'not-enabled'
  | 'activation-not-approved'
  | 'missing-or-invalid-measurement-id'

export type Ga4Config =
  | { enabled: true; measurementId: string; disabledReason: null }
  | { enabled: false; measurementId: null; disabledReason: Ga4DisabledReason }

type AnalyticsEnvironment = Readonly<{
  [key: string]: string | undefined
  VERCEL_ENV?: string
  GA4_ENABLED?: string
  GA4_ACTIVATION_APPROVED?: string
  GA4_MEASUREMENT_ID?: string
}>

export function isValidGa4MeasurementId(value: string | undefined): value is string {
  return typeof value === 'string' && /^G-[A-Z0-9]{6,20}$/.test(value.trim())
}

export function isProductionDeployment(environment: AnalyticsEnvironment = process.env) {
  return environment.VERCEL_ENV === 'production'
}

export function getGa4Config(environment: AnalyticsEnvironment = process.env): Ga4Config {
  if (!isProductionDeployment(environment)) {
    return { enabled: false, measurementId: null, disabledReason: 'not-production' }
  }

  if (environment.GA4_ENABLED !== 'true') {
    return { enabled: false, measurementId: null, disabledReason: 'not-enabled' }
  }

  if (environment.GA4_ACTIVATION_APPROVED !== 'true') {
    return { enabled: false, measurementId: null, disabledReason: 'activation-not-approved' }
  }

  if (!isValidGa4MeasurementId(environment.GA4_MEASUREMENT_ID)) {
    return { enabled: false, measurementId: null, disabledReason: 'missing-or-invalid-measurement-id' }
  }

  return {
    enabled: true,
    measurementId: environment.GA4_MEASUREMENT_ID.trim(),
    disabledReason: null,
  }
}
