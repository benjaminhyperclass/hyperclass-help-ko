---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003263-workflow-trigger-trigger-link-clicked
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Trigger Link Clicked(트리거 링크 클릭)

연락처가 지정한 트리거 링크를 클릭하면 워크플로우를 시작하는 트리거예요. 링크 클릭 여부를 확인하고, 클릭한 연락처에게 이어서 할 작업을 자동으로 실행하고 싶을 때 사용하세요.

## 개요

**Trigger Link Clicked**(트리거 링크 클릭) 트리거는 연락처가 특정 트리거 링크를 클릭할 때마다 워크플로우를 시작해요. 미리 만들어 둔 링크에 연락처가 어떻게 반응하는지 파악하고, 그 반응에 맞춰 다음 작업을 자동화할 때 알맞아요.

## 트리거 이름

**Trigger Link Clicked**

## 트리거 설명

연락처가 지정한 트리거 링크를 클릭하면 워크플로우가 시작돼요. 트리거 링크는 이메일, SMS 같은 여러 소통 채널에서 쓸 수 있어요. 지정한 링크를 클릭한 연락처에게만 워크플로우가 실행되므로, 반응을 보인 연락처에게만 맞춤 안내를 보낼 때 유용해요.

## 설정 방법

1. **Choose a Workflow Trigger**(워크플로우 트리거 선택)에서 사용할 수 있는 트리거 목록 중 **Trigger Link Clicked**를 선택하세요.
2. **Workflow Trigger Name**(워크플로우 트리거 이름)에 트리거를 알아보기 쉬운 이름으로 입력하세요. 예를 들어 "프로모 링크 클릭"이나 "설문 링크 참여"처럼 쓰면 돼요.
3. **Filters**(필터)에서 워크플로우를 시작할 트리거 링크를 지정하세요. 드롭다운 메뉴에서 정확한 트리거 링크를 선택하면 워크플로우가 시작되는 조건을 좁힐 수 있어요.

| 값 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Trigger link** | 연락처가 클릭하면 워크플로우를 시작할 링크를 선택해요. | 예 |

![Trigger Link Clicked 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032022796/original/adyMBJMBawzl9q8hI8Z0yrOjvWQf4tAEQQ.png?1725190224)

## 예시

이메일로 보낸 프로모션 링크를 클릭한 연락처에게 후속 이메일을 보내는 워크플로우를 만들려고 해요.

- **Workflow Trigger Name**: "프로모 링크 후속 안내"
- **Filters**:
  - **Trigger link**: "봄 세일 프로모" (이 링크를 클릭했을 때만 워크플로우가 시작돼요)

**워크플로우 단계**:

1. **Trigger**(트리거): Trigger Link Clicked (위와 같이 설정)
2. **Action**(액션): **Send Email**(이메일 보내기) - 관심을 보여 준 연락처에게 감사 인사와 특별 할인 혜택을 담은 후속 이메일을 보내요.
3. **Action**: **Update Contact**(연락처 업데이트) - 연락처에 "프로모 관심" 태그를 추가해요. 이렇게 하면 앞으로 프로모션 캠페인을 보낼 때 이 연락처들을 따로 구분할 수 있어요.
