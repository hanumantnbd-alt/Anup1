'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4 font-display">Anup</h3>
            <p className="text-gray-400 text-sm">Crafting digital experiences with passion and precision.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#services" className="hover:text-purple-400 transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Web Design</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Development</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Anup. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-purple-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
