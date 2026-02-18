import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/site'
import { HomeContent } from '@/components/home/HomeContent'

export const metadata: Metadata = generatePageMetadata(
  'Professional Singer & Vocalist',
  'Book professional singer for weddings, corporate events, private parties, and concerts. Experience unforgettable live performances.',
  '/'
)

export default function HomePage() {
  return <HomeContent />
}
