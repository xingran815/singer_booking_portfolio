'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to detect media query matches
 * @param query - CSS media query string
 * @returns boolean indicating if media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    
    const updateMatch = () => setMatches(media.matches)
    updateMatch()
    
    media.addEventListener('change', updateMatch)
    return () => media.removeEventListener('change', updateMatch)
  }, [query])

  return matches
}

/**
 * Hook to detect if device is mobile
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)')
}

/**
 * Hook to detect if device is tablet
 */
export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
}

/**
 * Hook to detect if device is desktop
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1025px)')
}
