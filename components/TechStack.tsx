'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const techStack = [
  {
    category: '프론트엔드',
    technologies: [
      { name: 'Flutter', description: '크로스 플랫폼 모바일 프레임워크' },
      { name: 'Riverpod + Hooks', description: '상태 관리 솔루션' },
      { name: 'Material Design', description: 'UI/UX 디자인 시스템' },
      { name: 'Google Maps', description: '지도 및 위치 서비스' }
    ]
  },
  {
    category: '백엔드',
    technologies: [
      { name: 'Supabase', description: '오픈소스 Firebase 대안' },
      { name: 'PostgreSQL', description: '관계형 데이터베이스' },
      { name: 'Row Level Security', description: '데이터 보안' },
      { name: 'Realtime', description: '실시간 데이터 동기화' }
    ]
  },
  {
    category: '개발 도구',
    technologies: [
      { name: 'TypeScript', description: '타입 안정성' },
      { name: 'ESLint', description: '코드 품질 관리' },
      { name: 'Git', description: '버전 관리' },
      { name: 'VS Code', description: '개발 환경' }
    ]
  }
]

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            최신 기술로 구축된 안정적이고 확장 가능한 시스템
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-green-600">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-600">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-8 bg-green-100 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2 text-green-600">왜 이 기술들을 선택했나요?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>하나의 코드베이스로 iOS와 Android 동시 지원</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>서버리스 아키텍처로 운영 비용 절감</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>실시간 데이터 동기화로 협업 효율성 극대화</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>엔터프라이즈급 보안과 확장성 보장</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
