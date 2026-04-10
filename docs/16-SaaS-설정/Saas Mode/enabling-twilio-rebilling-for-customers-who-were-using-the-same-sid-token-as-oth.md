---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# 다른 고객과 같은 SID/토큰을 사용하던 고객의 Twilio 재청구 활성화하기

이 가이드는 이전에 다른 고객과 같은 SID와 토큰을 사용하던 고객에게 Twilio 재청구(Rebilling)를 활성화하는 상세한 방법을 제공합니다. 공유 Twilio 계정에서 개별 계정으로 분리하여 각 고객의 정확하고 독립적인 청구를 보장하는 과정을 다룹니다. 안내된 단계를 따르면 공유 Twilio 계정 설정에서 재청구 시스템으로 성공적으로 전환하여 청구 정확성과 고객 계정 관리를 개선할 수 있습니다. 이 가이드는 전환 과정을 원활하게 진행하고 각 고객의 Twilio 사용량이 적절히 추적되고 청구되도록 도와줍니다.

**목차**

- [1단계: Twilio 계정에 로그인하기](#1단계-twilio-계정에-로그인하기)
- [2단계: Hyperclass 계정에 로그인하기](#2단계-hyperclass-계정에-로그인하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

Twilio 재청구가 작동하려면 Hyperclass의 고객 하위 계정이 Twilio 계정의 해당 하위 계정과 연결되어야 합니다.

**재청구를 활성화하려는 고객이 다른 고객과 같은 SID/토큰을 사용하고 있었다면**, SaaS 모드에서 Twilio 재청구를 활성화하기 전에 다음 단계를 따라야 합니다:

## 1단계: Twilio 계정에 로그인하기

Twilio 계정에 로그인 > 톱니바퀴 아이콘 클릭 > Sub-accounts 선택 > 빨간색 + 아이콘을 클릭하여 새 하위 계정을 만들고 Twilio 재청구를 활성화하려는 고객과 일치하는 이름으로 명명합니다.

![Twilio 하위 계정 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960554/original/nWDvCQNZrK642hnp_Q1X5d9yqGz3og9j-Q.jpg?1726507199)

## 2단계: Hyperclass 계정에 로그인하기

Hyperclass 계정에 로그인 > Agency Settings(에이전시 설정)로 이동 > Twilio > 해당 고객까지 스크롤 > 계정 이름 오른쪽의 점 3개 아이콘 클릭 > "Update Credentials(자격증명 업데이트)"를 선택하고 SID와 인증 토큰 값을 Twilio 계정의 새 하위 계정에서 가져온 새 SID와 토큰 값으로 교체합니다.

![Hyperclass에서 Twilio 자격증명 업데이트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960573/original/8xoTXozHJbk99WD5h7bwGZ5MGxA-dT4qOQ.jpg?1726507231)

새 SID와 토큰을 얻으려면: Twilio 계정에 로그인 > 우측 상단의 톱니바퀴 아이콘 클릭 > Sub-accounts 선택 > 고객 이름을 클릭하면 해당 필드 두 개를 볼 수 있습니다:

![Twilio 하위 계정에서 SID와 토큰 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960592/original/rD-zcXx_yWF_Q7qNgq2IVHMjx9bYGY7Ykw.jpg?1726507259)

---

## 자주 묻는 질문

**전환 후 각 고객의 Twilio 청구가 정확히 반영되는지 어떻게 확인할 수 있나요?**

공유 SID와 토큰에서 전환한 후 각 고객의 Twilio 청구가 정확한지 확인하려면 Hyperclass와 Twilio 대시보드의 청구 보고서와 사용량 통계를 검토하세요. 이 보고서들을 비교하여 각 고객의 개별 계정에 요금이 올바르게 할당되었는지 확인합니다. 이런 세부 사항을 정기적으로 모니터링하고 교차 확인하면 청구가 정확하게 유지되는지 확인할 수 있습니다.

**새 설정에서 문제가 발생하면 공유 SID와 토큰 설정으로 되돌릴 수 있나요?**

공유 SID와 토큰 설정으로 되돌리는 것은 가능하지만 청구 정확성과 계정 관리에 영향을 미친다면 권장하지 않습니다. 새 설정에서 문제가 발생하면 되돌리기보다는 문제를 해결하는 것이 좋습니다. 필요한 경우, 되돌리기를 고려하기 전에 특정 문제 해결에 대한 지침을 Hyperclass나 Twilio 지원팀에 문의하세요.

---
*원문 최종 수정: Mon, 16 Sep, 2024 at 12:21 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*