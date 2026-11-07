---
원문: /support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows
번역일: 2026-11-06
카테고리: 42-통합
---

# 워크플로우의 Facebook Conversions API 액션과 트리거

워크플로우에 **Facebook Conversions API**(Facebook 전환 API) 액션을 추가하면 전환 데이터를 Facebook으로 다시 보낼 수 있어요. Facebook 픽셀로 방문자에게 쿠키를 남기지 않아도 돼요. 이 문서에서는 이 액션과 함께 쓸 수 있는 트리거, 입력할 매개변수, 자주 겪는 문제를 안내해요.

## 자주 묻는 질문

### Facebook 전환 이벤트는 어떤 트리거와 함께 쓸 수 있나요?

1. **Funnel events**(퍼널 이벤트)에는 다음 트리거를 쓸 수 있어요.
   - **폼 제출**
   - **Survey Submitted**(설문 제출)
   - **Customer Booked Appointment**(고객 예약 등록)
   - **Order Form Submission**(주문 폼 제출)

   예약은 **Customer Booked Appointment**에서만 작동해요. 일반 예약 트리거에서는 작동하지 않아요. 일반 예약 트리거는 범용 트리거이고, **Customer Booked Appointment**가 위젯용 트리거예요.
2. **Lead Events**(리드 이벤트)에는 **Facebook Lead Form Submission**(Facebook 리드 폼 제출)과 **Pipeline Stage Change**(파이프라인 단계 변경)를 주로 써요. 하지만 Facebook Conversions API 액션은 이 트리거에만 한정되지 않아요.

   **Contact Tag Added**(연락처 태그 추가됨), **Opportunity Status Changed**(기회 상태 변경됨), **Contact Changed**(연락처 변경됨) 같은 연락처 기반 트리거도 쓸 수 있어요. 단, 연락처에 유효한 Facebook 어트리뷰션 데이터가 있어야 해요.

   전환이 Meta에 올바르게 귀속되어 전송되려면 연락처에 다음과 같은 Facebook 어트리뷰션 정보가 있어야 해요.
`fbclid` / Facebook 클릭 ID(`fbc`)
   - 연락처에 연결된 Paid Social(Facebook) 어트리뷰션
3. 예를 들어 연락처가 처음에 Facebook 광고를 통해 CRM에 들어왔고 나중에 태그가 추가됐다고 해 볼게요. 이때 **Contact Tag Added** 트리거로 시작한 워크플로우는 그 연락처에 저장된 Facebook 어트리뷰션 정보를 사용해 Facebook Conversions API 액션을 실행할 수 있어요.

   연락처에 필요한 Facebook 어트리뷰션 정보가 없으면 워크플로우 액션은 하이퍼클래스에서 실행되더라도 Meta가 전환을 받지 못하거나 올바르게 귀속하지 못할 수 있어요.

### 어떤 Event Details 매개변수를 써야 하나요?

**Event Source URL**(이벤트 소스 URL)을 사용하세요.

### 어떤 고객 정보 매개변수를 쓸 수 있나요?

**고객 정보**에는 다음 매개변수를 쓸 수 있어요.

- **Client IP address**(클라이언트 IP 주소): 해시하지 않아요.
- **Client user agent**(클라이언트 유저 에이전트): 해시하지 않아요.
- **이메일 주소**
- **First Name**(이름)
- **Surname**(성)
- **Browser ID (fbp) cookie**(브라우저 ID 쿠키): 해시하지 않아요.
- **Click ID (fbc) cookie**(클릭 ID 쿠키): 해시하지 않아요.

### 액세스 토큰과 Pixel Id 필드에 커스텀 값을 쓸 수 있나요?

예, 두 필드 모두 **커스텀 값**을 쓸 수 있어요. **액세스 토큰**과 **Pixel Id**(픽셀 ID) 필드에 입력해 보세요.

### Order Form Submission 트리거에서 {{Order.Amount}} 커스텀 값이 작동하지 않아요.

`{{Order.Amount}}` 커스텀 값은 **Order Submitted**(주문 접수) 트리거에서만 작동해요. 결제가 완료되어야 금액을 알 수 있기 때문이에요. **Order Form Submission** 트리거는 결제가 처리되기 전에 실행돼요. 이때는 주문 금액이 아직 확정되지 않아서 이 값을 쓸 수 없어요.

### Facebook Business Manager에서 테스트 이벤트가 보이지 않아요.

테스트 전환이 보이지 않으면 **Diagnostics**(진단) 탭에서 오류가 있는지 확인하세요. 흔한 원인은 Facebook이 도메인을 차단한 경우예요. 이때는 Facebook의 **Settings**(설정)에서 맨 아래로 스크롤해 **Domains In Your Allow List**(허용 목록의 도메인)로 이동하세요. 그곳에서 도메인을 승인할 수 있어요.

### 이벤트 중복 제거는 어떻게 처리되나요?

이벤트 중복 제거는 자동으로 처리돼요.

퍼널은 `eventId`를 만들어 연락처의 어트리뷰션 데이터와 함께 저장해요. Conversion API 액션이 실행되면 같은 `eventId`가 Meta로 전송돼요(값이 있는 경우). 그러면 Meta가 브라우저 이벤트와 서버 이벤트의 중복을 제거할 수 있어요. 따로 설정할 필요는 없어요.

### Test Workflow 버튼으로 Facebook 전환을 테스트할 수 있나요?

예, **Test Workflow**(워크플로우 테스트) 버튼으로 테스트할 수 있어요.

### **리드**를 선택했는데 Facebook에서 "Custom Event"로 보고돼요.

테스트 데이터를 보낼 때 이런 일이 생겨요. Facebook이 왜 이렇게 표시하는지는 정확히 알려지지 않았어요. 실제 전환을 실행하면 "Lead"로 표시돼요.

### **통화**, 기회 상태 변경, 태그 같은 트리거로 오프라인 이벤트를 Facebook Conversions API 액션과 함께 쓸 수 있나요?

예. 연락처에 이미 유효한 Facebook 어트리뷰션 정보가 있으면 이런 트리거를 쓸 수 있어요. 하이퍼클래스는 Meta로 전환 이벤트를 보낼 때 연락처에 연결된 Facebook 어트리뷰션 데이터를 사용해요.

예를 들어 다음과 같은 흐름이에요.

- 연락처가 Facebook 광고를 통해 들어오면서 Facebook 어트리뷰션 데이터를 받아요.
- 나중에 태그가 추가되거나 기회 상태가 바뀌어요.
- 그 동작으로 시작된 워크플로우가, 연락처에 이미 연결된 어트리뷰션 정보를 사용해 Facebook Conversions API 이벤트를 보낼 수 있어요.

{% hint style="warning" %}
중요: 워크플로우 트리거가 Facebook 어트리뷰션 데이터를 만들어 주지는 않아요. 연락처에 이전 Facebook 상호작용에서 얻은 어트리뷰션 정보가 이미 있어야 해요.
{% endhint %}

예시 1

연락처가 Facebook 폼 제출로 생성되면 최초 어트리뷰션 소스는 Paid Social(Facebook)이에요. Facebook 폼 제출 트리거를 쓰는 워크플로우라면 연락처에 fbclid가 있어서, 워크플로우가 전환 API(CAPI)로 데이터를 보내요.

추가 동작: 시간이 지나 그 연락처가 기회 추가·업데이트 트리거로 기회가 되었다고 해 볼게요. 이때 워크플로우에서 **기회 상태** 트리거를 쓰면 전환 API로 데이터를 보낼 수 있어요. Facebook 폼 제출로 생성된 연락처가 fbclid를 전달하기 때문이에요.

예시 2

연락처가 Google 광고, 오가닉 Google 검색 또는 직접 유입으로 생성되면 최초 어트리뷰션 소스는 Paid Search(Google) 또는 Direct Traffic이에요. 이 연락처가 나중에 Facebook 폼과 상호작용해 폼을 작성하면 최신 어트리뷰션은 Paid Social(Facebook)이 되고, 연락처에 fbclid가 생겨요. 이제 에이전시가 Facebook 폼 제출 > Facebook 전환 API로 이어지는 워크플로우를 실행하면, fbclid와 함께 전환 API로 데이터를 보내요.

추가 동작: 시간이 지나 그 연락처가 기회 추가·업데이트 트리거로 기회가 되었다고 해 볼게요. 이때 워크플로우에서 **기회 상태** 트리거를 쓰면 전환 API로 데이터를 보낼 수 있어요. Facebook 폼 제출로 생성된 연락처가 fbclid를 전달하기 때문이에요.
