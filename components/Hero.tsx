'use client'

import { motion } from 'framer-motion'
import { Sprout } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-green-50">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 gradient-animation opacity-10"></div>

      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* 플로팅 요소들 */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-green-500 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500 rounded-full opacity-20"
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Sprout className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-600">
            아르고 농가 관리 시스템
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            스마트한 농업 경영의 시작
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Flutter와 Supabase로 구축된 아르고의 현대적인 농가 관리 시스템으로<br />
          농가, 농지, 계약, 작업 일정을 효율적으로 관리하세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            시작하기
          </button>
          <button className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
            더 알아보기
          </button>
        </motion.div>

        {/* 통계 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: '등록 농가', value: '500+' },
            { label: '관리 농지', value: '1,200+' },
            { label: '활성 계약', value: '800+' },
            { label: '작업 효율', value: '95%' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 하단 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f0fdf4" />
        </svg>
      </div>
    </section>
  )
}
