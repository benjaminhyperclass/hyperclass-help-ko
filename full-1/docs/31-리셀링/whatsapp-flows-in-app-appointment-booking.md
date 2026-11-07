---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003720-whatsapp-flows-in-app-appointment-booking
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 플로우로 예약 받기

WhatsApp 플로우를 쓰면 고객이 WhatsApp 대화 안에서 예약을 끝까지 마칠 수 있어요. 예약 도중에 이탈하는 고객이 줄고 예약 완료율이 올라가요. 이 문서에서는 예약 플로를 만드는 방법, 템플릿이나 워크플로우로 플로를 보내는 방법, **AI에게 문의**로 플로를 관리하는 방법을 안내해요.

## 플로우로 예약률을 높이고 이탈을 줄이는 이유

WhatsApp 플로우(WhatsApp Flows)는 WhatsApp 안에서 단계별로 진행되는 대화형 화면을 만드는 기능이에요. 정보를 받고, 선택지를 보여 주고, 예약 같은 특정 절차를 차례대로 안내할 수 있어요.

- 마찰 감소: 고객이 외부 웹사이트나 앱으로 넘어가지 않고 WhatsApp 안에서 예약을 마칠 수 있어요.
- 익숙한 화면: 많은 사람이 이미 쓰는 WhatsApp이라 사용이 편해요.
- 즉각적인 반응: 대화 중에 바로 예약을 시작할 수 있어서, 고객의 관심이 높을 때 예약으로 이어져요.
- 개인화: 고객 정보가 미리 채워져 있어서 입력할 내용이 줄고 예약이 더 편해져요.
- 빠른 로딩: 외부 웹사이트와 달리 WhatsApp 안에서 실행되어 보통 로딩과 반응이 더 빨라요.

## 예약 플로 만들기

1. **설정 > WhatsApp > 플로우**로 이동하세요.

   ![WhatsApp 플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034646684/original/NVp_HaDFK6wayVWYNpnobSJJdlt_XL0ltA.png?1728907137)

2. **Create new Flow**(새 플로 만들기)를 클릭하세요.
3. 플로 이름을 입력하고, 예약을 받을 캘린더를 선택한 뒤 **다음**을 클릭하세요.

   ![새 플로 만들기 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034969111/original/SD77SO7WK3PD2OJA-qTqKNYjpyjlNGxg.png?1729254396)

4. 예약 플로에 기본으로 들어 있는 입력 필드의 배치를 정리하세요.

   ![입력 필드 배치 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035181602/original/_B5k1a8IdV7Ri5ExOnW6FH9_hoUDVMvQCA.png?1729599697)

5. **머리글**, **Body**(본문), **Footer**(바닥글), **버튼 텍스트**를 입력하세요.
6. **게시**를 클릭하세요.

   ![플로 내용 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035182484/original/FO0nEdCva9goQYT6lRIBHPE-jv4wVhIbAQ.png?1729600214)

{% hint style="info" %}
결제가 켜져 있는 캘린더는 WhatsApp 플로우에서 지원하지 않아요. 현재 WhatsApp에 결제 기능이 없기 때문이에요.
{% endhint %}

## 템플릿으로 WhatsApp 플로우 보내기

1. **WhatsApp > 템플릿 > 템플릿 만들기**로 이동하세요.

   ![WhatsApp 템플릿 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035183476/original/MLEVHH87wrWLYCygp9xjE4rlF8iUeYe_RA.png?1729600770)

2. 템플릿 이름, **카테고리**, **언어**, 머리글 텍스트, 본문, 바닥글을 입력하세요.

   ![템플릿 내용 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035184031/original/8GtcOZvkunN9KntkgRlzMdNfRcSysmnYMA.png?1729601046)

3. 버튼을 추가하고 **플로**를 선택해서 만들어 둔 WhatsApp 플로우와 연결하세요.

   ![플로 버튼 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035184085/original/LCkagOXfbXIFZ-3wcIbK1ZqEaqwucam1kw.png?1729601081)

## 워크플로우에서 WhatsApp 플로우 보내기

{% hint style="info" %}
반복되는 캘린더 일정은 WhatsApp 플로우에서 지원하지 않아요.
{% endhint %}

### 옵션 1: WhatsApp 템플릿으로 플로우 보내기

1. **자동화 > Create Workflow**(워크플로우 만들기) **> 처음부터 시작**으로 이동하세요.

   ![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035062857/original/b4eyIMVE8ocE8xLR7vp4AfwkIovWWtBbeQ.png?1729493072)

2. **WhatsApp Action**(WhatsApp 액션)을 추가하세요.
3. WhatsApp 플로가 들어 있는 템플릿을 선택하세요.
4. **Save Action**(액션 저장)을 클릭하세요.

   ![플로 템플릿을 선택한 WhatsApp 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035184319/original/bvxkgYVoIdIOtvCziiWAcuseq8bHnShx5g.png?1729601212)

### 옵션 2: 열려 있는 대화에서 플로우 보내기 (무료)

1. **자동화 > Create Workflow**(워크플로우 만들기) **> 처음부터 시작**으로 이동하세요.

   ![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035062857/original/b4eyIMVE8ocE8xLR7vp4AfwkIovWWtBbeQ.png?1729493072)

2. **+** 버튼을 클릭하세요.
3. **WhatsApp: Customer Service Window Check**(고객 서비스 창 확인)를 추가하세요.
4. **Save Action**(액션 저장)을 클릭하세요.

   ![고객 서비스 창 확인 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035062955/original/MkcpQ6kS0vmVceanLIkud9dp6cNbDsBDtQ.png?1729493170)

5. **Open**(열림) 분기 아래에 **WhatsApp: Send Flows**(플로우 보내기)를 추가하세요.
6. 보낼 WhatsApp 플로를 선택하세요.

   ![플로우 보내기 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035063231/original/NM7MrrswjF12yTOuFb65GeBUiQ46MhYybA.png?1729493428)

7. **Save Action**을 클릭해 워크플로우 설정을 마무리하세요.

   ![액션 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035063241/original/EUKYLlZmty06UbUsEW9TxeLqQ51bje-wLg.png?1729493465)

## AI에게 문의로 플로 관리하기

WhatsApp용 **AI에게 문의**에 대화하듯 요청하면 WhatsApp 예약 플로를 만들고, 수정하고, 게시하고, 사용 중단하고, 삭제할 수 있어요. 플로를 직접 설정하지 않아도 되어서 셀프 예약 환경을 빠르게 만들 수 있어요.

### AI에게 문의로 할 수 있는 일

플로의 생성부터 삭제까지 전 과정을 관리할 수 있어요.

- 사용할 캘린더나 파이프라인을 말해서 새 예약 부킹 플로를 만들어요.
- 기존 플로를 대화로 수정해요. 예를 들어 질문이나 예약 가능 시간 규칙을 바꿀 수 있어요.
- 더 이상 필요 없는 플로를 게시하거나, 사용 중단하거나, 삭제해요.
- 안내에 따라 캘린더를 선택해서 플로를 알맞은 하이퍼클래스 캘린더("영업 캘린더", "클리닉 예약" 등)에 연결해요.

### 요청 예시

- "영업 캘린더에 연결된 WhatsApp 예약 플로를 만들고 게시해 줘"
- "클리닉 예약 플로에 보험 정보를 묻는 질문을 추가해 줘"
- "상담 캘린더용 WhatsApp 예약 플로를 만들어서 게시하고, 리마인더 템플릿에 연결하는 방법도 알려 줘"

**AI에게 문의**로 WhatsApp 플로우, 템플릿, 캠페인, 분석을 관리하는 방법은 WhatsApp용 **AI에게 문의** 문서를 참고하세요.

## 자주 묻는 질문

### 예약용 WhatsApp 플로우는 어떻게 보내나요?

방법은 두 가지예요.

**옵션 1 — WhatsApp 템플릿 사용:** **자동화 > Create Workflow > 처음부터 시작**으로 이동하세요. **WhatsApp Action**을 추가하고 예약용 WhatsApp 플로가 들어 있는 템플릿을 선택한 뒤 액션을 저장하세요.

**옵션 2 — 열려 있는 대화 사용:** **자동화 > Create Workflow > 처음부터 시작**으로 이동하세요. **+** 버튼을 클릭해 **WhatsApp: Customer Service Window Check**를 추가하고 액션을 저장하세요. **Open** 분기 아래에 **WhatsApp: Send Flows**를 추가하고 보낼 플로를 선택한 뒤 저장하세요.

### 예약 플로는 어떻게 만드나요?

**설정 > WhatsApp > 플로우**로 이동해서 새 플로를 만드세요. 이름을 입력하고 예약을 받을 캘린더를 선택한 뒤, 기본 입력 필드를 배치하세요. 머리글, 본문, 바닥글, 버튼 텍스트를 입력하고 **게시**를 클릭하면 돼요.

{% hint style="info" %}
결제 옵션이 있는 캘린더는 지원하지 않아요. 현재 WhatsApp이 결제를 처리하지 않기 때문이에요.
{% endhint %}

### 템플릿으로 WhatsApp 플로우를 보내려면 어떻게 하나요?

**WhatsApp > 템플릿 > 템플릿 만들기**로 이동하세요. 템플릿 이름, **카테고리**, **언어**, 머리글 텍스트, 본문, 바닥글을 입력하세요. 버튼을 추가하고 **플로**를 선택하면 WhatsApp 플로우와 연결돼요.

### AI에게 문의로 WhatsApp 플로우를 만들고 관리할 수 있나요?

네. WhatsApp용 **AI에게 문의**로 예약 플로의 생성부터 삭제까지 대화하듯 관리할 수 있어요. 직접 설정하지 않아도 플로를 만들고, 수정하고, 게시하고, 사용 중단하고, 삭제할 수 있어요. 예를 들어 "영업 캘린더에 연결된 WhatsApp 예약 플로를 만들고 게시해 줘"라고 요청하면 **AI에게 문의**가 플로 설정을 모두 처리해요.

### 예약 플로우를 연결하면 왜 예약률이 오르고 이탈이 줄어드나요?

- 마찰 감소: 고객이 외부 사이트나 앱으로 이동하지 않고 WhatsApp 안에서 예약을 마칠 수 있어요.
- 익숙한 화면: 많은 사람이 쓰는 WhatsApp이라 고객이 편하게 느껴요.
- 즉각적인 반응: 대화에서 바로 예약을 시작할 수 있어서 고객의 관심을 놓치지 않아요.
- 개인화: 이름, 연락처 같은 주요 정보가 미리 채워져서 입력 부담이 줄어요.
- 빠른 로딩: 외부 웹사이트처럼 느려지지 않고 빠르게 진행돼요.

### 예약에 WhatsApp 플로우를 쓰면 어떤 점이 좋나요?

- 마찰 감소: 모든 과정이 WhatsApp 안에서 이루어져 예약이 더 매끄러워요.
- 고객 정보 자동 입력: 이름, 이메일, 전화번호, 시간대 같은 중요한 정보가 자동으로 채워져요.
- 참여도 향상: 단계별로 안내하는 대화 덕분에 헷갈림이 줄고 완료율이 높아져요.
- 빠른 로딩: 플로 안의 동작이 WhatsApp 안에서 바로 이루어져 더 빨라요.
- 무료 대화: 예약용 서비스 대화는 매월 처음 1,000건이 무료예요.

### 예약용 WhatsApp 플로우에는 어떤 제한이 있나요?

- 결제 처리 불가: 결제가 필요한 예약은 WhatsApp 플로로 받을 수 없어요. 현재 WhatsApp이 결제를 지원하지 않기 때문이에요.
- 커스텀 필드: 기본 입력 필드만 지원해요. 커스텀 필드는 직접 처리해야 해요.
- 반복 예약: 반복되는 캘린더 일정은 지원하지 않아요.
- 게스트 예약: WhatsApp 플로에서는 게스트 예약 기능을 쓸 수 없어요.

### WhatsApp 플로우로 개인화된 예약 경험을 만들려면 어떻게 하나요?

이름, 이메일, 전화번호처럼 고객별 정보는 자동으로 미리 채워져요. 메시지 템플릿에 고객 취향에 맞는 변수를 넣으면 고객마다 맞춤형으로 매끄러운 예약 경험을 줄 수 있어요.

### 예약용 WhatsApp 플로우를 보내면 비용이 드나요?

WhatsApp 플로우로 보내는 예약용 서비스 대화는 매월 처음 1,000건이 무료예요. 그 이후에는 WhatsApp 요금 정책에 따라 비용이 청구될 수 있어요.

{% hint style="info" %}
서브 계정의 WhatsApp 연동이 Coex 방식이면 플로우를 쓸 수 없어요. Meta가 Coex 연동에서는 플로우를 지원하지 않기 때문이에요.
{% endhint %}
