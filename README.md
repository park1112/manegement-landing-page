# 농가 관리 시스템 랜딩 페이지

이 프로젝트는 농가 관리 시스템 Flutter 앱을 소개하는 Next.js 기반 랜딩 페이지입니다.

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 CSS
- **Framer Motion** - 애니메이션 라이브러리
- **Lucide React** - 아이콘 라이브러리

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 부드러운 스크롤 애니메이션
- 다크 모드 지원
- SEO 최적화
- 성능 최적화

## 프로젝트 구조

```
landing-page/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 홈페이지
├── components/
│   ├── Navbar.tsx       # 네비게이션 바
│   ├── Hero.tsx         # 히어로 섹션
│   ├── Features.tsx     # 기능 소개
│   ├── Screenshots.tsx  # 앱 스크린샷
│   ├── TechStack.tsx    # 기술 스택
│   ├── CTA.tsx          # Call to Action
│   └── Footer.tsx       # 푸터
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 커스터마이징

### 색상 변경

`tailwind.config.js` 파일에서 색상 팔레트를 수정할 수 있습니다.

### 콘텐츠 수정

각 컴포넌트 파일에서 텍스트와 이미지를 수정할 수 있습니다.

### 애니메이션 조정

`globals.css`와 Framer Motion 설정을 통해 애니메이션을 커스터마이징할 수 있습니다.

## 배포

### Vercel (권장)

```bash
npm i -g vercel
vercel
```

### 정적 호스팅

```bash
npm run build
# out 폴더의 내용을 호스팅 서비스에 업로드
```

## 라이선스

이 프로젝트는 농가 관리 시스템의 일부입니다.
