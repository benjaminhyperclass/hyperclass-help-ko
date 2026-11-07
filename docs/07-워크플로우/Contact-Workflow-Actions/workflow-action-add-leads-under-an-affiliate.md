---
원문: /support/solutions/articles/155000002691-workflow-action-add-leads-under-an-affiliate
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Leads under an Affiliate(제휴 파트너에게 리드 배정)

**Add Leads under an Affiliate**(제휴 파트너 아래에 리드 추가) 액션은 연락처(리드)를 제휴 파트너와 해당 캠페인에 배정해요. 제휴 파트너의 실적이 정확하게 반영되도록 도와줘요. 배정 방법은 세 가지 중에서 골라 쓸 수 있어요.

## 사용 방법

1. 워크플로우에서 `Add Leads under an Affiliate` 액션을 추가하세요.
2. 배정 방법을 선택하세요.
   - **Manual**(수동)
   - **Auto (Attribution)**(자동, 어트리뷰션 기준)
   - **Custom Mapping**(사용자 지정 매핑)
3. 선택한 방법에 맞는 추가 항목을 설정하세요.
4. **Save and publish**(저장 및 게시)를 선택해 워크플로우를 게시하세요.

## 배정 방법

### 1. Manual

이미 알고 있는 제휴 파트너에게, 특정 캠페인 안에서 리드를 직접 배정해요.
폼 제출, 내부 배정, 관리자가 직접 정하는 경우에 알맞아요.

설정 순서:

- **Select campaign**(캠페인 선택)에서 캠페인을 선택하세요.
- **Select affiliate**(제휴 파트너 선택)에서 제휴 파트너를 선택하세요. 선택한 캠페인에 속한 제휴 파트너만 보여요.

![Manual 방법 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051076579/original/zf9NeSIstbZrgaKC3kFkK7sZO1-uHeZmgQ.jpeg?1754542880)

### 2. Auto (Attribution)

URL 파라미터로 전달된 `am_id` 값을 보고 리드를 자동으로 배정해요. 첫 클릭 기준과 마지막 클릭 기준 중에서 고를 수 있어요.

설정 순서:

- **Attribution Method**(어트리뷰션 방식)에서 **First**(첫 클릭)나 **Last**(마지막 클릭)를 선택하세요.
- 퍼널 앞 단계(예: 폼이나 페이지 URL)에서 `am_id`가 전달되도록 해 두세요.

![Auto (Attribution) 방법 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051076580/original/63YI_YvbtgPN_nWrRSsPLBAqqOBx6Bdw4A.jpeg?1754542880)

### 3. Custom Mapping

`am_id`가 커스텀 필드에 저장되어 있거나 워크플로우 값으로 전달될 때 사용해요.
API 푸시, 외부 시스템 연동, 폼의 숨김 필드를 쓰는 경우에 알맞아요.

설정 순서:

- 값을 가져올 곳으로 커스텀 필드나 워크플로우 값 중 하나를 선택하세요.
- 시스템이 그 값을 읽어, 일치하는 제휴 파트너에게 리드를 배정해요.

![Custom Mapping 방법 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051076581/original/dAQymuHR9BhRgNu6cyn3hx96MgmIXtnDXw.jpeg?1754542881)
