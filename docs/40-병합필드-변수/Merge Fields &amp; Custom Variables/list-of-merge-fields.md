---

번역일: 2026-04-08
카테고리: 40-병합필드-변수 > Merge Fields & Custom Variables
---

# 병합 필드 목록

병합 필드(Merge Fields)를 사용하면 연락처 이름, 담당자 이메일, 예약 시간, 인보이스 합계 등 저장된 정보를 자동으로 삽입하여 메시지와 문서를 개인화할 수 있습니다. 메시지가 발송되거나 문서가 생성될 때, 각 병합 필드는 해당 수신자나 기록에 맞는 값으로 자동 교체됩니다. 이를 통해 이메일, SMS, 인보이스, 캠페인, 자동화 워크플로우 전반에서 일관되고 정확한 커뮤니케이션을 유지할 수 있습니다.

"Raw" 전화번호 형식 참고: Raw 형식으로 표시되는 전화번호 필드는 공백, 괄호, 대시를 제거합니다. Raw 형식은 전화번호를 링크나 추적 매개변수, 국제 형식에 사용할 때 특히 유용합니다.

---

## **연락처 병합 필드**

연락처 기록에 저장된 정보를 가져오는 필드입니다. 인사말, 확인 메시지, 개인화된 후속 조치에 주로 사용됩니다.

**항목**

**병합 필드**

**예시**

전체 이름

{{contact.name}}

홍길동

이름

{{contact.first_name}}

길동

성

{{contact.last_name}}

홍

이메일

{{contact.email}}

gildong@hong.com

전화번호

{{contact.phone}}

(02) 1234-5678

전화번호 (raw 형식)

{{contact.phone_raw}}

+8201012345678

회사명

{{contact.company_name}}

홍길동 배관

전체 주소

{{contact.full_address}}

서울특별시 강남구 테헤란로 123, 06142

주소 1

{{contact.address1}}

서울특별시 강남구 테헤란로 123

도시

{{contact.city}}

서울

지역/주

{{contact.state}}

서울특별시

우편번호

{{contact.postal_code}}

06142

시간대

{{contact.timezone}}

GMT+09:00 Asia/Seoul

생년월일

{{contact.date_of_birth}}

1980년 1월 3일

출처

{{contact.source}}

추천

웹사이트

{{contact.website}}

www.example.com

연락처 ID

{{contact.id}}

FZDn5mYlkZuCCQe5Bep8

---

## **사용자 병합 필드**

활동, 대화 또는 예약에 할당된 사용자(또는 발신자)에 대한 정보를 가져오는 필드입니다.

**항목**

**병합 필드**

**예시**

전체 이름

{{user.name}}

김담당

이름

{{user.first_name}}

담당

성

{{user.last_name}}

김

이메일

{{user.email}}

manager@kim.com

전화번호

{{user.phone}}

(02) 9876-5432

전화번호 (raw 형식)

{{user.phone_raw}}

+8201098765432

이메일 서명

{{user.email_signature}}

김담당
manager@kim.com
(02) 9876-5432

예약 링크

{{user.calendar_link}}

https://booking.example.com/schedule/kim-manager

예약 담당자 전화 (raw)

{{appointment.user.phone_raw}}

+8201098765432

외부 발신 번호

{{user.call_provider_phone_number}}

(02) 5555-9876

외부 발신 번호 (raw)

{{user.call_provider_phone_number_raw}}

+8201055559876

**중요:** 일부 계정에서는 설정에 따라 "외부 발신 번호"에 다른 필드명이 표시될 수 있습니다. 편집기의 병합 필드 선택기를 사용하여 계정에서 사용 가능한 정확한 필드명을 삽입하세요.

---

## **예약 병합 필드**

예약 기록의 세부 정보를 가져오는 필드로, 확인 메시지, 리마인더, 일정 변경 메시지에 주로 사용됩니다.

**항목**

**병합 필드**

**예시**

제목

{{appointment.title}}

김상담님과의 예약

시작 날짜/시간

{{appointment.start_time}}

2025년 11월 5일 (수) 오후 3:30

시작 날짜만

{{appointment.only_start_date}}

2025년 11월 5일

시작 시간만

{{appointment.only_start_time}}

오후 3:30

종료 날짜/시간

{{appointment.end_time}}

2025년 11월 5일 (수) 오후 4:00

종료 날짜만

{{appointment.only_end_date}}

2025년 11월 5일

종료 시간만

{{appointment.only_end_time}}

오후 4:00

요일

{{appointment.day_of_week}}

월요일

월 (숫자)

{{appointment.month}}

11

시간대

{{appointment.timezone}}

KST

취소 링크

{{appointment.cancellation_link}}

https://booking.example.com/cancel?event_id=123

일정 변경 링크

{{appointment.reschedule_link}}

https://booking.example.com/reschedule?event_id=123

미팅 장소

{{appointment.meeting_location}}

서울특별시 강남구 테헤란로 123

메모

{{appointment.notes}}

두 번째 미팅입니다.

캘린더에 추가 링크

{{appointment.add_to_calendar}}

https://booking.example.com/add-to-calendar?event_id=123

Google 캘린더 링크

{{appointment.add_to_google_calendar}}

https://booking.example.com/google/calendar/add-event/calendarid

iCal/ICS 링크

{{appointment.add_to_ical}}

https://booking.example.com/get-ics?event_id=123

반복 횟수

{{appointment.recurring.repeats}}

0

반복할 횟수

{{appointment.recurring.times_to_repeat}}

1

담당자 이름

{{appointment.user.name}}

김담당

담당자 이메일

{{appointment.user.email}}

manager@kim.com

담당자 전화

{{appointment.user.phone}}

(02) 9876-5432

담당자 전화 (raw)

{{appointment.user.phone_raw}}

+8201098765432

담당자 서명

{{appointment.user.email_signature}}

김담당
manager@kim.com

---

## **캘린더 병합 필드**

이벤트와 연관된 캘린더의 세부 정보를 가져오는 필드입니다.

**항목**

**병합 필드**

**예시**

캘린더 이름

{{calendar.name}}

잔디 관리 서비스 캘린더

---

## **캠페인 병합 필드**

예약된 캠페인 이벤트와 타이밍 변수를 지원하는 필드입니다.

**항목**

**병합 필드**

**예시**

이벤트 날짜/시간

{{campaign.event_date_time}}

2025년 11월 5일 오후 3:30

이벤트 날짜

{{campaign.event_date}}

2025년 11월 5일

이벤트 시간

{{campaign.event_time}}

오후 3:30

---

## **메시지 병합 필드**

워크플로우나 자동화에서 메시지 내용을 참조할 때 유용한 필드입니다.

**항목**

**병합 필드**

**예시**

메시지 본문

{{message.body}}

안녕하세요, 내일 오전 통화 일정에 대한 간단한 알림입니다.

메시지 제목

{{message.subject}}

미팅 리마인더

---

## **계정 병합 필드**

브랜딩, 영수증, 표준 비즈니스 정보에 사용되는 비즈니스 또는 계정 수준의 세부 정보를 가져오는 필드입니다.

**항목**

**병합 필드**

**예시**

계정명

{{location.name}}

위젯웍스

전체 주소

{{location.full_address}}

부산광역시 해운대구 마린시티 555

주소 1

{{location.address}}

부산광역시 해운대구 마린시티 555

도시

{{location.city}}

부산

지역/주

{{location.state}}

부산광역시

국가

{{location.country}}

KR

우편번호

{{location.postal_code}}

48120

이메일

{{location.email}}

info@company.com

전화번호

{{location.phone}}

(051) 123-4567

전화번호 (raw 형식)

{{location.phone_raw}}

+8201512345567

웹사이트

{{location.website}}

mywebsiteurl.com

로고 URL

{{location.logo_url}}

https://files.example.com/logo.png

대표자 이름

{{location_owner.first_name}}

리사

대표자 성

{{location_owner.last_name}}

화이트

대표자 이메일

{{location_owner.email}}

lisa@white.com

계정 ID

{{location.id}}

DP4mTqaz7L9XpweFvRjC

---

## **현재 시간 병합 필드**

메시지가 생성되는 순간의 현재 시간 값을 삽입하는 필드입니다.

**항목**

**병합 필드**

**예시**

초

{{right_now.second}}

9

분

{{right_now.minute}}

10

시간 (24시)

{{right_now.hour}}

14

시간 (오전/오후)

{{right_now.hour_ampm}}

2

오전/오후

{{right_now.ampm}}

오후

요일

{{right_now.day_of_week}}

화요일

월 이름

{{right_now.month_name}}

11월

일

{{right_now.day}}

4

월 (숫자)

{{right_now.month}}

11

년

{{right_now.year}}

2025

날짜 (MM/DD/YYYY)

{{right_now.middle_endian_date}}

11/4/2025

날짜 (DD/MM/YYYY)

{{right_now.little_endian_date}}

4/11/2025

---

## **어트리뷰션 병합 필드**

연락처의 첫 번째 및 가장 최근 어트리뷰션 출처와 연결된 추적 세부 정보를 지원하는 필드입니다. 값은 일반적으로 링크에 포함된 추적 매개변수에서 가져옵니다.

### **첫 번째 어트리뷰션**

**항목**

**병합 필드**

**예시**

세션 출처

{{contact.attributionSource.sessionSource}}

추천

랜딩 URL

{{contact.attributionSource.url}}

https://example.com/form?utm_source=ads

캠페인

{{contact.attributionSource.campaign}}

가을_세일

UTM 소스

{{contact.attributionSource.utmSource}}

광고

UTM 매체

{{contact.attributionSource.utmMedium}}

배너

UTM 콘텐츠

{{contact.attributionSource.utmContent}}

ad12

리퍼러

{{contact.attributionSource.referrer}}

https://referrer.example.com

캠페인 ID

{{contact.attributionSource.campaignId}}

23849260571384729

광고 클릭 ID

{{contact.attributionSource.clickId}}

ABC123XYZ

UTM 키워드

{{contact.attributionSource.utmKeyword}}

러닝화

UTM 매치 유형

{{contact.attributionSource.utmMatchType}}

정확

광고 그룹 ID

{{contact.attributionSource.adGroupId}}

123456

광고 ID

{{contact.attributionSource.adId}}

78910

### **최근 어트리뷰션**

**항목**

**병합 필드**

**예시**

세션 출처

{{contact.lastAttributionSource.sessionSource}}

추천

랜딩 URL

{{contact.lastAttributionSource.url}}

https://example.com/form?utm_source=ads

캠페인

{{contact.lastAttributionSource.campaign}}

크리스마스_세일

UTM 소스

{{contact.lastAttributionSource.utmSource}}

광고

UTM 매체

{{contact.lastAttributionSource.utmMedium}}

배너

UTM 콘텐츠

{{contact.lastAttributionSource.utmContent}}

ad18

리퍼러

{{contact.lastAttributionSource.referrer}}

https://referrer.example.com

캠페인 ID

{{contact.lastAttributionSource.campaignId}}

23850176293047583

광고 클릭 ID

{{contact.lastAttributionSource.clickId}}

XYZ789ABC

UTM 캠페인

{{contact.lastAttributionSource.utmCampaign}}

대박_세일

UTM 키워드

{{contact.lastAttributionSource.utmKeyword}}

에어컨_수리

UTM 매치 유형

{{contact.lastAttributionSource.utmMatchType}}

넓음

광고 그룹 ID

{{contact.lastAttributionSource.adGroupId}}

654321

광고 ID

{{contact.lastAttributionSource.adId}}

10987

**중요:** 일부 계정에서는 제공업체별 어트리뷰션 필드가 표시될 수 있습니다. 화이트라벨 안전 메시지 템플릿을 위해서는 병합 필드 선택기를 사용하여 계정에서 사용 가능한 정확한 "클릭 ID" 필드명을 삽입하고, 주변 텍스트에 제공업체 이름을 포함하지 않도록 하세요.

---

## **인보이스 병합 필드**

인보이스 기록에서 값을 가져오는 필드로, 인보이스, 영수증, 결제 확인, 리마인더에 자주 사용됩니다.

**항목**

**병합 필드**

**예시**

인보이스명

{{invoice.name}}

컨설팅 계약

인보이스 번호

{{invoice.number}}

43255

발행일

{{invoice.issue_date}}

2025-04-05

마감일

{{invoice.due_date}}

2025-10-05

소계

{{invoice.sub_total}}

500,000원

할인 금액

{{invoice.discount_amount}}

50,000원

세금

{{invoice.tax_amount}}

25,000원

총 금액

{{invoice.total_amount}}

475,000원

인보이스 제목

{{invoice.title}}

컨설팅 인보이스

인보이스 링크

{{invoice.url}}

https://pay.example.com/invoice/abc123

### **회사 세부 정보**

**항목**

**병합 필드**

**예시**

회사명

{{invoice.company.name}}

테스트 솔루션

회사 전화

{{invoice.company.phone}}

(02) 8888-5432

회사 주소

{{invoice.company.address}}

서울시 강남구 메이플로 1234

회사 도시

{{invoice.company.city}}

서울

회사 지역

{{invoice.company.state}}

서울특별시

회사 국가

{{invoice.company.country}}

KR

회사 웹사이트

{{invoice.company.website}}

www.example.com

회사 로고 URL

{{invoice.company.logo}}

https://files.example.com/logo.png

### **고객 세부 정보**

**항목**

**병합 필드**

**예시**

고객명

{{invoice.customer.name}}

김고객

고객 이름

{{invoice.customer.first_name}}

고객

고객 성

{{invoice.customer.last_name}}

김

고객 전화

{{invoice.customer.phone}}

(02) 2222-3456

고객 이메일

{{invoice.customer.email}}

customer@kim.com

고객 회사

{{invoice.customer.company}}

김씨 건설

고객 주소

{{invoice.customer.address}}

서울시 중구 메인로 3333

고객 도시

{{invoice.customer.city}}

서울

고객 지역

{{invoice.customer.state}}

서울특별시

고객 우편번호

{{invoice.customer.postal_code}}

04512

### **발신자 세부 정보**

**항목**

**병합 필드**

**예시**

발신자 이름

{{invoice.sender.name}}

박발신

발신자 이메일

{{invoice.sender.email}}

sender@park.com

### **카드 정보**

**항목**

**병합 필드**

**예시**

카드 브랜드

{{invoice.card.brand}}

Visa

카드 끝 4자리

{{invoice.card.last4}}

7654

## **강의 병합 필드**

등록이나 콘텐츠 관련 메시지를 보낼 때 강의나 레슨 콘텐츠를 지원하는 필드입니다.

**항목**

**병합 필드**

**예시**

카테고리 제목

{{courses.categoryTitle}}

편물 시작하기

상품 제목

{{courses.productTitle}}

편물 기초

게시글 제목

{{courses.postTitle}}

최고의 실 종류

---

## **서비스 예약 병합 필드**

일정, 가격 책정, 담당자 정보를 포함한 서비스 예약 기록의 세부 정보를 가져오는 필드입니다.

**항목**

**병합 필드**

**예시**

제목

{{servicebooking.title}}

남성 헤어컷

시작 시간

{{servicebooking.start_time}}

오후 3:30

종료 시간

{{servicebooking.end_time}}

오후 4:30

시작 날짜

{{servicebooking.start_date}}

2026년 3월 6일

종료 날짜

{{servicebooking.only_end_date}}

2026년 3월 7일

종료 시간만

{{servicebooking.only_end_time}}

오후 4:30

요일

{{servicebooking.day_of_week}}

월요일

월 (숫자)

{{servicebooking.month}}

3

월 이름

{{servicebooking.month_name}}

3월

시간대

{{servicebooking.timezone}}

KST

총 가격

{{servicebooking.total_price}}

55,000원

미팅 장소

{{servicebooking.meeting_location}}

서울시 강남구 메인로 123

미팅 장소명

{{servicebooking.meeting_location_name}}

4번 의자

일정 변경 링크

{{servicebooking.reschedule_link}}

https://booking.example.com/reschedule?booking_id=123

취소 링크

{{servicebooking.cancellation_link}}

https://booking.example.com/cancel?booking_id=123

### **서비스 라인 항목 및 담당자**

**항목**

**병합 필드**

**예시**

서비스명

{{this.name}}

헤어컷 - 일반

서비스 가격

{{this.price}}

125,000원

서비스 소요시간

{{this.duration}}

45분

서비스 시작 날짜

{{this.only_start_date}}

2026년 3월 6일

서비스 시작 시간

{{this.only_start_time}}

오후 4:30

서비스 시간대

{{this.timezone}}

GMT+09:00 Asia/Seoul

애드온 이름

{{this.addonName}}

헤어 염색

애드온 가격

{{this.addonPrice}}

25,000원

애드온 소요시간

{{this.addonDuration}}

15분

애드온 수량

{{this.addonQuantity}}

1

담당자 이름

{{this.user.name}}

이미용

담당자 이메일

{{this.user.email}}

hairdresser@lee.com

담당자 전화

{{this.user.phone}}

(02) 1234-5678

담당자 전화 (raw)

{{this.user.phone_raw}}

+8201012345678

담당자 서명

{{this.user.email_signature}}

이미용
hairdresser@lee.com

---

## **빈 필드에 대한 기본값 또는 대체값**

저장된 데이터가 없을 경우 일부 병합 필드가 공백일 수 있습니다. 병합 필드에 값이 없으면 일반적으로 아무것도 표시되지 않습니다.

실용적인 해결책은 필드에 값이 있을 때 하나의 콘텐츠 블록을 표시하고, 비어 있을 때 다른 블록을 표시하는 것입니다. 이 방식은 메시지를 읽기 쉽게 유지하고 어색한 빈 인사말을 방지하는 데 도움이 됩니다.

![빈 필드에 대한 대체값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064516854/original/2OAepGxVVU1dXnSiUzRVJsyHm0cUC0cOtg.png?1770653968)

*조건부 전송(Conditional Sending)을 토글하고, 이름과 같은 필드를 선택한 다음, 조건(예: "비어있지 않음")을 설정하고, 해당 조건이 충족될 때만 표시할 콘텐츠를 정의합니다. 조건이 충족되지 않을 때 표시할 별도의 블록을 구성할 수도 있습니다.*

---

## **자주 묻는 질문**

**Q: 병합 필드에 값이 없으면 어떻게 되나요?**

병합 필드는 일반적으로 빈 공간으로 교체되어 문장의 일부가 제거될 수 있습니다(예: "안녕하세요 ,").

**Q: 일반 전화번호 필드와 raw 전화번호 필드의 차이점은 무엇인가요?**

Raw 전화번호 형식은 괄호와 대시 같은 문자를 제거하며, 링크, 추적 매개변수, 국제 형식에 더 적합합니다.

**Q: 인보이스와 결제 관련 메시지에 병합 필드를 사용할 수 있나요?**

네. 병합 필드를 사용하여 인보이스 번호, 총액, 마감일, 고객 세부 정보, 링크를 삽입할 수 있습니다.

**Q: 다른 계정과 다른 병합 필드가 표시되는 이유는 무엇인가요?**

사용 가능한 병합 필드는 활성화된 도구, 설정, 편집 중인 기록 유형에 따라 달라질 수 있습니다.

**Q: 이름이 누락된 경우 빈 인사말을 어떻게 피할 수 있나요?**

조건부 콘텐츠 블록을 사용하여 이름이 있을 때는 하나의 인사말을, 없을 때는 다른 인사말을 표시하도록 하세요.

---

## **도움이 필요하신가요?**

병합 필드가 예상대로 채워지지 않는다면, 해당 기록에 필요한 정보(이름, 이메일, 예약 시간 등)가 포함되어 있는지 확인하세요. 템플릿 및 자동화 문제의 경우, 병합 필드 선택기에서 올바른 병합 필드가 삽입되었는지, 예상되는 컨텍스트(연락처, 예약, 인보이스, 또는 예약)에서 메시지가 발송되고 있는지 확인하세요.

여전히 도움이 필요한 경우, 계정의 인앱 도움말 옵션을 사용하시고 병합 필드명, 사용 위치, 확인된 출력 예시를 포함하여 문의해 주세요.

---
*원문 최종 수정: 2026년 3월 10일*
*Hyperclass 사용 가이드 — hyperclass.ai*