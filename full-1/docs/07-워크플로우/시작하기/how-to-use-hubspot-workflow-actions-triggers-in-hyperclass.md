---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007955-how-to-use-hubspot-workflow-actions-triggers-in-highlevel
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# HubSpot 워크플로우 트리거·액션 — New Contact Created, Create Contact 등

HubSpot을 하이퍼클래스 워크플로우에 연결하면 두 시스템의 연락처 데이터를 자동으로 맞출 수 있어요. 이 문서에서는 HubSpot 트리거와 액션의 종류, 설정 방법, 연락처 동기화·중복 방지·생애주기 기반 육성에 쓰는 활용 예시를 안내해요.

[동영상 보기](https://www.youtube.com/embed/UPKkCtqoZA0?&wmode=opaque)

## HubSpot 워크플로우 트리거·액션이란?

HubSpot 워크플로우 트리거·액션은 HubSpot과 하이퍼클래스 워크플로우를 연결해 두 시스템 사이에서 데이터를 자동으로 주고받게 해 줘요. HubSpot 연락처를 만들고, 기존 HubSpot 연락처를 찾고, HubSpot에서 새 연락처가 생기면 하이퍼클래스 워크플로우를 시작할 수 있어요. 워크플로우 빌더에서 HubSpot을 쓰면 수작업 입력과 연락처 중복을 줄이고, 영업·마케팅 프로세스를 더 일정하게 이어 갈 수 있어요.

HubSpot 트리거와 액션은 하이퍼클래스 **워크플로우 빌더**에서 쓸 수 있어요. 트리거는 HubSpot에서 특정 이벤트가 일어났을 때 워크플로우를 시작하고, 액션은 워크플로우가 시작된 뒤 HubSpot에서 작업을 수행해요.

## HubSpot 워크플로우 트리거·액션의 장점

한 CRM의 정보를 다른 CRM으로 직접 복사하지 않아도 시스템 간 연락처 활동을 연결할 수 있어요. 마케팅 자동화, 리드 수집, 고객 커뮤니케이션은 하이퍼클래스에서, CRM 관리는 HubSpot에서 하는 경우에 특히 유용해요.

- 연락처 자동 생성: 폼 제출, 예약, 태그 등 하이퍼클래스 워크플로우 이벤트가 생길 때 HubSpot 연락처를 자동으로 만들어요.
- 중복 레코드 감소: 새 연락처를 만들기 전에 HubSpot에서 기존 연락처를 먼저 검색해 연락처 기록을 깔끔하게 유지해요.
- 빠른 리드 배정: HubSpot에 새 연락처가 생기면 하이퍼클래스에서 후속 워크플로우를 바로 실행해요.
- 유연한 필드 매핑: 하이퍼클래스의 기본 연락처 정보와 커스텀 연락처 정보를 HubSpot 연락처 속성으로 보내요.
- 일관된 워크플로우: 영업·마케팅·운영팀의 수작업 단계를 줄이는 반복 가능한 자동화를 만들어요.
- 원활한 CRM 협업: 두 플랫폼을 함께 쓸 때 HubSpot과 하이퍼클래스의 프로세스를 맞춰요.

## 지원하는 HubSpot 트리거

HubSpot 트리거는 HubSpot에서 조건에 맞는 이벤트가 일어나면 하이퍼클래스 워크플로우를 시작해요. HubSpot에서 새 연락처 활동이 시작될 때 하이퍼클래스가 자동으로 반응할 수 있어요.

### New Contact Created

**New Contact Created**(새 연락처 생성됨) 트리거는 연결된 HubSpot 계정에서 새 연락처가 만들어지면 하이퍼클래스 워크플로우를 시작해요.

HubSpot에 새 연락처가 추가된 뒤 알림 보내기, 작업 만들기, 태그 적용, 후속 커뮤니케이션 시작 같은 일을 하이퍼클래스에서 하고 싶을 때 이 트리거를 쓰세요.

## 지원하는 HubSpot 액션

HubSpot 액션을 쓰면 하이퍼클래스 워크플로우에서 HubSpot의 연락처 정보를 보내거나 가져올 수 있어요. 올바른 연락처 데이터가 매핑·검색·생성되도록 신중하게 설정하세요.

<!-- 검토 필요: 원문 내용이 서로 다름 (원문 내부 검토 메모에 따르면, 일부 위치에서는 액션을 5개로 소개하고 다른 위치에서는 2개만 나열한다고 함. 실제 서비스에서 사용 가능한 액션 목록 확인 필요) -->

### Create Contact

**Create Contact**(연락처 생성) 액션은 하이퍼클래스 워크플로우에서 매핑한 정보로 HubSpot에 새 연락처를 만들어요.

하이퍼클래스 이벤트로 새 리드나 고객이 들어왔을 때, 그 사람을 HubSpot에 자동으로 추가하고 싶다면 이 액션을 쓰세요.

매핑할 수 있는 필드는 다음과 같아요.

- 이름
- 성
- 이메일
- 전화번호
- 회사명
- 웹사이트
- 생애주기 단계
- 리드 소스
- HubSpot 커스텀 속성

{% hint style="info" %}
**Create Contact** 전에 **Find Contact**(연락처 찾기) 액션을 먼저 넣어 HubSpot에 이미 있는 연락처인지 확인하세요.
{% endhint %}

### Find Contact

**Find Contact** 액션은 이메일 주소처럼 선택한 식별 값으로 HubSpot에서 기존 연락처를 검색해요.

새 HubSpot 연락처를 만들기 전에 이 액션을 넣으면, 일치하는 연락처가 이미 있는지 워크플로우가 확인할 수 있어요.

주로 이런 경우에 써요.

- HubSpot 연락처 중복을 막을 때
- 일치하는 연락처를 찾았을 때 다른 경로로 보낼 때
- 레코드를 만들기 전에 HubSpot에 리드가 이미 있는지 확인할 때
- 연락처를 찾았는지 여부에 따라 워크플로우 조건을 설정할 때

### Get Contact by ID

**Get Contact by ID**(ID로 연락처 가져오기) 액션은 HubSpot 레코드 ID로 HubSpot 연락처를 가져와요.

앞선 워크플로우 단계에서 이미 HubSpot 연락처 ID를 알고 있고, 그 연락처의 자세한 정보가 더 필요할 때 이 액션을 쓰세요.

주로 이런 경우에 써요.

- HubSpot 트리거 이후 연락처 데이터를 조회할 때
- HubSpot 연락처 속성을 이후 워크플로우 단계로 가져올 때
- 워크플로우를 계속하기 전에 특정 HubSpot 레코드를 확인할 때

### Search Contact by Email

**Search Contact by Email**(이메일로 연락처 검색) 액션은 워크플로우에 있는 이메일 주소로 HubSpot에서 연락처를 검색해요.

이메일이 HubSpot 연락처 존재 여부를 확인하는 가장 확실한 방법일 때 이 액션을 쓰세요.

주로 이런 경우에 써요.

- 하이퍼클래스 연락처와 HubSpot 연락처를 맞춰 볼 때
- HubSpot 레코드 중복을 피할 때
- 이메일이 일치하는지에 따라 워크플로우 로직을 나눌 때

### Create Association

**Create Association**(연결 관계 생성) 액션은 연락처와 회사 또는 딜처럼 HubSpot 레코드 사이의 관계를 만들어요.

영업이나 계정 관리를 위해 HubSpot 레코드를 서로 연결해 두어야 할 때 이 액션을 쓰세요.

주로 이런 경우에 써요.

- HubSpot 연락처를 회사와 연결할 때
- HubSpot 연락처를 딜과 연결할 때
- 연락처를 만들거나 찾은 뒤 관련 HubSpot 레코드를 연결할 때

## HubSpot 워크플로우 트리거·액션 설정하기

설정은 HubSpot 연결, 알맞은 트리거나 액션 선택, 필드 매핑, 게시 전 테스트 순서로 진행해요. 테스트를 하면 하이퍼클래스가 HubSpot 레코드에 접근하고 올바른 형식으로 데이터를 보낼 수 있는지 확인할 수 있어서 특히 중요해요.

### 워크플로우 빌더에서 HubSpot 연결하기

1. 하이퍼클래스에서 **자동화**로 이동하세요.
2. 기존 워크플로우를 열거나 새 워크플로우를 만드세요.
3. 설정하려는 항목에 따라 **Add New Trigger**(새 트리거 추가) 또는 **Add Action**(액션 추가)을 클릭하세요.
4. **Apps**(앱)를 선택하세요.
5. **HubSpot**을 선택하세요.
6. **Connect**(연결) 또는 **Connect Now**(지금 연결)를 클릭하세요.
7. 사용할 HubSpot 계정을 승인하세요.
8. 요청된 권한을 확인하세요.
9. 승인을 완료하세요.
10. 하이퍼클래스로 돌아와 HubSpot이 연결되었는지 확인하세요.

![워크플로우 빌더에서 HubSpot 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072050244/original/lwYVqNwwW5u4fYPoA25WYFhOLm9ajxmS-g.png?1779530590)

## HubSpot New Contact Created 트리거 설정하기

HubSpot에서 워크플로우를 시작하고 싶을 때 **New Contact Created** 트리거가 유용해요. HubSpot에 새 연락처가 만들어지면 하이퍼클래스가 후속 액션, 알림, 작업, 내부 프로세스로 자동화를 이어 가요.

1. 하이퍼클래스에서 **자동화**로 이동하세요.
2. HubSpot으로 자동화를 시작할 워크플로우를 여세요.
3. **Add New Trigger**를 클릭하세요.
4. **HubSpot**을 선택하세요.
5. **New Contact Created**를 선택하세요.
6. 연결된 HubSpot 계정을 확인하세요.
7. 설정할 수 있는 트리거 옵션이 있으면 설정하세요.
8. **Save Trigger**(트리거 저장)를 클릭하세요.
9. **Test Trigger**(트리거 테스트) 또는 **Find New Records**(새 레코드 찾기)를 사용해 하이퍼클래스가 HubSpot 연락처 레코드를 감지하는지 확인하세요.
10. 테스트가 성공하면 워크플로우를 게시하세요.

![New Contact Created 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072050325/original/lPh6V0W9bX29EQV2d55QeGTOhqpmeJVoHA.png?1779530677)

## HubSpot Create Contact 액션 설정하기

**Create Contact** 액션은 하이퍼클래스 워크플로우의 연락처 데이터를 HubSpot으로 보내요. 필드를 정확히 매핑해야 HubSpot 연락처가 올바른 이름, 이메일, 전화번호, 커스텀 속성 값으로 만들어져요.

1. HubSpot 연락처를 만들 워크플로우를 여세요.
2. 프로세스를 시작할 워크플로우 트리거를 추가하세요.
3. **Add Action**을 클릭하세요.
4. **HubSpot**을 선택하세요.
5. **Create Contact**를 선택하세요.
6. 연결된 HubSpot 계정을 확인하세요.
7. 필수 HubSpot 필드를 매핑하세요.
8. 프로세스에 필요한 선택 HubSpot 속성도 매핑하세요.
9. 액션을 저장하세요.
10. 액션을 테스트하세요.
11. 하이퍼클래스에서 테스트 결과를 확인하고, HubSpot에 연락처가 만들어졌는지 확인하세요.

![Create Contact 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072050394/original/QOAT2Iroh-iwUlMwvQkqqIqhO7OiLI0Txg.png?1779530760)

추천 필드 매핑 예시는 다음과 같아요.

- HubSpot 이름 → 하이퍼클래스 연락처 이름
- HubSpot 성 → 하이퍼클래스 연락처 성
- HubSpot 이메일 → 하이퍼클래스 연락처 이메일
- HubSpot 전화번호 → 하이퍼클래스 연락처 전화번호
- HubSpot 회사 → 하이퍼클래스 연락처 회사명
- HubSpot 리드 소스 → 워크플로우 소스, 폼 이름 또는 커스텀 값

## 활용 예시

HubSpot과 하이퍼클래스가 모두 고객 여정에 쓰일 때 HubSpot 워크플로우 트리거·액션이 유용해요. 아래 예시는 연락처 생성, 연락처 조회, 후속 프로세스를 자동화하는 방법이에요.

### 하이퍼클래스 폼 제출로 HubSpot 연락처 만들기

리드가 하이퍼클래스 폼으로 들어오고 HubSpot에도 만들어져야 할 때 쓰는 워크플로우예요.

워크플로우 예시:

1. 트리거: **Form Submitted**(폼 제출)
2. 액션: **Search Contact by Email** 또는 **Find Contact**
3. **If/Else**(조건 분기): 연락처를 찾았나요?
4. 아니요라면 HubSpot에서 **Create Contact**를 실행해요.
5. 예라면 다음 후속 단계로 넘어가요.

### HubSpot 연락처가 만들어지면 하이퍼클래스 워크플로우 시작하기

HubSpot에서 새 연락처가 만들어지고 하이퍼클래스가 후속 작업을 처리해야 할 때 쓰는 워크플로우예요.

워크플로우 예시:

1. 트리거: HubSpot **New Contact Created**
2. 액션: 내부 알림 보내기
3. 액션: 하이퍼클래스에서 태그 추가
4. 액션: 작업 만들기 또는 사용자 배정
5. 액션: 필요하면 후속 커뮤니케이션 보내기

### HubSpot 연락처 중복 막기

여러 리드 소스가 같은 사람을 HubSpot으로 보낼 수 있을 때 쓰는 워크플로우예요.

워크플로우 예시:

1. 트리거: 연락처 생성됨(Contact Created), **Form Submitted** 또는 다른 하이퍼클래스 트리거
2. 액션: 이메일로 HubSpot 검색
3. 연락처가 있으면 **Create Contact**를 건너뛰어요.
4. 연락처가 없으면 **Create Contact**를 실행해요.

### HubSpot 연락처를 회사나 딜과 연결하기

계정 관리나 영업 추적을 위해 연락처를 다른 HubSpot 레코드와 연결해야 할 때 쓰는 워크플로우예요.

워크플로우 예시:

1. 트리거: 하이퍼클래스에서 연락처가 생성되거나 업데이트됨
2. 액션: HubSpot 연락처 찾기 또는 만들기
3. 액션: 회사 또는 딜 레코드 ID 가져오기
4. 액션: **Create Association**
5. HubSpot에서 연결 관계를 테스트해요.

## 자주 묻는 질문

### HubSpot 액션은 프리미엄 워크플로우 액션인가요?

네. HubSpot 액션 5개(**Create Contact**, **Find Contact**, **Get Contact by ID**, **Search Contact by Email**, **Create Association**)는 모두 프리미엄 액션이에요. 표준 자동화 요금으로 프리미엄 액션 크레딧이 차감돼요.

### New Contact Created 트리거도 프리미엄인가요?

아니요. 프리미엄은 액션에만 적용돼요. **New Contact Created** 트리거는 HubSpot 웹훅으로 동작하며, 프리미엄 액션 크레딧을 쓰지 않고 실행될 수 있어요. 다만 트리거 뒤에 프리미엄 액션을 추가하면 그 액션은 평소대로 과금돼요.

### 이 연동을 쓰려면 유료 HubSpot 요금제가 필요한가요?

아니요. HubSpot 무료 CRM 요금제로도 연동이 동작해요. 일부 워크플로우 자동화나 특수한 속성 유형 같은 HubSpot 쪽 고급 기능은 유료 Marketing Hub 또는 Sales Hub 요금제가 필요할 수 있어요. 이런 제한은 하이퍼클래스가 아닌 HubSpot이 정한 거예요.

### HubSpot 연락처를 만들 때 중복은 어떻게 막나요?

HubSpot 연락처의 중복 확인 기준은 이메일이에요. 중복을 피하려면 **Create Contact** 전에 **Search Contact by Email**을 쓰고, 일치하는 연락처가 없을 때만 새 레코드를 만드세요.

### 워크플로우에서 HubSpot 연락처의 커스텀 속성을 만들거나 업데이트할 수 있나요?

네. **Create Contact** 액션은 HubSpot 연락처 오브젝트에 정의된 모든 속성(기본 속성과 커스텀 속성)을 지원해요. 먼저 HubSpot에서 속성을 만든 다음, 알맞은 워크플로우 변수를 그 속성에 매핑하세요. 알 수 없는 속성 이름은 제출할 때 HubSpot이 무시해요.

### 실제 워크플로우에서 Create Association은 어디에 쓰나요?

**Create Association**은 HubSpot에서 연락처를 회사, 딜, 티켓과 연결해요. 관련 레코드를 모두 연결해 양쪽에서 볼 수 있게 하려는 계정 기반 영업, 딜 자동화, 지원 워크플로우에 유용해요.

### HubSpot 필드에 워크플로우 변수를 쓸 수 있나요?

네. 모든 HubSpot 액션 필드에서 인라인 워크플로우 변수를 쓸 수 있어요(예: 날짜/시간 도우미). 폼 응답, 연락처 필드, 이전 단계의 값을 HubSpot 속성에 동적으로 매핑할 수 있어요.
<!-- 검토 필요: 원문의 변수 예시 코드가 비어 있음 -->

### 가져오기나 다른 연동으로 만든 연락처에도 New Contact Created가 실행되나요?

네. 필터로 제한하지 않으면, 폼·수동 입력·가져오기·다른 연동 등 어떤 경로로든 HubSpot에 새 연락처가 만들어질 때마다 트리거가 실행돼요. 특정 소스나 생애주기 단계로 대상을 좁히려면 트리거 필터를 사용하세요.

### HubSpot 액션이 실패하면(예: 이메일이 올바르지 않을 때) 어떻게 되나요?

**Create Contact** 같은 액션이 실패하면 워크플로우 실행 상세에 오류가 기록돼요. 워크플로우는 설정한 분기에 따라 계속 진행될 수 있어요. 중요한 경로에는 오류가 났을 때 관리자에게 알리거나 Slack 채널에 기록하는 등의 대체 분기를 추가하세요.

### 같은 워크플로우에서 HubSpot 단계를 여러 개 쓸 수 있나요?

네. 하나의 워크플로우 안에 HubSpot 트리거와 액션을 여러 개 이어서 쓸 수 있어요(해당되는 경우). 예를 들어 **New Contact Created**로 시작한 뒤 하이퍼클래스에서 **Find Contact**와 **Create Contact**를 실행하고, 마지막으로 같은 연락처에 대해 HubSpot에서 **Create Association**을 실행할 수 있어요.
<!-- 검토 필요: 원문 내용이 서로 다름 (원문에 Find Contact, Create Contact가 "in HighLevel"로 적혀 있으나 이 액션들은 HubSpot 액션으로 설명됨) -->
