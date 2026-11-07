---
원문: /support/solutions/articles/48001185898-facebook-conversion-api-workflow-trigger-not-working
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# Facebook Conversion API 워크플로우 트리거가 작동하지 않을 때

워크플로우에서 Facebook Conversion API를 테스트했는데 트리거가 작동하지 않는다면 이 문서를 확인하세요. 테스트할 때 주의할 점과 사용할 수 있는 트리거를 안내해요.

## 테스트할 때 주의할 점

워크플로우에서 Facebook Conversion API를 테스트할 때는 **Test Workflow**(워크플로우 테스트) 버튼을 쓰지 마세요.

전환을 테스트하려면 항상 워크플로우를 **Save**(저장)하고 **Publish**(게시)한 뒤, 아래 트리거 중 하나를 사용하세요.

## 사용할 수 있는 트리거

트리거는 입력 트리거여야 해요. 예를 들면 다음과 같아요.

1. **Form Submission**(폼 제출)
2. **Survey submission**(설문 제출)
3. **Appointment Submission**(예약 제출, 예약 위젯에서 예약할 때)
4. **2 step order form**(2단계 주문 폼)

## 예약 트리거는 이렇게 선택하세요

예약으로 테스트할 때는 **Customer Booked appointment**(고객이 예약을 등록함) 트리거만 작동해요. **Appointment**(예약) 트리거는 작동하지 않아요.

**Appointment** 트리거는 일반 트리거이고, **Customer Booked appointment** 트리거가 예약 위젯용 트리거이기 때문이에요.

## Lead value 입력

**Purchase**(구매) 이벤트를 사용한다면 **Lead value**(리드 값)를 꼭 입력해야 해요. Purchase 이벤트를 쓰지 않으면 비워 두어도 돼요.
