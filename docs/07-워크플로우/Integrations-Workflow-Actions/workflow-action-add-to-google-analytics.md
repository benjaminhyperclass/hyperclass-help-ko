---

번역일: 2026-04-08
카테고리: 07-워크플로우 > Integrations Workflow Actions
---

# 워크플로우 액션 - Google Analytics 추가

**목차**

- [개요](#개요)
- [액션명](#액션명)
- [액션 설명](#액션-설명)
- [액션 세부사항](#액션-세부사항)
- [설정 방법](#설정-방법)
- [예시](#예시)
- [추천 트리거](#추천-트리거)
- [추가 참고사항](#추가-참고사항)

## 개요

"**Google Analytics**" 액션을 사용하면 Google Analytics(GA) 계정에서 커스텀 이벤트를 발생시킬 수 있습니다. 이 액션은 Google Analytics 4(GA4)와 Universal Analytics(UA)를 모두 지원합니다. 웹사이트나 앱에서 특정 사용자 상호작용이나 행동을 GA에서 추적하여 더 나은 인사이트를 얻을 수 있습니다.

## 액션명

**Google Analytics**

## 액션 설명

이 액션을 사용하면 측정 ID, 이벤트명, API 시크릿, 이벤트 값 등의 세부사항을 지정하여 커스텀 이벤트를 Google Analytics(GA4 또는 UA)로 직접 전송할 수 있습니다.

## 액션 세부사항

![Google Analytics 워크플로우 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467697/original/EPGRuaUplacZu8Hmn3TIPtOaMraBVEhRcg.png?1725821507)

### 설정 방법

- **액션명(Action Name)**: 액션의 이름을 설정합니다(예: "Google Analytics에 추가").
- **액션 유형(Action Type)**: 설정에 따라 "Google Analytics 4" 또는 "Universal Analytics" 중 선택합니다.
- **측정 ID(Measurement ID)**: GA4 속성의 측정 ID를 입력합니다.
- **이벤트명(Event Name)**: GA4/UA에 표시될 이벤트명을 지정합니다(예: "purchase", "page_view"). [Google의 이벤트 명명 규칙은 여기를 참조하세요](https://support.google.com/analytics/answer/13316687?hl=en)
- **API 시크릿(API Secret)**: 이벤트 데이터를 안전하게 전송하기 위해 GA4 설정의 API 시크릿을 입력합니다.
- **이벤트 값(Event Value)**: 선택적으로 매출이나 클릭 수와 같은 이벤트 관련 값을 전달할 수 있습니다.

| 필드명 | 설명 | 필수 여부 |
|--------|------|----------|
| 측정 ID | GA4의 Google Analytics 속성에 대한 고유 ID | 예 |
| 이벤트명 | GA4 또는 UA에서 트리거하고자 하는 이벤트 이름 | 예 |
| API 시크릿 | 데이터를 안전하게 전송하기 위해 Google Analytics에서 생성된 시크릿 키 | 예 |
| 이벤트 값 | 이벤트와 함께 전달하고자 하는 값 또는 매개변수 | 아니오 |

## 예시

웹사이트에서 사용자가 폼 제출을 완료했을 때 Google Analytics에서 "Form Submitted" 이벤트를 발생시켜 추적하는 데 이 액션을 사용할 수 있습니다. 측정 ID는 이벤트를 올바른 속성에 연결하고, API 시크릿은 데이터가 안전하게 전송되도록 보장합니다.

## 추천 트리거

- **폼 제출(Form Submission)**: 웹사이트의 폼이 제출되었을 때 이 액션을 트리거하여 이벤트 데이터를 GA로 전송합니다.
- **페이지 방문(Page Visit)**: 사용자가 제품 페이지와 같은 특정 페이지를 방문했을 때 이벤트를 트리거하여 사용자 행동을 추적합니다.
- **태그 추가(Tag Added)**: 사용자 태그가 추가되었을 때(예: "신규 리드"), 이 액션으로 GA에 해당 변경사항을 추적하는 이벤트를 전송할 수 있습니다.
- **예약 완료(Appointment Booked)**: 사용자가 예약을 할 때 이벤트를 발생시켜 시스템을 통해 몇 개의 예약이 이루어졌는지 추적합니다.
- **상품 구매(Product Purchase)**: 상품이 구매되었을 때 이 액션을 트리거하여 관련 정보를 Google Analytics로 전송합니다(예: 구매 금액).

## 추가 참고사항

- 이 액션을 사용하기 전에 시스템에서 Google Analytics가 올바르게 설정되어 있는지 확인하세요.
- Google Analytics로 전송된 이벤트는 보고서, 세분화, 마케팅 자동화에 활용할 수 있습니다.
- 성공적인 이벤트 추적을 위해 측정 ID와 API 시크릿이 정확한지 확인하세요.

---
*원문 최종 수정: Mon, 24 Feb, 2025 at 10:16 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*