import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Home, CalendarDays, Star, Calculator, ShoppingCart } from 'lucide-react';

const CustomBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs text-green-500 border border-green-500 px-2 py-1 rounded-full bg-transparent">
    {children}
  </span>
);

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen p-6 pb-24">
      <Card className="mb-6">
        <CardContent className="p-6 pt-8">
          <div className="flex items-center mb-4">
            <Image
              src="/profile-image.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">Hi, Jodie</h2>
              <p className="text-base text-gray-600">You have 13,000 points</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1 h-12 rounded-[24px] overflow-hidden">
              <Button 
                variant="outline" 
                className="w-full h-full !bg-gray-100 text-gray-600 hover:!bg-gray-200 !border-0 text-sm font-normal"
              >
                Redeem
              </Button>
            </div>
            <div className="flex-1 h-12 rounded-[24px] overflow-hidden" style={{backgroundColor: '#607AFB'}}>
              <Button 
                className="w-full h-full !bg-transparent text-white hover:!bg-[#4c62c9] !border-0 text-sm font-normal"
              >
                Invite
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4 text-center">Quick Links</h2>
      <div className="space-y-4 mb-6">
        <Card>
          <CardContent className="p-4 pt-6 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <CalendarDays className="h-6 w-6 mr-3 text-[#607AFB] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Book a tattoo</h3>
                <p className="text-sm text-gray-600">Or a consultation. Use your rewards to pay</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400 h-6 w-6 flex-shrink-0" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 pt-6 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <CalendarDays className="h-6 w-6 mr-3 text-[#607AFB] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Access gallery</h3>
                <p className="text-sm text-gray-600">Check out our latest works and collections</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400 h-6 w-6 flex-shrink-0" />
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Booking Status</h2>
            <CustomBadge>Open for appointments</CustomBadge>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            <Image src="/gallery1.jpg" alt="Gallery 1" width={200} height={200} className="rounded-lg" />
            <Image src="/gallery2.jpg" alt="Gallery 2" width={200} height={200} className="rounded-lg" />
            <Image src="/gallery3.jpg" alt="Gallery 3" width={200} height={200} className="rounded-lg" />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4 pt-6">
          <h2 className="text-xl font-semibold mb-2">Promotions</h2>
          <p className="text-base text-gray-600">20% off on all tattoos above $200 this weekend</p>
        </CardContent>
      </Card>

      <Card className="mb-20">
        <CardContent className="p-4 pt-6">
          <h2 className="text-xl font-semibold mb-2">News & Events</h2>
          <p className="text-base text-gray-600">New artist joining our team next month!</p>
        </CardContent>
      </Card>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          <Link href="/" className="flex flex-col items-center text-[#607AFB]">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/booking" className="flex flex-col items-center text-gray-400">
            <CalendarDays className="h-6 w-6" />
            <span className="text-xs mt-1">Booking</span>
          </Link>
          <Link href="/rewards" className="flex flex-col items-center text-gray-400">
            <Star className="h-6 w-6" />
            <span className="text-xs mt-1">Rewards</span>
          </Link>
          <Link href="/calculator" className="flex flex-col items-center text-gray-400">
            <Calculator className="h-6 w-6" />
            <span className="text-xs mt-1">Price Calc</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center text-gray-400">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;