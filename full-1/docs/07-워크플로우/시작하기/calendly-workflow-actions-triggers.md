---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008110-calendly-workflow-actions-triggers
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Calendly 워크플로우 트리거와 액션 (Invitee created, Create one-off meeting 등)

Calendly에서 예약이 생기거나 취소될 때 워크플로우를 자동으로 시작하고, 워크플로우에서 Calendly 미팅을 만들거나 취소하는 방법을 설명해요. 연동 방법, 트리거와 액션 목록, 설정 예시, 테스트 방법, 활용 사례를 한 번에 볼 수 있어요.

## 개요

Calendly는 호스트와 예약자(invitee) 사이의 예약을 관리하는 일정 예약 플랫폼이에요. 첫 상담, 데모, 고객 지원 후속 미팅, 채용 면접처럼 호스트의 캘린더 밖에서 이루어지는 외부 일정 예약에 쓰여요.

Calendly는 예약 활동을 웹훅으로 전달해요(`invitee.created`, `invitee.canceled`, `invitee_no_show.created`, `routing_form_submission.created`). 이벤트와 연락처를 관리하는 API도 폭넓게 제공해요. Calendly 연동은 이 두 가지를 워크플로우 빌더로 가져와요. 그래서 일정 이벤트가 생기는 순간 고객 대상 자동화를 실행할 수 있고, 반대로 워크플로우에서 Calendly를 제어할 수도 있어요.

### 연동 소개

이 연동은 두 부분으로 구성돼요.

- 트리거(Calendly → 워크플로우): 트리거 5개가 예약, 취소(예약자가 취소한 경우와 호스트가 취소한 경우), 노쇼, 라우팅 폼 제출을 다뤄요. 4개는 웹훅 기반의 즉시 트리거예요. 나머지 1개(호스트가 이벤트를 취소한 경우)는 Calendly가 이 경우에 대한 기본 웹훅을 보내지 않아서 5분마다 확인(폴링)해요.
- 액션(워크플로우 → Calendly): 액션 9개가 일회성 미팅 만들기, 예약자 대신 예약하기, 이벤트 관리(찾기, 취소), 예약자 노쇼 표시, 연락처 관리(만들기, 찾기, 업데이트), 사용자 조회를 다뤄요.

모든 트리거와 액션은 프리미엄 워크플로우 구성 요소로 표시돼 있어요. 프리미엄 액션 크레딧은 표준 자동화 요율로 적용돼요. Calendly 요금제 사용량(활성 사용자, 유료 이벤트 유형, 연동)은 Calendly 계정에서 Calendly가 직접 청구해요.

## Calendly 연동 설정하기

Calendly 트리거나 액션을 실행하려면 먼저 OAuth로 연동을 연결해야 해요.

### 워크플로우 빌더에서 연결하기 (권장)

1. **자동화 > 워크플로우**로 이동해 워크플로우를 선택하거나 새로 만들어요.
2. Calendly 트리거나 액션을 추가해요. **Apps**(앱) 탭에서 Calendly를 검색하면 돼요.
3. Calendly 트리거나 액션 중 하나를 선택해요.
4. 패널에서 **Connect your account**(계정 연결)를 클릭해요.
5. **External Authentication Configuration**(외부 인증 설정) 창이 열리면 아래 항목을 입력해요.
   - **Name**(이름): 이 연결을 구분할 수 있는 이름이에요. 예: 'Sales Team Calendly', 'CS Calendly', 'EA Calendly'
   - **Email**(이메일): 연결하는 계정의 이메일이에요. 모든 트리거와 액션의 **Connected Account**(연결된 계정) 드롭다운에 이름과 함께 표시돼요.
6. **Continue**(계속)를 클릭해요.
7. Calendly의 OAuth 승인 화면으로 이동해요. 요청된 권한 범위를 확인하고 **Allow**(허용)를 클릭해요.
8. 워크플로우 빌더로 돌아오면 패널에 **Connected**(연결됨)로 표시돼요.

### 설정에서 연결하기 (다른 방법)

1. **설정 > 연동**으로 이동해요.
2. Calendly를 찾아 **Connect**(연결)를 클릭해요.
3. **외부 인증 설정** 단계(이름과 이메일 입력)와 Calendly OAuth 절차를 완료해요.

## 트리거 목록

| 트리거 | 유형 |
| --- | --- |
| **Invitee created**(예약자 생성됨) | **Instant**(즉시) |
| **Invitee canceled**(예약자가 취소함) | **Instant**(즉시) |
| **Invitee no show created**(예약자 노쇼 생성됨) | **Instant**(즉시) |
| **New routing form submission**(새 라우팅 폼 제출) | **Instant**(즉시) |
| **Event cancelled**(이벤트 취소됨) | **Polling 5 Mins**(5분마다 확인) |

## 액션 목록

액션은 관리하는 대상별로 나뉘어 있어요.

이벤트 관리

| 액션 | 용도 |
| --- | --- |
| **Create one-off meeting**(일회성 미팅 만들기) | 호스트, 미팅 길이(최대 720분), 예약 가능 기간(**Start Date** / **End Date**, YYYY-MM-DD 형식), 선택 사항인 시간대를 지정해 1회용 Calendly 이벤트 유형을 만들어요. 일회성 예약 URL을 반환해요. |
| **Book meeting for invitee**(예약자 대신 미팅 예약) | 예약자의 연락처 정보와 선택한 이벤트 유형으로 Calendly 미팅을 대신 예약해요. 예약자용 예약 페이지는 거치지 않아요. |
| **Find event**(이벤트 찾기) | ID나 URI로 Calendly 이벤트를 찾아요. 이벤트 유형, 호스트, 예약된 시간, 예약자 정보가 담긴 이벤트 데이터를 반환해요. |
| **Cancel an event**(이벤트 취소) | 예약된 Calendly 이벤트를 취소해요. 예약자에게 보여 줄 취소 사유를 선택적으로 입력할 수 있어요. 이후 단계에서 Calendly의 기본 `invitee.canceled` 웹훅이 실행돼요. |

예약자 관리

| 액션 | 용도 |
| --- | --- |
| **Mark invitee as no show**(예약자를 노쇼로 표시) | 예약됐거나 이미 끝난 이벤트에서 예약자를 노쇼로 표시해요. 이후 단계에서 **Invitee no show created** 트리거가 실행돼요. |

연락처

| 액션 | 용도 |
| --- | --- |
| **Create contact**(Calendly 연락처 만들기) | Calendly에 새 연락처를 만들어요. 새 연락처 ID를 반환해요. |
| **Find contact**(Calendly 연락처 찾기) | 이메일이나 전화번호로 Calendly 연락처를 찾아요. 찾으면 연락처 데이터를 반환해요. |
| **Update contact**(Calendly 연락처 업데이트) | ID나 이메일로 기존 Calendly 연락처를 업데이트해요. |

사용자

| 액션 | 용도 |
| --- | --- |
| **Find user**(사용자 찾기) | 이메일이나 사용자 URI로 Calendly 사용자를 찾아요. 이름, 이메일, 시간대, 일정 예약 URL, 조직 내 역할을 반환해요. |

## 예시: 트리거 설정하기 (Invitee created)

연결된 계정의 Calendly 링크로 예약자가 미팅을 예약할 때마다 실행되는 워크플로우를 만들어 볼게요. **Invitee canceled**, **Invitee no show created**, **New routing form submission**도 설정 방식이 같아요. 이 트리거들은 모두 **Webhook Subscription Scope**(웹훅 구독 범위) 필터를 쓰고, 전체 흐름도 비슷해요.

### 1단계: 트리거 추가하기

1. 워크플로우를 열고 **Add trigger**(트리거 추가)를 클릭해요.
2. **Apps**(앱) 탭으로 이동해 Calendly를 검색해요.
3. 트리거 목록에서 **Invitee created**를 선택해요.

### 2단계: 트리거 설정하기

1. **Connected Account**(연결된 계정): 이 트리거가 감시할 Calendly 계정을 골라요. 연결할 때 입력한 이름과 이메일로 표시돼요.
2. **Workflow Trigger Name**(워크플로우 트리거 이름): 알아보기 쉬운 이름을 입력해요. 예: 'New Sales Discovery Call'
3. **Filters > Webhook Subscription Scope**: 연결된 사용자의 이벤트만 감시하려면 **User**(사용자)를, Calendly 조직의 모든 사용자를 감시하려면 **Organization**(조직)을 선택해요. 도움말 문구는 영어로 표시돼요. ‘Choose whether to receive new invitee events for your connected user account or your entire organization.’(연결된 사용자 계정의 새 예약자 이벤트를 받을지, 조직 전체의 이벤트를 받을지 선택하세요.)
4. **Add filters**(필터 추가, 선택 사항): 특정 상황에서만 워크플로우를 실행하려면 이벤트 유형, 예약자 이메일 도메인, 사용자 지정 질문 답변 같은 조건을 더할 수 있어요.

### 3단계: 트리거 테스트하기

1. **Test Your Trigger**(트리거 테스트) 패널에서 **Find new records**(새 레코드 찾기)를 클릭해요.
2. 일치하는 레코드가 없으면 연결된 계정의 Calendly 링크로 테스트 예약을 한 뒤 다시 불러와요.
3. 반환된 레코드를 매핑 기준으로 선택해요. 그러면 이후 단계에서 쓸 예약자와 이벤트 데이터 구조가 고정돼요.
4. **Save trigger**(트리거 저장)를 클릭해요.

## 예시: 액션 설정하기 (Create one-off meeting)

**Create one-off meeting**으로, 워크플로우가 특정 예약자에게 보낼 1회용 Calendly 링크를 만들어 볼게요.

### 1단계: 액션 추가하기

1. 워크플로우에서 **Add**(추가)를 클릭해 새 단계를 넣어요.
2. **Apps**(앱) 탭을 열고 Calendly를 선택해요.
3. 액션 목록에서 **Create one-off meeting**을 선택해요.

### 2단계: 액션 설정하기

1. **Connected Account**(연결된 계정): 미팅을 진행할 Calendly 계정을 골라요.
2. **Action Name**(액션 이름): 알아보기 쉬운 이름을 입력해요. 예: 'Create Follow-up Call Link'
3. **Event Name**(이벤트 이름, 필수): 예약자에게 보이는 이름이에요. 예: 'Follow-up Call with John'
4. **Host User**(호스트 사용자, 필수): 이 이벤트의 호스트를 골라요. 호스트 이메일이 상황에 따라 달라지면 앞 단계에서 **Find user**를 사용하세요.
5. **Duration (minutes)**(미팅 길이(분), 필수): 미팅 길이를 분 단위로 입력해요. 최대 720분(12시간)이에요.
6. **Timezone**(시간대, 선택): IANA 시간대 이름을 입력해요. 예: `America/New_York`, `Asia/Kolkata` 비워 두면 호스트의 시간대를 기본값으로 써요.
7. **Start Date**(시작일, 필수): 예약 가능 시작일을 YYYY-MM-DD 형식으로 입력해요.
8. **End Date**(종료일, 필수): 예약 가능 종료일을 YYYY-MM-DD 형식으로 입력해요.

### 3단계: 액션 테스트하기

1. **Test action**(액션 테스트)을 클릭해요.
2. 실행 여부를 확인해요. 이 테스트는 Calendly에 실제 일회성 이벤트 유형을 만들어요. 반환된 예약 URL은 응답 데이터에 표시돼요.
3. 액션을 저장하고 게시하기 전에 **Test workflow**(워크플로우 테스트)를 한 번 끝까지 실행해요.

## 트리거와 액션 테스트하기

게시하기 전에 꼭 테스트하세요. 테스트하면 데이터 구조가 고정되고, 이후 단계에서 연결해 쓸 실제 레코드를 얻을 수 있어요.

### 즉시 트리거 테스트하기

1. 트리거 패널에서 **Find new records**를 클릭해요.
2. 일치하는 레코드가 없으면 Calendly에서 직접 동작을 해 보세요. 테스트 예약을 하거나, 예약을 취소하거나, 라우팅 폼을 제출한 뒤 다시 불러오면 돼요.
3. 반환된 레코드를 매핑 기준으로 선택해요.

### Event cancelled(폴링 트리거) 테스트하기

1. **Find new records**를 누르면 연결된 계정에서 호스트가 취소한 가장 최근 이벤트를 반환해요.
2. 아무것도 나오지 않으면 Calendly에서 예약자가 아닌 호스트로 이벤트를 취소하고, 다음 폴링 주기까지 최대 5분을 기다린 뒤 다시 불러와요.

### 액션 테스트하기

1. 액션 패널에서 **Test action**을 클릭해요.
2. 설정한 입력값으로 실제 Calendly 계정에서 액션이 실행돼요.
3. Calendly에서 결과를 확인해요. **Event Types**(이벤트 유형) 아래 새 일회성 이벤트, 호스트 캘린더의 새 예약, 업데이트된 연락처 등을 볼 수 있어요.

## 활용 사례

### 사례 1: 새 예약 → CRM 동기화 + 미팅 전 준비

목표: 모든 Calendly 예약을 CRM에 반영하고, 미팅 전에 예약자의 관심을 높여요.

워크플로우 구성:

- 트리거: **Invitee created** (**Webhook Subscription Scope**는 적용 범위에 따라 **User** 또는 **Organization**)
- 액션: **Find Contact**(연락처 찾기, 이메일 기준)
- 분기: **Branch**(분기)로 나눠요. 연락처를 찾지 못하면 예약자의 이름, 이메일, 예약 정보로 **Create Contact**(연락처 만들기)를 실행하고, 찾으면 예약 정보로 **Update Contact**(연락처 업데이트)를 실행해요.
- 액션: 미팅 준비 자료, 호스트 소개, 안건을 담은 미팅 전 SMS나 이메일을 보내요.

예시: 잠재 고객이 영업 담당자(AE)의 Calendly 링크로 30분짜리 첫 상담을 예약해요. 몇 초 안에 워크플로우가 일치하는 CRM 연락처를 없으면 만들고 있으면 업데이트해요. 'Source = Calendly' 태그를 붙이고, 예약된 시간을 커스텀 필드에 저장해요. 그리고 호스트의 LinkedIn 프로필과 제품 소개 한 장 요약본을 담은 미팅 전 SMS를 보내요.

### 사례 2: 취소 → 일정 재조율 유도

목표: 취소가 발생하는 즉시 파악해서 부담 없이 다시 예약할 수 있는 길을 안내해요.

워크플로우 구성:

- 트리거: **Invitee canceled**
- **Wait**(대기, 예: 30분): 일정 변경이라면 **Invitee created**가 먼저 실행될 시간을 줘요.
- 분기: 대기 시간 동안 이 연락처에 **Invitee created**가 실행됐는지 확인해요. 실행됐다면 워크플로우를 끝내요. 실행되지 않았다면 실제 취소로 봐요.
- 액션: **Create one-off meeting**(호스트는 기존 호스트, 예약 가능 기간은 7일)
- 액션: 일회성 링크가 담긴 일정 재조율 메시지를 보내요.

예시: 예약자가 통화 2시간 전에 데모를 취소해요. 30분을 기다려도 다시 예약하지 않으면 워크플로우가 같은 호스트, 7일의 예약 가능 기간으로 Calendly 일회성 링크를 만들어요. 그리고 그 링크가 담긴 정중한 일정 재조율 SMS를 보내요.

### 사례 3: 노쇼 → 재참여 유도

목표: 노쇼한 예약자에게 부드럽게 다시 연락해요.

워크플로우 구성:

- 트리거: **Invitee no show created**
- 액션: CRM 연락처에 'No-Show Recovery' 태그를 추가해요.
- 액션: 새 예약 링크를 안내하는 메시지를 보내요.
- N일을 기다려요. 그때까지 다시 예약하지 않으면 담당자가 직접 연락하도록 넘겨요.

예시: 잠재 고객이 첫 상담에 나타나지 않아서 AE가 Calendly에서 노쇼로 표시해요. 워크플로우가 연락처에 태그를 붙이고, 새 링크가 담긴 '뵙지 못해 아쉬웠어요' 메시지를 보내요. 4일 안에 다시 예약하지 않으면 AE의 수동 후속 연락 대기열에 연락처를 표시해요.

### 사례 4: 마일스톤에서 일회성 미팅 자동 생성

목표: 다른 시스템의 마일스톤이나 인수인계 시점에 맞춤형 Calendly 링크를 만들어요.

워크플로우 구성:

- 트리거: 외부 마일스톤(딜 단계 변경, 지원 티켓 에스컬레이션, 계정 기념일 등)
- 액션: **Find user**(호스트 이메일로 사용자 URI 확인)
- 액션: 해당 호스트, 맞춤 미팅 길이, 짧은 예약 가능 기간으로 **Create one-off meeting**을 실행해요.
- 액션: SMS나 이메일로 예약자에게 예약 URL을 보내요.

예시: CRM에서 딜이 'Proposal Sent' 단계에 도달해요. 워크플로우가 담당 영업 사원의 Calendly 사용자를 찾고, 5일의 예약 가능 기간으로 45분짜리 일회성 미팅을 만들어요. 그런 다음 잠재 고객에게 한 번에 예약할 수 있는 링크를 문자로 보내요. 일정을 주고받는 수고가 없어요.

## 자주 묻는 질문

### Calendly가 무엇인가요?

Calendly는 호스트(영업 담당자, 지원 담당자, 채용 담당자, 비서 등)와 예약자(잠재 고객, 고객, 지원자) 사이의 예약을 관리하는 일정 예약 플랫폼이에요. 호스트는 링크나 라우팅 폼으로 가능한 시간을 공유하고, 예약자는 시간을 골라요. Calendly는 생성, 일정 변경, 취소, 완료, 노쇼까지 예약의 전 과정을 추적해요.

### Calendly 트리거와 액션도 프리미엄 워크플로우 구성 요소인가요?

네. 트리거 5개와 액션 9개 모두 프리미엄으로 표시돼 있고, 프리미엄 액션 크레딧이 표준 자동화 요율로 사용돼요. Calendly 요금제 사용량(활성 사용자, 유료 이벤트 유형, 연동)은 Calendly 계정에서 Calendly가 직접 청구해요.

### 어떤 트리거가 즉시 실행되고, 어떤 트리거가 폴링인가요?

4개는 즉시 트리거예요. **Invitee created**, **Invitee canceled**, **Invitee no show created**, **New routing form submission**이며, Calendly의 기본 웹훅(`invitee.created`, `invitee.canceled`, `invitee_no_show.created`, `routing_form_submission.created`)으로 동작해요. 나머지 1개인 **Event cancelled**는 5분마다 확인하는 폴링 방식이에요. Calendly가 호스트가 취소한 경우에 대한 기본 웹훅을 보내지 않기 때문이에요.

### 연동할 때 이름과 이메일을 왜 입력해야 하나요?

이름과 이메일은 워크플로우 빌더의 **Connected Account** 드롭다운에서 연결된 계정을 구분하는 표시예요. 팀, 브랜드, 지역별로 Calendly 계정을 여러 개 연결했다면 알아보기 쉬운 이름이 있어야 워크플로우 단계에서 엉뚱한 계정을 고르는 일을 막을 수 있어요.

### 일정 변경은 어떻게 처리되나요?

Calendly에는 '일정 변경'만을 위한 웹훅이 없어요. 예약자가 일정을 바꾸면 Calendly가 기존 시간에 대한 `invitee.canceled`를 보낸 뒤 새 시간에 대한 `invitee.created`를 보내요. 그래서 이 연동에서는 일정 변경 한 번이 트리거 실행 두 번으로 나타나요. 일정을 바꿀 때마다 취소 흐름이 실행되는 것을 막는 '대기 후 확인' 방식은 위의 일정 변경 처리(Handling Reschedules) 섹션을 참고하세요. <!-- 검토 필요: 원문에서 언급한 'Handling Reschedules' 섹션이 문서에 없음. 사례 2(취소 → 일정 재조율 유도)가 같은 방식을 설명함 -->

### Create one-off meeting은 무엇을 반환하나요?

일회성 예약 URL과 이벤트 정보(호스트, 미팅 길이, 예약 가능 기간)를 반환해요. 이 URL을 예약자 한 명에게 공유하면, 예약자는 호스트의 전체 가용 시간을 보지 않고 설정된 기간 안에서만 예약해요.

### Cancel an event와 예약자가 Calendly에서 직접 취소하는 것은 어떻게 다른가요?

**Cancel an event**는 Calendly에서 호스트가 취소하는 것과 같은 동작을 워크플로우로 실행하는 액션이에요. 이벤트에 있는 모든 예약자에 대해 Calendly의 기본 `invitee.canceled` 웹훅이 실행돼서, 이후 자동화도 일관되게 동작해요. 예약자가 Calendly에서 직접 취소해도 같은 `invitee.canceled` 웹훅이 실행되므로, 어느 쪽이든 **Invitee canceled** 트리거가 실행돼요.

### Calendly 웹훅이 지연되면 어떻게 되나요?

Calendly의 기본 웹훅은 보통 몇 초 안에 전달되지만, 일시적으로 지연될 수 있어요. 즉시 트리거는 웹훅이 도착하는 즉시 실행돼요. 웹훅이 Calendly 인프라에서 완전히 유실되면 트리거는 실행되지 않아요. 응답 시간 기준(SLA)이 있는 흐름이라면 이런 작은 위험을 고려해 설계하세요(예: 야간 대조 작업 <!-- 검토 필요: 원문이 여기서 끝남(문장이 완성되지 않음) -->
