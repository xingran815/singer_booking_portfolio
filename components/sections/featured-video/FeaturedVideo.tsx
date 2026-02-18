'use client'

import { useState } from 'react'
import { Play, Volume2 } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'

interface FeaturedVideoProps {
  className?: string
}

function FeaturedVideo({ className }: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <SectionWrapper className={className}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Featured
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See the Experience Live
          </h2>
          <p className="text-lg text-gray-600">
            Watch a highlight from a recent performance and get a taste of what your event could feel like.
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-900"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/gallery/wedding-performance.jpg)',
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-sm">Featured Performance Highlight</span>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-semibold mt-1">
                    Wedding First Dance — "At Last" by Etta James
                  </h3>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                  3:45
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <p className="text-white/60 text-lg">
                  Video player placeholder — embed your video here
                </p>
              </div>
            )}
          </div>

          {/* Supporting Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-center">
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">Live performance recording</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
            <div className="text-sm text-gray-500">
              High-quality audio & video
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
            <div className="text-sm text-gray-500">
              Filmed at a private venue
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { FeaturedVideo }
export type { FeaturedVideoProps }
