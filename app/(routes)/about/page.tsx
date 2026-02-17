import type { Metadata } from 'next'
import Image from 'next/image'
import { generatePageMetadata } from '@/config/site'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { Mic2, Award, Music, Heart } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(
  'About',
  'Learn about my journey as a professional singer, my experience, and what drives my passion for music.',
  '/about/'
)

const stats = [
  { icon: Mic2, value: '500+', label: 'Live Performances' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Music, value: '50+', label: 'Songs in Repertoire' },
  { icon: Heart, value: '100%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper spacing="xl" className="pt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/artist-portrait.jpg"
                alt="Your Name - Professional Singer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bringing Music to Life
              </h1>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Music has been my passion since I was young. What started as singing in local 
                  talent shows has grown into a fulfilling career performing at weddings, 
                  corporate events, and concerts across the country.
                </p>
                <p>
                  With over a decade of professional experience, I've developed a versatile 
                  repertoire spanning multiple genres—from romantic ballads perfect for wedding 
                  ceremonies to upbeat hits that get corporate crowds moving.
                </p>
                <p>
                  My approach is simple: every performance should be memorable. I work closely 
                  with each client to understand their vision, customize the playlist, and deliver 
                  a performance that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper background="gray" spacing="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Story Section */}
      <SectionWrapper>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Musical Journey
            </h2>
          </div>
          
          <div className="space-y-12">
            {[
              {
                year: '2014',
                title: 'The Beginning',
                description: 'Started performing at local venues and private events, building a reputation for powerful vocals and professional delivery.',
              },
              {
                year: '2017',
                title: 'First Major Wedding',
                description: 'Performed at a 300-guest wedding that opened doors to the luxury wedding market and established my presence in the industry.',
              },
              {
                year: '2020',
                title: 'Corporate Expansion',
                description: 'Expanded into corporate events, performing for Fortune 500 companies and building a diverse client portfolio.',
              },
              {
                year: '2024',
                title: 'Today',
                description: 'Now booking nationwide with a team of musicians, offering full entertainment packages for events of all sizes.',
              },
            ].map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-display text-2xl font-bold text-primary-600">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 rounded-full bg-primary-600 mt-2" />
                  {index < 3 && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
