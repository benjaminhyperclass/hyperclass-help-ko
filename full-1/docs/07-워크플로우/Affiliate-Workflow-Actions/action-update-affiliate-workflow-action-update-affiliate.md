---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003229-action-update-affiliate-workflow-action-update-affiliate
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Affiliate(제휴 업데이트)

**Update Affiliate**(제휴 업데이트) 액션은 제휴 파트너의 상태를 활성 또는 비활성으로 바꿔요. 워크플로우 안에서 제휴 상태를 자동으로 관리하고 싶을 때 쓰세요.

## 개요

**Update Affiliate** 액션은 제휴의 상태를 활성(active) 또는 비활성(inactive)으로 업데이트해요.

## 액션 이름

**Update Affiliate**

## 액션 설명

**Update Affiliate** 액션은 제휴의 상태를 활성 또는 비활성으로 업데이트해요.

## 액션 상세 정보

**단계별 안내**

1. **액션 유형 선택**: 사용할 수 있는 액션 목록에서 **Update Affiliate**를 선택하세요.
2. **액션 이름 입력**: 설명이 되는 이름을 입력하세요. 예를 들어 "Update Affiliate as Inactive"처럼 쓸 수 있어요.
3. **상태 선택**: 제휴 상태를 활성(active)으로 바꿀지, 비활성(inactive)으로 바꿀지 선택하세요.

![상태 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031801945/original/6z47R4gZoCwDgtVaEtMSVkl4Uzkg4MoyGA.png?1724839036)

## 예시

제휴가 종료 폼을 제출하면 비활성으로 표시하기

시나리오: 한 비즈니스가 활성 제휴 목록을 깔끔하게 관리하려고 해요. 현재 제휴 중인 사람이 제휴 캠페인과 네트워크에서 나가고 싶을 때 작성하는 폼이 있어요.

**액션 설정**

- 액션: **Update Affiliate**
- 이름: Update Affiliate as Inactive

**워크플로우 트리거**

1. **Form Submitted**(폼 제출): 기존 제휴가 선택한 폼을 제출하면 워크플로우가 시작돼요.
2. **Filters**(필터): **Forms**(폼) **is** "제휴 종료 폼"(Affiliate Exit Form)

**워크플로우 액션**

1. **Update Affiliate**
2. **Mark Affiliate as Inactive**(제휴를 비활성으로 표시)를 선택하세요.

## 결과

기존 제휴가 "제휴 종료 폼"을 제출할 때마다 해당 제휴의 프로필이 비활성으로 바뀌어요. 그러면 그 제휴는 더 이상 수수료나 매출을 만들 수 없어요.
