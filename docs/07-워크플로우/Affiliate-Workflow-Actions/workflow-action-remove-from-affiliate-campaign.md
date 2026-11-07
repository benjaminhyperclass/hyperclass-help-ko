---
원문: /support/solutions/articles/155000003230-workflow-action-remove-from-affiliate-campaign
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Remove From Affiliate Campaign(제휴 캠페인에서 제거)

**Remove From Affiliate Campaign**(제휴 캠페인에서 제거) 액션은 제휴 회원을 제휴 캠페인에서 빼는 액션이에요. 드롭다운에서 제거할 캠페인을 고를 수 있어요.

## 액션 이름

**Remove From Affiliate Campaign**

## 액션 설명

**Remove From Affiliate Campaign** 액션은 이미 등록된 제휴 회원을 선택한 제휴 캠페인에서 제거해요.

## 액션 상세 정보

1. **액션 유형 선택:** 사용할 수 있는 액션 목록에서 **Remove From Affiliate Campaign**을 선택하세요.
2. **액션 이름 입력:** 설명이 되는 이름을 입력하세요. 예를 들면 "블랙프라이데이 캠페인에서 제거"처럼 쓸 수 있어요.
3. **캠페인 선택:** 상태를 활성 또는 비활성 중 무엇으로 바꿀지 선택하세요.
![액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031803920/original/e3yW-8xW5U04OAqqRLcPaMXpnEkHEuZyDg.png?1724840106)

## 예시

제휴 회원이 수신을 거부하거나 탈퇴 폼을 제출하면 블랙프라이데이 캠페인에서 제거하기

**상황:** 한 회사가 활성 제휴 회원 목록을 깔끔하게 관리하려고 해요. 블랙프라이데이 제휴 캠페인에서 나가려는 기존 제휴 회원이 제출하는 폼이 따로 있어요.

**액션 설정**

- 액션: **Remove From Affiliate Campaign**
- 이름: 블랙프라이데이 캠페인에서 제거

**워크플로우 트리거**

1. **Form Submitted**(폼 제출): 기존 제휴 회원이 선택한 폼을 제출하면 워크플로우가 시작돼요.
2. **Filters**(필터): **Forms**가 "제휴 탈퇴 폼"인 경우

**워크플로우 액션**

1. **Remove From Affiliate Campaign**
2. **Affiliate Campaign**(제휴 캠페인) 필터에서 "블랙프라이데이 캠페인"을 선택해요.

**결과**

기존 제휴 회원이 "제휴 탈퇴 폼"을 제출할 때마다 해당 회원의 프로필이 블랙프라이데이 제휴 캠페인에서 제거돼요. 그러면 그 회원은 더 이상 추천 링크로 판매를 유도하거나 수수료를 받을 수 없어요.
