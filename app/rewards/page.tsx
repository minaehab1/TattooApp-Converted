'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calendar, Gift, Copy, Share2, QrCode, Award, Smile, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from '@/components/ThemeToggle'
import { Input } from "@/components/ui/input"
import BottomNavbar from '@/components/BottomNavbar';

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState("myRewards")
  const [referralLink, setReferralLink] = useState("https://example.com/referral?code=12345")
  const [instagramHandle, setInstagramHandle] = useState("")
  const [followers, setFollowers] = useState("")

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    // You might want to add a toast notification here
  }

  const shareLink = () => {
    // Implement share functionality
    // This could open a native share dialog on supported devices
  }

  const generateQRCode = () => {
    // Implement QR code generation
    // This could open a modal with a QR code
  }

  const handleApply = () => {
    // Handle ambassador application logic here
    console.log("Applying with Instagram:", instagramHandle, "Followers:", followers)
  }

  return (
    <div className="bg-white min-h-screen p-6 pb-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Rewards</h2>
          <p className="text-base text-gray-600">You have 1,500 reward points</p>
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
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted rounded-full p-1 mb-6">
                <TabsTrigger value="myRewards" className="rounded-full data-[state=active]:bg-[#607AFB] data-[state=active]:text-white">
                  My Rewards
                </TabsTrigger>
                <TabsTrigger value="referrals" className="rounded-full data-[state=active]:bg-[#607AFB] data-[state=active]:text-white">
                  Referrals
                </TabsTrigger>
                <TabsTrigger value="ambassador" className="rounded-full data-[state=active]:bg-[#607AFB] data-[state=active]:text-white">
                  Ambassador
                </TabsTrigger>
              </TabsList>

              <TabsContent value="myRewards">
                <p className="text-lg mb-4">
                  Earn points with every tattoo and redeem them for discounts.
                </p>

                <Progress value={50} className="h-2 mb-4" />

                <h2 className="text-2xl font-bold mb-4">Your Current Points: 1500</h2>

                <div className="flex space-x-4 mb-8">
                  <Button className="flex-1 bg-primary text-primary-foreground">
                    <Calendar className="mr-2 h-4 w-4" /> Book Service
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Gift className="mr-2 h-4 w-4" /> Redeem Points
                  </Button>
                </div>

                <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>

                <Card className="mb-4">
                  <CardContent className="p-4 flex items-center">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-1">20% Off</h3>
                      <p className="text-muted-foreground mb-2">Get 20% off your next tattoo booking. Limited time offer!</p>
                      <Button variant="outline" className="text-primary">Claim Offer</Button>
                    </div>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="20% off offer"
                      width={100}
                      height={100}
                      className="ml-4 rounded-md"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-1">Flash Sale</h3>
                      <p className="text-muted-foreground mb-2">50% off on all electronics. Valid for 24 hours only.</p>
                      <Button variant="outline" className="text-primary">Shop Now</Button>
                    </div>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Flash sale"
                      width={100}
                      height={100}
                      className="ml-4 rounded-md"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="referrals">
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-2">Total Points</h2>
                    <p className="text-muted-foreground mb-4">You have earned a total of 1,250 points this month.</p>
                    
                    <h2 className="text-lg font-bold mb-2">Recent Activity</h2>
                    <p className="text-muted-foreground mb-4">You earned 50 points from your last booking on October 14.</p>
                    
                    <h2 className="text-lg font-bold mb-2">Available Rewards</h2>
                    <p className="text-muted-foreground">Redeem 100 points for a $10 discount on your next booking.</p>
                  </CardContent>
                </Card>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Referral Program</h2>
                  <p className="mb-4">Invite friends. When they book their first tattoo, you'll both receive a 20% discount! Share your referral link below.</p>
                  
                  <Input value={referralLink} readOnly className="mb-4" />
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Button onClick={copyLink} className="bg-primary text-primary-foreground">
                      <Copy className="mr-2 h-4 w-4" /> Copy Link
                    </Button>
                    <Button onClick={shareLink} className="bg-primary text-primary-foreground">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                  
                  <Button variant="outline" onClick={generateQRCode} className="w-full">
                    <QrCode className="mr-2 h-4 w-4" /> Generate QR Code
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Loyalty Program</h2>
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">Bronze Tier</h3>
                        <p className="text-sm text-muted-foreground mb-4">Join the Bronze Tier with 0-5 bookings. Enjoy a 5% discount on your next booking.</p>
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">Silver Tier</h3>
                        <p className="text-sm text-muted-foreground mb-4">Achieve Silver Tier with 6-15 bookings. Get 10% off and priority support.</p>
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ambassador">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Ambassador Program</h2>
                  <p className="mb-4">Become a Tattoo Studio Ambassador and enjoy exclusive benefits</p>

                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-4">As an ambassador, you'll receive:</h3>
                      <ul className="space-y-2">
                        {[
                          "Exclusive discounts on all tattoos",
                          "Early access to new designs and limited editions",
                          "Invitations to VIP events and artist meet-and-greets",
                          "Special promotional materials for your social media"
                        ].map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <Smile className="h-6 w-6 mr-2 text-primary" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium text-foreground mb-1">
                        Instagram Handle
                      </label>
                      <Input
                        id="instagram"
                        type="text"
                        placeholder="@yourusername"
                        value={instagramHandle}
                        onChange={(e) => setInstagramHandle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="followers" className="block text-sm font-medium text-foreground mb-1">
                        Number of Followers
                      </label>
                      <Input
                        id="followers"
                        type="number"
                        placeholder="10000"
                        value={followers}
                        onChange={(e) => setFollowers(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button onClick={handleApply} className="w-full bg-primary text-primary-foreground py-6 text-lg">
                    <Star className="mr-2 h-5 w-5" /> Apply to Become an Ambassador
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Keep any additional cards or sections */}
      </motion.div>

      <BottomNavbar activePage="/rewards" />
    </div>
  )
}
