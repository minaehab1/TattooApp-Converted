import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calculator } from 'lucide-react';
import BottomNavbar from '@/components/BottomNavbar';

const PriceCalculator = () => {
  const [style, setStyle] = useState('');
  const [size, setSize] = useState(0);
  const [details, setDetails] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const calculatePrice = () => {
    // Simple calculation logic (replace with your actual logic)
    const basePrice = 100;
    const styleMultiplier = style === 'complex' ? 1.5 : 1;
    const sizeMultiplier = size / 50;
    const detailsMultiplier = details / 50;
    
    const price = basePrice * styleMultiplier * sizeMultiplier * detailsMultiplier;
    setEstimatedPrice(Math.round(price));
  };

  return (
    <div className="bg-white min-h-screen p-6 pb-24">
      <Card className="mb-6">
        <CardContent className="p-6 pt-8">
          <div className="flex items-center mb-4">
            <Calculator className="h-8 w-8 mr-3 text-[#607AFB]" />
            <h2 className="text-2xl font-semibold">Tattoo Price Calculator</h2>
          </div>
          <p className="text-base text-gray-600 mb-4">Estimate the cost of your desired tattoo</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <h3 className="text-lg font-semibold mb-2">Tattoo Style</h3>
          <Select onValueChange={(value) => setStyle(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="complex">Complex</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <h3 className="text-lg font-semibold mb-2">Tattoo Size</h3>
          <Slider
            min={1}
            max={100}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">Size: {size} cm</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <h3 className="text-lg font-semibold mb-2">Detail Level</h3>
          <Slider
            min={1}
            max={100}
            step={1}
            value={[details]}
            onValueChange={(value) => setDetails(value[0])}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">Detail: {details}%</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <Button 
            onClick={calculatePrice}
            className="w-full h-12 rounded-[24px] !bg-[#607AFB] text-white hover:!bg-[#4c62c9] !border-0 text-sm font-normal"
          >
            Calculate Price
          </Button>
        </CardContent>
      </Card>

      {estimatedPrice > 0 && (
        <Card className="mb-20">
          <CardContent className="p-4 pt-6">
            <h3 className="text-lg font-semibold mb-2">Estimated Price</h3>
            <p className="text-2xl font-bold text-[#607AFB]">${estimatedPrice}</p>
            <p className="text-sm text-gray-600 mt-2">
              This is an estimate. Final pricing may vary based on artist and specific design details.
            </p>
          </CardContent>
        </Card>
      )}

      <BottomNavbar activePage="/price-calculator" />
    </div>
  );
};

export default PriceCalculator;
