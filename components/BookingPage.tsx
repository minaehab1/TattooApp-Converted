'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays } from 'lucide-react'

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Booking</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow p-4"
      >
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Book Your Tattoo Appointment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2">Select Artist</h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose an artist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="artist1">John Doe</SelectItem>
                  <SelectItem value="artist2">Jane Smith</SelectItem>
                  <SelectItem value="artist3">Mike Johnson</SelectItem>
                </SelectContent>
              </Select>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Select Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Select Time</h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Tattoo Details</h2>
              <div className="space-y-4">
                <Input placeholder="Tattoo description" />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tattoo size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Additional notes" />
              </div>
            </section>

            <Button className="w-full bg-primary text-primary-foreground py-6 text-lg">
              Book Appointment
            </Button>
          </CardContent>
        </Card>

        <div className="bg-destructive/10 border-l-4 border-destructive text-destructive p-4 rounded-md mt-6">
          <p className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            Please arrive 15 minutes before your scheduled appointment time.
          </p>
        </div>
      </motion.div>
    </div>
  )
}