---

번역일: 2026-04-08
카테고리: 리포팅 > 어트리뷰션
---

# 워크플로우에서 Google Analytics로 데이터 보내는 방법

Google Analytics 트리거로 워크플로우를 설정하는 것은 쉽습니다. "Google Analytics" 이벤트 트리거를 사용하려면 워크플로우에 다음 매개변수들을 추가해야 합니다. 이 기법은 사용자의 페이지 조회/방문 외에 폼 제출, 사용자 옵트인, 고객 지원 전화 등의 구체적인 이벤트를 추적하고 싶을 때 사용합니다.

[GA4와 UA 속성의 차이점](https://support.google.com/analytics/answer/11986666?hl=en#zippy=%2Cin-this-article)

---

## Google Analytics에서 추적 ID 찾는 방법

**UA 속성의 경우 -**

- Google Analytics를 엽니다
- '**Admin(관리자)**' 탭을 클릭합니다
- 왼쪽 열에서 '**Tracking Info(추적 정보)**'를 클릭합니다
- '**Tracking Code(추적 코드)**'를 클릭합니다
- 여기서 코드를 확인할 수 있습니다. Universal Analytics 사용자의 경우 코드가 "**UA.**"로 시작합니다

**GA4 속성의 경우 -**

- Google Analytics를 엽니다
- '**Admin(관리자)**' 탭을 클릭합니다
- 왼쪽 열에서 '**Property Settings(속성 설정)**'을 클릭합니다
- '**Property ID(속성 ID)**'를 클릭합니다
- 여기서 코드를 확인할 수 있습니다. Google Analytics 4 사용자의 경우 코드는 숫자로 되어 있습니다

---

## 어떻게 작동하나요?

사용자가 트리거나 액션에서 Google Analytics 추가 옵션을 선택하면, 다음과 같은 새로운 필드들이 나타납니다.

- 추적 ID/속성 ID
- 이벤트 카테고리
- 이벤트 액션
- 이벤트 라벨
- 이벤트 값

예를 들어 - 이벤트 카테고리는 폼 제출, 액션은 종료 폼 옵트인, 라벨은 블랙 프라이데이 폼 제출입니다. 이런 것들은 작은 아이콘 태그로 동적 값을 설정할 수 있습니다.

![Google Analytics 워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255298205/original/JWpX4aSQucOUmvCdoyaTbe1uTLj9BAn9vw.jpeg?1665087756)

특정 소스로 트래픽을 분류하기 위해 일련의 규칙을 따르며, 전체 페이지 URL과 참조 도메인(사용 가능한 경우)을 이 규칙들과 비교합니다. 추적을 위한 규칙과 소스에 대한 자세한 내용은 아래 표에 나와 있습니다.

참고사항:

utm_medium과 utm_source를 모두 설정한 경우 이를 사용하고, 둘 중 하나라도 사용할 수 없는 경우 아래 표에 따라 분류합니다.

각 고유 클릭을 인식하기 위해 gclid (Google Click Identifier)를 전달합니다.

**특성** | **규칙** | **utm_medium** | **utm_source**
--- | --- | --- | ---
Google 자연 검색 | 참조 도메인이 Google 검색 엔진인 경우 | organic | Google
유료 검색 | utm_source가 google이고 참조 도메인이 google.com인 경우 | CPC | Google
Facebook | facebook.com | referral | Facebook
유료 소셜 | utm_source가 facebook.com이고 "utm_medium" 매개변수에 "cpc"가 포함된 경우 | CPC | Facebook
직접 트래픽 또는 북마크 | 참조 도메인이나 추적 URL이 없는 경우 | none | direct
추천 | example.com | referral | example.com
소셜 미디어 | 참조 도메인이 Facebook, Instagram, Youtube, credit, Twitter, Naver, Pinterest 등의 소셜 미디어 사이트인 경우 | social | 소셜 참조 사이트
디스플레이 트래픽 | example.com | cmp, banner, display | example.com

---

# **FAQ**

#### **Universal Analytics와 Google Analytics 4의 차이점은 무엇인가요?**

자세한 정보는 이 문서를 참고하세요 - [https://support.google.com/analytics/answer/9964640?hl=en#zippy=%2Cin-this-article](https://support.google.com/analytics/answer/9964640?hl=en#zippy=,in-this-article)

#### **GA4에서 카테고리, 액션, 라벨을 어떻게 찾나요?**

Universal Analytics 이벤트에는 카테고리, 액션, 라벨이 있으며 자체 히트 타입입니다. Google Analytics 4 속성에서는 모든 "히트"가 이벤트이며, 히트 타입 간의 구분이 없습니다. 예를 들어, 누군가 웹사이트 페이지를 보면 page_view 이벤트가 트리거됩니다.

Google Analytics 4 이벤트에는 카테고리, 액션, 라벨이라는 개념이 없으며, Universal Analytics 보고서와 달리 Google Analytics 4 보고서는 카테고리, 액션, 라벨을 표시하지 않습니다. 따라서 기존 이벤트 구조를 Google Analytics 4로 포팅하기보다는 Google Analytics 4 모델의 관점에서 데이터 수집을 다시 생각해보는 것이 좋습니다.

#### **GA4에서 설정이 제대로 작동하는지 어떻게 확인하나요?**

Google Analytics로 이동해서 GA4 속성을 방문하세요. 네비게이션에서 Reporting > Acquisition Reports(보고 > 획득 보고서)로 이동하세요. 설정이 올바르게 완료되면 여기에 표시되며, 소스와 매체의 필터를 추가하는 것을 권합니다(빨간색으로 표시됨).

![GA4 획득 보고서 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255298206/original/x2CxeoFrIDUpxT_My_liS1jTU-k_yj5hnQ.jpeg?1665087756)

---
*원문 최종 수정: Fri, 7 Oct, 2022 at 6:19 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*