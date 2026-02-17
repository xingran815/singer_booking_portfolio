'use client'

import { Music, Heart, Building2, Users, PartyPopper, Mic2 } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card/Card'

interface ServicesProps {
  className?: string
}

const services = [
  {
    icon: Heart,
    title: 'Wedding Ceremonies',
    description: 'Make your special day unforgettable with romantic ballads and celebratory songs that capture the magic of your love story.',
    features: ['Ceremony music', 'First dance', 'Reception entertainment'],
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Elevate your company gatherings with professional performances that impress clients and motivate teams.',
    features: ['Galas & dinners', 'Product launches', 'Holiday parties'],
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description: 'Transform your celebration into an extraordinary experience with customized playlists and engaging performances.',
    features: ['Birthdays', 'Anniversaries', 'Milestone events'],
  },
  {
    icon: Mic2,
    title: 'Concerts & Festivals',
    description: 'Bring energy and emotion to large-scale events with powerful vocals and captivating stage presence.',
    features: ['Opening acts', 'Headline performances', 'Festival appearances'],
  },
  {
    icon: Users,
    title: 'Studio Sessions',
    description: 'Professional vocal recordings for your projects, from demos to full album productions.',
    features: ['Backing vocals', 'Lead recordings', 'Harmony arrangements'],
  },
  {
    icon: Music,
    title: 'Custom Requests',
    description: 'Have something specific in mind? Let\'s discuss your unique vision and create a tailored experience.',
    features: ['Song learning', 'Custom arrangements', 'Special requests'],
  },
]

function Services({ className }: ServicesProps) {
  return (
    <SectionWrapper id="services" className={className}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Performance Services
          </h2>
          <p className="text-lg text-gray-600">
            From intimate gatherings to grand celebrations, I bring passion and professionalism 
            to every performance. Choose the perfect package for your event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
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
export type { ServicesProps }
