'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CalendarDays, Star, Calculator, ShoppingCart } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/booking', icon: CalendarDays, label: 'Booking' },
    { href: '/rewards', icon: Star, label: 'Rewards' },
    { href: '/price-calculator', icon: Calculator, label: 'Price Calc' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex justify-around p-2 max-w-md mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              } transition-colors duration-200 hover:text-primary`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}