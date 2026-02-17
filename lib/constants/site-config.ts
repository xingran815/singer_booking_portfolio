export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Professional Singer & Vocalist',
  description: 'Book professional singer for weddings, corporate events, private parties, and concerts. Experience unforgettable live performances.',
  url: 'https://yourdomain.com',
  ogImage: '/images/og-image.jpg',
  email: 'booking@yourdomain.com',
  phone: '+1 (234) 567-890',
  location: 'Los Angeles, CA',
} as const

export const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'private', label: 'Private Party' },
  { value: 'concert', label: 'Concert / Festival' },
  { value: 'other', label: 'Other' },
] as const

export const BUDGET_RANGES = [
  { value: 'under-1000', label: 'Under $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-plus', label: '$10,000+' },
] as const
