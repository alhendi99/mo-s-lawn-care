import Script from 'next/script'

export function Ga4({ measurementId }: { measurementId: string }) {
  const serializedMeasurementId = JSON.stringify(measurementId)
  const initialization = `window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.__mosGa4Enabled=true;window.gtag('js',new Date());window.gtag('config',${serializedMeasurementId},{allow_google_signals:false,allow_ad_personalization_signals:false});`

  return (
    <>
      <Script
        id="mos-ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="mos-ga4-init" strategy="afterInteractive">
        {initialization}
      </Script>
    </>
  )
}
