import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants/site-config'

/**
 * Default metadata for the site
 * Extend or override in individual pages
 */
export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'singer',
    'vocalist',
    'wedding singer',
    'corporate entertainment',
    'live performance',
    'event singer',
    'private party singer',
    'booking',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Professional Singer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here
    // google: 'your-google-verification-code',
  },
}

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  return {
    title,
    description: description || SITE_CONFIG.description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description: description || SITE_CONFIG.description,
      url: path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url,
    },
  }
}
