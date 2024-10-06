import { Metadata } from 'next'
import HomePage from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Tattoo Studio - Home',
  description: 'Welcome to our tattoo studio',
}

export default function Page() {
  return <HomePage />
}