---
원문: /support/solutions/articles/155000005812-notion-integration-with-highlevel
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Notion 연동 — 워크플로우 트리거·액션(Notion Integration)

Zapier나 웹훅 없이 하이퍼클래스와 Notion 사이에서 데이터를 주고받을 수 있어요. 이 문서에서는 기본 제공 Notion 연동으로 워크플로우 안에서 페이지 만들기, 데이터베이스 업데이트, 댓글 추가 등을 자동화하는 방법을 안내해요.

## Notion 연동이란?

하이퍼클래스의 Notion 연동은 CRM 워크플로우와 Notion 워크스페이스를 자동으로 이어 줘요. 사내 문서, 클라이언트 포털, 프로젝트 위키 등을 Notion에서 관리한다면 워크플로우를 시작하거나 Notion 작업을 자동화할 수 있어요. 수작업이 줄고 여러 도구에서 정보를 한눈에 보기 쉬워져요.

이 연동이 필요한 이유:

에이전시, 마케터, 소규모 비즈니스는 이 연동으로 다음 작업을 할 수 있어요.

- 고객 데이터를 Notion 데이터베이스에 자동으로 동기화
- CRM 이벤트에 맞춰 작업, 메모, 업데이트 생성
- CRM과 연결된 실시간 지식 베이스와 콘텐츠 저장소 구축

## Notion 연동의 주요 장점

- Zapier/n8n 같은 여러 도구를 하나의 기본 연결로 대체해 구독 비용을 줄일 수 있어요.
- 온보딩 폼, 예약 결과, 파이프라인 변경 내용을 구조화된 Notion 데이터베이스에 바로 동기화할 수 있어요.
- 딜이 다음 단계로 넘어가는 즉시 프로젝트 위키, 제안서, SOP 페이지를 자동으로 만들 수 있어요.
- 양방향으로 연결돼요. Notion에서 수정한 내용으로 워크플로우를 시작하거나, 하이퍼클래스 액션으로 Notion을 업데이트할 수 있어요.
- 5분마다 확인(폴링)하기 때문에 워크스페이스에 부담을 주지 않으면서 Notion에서 시작되는 트리거가 빠르게 반응해요.

## 트리거(Notion → 하이퍼클래스)

Notion에서 일어난 이벤트로 하이퍼클래스 워크플로우를 시작할 수 있어요.

| 트리거 이름 | 설명 |
| --- | --- |
| **New Database Item**(새 데이터베이스 항목) | Notion 데이터베이스에 새 항목이 추가되면 실행돼요 |
| **Updated Database Item**(업데이트된 데이터베이스 항목) | 기존 항목이 수정되면 실행돼요 |
| **Updated Page**(업데이트된 페이지) | Notion 페이지가 업데이트되면 실행돼요 |

{% hint style="info" %}
모든 트리거는 폴링 방식으로 동작해요. 하이퍼클래스가 약 5분마다 Notion에서 변경 사항을 확인하고, 새 데이터를 처리해요.
{% endhint %}

## 액션(하이퍼클래스 → Notion)

워크플로우를 통해 하이퍼클래스가 Notion에서 실행할 수 있는 액션이에요.

| 액션 이름 | 설명 |
| --- | --- |
| **Archive Database Item**(데이터베이스 항목 보관) | Notion에서 선택한 데이터베이스 항목을 보관해요 |
| **Create Database Item**(데이터베이스 항목 만들기) | 선택한 데이터베이스에 새 항목을 추가해요 |
| **Add Content to Page**(페이지에 콘텐츠 추가) | 기존 Notion 페이지 끝에 콘텐츠를 덧붙여요 |
| **Update Database Item**(데이터베이스 항목 업데이트) | 기존 데이터베이스 항목의 필드를 업데이트해요 |
| **Retrieve a Page**(페이지 가져오기) | Notion 페이지와 메타데이터를 가져와요 |
| **Retrieve Block Children**(하위 블록 가져오기) | Notion 블록 아래의 하위 블록(텍스트, 할 일, 토글 등)을 가져와요 |
| **Find Database Item**(데이터베이스 항목 찾기) | 필터로 특정 데이터베이스 항목을 찾아요 |
| **Get Page and Children**(페이지와 하위 항목 가져오기) | 페이지와 그 안에 중첩된 모든 블록을 가져와요 |
| **Find or Create Database Item**(데이터베이스 항목 찾기 또는 만들기) | 항목을 찾고, 없으면 새로 만들어요 |
| **Add Comment**(댓글 추가) | Notion 페이지에 댓글을 남겨요 |
| **Create Page**(페이지 만들기) | 새 Notion 페이지를 만들어요 |
| **Restore Database Item**(데이터베이스 항목 복원) | 이전에 보관한 항목을 다시 활성화해요 |
| **Retrieve Database**(데이터베이스 가져오기) | 데이터베이스의 메타데이터와 스키마를 가져와요 |
| **Get Page Comments**(페이지 댓글 가져오기) | Notion 페이지의 모든 댓글을 가져와요 |
| **Find Page (By Title)**(페이지 찾기(제목 기준)) | 제목으로 페이지를 검색해요 |
| **Find or Create Comment**(댓글 찾기 또는 만들기) | 고유성 기준에 따라 댓글을 찾거나 새로 만들어요 |

## Notion 연동 시작하기

1. 워크플로우에서 검색하세요. 하이퍼클래스 워크플로우 빌더를 열고, 추가하려는 Notion 액션이나 트리거를 검색하세요.

   ![워크플로우 빌더에서 Notion 액션과 트리거를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056474481/original/YJWATrZ5sI3mPaZLjA9b3DsESVv1tGdmpQ.png?1761050196)

2. 계정을 연결하세요. Notion 계정이 이미 연결되어 있으면 설정 옵션이 바로 보여요. 연결되어 있지 않다면 **Connect Now**(지금 연결)를 클릭하고, Notion 인증(OAuth) 과정을 마치세요.

   ![Connect Now 버튼으로 Notion 계정을 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056474590/original/niyMn41_njkwYAqu7XvEvk1NJXXziGoCiw.png?1761050242)

3. 다른 방법으로, **설정 > 연동**으로 이동해 Notion을 찾아 워크스페이스를 연결할 수도 있어요.

   ![설정의 연동 화면에서 Notion을 연결하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056474751/original/BwPIiu2jNYvGNg_Z4h0BwdDROD19-AXLJQ.png?1761050296)

{% hint style="info" %}
연결을 마치면 워크플로우에서 바로 페이지나 데이터베이스 항목을 만들고, 업데이트하고, 동기화할 수 있어요.
{% endhint %}

## Notion 트리거가 동작하는 방식

Notion 트리거는 폴링으로 동작해요. 하이퍼클래스는 5분마다 Notion에 요청을 보내 변경 사항을 확인해요. 조건에 맞는 이벤트(예: 새 데이터베이스 항목, 업데이트된 페이지)를 발견하면 워크플로우가 실행돼요.

설정 방법:

1. 트리거를 선택하세요(예: **New Database Item**).
2. **Trigger Name**(트리거 이름)에 이름을 입력하고 **Test Trigger**(트리거 테스트)를 클릭하세요.
3. 하이퍼클래스가 Notion에서 메타데이터를 가져와요. 덕분에 이후 액션에서 동적 필드 매핑을 쓸 수 있어요.

![Notion 트리거를 선택하고 테스트하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793646/original/ESjlqD-tOXkp8e52BwYogRao7GcA1l5DBQ.png?1754048482)

## 활용 사례 1: 폼 제출로 Notion 문서 만들기

목표: 프로젝트 관리나 온보딩을 위해 폼 제출 내용을 Notion에 모아요.

워크플로우 설정:

- 트리거: **Form Submitted**(폼 제출)
- 필터: **Form Name** = "온보딩 폼"
- 액션:
  - **Create Database Item** (Notion)
  - **Add Comment** (Notion)

예시: 고객이 온보딩 폼을 제출하면 → Notion의 "고객 온보딩 DB"에 새 항목이 만들어지고 → 환영 메시지가 댓글로 추가돼요.

![폼 제출로 Notion 데이터베이스 항목을 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793594/original/THKmE-hrxiDflYuACRcvQhgGsHYyD81p4w.png?1754048433)

## 활용 사례 2: 예약 결과를 Notion 로그에 동기화하기

목표: 추적할 수 있는 미팅 기록을 Notion에 남겨요.

워크플로우 설정:

- 트리거: **Appointment Status Changed**(예약 상태 변경)
- 필터: **Calendar** = "상담"
- 액션:
  - **Update Database Item** (Notion)
  - **Add Content to Page** (Notion)

예시: 리드가 상담에 참석하지 않으면 → 해당 데이터베이스 항목이 업데이트되고 → 후속 메모가 페이지에 덧붙여져요.

![예약 결과를 Notion 로그에 동기화하는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793681/original/exMQB5rrG9UO5KoNDNEeQQJOcQnzbMCe4A.png?1754048511)

## 활용 사례 3: 제안서 페이지 자동 생성하기

목표: 기회가 다음 단계로 넘어가면 맞춤 제안서 페이지를 만들어요.

워크플로우 설정:

- 트리거: **Pipeline Stage Changed**(파이프라인 단계 변경)
- 필터: **Status** = "won"
- 액션:
  - **Create Page** (Notion)
  - **Add Content to Page**
  - **Add Comment**

예시: 딜이 "제안" 단계로 이동하면 → "{{contact.name}}님을 위한 제안서"라는 제목의 Notion 페이지가 만들어지고, 요약 내용과 팀 멘션이 추가돼요.

![제안서 Notion 페이지를 자동으로 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793722/original/pcgqbIB1mwtgJbJ-mymiJQEtWd_yIuaEYw.png?1754048551)

## 자주 묻는 질문

### 이 연동을 쓰려면 Notion 유료 요금제가 필요한가요?
아니요, Notion 무료 요금제에서도 쓸 수 있어요. 다만 팀스페이스나 분석 같은 일부 기능은 유료 구독이 필요할 수 있어요.

### Notion과 연결할 수 있는 워크플로우 수에 제한이 있나요?
워크플로우 수 제한은 하이퍼클래스 요금제에 따라 달라요. 이 연동은 Notion 공식 API 호출 제한도 따라요.

### 하이퍼클래스는 트리거를 위해 Notion을 얼마나 자주 확인하나요?
5분마다 확인해요.

### 기본 제공 연동으로 바꾸면 기존 웹훅이 작동하지 않나요?
아니요. 이전하는 동안에는 웹훅과 기본 제공 연동을 함께 쓸 수 있어요.
