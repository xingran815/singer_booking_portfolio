import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/site'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'

export const metadata: Metadata = generatePageMetadata(
  'Gallery',
  'Browse photos and videos from past performances. See the energy and emotion of live music at weddings, corporate events, and concerts.',
  '/gallery/'
)

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper spacing="lg" className="pt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Performance Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Browse through photos and videos from past performances. 
              Experience the energy and emotion of live music.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Gallery Grid Placeholder */}
      <SectionWrapper background="gray" spacing="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Wedding Ceremony', category: 'Wedding' },
              { title: 'Corporate Gala', category: 'Corporate' },
              { title: 'Private Party', category: 'Private Event' },
              { title: 'Concert Performance', category: 'Concert' },
              { title: 'Studio Session', category: 'Studio' },
              { title: 'Festival Stage', category: 'Festival' },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="font-medium text-gray-700">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
