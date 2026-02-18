'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { Button } from '@/components/ui/button/Button'
import type { HeroSectionProps } from '@/types/sections'

function Hero({
  name,
  title,
  description,
  badgeText,
  backgroundImage,
  stats,
  primaryCTA,
  secondaryCTA,
  phone,
  email,
  location,
  scrollTargetId,
  className,
}: HeroSectionProps) {
  const scrollToContent = () => {
    if (!scrollTargetId) return
    const element = document.getElementById(scrollTargetId)
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
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
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
              {badgeText}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            {name}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 animate-slide-up animation-delay-100">
            {title}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
            {primaryCTA.href ? (
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-gold text-white hover:bg-yellow-600 focus:ring-yellow-500 px-8 py-4 text-lg group"
              >
                {primaryCTA.icon}
                {primaryCTA.label}
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ) : (
              <Button
                variant="secondary"
                size="lg"
                className="group"
              >
                {primaryCTA.icon}
                {primaryCTA.label}
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            )}

            {secondaryCTA.href && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-primary-500 px-8 py-4 text-lg"
              >
                {secondaryCTA.icon}
                {secondaryCTA.label}
              </Link>
            )}
          </div>

          {/* Contact Info */}
          {(phone || email || location) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 animate-slide-up animation-delay-400">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{phone}</span>
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{email}</span>
                </a>
              )}
              {location && (
                <span className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{location}</span>
                </span>
              )}
            </div>
          )}

          {/* Stats */}
          {stats.length > 0 && (
            <div
              className={cn(
                'grid gap-8 mt-16 max-w-lg mx-auto animate-slide-up animation-delay-400',
                stats.length === 2 && 'grid-cols-2',
                stats.length === 3 && 'grid-cols-3',
                stats.length >= 4 && 'grid-cols-2 sm:grid-cols-4'
              )}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>

      {/* Scroll Indicator */}
      {scrollTargetId && (
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      )}
    </section>
  )
}

export { Hero }
export type { HeroSectionProps }
