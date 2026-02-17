'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { Button } from '@/components/ui/button/Button'

interface TestimonialsProps {
  className?: string
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    role: 'Wedding Clients',
    image: '/images/testimonials/couple-1.jpg',
    rating: 5,
    text: 'Absolutely incredible! Our wedding ceremony was transformed by the beautiful vocals. Every guest commented on how moving the performance was. Highly recommend for any special occasion!',
    event: 'Wedding Ceremony',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Event Director, TechCorp',
    image: '/images/testimonials/client-2.jpg',
    rating: 5,
    text: 'Professional, punctual, and phenomenally talented. Our annual gala was elevated to a whole new level. The audience was captivated from the first note to the last.',
    event: 'Corporate Gala',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Private Party Host',
    image: '/images/testimonials/client-3.jpg',
    rating: 5,
    text: 'Booked for my 50th birthday party and it was the best decision! The energy was amazing, song selection perfect, and everyone danced all night. Truly unforgettable!',
    event: 'Birthday Celebration',
  },
  {
    id: 4,
    name: 'James & Lisa Thompson',
    role: 'Anniversary Celebration',
    image: '/images/testimonials/couple-2.jpg',
    rating: 5,
    text: 'For our 25th anniversary, we wanted something special. The personalized song choices and emotional delivery made it a night we will never forget. Thank you!',
    event: 'Anniversary Party',
  },
]

function Testimonials({ className }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <SectionWrapper className={className}>
      <Container size="md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what past clients have to say 
            about their experience.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 md:left-12">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
                  <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs">
                    {currentTestimonial.event}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-colors',
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { Testimonials }
export type { TestimonialsProps }
