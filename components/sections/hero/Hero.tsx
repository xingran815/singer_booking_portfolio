'use client'

import Link from 'next/link'
import { ChevronDown, Play } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { Button } from '@/components/ui/button/Button'
import { useWhatsApp } from '@/hooks/use-whatsapp'
import { SITE_CONFIG } from '@/lib/constants/site-config'

interface HeroProps {
  className?: string
}

function Hero({ className }: HeroProps) {
  const { openBooking } = useWhatsApp()

  const scrollToContent = () => {
    const element = document.getElementById('trust-signals')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/hero-background.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Now Booking for 2024-2025
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            {SITE_CONFIG.name}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {SITE_CONFIG.title}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Creating unforgettable musical moments for weddings, corporate events, 
            and private celebrations. Professional vocals that touch hearts and elevate every occasion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => openBooking()}
              className="group"
            >
              Book Now
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <Link href="/gallery/">
                <Play className="mr-2 w-5 h-5" />
                Watch Performance
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '500+', label: 'Events' },
              { value: '10+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

export { Hero }
export type { HeroProps }
