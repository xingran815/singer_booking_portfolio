import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Booking form validation schema
 */
export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventType: z.enum(['wedding', 'corporate', 'private', 'concert', 'other']),
  eventDate: z.string().min(1, 'Please select an event date'),
  venue: z.string().optional(),
  guestCount: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, 'Please provide more details about your event'),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>
