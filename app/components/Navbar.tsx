import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Tattoo Studio</Link>
        <ul className="flex space-x-4">
          <li><Link href="/booking">Booking</Link></li>
          <li><Link href="/custom-design">Custom Design</Link></li>
          <li><Link href="/rewards">Rewards</Link></li>
          <li><Link href="/price-calculator">Price Calculator</Link></li>
          <li><Link href="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar