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
import { ChevronDown, Tag, CalendarDays } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'
import BottomNavbar from '@/components/BottomNavbar'
import * as SliderPrimitive from "@radix-ui/react-slider"

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
      <Card className="mb-6">
        <CardContent className="p-6 pt-8">
          <div className="flex items-center mb-4">
            <Avatar className="w-20 h-20 mr-4">
              <AvatarImage src="/profile-image.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">Tattoo Price Calculator</h2>
              <p className="text-base text-gray-600">Estimate the cost of your tattoo</p>
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
            <CardTitle className="text-xl font-semibold">Calculate Your Tattoo Price</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2">Style Selection</h2>
              <div className="relative">
                <button
                  className="w-full flex items-center justify-between p-3 border rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex flex-wrap gap-1">
                    {selectedItems.map(item => (
                      <span key={item} className="bg-[#607AFB]/10 text-[#607AFB] px-2 py-1 rounded-full text-sm">
                        {item} ×
                      </span>
                    ))}
                  </div>
                  <ChevronDown className="h-5 w-5 text-[#607AFB]" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                    {['Item 01', 'Item 02', 'Item 03', 'Item 04'].map(item => (
                      <label key={item} className="flex items-center p-3 hover:bg-[#607AFB]/10 cursor-pointer">
                        <Checkbox
                          checked={selectedItems.includes(item)}
                          onCheckedChange={() => handleItemToggle(item)}
                          className="mr-2 border-[#607AFB] data-[state=checked]:bg-[#607AFB] data-[state=checked]:text-white"
                        />
                        <span className="text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Details Level</h2>
              <div className="grid grid-cols-3 gap-2">
                {['Low', 'Medium', 'High'].map(level => (
                  <Button
                    key={level}
                    variant={detailLevel === level ? "default" : "outline"}
                    onClick={() => handleDetailLevelChange(level)}
                    className={`w-full py-3 ${
                      detailLevel === level 
                        ? "!bg-[#607AFB] !text-white hover:!bg-[#4c62c9]" 
                        : "!bg-gray-100 !text-gray-600 hover:!bg-gray-200"
                    }`}
                    style={{ 
                      borderRadius: '9999px', 
                      backgroundColor: detailLevel === level ? '#607AFB' : '#f3f4f6',
                      color: detailLevel === level ? 'white' : '#4b5563'
                    }}
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
                  <Label htmlFor="height" className="text-gray-600">Height (cm): {height[0]} cm</Label>
                  <SliderPrimitive.Root
                    id="height"
                    min={1}
                    max={100}
                    step={1}
                    value={height}
                    onValueChange={setHeight}
                    className="relative flex items-center select-none touch-none w-full h-5 mt-2"
                  >
                    <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-2">
                      <SliderPrimitive.Range className="absolute bg-[#607AFB] rounded-full h-full" />
                    </SliderPrimitive.Track>
                    <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-[#607AFB] rounded-full focus:outline-none focus-visible:ring focus-visible:ring-[#607AFB] focus-visible:ring-opacity-75" />
                  </SliderPrimitive.Root>
                </div>
                <div>
                  <Label htmlFor="width" className="text-gray-600">Width (cm): {width[0]} cm</Label>
                  <SliderPrimitive.Root
                    id="width"
                    min={1}
                    max={100}
                    step={1}
                    value={width}
                    onValueChange={setWidth}
                    className="relative flex items-center select-none touch-none w-full h-5 mt-2"
                  >
                    <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-2">
                      <SliderPrimitive.Range className="absolute bg-[#607AFB] rounded-full h-full" />
                    </SliderPrimitive.Track>
                    <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-[#607AFB] rounded-full focus:outline-none focus-visible:ring focus-visible:ring-[#607AFB] focus-visible:ring-opacity-75" />
                  </SliderPrimitive.Root>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Apply Discounts</h2>
              <div className="flex space-x-2">
                <div className="relative flex-grow">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="pl-10 bg-gray-100 border-0 py-3"
                    style={{ borderRadius: '9999px' }}
                  />
                </div>
                <Button 
                  onClick={handleApplyDiscount} 
                  className="!bg-[#607AFB] !text-white hover:!bg-[#4c62c9] px-8 py-3"
                  style={{ borderRadius: '9999px', backgroundColor: '#607AFB', color: 'white' }}
                >
                  Apply Discount
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Estimate Summary</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal:</span>
                    <span>$200</span>
                  </div>
                  <div className="flex justify-between mb-2 text-gray-600">
                    <span>Discount:</span>
                    <span>$20</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#607AFB]">
                    <span>Total:</span>
                    <span>$180</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div 
                      className="bg-gray-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
                      onClick={() => setShowBreakdown(!showBreakdown)}
                    >
                      <span className="text-sm font-medium text-gray-700">Show Price Breakdown</span>
                      <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform ${showBreakdown ? 'rotate-180' : ''}`} />
                    </div>
                    {showBreakdown && (
                      <div className="mt-4 text-sm text-gray-600">
                        <div>Total Hours: 5</div>
                        <div>Rate per Hour: $100</div>
                      </div>
                    )}
                  </div>
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
