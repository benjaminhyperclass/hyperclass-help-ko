---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003498-workflow-trigger-funnel-website-page-view
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Funnel/Website PageView(퍼널/웹사이트 페이지 조회)

연락처가 퍼널이나 웹사이트의 특정 페이지를 볼 때 워크플로우를 시작하는 트리거예요. 페이지 조회를 기준으로 후속 이메일을 보내거나 연락처에 태그를 붙이는 등의 자동화를 만들 수 있어요.

## 개요

**Funnel/Website PageView**(퍼널/웹사이트 페이지 조회) 트리거는 연락처가 퍼널이나 웹사이트의 특정 페이지를 볼 때 자동화를 실행해요. 페이지별 행동을 기준으로 후속 이메일을 보내거나, 콘텐츠에 반응한 연락처에 태그를 붙일 수 있어요.

## 트리거 이름

**Funnel/Website PageView**

## 트리거 설명

연락처가 지정한 퍼널 또는 웹사이트 페이지를 방문하면 이 트리거가 실행돼요. 리드나 고객이 어떤 페이지를 보는지에 따라 맞춤 후속 조치나 특정 액션을 자동으로 실행할 수 있어요.

## 트리거 상세

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Funnel/Website** | 모니터링할 퍼널 또는 웹사이트를 지정해요 | 예 |
| **Page** | 퍼널/웹사이트 안에서 모니터링할 페이지를 지정해요 | 아니요 |
| **UTM Campaign** | 특정 UTM 캠페인으로 들어온 방문을 추적해요 | 아니요 |
| **UTM Source** | 특정 UTM 소스로 들어온 방문을 추적해요 | 아니요 |
| **UTM Medium** | 특정 UTM 매체로 들어온 방문을 추적해요 | 아니요 |
| **UTM Content** | 특정 UTM 콘텐츠로 들어온 방문을 추적해요 | 아니요 |
| **Page Path** | 페이지 경로를 지정해 더 세밀하게 추적해요 | 아니요 |

![Funnel/Website PageView 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033068980/original/nRQNQfh7_KzYG6muqLyfvI2cQK3yLIXCrw.png?1726650432)

## 연산자

| 연산자 | 설명 |
| --- | --- |
| **Is**(같음) | 값이 입력한 내용과 정확히 일치해야 해요 |
| **Is any of**(다음 중 하나) | 값이 나열한 옵션 중 하나이면 돼요 |
| **Is none of**(다음 중 어느 것도 아님) | 값이 나열한 옵션에 하나도 해당하지 않아야 해요 |
| **Is empty**(비어 있음) | 필드가 비어 있어야 해요 |
| **Is not empty**(비어있지 않음) | 필드가 비어 있지 않아야 해요 |

## 설정 방법

1. 워크플로우 빌더의 트리거 목록에서 **Funnel/Website PageView** 트리거를 선택하세요.
2. **Trigger Name**(트리거 이름)에 알아보기 쉬운 이름을 입력하세요. 예를 들면 "퍼널 페이지 방문 - 결제"처럼 쓸 수 있어요.
3. **Filters**(필터)를 설정하세요.
   - **Funnel/Website**: 모니터링할 퍼널 또는 웹사이트를 선택하세요.
   - **Page**: 추적할 페이지를 정확히 지정하세요. 필수는 아니에요.
   - **UTM Parameters**: **UTM Campaign**, **UTM Source**, **UTM Medium** 같은 필터를 설정해 페이지 조회 조건을 더 좁힐 수 있어요.
4. 필터를 더 추가하려면 **Add filters**(필터 추가)를 클릭하세요. 특정 페이지, 경로, UTM 캠페인 등을 기준으로 필요한 만큼 추가할 수 있어요.

## 예시

시나리오: 퍼널의 "결제" 페이지에 방문한 사람을 추적하고, 장바구니를 이탈하면 후속 이메일을 보내고 싶어요.

- **Funnel/Website PageView** 트리거
- **Funnel/Website**: 퍼널 이름(예: Bookkeeper Funnel)
- **Page**: **Is** "결제"
- **Action**(액션): 일정 시간이 지나도 구매를 완료하지 않으면 도움을 제안하는 후속 이메일 보내기

이렇게 설정하면 구매 마지막 단계에서 이탈한 고객에게 다시 연락할 수 있어요.
