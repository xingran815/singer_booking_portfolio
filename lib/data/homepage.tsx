import {
  Calendar,
  Star,
  ThumbsUp,
  Users,
  Music,
  Heart,
  Building2,
  PartyPopper,
  Mic2,
  Phone,
  Mail,
  MapPin,
  Play,
} from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants/site-config'
import { generateWhatsAppLink } from '@/lib/whatsapp/booking-link'
import type {
  HeroSectionProps,
  TrustSectionProps,
  VideoSectionProps,
  AboutPreviewSectionProps,
  EventTypesSectionProps,
  TestimonialsSectionProps,
  BookingCTASectionProps,
} from '@/types/sections'

/* -------------------------------------------------- */
/*  1. Hero                                            */
/* -------------------------------------------------- */

export const heroData: HeroSectionProps = {
  name: SITE_CONFIG.name,
  title: SITE_CONFIG.title,
  description:
    'Creating unforgettable musical moments for weddings, corporate events, and private celebrations. Professional vocals that touch hearts and elevate every occasion.',
  badgeText: 'Now Booking for 2025-2026',
  backgroundImage: '/images/hero/hero-background.jpg',
  stats: [
    { value: '500+', label: 'Events' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction' },
  ],
  primaryCTA: {
    label: 'Book Now',
    href: generateWhatsAppLink(),
  },
  secondaryCTA: {
    label: 'Watch Performance',
    href: '/gallery/',
    icon: <Play className="mr-2 w-5 h-5" />,
  },
  phone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  location: SITE_CONFIG.location,
  scrollTargetId: 'trust-signals',
}

/* -------------------------------------------------- */
/*  2. Trust Signals                                   */
/* -------------------------------------------------- */

export const trustData: TrustSectionProps = {
  id: 'trust-signals',
  stats: [
    { icon: Calendar, value: '500+', label: 'Events Performed' },
    { icon: Star, value: '10+', label: 'Years Experience' },
    { icon: ThumbsUp, value: '100%', label: 'Client Satisfaction' },
    { icon: Users, value: '50K+', label: 'Audience Members' },
  ],
  brands: [
    'Hilton Hotels',
    'Four Seasons',
    'The Ritz-Carlton',
    'Marriott International',
    'Wynn Resorts',
  ],
  brandsLabel: 'Trusted by leading brands & venues',
}

/* -------------------------------------------------- */
/*  3. Featured Video                                  */
/* -------------------------------------------------- */

export const videoData: VideoSectionProps = {
  badge: 'Featured',
  heading: 'See the Experience Live',
  description:
    'Watch a highlight from a recent performance and get a taste of what your event could feel like.',
  thumbnail: '/images/gallery/wedding-performance.jpg',
  videoTitle: 'Wedding First Dance — "At Last" by Etta James',
  videoSubtitle: 'Featured Performance Highlight',
  duration: '3:45',
  details: [
    'Live performance recording',
    'High-quality audio & video',
    'Filmed at a private venue',
  ],
}

/* -------------------------------------------------- */
/*  4. About Preview                                   */
/* -------------------------------------------------- */

export const aboutPreviewData: AboutPreviewSectionProps = {
  badge: 'About Me',
  heading: 'The Voice Behind the Music',
  paragraphs: [
    'With over a decade of experience performing at events across the country, I bring passion, professionalism, and a personal touch to every occasion.',
    "Whether it's an intimate wedding ceremony or a grand corporate gala, I believe every event deserves a soundtrack that moves hearts and creates lasting memories. My goal is to connect with your audience and make your celebration truly unforgettable.",
  ],
  image: {
    src: '/images/hero/hero-background.jpg',
    alt: `${SITE_CONFIG.name} performing live`,
  },
  floatingCard: {
    icon: Music,
    title: '500+ Events',
    subtitle: 'and counting',
  },
  highlights: [
    {
      icon: Music,
      title: 'Versatile Repertoire',
      description: 'From jazz standards to contemporary hits, curated for your event.',
    },
    {
      icon: Mic2,
      title: 'Professional Training',
      description: 'Classically trained with years of live performance experience.',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Every performance is tailored to make your moment truly special.',
    },
  ],
  cta: {
    label: 'Learn More About Me',
    href: '/about/',
  },
}

/* -------------------------------------------------- */
/*  5. Event Types                                     */
/* -------------------------------------------------- */

export const eventTypesData: EventTypesSectionProps = {
  id: 'services',
  badge: 'Services',
  heading: 'Performance Services',
  description:
    'From intimate gatherings to grand celebrations, I bring passion and professionalism to every performance. Choose the perfect package for your event.',
  eventTypes: [
    {
      icon: Heart,
      title: 'Wedding Ceremonies',
      description:
        'Make your special day unforgettable with romantic ballads and celebratory songs that capture the magic of your love story.',
      features: ['Ceremony music', 'First dance', 'Reception entertainment'],
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description:
        'Elevate your company gatherings with professional performances that impress clients and motivate teams.',
      features: ['Galas & dinners', 'Product launches', 'Holiday parties'],
    },
    {
      icon: PartyPopper,
      title: 'Private Parties',
      description:
        'Transform your celebration into an extraordinary experience with customized playlists and engaging performances.',
      features: ['Birthdays', 'Anniversaries', 'Milestone events'],
    },
    {
      icon: Mic2,
      title: 'Concerts & Festivals',
      description:
        'Bring energy and emotion to large-scale events with powerful vocals and captivating stage presence.',
      features: ['Opening acts', 'Headline performances', 'Festival appearances'],
    },
    {
      icon: Users,
      title: 'Studio Sessions',
      description:
        'Professional vocal recordings for your projects, from demos to full album productions.',
      features: ['Backing vocals', 'Lead recordings', 'Harmony arrangements'],
    },
    {
      icon: Music,
      title: 'Custom Requests',
      description:
        "Have something specific in mind? Let's discuss your unique vision and create a tailored experience.",
      features: ['Song learning', 'Custom arrangements', 'Special requests'],
    },
  ],
}

/* -------------------------------------------------- */
/*  6. Testimonials                                    */
/* -------------------------------------------------- */

export const testimonialsData: TestimonialsSectionProps = {
  badge: 'Testimonials',
  heading: 'What Clients Say',
  description:
    "Don't just take my word for it. Here's what past clients have to say about their experience.",
  testimonials: [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Clients',
      image: '/images/testimonials/couple-1.jpg',
      rating: 5,
      text: 'Absolutely incredible! Our wedding ceremony was transformed by the beautiful vocals. Every guest commented on how moving the performance was. Highly recommend for any special occasion!',
      event: 'Wedding Ceremony',
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Event Director, TechCorp',
      image: '/images/testimonials/client-2.jpg',
      rating: 5,
      text: 'Professional, punctual, and phenomenally talented. Our annual gala was elevated to a whole new level. The audience was captivated from the first note to the last.',
      event: 'Corporate Gala',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Private Party Host',
      image: '/images/testimonials/client-3.jpg',
      rating: 5,
      text: 'Booked for my 50th birthday party and it was the best decision! The energy was amazing, song selection perfect, and everyone danced all night. Truly unforgettable!',
      event: 'Birthday Celebration',
    },
    {
      id: 4,
      name: 'James & Lisa Thompson',
      role: 'Anniversary Celebration',
      image: '/images/testimonials/couple-2.jpg',
      rating: 5,
      text: 'For our 25th anniversary, we wanted something special. The personalized song choices and emotional delivery made it a night we will never forget. Thank you!',
      event: 'Anniversary Party',
    },
  ],
}

/* -------------------------------------------------- */
/*  7. Booking CTA                                     */
/* -------------------------------------------------- */

export const bookingCTAData: BookingCTASectionProps = {
  badge: 'Book Your Date',
  heading: 'Ready to Make Your Event Unforgettable?',
  description:
    "Let's discuss how I can bring the perfect musical experience to your special occasion. Dates fill up quickly, so reach out early to secure your booking.",
  contactItems: [
    {
      icon: Phone,
      label: 'Phone',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: SITE_CONFIG.location,
    },
  ],
  primaryCTA: {
    label: 'Book via WhatsApp',
    href: generateWhatsAppLink(),
    icon: (
      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  secondaryCTA: {
    label: 'Contact Form',
    href: '/contact/',
    icon: <Calendar className="mr-2 w-5 h-5" />,
  },
  steps: [
    {
      title: 'Reach Out',
      description: 'Contact via WhatsApp, email, or the contact form with your event details.',
    },
    {
      title: 'Discuss Details',
      description: "We'll discuss your vision, song preferences, and event requirements.",
    },
    {
      title: 'Confirm & Celebrate',
      description: 'Secure your date with a deposit and get ready for an amazing performance!',
    },
  ],
  responseTime: 'Usually within 24 hours',
}
