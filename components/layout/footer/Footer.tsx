'use client'

import Link from 'next/link'
import { Music, Instagram, Facebook, Youtube } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Container } from '../container/Container'
import { NAV_LINKS } from '@/lib/constants/routes'
import { SOCIAL_LINKS, WHATSAPP_CONFIG } from '@/lib/constants/social-links'
import { SITE_CONFIG } from '@/lib/constants/site-config'

interface FooterProps {
  className?: string
}

function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('bg-gray-900 text-white', className)}>
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary-600">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="font-display text-xl font-semibold">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional singer and vocalist bringing unforgettable performances to weddings, 
                corporate events, and private celebrations.
              </p>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  <span className="text-white">Email:</span>{' '}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <span className="text-white">Phone:</span>{' '}
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p>
                  <span className="text-white">Location:</span> {SITE_CONFIG.location}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_CONFIG.PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mt-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
export type { FooterProps }
