---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션: Google 애널리틱스로 이벤트 보내기

워크플로우에서 **Google 애널리틱스** 액션을 쓰면 Google Analytics(GA) 계정으로 원하는 이벤트를 직접 보낼 수 있어요. 웹사이트나 앱에서 일어나는 사용자의 행동을 GA에서 추적하고 싶을 때 사용하세요.

## 개요

**Google 애널리틱스** 액션은 GA 계정에 커스텀 이벤트를 전송해요. Google Analytics 4(GA4)와 Universal Analytics(UA)를 모두 지원해요.

이 액션에서는 **Measurement ID**(측정 ID), **Event Name**(이벤트 이름), **API Secret**(API 비밀 키), **이벤트 값**을 지정해서 이벤트를 보내요.

{% hint style="info" %}
워크플로우 빌더 화면은 영어로 표시되는 부분이 있어요. 이 문서에서는 화면에 보이는 이름을 그대로 적었어요.
{% endhint %}

## 액션 상세 정보

![Google 애널리틱스 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467697/original/EPGRuaUplacZu8Hmn3TIPtOaMraBVEhRcg.png?1725821507)

### 설정 방법

1. **액션 이름**에 이 액션을 구분할 이름을 입력하세요. 예: "Google 애널리틱스에 추가"
2. **작업 유형**에서 사용 중인 환경에 맞게 "Google Analytics 4" 또는 "Universal Analytics"를 선택하세요.
3. **Measurement ID**(측정 ID)에 GA4 속성의 Measurement ID를 입력하세요.
4. **Event Name**(이벤트 이름)에 GA4/UA에 표시할 이벤트 이름을 입력하세요. 예: `purchase`, `page_view`. 이름 규칙은 [Google의 이벤트 이름 규칙 안내](https://support.google.com/analytics/answer/13316687?hl=en)에서 확인할 수 있어요.
5. **API Secret**(API 비밀 키)에 GA4 설정에서 만든 API 비밀 키를 입력하세요. 이 키로 이벤트 데이터를 안전하게 전송해요.
6. 필요하면 **이벤트 값**에 이벤트와 관련된 값(예: 매출액, 클릭 수)을 입력하세요.

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| Measurement ID | GA4에서 내 속성을 구분하는 고유 ID | 필수 |
| Event Name | GA4 또는 UA에서 발생시킬 이벤트 이름 | 필수 |
| API Secret | 데이터를 안전하게 보내기 위해 Google 애널리틱스에서 만든 비밀 키 | 필수 |
| 이벤트 값 | 이벤트와 함께 보낼 값이나 파라미터 | 선택 |

## 예시

웹사이트에서 사용자가 폼을 제출하면 Google 애널리틱스에 **폼 제출** 이벤트를 보내도록 설정할 수 있어요. Measurement ID가 이벤트를 알맞은 속성에 연결하고, API Secret이 데이터를 안전하게 전달해요.

## 추천 트리거

- **폼 제출**: 웹사이트의 폼이 제출되면 이 액션을 실행해서 이벤트 데이터를 GA로 보내요.
- **Page Visit**(페이지 방문): 사용자가 상품 페이지 같은 특정 페이지를 방문하면 이벤트를 보내서 사용자 행동을 추적해요.
- **태그 추가됨**: 사용자에게 태그(예: "**새 리드**")가 추가되면 그 변화를 추적하는 이벤트를 GA로 보내요.
- **예약 완료**: 사용자가 예약을 완료하면 이벤트를 보내서 시스템을 통해 들어온 예약이 몇 건인지 확인해요.
- **상품 구매**: 상품이 구매되면 구매 금액 같은 관련 정보를 Google 애널리틱스로 보내요.

## 추가 메모

- 이 액션을 쓰기 전에 Google 애널리틱스 연결이 올바르게 설정되어 있는지 확인하세요.
- GA로 보낸 이벤트는 리포팅, 세그먼트 분류, 마케팅 자동화에 활용할 수 있어요.
- 이벤트가 제대로 기록되려면 Measurement ID와 API Secret이 정확해야 해요.
