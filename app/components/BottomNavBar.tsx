'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CalendarDays, Gift, Calculator, ShoppingCart } from 'lucide-react'

const BottomNavBar = () => {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex flex-col items-center justify-center w-full h-full">
            <Home className={`h-5 w-5 ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-xs mt-1 ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>Home</span>
          </Link>
          <Link href="/booking" className="flex flex-col items-center justify-center w-full h-full">
            <CalendarDays className={`h-5 w-5 ${pathname === '/booking' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-xs mt-1 ${pathname === '/booking' ? 'text-primary' : 'text-muted-foreground'}`}>Booking</span>
          </Link>
          <Link href="/rewards" className="flex flex-col items-center justify-center w-full h-full">
            <Gift className={`h-5 w-5 ${pathname === '/rewards' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-xs mt-1 ${pathname === '/rewards' ? 'text-primary' : 'text-muted-foreground'}`}>Rewards</span>
          </Link>
          <Link href="/price-calculator" className="flex flex-col items-center justify-center w-full h-full">
            <Calculator className={`h-5 w-5 ${pathname === '/price-calculator' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-xs mt-1 ${pathname === '/price-calculator' ? 'text-primary' : 'text-muted-foreground'}`}>Calculator</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center justify-center w-full h-full">
            <ShoppingCart className={`h-5 w-5 ${pathname === '/cart' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-xs mt-1 ${pathname === '/cart' ? 'text-primary' : 'text-muted-foreground'}`}>Cart</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default BottomNavBar