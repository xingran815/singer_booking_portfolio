'use client'

import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import type { TrustSectionProps } from '@/types/sections'

function TrustSignals({
  stats,
  brands,
  brandsLabel = 'Trusted by leading brands & venues',
  id,
  className,
}: TrustSectionProps) {
  return (
    <section
      id={id}
      className={cn('py-12 md:py-16 bg-gray-50 border-y border-gray-100', className)}
    >
      <Container>
        {/* Stats Row */}
        <div
          className={cn(
            'grid gap-8',
            brands.length > 0 && 'mb-12',
            stats.length <= 2 && 'grid-cols-2',
            stats.length === 3 && 'grid-cols-3',
            stats.length >= 4 && 'grid-cols-2 md:grid-cols-4'
          )}
        >
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
        {brands.length > 0 && (
          <div className="text-center">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-6">
              {brandsLabel}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

export { TrustSignals }
export type { TrustSectionProps }
