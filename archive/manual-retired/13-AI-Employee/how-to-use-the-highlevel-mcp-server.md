---

번역일: 2026-04-06
카테고리: 13-AI-Employee
---

# Hyperclass MCP 서버 사용 방법

이 가이드는 새로운 Hyperclass MCP(Model Context Protocol) 서버를 활용하여 AI 에이전트와 코파일럿이 Hyperclass 데이터와 도구에 원활하게 접근할 수 있도록 하는 방법을 보여드립니다. 모든 기능이 안전하고 표준화된 HTTP 프로토콜을 통해 제공됩니다.

**목차**

- [MCP 서버란 무엇인가요?](#mcp-서버란-무엇인가요)
- [MCP 서버 사용의 주요 장점](#mcp-서버-사용의-주요-장점)
- [사용 가능한 상위 36개 도구](#사용-가능한-상위-36개-도구)
- [도구 호출 예시](#도구-호출-예시)
- [로드맵 및 비전](#로드맵-및-비전)
- [자주 묻는 질문](#자주-묻는-질문)
- [다음 단계](#다음-단계)

---

# MCP 서버란 무엇인가요?

Hyperclass MCP 서버는 AI 에이전트가 SDK나 복잡한 커스텀 연동 없이도 Hyperclass에서 데이터를 읽고 쓸 수 있게 해주는 표준화되고 안전한 프로토콜입니다. 이제 단일 통합 인터페이스를 통해 캘린더, 연락처, 대화, 기회 관리, 결제와 같은 핵심 도구에 에이전트 접근 권한을 부여할 수 있습니다.

## MCP 서버 사용의 주요 장점

AI 에이전트를 Hyperclass에 연결하는 것이 그 어느 때보다 쉽고 안전해졌습니다.

- **표준화된 접근**: 통합 프로토콜을 통해 데이터를 조회하고 업데이트할 수 있습니다.
- **빠른 연동**: SDK가 필요 없으며 HTTP를 지원하는 모든 클라이언트에서 작동합니다.
- **보안**: 세분화된 권한 기반 접근을 위해 PIT(Private Integration Token)를 사용합니다.
- **확장성**: 250개 이상의 도구로 확장할 수 있도록 설계되었습니다.
- **유연성**: Cursor, Windsurf, OpenAI Playground와 같은 인기 클라이언트를 지원합니다.

## 사용 가능한 상위 36개 도구

AI 에이전트가 오늘부터 사용할 수 있는 초기 도구 세트는 다음과 같습니다:

| # | 도구 | 엔드포인트 | 설명 |
|---|------|-----------|------|
| 1 | 캘린더 이벤트 가져오기 | calendars_get-calendar-events | userId, groupId 또는 calendarId를 사용하여 캘린더 이벤트를 가져옵니다. |
| 2 | 예약 노트 가져오기 | calendars_get-appointment-notes | 특정 예약의 노트를 조회합니다. |
| 3 | 모든 할 일 가져오기 | contacts_get-all-tasks | 연락처의 모든 할 일을 조회합니다. |
| 4 | 태그 추가 | contacts_add-tags | 연락처에 태그를 추가합니다. |
| 5 | 태그 제거 | contacts_remove-tags | 연락처에서 태그를 제거합니다. |
| 6 | 연락처 가져오기 | contacts_get-contact | 연락처 세부 정보를 조회합니다. |
| 7 | 연락처 업데이트 | contacts_update-contact | 연락처를 업데이트합니다. |
| 8 | 연락처 업서트 | contacts_upsert-contact | 연락처를 업데이트하거나 생성합니다. |
| 9 | 연락처 생성 | contacts_create-contact | 새 연락처를 생성합니다. |
| 10 | 연락처 가져오기 | contacts_get-contacts | 모든 연락처를 조회합니다. |
| 11 | 대화 검색 | conversations_search-conversation | 대화를 검색/필터/정렬합니다. |
| 12 | 메시지 가져오기 | conversations_get-messages | 대화 ID로 메시지를 조회합니다. |
| 13 | 새 메시지 보내기 | conversations_send-a-new-message | 대화 스레드에 메시지를 보냅니다. |
| 14 | 로케이션 가져오기 | locations_get-location | ID로 로케이션 세부 정보를 가져옵니다. |
| 15 | 커스텀 필드 가져오기 | locations_get-custom-fields | 로케이션의 커스텀 필드 정의를 조회합니다. |
| 16 | 기회 검색 | opportunities_search-opportunity | 조건별로 기회를 검색합니다. |
| 17 | 파이프라인 가져오기 | opportunities_get-pipelines | 모든 기회 파이프라인을 조회합니다. |
| 18 | 기회 가져오기 | opportunities_get-opportunity | ID로 기회 세부 정보를 조회합니다. |
| 19 | 기회 업데이트 | opportunities_update-opportunity | 기회 세부 정보를 업데이트합니다. |
| 20 | ID로 주문 가져오기 | payments_get-order-by-id | 결제 주문 세부 정보를 조회합니다. |
| 21 | 거래 내역 목록 | payments_list-transactions | 페이지네이션된 거래 목록을 조회합니다. |
| 22 | 블로그 URL 슬러그 확인 | blogs_check-url-slug-exists | 블로그 게시물 발행 전 필요한 블로그 슬러그를 확인합니다. |
| 23 | 블로그 포스트 업데이트 | blogs_update-blog-post | 주어진 블로그 사이트의 블로그 포스트를 업데이트합니다. |
| 24 | 블로그 포스트 생성 | blogs_create-blog-post | 주어진 블로그 사이트에 블로그 포스트를 생성합니다. |
| 25 | 블로그 작성자 가져오기 | blogs_get-all-blog-authors-by-location | 주어진 로케이션 ID의 블로그 작성자를 가져옵니다. |
| 26 | 블로그 카테고리 가져오기 | blogs_get-all-categories-by-location | 주어진 로케이션 ID의 블로그 카테고리를 가져옵니다. |
| 27 | 블로그 ID로 포스트 가져오기 | blogs_get-blog-post | 블로그 ID를 사용하여 주어진 블로그 사이트의 포스트를 가져옵니다. |
| 28 | 로케이션별 블로그 가져오기 | blogs_get-blogs | 로케이션 ID를 사용하여 블로그를 가져옵니다. |
| 29 | 이메일 템플릿 생성 | emails_create-template | 새 템플릿을 생성합니다. |
| 30 | 이메일 템플릿 가져오기 | emails_fetch-template | 로케이션 ID로 이메일 템플릿을 조회합니다. |
| 31 | 소셜 미디어 계정 가져오기 | socialmediaposting_get-account | 계정 및 그룹 목록을 가져옵니다. |
| 32 | 소셜 미디어 통계 가져오기 | socialmediaposting_get-social-media-statistics | 여러 소셜 미디어 계정의 분석 데이터를 조회합니다. |
| 33 | 소셜 미디어 포스트 생성 | socialmediaposting_create-post | 지원되는 모든 플랫폼에 포스트를 생성합니다. |
| 34 | 소셜 미디어 포스트 가져오기 | socialmediaposting_get-post | 소셜 미디어 포스트를 가져옵니다. |
| 35 | 소셜 미디어 포스트 목록 가져오기 | socialmediaposting_get-posts | 소셜 미디어 포스트 목록을 가져옵니다. |
| 36 | 소셜 미디어 포스트 업데이트 | socialmediaposting_edit-post | 소셜 미디어 포스트를 편집합니다. |

## MCP 서버 설정 방법

### 1단계: 에이전트/클라이언트 구성

에이전트 구성에 MCP 엔드포인트와 헤더를 추가하세요:

```json
{
  "mcpServers": {
    "prod-ghl-mcp": {
      "url": "https://services.leadconnectorhq.com/mcp/",
      "headers": {
        "Authorization": "Bearer <your-token>",
        "locationId": "<sub-account-id>"
      }
    }
  }
}
```

### 2단계: PIT(Private Integration Token) 발급받기

- Hyperclass 로케이션에서 `Settings(설정) → Private Integrations(프라이빗 연동)`으로 이동합니다.
- `Create New Integration(새 연동 만들기)`를 클릭합니다.
- 필요한 스코프를 선택합니다(아래 목록 참조).
- 토큰을 복사하여 안전하게 보관합니다.

#### 필수 스코프

PIT에 다음 스코프가 포함되어야 합니다:

- View/Edit Contacts (연락처 보기/편집)
- View/Edit Conversations (대화 보기/편집)
- View/Edit Conversation Messages (대화 메시지 보기/편집)
- View/Edit Opportunities (기회 보기/편집)
- View Calendars & Calendar Events (캘린더 및 캘린더 이벤트 보기)
- View Locations (로케이션 보기)
- View Payment Orders & Transactions (결제 주문 및 거래 보기)
- View Custom Fields (커스텀 필드 보기)
- View Forms (폼 보기)
- Check Blog Post Slug (블로그 포스트 슬러그 확인)
- Update Blog Post (블로그 포스트 업데이트)
- Create Blog Post (블로그 포스트 생성)
- View Blog Authors (블로그 작성자 보기)
- View Blog Categories (블로그 카테고리 보기)
- blogspostsreadonly (블로그 포스트 읽기 전용)
- blogslistreadonly (블로그 목록 읽기 전용)
- Create, Update and Delete Email Templates (이메일 템플릿 생성, 업데이트 및 삭제)
- View Email Templates (이메일 템플릿 보기)
- View Social Media Accounts (소셜 미디어 계정 보기)
- View Social Media Statistics (소셜 미디어 통계 보기)
- Edit Social Media Posts (소셜 미디어 포스트 편집)
- View Social Media Posts (소셜 미디어 포스트 보기)

### 3단계: 구축 시작!

이제 에이전트가 자연어 지시사항을 사용하여 도구를 호출할 수 있으며, 이는 MCP를 통해 안전한 API 호출로 원활하게 변환됩니다.

## 도구 호출 예시

Python 예시:

```python
import requests

headers = {
    "Authorization": "Bearer YOUR_PIT_TOKEN",
    "locationId": "YOUR_LOCATION_ID"
}

data = {
    "tool": "contacts_get-contact",
    "input": {
        "contactId": "abc123"
    }
}

response = requests.post(
    "https://services.leadconnectorhq.com/mcp/",
    headers=headers,
    json=data
)

print(response.json())
```

## 로드맵 및 비전

현재 MCP 릴리스는 시작일 뿐입니다. 로드맵에는 다음이 포함됩니다:

- 타겟 워크플로우를 위한 특정 서비스 전용 개별 MCP 서버
- 네이티브 HTTP 지원이 없는 클라이언트(예: Claude Desktop)를 지원하는 npx 패키지
- 고급 인증 플로우를 위한 OAuth 지원
- AI 에이전트를 위한 진정한 통합 오케스트레이터 레이어를 만들기 위한 250개 이상 도구로의 확장
- Hyperclass의 모든 모듈에서 비즈니스 프로세스의 완전한 자동화 활성화

---

## 자주 묻는 질문

**Q: OpenAI Playground나 Claude와 함께 사용할 수 있나요?**
A: 네! HTTP 요청을 지원하는 모든 클라이언트가 MCP와 연동할 수 있습니다.

**Q: SDK를 설치해야 하나요?**
A: SDK는 필요 없습니다. MCP는 표준 HTTP 프로토콜을 사용합니다.

**Q: 데이터가 안전한가요?**
A: 네. 데이터 접근은 PIT를 통해 완전히 범위가 지정되며 HTTPS를 통해 보안됩니다.

**Q: 에이전트가 사용할 수 있는 도구를 제한할 수 있나요?**
A: 네. PIT에서 스코프를 제한하여 접근을 제어할 수 있습니다.

**Q: 새로운 도구나 엔드포인트가 필요하면 어떻게 하나요?**
A: 피드백을 보내주세요! 사용 가능한 도구 세트를 적극적으로 확장하고 있습니다.

### 다음 단계

- PIT를 생성하고 스코프를 구성하세요.
- MCP 엔드포인트로 AI 에이전트나 클라이언트 구성을 업데이트하세요.
- 에이전트 기반 자동화 및 연동을 지금 바로 구축하기 시작하세요!
- 향후 확장과 새로운 도구 지원을 위한 피드백을 제공해 주세요.

---
*원문 최종 수정: Mon, 29 Dec, 2025 at 5:36 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*