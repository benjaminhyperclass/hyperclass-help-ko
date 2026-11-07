---
원문: /support/solutions/articles/155000002685-workflow-action-create-contact
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Create Contact(연락처 만들기)

**Create Contact**(연락처 만들기) 액션은 워크플로우 안에서 연락처를 자동으로 만들거나, 이미 있는 연락처 정보를 업데이트해요. 이 문서에서는 액션이 하는 일과 장점, 설정 방법, 사용 사례, 자주 묻는 질문을 안내해요.

## Create Contact 액션이란?

**Create Contact** 액션은 미리 정한 조건에 따라 새 연락처를 만들거나 기존 연락처를 업데이트해요. 연락처 정보를 정확하게 유지할 수 있어서 고객 온보딩, 리드 관리처럼 연락처를 다루는 자동화의 기본이 돼요.

## Create Contact 액션의 장점

- 데이터 정확도 향상: 연락처 정보를 항상 최신 상태로 유지해서 오류와 중복을 줄여요.
- 업무 간소화: 연락처 정보를 직접 추가하거나 수정하는 반복 작업을 자동화해서 시간과 수고를 아낄 수 있어요.
- 소통 개선: 정확한 연락처 정보를 바탕으로 제때 후속 연락을 하고 맞춤 메시지를 보낼 수 있어요.
- 필드 맞춤 설정: 표준 필드와 커스텀 필드를 모두 지원해서 비즈니스에 맞게 연락처 정보를 구성할 수 있어요.
- 다른 기능과 쉬운 연동: 다른 워크플로우 액션·트리거와 쉽게 연동해서 탄탄한 자동화를 만들 수 있어요.

## Create Contact 액션 설정하기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동해 워크플로우 빌더를 열어요. 새 워크플로우를 처음부터 만들거나, **Create Contact** 액션을 넣을 기존 워크플로우를 선택해요.
2. **+** 아이콘을 클릭하고, 드롭다운 메뉴에서 **Create Contact**를 선택해요.

   ![액션 추가에서 Create Contact 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039310054/original/WuFv53oy7nz43NidBrihXSA-VHDWn73uZw.png?1736153467)

3. 액션 이름을 알아보기 쉽게 입력해요. 예를 들어 "웹 폼에서 연락처 만들기"처럼 쓰면 돼요.

   ![액션 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039310124/original/yIUzSZ0til10P3zvfOfYySrAuYAzA94NFg.png?1736153517)

4. **Select Fields**(필드 선택)에서 연락처를 만들거나 업데이트할 때 포함할 필드를 설정해요.
   - **Standard Fields**(표준 필드): **First Name**(이름), **Last Name**(성), **Email**(이메일), **Phone**(전화번호), **Address**(주소) 등이 있어요.

     ![표준 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039310202/original/nrd2uo6Bpw7q9JOC2PzN9yzKPz1tHP98XA.png?1736153562)

   - **Custom Fields**(커스텀 필드): "회원 ID", "추천 경로"처럼 우리 회사에 맞는 필드를 추가해요.

     ![커스텀 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039310264/original/ZgS3qv1q1xL2KKE9rKybCq_mOEmKpUYYog.png?1736153616)

5. **Save**(저장) 버튼을 클릭해 설정을 확정해요.
6. 테스트 데이터로 워크플로우가 의도한 대로 동작하는지 확인해요. 확인이 끝나면 **Publish**(게시) 토글을 켜서 워크플로우를 활성화해요.

## 사용 사례

### 웹 폼에서 연락처 자동으로 만들기

- 시나리오: 웹 폼으로 들어온 고객 정보를 자동으로 연락처로 만들거나 업데이트하려고 해요.
- 액션 설정
  - 액션: **Create Contact**
  - 필드: **First Name**, **Last Name**, **Email**, **Phone**, **City**(도시), **Country**(국가)
- 결과: 워크플로우가 연락처를 만들거나 업데이트하고, 영업팀에 알려 후속 연락을 할 수 있게 해요.

![웹 폼으로 연락처를 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039343561/original/TIFnSKhBhNfXN0OC5QIiycpiPtHLKFWzNQ.png?1736175733)

### 구매 후 연락처 정보 업데이트하기

- 시나리오: 고객이 구매하면 CRM 프로필에 거래 정보를 업데이트해야 해요.
- 액션 설정
  - 액션: **Create Contact**
  - 필드: **Full Name**(전체 이름), **Email**, **Purchase History**(구매 내역, 커스텀 필드)
- 결과: 워크플로우가 고객 프로필에 최근 구매 내역을 업데이트하고 "활성 고객" 태그를 붙여요.

### 외부 데이터에서 온 리드 관리하기

- 시나리오: 외부 플랫폼의 리드를 CRM으로 가져온 뒤, 연락처를 자동으로 만들거나 업데이트해야 해요.
- 액션 설정
  - 액션: **Create Contact**
  - 필드: **Business Name**(사업자명), **Contact Source**(연락처 출처), **Phone**, **Email**
- 결과: 모든 리드가 관련 정보와 함께 CRM에 정확하게 기록되어 바로 후속 연락을 할 수 있어요.

### 신규 고객 온보딩하기

- 시나리오: 구독형 비즈니스에서 신규 고객마다 연락처를 만들고, 온보딩 담당자에게 배정하려고 해요.
- 액션 설정
  - 액션: **Create Contact**
  - 필드: **First Name**, **Last Name**, **Subscription Tier**(구독 등급, 커스텀 필드), **Email**
- 결과: 워크플로우가 연락처를 만들고, 온보딩 팀에 배정하고, 환영 이메일을 보내요.

### 이벤트 등록 정보 저장하기

- 시나리오: 이벤트 등록 폼으로 받은 참석자 정보를 CRM에 기록해서 관리하고 연락하려고 해요.
- 액션 설정
  - 액션: **Create Contact**
  - 필드: **Full Name**, **Email**, **Event Name**(이벤트 이름, 커스텀 필드)
- 결과: 워크플로우가 모든 참석자의 연락처를 만들고, 이벤트 이름 태그를 붙여서 이후 소통에 활용할 수 있게 해요.

## 자주 묻는 질문

### 이미 있는 연락처이면 어떻게 되나요?

**Create Contact** 액션이 기존 연락처를 새 정보로 업데이트해요. 그래서 데이터가 일관되게 유지되고 중복이 생기지 않아요.

### 이 액션에서 커스텀 필드도 쓸 수 있나요?

네, 표준 필드와 커스텀 필드를 모두 지원해요. 필요에 맞게 연락처 정보를 구성할 수 있어요.

### 중복 연락처를 막으려면 어떻게 하나요?

이메일이나 전화번호 같은 일치 기준으로 기존 연락처를 찾아요. 일치하는 연락처가 있으면 새로 만들지 않고 그 연락처를 업데이트해요.

### 다른 워크플로우 액션과 함께 쓸 수 있나요?

네, 함께 쓸 수 있어요. **Send Email**(이메일 보내기)이나 **Assign Task**(작업 할당) 같은 액션과 연동해서 더 폭넓은 워크플로우를 만들 수 있어요.

### 연락처가 만들어지거나 업데이트될 때 팀에 알릴 수 있나요?

네, 같은 워크플로우에 알림 액션을 추가하면 관련 팀에 새 연락처나 업데이트된 연락처를 알릴 수 있어요.

### Create Contact 액션과 함께 쓸 트리거는 무엇이 좋나요?

**Inbound Webhook**(인바운드 웹훅) 또는 **Marketplace app**(마켓플레이스 앱) 트리거와 함께 쓰기를 권장해요.
