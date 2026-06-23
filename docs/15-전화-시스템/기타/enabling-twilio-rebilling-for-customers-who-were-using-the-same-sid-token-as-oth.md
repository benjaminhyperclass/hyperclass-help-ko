---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 다른 고객과 동일한 SID/토큰을 사용하던 고객을 위한 Twilio 재청구 활성화

이 도움말 문서는 이전에 다른 고객과 동일한 SID와 토큰을 사용하던 고객을 위해 Twilio 재청구를 활성화하는 자세한 방법을 제공합니다. 개별 Twilio 계정을 분리하고 구성하여 각 고객에 대한 정확하고 별도의 청구를 보장하는 과정을 다룹니다. 아래 안내된 단계를 따라하면 공유 Twilio 계정 설정에서 재청구 시스템으로 성공적으로 전환하여 청구 정확성과 고객 계정 관리를 개선할 수 있습니다. 이 문서는 전환을 원활하게 관리하고 각 고객의 Twilio 사용량이 적절히 추적되고 청구되도록 도와드리기 위해 작성되었습니다.

**목차**

- [1단계: Twilio 계정에 로그인](#1단계-twilio-계정에-로그인-설정-아이콘-클릭-하위-계정-선택-빨간색-아이콘을-클릭하여-새-하위-계정-생성-및-twilio-재청구를-활성화할-고객과-일치하도록-이름-설정)
- [2단계: Hyperclass 계정에 로그인](#2단계-hyperclass-계정에-로그인--에이전시-설정--twilio--고객으로-스크롤--계정-이름-오른쪽-점-3개-아이콘-클릭--업데이트-자격증명-선택)
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 문서](#관련-문서)

---

Twilio 재청구가 작동하려면 Hyperclass의 고객 하위 계정이 Twilio 계정의 해당 하위 계정에 연결되어야 합니다.

**재청구를 활성화하려는 고객이 다른 고객과 동일한 SID/토큰을 사용하고 있었다면**, SaaS 모드에서 Twilio 재청구를 활성화하기 전에 다음 단계를 따라야 합니다:

## 1단계: Twilio 계정에 로그인 > 설정 아이콘 클릭 > 하위 계정 선택 > 빨간색 + 아이콘을 클릭하여 새 하위 계정 생성 및 Twilio 재청구를 활성화할 고객과 일치하도록 이름 설정

![Twilio 하위 계정 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960554/original/nWDvCQNZrK642hnp_Q1X5d9yqGz3og9j-Q.jpg?1726507199)

## 2단계: Hyperclass 계정에 로그인 > 에이전시 설정 > Twilio > 고객으로 스크롤 > 계정 이름 오른쪽 점 3개 아이콘 클릭 > "업데이트 자격증명" 선택 및 SID와 Auth 토큰 값을 Twilio 계정의 새 하위 계정에서 가져온 새 SID와 토큰 값으로 교체

![Hyperclass 자격증명 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960573/original/8xoTXozHJbk99WD5h7bwGZ5MGxA-dT4qOQ.jpg?1726507231)

새 SID와 토큰을 얻으려면: Twilio 계정에 로그인 > 우측 상단의 설정 아이콘 클릭 > 하위 계정 선택 > 고객 이름을 클릭하면 해당 두 필드를 확인할 수 있습니다:

![Twilio SID와 토큰 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960592/original/rD-zcXx_yWF_Q7qNgq2IVHMjx9bYGY7Ykw.jpg?1726507259)

---

# 자주 묻는 질문

**전환 후 각 고객의 Twilio 청구가 정확하게 반영되는지 어떻게 확인할 수 있나요?**

공유 SID와 토큰에서 전환한 후 각 고객의 Twilio 청구가 정확한지 확인하려면 Hyperclass과 Twilio 대시보드 모두에서 청구 보고서와 사용량 통계를 검토하세요. 이러한 보고서를 비교하여 요금이 각 고객의 개별 계정에 올바르게 할당되는지 확인하세요. 이러한 세부사항을 정기적으로 모니터링하고 교차 확인하면 청구가 정확하게 유지되도록 도울 수 있습니다.

**새 구성에서 문제가 발생하면 공유 SID와 토큰 설정으로 되돌릴 수 있나요?**

공유 SID와 토큰 설정으로 되돌리는 것은 가능하지만 청구 정확성과 계정 관리에 영향을 주는 경우 권장하지 않습니다. 새 구성에서 문제가 발생하면 되돌리기보다는 문제를 해결하고 해결하는 것이 좋습니다. 필요한 경우 되돌리기를 고려하기 전에 특정 문제 해결에 대한 지침을 위해 Hyperclass 또는 Twilio 지원팀에 문의하세요.

# 관련 문서

- [자체 Twilio 계정 사용을 원하는 고객을 위한 Twilio 재청구 활성화](../../16-SaaS-설정/Saas-Mode/enabling-twilio-rebilling-for-customers-who-want-use-their-own-twilio-account.md)

---
*원문 최종 수정: Mon, 16 Sep, 2024 at 12:21 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*