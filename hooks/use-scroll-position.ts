'use client'

import { useState, useEffect } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

/**
 * Hook to track window scroll position
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

/**
 * Hook to detect if page has been scrolled past a threshold
 */
export function useScrolled(threshold: number = 50): boolean {
  const { y } = useScrollPosition()
  return y > threshold
}
