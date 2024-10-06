'use client'

import { useState } from 'react'

const PriceCalculator = () => {
  const [style, setStyle] = useState('')
  const [size, setSize] = useState('')
  const [details, setDetails] = useState('')
  const [price, setPrice] = useState(0)

  const calculatePrice = () => {
    // This is a simple calculation for demonstration
    // In a real app, you'd have more complex logic or API calls
    let basePrice = 0
    if (style === 'simple') basePrice = 50
    if (style === 'complex') basePrice = 100
    if (size === 'small') basePrice *= 1
    if (size === 'medium') basePrice *= 1.5
    if (size === 'large') basePrice *= 2
    if (details === 'high') basePrice *= 1.2

    setPrice(Math.round(basePrice))
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Style</label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select style</option>
          <option value="simple">Simple</option>
          <option value="complex">Complex</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Detail Level</label>
        <select
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select detail level</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        onClick={calculatePrice}
        className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 mb-4"
      >
        Calculate Price
      </button>
      {price > 0 && (
        <div className="text-center">
          <p className="text-xl">Estimated Price:</p>
          <p className="text-3xl font-bold text-purple-600">${price}</p>
          <p className="mt-2 text-sm text-gray-600">
            Note: Final price may vary. Please consult with the artist for an accurate quote.
          </p>
        </div>
      )}
    </div>
  )
}

export default PriceCalculator