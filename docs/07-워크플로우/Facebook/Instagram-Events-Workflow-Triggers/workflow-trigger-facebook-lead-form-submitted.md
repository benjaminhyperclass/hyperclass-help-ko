---
원문: /support/solutions/articles/155000003095-workflow-trigger-facebook-lead-form-submitted
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Facebook Lead Form Submitted(Facebook 리드 폼 제출)

**Facebook Lead Form Submitted**(Facebook 리드 폼 제출) 트리거를 쓰면 Facebook 리드 광고로 들어온 리드에게 후속 조치와 육성 작업을 자동으로 진행할 수 있어요. 설정 방법부터 활용 팁까지 안내해요. Facebook 리드 생성 캠페인을 하이퍼클래스 워크플로우와 연결해 리드를 놓치지 않도록 도와줘요.

## Facebook Lead Form Submitted 트리거란?

연결된 Facebook 페이지의 리드 광고에서 누군가 폼을 제출하면, 이 트리거가 워크플로우를 시작해요. 이런 폼은 "인스턴트 폼"이라고도 부르며 Facebook 안에서 바로 열려서 별도의 랜딩 페이지가 필요 없어요. 사용자가 폼을 작성하면 입력한 정보가 하이퍼클래스로 자동 전송돼요. 이 정보를 바탕으로 후속 조치, 태그 지정, 기회 관리 같은 자동화를 만들 수 있어요.

Facebook에서 리드 생성 광고를 운영한다면 꼭 필요한 트리거예요. 리드 정보를 직접 가져오지 않아도, 실제로 폼이 제출되는 즉시 워크플로우가 실행돼요.

## 이 트리거로 할 수 있는 일

- Facebook 캠페인을 CRM 자동화와 바로 연결해요: 랜딩 페이지나 수동 내보내기 없이 리드를 워크플로우로 보낼 수 있어요.
- 실시간 자동화로 시간을 아껴요: 폼을 제출하는 즉시 CRM에 추가되고 지연이 없어요.
- 필터로 정확하게 타겟팅해요: 기본 제공 필터로 특정 페이지와 폼에서 들어온 리드에게만 작업을 실행해요.
- 팀 업무 효율을 높여요: 연락처 배정, 사용자 알림, 파이프라인 분류를 자동으로 처리해요.
- 맞춤형 경험을 제공해요: 리드가 제출한 폼에 맞춰 이메일, 태그, 파이프라인 단계를 다르게 적용할 수 있어요.

## Facebook Lead Form Submitted 트리거 설정하기

먼저 Facebook 계정과 리드 폼이 하이퍼클래스와 연동되어 있고 필드 매핑까지 끝나 있어야 해요. 준비가 되었다면 아래 순서로 워크플로우에 트리거를 설정하세요.

### 1. 워크플로우에 트리거 추가하기

1. **자동화 > 워크플로우**로 이동해요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.
3. 워크플로우 빌더에서 **Add New Trigger**(새 트리거 추가)를 클릭해요.

![워크플로우 빌더에서 Add New Trigger를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603059/original/10eJkp9-mjOeEXoS2sltLvqvKzd8PKDqew.jpeg?1745500078)

### 2. 트리거 유형 선택하기

1. 트리거 목록에서 **Events**(이벤트) 섹션까지 스크롤해요.
2. **Facebook Lead Form Submitted**를 선택해요. 초록색 클립보드 아이콘이 있는 항목이에요.

![트리거 목록의 Events 섹션에서 Facebook Lead Form Submitted를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603090/original/ufXsWG0V3Gqos8hDB2p8x4GeF01_KybLPQ.png?1745500118)

### 3. 트리거 이름 정하기

**Workflow Trigger Name**(워크플로우 트리거 이름) 필드에 알아보기 쉬운 이름을 입력해요. 리드 유입 경로가 여러 개일 때 나중에 트리거를 구분하기 쉬워져요.

예: Facebook Lead Form Submitted (체중 감량 캠페인)

![Workflow Trigger Name 필드에 트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603110/original/A32rsx8iJ9UG70fmp3HNbFzsbutGpFIQTw.jpeg?1745500138)

### 4. 필터로 대상 지정하기

트리거 이름을 정했다면 필터를 추가해요. 알맞은 Facebook 페이지와 폼에서 들어온 리드만 워크플로우를 시작하게 하려는 거예요.

**Page Is**(페이지 조건): 캠페인을 운영하는 Facebook 페이지를 선택해요. **설정 > 연동 > Facebook**에서 연결한 페이지만 목록에 나타나요.

![Page Is 필터에서 Facebook 페이지를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603339/original/G9DpwHbhpYto224xX4imixdNDgPuC8o4gg.jpeg?1745500227)

**Form Is**(폼 조건): 페이지를 선택하면, 그 페이지에 연결된 리드 폼 중 하나를 고를 수 있어요.

![Form Is 필터에서 리드 폼을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603279/original/op16hb90SYlcTQ4UaCvEYOBXQ0qLgnfuwQ.jpeg?1745500201)

### 5. 저장하고 워크플로우 만들기

1. 트리거와 필터 설정이 끝나면 **Save Trigger**(트리거 저장)를 클릭해요.
2. 워크플로우에 필요한 액션을 추가해요.
3. 액션을 모두 정했다면 **Test Workflow**(워크플로우 테스트)로 의도한 대로 동작하는지 확인해요.
4. 마지막으로 **Publish**(게시)를 클릭해 워크플로우를 활성화해요.

```
Facebook 리드에 추천하는 워크플로우 액션

Facebook Lead Form Submitted 트리거를 설정했다면, 리드 관리를 쉽게 하고 응답 속도를 높이는 아래 액션을 고려해 보세요.

Create/Update Opportunity(기회 만들기/업데이트): 새 리드를 영업 파이프라인으로 자동 배치해 깔끔하게 정리해요.

Assign to User(사용자에게 배정): 리드마다 담당자를 바로 지정해 더 빠르게 후속 조치를 해요.

Send Email(이메일 보내기): 감사 인사나 환영 이메일을 맞춤으로 보내 처음부터 관심을 이어 가요.

Internal Notification(내부 알림): 새 리드가 들어오면 팀에 실시간으로 알려, 놓치는 기회가 없게 해요.

이 단계들을 활용하면 Facebook 캠페인으로 들어오는 모든 리드에게 빠르게 응답하고 더 탄탄한 관계를 만들 수 있어요.
```

## 자주 묻는 질문

### 트리거를 설정할 때 필터를 하나도 쓰지 않으면 어떻게 되나요?

필터를 적용하지 않으면 연결된 모든 Facebook 페이지에서 제출된 리드 폼에 대해 워크플로우가 실행돼요. 원하지 않는 워크플로우가 실행될 수 있으니 **Page Is**, **Form Is** 같은 필터를 쓰는 것을 권장해요.

### 설정하기 전에 Facebook 리드 폼 필드를 매핑해야 하나요?

네. **설정 > 연동 > Facebook**의 **Facebook Form Fields Mapping**(Facebook 폼 필드 매핑)으로 이동해서, 리드 폼의 필드(예: 이름, 이메일, 전화번호)가 하이퍼클래스 연락처 필드에 매핑되어 있는지 확인하세요. 매핑이 제대로 되어 있지 않으면 리드 데이터가 올바르게 동기화되지 않을 수 있어요.

### 드롭다운에 Facebook 페이지나 폼이 보이지 않아요.

보통 Facebook 연동이 끝나지 않았을 때 이런 일이 생겨요. **설정 > 연동 > Facebook**에서 Facebook 페이지가 연결되어 있는지, 필요한 권한이 올바르게 허용되었는지 확인하세요.

### 하나의 트리거에서 여러 Facebook 폼으로 워크플로우를 시작할 수 있나요?

아니요. 이 트리거는 필터 설정 하나에 폼 하나만 지원해요. 같은 워크플로우 안에서 필터를 다르게 지정해 트리거를 복제하거나, 폼마다 별도의 워크플로우를 만들어 사용하세요.

### 폼이 제출된 뒤에 어떤 액션을 자동화할 수 있나요?

확인 이메일 보내기, 리드를 사용자에게 배정하기, 연락처에 태그 지정하기, 파이프라인에 기회 만들기, 팀 내부 알림 보내기 같은 액션을 많이 써요. 필요한 만큼 단계를 이어 붙일 수 있어요.
