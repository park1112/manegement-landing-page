'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sprout } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '기능', href: '#features' },
  { label: '미리보기', href: '#screenshots' },
  { label: '기술', href: '#tech' },
  { label: '파일 리네이밍', href: '/rename' },
  { label: '문의', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      // 내부 라우팅은 기본 동작 유지
      setIsOpen(false)
    } else if (href.startsWith('#')) {
      if (isHomePage) {
        // 홈페이지에서는 스크롤
        e.preventDefault()
        const targetId = href.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // 다른 페이지에서는 홈으로 이동 후 스크롤
        window.location.href = '/' + href
      }
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Sprout className="w-8 h-8 text-green-600 mr-2" />
            <span className="font-bold text-xl text-green-600">아르고</span>
          </a>

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
            <a 
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleClick(e, '#contact')}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-block"
            >
              시작하기
            </a>
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
              <a 
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={(e) => handleClick(e, '#contact')}
                className="mx-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors block text-center"
              >
                시작하기
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
