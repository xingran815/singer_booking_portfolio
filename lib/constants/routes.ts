export const ROUTES = {
  HOME: '/',
  ABOUT: '/about/',
  GALLERY: '/gallery/',
  TESTIMONIALS: '/testimonials/',
  CONTACT: '/contact/',
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = typeof ROUTES[RouteKey]

export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Gallery', href: ROUTES.GALLERY },
  { label: 'Testimonials', href: ROUTES.TESTIMONIALS },
  { label: 'Contact', href: ROUTES.CONTACT },
] as const
