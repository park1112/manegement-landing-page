import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>
          
          <div className="bg-white rounded-lg shadow p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 개인정보의 수집 및 이용목적</h2>
              <p className="text-gray-700 leading-relaxed">
                우리 서비스는 다음과 같은 목적으로 개인정보를 수집하고 이용합니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>서비스 제공 및 운영</li>
                <li>사용자 식별 및 인증</li>
                <li>서비스 개선 및 신규 기능 개발</li>
                <li>고객 문의 응대 및 지원</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 수집하는 개인정보의 항목</h2>
              <p className="text-gray-700 leading-relaxed">
                우리는 다음과 같은 개인정보를 수집합니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>필수 정보: 이메일 주소, 닉네임</li>
                <li>선택 정보: 프로필 사진, 지역 정보</li>
                <li>자동 수집 정보: 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 개인정보의 보유 및 이용기간</h2>
              <p className="text-gray-700 leading-relaxed">
                원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                단, 관련 법령에 의거하여 보존할 필요가 있는 경우 일정 기간 동안 개인정보를 보관할 수 있습니다.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>회원 탈퇴 시까지</li>
                <li>관련 법령에 따른 정보 보유 사유 발생 시 해당 기간까지</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-700 leading-relaxed">
                우리는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다. 
                다만, 아래의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>사용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 개인정보의 안전성 확보조치</h2>
              <p className="text-gray-700 leading-relaxed">
                우리는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>개인정보 취급 직원의 최소화 및 교육</li>
                <li>개인정보의 암호화</li>
                <li>해킹 등에 대비한 기술적 대책</li>
                <li>개인정보에 대한 접근 제한</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 아동의 개인정보 보호</h2>
              <p className="text-gray-700 leading-relaxed">
                우리는 만 13세 미만 아동의 개인정보 보호를 위하여 만 13세 이상의 사용자에 한하여 
                회원가입을 허용하고 있습니다. 만 13세 미만 아동의 개인정보를 수집할 경우에는 
                법정대리인의 동의를 구하고 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 개인정보 처리방침의 변경</h2>
              <p className="text-gray-700 leading-relaxed">
                이 개인정보처리방침은 법령 및 정책 변경에 따라 변경될 수 있으며, 
                변경 시에는 변경 이유 및 내용을 서비스 내 공지사항을 통해 사전 공지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 개인정보 보호책임자</h2>
              <p className="text-gray-700 leading-relaxed">
                개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
                정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="mt-2 text-gray-700">
                <p>개인정보 보호책임자</p>
                <p>이메일: privacy@example.com</p>
              </div>
            </section>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                시행일자: {new Date().toLocaleDateString('ko-KR')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}