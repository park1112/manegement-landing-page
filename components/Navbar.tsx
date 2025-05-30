'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sprout } from 'lucide-react'

const navItems = [
  { label: '기능', href: '#features' },
  { label: '미리보기', href: '#screenshots' },
  { label: '기술', href: '#tech' },
  { label: '문의', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sprout className="w-8 h-8 text-green-600 mr-2" />
            <span className="font-bold text-xl text-green-600">아르고</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              시작하기
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mx-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                시작하기
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
