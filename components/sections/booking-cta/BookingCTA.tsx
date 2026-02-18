'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import type { BookingCTASectionProps } from '@/types/sections'

function BookingCTA({
  badge,
  heading,
  description,
  contactItems,
  primaryCTA,
  secondaryCTA,
  steps,
  responseTime,
  className,
}: BookingCTASectionProps) {
  return (
    <SectionWrapper background="primary" className={cn('text-white', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                {badge}
              </span>
            )}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {heading}
            </h2>
            <p className="text-lg text-white/80 mb-8">{description}</p>

            {/* Contact Info */}
            {contactItems.length > 0 && (
              <div className="space-y-4 mb-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA.href ? (
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-gold text-white hover:bg-yellow-600 focus:ring-yellow-500 px-8 py-4 text-lg"
                >
                  {primaryCTA.icon}
                  {primaryCTA.label}
                </a>
              ) : (
                <button className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-gold text-white hover:bg-yellow-600 focus:ring-yellow-500 px-8 py-4 text-lg">
                  {primaryCTA.icon}
                  {primaryCTA.label}
                </button>
              )}

              {secondaryCTA.href && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-primary-500 px-8 py-4 text-lg"
                >
                  {secondaryCTA.icon}
                  {secondaryCTA.label}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Content — Steps Card */}
          {steps.length > 0 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Quick Booking</h3>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-white/70 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {responseTime && (
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60 mb-2">Response Time</p>
                  <p className="font-medium">{responseTime}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { BookingCTA }
export type { BookingCTASectionProps }
