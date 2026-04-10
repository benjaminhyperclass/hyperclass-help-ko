---

번역일: 2026-04-07
카테고리: 10-마케팅 > Affiliate Manager Automation
---

# 제휴 관리 워크플로우에서 리드 배정 및 알림 자동화하기

제휴 관련 액션을 워크플로우로 자동화해서 더 스마트하게 일하고 제휴 마케터의 동기를 유지하세요. "Lead Created(리드 생성)" 트리거와 "Add Leads under an Affiliate(제휴사에 리드 추가)" 액션을 함께 사용하면 제휴 마케터가 생성한 리드를 추적하고, 배정하고, 대응하는 모든 과정을 손 하나 까딱하지 않고 자동화할 수 있습니다.

---

## 트리거: Lead Created(리드 생성)

### 기능 설명

"Lead Created(리드 생성)" 트리거는 제휴 마케터를 통해 새 리드가 추천됐을 때 워크플로우를 시작합니다. 즉시 자동화할 수 있는 기회를 제공하죠.

모든 캠페인에 적용하거나 특정 캠페인에만 트리거되도록 필터링할 수 있습니다.

### 사용 방법

- Workflows(워크플로우)로 가서 + Create Workflow(워크플로우 생성)를 클릭하세요
- 트리거를 Lead Created(리드 생성)으로 설정하세요
- (**선택사항**) Campaign Filter(캠페인 필터)를 사용해서 특정 캠페인으로만 범위를 제한하세요
![리드 생성 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919716/original/9rsHc5Z5_Sx71eszGZk8KJbQiXGFuci22Q.png?1747737828)

- 다음과 같은 액션을 추가하세요:
  - 제휴 마케터에게 이메일 발송
  - 내부 팀에 알림
  - 이메일/메시지에서 Lead Created(리드 생성) 섹션의 커스텀 값 활용
![커스텀 값 활용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919760/original/XaZPVUfJB0b4WuoOJkd_o9uYMyuMWuZ-Fg.png?1747737844)

- 워크플로우를 저장하고 발행하세요

### 사용 사례

- 제휴 마케터가 리드를 생성했을 때 "축하합니다!" 이메일 발송
- 새로운 제휴 리드에 대해 영업팀이나 지원팀에 알림
- 제휴 리드를 자동으로 추적하고 육성을 위한 태그 부여

---

## 액션: Add Leads under an Affiliate(제휴사에 리드 추가)

### 기능 설명

"Add Leads under an Affiliate(제휴사에 리드 추가)" 액션은 연락처(리드)를 제휴 마케터와 해당 캠페인에 배정해서 제휴 마케터가 올바르게 크레딧을 받을 수 있도록 합니다.

이제 완전한 유연성을 위해 세 가지 배정 방법 중에서 선택할 수 있습니다.

### 사용 방법

- 워크플로우에서 **Add Leads under an Affiliate(제휴사에 리드 추가)** 액션을 추가하세요
- 배정 방법을 선택하세요:
  - Manual(수동)
  - Auto (Attribution)(자동 어트리뷰션)
  - Custom Mapping(커스텀 매핑)
- 선택한 방법에 따라 추가 필드를 구성하세요
- 워크플로우를 저장하고 발행하세요

### 배정 방법

1. **Manual(수동)**: 특정 캠페인에서 알려진 제휴 마케터에게 리드를 수동으로 배정합니다.  
   **적합한 경우**: 폼 제출, 내부 라우팅, 관리자 결정

   단계:
   - 캠페인 선택
   - 제휴 마케터 선택 (해당 캠페인의 제휴 마케터 중에서)
![수동 배정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514809/original/CcKuxYwq4yOIQ_cx6E4yJDvAb3NnJEwUdA.png?1747119576)

2. **Auto (Attribution via URL)(URL을 통한 자동 어트리뷰션)**: URL 파라미터로 전달된 am_id를 사용해서 리드를 자동 배정합니다. 첫 클릭 또는 마지막 클릭 어트리뷰션을 지원합니다.

   단계:
   - Attribution Method(어트리뷰션 방법) 선택: First(첫 클릭) / Last(마지막 클릭)
   - 퍼널 초기에 am_id가 전달되도록 확인 (예: 폼/페이지 URL)
![자동 어트리뷰션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514824/original/COmOzfhsvwzF7jK5RHBib1SjxVAI-szQpA.png?1747119591)

3. **Custom Mapping(커스텀 매핑)**: am_id가 커스텀 필드에 저장되거나 워크플로우 값으로 전달되는 경우에 사용합니다.  
   **적합한 경우**: API 푸시, 서드파티 시스템, 폼의 숨겨진 필드

   단계:
   - 매핑 소스 선택: 커스텀 필드 또는 워크플로우 값
   - 시스템이 값을 읽어서 매칭되는 제휴 마케터에게 리드를 배정
![커스텀 매핑 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514851/original/cYBBMy6l6rRl8DKAaM8P4WCbLdraHVPOFw.png?1747119602)

### 사용 사례

- **리드 생성 보상**  
  예시: 리드가 폼을 작성 → 시스템이 링크를 공유한 제휴 마케터에게 배정 → "축하합니다!" 이메일 발송

- **커스텀 리드 육성**  
  예시: 퍼널에서 온 리드를 특정 제휴 마케터에게 배정해서 1:1 후속 관리 — 전환율 향상

- **관리 업무 간소화**  
  예시: 수동 리드 배정을 자동화로 대체 — 많은 제휴 마케터를 관리하는 바쁜 팀에게 완벽

---

*원문 최종 수정: Tue, 20 May, 2025 at 5:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*