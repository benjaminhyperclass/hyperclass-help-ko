---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003665-automate-lead-assignment-notifications-in-affiliate-manager-workflows
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 제휴 관리자 워크플로우로 리드 배정과 알림 자동화하기

**제휴 관리자**(Affiliate Manager) 워크플로우를 쓰면 제휴 파트너가 리드를 만들었을 때 일어날 일을 자동화할 수 있어요. **Lead Created**(리드 생성됨) 트리거로 제휴 파트너를 통해 생성된 리드의 워크플로우를 시작하고, **Add Leads under an Affiliate**(제휴 파트너 아래에 리드 추가) 액션으로 연락처를 제휴 파트너와 캠페인에 배정해요.

---

## 트리거: Lead Created(리드 생성됨)

### 어떤 기능인가요?

**Lead Created** 트리거는 제휴 파트너에게 귀속된 새 리드가 만들어질 때 워크플로우를 시작해요.

모든 캠페인에 적용할 수도 있고, 특정 캠페인에서만 실행되도록 필터를 걸 수도 있어요.

### 사용 방법

1. 서브 계정 화면에서 **자동화 > 워크플로우**로 이동한 다음 **+ Create Workflow**(워크플로우 만들기)를 클릭해요.
2. 트리거를 **Lead Created**로 설정해요.
3. 특정 캠페인에만 적용하려면 **Add filters**(필터 추가) > **Campaign**(캠페인) > **Is**(다음과 같음)에서 캠페인을 선택하고 **Save Trigger**(트리거 저장)를 클릭해요. 캠페인 필터를 비워 두면 모든 캠페인에 트리거가 적용돼요.
   ![트리거에 캠페인 필터를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081573599/original/XjizIzCTeWk82a2rxw6wRaSLqDO8ygs6fg.png?1790087531)
4. 다음과 같은 액션을 추가해요.
   1. 제휴 파트너에게 이메일 보내기
   2. 내부 팀에 알림 보내기
5. 이메일이나 메시지에는 **Lead Created** 섹션의 커스텀 값을 넣어 쓸 수 있어요.
   ![Lead Created 섹션의 커스텀 값 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919760/original/XaZPVUfJB0b4WuoOJkd_o9uYMyuMWuZ-Fg.png?1747737844)
6. 워크플로우를 저장하고 게시해요.

### 활용 사례

1. 제휴 파트너가 리드를 만들면 "축하합니다!" 이메일을 보내요.
2. 제휴 파트너를 통해 새 리드가 들어오면 영업팀이나 지원팀에 알려요.
3. 제휴 리드를 자동으로 추적하고 태그를 붙여 육성해요.

---

## 액션: Add Leads under an Affiliate(제휴 파트너 아래에 리드 추가)

### 어떤 기능인가요?

**Add Leads under an Affiliate** 액션은 연락처(리드)를 제휴 파트너와 해당 파트너의 캠페인에 배정해요. 그러면 제휴 파트너의 실적이 정확하게 인정돼요.

배정 방식은 세 가지 중에서 골라 상황에 맞게 쓸 수 있어요.

### 사용 방법

1. 워크플로우에 `Add Leads under an Affiliate` 액션을 추가해요.
2. 배정 방식을 선택해요.

   - **Manual**(수동)
   - **Auto (Attribution)**(자동, 어트리뷰션)
   - **Custom Mapping**(사용자 지정 매핑)
3. 선택한 방식에 따라 나오는 추가 필드를 설정해요.
4. 워크플로우를 저장하고 게시해요.

### 배정 방식

1. **Manual**: 이미 알고 있는 제휴 파트너를 특정 캠페인에서 직접 지정해 리드를 배정해요.
   이럴 때 좋아요: 폼 제출, 내부 라우팅, 관리자가 직접 판단할 때

   설정 순서:

   - **Select campaign**(캠페인 선택)에서 캠페인을 골라요.
   - 해당 캠페인에 속한 제휴 파트너 중에서 한 명을 선택해요.
   ![Manual 방식 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514809/original/CcKuxYwq4yOIQ_cx6E4yJDvAb3NnJEwUdA.png?1747119576)

2. **Auto (Attribution)**(URL 기반 어트리뷰션): URL 파라미터로 전달된 `am_id`를 이용해 리드를 자동으로 배정해요.
   첫 번째 클릭(first click)이나 마지막 클릭(last click) 기준을 지원해요.

   설정 순서:

   - 어트리뷰션 방식(**Attribution Method**)을 First 또는 Last 중에서 선택해요.
   - 퍼널 앞 단계(예: 폼이나 페이지 URL)에서 `am_id`가 전달되고 있는지 확인해요.
   ![Auto (Attribution) 방식 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514824/original/COmOzfhsvwzF7jK5RHBib1SjxVAI-szQpA.png?1747119591)

3. **Custom Mapping**: `am_id`가 커스텀 필드에 저장되어 있거나 워크플로우 값으로 전달될 때 사용해요.
   이럴 때 좋아요: API 전송, 외부 시스템 연동, 폼의 숨김 필드

   설정 순서:

   - 매핑 소스를 커스텀 필드 또는 워크플로우 값 중에서 선택해요.
   - 시스템이 그 값을 읽어 일치하는 제휴 파트너에게 리드를 배정해요.
   ![Custom Mapping 방식 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514851/original/cYBBMy6l6rRl8DKAaM8P4WCbLdraHVPOFw.png?1747119602)

### 활용 사례

- 리드 생성에 보상하기
  예: 리드가 폼을 작성하면 시스템이 링크를 공유한 제휴 파트너에게 리드를 배정하고, "축하합니다!" 이메일을 보내요.
- 맞춤형 리드 육성
  예: 퍼널로 들어온 리드를 특정 제휴 파트너에게 배정해 1:1로 후속 관리를 하면 전환율을 높이는 데 도움이 돼요.
- 관리 업무 간소화
  예: 리드를 직접 배정하던 일을 자동화로 바꿔요. 제휴 파트너가 많아 바쁜 팀에 잘 맞아요.
