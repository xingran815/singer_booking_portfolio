'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import type { TestimonialsSectionProps } from '@/types/sections'

function Testimonials({
  badge,
  heading,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  if (!current) return null

  return (
    <SectionWrapper className={className}>
      <Container size="md">
        {/* Section Header */}
        <div className="text-center mb-12">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              {badge}
            </span>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
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
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                &ldquo;{current.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{current.name}</p>
                  <p className="text-sm text-gray-500">{current.role}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs">
                    {current.event}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
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
          )}
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { Testimonials }
export type { TestimonialsSectionProps }
