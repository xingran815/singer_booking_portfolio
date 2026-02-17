'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { Textarea } from '@/components/ui/textarea/Textarea'
import { Select } from '@/components/ui/select/Select'
import { bookingFormSchema, BookingFormData } from '@/lib/utils/validators'
import { EVENT_TYPES, BUDGET_RANGES } from '@/lib/constants/site-config'
import { formatDateForInput } from '@/lib/utils/format-date'

interface BookingFormProps {
  onSuccess?: () => void
  className?: string
}

function BookingForm({ onSuccess, className }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/booking/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        onSuccess?.()
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      console.error('Booking form error:', error)
      alert('Failed to submit booking. Please try again or contact via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Request Sent!</h3>
        <p className="text-gray-600">
          Thank you for your interest. I'll review your request and get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-6', className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Your Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (234) 567-890"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          label="Event Date"
          type="date"
          min={formatDateForInput(tomorrow)}
          error={errors.eventDate?.message}
          {...register('eventDate')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          label="Event Type"
          options={EVENT_TYPES.map(t => ({ value: t.value, label: t.label }))}
          placeholder="Select event type"
          error={errors.eventType?.message}
          {...register('eventType')}
        />
        <Select
          label="Budget Range (Optional)"
          options={BUDGET_RANGES.map(b => ({ value: b.value, label: b.label }))}
          placeholder="Select budget range"
          {...register('budget')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Venue/Location"
          placeholder="Event venue or address"
          {...register('venue')}
        />
        <Input
          label="Expected Guest Count"
          type="number"
          placeholder="e.g., 150"
          {...register('guestCount')}
        />
      </div>

      <Textarea
        label="Event Details"
        placeholder="Tell me more about your event, preferred music style, special requests, etc."
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
      >
        <Calendar className="mr-2 w-5 h-5" />
        Submit Booking Request
      </Button>
    </form>
  )
}

export { BookingForm }
export type { BookingFormProps }
