---
원문: /support/solutions/articles/155000008018-klaviyo-workflow-actions-triggers
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거·액션 — Klaviyo

Klaviyo 연동을 켜면 **워크플로우 빌더**에서 Klaviyo 트리거와 액션을 쓸 수 있어요. Klaviyo에서 일어난 활동에 맞춰 워크플로우를 실행하고, 워크플로우 데이터가 바뀌면 그 내용을 Klaviyo에 바로 반영할 수 있어요.

## 개요

Klaviyo는 프로필을 중심으로 만든 마케팅 자동화 플랫폼이에요. 프로필은 이메일과 SMS 구독 상태를 함께 담은 통합 고객 기록이에요. 프로필은 목록(list), 세그먼트(프로필 조건으로 만드는 동적 그룹), 메트릭(‘Placed Order’, ‘Viewed Product’ 같은 이벤트 흐름)을 따라 움직여요. Klaviyo의 캠페인과 플로우도 이 요소들을 대상으로 해요.

Klaviyo 연동은 이 요소들을 **워크플로우 빌더**로 가져와요. 그래서 고객 대상 자동화가 Klaviyo 활동에 반응하고, 다른 곳에서 워크플로우 데이터가 바뀔 때 Klaviyo에도 실시간으로 반영할 수 있어요.

예를 들어 아래 일을 하나의 자동화 안에서 처리할 수 있어요.

- Klaviyo에 새로 가입한 사람을 바로 CRM 연락처로 만들기
- 가치가 높은 세그먼트에 해당하는 사람이 생기면 내부 알림 보내기
- CRM 연락처를 Klaviyo 프로필로 만들거나 업데이트하기
- 특정 시점에 도달하면 미리 준비해 둔 Klaviyo 캠페인 보내기

## 연동 구성

이 연동은 트리거와 액션, 두 부분으로 이루어져 있어요.

- 트리거(Klaviyo → 워크플로우): 폴링 트리거 네 가지가 있어요. **New event**(새 이벤트), **New profile**(새 프로필), **Profile added to list**(목록에 프로필 추가됨), **Profile added to segment**(세그먼트에 프로필 추가됨)이에요. 각 트리거는 5분마다 실행되고, 마지막 확인 이후에 조건에 맞게 생긴 기록을 가져와요.
- 액션(워크플로우 → Klaviyo): 액션은 17가지예요. 프로필 전체 과정(생성·업데이트·찾기·구독·구독 해지), 목록 관리(생성·찾기·추가·제거), 세그먼트 찾기, 목록과 세그먼트의 태그 관리, 캠페인 찾기, 초안 캠페인 바로 보내기를 다뤄요.

모든 트리거와 액션은 프리미엄 워크플로우 구성 요소예요. 프리미엄 액션 크레딧은 표준 자동화 요율로 사용돼요. Klaviyo 요금제 사용량(활성 프로필, SMS 크레딧)은 Klaviyo 계정에서 Klaviyo가 직접 청구해요.

![Klaviyo 트리거·액션 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072224862/original/E-FZcZE6gXLsc2dcfDBxela4eHV0aoySKA.png?1779801216)

![Klaviyo 트리거·액션 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072224921/original/1Ygyc3tHignPYQCFEb-06ZCexOaBXDDzyw.png?1779801235)

## 워크플로우에서 Klaviyo를 쓰면 좋은 점

- 5분마다 확인하는 폴링 트리거: 웹훅을 따로 구성하지 않아도 거의 실시간으로 동작해요. 조건에 맞는 기록은 묶어서 순서대로 처리해요.
- 프로필 전체 과정을 한곳에서: 생성, 업데이트, 찾기, 구독, 구독 해지가 각각 별도 액션이라 필요한 단계만 골라 쓸 수 있어요.
- 동의 여부를 구분하는 구독: **Subscribe profile**(프로필 구독) 액션은 채널별 설정값을 받아서 이메일과 SMS 동의를 따로 처리해요. Klaviyo(그리고 TCPA / GDPR / CASL)가 동의를 관리하는 방식과 같아요.
- 목록·세그먼트 조회: **Find list**(목록 찾기), **Find segment**(세그먼트 찾기), **Find campaigns**(캠페인 찾기)로 실행 시점에 ID를 찾을 수 있어요. 그래서 워크플로우 안에 ID를 고정해 두지 않아도 돼요.
- 목록과 세그먼트에 공통으로 쓰는 태그 관리: 같은 액션 묶음으로 두 곳의 Klaviyo 태그를 워크플로우에서 메타데이터처럼 관리할 수 있어요.
- 워크플로우로 캠페인 보내기: **Send campaign**(캠페인 보내기)을 쓰면 워크플로우의 특정 시점, 일정, 조건에 맞춰 Klaviyo 초안 캠페인을 바로 보낼 수 있어요.

## Klaviyo 연결하기

Klaviyo 트리거나 액션을 쓰려면 먼저 OAuth로 연동을 연결해야 해요.

### 워크플로우 빌더에서 연결하기 (권장)

1. **자동화 > 워크플로우**를 열고 워크플로우를 선택하거나 새로 만드세요.
2. Klaviyo 트리거나 액션을 추가하세요. **Apps** 탭에서 Klaviyo를 검색하면 돼요.
3. Klaviyo 트리거나 액션을 아무거나 선택하세요.
4. 액션 카드에서 **Connect your account**(계정 연결)를 클릭하세요.
5. Klaviyo 인증 화면으로 이동해요. 요청하는 권한 범위(Accounts, Campaigns, Events, List, Metrics, Profiles, Segments, Subscriptions, Tags)를 확인하고 **Allow**(허용)를 클릭하세요.
6. 다시 **워크플로우 빌더**로 돌아오면 패널에 **Connected**(연결됨)가 표시돼요.

### 설정에서 연결하기 (다른 방법)

1. **설정 > 연동**으로 이동하세요.
2. Klaviyo를 찾아 **Connect**(연결)를 클릭하세요.
3. Klaviyo 인증 화면에서 OAuth 과정을 마치고 플랫폼으로 돌아오세요.

## 트리거 목록

모든 트리거는 Klaviyo를 5분마다 확인해서, 마지막 확인 이후 조건에 맞는 기록을 순서대로 가져와요.

| 트리거 | 하는 일 |
| --- | --- |
| **New event** | 프로필에 추적 중인 메트릭의 새 이벤트가 기록되면 실행돼요. Metric(예: Placed Order, Viewed Product, 사용자 지정 이벤트)으로 필터링할 수 있어요. |
| **New profile** | Klaviyo에 새 프로필이 만들어지면 실행돼요. 이메일과 SMS 구독 상태를 포함한 전체 프로필 정보를 가져와요. |
| **Profile added to list** | 프로필이 Klaviyo 목록에 추가되면 실행돼요. List로 필터링할 수 있어요. |
| **Profile added to segment** | 프로필이 Klaviyo 세그먼트 조건에 처음 맞으면 실행돼요. Segment로 필터링할 수 있어요. |

## 액션 목록

액션은 관리하는 대상별로 나뉘어 있어요.

프로필 관리

| 액션 | 용도 |
| --- | --- |
| **Create profile**(프로필 생성) | 워크플로우 데이터로 새 Klaviyo 프로필을 만들어요. 구독 처리는 하지 않아요. 명시적인 동의를 받았다면 **Subscribe profile**을 따로 사용하세요. |
| **Update profile**(프로필 업데이트) | ID나 이메일로 기존 프로필을 업데이트해요. 동의 상태는 바꾸지 않아요. |
| **Find profile**(프로필 찾기) | 이메일이나 전화번호로 프로필을 찾아요. 찾으면 프로필 정보를 가져와요. |
| **Subscribe profile** | 명시적인 동의를 받은 프로필을 이메일 또는 SMS(또는 둘 다)에 구독시켜요. 채널은 각각 따로 처리돼요. |
| **Unsubscribe profile**(프로필 구독 해지) | 프로필의 이메일 또는 SMS(또는 둘 다) 구독을 해지해요. 선택한 채널의 동의 상태를 UNSUBSCRIBED로 바꿔요. |

목록 관리

| 액션 | 용도 |
| --- | --- |
| **Create list**(목록 생성) | 입력한 이름으로 새 Klaviyo 목록을 만들고 목록 ID를 가져와요. |
| **Find list** | 이름으로 Klaviyo 목록을 찾아요. |
| **Add profile to list**(목록에 프로필 추가) | 기존 프로필을 목록에 추가해요. 목록 멤버십만 바뀌고 동의 상태는 바뀌지 않아요. |
| **Remove profile from list**(목록에서 프로필 제거) | 프로필을 목록에서 제거해요. 목록 멤버십만 바뀌어요. |

세그먼트 관리

| 액션 | 용도 |
| --- | --- |
| **Find segment** | 이름으로 Klaviyo 세그먼트를 찾고 세그먼트 ID를 가져와요. |

태그 관리

| 액션 | 용도 |
| --- | --- |
| **Find tags**(태그 찾기) | Klaviyo 계정의 태그를 가져와요. 이름으로 필터링할 수도 있어요. |
| **Add tag to list**(목록에 태그 추가) | Klaviyo 목록에 태그를 하나 이상 붙여요. |
| **Remove tag from list**(목록에서 태그 제거) | Klaviyo 목록에서 태그를 하나 이상 떼어요. |
| **Add tag to segment**(세그먼트에 태그 추가) | Klaviyo 세그먼트에 태그를 하나 이상 붙여요. |
| **Remove tag from segment**(세그먼트에서 태그 제거) | Klaviyo 세그먼트에서 태그를 하나 이상 떼어요. |

캠페인

| 액션 | 용도 |
| --- | --- |
| **Find campaigns** | Klaviyo 계정의 캠페인을 가져와요. 보낼 초안을 찾을 때 유용해요. |
| **Send campaign** | Klaviyo 초안 캠페인을 바로 보내요. 캠페인의 수신 대상, 제목, 내용은 Klaviyo 안에서 설정해요. |

## 예시: 트리거 설정하기 (Profile added to list)

특정 Klaviyo 목록에 프로필이 추가될 때마다 실행되는 워크플로우를 만드는 예시예요. 이후 모든 액션은 이 프로필 정보를 바탕으로 동작해요.

### 1단계: 트리거 추가하기

1. 워크플로우를 열고 **Add Trigger**(트리거 추가)를 클릭하세요.
2. **Apps** 탭으로 이동해 Klaviyo를 검색하세요.
3. 트리거 목록에서 **Profile added to list**를 선택하세요.

### 2단계: 트리거 설정하기

1. **Connected Account**(연결된 계정): 이 트리거가 지켜볼 Klaviyo 계정을 고르세요. 연결된 계정이 하나뿐이면 자동으로 선택돼요.
2. **Workflow Trigger Name**(워크플로우 트리거 이름): 알아보기 쉬운 이름을 붙이세요. 예: ‘New VIP List Member’
3. **Filters > List**(필터 > 목록): 지켜볼 Klaviyo 목록을 고르세요. 아래 도움말에는 ‘Select the Klaviyo list to watch for new profile memberships.’(새 프로필이 멤버로 들어오는지 지켜볼 Klaviyo 목록을 선택하세요)라고 나와요.
4. **Add filters**(필터 추가, 선택 사항): 특정 상황에서만 워크플로우를 실행하고 싶다면 조건을 더 추가하세요.

### 3단계: 트리거 테스트하기

1. **Test Your Trigger**(트리거 테스트) 패널에서 **Find New Records**(새 기록 찾기)를 클릭하세요.
2. 시스템이 Klaviyo에서 가장 최근에 조건에 맞은 목록 멤버십 기록을 가져와요.
3. **Records — Select Mapping Reference**(기록 — 매핑 기준 선택) 드롭다운에서 가져온 기록 중 하나를 고르세요. 그러면 이후 단계에서 쓸 프로필 정보 구조가 정해져요.
4. **Save Trigger**(트리거 저장)를 클릭해 마무리하세요.

## 예시: 액션 설정하기 (Send campaign)

워크플로우 조건이 충족되는 순간, 미리 준비한 Klaviyo 캠페인을 보내는 예시예요.

### 1단계: Klaviyo에서 초안 캠페인 준비하기

**Send campaign**은 발송만 시작하는 액션이고 캠페인을 만들어 주지는 않아요. 캠페인의 수신 대상, 제목, 내용은 미리 Klaviyo에서 설정해 두고 초안 상태로 남겨 두어야 해요. Klaviyo에서 평소처럼 캠페인을 만들되, 발송 버튼을 누르기 전에 멈추세요.

### 2단계: 액션 추가하기

1. 워크플로우에서 **Add**(추가)를 클릭해 새 단계를 넣으세요.
2. **Apps** 탭을 열고 Klaviyo를 선택하세요.
3. 액션 목록에서 **Send campaign**을 고르세요.

### 3단계: 액션 설정하기

1. **Connected Account**: 초안이 있는 Klaviyo 계정을 고르세요.
2. **Action Name**(액션 이름): 알아보기 쉬운 이름을 붙이세요. 예: ‘Send Launch Day Broadcast’
3. **Campaign**(캠페인): 드롭다운에서 초안을 고르세요. 아래 도움말에는 ‘Select the draft campaign to send now.’(지금 보낼 초안 캠페인을 선택하세요)라고 나와요. 현재 초안 상태인 캠페인만 목록에 보여요.

### 4단계: 액션 테스트하기

1. **Test Action**(액션 테스트)을 클릭하세요.
2. **Confirm**(확인)을 클릭하세요. 캠페인이 Klaviyo에 설정된 대상에게 발송돼요.
3. 액션을 저장하고, 게시하기 전에 **Test Workflow**(워크플로우 테스트)를 전체로 실행하세요.

{% hint style="warning" %}
테스트 발송도 실제로 나가니 주의하세요. 운영 중인 워크플로우에서 실행하기 전에, 초안의 수신 대상 안에 작은 테스트 목록을 만들어 먼저 시험해 보세요.
{% endhint %}

## 트리거와 액션 테스트하기

게시하기 전에 항상 테스트하세요. 테스트하면 데이터 구조가 정해지고, 이후 단계에서 연결할 실제 기록을 쓸 수 있어요.

### 트리거 테스트

1. 트리거 패널에서 **Find New Records**를 클릭하세요.
2. 조건에 맞는 기록이 나타나지 않으면 Klaviyo에서 직접 해당 동작을 해 보고(목록에 프로필 추가, 테스트 이벤트 발생 등) 다시 가져오세요.
3. 가져온 기록을 매핑 기준으로 선택하세요. 미리보기에 프로필 정보 필드가 나타나는지 확인하세요.

### 액션 테스트

1. 액션 패널에서 **Test Action**을 클릭하세요.
2. 설정한 입력값으로 실제 Klaviyo 계정에 액션이 실행돼요.
3. Klaviyo를 열어 결과를 확인하세요. 새 프로필은 **Profiles**, 목록 멤버십은 **Lists**, 태그 연결은 **Tags**, 캠페인 발송은 **Campaigns**에서 볼 수 있어요.
4. 이상하면 필드 매핑을 다시 확인하고 재테스트하세요. 문제가 없으면 **Save action**(액션 저장)을 클릭하고, 게시하기 전에 **Test Workflow**를 전체로 실행하세요.

## 자주 쓰는 활용 사례

### 활용 사례 1: Klaviyo 신규 가입자를 CRM으로 동기화하기

목표: Klaviyo에 새로 생긴 프로필을 모두 CRM 연락처로 반영해서, 이후의 육성·담당자 배정·리포팅이 한 기록만 보게 해요.

워크플로우 구성:

- 트리거: **New profile**
- 액션: **Find Contact**(연락처 찾기, 이메일 기준)
- 분기: 못 찾은 경우 → Klaviyo 프로필의 이메일, 전화번호, 이름, 위치, 사용자 지정 속성으로 **Create Contact**(연락처 생성)
- 분기: 찾은 경우 → **Update Contact**(연락처 업데이트), 연락처에 ‘Source = Klaviyo’ 표시

예시: 마케팅 사이트의 팝업이 Klaviyo에서 이메일을 수집해요. 5분 안에 워크플로우가 일치하는 CRM 연락처를 찾거나 만들고, ‘Source = Klaviyo’ 표시를 붙이고, 담당자를 배정해요. 수동으로 내보내거나 밤새 동기화하지 않아도 돼요.

### 활용 사례 2: VIP 세그먼트에 해당 → 내부 알림 + CRM 태그

목표: Klaviyo가 멤버십을 다시 계산하는 순간, 가치가 높은 세그먼트의 변화를 바로 잡아내요.

워크플로우 구성:

- 트리거: **Profile added to segment** (VIP 세그먼트로 필터링)
- 액션: **Find Contact** (이메일 기준)
- 액션: **Update Contact** — ‘VIP’ 태그 적용
- 액션: 연락처 담당자에게 내부 알림(Slack/SMS/이메일) 보내기

예시: ‘Spent > $500 in last 90 days’ 세그먼트는 고객이 기준을 넘는 순간 트리거를 실행해요. 해당 CRM 연락처에 ‘VIP’ 태그가 붙고, 담당자는 5분 안에 Slack 내부 알림을 받아요. 고객이 다음 구매를 결정하기 전에 직접 연락하기에 알맞아요.

### 활용 사례 3: 폼 수신 동의 → 동의 내용대로 구독 처리

목표: 폼에서 명시적인 수신 동의를 받고, 채널별 동의를 정확히 Klaviyo에 반영해요.

워크플로우 구성:

- 트리거: **Form Submission**(폼 제출) (이메일, 전화번호, 이메일 동의 체크박스, SMS 동의 체크박스 포함)
- 액션: **Find profile** (이메일 기준)
- 분기: 못 찾은 경우 → **Create profile**
- 액션: **Subscribe profile** — 폼의 이메일 동의와 SMS 동의 값을 각각 따로 전달
- 선택 액션: **Add profile to list** — 특정 환영 목록에도 함께 넣고 싶을 때

예시: 랜딩 페이지가 이메일과 전화번호를 받으면서, 이메일 동의와 SMS 동의를 각각 별도 체크박스로 받아요. 워크플로우가 Klaviyo 프로필을 만들고, 고객이 명시적으로 동의한 채널에만 구독 처리를 해요. 그다음부터는 Klaviyo의 환영 플로우가 이어받아요.

## 자주 묻는 질문

### Klaviyo가 무엇인가요?
Klaviyo는 이메일과 SMS용 마케팅 자동화 플랫폼으로, 통합 고객 프로필을 중심으로 만들어졌어요. 프로필은 목록, 세그먼트(프로필 조건으로 정의하는 동적 그룹), 메트릭(‘Placed Order’나 ‘Viewed Product’ 같은 추적 이벤트)을 따라 움직여요. Klaviyo의 캠페인과 플로우도 이 요소들을 대상으로 해요.

### Klaviyo 트리거와 액션은 프리미엄 워크플로우 구성 요소인가요?
네. 모든 트리거와 액션이 프리미엄으로 분류되어 있고, 표준 자동화 요율로 프리미엄 액션 크레딧을 사용해요. Klaviyo 요금제 사용량(활성 프로필, SMS 크레딧)은 Klaviyo 계정에서 Klaviyo가 직접 청구해요.

### 트리거는 즉시 실행되나요, 아니면 주기적으로 확인하나요?
주기적으로 확인해요. 모든 트리거는 Klaviyo를 5분마다 확인하고, 마지막 확인 이후 조건에 맞는 기록을 순서대로 가져와요. 즉시 실행이 아니라 거의 실시간이라는 점을 감안해서 구성하세요.

### Klaviyo는 어떻게 인증하나요?
OAuth로 인증해요. Klaviyo 단계 어디서든 **Connect your account**를 클릭하면 Klaviyo 인증 화면으로 이동해요. 요청하는 권한 범위(Accounts, Campaigns, Events, List, Metrics, Profiles, Segments, Subscriptions, Tags)를 확인하고 **Allow**를 클릭하세요. **워크플로우 빌더**로 돌아오면 패널에 ‘Connected’가 표시돼요.

### 이메일과 SMS가 함께 구독되나요?
아니요. Klaviyo는 이메일 동의와 SMS 동의를 따로 관리해요. **Subscribe profile**은 채널별 설정값을 받으니, 이메일만, SMS만, 또는 둘 다 구독시킬 수 있어요. 항상 고객이 명시적으로 동의한 내용대로 설정하세요.

### 프로필 속성 업데이트와 구독을 한 번에 할 수 있나요?
한 액션으로는 안 돼요. Klaviyo에서는 구독 호출과 속성 업데이트가 서로 다른 작업이에요. 먼저 **Subscribe profile**을 쓰고, 사용자 지정 속성을 바꿔야 하면 이어서 **Update profile**을 쓰세요.

### New event 트리거는 어떤 정보를 가져오나요?
이벤트 정보(메트릭 이름, 이벤트 시각, 이벤트 속성)와 연결된 프로필 정보(이메일, 전화번호, 프로필 ID, 사용자 지정 속성)를 가져와요. 실제로 필요한 이벤트 유형만 받고 싶다면 Metric 필터를 쓰세요(예: ‘Placed Order’ 이벤트만).

### Send campaign은 어떤 캠페인을 보낼지 어떻게 알죠?
액션의 **Campaign** 필드는 Klaviyo 계정의 초안 캠페인으로 채워진 드롭다운이에요. 수신 대상, 제목, 내용은 초안을 만들 때 Klaviyo 안에서 설정해요. **Send campaign**은 발송만 시작하고 캠페인을 만들지는 않아요.

### 태그는 목록, 세그먼트와 어떻게 다른가요?
태그는 목록과 세그먼트에 붙이는 분류용 메타데이터예요. 태그 자체에는 프로필이 들어 있지 않아요. 목록과 세그먼트를 분류하는 데 쓰세요(예: ‘onboarding’, ‘win-back’, ‘black-friday-2026’). 계정이 커져도 리포팅과 필터링을 깔끔하게 유지할 수 있어요.
