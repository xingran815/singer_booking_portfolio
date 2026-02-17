'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { Button } from '@/components/ui/button/Button'
import Link from 'next/link'

interface MediaShowcaseProps {
  className?: string
}

const mediaItems = [
  {
    type: 'video',
    title: 'Wedding First Dance',
    thumbnail: '/images/gallery/wedding-performance.jpg',
    duration: '3:45',
  },
  {
    type: 'video',
    title: 'Corporate Gala Performance',
    thumbnail: '/images/gallery/corporate-event.jpg',
    duration: '4:20',
  },
  {
    type: 'image',
    title: 'Live Concert',
    src: '/images/gallery/concert.jpg',
  },
  {
    type: 'image',
    title: 'Private Party',
    src: '/images/gallery/private-party.jpg',
  },
]

function MediaShowcase({ className }: MediaShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <SectionWrapper background="gray" className={className}>
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Performance Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Browse through videos and photos from past performances. 
              Experience the energy and emotion of live music.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/gallery/">
              View All Media
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                'relative group overflow-hidden rounded-xl cursor-pointer',
                index === 0 && 'sm:col-span-2 sm:row-span-2'
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Media */}
              <div className={cn(
                'relative overflow-hidden',
                index === 0 ? 'aspect-square sm:aspect-auto sm:h-full' : 'aspect-[4/3]'
              )}>
                <Image
                  src={item.type === 'video' ? item.thumbnail : item.src!}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300',
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                )} />

                {/* Play Button (for videos) */}
                {item.type === 'video' && (
                  <div className={cn(
                    'absolute inset-0 flex items-center justify-center transition-all duration-300',
                    hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  )}>
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:bg-white transition-colors">
                      <Play className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Duration Badge (for videos) */}
                {item.type === 'video' && item.duration && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
                    {item.duration}
                  </div>
                )}

                {/* Title */}
                <div className={cn(
                  'absolute bottom-0 left-0 right-0 p-4 transition-all duration-300',
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                )}>
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-white/70 text-sm capitalize">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audio Samples */}
        <div className="mt-12 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Listen to Audio Samples
              </h3>
              <p className="text-gray-600">
                Preview studio recordings and live performance clips
              </p>
            </div>
            <Button variant="primary" asChild>
              <Link href="/gallery/?tab=audio">
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                Browse Audio
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { MediaShowcase }
export type { MediaShowcaseProps }
