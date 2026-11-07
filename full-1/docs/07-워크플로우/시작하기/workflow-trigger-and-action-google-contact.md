---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005673-workflow-trigger-and-action-google-contact
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거와 액션 — Google Contacts

하이퍼클래스 워크플로우와 Google Contacts를 연결하면 연락처와 그룹을 자동으로 동기화하고, 만들고, 수정할 수 있어요. 직접 입력하는 수고와 중복 연락처를 줄이고 싶을 때 쓰세요.

## 워크플로우에서 Google Contacts 연동이란?

Google Contacts 연동을 쓰면 하이퍼클래스와 Google Contacts 사이에서 양방향 자동화를 구성할 수 있어요. Google Contacts에서 일어난 변화로 하이퍼클래스 워크플로우를 시작할 수도 있고, 하이퍼클래스의 연락처 변경 내용을 Google 주소록에 바로 보낼 수도 있어요. 어느 쪽에서 작업하든 고객 데이터가 같은 상태로 유지돼요.

## Google Contacts 연동의 장점

- 같은 정보를 두 번 입력하지 않아도 연락처가 자동으로 동기화돼요.
- 데이터베이스를 깔끔하게 관리하고 중복을 피할 수 있어요.
- Google에서 새 연락처나 새 그룹이 만들어지는 즉시 맞춤 후속 조치를 실행할 수 있어요.
- 외부 도구(zap)나 웹훅 없이 연동할 수 있어서 비용과 복잡도가 줄어요.
- 5분마다 확인하기 때문에 거의 실시간에 가까운 정확도를 유지해요.

## Google Contacts 트리거

Google Contacts 트리거는 Google에서 일어난 이벤트로 하이퍼클래스 워크플로우를 시작해요.

- **New Contact**(새 연락처): Google Contacts에 완전히 새로운 연락처가 생기면 실행돼요.
- **New Group**(새 그룹): Google Contacts에서 누군가 새 연락처 그룹을 만들면 실행돼요.

팀이 주로 Gmail이나 Google Workspace에서 일하면서도 하이퍼클래스 자동화를 쓰고 싶을 때 잘 맞아요.

## Google Contacts 액션

Google Contacts 액션은 하이퍼클래스 워크플로우가 해당 단계에 도착하면 Google 안에서 실행돼요.

- **Create Contact**(연락처 만들기): Google Contacts에 새 연락처를 추가해요.
- **Update Contact**(연락처 수정): 전화번호, 이메일 등 필드를 최신 상태로 유지해요.
- **Find Contact**(연락처 찾기): 이름, 이메일, 전화번호로 검색해요.
- **Find or Create Contact**(연락처 찾기 또는 만들기): 이미 있으면 수정하고 없으면 새로 추가해서 중복을 막아요.
- **Create Group**(그룹 만들기): 새 Google 연락처 그룹을 바로 만들어요.
- **Add Contact to Groups**(연락처를 그룹에 추가): 이미 있는 연락처를 하나 또는 여러 그룹에 넣어요.

## Google Contacts 시작하기

1. 워크플로우 빌더에서 Google Contacts 트리거나 액션을 검색해요. 예를 들어 "Find Contact", "Create Contact"를 검색해 보세요.

   ![워크플로우 빌더에서 Google Contacts 트리거와 액션 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056230405/original/Zh0qay8B5Iot_uYeVWqFoVJx_EDInGvfcg.png?1760696641)

2. 계정을 연결해요. Google Contacts가 이미 연결되어 있으면 바로 필드를 설정할 수 있어요. 연결되어 있지 않다면 **Connect Now**(지금 연결)를 클릭하고 Google 계정으로 로그인하세요.

   ![Connect Now 버튼으로 Google 계정 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056229973/original/N1QE6DQ_Y5kWJP1M88G3uCKvJ-FN1IHWCw.png?1760696561)

3. 다른 방법도 있어요. **설정 > 연동**으로 이동해 Google Contacts를 찾고 접근을 허용하세요.

   ![연동 화면에서 Google Contacts 접근 허용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056229595/original/vbT4lxtypXtRT6ep3h2x3ykFUGNWkqe_wQ.png?1760696497)

연결을 마치면 워크플로우 안에서 연락처를 동기화하고, 찾고, 수정할 수 있어요.

## Google Contacts 트리거는 어떻게 작동하나요?

Google Contacts 트리거는 폴링 방식으로 작동해요. 하이퍼클래스가 일정한 간격(보통 5분마다)으로 Google에 요청을 보내 새 연락처나 새 그룹이 있는지 확인해요. 응답 결과에 따라 워크플로우가 실행돼요.

설정 순서는 다음과 같아요.

1. **Choose a trigger**(트리거 선택)에서 트리거를 골라요. 예를 들면 **New Contact**나 **New Group**이에요.
2. 트리거 이름을 입력하고 **Test Trigger**(트리거 테스트)를 클릭해요.

{% hint style="warning" %}
테스트는 꼭 해야 해요. 테스트로 메타데이터를 가져와야 이후 액션에서 커스텀 값으로 쓸 수 있어요.
{% endhint %}

![트리거 이름 입력 후 Test Trigger 실행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056227698/original/Li2SzR84R-EhKtRffVKcL-uVkcac0SyxQA.png?1760695865)

## 사용 사례: 예약한 고객을 Google Contacts에 저장하기

고객이 예약하면 자동으로 Google Contacts에 추가하고, 알맞은 그룹(예: "Consults", "Demos")으로 나눠요.

워크플로우 구성은 다음과 같아요.

- 트리거: **Appointment Booked**(예약 완료)
- 필터: **Calendar** = "Demo Calls"
- 액션:
  - **Find or Create Contact** (Google Contacts)
  - **Add Contact to Groups** → 예: "Demo Leads"

예를 들어 "Demo Calls" 캘린더로 데모가 예약되면 하이퍼클래스가 연락처가 있는지 확인해요. 없으면 새로 만들고, Google Contacts의 "Demo Leads" 그룹에 추가해요.

![예약 완료 시 Google Contacts에 저장하는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050792392/original/l1odR_4jNjfQJfjGP1KgOOaz1TX3YjWc7w.png?1754047501)

## 사용 사례: 폼 제출을 Google Contacts로 만들기

폼으로 들어온 리드 정보를 Google Contacts에 동기화하면 후속 조치를 매끄럽게 이어갈 수 있어요.

워크플로우 구성은 다음과 같아요.

- 트리거: **Form Submitted**(폼 제출)
- 필터: **Form Name** = "Website Lead Form"
- 액션:
  - **Find or Create Contact**
  - **Update Contact** (새 정보로 다시 제출한 경우)

예를 들어 사용자가 "Website Lead Form"을 제출하면 하이퍼클래스가 이메일로 Google Contacts를 확인해요. 연락처가 있으면 수정하고, 없으면 새로 만들어요.

![폼 제출 시 Google Contacts를 만들거나 수정하는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050792533/original/lbb35nWl1pI8V3oh60PFqgAMm_AU4o_7Xw.png?1754047591)

## 사용 사례: Notion 레코드로 Google Contacts 만들기

Notion에 새 레코드가 생기면 자동으로 Google Contacts를 만들어요.

워크플로우 구성은 다음과 같아요.

- 트리거: **Notion - New Database item**(Notion - 새 데이터베이스 항목)
- 데이터베이스: "New users data"
- 액션:
  - **Find a record in database**(데이터베이스에서 레코드 찾기)
  - **Create Contact**
  - **Add Contact to Groups**

Notion 데이터베이스에 새 레코드가 추가될 때마다 Google Contacts에 새 연락처가 만들어져요. 워크플로우는 새 레코드에 "New user"라는 코멘트가 있는지 확인해요. 코멘트가 있으면 Google Contacts에 새 연락처를 자동으로 만들어요.

![Notion 레코드로 Google Contacts를 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793042/original/KypZFs5mTPaa5274d712bhC4KdyEZOdWSQ.png?1754047933)

## 자주 묻는 질문

### Google Contacts에 이미 있는 연락처도 수정할 수 있나요?
네. **Update Contact** 액션을 쓰면 기존 연락처를 수정할 수 있어요.

### 이 기능을 쓰려면 유료 Google 계정이 필요한가요?
아니요. Google Contacts에 접근할 수 있는 Gmail 계정이면 모두 쓸 수 있어요.

### 태그나 파이프라인 단계에 따라 연락처를 자동으로 그룹에 나눌 수 있나요?
네, 가능해요. 조건부 로직을 쓰고 태그를 Google 그룹에 연결하면 동기화된 연락처를 자동으로 나눌 수 있어요.
