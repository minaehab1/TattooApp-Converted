import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">DreamApp</h3>
            <p>Unlock the mysteries of your dreams with AI-powered interpretation.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><Link href="#features" className="hover:text-purple-300">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-purple-300">Pricing</Link></li>
              <li><Link href="#testimonials" className="hover:text-purple-300">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-purple-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul>
              <li><Link href="/privacy" className="hover:text-purple-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-purple-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-purple-300"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 DreamApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer