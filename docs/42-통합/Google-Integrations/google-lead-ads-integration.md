---
원문: /support/solutions/articles/155000006989-google-lead-ads-integration
번역일: 2026-11-06
카테고리: 42-통합
---

# Google 리드 광고 연동

Google Ads 리드 폼으로 들어온 리드를 하이퍼클래스 CRM에 바로 연결하는 방법을 안내해요. 연동하면 폼 제출 정보가 CRM으로 자동 전달되고, 워크플로우가 바로 응답할 수 있어요. 수동 업로드나 Zapier 연결은 필요 없어요.

## Google Ads 연동이란

Google Ads 연동은 Google Ads 계정과 하이퍼클래스 서브 계정을 연결해요. Google 리드 폼으로 제출된 리드는 실시간으로 연락처가 돼요. OAuth 방식의 보안 연결이라 폼 정보도 워크플로우에서 쓸 수 있어요. 그래서 잠재 고객이 제출 버튼을 누르는 순간 자동화를 실행할 수 있어요.

Google Ads에서 모은 리드는 자동으로 CRM과 동기화돼요. Google에서 내 상품이나 서비스에 관심을 보인 사람의 연락처 정보를 바로 받아 CRM에서 빠르게 후속 연락을 할 수 있어요. 리드 수집을 자동화하면 시간을 아끼고 영업·마케팅 업무를 더 효율적으로 처리할 수 있어요.

---

## Google Ads 연동의 주요 기능

### 1. 간편한 설정

- Google Ads 계정을 하이퍼클래스에 쉽게 연결할 수 있어요.
- Google(Gmail) 로그인 하나로 여러 Google Ads 계정을 연결할 수 있어요.
- 진행 중인 모든 캠페인과 리드 폼을 한곳에서 볼 수 있어요.

### 2. 리드 자동 동기화

- 활성화하고 필드를 매핑한 Google Ads 리드 폼으로 리드가 제출되면 CRM에 새 연락처가 만들어져요.
- 한 번 활성화하면 추가 설정 없이 리드가 자동으로 들어와요.

### 3. 워크플로우 자동화

- **Google Lead Form Submitted**(Google 리드 폼 제출) 트리거로 워크플로우를 바로 실행할 수 있어요.
- **Ad Account**(광고 계정), **Lead Form**(리드 폼) 같은 필터를 적용해 대상을 좁힌 자동화를 만들 수 있어요.
- SMS, 이메일 후속 연락, 내부 알림 등을 자동으로 보낼 수 있어요.

---

## Google Ads 연결하기

### 1단계: 연동 화면으로 이동하기

**서브 계정 보기 > 설정 > 연동**으로 이동하세요.

![연동 화면으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063072918/original/Ywut85Go3B0CS5vis9crZQ1-KgV-7Fm5ag.png?1768918893)

### 2단계: Google Ads 연동 설치하기

Google Ads 연동에서 **관리**를 클릭하세요.

**앱 설명** 페이지로 이동하면 **Install**(설치)을 클릭해 계속 진행하세요.

![Google Ads 연동의 관리 버튼과 설치 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063073238/original/wynEsNLfJabEFmUn_ewfATQ0ZI4CT6d9EA.png?1768919033)

### 3단계: Google 계정으로 로그인하기

OAuth 인증 화면에서 Google 계정으로 로그인하라는 안내가 나와요.

인증이 끝나면 리드를 동기화할 Google Ads 계정을 선택하세요.

![Google 계정 로그인 및 Google Ads 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063073556/original/2k4JWtWg4k982i2y4YfFsT3BDkYzrOTttw.png?1768919145)

### 4단계: 리드 폼 활성화하기

연결이 끝나면 선택한 광고 계정에 연결된 모든 리드 폼이 캠페인 이름, 상태와 함께 표시돼요.

매핑하려는 폼 옆의 재생 아이콘을 클릭하면 필드 매핑이 시작되고 리드 동기화가 활성화돼요.

![리드 폼 목록과 재생 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063073919/original/9x4b0dkNhvh_ohLd06-a2LVpfVMBjX330w.png?1768919250)

### 5단계: 워크플로우 설정하기

**Google Lead Form Submitted** 트리거로 워크플로우를 만들어 보세요. 새 리드가 들어올 때 후속 작업이 자동으로 실행돼요.

![Google Lead Form Submitted 트리거로 워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063074195/original/kkS_oYcwN2Ypqv5lPx8c8bLvrip3T3ukMQ.png?1768919361)

---

## 폼 필드 매핑

- 리드를 동기화할 폼의 재생/편집 아이콘을 클릭하세요.
- **Map Fields**(필드 매핑) 버튼으로 Google 광고 폼의 필드를 CRM 필드와 맞춰 주세요.
- 특정 폼에서 들어오는 리드를 받고 싶지 않으면 일시중지 아이콘을 클릭하세요.

![폼 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063074514/original/DSm_gBdUtwDXLsnvZ0cn0Sxk9yaHDYqDbg.png?1768919535)

---

## 연결이 잘 됐는지 테스트하기

### 1단계: 캠페인 열기

Google Ads에서 CRM과 동기화할 캠페인으로 이동하세요.

![Google Ads에서 캠페인 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804371/original/rfJ8aQ7bey1doaQuNt8YRxcFxJRKVnFw1g.png?1763615386)

### 2단계: 캠페인 선택하기

캠페인 목록에서 캠페인 이름을 클릭해 상세 화면을 여세요.

![캠페인 목록에서 캠페인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804375/original/Jl2VATrQrOPz8wGCA5JrfloVyzl3YQ4f0g.png?1763615387)

### 3단계: 리드 폼 열기

캠페인 안의 리드 폼 섹션으로 이동해 **편집**을 클릭하세요.

![리드 폼 섹션의 편집 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804370/original/lOsRcQfkJUBkCpFU6R2znfrxFm_-zJY9Yg.png?1763615386)

### 4단계: 연결된 폼 열기

캠페인에 연결된 폼 화면으로 이동해요.
폼 이름을 클릭해 폼을 여세요.

![캠페인에 연결된 폼 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804372/original/eG624sYhg3xjd_M0peTnKe57V1ITlSp9YA.png?1763615386)

### 5단계: 테스트 데이터 보내기

**Send Data**(데이터 전송)를 클릭해 연동을 테스트하세요.

{% hint style="info" %}
경고 메시지가 표시될 수 있어요. 이번 테스트에서는 무시해도 괜찮아요.
{% endhint %}

![테스트 데이터 전송 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804373/original/ys9fcXXTIiAT89d_121__FkBYFzUZL2W1A.png?1763615386)

---

## 자주 묻는 질문

### Google Ads에 연결하려면 관리자 권한이 필요한가요?

네. 연결하려는 Google Ads 계정에 접근 권한이 있는 Google(Gmail) 계정을 써야 해요. 필요한 권한이 없으면 광고 계정과 리드 폼이 표시되지 않아요.

### Google Ads 계정을 둘 이상 연결할 수 있나요?

네. Google 로그인 하나로 여러 Google Ads 계정을 연결할 수 있어요. 연결한 계정의 모든 캠페인과 리드 폼을 한곳에서 관리할 수 있어요.

### CRM에는 언제 연락처가 만들어지나요?

연동에서 활성화하고 필드를 제대로 매핑한 Google Ads 리드 폼으로 리드가 제출될 때마다 연락처가 만들어져요.

### 리드가 동기화되지 않아요

다음을 확인해 보세요.

- 올바른 Google Ads 계정이 연결되어 있는지
- 캠페인이나 폼에서 리드 동기화가 활성화되어 있는지
- 필요한 리드 폼 필드가 모두 CRM 필드에 매핑되어 있는지
- 동기화 상태가 **활성**으로 표시되는지
