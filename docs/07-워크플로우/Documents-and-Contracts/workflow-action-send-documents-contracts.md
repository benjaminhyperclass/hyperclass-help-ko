---

번역일: 2026-04-08
카테고리: 07-워크플로우 > Documents & Contracts
---

# 워크플로우 액션 - 문서 및 계약서 보내기

조직에 여러 명의 영업직원이 있지만 최종 계약서 발송을 담당하는 사람은 한 명뿐이라면, 워크플로우의 문서 및 계약서 보내기(Send Documents & Contracts) 액션을 사용하여 프로세스를 간소화할 수 있습니다.

동적 배정 기능을 통해 발송자(Sender) 필드가 포함된 템플릿에서 올바른 내부 사용자가 서명하도록 자동 지정되어, 실행할 때마다 수동으로 편집할 필요가 없습니다. 워크플로우 발송자나 템플릿 소유자가 레코드나 파이프라인에 따라 달라지는 팀에게 이상적입니다.

계약서를 직접 발송하는 대신 초안으로 생성하도록 선택하면, 지정된 계약서 발송 담당자만 계약서를 검토하고 발송하도록 보장할 수 있습니다.

---

**목차**

- [왜 "초안으로 생성" 기능을 사용하나요?](#왜-초안으로-생성-기능을-사용하나요)
- [단계별 가이드](#단계별-가이드)
  - [1. 워크플로우 생성 또는 편집](#1-워크플로우-생성-또는-편집)
  - [2. "문서 및 계약서 보내기" 액션 추가](#2-문서-및-계약서-보내기-액션-추가)
  - [3. 액션 구성](#3-액션-구성)
  - [4. 워크플로우 저장 및 발행](#4-워크플로우-저장-및-발행)
- [초안 계약서 발송하기](#초안-계약서-발송하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 왜 "초안으로 생성" 기능을 사용하나요? {#why-use-create-as-draft}

- **중앙화된 검토**: 한 사람(또는 팀)만 계약서 검토 및 발송을 담당하므로, 템플릿을 사용한 자동 생성 후에도 혼란이나 실수로 인한 발송을 방지할 수 있습니다.

- **품질 관리**: 영업직원의 행동이나 최종 사용자의 폼 완성 같은 액션에 기반하여 워크플로우가 문서 준비를 트리거하지만, 최종 발송은 문서 및 계약서(Documents & Contracts) 섹션에서 지정된 검토를 거친 후 이루어집니다.

---

## 단계별 가이드 {#step-by-step-guide}

### 1. 워크플로우 생성 또는 편집 {#create-or-edit-workflow}

- 계정에서 워크플로우(Workflows)로 이동하여 새 워크플로우(New Workflow)를 선택하거나 기존 워크플로우를 편집하세요.

- 워크플로우 빌더에서 트리거(Trigger)를 추가하세요. 일반적인 트리거는 다음과 같습니다:
  - 새로운 딜 단계에 도달
  - 특정 폼 완성
  - 기회 상태 업데이트

### 2. "문서 및 계약서 보내기" 액션 추가 {#add-send-documents-action}

- 새 액션 추가(Add New Action)를 클릭하세요.

- 사용 가능한 액션 목록에서 문서 및 계약서 보내기(Send Documents & Contracts)를 선택하세요.

![워크플로우 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915016/original/T6kB5IGg8ztRYsPFA_UkQlv2yUvCn0bPiw.png?1742899168)

### 3. 액션 구성 {#configure-action}

- **액션 이름**: 의미있는 액션 이름을 지정하세요 (예: "초안 계약서 생성").

- **발송자(From User)**: 초안 계약서에서 발송자로 표시될 사용자를 선택하세요.

- **템플릿(Template)**: 연락처에게 보낼 계약서 템플릿을 선택하세요.

- **발송 모드(Sending Mode)**: 초안으로 생성(Create as Draft)을 선택하세요. 이렇게 하면 문서는 생성되지만 즉시 발송되지 않습니다.

**팁**: 여러 영업직원이 딜을 생성하는 경우, 각 관련 연락처나 기회에 대해 초안 계약서를 자동 생성하도록 워크플로우를 구축할 수 있습니다.

![액션 구성 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915077/original/s9YKy6McZuFUrBnHd3WhNedy0kVqb7tKMQ.png?1742899193)

### 4. 워크플로우 저장 및 발행 {#save-publish-workflow}

- 세부 설정을 완료한 후 액션 저장(Save Action)을 클릭하세요.

- 전체 워크플로우에 만족하면 발행(Publish)을 클릭하세요. 이제 이 워크플로우에 들어오는 모든 연락처는 자동으로 초안 계약서 생성을 트리거합니다.

**제한사항 및 해결책**
워크플로우는 연락처가 워크플로우에 진입하는 순간의 문서/계약서 상태만 평가합니다. 연락처가 "문서 발송됨" 같은 트리거로 진입한 후 "상태가 완료됨"에 대한 조건을 추가하더라도, 문서가 나중에 완료되어도 해당 분기 로직은 업데이트되지 않습니다.
이 동작은 동적이지 않습니다 — 워크플로우 외부의 상태 업데이트는 추적되거나 재평가되지 않습니다.
문서 상태에 기반한 실시간 응답이 필요한 경우, 문서 서명됨(Document Signed)이나 문서 완료됨(Document Completed) 같은 이벤트로 트리거되는 두 번째 워크플로우를 생성하고, 업데이트된 상태를 사용하여 해당 두 번째 워크플로우에서 연락처를 라우팅하세요.

---

## **발송자 필드 동적 배정 (발송 사용자 vs 템플릿 소유자)**

이 설정을 사용하면 발송 시점에 "서명 대상자 → 발송자(To be signed by → Sender)"로 표시된 템플릿 필드를 자동 배정할 수 있어, 실행할 때마다 수동 편집이 필요하지 않습니다.

**작동 방식**

선택한 템플릿에 발송자 필드가 포함되어 있으면, 액션이 이를 감지하여 아래 선택 사항에 해당 필드를 배정합니다.

이는 해당 발송의 템플릿에 있는 모든 발송자 필드에 적용됩니다.

**옵션**

발송 사용자(From User): 발송자 필드를 워크플로우의 발송 사용자(문서를 보내는 사용자)에게 배정합니다.

템플릿 소유자(Template Owner): 발송자 필드를 템플릿을 마지막으로 업데이트한 사용자에게 배정합니다.

**단계**

1. 액션 상단에서 발송 사용자(From user)를 선택하세요.

![발송자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064084884/original/QkZeuoRlYWQuewwHcrDpDJ-8JXDW3u9CaA.png?1770122833)

2. 입력 가능한 필드에서 "서명 대상자 → 발송자(To be signed by → Sender)"를 사용하는 템플릿(Template)을 선택하세요.

3. **발송자 필드 배정 대상(Assign Sender Fields To)**을 **발송 사용자(From User)** 또는 **템플릿 소유자(Template Owner)**로 설정하세요.

![발송자 필드 배정 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064085028/original/vhFXH3upErCxqlVBHj2EQ3ho13auclX32g.png?1770122957)

4. **발송 모드(Sending Mode)**와 채널(이메일 또는 직접)을 선택한 후 저장하세요.

![발송 모드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064085067/original/tlScsGlwgcQDmSF4Wssjq1R8oQE_HX44vg.png?1770122979)

---

## 초안 계약서 발송하기 {#sending-draft-contracts}

워크플로우가 계약서를 초안 상태로 생성한 후, 최종 발송 책임은 지정된 사람이나 팀에게 있습니다. 발송 방법은 다음과 같습니다:

- **문서 및 계약서로 이동**: 계정에서 문서(Documents) 또는 계약서(Contracts) 섹션으로 이동하세요.

- **초안 찾기**: 모든 초안 계약서를 볼 수 있습니다.

- **검토 및 편집(필요한 경우)**: 문서에 최종 편집이나 개인화를 추가하세요.

- **계약서 발송**: 준비가 완료되면 보내기(Send)를 클릭하세요. 계약서가 연락처에게 전달되고, 그 후 상태를 추적할 수 있습니다.

![초안 계약서 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915289/original/CsvIacGOTXHyQUbjfLVfzjbRS-fsFzmgBQ.png?1742899289)

---

## 자주 묻는 질문 {#faq}

- **여러 명이 발송 전에 초안 계약서를 검토할 수 있나요?**
네. 팀 차원에서 검토하는 접근 방식을 취한다면, 필요한 권한을 가진 모든 사용자가 발송 전에 초안을 열어보고 검토할 수 있습니다.

- **검토 단계가 필요하지 않다면 직접 발송을 자동화할 수 있나요?**
물론입니다. 발송 모드(Sending Mode)에서 "직접 발송(Send Directly)"을 선택하면 초안 단계를 거치지 않고 계약서가 자동으로 발송됩니다.

- **계약서 상태는 어디서 확인할 수 있나요?**
**결제(Payments) > 문서 및 계약서(Documents & Contracts)**로 이동하세요. 각 계약서는 초안(Draft), 발송됨(Sent), 완료됨(Completed) 상태 중 하나를 표시합니다.

---
*원문 최종 수정: Wed, 4 Feb, 2026 at 9:38 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*