'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const screenshots = [
  {
    title: '대시보드',
    description: '한눈에 보는 농가 현황',
    image: '/screenshots/dashboard.png'
  },
  {
    title: '농가 관리',
    description: '체계적인 농가 정보 관리',
    image: '/screenshots/farmers.png'
  },
  {
    title: '농지 지도',
    description: '위치 기반 농지 관리',
    image: '/screenshots/farmland-map.png'
  },
  {
    title: '채팅 기능',
    description: '농가와 소비자 간 소통 채널',
    image: '/screenshots/chat.png'
  }
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600">
            앱 미리보기
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            직관적이고 사용하기 쉬운 인터페이스
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{screenshot.title}</h3>
                <p className="text-gray-700">{screenshot.description}</p>
              </div>

              <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[5px] bg-gray-800 rounded-full"></div>

                  <div className="relative overflow-hidden rounded-[2rem] bg-white">
                    <div className="aspect-[9/16] relative">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        className="object-cover object-top"
                        sizes="300px"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[100px] h-[4px] bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-700">
            모든 스크린샷은 실제 앱 화면입니다
          </p>
        </motion.div>
      </div>
    </section>
  )
}
