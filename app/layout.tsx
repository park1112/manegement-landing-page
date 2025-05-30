import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '아르고 농가 관리 시스템 - 스마트한 농업 경영 솔루션',
  description: 'Flutter와 Supabase로 구축된 아르고의 현대적인 농가 관리 시스템. 농가, 농지, 계약, 작업 일정을 효율적으로 관리하세요.',
  keywords: '농가 관리, 농업 소프트웨어, 농지 관리, 계약 관리, 작업 일정, Flutter, Supabase',
  openGraph: {
    title: '아르고 농가 관리 시스템',
    description: '스마트한 농업 경영을 위한 통합 관리 솔루션',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
