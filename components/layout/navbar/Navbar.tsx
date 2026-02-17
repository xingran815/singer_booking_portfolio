'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Music } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { NAV_LINKS } from '@/lib/constants/routes'
import { useScrolled } from '@/hooks/use-scroll-position'
import { Container } from '../container/Container'
import { Button } from '@/components/ui/button/Button'

interface NavbarProps {
  className?: string
}

function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled(50)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
        className
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              'p-2 rounded-lg transition-colors',
              isScrolled ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm'
            )}>
              <Music className={cn(
                'w-5 h-5 transition-colors',
                isScrolled ? 'text-white' : 'text-white'
              )} />
            </div>
            <span className={cn(
              'font-display text-xl font-semibold transition-colors',
              isScrolled ? 'text-gray-900' : 'text-white'
            )}>
              Your Name
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant={isScrolled ? 'primary' : 'secondary'}
              size="sm"
              asChild
            >
              <Link href="/contact/">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact/" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}

export { Navbar }
export type { NavbarProps }
