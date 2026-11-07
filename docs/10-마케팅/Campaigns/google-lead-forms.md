---
원문: /support/solutions/articles/48001180147-google-lead-forms
번역일: 2026-11-07
카테고리: 10-마케팅
---

# Google Lead Forms로 리드 받기

Google Lead Forms는 Google Ads에서 리드 정보를 모으는 폼이에요. 하이퍼클래스의 Google Ads 연동을 쓰면, 사용을 켜고 필드를 매핑한 리드 폼의 제출 내용이 CRM에 연락처로 들어와요. 그 연락처에 워크플로우로 후속 조치를 자동화할 수 있어요. 이 문서에서는 Google Ads 연결, 리드 폼 매핑과 활성화, 새 제출 자동화, 연동 테스트 방법을 안내해요.

## Google Lead Forms란?

Google Lead Forms는 Google Ads와 연결된 리드 수집 폼이에요. Google Ads 계정을 하이퍼클래스에 연결하면, 사용을 켜고 필드를 제대로 매핑한 리드 폼의 제출 내용으로 CRM에 연락처가 만들어져요.

{% hint style="warning" %}
Google Lead Forms는 Google Forms와 달라요. Google Forms는 별도의 하이퍼클래스 연동을 사용해요.
{% endhint %}

## Google Ads 연결하기

하이퍼클래스와 동기화할 리드 폼이 들어 있는 Google Ads 계정을 연결해요.

1. 해당 서브 계정을 열어요.
2. **설정 > 연동**으로 이동해요.
3. **Google Ads**를 찾아 **관리**를 클릭해요.
4. 연동 페이지에서 **설치**를 클릭해요.
5. Google Ads 계정에 접근할 수 있는 Google 계정으로 로그인해요.
6. Google 권한 승인 절차를 마쳐요.
7. 연결할 Google Ads 계정을 하나 이상 선택해요.

연결이 끝나면 선택한 계정의 리드 폼이 캠페인 이름, 동기화 상태와 함께 표시돼요.

![Google Ads 연결 후 리드 폼 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082259349/original/ahqSbApWyObUfdK6hV6F4oHpEzQWUPRdPw.png?1790833932)

## 리드 폼 매핑하고 활성화하기

필드 매핑은 Google 리드 폼에서 받은 정보를 하이퍼클래스 CRM의 알맞은 필드와 연결하는 작업이에요.

1. 동기화할 리드 폼을 찾아요.
2. 해당 폼의 **재생**/**편집** 아이콘을 클릭해요.
3. **필드 매핑**을 선택해요.
4. Google 리드 폼의 필드를 하이퍼클래스 CRM의 알맞은 필드와 짝지어요.
5. 매핑을 마치고 리드 동기화를 활성화해요.
6. 동기화 상태가 **활성**으로 표시되는지 확인해요.

폼에서 더 이상 리드를 받지 않으려면 **일시정지** 아이콘을 클릭하세요.

![리드 폼의 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082260536/original/7Vl4f5zRMIoZ24X-fkBprjdN13ddy9BFVg.png?1790835445)

## 리드 폼 제출을 자동화하기

하이퍼클래스가 Google Ads 리드 폼 제출을 받으면 **Google Lead Form Submitted**(Google 리드 폼 제출) 워크플로우 트리거로 자동화를 시작할 수 있어요.

1. **자동화 > 워크플로우**로 이동해요.
2. 워크플로우를 새로 만들거나 기존 워크플로우를 열어요.
3. 워크플로우 트리거를 새로 추가해요.
4. **Google Lead Form Submitted**를 선택해요.
5. 필요하면 **Ad Account**(광고 계정) 또는 **Lead Form**(리드 폼) 필터를 추가해요.
6. 제출 후 실행할 워크플로우 액션을 추가해요.
7. **Save and publish**(저장 및 게시)를 클릭해 워크플로우를 저장하고 게시해요.

![Google Lead Form Submitted 트리거를 선택한 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082260801/original/zoP0znoMNrPGTXE_bSk1YLKEFq6bubjIIQ.png?1790835724)

## 연동 테스트하기

Google Ads의 테스트 데이터를 보내서, 연결한 리드 폼이 연동을 통해 정보를 잘 보내는지 확인해요.

1. **Google Ads Manager**를 열어요.
2. 연결한 리드 폼이 들어 있는 캠페인을 열어요.
3. 캠페인 상세 화면에서 **Lead Form** 섹션으로 이동해 **Edit**을 클릭해요.
4. 캠페인에 연결된 폼을 열어요.
5. **Send Data**를 클릭해 테스트 제출을 보내요.
6. 하이퍼클래스에서 예상한 리드가 들어왔는지 확인해요.

{% hint style="info" %}
이 테스트를 하는 동안 Google Ads에 경고가 표시될 수 있어요. 하이퍼클래스의 현재 연동 안내에 따르면, 테스트에서는 이 경고를 무시해도 돼요.
{% endhint %}

![Google Ads에서 테스트 데이터를 보내는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082261117/original/Pd_8K65mrbz-g0_asF_5pMXbLoEquWZR5A.png?1790836168)

## 자주 묻는 질문

### Google Ads를 연결할 때 어떤 Google 계정을 써야 하나요?
연결하려는 Google Ads 계정에 접근할 수 있는 Google 계정을 쓰세요. 필요한 접근 권한이 없으면 광고 계정과 리드 폼이 나타나지 않아요.

### Google Ads 계정을 둘 이상 연결할 수 있나요?
네. 해당 계정들에 접근할 수 있는 Google 로그인으로 여러 Google Ads 계정을 연결할 수 있어요.

### 하이퍼클래스에서 연락처는 언제 만들어지나요?
연동에서 사용을 켜고 필드를 제대로 매핑한 Google Ads 리드 폼으로 리드가 제출되면 연락처가 만들어져요.

### Google Lead Forms 제출이 동기화되지 않아요.
올바른 Google Ads 계정이 연결되어 있는지, 리드 폼이 활성화되어 있는지, 필수 필드가 매핑되어 있는지 확인하세요. 동기화 상태도 **활성**으로 표시되어야 해요.

### Google 리드 폼으로 워크플로우를 시작할 수 있나요?
네. **Google Lead Form Submitted** 트리거를 사용하세요. 필요하면 **Ad Account** 또는 **Lead Form**으로 트리거를 필터링할 수 있어요.

### Google Lead Forms와 Google Forms는 같은 건가요?
아니요. Google Lead Forms는 Google Ads와 연결되어 있어요. Google Forms는 별도의 하이퍼클래스 연동을 사용해요.
