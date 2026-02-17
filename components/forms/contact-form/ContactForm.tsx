'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { Textarea } from '@/components/ui/textarea/Textarea'
import { contactFormSchema, ContactFormData } from '@/lib/utils/validators'

interface ContactFormProps {
  onSuccess?: () => void
  className?: string
}

function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact/', {
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
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Failed to send message. Please try again or contact via WhatsApp.')
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

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
      
      <Input
        label="Phone Number (Optional)"
        type="tel"
        placeholder="+1 (234) 567-890"
        error={errors.phone?.message}
        {...register('phone')}
      />
      
      <Textarea
        label="Your Message"
        placeholder="Tell me about your event and how I can help..."
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
        <Send className="mr-2 w-5 h-5" />
        Send Message
      </Button>
    </form>
  )
}

export { ContactForm }
export type { ContactFormProps }
