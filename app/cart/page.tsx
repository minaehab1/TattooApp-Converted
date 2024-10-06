'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Tag, ChevronDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'
import BottomNavbar from '@/components/BottomNavbar'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Custom Tattoo Design',
      size: 'Medium',
      color: 'Black',
      quantity: 1,
      price: 150,
      appointment: 'Nov 12, 3 PM',
    },
    {
      id: 2,
      name: 'Small Tattoo Session',
      session: '2 hours',
      color: 'Colorful',
      quantity: 1,
      price: 100,
      appointment: 'Nov 12, 3 PM',
    }
  ])

  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [showBreakdown, setShowBreakdown] = useState(false)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal - discount

  const handleApplyDiscount = () => {
    console.log('Applying discount:', promoCode)
    // Implement discount logic here
  }

  return (
    <div className="bg-white min-h-screen p-6 pb-24">
      <Card className="mb-6">
        <CardContent className="p-6 pt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Your Cart</h1>
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
            <CardTitle>Cart Items</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-2 border-b last:border-b-0">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">${item.price} | Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-600">Appointment: {item.appointment}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Promo Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleApplyDiscount} className="bg-[#607AFB] text-white hover:bg-[#4c62c9]">
                <Tag className="mr-2 h-4 w-4" /> Apply
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span>${(subtotal * 0.1).toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total:</span>
                <span>${(total + subtotal * 0.1).toFixed(2)}</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setShowBreakdown(!showBreakdown)}
            >
              {showBreakdown ? 'Hide' : 'Show'} Price Breakdown
              <ChevronDown className={`ml-2 h-4 w-4 transform ${showBreakdown ? 'rotate-180' : ''}`} />
            </Button>
            {showBreakdown && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">Detailed price breakdown:</p>
                {/* Add more detailed breakdown here */}
              </div>
            )}
          </CardContent>
        </Card>

        <Button className="w-full bg-[#607AFB] text-white hover:bg-[#4c62c9] py-6 text-lg">
          Proceed to Checkout
        </Button>

        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
          <p className="flex items-center">
            <span className="mr-2">⚠️</span>
            Final pricing is provided after consulting with the artist for accuracy.
          </p>
        </div>
      </motion.div>

      <BottomNavbar activePage="/cart" />
    </div>
  )
}