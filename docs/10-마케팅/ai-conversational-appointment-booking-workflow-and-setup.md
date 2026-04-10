---

번역일: 2026-04-06
카테고리: 10-마케팅
---

# AI 대화형 예약 워크플로우 설정 가이드

### 워크플로우 안에서 AI 대화형 예약 봇을 설정하는 단계별 가이드입니다.

---

## 1. 워크플로우 생성

고객이 답장했을 때(Customer Replied) 또는 다른 트리거를 추가하세요.

![워크플로우 트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359047/original/9_O9O-lOgVZzMFPEhKvgEiajAtnaS18yhw.png?1655208406)

## 2. 워크플로우 옵션에서 AI 예약 봇 선택

원하는 캘린더로 예약 봇 액션을 생성하세요.

"총 봇 처리 시간(Total bot processing duration)"을 설정하세요 - 연락처로부터 답장이 없을 경우 봇이 타임아웃되기까지의 시간입니다.

![AI 예약 봇 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359049/original/pr8zGFvRVV-AiELuKGmg8rgJOyAzi19VpQ.png?1655208407)

## 3. AI 대화는 다음 3가지 중 하나의 방식으로 종료됩니다

1. 봇이 성공적으로 예약을 완료한 경우

2. 봇 타임아웃: 리드가 봇의 메시지에 응답하지 않아서 예약이 완료되지 않은 경우

3. **기타 이유로 예약이 완료되지 않은 경우** - 적절한 시간대가 없거나, 봇이 질문을 이해하지 못했거나, 기타 기술적 문제

## 4. 봇이 예약을 완료했는지 확인하는 조건 생성

![예약 완료 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359046/original/hJxKhMj9Kpsm64xjTF7gE24n8eRgzgs72g.png?1655208406)

## 5. 예약 완료 조건에 대한 메시지 또는 액션 생성

![예약 완료 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359048/original/KKvlxmWPb4Du_Qzq0o7_HgVBmsxWMJ2a3A.png?1655208406)

## 6. 봇 타임아웃으로 인해 예약이 완료되지 않은 경우의 두 번째 조건

여기서는 봇 타임아웃 때문에 예약이 완료되지 않은 것인지, 아니면 다른 이유 때문인지 확인하려고 합니다.

일반적인 이유로는 예약 가능한 시간대가 없거나 봇이 대화를 이해하지 못한 경우가 있습니다.

![봇 타임아웃 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359051/original/WYUwNv5-5grq9Jlo-YUcHXatsZbInn14ig.png?1655208407)

## 7. 세 번째 조건 - 기타 이유로 예약이 완료되지 않은 경우

기타 이유로 봇이 실패했을 때를 위한 적절한 액션을 설정하세요. Eliza Agent Platform 구독이 있다면, 리드를 그곳으로 보내서 리드 육성을 계속할 수 있습니다.

![기타 실패 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359050/original/lbIxgrDyMUfoe8A8bvOrTM4D7YWvX1h5Mw.png?1655208407)

---
*원문 최종 수정: 2022년 6월 21일*
*Hyperclass 사용 가이드 — hyperclass.ai*