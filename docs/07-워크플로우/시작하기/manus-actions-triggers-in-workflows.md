---
원문: /support/solutions/articles/155000007351-manus-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우에서 Manus 트리거·액션(Triggers & Actions) 사용하기

하이퍼클래스 워크플로우에 Manus를 직접 연결해서 AI 작업을 자동화하는 방법을 안내해요. Manus 트리거와 액션으로 AI 작업을 만들고, 관리하고, 이어서 진행할 수 있어요. 별도의 외부 자동화 도구는 필요 없어요. 하이퍼클래스 안에서 실시간 AI 실행, 작업 생애주기 기반 자동화, 대규모 작업 운영을 처리할 수 있어요.

---

## Manus 트리거·액션이란?

Manus는 작업(Task) 단위로 움직이는 AI 시스템이에요. 각 작업은 프롬프트로 시작해서 AI가 처리하고 결과를 돌려줘요. 같은 작업에 프롬프트를 더 보내 이어갈 수도 있어서, 하나의 작업 안에서 여러 단계의 AI 처리를 할 수 있어요.

하이퍼클래스의 Manus 연동은 양방향 자동화를 지원해요.

- **하이퍼클래스 → Manus:** 워크플로우 액션으로 AI 작업을 만들고, 업데이트하고, 이어가고, 조회하고, 삭제해요.
- **Manus → 하이퍼클래스:** 작업 생성이나 완료 같은 이벤트가 생기면 워크플로우가 자동으로 시작돼요.

외부 중계 도구 없이 하이퍼클래스 안에서 AI 기반 워크플로우를 완전 자동으로 만들 수 있어요.

---

## Manus 트리거·액션의 주요 장점

Manus를 하이퍼클래스 워크플로우에 연동하면 에이전시와 비즈니스가 AI를 체계적이고 확장 가능한 방식으로 운영할 수 있어요.

- **기본 제공 AI 자동화:** 서드파티 도구 없이 하이퍼클래스 안에서 Manus 작업을 만들고 관리해요.
- **즉시 반응하는 작업 기반 트리거:** Manus 작업이 생성되거나 중지되면 워크플로우가 자동으로 시작돼요.
- **다단계 AI 로직:** 기존 작업에 후속 프롬프트를 보내 체계적인 AI 워크플로우를 만들어요.
- **처음부터 끝까지 확인:** 하이퍼클래스에서 작업 ID와 실행 로그를 추적해요.
- **프리미엄 워크플로우 연동:** Manus 단계는 프리미엄 워크플로우 액션으로 동작하고, 에이전시 재청구를 지원해요.
- **확장 가능한 AI 운영:** 잠재고객 발굴, 리서치, 콘텐츠 제작 등 반복 가능한 자동화를 만들어요.

---

## 사전 준비 및 권한

Manus 트리거와 액션을 쓰기 전에 아래 조건을 확인하세요.

- **워크플로우 접근 권한:** 서브 계정에서 **자동화 > 워크플로우**를 사용할 수 있어야 해요.
- **프리미엄 기능 활성화:** Manus 트리거와 액션은 프리미엄 워크플로우 단계예요. 필요한 경우 에이전시 차원에서 활성화해야 해요. 자세한 방법은 [워크플로우 프리미엄 기능 활성화 및 재청구](how-to-enable-and-rebill-workflow-premium-features.md)를 참고하세요.
- **유효한 Manus 구독:** AI 작업 처리와 사용량 한도는 Manus 구독 요금제에 따라 달라요.
- **API 키 발급:** Manus 대시보드에서 유효한 API 키를 발급받아야 해요.

---

## Manus 계정 연결하기

한 번만 연결하면 하이퍼클래스가 API 인증으로 Manus와 안전하게 통신해요.

### 워크플로우 빌더에서 연결하기

1. 하이퍼클래스에서 **자동화 > 워크플로우**를 열고 Manus 액션이나 트리거를 추가해요.
   - 아직 연결하지 않았다면 **Connect Now**(지금 연결)를 클릭하고 Manus에 로그인해서 접근을 승인하세요.
   - 이미 연결했다면 해당 단계의 필드가 바로 불러와져요.

![워크플로우 빌더에서 Manus 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065869136/original/5IS5yKSPQGclpu3UAQLhWp5X_DMsytOMIA.png?1772196133)

### 연동 페이지에서 연결하기

1. 서브 계정에서 **설정 > 연동 > Manus > 연결**을 클릭하세요.

![연동 페이지에서 Manus 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065870136/original/YRzYBwmI29tYHCDxf9PoHnJRhu-4--vOrw.png?1772196728)

### Manus API 키 받기

1. **Manus API Settings**로 이동하세요.
2. **Create New**(새로 만들기)를 클릭하세요.
3. 생성된 API 키를 복사하세요.
4. 연결 중에 API 키 입력란이 나오면 복사한 키를 붙여 넣으세요.

---

## 사용할 수 있는 트리거 (Manus → 하이퍼클래스)

Manus 트리거를 쓰면 AI 작업의 진행 상황에 따라 워크플로우가 자동으로 시작돼요. 조건이 충족되면 즉시 실행돼요.

| 트리거 | 설명 |
| --- | --- |
| **New Task Created**(새 작업 생성됨) | Manus에서 새 작업이 만들어지면 실행돼요 |
| **Task Stopped**(작업 중지됨) | Manus 작업이 중지되거나 완료되면 실행돼요 |

- 트리거는 즉시 실행돼요.
- 트리거는 하이퍼클래스 워크플로우로 만든 작업에서만 작동해요.
- Manus 앱에서 직접 만든 작업으로는 워크플로우가 시작되지 않아요.

---

## 사용할 수 있는 액션 (하이퍼클래스 → Manus)

Manus 액션으로 워크플로우 안에서 AI 작업 실행을 직접 제어할 수 있어요.

| 액션 | 설명 |
| --- | --- |
| **Create Task**(작업 만들기) | Manus에서 새 작업을 만들어요 |
| **Get Task**(작업 조회) | 특정 작업의 상세 정보를 가져와요 |
| **Update Task**(작업 업데이트) | 작업의 메타데이터나 파라미터를 수정해요 |
| **Fetch Tasks**(작업 목록 가져오기) | 작업 목록을 가져와요 |
| **Delete Task**(작업 삭제) | 작업을 삭제해요 |
| **Continue a Task with a Prompt**(프롬프트로 작업 이어가기) | 기존 작업에 후속 프롬프트를 추가해요 |

기존 작업을 지정하는 액션은 저장해 둔 작업 ID(Task ID)가 필요해요.

---

## 권장 방법: 작업 ID 저장하기

**Create Task** 액션을 쓸 때마다 Manus가 고유한 작업 ID를 돌려줘요. 이 작업 ID를 연락처나 기회의 커스텀 필드에 저장해 두면 자동화가 안정적으로 동작해요.

아래 액션을 쓸 때는 작업 ID 저장이 필수예요.

- **Get Task**
- **Continue a Task with a Prompt**
- **Update Task**
- **Delete Task**

작업 ID를 저장하지 않으면 이후 워크플로우 단계가 실패하거나 엉뚱한 작업을 가리킬 수 있어요.

---

## 워크플로우에서 Manus 사용하기

워크플로우 기본 사용법은 [워크플로우 시작하기](../기타/getting-started-with-workflows.md)를, 빌더 화면 구성은 [워크플로우 빌더 둘러보기](../기타/workflow-builder-walkthrough.md)를 참고하세요.

1. **자동화 > 워크플로우**로 이동해서 **+ Create Workflow**(워크플로우 만들기)를 클릭하세요. 기존 워크플로우를 열어도 돼요.
2. 트리거를 선택하세요. Manus 트리거를 써도 되고 다른 워크플로우 트리거를 써도 돼요.

   ![트리거 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065870785/original/xyMfyy2dfQbkbD3IWJ9uJV7XKBhboiFXdg.png?1772197055)
3. Manus 액션을 추가하세요. 예를 들어 **Create Task**를 추가해요.

   ![Manus 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065871631/original/iIcMRKVzx_iYrbGZJ-5viW_UyYEji5hOKw.png?1772197505)
4. 머지 필드를 연결하세요. 예를 들면 아래와 같아요.
`{{contact.first_name}}``{{contact.email}}``{{opportunity.name}}``{{custom_values}}`
5. 필요하면 반환된 작업 ID를 커스텀 필드에 저장하세요.
6. 조건이나 **Wait**(대기) 단계를 추가하세요.
7. 테스트한 뒤 **Publish**(게시)하세요.

---

## 활용 예시

에이전시와 비즈니스에서 바로 써 볼 수 있는 예시예요.

### 1. 제안서 자동 작성 + ClickUp 검토 작업 만들기

목표: 딜이 “제안 요청” 단계가 되면 제안서를 자동으로 작성하고, ClickUp에 검토 작업을 만들어요.

#### 트리거

**Pipeline Stage Changed**(파이프라인 단계 변경됨) → Stage = “제안 요청”

#### 워크플로우 단계

1. **Create Task**(작업 만들기) (Manus)
   프롬프트: {{contact.first_name}}님을 위한 {{opportunity.name}} 제안서를 작성해 주세요. 범위, 산출물, 가격, 일정을 포함해 주세요.
2. 작업 ID 저장 → `manus_proposal_task_id`
3. **Wait**(대기) (1~2분)
4. **Get Task**(작업 조회) (Manus)
5. **Create Internal Note**(내부 메모 만들기) (하이퍼클래스) → 초안 첨부
6. **Create Task** (ClickUp) → “제안서 검토 – {{opportunity.name}}”
7. **Internal Notification**(내부 알림) → 담당 영업 담당자

결과: 영업팀은 바로 쓸 수 있는 초안을 받고, 수행팀은 ClickUp에서 작업을 즉시 확인해요.

---

### 2. 리드 리서치 + Google Contacts 정보 보강

목표: 영업 연락 전에 유입된 리드를 자동으로 조사해요.

#### 트리거

**Form Submitted**(폼 제출) → 유입 리드 폼

#### 워크플로우 단계

1. **Create Task** (Manus)
   프롬프트: {{custom.company_name}}을(를) 조사해 주세요. 업종, 규모, 경쟁사, 예상되는 고민을 요약해 주세요.
2. 작업 ID 저장
3. **Wait**
4. **Get Task** (Manus)
5. **Create Internal Note** (하이퍼클래스)
6. **Update Contact**(연락처 업데이트) (Google Contacts) → 리서치 요약 추가
7. **Internal Notification** → 영업 담당자

결과: 영업 담당자는 AI가 정리한 인사이트로 통화를 시작하고, CRM과 Google Contacts에 정보가 모두 채워져요.

---

### 3. 웹사이트 분석 + 맞춤 잠재고객 발굴 (기회 기준)

목표: 기회에 등록된 잠재고객 회사의 웹사이트를 자동으로 조사하고, 맞춤형 아웃바운드 메시지를 만들어요.

#### 트리거

- **Pipeline Stage Changed** → “잠재고객 발굴”
- 또는 **Opportunity Created**(기회 생성됨)

웹사이트 주소는 기회 커스텀 필드에 저장해 두세요.
`{{opportunity.website}}`

#### 1단계: Manus로 웹사이트 분석하기

**Create Task** (Manus)를 추가하세요.

프롬프트 예시:

```
이 웹사이트를 분석해 주세요: {{opportunity.website}}

다음을 정리해 주세요:
- 포지셔닝
- 핵심 서비스
- 타겟 고객
- 차별점

그런 다음 해당 회사의 포지셔닝과 서비스를 언급하는 맞춤 콜드 이메일을 1통 작성해 주세요.
간결하고 컨설팅하는 어조로 써 주세요.
```

#### 2단계: 작업 ID 저장하기

`manus_scrape_task_id`에 저장하세요.

#### 3단계: Wait(1~2분) → Get Task

**Get Task** (Manus)로 아래 내용을 가져오세요.

- 웹사이트 인사이트
- 맞춤 이메일 초안

#### 4단계: 결과 활용하기

- 기회에 내부 메모 만들기
- 기회 커스텀 필드 업데이트
- 생성된 이메일 보내기
- SDR용 후속 작업 만들기

결과: 기회가 “잠재고객 발굴” 단계에 들어가면 시스템이 회사를 자동으로 조사하고 맞춤 메시지 초안을 작성해요. SDR의 수작업을 줄이고, 많은 대상에게도 맞춤 메시지를 보낼 수 있어요.

---

### 4. 경쟁사 광고 수집 + AI 콘텐츠 생성 (Manus + OpenRouter)

목표: 경쟁사 광고를 수집해 메시지 패턴을 뽑고, 차별화된 광고 소재를 자동으로 만들어요.

#### 트리거

- **Pipeline Stage Changed** → “콘텐츠 전략”
- 또는 **Opportunity Tag Added**(기회 태그 추가됨) → “광고 리서치”

경쟁사 URL은 아래 필드에 저장해 두세요.
`{{opportunity.competitor_urls}}`

#### 1단계: Manus로 광고 수집 및 분석하기

**Create Task** (Manus)를 추가하세요.

프롬프트 예시:

```
다음 주소의 광고를 수집해 주세요:

{{opportunity.competitor_urls}}

다음을 정리해 주세요:
- 후킹 문구
- 가치 제안
- 오퍼
- CTA
- 감정을 자극하는 요소

공통 주제를 요약하고 포지셔닝 공백을 찾아 주세요.
```

#### 2단계: 작업 ID 저장하기

`manus_ad_research_task_id`에 저장하세요.

#### 3단계: Wait → Get Task

경쟁사 인사이트를 정리된 형태로 가져와요.

#### 4단계: 광고 소재 만들기 (OpenRouter 액션)

**OpenRouter Action**(OpenRouter 액션)을 추가하세요.

프롬프트 예시:

```
다음 경쟁사 분석을 바탕으로:

{{manus_output}}

아래를 만들어 주세요:
- Facebook 광고 3종
- LinkedIn 광고 2종
- 랜딩 페이지 섹션 1개

경쟁사와 확실히 차별화해 주세요.
어조: 전환을 이끄는 권위 있는 어조.
```

#### 5단계: 결과 전달하기

- 내부 메모 만들기
- “광고 검토” 작업 만들기
- ClickUp/Notion으로 전송하기
- 마케팅팀에 알림 보내기

결과: 기회가 “콘텐츠 전략” 단계에 들어가면 경쟁사 광고가 자동으로 분석되고 차별화된 광고 소재가 만들어져요. 하이퍼클래스 안에서 AI 기반 경쟁 분석과 콘텐츠 제작을 한 번에 할 수 있어요.

---

## 자주 묻는 질문

### Manus 작업의 전체 결과는 어디서 볼 수 있나요?
전체 프롬프트 기록과 작업 진행 상세는 Manus 대시보드에서 확인할 수 있어요.

### 하이퍼클래스 안에서 작업 결과를 가져오려면 어떻게 하나요?
**Get Task** 액션을 쓰고, 저장해 둔 작업 ID를 지정하면 최신 작업 정보를 가져와요.

### 작업이 실패하는 흔한 이유는 무엇인가요?
연동이 끊겼거나, 작업 ID가 올바르지 않거나, 작업이 이미 중지됐거나, 필수 프롬프트 입력이 비어 있거나, API 인증에 실패한 경우예요. 자세한 오류는 **자동화 > 워크플로우 > Execution Logs**(실행 로그)에서 확인하세요.

### 이 연동을 쓰려면 Manus 유료 요금제가 필요한가요?
Manus 계정이 있으면 연동할 수 있어요. 다만 사용량 한도와 고급 기능은 Manus 구독에 따라 달라요.

### Manus 액션과 트리거는 프리미엄 워크플로우 단계인가요?
네. 하이퍼클래스 프리미엄 워크플로우 과금 규칙을 따라요. 자세한 내용은 [워크플로우 프리미엄 기능 활성화 및 재청구](how-to-enable-and-rebill-workflow-premium-features.md)를 참고하세요.

### 만들 수 있는 작업 수에 제한이 있나요?
작업 수 제한은 Manus 구독 요금제와 API 사용량 한도에 따라 달라요.

### 하이퍼클래스에 Manus용 AI 크레딧이 포함되어 있나요?
아니요. 하이퍼클래스에는 Manus용 AI 크레딧이 포함되어 있지 않아요. AI 사용량은 Manus에서 청구되고, 하이퍼클래스에서는 일반 자동화 요금이 함께 청구돼요.
