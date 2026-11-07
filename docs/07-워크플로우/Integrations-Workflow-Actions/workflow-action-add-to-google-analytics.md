---
원문: /support/solutions/articles/155000003367-workflow-action-add-to-google-analytics
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add To Google Analytics(Google Analytics에 추가)

**Google Analytics** 액션은 Google Analytics(GA) 계정으로 사용자 지정 이벤트를 보내는 액션이에요. 웹사이트나 앱에서 일어나는 특정 사용자 행동을 GA에 기록해 두고 분석에 쓸 수 있어요.

## 액션 이름

**Google Analytics**

## 액션 설명

이 액션은 Google Analytics(GA4 또는 UA)로 사용자 지정 이벤트를 바로 보내요. 보낼 때는 **Measurement ID**(측정 ID), **Event Name**(이벤트 이름), **API Secret**(API 시크릿), **Event Value**(이벤트 값) 같은 정보를 지정해요. GA4(Google Analytics 4)와 UA(Universal Analytics)를 모두 지원해요.

## 액션 상세 정보(Action Details)

![Google Analytics 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467697/original/EPGRuaUplacZu8Hmn3TIPtOaMraBVEhRcg.png?1725821507)

### 설정 방법

1. **Action Name**(액션 이름): 액션의 이름을 입력해요. 예: "Add to Google Analytics"
2. **Action Type**(액션 유형): 사용하는 환경에 맞게 **Google Analytics 4** 또는 **Universal Analytics**를 선택해요.
3. **Measurement ID**: GA4 속성의 측정 ID를 입력해요.
4. **Event Name**: GA4/UA에 표시될 이벤트 이름을 입력해요. 예: "purchase", "page\_view" 이벤트 이름 규칙은 [Google 안내 문서](https://support.google.com/analytics/answer/13316687?hl=en)를 참고하세요.
5. **API Secret**: 이벤트 데이터를 안전하게 보낼 수 있도록 GA4에서 만든 API 시크릿을 입력해요.
6. **Event Value**: 이벤트와 관련된 값(예: 매출, 클릭 수)을 함께 보내고 싶을 때 입력해요. 입력하지 않아도 돼요.

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| Measurement ID | GA4에서 내 Google Analytics 속성을 구분하는 고유 ID | 예 |
| Event Name | GA4 또는 UA에서 발생시킬 이벤트의 이름 | 예 |
| API Secret | 데이터를 안전하게 보내기 위해 Google Analytics에서 만든 비밀 키 | 예 |
| Event Value | 이벤트와 함께 보낼 값 또는 매개변수 | 아니요 |

## 예시

웹사이트에서 사용자가 폼을 제출했을 때, Google Analytics에 "폼 제출" 이벤트를 보내 기록할 수 있어요. **Measurement ID**로 이벤트가 올바른 속성에 연결되고, **API Secret**으로 데이터가 안전하게 전송돼요.

## 추천 트리거

- **Form Submission**(폼 제출): 웹사이트의 폼이 제출되면 이 액션을 실행해 GA로 이벤트 데이터를 보내요.
- **Page Visit**(페이지 방문): 사용자가 상품 페이지 같은 특정 페이지를 방문하면 이벤트를 보내 사용자 행동을 추적해요.
- **Tag Added**(태그 추가됨): "새 리드" 같은 태그가 연락처에 추가되면, 그 변경을 추적하는 이벤트를 GA로 보낼 수 있어요.
- **Appointment Booked**(예약 완료): 사용자가 예약을 잡으면 이벤트를 보내, 하이퍼클래스를 통해 몇 건의 예약이 이루어졌는지 확인해요.
- **Product Purchase**(상품 구매): 상품이 구매되면 이 액션을 실행해 구매 금액 같은 관련 정보를 Google Analytics로 보내요.

## 추가 참고 사항

- 이 액션을 쓰기 전에 하이퍼클래스에 Google Analytics가 올바르게 설정되어 있는지 확인하세요.
- Google Analytics로 보낸 이벤트는 리포팅, 세분화, 마케팅 자동화에 활용할 수 있어요.
- 이벤트가 제대로 기록되려면 **Measurement ID**와 **API Secret**이 정확해야 해요.
