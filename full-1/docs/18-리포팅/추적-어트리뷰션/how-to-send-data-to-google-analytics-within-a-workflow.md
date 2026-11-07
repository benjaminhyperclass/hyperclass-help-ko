---
원문: https://help.gohighlevel.com/support/solutions/articles/48001223243-how-to-send-data-to-google-analytics-within-a-workflow
번역일: 2026-11-07
카테고리: 18-리포팅
---

# 워크플로우에서 Google Analytics로 데이터 보내기

워크플로우에 Google Analytics 트리거를 넣어 폼 제출, 사용자 옵트인, 지원 전화 같은 특정 이벤트를 Google Analytics로 보낼 수 있어요. 페이지 조회나 방문 이상의 행동을 추적하고 싶을 때 쓰세요.

워크플로우에서 **Google Analytics** 이벤트 트리거를 쓰려면 아래 값을 입력해야 해요.

GA4 속성과 UA 속성의 차이는 [Google 도움말](https://support.google.com/analytics/answer/11986666?hl=en#zippy=%2Cin-this-article)에서 확인할 수 있어요.

---

## Google Analytics에서 추적 ID 찾기

### UA 속성

1. Google Analytics를 열어요.
2. **관리자** 탭을 클릭해요.
3. 왼쪽 열에서 **Tracking Info**(추적 정보)를 클릭해요.
4. **추적 코드**를 클릭해요.
5. 이곳에서 코드를 확인할 수 있어요. 유니버설 애널리틱스(UA) 사용자의 코드는 "UA"로 시작해요.

### GA4 속성

1. Google Analytics를 열어요.
2. **관리자** 탭을 클릭해요.
3. 왼쪽 열에서 **Property Settings**(속성 설정)를 클릭해요.
4. **Property ID**(속성 ID)를 클릭해요.
5. 이곳에서 코드를 확인할 수 있어요. Google Analytics 4 사용자의 코드는 숫자로 되어 있어요.

---

## 어떻게 작동하나요

트리거나 액션에서 **Add to Google Analytics**(Google Analytics에 추가) 옵션을 선택하면 아래 입력란이 새로 나타나요.

- **Tracking id/property id**(추적 ID/속성 ID)
- **이벤트 카테고리**
- **이벤트 액션**
- **Event label**(이벤트 라벨)
- **Event value**(이벤트 값)

예를 들어 **이벤트 카테고리**에 "폼 제출", **이벤트 액션**에 "종료 폼 옵트인", **Event label**에 "Back Friday 폼 제출"을 입력할 수 있어요. 이 값들은 작은 아이콘 태그를 눌러 동적 값으로 넣을 수도 있어요.

![Google Analytics 이벤트 입력란 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255298205/original/JWpX4aSQucOUmvCdoyaTbe1uTLj9BAn9vw.jpeg?1665087756)

하이퍼클래스는 정해진 규칙에 따라 트래픽을 특정 소스로 분류해요. 전체 페이지 URL과 유입 도메인(있는 경우)을 이 규칙과 비교해서 분류해요. 추적 규칙과 소스는 아래 표와 같아요.

{% hint style="info" %}
utm_medium과 utm_source를 둘 다 설정하면 그 값을 사용해요. 둘 중 하나라도 없으면 아래 표에 따라 분류해요.

각각의 고유한 클릭을 구별하기 위해 gclid(Google Click Identifier)를 함께 전달해요.
{% endhint %}

| 속성 | 규칙 | utm_medium | utm_source |
| --- | --- | --- | --- |
| Google Organic(Google 자연 검색) | 유입 도메인이 Google 검색 엔진인 경우 | organic | Google |
| Paid Search(유료 검색) | utm_source가 google이고 유입 도메인이 google.com인 경우 | CPC | Google |
| Facebook | facebook.com | referral | Facebook |
| Paid Social(유료 소셜) | utm_source가 facebook.com이고 utm_medium 매개변수에 "cpc"가 포함된 경우 | CPC | Facebook |
| Direct Traffic or Bookmarked(직접 유입 또는 북마크) | 유입 도메인이나 추적 URL이 없는 경우 | none | direct |
| Referral(참조 유입) | example.com | referral | example.com |
| 소셜 미디어 | 유입 도메인이 Facebook, Instagram, Youtube, credit, Twitter, Naver, Pinterest 같은 소셜 미디어 사이트인 경우 | social | Social Referring Site |
| Display Traffic(디스플레이 유입) | example.com | cmp, banner, display | example.com |

<!-- 검토 필요: 원문의 'credit'은 Reddit의 오타로 보임 -->

---

## 자주 묻는 질문

### Universal Analytics와 Google Analytics 4는 어떻게 다른가요?
자세한 내용은 [Google 도움말](https://support.google.com/analytics/answer/9964640?hl=en#zippy=%2Cin-this-article)을 참고하세요.

### GA4에서 카테고리, 액션, 라벨은 어디서 확인하나요?
Universal Analytics의 이벤트에는 카테고리, 액션, 라벨이 있고, 이벤트가 히트 유형 중 하나로 따로 구분돼요. Google Analytics 4 속성에서는 모든 "히트"가 이벤트여서 히트 유형의 구분이 없어요. 예를 들어 누군가 웹사이트 페이지를 보면 page_view 이벤트가 발생해요.

Google Analytics 4 이벤트에는 카테고리, 액션, 라벨이라는 개념이 없어요. 그래서 Universal Analytics 리포트와 달리 Google Analytics 4 리포트에는 카테고리, 액션, 라벨이 표시되지 않아요. 기존 이벤트 구조를 그대로 옮기기보다, Google Analytics 4 모델에 맞춰 데이터 수집 방식을 다시 설계하는 것이 좋아요.

### GA4에서 설정이 제대로 작동하는지 어떻게 확인하나요?
Google Analytics에서 **GA4 속성**으로 이동한 다음, 탐색 메뉴에서 **리포팅 > Acquisition Reports**(획득 리포트)로 가세요. 설정이 올바르다면 이곳에 데이터가 표시돼요. 소스와 매체 필터(이미지에 빨간색으로 표시)를 추가해서 확인하는 것을 권해요.

![GA4 획득 리포트에서 소스와 매체 필터를 표시한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255298206/original/x2CxeoFrIDUpxT_My_liS1jTU-k_yj5hnQ.jpeg?1665087756)
