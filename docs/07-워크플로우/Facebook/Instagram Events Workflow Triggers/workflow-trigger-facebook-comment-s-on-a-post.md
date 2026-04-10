---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Facebook/Instagram Events Workflow Triggers
---

# 워크플로우 트리거 - Facebook 게시물 댓글

이 트리거는 Facebook 게시물에 댓글이 달렸을 때 실행됩니다.

---

**목차**

- [Facebook 게시물 댓글 트리거란?](#facebook-게시물-댓글-트리거란)
- [트리거 위치](#트리거-위치)
- [구성 요소](#구성-요소)
- [필터](#필터)
  - [페이지 선택 + 게시물 유형 + 게시물 선택](#페이지-선택--게시물-유형--게시물-선택)
  - [문구 포함 또는 정확히 일치](#문구-포함-또는-정확히-일치)
  - [첫 번째 레벨 댓글만 추적](#첫-번째-레벨-댓글만-추적)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **Facebook 게시물 댓글 트리거란?**

이 트리거는 Facebook 게시물의 댓글이 설정한 필터 조건에 맞을 때 실행됩니다.

---

## **트리거 위치**

`Automations(자동화) → Workflows(워크플로우) → Workflow Builder(워크플로우 빌더) → Triggers(트리거) → Facebook/Instagram Events`로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041668231/original/EGFep0c8ybfPPWMFJ9nneG_dBwkJzT0oyQ.png?1739667596)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041668220/original/KFpwLiyj-FH1QcbnCbVhvE4tzZR6CfwqEA.png?1739667519)

---

## 구성 요소

Facebook 게시물 댓글 워크플로우 트리거의 주요 구성 요소는 4가지입니다:

- **워크플로우 트리거 선택:** 기본적으로 이 트리거로 설정되어 있습니다. 원한다면 다른 트리거로 변경할 수 있습니다.

- **워크플로우 트리거 이름:** 기본적으로는 트리거의 이름입니다. 워크플로우에서 보이는 더 명확한 이름으로 편집할 수 있습니다.

- **필터:** 올바른 상황에서 트리거를 실행하기 위한 조건을 선택하는 곳입니다. 자세한 내용은 다음 섹션에서 확인하세요.

- **첫 번째 레벨 댓글만 추적:** 이 토글을 끄면 모든 중첩된 댓글에 대해 트리거가 실행됩니다. 켜면 최상위(첫 번째) 댓글에 대해서만 트리거가 실행되고, 댓글에 달린 대댓글은 무시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041688828/original/IhmBZnSU94SJED3xa79ed1jOh0INU8YA0g.png?1739765072)

---

## **필터**

필터의 자세한 설명:

| 필터 레벨 1 | 옵션 |
|-------------|------|
| Page Is | 계정의 페이지 목록 |
| Post Type | Published Post (비즈니스 페이지의 모든 게시물)<br>Custom Post (URL 직접 입력) |
| Post Is | Page Is + Post Type 설정과 일치하는 게시물 목록 |
| Contains Phrase | 문구 = "구매했습니다"<br>댓글 = "어제 구매했습니다" → 통과<br>댓글 = "하나 구매했습니다" → 실패<br>댓글 = "얼마인가요" → 실패 |
| Exact Match | 문구 = "구매했습니다"<br>댓글 = "구매했습니다" → 통과<br>댓글 = "어제 구매했습니다" → 실패<br>댓글 = "하나 구매했습니다" → 실패 |

### 페이지 선택 + 게시물 유형 + 게시물 선택

먼저 Page Is에서 페이지를 선택하고, Post Type에서 게시물 유형을 선택한 다음, Post Is에서 게시물 자체를 선택합니다.

**1단계: 페이지 선택.** Standard Fields > Page Is를 선택하고 목록에서 페이지를 선택합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041688928/original/fVGsoa6qB32gLVsMVOQDLvW7L0I28YlTIA.png?1739765463)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755544/original/Rq7D3x-JiGHUxzJPDaKdWuWNM8dXrMaUxw.png?1739820126)

**2단계: 게시물 유형 선택.** 목록에서 선택하려면 Published Post를, URL을 직접 입력하려면 Custom Post를 선택합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755561/original/SLtqhXUr6GBSZLTFkCg6LanQQJEMxcctFA.png?1739820175)

**3단계: 정확한 게시물 지정.** Published Post를 사용했다면 목록에서 선택하고, Custom Post를 사용했다면 직접 URL을 입력합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755719/original/k5AfU-4hul8xJw6cEFROiWghaV3wlW65og.png?1739820561)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755745/original/r1LMLr98lAK6UOQLhFMnkHgXwB3dgldhXg.png?1739820626)

---

### 문구 포함 또는 정확히 일치

정확한 게시물을 지정한 후 Contains Phrase 필터나 Exact Match 필터를 사용할 수 있습니다.

- **Contains Phrase(문구 포함):** 댓글 본문에 제공한 정확한 텍스트 문자열 중 하나가 포함되어 있으면 트리거가 실행됩니다.

- **Exact Match(정확히 일치):** 댓글 본문 전체가 제공한 텍스트 문자열 중 하나와 정확히 일치하면 트리거가 실행됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755798/original/-NndoueovinDRkAX7q4i8UaKA3NOZ7ka1w.png?1739820723)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041756144/original/1bAyDZB0wLCzdtdwva5i555A8VQ_-FTIpg.png?1739821546)

---

### **첫 번째 레벨 댓글만 추적**

토글을 사용하여 1단계 댓글만 추적하는 기능을 켜거나 끌 수 있습니다.

- **토글 켜기:** 댓글 체인의 첫 번째 댓글에 대해서만 트리거가 실행되고, 댓글에 달린 대댓글은 무시됩니다.

- **토글 끄기:** 다른 댓글 아래에 중첩된 댓글이라도 모든 댓글에 대해 트리거가 실행됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755855/original/XzuMdyjfcnCHdxDMlvoFxcoVs963Nt6PhA.png?1739820822)

---

## **자주 묻는 질문**

**Q: Facebook 게시물 댓글 트리거가 Instagram에서도 작동하나요?**

A: 아니요, 이 트리거는 Facebook에서만 작동합니다. Instagram의 경우 동일한 [Instagram 게시물 댓글](https://help.gohlighlevel.com/en/support/solutions/articles/155000004646) 트리거를 사용하세요.

**Q: Facebook 게시물 댓글 트리거와 함께 어떤 액션을 사용해야 하나요?**

A: Facebook Comment Automation 레시피를 사용하여 워크플로우에서 이 트리거를 사용하는 예시를 확인하세요. Facebook & Instagram Comment Automation 문서와 [Reply In Comment](workflow-action-reply-in-comments.md), Facebook Interactive Messenger 액션을 검토해보세요.

**Q: 게시물 댓글 트리거가 무한 루프를 만들 수 있나요?**

A: 아니요, 자동 댓글은 무한 루프를 만들지 않습니다. 워크플로우 트리거는 워크플로우 액션으로 게시된 댓글을 자동으로 무시합니다.

---
*원문 최종 수정: Wed, 19 Feb, 2025 at 12:52 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*