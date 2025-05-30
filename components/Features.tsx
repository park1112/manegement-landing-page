'use client'

import { motion } from 'framer-motion'
import {
  Users,
  MapPin,
  FileText,
  Calendar,
  BarChart3,
  Shield,
  Smartphone,
  Cloud
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: '농가 관리',
    description: '농가 정보를 체계적으로 등록하고 관리할 수 있습니다. 연락처, 주소, 계좌 정보 등을 한 곳에서 관리하세요.',
    color: 'bg-blue-500'
  },
  {
    icon: MapPin,
    title: '농지 관리',
    description: 'Google Maps와 연동하여 농지 위치를 정확하게 관리합니다. 면적, 작물 유형 등을 시각적으로 확인하세요.',
    color: 'bg-green-500'
  },
  {
    icon: FileText,
    title: '계약 관리',
    description: '계약 정보를 디지털로 관리하고 계약금, 중도금, 잔금 등 정산 일정을 자동으로 생성합니다.',
    color: 'bg-purple-500'
  },
  {
    icon: Calendar,
    title: '작업 일정',
    description: '농지별 작업 계획을 수립하고 작업 단계별 진행 상황을 실시간으로 추적합니다.',
    color: 'bg-orange-500'
  },
  {
    icon: BarChart3,
    title: '정산 관리',
    description: '작업비와 계약 관련 정산을 체계적으로 관리하고 정산 상태를 한눈에 확인할 수 있습니다.',
    color: 'bg-pink-500'
  },
  {
    icon: Shield,
    title: '보안 인증',
    description: 'Supabase의 안전한 인증 시스템으로 데이터를 보호하고 권한별 접근 제어를 제공합니다.',
    color: 'bg-indigo-500'
  },
  {
    icon: Smartphone,
    title: '모바일 최적화',
    description: 'Flutter로 개발되어 Android, iOS 모두에서 네이티브 수준의 성능을 제공합니다.',
    color: 'bg-teal-500'
  },
  {
    icon: Cloud,
    title: '클라우드 동기화',
    description: '모든 데이터는 클라우드에 실시간으로 동기화되어 언제 어디서나 접근 가능합니다.',
    color: 'bg-cyan-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600">
            주요 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            농업 경영에 필요한 모든 기능을 한 곳에서 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-green-600">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${feature.color} text-white mb-4`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
