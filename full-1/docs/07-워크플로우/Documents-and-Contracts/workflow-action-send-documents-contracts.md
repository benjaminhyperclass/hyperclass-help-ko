---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Send Documents & Contracts(문서 및 계약서 보내기)

워크플로우에서 계약서를 초안으로 자동 생성하고, 담당자가 검토한 뒤 직접 보내도록 설정하는 방법을 안내해요. 발신자 필드를 보낼 때마다 알맞은 사용자에게 자동으로 지정하는 방법도 함께 다뤄요.

영업 담당자는 여러 명인데 최종 계약서는 한 사람만 보낸다면, 워크플로우의 **Send Documents & Contracts** 액션으로 이 과정을 간단하게 만들 수 있어요.

템플릿에 **발신자** 필드가 있으면, 동적 할당 기능이 알맞은 내부 사용자를 자동으로 서명자로 지정해요. 실행할 때마다 직접 고칠 필요가 없어요. 워크플로우 발신자나 템플릿 소유자가 레코드나 파이프라인마다 달라지는 팀에 잘 맞아요.

계약서를 바로 보내지 않고 초안으로 만들어 두면, 지정된 계약서 발송 담당자만 검토하고 보낼 수 있어요.

---

## Create as Draft(초안으로 만들기) 옵션을 쓰는 이유

- **검토 창구 일원화:** 계약서를 검토하고 보내는 사람(또는 팀)이 정해져 있어요. 템플릿으로 계약서가 자동 생성되더라도 헷갈리거나 실수로 발송되는 일을 막을 수 있어요.
- **품질 관리:** 영업 담당자의 작업이나 고객이 폼을 제출하는 것과 같은 행동이 워크플로우를 시작하면, 문서는 자동으로 준비돼요. 최종 발송은 **문서 & 계약**에서 지정된 담당자가 확인한 뒤에 이루어져요.

---

## 설정 순서

### 1. 워크플로우 만들기 또는 편집하기

1. 계정에서 **워크플로우**로 이동한 뒤 **New Workflow**(새 워크플로우)를 선택하거나, 기존 워크플로우를 편집하세요.
2. 워크플로우 빌더에서 **Trigger**(트리거)를 추가하세요. 자주 쓰는 트리거는 다음과 같아요.

   - 딜이 새 단계에 도달할 때
   - 특정 폼이 제출될 때
   - 기회 상태가 업데이트될 때

### 2. Send Documents & Contracts 액션 추가하기

1. **Add New Action**(새 액션 추가)을 클릭하세요.
2. 액션 목록에서 **Send Documents & Contracts**(문서 및 계약서 보내기)를 선택하세요.
   ![액션 목록에서 Send Documents & Contracts 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915016/original/T6kB5IGg8ztRYsPFA_UkQlv2yUvCn0bPiw.png?1742899168)

### 3. 액션 설정하기

1. **Action Name**(액션 이름): 알아보기 쉬운 이름을 입력하세요. 예: "계약서 초안 생성"
2. **From User**(발신 사용자): 계약서 초안에 발신자로 표시될 사용자를 선택하세요.
3. **Template**(템플릿): 연락처에게 보낼 계약서 템플릿을 선택하세요.
4. **Sending Mode**(발송 모드): **Create as Draft**(초안으로 만들기)를 선택하세요. 문서는 만들어지지만 바로 발송되지는 않아요.

{% hint style="info" %}
딜을 만드는 영업 담당자가 여러 명이라면, 관련 연락처나 기회마다 계약서 초안을 자동으로 만들도록 워크플로우를 구성할 수 있어요.
{% endhint %}

![Send Documents & Contracts 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915077/original/s9YKy6McZuFUrBnHd3WhNedy0kVqb7tKMQ.png?1742899193)

### 4. 워크플로우 저장하고 게시하기

1. 설정을 마쳤으면 **Save Action**(액션 저장)을 클릭하세요.
2. 워크플로우 전체가 마음에 들면 **Publish**(게시)를 클릭하세요. 이제 이 워크플로우에 들어오는 연락처마다 계약서 초안이 자동으로 만들어져요.

```
제한 사항 및 우회 방법

워크플로우는 연락처가 워크플로우에 들어온 시점의 문서/계약서 상태만 확인해요. 예를 들어 “Document Sent”(문서 발송됨) 같은 트리거로 연락처가 들어온 뒤에 “Status is Completed”(상태가 완료임) 조건을 추가하더라도, 이후 문서가 완료되었다고 해서 그 분기 로직이 갱신되지는 않아요.

이 동작은 동적이지 않아요. 워크플로우 밖에서 일어난 상태 변경은 추적하거나 다시 평가하지 않아요.

문서 상태에 따라 실시간으로 반응해야 한다면, “Document Signed”(문서 서명됨)나 “Document Completed”(문서 완료됨) 같은 이벤트로 시작하는 두 번째 워크플로우를 만드세요. 그리고 그 두 번째 워크플로우에서 갱신된 상태를 기준으로 연락처를 분기하세요.
```

---

## 발신자 필드 자동 지정하기 (From User와 Template Owner)

이 설정을 쓰면 **서명자 > 발신자**로 지정된 템플릿 필드가 보낼 때 자동으로 배정돼요. 실행할 때마다 직접 고칠 필요가 없어요.

### 작동 방식

선택한 템플릿에 **발신자** 필드가 있으면, 액션이 이를 감지해서 아래에서 고른 대상에게 필드를 지정해요.

이 설정은 해당 발송에서 템플릿 안의 모든 **발신자** 필드에 적용돼요.

### 선택지

**From User**(발신 사용자): **발신자** 필드를 워크플로우의 **From user**(문서를 보내는 사용자)에게 지정해요.

**Template Owner**(템플릿 소유자): **발신자** 필드를 **템플릿을 마지막으로 수정한 사용자**에게 지정해요.

### 단계

1. 액션 맨 위에서 **From user**를 선택하세요.

![액션 상단에서 From user 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064084884/original/QkZeuoRlYWQuewwHcrDpDJ-8JXDW3u9CaA.png?1770122833)

2. 작성 가능한 필드에 **서명자 > 발신자**가 설정된 템플릿을 **Template**에서 선택하세요.

3. **Assign Sender Fields To**(발신자 필드 지정 대상)를 **From User** 또는 **Template Owner**로 설정하세요.

![Assign Sender Fields To 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064085028/original/vhFXH3upErCxqlVBHj2EQ3ho13auclX32g.png?1770122957)

4. **Sending Mode**와 **Channel**(채널)을 선택하세요. 채널은 **Email**(이메일) 또는 **Direct**(다이렉트) 중에서 고를 수 있어요. 그다음 **Save**(저장)를 클릭하세요.

![Sending Mode와 Channel 선택 후 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064085067/original/tlScsGlwgcQDmSF4Wssjq1R8oQE_HX44vg.png?1770122979)

---

## 계약서 초안 보내기

워크플로우가 계약서를 초안 상태로 만들고 나면, 최종 발송은 지정된 담당자나 팀이 맡아요. 보내는 방법은 다음과 같아요.

1. **문서 & 계약으로 이동하기:** 계정에서 **문서** 또는 **계약서** 섹션으로 이동하세요.
2. **초안 찾기:** 초안으로 만들어진 계약서가 모두 보여요.
3. **검토 및 수정하기(필요한 경우):** 문서를 최종적으로 수정하거나 내용을 맞춤 설정하세요.
4. **계약서 보내기:** 준비가 되면 **보내기**를 클릭하세요. 계약서가 연락처에게 전달되고, 이후 상태를 여기서 추적할 수 있어요.

![계약서 초안 보내기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915289/original/CsvIacGOTXHyQUbjfLVfzjbRS-fsFzmgBQ.png?1742899289)

---

## 자주 묻는 질문

### 초안 계약서를 보내기 전에 여러 명이 검토할 수 있나요?
네. 팀이 함께 검토하는 방식이라면, 필요한 권한이 있는 사용자는 누구나 초안을 열어 검토할 수 있어요. 발송은 그 뒤에 이루어져요.

### 검토 단계 없이 바로 자동으로 보낼 수 있나요?
네, 가능해요. **Sending Mode**에서 “Send Directly”(바로 보내기)를 선택하면 초안 단계를 거치지 않고 계약서가 자동으로 발송돼요.

### 계약서 상태는 어디에서 볼 수 있나요?
**결제 > 문서 & 계약**으로 이동하세요. 각 계약서가 **Draft**(초안), **Sent**(발송됨), **Completed**(완료) 중 어느 상태인지 표시돼요.
