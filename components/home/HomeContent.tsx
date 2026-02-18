'use client'

import { Hero } from '@/components/sections/hero/Hero'
import { TrustSignals } from '@/components/sections/trust-signals/TrustSignals'
import { FeaturedVideo } from '@/components/sections/featured-video/FeaturedVideo'
import { AboutPreview } from '@/components/sections/about-preview/AboutPreview'
import { Services } from '@/components/sections/services/Services'
import { Testimonials } from '@/components/sections/testimonials/Testimonials'
import { BookingCTA } from '@/components/sections/booking-cta/BookingCTA'
import {
  heroData,
  trustData,
  videoData,
  aboutPreviewData,
  eventTypesData,
  testimonialsData,
  bookingCTAData,
} from '@/lib/data/homepage'

export function HomeContent() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero {...heroData} />

      {/* 2. Trust Signals */}
      <TrustSignals {...trustData} />

      {/* 3. Featured Performance Video */}
      <FeaturedVideo {...videoData} />

      {/* 4. About Preview */}
      <AboutPreview {...aboutPreviewData} />

      {/* 5. Event Types */}
      <Services {...eventTypesData} />

      {/* 6. Testimonials */}
      <Testimonials {...testimonialsData} />

      {/* 7. Strong Booking CTA */}
      <BookingCTA {...bookingCTAData} />
    </>
  )
}
