import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { generatePageMetadata } from '@/config/site'
import { SITE_CONFIG } from '@/lib/constants/site-config'
import { WHATSAPP_CONFIG } from '@/lib/constants/social-links'
import { Container } from '@/components/layout/container/Container'
import { SectionWrapper } from '@/components/layout/section-wrapper/SectionWrapper'
import { ContactForm } from '@/components/forms/contact-form/ContactForm'
import { BookingForm } from '@/components/forms/booking-form/BookingForm'

export const metadata: Metadata = generatePageMetadata(
  'Contact',
  'Get in touch to book your event. Contact via WhatsApp, email, or fill out the booking form. Response within 24 hours.',
  '/contact/'
)

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper spacing="lg" className="pt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Discuss Your Event
            </h1>
            <p className="text-lg text-gray-600">
              Ready to make your event unforgettable? Reach out and let's discuss 
              how I can bring the perfect musical experience to your special occasion.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Contact Info Cards */}
      <SectionWrapper background="gray" spacing="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: SITE_CONFIG.phone,
                href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
              },
              {
                icon: Mail,
                label: 'Email',
                value: SITE_CONFIG.email,
                href: `mailto:${SITE_CONFIG.email}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: SITE_CONFIG.location,
                href: '#',
              },
              {
                icon: Clock,
                label: 'Response Time',
                value: 'Within 24 hours',
                href: '#',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <p className="font-medium text-gray-900">{item.value}</p>
              </a>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Forms Section */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Booking Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                Book Your Event
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below with your event details. I'll get back to you 
                within 24 hours to discuss availability and pricing.
              </p>
              <BookingForm />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                General Inquiry
              </h2>
              <p className="text-gray-600 mb-6">
                Have a question or just want to say hello? Use this form for general 
                inquiries and I'll respond as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* WhatsApp CTA */}
      <SectionWrapper background="primary" spacing="md">
        <Container>
          <div className="text-center text-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Prefer to Chat on WhatsApp?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Get a quick response by messaging directly on WhatsApp. Perfect for 
              urgent inquiries or quick questions.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_CONFIG.PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
