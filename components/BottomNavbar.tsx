import Link from 'next/link';
import { Home, CalendarDays, Star, Calculator, ShoppingCart } from 'lucide-react';

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/booking', icon: CalendarDays, label: 'Booking' },
  { href: '/rewards', icon: Star, label: 'Rewards' },
  { href: '/calculator', icon: Calculator, label: 'Price Calc' },
  { href: '/cart', icon: ShoppingCart, label: 'Cart' },
];

interface BottomNavbarProps {
  activePage: string;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ activePage }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center ${
              activePage === item.href ? 'text-[#607AFB]' : 'text-gray-400'
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;