---

번역일: 2026-04-07
카테고리: AI 직원 > AI 직원
---

# 에이전트 스튜디오에서 Public API 사용하는 방법

AI 에이전트 스튜디오용 Public API를 사용하면 Hyperclass에 로그인하지 않고도 자체 소프트웨어에서 Hyperclass 에이전트를 호출하고 관리하고 실행할 수 있습니다. 이 가이드에서는 API가 무엇인지, 왜 중요한지, OAuth를 사용해 안전하게 활용하는 방법을 설명합니다.

---

**목차**

- [에이전트 스튜디오 Public API란?](#에이전트-스튜디오-public-api란)
- [에이전트 스튜디오 Public API의 주요 장점](#에이전트-스튜디오-public-api의-주요-장점)
- [에이전트 목록 API](#에이전트-목록-api)
- [에이전트 조회 API](#에이전트-조회-api)
- [에이전트 실행 API](#에이전트-실행-api)
- [OAuth 인증](#oauth-인증)
- [PIT 연동](#pit-연동)
- [에이전트 스튜디오 Public API 설정 방법](#에이전트-스튜디오-public-api-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **에이전트 스튜디오 Public API란?**

Public API(Application Programming Interface)는 외부 애플리케이션이 Hyperclass와 안전하게 통신할 수 있는 방법입니다. 에이전트 스튜디오에서 Public API를 사용하면 Hyperclass 대시보드에 로그인하지 않고도 소프트웨어에서 프로덕션 준비가 완료된 AI 에이전트를 프로그래밍 방식으로 목록 조회, 검색, 실행할 수 있습니다.

애플리케이션이 Hyperclass 서버에 안전한 HTTP 요청을 보내면, 선택한 에이전트가 실행되고 구조화된 JSON 응답을 반환합니다. 각 요청은 특정 하위 계정(로케이션)에 연결되며, OAuth 2.0 Bearer 토큰 또는 Private Integration Token(PIT)을 사용한 적절한 인증이 포함되어야 합니다. 프로덕션 라이프사이클 단계에서 활성 상태인 에이전트만 Public API를 통해 액세스할 수 있습니다.

---

## **에이전트 스튜디오 Public API의 주요 장점**

- 모바일 앱, SaaS 플랫폼, 음성 어시스턴트 또는 내부 도구에 AI 에이전트를 임베드할 수 있습니다.

- 외부 자동화 도구(Zapier, Make, Airflow 등)에서 복잡한 에이전트 워크플로우를 트리거할 수 있습니다.

- OAuth 2.0과 범위 지정 액세스 토큰으로 보안을 중앙화할 수 있습니다.

- PIT 연동을 활용해 데이터 프라이버시 규칙을 준수하면서 자체 환경에서 에이전트를 실행할 수 있습니다.

- 풍부하고 구조화된 JSON을 반환하므로 다운스트림 시스템이 추가 NLP 없이도 결과를 파싱할 수 있습니다.

---

## **에이전트 목록 API**

이 엔드포인트는 특정 로케이션의 모든 활성 에이전트를 반환합니다.

- **메서드:** GET /agent-studio/public-api/agents

- 필수 쿼리 매개변수: locationId

- 선택적 페이지네이션: limit, offset

- **일반적인 사용 사례:** 앱에서 사용 가능한 에이전트의 드롭다운을 표시할 때

---

## **에이전트 조회 API**

단일 에이전트에 대한 전체 메타데이터를 검색합니다.

- **메서드:** GET /agent-studio/public-api/agents/{agentId}

- 필수 쿼리 매개변수: locationId

- **반환값:** 이름, 상태, 도구 노드, 변수, 라이프사이클 단계 등

- **일반적인 사용 사례:** 실행 전에 에이전트 세부사항을 표시하거나 변수를 검사할 때

---

## **에이전트 실행 API**

에이전트를 실행하고 완전한 출력을 하나의 JSON 페이로드로 받습니다.

- **메서드:** POST /agent-studio/public-api/agents/{agentId}/execute

- **본문:** { locationId, input, executionId? }

- 첫 번째 호출에서는 executionId를 생략하면, 응답에서 executionId를 반환하므로 후속 호출에서 동일한 대화 스레드를 이어갈 수 있습니다.

- **일반적인 사용 사례:** 즉시 결과를 전달할 때 (예: "이 PDF를 요약해줘" 또는 "광고 카피를 생성해줘")

---

## **OAuth 인증**

Public API는 OAuth 2.0 Bearer 토큰을 사용합니다. Hyperclass에서 Private Integration을 생성하거나 표준 OAuth 플로우를 사용하여 액세스 토큰을 얻으세요. 토큰은 Authorization 헤더에 포함해야 하는 JWT입니다:

Authorization: Bearer {access_token}

---

## **PIT 연동**

Private Integration Token(PIT)은 서버 간 호출이 필요할 때 전체 OAuth 대신 사용할 수 있는 간편한 대안입니다. Hyperclass 개발자 설정(Developer Settings)에서 PIT를 생성하고, 필요한 하위 계정에 범위를 지정한 다음, OAuth 액세스 토큰처럼 Authorization 헤더에 포함하세요.

---

## **에이전트 스튜디오 Public API 설정 방법**

외부 앱을 연결하려면 다음 단계를 따르세요:

1. 하위 계정에서 AI 직원(AI Agents) → 에이전트 스튜디오(Agent Studio)를 활성화하세요 ("프로덕션" 상태의 에이전트가 있어야 함).

2. 설정(Settings) → 개발자(Developer)로 이동하여 Private Integration 또는 OAuth 앱을 생성하세요.

3. 클라이언트 ID와 클라이언트 시크릿(OAuth) 또는 PIT 값(Private Integration)을 복사하세요.

OAuth의 경우:
- a. grant_type=authorization_code로 POST /oauth/token을 호출하여 코드를 액세스 토큰으로 교환하세요.
- b. 액세스 토큰을 안전하게 저장하고 필요에 따라 새로 고치세요.

4. 에이전트 목록으로 연결을 테스트하세요:

```
curl -H "Authorization: Bearer {token}" "https://services.leadconnectorhq.com/agent-studio/public-api/agents?locationId={locationId}"
```

5. 응답을 파싱하고 실행하려는 agentId를 저장하세요.

6. 에이전트를 실행하세요:

```
curl -X POST \
-H "Authorization: Bearer {token}" \
-H "Content-Type: application/json" \
-d '{ "locationId":"abc123", "input":{ "prompt":"배관공을 위한 페이스북 광고를 작성해줘"} }' \
https://services.leadconnectorhq.com/agent-studio/public-api/agents/{agentId}/execute
```

7. 다중 턴 대화가 필요한 경우 반환된 executionId를 저장하세요.

---

## **자주 묻는 질문**

**Q: 요청 제한이 있나요?**
네. 각 하위 계정은 모든 에이전트 스튜디오 엔드포인트에서 분당 300회의 API 요청으로 제한됩니다.

**Q: 부분 응답을 스트리밍할 수 있나요?**
아직 지원하지 않습니다. 에이전트 실행 엔드포인트는 현재 완료 후 단일 JSON 객체를 반환합니다.

**Q: 에이전트가 프로덕션 상태여야 하나요?**
네. 프로덕션 라이프사이클 단계에서 상태가 "활성"인 에이전트만 Public API를 통해 액세스할 수 있습니다.

**Q: locationId를 생략하면 어떻게 되나요?**
API가 HTTP 400 ("locationId is required") 오류를 반환합니다.

**Q: 클라이언트 측 JavaScript에서 API를 호출할 수 있나요?**
권장하지 않습니다. Bearer 토큰을 보호하기 위해 항상 백엔드에서 요청을 프록시하세요.

**Q: executionId는 얼마나 오래 유효한가요?**
실행 ID는 30분의 비활성 시간 후 만료됩니다. 필요한 경우 새 세션을 시작하세요.

**Q: OAuth가 리프레시 토큰을 지원하나요?**
네. 사용자 상호작용 없이 액세스 토큰을 갱신하려면 표준 OAuth 2.0 refresh_token grant를 따르세요.

**Q: PIT 토큰이 단일 로케이션으로 제한되나요?**
네. PIT 토큰은 토큰을 생성할 때 선택한 하위 계정으로 범위가 제한됩니다.

---
*원문 최종 수정: Tue, 17 Mar, 2026 at 4:09 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*