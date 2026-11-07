---
원문: /support/solutions/articles/155000003545-hide-third-party-calendar-details
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 연동한 외부 캘린더의 일정 상세 정보 숨기기

외부 캘린더에서 가져온 일정의 상세 정보를 다른 사람에게 보이지 않게 하는 방법을 안내해요. 이 설정을 켜면 캘린더를 연결한 사용자만 일정 상세 정보를 볼 수 있어요. 다른 사용자는 하이퍼클래스에서 상세 정보를 볼 수 없어서 개인 정보를 지키고, 허락 없는 접근을 막을 수 있어요.

## 사용 방법

이 기능은 **내 프로필**과 **캘린더 설정 > 연결**, 두 곳에서 켜고 끌 수 있어요.

### 내 프로필에서 설정하기

1. **설정 > 내 프로필**로 이동하세요.
2. 아래로 스크롤해서 **캘린더 구성** 섹션을 찾으세요.
3. **Private Mode for Synced Events**(동기화된 이벤트 비공개 모드) 옵션을 필요에 따라 켜거나 끄세요.

### 캘린더 설정 > 연결에서 설정하기

1. **캘린더 설정 > 연결**로 이동하세요.
2. 아래로 스크롤해서 **Private Mode for Synced Events** 옵션을 찾으세요.
3. 원하는 대로 켜거나 끄세요.

{% hint style="info" %}
이 기능은 **실험실**에서 사용할 수 있고, 모든 사용자에게 기본으로 켜져 있어요. 동기화된 일정은 나에게만 보이기 때문에 캘린더 공개 범위를 완전히 직접 관리할 수 있어요.
{% endhint %}

![Private Mode for Synced Events 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033207537/original/0RbVh3SPWdcjZnoI9flFgrSOAeZXjJKaGA.jpeg?1726780198)
![Private Mode for Synced Events 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033207540/original/5HtfEDLiYkMeLefMQbnqHQS0EIsWl22Ikg.jpeg?1726780198)

{% hint style="warning" %}
**중요**

1. 지원하는 캘린더: 이 기능은 Google 캘린더와 Outlook 캘린더에만 적용돼요. iCloud는 비공개/공개 일정 설정을 지원하지 않아서, iCloud 일정은 모든 사용자에게 그대로 보여요.
2. Google·Outlook 캘린더의 비공개 일정:

   - 외부 캘린더(Google/Outlook)에서 개별 일정을 비공개로 지정했다면, **Hide Events**(이벤트 숨기기) 토글을 켰는지와 상관없이 하이퍼클래스에서는 기본으로 자동 숨김 처리돼요.
   - **Hide Events** 토글을 켜면 비공개·공개 일정을 포함한 동기화된 모든 일정이 상세 정보 대신 "Busy"(바쁨)로 표시돼요.
{% endhint %}
