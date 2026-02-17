import { NextRequest, NextResponse } from 'next/server'
import { ContactMessage } from '@/types/contact'

/**
 * POST handler for contact form submissions
 * In production, integrate with email service (SendGrid, Resend, etc.)
 */
export async function POST(request: NextRequest) {
  try {
    const body: ContactMessage = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Contact Form <noreply@yourdomain.com>',
    //   to: 'your-email@domain.com',
    //   subject: `New Contact Form Message from ${body.name}`,
    //   text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || 'N/A'}\n\nMessage:\n${body.message}`,
    // })

    // Log for development (remove in production)
    console.log('Contact form submission:', {
      ...body,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
