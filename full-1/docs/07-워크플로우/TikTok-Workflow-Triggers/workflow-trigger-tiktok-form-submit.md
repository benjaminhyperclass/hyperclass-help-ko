---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003262-workflow-trigger-tiktok-form-submit
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — TikTok Form Submitted(TikTok 폼 제출)

**TikTok Form Submitted**(TikTok 폼 제출) 트리거는 TikTok에서 폼이 제출될 때 워크플로우를 시작해요. TikTok 사용자에게서 리드를 모으거나 피드백, 정보를 받은 뒤 이어지는 작업을 자동화할 때 쓰면 좋아요.

## 개요

**TikTok Form Submitted** 트리거는 TikTok을 통해 폼이 제출될 때마다 워크플로우를 시작해요. 이 트리거로 리드 수집, 피드백 수집, TikTok 사용자 정보 수집 후 필요한 후속 작업을 자동화할 수 있어요.

## 트리거 이름

**TikTok Form Submit**

<!-- 검토 필요: 원문 내용이 서로 다름 (개요에서는 TikTok Form Submitted, 이 부분에서는 TikTok Form Submit) -->

## 트리거 설명

TikTok에서 특정 폼이 제출되면 워크플로우가 시작돼요. **Filters**(필터)로 어떤 폼 제출에 워크플로우를 시작할지 정할 수 있어요. 필요한 제출만 골라서 워크플로우를 시작할 수 있어요.

## 설정 방법

1. **Choose a Workflow Trigger**(워크플로우 트리거 선택)에서 사용할 수 있는 트리거 목록 중 **TikTok Form Submitted**를 선택해요.
2. **Workflow Trigger Name**(워크플로우 트리거 이름)에 알아보기 쉬운 이름을 입력해요. 예를 들어 "TikTok Lead Capture", "TikTok Feedback Form"처럼 쓸 수 있어요.
3. **Filters**에서 워크플로우를 시작할 폼 제출 조건을 정해요. 폼 이름을 기준으로 필터링하면 특정 폼만 트리거로 쓸 수 있어요.

| 값 | 설명 | 필수 여부 |
| --- | --- | --- |
| **In Form**(폼 선택) | 제출 시 워크플로우를 시작할 TikTok 폼을 선택해요. | 예 |

![TikTok Form Submitted 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032022492/original/A426hQAmcPS1t1wwCkwPOXY0vI_wRDYPqw.png?1725189426)

## 예시

TikTok에서 피드백 폼을 제출한 사용자에게 감사 이메일을 보내는 워크플로우를 만든다고 해 볼게요.

- **Workflow Trigger Name**: "TikTok Feedback Thank You"
- **Filters**:
  - **In Form**: "TikTok Feedback Form" (이 폼에서 제출된 건만 워크플로우를 시작해요)

**워크플로우 단계**

1. **Trigger**(트리거): TikTok Form Submitted (위와 같이 설정)
2. **Action**(액션): **Send Email**(이메일 보내기) - 피드백을 남긴 사용자에게 감사 인사를 전해요.
3. **Action**: **Update Contact**(연락처 업데이트) - 연락처에 "Feedback Provided" 태그를 추가해서 피드백을 제출한 사용자를 구분해요.
