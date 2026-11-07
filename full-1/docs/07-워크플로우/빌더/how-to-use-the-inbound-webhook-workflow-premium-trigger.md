---
원문: https://help.gohighlevel.com/support/solutions/articles/48001237383-how-to-use-the-inbound-webhook-workflow-premium-trigger
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 프리미엄 트리거 — Inbound Webhook(인바운드 웹훅) 사용하기

외부 시스템이 보낸 데이터를 받아 워크플로우를 시작하는 프리미엄 트리거예요. 이 문서에서는 Inbound Webhook 트리거를 설정하고, 받은 데이터를 워크플로우 액션에서 쓰는 방법을 설명해요.

[동영상](https://www.youtube.com/embed/1wxkzYS3vPI?&wmode=opaque)

Inbound Webhook을 쓰면 외부 시스템이 GET, POST, PUT 같은 HTTP 요청으로 데이터를 자동으로 보내 올 수 있어요. 그래서 CRM 연동이 쉬워지고, 여러 플랫폼과 도구 사이의 데이터 전달과 워크플로우 처리가 실시간으로 이어져요.

```
- 모든 요금제($97, $970, $297, $2970, $497, $4970)의 에이전시가 하이퍼클래스 프리미엄 트리거 & 액션을 사용할 수 있어요.

- 에이전시 설정에서 프리미엄 액션 & 트리거를 켜면, 기존 서브 계정과 새 서브 계정 모두 100회 무료 실행이 제공돼요.

- 기존 서브 계정에서 실행 비용이 쌓이지 않게 하려면, 에이전시 보기에서 서브 계정마다 재청구(rebilling)를 직접 켜야 해요.

- SaaS 구성기에서 프리미엄 액션을 켜 두었다면, 새로 만든 서브 계정은 하이퍼클래스 프리미엄 액션 & 트리거에 자동으로 등록돼요. 에이전시가 따로 할 일은 없어요.
```

## Inbound Webhook이란?

Inbound Webhook은 외부 시스템의 데이터를 CRM으로 자동으로 전달하는 기능이에요. 외부 시스템에서 이벤트가 생기면, CRM의 트리거에 연결된 고유 URL로 HTTP 요청(POST, GET, PUT)이 전송되고 워크플로우가 시작돼요. 이렇게 실시간으로 데이터가 넘어오기 때문에 여러 플랫폼과 도구를 오가는 업무가 한결 매끄러워져요.

Inbound Webhook으로 업무를 자동화하면 수작업과 사람의 실수가 줄고, 효율과 생산성이 올라가요. 중요한 데이터가 여러 시스템에 동기화되어 있으니 팀 간 협업도 쉬워져요. 그 결과 더 나은 의사결정, 고객 만족, 사업 성과로 이어질 수 있어요.

### 어떤 경우에 쓰면 좋을까요?

Inbound Webhook은 여러 상황에서 CRM 기능을 넓히고 워크플로우를 자동화하는 데 쓸 수 있어요. 대표적인 사례를 예시와 함께 소개할게요.

#### 이커머스 주문 연동

온라인 스토어를 운영하면서, 고객이 주문할 때마다 CRM에 주문 정보를 업데이트하고 싶은 경우예요. CRM에 Inbound Webhook을 만들어 두면 새 주문이 생길 때마다 이커머스 플랫폼의 데이터를 받을 수 있어요.

예시: 이커머스 플랫폼이 웹훅 URL로 HTTP POST 요청을 보내요. 요청에는 고객 이름, 이메일, 전화번호, 주문 금액 같은 주문 정보가 들어 있어요. CRM은 이 정보로 연락처를 만들거나 업데이트하고, 주문 내역을 연락처 기록에 추가해요.

#### 고객 지원 티켓 시스템 연동

고객 문의를 처리하는 별도의 지원 티켓 시스템을 쓰는 경우예요. 고객이 티켓을 만들면 Inbound Webhook으로 티켓 정보를 CRM에 보내서, 지원팀이 필요한 정보를 한곳에서 볼 수 있게 해요.

예시: 지원 티켓 시스템이 웹훅 URL로 HTTP POST 요청을 보내요. 요청에는 고객 이메일, 티켓 제목, 내용이 들어 있어요. CRM은 해당 고객의 연락처 기록에 티켓을 연결하고, 지원팀은 CRM에서 바로 티켓 정보를 확인할 수 있어요.

#### 이벤트 등록 연동

이벤트를 열고 별도의 이벤트 등록 플랫폼을 쓴다면, Inbound Webhook으로 참석자 등록 정보를 CRM에 보낼 수 있어요.

예시: 이벤트 등록 플랫폼이 웹훅 URL로 HTTP POST 요청을 보내요. 요청에는 참석자 이름, 이메일, 전화번호, 이벤트 이름이 들어 있어요. CRM은 참석자의 연락처를 만들거나 업데이트하고 이벤트 등록 내역을 기록에 추가해요. 이벤트 팀은 참석자를 관리하고 안내 연락을 보낼 수 있어요.

#### 웹 폼에서 리드 수집

웹사이트나 랜딩 페이지의 웹 폼에서 리드를 받아 CRM으로 보낼 때도 Inbound Webhook을 쓸 수 있어요.

예시: 방문자가 웹사이트의 폼을 제출하면, 웹 폼이 웹훅 URL로 HTTP POST 요청을 보내요. 요청에는 이름, 이메일, 전화번호 같은 리드 정보가 들어 있어요. CRM은 새 리드를 만들거나 기존 연락처를 업데이트하고, 영업팀은 리드에게 빠르게 연락할 수 있어요.

이 밖에도 Inbound Webhook은 다양한 업무 상황에서 워크플로우를 자동화하고 CRM 활용도를 높여 줘요.

## Inbound Webhook 트리거 사용하기

Inbound Webhook 트리거로 데이터를 가져오는 과정은 세 단계예요.

![Inbound Webhook 트리거 3단계 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396414/original/5xlRF80hbq19hXS2IeQjhZ5GlPK6xGxPLQ.png?1683557063)

### 1단계

웹훅 URL을 복사해서 사용 중인 애플리케이션이나 시스템에 입력해요. 그다음 지원되는 HTTP 요청 방식(POST, GET, PUT)으로 웹훅 URL에 데이터를 보내고, **Test Trigger**(트리거 테스트) 버튼을 클릭하세요.

![웹훅 URL 복사와 Test Trigger 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396436/original/IlVVYc7eyGT9KdCkdq9wlbT68qjQH71BzA.jpeg?1683557066)

### 2단계

지원되는 HTTP 요청 방식(POST, GET, PUT)으로 받은 데이터 중 하나를 골라 샘플 데이터로 저장해 두세요. 나중에 참고용으로 쓸 수 있어요. 최근 데이터를 더 보려면 **Load More**(더 보기)를 클릭하세요. 원하는 데이터를 골랐으면 트리거를 저장해요.

이 단계에서는 커스텀 변수용 데이터 참조를 저장할 수 있어요. 저장한 참조는 다른 연락처 커스텀 필드나 로케이션 커스텀 변수처럼 쓸 수 있어요.

참조를 활용하는 방법은 아래 단계와 예시에서 이어서 설명해요.

2-1. 복사한 웹훅 URL로 지원되는 HTTP 요청(POST, GET, PUT)을 보내고, 응답에 포함된 ID를 복사해요.

![응답에서 ID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396447/original/HBssN92Dcn7RELV0WfeiQvdzyYoVWnZesA.jpeg?1683557067)

2-2. 요청에서 얻은 고유 ID를 복사해서, 웹훅 트리거 안에서 해당 매핑 참조를 검색해요.

가장 최근 요청이 항상 목록 맨 위에 표시돼요.

![고유 ID로 매핑 참조 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396689/original/1GOfBLW8pVhtm0-4jBOU-djexnqbxJUQhg.gif?1683557143)

2-3. 맞는 참조를 선택하고 본문(body)을 확인해요.

![매핑 참조 선택과 본문 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396424/original/jE6MPEf9WpVPFFQ0ahHfacR6JsSdqJRmyQ.png?1683557064)

### 3단계

트리거를 저장하면 **Create Update Contact**(연락처 생성/업데이트) 액션으로 이동해요. 여기서 필요한 필드를 고르고, 트리거로 받은 데이터를 매핑하세요. 새 연락처를 만들거나 기존 연락처에 데이터를 매핑하려면 이메일 또는 전화번호 필드가 꼭 있어야 해요. 트리거 데이터에 이메일이나 전화번호가 없다면 이 액션을 워크플로우에서 삭제하세요. 그러면 워크플로우는 연락처 없이 계속 실행돼요.

![Create Update Contact 액션에서 데이터 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396430/original/dLt6e4aBJ-RSHELvUaJx6MD8J6i5jOaOKw.jpeg?1683557066)

---

여기까지 마치면, 받은 데이터를 워크플로우 안에서 이메일, SMS, **If/Else**(조건 분기) 등에 커스텀 값으로 쓸 수 있어요.

![워크플로우에서 사용할 수 있는 커스텀 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396440/original/WDyICG5QVeEo1X5iv-AAmEjLhl6HhJKn1Q.png?1683557067)

---

### 사용 예시

Inbound Webhook의 커스텀 값은 워크플로우의 모든 액션에서 쓸 수 있어요. 아래에서 몇 가지 예를 볼 수 있어요.

#### 커뮤니케이션 액션에서 쓰기

![커뮤니케이션 액션에서 커스텀 값 사용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396872/original/Y_f4vN7W6D0Af8UpHCCStiQq-BLwJiMb0g.gif?1683557198)

#### If/Else 액션에서 쓰기

![If/Else 액션에서 커스텀 값 사용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48296396946/original/HMKEQnrIHJvwPHaAiEUA2z2sjFgjgBELvA.gif?1683557230)

위 예시처럼 Inbound Webhook의 값을 다른 모든 액션에서 필요한 대로 쓸 수 있어요.

## 연락처 없이도 워크플로우를 실행할 수 있나요?

- 워크플로우는 연락처 데이터 없이도 실행할 수 있어요. Inbound Webhook 트리거로 어떤 페이로드 데이터든 보내서 워크플로우에서 사용할 수 있어요.
- 연락처 없이 진행하면서, 연락처 정보가 필요 없는 액션을 쓸 수 있어요. **Custom Webhook**(커스텀 웹훅), **Google Sheet**(구글 시트), Slack, ChatGPT, 그리고 모든 **Internal Tools**(내부 도구)는 연락처 없이 실행할 수 있어요.
- 필요하면 **Create/Update**(생성/업데이트) 또는 **Find Contact**(연락처 찾기) 액션으로 연락처 데이터를 워크플로우에 가져올 수 있어요.

예시:
- Inbound Webhook으로 주문 데이터를 보내고, 주문 정보를 Google Sheet에 추가해요. 그다음 **If/Else** 액션으로 주문 금액에 따라 분류하고 Slack 알림을 보내요.
- **Find Contact** 액션으로 연락처 ID를 이용해 연락처를 가져와요.

---

## 유의할 점

- 웹훅에 요청을 보낼 때는 항상 지원되는 방식(POST, GET, PUT)을 쓰세요.
- 데이터는 JSON 객체로 보내세요. 지원되는 데이터 형식은 JSON뿐이에요.
- 키는 공백 없는 하나의 문자열이어야 제대로 처리돼요. 키 이름을 공백으로 나누지 말고 CamelCase나 snake\_case를 쓰세요.
- 워크플로우에는 연락처 정보가 필요하므로 페이로드에 이메일 또는 전화번호를 꼭 넣어야 해요. 연락처를 찾거나 만들 때 이메일이나 전화번호가 필요해요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
- Inbound Webhook으로 받은 목록(list) 또는 배열(array) 값은, 현재 실행 컨텍스트에서 워크플로우가 해당 목록을 인식하면 지원되는 워크플로우 텍스트 필드에서 쓸 수 있어요. **Custom Value**(커스텀 값) 선택기에서 목록을 선택하면 목록 포매터가 열려요. 여기서 추출할 필드와 값을 표시할 방식을 고를 수 있어요.
- 데이터 구조가 바뀌면 Inbound Webhook 트리거 설정에서 매핑 참조를 다시 선택하세요. 그래야 다른 액션에서 해당 필드를 올바르게 쓸 수 있어요.
- Inbound Webhook 트리거 URL이 노출되거나 유출되어 원하지 않는 요청을 막고 싶다면, 기존 Inbound Webhook 트리거를 삭제하고 새 Inbound Webhook 트리거를 추가하세요. 끝자리 ID가 다른 새 URL이 만들어지니, 연동한 곳의 URL을 새 URL로 바꿔 주세요. 저장하고 나면 이전 URL로 들어오는 요청은 워크플로우에 들어오지 않고, 새 URL로 보낸 요청만 들어와요.
