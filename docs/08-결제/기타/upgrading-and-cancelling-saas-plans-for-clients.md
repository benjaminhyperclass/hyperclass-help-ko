---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 클라이언트 SaaS 플랜 업그레이드 및 취소하기

목차

- [고객이 직접 SaaS 플랜을 업그레이드하도록 허용하는 방법](#고객이-직접-saas-플랜을-업그레이드하도록-허용하는-방법)
- [관리자가 SaaS 플랜을 변경하는 방법](#관리자가-saas-플랜을-변경하는-방법)
- [Stripe 고객 찾기](#stripe-고객-찾기)
- [구독 플랜 변경하기](#구독-플랜-변경하기)
- [클라이언트가 구독을 취소하도록 허용하는 방법](#클라이언트가-구독을-취소하도록-허용하는-방법)
- [SaaS가 활성화된 하위 계정을 직접 취소하는 방법](#saas가-활성화된-하위-계정을-직접-취소하는-방법)
- [1단계: SaaS 지갑 잔액 정리](#1단계-saas-지갑-잔액-정리)
- [2단계: 에이전시 뷰에서 하위 계정의 SaaS 비활성화](#2단계-에이전시-뷰에서-하위-계정의-saas-비활성화)
- [3단계: Twilio/Mailgun 하위 계정 닫기 - 에이전시를 떠나는 클라이언트용](#3단계-twiliomailgun-하위-계정-닫기-에이전시를-떠나는-클라이언트용)

## 고객이 직접 SaaS 플랜을 업그레이드하도록 허용하는 방법

**1단계:** SaaS 클라이언트가 회사 청구 페이지에서 직접 구독을 업그레이드할 수 있도록 설정합니다. 이 설정은 에이전시 SaaS 구성에서 관리됩니다. "클라이언트(하위 계정)가 상위 플랜으로 업그레이드 허용" 옆의 체크박스를 선택하면, SaaS 클라이언트가 `Account Settings(계정 설정) > Company Billing(회사 청구)` 내에서 구독을 업그레이드할 수 있습니다.

![SaaS 업그레이드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258929/original/QBj-elD4QfTupGjsCCwPdPGHV7j0A62EFg.png?1707729955)

*이 설정은 앞으로 SaaS 구성을 사용하여 생성되는 모든 SaaS 계정에 적용됩니다.*

**2단계:** 이 설정은 클라이언트별로도 개별 설정할 수 있습니다. `에이전시 사이드바 > Sub-Accounts(하위 계정) > 특정 클라이언트로 스크롤 > 이름 클릭 또는 Manage Client(클라이언트 관리)` 클릭:

![클라이언트 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258927/original/c_zRA_w-8mbDSvuguRgTSiWbckVndKdZyQ.png?1707729955)

**3단계:** 구독 상세 정보까지 스크롤하여 "업그레이드 허용" 체크박스를 선택합니다. 이 설정은 해당 하위 계정에만 적용되며, 앞으로 SaaS 구성을 사용하여 생성되는 모든 SaaS 계정에는 적용되지 않습니다.

![업그레이드 허용 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258930/original/J1oHz4ml_HbrIInN2LNO0X4h97FQOmh3PQ.png?1707729955)

**4단계:** 이 체크박스를 선택하면, 클라이언트의 `Settings(설정) > Company Billing(회사 청구)`에서 구독 상세 정보 아래에 "구독 수정" 버튼이 표시됩니다:

![구독 수정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258925/original/I1EU0LIZIj2P9YFh8I937ZFxbcI8-sUUbA.png?1707729955)

![구독 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258923/original/a6O4tZ55J4hmgpvSWyrhJuvDKyT8J27fbw.png?1707729954)

**5단계:** 그러면 SaaS 구성에서 설정한 상위 티어 플랜 중에서 선택할 수 있습니다:

![플랜 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258926/original/oY_t5PL9o8DyGVyfv6kC5wOw8s6SS1Dcug.png?1707729955)

**6단계:** 원하는 플랜을 선택하면 확인 메시지가 표시되며, 생성한 플랜의 월간 또는 연간 버전 중에서 선택할 수 있습니다:

![플랜 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258931/original/nOs0F5HUKKlteS38s75JfoGzDts1ZiC-9g.png?1707729956)

**7단계:** "확인 및 결제"를 클릭하면 요금이 청구되고, 해당 플랜과 관련된 기능을 계정에서 잠금 해제할 수 있습니다:

![결제 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258928/original/uM6LGGJP6ZrcXMmFeGkj9NAFgxJl6RuYXw.png?1707729955)

## 관리자가 SaaS 플랜을 변경하는 방법

이 예시에서는 Standard, Professional, Premium의 3가지 SaaS 플랜이 있습니다. 각 상위 플랜은 더 많은 기능을 제공합니다.

![SaaS 플랜 구조](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258949/original/iwQXM_JzjMLirjDw2kQ1AidyiF2v7PQZKA.jpeg?1707729959)

기본 기능만 제공하는 Standard 플랜의 로케이션이 있습니다.

![Standard 플랜](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258960/original/jcAMEoUwIm_uE7wXubwCktB2PyIVZuzSQg.jpeg?1707729961)

이 로케이션을 Professional 플랜으로 업그레이드하려면 Stripe 계정으로 가서 해당 로케이션과 연결된 고객을 찾아야 합니다.

### Stripe 고객 찾기

클라이언트의 이메일을 사용해서 Stripe에서 고객을 검색할 수 있습니다. 하지만 권장하는 방법은 해당 로케이션의 인보이스 ID를 검색해서 거기서 고객 ID를 가져오는 것입니다.

**1단계:** `하위 계정 설정 > Company Billing(회사 청구)`로 이동하여 청구 기록에 표시된 인보이스의 "보기"를 클릭합니다:

![인보이스 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258956/original/EPSCcb5ZUT7GqwvgfPowwHQOMEv2BsLJ-A.jpeg?1707729960)

**2단계:** 인보이스 번호를 복사합니다:

![인보이스 번호 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258944/original/mhLy-P2DUHn-SHsR-U9Q6kkpkD2JWYiLpQ.png?1707729958)

**3단계:** Stripe에서 인보이스 번호를 검색하고 인보이스를 클릭하여 상세 정보를 엽니다:

![Stripe 인보이스 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258941/original/asbvNH1s6FCXoCyiuvobSjzsEMfbQkwmew.png?1707729957)

**4단계:** 인보이스의 '청구 대상' 컬럼에 표시된 고객 이메일을 클릭하면 Stripe의 고객 프로필로 이동합니다:

![고객 프로필 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258953/original/AvrjpUC2uADy1Fpu6yEsYgaGFsWdNyHdSg.jpeg?1707729960)

### 구독 플랜 변경하기

이제 Stripe의 고객 프로필에 있으므로 클라이언트의 구독 플랜을 업데이트할 수 있습니다.

**1단계:** 연필 아이콘을 클릭하여 구독 플랜을 업데이트합니다:

![구독 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258936/original/ioHcLTERz9HbeiafEGOM1rBjzL40Ng2RDQ.jpeg?1707729957)

**2단계:** 현재 가격을 제거하고 새 플랜의 가격을 추가합니다:

![가격 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258932/original/vQZ3hjsULXnIuPczFwmh0ZGDo2Stks1ZeA.png?1707729956)

**3단계:** 변경 사항을 검토하고, 다음 인보이스에서 청구 차액을 조정하려면 비례 배분 변경을 설정한 다음 업데이트 버튼을 누릅니다:

![변경 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258945/original/5vWO6HFNCXQFY-vaYDgmnZZIEN6Du9nozw.jpeg?1707729958)

**4단계:** 에이전시 계정에서 `Accounts(계정) 탭 > 로케이션의 세부 정보 보기`로 이동합니다. 플랜이 업그레이드되었지만, 새 플랜에 따라 접근 가능한 기능을 여전히 업데이트해야 합니다:

![기능 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258952/original/ymQXeiYsIvqfkWEGhykJEAoE077TnOhVCw.jpeg?1707729960)

**5단계:** 이 로케이션의 업데이트된 기능 세트를 저장하면 완료입니다!

![설정 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020258942/original/yOXOdy9VzOMmXHIUeWcw8ZjhnmQlU8K7nw.png?1707729958)

---

## 클라이언트가 구독을 취소하도록 허용하는 방법

SaaS 에이전시는 이제 SaaS 클라이언트가 구독을 취소할 수 있도록 허용할 수 있습니다. 취소 요청을 받아 SaaS 클라이언트를 유지할 기회를 얻는 것이 이탈 방지에 필수적이라고 생각하기 때문에 이 기능은 기본적으로 비활성화되어 있습니다. 하지만 결정은 이제 여러분에게 달려 있습니다! 에이전시는 SaaS 구성에서 이 기능을 활성화할 수 있습니다.

![취소 허용 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262546/original/db5vTaQnSCztWGzwgftQla8J0JKdgAaohA.png?1707731252)

**1단계:** "클라이언트(하위 계정)가 구독 취소 허용" 체크박스를 선택한 다음 "변경 사항 저장" 버튼을 누릅니다.
이 설정은 앞으로 SaaS 구성을 사용하여 생성되는 모든 SaaS 계정에 적용됩니다.

**2단계:** 이 기능은 클라이언트별로도 제어할 수 있습니다. `에이전시 사이드바 > Sub-Accounts(하위 계정) > 특정 클라이언트로 스크롤 > 이름 클릭 또는 Manage Client(클라이언트 관리)`:

![클라이언트별 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262544/original/1UzR-8fucrnKtP1-uDlyZ-4PCjkBOT0kww.png?1707731252)

![취소 허용 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262545/original/ZitR8ICitCkPXTZ55ALXaG-NOd2lKuOAiw.png?1707731252)

**3단계:** "클라이언트(하위 계정)가 구독을 취소하도록 허용" 체크박스를 선택하면 클라이언트가 구독을 취소할 수 있습니다. 이 설정은 해당 하위 계정에만 적용되며, 앞으로 SaaS 구성을 사용하여 생성되는 모든 SaaS 계정에는 적용되지 않습니다.
이 체크박스를 선택하면, 클라이언트의 `Settings(설정) > Company Billing(회사 청구)`에서 구독 상세 정보 아래에 "구독 수정" 버튼이 표시됩니다:

![구독 취소 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262538/original/M1ZNUwtQ414WLcr1VVOQbZE4O8pT3y98yg.png?1707731250)

**4단계:** "취소"를 클릭하면 클라이언트에게 다음 확인 팝업이 표시됩니다:

![취소 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262539/original/uGu-nfLJkIwqN_Semer5cN_lhOLl4LfYRA.png?1707731251)

**5단계:** "취소 확인"을 클릭하면 다음 메시지가 표시됩니다:

![취소 완료 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262542/original/VNuPpV2cvQ9llBPt32JN7P5_GVEi-PjkfA.png?1707731252)

**6단계:** 재활성화할 때까지 취소된 계정에 접근하려고 하면 다음 메시지가 표시됩니다:

![재활성화 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020262543/original/1slpXBqL8F9pWBfj7-5XFC2ZEhTf2YeOWg.png?1707731252)

**7단계:** 클라이언트가 구독을 취소한 경우, 재활성화 버튼을 클릭하여 하위 계정을 다시 활성화할 수 있습니다. 또한 필요한 경우 결제 방법을 변경하는 옵션도 있습니다.

실수로 잠겨있는 경우, 클라이언트는 회사 설정의 에이전시 이메일을 통해 연락할 수도 있습니다.

---

## SaaS가 활성화된 하위 계정을 직접 취소하는 방법

### 1단계: SaaS 지갑 잔액 정리

클라이언트의 지갑에 무료가 아닌 크레딧이 있다면, Stripe에서 이를 환불해야 합니다.

지갑 크레딧이 무료인지 유료인지는 `하위 계정 설정 > Company Billing(회사 청구) > 세부 정보 보기(거래 기록)`에서 확인할 수 있습니다.

자세한 내용은 다음 문서를 참조하세요: [SaaS 지갑 크레딧 관리](saas-wallet-credit-management.md)

![지갑 크레딧 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020264621/original/jYOdXoLAyBiFnnHpBNOXlsTFTglFu8lFaQ.png?1707732186)

### 2단계: 에이전시 뷰에서 하위 계정의 SaaS 비활성화

`에이전시 뷰 > Accounts(계정) 탭 > 세부 정보 보기`로 이동하여 이 하위 계정의 SaaS를 비활성화합니다:

![SaaS 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020264618/original/hAw8VLX_nL-ZYJ4i-_l7sleUk_3_mcCFjw.png?1707732186)

더 이상 클라이언트에게 SaaS 플랜 요금을 청구하지 않으려면 Stripe 구독을 취소하세요:

![Stripe 구독 취소](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020264619/original/GpCqMF1Iw0B45BVsJ93zHa0BHYlfbbactg.png?1707732186)

SaaS 모드가 비활성화되면 모든 거래/지갑 기록이 제거되므로, SaaS를 비활성화하기 전에 모든 거래 세부 정보를 내보내기하는 것을 권장합니다:

![거래 내역 내보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020264622/original/5KtpVkT2x-TeSt0Zjyr8ZNavJu_iZglX3w.jpeg?1707732186)

### 3단계: Twilio/Mailgun 하위 계정 닫기 - 에이전시를 떠나는 클라이언트용

하위 계정에 Twilio 또는 Email(Mailgun) 재청구가 켜져 있는 경우, SaaS를 비활성화한 후에도 해당 Twilio/Mailgun 하위 계정이 `에이전시 설정 > Twilio/Mailgun`에 여전히 연결되어 있습니다. 이러한 연결을 삭제하고 해당 하위 계정을 닫았는지 확인하세요.

**4단계: 팀 관리에서 사용자 제거/하위 계정 삭제 - 에이전시를 떠나는 클라이언트용**

이 단계는 선택에 따라 다릅니다.

- 클라이언트를 제거한 후에도 데이터를 유지하려면 `에이전시 설정 > Team(팀)`으로 이동하여 클라이언트 사용자를 제거하세요.
- 데이터를 유지하지 않으려면 `Accounts(계정) > 세부 정보 보기`로 이동하여 하위 계정을 삭제하세요.

![계정 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020264620/original/oO0K3Qqsrcf1ktAPmol8Dr-4DY6i9Ho4hA.png?1707732186)

---
*원문 최종 수정: 2024년 2월 12일 오전 4:07*
*Hyperclass 사용 가이드 — hyperclass.ai*