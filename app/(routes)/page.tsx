import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/site'
import { Hero } from '@/components/sections/hero/Hero'
import { Services } from '@/components/sections/services/Services'
import { MediaShowcase } from '@/components/sections/media-showcase/MediaShowcase'
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
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Media Showcase Section */}
      <MediaShowcase />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Booking CTA Section */}
      <BookingCTA />
    </>
  )
}
