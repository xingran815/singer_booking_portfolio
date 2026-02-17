import { NextRequest, NextResponse } from 'next/server'
import { BookingRequest } from '@/types/booking'

/**
 * POST handler for booking form submissions
 * In production, integrate with email service and/or CRM
 */
export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'eventType', 'eventDate', 'message']
    const missingFields = requiredFields.filter(field => !body[field as keyof BookingRequest])

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service and/or CRM
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Booking Form <bookings@yourdomain.com>',
    //   to: 'your-email@domain.com',
    //   subject: `New Booking Request from ${body.name}`,
    //   text: generateBookingEmailText(body),
    // })

    // Log for development (remove in production)
    console.log('Booking form submission:', {
      ...body,
      id: `booking_${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'pending',
    })

    return NextResponse.json(
      { message: 'Booking request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}

/**
 * Generate formatted email text for booking requests
 */
function generateBookingEmailText(booking: BookingRequest): string {
  return `
New Booking Request

Contact Information:
- Name: ${booking.name}
- Email: ${booking.email}
- Phone: ${booking.phone}

Event Details:
- Type: ${booking.eventType}
- Date: ${booking.eventDate}
- Venue: ${booking.venue || 'Not specified'}
- Guest Count: ${booking.guestCount || 'Not specified'}
- Budget: ${booking.budget || 'Not specified'}

Message:
${booking.message}

---
Submitted at: ${new Date().toISOString()}
  `.trim()
}
