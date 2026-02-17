'use client'

import { useCallback } from 'react'
import { generateWhatsAppLink, openWhatsApp } from '@/lib/whatsapp/booking-link'

interface UseWhatsAppOptions {
  onOpen?: () => void
}

interface WhatsAppBookingParams {
  name?: string
  eventType?: string
  eventDate?: string
  message?: string
}

/**
 * Hook for WhatsApp booking integration
 */
export function useWhatsApp(options: UseWhatsAppOptions = {}) {
  const { onOpen } = options

  const getBookingLink = useCallback((params: WhatsAppBookingParams = {}) => {
    return generateWhatsAppLink(params)
  }, [])

  const openBooking = useCallback((params: WhatsAppBookingParams = {}) => {
    openWhatsApp(params)
    onOpen?.()
  }, [onOpen])

  return {
    getBookingLink,
    openBooking,
  }
}
