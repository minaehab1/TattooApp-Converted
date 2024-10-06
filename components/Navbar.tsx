import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link href="/booking" className="hover:text-gray-300">Booking</Link></li>
        <li><Link href="/rewards" className="hover:text-gray-300">Rewards</Link></li>
        <li><Link href="/price-calculator" className="hover:text-gray-300">Calculator</Link></li>
        <li><Link href="/cart" className="hover:text-gray-300">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;