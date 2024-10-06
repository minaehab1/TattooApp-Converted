import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CalendarDays, Gift, Calculator, ShoppingCart } from 'lucide-react'

const DashboardNavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link href="/" className={`flex flex-col items-center justify-center w-16 h-16 ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/booking" className={`flex flex-col items-center justify-center w-16 h-16 ${pathname === '/booking' ? 'text-primary' : 'text-muted-foreground'}`}>
            <CalendarDays className="w-6 h-6" />
            <span className="text-xs mt-1">Booking</span>
          </Link>
          <Link href="/rewards" className={`flex flex-col items-center justify-center w-16 h-16 ${pathname === '/rewards' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Gift className="w-6 h-6" />
            <span className="text-xs mt-1">Rewards</span>
          </Link>
          <Link href="/price-calculator" className={`flex flex-col items-center justify-center w-16 h-16 ${pathname === '/price-calculator' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Calculator className="w-6 h-6" />
            <span className="text-xs mt-1">Calculator</span>
          </Link>
          <Link href="/cart" className={`flex flex-col items-center justify-center w-16 h-16 ${pathname === '/cart' ? 'text-primary' : 'text-muted-foreground'}`}>
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavBar