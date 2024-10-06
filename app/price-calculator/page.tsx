'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, Tag } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'
import BottomNavbar from '@/components/BottomNavbar'

const PriceCalculatorPage = () => {
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
    <div className="bg-white min-h-screen p-6 pb-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Tattoo Price Calculator</h2>
          <p className="text-base text-gray-600">Estimate the cost of your tattoo</p>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="/profile-image.jpg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card>
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
                <Button onClick={handleApplyDiscount} className="bg-[#607AFB] text-white hover:bg-[#4c62c9]">Apply Discount</Button>
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

            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
              <p className="flex items-center">
                <span className="mr-2">⚠️</span>
                Final pricing is provided after consulting with me for accuracy.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <BottomNavbar activePage="/price-calculator" />
    </div>
  );
}

export default PriceCalculatorPage;