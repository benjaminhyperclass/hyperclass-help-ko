---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008802-jotform-workflow-triggers-and-actions
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거와 액션 — Jotform 연동(New Submission, New Signed Document, Create Submission)

Jotform 폼 응답이나 서명된 문서가 들어올 때 하이퍼클래스 워크플로우를 자동으로 시작할 수 있어요. 반대로 워크플로우의 데이터를 Jotform 폼에 제출 내역으로 남길 수도 있어요. 이 문서에서는 Jotform 연결 방법, 트리거와 액션 설정 방법, 지원하는 필드, 그리고 알아 둘 제한 사항을 안내해요.

## 이 문서에서 다루는 내용

서브 계정에 Jotform을 연결하는 방법, **New Submission**(새 제출)·**New Signed Document**(새 서명 문서) 트리거 설정 방법, 워크플로우에서 Jotform 제출 내역을 만드는 방법, 트리거 메타데이터를 테스트하는 방법, 지원하는 필드와 지원하지 않는 필드를 확인할 수 있어요.

## 워크플로우의 Jotform 연동이란?

Jotform 연동은 Jotform과 하이퍼클래스 워크플로우를 이어 줘요. 제출 데이터를 직접 내보내거나 복사하지 않아도 두 플랫폼 사이에서 정보가 오갈 수 있어요.

Jotform에서 새 폼 응답이 제출되거나, 전자 서명 필드가 있는 문서가 작성·서명되면 하이퍼클래스 워크플로우가 시작돼요.

반대로 하이퍼클래스 워크플로우에서 **Create Submission**(제출 생성) 액션을 쓰면, 지원되는 워크플로우 값을 선택한 Jotform 폼에 기록할 수 있어요.

### Jotform 연동을 쓰면 좋은 점

Jotform 연동으로 후속 조치와 데이터 이동을 자동화하면서, 나머지 CRM 자동화는 하이퍼클래스 안에서 그대로 운영할 수 있어요.

- 새 제출에 자동으로 대응: Jotform에 새 응답이 제출되면 워크플로우를 시작해요.
- 서명 문서 후속 조치 자동화: 전자 서명이 포함된 Jotform 문서가 작성·서명된 뒤 워크플로우 프로세스를 시작해요.
- 하이퍼클래스에서 Jotform 제출 내역 만들기: **Create Submission** 액션으로 워크플로우 데이터를 선택한 폼에 기록해요.
- 수작업 입력 줄이기: 두 플랫폼 사이에서 정보를 복사하는 대신 워크플로우 값을 매핑해요.
- 내부 기록이나 오프라인 기록 지원: 다른 방식으로 받은 정보를 Jotform 제출 내역으로 만들 수 있어요.
- 제출 데이터를 워크플로우 뒤쪽 단계에서 활용: Jotform 트리거를 테스트해 메타데이터를 가져오면, 이후 워크플로우 단계에서 그 값을 참조할 수 있어요.

## 사전 준비와 제한 사항

연결 방식, 트리거 시점, 테스트 조건, 지원하는 필드 유형을 미리 알아 두면 자동화를 게시한 뒤 예상치 못한 동작을 줄일 수 있어요.

- 트리거나 액션이 실행되려면 해당 서브 계정에 Jotform 계정이 연결되어 있어야 해요.
- Jotform은 연동 과정에서 Jotform API 키로 연결해요.
- **New Submission** 트리거는 웹훅 방식이에요. Jotform이 새 제출 이벤트를 보내면 시작돼요.
- **New Signed Document** 트리거는 폴링 방식이에요. 하이퍼클래스가 Jotform을 약 5분마다 확인하므로 약간의 지연은 정상이에요.
- 트리거를 설정할 때 **Test Trigger**(트리거 테스트)를 실행하세요. 그래야 하이퍼클래스가 이후 워크플로우 단계에서 쓸 메타데이터를 가져올 수 있어요.
- **Create Submission**은 Jotform의 표준 입력 유형 15가지를 지원해요.
- 지원하지 않는 필드는 **Create Submission** 매핑 목록에 나타나지 않아요.
- 지원하지 않는 필드는 Jotform에서 필수로 설정되어 있어도 빈 값으로 저장돼요.
- 지원하지 않는 필수 필드가 비어 있어도 워크플로우에서 오류가 나지 않아요. Jotform은 그 제출 내역을 그대로 만들고 활성 상태로 표시할 수 있어요.
- **Create Submission**은 결제, 금액, 상품, 서명, 예약된 일정 정보를 만들거나 첨부하지 않아요.
- 예약 필드를 써도 예약 시간대가 확보되지는 않아요.
- **Assign Form**(폼 배정)과 **Assign Prefilled Form**(미리 채운 폼 배정)은 이번 출시에 포함되지 않았어요.

## 워크플로우에서 Jotform 설정하기

트리거나 액션을 설정하기 전에 올바른 Jotform 계정을 먼저 연결하세요. 그래야 워크플로우 빌더가 그 계정의 폼과 필드를 불러올 수 있어요.

### 워크플로우 빌더에서 Jotform 연결하기

이미 자동화를 만들고 있고 Jotform 단계를 설정해야 한다면, 워크플로우 빌더에서 바로 연결하는 방법이 가장 간단해요.

1. 서브 계정 화면에서 **자동화 > 워크플로우**로 이동하세요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.
3. 트리거를 추가하려면 **Add New Trigger**(새 트리거 추가)를 클릭하세요.
4. 액션을 추가하려면 액션을 실행할 위치의 **+** 버튼을 클릭하세요.
5. **Jotform**을 검색하세요.
6. 설정할 Jotform 트리거나 액션을 선택하세요.

![워크플로우 빌더 검색 결과에 표시된 Jotform 트리거와 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081328327/original/WfaUjnpefH9-AEg_J48DPfmRqFKIz45oVA.png?1789749957)

7. Jotform이 아직 연결되어 있지 않다면 **Connect your account**(계정 연결)를 클릭하세요.
8. 안내에 따라 Jotform API 키를 입력하세요.
9. 연결을 완료하세요.
10. 워크플로우 단계로 돌아와 필요한 필드를 설정하세요.

![Jotform 계정 연결과 API 키 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081378691/original/Zj0a0qxbrtzpQu_bfPLfnhE44ErwMNzlKA.png?1789890869)

### 설정에서 Jotform 연결하기

워크플로우를 만들기 전에 Jotform 계정을 먼저 연결해 두고 싶다면 연동 메뉴에서 연결하세요.

1. 서브 계정 화면에서 **설정**을 여세요.
2. **연동**을 선택하세요.
3. **Jotform**을 찾으세요.
4. 연결을 시작하세요.
5. Jotform API 키를 입력하고 연결을 완료하세요.
6. **자동화 > 워크플로우**로 돌아가 필요한 Jotform 트리거나 액션을 추가하세요.

![설정 > 연동에서 Jotform 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081931247/original/_Cxj0IUA9z_twa9v_kaWA5Zu7i5DqAB2ng.png?1790471272)

## Jotform 트리거

Jotform 트리거를 쓰면 Jotform에서 일어난 활동으로 하이퍼클래스 워크플로우를 시작할 수 있어요. 두 트리거는 전달 방식이 달라서 시작되는 시점도 달라요.

### New Submission(새 제출)

**New Submission**은 웹훅을 사용해요. 선택한 폼에 새 응답이 제출되면 Jotform이 하이퍼클래스에 알려 줘요.

1. **자동화 > 워크플로우**로 이동해 워크플로우를 만들거나 여세요.
2. **Add New Trigger**를 클릭하세요.
3. **Jotform**을 검색하고 **New Submission**을 선택하세요.
4. 필요하면 Jotform 계정을 연결하세요.
5. 트리거 이름을 입력하고 필수 항목을 설정하세요.
6. 사용할 Jotform 폼을 선택하세요.
7. **Test Trigger**를 클릭하고 Jotform에서 받아 온 테스트 데이터를 확인하세요.
8. **Save trigger**(트리거 저장)를 클릭하세요.
9. 이어지는 워크플로우 액션을 추가하고, 준비가 끝나면 워크플로우를 게시하세요.

![선택한 폼과 Test Trigger 버튼이 보이는 Jotform 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081380011/original/jOC7nSGrMQtc21d9ceWh7vWMLtBUVE663w.png?1789895443)

테스트가 중요한 이유: **Test Trigger**를 실행하면 Jotform 메타데이터를 가져와요. 그래야 지원되는 제출 값을 이후 워크플로우 단계에서 쓸 수 있어요.

### New Signed Document(새 서명 문서)

**New Signed Document**는 전자 서명 필드가 있는 Jotform 문서가 작성되고 서명된 뒤에 워크플로우를 시작해요. **New Submission**과 달리 웹훅이 아닌 폴링 방식을 써요.

1. **자동화 > 워크플로우**로 이동해 워크플로우를 만들거나 여세요.
2. **Add New Trigger**를 클릭하세요.
3. **Jotform**을 검색하고 **New Signed Document**를 선택하세요.
4. 필요하면 Jotform 계정을 연결하세요.
5. 트리거 이름을 입력하고 필수 항목을 설정하세요.
6. 트리거에 표시되는 Jotform 폼이나 문서 항목 중 해당하는 것을 선택하세요.
7. **Test Trigger**를 클릭해 사용할 수 있는 메타데이터를 가져오세요.
8. **Save trigger**를 클릭하세요.
9. 워크플로우 액션을 추가하고, 준비가 끝나면 워크플로우를 게시하세요.

![New Signed Document 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081931183/original/4I9qqwkCHW4fuKWFCeQAYtqWHlDStrAHlA.png?1790471052)

시간 안내: 하이퍼클래스는 새로 서명된 문서가 있는지 Jotform을 약 5분마다 확인해요. 그래서 서명한 뒤 워크플로우에 등록되기까지 약간의 지연은 정상이에요.

## Create Submission 액션(제출 생성)

**Create Submission**을 쓰면 하이퍼클래스 워크플로우에서 선택한 Jotform 폼에 새 제출 내역을 바로 기록할 수 있어요. 정보가 하이퍼클래스에서 시작되었지만 Jotform에도 남겨야 할 때 유용해요.

1. **자동화 > 워크플로우**로 이동해 워크플로우를 만들거나 여세요.
2. 워크플로우를 시작할 트리거를 추가하거나 설정하세요.
3. Jotform 액션을 실행할 위치의 **+** 버튼을 클릭하세요.
4. **Jotform**을 검색하세요.
5. **Create Submission**을 선택하세요.
6. Jotform 계정이 아직 연결되어 있지 않다면 연결하세요.
7. 제출 내역을 받을 Jotform 폼을 선택하세요.
8. 하이퍼클래스가 선택한 폼에서 지원되는 필드를 불러올 때까지 기다리세요.
9. 불러온 각 필드를 고정 텍스트 또는 사용할 수 있는 워크플로우 커스텀 값으로 매핑하세요.
10. Date Picker(날짜 선택) 값은 **YYYY-MM-DD** 형식으로 입력하세요.
11. Time(시간) 값은 **HH:MM** 형식으로 입력하세요.
12. 매핑을 확인하고 액션을 저장하세요.
13. 전체 자동화가 준비되면 워크플로우를 게시하세요.

![워크플로우 매핑에 사용할 수 있는 지원 필드가 보이는 Jotform Create Submission 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081380087/original/IE-tfHEF3FvI-qNujTF5ZlC-lHXRpmMfJg.png?1789895791)

## Create Submission에서 지원하는 필드

**Create Submission**은 하이퍼클래스가 값을 채울 수 있는 Jotform 필드 유형만 보여 줘요. 폼을 고르기 전에 지원 여부를 확인해 두면 제출 내역에 빈 값이 생기는 일을 줄일 수 있어요.

| 지원 필드 | 매핑 방식 |
| --- | --- |
| Full Name(이름) | 이름과 성을 따로 매핑해요 |
| Email(이메일) | 지원해요 |
| Address(주소) | 주소, 시/구, 도/주, 우편번호, 국가를 따로 매핑해요 |
| Phone(전화번호) | 지원해요 |
| Short Text(짧은 텍스트) | 지원해요 |
| Long Text(긴 텍스트) | 지원해요 |
| Number(숫자) | 지원해요 |
| Dropdown(드롭다운) | 지원해요 |
| Single Choice(단일 선택) | 지원해요 |
| Multiple Choice(복수 선택) | 지원해요 |
| Yes / No(예/아니요) | 액션에서 드롭다운으로 표시돼요 |
| Star Rating(별점) | 액션에서 드롭다운으로 표시돼요 |
| Scale Rating(척도 평가) | 액션에서 드롭다운으로 표시돼요 |
| Date Picker(날짜 선택) | YYYY-MM-DD 형식을 사용하세요 |
| Time(시간) | HH:MM 형식을 사용하세요 |

지원하는 필드는 고정 텍스트나 사용할 수 있는 워크플로우 커스텀 값으로 채울 수 있어요.

### 지원하지 않는 필드

지원하지 않는 필드 유형은 **Create Submission** 매핑 목록에 나타나지 않아요. 선택한 폼에 이런 필드가 있으면 **Create Submission**은 그 필드를 빈 값으로 남겨 둬요.

- File Upload(파일 업로드)
- Signature(서명)
- Appointment(예약)
- Payment(결제)
- Product List(상품 목록)
- Input Table(입력 테이블)
- Fill in the Blanks(빈칸 채우기)
- Spinner(스피너)
- Emoji Slider(이모지 슬라이더)
- Image Choice(이미지 선택)
- Captcha(캡차)
- 위젯: Terms and Conditions(이용약관), Checklist, Configurable List, Multi Text List, Dynamic Text Box, Calculation 등

지원하지 않는 필드가 Jotform에서 필수로 설정되어 있어도 제출 내역은 만들어지고, 그 필드가 빈 채로 활성 상태가 될 수 있어요. 지원하지 않는 필수 필드가 비어 있다고 해서 워크플로우에서 오류가 나지는 않아요.

{% hint style="warning" %}
**Create Submission**은 결제를 처리하지 않고, 결제 금액이나 상품을 첨부하지 않으며, 서명을 생성하거나 예약 시간대를 확보하지도 않아요. 보통 결제를 받는 폼에 **Create Submission**을 쓴다면, 별도로 결제를 확인하지 않은 이상 만들어진 제출 내역을 결제 증빙으로 보지 마세요.
{% endhint %}

## 자주 묻는 질문

### Jotform 문서에 서명했는데 워크플로우가 바로 시작되지 않아요.
**New Signed Document**는 폴링 방식이에요. 하이퍼클래스가 Jotform을 약 5분마다 확인하므로 약간의 지연은 정상이에요.

### 설정할 때 Test Trigger를 꼭 실행해야 하나요?
**Test Trigger**를 실행하면 Jotform에서 메타데이터를 가져와요. 그래야 지원되는 제출 값을 이후 워크플로우 단계에서 참조할 수 있어요.

### Jotform 폼의 필드가 Create Submission에 보이지 않아요.
지원하지 않는 필드 유형은 매핑 목록에 나타나지 않고, **Create Submission**으로 값을 채울 수도 없어요.

### 지원하지 않는 필드가 Jotform에서 필수로 설정되어 있으면 어떻게 되나요?
**Create Submission**은 지원하지 않는 필드를 빈 값으로 남겨 둬요. Jotform은 그 제출 내역을 받아 활성 상태로 표시할 수 있어서, 필수인 지원 제외 필드가 비어 있어도 워크플로우는 실패하지 않아요.

### New Signed Document는 서명과 함께 동작하는데, 왜 Create Submission은 서명 필드를 채울 수 없나요?
이 트리거는 Jotform에서 사람이 이미 서명한 문서를 감지해요. **Create Submission**은 폼에 데이터를 기록할 뿐 사람의 서명을 만들어 낼 수 없어서, Signature 필드는 계속 지원하지 않아요.

### Create Submission으로 Jotform 결제를 처리할 수 있나요?
아니요. 결제, 금액, 상품 정보를 만들지 않아요. 결제 폼에서 만든 제출 내역을 결제가 이루어졌다는 증거로 보지 마세요.

### Create Submission으로 다른 사람에게 Jotform 폼을 보내 작성하게 할 수 있나요?
아니요. **Create Submission**은 Jotform에 제출 내역을 바로 기록해요. 다른 사람에게 폼을 보내 작성하게 하지는 않아요.

### Date Picker와 Time 필드는 어떤 형식으로 입력하나요?
Date Picker 값은 **YYYY-MM-DD**, Time 값은 **HH:MM** 형식으로 입력하세요.
