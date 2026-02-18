import type { LucideIcon } from 'lucide-react'

/* -------------------------------------------------- */
/*  Shared primitives                                  */
/* -------------------------------------------------- */

/** A simple stat (number + label) shown in counters / trust bars. */
export interface StatItem {
  value: string
  label: string
}

/** A stat that also carries an icon (used in trust signals). */
export interface IconStatItem extends StatItem {
  icon: LucideIcon
}

/** Generic call-to-action descriptor. */
export interface CTAAction {
  label: string
  href?: string
  icon?: React.ReactNode
}

/** A highlight / feature bullet used in about-preview & service cards. */
export interface HighlightItem {
  icon: LucideIcon
  title: string
  description: string
}

/* -------------------------------------------------- */
/*  HeroSection                                        */
/* -------------------------------------------------- */

export interface HeroSectionProps {
  /** Artist / headline name. */
  name: string
  /** Sub-headline (e.g. "Professional Singer & Vocalist"). */
  title: string
  /** Longer description paragraph. */
  description: string
  /** Badge text shown above the headline. */
  badgeText: string
  /** URL for the full-bleed background image. */
  backgroundImage: string
  /** Mini stats displayed beneath the CTA buttons. */
  stats: StatItem[]
  /** Primary CTA button (typically "Book Now"). */
  primaryCTA: CTAAction
  /** Secondary CTA button (typically "Watch Performance"). */
  secondaryCTA: CTAAction
  /** Phone number (displayed + used for tel: link). */
  phone?: string
  /** Email address (displayed + used for mailto: link). */
  email?: string
  /** Location text (e.g. "Los Angeles, CA"). */
  location?: string
  /** Element id to scroll to when the down-chevron is clicked. */
  scrollTargetId?: string
  className?: string
}

/* -------------------------------------------------- */
/*  TrustSection                                       */
/* -------------------------------------------------- */

export interface TrustSectionProps {
  /** Metric cards shown in a row. */
  stats: IconStatItem[]
  /** Brand / venue names displayed in the "trusted by" bar. */
  brands: string[]
  /** Label above the brand list (e.g. "Trusted by leading brands"). */
  brandsLabel?: string
  id?: string
  className?: string
}

/* -------------------------------------------------- */
/*  VideoSection                                       */
/* -------------------------------------------------- */

export interface VideoSectionProps {
  /** Small badge / tag above heading. */
  badge?: string
  heading: string
  description: string
  /** Path to the video thumbnail image. */
  thumbnail: string
  /** Title displayed in the overlay. */
  videoTitle: string
  /** Subtitle displayed in the overlay. */
  videoSubtitle?: string
  /** Duration string shown as a badge (e.g. "3:45"). */
  duration?: string
  /** URL to the embeddable video (YouTube, Vimeo, etc.). */
  videoUrl?: string
  /** Small detail strings shown below the player. */
  details?: string[]
  className?: string
}

/* -------------------------------------------------- */
/*  AboutPreviewSection                                */
/* -------------------------------------------------- */

export interface AboutPreviewSectionProps {
  badge?: string
  heading: string
  /** One or more paragraphs of body text. */
  paragraphs: string[]
  /** Portrait / promo image displayed on the left. */
  image: {
    src: string
    alt: string
  }
  /** Optional floating accent card on the image. */
  floatingCard?: {
    icon: LucideIcon
    title: string
    subtitle: string
  }
  /** Feature highlights shown as an icon list. */
  highlights: HighlightItem[]
  /** CTA link (e.g. "Learn More About Me"). */
  cta: CTAAction
  className?: string
}

/* -------------------------------------------------- */
/*  EventTypesSection                                  */
/* -------------------------------------------------- */

export interface EventTypeItem {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export interface EventTypesSectionProps {
  badge?: string
  heading: string
  description: string
  eventTypes: EventTypeItem[]
  id?: string
  className?: string
}

/* -------------------------------------------------- */
/*  TestimonialsSection                                */
/* -------------------------------------------------- */

export interface TestimonialItem {
  id: number
  name: string
  role: string
  image: string
  rating: number
  text: string
  event: string
}

export interface TestimonialsSectionProps {
  badge?: string
  heading: string
  description: string
  testimonials: TestimonialItem[]
  className?: string
}

/* -------------------------------------------------- */
/*  BookingCTASection                                  */
/* -------------------------------------------------- */

export interface ContactInfoItem {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export interface BookingStep {
  title: string
  description: string
}

export interface BookingCTASectionProps {
  badge?: string
  heading: string
  description: string
  contactItems: ContactInfoItem[]
  /** Primary CTA (e.g. WhatsApp booking). */
  primaryCTA: CTAAction
  /** Secondary CTA (e.g. contact form link). */
  secondaryCTA: CTAAction
  /** Step-by-step booking flow shown on the right. */
  steps: BookingStep[]
  /** Text shown at the bottom of the steps card. */
  responseTime?: string
  className?: string
}
