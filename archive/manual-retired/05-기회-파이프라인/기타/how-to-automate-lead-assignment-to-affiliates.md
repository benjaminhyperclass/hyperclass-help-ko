---

번역일: 2026-04-09
카테고리: 제휴 관리
---

# 제휴 관리 워크플로우에서 리드 배정 및 알림 자동화하기

더 스마트하게 일하고 제휴 마케터들의 동기를 유지하세요. 워크플로우에서 리드 관련 작업을 자동화할 수 있습니다. 강력한 "Lead Created(리드 생성)" 트리거와 "Add Leads under an Affiliate(제휴 마케터에 리드 추가)" 액션을 조합하면, 제휴 마케터가 생성한 리드를 추적하고 배정하며 대응하는 모든 과정을 손하나 까딱하지 않고 자동화할 수 있습니다.

---

## 트리거: Lead Created(리드 생성)

### 기능

"Lead Created(리드 생성)" 트리거는 제휴 마케터가 새로운 리드를 추천했을 때 워크플로우를 시작해 즉시 자동화 기회를 제공합니다.

모든 캠페인에 적용하거나 특정 캠페인에서만 트리거되도록 필터링할 수 있습니다.

### 사용 방법

- Workflows(워크플로우)로 이동하여 + Create Workflow(워크플로우 만들기) 클릭
- Trigger(트리거)를 Lead Created(리드 생성)으로 설정
- (**선택사항**) Campaign Filter(캠페인 필터)를 사용하여 특정 캠페인으로 제한
![제휴 마케터 리드 생성 트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919716/original/9rsHc5Z5_Sx71eszGZk8KJbQiXGFuci22Q.png?1747737828)

- 다음과 같은 액션 추가:
  - 제휴 마케터에게 이메일 발송
  - 내부 팀에 알림
  - 이메일/메시지에서 Lead Created(리드 생성) 섹션의 커스텀 값 사용
![리드 생성 트리거에서 커스텀 값 활용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919760/original/XaZPVUfJB0b4WuoOJkd_o9uYMyuMWuZ-Fg.png?1747737844)

- 워크플로우 저장 및 발행

### 활용 사례

- 제휴 마케터가 리드를 생성했을 때 "축하합니다!" 이메일 발송
- 새로운 제휴 마케터 리드에 대해 영업팀이나 고객지원팀에 알림
- 제휴 마케터 리드를 자동으로 추적하고 태그를 붙여 관리

---

## 액션: Add Leads under an Affiliate(제휴 마케터에 리드 추가)

### 기능

"Add Leads under an Affiliate(제휴 마케터에 리드 추가)" 액션은 연락처(리드)를 제휴 마케터와 그들의 연관 캠페인에 배정하여 제휴 마케터가 올바르게 크레딧을 받을 수 있도록 합니다.

완전한 유연성을 위해 이제 세 가지 배정 방법 중에서 선택할 수 있습니다.

### 사용 방법

- 워크플로우에서 **Add Leads under an Affiliate(제휴 마케터에 리드 추가)** 액션 추가
- 배정 방법 선택:
  - Manual(수동)
  - Auto (Attribution)(자동 - 어트리뷰션)
  - Custom Mapping(커스텀 매핑)
- 방법에 따라 추가 필드 설정
- 워크플로우 저장 및 발행

### 배정 방법

1. **Manual(수동)** : 특정 캠페인의 알려진 제휴 마케터에게 리드를 수동으로 배정합니다.
   적합한 경우: 폼 제출, 내부 라우팅, 관리자 결정

   단계:
   - 캠페인 선택
   - 제휴 마케터 선택 (해당 캠페인의 제휴 마케터 중)
![수동 리드 배정 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514809/original/CcKuxYwq4yOIQ_cx6E4yJDvAb3NnJEwUdA.png?1747119576)

2. **Auto (Attribution)(자동 - 어트리뷰션)** : URL 매개변수로 전달된 am_id를 사용하여 자동으로 리드를 배정합니다.
   첫 번째 클릭 또는 마지막 클릭 어트리뷰션을 지원합니다.

   단계:
   - Attribution Method(어트리뷰션 방법) 선택: First(첫 번째) / Last(마지막)
   - 퍼널 초기에 am_id가 전달되는지 확인 (예: 폼/페이지 URL)
![자동 어트리뷰션 리드 배정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514824/original/COmOzfhsvwzF7jK5RHBib1SjxVAI-szQpA.png?1747119591)

3. **Custom Mapping(커스텀 매핑)** : am_id가 커스텀 필드에 저장되거나 워크플로우 값으로 전달되는 경우 사용합니다.
   적합한 경우: API 푸시, 서드파티 시스템, 폼의 숨겨진 필드

   단계:
   - 매핑 소스 선택: 커스텀 필드 또는 워크플로우 값
   - 시스템이 값을 읽고 매칭되는 제휴 마케터에게 리드 배정
![커스텀 매핑 리드 배정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514851/original/cYBBMy6l6rRl8DKAaM8P4WCbLdraHVPOFw.png?1747119602)

### 활용 사례

- **리드 생성 보상**
  예시: 리드가 폼을 작성 → 시스템이 링크를 공유한 제휴 마케터에게 배정 → "축하합니다!" 이메일 발송

- **맞춤형 리드 관리**
  예시: 퍼널의 리드를 특정 제휴 마케터에게 배정하여 1:1 후속 관리 진행 → 전환율 향상

- **관리 업무 간소화**
  예시: 수동 리드 배정을 자동화로 대체 → 많은 제휴 마케터를 관리하는 바쁜 팀에게 완벽

---

---
*원문 최종 수정: Tue, 20 May, 2025 at 5:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*