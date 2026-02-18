import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/site'
import { Hero } from '@/components/sections/hero/Hero'
import { TrustSignals } from '@/components/sections/trust-signals/TrustSignals'
import { FeaturedVideo } from '@/components/sections/featured-video/FeaturedVideo'
import { AboutPreview } from '@/components/sections/about-preview/AboutPreview'
import { Services } from '@/components/sections/services/Services'
import { Testimonials } from '@/components/sections/testimonials/Testimonials'
import { BookingCTA } from '@/components/sections/booking-cta/BookingCTA'

// Page-specific metadata
export const metadata: Metadata = generatePageMetadata(
  'Professional Singer & Vocalist',
  'Book professional singer for weddings, corporate events, private parties, and concerts. Experience unforgettable live performances.',
  '/'
)

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Signals */}
      <TrustSignals />

      {/* 3. Featured Performance Video */}
      <FeaturedVideo />

      {/* 4. About Preview */}
      <AboutPreview />

      {/* 5. Event Types */}
      <Services />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Strong Booking CTA */}
      <BookingCTA />
    </>
  )
}
