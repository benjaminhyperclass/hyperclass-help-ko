---
원문: /support/solutions/articles/155000007171-timezone-adaptation-in-countdown-timers
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 카운트다운 타이머의 시간대 자동 맞춤

시간대 자동 맞춤을 켜면 카운트다운 타이머의 마감 시각이 연락처나 방문자의 시간대에 맞게 달라져요. 이메일에서는 연락처의 시간대 정보를 쓰고, 퍼널과 웹사이트에서는 방문자의 IP로 감지한 시간대를 써요. 시간대 정보를 알 수 없으면 타이머에 설정한 시간대를 대신 사용해요.

이 문서에서는 이메일, 퍼널, 웹사이트 타이머가 시간대를 정하는 방식과 대체 시간대가 적용되는 경우, 설정 방법, 이 기능을 쓰면 좋은 상황을 안내해요.

## 시간대 자동 맞춤이란?

타이머를 만들 때 고른 시간대로 고정하지 않고, 보는 사람의 현지 시간대를 따르게 하고 싶을 때 쓰는 기능이에요. 하이퍼클래스가 연락처나 방문자의 시간대를 알 수 없으면 타이머에 설정한 시간대가 대체 시간대로 쓰여요.

## 시간대를 정하는 방식

카운트다운 타이머를 어디에 넣었는지에 따라 시간대를 가져오는 기준이 달라요.

| 배치 위치 | 시간대 기준 | 대체 시간대 |
| --- | --- | --- |
| 이메일 | 연락처의 시간대 | 타이머에 설정한 시간대 |
| 퍼널 / 웹사이트 | 방문자의 IP로 감지한 시간대 | 타이머에 설정한 시간대 |

대체 시간대 적용: 연락처 시간대나 IP로 감지한 시간대 정보를 알 수 없으면, 하이퍼클래스는 타이머를 설정할 때 고른 시간대를 사용해요.

## 시간대 자동 맞춤 켜기

카운트다운 타이머를 만드는 방법은 [카운트다운 타이머 시작하기](카운트다운-타이머/getting-started-with-countdown-timer.md)를 참고하세요.

1. **마케팅 > 카운트다운 타이머**로 이동한 다음, 수정할 타이머를 열거나 새로 만드세요.
   ![마케팅 메뉴의 카운트다운 타이머 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082254454/original/N-G_yYZzLbh9-ku4ZsoeLcnBMC8PZnn4tg.png?1790824068)
2. 타이머 설정에서 대체 시간대로 쓸 **시간대**를 선택하세요.
   ![카운트다운 타이머의 대체 시간대 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071181691/original/7BVBIWmGbMq0gkZBh8KxS8MQmgu2kTLjZw.png?1778614404)
3. **Adapt to Contact Time Zone**(연락처 시간대에 맞추기) 체크박스를 선택하세요.
   ![Adapt to Contact Time Zone 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071181681/original/r6CCWBnrOIC3HItSZcdd_SFXa12zRllpqg.png?1778614375)
4. 타이머를 저장하세요. 타이머를 지원하는 이메일, 퍼널, 웹사이트에 넣으면 위에서 설명한 시간대 기준이 적용돼요.

   타이머를 넣는 방법은 [이메일에서 카운트다운 타이머 사용하기](카운트다운-타이머/using-countdown-timers-in-emails.md)와 [퍼널에서 카운트다운 타이머 사용하기](카운트다운-타이머/how-to-use-countdown-timers-in-funnels.md)를 참고하세요.

   ![시간대 자동 맞춤이 켜진 상태로 저장된 카운트다운 타이머](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071181709/original/QRM9yAtz84W1eyDpYfbzQpneuRtrW1lAMg.png?1778614430)

## 시간대 자동 맞춤은 언제 쓰나요?

마감 시각이 보는 사람마다 각자의 현지 시계 기준으로 같은 시각에 오게 하고 싶을 때 켜세요. 모든 사람이 같은 절대 시점에 마감되어야 한다면, 시간대 자동 맞춤을 켜기 전에 타이머 설정을 먼저 확인하세요.

## 자주 묻는 질문

### **Adapt to Contact Time Zone**을 켜도 선택한 시간대가 중요한가요?
네. 연락처나 방문자의 시간대 정보를 알 수 없을 때 선택한 시간대가 대체 시간대로 쓰이기 때문에 계속 중요해요.
