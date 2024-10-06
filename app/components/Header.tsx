import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-purple-700 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">DreamApp</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="hover:text-purple-200">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-purple-200">Pricing</Link></li>
            <li><Link href="#testimonials" className="hover:text-purple-200">Testimonials</Link></li>
            <li><Link href="#contact" className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-purple-100">Get Started</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header