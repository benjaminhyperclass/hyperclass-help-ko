---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Manual Sales For An Affiliate(제휴 회원 수동 매출 추가)

**Add Manual Sales For An Affiliate**(제휴 회원 수동 매출 추가) 액션은 선택한 제휴 캠페인에서 특정 제휴 회원에게 수동으로 매출을 배정합니다. 수수료는 캠페인의 기본 수수료 설정에 따라 계산돼요. 이 문서에서는 액션을 설정하는 방법과 예시를 안내해요.

## 개요

이 액션을 쓰면 워크플로우에서 선택한 캠페인 안의 특정 제휴 회원에게 수동 매출을 배정할 수 있어요. 수수료는 캠페인의 기본 설정에 따라 계산되므로 제휴 회원에게 정확하게 보상을 줄 수 있고, 수수료 추적도 한결 쉬워져요.

## 액션 이름

Add Manual Sales For An Affiliate

## 액션 설명

이 액션은 선택한 제휴 캠페인에서 특정 제휴 회원에게 수동 매출을 배정해요. 액션이 실행되면 캠페인의 기본 수수료 설정에 따라 수수료가 계산되고, 해당 제휴 회원에게 배정돼요.

## 설정 방법

### 어트리뷰션으로 제휴 회원을 자동 추적하는 경우

1. 워크플로우 빌더에서 **Add Manual Sales For An Affiliate** 액션을 선택하세요.
2. **AUTO-TRACK AFFILIATE VIA ATTRIBUTION**(어트리뷰션으로 제휴 회원 자동 추적) 토글을 켜세요.

   이 옵션을 켜면 전달된 URL 안의 제휴 회원 ID를 기준으로 매출이 알맞은 제휴 회원에게 자동 배정돼요. 제휴 회원마다 브랜치를 따로 만들 필요가 없어요.

   ![AUTO-TRACK AFFILIATE VIA ATTRIBUTION 토글 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032745487/original/i_95Hk3VXsfVVYJpIHO8C8GJQPl9XR3hbg.jpeg?1726138633)

3. 어트리뷰션 기준으로 **First**(처음)와 **Latest**(최신) 중 하나를 고르세요.

{% hint style="info" %}
**First 어트리뷰션과 Latest 어트리뷰션이란?**

연락처가 어떤 경로로 들어왔는지 판단할 때는 보통 처음 어트리뷰션과 최근 어트리뷰션을 기준으로 삼아요. 두 값은 모든 연락처에 항상 저장돼요.

- 첫 번째 어트리뷰션: 연락처가 시스템과 처음 상호작용한 시점이에요. 이때 그 세션의 어트리뷰션 데이터를 기록해요. 예를 들어 누군가 폼을 작성한 경우예요.
- 최근 어트리뷰션: 연락처가 시스템과 가장 최근에 상호작용한 시점이에요. 이때도 그 세션의 어트리뷰션 데이터를 기록해요. 예를 들어 폼을 작성한 뒤 2단계 주문 폼으로 상품을 구매하면, 이 구매 시점의 데이터가 최근 어트리뷰션으로 기록돼요.

최근 어트리뷰션은 마지막으로 기록된 상호작용에 따라 계속 바뀌어요. 첫 번째 어트리뷰션은 바뀌지 않아요.
{% endhint %}

4. **Affiliate Campaign**(제휴 캠페인) 드롭다운에서 제휴 캠페인을 선택하세요.
5. **Revenue**(매출)에 해당 거래에서 제휴 회원이 만든 매출 금액을 입력하세요.
6. 필요하면 **Event date**(이벤트 날짜, 매출이 발생한 날짜)와 **Event ID**(참조 ID, 거래 ID)도 입력하세요. 두 항목은 선택 사항이에요.
7. **Save Action**(액션 저장)을 클릭하세요.

### 어트리뷰션 추적 없이 사용하는 경우

1. 워크플로우 빌더에서 **Add Manual Sales For An Affiliate** 액션을 선택하세요.
2. **Affiliate Campaign** 드롭다운에서 제휴 캠페인을 선택하세요.
3. **Affiliate**(제휴 회원) 드롭다운에서 제휴 회원을 선택하세요. 캠페인을 먼저 선택하면 이 드롭다운에는 그 캠페인에 추가된 제휴 회원만 나와요.
4. **Revenue**에 해당 거래에서 제휴 회원이 만든 매출 금액을 입력하세요.
5. 필요하면 **Event date**와 **Event ID**도 입력하세요. 두 항목은 선택 사항이에요.

   ![제휴 캠페인과 제휴 회원을 직접 선택하는 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032745486/original/wBbV2Bxu6KQh0mdbhvaOkvcYkx8tmaPmUw.jpeg?1726138633)

6. **Save Action**을 클릭하세요.

## 예시

폼이 제출되면 제휴 회원에게 수수료를 자동으로 추가하는 워크플로우예요.

**트리거**

- **Form Submitted**(폼 제출): 제휴 회원이 잠재 리드에게 폼 링크를 공유해요. 선택한 폼은 제휴 캠페인에 추가되어 있어야 해요.

**액션**

- **Add Manual Sales For An Affiliate**: 액션을 추가하고 **AUTO-TRACK AFFILIATE VIA ATTRIBUTION** 토글을 켠 뒤, 나머지 필드도 입력하세요.

**결과**

리드가 유효한 링크로 접속해 폼을 작성하면, 액션이 리드를 해당 제휴 회원에게 자동으로 연결하고 수수료도 그 제휴 회원에게 지급돼요. 이 액션을 쓰면 브랜치를 여러 개 만들 필요가 없어요.
