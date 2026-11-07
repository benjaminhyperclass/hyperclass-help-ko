---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007785-automate-marketing-audit-reports-in-highlevel-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Generate Marketing Audit Report(마케팅 감사 리포트 생성)로 감사 리포트 자동 발송하기

워크플로우에서 예비 고객의 마케팅 감사 리포트를 자동으로 만들고, 그 링크와 사업자 정보를 이메일이나 SMS에 넣어 보내는 방법을 안내해요. 리드를 받자마자 맞춤 메시지를 보내고 싶을 때 쓰세요.

이 기능을 쓰면 리포트 생성부터 메시지 발송까지 수작업 없이 이어져요. 새 리드를 관리할 때도, 아웃바운드 캠페인을 운영할 때도 더 빠르고 개인화된 연락을 보낼 수 있어요.

## 마케팅 감사 리포트 자동화란?

워크플로우 안에서 예비 고객의 마케팅 감사 리포트를 자동으로 만들고, 그 결과를 이후 메시지에 활용하는 기능이에요. 리드 수집, 분석, 연락이 하나의 흐름으로 이어지기 때문에 사람이 직접 손대지 않아도 바로 가치를 전달할 수 있어요.

워크플로우에 **Generate Marketing Audit Report**(마케팅 감사 리포트 생성) 액션을 추가하면, 하이퍼클래스가 예비 고객의 리포트를 만들고 동적 커스텀 값도 함께 만들어 줘요. 감사 리포트 링크나 예비 고객의 사업자명 같은 값은 뒤따르는 이메일·SMS 단계에 넣어 쓸 수 있어요.

## 주요 장점

워크플로우로 감사 리포트를 자동화하면 수작업은 줄이고, 더 빠르고 개인화된 연락을 더 많은 대상에게 보낼 수 있어요.

- 처음부터 끝까지 자동화: 리드 수집, 감사 리포트 생성, 연락까지 수작업 없이 이어져요.
- 개인화된 메시지: 사업자명, 리포트 링크 같은 동적 데이터로 메시지를 맞춤 구성할 수 있어요.
- 빠른 응답: 새 리드에게 바로 가치를 전달해 참여율을 높일 수 있어요.
- 확장 가능한 연락: 추가 작업 없이 많은 예비 고객을 처리할 수 있어요.
- 리드 전환율 개선: 실행 가능한 인사이트를 먼저 보여 주어 신뢰를 쌓을 수 있어요.

## Generate Marketing Audit Report 액션

**Generate Marketing Audit Report** 액션은 이 기능의 핵심이에요. 워크플로우가 예비 고객마다 마케팅 감사 리포트를 자동으로 만들고, 그 데이터를 다음 단계에서 바로 쓸 수 있게 해 줘요.

- 연락처마다 고유한 감사 리포트를 만들어요.
- 폼, 광고, 가져오기 등 여러 트리거로 들어온 리드에 사용할 수 있어요.
- 워크플로우 뒷부분에서 쓸 수 있는 동적 커스텀 값을 내보내요.

## 감사 리포트용 커스텀 값

감사 리포트 액션이 만든 커스텀 값으로 연락 내용을 개인화할 수 있어요. 이 값은 리포트가 만들어지면 자동으로 채워지므로, 메시지에 정확한 정보가 들어가요.

사용할 수 있는 커스텀 값은 다음과 같아요.

- **Prospect Web Report Link**(예비 고객 웹 리포트 링크): 생성된 감사 리포트로 바로 연결되는 링크예요.
- **Prospect Business Name**(예비 고객 사업자명): 개인화에 쓰는 예비 고객의 사업자명이에요.

이 값은 같은 워크플로우 안의 이메일·SMS 단계에 넣을 수 있어요.

## 이메일과 SMS에서 감사 리포트 쓰기

감사 리포트 데이터를 메시지에 넣으면 개인화되고 가치가 분명한 연락을 보낼 수 있어요. 예비 고객은 자기 사업에 대한 실질적인 인사이트를 바로 받아 볼 수 있어서 반응도 좋아져요.

이메일 예시:

> 안녕하세요, {{prospect\_business\_name}} 님.
>
> 회원님의 비즈니스를 위한 무료 마케팅 감사를 준비했어요. 아래 링크에서 확인해 보세요.
>
> {{prospect\_web\_report\_link}}

SMS 예시:

> 안녕하세요, {{prospect\_business\_name}} 님. 무료 감사 리포트를 확인해 보세요: {{prospect\_web\_report\_link}}

## 설정 방법

단계 순서를 맞춰야 감사 리포트가 만들어지고, 개인화에 쓸 커스텀 값도 필요한 시점에 준비돼요.

1. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 > 워크플로우 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070203137/original/x_8uRxbxxTIH40IJkjWhoqVlU2OgXWDDyA.png?1777457489)
2. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.
3. 트리거를 추가하세요. 예를 들어 폼 제출, 새 리드, 가져오기를 쓸 수 있어요.
4. **+ Add Action**(액션 추가)을 클릭하고 **Generate Marketing Audit Report**를 선택하세요.

   ![Generate Marketing Audit Report 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070203303/original/KQZhWjzQuDBqh4gXNLlbksoxBKNrOwUSZw.png?1777457612)
5. 이어서 **Send Email**(이메일 보내기)이나 **Send SMS**(SMS 보내기) 같은 후속 액션을 추가하세요.
6. 메시지 편집기에서 다음 커스텀 값을 넣으세요.

   - **Prospect Web Report Link**
   - **Prospect Business Name**

   ![메시지 편집기에 커스텀 값 삽입](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070203551/original/pwY_Tk3JquB3GJNXv11S66fR7m9VVzEVCg.png?1777457741)
7. 필요에 맞게 메시지 내용을 수정하세요.

   ![메시지 내용 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070203636/original/_FrDhiauZJIi6COETyx3l69JeT9r1Ga40w.png?1777457785)
8. **Save and publish**(저장 및 게시)로 워크플로우를 게시하세요.

## 자주 묻는 질문

### 커스텀 값은 언제 채워지나요?
워크플로우에서 **Generate Marketing Audit Report** 액션이 실행된 직후에 만들어져요.

### 워크플로우 밖에서도 이 커스텀 값을 쓸 수 있나요?
이 값은 워크플로우 안에서 만들어지기 때문에, 주로 워크플로우의 이후 단계에서 쓰도록 만들어졌어요.

### 감사 액션보다 이메일 단계를 먼저 넣으면 어떻게 되나요?
커스텀 값을 쓸 수 없어요. 감사 리포트 액션이 모든 메시지 단계보다 앞에 오도록 순서를 맞춰 주세요.

### 어떤 경로로 들어온 리드든 이 기능을 쓸 수 있나요?
네, 폼, 광고, 가져오기 등 다른 워크플로우 트리거로 들어온 리드에도 쓸 수 있어요.

### 감사 리포트 링크는 예비 고객마다 다른가요?
네, 생성된 리포트 링크는 예비 고객마다 고유해요.

### 감사 리포트 내용을 직접 바꿀 수 있나요?
하이퍼클래스의 감사 리포트 기능 설정에 따라 달라져요.
