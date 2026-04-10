---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 메시징
---

# 리드가 받는 SMS는 어떤 Twilio 전화번호에서 발송되나요?

**개요**

Hyperclass를 통해 SMS를 발송할 때, 시스템은 일련의 규칙에 따라 발신자로 사용할 Twilio 전화번호를 결정합니다. 이를 통해 가장 적절한 번호에서 메시지가 발송되어 일관성과 규정 준수를 유지할 수 있습니다.

---

**목차**

- [워크플로우 설정 옵션](#워크플로우-설정-옵션)
- [대체 규칙 (사용자 번호가 없을 때)](#대체-규칙-사용자-번호가-없을-때)
- [사용된 번호 확인하기](#사용된-번호-확인하기)

---

**기본 규칙**

1. SMS를 발송하는 팀원이 하위 계정의 My Staff(내 직원) 탭에 등록되어 있고 전용 Twilio 번호가 할당되어 있는 경우:
   ➝ 리드는 해당 할당된 Twilio 번호에서 SMS를 받게 됩니다. (수동으로 변경 가능)

2. 예외: 할당된 Twilio 번호가 SMS와 호환되지 않는 경우, 시스템은 기본 발신 번호로 대체됩니다.

3. 사용자가 메시지를 보낼 번호를 수동으로 선택하는 경우, 시스템은 다음 번에 마지막으로 사용한 번호를 표시합니다.

![사용자 번호 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053960857/original/fAxL4sKwzS_4yVbv2xvI4Ern0QSl-kiZuA.png?1758116362)

---

**사용자에게 Twilio 번호를 할당하는 방법**

1. Sub-Account Settings(하위 계정 설정) > My Staff(내 직원)로 이동합니다.

2. 사용자를 편집합니다.

![사용자 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959012/original/47E8wtytoJnuER0WSD4SpA2bNZ_p10Zfsw.png?1758115345)

3. Call & Voicemail Settings(통화 및 음성메일 설정)를 펼칩니다.

4. 사용자에게 Twilio 전화번호를 할당합니다.

![전화번호 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959210/original/ep5Tz931DpRQ7_j_Y5rXUwa9HDFnMJE8Bw.png?1758115465)

[사용자 전화번호 / Twilio 번호를 사용자에게 할당하기](how-to-assign-lc-phone-numbers-to-users.md)에서 더 자세히 알아보세요.

---

## 워크플로우 설정 옵션

워크플로우 빌더 내에서도 SMS를 보낼 번호를 수동으로 선택할 수 있습니다.

- "Send SMS(SMS 발송)" 단계를 구성할 때 "From Number(발신 번호)" 드롭다운을 볼 수 있습니다.

이는 팀원 할당이나 채널 번호와 상관없이 워크플로우에서 항상 특정 번호로 발송하고 싶을 때 유용합니다.

![워크플로우 SMS 발신 번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959845/original/qlUVFLyfTCV5zYbFAhz3SS187jq-AOvDzg.png?1758115796)

---

## 대체 규칙 (사용자 번호가 없을 때)

Hyperclass에 로그인한 사용자가 하위 계정에 등록되어 있지 않거나 LC 번호가 할당되지 않은 경우, 시스템은 다음 순서로 시도합니다:

- **채널 번호** – 해당 연락처와 함께 사용된 첫 번째 LC 번호입니다.
  이를 통해 대화의 연속성을 유지합니다.

- **기본 발신 번호** – 채널 번호가 제거된 경우, 시스템은 계정 수준에서 설정된 기본 Twilio 번호를 사용합니다.

---

## 사용된 번호 확인하기

대화에서 사용된 정확한 Twilio 번호를 확인하려면:

- 대화 보기에서 SMS 메시지에 마우스를 올립니다.

- 점 세 개(…) > Details(세부 정보)를 클릭합니다.

- 해당 SMS를 보낼 때 사용된 Twilio 번호가 표시됩니다.

![SMS 세부 정보 확인](https://i.ibb.co/YjHc479/chrome-capture-2023-1-20.gif)

---

**관련 문서**

새 번호를 받았는데도 SMS가 이전 Twilio 번호에서 발송되는 문제

---
*원문 최종 수정: Wed, 17 Sep, 2025 at 8:39 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*