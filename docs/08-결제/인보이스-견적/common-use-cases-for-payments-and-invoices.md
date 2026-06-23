---

번역일: 2026-04-07
카테고리: 08-결제 > 인보이스-견적
---

# 결제와 인보이스 주요 활용 사례

결제는 상품이나 서비스에 대한 대금을 지불하는 데 사용됩니다. 신용카드, 직불카드, 계좌이체, 수표, 현금 또는 기타 결제 수단으로 진행할 수 있습니다. 인보이스는 제품이나 서비스에 대해 지불된 금액을 기록하는 데 사용됩니다. 일반적으로 회계 프로세스의 일부로 추적할 수 있도록 결제와 함께 인보이스가 전송됩니다.

이 가이드에서는 결제와 인보이스를 사용하는 일반적이고 인기 있는 활용 사례들을 살펴보겠습니다.

---

**목차**

- [고객과 통화 중에 인보이스 발송 없이 카드 결제하기](#고객과-통화-중에-인보이스-발송-없이-카드-결제하기)
- [Stripe Connect 없이 수동 결제 기록을 위한 인보이스 활용](#stripe-connect-없이-수동-결제-기록을-위한-인보이스-활용)
- [인보이스에 임시 상품 및 서비스 추가하기](#인보이스에-임시-상품-및-서비스-추가하기)
- [인보이스에 카드 처리 수수료 추가하는 방법](#인보이스에-카드-처리-수수료-추가하는-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## 고객과 통화 중에 인보이스 발송 없이 카드 결제하기

**1단계:** 연락처를 선택하여 인보이스를 생성합니다. 연락처가 없으면 즉석에서 추가합니다.

**2단계:** 판매할 상품을 추가합니다. 드롭다운에 상품이 없으면 "새 항목 추가"를 선택하세요.

**3단계:** 인보이스 생성 페이지에서 인보이스를 발송하는 대신, 상단 바의 점 3개를 클릭하고 "결제 기록"을 클릭합니다.

![인보이스 빌더에서 결제 기록하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246566971/original/suTkwlIPuN0aGGkym3Vlg9D4kIJhlN-JxQ.png?1661156309)

**4단계:** 다음 팝업 창에서 "카드 결제"를 선택하고, 다음 화면에서 신규 고객이라면 "새 카드"를 선택합니다.

![카드 결제 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246567506/original/Q2KQKCDwm6V0nuasc7kCVI_A3-KQASG-wA.png?1661156443)

**5단계:** 이미 구매한 적이 있는 고객이라면 저장된 카드 섹션에 이전에 사용한 카드가 표시됩니다.

![저장된 카드 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246567346/original/zm84QK6BmJQ0Qk-3jd2QN3gzkcny_uI2Bg.png?1661156409)

**참고:** 결제가 처리된 고객은 자동 이메일/문자 확인을 받지 않습니다.

## Stripe Connect 없이 수동 결제 기록을 위한 인보이스 활용

Stripe Connect 없이도 인보이스 솔루션을 사용할 수 있습니다. 그러나 신용카드/직불카드로 결제를 받으려면 Stripe Connect가 필요합니다.

**참고:**

Stripe Connect 없이 인보이스를 사용하기로 선택하면 결제를 수동으로 기록하고 수금해야 합니다. 현재 Stripe Connect 없이 수동 결제 기록하기는 일회성 인보이스에서만 작동합니다.

**1단계:** 좌측의 결제(Payments) 메뉴 아래 인보이스로 이동합니다.

**2단계:** 시스템에서 Stripe Connect를 추가하라는 팝업이 나타납니다. 팝업을 닫으세요.

**3단계:** "새로 만들기" 버튼으로 새 인보이스를 생성하고 "새 인보이스"를 선택합니다.

![새 인보이스 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248706461/original/7ef07YaAczPcFyBU1Use4qEWF-nJZ_7-tw.png?1662060526)

**4단계:** 인보이스 빌더 페이지에서 고객 정보, 판매한 상품/서비스, 세금 정보, 할인(있는 경우)을 추가합니다. 준비가 되면 점 3개를 클릭하고 "결제 기록" 옵션을 선택합니다.

![결제 기록 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247158855/original/MvrisAXgz10AdjG2XT5s8vwba4fAHnx7Ug.png?1661357700)

**5단계:** "수동 기록"을 선택합니다.

![수동 기록 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159083/original/JOdy5yeO6X_yrxktCCDvpD4pmMC-EWqDEw.png?1661357750)

**6단계:** 다음 화면에서 현금, 카드, 수표, 계좌이체, 기타 등의 옵션이 표시됩니다. 해당하는 옵션을 선택하고 다음 화면에서 "제출"을 클릭합니다.

![결제 수단 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159265/original/N2jhkSm24UYQmVJyyH_i6VPS9NUp2JrvNw.png?1661357791)

**7단계:** 이제 해당 고객에 대한 인보이스가 기록됩니다.

**참고:** 결제가 처리된 고객은 자동 이메일/문자 확인을 받지 않습니다.

![기록 완료된 인보이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159585/original/CJehc8BqQeswGJai7baepTzLBJ_ny4CBww.png?1661357855)

## 인보이스에 임시 상품 및 서비스 추가하기

Hyperclass의 상품 영역에 서비스나 상품을 생성하지 않았더라도 인보이스에 추가할 수 있습니다. 아래 단계를 따라하세요.

**1단계:** 인보이스를 생성하고 "항목 추가"를 클릭합니다.

![항목 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286137736/original/JnMIJ8SUPPZrMU3KzdY5z3zy3q1Tk9x7Iw.png?1678343369)

**2단계:** "상품" 목록에 없는 항목을 추가하려면 "새 항목"을 선택합니다.

![새 항목 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286137826/original/7jNOKdhLjcqxuQDInhLOSSify7rXDNBr7g.png?1678343425)

**3단계:**
- 다음 화면에서 상품명과 가격을 입력합니다.
- 나중에 다시 사용하고 싶다면 "나중에 사용하기 위해 저장" 옵션을 선택하세요. 이렇게 하면 이 상품/서비스가 상품 영역에 저장됩니다.
- "새 항목 추가" 버튼을 클릭하여 인보이스에 추가합니다.

![새 항목 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286138236/original/TJE_MeHyip8-jsEDifSgYGgykGCBMHWXSQ.png?1678343528)

새 항목이 인보이스에 추가되어 발송할 준비가 완료됩니다!

![추가 완료된 인보이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286138402/original/QPgmWsgnf-l8-S5DcCYT880Jt2y6zUc_Fg.png?1678343615)

---

## 인보이스에 카드 처리 수수료 추가하는 방법

결제(Payments) > 세금 설정(Tax Settings)으로 이동하여 "세금"으로 부과하고 싶은 카드 처리 수수료를 추가합니다.

![세금 설정에서 수수료 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286421947/original/o66BfPPAA-Cqd5ToVwdSJFyij8HJWKmFOg.png?1678436215)

새 인보이스를 생성하고 청구할 항목을 추가합니다.

세금 추가(Add Tax)를 클릭하고 세금 설정에서 구성한 카드 처리 수수료를 선택한 후 "저장"을 클릭합니다.

![세금 추가 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422185/original/wFSNxzQEYbgXbGb6NGBCPj51McSEdyLesw.png?1678436287)

![수수료 선택 및 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422242/original/g0fqsqQlu1GXT56QZ29QBFEo-dxRzxsYkA.png?1678436310)

카드 처리 수수료가 추가되면 인보이스 빌더에 다음과 같이 표시됩니다.

![인보이스 빌더의 수수료 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422356/original/TtrjI1nOSPog7w6teWUkOHq-3HE5nMf5KA.png?1678436360)

결제자가 인보이스에서 보게 되는 모습은 다음과 같습니다.

![고객이 보는 인보이스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039257935/original/7UURaKWOUJn5bgk3o6oVIwr8k8g0t9jLGg.jpg?1735936659)

---

## 자주 묻는 질문

**Q:** Hyperclass 결제를 사용해서 인보이스의 부분 결제를 추적할 수 있나요?

네, Hyperclass에서는 부분 결제를 추적할 수 있습니다. 전체 금액으로 인보이스를 생성하고 부분 결제가 이루어질 때마다 업데이트할 수 있습니다. 이렇게 하면 미결제 잔액을 정확하게 기록할 수 있습니다.

**Q:** 고객에게 발송하는 인보이스 외관을 커스터마이징할 수 있나요?

현재 Hyperclass는 표준 인보이스 템플릿을 제공합니다. 사업체명, 로고, 메모 같은 커스텀 세부 정보는 추가할 수 있지만, 레이아웃이나 색상 조정 같은 고급 커스터마이징 옵션은 현재 제공되지 않습니다.

**Q:** 구독 기반 서비스를 위한 반복 인보이스를 설정할 수 있나요?

네, 구독 기반 서비스를 위한 반복 인보이스를 생성할 수 있습니다. Hyperclass에는 자동 반복 인보이스 기능이 없지만, 이전에 발송한 인보이스를 복제하고 정기적으로 발송하도록 알림을 설정할 수 있습니다.

**Q:** 서드파티 결제 프로세서를 연동할 수 있나요?

Hyperclass는 Stripe, PayPal 같은 인기 있는 결제 프로세서와의 연동을 지원합니다. 플랫폼의 연동(Integrations) 섹션에서 계정을 연결해야 합니다. 연결이 완료되면 인보이스를 통해 직접 결제를 받을 수 있습니다.

**Q:** "테스트"를 클릭했는데도 결제 페이지에 "라이브 모드"라고 나타나는 이유는 무엇인가요?

이는 보통 실제 Stripe 계정이 여전히 라이브 모드에 있다는 뜻입니다. Stripe 대시보드에 로그인하여 우측 상단의 "테스트 모드" 스위치를 켜세요. 그 다음 Hyperclass 페이지를 새로고침하세요.

**Q:** 고객이 결제를 완료했는데도 인보이스에 "결제 처리 중"으로 표시되는 이유는 무엇인가요?

인보이스에 "결제 처리 중"으로 표시되면 결제가 시작되었지만 아직 정산되지 않았다는 뜻입니다. 이는 일반적으로 ACH 계좌이체나 PayPal eCheck 같은 결제 수단에서 발생하며, 처리에 2-5 영업일이 소요됩니다. 결제가 성공적으로 처리되면 인보이스 상태가 자동으로 "결제 완료"로 업데이트됩니다.

**Q:** 인보이스를 발송했는데 고객이 링크가 깨져서 결제를 클릭할 수 없다고 합니다. 무엇이 잘못되었고 어떻게 해결하나요?

인보이스가 예정된 마감일을 지나서 결제 링크가 비활성화되었습니다. 시스템은 결제 날짜가 지나면 자동으로 결제 옵션을 비활성화합니다.

해결 방법:
- 수정된 일정으로 새 인보이스를 발송해야 합니다:
- 원래 인보이스를 복제(Clone)합니다.
- 결제 일정 날짜를 현재 또는 미래 날짜로 조정합니다.
- 새 인보이스를 고객에게 재발송합니다. 그러면 링크가 활성화됩니다.

**Q:** 결제 완료로 표시된 인보이스를 무효화하거나 삭제할 수 없는 이유는 무엇인가요(테스트/데모 결제라도)?

Hyperclass에서는 결제 완료로 표시된 인보이스는 테스트나 데모 목적으로 생성된 결제라도 무효화할 수 없습니다. 시스템에서는 인보이스를 무효화하기 전에 먼저 결제를 환불해야 합니다.

해결 방법:
- 인보이스로 가서 점 3개(⋮)를 클릭합니다.
- 거래 보기(View Transaction)를 선택합니다.
- 환불(Refund)을 클릭하고 환불을 완료합니다.
- 인보이스로 돌아갑니다.
- 점 3개(⋮)를 다시 클릭하고 무효화(Void)를 선택합니다.

환불이 완료되면 인보이스를 성공적으로 무효화할 수 있으며 더 이상 활성 또는 결제 완료 인보이스로 표시되지 않습니다.

참고사항:
- 결제 완료된 인보이스는 직접 삭제할 수 없습니다.
- 테스트 모드로 명확히 표시되지 않은 데모나 테스트 결제는 시스템에서 실제 결제처럼 처리됩니다.
- 환불을 통해 인보이스가 기록, 보고서 또는 고객 가시성에 영향을 주지 않도록 할 수 있습니다.
- 에이전시 레벨 사용자(Agency Owner/Admin/User)만 Hyperclass 지원팀에 문의할 수 있으며, 하위 계정 사용자는 할 수 없습니다.

**Q:** 수동 결제를 기록할 때 결제 날짜가 사라지고 "잘못된 날짜" 오류가 표시되는 이유는 무엇인가요?

이 문제는 입력된 수동 결제 날짜가 시스템에서 허용하는 날짜 범위를 벗어나거나 인보이스 타임라인과 충돌할 때 발생하며, 플랫폼에서 이를 거부하고 필드를 지웁니다.

발생 원인:
- 인보이스가 나중 날짜에 발행되었는데 결제 날짜를 과거로 너무 멀리 설정하려는 경우
- 시스템이 인보이스의 발행 및 상태 날짜에 대해 결제 날짜를 검증합니다
- 언어/로케일 설정이 때때로 검증 문제를 일으킬 수 있지만, 이것이 주요 원인은 아닙니다

해결 방법:
- 결제 날짜가 인보이스 발행일과 같거나 그 이후인지 확인하세요
- 결제를 기록하기 전에 페이지를 새로고침하세요
- 인보이스 타임라인과 일치하는 날짜로 결제를 기록해보세요
- 필요하다면 계정 언어를 임시로 영어로 변경하고 다시 시도해보세요

**Q:** 인보이스에서 부분 결제를 할 수 없는 이유는 무엇인가요?

인보이스에 이미 결제 일정(할부)이 설정되어 있으면 부분 결제를 할 수 없을 수 있습니다. 이는 예정된 결제와 충돌하기 때문에 시스템에서 부분 결제를 허용하지 않습니다.

해결 방법:
- 결제 일정을 제거하거나 수정합니다.
- 그 다음 인보이스로 가서 결제 기록 → 수동 기록을 선택하여 부분 결제를 입력합니다.

**Q:** 한 인보이스에는 처리 수수료가 표시되는데 다른 인보이스에는 표시되지 않는 이유는 무엇인가요?

설정(Settings) → 요금(Charges)에서 구성한 처리 수수료는 기존 인보이스에 자동으로 적용되지 않습니다. 새 수수료 옵션을 포함하려면 설정이 활성화되기 전에 만든 인보이스를 다시 생성해야 합니다. 수수료 옵션은 설정에서 변경사항이 저장된 후에 생성된 인보이스에만 표시되고 적용됩니다.

---
*원문 최종 수정: Mon, 16 Feb, 2026 at 1:13 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*