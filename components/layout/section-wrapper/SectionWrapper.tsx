'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'primary' | 'dark' | 'transparent'
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, as: Component = 'section', spacing = 'lg', background = 'white', className, ...props }, ref) => {
    const spacings = {
      sm: 'py-8 md:py-12',
      md: 'py-12 md:py-16',
      lg: 'py-16 md:py-24',
      xl: 'py-20 md:py-32',
    }

    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      primary: 'bg-primary-600',
      dark: 'bg-gray-900',
      transparent: 'bg-transparent',
    }

    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          spacings[spacing],
          backgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

SectionWrapper.displayName = 'SectionWrapper'

export { SectionWrapper }
export type { SectionWrapperProps }
