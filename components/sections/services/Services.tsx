'use client'

import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card/Card'
import type { EventTypesSectionProps } from '@/types/sections'

function Services({
  badge,
  heading,
  description,
  eventTypes,
  id,
  className,
}: EventTypesSectionProps) {
  return (
    <SectionWrapper id={id} className={className}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              {badge}
            </span>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        {/* Services Grid */}
        <div
          className={cn(
            'grid grid-cols-1 gap-6 lg:gap-8',
            eventTypes.length >= 3 && 'md:grid-cols-2 lg:grid-cols-3',
            eventTypes.length === 2 && 'md:grid-cols-2',
            eventTypes.length === 1 && 'max-w-lg mx-auto'
          )}
        >
          {eventTypes.map((service) => (
            <Card
              key={service.title}
              variant="outlined"
              className="group hover:shadow-xl hover:border-primary-200 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="group-hover:text-primary-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}

export { Services }
export type { EventTypesSectionProps }
