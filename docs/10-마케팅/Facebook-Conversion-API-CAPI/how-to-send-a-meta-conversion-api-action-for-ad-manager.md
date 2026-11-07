---
원문: /support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-
번역일: 2026-11-06
카테고리: 10-마케팅
---

# Meta Conversion API 액션으로 광고 관리자 전환 이벤트 보내기

워크플로우에서 Meta로 Conversion API(CAPI) 이벤트를 보내는 방법을 설명해요. 최근 **Meta Conversion API** 액션에 추가된 **Ad Manager**(광고 관리자) 라디오 버튼이 무엇이 편한지도 함께 알아봐요.

{% hint style="info" %}
워크플로우 빌더는 영어 화면으로 남아 있어요. 그래서 빌더 안의 트리거·액션·필드 이름은 영어 그대로 쓰고, 처음 나올 때 뜻을 괄호로 덧붙였어요.
{% endhint %}

## 광고 캠페인과 전환 데이터셋을 만들었는데 왜 CAPI 액션 워크플로우가 또 필요한가요?

광고와 데이터셋을 설정한 뒤 CAPI 이벤트까지 Meta로 보내면 Meta 광고의 정확도와 안정성, 효과를 높일 수 있어요. 기본 Meta 데이터셋만 쓸 때와 달리 CAPI를 함께 쓰면 좋은 점은 다음과 같아요.

- 정확도 향상: CAPI는 서버에서 데이터를 직접 보내요. 그래서 브라우저 제한, 광고 차단기, 쿠키 제한에 영향을 받지 않고 사용자 행동을 더 믿을 수 있게 추적해요.
- 어트리뷰션 개선: 기기와 플랫폼을 넘나드는 전환(쿠키를 차단한 사용자 포함)을 추적해요. 캠페인 최적화에 쓸 데이터가 더 완전해지고, 리포트도 더 정확해져요.
- 픽셀 누락 보완: 로딩이 느리거나 개인정보 설정 때문에 픽셀 데이터가 차단되거나 빠져도, CAPI가 그 전환을 기록해요.
- 최적화 강화: 서버 기준의 더 세밀한 데이터로 Meta가 광고 타기팅과 성과를 개선할 수 있어요.
- 개인정보 규정 대응: 클라이언트 쿠키 의존도가 낮아서 개인정보 보호 규정에 더 잘 맞아요.
- 광고비 효율: 데이터가 정확할수록 Meta가 광고비를 더 효율적으로 쓰고 투자 수익률(ROI)을 높일 수 있어요.

정리하면, 픽셀을 만든 뒤 CAPI 이벤트를 Meta로 다시 보내면 추적 정확도와 광고 최적화, 기기·브라우저 간 어트리뷰션이 좋아져요. 브라우저 기반 픽셀 추적의 빈틈을 메워 주기 때문에, 개인정보 보호와 브라우저 제한이 강해져도 광고 캠페인이 효율적으로 돌아가요.

---

## Meta Conversion API 액션에는 어떤 워크플로우 트리거를 쓸 수 있나요?

![Meta Conversion API 액션에서 사용할 수 있는 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037638079/original/CL4W8FAhtV-LjEKe9VfqBVqFAUa_pIhS0A.png?1733217275)

워크플로우 액션이 **Meta Conversion API**인 경우, 쓸 수 있는 트리거는 FB CAPI 액션에서 고르는 **Event Type**(이벤트 유형)에 따라 달라요. 퍼널 이벤트와 리드 이벤트에서 쓸 수 있는 트리거는 다음과 같아요.

1. **Funnel Event**(퍼널 이벤트)에는 **Form Submitted**(폼 제출), **Survey Submitted**(설문 제출), **Customer Booked Appointment**(고객이 예약함), **Order Form Submission**(주문 폼 제출) 트리거를 쓸 수 있어요.  

   예약은 **Customer Booked Appointment**에서만 작동하고 **Appointment** 트리거에서는 작동하지 않아요. **Appointment**는 일반 트리거이고, **Customer Booked Appointment**는 위젯용 트리거이기 때문이에요.
2. **Lead Event**(리드 이벤트)에는 **Facebook Lead Form Submission**(Facebook 리드 폼 제출)과 **Pipeline Stage Change**(파이프라인 단계 변경) 트리거만 쓸 수 있어요. 연락처가 Facebook 리드 폼에서 들어온 경우에 작동해요.
3. **Instagram DM** 이벤트에는 CRM에 연락처가 생성되는 트리거라면 무엇이든 쓸 수 있어요.

---

## Meta Conversion API 액션에서 Ad Manager 라디오 버튼은 Integrations 라디오 버튼과 무엇이 다른가요?

워크플로우에서 Conversion API 액션을 만들 때 연결 유형을 두 가지 중에서 골라요.

- **Integrations**(연동)
- **Ad Manager**(광고 관리자)

![연결 유형 선택 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770657/original/XpDYkAD5lt1XxfNmsbndb6Ais472qqwOuw.png?1755497368)

![연결 유형 선택 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770608/original/MsYr_VqK6pzvkMnj27jUWl_oLbHT_0pitw.png?1755497312)

{% hint style="info" %}
**Integrations** 연결 유형에 대한 전체 정보와 각 필드의 의미는 아래 두 문서에서 자세히 볼 수 있어요.

- Meta conversion leads walkthrough
- Setup a funnel event for Meta conversion API
{% endhint %}

**Ad Manager** 연결 유형은 Meta와 워크플로우를 계속 오가야 하는 번거로움을 줄이려고 추가됐어요. 줄어드는 작업은 다음과 같아요.

1. CAPI를 Meta로 되돌려 보내려는 캠페인에 맞춰 이벤트 유형을 고를 수 있어요. 캠페인 목표가 **웹사이트 트래픽**이면 퍼널 이벤트를, **리드 생성**이면 리드 이벤트를 보내요. 다이렉트 메시지 광고(Click to direct ads)는 **Instagram DM**을 선택해요.  

   ![캠페인에 맞는 이벤트 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770827/original/rHgIqdAq4nGMsHDtrRcIuYzZueL9DcnATw.png?1755497695)
2. **Ad Manager**에 연결된 픽셀이 모두 드롭다운 항목으로 미리 채워져서, 그중 하나를 고르면 돼요. Meta로 돌아가 Pixel ID를 복사해서 붙여 넣을 필요가 없어요.  

   ![드롭다운에서 픽셀 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037642910/original/r6PKw2USmYvjpzah_TJZiuYisNbIbeB78w.png?1733220060)
3. **Ad Manager** 연결 유형에서는 액세스 토큰을 직접 만들어 CAPI 액션에 넣을 필요가 없어요. 하이퍼클래스가 처리해 줘서 왔다 갔다 하는 수고를 덜어요.
4. 리드 이벤트의 **Stage Name**(단계 이름)에는 파이프라인과 파이프라인 단계 이름이 정확히 들어가야 리포트가 더 정확해져요. 입력란 끝에 있는 태그 아이콘을 눌러 기회 파이프라인과 단계의 커스텀 값을 추가해 선택하세요.

### 리드 이벤트 + 단계 이름 = Purchase: 값과 통화

워크플로우에서 Meta Conversion API를 아래처럼 설정하면 필드가 두 개 더 나타나요.

- **Event Type**(이벤트 유형): Lead Event
- **Stage Name**(단계 이름): Purchase

추가로 나타나는 필드는 다음과 같아요.

- **Value**(값): 고정 값이나 커스텀 필드를 쓸 수 있어요.
- **Currency**(통화): 드롭다운이며 기본값은 USD예요. 퍼널 이벤트와 같은 통화 목록을 써요.

이 필드들은 **Stage Name**이 Purchase일 때만 필수예요.

**백엔드 동작**

- **Value**와 **Currency**를 입력하면 하이퍼클래스가 CAPI 페이로드에 담아 보내요.
- **Stage Name**이 Purchase가 아니면, 페이로드에 들어 있는 값과 통화는 무시해요.

---

## 통화, 기회 상태 변경, 태그 같은 트리거의 오프라인 이벤트를 Meta Conversion API 액션에 쓸 수 있나요?

네, 쓸 수 있어요. 이 경우 마지막으로 확보된 픽셀 데이터를 사용해 이벤트를 보내요. fbclid가 있으면 데이터가 Conversion API로 전송돼요. 아래 예시를 보면 이해하기 쉬워요.

**예시 1**

연락처가 Facebook 폼 제출로 생성됐다면 첫 어트리뷰션 소스는 Paid Social(Facebook)이에요. Facebook 폼 제출 트리거로 워크플로우를 만들면 그 연락처는 fbclid를 가지고 있어서, 워크플로우가 데이터를 Conversion API(CAPI)로 보내요.

추가 동작

- 시간이 지나 그 연락처가 기회로 전환되면(기회 추가/업데이트 트리거를 추가한 경우), 워크플로우에서 기회 상태 트리거를 사용해 데이터를 Conversion API로 보낼 수 있어요. Facebook 폼을 제출한 연락처는 fbclid를 전달하기 때문이에요.

**예시 2**

연락처가 Google 광고, Google 자연 검색, 직접 유입으로 생성됐다면 첫 어트리뷰션 소스는 Paid Search(Google) 또는 Direct Traffic이에요. 이후 그 연락처가 Facebook 폼을 보고 제출하면, 최신 어트리뷰션은 Paid Social(Facebook)이 되고 연락처는 fbclid를 갖게 돼요. 이때 에이전시가 Facebook 폼 제출 > Meta Conversion API 워크플로우를 실행하면, fbclid와 함께 데이터를 Conversion API로 보내요.

추가 동작

- 시간이 지나 그 연락처가 기회로 전환되면(기회 추가/업데이트 트리거를 추가한 경우), 워크플로우에서 기회 상태 트리거를 사용해 데이터를 Conversion API로 보낼 수 있어요. Facebook 폼을 제출한 연락처는 fbclid를 전달하기 때문이에요.

---

{% hint style="info" %}
**커스텀 값 추가**

Google Ads와 마찬가지로, 이제 Facebook Ads 전환 추적 파라미터도 직접 매핑할 수 있어요.

![Facebook Ads 전환 추적 파라미터 커스텀 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043836459/original/gFVWuYxc77LoQwMEWkY0p_spdSoyA3QWZQ.jpeg?1742815441)

사용 방법

커스텀 매핑은 기본적으로 꺼져 있어요. 토글을 켜면 커스텀 매핑을 사용할 수 있어요.

켜면 다음 항목을 매핑할 수 있어요.

1. 퍼널 이벤트용 FBCLID
2. 리드 이벤트용 Facebook Lead ID
3. 커스텀 매핑 필드를 입력하면 시스템 기본값보다 우선 적용돼요.
4. 비워 두면 시스템이 계속 기본 내부 값을 사용해요.
{% endhint %}
