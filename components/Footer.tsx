'use client'

import { Sprout, Github, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Sprout className="w-8 h-8 text-green-500 mr-2" />
              <span className="text-2xl font-bold">아르고</span>
            </div>
            <p className="text-gray-400 mb-4">
              아르고의 농가 관리 시스템 - Flutter와 Supabase로 구축된
              현대적인 농가 관리 솔루션으로 스마트한 농업 경영을 시작하세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">제품</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">기능</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">가격</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">로드맵</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">업데이트</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">지원</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">문서</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">가이드</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">문의</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">사업자 정보</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>상호명: 아르고 | 대표자: 박현재</p>
              <p>사업자등록번호: 196-10-01838</p>
              <p>주소: 경상남도 함양군 안의면 안의대등길 18-3</p>
              <p>개업일: 2021년 04월 28일</p>
              <p>업태: 소매업 | 종목: 정보통신업, 컴퓨터봉신업, 정보봉신업, 정보통신업 등</p>
              <p>전화: 055-964-4722</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} 아르고. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
