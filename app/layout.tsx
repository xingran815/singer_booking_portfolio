import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { defaultMetadata } from '@/config/site'
import { Navbar } from '@/components/layout/navbar/Navbar'
import { Footer } from '@/components/layout/footer/Footer'
import './globals.css'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Metadata
export const metadata: Metadata = defaultMetadata

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#dc6b47" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Professional Singer & Vocalist',
              url: 'https://yourdomain.com',
              sameAs: [
                'https://instagram.com/yourhandle',
                'https://facebook.com/yourpage',
                'https://youtube.com/yourchannel',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Los Angeles',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              makesOffer: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Live Performance Services',
                  description: 'Professional singing services for weddings, corporate events, and private parties.',
                },
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
