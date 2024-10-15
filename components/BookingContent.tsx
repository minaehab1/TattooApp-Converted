'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'
import BookingPage from '@/components/BookingPage'

const BookingContent = () => {
  return (
    <div className="bg-white min-h-screen p-6 pb-24">
      <Card className="mb-6">
        <CardContent className="p-6 pt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Tattoo Booking</h1>
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
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Book Your Tattoo Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingPage />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default BookingContent
