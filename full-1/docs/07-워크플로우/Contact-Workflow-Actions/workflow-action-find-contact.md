---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Find Contact(연락처 찾기)

**Find Contact**(연락처 찾기) 액션은 이메일 같은 검색 조건으로 연락처를 찾아 워크플로우에 불러옵니다. 일치하는 연락처가 없을 때 이어질 경로도 따로 만들 수 있어요.

## Find Contact 액션이란

**Find Contact** 액션은 표준 필드나 커스텀 필드 같은 조건으로 데이터베이스에서 연락처를 찾아내요. 연락처가 지정되지 않은 채 시작되지만, 이메일 같은 식별 정보는 있는 워크플로우에 알맞아요.

보통은 연락처가 연결되어 있지 않은 트리거로 워크플로우가 시작될 때 이 액션을 써요. 예를 들어 [**Inbound Webhook**(인바운드 웹훅)](../workflow-trigger-inbound-webhook.md) 트리거에는 쿼리 파라미터가 하나 이상 담긴 페이로드가 들어와요. `queryParams`에 사용자 ID는 없어도 이메일 같은 식별 정보가 있으면, **Find Contact** 액션으로 이메일을 사용자 ID로 바꿀 수 있어요. 그러면 그 연락처를 대상으로 다음 액션을 실행할 수 있어요.

## Find Contact 액션의 주요 이점

- 업무 효율 향상: 연락처 검색을 자동으로 처리해서 시간을 아끼고 수작업 실수를 줄여요.
- 유연한 검색: 표준 필드와 커스텀 필드를 모두 지원해서 원하는 조건으로 정확하게 찾을 수 있어요.
- 연락처가 없는 트리거 지원: **Inbound Webhook**처럼 연락처가 연결되지 않는 트리거로 시작하는 워크플로우를 위해 만든 액션이에요.
- 고급 매칭: 외부 참조 매칭을 지원해서 "Stripe Customer ID" 같은 사용자 지정 식별자로도 검색할 수 있어요.
- 고객 소통 개선: 메시지 발송이나 후속 조치를 정확한 대상에게 보낼 수 있어요.
- 분기 지원: 연락처를 찾았는지 여부에 따라 워크플로우에 경로가 자동으로 나뉘어서, 상황별로 다른 액션을 실행할 수 있어요.

## 지원하는 매칭 필드

믿을 수 있는 필드를 고를수록 매칭이 정확해져요. 가능하면 고유한 식별자를 쓰고, 매칭하기 전에 들어오는 데이터의 형식을 일정하게 맞춰 두세요.

- 표준 필드: **Email**(이메일), **Phone**(전화번호), **First Name**(이름), **Last Name**(성) 등이 있어요. 선택 목록에서 고르세요.
- 커스텀 필드: 직접 만든 필드를 쓸 수 있어요(예: "Customer ID", "Subscription Tier"). 해당 커스텀 필드가 이미 있고, 연락처에 값이 채워져 있어야 해요.
- 외부 참조: 웹훅이나 앱에서 오는 데이터(예: Stripe Customer ID)를 커스텀 필드에 매핑한 뒤, 그 필드로 매칭해요.

## 매칭 로직과 분기 동작

매칭 규칙을 알아 두면 더 안전하게 자동화를 설계하고, **Contact Found**(연락처 찾음)와 **Contact Not Found**(연락처 못 찾음) 결과를 미리 계획할 수 있어요.

- 필드 간 AND 조건: 필드를 여러 개 지정하면 **모두** 일치해야 연락처를 반환해요(예: 이메일 AND 전화번호 AND 커스텀 필드).
- 분기: 이 액션에는 **Contact Found**와 **Contact Not Found** 두 경로가 생겨요. 결과에 따라 이어질 작업을 정할 수 있어요(예: 필드 업데이트 또는 연락처 만들기).
- 일치하는 연락처가 여러 명일 수 있을 때: 이메일이나 외부 ID처럼 더 구체적인 필드를 추가해서 조건을 좁히세요. 필요하면 [연락처 중복 허용 설정](../../11-설정/Business-Profile-Settings/allow-duplicate-contacts-contact-deduplication-preferences.md)과 [중복 연락처 병합](../../02-연락처/스마트-리스트/how-to-manage-and-merge-duplicate-contacts.md) 문서도 함께 참고하세요.

## Find Contact 액션 설정하기

워크플로우에 **Find Contact** 액션을 설정하는 순서예요.

### 워크플로우 빌더 열기

**자동화 > 워크플로우**에서 워크플로우 빌더를 열어요. 새 워크플로우를 처음부터 만들거나, **Find Contact** 액션을 넣을 기존 워크플로우를 선택하세요.

![워크플로우 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054568172/original/frx13mRCX3L_q-7wBWOZyZLO6ig9t7zUgw.png?1758795446)

### 액션 추가하기

**+** 아이콘을 클릭하고 드롭다운 메뉴에서 **Find Contact** 액션을 선택하세요.

### 액션 이름 정하기

"Find Contact by Email"처럼 용도를 알 수 있는 이름을 입력하세요.

![액션 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249578/original/F7sI1DcqMK1NL5qk-dvd3J0ozCIbDQBbvw.png?1735920212)

### 표준 필드 선택하기

**First Name**, **Last Name**, **Email**, **Phone** 등을 고를 수 있어요.

![표준 필드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249673/original/gK9muzOm9tJ3EK88Yjkl3w_y2OPGHe9Qxg.png?1735920304)

### 커스텀 필드 선택하기 (선택 사항)

"Customer ID"나 "Subscription Tier"처럼 고유한 값을 담을 커스텀 필드가 아직 없다면 먼저 만드세요. 이미 만들어 두었다면 아래로 스크롤해서 **Custom Fields**(커스텀 필드) 목록에서 찾으세요.

![커스텀 필드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249651/original/6ihylo4OdVHg-gBuJXxczL-wmQr2jSGGeg.png?1735920282)

### 트리거 설정하기

**Inbound Webhook** 같은 트리거와 함께 사용하면 액션이 상황에 맞게 실행돼요.

### 분기 계획하기

**Contact Found** 경로에는 [**Update Contact Field**(연락처 필드 업데이트)](../workflow-action-update-contact-field-date-type-field.md)나 **Send Email**(이메일 보내기) 같은 액션을 이어 붙이세요. **Contact Not Found** 경로에는 [**Create Contact**(연락처 만들기)](workflow-action-create-contact.md) 같은 액션을 이어 붙이세요.

### 테스트하고 저장하기

테스트 데이터로 설정이 정확한지 확인하세요. 설정을 마치면 **Save**(저장)를 클릭하세요.

### 워크플로우 게시하기

워크플로우를 활성화하면 연락처 검색이 자동으로 실행돼요.

## 추가 이메일·전화번호까지 검색하기 (선택 사항)

기본적으로 **Find Contact**는 연락처의 대표 **Email** 또는 **Phone** 필드만 비교해요.

연락처에 추가 이메일 주소나 전화번호가 저장되어 있다면, 그 값도 검색에 포함할 수 있어요.

1. 표준 필드 선택 단계에서 **Email** 또는 **Phone**을 선택하세요.
2. 선택한 필드 아래의 체크박스 **include additional emails/phone numbers**(추가 이메일/전화번호 포함)를 켜세요.

![추가 이메일·전화번호 포함 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064651745/original/Q5PCi-SWsi47qnF8AtWh-bKKLVUEKcuObA.png?1770798534)

## 사용 사례

실제로 **Find Contact**를 언제 쓰는지, 어떤 필드를 먼저 쓰면 좋은지, 일치하는 연락처가 없으면 어떻게 하는지 예시로 살펴봐요.

### 1. 다른 도구에서 들어온 신규 리드 (이메일로 매칭)

폼, 광고, 연동 서비스에서 누군가의 이메일이 넘어오면 **Find Contact**를 **Email**로 설정하세요.

- **Contact Found**: 워크플로우를 이어 가요. 태그를 추가하거나, 정보를 업데이트하거나, 메시지를 보내세요.
- **Contact Not Found**: 연락처를 만든 뒤 이어서 진행해요.

### 2. 구매·구독 정보 업데이트 (Customer ID로 매칭)

결제 시스템은 보통 고객 ID 같은 고정된 고객 번호를 보내 줘요. 이 값을 커스텀 필드에 저장해 두고, 그 값으로 연락처를 찾으세요.

- **Contact Found**: 요금제, 상태, 고객 생애 가치를 업데이트해요.
- **Contact Not Found**: 연락처를 만들고 고객 ID를 저장한 뒤 진행해요.

### 3. 캘린더 예약 (이메일로 매칭)

일정 예약 앱은 대개 이메일을 필수로 받아요. 이 이메일로 예약을 알맞은 사람과 연결하세요.

- **Contact Found**: 예약을 연락처에 연결하고 확인 메시지를 보내요.
- **Contact Not Found**: 예약 정보로 연락처를 만들고 팀에 알려요.

### 4. 파트너 추천 (추천 코드로 매칭)

파트너가 고유한 코드를 전달하면 그 파트너에게 실적을 돌릴 수 있어요. 코드를 커스텀 필드에 저장해 두고, 그 코드로 연락처를 찾으세요.

- **Contact Found**: 추천 정보를 추가하거나 업데이트하고 연락처에 태그를 붙여요.
- **Contact Not Found**: 추천 코드와 함께 연락처를 만들고 알맞은 육성 과정을 시작해요.

### 5. 고객 ID 없는 온라인 주문 (이메일로 매칭, 필요하면 성 추가)

스토어에서 이메일과 이름만 보내는 경우가 있어요. 먼저 **Email**로 시작하고, 비슷한 이메일을 쓰는 연락처가 많다면 **Last Name**을 추가하세요.

- **Contact Found**: 주문 내역과 합계를 업데이트해요.
- **Contact Not Found**: 연락처를 만들고 "고객" 태그를 붙여요.

## 자주 묻는 질문

### 연락처를 찾지 못하면 어떻게 되나요?
**Find Contact** 액션을 설정하면 **Contact Found**와 **Contact Not Found** 두 갈래 경로가 만들어져요. **Contact Not Found** 경로에는 상황에 맞는 액션을 원하는 대로 넣을 수 있어요.

### 외부 참조 매칭은 어떻게 작동하나요?
"Stripe Customer ID" 같은 외부 식별자를 커스텀 필드에 저장해 두세요. **Find Contact** 액션이 이 필드를 사용해서 해당하는 연락처를 찾아요.

### 이 액션을 다른 워크플로우 액션과 함께 쓸 수 있나요?
네, 함께 쓸 수 있어요. **Find Contact** 액션을 **Send Email**(이메일 보내기)이나 **Update Contact**(연락처 업데이트) 같은 액션과 이어서 더 복잡한 워크플로우를 만들 수 있어요.

### 검색에 필드를 여러 개 쓸 수 있나요?
네, 필드를 여러 개 설정해서 검색 조건을 좁힐 수 있어요. 지정한 필드 값이 모두 일치해야 연락처를 찾아요(예: 이것 AND 이것 AND 이것).

### 다른 트리거도 쓸 수 있나요?
**Inbound Webhook** 트리거 외에, 앱 마켓플레이스용 커스텀 트리거로도 필요한 머지 필드를 넘길 수 있어요. 이 트리거는 외부 개발자가 자기 앱 마켓플레이스 앱을 지원하려고 만든 프리미엄 트리거예요.
