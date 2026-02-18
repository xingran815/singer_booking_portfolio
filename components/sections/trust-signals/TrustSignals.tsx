'use client'

import { Star, Award, Calendar, Users, Music, ThumbsUp } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'

interface TrustSignalsProps {
  className?: string
}

const stats = [
  {
    icon: Calendar,
    value: '500+',
    label: 'Events Performed',
  },
  {
    icon: Star,
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: ThumbsUp,
    value: '100%',
    label: 'Client Satisfaction',
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Audience Members',
  },
]

const trustedBy = [
  'Hilton Hotels',
  'Four Seasons',
  'The Ritz-Carlton',
  'Marriott International',
  'Wynn Resorts',
]

function TrustSignals({ className }: TrustSignalsProps) {
  return (
    <section id="trust-signals" className={cn('py-12 md:py-16 bg-gray-50 border-y border-gray-100', className)}>
      <Container>
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-3 group-hover:bg-primary-600 transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-6">
            Trusted by leading brands & venues
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustedBy.map((brand) => (
              <span
                key={brand}
                className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { TrustSignals }
export type { TrustSignalsProps }
