'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { useInView } from 'react-intersection-observer'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, CalendarDays, Star, Calculator, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import styles from './HomePage.module.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import { motion } from 'framer-motion'
import { HomeSkeleton } from '@/components/HomeSkeleton'

const HomePage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const recentWorks = [
    { title: 'Tattoo 1', image: '/placeholder.svg?height=200&width=200' },
    { title: 'Tattoo 2', image: '/placeholder.svg?height=200&width=200' },
    { title: 'Tattoo 3', image: '/placeholder.svg?height=200&width=200' },
    { title: 'Tattoo 4', image: '/placeholder.svg?height=200&width=200' },
    { title: 'Tattoo 5', image: '/placeholder.svg?height=200&width=200' },
    { title: 'Tattoo 6', image: '/placeholder.svg?height=200&width=200' },
  ]

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const promotions = [
    { title: 'Summer Special', description: 'Get 20% off on all tattoos above $200', validUntil: '2023-08-31' },
    { title: 'Bring a Friend', description: 'Book together and get 15% off each', validUntil: '2023-09-15' },
  ]

  const newsAndEvents = [
    { title: 'New Artist Joining', date: '2023-07-20', description: 'Welcome our new artist specializing in watercolor tattoos' },
    { title: 'Tattoo Convention', date: '2023-08-05', description: 'Join us at the annual tattoo convention' },
  ]

  if (isLoading) return <HomeSkeleton />

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex-grow mx-auto p-4 space-y-6 font-sans ${isTabletOrMobile ? 'max-w-md' : 'max-w-xl'} pb-20`} // Increased bottom padding
      >
        <Card className="shadow-md">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-primary">Tattoo Studio</CardTitle>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="text-center">
              <h1 className="text-3xl font-bold mb-2">Welcome, John</h1>
              <p className="text-muted-foreground">Ready for your next ink?</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 text-primary">Recent Works</h2>
              <div className="relative" ref={emblaRef}>
                <div className="flex">
                  {recentWorks.map((work, index) => (
                    <div key={index} className="flex-[0_0_33.33%] min-w-0 relative aspect-square group mr-4">
                      {imagesLoaded < recentWorks.length && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
                      )}
                      {inView && (
                        <>
                          <Image
                            src={work.image}
                            alt={work.title}
                            layout="fill"
                            objectFit="cover"
                            className={`rounded-md ${styles.workImage}`}
                            onLoad={handleImageLoad}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm">{work.title}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button onClick={scrollPrev} variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button onClick={scrollNext} variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-primary">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <Button asChild variant="outline" className="flex justify-between items-center">
                  <Link href="/booking">
                    Book Appointment <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex justify-between items-center">
                  <Link href="/gallery">
                    View Gallery <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex justify-between items-center">
                  <Link href="/artists">
                    Our Artists <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex justify-between items-center">
                  <Link href="/contact">
                    Contact Us <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2 text-primary">Your Next Appointment</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold">Sleeve Tattoo - Session 2</p>
                  <p className="text-sm text-muted-foreground">July 15, 2023 at 2:00 PM</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Upcoming</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 text-primary">Promotions</h2>
              <div className="space-y-4">
                {promotions.map((promo, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold">{promo.title}</h3>
                      <p className="text-sm text-muted-foreground">{promo.description}</p>
                      <p className="text-sm mt-2">Valid until: {promo.validUntil}</p>
                      <Badge variant="secondary" className="mt-2">Limited Time</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 text-primary">News & Events</h2>
              <div className="space-y-4">
                {newsAndEvents.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <p className="text-sm mt-2">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </CardContent>
        </Card>
      </motion.div>

      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-200 shadow-lg z-50" aria-label="Bottom navigation">
        <div className="flex justify-around items-center p-3 max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center text-primary" aria-label="Home" aria-current="page">
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
          <Link href="/price-calculator" className="flex flex-col items-center text-muted-foreground" aria-label="Price Calculator">
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

export default HomePage