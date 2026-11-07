---
원문: /support/solutions/articles/155000009529-what-are-voice-ai-session-variables-
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 AI 세션 변수란?

음성 AI 세션 변수를 쓰면 하이퍼클래스 에이전트가 통화 중에 받은 정보를 저장해 두고 다시 쓸 수 있어요. 이 문서에서는 세션 변수를 만들고 관리하는 방법과 기본값을 정하는 방법을 설명해요. 그리고 [사용자 지정 액션](voice-ai-custom-actions.md), 프롬프트, SMS 메시지에서 세션 변수를 활용해 더 개인화된 대화를 만드는 방법도 다뤄요.

## 음성 AI 세션 변수란?

음성 AI 세션 변수는 통화 중에 수집한 정보를 저장하고 다시 쓰게 해 주는 기능이에요. 사용자 지정 액션으로 수집한 값은 프롬프트, API 요청, SMS 메시지에 넣을 수 있어요. 그래서 발신자에게 같은 정보를 다시 묻지 않아도 돼요.

변수는 하나의 변수 선택기에서 관리해요. 새 정보를 수집하기 전까지는 기본값을 지정해 둘 수 있어요.

## 세션 변수의 장점

세션 변수를 쓰면 음성 AI 에이전트가 대화의 맥락을 유지하고, 지원되는 작업끼리 정보를 주고받을 수 있어요.

- 수집한 정보 재사용: 한 사용자 지정 액션이 수집한 정보를 다음 작업에서 쓸 수 있어요.
- 대화 개인화: 고객 정보 같은 수집된 값을 프롬프트와 메시지에 넣을 수 있어요.
- 변수 관리 간소화: 변수 선택기 한 곳에서 변수를 만들고, 편집하고, 삭제할 수 있어요.
- 값 자동 업데이트: 통화 중에 수집한 정보가 기본값을 대신해요.
- 동적 SMS 전송: 가장 최근에 수집한 정보를 SMS 메시지에 넣을 수 있어요.

## 세션 변수의 작동 방식

세션 변수는 각각 특정 음성 AI 에이전트에 속해요. 변수 이름 앞에는 `session.` 접두사가 붙고, 하이퍼클래스가 자동으로 붙여 줘요.

예를 들어 `customer_name`이라는 변수를 만들면 `session.customer_name`이 만들어져요. 이 변수는 `{{session.customer_name}}`으로 불러 쓸 수 있어요.

주요 내용은 다음과 같아요.

- 에이전트 하나에 세션 변수를 최대 20개까지 만들 수 있어요.
- 변수 이름은 `session.` 접두사를 포함해 최대 64자까지 쓸 수 있어요.
- 변수에는 기본값을 선택적으로 지정할 수 있어요.
- 지원되는 필드에서는 수집한 값이 기본값보다 우선해요.
- 에이전트를 복제하면 등록된 변수도 함께 복사돼요.

## 세션 변수 만들고 관리하기

세션 변수는 음성 AI 빌더의 변수 선택기에서 바로 만들고 관리할 수 있어요. 변수 선택기 맨 위에 **세션 변수** 폴더가 보여서 쉽게 찾을 수 있어요.

1. **AI 에이전트 > 음성 AI**로 이동해서 에이전트를 열어요. 에이전트를 만드는 방법은 [음성 AI 에이전트 만들기](../how-to-create-voice-ai-agents.md)에서 볼 수 있어요.
2. 변수를 지원하는 필드에서 변수 선택기를 열어요.
3. **커스텀 값** 아래의 **세션 변수**를 선택하고, 변수를 추가하는 옵션을 선택해요.
4. **변수 이름**을 입력하고 선택할 수 있는 **유형**을 고른 뒤, 필요하면 **기본값**을 입력해요.
5. **저장**을 클릭해요.

![변수 선택기에서 세션 변수 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614474/original/IuF9y65LFG7d48dvb0Bgm46tEZFouwv9fg.png?1793370221)

![세션 변수 이름, 유형, 기본값 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614507/original/TdBC5Maq79nFBioa2b1Q7cHdS_MayEgLog.png?1793370243)

이미 만든 변수는 세션 변수 목록에서 편집하거나 삭제할 수 있어요.

## 사용자 지정 액션에서 세션 변수 사용하기

사용자 지정 액션은 API 응답 값을 가져와 등록된 세션 변수에 저장할 수 있어요. 저장된 값은 이후 API 요청이나 에이전트 응대에서 다시 쓸 수 있어요.

### API 응답을 세션 변수에 연결하기

응답 매핑은 API가 돌려준 데이터를 등록된 변수에 연결하는 설정이에요. 이렇게 연결하면 에이전트가 통화 중 나중에 그 정보를 쓸 수 있어요.

1. **커스텀 작업 2.0**을 열거나 새로 만들어요.
2. API 엔드포인트와 필요한 설정을 입력해요.
3. **Test & deploy**(테스트 및 배포)를 열고 **Test webhook**(웹훅 테스트)을 실행해요.
4. **Response Mapping**(응답 매핑)에서 필요한 응답 필드마다 등록된 세션 변수를 선택해요.
5. 작업을 저장해요.

예를 들어 고객 이름이 담긴 API 응답 필드를 `session.customer_name`에 연결할 수 있어요.

![API 응답 필드를 세션 변수에 매핑하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614574/original/VxhXvIOplfXdFZPKm4yaf_RryaL_cPeIhQ.png?1793370299)

![응답 매핑에서 세션 변수 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614679/original/3uyVMB6xmNGStPJlQVd9gPQgSU62Atbmcg.png?1793370338)

### API 요청에서 변수 사용하기

세션 변수는 지원되는 사용자 지정 액션의 URL, 요청 본문 필드, 쿼리 파라미터에도 넣을 수 있어요.

예시는 다음과 같아요.

- **엔드포인트 URL**: `https://api.example.com/customers/{{session.customer_id}}`
- 본문 파라미터: `{{session.service_plan}}`
- 쿼리 파라미터: `{{session.service_address}}`

이 값들은 해당 작업이 실행될 때 실제 값으로 바뀌어요.

![사용자 지정 액션 URL에 세션 변수 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614739/original/fbRdY7oHUaBnqFMJfYl_-yw55tnoDrji9g.png?1793370374)

![요청 본문과 쿼리 파라미터에 세션 변수 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614903/original/jQhZDRR-b3MDoZv_vKmRkbPF4rbiiYMNAA.png?1793370458)

## 프롬프트와 SMS에서 세션 변수 사용하기

변수 선택기에서 세션 변수를 골라 에이전트 프롬프트, 환영 메시지, 음성사서함 메시지, SMS 작업에 넣을 수 있어요. 프롬프트에서 커스텀 값을 쓰는 방법은 [음성 AI 에이전트 프롬프트에서 커스텀 값 사용하기](how-to-use-custom-values-in-voice-ai-agent-prompts.md)를 참고하세요.

SMS 메시지에서는 메시지를 보내는 시점에 변수가 실제 값으로 바뀌어요. 통화 앞부분에서 수집한 값도 포함돼요. 통화 중 작업과 통화 후 작업을 나누는 방법은 [음성 AI에서 통화 중 작업과 통화 후 작업 분리하기](separate-during-and-post-call-actions.md)에서 볼 수 있어요.

SMS 예시:

`Hi {{session.customer_name}}, your appointment is confirmed for {{session.arrival_window}} at {{session.service_address}}.`

SMS 작업은 다음과 같이 설정해요.

1. 에이전트의 **작업** 섹션을 열어요.
2. **SMS 전송** 작업을 추가하거나 편집해요.
3. 변수 선택기를 사용해서 필요한 세션 변수를 **메시지 입력**에 넣어요.
4. 전송 조건을 설정하고 작업을 저장해요.

![SMS 전송 작업의 메시지 입력에 세션 변수 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084614800/original/3ojq-JJvKzC1MDkUHuGhvhZGQDawokeYNw.png?1793370414)

## 자주 묻는 질문

### 세션 변수는 에이전트끼리 공유되나요?
아니요. 에이전트마다 자체 변수 목록이 있어요. 다만 에이전트를 복제하면 등록된 변수는 함께 복사돼요.

### 변수에 값이 들어오지 않으면 어떻게 되나요?
기본값을 설정해 두었다면 수집된 값이 생길 때까지 기본값이 사용돼요.

### 여러 사용자 지정 액션에서 같은 세션 변수를 쓸 수 있나요?
네. 등록된 세션 변수는 지원되는 여러 사용자 지정 액션에서 다시 쓸 수 있어요.

### 통화 중에도 세션 변수 값이 업데이트되나요?
네. 사용자 지정 액션이 새 값을 수집하면, 이후 지원되는 참조 위치에서는 기본값 대신 수집된 값이 사용돼요.
