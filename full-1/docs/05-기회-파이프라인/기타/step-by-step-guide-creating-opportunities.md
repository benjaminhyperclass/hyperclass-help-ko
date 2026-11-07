---
원문: https://help.gohighlevel.com/support/solutions/articles/48001175857-step-by-step-guide-to-creating-custom-unsubscribe-links
번역일: 2026-11-06
카테고리: 05-기회-파이프라인
---

# 맞춤 수신 거부 링크 만들기

기본 수신 거부 링크를 브랜드 랜딩 페이지로 바꾸고, 링크를 클릭한 연락처를 워크플로우로 자동 수신거부 처리하는 방법이에요. 랜딩 페이지, 트리거 링크, **Set Contact DND**(연락처 수신거부 설정) 액션이 들어 있는 워크플로우를 만들고, 이메일 하단에 연결하면 끝나요. 모두 5단계예요.

수신 거부 링크를 클릭한 연락처는 직접 만든 브랜드 페이지로 이동하고, 이메일 채널이 자동으로 수신거부 처리돼요.

## 1단계. 수신 거부 안내 랜딩 페이지 만들기

연락처가 수신 거부 링크를 클릭하면 보게 될 페이지예요. 퍼널이나 웹사이트 페이지로 간단하게 만드세요. 수신 거부가 완료됐다는 안내, 감사 인사, 수신 설정 관리 옵션 등을 넣을 수 있어요.

{% hint style="info" %}
이 페이지의 게시된 URL을 복사해 두세요. 2단계에서 트리거 링크에 붙여 넣어요. 다음 단계로 가기 전에 페이지가 게시되어 있고 접속이 되는지 확인하세요.
{% endhint %}

![퍼널 빌더에서 만든 수신 거부 랜딩 페이지 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261125003/original/F6oF0Wn6O50_TnuFP9yd7RTkv0jjwCTIVw.png?1667490676)

## 2단계. 랜딩 페이지 URL로 트리거 링크 만들기

트리거 링크는 클릭되면 플랫폼에서 이벤트가 발생하는, 클릭 추적이 되는 URL이에요. 연락처가 수신 거부 링크를 클릭한 시점을 시스템이 정확히 알 수 있고, 그 시점에 워크플로우로 자동 처리할 수 있어요.

![트리거 링크 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261125458/original/sfQHzV3vpGXUkSnFDenKYz0p9O1LTYsncw.png?1667490774)

## 3단계. 기본 수신 거부 링크 URL을 트리거 링크로 바꾸기

1. **마케팅 > 트리거 링크 > 링크 추가**로 이동하세요.

   ![마케팅 > 트리거 링크 > 링크 추가 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261126153/original/-VyZcKnG5SeCALDNpMx7NVP9lVRqyaegrw.png?1667490908)

2. 아래 표처럼 입력하고 **저장**을 클릭하세요.

| 필드 | 입력값 |
| --- | --- |
| **Name**(이름) | 수신 거부 링크 |
| **Link URL**(링크 URL) | 1단계에서 만든 퍼널 수신 거부 페이지 URL을 붙여 넣으세요 |

![이름과 URL을 입력한 트리거 링크 저장 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261126567/original/glGbKN7IqUol8z0F4hwbrCOQlohiSFRMlg.png?1667490990)

## 4단계. 워크플로우 만들기: Trigger Link Clicked → Set Contact DND

이 워크플로우는 수신 거부 트리거 링크의 클릭을 감지해서, 해당 연락처를 이메일 채널 수신거부로 자동 처리해요.

### 4-1. 새 워크플로우를 처음부터 만들기

**자동화**에서 **Create Workflow**(워크플로우 만들기)를 클릭하고, **처음부터 시작**을 선택한 뒤 **Create New Workflow**(새 워크플로우 만들기)를 클릭하세요.

![자동화 > Create Workflow 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261127134/original/Sv8p6-k-UA0_DO72blhz55stl_xIR6Yvqw.png?1667491133)
![처음부터 시작 > Create New Workflow 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261127183/original/87AS1sjlz186pBDk6WReW4644BjT4QHSqA.png?1667491149)

### 4-2. 워크플로우 이름을 정하고 트리거 추가하기

1. 워크플로우 제목을 `Trigger Link Unsubscribe`로 정하세요.
2. **Add New Workflow Trigger**(새 워크플로우 트리거 추가)를 클릭하세요.
3. **Trigger Link Clicked**(트리거 링크 클릭)를 검색해서 선택하세요.

![제목을 Trigger Link Unsubscribe로 정하고 Add New Workflow Trigger를 강조한 워크플로우 빌더](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261128730/original/J3Pxd_nx2E5vpsS7YcoBNviqZEu_-CUHQw.png?1667491473)
![검색 패널에서 Trigger Link Clicked 트리거를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261157897/original/yyB-KLZyTqKrqK3mOtkhHzmW22YQOsqLug.png?1667495978)

### 4-3. 수신 거부 링크 필터 추가하기

**Add Filters**(필터 추가)를 클릭하고, **Trigger Link**(트리거 링크)를 **수신 거부 링크**로 설정하세요. 3단계에서 만든 트리거 링크예요. <!-- 검토 필요: 원문 내용이 서로 다름 (앞에서는 트리거 링크를 2단계에서 만든다고 안내하고, 여기서는 3단계에서 만들었다고 안내함) -->

![Trigger Link를 수신 거부 링크로 설정한 Add Filters 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261156865/original/dS8hfoUWQxc3Hc4FMfZDulNz6f_wsSnqIQ.png?1667495917)

### 4-4. Set Contact DND 액션 추가하기

1. **+** 를 클릭해 첫 번째 워크플로우 액션을 추가하세요.
2. **Set Contact DND**(연락처 수신거부 설정)를 검색해서 선택하세요.
3. 드롭다운에서 **Enable DND for Specific Channels**(특정 채널 수신거부 활성화)를 선택하세요.
4. 채널로 **Email**(이메일)을 선택하세요.
5. **Save Actions**(액션 저장)를 클릭하세요.

![Set Contact DND 액션 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189714739/original/ztd7nXaMuBE1r8Xs5jTPe061k_VTRRVLPQ.png?1644717318)
![Enable DND for Specific Channels 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261159180/original/Do6EgbFQRcl3V22HmpxAkY51JQP0nZ_Enw.png?1667496316)
![수신거부 채널로 Email을 선택하고 Save Actions 버튼이 보이는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261159739/original/P-JHrs4KKzM5tVSPfbNitaujaxEhrqtjaw.png?1667496364)

### 4-5. 워크플로우 저장하고 게시하기

**Save**(저장)를 클릭한 뒤, 워크플로우 토글을 **Published**(게시됨)로 바꾸세요. 게시하기 전에는 워크플로우가 실행되지 않아요.

![워크플로우 게시 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261160801/original/HDtrZZgv7Ow6sdHhHI0HFfu_F1wmPuHgsg.png?1667496408)

## 5단계. 이메일 하단의 수신 거부 링크를 트리거 링크로 연결하기

이메일 템플릿을 열고 하단의 수신 거부 문구를 찾으세요. 트리거 링크는 이렇게 연결해요.

1. 수신 거부 링크로 쓰는 문구(예: "여기")를 드래그해서 선택하세요.
2. 이메일 편집기 도구 모음에서 **링크** 아이콘을 클릭하세요.

![하단 문구 "여기"를 선택하고 링크 아이콘이 보이는 이메일 편집기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261161713/original/lmJVNd3TaGu8c2qv-0B1FvPDukoNajedmw.png?1667496519)

3. 링크 창의 **링크 목록**에서 **수신 거부 링크**를 선택하고 **저장**을 클릭하세요.

![링크 목록에서 수신 거부 링크를 선택한 링크 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261161888/original/wkDOqjIjtErRzPhEirqGqo227Xl6DfvCjg.png?1667496574)

이제 설정이 끝났어요. 이메일의 수신 거부 링크를 클릭한 사람은 브랜드 페이지로 이동하고, 이메일 채널이 자동으로 수신거부 처리돼요. 따로 수동으로 처리할 필요가 없어요.

![트리거 링크가 연결된 수신 거부 링크가 보이는 이메일 하단](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261162112/original/ZafVcitYh6DrB5hC877AGDzZDGFBaIGlbA.png?1667496598)

## 자주 묻는 질문

### 맞춤 수신 거부 링크를 만들어도 기본 수신 거부 링크가 필요한가요?

이메일 하단에서는 트리거 링크가 기본 수신 거부 URL의 역할을 대신해요. 다만 CAN-SPAM 같은 일부 규정은 모든 상업용 이메일에 작동하는 수신 거부 수단을 두라고 요구해요. 그러니 맞춤 링크가 제대로 작동하는지, 발송 전에 워크플로우가 게시되어 있는지 항상 확인하세요.

### 링크를 클릭했는데 워크플로우가 게시되지 않았으면 어떻게 되나요?

연락처는 수신 거부 랜딩 페이지로 이동하지만, **Set Contact DND** 액션은 실행되지 않아요. 그래서 이메일 수신거부 상태가 업데이트되지 않아요. 캠페인을 보내기 전에 워크플로우가 **Published**(게시됨) 상태인지 항상 확인하세요.

### 이메일 말고 다른 채널도 수신거부로 처리할 수 있나요?

네, 가능해요. **Set Contact DND** 액션에서 **Enable DND for Specific Channels**를 선택하고, SMS·통화·이메일 등 원하는 채널을 자유롭게 조합해서 고르세요. 필요하면 같은 워크플로우에 수신거부 액션을 여러 개 추가할 수도 있어요.

### 기본 링크로 이미 수신 거부한 연락처에도 영향이 있나요?

아니요. 이 워크플로우는 앞으로 트리거 링크를 클릭하는 경우에만 실행돼요. 기본 방식으로 이미 수신 거부한 연락처는 기존 수신거부 상태를 그대로 유지해요. 이 상태는 별개로 관리돼요.

### 수신 거부할 때 태그를 추가하거나 목록에서 제거하는 것도 같은 방식으로 할 수 있나요?

네, 할 수 있어요. 같은 워크플로우에서 **Set Contact DND** 뒤에 액션을 더 추가하세요. 예를 들어 **Add Tag**(태그 추가)로 "구독취소" 태그를 붙이거나 **Remove from List**(목록에서 제거)를 추가할 수 있어요. 이렇게 하면 수신 거부한 연락처를 리포팅이나 발송 제외 목록용으로 쉽게 나눌 수 있어요.

### 랜딩 페이지가 사용자 지정 도메인에 있는데, 따로 설정할 게 있나요?

퍼널 페이지는 연결된 도메인으로 인터넷에서 접속할 수 있게 게시되어 있어야 해요. 아직 도메인을 설정하지 않았다면 **설정 > 도메인**의 **도메인 설정**을 먼저 완료하세요. 그다음 페이지를 게시하고 URL을 복사한 뒤 트리거 링크를 만드세요.

### 이메일 캠페인마다 다른 트리거 링크를 쓸 수 있나요?

네, 가능해요. 캠페인이나 목록마다 트리거 링크를 하나씩 만들고, 필요하면 각각 다른 랜딩 페이지를 연결하세요. 워크플로우 필터에서 정확한 트리거 링크를 지정하면, 그 링크를 클릭한 연락처에게만 수신거부 액션이 적용돼요.
