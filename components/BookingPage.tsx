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

// Add this custom CSS class at the top of your file or in a separate CSS file
const calendarStyles = `
  .custom-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #E5E7EB;
    color: #4B5563;
  }
  .custom-calendar .rdp-day_selected, 
  .custom-calendar .rdp-day_selected:hover {
    background-color: #607AFB !important;
    color: white !important;
  }
  .custom-calendar .rdp-day_today {
    font-weight: bold;
    color: #607AFB;
  }
  .custom-calendar .rdp-head_cell {
    color: #607AFB;
    font-weight: 600;
  }
`;

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-white min-h-screen p-6 pb-24">
      <Card className="mb-6 rounded-2xl">
        <CardContent className="p-6 pt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold" style={{ color: '#1F2937' }}>Booking</h1>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold" style={{ color: '#1F2937' }}>Book Your Tattoo Appointment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Select Artist</h2>
              <Select>
                <SelectTrigger className="w-full rounded-xl" style={{ backgroundColor: '#F3F4F6', border: 'none', color: '#4B5563' }}>
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
              <h2 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Select Date</h2>
              <style>{calendarStyles}</style>
              <div className="custom-calendar">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border"
                  classNames={{
                    day_selected: "bg-[#607AFB] text-white hover:bg-[#4c62c9]",
                    day_today: "text-[#607AFB] font-bold",
                  }}
                  styles={{
                    head_cell: {
                      width: '100%',
                      fontWeight: 600,
                      color: '#607AFB',
                    },
                    cell: {
                      width: '100%',
                    },
                    button: {
                      width: '100%',
                      borderRadius: '0.75rem',
                    },
                    nav_button: {
                      color: '#607AFB',
                    },
                    nav_button_previous: {
                      width: 'auto',
                    },
                    nav_button_next: {
                      width: 'auto',
                    },
                  }}
                />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Select Time</h2>
              <Select>
                <SelectTrigger className="w-full rounded-xl" style={{ backgroundColor: '#F3F4F6', border: 'none', color: '#4B5563' }}>
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
              <h2 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Tattoo Details</h2>
              <div className="space-y-4">
                <Input placeholder="Tattoo description" className="rounded-xl" style={{ backgroundColor: '#F3F4F6', border: 'none', color: '#4B5563' }} />
                <Select>
                  <SelectTrigger className="w-full rounded-xl" style={{ backgroundColor: '#F3F4F6', border: 'none', color: '#4B5563' }}>
                    <SelectValue placeholder="Tattoo size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Additional notes" className="rounded-xl" style={{ backgroundColor: '#F3F4F6', border: 'none', color: '#4B5563' }} />
              </div>
            </section>

            <Button 
              className="w-full py-6 text-lg rounded-full" 
              style={{ 
                backgroundColor: '#607AFB', 
                color: 'white',
                borderRadius: '9999px', // This ensures fully rounded corners
              }}
            >
              Book Appointment
            </Button>
          </CardContent>
        </Card>

        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-xl">
          <p className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            Please arrive 15 minutes before your scheduled appointment time.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
