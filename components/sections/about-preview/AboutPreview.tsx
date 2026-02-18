'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Music, Mic2, Heart } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { SITE_CONFIG } from '@/lib/constants/site-config'

interface AboutPreviewProps {
  className?: string
}

const highlights = [
  {
    icon: Music,
    title: 'Versatile Repertoire',
    description: 'From jazz standards to contemporary hits, curated for your event.',
  },
  {
    icon: Mic2,
    title: 'Professional Training',
    description: 'Classically trained with years of live performance experience.',
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Every performance is tailored to make your moment truly special.',
  },
]

function AboutPreview({ className }: AboutPreviewProps) {
  return (
    <SectionWrapper background="gray" className={className}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero/hero-background.jpg"
                alt={`${SITE_CONFIG.name} performing live`}
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-lg p-4 md:p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Music className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">500+ Events</p>
                  <p className="text-xs text-gray-500">and counting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Voice Behind the Music
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              With over a decade of experience performing at events across the country, 
              I bring passion, professionalism, and a personal touch to every occasion.
            </p>
            <p className="text-gray-600 mb-8">
              Whether it's an intimate wedding ceremony or a grand corporate gala, I believe 
              every event deserves a soundtrack that moves hearts and creates lasting memories. 
              My goal is to connect with your audience and make your celebration truly unforgettable.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about/"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 px-8 py-4 text-lg"
            >
              Learn More About Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { AboutPreview }
export type { AboutPreviewProps }
