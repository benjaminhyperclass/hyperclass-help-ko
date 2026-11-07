---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009399-online-booking-page-in-field-services
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 현장 서비스의 온라인 예약 페이지

온라인 예약 페이지에서는 고객이 시간에 상관없이 직접 서비스를 찾고, 주소가 서비스 지역에 포함되는지 확인하고, 시간을 골라 예약하거나 예약 요청을 보낼 수 있어요. 사무실에 전화할 필요가 없어요. 이 문서에서는 고객에게 각 단계가 어떻게 보이는지, 먼저 무엇을 설정해야 하는지, 페이지를 어떻게 공유하는지 알려 드려요.

{% hint style="info" %}
현장 서비스는 현재 비공개 베타 상태이며 일부 계정에서만 사용할 수 있어요. 기능과 화면은 개선 과정에서 바뀔 수 있어요.
{% endhint %}

## 온라인 예약 페이지란?

온라인 예약 페이지는 내 비즈니스 브랜드로 꾸며서 고객에게 보여 주는 페이지예요. 고객은 이 페이지에서 다음을 할 수 있어요.

- 서비스와 애드온 둘러보기
- 내 주소가 서비스 지역에 포함되는지 확인하기
- 원하는 시간 고르기
- 세부 정보를 입력하고 결제하거나, 팀이 검토할 수 있게 예약 요청 보내기

데스크톱, 태블릿, 모바일에서 모두 사용할 수 있고, 서비스마다 바로 연결되는 예약 링크도 따로 있어요. 페이지의 겉모습은 [현장 서비스의 예약 페이지 편집기](Field-Services/booking-page-editor-in-field-services.md)에서, 동작 방식은 [현장 서비스 설정: 온라인 예약](Field-Services/field-services-settings-online-booking.md)에서 조정해요.

![서비스가 카테고리별로 묶여 있는 온라인 예약 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192645/original/SSIploy9Uk36Ko2ahaCNAxlgCzhuOeH3IQ.jpg)

## 예약 페이지를 공유하기 전에

예약 페이지는 현장 서비스의 다른 설정을 바탕으로 만들어져요. 고객에게 제대로 동작하는 페이지를 보여 주려면 아래 항목을 먼저 확인하세요.

| 설정 항목 | 중요한 이유 | 자세히 보기 |
| --- | --- | --- |
| **서비스** | 페이지에는 서비스만 표시되고, 직원이 배정되지 않은 서비스는 온라인으로 예약할 수 없어요. | [현장 서비스의 서비스와 애드온](Field-Services/services-and-add-ons-in-field-services.md) |
| **직원** | 예약 가능한 시간은 직원의 근무 시간, 배정된 서비스, 서비스 지역을 기준으로 정해져요. | [현장 서비스의 직원](Field-Services/staff-in-field-services.md) |
| **서비스 지역** | 고객이 시간을 고르기 전에 주소가 서비스 지역에 포함되는지 확인해요. | [현장 서비스의 서비스 지역](Field-Services/service-areas-in-field-services.md) |
| 예약 규칙과 결제 | 고객이 시간을 고르는 방식, 즉시 예약인지 예약 요청인지, 결제 방식을 정해요. | [현장 서비스 설정: 온라인 예약](Field-Services/field-services-settings-online-booking.md) |
| 디자인과 문구 | 로고, 색상, 각 단계에서 고객에게 보이는 문구를 설정해요. | [현장 서비스의 예약 페이지 편집기](Field-Services/booking-page-editor-in-field-services.md) |

## 고객에게 보이는 화면, 단계별로 보기

### 1. 서비스 둘러보기

고객은 서비스 목록 화면에서 시작해요. 서비스는 카테고리별로 묶여 있고, 검색창과 필터로 원하는 서비스를 찾을 수 있어요. 상단 바에는 고객의 서비스 주소와 장바구니가 표시돼요.

### 2. 주소 확인하기

예약하기 전에 고객은 서비스를 받을 주소를 입력하거나 현재 위치를 사용해요. 페이지는 이 주소를 내 서비스 지역과 비교해서 서비스 가능 여부를 바로 알려 줘요.

![서비스 가능한 주소임을 알려 주는 주소 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192662/original/vaLvupffAvWFQj9HB0nRLN5cWT0Ieml5cw.jpg)

주소가 서비스 지역 밖이라면, 이후 과정은 **Bookings outside service areas**(서비스 지역 밖 예약) 정책에 따라 달라져요.

- **Block booking**(예약 차단): 고객이 해당 주소로는 예약할 수 없어요.
- **Allow booking with review**(검토 후 예약 허용): 고객이 예약할 수 있고, 팀이 그 예약을 검토해요. 고객에게는 미리 작성해 둔 메시지가 표시돼요.

![서비스 지역 밖 주소를 확인한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192683/original/y8cgnuLXNN4dnj5Y9xrcYnPef8vUoGl3Mw.jpg)

이 정책을 설정하는 방법은 [현장 서비스의 서비스 지역](Field-Services/service-areas-in-field-services.md)에서 확인하세요.

### 3. 서비스 선택하기

서비스 페이지에는 상세 설명, 가격, 옵션과 애드온이 표시돼요. 고객은 원하는 항목을 예약에 담아요.

![서비스 세부 정보 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192699/original/Q18ERytytcH8Qrwut5-EMnlRc4RkRCzUmQ.jpg)

### 4. 장바구니 확인하기

고객은 한 번 방문할 때 서비스를 여러 개 예약할 수 있어요. 장바구니에는 서비스별 내역과 함께 소계, 세금, 수수료, 총액이 담긴 주문 요약이 표시돼요. 시간을 고르기 전에 서비스를 수정하거나 제거하고, 다른 서비스를 추가할 수 있어요.

![주문 요약이 있는 장바구니](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192707/original/4Q1R2Cc-EM35YsiKn622XAf0hhGVogbpxA.jpg)

### 5. 시간 선택하기

고객은 날짜를 고른 다음 시간을 골라요. 예약 가능한 시간은 오전, 오후, 저녁으로 나뉘어 표시되고 시간대도 함께 보여요. 예약 규칙에 따라 정확한 시간, 시간대(구간), 날짜만 고르도록 설정할 수 있어요. 자세한 내용은 [현장 서비스 설정: 온라인 예약](Field-Services/field-services-settings-online-booking.md)을 참고하세요.

![캘린더와 예약 가능한 시간이 표시된 시간 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192716/original/a6cUxdoNxHP5l8qXzr7a6Ze1DGUahntVdA.jpg)

### 6. 세부 정보 입력하고 확정하기

고객은 연락처와 서비스 주소를 입력하고, 팀에 전달할 메모가 있으면 적어요. 그다음 설정해 둔 결제 단계를 진행하고 예약을 확정해요.

![세부 정보와 결제 단계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084192733/original/3IWvAjBZJsBwFMRem34MDw94gyzMkvpxVA.jpg)

### 7. 예약 완료

예약이 끝나면 고객에게 내가 작성한 메시지가 담긴 완료 페이지가 표시돼요. 예약 확인 메시지와 알림 메시지도 따로 보낼 수 있어요. 자세한 내용은 [현장 서비스의 알림](Field-Services/notifications-in-field-services.md)을 참고하세요.

## 즉시 예약과 예약 요청

고객이 페이지에서 예약을 제출했을 때 어떻게 처리할지는 **Field Services Settings**(현장 서비스 설정) > **Online booking**(온라인 예약) > **Booking rules**(예약 규칙)에서 정해요.

| 방식 | 고객이 하는 일 | 팀이 하는 일 |
| --- | --- | --- |
| **Instant booking**(즉시 예약) | 예약 가능한 시간을 고르면 방문이 바로 예약돼요. | 일정에서 방문을 확인해요. [현장 서비스의 일정](Field-Services/schedule-in-field-services.md)을 참고하세요. |
| **Booking request**(예약 요청) | 확정된 시간을 고르지 않고 요청을 보내요. | 요청을 검토한 뒤 방문 일정을 잡아요. [현장 서비스의 요청](Field-Services/requests-in-field-services.md)을 참고하세요. |

즉시 예약을 사용하면, 예약 가능한 시간이 없을 때 고객이 요청을 보낼 수 있게 설정할 수도 있어요. 이렇게 하면 고객을 그냥 돌려보내지 않아도 돼요.

## 예약 페이지의 결제

결제 방식은 **Field Services Settings** > **Online booking** > **결제**에서 설정해요. 온라인 결제, **현장 결제**, 저장된 카드만 결제 중에서 고를 수 있어요. 아직 결제 서비스를 연결하지 않았다면 **현장 결제**를 선택하세요. 그러면 고객이 예약을 끝까지 마칠 수 있어요. 자세한 내용은 [현장 서비스 설정: 온라인 예약](Field-Services/field-services-settings-online-booking.md)을 참고하세요.

## 예약 페이지 공유하기

- 페이지 전체: 예약 페이지 편집기의 **Booking page link**(예약 페이지 링크)를 사용하거나, **예약 페이지 보기**를 눌러 페이지를 열어요. 그 옆의 화살표를 누르면 링크를 공유할 수 있어요.
- 서비스 하나: **서비스 및 직원 > 서비스**에서 서비스의 **예약 링크 공유**를 사용하면 고객을 해당 서비스로 바로 보낼 수 있어요.

{% hint style="info" %}
예약 페이지 링크를 바꾸면 이미 공유한 링크는 더 이상 작동하지 않아요.
{% endhint %}

웹사이트, Google Business Profile, 이메일 서명, 소셜 프로필에 링크를 추가해 보세요. Google 자연 검색 예약은 [현장 서비스의 AI 리셉셔니스트와 Google 오가닉 예약](ai-receptionist-and-google-organic-booking-in-field-services.md)에서 확인하세요.

## 예약이 잘 이어지는 페이지 만들기

- 직접 테스트해 보세요. 페이지를 열고 서비스 지역 안의 실제 주소로 서비스를 예약해 본 다음, 지역 밖의 주소도 입력해 보세요.
- 설명은 짧게 쓰세요. 이름, 가격, 소요 시간이 분명하면 고객이 더 빨리 결정해요.
- 애드온을 활용하세요. 서비스 페이지에 유용한 추가 항목을 두면 고객이 한 번에 추가할 수 있어요.
- 모바일 미리보기를 확인하세요. 대부분의 고객은 휴대폰으로 예약하니, 편집기에서 모바일 미리보기를 꼭 살펴보세요.

## 자주 묻는 질문

### 고객에게 예약 가능한 시간이 표시되지 않아요.
서비스에 직원이 한 명 이상 배정되어 있는지, 그 직원이 고객의 서비스 지역을 담당하는지, 표시되는 날짜에 근무 시간이 있는지 확인하세요. **Booking rules**의 최소 사전 예약 시간과 예약 가능 기간도 함께 확인해 보세요.

### 고객이 자기 주소로 예약할 수 없어요.
해당 주소가 모든 서비스 지역 밖에 있고 정책이 **Block booking**으로 설정되어 있거나, 그 지역에 배정된 직원이 없는 경우예요. 자세한 내용은 [현장 서비스의 서비스 지역](Field-Services/service-areas-in-field-services.md)을 참고하세요.

### 서비스가 페이지에 보이지 않아요.
온라인으로 예약하려면 서비스에 직원이 한 명 이상 배정되어 있어야 해요. 자세한 내용은 [현장 서비스의 서비스와 애드온](Field-Services/services-and-add-ons-in-field-services.md)을 참고하세요.

### 고객이 서비스를 여러 개 한 번에 예약할 수 있나요?
네. 장바구니에 서비스를 여러 개 담아 함께 예약할 수 있어요.

### 고객에게 예약 확인이 가나요?
예약이 끝나면 완료 페이지가 표시돼요. 이메일, SMS, WhatsApp 알림도 켤 수 있어요. 자세한 내용은 [현장 서비스의 알림](Field-Services/notifications-in-field-services.md)을 참고하세요.

### 내 브랜드로 꾸밀 수 있나요?
네. 예약 페이지 편집기에서 로고, 색상, 글꼴, 문구를 설정할 수 있어요. 자세한 내용은 [현장 서비스의 예약 페이지 편집기](Field-Services/booking-page-editor-in-field-services.md)를 참고하세요.
