---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009114-connect-chatgpt-and-codex-to-leadconnector-mcp
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# ChatGPT와 Codex를 하이퍼클래스 MCP에 연결하기

하이퍼클래스 MCP를 쓰면 ChatGPT와 Codex 같은 OpenAI 클라이언트가 Model Context Protocol(MCP)을 통해 지원되는 CRM 데이터와 작업을 안전하게 다룰 수 있어요. 이 문서에서는 하이퍼클래스 MCP의 작동 방식, ChatGPT와 Codex를 연결하는 방법, 연결이 잘 됐는지 확인하는 방법을 안내해요.

ChatGPT와 Codex는 OpenAI 전용 엔드포인트에 OAuth로 연결돼요. 그래서 이 연결을 위해 비공개 연동 토큰을 직접 만들거나 주기적으로 교체할 필요가 없어요. 연결이 접근할 수 있는 서브 계정은 직접 고르고, 요청된 권한도 직접 승인해요.

## 하이퍼클래스 MCP란?

하이퍼클래스 MCP는 호환되는 AI 클라이언트가 지원되는 CRM 데이터와 작업을 안전하게 사용할 수 있게 해 주는 Model Context Protocol 서버예요.

ChatGPT, Codex 등 호환되는 OpenAI 클라이언트는 OpenAI 전용 MCP 엔드포인트로 연결해요.

```
https://services.leadconnectorhq.com/mcp/openai/v2/
```

연결에는 OAuth를 사용해요. 승인 과정에서 하이퍼클래스에 로그인하고, 연결이 접근할 수 있는 서브 계정을 고른 뒤, 요청된 권한을 승인해요.

연결이 끝나면 AI 클라이언트는 OAuth 승인으로 허용된 범위 안에서 지원되는 CRM 작업을 찾아 실행할 수 있어요.

## 주요 장점

하이퍼클래스 MCP는 수백 개의 개별 연동을 만들 필요 없이, 작고 통제된 도구 모음으로 호환되는 OpenAI 클라이언트에 폭넓은 CRM 접근 권한을 제공해요.

- OAuth 인증: 비공개 연동 토큰을 직접 만들거나 교체하지 않고, 하이퍼클래스 로그인과 동의 절차로 연결해요.
- CRM 접근 통제: OAuth 승인에 포함한 권한만 허용해요.
- 서브 계정 통제: 연결이 접근할 수 있는 서브 계정을 직접 골라요.
- 폭넓은 CRM 범위: 현재 하이퍼클래스 MCP 카탈로그 기준으로 38개 CRM 영역에 걸쳐 550개 이상의 활성 작업을 쓸 수 있어요.
- 통합 도구 모음: MCP 도구 4개로 지원되는 CRM 작업을 찾고, 살펴보고, 실행해요.
- 자연어 요청: 개별 API 엔드포인트를 직접 호출하지 않고, ChatGPT나 Codex에 지원되는 CRM 작업을 말로 요청할 수 있어요.

## 준비 사항과 제한 사항

연결하려면 호환되는 OpenAI 클라이언트와, 승인하려는 하이퍼클래스 계정 또는 서브 계정에 대한 접근 권한이 모두 필요해요.

연결하기 전에 다음을 확인하세요.

- 원격 Streamable HTTP MCP 서버를 지원하는 OpenAI 클라이언트를 사용해요.
- 해당 하이퍼클래스 계정에 로그인할 수 있어야 해요.
- 승인하려는 CRM 서브 계정에 접근할 수 있어야 해요.
- OpenAI 클라이언트가 쓸 수 있는 작업은 OAuth 권한에 따라 정해져요.
- ChatGPT 사용 가능 여부와 MCP 기능은 ChatGPT 요금제와 워크스페이스 권한에 따라 달라요.

다음 동작 방식도 알아 두세요.

- OpenAI 전용 엔드포인트는 OAuth를 사용해요.
- 모든 MCP 요청은 한 번에 서브 계정 하나를 대상으로 실행돼요.
- 개별 연결은 서브 계정 하나만 지원해요.
- 에이전시의 다중 서브 계정 연결은 순차적으로 제공되고 있어요. 설치 환경에서 다중 서브 계정 옵션을 쓸 수 있을 때만 표시돼요.
- 승인하지 않은 서브 계정에는 접근할 수 없어요.
- 하이퍼클래스 MCP 활성 카탈로그가 바뀌면 사용할 수 있는 작업도 달라질 수 있어요.
- 민감하거나 되돌릴 수 없는 작업은 추가 확인이나 안전 점검이 필요할 수 있어요.

## 하이퍼클래스 MCP의 작동 방식

하이퍼클래스 MCP는 작은 통합 도구 모음만 제공해요. 덕분에 OpenAI 클라이언트가 수백 개의 개별 도구를 한꺼번에 불러오지 않고도 지원되는 CRM 작업을 찾아 실행할 수 있어요.

통합 MCP 도구 4개는 다음과 같아요.

- `list_locations`: 연결에서 사용할 수 있는 서브 계정 목록을 보여 주거나, 연결된 서브 계정 하나를 알려 줘요.
- `search_operations`: 하려는 작업에 맞는 지원 CRM 작업을 찾아 줘요.
- `describe_operation`: 작업의 입력값, 예시 페이로드, 필요한 권한, 안전 정보를 가져와요.
- `execute_operation`: 승인된 작업을 승인된 서브 계정에서 실행해요.

예를 들어 연결된 OpenAI 클라이언트에 연락처를 찾아 기회를 업데이트하라고 요청하면, 클라이언트가 필요한 작업을 찾고, 요구 사항을 확인하고, 이 통합 도구 모음으로 실행해요.

사용할 수 있는 작업은 OAuth 승인 때 허용한 권한에 따라 달라져요.

## ChatGPT를 하이퍼클래스 MCP에 연결하기

ChatGPT를 연결하면 OAuth 승인으로 허용한 하이퍼클래스 도구를 쓸 수 있는 맞춤형 MCP 앱이 만들어져요.

### 1단계: ChatGPT 접근 권한 확인

ChatGPT 계정과 워크스페이스 권한으로 맞춤형 MCP 앱을 만들거나 사용할 수 있는지 확인하세요.

필요하면 연결을 만들기 전에 ChatGPT 앱 설정에서 **Developer mode**(개발자 모드)를 켜세요.

### 2단계: 하이퍼클래스 앱 만들기

1. 웹에서 ChatGPT를 열고 **설정**을 열어요.
2. **앱**을 선택해요.
3. **만들기**를 선택해요.
4. 앱 이름을 입력해요. 예를 들어 하이퍼클래스처럼 입력하면 돼요.
5. 이 앱이 하이퍼클래스 CRM 연결이라는 것을 알 수 있도록 설명을 입력해요.
6. MCP 서버 엔드포인트를 입력해요.

```
https://services.leadconnectorhq.com/mcp/openai/v2/
```

7. MCP 앱 설정을 계속 진행해요.

![ChatGPT에서 MCP 앱을 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082968023/original/YV0whDmzKYS0pT8dtVXEvJ5AeSD5CdW_6g.png?1791558048)

### 3단계: 연결 스캔 및 승인

1. MCP 도구를 스캔(검색)하는 옵션을 선택해요.
2. 안내가 나타나면 하이퍼클래스 OAuth 승인을 시작해요.
3. 하이퍼클래스 계정에 로그인해요.
4. 연결이 접근할 수 있게 하려는 서브 계정을 선택해요. 선택 가능한 서브 계정이 여러 개일 때는 지원되는 서브 계정 중에서 골라요.
5. 요청된 권한을 확인해요.
6. 연결을 승인해요.
7. 승인이 끝나면 ChatGPT로 돌아와요.
8. 앱 만들기를 마무리해요.

![하이퍼클래스 OAuth 승인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082968598/original/zjGjrd699W-w9EBfigG7x7LkMNGsC4H0fQ.png?1791558394)

### 4단계: ChatGPT에서 하이퍼클래스 사용하기

1. ChatGPT에서 새 대화를 시작해요.
2. **앱** 또는 도구 메뉴를 열어요.
3. 요청에 사용할 하이퍼클래스 앱을 선택해요.
4. 승인된 작업을 사용하는 CRM 요청을 입력해요.

![ChatGPT 대화에서 하이퍼클래스 앱을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082969065/original/G1u65icCZBXN2Pi6taOHEkaGWXC1JLTh0A.png?1791558579)

예를 들어 이렇게 요청할 수 있어요.

```
Find the five most recently created contacts in my connected sub-account.
```

## Codex를 하이퍼클래스 MCP에 연결하기

Codex는 CLI 또는 지원되는 IDE 설정을 통해 같은 OpenAI MCP 엔드포인트에 연결할 수 있어요.

### 방법 1: Codex CLI

하이퍼클래스 MCP 서버를 추가해요.

```
codex mcp add leadconnector --url https://services.leadconnectorhq.com/mcp/openai/v2/
```

그다음 하이퍼클래스 OAuth 절차를 시작해요.

```
codex mcp login leadconnector
```

안내에 따라 하이퍼클래스 로그인, 서브 계정 선택, 권한 승인을 진행하세요.

승인이 끝나면 연결된 하이퍼클래스 CRM 작업이 필요한 요청을 Codex로 보내 보세요.

### 방법 2: Codex IDE

1. Codex IDE 확장 프로그램을 열어요.
2. **gear**(톱니바퀴) 메뉴를 열어요.
3. **MCP servers**(MCP 서버)를 선택해요.
4. **Add server**(서버 추가)를 선택해요.
5. **Streamable HTTP**를 선택해요.
6. 다음 주소를 입력해요.

```
https://services.leadconnectorhq.com/mcp/openai/v2/
```

7. **Authenticate**(인증)를 선택해요.
8. 하이퍼클래스 OAuth 절차를 완료해요.

![Codex IDE에서 하이퍼클래스 OAuth 인증을 진행하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082970645/original/GkP4uCDefITt9j8rb6m2vvhfFiYVP3tsEA.png?1791559430)

9. 접근을 허용할 서브 계정을 선택해요.
10. 요청된 권한을 승인해요.

![Codex IDE에서 서브 계정 접근과 권한을 승인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082970515/original/rFoKzWLJKXB9uJFiPCteHTL5lX5XXA5VOQ.png?1791559380)

## 연결 확인하기

연결을 테스트하면 OpenAI 클라이언트가 승인된 CRM 환경을 인식하고 하이퍼클래스 MCP 도구를 제대로 쓸 수 있는지 확인할 수 있어요.

연결한 뒤에는 쓰기나 삭제 작업보다 먼저 간단한 조회 요청부터 해 보세요.

예를 들어 이렇게 요청해요.

```
Find the five most recently created contacts in my connected sub-account.
```

여러 서브 계정을 승인한 에이전시 연결이라면 요청에 서브 계정 이름을 함께 적으세요.

요청한 서브 계정이 분명하지 않으면 클라이언트가 `list_locations`로 사용할 수 있는 서브 계정을 먼저 확인한 뒤 진행할 수 있어요.

{% hint style="info" %}
연결은 OAuth 승인에 포함된 작업과 서브 계정에만 접근할 수 있어요.
{% endhint %}

## 자주 묻는 질문

### 하이퍼클래스 MCP의 OpenAI 엔드포인트에는 어떤 OpenAI 클라이언트를 연결할 수 있나요?

현재 문서 기준으로 ChatGPT, Codex, 그리고 원격 Streamable HTTP MCP 서버에 연결할 수 있는 호환 OpenAI 클라이언트를 지원해요.

### 비공개 연동 토큰을 만들어야 하나요?

아니요. OpenAI 전용 엔드포인트는 하이퍼클래스 OAuth 로그인과 동의 절차를 사용해요.

### ChatGPT나 Codex에서는 어떤 엔드포인트를 써야 하나요?

다음 주소를 사용하세요.

```
https://services.leadconnectorhq.com/mcp/openai/v2/
```

### CRM 작업은 몇 개나 쓸 수 있나요?

현재 하이퍼클래스 MCP 문서에는 38개 영역에 걸쳐 550개 이상의 활성 작업이 있어요. 내 연결에서 실제로 쓸 수 있는 작업은 OAuth 권한에 따라 달라요.

### 통합 MCP 도구 4개는 무엇인가요?

OpenAI 연결에서는 `list_locations`, `search_operations`, `describe_operation`, `execute_operation`을 제공해요.

### 연결 하나로 서브 계정 여러 개에 접근할 수 있나요?

에이전시의 다중 서브 계정 지원은 순차적으로 제공되고 있어요. 다중 서브 계정 설치 옵션을 쓸 수 있을 때는 서브 계정 여러 개를 승인할 수 있어요. 그래도 모든 요청은 한 번에 서브 계정 하나를 대상으로 실행돼요.

### 승인하지 않은 서브 계정에도 OpenAI 클라이언트가 접근할 수 있나요?

아니요. 연결은 승인할 때 포함한 서브 계정과 권한으로만 제한돼요.
