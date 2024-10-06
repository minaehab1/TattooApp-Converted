'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Home, CalendarDays, Star, Calculator, ShoppingCart, ChevronDown, Tag } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'

const PriceCalculatorPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const [selectedItems, setSelectedItems] = useState(['Item 01', 'Item 02', 'Item 03'])
  const [detailLevel, setDetailLevel] = useState('Low')
  const [height, setHeight] = useState<number[]>([50])
  const [width, setWidth] = useState<number[]>([50])
  const [discountCode, setDiscountCode] = useState('')
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleItemToggle = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const handleDetailLevelChange = (level: string) => {
    setDetailLevel(level)
  }

  const handleApplyDiscount = () => {
    console.log('Applying discount:', discountCode)
    // Implement discount logic here
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Tattoo Price Calculator</h1>
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
            <CardTitle>Calculate Your Tattoo Price</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2">Style Selection</h2>
              <div className="relative">
                <button
                  className="w-full flex items-center justify-between p-3 border rounded-md bg-card"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex flex-wrap gap-1">
                    {selectedItems.map(item => (
                      <span key={item} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                        {item} ×
                      </span>
                    ))}
                  </div>
                  <ChevronDown className="h-5 w-5" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-card border rounded-md shadow-lg">
                    {['Item 01', 'Item 02', 'Item 03', 'Item 04'].map(item => (
                      <label key={item} className="flex items-center p-3 hover:bg-accent">
                        <Checkbox
                          checked={selectedItems.includes(item)}
                          onCheckedChange={() => handleItemToggle(item)}
                          className="mr-2"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Details Level</h2>
              <div className="flex space-x-2">
                {['Low', 'Medium', 'High'].map(level => (
                  <Button
                    key={level}
                    variant={detailLevel === level ? "default" : "outline"}
                    onClick={() => handleDetailLevelChange(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Size Specification</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="height">Height (cm): {height[0]} cm</Label>
                  <Slider
                    id="height"
                    min={1}
                    max={100}
                    step={1}
                    value={height}
                    onValueChange={setHeight}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="width">Width (cm): {width[0]} cm</Label>
                  <Slider
                    id="width"
                    min={1}
                    max={100}
                    step={1}
                    value={width}
                    onValueChange={setWidth}
                    className="mt-2"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Apply Discounts</h2>
              <div className="flex space-x-2">
                <div className="relative flex-grow">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button onClick={handleApplyDiscount}>Apply Discount</Button>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Estimate Summary</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Breakdown</span>
                  <Switch
                    checked={showBreakdown}
                    onCheckedChange={setShowBreakdown}
                  />
                </div>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>$200</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Discount:</span>
                    <span>$20</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>$180</span>
                  </div>
                  {showBreakdown && (
                    <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
                      <div>Total Hours: 5</div>
                      <div>Rate per Hour: $100</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>

            <div className="bg-destructive/10 border-l-4 border-destructive text-destructive p-4 rounded-md">
              <p className="flex items-center">
                <span className="mr-2">⚠️</span>
                Final pricing is provided after consulting with me for accuracy.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-200 shadow-lg z-50" aria-label="Bottom navigation">
        <div className="flex justify-around items-center p-3 max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center text-muted-foreground" aria-label="Home">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/booking" className="flex flex-col items-center text-muted-foreground" aria-label="Booking">
            <CalendarDays className="h-6 w-6" />
            <span className="text-xs mt-1">Booking</span>
          </Link>
          <Link href="/rewards" className="flex flex-col items-center text-muted-foreground" aria-label="Rewards">
            <Star className="h-6 w-6" />
            <span className="text-xs mt-1">Rewards</span>
          </Link>
          <Link href="/price-calculator" className="flex flex-col items-center text-primary" aria-label="Price Calculator" aria-current="page">
            <Calculator className="h-6 w-6" />
            <span className="text-xs mt-1">Price Calc</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center text-muted-foreground" aria-label="Shopping Cart">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
export default PriceCalculatorPage
