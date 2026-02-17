import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/site'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { Star } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(
  'Testimonials',
  'Read what past clients say about their experience. Real reviews from weddings, corporate events, and private celebrations.',
  '/testimonials/'
)

const testimonials = [
  {
    name: 'Sarah & Michael Johnson',
    role: 'Wedding Clients',
    rating: 5,
    text: 'Absolutely incredible! Our wedding ceremony was transformed by the beautiful vocals. Every guest commented on how moving the performance was.',
    event: 'Wedding Ceremony',
  },
  {
    name: 'David Chen',
    role: 'Event Director, TechCorp',
    rating: 5,
    text: 'Professional, punctual, and phenomenally talented. Our annual gala was elevated to a whole new level. The audience was captivated.',
    event: 'Corporate Gala',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Private Party Host',
    rating: 5,
    text: 'Booked for my 50th birthday party and it was the best decision! The energy was amazing, song selection perfect, and everyone danced all night.',
    event: 'Birthday Celebration',
  },
  {
    name: 'James & Lisa Thompson',
    role: 'Anniversary Celebration',
    rating: 5,
    text: 'For our 25th anniversary, we wanted something special. The personalized song choices and emotional delivery made it unforgettable.',
    event: 'Anniversary Party',
  },
  {
    name: 'Michelle Park',
    role: 'Wedding Planner',
    rating: 5,
    text: 'I recommend this singer to all my clients. Reliable, talented, and always delivers an exceptional performance. A true professional.',
    event: 'Multiple Weddings',
  },
  {
    name: 'Robert Williams',
    role: 'CEO, Startup Inc.',
    rating: 5,
    text: 'Our company launch event needed something special. The performance exceeded all expectations and left a lasting impression on our investors.',
    event: 'Product Launch',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper spacing="lg" className="pt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Reviews
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h1>
            <p className="text-lg text-gray-600">
              Don't just take my word for it. Here's what past clients have to say 
              about their experience working together.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Testimonials Grid */}
      <SectionWrapper background="gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-primary-50 text-primary-700 text-xs">
                    {testimonial.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
