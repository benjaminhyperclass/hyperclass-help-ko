---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000005812-notion-integration-with-highlevel
번역일: 2026-08-11
카테고리: 07-워크플로우 > 시작하기
---

# 하이퍼클래스와 Notion 연동하기

Zapier나 웹훅(Webhook) 없이도 하이퍼클래스와 Notion 사이에서 손쉽게 데이터를 주고받을 수 있어요. 이 가이드에서는 새로운 네이티브 Notion 연동 기능이 워크플로우(Workflow) 안에서 페이지 생성, 데이터베이스 업데이트, 댓글 작성 등을 어떻게 자동화하는지 알려드릴게요.

---

**목차**

- [하이퍼클래스와 Notion 연동이란?](#What-is-Notion-Integration-with-하이퍼클래스?)
- [Notion 연동의 주요 장점](#Key-Benefits-of-Notion-Integration)
- [트리거: Notion → 하이퍼클래스](#Triggers%3A-Triggers-(Notion-%E2%86%92-하이퍼클래스))
- [액션: 하이퍼클래스 → Notion](#Actions-(하이퍼클래스-%E2%86%92-Notion))
- [Notion 연동 시작하기](#Getting-Started-with-Notion)
- [Notion 트리거 작동 방식](#How-Notion-Triggers-Work)
- [활용 사례 1: 폼 제출로 Notion 문서 생성하기](#Use-Case-1%3A-Create-Notion-Docs-from-Form-Submissions)
- [활용 사례 2: 예약 결과를 Notion 로그와 동기화하기](#Use-Case-2%3A-Sync-Appointment-Outcomes-to-Notion-Logs)
- [활용 사례 3: 제안서 페이지 자동 생성하기](#Use-Case-3%3A-Auto-Generate-Proposal-Pages)
- [자주 묻는 질문](#Frequently-Asked-Questions)

---

## **하이퍼클래스와 Notion 연동이란?**

하이퍼클래스의 Notion 연동(Integration)을 사용하면 CRM 워크플로우와 강력한 Notion 워크스페이스 플랫폼 사이에서 자동화를 매끄럽게 구현할 수 있어요. 내부 문서 관리, 클라이언트 포털(Client Portal), 동적인 프로젝트 위키 등 무엇을 관리하든 이 연동 기능을 통해 워크플로우를 트리거하거나 Notion 액션을 자동화해서 수작업을 줄이고 여러 도구 간의 가시성을 높일 수 있어요.

왜 중요할까요?

이 연동 기능을 통해 에이전시(Agency), 마케터, 소상공인은 다음과 같은 일을 할 수 있어요:

- 고객 데이터를 Notion 데이터베이스에 자동으로 동기화
- CRM 이벤트를 기반으로 할 일(Task), 노트, 업데이트를 자동 생성
- CRM 기반의 실시간 지식 베이스(Knowledge Base)와 콘텐츠 저장소 구축

---

## **Notion 연동의 주요 장점**

- Zapier/n8n 같은 외부 도구 조합을 하나의 네이티브 연동으로 대체해서 구독 비용을 절감할 수 있어요.
- 온보딩(Onboarding) 폼, 예약 결과, 파이프라인(Pipeline) 변경 사항을 구조화된 Notion 데이터베이스에 바로 동기화할 수 있어요.
- 거래(Deal)가 진행되는 즉시 프로젝트 위키, 제안서, SOP 페이지를 자동으로 생성할 수 있어요.
- 양방향 소통: Notion 편집으로 워크플로우를 트리거하거나, 하이퍼클래스 액션으로 Notion 업데이트를 실행할 수 있어요.
- 5분 간격 폴링(Polling)으로 워크스페이스에 과부하를 주지 않으면서도 Notion 기반 트리거가 빠르게 반응하도록 유지해요.

---

## **트리거: Notion → 하이퍼클래스**

다음은 하이퍼클래스에서 워크플로우를 시작시킬 수 있는 Notion 이벤트들이에요:

| 트리거 이름 | 설명 |
|---|---|
| New Database Item (새 데이터베이스 항목) | Notion 데이터베이스에 새 항목이 추가되면 실행돼요 |
| Updated Database Item (데이터베이스 항목 업데이트) | 기존 항목이 수정되면 실행돼요 |
| Updated Page (페이지 업데이트) | Notion 페이지가 업데이트되면 실행돼요 |

참고: 모든 트리거는 폴링(Polling) 방식으로 작동해요. 하이퍼클래스는 약 5분마다 Notion의 변경 사항을 확인하고, 새 데이터를 처리해요.

---

## **액션: 하이퍼클래스 → Notion**

다음은 하이퍼클래스가 워크플로우를 통해 Notion에서 실행할 수 있는 액션들이에요:

| 액션 이름 | 설명 |
|---|---|
| Archive Database Item (데이터베이스 항목 보관) | Notion에서 선택한 데이터베이스 항목을 보관해요 |
| Create Database Item (데이터베이스 항목 생성) | 선택한 데이터베이스에 새 항목을 추가해요 |
| Add Content to Page (페이지에 콘텐츠 추가) | 기존 Notion 페이지에 콘텐츠를 덧붙여요 |
| Update Database Item (데이터베이스 항목 업데이트) | 기존 데이터베이스 항목의 필드를 업데이트해요 |
| Retrieve a Page (페이지 조회) | Notion 페이지와 메타데이터를 가져와요 |
| Retrieve Block Children (하위 블록 조회) | Notion 블록 하위의 자식 블록(텍스트, 할 일, 토글 등)을 가져와요 |
| Find Database Item (데이터베이스 항목 찾기) | 필터를 사용해서 특정 데이터베이스 항목을 찾아요 |
| Get Page and Children (페이지 및 하위 항목 조회) | 페이지와 그 안의 모든 중첩 블록을 가져와요 |
| Find or Create Database Item (데이터베이스 항목 찾기 또는 생성) | 항목을 찾거나, 없으면 새로 생성해요 |
| Add Comment (댓글 추가) | Notion 페이지에 댓글을 게시해요 |
| Create Page (페이지 생성) | 새 Notion 페이지를 만들어요 |
| Restore Database Item (데이터베이스 항목 복원) | 이전에 보관 처리된 항목을 다시 활성화해요 |
| Retrieve Database (데이터베이스 조회) | 데이터베이스의 메타데이터와 스키마를 가져와요 |
| Get Page Comments (페이지 댓글 조회) | Notion 페이지의 모든 댓글을 가져와요 |
| Find Page (By Title) (제목으로 페이지 찾기) | 제목을 사용해서 페이지를 검색해요 |
| Find or Create Comment (댓글 찾기 또는 생성) | 고유 조건을 기준으로 댓글을 찾거나 새로 생성해요 |

---

## **Notion 연동 시작하기**

1. **워크플로우에서 검색하기:** 하이퍼클래스 워크플로우 빌더를 열고 추가하고 싶은 Notion 액션이나 트리거를 검색하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056474481/original/YJWATrZ5sI3mPaZLjA9b3DsESVv1tGdmpQ.png?1761050196)

2. **계정 연결하기:** Notion 계정이 이미 연결되어 있다면 바로 설정 옵션이 표시돼요. 연결되어 있지 않다면 Connect Now(지금 연결하기)를 클릭하고 Notion 인증 절차(OAuth 방식)를 완료하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056474590/original/niyMn41_njkwYAqu7XvEvk1NJXXziGoCiw.png?1761050242)

3. **다른 방법으로 연결하기:** `Settings(설정) → Integrations(연동)` 메뉴로 이동하세요. Notion을 찾아서 워크스페이스를 연결하면 돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056474751/original/BwPIiu2jNYvGNg_Z4h0BwdDROD19-AXLJQ.png?1761050296)

연결이 완료되면 워크플로우에서 바로 페이지나 데이터베이스 항목을 생성, 업데이트, 동기화할 수 있어요.

---

## **Notion 트리거 작동 방식**

Notion 트리거는 폴링(Polling) 방식으로 작동해요. 5분마다 하이퍼클래스가 Notion에 요청을 보내서 변경 사항이 있는지 확인해요. 조건에 맞는 이벤트(예: 새 데이터베이스 항목 추가, 페이지 업데이트 등)가 감지되면 워크플로우가 실행돼요.

**설정 방법:**

- 트리거를 선택하세요 (예: New Database Item).
- 트리거 이름을 입력하고 **Test Trigger(트리거 테스트)**를 클릭하세요.
- 하이퍼클래스가 Notion에서 메타데이터를 가져와서, 이후 액션에서 동적 필드 매핑이 가능하도록 준비해줘요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793646/original/ESjlqD-tOXkp8e52BwYogRao7GcA1l5DBQ.png?1754048482)

---

## **활용 사례 1: 폼 제출로 Notion 문서 생성하기**

**목표:** 프로젝트 추적이나 온보딩을 위해 폼(Form) 제출 내용을 Notion에 저장하기

**워크플로우 설정:**

- **트리거:** Form Submitted (폼 제출)
- **필터:** 폼 이름 = "Onboarding Form"
- **액션:**
  - Create Database Item (Notion)
  - Add Comment (Notion)

예시: 고객이 온보딩 폼을 제출하면 → Notion의 "Client Onboarding DB" 데이터베이스에 새 항목이 생성되고 → 환영 메시지가 댓글로 추가돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793594/original/THKmE-hrxiDflYuACRcvQhgGsHYyD81p4w.png?1754048433)

---

## **활용 사례 2: 예약 결과를 Notion 로그와 동기화하기**

**목표:** Notion에서 추적 가능한 미팅 기록 관리하기

**워크플로우 설정:**

- **트리거:** Appointment Status Changed (예약 상태 변경)
- **필터:** 캘린더 = "Consultations"
- **액션:**
  - Update Database Item (Notion)
  - Add Content to Page (Notion)

예시: 리드(Lead)가 상담 예약에 불참하면 → 관련 데이터베이스 항목이 업데이트되고 → 후속 조치 노트가 페이지에 추가돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793681/original/exMQB5rrG9UO5KoNDNEeQQJOcQnzbMCe4A.png?1754048511)

---

## **활용 사례 3: 제안서 페이지 자동 생성하기**

**목표:** 기회(Opportunity)가 진행될 때 맞춤형 제안서 페이지 생성하기

**워크플로우 설정:**

- **트리거:** Pipeline Stage Changed (파이프라인 단계 변경)
- **필터:** 상태 = "won" (성사)
- **액션:**
  - Create Page (Notion)
  - Add Content to Page
  - Add Comment

예시: 거래(Deal)가 "Proposal(제안)" 단계로 이동하면 → 요약 내용과 팀원 멘션이 포함된 "Proposal for {{contact.name}}" 제목의 Notion 페이지가 생성돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793722/original/pcgqbIB1mwtgJbJ-mymiJQEtWd_yIuaEYw.png?1754048551)

---

## **자주 묻는 질문**

**Q: 이 연동 기능을 사용하려면 Notion 유료 요금제가 필요한가요?**
아니요, 이 연동 기능은 Notion 무료 요금제에서도 작동해요. 다만 팀스페이스(Teamspace)나 분석 기능처럼 일부 기능은 유료 구독이 필요할 수 있어요.

**Q: Notion과 연결된 워크플로우 개수에 제한이 있나요?**
워크플로우 개수 제한은 가입하신 하이퍼클래스 요금제에 따라 달라져요. 또한 이 연동 기능은 Notion 공식 API의 요청 제한(Rate Limit)도 함께 적용받아요.

**Q: 하이퍼클래스는 얼마나 자주 Notion의 트리거 업데이트를 확인하나요?**
5분마다 확인해요.

**Q: 네이티브 연동으로 전환하면 기존 웹훅(Webhook)이 작동을 멈추나요?**
아니요. 마이그레이션(전환)하는 동안 웹훅과 네이티브 연동 기능을 동시에 함께 사용할 수 있어요.

---
*원문 최종 수정: 2025년 10월 21일*
*Hyperclass 사용 가이드 — hyperclass.ai*