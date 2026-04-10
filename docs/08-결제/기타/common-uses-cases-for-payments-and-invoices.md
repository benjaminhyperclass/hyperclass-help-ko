---

번역일: 2026-04-09
카테고리: 결제 및 인보이스
---

# 결제 및 인보이스 주요 사용 사례

결제는 상품이나 서비스에 대한 대금을 지불하는 데 사용됩니다. 신용카드, 직불카드, 계좌이체, 수표, 현금 또는 기타 결제 방법으로 이루어질 수 있습니다. 인보이스(Invoice)는 상품이나 서비스에 대해 지불된 금액을 기록하는 데 사용됩니다. 인보이스는 일반적으로 회계 과정의 일부로 추적할 수 있도록 결제와 함께 전송됩니다.

이 문서에서는 결제 및 인보이스 사용에 대한 일반적이고 인기 있는 사용 사례들을 살펴보겠습니다.

---

**목차**

- [인보이스를 보내지 않고 고객과 통화 중에 카드 결제 진행하기](#인보이스를-보내지-않고-고객과-통화-중에-카드-결제-진행하기)
- [Stripe Connect 없이 수동 결제 기록용 인보이스 사용하기](#stripe-connect-없이-수동-결제-기록용-인보이스-사용하기)
- [인보이스에 임시 상품 및 서비스 추가하기](#인보이스에-임시-상품-및-서비스-추가하기)
- [인보이스에 카드 처리 수수료 추가하는 방법](#인보이스에-카드-처리-수수료-추가하는-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## 인보이스를 보내지 않고 고객과 통화 중에 카드 결제 진행하기

**1단계:** 연락처(Contacts)를 선택해서 인보이스를 생성하세요. 연락처가 없으면 바로 추가할 수 있습니다.

**2단계:** 판매할 상품을 추가하세요. 드롭다운에 상품이 없으면 "Add New Item(새 항목 추가)"를 선택하세요.

**3단계:** 인보이스 빌더 페이지에서 인보이스를 전송하는 대신, 상단 바의 점 세 개 메뉴를 클릭하고 "Record Payment(결제 기록)"를 클릭하세요.

![결제 기록 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246566971/original/suTkwlIPuN0aGGkym3Vlg9D4kIJhlN-JxQ.png?1661156309)

**4단계:** 다음 모달 창에서 "Charge a card(카드 결제)"를 선택하고, 다음 화면에서 처음 이용하는 고객이라면 "New Card(새 카드)"를 선택하세요.

![카드 결제 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246567506/original/Q2KQKCDwm6V0nuasc7kCVI_A3-KQASG-wA.png?1661156443)

**5단계:** 이미 구매 이력이 있는 고객이라면, 저장된 카드 섹션에 이전에 사용한 카드가 표시됩니다.

![저장된 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246567346/original/zm84QK6BmJQ0Qk-3jd2QN3gzkcny_uI2Bg.png?1661156409)

**주의사항:** 결제가 진행된 고객은 자동 이메일/문자 확인을 받지 않습니다.

## Stripe Connect 없이 수동 결제 기록용 인보이스 사용하기

Stripe Connect 없이도 인보이스 솔루션을 사용할 수 있습니다. 하지만 신용카드/직불카드를 통한 결제를 받으려면 Stripe Connect가 필요합니다.

**주의사항:**

Stripe Connect 없이 인보이스를 사용하기로 선택하면 수동으로 결제를 기록하고 수집해야 합니다. 현재 Stripe Connect 없이 수동 결제 기록은 일회성 인보이스에서만 작동합니다.

**1단계:** 왼쪽 결제(Payments) 메뉴 아래의 인보이스(Invoices)로 이동하세요.

**2단계:** 시스템에서 Stripe Connect 추가를 요청하는 팝업이 나타나면 닫으세요.

**3단계:** "New(새로 만들기)" 버튼을 통해 새 인보이스 생성을 진행하고 "New Invoice(새 인보이스)"를 선택하세요.

![새 인보이스 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248706461/original/7ef07YaAczPcFyBU1Use4qEWF-nJZ_7-tw.png?1662060526)

**4단계:** 인보이스 빌더 페이지에서 고객 정보, 판매한 상품/서비스, 세금 정보, 할인(있는 경우)을 추가하세요. 준비가 되면 점 세 개 메뉴를 클릭하고 "Record Payment(결제 기록)" 옵션을 선택하세요.

![결제 기록 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247158855/original/MvrisAXgz10AdjG2XT5s8vwba4fAHnx7Ug.png?1661357700)

**5단계:** "Record Manually(수동 기록)"를 선택하세요.

![수동 기록 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159083/original/JOdy5yeO6X_yrxktCCDvpD4pmMC-EWqDEw.png?1661357750)

**6단계:** 다음 화면에서 현금, 카드, 수표, 계좌이체, 기타와 같은 옵션이 표시됩니다. 해당하는 옵션을 선택하고 다음 화면에서 "Submit(제출)"을 클릭하세요.

![결제 방법 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159265/original/N2jhkSm24UYQmVJyyH_i6VPS9NUp2JrvNw.png?1661357791)

**7단계:** 이제 해당 고객에 대한 인보이스가 기록됩니다.

**주의사항:** 결제가 진행된 고객은 자동 이메일/문자 확인을 받지 않습니다.

![기록된 인보이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159585/original/CJehc8BqQeswGJai7baepTzLBJ_ny4CBww.png?1661357855)

## 인보이스에 임시 상품 및 서비스 추가하기

Hyperclass의 상품(Products) 영역에 생성된 서비스나 상품이 없어도 인보이스에 추가할 수 있습니다. 아래 단계를 따라하세요.

**1단계:** 인보이스를 생성하고 "Add an Item(항목 추가)"을 클릭하세요.

![항목 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286137736/original/JnMIJ8SUPPZrMU3KzdY5z3zy3q1Tk9x7Iw.png?1678343369)

**2단계:** "Products(상품)"에 없는 항목을 추가하려면 "New Item(새 항목)"을 선택하세요.

![새 항목 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286137826/original/7jNOKdhLjcqxuQDInhLOSSify7rXDNBr7g.png?1678343425)

**3단계:**

- 다음 화면에서 상품명과 가격을 입력하세요.
- 나중에 사용하기 위해 저장하려면 "Save for later use(나중에 사용하기 위해 저장)" 옵션을 선택하세요. 이렇게 하면 이 상품/서비스가 상품 영역에 저장됩니다.
- "Add new item(새 항목 추가)" 버튼을 클릭해서 인보이스에 추가하세요.

![새 항목 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286138236/original/TJE_MeHyip8-jsEDifSgYGgykGCBMHWXSQ.png?1678343528)

새 항목이 인보이스에 추가되어 전송 준비가 완료됩니다!

![추가된 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286138402/original/QPgmWsgnf-l8-S5DcCYT880Jt2y6zUc_Fg.png?1678343615)

---

## 인보이스에 카드 처리 수수료 추가하는 방법

결제(Payments) > 세금 설정(Tax Settings)으로 가서 "세금"으로 부과하고자 하는 카드 처리 수수료를 추가하세요.

![카드 처리 수수료 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286421947/original/o66BfPPAA-Cqd5ToVwdSJFyij8HJWKmFOg.png?1678436215)

새 인보이스를 생성하고 청구할 항목을 추가하세요.

세금 추가(Add Tax)를 클릭하고 세금 설정에서 구성한 카드 처리 수수료를 선택한 후 "Save(저장)"을 클릭하세요.

![세금 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422185/original/wFSNxzQEYbgXbGb6NGBCPj51McSEdyLesw.png?1678436287)

![수수료 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422242/original/g0fqsqQlu1GXT56QZ29QBFEo-dxRzxsYkA.png?1678436310)

카드 처리 수수료가 추가되면 인보이스 빌더에 다음과 같이 표시됩니다.

![인보이스 빌더의 수수료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422356/original/TtrjI1nOSPog7w6teWUkOHq-3HE5nMf5KA.png?1678436360)

결제자가 인보이스에서 보게 되는 화면입니다.

![고객이 보는 인보이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039257935/original/7UURaKWOUJn5bgk3o6oVIwr8k8g0t9jLGg.jpg?1735936659)

---

## 자주 묻는 질문

**Q:** GoHighLevel 결제로 인보이스의 부분 결제를 추적할 수 있나요?

네, Hyperclass에서는 부분 결제를 추적할 수 있습니다. 전체 금액으로 인보이스를 생성하고 부분 결제가 이뤄질 때마다 업데이트할 수 있습니다. 이를 통해 미결제 잔액을 정확하게 기록할 수 있습니다.

**Q: 고객에게 보내는 인보이스의 모양을 커스터마이징할 수 있나요?**

현재 Hyperclass는 표준 인보이스 템플릿을 제공합니다. 비즈니스명, 로고, 메모와 같은 커스텀 정보는 추가할 수 있지만, 레이아웃이나 색상 조정과 같은 고급 커스터마이징 옵션은 현재 제공되지 않습니다.

**Q: 구독 기반 서비스에 대한 정기 인보이스를 설정할 수 있나요?**

네, 구독 기반 서비스에 대한 정기 인보이스를 생성할 수 있습니다. Hyperclass에는 자동화된 정기 인보이스 기능이 없지만, 이전에 전송한 인보이스를 복제하고 주기적으로 전송하도록 알림을 설정할 수 있습니다.

**Q: 서드파티 결제 처리업체를 연동할 수 있나요?**

Hyperclass는 Stripe, PayPal과 같은 인기 있는 결제 처리업체와의 연동을 지원합니다. 플랫폼의 연동(Integrations) 섹션을 통해 계정을 연결해야 합니다. 연결되면 인보이스를 통해 직접 결제를 받을 수 있습니다.

**Q: "Test(테스트)"를 클릭했는데도 결제 페이지에 "Live Mode(라이브 모드)"가 표시되는 이유는 무엇인가요?**

이는 일반적으로 실제 Stripe 계정이 여전히 라이브 모드에 있다는 의미입니다. Stripe 대시보드에 로그인해서 우측 상단의 "Test Mode(테스트 모드)" 스위치를 토글하세요. 그 후 Hyperclass 페이지를 새로고침하세요.

**Q: 고객이 결제했는데도 인보이스에 "Payment Processing(결제 처리 중)"이 표시되는 이유는 무엇인가요?**

인보이스에 "결제 처리 중"이 표시되면 결제가 시작되었지만 아직 정산되지 않았다는 의미입니다. 이는 일반적으로 ACH 계좌이체나 PayPal eCheck와 같은 결제 방법에서 발생하며, 2-5영업일이 소요됩니다. 결제가 성공적으로 처리되면 인보이스 상태가 자동으로 "Paid(결제 완료)"로 업데이트됩니다.

**Q: 인보이스를 보냈는데 고객이 링크가 깨졌거나 결제 링크를 클릭할 수 없다고 하는데, 무엇이 문제이고 어떻게 해결하나요?**

예정된 결제 기한이 지나서 결제 링크가 비활성화되었습니다. 시스템은 결제일이 이미 지나면 자동으로 결제 옵션을 비활성화합니다.

해결 방법:
- 수정된 일정으로 새 인보이스를 보내야 합니다
- 원본 인보이스를 복제(Clone)하세요
- 결제 일정 날짜를 현재 또는 미래 날짜로 조정하세요
- 새 인보이스를 고객에게 다시 전송하세요. 그러면 링크가 활성화됩니다.

**Q: (테스트/데모 결제였더라도) 결제 완료로 표시된 인보이스를 무효화하거나 삭제할 수 없는 이유는 무엇인가요?**

GoHighLevel에서는 이미 결제 완료로 표시된 인보이스는 테스트나 데모 목적으로 생성된 결제라도 무효화할 수 없습니다. 시스템에서는 인보이스를 무효화하기 전에 먼저 결제를 환불해야 합니다.

해결 방법:
- 인보이스로 가서 점 세 개(⋮) 메뉴를 클릭하세요
- View Transaction(거래 보기)를 선택하세요
- Refund(환불)를 클릭하고 환불을 완료하세요
- 인보이스로 돌아가세요
- 점 세 개(⋮) 메뉴를 다시 클릭하고 Void(무효화)를 선택하세요

환불 후 인보이스를 성공적으로 무효화할 수 있으며, 더 이상 활성 또는 결제 완료 인보이스로 반영되지 않습니다.

주의사항:
- 결제 완료된 인보이스는 직접 삭제할 수 없습니다
- 테스트 모드로 명확히 표시되지 않은 데모나 테스트 결제는 시스템에서 실제 결제처럼 취급됩니다
- 환불은 인보이스가 기록, 보고서 또는 고객 가시성에 영향을 주지 않도록 보장합니다
- 에이전시 수준 사용자(Agency Owner/Admin/User)만 GoHighLevel 지원팀에 연락할 수 있으며, 하위 계정 사용자는 불가능합니다

**Q: 수동 결제를 기록할 때 결제일이 사라지고 "Invalid Date(잘못된 날짜)" 오류가 표시되는 이유는 무엇인가요?**

이 문제는 입력한 수동 결제일이 시스템의 허용 날짜 범위를 벗어나거나 인보이스 타임라인과 충돌하여 플랫폼에서 이를 거부하고 필드를 지우는 경우 발생합니다.

발생 원인:
- 인보이스가 나중 날짜에 발행되었는데 결제일을 과거 날짜로 설정하는 경우
- 시스템이 인보이스의 발행일 및 상태 날짜와 결제일을 검증하는 경우
- 언어/로케일 설정이 때로는 검증 문제를 일으킬 수 있지만, 이는 주요 원인이 아닙니다

해결 방법:
- 결제일이 인보이스 발행일 이후가 되도록 하세요
- 결제를 기록하기 전에 페이지를 새로고침하세요
- 인보이스 타임라인에 맞는 날짜로 결제를 기록해 보세요
- 필요한 경우 계정 언어를 일시적으로 영어로 전환하고 다시 시도하세요

**Q: 인보이스에서 부분 결제를 할 수 없는 이유는 무엇인가요?**

인보이스에 이미 결제 일정(분할 결제)이 설정되어 있으면 부분 결제를 할 수 없습니다. 시스템에서는 예정된 결제와 충돌할 수 있기 때문에 이 경우 부분 결제를 허용하지 않습니다.

해결 방법:
- 결제 일정을 제거하거나 수정하세요
- 그 후 인보이스로 가서 Record Payment(결제 기록) → Record manually(수동 기록)를 선택하여 부분 결제를 입력하세요

**Q: 한 인보이스에는 처리 수수료가 표시되는데 다른 인보이스에는 표시되지 않는 이유는 무엇인가요?**

설정(Settings) → 수수료(Charges)에서 구성한 처리 수수료는 기존 인보이스에 자동으로 적용되지 않습니다. 새로운 수수료 옵션을 포함하려면 설정이 활성화되기 전에 만든 인보이스를 다시 생성해야 합니다. 수수료 옵션은 설정에서 변경 사항이 저장된 후 생성된 인보이스에서만 표시되고 적용됩니다.

---
*원문 최종 수정: Mon, 16 Feb, 2026 at 1:13 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*