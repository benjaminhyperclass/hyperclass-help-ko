---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006443-typeform-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거·액션 — Typeform 연동

Typeform 연동을 쓰면 Typeform 폼에 들어온 응답을 하이퍼클래스 워크플로우와 바로 연결할 수 있어요. 이 문서에서는 Typeform 트리거와 액션, 연결 방법, 활용 예시를 안내해요.

## 소개

하이퍼클래스의 Typeform 연동은 CRM 워크플로우와 Typeform을 이어 주는 기능이에요. 리드를 모으거나 설문 데이터를 수집하거나 고객 피드백을 추적할 때, Typeform 응답이 하이퍼클래스 자동화로 바로 넘어와 데이터 동기화와 워크플로우 실행이 즉시 이루어져요.

### 이 연동으로 할 수 있는 일

에이전시, 마케터, 비즈니스 운영자는 이 연동으로 다음 작업을 할 수 있어요.

- Typeform 응답을 하이퍼클래스 워크플로우에서 자동으로 받아 활용해요.
- 새 응답이 들어오면 맞춤 후속 조치, CRM 등록, 알림을 자동으로 처리해요.
- 반복적인 데이터 입력과 응답 처리 작업을 자동화해 시간을 아껴요.

---

## 트리거와 액션

### 트리거 (Typeform → 하이퍼클래스)

Typeform에서 일어난 이벤트가 하이퍼클래스 워크플로우를 시작하게 해 주는 트리거예요.

| 트리거 이름 | 설명 |
| --- | --- |
| **New Entry**(새 항목) ⚡ Instant(즉시) | Typeform에 새 응답이 제출되면 즉시 실행돼요. |

{% hint style="info" %}
즉시 실행되는 트리거예요. 새 폼 응답이 들어오는 순간 하이퍼클래스가 실시간으로 받아 와요.
{% endhint %}

---

### 액션 (하이퍼클래스 → Typeform)

워크플로우를 통해 하이퍼클래스가 Typeform에서 실행할 수 있는 액션이에요.

| 액션 이름 | 설명 |
| --- | --- |
| **Create Empty Form**(빈 폼 만들기) | Typeform에 새 빈 폼을 만들어요. |
| **Duplicate Existing Form**(기존 폼 복제) | 기존 폼의 구조와 질문을 그대로 유지한 채 복사본을 만들어요. |
| **Search Responses In A Form**(폼 응답 검색) | 선택한 Typeform 폼에서 기존 응답을 검색해 가져와요. |

{% hint style="info" %}
이 액션들은 프리미엄 액션이며, 하이퍼클래스의 표준 액션 요금에 따라 과금돼요.
{% endhint %}

---

## 시작하기

워크플로우에서 Typeform 트리거와 액션을 쓰려면 다음 순서로 진행하세요.

1. 하이퍼클래스 워크플로우 빌더를 열어요.
2. 트리거 메뉴나 액션 메뉴에서 "Typeform"을 검색해요.
3. Typeform 계정을 연결해요.
   - 이미 연결돼 있으면 설정 옵션이 바로 보여요.
   - 연결돼 있지 않으면 **Connect Now**(지금 연결)를 클릭하고 OAuth 설정을 마쳐서 Typeform 계정을 연결하세요.

**설정 > 연동**에서도 연결할 수 있어요.

1. **설정 > 연동**으로 이동해요.
2. **Typeform**을 찾아 인증 과정을 완료해요.

연결이 끝나면 자동화 워크플로우에 Typeform 트리거나 액션을 자유롭게 추가할 수 있어요.

---

## Typeform 트리거가 작동하는 방식

Typeform 트리거는 Typeform API의 웹훅을 이용해요. 새 응답(폼 제출)이 들어오면 하이퍼클래스가 그 데이터를 즉시 받아서 설정해 둔 워크플로우를 실행해요.

### 설정 방법

1. 트리거로 **New Entry (Instant)**를 선택해요.
2. 연결할 폼을 선택해요.
3. **Test Trigger**(트리거 테스트)를 클릭해요. 하이퍼클래스가 샘플 응답을 가져와 필드를 매핑할 수 있게 해 줘요.
4. Typeform 필드(예: 이름, 이메일, 응답 내용)를 하이퍼클래스 워크플로우 변수에 매핑해요.

---

## 활용 예시

### 예시 1: Typeform 제출 시 작업을 만들고 팀에 알리기

목표: 누군가 Typeform에 응답을 제출하면 ClickUp 작업을 만들고, 연락처 필드를 업데이트하고, 내부 알림을 보내요.

워크플로우 구성:

- **Trigger**(트리거): Typeform → **New Entry (Instant)**
- **Filter**(필터): **Form Name**(폼 이름) = "고객 온보딩 폼"
- **Actions**(액션):
  - **Create Task**(작업 만들기) (ClickUp)
  - **Update Contact Field**(연락처 필드 업데이트) (하이퍼클래스)
  - **Send Internal Notification**(내부 알림 보내기) (하이퍼클래스)

예를 들어 새 고객이 Typeform에서 "고객 온보딩 폼"을 작성하면 즉시 다음 일이 일어나요. 고객 정보가 담긴 ClickUp 작업이 만들어지고, 하이퍼클래스의 연락처 필드가 최신 정보로 업데이트되고, 내부 팀에 온보딩을 시작하라는 알림이 가요.

![예시 1 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055323343/original/ax9fOQv54xWP3-d6xfAkPdtrk3U0m4cICA.png?1759755610)

---

### 예시 2: Typeform 제출 내용에 따라 조건부로 처리하고 알림 보내기

목표: 새 문서를 자동으로 만들고, 폼 응답 값을 확인해서, Typeform으로 제출된 상품 수에 따라 다른 후속 액션을 실행해요.

워크플로우 구성:

- **Trigger**: Typeform → **New Entry (Instant)**
- **Filter**: **Form Name** = "주문 접수 폼"
- **Actions**:
  - **Create New Document**(새 문서 만들기) (ClickUp)
  - **Condition**(조건): `total_items` 값이 "3"과 같은지 확인
  - **Branch**(분기) – If True(참일 때):
    - **Update Contact Field** (하이퍼클래스)
    - **Send Internal Notification** (하이퍼클래스)
    - **Send Email**(이메일 보내기) (하이퍼클래스)
  - **Branch** – If False(거짓일 때):
    - **End Workflow**(워크플로우 종료)

예를 들어 고객이 Typeform의 "주문 접수 폼"으로 주문을 제출하면, 워크플로우가 주문 내용이 담긴 새 문서를 ClickUp에 만들어요. 고객이 정확히 3개를 주문했다면 하이퍼클래스의 연락처 레코드가 업데이트되고, 운영팀에 내부 알림이 가고, 고객에게 확인 이메일이 발송돼요. 상품 수가 3개가 아니면 추가 작업 없이 워크플로우가 끝나요.

![예시 2 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055323302/original/b2WKgCzFdxO7advNUh3c79jk2ibGVSPT3w.png?1759755600)

---

### 예시 3: 파이프라인 단계가 바뀌면 문서 생성과 알림 자동화하기

목표: 딜의 파이프라인 단계가 바뀌면 기존 폼 응답이 있는지 확인하고, 결과에 따라 문서를 만들거나 폼을 복제해서 팀이나 연락처에 알려요.

워크플로우 구성:

- **Trigger**: Pipeline Stage Changed(파이프라인 단계 변경) (하이퍼클래스 CRM)
- **Filter**: **Pipeline**(파이프라인) = "고객 온보딩 파이프라인"
- **Actions**:
  - **Search Responses in a Form** (Typeform)
  - **Branch** (Responses Found – 응답이 있을 때):
    - **Create New Document** (ClickUp)
    - **Update Contact Field** (하이퍼클래스)
    - **Send Internal Notification** (하이퍼클래스)
    - **Send Email** (하이퍼클래스)
  - **Branch** (Responses Not Found – 응답이 없을 때):
    - **Duplicate Existing Form** (Typeform)
    - **Send Internal Notification** (하이퍼클래스)
    - **Send Email** (하이퍼클래스)

예를 들어 CRM 파이프라인에서 딜이 "온보딩" 단계로 옮겨지면, 워크플로우가 해당 고객과 연결된 Typeform 응답이 있는지 검색해요.

- 응답이 있으면 고객 데이터가 담긴 새 문서를 ClickUp에 만들고, 연락처 레코드를 업데이트하고, 팀과 고객 모두에게 알려요.
- 응답이 없으면 고객이 작성할 수 있도록 온보딩 폼의 복사본을 새로 만들어요. 그다음 팀에 내부 알림을 보내고, 고객에게 작성을 요청하는 이메일을 보내요.

![예시 3 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055323932/original/uJjeoYxQqm7oxf0OKT3u8c6BbwoBF4PRjA.png?1759755870)

---

## 자주 묻는 질문

### 이 연동을 쓰려면 유료 Typeform 계정이 필요한가요?

아니요. 무료 계정과 유료 계정 모두에서 연동이 작동해요. 다만 응답 수 제한이나 브랜딩 제거 같은 일부 기능은 Typeform 요금제에 따라 달라요.

### 이 연동은 모든 하이퍼클래스 사용자가 쓸 수 있나요?

네. 워크플로우와 연동 기능을 쓸 수 있는 모든 계정에서 사용할 수 있어요.

### Typeform 트리거와 액션은 프리미엄인가요?

네. Typeform 트리거와 액션은 프리미엄이며, 실행할 때마다 표준 요금으로 과금돼요.

### 트리거는 얼마나 빨리 반응하나요?

**New Entry** 트리거는 즉시 실행돼요. Typeform에 응답이 제출되고 몇 초 안에 데이터가 워크플로우로 전달돼요.
