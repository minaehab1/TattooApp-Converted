import { Metadata } from 'next'
import BookingPage from '@/components/BookingPage'
import { Toaster } from 'react-hot-toast'
import { Navigation } from '@/app/components/Navigation'

export const metadata: Metadata = {
  title: 'Booking | Your Tattoo App',
  description: 'Book your tattoo appointment',
}

export default function Page() {
  return (
    <>
      <BookingPage />
      <Toaster position="bottom-center" />
      <Navigation />
    </>
  )
}