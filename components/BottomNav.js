import Link from 'next/link';
import { useRouter } from 'next/router';

const BottomNav = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Booking', path: '/booking' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Calculator', path: '/price-calculator' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <ul className="flex justify-around items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} className={`block py-2 ${router.pathname === item.path ? 'text-blue-500' : 'text-gray-500'}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;