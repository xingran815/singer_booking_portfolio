import { WHATSAPP_CONFIG } from '@/lib/constants/social-links'

interface WhatsAppBookingParams {
  name?: string
  eventType?: string
  eventDate?: string
  message?: string
}

/**
 * Generate WhatsApp booking link with pre-filled message
 */
export function generateWhatsAppLink(params: WhatsAppBookingParams = {}): string {
  const { name, eventType, eventDate, message } = params
  
  let text = WHATSAPP_CONFIG.DEFAULT_MESSAGE
  
  if (name || eventType || eventDate || message) {
    const parts: string[] = ['Hi! I\'m interested in booking you for an event.']
    
    if (name) parts.push(`My name is ${name}.`)
    if (eventType) parts.push(`Event type: ${eventType}.`)
    if (eventDate) parts.push(`Date: ${eventDate}.`)
    if (message) parts.push(`Additional details: ${message}`)
    
    text = parts.join(' ')
  }
  
  const encodedText = encodeURIComponent(text)
  return `https://wa.me/${WHATSAPP_CONFIG.PHONE_NUMBER}?text=${encodedText}`
}

/**
 * Open WhatsApp in new window
 */
export function openWhatsApp(params: WhatsAppBookingParams = {}): void {
  if (typeof window !== 'undefined') {
    window.open(generateWhatsAppLink(params), '_blank', 'noopener,noreferrer')
  }
}
