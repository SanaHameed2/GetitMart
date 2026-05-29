import { Zap, Twitter, Instagram, Github, Mail } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">GetItMart</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your one-stop mart for everyday essentials. Unbeatable value, aisle after aisle.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Departments',
              links: ['All Departments', 'Electronics', 'Clothing', 'Sports', 'Home & Kitchen'],
            },
            {
              title: 'Support',
              links: ['Help Center', 'Shipping Policy', 'Returns', 'Track Order', 'Contact Us'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-sm hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} GetItMart. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Secure payments powered by</span>
            <span className="text-white font-semibold">Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
