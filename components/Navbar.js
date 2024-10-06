import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Tattoo Studio
        </Link>
        <div className="space-x-4">
          <Link href="/booking" className="hover:text-gray-300">
            Booking
          </Link>
          <Link href="/rewards" className="hover:text-gray-300">
            Rewards
          </Link>
          <Link href="/price-calculator" className="hover:text-gray-300">
            Calculator
          </Link>
          <Link href="/cart" className="hover:text-gray-300">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;