---

번역일: 2026-04-06
카테고리: 08-결제
---

# 제품 영역별 지원 결제 제공업체 및 결제 방법 (어디서 무엇이 작동하는지)

이 빠른 가이드를 사용하여 Hyperclass의 각 부분에서 어떤 결제 제공업체와 결제 방법이 작동하는지 확인하세요. 이 표는 Stripe, PayPal, Square, NMI, AuthorizeDotNet, Razorpay와 함께 지갑, BNPL, ACH/SEPA, 카드 리더기를 다룹니다. 온보딩, 문제 해결, 체크아웃 경험 계획에 활용하세요.

목차

- [제품 영역별 결제 제공업체 표란 무엇인가요?](#제품-영역별-결제-제공업체-표란-무엇인가요)
- [표: 제품 영역별 지원되는 결제 제공업체 및 방법](#표-제품-영역별-지원되는-결제-제공업체-및-방법)
- [제품 영역 정의](#제품-영역-정의)
- [자주 묻는 질문](#자주-묻는-질문)

# 제품 영역별 결제 제공업체 표란 무엇인가요?

이 표는 결제 제공업체와 방법을 지원되는 Hyperclass 제품 영역에 매핑하는 단일하고 권위 있는 자료입니다. 예를 들어, 주문 양식(Order Forms), 인보이스(Invoices), 결제 링크(Payment Links)에서의 Stripe 카드, Apple Pay/Google Pay, PayPal, NMI, Authorize.Net, Square, Razorpay를 포함합니다. 여러 아티클을 찾아보지 않고도 "이 제공업체나 방법을 어디서 사용할 수 있나요?"라는 질문에 답합니다.

## 표: 제품 영역별 지원되는 결제 제공업체 및 방법

참고: 일부 결제 방법은 구독이나 정기 결제를 지원하지 않으며, 일회성 결제만 가능합니다.

| 결제 제공업체/방법 | 주문 양식 | 폼 결제 | 설문 결제 | 이메일 직접 체크아웃 (결제 링크 사용) | 이커머스 스토어 | 인보이스 | 인보이스 (정기) | 결제 링크 | 강의 | 커뮤니티 | 연락처 페이지 (카드 청구) | SaaS 모드 | 캘린더/서비스 | 서비스 메뉴 | POS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Stripe (카드) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Stripe > Apple pay/Google pay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | Y | N | Y |
| Stripe > Affirm/Klarna/Afterpay | Y | Y | Y | Y | Y | Y | N | Y | N | N | Y | N | N | N |
| Stripe > ACH Direct debit | N | N | N | N | N | Y | Y | N | N | N | N | N | N | N | N |
| Stripe > Ideal/Bancontact | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | Y | N | N |
| Stripe > SEPA | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Amazon Pay / Revolut Pay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Link | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Card Reader (Stripe M2 and BBPOS Wisepad 3) | N | N | N | N | N | N | N | N | N | N | N | N | N | N | Y |
| PayPal | Y | Y | N | Y | Y | Y | Y | Y | Y | Y | N | N | N | N | N |
| AuthorizeDotNet - Cards | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| NMI - Cards | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y |
| Square - Cards | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y |
| Square > Card Reader | N | N | N | N | N | N | N | N | N | N | N | N | N | N | Y |
| Razorpay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | N | Y | N | N |
| 3rd Party Integrations | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | N | Y | N | N |

## 제품 영역 정의

- **주문 양식**: 상품과 오퍼 판매에 특화된 퍼널/웹사이트 기반 양식
- **폼 결제**: 결제나 기부를 받기 위해 Payment Element가 추가된 일반 폼
- **설문 결제**: 제출 시 결제를 받을 수 있도록 Payment Element가 포함된 설문
- **이메일 직접 체크아웃 (결제 링크 사용)**: 이메일에서 결제 링크를 통해 바로 시작하는 체크아웃
- **이커머스 스토어**: 네이티브 체크아웃이 있는 스토어프론트 및 상품 카탈로그
- **인보이스**: 일회성 인보이스 생성 및 수금 프로세스
- **인보이스 (정기)**: 정기 인보이스 템플릿 및 자동 청구 주기
- **결제 링크**: 하나 이상의 상품에 대한 호스팅된 체크아웃 링크
- **강의**: 강의 구매/접근과 연결된 결제
- **커뮤니티**: 커뮤니티 멤버십이나 그룹에 대한 결제
- **연락처 페이지 (카드 청구)**: 연락처 레코드에서 저장된 카드나 새 카드로 직접 청구
- **SaaS 모드**: 에이전시의 소프트웨어 요금제 및 하위 계정에 청구되는 구독
- **캘린더/서비스**: 캘린더 예약이나 서비스와 함께 결제 수집
- **서비스 메뉴**: 메뉴 기반 서비스 주문 경험
- **POS**: 모바일 또는 지원되는 카드 리더기를 통한 대면 결제

## 자주 묻는 질문

**Q: 표에서 "Y"로 표시되어 있는데도 지갑 버튼(예: Apple Pay/Google Pay)이 나타나지 않는 이유는 무엇인가요?**

지갑 버튼은 지원되는 환경에서만 나타납니다: Apple Pay는 Apple 기기(iPhone/iPad/Mac)에서, Google Pay는 Android에서만 표시됩니다. 해당 방법이 제공업체에서 활성화되어 있고 기기에 지갑이 설정되어 있는지 확인하세요.

**Q: 표에서 제공업체가 "Y"로 표시되어 있으면 구독이 반드시 작동하나요?**

반드시 그런 것은 아닙니다. 일부 방법은 일회성 결제만 지원합니다. 위의 참고사항을 확인하고 출시 전에 정기 결제 사용 사례를 테스트하세요.

**Q: 같은 체크아웃에서 Stripe와 PayPal을 함께 표시할 수 있나요?**

많은 제품 영역에서 둘 다 연결되고 활성화되어 있으면 여러 옵션을 제공할 수 있습니다. 체크아웃에서 사용 가능한 버튼/옵션이 자동으로 표시됩니다.

**Q: 카드 리더기가 주문 양식이나 인보이스에서 작동하나요?**

아니요. 카드 리더기는 POS에서만 Y로 표시됩니다. 대면 결제에는 POS를 사용하세요.

---
*원문 최종 수정: Tue, 17 Feb, 2026 at 12:46 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*