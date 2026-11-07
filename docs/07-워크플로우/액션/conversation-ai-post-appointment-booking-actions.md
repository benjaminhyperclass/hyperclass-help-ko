---
원문: /support/solutions/articles/155000003421-conversation-ai-post-appointment-booking-actions
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 대화 AI 예약 완료 후 동작 설정

**대화 AI**(Conversation AI)의 서브 계정 예약 부킹 인텐트에서 예약이 끝난 뒤 실행할 동작을 정하는 방법을 안내해요. 예약 직후 봇을 잠시 멈추거나, 워크플로우를 자동으로 시작하고 싶을 때 쓰세요.

## 목표

지금까지는 연락처가 예약을 마치면 인텐트가 이후 대화를 이어 가는 상태로 바뀌었어요. 그런데 고객 요청이 이어지면서 두 가지 기능이 필요해졌어요.

1. **Put the Bot to Sleep**(봇 휴면 전환): 이미 예약이 완료된 경우 봇의 응답을 자동으로 끄세요.
2. **워크플로우 트리거**: 예약이 완료된 직후 지정한 워크플로우를 시작하세요.

## 해결 방법

이 요청을 반영해 **예약 부킹** 설정 안에 새 설정 두 가지를 추가했어요.

주요 기능은 다음과 같아요.

1. **Put the Bot to Sleep**: 예약이 완료된 뒤 봇을 휴면 상태로 둘 수 있어요. 봇이 응답하지 않을 기간을 직접 정할 수 있고, 이 기간에는 자동 응답이 더 이상 전송되지 않아요.
2. **워크플로우 트리거**: 휴면 설정과 별개로, 예약이 완료되면 워크플로우를 하나 이상 시작하도록 정할 수 있어요. 드롭다운 메뉴에서 워크플로우를 여러 개 선택해 설정하면, 예약 직후 자동으로 시작돼요.

{% hint style="info" %}
두 설정은 동시에 켤 수 있어요. 필요에 맞게 조합해서 쓰세요.
{% endhint %}

![예약 부킹 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032710713/original/aZxW5-HETyd8ZEgGIGHelhflDbNZGZorZw.png?1726088868)

![예약 부킹 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032710755/original/1LAkfk_-djOsrQA2C53x-8_nralrCYEc_w.png?1726088940)

![예약 부킹 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032710765/original/_LgTfhRiZIUinYmZhmcnKuotWO0iPuuCUg.png?1726088976)

![예약 부킹 설정 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032710775/original/ylLaVPqdyp80QJaO4t5n4BMo2occzV5efQ.png?1726088999)
