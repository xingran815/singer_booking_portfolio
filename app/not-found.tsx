import { Music, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button/Button'
import { Container } from '@/components/layout/container/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container size="sm">
        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
            <Music className="w-10 h-10 text-primary-600" />
          </div>
          
          {/* Status Code */}
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-gray-900 mb-2">
            404
          </h1>
          
          {/* Title */}
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or never existed.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="primary">
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact/">Contact Support</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
