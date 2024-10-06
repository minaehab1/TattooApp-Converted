'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, CalendarDays, Star, Calculator, ShoppingCart, Clock, User } from 'lucide-react'

export function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string>()
  const [specialRequests, setSpecialRequests] = useState('')
  const [bookingSummary, setBookingSummary] = useState({
    service: 'Custom Tattoo Design',
    date: '12/12/2023',
    time: '3:00 PM',
    customer: 'John Doe'
  })

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking submitted:', { date, timeSlot, specialRequests })
    // Update booking summary
    setBookingSummary({
      ...bookingSummary,
      date: date ? format(date, 'MM/dd/yyyy') : '',
      time: timeSlot || ''
    })
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Booking</h1>
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      {/* Booking Instructions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Booking Instructions</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Select a service from the list.</li>
          <li>Choose your preferred artist.</li>
          <li>Pick an available date and time slot.</li>
          <li>Confirm your booking details.</li>
        </ol>
      </div>

      {/* Appointment Form */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Appointment Form</h2>
        <p className="text-sm text-gray-600 mb-4">Choose a date and time that works for you</p>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        <div className="mt-4 space-y-4">
          <Select onValueChange={setTimeSlot}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a time slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">09:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="14:00">02:00 PM</SelectItem>
              <SelectItem value="16:00">04:00 PM</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Any special requests..."
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleBooking}>
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Booking Summary */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Booking Summary</h2>
        <div className="space-y-1">
          <p><strong>Service:</strong> {bookingSummary.service}</p>
          <p><strong>Date:</strong> {bookingSummary.date}</p>
          <p><strong>Time:</strong> {bookingSummary.time}</p>
          <p><strong>Customer:</strong> {bookingSummary.customer}</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around p-2">
          <Link href="/" className="flex flex-col items-center text-gray-600">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/booking" className="flex flex-col items-center text-blue-600">
            <CalendarDays className="h-5 w-5" />
            <span className="text-xs">Booking</span>
          </Link>
          <Link href="/rewards" className="flex flex-col items-center text-gray-600">
            <Star className="h-5 w-5" />
            <span className="text-xs">Rewards</span>
          </Link>
          <Link href="/calculator" className="flex flex-col items-center text-gray-600">
            <Calculator className="h-5 w-5" />
            <span className="text-xs">Price Calc</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center text-gray-600">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  )
}