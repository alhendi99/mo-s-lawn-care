import { openingDays, serviceAreas, services, site } from '@/lib/site'
import { SITE_ORIGIN } from '@/lib/site-url'

const organizationId = `${SITE_ORIGIN}/#business`

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': organizationId,
  name: site.companyName,
  description:
    'Year-round lawn care, landscaping, yard cleanup, leaf cleanup, and snow removal for properties in Des Moines, Iowa, and nearby communities.',
  url: `${SITE_ORIGIN}/`,
  telephone: site.phoneHref.replace('tel:', ''),
  image: `${SITE_ORIGIN}/seasons/summer.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Des Moines',
    addressRegion: 'Iowa',
    addressCountry: 'US',
  },
  areaServed: serviceAreas.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'Iowa' },
  })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: openingDays.map((day) => `https://schema.org/${day}`),
    opens: '21:00',
    closes: '23:00',
  },
  openingHours: 'Sa-Th 21:00-23:00',
  serviceType: services,
  makesOffer: services.map((name) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name,
      provider: { '@id': organizationId },
      areaServed: 'Des Moines, Iowa',
    },
  })),
  ...(site.socialLinks.length > 0 ? { sameAs: site.socialLinks.map(({ href }) => href) } : {}),
}

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_ORIGIN}/#website`,
  url: `${SITE_ORIGIN}/`,
  name: site.companyName,
  inLanguage: 'en-US',
  publisher: { '@id': organizationId },
}
