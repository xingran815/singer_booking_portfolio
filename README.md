# Singer Booking Website

A modern, scalable Next.js 14 website for professional singers to showcase their work and accept bookings.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom reusable components
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **WhatsApp Integration**: One-click booking via WhatsApp
- **Contact Forms**: Server-side form handling with validation
- **Performance**: Optimized images, code splitting, caching
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## Folder Structure

```
singer-booking-website/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI primitives
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── forms/             # Form components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities & constants
├── types/                 # TypeScript definitions
├── public/                # Static assets
├── config/                # App configuration
└── styles/                # Additional styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd singer-booking-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Site Settings

Edit `lib/constants/site-config.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Professional Singer & Vocalist',
  description: 'Your description here...',
  url: 'https://yourdomain.com',
  email: 'booking@yourdomain.com',
  phone: '+1 (234) 567-890',
  location: 'Your City, State',
}
```

### WhatsApp Integration

Edit `lib/constants/social-links.ts`:

```typescript
export const WHATSAPP_CONFIG = {
  PHONE_NUMBER: '1234567890', // Your WhatsApp number
  DEFAULT_MESSAGE: 'Your default message...',
}
```

### Email Integration

For production, integrate with an email service in `app/api/contact/route.ts`:

```typescript
// Example with Resend
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
```

## Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your brand colors
  },
  accent: {
    gold: '#d4af37',
  },
}
```

### Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

## Pages

- `/` - Homepage with hero, services, media, testimonials, CTA
- `/about/` - About page with bio and journey
- `/gallery/` - Photo and video gallery
- `/testimonials/` - Client reviews
- `/contact/` - Contact forms and booking

## API Routes

- `POST /api/contact` - Contact form submission
- `POST /api/booking` - Booking form submission

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder

## License

MIT License - feel free to use for personal or commercial projects.

## Support

For questions or issues, please open an issue on GitHub or contact via email.
