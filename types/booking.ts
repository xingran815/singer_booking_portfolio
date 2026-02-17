export interface BookingRequest {
  id?: string
  name: string
  email: string
  phone: string
  eventType: 'wedding' | 'corporate' | 'private' | 'concert' | 'other'
  eventDate: string
  venue?: string
  guestCount?: string
  budget?: string
  message: string
  status?: 'pending' | 'confirmed' | 'cancelled'
  createdAt?: string
}

export interface BookingFormProps {
  onSubmit?: (data: BookingRequest) => void | Promise<void>
  onSuccess?: () => void
  className?: string
}
