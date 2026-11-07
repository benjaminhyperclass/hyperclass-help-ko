---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007515-how-to-use-public-apis-in-agent-studio
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 에이전트 스튜디오에서 공개 API 사용하기

**에이전트 스튜디오**(Agent Studio)의 공개 API를 쓰면 하이퍼클래스에 로그인하지 않고도 내 소프트웨어에서 에이전트를 호출하고 관리하고 실행할 수 있어요. 이 문서에서는 공개 API가 무엇인지, 어떤 점이 좋은지, OAuth로 안전하게 사용하는 방법을 설명해요.

## 에이전트 스튜디오 공개 API란?

공개 API(Application Programming Interface)는 외부 애플리케이션이 하이퍼클래스와 안전하게 통신하는 방법이에요. 에이전트 스튜디오의 공개 API를 쓰면 하이퍼클래스 대시보드에 로그인하지 않고도 내 소프트웨어에서 프로덕션 단계의 AI 에이전트를 조회하고 실행할 수 있어요.

내 애플리케이션이 하이퍼클래스 서버에 보안 HTTP 요청을 보내면, 서버가 선택한 에이전트를 실행하고 구조화된 JSON 응답을 돌려줘요. 모든 요청은 특정 서브 계정(location)에 연결되고, OAuth 2.0 베어러 토큰이나 비공개 연동 토큰(PIT, Private Integration Token)으로 인증해야 해요. 공개 API로는 수명 주기 단계가 **프로덕션**이고 상태가 **활성**인 에이전트만 사용할 수 있어요.

## 에이전트 스튜디오 공개 API의 장점

- 모바일 앱, SaaS 플랫폼, 음성 비서, 사내 도구 안에 AI 에이전트를 넣을 수 있어요.
- Zapier, Make, Airflow 같은 외부 자동화에서 복잡한 에이전트 워크플로우를 실행할 수 있어요.
- OAuth 2.0과 범위(scope)가 제한된 액세스 토큰으로 보안을 한곳에서 관리해요.
- PIT 연동을 활용하면 데이터 개인정보 보호 규정을 지키면서 내 환경에서 에이전트를 실행할 수 있어요.
- 구조화된 JSON으로 결과를 돌려주기 때문에, 다른 시스템에서 별도의 자연어 처리 없이 바로 결과를 읽을 수 있어요.

## 공개 API로 에이전트 관리하기

에이전트 스튜디오 공개 API는 이제 에이전트 관리 전반을 지원해요. 에이전트를 만들고, 조회하고, 업데이트하고, 게시하고, 실행하고, 삭제하는 작업을 모두 코드로 할 수 있어요. 에이전트 스튜디오 화면에만 의존하지 않고 API 중심으로 에이전트를 운영할 수 있어요.

에이전트의 핵심 수명 주기를 모두 API로 다룰 수 있어서, 이미 쓰고 있는 플랫폼과 워크플로우 안에서 에이전트 운영을 자동화할 수 있어요.

### 지원하는 에이전트 관리 작업

공개 API로 다음 작업을 할 수 있어요.

- 에이전트 만들기(Create Agent)
- 에이전트 목록 조회(List Agents)
- 에이전트 조회(Get Agent)
- 에이전트 업데이트(Update Agent)
- 에이전트 메타데이터 업데이트(Update Agent Metadata)
- 에이전트 삭제(Delete Agent)
- 프로덕션으로 승격 및 게시(Promote to Production and Publish)
- 에이전트 실행(Execute Agent)

엔드포인트에 따라 필요한 범위(scope), location 정보, 요청 파라미터가 달라질 수 있어요. 일반적으로 조회 작업은 읽기 전용 권한으로 되고, 만들기·업데이트·게시·실행·삭제 작업은 쓰기 권한이 필요해요.

![에이전트 관리 API 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074047814/original/BoUhA7VwsjtVQ-lXiW60JsoXvwXO3M4b1g.png?1781862173)

![에이전트 관리 API 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074048015/original/1R19rn90VcmyS-nfDrnL3Wsp022Wv4ZZFQ.png?1781862296)

![에이전트 관리 API 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074048322/original/_GRGuvHnBfnFx72p3q_6Lr-BXmW7reFPhg.png?1781862414)

![에이전트 관리 API 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074048472/original/ellrdXSweWuUqH3uW4lcWIvd1S4EwqtnuQ.png?1781862499)

![에이전트 관리 API 화면 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074048606/original/-6YeVYxErIydrc3KWuDahc3Hv5LJUZh0dA.png?1781862566)

## 지원 중단(deprecated) 엔드포인트와 이전 안내

예전 에이전트 스튜디오 공개 엔드포인트 중 일부는 하위 호환을 위해 계속 쓸 수 있지만, 지원 중단(deprecated)으로 표시되어 있어요.

새로 개발할 때는 지원 중단된 엔드포인트 대신 현재 엔드포인트를 사용하세요. 지원 중단된 엔드포인트는 이후 API 버전에서 바뀌거나 없어질 수 있어요. 그래서 새 연동은 현재 사용 중인 에이전트 스튜디오 API 경로를 기준으로 만들어야 해요.

지금 지원 중단된 엔드포인트를 쓰고 있다면, 최신 에이전트 스튜디오 API 문서를 확인하고 새 엔드포인트로 옮기세요.

![지원 중단 엔드포인트 표시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074048700/original/PDmT5kGCEJOLXnrGDOQWsdwZxeD0zsPJEg.png?1781862630)

## 에이전트 목록 조회 API(List Agents)

특정 location의 활성 에이전트를 모두 돌려줘요.

- 메서드: `GET /agent-studio/public-api/agents`
- 필수 쿼리 파라미터: `locationId`
- 선택 페이지 나누기 파라미터: `limit`, `offset`
- 주로 이럴 때 써요: 내 앱에 사용 가능한 에이전트를 드롭다운으로 보여 줄 때

## 에이전트 조회 API(Get Agent)

에이전트 한 개의 전체 메타데이터를 가져와요.

- 메서드: `GET /agent-studio/public-api/agents/{agentId}`
- 필수 쿼리 파라미터: `locationId`
- 반환 값: 이름, 상태, 도구 노드, 변수, 수명 주기 단계 등
- 주로 이럴 때 써요: 에이전트를 실행하기 전에 상세 정보를 보여 주거나 변수를 확인할 때

## 에이전트 실행 API(Execute Agent)

에이전트를 실행하고, 전체 결과를 JSON 한 덩어리로 받아요.

- 메서드: `POST /agent-studio/public-api/agents/{agentId}/execute`
- 본문(body): `{ locationId, input, executionId? }`
- 첫 호출에서는 `executionId`를 빼고 보내요. 응답으로 `executionId`가 오면, 다음 호출에 담아 보내서 같은 대화를 이어 갈 수 있어요.
- 주로 이럴 때 써요: "이 PDF를 요약해 줘", "광고 문구를 만들어 줘"처럼 바로 결과가 필요할 때

## OAuth 인증

공개 API는 OAuth 2.0 베어러 토큰을 사용해요. 하이퍼클래스에서 **비공개 연동**을 만들거나 표준 OAuth 흐름으로 액세스 토큰을 받으세요. 토큰은 JWT이며 Authorization 헤더에 넣어야 해요.

```
Authorization: Bearer {access_token}
```

## PIT 연동

서버끼리 호출할 때는 전체 OAuth 대신 비공개 연동 토큰(PIT)을 쓰면 더 간단해요. **설정 > Developer**에서 PIT를 만들고, 필요한 서브 계정으로 범위를 제한한 뒤, OAuth 액세스 토큰과 똑같이 Authorization 헤더에 넣어 쓰세요.

## 에이전트 스튜디오 공개 API 설정하기

다음 순서로 외부 앱을 연결하세요.

1. 서브 계정에서 **AI 에이전트 > 에이전트 스튜디오**를 켜세요. **프로덕션** 단계의 에이전트가 있어야 해요.
2. **설정 > Developer**로 이동해서 **비공개 연동**이나 OAuth 앱을 만드세요.
3. **Client ID**(클라이언트 ID)와 **클라이언트 시크릿**(OAuth), 또는 PIT 값(비공개 연동)을 복사하세요.
4. OAuth를 쓴다면 다음을 진행하세요.
   1. `POST /oauth/token`을 `grant_type=authorization_code`로 호출해서 코드를 액세스 토큰으로 바꾸세요.
   2. 액세스 토큰은 안전하게 보관하고, 필요하면 갱신하세요.
5. 에이전트 목록 조회 API로 연결을 테스트하세요.

   ```
   curl -H "Authorization: Bearer {token}" "https://services.leadconnectorhq.com/agent-studio/public-api/agents?locationId={locationId}"
   ```

6. 응답을 읽어서 실행하려는 `agentId`를 저장하세요.
7. 에이전트를 실행하세요.

   ```
   curl -X POST \
   -H "Authorization: Bearer {token}" \
   -H "Content-Type: application/json" \
   -d '{ "locationId":"abc123", "input":{ "prompt":"Write a Facebook ad for plumbers"} }' \
   https://services.leadconnectorhq.com/agent-studio/public-api/agents/{agentId}/execute
   ```

8. 여러 번 주고받는 대화가 필요하면, 응답으로 받은 `executionId`를 저장하세요.

## 자주 묻는 질문

### 호출 횟수 제한이 있나요?
네. 서브 계정마다 에이전트 스튜디오의 모든 엔드포인트를 합쳐 분당 API 요청 300건으로 제한돼요.

### 응답을 일부씩 스트리밍으로 받을 수 있나요?
아직은 안 돼요. 에이전트 실행 API는 실행이 끝난 뒤 JSON 객체 하나를 돌려줘요.

### 에이전트가 꼭 프로덕션 단계여야 하나요?
네. 수명 주기 단계가 **프로덕션**이고 상태가 **활성**인 에이전트만 공개 API로 사용할 수 있어요.

### locationId를 빼고 요청하면 어떻게 되나요?
API가 HTTP 400("locationId is required")을 돌려줘요.

### 클라이언트 측 JavaScript에서 API를 직접 호출해도 되나요?
권장하지 않아요. 베어러 토큰을 보호하려면 항상 백엔드를 거쳐서(프록시) 요청을 보내세요.

### executionId는 얼마 동안 유효한가요?
`executionId`는 30분 동안 사용하지 않으면 만료돼요. 필요하면 새 세션을 시작하세요.

### OAuth에서 리프레시 토큰을 지원하나요?
네. 표준 OAuth 2.0 `refresh_token` 방식을 따르면, 사용자 조작 없이 액세스 토큰을 갱신할 수 있어요.

### PIT 토큰은 하나의 location에서만 쓸 수 있나요?
네. PIT 토큰은 토큰을 만들 때 선택한 서브 계정으로 범위가 제한돼요.
