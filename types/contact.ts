export interface ContactMessage {
  id?: string
  name: string
  email: string
  phone?: string
  message: string
  createdAt?: string
}

export interface ContactFormProps {
  onSubmit?: (data: ContactMessage) => void | Promise<void>
  onSuccess?: () => void
  className?: string
}
