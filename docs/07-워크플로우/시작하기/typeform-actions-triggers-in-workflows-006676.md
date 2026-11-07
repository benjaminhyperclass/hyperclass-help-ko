---
원문: /support/solutions/articles/155000006676-typeform-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Typeform 연동 — 워크플로우 트리거 New Entry (Instant)와 액션

Typeform을 하이퍼클래스에 연결하면 리드 수집, 설문, 피드백 접수를 실시간으로 자동화할 수 있어요. 이 문서에서는 Typeform 응답이 들어오는 즉시 실행되는 트리거, 워크플로우에서 쓸 수 있는 Typeform 액션, 설정 순서를 안내해요. 필드 매핑 팁과 과금 안내도 함께 담았어요.

---

## Typeform 연동이란?

하이퍼클래스에 내장된 Typeform 연동을 쓰면 Typeform 응답에 바로 반응하고, 워크플로우 안에서 Typeform 작업을 처리할 수 있어요. **New Entry (Instant)**(새 응답 즉시 접수) 트리거를 쓰면 폼이 제출되는 순간 자동화가 시작돼요. 폼 만들기, 폼 복제, 응답 검색 같은 Typeform 액션을 더하면 온보딩, 피드백 수집, CRM 정보 보강도 간편해져요.

---

## Typeform 연동의 장점

하이퍼클래스와 Typeform을 함께 쓰면 리드를 더 빨리 분류하고, 수작업을 줄이고, 운영을 한곳에서 관리할 수 있어요.

- 즉시 분류: Typeform이 제출되는 순간 워크플로우가 시작돼요. 폴링 지연이 없어요.
- 대량 폼 관리: 자동화 중에 폼을 만들거나 복제해서 고객·프로젝트마다 별도 사본을 줄 수 있어요.
- 응답 활용: 지난 응답을 검색해 후속 연락을 개인화하고 CRM 데이터를 보강할 수 있어요.
- 화면 전환 감소: 폼 관련 기본 작업을 다른 도구로 옮겨 가지 않고 하이퍼클래스 안에서 처리해요.
- 예측 가능한 과금: 프리미엄 실행은 실행 1회마다 과금되고, 서브 계정에 재청구할 수 있어요. 자세한 내용은 [워크플로우 프로 플랜 – 새 요금제](../workflows-pro-plan-new-pricing-tiers.md)와 [워크플로우 프리미엄 기능 활성화 및 재청구 방법](how-to-enable-and-rebill-workflow-premium-features.md)을 참고하세요.

---

## 트리거와 액션

Typeform 트리거와 액션을 한눈에 비교할 수 있도록 표로 정리했어요.

| 구분 | 이름 | 설명 |
| --- | --- | --- |
| 트리거 | **New Entry (Instant)** | Typeform 응답이 들어오는 즉시 실행되고, 해당 레코드를 워크플로우에 등록해요. |
| 액션 | **Create Empty Form**(빈 폼 만들기) | 연결된 워크스페이스에 빈 Typeform을 새로 만들고, 새 폼의 Form ID/URL을 돌려줘요. |
| 액션 | **Duplicate Existing Form**(기존 폼 복제) | 기존 Typeform의 구조·로직·디자인을 그대로 복제하고, 새 폼의 Form ID/URL을 돌려줘요. |
| 액션 | **Search Responses in a Form**(폼 응답 검색) | 선택한 Typeform의 기존 응답을 가져와서 분기 로직을 만들고 필드를 매핑할 수 있어요. |

---

## Typeform 연동 설정하기

연결과 매핑을 제대로 해 두면 응답이 즉시 등록되고 이후 액션도 안정적으로 실행돼요. 아래 두 방법 중 하나로 연결한 뒤, 실제 제출로 테스트해 보세요.

### Typeform 연결하기 (두 가지 방법)

#### 트리거/액션 단계에서 연결하기

- **자동화 > 워크플로우**로 이동해서 워크플로우를 열거나 새로 만드세요.
- Typeform 트리거 또는 액션을 추가하세요.
- 단계에 표시된 Typeform 필드를 확인하세요.
- **Connect your account**(계정 연결)를 클릭하세요.
- 팝업 창에서 Typeform 인증을 완료하세요.
- 안내가 나오면 연결된 Typeform 계정을 선택하세요.
- 활성화된 필드를 설정하세요.

연결한 계정을 바꾸면 Typeform에 의존하는 필드가 다시 불러와지거나 초기화될 수 있어요. 저장하기 전에 단계 설정을 확인하세요.

#### 트리거 설정 방법

1. `Test Your Trigger > Fetch Trigger Data`(트리거 테스트 > 트리거 데이터 가져오기)를 클릭하세요.
2. 웹훅이 새 샘플 페이로드를 기다리기 시작해요.
3. 테스트용으로 폼을 한 번 제출하세요.
4. **Test Trigger**(트리거 테스트)가 새 샘플 페이로드를 감지해요.

페이로드를 선택하고 트리거를 저장하면, 출력에서 질문을 제목으로 골라 답변을 바로 매핑할 수 있어요.

![트리거 테스트 후 질문 제목으로 답변을 매핑하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057111603/original/HikZ1CeoU7HLqS9KAVxED07VYEYFZP7pLA.png?1761743828)

#### 설정 > 연동에서 연결하기

- **설정 > 연동**으로 이동해서 **Typeform**을 찾고 OAuth 연결을 완료하세요. 연결은 서브 계정별로 이뤄져요. 자세한 내용은 [마켓플레이스 앱 – 외부 연결 관리](../../27-앱-마켓/Workflow-Triggers-and-Actions/marketplace-apps-managing-external-connections.md)를 참고하세요.

  ![설정 > 연동에서 Typeform을 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057111647/original/ELK9XGF2B_8eh0NXXbgsoxzTnF4VN9ZvfA.png?1761743838)

### 첫 번째 워크플로우 만들기

1. 원하는 서브 계정에서 **자동화 > 워크플로우**로 이동한 뒤 **Create Workflow**(워크플로우 만들기)를 클릭하세요. 기존 워크플로우를 열어도 돼요.

   ![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057111428/original/y7kNInyhPqauQZaGAxdAwmcWvso3bhbG9g.png?1761743775)
2. **New Entry (Instant)** 트리거를 추가하고 폼을 선택하세요.

   ![New Entry (Instant) 트리거 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057112946/original/8O4wVYYGNrfWpprxdwhZKtqZZ-C1yQLQqw.png?1761744471)

   ![트리거에서 폼을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057113115/original/Br4R3Vi4OSAcC8bgvBVTIKDXn5RL0eSDUg.png?1761744535)
3. Typeform 액션인 **Create/Update Contact**(연락처 만들기/업데이트)를 추가하고, 제출 내용에서 이메일과 전화번호를 매핑하세요.
   ![Create/Update Contact 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057112971/original/6pOHjEM-d41kcmWdophCFkF1GHKgOd1EOg.png?1761744486)

   ![이메일과 전화번호를 매핑하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057113194/original/Yd8Az8xImDRr_EEAdlEx5RHWYX4POqLBeQ.png?1761744581)
4. 후속 액션을 추가하세요. 예를 들면 **Send Email**(이메일 보내기), **Notify User**(사용자 알림), **Create Opportunity**(기회 만들기)가 있어요.
5. **Publish**(게시)를 클릭한 뒤 Typeform을 한 번 제출해서 **Execution Logs**(실행 로그)에 항목이 나타나는지 확인하세요.

---

## 사용 사례

### 사용 사례 1: Typeform 제출로 작업 만들고 팀에 알리기

목표: 누군가 Typeform을 제출하면 ClickUp 작업을 만들고, 연락처 필드를 업데이트하고, 내부 알림을 보내요.

워크플로우 구성:

- 트리거: Typeform → **New Entry (Instant)**
- 필터: **Form Name** = “고객 온보딩 폼”
- 액션:
  - **Create Task**(작업 만들기, ClickUp)
  - **Update Contact Field**(연락처 필드 업데이트, Workflows)
  - **Send Internal Notification**(내부 알림 보내기, Workflows)

예시: 새 고객이 Typeform의 “고객 온보딩 폼”을 작성해요. 곧바로 고객 정보가 담긴 ClickUp 작업이 만들어지고, 워크플로우의 연락처 필드가 최신 정보로 업데이트돼요. 내부 팀에는 온보딩을 시작하라는 알림이 가요.

![사용 사례 1 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057111847/original/7sDu8L7Z7q4WhIdugpL5vTqZSdMrv9beMg.png?1761743990)

### 사용 사례 2: Typeform 제출 내용에 따라 조건부 작업 만들고 알림 보내기

목표: 새 문서를 자동으로 만들고, 응답 값을 확인한 뒤, Typeform에 제출된 항목 수에 따라 다른 후속 액션을 실행해요.

워크플로우 구성:

- 트리거: Typeform → **New Entry (Instant)**
- 필터: **Form Name** = “주문 접수 폼”
- 액션:
  - **Create New Document**(새 문서 만들기, ClickUp)
  - **Condition**(조건): `total_items`가 “3”과 같은지 확인
  - **Branch**(분기) — 참일 때:
    - **Update Contact Field**(Workflows)
    - **Send Internal Notification**(Workflows)
    - **Send Email**(Workflows)
  - **Branch** — 거짓일 때:
    - **End Workflow**(워크플로우 종료)

예시:
고객이 Typeform의 “주문 접수 폼”으로 주문을 제출해요. 워크플로우는 주문 내용을 담은 새 문서를 ClickUp에 만들어요. 고객이 정확히 3개를 주문했다면 연락처 레코드를 업데이트하고, 운영팀에 내부 알림을 보내고, 고객에게 확인 이메일을 보내요. 주문 수량이 3개가 아니면 추가 액션 없이 워크플로우가 끝나요.

![사용 사례 2 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057111954/original/9ZBEUuEnYxDadIjJM0UYWq-ZaNwjhnyqmw.png?1761744016)

### 사용 사례 3: 파이프라인 단계가 바뀔 때 문서 생성과 알림 자동화

목표: 딜의 파이프라인 단계가 바뀌면 기존 폼 응답이 있는지 확인하고, 결과에 따라 문서를 만들거나 폼을 복제한 뒤 팀이나 연락처에 알려요.

워크플로우 구성:

- 트리거: **Pipeline Stage Changed**(파이프라인 단계 변경, CRM)
- 필터: **Pipeline** = “고객 온보딩 파이프라인”
- 액션:
  - **Search Responses in a Form**(Typeform)
  - **Branch**(분기) — 응답을 찾았을 때:
    - **Create New Document**(ClickUp)
    - **Update Contact Field**(Workflows)
    - **Send Internal Notification**(Workflows)
    - **Send Email**(Workflows)
  - **Branch** — 응답을 찾지 못했을 때:
    - **Duplicate Existing Form**(Typeform)
    - **Send Internal Notification**(Workflows)
    - **Send Email**(Workflows)

예시:
CRM 파이프라인에서 딜이 “온보딩” 단계로 옮겨 가면, 워크플로우가 해당 고객과 연결된 Typeform 응답이 있는지 검색해요.

- 응답이 있으면 고객 데이터가 담긴 새 문서를 ClickUp에 만들고, 연락처 레코드를 업데이트해요. 팀과 고객 모두에게 알림이 가요.
- 응답이 없으면 고객이 작성할 온보딩 폼 사본을 새로 만들어요. 이어서 팀에 내부 알림을 보내고, 고객에게는 작성을 요청하는 이메일을 보내요.

![사용 사례 3 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057112029/original/057TFJUCA2cfcQtdhEkJgsKnG8MQ14IXPA.png?1761744041)

---

## 자주 묻는 질문

### 유료 Typeform 요금제가 필요한가요?
무료 계정과 유료 계정 모두 쓸 수 있어요. 응답 수 한도나 브랜딩 같은 Typeform 자체 요금제 제한은 그대로 적용돼요.

### 이 연동을 모든 사용자가 쓸 수 있나요?
네. 워크플로우와 연동 기능을 쓸 수 있는 모든 계정에서 쓸 수 있어요.

### 하이퍼클래스에서 Typeform 단계는 프리미엄 요금이 부과되나요?
네. Typeform 트리거와 액션은 프리미엄 기능이라서, 실행할 때마다 계정의 기본 요율로 과금돼요. 에이전시는 서브 계정에 선택적으로 재청구할 수 있어요.

### 새로 만들거나 복제한 폼은 어디에 저장되나요?
해당 단계에서 선택한 OAuth 계정에 연결된 Typeform 워크스페이스에 만들어져요.

### 워크플로우에서 기존 Typeform의 질문을 편집할 수 있나요?
지금은 할 수 없어요. 현재 쓸 수 있는 액션은 **Create Empty Form**, **Duplicate Existing Form**, **Search Responses in a Form**이에요.

### 실행이 실패하면 어떻게 원인을 확인하나요?
**Execution Logs**에서 해당 단계의 오류를 확인하세요. 예를 들어 잘못된 폼 ID나 권한 없음 같은 오류가 표시돼요. 인증이 만료됐다면 Typeform 앱을 다시 연결하고 테스트를 다시 실행하세요.
