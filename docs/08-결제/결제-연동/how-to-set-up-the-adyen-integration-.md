---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# Adyen 연동 설정하는 방법

Hyperclass의 Adyen 결제(Adyen Payments) 연동으로 유럽과 북미 전역에서 신용카드 및 직불카드 결제를 쉽게 받으실 수 있습니다. 이 가이드에서는 연동의 작동 원리, 대상 사용자, Adyen 계정을 몇 분 만에 연결하는 방법을 설명합니다. 지원되는 기능, 라우팅 동작, 테스트, 환불, FAQ도 함께 알아보세요. Adyen을 표준으로 사용하는 기업 고객을 서비스하는 에이전시에게 완벽한 솔루션입니다.

---

**목차**

- [Adyen 결제 연동이란?](#adyen-결제-연동이란)
- [Adyen 결제 연동의 주요 장점](#adyen-결제-연동의-주요-장점)
- [사전 준비사항](#사전-준비사항)
- [한눈에 보기: 인증 정보, 기능, 지역](#한눈에-보기-인증-정보-기능-지역)
- [Adyen 결제 연동 설정 방법](#adyen-결제-연동-설정-방법)
- [Adyen 테스트 (샌드박스)](#adyen-테스트-샌드박스)
- [환불 및 분쟁](#환불-및-분쟁)
- [자주 묻는 질문](#자주-묻는-질문)

---

# Adyen 결제 연동이란?

Adyen 결제 연동은 기존 Adyen 가맹점 계정을 Hyperclass에 연결하여 Adyen의 PCI 준수 인프라를 사용해 지원되는 영업 채널에서 카드 거래를 처리할 수 있게 해줍니다. 이를 통해 에이전시와 하위 계정은 기업 조달 요구사항을 충족하면서도 Hyperclass 내에서 결제를 수집할 수 있습니다.

Adyen 결제 연동을 사용하면 관리자가 Hyperclass에서 Adyen 인증 정보(Company API Key와 실제 운영 시 Live URL Prefix)를 추가하고 인보이스(Invoices)나 결제 링크(Payment Links) 같은 선택된 채널에서 적격한 카드 거래를 Adyen을 통해 라우팅할 수 있습니다.

---

## **Adyen 결제 연동의 주요 장점**

이러한 장점을 이해하면 하위 계정에 연결된 다른 결제 처리업체보다 Adyen을 언제 선택해야 할지 결정하는 데 도움이 됩니다. 이러한 장점은 기업의 요구사항, 지역 커버리지, 보안에 중점을 둡니다.

- **기업 대응 준비:** Adyen을 표준으로 사용하는 회사와의 계약을 성사시킬 수 있습니다.

- **3D Secure (3DS) 지원:** 고위험 또는 국경 간 결제에 대한 추가 인증 계층을 제공합니다.

- **더 넓은 EU & 북미 커버리지:** 해당 지역에서 운영되는 비즈니스를 단일 제공업체로 온보딩할 수 있습니다.

- **빠른 고객 도입:** 기존 Adyen 가맹점은 인증 정보를 입력하고 빠르게 판매를 시작할 수 있습니다.

---

## **사전 준비사항**

다음 항목을 미리 준비하면 연결 오류를 방지하고 온보딩 속도를 높일 수 있습니다.

- 처리 승인을 받은 활성 Adyen 가맹점 계정 (테스트 및 실제 운영용).

- **테스트** 및 **실제 운영** 환경용 Company API Key.

- Adyen 계정에서 제공되는 **Live URL Prefix** (실제 운영용에만 사용).

- **결제(Payments)** 섹션에 관리자 권한을 가진 Hyperclass 계정.

---

## 한눈에 보기: 인증 정보, 기능, 지역

설정 중이나 고객 범위 설정 시 잘못된 구성이나 과다 약속을 피하기 위해 필요한 인증 정보, 현재 지원되는 기능, 사용 가능한 지역을 확인하는 빠른 참조 자료입니다.

| 카테고리 | 항목 | 세부사항 |
|---------|------|---------|
| **인증 정보 요구사항** | 실제 운영 모드 | Company API Key **및** Live URL Prefix |
|  | 테스트 (샌드박스) | Company API Key |
|  | Live URL Prefix | 실제 엔드포인트 앞에 붙는 16진수 인코딩된 문자열 (예: 1797a841fbb37ca7-MyStore); Adyen 개발 설정에서 확인 가능 |
| **지원되는 기능** | 결제 방법 | 카드 결제 (신용/직불카드) |
|  | 인증 | 3D Secure (3DS) 지원 |
|  | Hyperclass 화면 | 인보이스; 결제 링크; 스토어; 폼/퍼널 주문 양식 (카드 결제가 지원되는 곳) |
| **지원 지역 및 통화** | 지역 | EU/UK; 미국; 캐나다 |
|  | 통화 및 정산 | Adyen 계정 승인 및 구성에 따라 결정됨 |

---

## **Adyen 결제 연동 설정 방법**

다음 단계를 따라 Adyen을 안전하게 연결하고 실제 운영 전에 모든 것이 작동하는지 확인하세요.

- **Hyperclass** 하위 계정에서 **결제(Payments) → 연동(Integrations)**으로 이동합니다. **Connect Adyen**을 클릭하세요.

![Adyen 연동 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059386395/original/9yJ_eT8Sjjer8_wN3uJIyeZEDkTb6ahUbA.png?1764253233)

- 토글에서 **Live** 또는 **Test**를 선택하세요.

![라이브/테스트 모드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059386481/original/cAJQ1d8VKPzNQ-p7opNk7BbDAAnzpHOc3Q.png?1764253309)

- **Company API Key**를 입력하세요. [Adyen API Key 찾는 방법은?](https://docs.adyen.com/development-resources/api-credentials)

- *(Live 모드만)* **Live URL Prefix**를 붙여넣으세요.

- **저장(Save)**을 클릭하세요. 성공 메시지가 연결을 확인해줍니다.

---

## **Adyen 테스트 (샌드박스)**

테스트는 의도하지 않은 요금을 방지하고 Live 모드로 전환하기 전에 3DS 동작을 확인하는 데 도움이 됩니다.

- **테스트(Test)** 모드를 사용하여 카드 결제를 시뮬레이션하세요. 실제 요금은 발생하지 않습니다.

- Adyen에서 제공하는 **테스트 카드 번호**를 사용하고 3DS 프롬프트를 따라 인증 흐름을 확인하세요.

- 테스트가 성공한 후 연동을 **Live**로 전환하고 **Live URL Prefix**를 추가한 다음 소액 확인 결제를 반복하세요.

![Adyen 테스트 모드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059386305/original/Nthj7Hy3KCgoG29Bk2RXKFreQZQ9Gbldbw.png?1764253202)

---

## **환불 및 분쟁**

환불을 발행하고 분쟁을 관리하는 위치를 아는 것은 고객의 지연과 지불 거절 위험을 줄입니다.

- **환불:** Hyperclass 내에서 계정에 대해 환불이 활성화되어 있다면 **결제(Payments) → 거래(Transactions)**에서 (또는 관련 인보이스에서) 전체 또는 부분 환불을 발행할 수 있습니다. 그렇지 않으면 Adyen 대시보드에서 직접 환불을 시작할 수 있습니다.

- **분쟁/지불 거절:** 분쟁은 **Adyen**에서 관리됩니다. 분쟁 알림을 모니터링하고 Adyen의 타임라인 및 가이드에 따라 증거를 제공하세요.

- 환불 시기, 수수료, 정산 조정은 Adyen에 의해 결정됩니다.

---

## 자주 묻는 질문

**Q: Hyperclass에서 Adyen을 통해 Apple Pay나 Google Pay를 활성화할 수 있나요?**
출시 시점에는 불가능합니다. 현재 연동은 카드 결제만 지원합니다.

**Q: Adyen 수수료 외에 Hyperclass 거래 수수료가 추가로 있나요?**
없습니다. 거래는 기존 Adyen 가격으로 Adyen에서 처리됩니다.

**Q: Live 모드에서 Live URL Prefix를 비워두면 어떻게 되나요?**
Adyen이 접두사 없이는 요청을 라우팅할 수 없기 때문에 Live 거래가 실패합니다.

**Q: 같은 하위 계정에 Stripe와 Adyen을 모두 연결할 수 있나요?**
네. 여러 게이트웨이를 연결하고 채널별로 **기본 제공업체(Default Provider)**를 선택하세요.

**Q: 3DS에 Hyperclass 설정이 필요한가요?**
아니요. 3DS 챌린지 흐름은 필요할 때 결제 과정에서 Adyen이 처리합니다.

**Q: Adyen 지급과 수수료는 어디에서 볼 수 있나요?**
Adyen 대시보드에서 확인할 수 있습니다. 정산 시기와 수수료는 Adyen에 의해 결정됩니다.

**Q: Adyen 연동은 출시 시 카드만 지원하나요?**
네. 현재 릴리스는 신용/직불카드 결제를 지원합니다. 지갑(Apple/Google Pay), BNPL, 터미널은 아직 사용할 수 없습니다.

---

*원문 최종 수정: 2025년 11월 28일*  
*Hyperclass 사용 가이드 — hyperclass.ai*