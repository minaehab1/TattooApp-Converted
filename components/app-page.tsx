'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Home, CalendarDays, Star, Calculator, ShoppingCart } from 'lucide-react'

export function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* User Profile */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold">Hi, Jodie</h2>
        <p className="text-sm text-gray-600">You have 13,000 points</p>
        <div className="flex space-x-2 mt-2">
          <Button variant="outline" size="sm" className="bg-gray-100 text-black">Redeem</Button>
          <Button size="sm" className="bg-blue-600 text-white">Invite</Button>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <Card>
          <CardContent className="p-0">
            <Link href="/booking" className="flex justify-between items-center p-4 hover:bg-gray-100">
              <div>
                <p className="font-medium">Book a tattoo</p>
                <p className="text-sm text-gray-600">Or a consultation. Use your rewards to pay</p>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="/gallery" className="flex justify-between items-center p-4 hover:bg-gray-100 border-t">
              <div>
                <p className="font-medium">Access gallery</p>
                <p className="text-sm text-gray-600">Check out our latest works and collections</p>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Booking Status */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Booking Status</h3>
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <p className="font-medium">Upcoming Appointment</p>
              <p className="text-sm text-gray-600">Date: Nov 15, 2023</p>
              <p className="text-sm text-gray-600">Artist: Alex Carter</p>
              <Button variant="outline" size="sm" className="mt-2 text-blue-600 border-blue-600">Cancel</Button>
            </div>
            <div>
              <p className="font-medium">Upcoming Appointment</p>
              <p className="text-sm text-gray-600">Date: Dec 10, 2023</p>
              <p className="text-sm text-gray-600">Artist: Jamie Lee</p>
              <Button variant="outline" size="sm" className="mt-2 text-blue-600 border-blue-600">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gallery */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Gallery</h3>
        <div className="relative">
          <Image
            src={galleryImages[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            width={400}
            height={300}
            className="rounded-lg"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Promotions */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Promotions</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <Card className="w-48 flex-shrink-0">
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Flash Sale"
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="font-medium">Flash Sale: Up to 70% off</p>
            </CardContent>
          </Card>
          <Card className="w-48 flex-shrink-0">
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="New Designs"
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="font-medium">New Designs: 2023 Collection</p>
            </CardContent>
          </Card>
          <Card className="w-48 flex-shrink-0">
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Limited Edition"
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="font-medium">Limited Edition: Zodiac Series</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* News & Events */}
      <div>
        <h3 className="text-lg font-semibold mb-2">News & Events</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <Card className="w-48 flex-shrink-0">
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Flash Sale"
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="font-medium">Flash Sale: Up to 70% off</p>
            </CardContent>
          </Card>
          <Card className="w-48 flex-shrink-0">
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="New Designs"
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="font-medium">New Designs: 2023 Collection</p>
            </CardContent>
          </Card>
          <Card className="w-48 flex-shrink-0">
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Limited Edition"
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="font-medium">Limited Edition: Zodiac Series</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around p-2">
          <Link href="/" className="flex flex-col items-center text-blue-600">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/booking" className="flex flex-col items-center text-gray-600">
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