---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# LC 이메일 검증 활성화 및 재청구 방법

이메일 검증(Email Verification)은 이메일 주소가 정당하고 활성화된 계정의 특성을 가지고 있는지 확인하는 과정입니다. 이 대량 도구는 가짜/비활성 주소로 이메일을 보내는 것을 방지합니다. LC 이메일과 Mailgun에서만 사용할 수 있습니다.

목차

- [이메일 검증이란](#이메일-검증이란)
- [이메일 검증 활성화 방법 (에이전시 레벨)](#이메일-검증-활성화-방법-에이전시-레벨)
- [이메일 검증 활성화 방법 (하위 계정 레벨)](#이메일-검증-활성화-방법-하위-계정-레벨)
- [90일마다 이메일 재검증 활성화](#90일마다-이메일-재검증-활성화)
- [이메일 검증 요금 및 재청구](#이메일-검증-요금-및-재청구)
- [이메일 검증 작동 방식](#이메일-검증-작동-방식)
- [자주 묻는 질문](#자주-묻는-질문)

# 이메일 검증이란

활성화되면 이메일 검증은 자동으로 "백그라운드에서" 실행됩니다. 90일마다 재검증하도록 설정할 수 있습니다. 이는 유료 서비스이며, 상호작용할 수 없거나 하지 않을 계정으로 이메일을 보내지 않음으로써 이메일 캠페인의 건전성을 크게 향상시킵니다. 이를 통해 발송 점수를 높게 유지하고 이메일 전달률을 개선할 수 있습니다.

## 이메일 검증 활성화 방법 (에이전시 레벨)

단계 1: Agency(에이전시) > Settings(설정)로 이동합니다
![에이전시 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226444/original/BmdtAPhC_AVF0oeJONK0GfYUKuI58wSjdg.png?1737504795)

단계 2: Email Services(이메일 서비스) > Location Settings(로케이션 설정) > Email Verification(이메일 검증) 컬럼으로 계속 이동합니다
![이메일 검증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226468/original/3Pa434oDNqywtAwKMJwsUo5gzpxviq3RAQ.png?1737504887)

단계 3: 각 하위 계정 또는 모든 하위 계정에 대해 이메일 검증을 활성화(또는 비활성화)합니다
![이메일 검증 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226484/original/1r_FrAbbQAaa9K1H1Bg9wxpKgJ0YsWs1RA.png?1737504968)

선택 사항, 단계 4: Advanced Settings(고급 설정)으로 계속 이동하여 "새 하위 계정에 대해 자동으로 이메일 검증 활성화"를 체크하거나 체크 해제합니다
![자동 이메일 검증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226767/original/tjBsZtiTzP9nxA3pj7WwVtRUolE4Fq86cA.png?1737506094)

## 이메일 검증 활성화 방법 (하위 계정 레벨)

단계 1: Subaccount(하위 계정) > Settings(설정)으로 이동합니다
![하위 계정 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226719/original/dUw4mXRhuaZ5TCLgsajdcEGO_TEzAC3vEw.png?1737505836)

단계 2: Business Profile(비즈니스 프로필) > General(일반)로 계속 이동합니다
![비즈니스 프로필 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226733/original/GPwxyWWVxdylX5rmqrrSMUQMO1OdYYK6Xg.png?1737505901)

단계 3: 이메일 검증 설정을 체크하거나 체크 해제합니다
![이메일 검증 설정 체크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226749/original/4EFxdTjfNaZ6brzMO_wFU_8Ad5-Rnj2BXg.png?1737505937)

하위 계정 사용자가 이메일 검증을 활성화하면, 모든 활성 에이전시 관리자와 회사의 등록된 이메일 주소로 알림이 전송됩니다 - 제목: 하위 계정에서 이메일 검증 활성화됨 (LC 이메일에만 해당).

![이메일 검증 활성화 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029902371/original/GIN4_Fw_IN3QaYv5k9TPQIeWSt1F-OgPow.jpg?1721926642)

## 90일마다 이메일 재검증 활성화

이메일 주소의 품질은 변할 수 있으므로, 이전에 검증된 이메일 주소를 정기적으로 재검증하는 것이 좋습니다. 그렇게 하면 이메일 발송 점수에 영향을 받은 후에 주소가 나빠졌다는 것을 알게 되지 않습니다.

단계 1: Agency(에이전시) > Subaccounts(하위 계정)으로 이동하고 하위 계정 카드 우하단 모서리의 점 3개 메뉴를 클릭 > Manage Client(클라이언트 관리)
![클라이언트 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226787/original/GYYxPDEUZlzGxEZLaEG2L9vd-8x2k7V53g.png?1737506220)

단계 2: Advanced Settings(고급 설정) > Advanced Email Settings(고급 이메일 설정)으로 계속 이동하여 "90일 재검증 활성화"를 체크하거나 체크 해제합니다
![90일 재검증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226804/original/3NDtG-FaLhZrJuPdH4PjCCRFJ9CVlIpwmg.png?1737506342)

## 이메일 검증 요금 및 재청구

모든 플랜에서 1000번의 이메일 검증당 $2.5를 청구합니다. 이는 대부분의 주요 제공업체보다 낮은 비용입니다(예: MailGun $12/1000).

LC 이메일 검증 재청구 설정은 SaaS Configurator(SaaS 구성기) > Plan Details(플랜 세부사항) > Rebilling(재청구)에 있습니다. Starter 플랜은 재청구를 할 수 없고, Unlimited 플랜은 고정 마크업 1.05배만 재청구할 수 있으며, Pro 플랜은 1.05배에서 10배 사이의 마크업으로 재청구할 수 있습니다.

![재청구 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226905/original/3n_R-VvMrLnzpi0n3JKwX6g1gbCSa_bOhg.png?1737506674)

개별 이메일 검증 요금을 보려면 Agency Billing Wallet(에이전시 청구 지갑)으로 이동하세요. 모든 개별 실행이 이 청구 보기에서 항목화되어 있어 세부사항을 자세히 살펴보고 모호함이 없도록 할 수 있습니다.

단계 1: Agency(에이전시) > Settings(설정)으로 이동합니다
![에이전시 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300128/original/arhHUQsbo9aVrGwGQI9r0YcvjJYUapTB8Q.png?1737596728)

단계 2: Billing(청구) > Wallet & Transactions(지갑 및 거래) > Detailed Transactions(세부 거래)로 계속 이동합니다
![세부 거래 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300100/original/Cht9DFF36yQaJKnY1JVRE_IIo9xuQZ5f8g.png?1737596561)

단계 3: 이메일 검증 항목만 필터링한 다음 각 거래를 자세히 검토할 수 있습니다.
![이메일 검증 거래 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300126/original/wXYCGB6MXvRNpdodySbMi0DXIwTizc-46A.png?1737596703)

## 이메일 검증 작동 방식

이메일 검증이 활성화되면, 모든 이메일 주소는 첫 번째 이메일을 보내기 전에 검증됩니다(이미 검증되지 않은 경우). 90일마다 재검증도 활성화된 경우, 검증은 90일 후에 만료되고 다른 이메일을 보내기 전에 이메일 주소가 검증됩니다.

연락처 상세 페이지에서 이메일 검증을 수동으로 확인할 수 있습니다.

단계 1: Subaccount(하위 계정) > Contacts(연락처) 섹션으로 이동합니다
![연락처 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300160/original/SKALqJ_LL8rxLaZEnTLKDl0ezY0AIPcnaQ.png?1737596920)

단계 2: 연락처의 세부사항을 클릭합니다
![연락처 세부사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300210/original/1Q8oQog4BgRGb0F-0x-Fqo21WRN7R5J4FQ.png?1737597032)

단계 3: Contact(연락처) 섹션을 확장합니다
![연락처 섹션 확장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300233/original/kEive6W3un5YtnbZ2ZUXMd_LJsU5m0Ikqw.png?1737597112)

단계 4: Email(이메일) 필드까지 스크롤합니다

![이메일 검증 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040440257/original/FJYzNO-k72vrGzNDGyN2Ij9YXP1dlTEt6g.png?1737770899)

"Not Verified(검증되지 않음)"는 해당 이메일이 이메일 검증 서비스로 테스트되지 않았음을 의미합니다.
![검증되지 않음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300289/original/kvN55koy3sDHrGJXgDXIkSvAk13u-WgfNw.png?1737597234)

"Invalid(유효하지 않음)"는 해당 이메일이 테스트되었고 이메일 검증에 실패했음을 의미합니다.
![유효하지 않음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300292/original/xqVPIQfH1Set388He-QkYoEOsNzwMSkrTA.png?1737597259)

"Verified(검증됨)"는 해당 이메일이 테스트되었고 이메일 검증에 통과했음을 의미합니다.
![검증됨](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300294/original/A1DriVwG5LvV65BmqXhRbf4RwIltTTViuA.png?1737597283)

## 자주 묻는 질문

**이메일 검증은 무엇을 확인하나요?**

이메일 검증은 Mailgun의 "나쁜" 목록에 이메일이 있는지 확인합니다. 또한 다음을 확인합니다:

- 이메일 주소 구문이 올바른지
- 도메인이 이메일을 받도록 설정되었는지
- 이메일 주소가 존재하는지
- 이메일 주소가 고위험 주소가 아닌지
- 이메일 주소가 info@domain.com 또는 admin@domain.com과 같은 역할 기반 주소가 아닌지

**이메일 검증이 왜 중요한가요?**

이메일 검증이 중요한 이유는 다음과 같습니다:

- 유효하지 않은 이메일 주소를 제거하여 전달률을 높입니다
- 이메일 목록을 최신 상태로 유지하여 메일링 목록 위생을 관리합니다
- 클릭률(CTR), 개봉률, 클릭-개봉률(CTOR) 같은 이메일 마케팅 지표를 개선합니다
- 발신자 평판을 보호합니다

**이메일 검증이 이메일 전달성에 어떤 영향을 미치나요?**

이메일 전달성은 반송된 이메일에 크게 영향을 받습니다. 미리 이메일 검증을 수행하여 이메일 반송을 줄이세요.

이메일 서비스 제공업체(ESP)가 구독자의 인박스에 이메일을 배치할 수 없을 때 IP 주소와 도메인 평판이 타격을 받습니다. 이는 이메일 클라이언트가 IP와 발신자 평판에 의존하여 메시지를 전달할지 여부를 결정하기 때문에 향후 전달성에 영향을 미칩니다. 발신자나 IP 평판이 나쁘면, 이메일 클라이언트는 도메인 이름에서 보낸 이메일을 구독자의 스팸 폴더에 넣기로 결정할 수 있습니다. 또는 아예 전달하지 않을 수도 있습니다.

**내 하위 계정에 자동 이메일 검증이 활성화된 이유는 무엇인가요?**

하위 계정에 자동 이메일 검증이 활성화된 이유는 지난 30일 내에 생성되었고, 가져온 이메일 목록의 전달률이 90% 미만으로 떨어졌기 때문입니다. 이 기능은 이메일 주소의 정확성과 전달성을 보장하여 높은 전달률과 효과적인 이메일을 유지하는 데 도움이 되도록 설계되었습니다.

**언제 이메일 목록을 검증해야 하나요?**

메일링 목록을 구매했거나(강력히 권장하지 않음) 익숙하지 않은 메일링 목록을 상속받은 경우입니다. 이메일 검증기를 사용하는 것이 좋은 아이디어입니다.

또한, 목록이 증가했거나 마지막으로 이메일 주소를 검증한 지 시간이 지났다면, 오늘 메일링 목록의 상태 점검을 하는 것을 권장합니다.

**클라이언트의 이메일 사용량은 어디서 볼 수 있나요?**

Agency Settings(에이전시 설정) → Billing(청구) → See Details(세부사항 보기)(Credits(크레딧) 하위)로 이동하면 클라이언트의 이메일 사용량을 볼 수 있습니다.

**사용량을 클라이언트에게 어떻게 청구할 수 있나요?**

Unlimited 또는 Pro 플랜을 사용하는 경우, 클라이언트에게 재청구하여 수동으로 청구하는 데 필요한 시간과 노력을 절약할 수 있습니다.

---
*원문 최종 수정: Fri, 24 Jan, 2025 at 8:09 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*