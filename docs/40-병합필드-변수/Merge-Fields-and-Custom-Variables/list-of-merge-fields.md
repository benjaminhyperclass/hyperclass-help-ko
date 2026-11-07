---
원문: /support/solutions/articles/48001078171-list-of-merge-fields
번역일: 2026-11-06
카테고리: 40-병합필드-변수
---

# 병합 필드 목록

병합 필드를 쓰면 연락처 이름, 배정된 사용자 이메일, 예약 시간, 인보이스 총액처럼 저장된 정보를 메시지와 문서에 자동으로 넣을 수 있어요. 메시지를 보내거나 문서를 만들 때 각 병합 필드는 받는 사람이나 기록에 맞는 값으로 바뀌어요. 그래서 이메일, 문자 메시지, 인보이스, 캠페인, 자동화 워크플로우에서 내용을 일관되고 정확하게 유지할 수 있어요.

{% hint style="info" %}
전화번호 필드를 raw 형식으로 쓰면 공백, 괄호, 대시가 빠져요. 링크, 추적 파라미터, 국제 형식에 전화번호를 넣을 때 특히 유용해요.
{% endhint %}

---

## 병합 필드와 대체값 사용 방법

병합 필드와 대체값(병합 필드의 원본 값이 비어 있을 때 대신 표시되는 값)을 쓰는 방법은 "How To Use Merge Fields and Fallback Values" 문서를 참고하세요.

---

## 연락처 병합 필드

연락처 기록에 저장된 정보를 가져오는 필드예요. 인사말, 확인 메시지, 맞춤 후속 연락에 자주 써요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 전체 이름 | {{contact.name}} | Jane Smith |
| 이름 | {{contact.first\_name}} | Jane |
| 성 | {{contact.last\_name}} | Smith |
| 이메일 | {{contact.email}} | jane@smith.com |
| 전화번호 | {{contact.phone}} | (515) 555-2345 |
| 전화번호(raw 형식) | {{contact.phone\_raw}} | +15155552345 |
| 회사명 | {{contact.company\_name}} | Smith Plumbing |
| 전체 주소 | {{contact.full\_address}} | 1234 W. Main St, Chicago, IL 60657 |
| 주소 1행 | {{contact.address1}} | 1234 W. Main St |
| 도시 | {{contact.city}} | Chicago |
| 주/지역 | {{contact.state}} | Illinois |
| 우편번호 | {{contact.postal\_code}} | 60657 |
| 시간대 | {{contact.timezone}} | GMT-06:00 America/Chicago |
| 생년월일 | {{contact.date\_of\_birth}} | Jan 3, 1980 |
| 소스 | {{contact.source}} | Referral |
| 웹사이트 | {{contact.website}} | www.example.com |
| 연락처 ID | {{contact.id}} | FZDn5mYlkZuCCQe5Bep8 |

---

## 사용자 병합 필드

활동, 대화, 예약에 연결된 배정된 사용자(또는 발신자)의 정보를 가져오는 필드예요.

{% hint style="info" %}
사용자 병합 필드는 캘린더 예약 완료 후 화면에서도 쓸 수 있어요. 캘린더 확인 페이지의 **감사 메시지**가 해당돼요. 캘린더 요소의 리디렉션 동작을 **Go to next step**(다음 단계로 이동)으로 설정했다면, 캘린더 예약 뒤에 이어지는 다음 퍼널 단계에서도 쓸 수 있어요.
{% endhint %}

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 전체 이름 | {{user.name}} | John Doe |
| 이름 | {{user.first\_name}} | John |
| 성 | {{user.last\_name}} | Doe |
| 이메일 | {{user.email}} | john@doe.com |
| 전화번호 | {{user.phone}} | (333) 555-9876 |
| 전화번호(raw 형식) | {{user.phone\_raw}} | +13335559876 |
| 이메일 서명 | {{user.email\_signature}} | John Doejohn@doe.com(333) 555-9876 |
| 예약 링크 | {{user.calendar\_link}} | https://booking.example.com/schedule/john-doe |
| 예약 사용자 전화번호(raw 형식) | {{appointment.user.phone\_raw}} | +13335559876 |
| 외부 통화 번호 | {{user.call\_provider\_phone\_number}} | (234) 555-9876 |
| 외부 통화 번호(raw 형식) | {{user.call\_provider\_phone\_number\_raw}} | +12345559876 |

{% hint style="warning" %}
설정에 따라 "외부 통화 번호" 필드의 이름이 계정마다 다르게 표시될 수 있어요. 편집기의 **병합 필드** 선택기에서 내 계정에 있는 필드 이름을 그대로 골라 넣으세요.
{% endhint %}

---

## 예약 병합 필드

예약 기록의 세부 정보를 가져오는 필드예요. 확인, 알림, 일정 변경 메시지에 자주 써요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 제목 | {{appointment.title}} | Appointment with Bob |
| 시작 날짜/시간 | {{appointment.start\_time}} | Wed, Nov 5, 2025 3:30 PM |
| 시작 날짜만 | {{appointment.only\_start\_date}} | Nov 5, 2025 |
| 시작 시간만 | {{appointment.only\_start\_time}} | 3:30 PM |
| 종료 날짜/시간 | {{appointment.end\_time}} | Wed, Nov 5, 2025 4:00 PM |
| 종료 날짜만 | {{appointment.only\_end\_date}} | Nov 5, 2025 |
| 종료 시간만 | {{appointment.only\_end\_time}} | 4:00 PM |
| 요일 | {{appointment.day\_of\_week}} | Monday |
| 월(숫자) | {{appointment.month}} | 11 |
| 시간대 | {{appointment.timezone}} | CST |
| 취소 링크 | {{appointment.cancellation\_link}} | https://booking.example.com/cancel?event\_id=123 |
| 일정 변경 링크 | {{appointment.reschedule\_link}} | https://booking.example.com/reschedule?event\_id=123 |
| 미팅 장소 | {{appointment.meeting\_location}} | 123 W Main St, Chicago, IL 60657 |
| 비고 | {{appointment.notes}} | This is our second meeting. |
| 캘린더에 추가 링크 | {{appointment.add\_to\_calendar}} | https://booking.example.com/add-to-calendar?event\_id=123 |
| Google Calendar 링크 | {{appointment.add\_to\_google\_calendar}} | https://booking.example.com/google/calendar/add-event/calendarid |
| iCal/ICS 링크 | {{appointment.add\_to\_ical}} | https://booking.example.com/get-ics?event\_id=123 |
| 반복 일정 - 반복 | {{appointment.recurring.repeats}} | 0 |
| 반복 일정 - 반복 횟수 | {{appointment.recurring.times\_to\_repeat}} | 1 |
| 배정된 사용자 이름 | {{appointment.user.name}} | John Doe |
| 배정된 사용자 이메일 | {{appointment.user.email}} | john@doe.com |
| 배정된 사용자 전화번호 | {{appointment.user.phone}} | (333) 555-9876 |
| 배정된 사용자 전화번호(raw 형식) | {{appointment.user.phone\_raw}} | +13335559876 |
| 배정된 사용자 서명 | {{appointment.user.email\_signature}} | John Doejohn@doe.com |

---

## 캘린더 병합 필드

이벤트에 연결된 캘린더의 정보를 가져오는 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 캘린더 이름 | {{calendar.name}} | Lawn Services Calendar |

---

## 캠페인 병합 필드

예약된 캠페인 이벤트와 시간 변수를 위한 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 이벤트 날짜/시간 | {{campaign.event\_date\_time}} | Nov 5, 2025 3:30 PM |
| 이벤트 날짜 | {{campaign.event\_date}} | Nov 5, 2025 |
| 이벤트 시간 | {{campaign.event\_time}} | 3:30 PM |

---

## 메시지 병합 필드

워크플로우나 자동화 안에서 메시지 내용을 가져다 쓸 때 유용한 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 메시지 본문 | {{message.body}} | Hi, just a quick reminder about our call tomorrow morning. |
| 메시지 제목 | {{message.subject}} | Meeting Reminder |

---

## 계정 병합 필드

브랜딩, 영수증, 기본 사업자 정보에 쓰이는 비즈니스·계정 단위 정보를 가져오는 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 계정 이름 | {{location.name}} | WidgetWorks |
| 전체 주소 | {{location.full\_address}} | 555 Oak St, Tampa, FL 33602 |
| 주소 1행 | {{location.address}} | 555 Oak St |
| 도시 | {{location.city}} | Tampa |
| 주/지역 | {{location.state}} | Florida |
| 국가 | {{location.country}} | US |
| 우편번호 | {{location.postal\_code}} | 33602 |
| 이메일 | {{location.email}} | name@domain.com |
| 전화번호 | {{location.phone}} | (333) 555-3344 |
| 전화번호(raw 형식) | {{location.phone\_raw}} | +13335553344 |
| 웹사이트 | {{location.website}} | mywebsiteurl.com |
| 로고 URL | {{location.logo\_url}} | https://files.example.com/logo.png |
| 소유자 이름 | {{location\_owner.first\_name}} | Lisa |
| 대표자 성 | {{location\_owner.last\_name}} | White |
| 소유자 이메일 | {{location\_owner.email}} | lisa@white.com |
| 계정 ID | {{location.id}} | DP4mTqaz7L9XpweFvRjC |

---

## 현재 시각 병합 필드

메시지가 만들어지는 순간의 현재 시각 값을 넣는 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 초 | {{right\_now.second}} | 9 |
| 분 | {{right\_now.minute}} | 10 |
| 시(24시간) | {{right\_now.hour}} | 14 |
| 시(오전/오후) | {{right\_now.hour\_ampm}} | 2 |
| 오전/오후 | {{right\_now.ampm}} | PM |
| 요일 | {{right\_now.day\_of\_week}} | Tuesday |
| 월 이름 | {{right\_now.month\_name}} | November |
| 일 | {{right\_now.day}} | 4 |
| 월(숫자) | {{right\_now.month}} | 11 |
| 연도 | {{right\_now.year}} | 2025 |
| 날짜(MM/DD/YYYY) | {{right\_now.middle\_endian\_date}} | 11/4/2025 |
| 날짜(DD/MM/YYYY) | {{right\_now.little\_endian\_date}} | 4/11/2025 |

---

## 어트리뷰션 병합 필드

연락처의 첫 번째 어트리뷰션 소스와 가장 최근 어트리뷰션 소스에 연결된 추적 정보를 가져오는 필드예요. 값은 보통 링크에 포함된 추적 파라미터에서 가져와요.

### 첫 번째 어트리뷰션

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 세션 소스 | {{contact.attributionSource.sessionSource}} | Referral |
| 랜딩 URL | {{contact.attributionSource.url}} | https://example.com/form?utm\_source=ads |
| 캠페인 | {{contact.attributionSource.campaign}} | fall\_sale |
| UTM 소스 | {{contact.attributionSource.utmSource}} | ads |
| UTM 매체 | {{contact.attributionSource.utmMedium}} | banner |
| UTM 콘텐츠 | {{contact.attributionSource.utmContent}} | ad12 |
| 리퍼러 | {{contact.attributionSource.referrer}} | https://referrer.example.com |
| 캠페인 ID | {{contact.attributionSource.campaignId}} | 23849260571384729 |
| 광고 클릭 ID | {{contact.attributionSource.clickId}} | ABC123XYZ |
| UTM 키워드 | {{contact.attributionSource.utmKeyword}} | running\_shoes |
| UTM 일치 유형 | {{contact.attributionSource.utmMatchType}} | exact |
| 광고 그룹 ID | {{contact.attributionSource.adGroupId}} | 123456 |
| 광고 ID | {{contact.attributionSource.adId}} | 78910 |

### 최근 어트리뷰션

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 세션 소스 | {{contact.lastAttributionSource.sessionSource}} | Referral |
| 랜딩 URL | {{contact.lastAttributionSource.url}} | https://example.com/form?utm\_source=ads |
| 캠페인 | {{contact.lastAttributionSource.campaign}} | xmas\_sale |
| UTM 소스 | {{contact.lastAttributionSource.utmSource}} | ads |
| UTM 매체 | {{contact.lastAttributionSource.utmMedium}} | banner |
| UTM 콘텐츠 | {{contact.lastAttributionSource.utmContent}} | ad18 |
| 리퍼러 | {{contact.lastAttributionSource.referrer}} | https://referrer.example.com |
| 캠페인 ID | {{contact.lastAttributionSource.campaignId}} | 23850176293047583 |
| 광고 클릭 ID | {{contact.lastAttributionSource.clickId}} | XYZ789ABC |
| UTM 캠페인 | {{contact.lastAttributionSource.utmCampaign}} | blowout\_sale |
| UTM 키워드 | {{contact.lastAttributionSource.utmKeyword}} | hvac\_repair |
| UTM 일치 유형 | {{contact.lastAttributionSource.utmMatchType}} | broad |
| 광고 그룹 ID | {{contact.lastAttributionSource.adGroupId}} | 654321 |
| 광고 ID | {{contact.lastAttributionSource.adId}} | 10987 |

{% hint style="warning" %}
계정에 따라 제공업체별 어트리뷰션 필드가 표시될 수 있어요. 화이트라벨에 맞는 메시지 템플릿을 만들려면 **병합 필드** 선택기에서 내 계정에 있는 "클릭 ID" 필드 이름을 그대로 골라 넣으세요. 그리고 주변 문구에는 제공업체 이름을 넣지 마세요.
{% endhint %}

---

## 인보이스 병합 필드

인보이스 기록의 값을 가져오는 필드예요. 인보이스, 영수증, 결제 확인, 알림에 자주 써요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 인보이스 이름 | {{invoice.name}} | Consulting Contract |
| 인보이스 번호 | {{invoice.number}} | 43255 |
| 발행일 | {{invoice.issue\_date}} | 2025-04-05 |
| 납부 기한 | {{invoice.due\_date}} | 2025-10-05 |
| 소계 | {{invoice.sub\_total}} | $500.00 |
| 할인 금액 | {{invoice.discount\_amount}} | $50.00 |
| 세금 금액 | {{invoice.tax\_amount}} | $25.00 |
| 총 금액 | {{invoice.total\_amount}} | $475.00 |
| 인보이스 제목 | {{invoice.title}} | Consulting Invoice |
| 인보이스 링크 | {{invoice.url}} | https://pay.example.com/invoice/abc123 |

### 회사 세부 정보

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 회사명 | {{invoice.company.name}} | Test Solutions |
| 회사 전화번호 | {{invoice.company.phone}} | (888) 555-9876 |
| 회사 주소 | {{invoice.company.address}} | 1234 Maple St |
| 회사 도시 | {{invoice.company.city}} | Milwaukee |
| 회사 주 | {{invoice.company.state}} | Wisconsin |
| 회사 국가 | {{invoice.company.country}} | US |
| 회사 웹사이트 | {{invoice.company.website}} | www.example.com |
| 회사 로고 URL | {{invoice.company.logo}} | https://files.example.com/logo.png |

### 고객 세부 정보

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 고객 전체 이름 | {{invoice.customer.name}} | Tom Taylor |
| 고객 이름 | {{invoice.customer.first\_name}} | Tom |
| 고객 성 | {{invoice.customer.last\_name}} | Taylor |
| 고객 전화 | {{invoice.customer.phone}} | (222) 555-3456 |
| 고객 이메일 | {{invoice.customer.email}} | tom@taylor.com |
| 고객 회사 | {{invoice.customer.company}} | Taylor Construction |
| 고객 주소 | {{invoice.customer.address}} | 3333 N. Main St |
| 고객 도시 | {{invoice.customer.city}} | Chicago |
| 고객 주 | {{invoice.customer.state}} | Illinois |
| 고객 우편번호 | {{invoice.customer.postal\_code}} | 60657 |

### 발신자 세부 정보

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 발신자 이름 | {{invoice.sender.name}} | Bob Brown |
| 발신자 이메일 | {{invoice.sender.email}} | bob@brown.com |

### 카드 정보

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 카드 브랜드 | {{invoice.card.brand}} | Visa |
| 카드 끝 4자리 | {{invoice.card.last4}} | 7654 |

## 코스 병합 필드

수강 등록이나 콘텐츠 관련 메시지를 보낼 때 코스나 강의 콘텐츠 정보를 넣는 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 카테고리 제목 | {{courses.categoryTitle}} | Getting Started with Knitting |
| 상품 제목 | {{courses.productTitle}} | Basics of Knitting |
| 게시글 제목 | {{courses.postTitle}} | The Best Types of Yarn |

---

## 서비스 예약 병합 필드

서비스 예약 기록의 일정, 가격, 배정된 사용자 정보를 가져오는 필드예요.

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 제목 | {{servicebooking.title}} | Men’s Haircut |
| 시작 시간 | {{servicebooking.start\_time}} | 3:30 PM |
| 종료 시간 | {{servicebooking.end\_time}} | 4:30 PM |
| 시작 날짜 | {{servicebooking.start\_date}} | March 6, 2026 |
| 종료 날짜 | {{servicebooking.only\_end\_date}} | March 7, 2026 |
| 종료 시간만 | {{servicebooking.only\_end\_time}} | 4:30 PM |
| 요일 | {{servicebooking.day\_of\_week}} | Monday |
| 월(숫자) | {{servicebooking.month}} | 3 |
| 월 이름 | {{servicebooking.month\_name}} | March |
| 시간대 | {{servicebooking.timezone}} | CST |
| 총 가격 | {{servicebooking.total\_price}} | $55 |
| 미팅 장소 | {{servicebooking.meeting\_location}} | 123 Main St, Chicago, IL 60657 |
| 미팅 장소 이름 | {{servicebooking.meeting\_location\_name}} | Chair 4 |
| 일정 변경 링크 | {{servicebooking.reschedule\_link}} | https://booking.example.com/reschedule?booking\_id=123 |
| 취소 링크 | {{servicebooking.cancellation\_link}} | https://booking.example.com/cancel?booking\_id=123 |

### 서비스 항목 및 배정된 사용자

| **이름** | **병합 필드** | **예시** |
| --- | --- | --- |
| 서비스 이름 | {{this.name}} | Haircut - Regular |
| 서비스 가격 | {{this.price}} | $125 |
| 서비스 소요 시간 | {{this.duration}} | 45 mins |
| 서비스 시작 날짜 | {{this.only\_start\_date}} | March 6, 2026 |
| 서비스 시작 시간 | {{this.only\_start\_time}} | 4:30 PM |
| 서비스 시간대 | {{this.timezone}} | GMT-06:00 America/Chicago |
| 애드온 이름 | {{this.addonName}} | Hair Coloring |
| 애드온 가격 | {{this.addonPrice}} | $25 |
| 애드온 소요 시간 | {{this.addonDuration}} | 15 mins |
| 애드온 수량 | {{this.addonQuantity}} | 1 |
| 배정된 사용자 이름 | {{this.user.name}} | Jane Smith |
| 배정된 사용자 이메일 | {{this.user.email}} | jane@smith.com |
| 배정된 사용자 전화번호 | {{this.user.phone}} | (515) 555-2345 |
| 배정된 사용자 전화번호(raw 형식) | {{this.user.phone\_raw}} | +15155552345 |
| 배정된 사용자 서명 | {{this.user.email\_signature}} | Jane Smithjane@smith.com |

---

## 빈 필드의 기본값(대체값)

저장된 데이터가 없으면 일부 병합 필드는 비어 있을 수 있어요. 병합 필드에 값이 없을 때는 대체값으로 바꿀 수 있어요. 이렇게 하면 메시지가 읽기 쉽고, 어색한 빈 인사말이 나가지 않아요.

대체값은 이메일 편집기에서 **커스텀 값** 태그를 클릭해서 설정해요.

![이메일 편집기에서 커스텀 값 태그를 클릭해 대체값을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071460467/original/_4v9BjSqsBTDnQQcN2tRk855FpqfUCkIxw.png?1778876548)

---

## 음성 AI 병합 필드

음성 AI 병합 필드는 Voice AI 에이전트 프롬프트에서 **커스텀 값**이라고도 불러요. 이미 저장된 정보를 이용해서 Voice AI 에이전트가 전화 통화를 개인화할 수 있어요. 통화 상황에서 확인할 수 있으면 연락처, 회사, 예약, 캘린더, 계정, 위치 정보 등을 가져와요.

음성 AI는 에이전트 프롬프트와 지원되는 메시지 필드에서 **커스텀 값**을 쓸 수 있어요. 프롬프트에 동적인 정보를 넣을 때는 음성 AI 빌더 안의 **커스텀 값** 선택기를 사용하세요.

| 필드 유형 | 병합 필드 예시 | 사용 예시 |
| --- | --- | --- |
| 연락처 이름 | `{{contact.first_name}}` | “안녕하세요, {{contact.first\_name}}님. 전화 주셔서 감사합니다.” |
| 연락처 전체 이름 | `{{contact.name}}` | “성함이 {{contact.name}}님으로 확인되네요.” |
| 연락처 이메일 | `{{contact.email}}` | “이메일은 {{contact.email}}(으)로 등록되어 있어요.” |
| 연락처 전화번호 | `{{contact.phone}}` | “{{contact.phone}} 번호가 지금도 연락 가능한 번호가 맞나요?” |
| 회사명 | `{{company.name}}` | “{{company.name}}에서 전화 주신 것으로 확인돼요.” |
| 위치 이름 | `{{location.name}}` | “{{location.name}}에 전화 주셔서 감사합니다.” |
| 위치 전화번호 | `{{location.phone}}` | “{{location.phone}} 번호로도 연락하실 수 있어요.” |
| 위치 이메일 | `{{location.email}}` | “저희 팀이 {{location.email}}에서 후속 연락을 드릴 수 있어요.” |
| 예약 시작 시간 | `{{appointment.start_time}}` | “예약은 {{appointment.start\_time}}에 잡혀 있어요.” |
| 캘린더 이름 | `{{calendar.name}}` | “이 예약은 {{calendar.name}} 캘린더에 등록되어 있어요.” |

{% hint style="warning" %}
사용할 수 있는 병합 필드는 Voice AI 프롬프트 필드, 통화 방향, 연락처 기록, 예약 상황, 계정에 있는 데이터에 따라 달라질 수 있어요. 기록에 값이 없으면 통화 중에 병합 필드가 빈칸으로 나올 수 있어요.
{% endhint %}

설정 방법은 "Voice AI 에이전트 프롬프트에서 커스텀 값 사용하기" 문서를 참고하세요.

---

## 대화 AI 병합 필드

대화 AI 병합 필드는 AI 에이전트가 연락처, 회사, 위치 등 지원되는 데이터를 활용해서 자동 대화를 개인화하도록 도와요. 봇 프롬프트, **Bot Goals**(봇 목표), AI가 생성하는 응답, 지원되는 대화 AI 액션을 설정할 때 유용해요.

대화 AI 안에서 병합 필드를 추가할 때는 **커스텀 값** 선택기를 사용하세요. 봇 설정의 해당 부분에서 지원되는 값을 고를 수 있어요.

| 필드 유형 | 병합 필드 예시 | 사용 예시 |
| --- | --- | --- |
| 연락처 이름 | `{{contact.first_name}}` | “안녕하세요, {{contact.first\_name}}님. 무엇을 도와드릴까요?” |
| 연락처 전체 이름 | `{{contact.name}}` | “감사합니다, {{contact.name}}님. 그 부분은 제가 도와드릴 수 있어요.” |
| 연락처 이메일 | `{{contact.email}}` | “이메일은 {{contact.email}}(으)로 등록되어 있어요.” |
| 연락처 전화번호 | `{{contact.phone}}` | “{{contact.phone}} 번호가 후속 연락에 가장 편한 번호가 맞나요?” |
| 회사명 | `{{company.name}}` | “{{company.name}} 관련 문의로 확인돼요.” |
| 회사 이메일 | `{{company.email}}` | “회사 이메일은 {{company.email}}(으)로 등록되어 있어요.” |
| 회사 전화번호 | `{{company.phone}}` | “등록된 회사 전화번호는 {{company.phone}}예요.” |
| 위치 이름 | `{{location.name}}` | “지금 {{location.name}}와(과) 대화하고 계세요.” |
| 위치 이메일 | `{{location.email}}` | “저희 팀이 {{location.email}}에서 후속 연락을 드릴 수 있어요.” |
| 위치 전화번호 | `{{location.phone}}` | “{{location.phone}} 번호로도 문의하실 수 있어요.” |

**Bot Goals**에는 프롬프트 설정, 액션, 테스트 도구가 포함되어 있어요. 이 도구들은 AI 에이전트가 어떻게 말하고 답할지 정하는 데 도움이 돼요. 병합 필드를 추가한 뒤에는 봇을 활성화해서 실제 대화에 쓰기 전에 봇 응답을 테스트하세요. 올바른 값이 채워지는지 확인할 수 있어요.

{% hint style="warning" %}
병합 필드를 쓸 수 있는지는 편집 중인 대화 AI 영역, 선택한 채널, 봇 설정, 관련 연락처·회사·위치 데이터가 있는지에 따라 달라질 수 있어요. 필드에 저장된 데이터가 없으면 값이 빈칸으로 채워질 수 있어요.
{% endhint %}

설정 방법은 "Bot Goals 개요 - 대화 AI"와 "Conversation AI 봇 설명" 문서를 참고하세요.

---

## 자주 묻는 질문

### 병합 필드에 값이 없으면 어떻게 되나요?
보통 빈 공간으로 바뀌어요. 그래서 “안녕하세요, 님”처럼 문장 일부가 사라질 수 있어요.

### 일반 전화번호 필드와 raw 전화번호 필드는 어떻게 다른가요?
raw 형식은 괄호와 대시 같은 문자를 뺀 형식이에요. 링크, 추적 파라미터, 국제 형식에 쓰기에 보통 더 알맞아요.

### 인보이스나 결제 관련 메시지에도 병합 필드를 쓸 수 있나요?
네, 쓸 수 있어요. 병합 필드로 인보이스 번호, 총액, 납부 기한, 고객 정보, 링크를 넣을 수 있어요.

### 다른 계정과 병합 필드가 다르게 보이는 이유가 뭔가요?
사용 중인 도구, 설정, 편집 중인 기록 유형에 따라 쓸 수 있는 병합 필드가 달라질 수 있어요.

### 이름이 없는 연락처에 빈 인사말이 나가지 않게 하려면 어떻게 하나요?
조건부 콘텐츠 블록을 사용하세요. 이름이 있으면 하나의 인사말을, 없으면 다른 인사말을 표시하도록 설정할 수 있어요.
