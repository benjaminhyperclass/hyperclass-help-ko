---
원문: /support/solutions/articles/155000001301-how-to-create-and-send-document-or-contract-templates-automatically-in-a-workflow
번역일: 2026-11-06
카테고리: 14-문서-계약
---

# 워크플로우로 문서·계약 템플릿 자동 발송하기

제안서, 견적서, 서비스 계약서 같은 문서·계약 템플릿을 만들고 하이퍼클래스 워크플로우로 자동 발송하는 방법을 안내해요. 템플릿 만들기, 커스텀 값 넣기, 발송 설정, 문서 상태 추적까지 차례로 다뤄요.

---

---

## 문서 & 계약 기능이란?

**문서 & 계약** 기능으로 브랜드가 담긴 계약 템플릿(제안서, 견적서, 서비스 계약서 등)을 만들 수 있어요. 이 템플릿은 법적 효력이 있고, 태그 추가나 파이프라인 단계 변경 같은 조건이 충족되면 워크플로우로 자동 발송할 수 있어요. 문서가 필요한 시점에 알아서 전달되므로 일일이 후속 연락을 하지 않아도 되고, 영업·온보딩 과정도 간단해져요.

---

## 워크플로우로 문서·계약을 보낼 때 좋은 점

문서 발송을 자동화하면 서비스·영업 파이프라인이 간결해지고, 고객과의 소통도 깔끔하고 규정에 맞게 유지돼요.

- 특정 조건이 충족되면 계약서를 자동으로 보내요.
- 커스텀 값으로 내용이 채워지는 재사용 템플릿을 써요.
- 법적 효력이 있는 전자 서명을 몇 초 만에 받아요.
- 가격·상품 목록을 문서 안에 바로 넣어요.
- 문서 발송, 서명 상태, 완료 여부를 추적해요.
- 문서에 서명이 끝난 뒤 이어질 후속 작업을 워크플로우로 설정해요.

---

## 문서·계약 템플릿 만들기

템플릿은 재사용할 수 있고, 로고, 커스텀 값, 가격표 등을 넣을 수 있어요.

### 1단계: 새 문서 템플릿 열기

1. **결제 > 문서 & 계약 > 템플릿**으로 이동하세요.
2. **+ 신규**를 누르고 **새 템플릿 만들기**를 선택하세요.
3. 템플릿 이름을 입력하세요(예: "제안서").

![새 템플릿 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411293/original/OmhgD7ily1z56D3MRVWiuOTi-yrf-Rx2kQ.gif?1746821717)

### 2단계: 문서 템플릿 디자인하기

1. **요소 추가**를 눌러 문서를 구성하세요.
   - **이미지**: 로고나 브랜딩 요소를 올려요.
   - **문자**: 계약 조건, 서비스 설명 등을 입력해요.
   - **커스텀 값**: 연락처 이름, 이메일처럼 상황에 따라 바뀌는 필드를 넣어요.
   - **Product List**(상품 목록): 상품 카탈로그에서 가져온 서비스나 항목을 가격과 함께 넣어요. **목록에 이미지 표시**로 상품 이미지를 보이거나 숨길 수 있어요. 문서 편집기에서 새 상품을 만들 때는 상품 이미지도 올릴 수 있어요.
   - **Signature Box**(서명란): 고객이 서명할 공간을 추가해요.
2. **저장**을 눌러 나중에 다시 쓸 수 있게 템플릿을 보관하세요.

![문서 템플릿 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411268/original/Onr7QIioElyXphNe-tZ2OJmFyiKfoag5lA.png?1746821564)

{% hint style="info" %}
저장한 템플릿은 **템플릿** 탭에서 언제든 편집할 수 있어요. 다만 변경 내용은 이미 발송했거나 임시 저장해 둔 문서에는 소급 적용되지 않아요.
{% endhint %}

---

## 워크플로우로 문서 자동 발송하기

태그가 추가되거나 파이프라인 단계가 바뀌는 등 특정 이벤트가 생길 때 문서 템플릿을 자동으로 보낼 수 있어요. **Send Documents & Contracts**(문서 및 계약 보내기) 액션을 쓰려면 템플릿이 저장되어 있어야 하고, 연락처에 올바른 이메일 주소가 있어야 해요.

### 1단계: 새 워크플로우 만들기

1. **자동화 > 워크플로우**로 이동하세요.
2. **+ Create Workflow**(워크플로우 만들기)를 누르고 **처음부터 시작**을 선택하세요.

![새 워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411342/original/kJPn9QLXNOuPN69wFaCDCMItDFgTlYWFBQ.png?1746821887)

### 2단계: 워크플로우 설계하기

1. 트리거를 선택하세요(예: **Tag Added**(태그 추가됨), **Opportunity Updated**(기회 업데이트됨)).
2. **Send Documents & Contracts** 액션을 추가하고 아래처럼 설정하세요.
   - 액션 이름을 입력해요.
   - **From user**(보내는 사용자)에서 문서를 보낼 사용자를 선택해요.
   - **Template**(템플릿)에서 저장해 둔 템플릿을 선택해요(예: "행사 제안서").
   - **Sending Mode**(발송 방식)에서 **Send Directly**(바로 보내기)와 **Create as Draft**(임시 저장으로 만들기) 중 하나를 선택해요.
   - **Channel**(채널)에서 발송 방법을 선택해요. 이메일, SMS, 또는 둘 다 고를 수 있어요.

     {% hint style="info" %}
     SMS를 선택해도 연락처에 이메일이 등록되어 있어야 해요. 연락처에 이메일이 없으면 계약서는 만들어지지만, 이메일을 추가할 때까지 **Drafts**(임시 저장함)에 남아 있어요.
     {% endhint %}
3. **Save**(저장)를 누른 뒤 워크플로우를 **Publish**(게시)하세요.

![Send Documents & Contracts 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059226086/original/nZVKLjKIztDyqcm83H-rik1RC0LnYI47Qg.png?1764134652)

{% hint style="info" %}
나중에 검토한 뒤 직접 보내고 싶다면 **Create as Draft**를 선택하세요.
{% endhint %}

### 템플릿에서 서명자를 발신자로 지정하기

서명자를 **발신자**로 지정하면 워크플로우가 실행될 때 알맞은 내부 사용자가 서명자로 지정돼요. 보내는 사람마다 템플릿을 고치지 않아도 돼요.

템플릿 편집기에서 아래 순서로 진행하세요.

1. **결제 > 문서 & 계약 > 템플릿**으로 이동해 **신규**를 누르세요. 기존 템플릿을 편집해도 돼요.

   ![템플릿 목록과 신규 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064086014/original/XIeK1LtAUU2zSjsRx844pZ8cvRO5T68PzQ.png?1770123485)

2. 문서에 **서명** 필드(또는 입력할 수 있는 다른 필드)를 추가하세요.
3. 해당 필드의 **속성**에서 **서명자**를 **발신자**로 설정하세요. **발신자**는 문서를 보내는 사용자예요. 워크플로우가 이 값을 상황에 맞게 연결해 줘요.

   ![서명자를 발신자로 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064086169/original/5aLhe_dzO3m3yQQcW2sw0NaY4wfugO2EmA.png?1770123547)

### 입력 필드를 특정 직원에게 지정하기(템플릿 단위)

입력 필드를 선택하면 서브 계정에 있는 특정 직원에게 지정할 수 있어요.

1. 템플릿 편집기에서 입력 필드(예: **서명**)를 누르세요.
2. 오른쪽 **속성** 패널에서 **서명자**를 여세요.
3. 직원 목록에서 지정할 직원을 선택하세요.
4. 템플릿을 **저장**하세요.

이 템플릿으로 문서를 만들면 선택한 직원이 해당 필드에 미리 지정돼요.

![입력 필드에 직원을 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066571205/original/LagXiPECtFk9IgBjJItG2vUQJSmu-Kuf5A.png?1773135948)

---

## 발신자 필드 연결하기

템플릿에 **발신자** 필드가 있으면, 워크플로우가 발송 시점에 알맞은 내부 서명자를 지정해 줘요. 직접 고칠 필요가 없어요.

워크플로우에서 아래 순서로 진행하세요.

1. 워크플로우에 **Send Documents & Contracts** 액션을 추가하세요.
2. **From user**를 선택하세요. 문서와 알림을 보내는 사용자를 정해요.

   ![From user 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087045/original/AmhoiweiSapZ4OVpNTrVYtFDpEQgGUcIlQ.png?1770124033)

3. **서명자 → 발신자**로 설정한 필드가 들어 있는 **Template**을 선택하세요.

   ![발신자 필드가 있는 템플릿 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087156/original/2xK03jvKzwKqtOPbwKMIOnrgHFwI4298EQ.png?1770124075)

4. **Assign Sender Fields To**(발신자 필드 지정 대상)에서 아래 중 하나를 선택하세요.
   - **From User**: 워크플로우의 발신자가 서명해요.
   - **Template Owner**: 템플릿을 마지막으로 업데이트한 사용자가 서명해요.

   ![Assign Sender Fields To 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087238/original/xcrjzJlR8nC3tftcYmmjMnhZgjv6Gro6Ug.png?1770124133)

5. **Sending Mode**(발송 방식)와 **Channel**(**Email** 또는 **Direct**)을 선택한 뒤 **Save**하고 게시하세요.

**동작**: 선택한 템플릿에 **발신자** 필드가 있으면 발송 전에 해당 필드가 지정돼요.

---

## 연락처가 받는 내용

워크플로우가 실행되면 연락처는 문서로 연결되는 보안 링크가 담긴 이메일을 받아요.

- 이메일에는 연락처 이름과 제안서 또는 계약 내용이 들어가요.
- 연락처는 링크를 눌러 브라우저에서 바로 서명할 수 있어요. 로그인이나 다운로드는 필요 없어요.

---

## 문서 상태 추적 방법

**문서 & 계약** 화면에서 문서가 임시 저장, 발송, 열람, 완료 중 어떤 상태인지 확인할 수 있어요.

1. **결제 > 문서 & 계약 > 전체 문서 & 계약**으로 이동하세요.
2. 위쪽 탭으로 문서를 걸러 보세요.
   - **Drafts**(임시 저장함)
   - **Waiting for Others**(상대방 대기 중)
   - **Completed**(완료)
   - **결제**

![문서 상태별 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411421/original/bflqdq6OBmogTkDscLL7swmCIzr_iam2vA.png?1746822135)

---

## 자주 묻는 질문

### 문서를 보낸 뒤에도 편집할 수 있나요?
**Create as Draft**를 선택한 경우에만 편집할 수 있어요. 바로 보낸 문서는 잠겨서 편집할 수 없어요.

### 연락처가 서명하지 않으면 어떻게 되나요?
문서가 **Waiting for Others** 상태로 남아요. 다시 보내거나 연락처에 직접 연락해 서명을 요청할 수 있어요.

### 한 문서를 두 명 이상에게 보낼 수 있나요?
네. 여러 수신자 지원(Multiple Recipient Support)을 사용하면 한 문서에서 여러 사람에게 서명 요소를 지정할 수 있어요.

### 서명할 때 결제도 받을 수 있나요?
네. 템플릿에 가격이 있는 상품 목록이 들어 있으면 Stripe나 다른 결제 연동으로 결제 수금을 켤 수 있어요.

### 서명한 문서는 법적 효력이 있나요?
네. 하이퍼클래스의 전자 서명 절차는 법적 효력과 감사 가능성에 관한 주요 전자 서명 규정을 따라요.

### 받는 사람이 휴대폰에서 서명할 수 있나요?
네. 문서는 모바일에 맞게 표시되어 휴대폰 브라우저에서 바로 서명할 수 있어요.

### 문서를 보내기 전에 미리 볼 수 있나요?
네. 설정할 때 **Create as Draft** 모드를 선택하면 미리 확인하고, 최종 검토를 마친 뒤 직접 보낼 수 있어요.

### 연락처에 이메일이 없는데 SMS로 계약서를 보내면 어떻게 되나요?
계약서는 만들어지지만 **Drafts**에 남아 있어요. 계약서를 보내려면 먼저 연락처에 이메일을 추가해야 해요.

### SMS로 보내는데도 이메일 주소가 필요한 이유는 뭔가요?
현재 연락처의 이메일을 추적, 버전 기록, 계약 수명 주기 관리를 위한 필수 식별 값으로 사용하고 있어요. 계약서를 SMS로 전달하더라도 시스템 무결성을 위해 연락처 프로필에 이메일이 있어야 해요.
