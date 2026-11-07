---
원문: /support/solutions/articles/155000006550-new-ui-for-email-actions-in-workflows
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 워크플로우 이메일 액션 새 화면 — Send Email(이메일 보내기)

워크플로우의 **Send Email**(이메일 보내기) 액션이 새 화면으로 바뀌었어요. 이메일 작성, 템플릿 선택, 참여 추적 설정을 한 화면에서 할 수 있어요. 간단한 메시지를 바로 쓰거나, 처음부터 디자인하거나, 기존 템플릿을 불러올 수 있어요. 이 문서에서는 워크플로우 이메일을 설정하고, 테스트하고, 저장하는 방법을 설명해요. 액션 자체의 기본 설명은 [워크플로우 액션 - Send Email](../../07-워크플로우/Communication-Workflow-Actions/workflow-action-send-email.md) 문서에서 볼 수 있어요.

## 새 이메일 액션 화면이란?

새 **Send Email** 액션 화면에서는 워크플로우 안에서 바로 아래 작업을 할 수 있어요.

- 메시지 작성
- 템플릿 선택
- 이메일 설정
- 참여 추적
- 테스트 발송

워크플로우 이메일과 다른 이메일 작성 영역에서 같은 작성 환경을 쓰도록 만들었어요. 그래서 편집 화면을 오가지 않아도 이메일을 만들고 관리할 수 있어요.

## 새 이메일 액션의 장점

자주 쓰는 이메일 작성·설정 도구가 워크플로우 단계 하나에 모여 있어요. 자동 이메일을 준비할 때 여러 화면을 돌아다닐 필요가 줄어요.

- 빠른 이메일 설정: 워크플로우 액션에서 바로 이메일을 만들고 설정해요.
- 유연한 편집: 빠른 작성, 시각적 디자인, HTML 코드, 일반 텍스트 중에서 고를 수 있어요.
- 재사용 가능한 템플릿: 기존 템플릿으로 시작하거나 **Template Library**(템플릿 라이브러리)에서 디자인을 찾아볼 수 있어요.
- 참여 추적 옵션: 클릭 추적, UTM 파라미터, 연락처 태그를 설정할 수 있어요.
- 템플릿 관리: 워크플로우 이메일을 템플릿과 따로 두거나, 계속 동기화할 수 있어요.

## 이메일 만드는 방법 고르기

**Send Email** 액션을 추가하거나 편집할 때 이메일을 만드는 방법을 고를 수 있어요. 방법마다 작성 방식이 달라요.

### Quick Compose

**Quick Compose**(빠른 작성)는 간단한 이메일이나 빠른 후속 메시지에 알맞은 가벼운 편집기예요. **From Smart Builder**에서 쓰는 **Plain Text Editor**와는 별개예요. Plain Text Editor는 [이메일용 일반 텍스트 편집기 사용하기](../Campaign-Settings/Functionalities/how-to-use-the-plain-text-editor-for-emails.md) 문서에서 자세히 볼 수 있어요.

![Quick Compose 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083253906/original/ULAVtJzOi290m0h4okG_20X0T8VPP1cLZA.png?1791953064)

### From Smart Builder

**From Smart Builder**(스마트 빌더에서)를 선택하면 전체 이메일 작성 기능을 쓸 수 있어요. 편집 모드에 따라 **Design Editor**(디자인 에디터), **Code Editor**(코드 편집기), **Plain Text Editor**(일반 텍스트 편집기) 중에서 골라 이메일을 만들어요.

![From Smart Builder 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083254003/original/cXWp-P5_oyCt0ixT2ZMZuYuR4C-puE-xPA.png?1791953298)

### Select Existing Template

**Select Existing Template**(기존 템플릿 선택)을 선택하면 이미 저장한 이메일로 시작하거나 **Template Library**에서 디자인을 고를 수 있어요. 템플릿 관리 방법은 [워크플로우 단계에서 이메일 템플릿 관리하기](managing-email-templates-in-workflow-steps.md) 문서를 참고하세요.

템플릿을 고른 뒤에는 워크플로우 이메일을 따로 둘지, 원본 템플릿과 계속 동기화할지 확인하세요.

![Select Existing Template 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083254181/original/DwWnHJXr6julv68Y92bBJjD1lGz_Iem7iw.png?1791953561)

## 고급 이메일 설정

**Send Email** 액션의 **Advanced Email Settings**(고급 이메일 설정)에서는 참여 추적과 연락처 업데이트를 설정할 수 있어요. 워크플로우에 필요한 옵션만 설정하세요.

- **Track Clicks**(클릭 추적): 지원되는 링크의 클릭을 기록해요. 클릭 활동이 이메일 성과 리포트에 포함돼요.
- **UTM Tracking**(UTM 추적): 지원되는 이메일 링크에 설정한 UTM 파라미터를 붙여요. 외부에서 캠페인과 트래픽을 분석할 때 쓸 수 있어요.
- **Add Tags**(태그 추가): 이메일 열람이나 클릭 같은 지원되는 참여 이벤트에 따라 설정한 태그를 붙여요.

![고급 이메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083254302/original/mrEMj-yDSCewM5ee2JOrwFHZTSgbcf76pA.png?1791953826)

### 이메일 통계 확인하기

이메일을 보낸 뒤 해당 **Send Email** 액션을 다시 열면 확인할 수 있는 **Statistics**(통계)를 볼 수 있어요. 워크플로우 캠페인 리포트를 쓰면 워크플로우 전체 이메일의 성과도 분석할 수 있어요. 자세한 방법은 [워크플로우 캠페인 분석하기](how-to-analyze-workflow-campaigns.md) 문서를 참고하세요.

![이메일 통계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083255061/original/g0NKGlVeb-wIoTtFIKMBQDAwirV91UhxIw.png?1791954930)

## 워크플로우 이메일과 템플릿 동기화

기존 템플릿으로 워크플로우 이메일을 만들면 **Sync Edits to Template**(템플릿에 편집 내용 동기화) 설정에 따라 워크플로우 이메일과 원본 템플릿이 서로 계속 업데이트되는지가 정해져요. 자세한 내용은 [워크플로우 이메일 액션의 동기화 편집 사용하기](../how-to-use-sync-edits-to-template-in-hyperclass-workflows.md) 문서를 참고하세요.

### 동기화를 켰을 때

- 워크플로우 이메일을 바꾸면 원본 템플릿도 업데이트될 수 있어요.
- 원본 템플릿을 바꾸면 워크플로우 이메일도 업데이트될 수 있어요.
- 설정을 켜 두는 동안 동기화는 계속 양방향으로 이어져요.

### 동기화를 껐을 때

- 워크플로우 이메일과 원본 템플릿이 서로 독립적으로 유지돼요.
- 한쪽을 바꿔도 다른 쪽은 자동으로 바뀌지 않아요.

### 기본값

기존 템플릿으로 새로 만든 **Send Email** 액션은 동기화가 기본적으로 꺼짐(OFF)이에요. 이미 만들어 둔 이메일 액션은 동기화 설정이 다를 수 있고, 나중에 필요에 따라 바꿀 수 있어요.

{% hint style="warning" %}
**Sync Edits to Template**을 켜면 워크플로우 이메일을 편집할 때 원본 이메일 템플릿도 업데이트될 수 있어요. 여러 워크플로우에서 함께 쓰는 템플릿을 수정하기 전에 이 설정을 확인하세요.
{% endhint %}

![템플릿 동기화 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083254843/original/icAPR9AUf7Qy90ZztcqXcsZMkAnUTJb_Ow.png?1791954642)

## 워크플로우에서 이메일 액션 만들기

워크플로우 빌더에서 이메일을 설정한 뒤, 테스트하고 액션을 저장하세요. 그다음 워크플로우를 게시해요. 워크플로우 빌더 사용법은 [워크플로우 빌더 둘러보기](../../07-워크플로우/기타/workflow-builder-walkthrough.md) 문서를 참고하세요.

1. **자동화 > 워크플로우**로 이동한 뒤 워크플로우를 새로 만들거나 기존 워크플로우를 열어요.
2. **Send Email** 액션을 추가하고, 알아보기 쉬운 이름을 붙여요.
3. **From Name**(보내는 사람), **From Email**(보내는 이메일), **Subject**(제목)를 입력해요. CC, BCC, 미리보기 텍스트처럼 쓸 수 있는 선택 설정도 필요하면 입력해요.
4. 이메일을 만드는 방법으로 **Quick Compose**, **From Smart Builder**, **Select Existing Template** 중 하나를 선택해요.
5. **Sync Edits to Template**, 추적, UTM 설정, 태그 등 필요한 옵션을 확인하고 설정해요.
6. **Test Emails**(테스트 이메일)와 **Send Test Mail**(테스트 메일 보내기)을 사용해 내용, 서식, 링크, 보내는 사람 정보를 확인해요. 실제 워크플로우에서 쓰기 전에 꼭 확인하세요.
7. **Save Action**(액션 저장)을 클릭하고 워크플로우를 저장해요. 자동화를 실행할 준비가 되면 게시해요.

![이메일 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083255265/original/smXM5UDZmmu5EnZrboiMDbf5yKrOFWNrXg.png?1791955297)

{% hint style="warning" %}
**Save Action**은 이메일 액션 설정만 저장해요. 초안 상태의 워크플로우가 자동으로 게시되지는 않아요. 트리거로 실행되려면 워크플로우를 게시해야 해요.
{% endhint %}

## 자주 묻는 질문

### Quick Compose와 Plain Text Editor는 같은 건가요?

아니요. **Quick Compose**는 가벼운 이메일 편집기이고, **Plain Text Editor**는 **From Smart Builder**에서 쓸 수 있는 별도의 편집 옵션이에요.

### 워크플로우 이메일을 편집했는데 원본 템플릿이 바뀌었어요. 왜 그런가요?

**Sync Edits to Template**이 켜져 있을 수 있어요. 동기화가 켜져 있으면 편집한 내용이 워크플로우 이메일과 원본 템플릿 사이에서 서로 반영될 수 있어요.

### 공유 템플릿을 원본은 그대로 두고 쓸 수 있나요?

네. 워크플로우 이메일을 원본 템플릿과 독립적으로 두려면 **Sync Edits to Template**을 꺼 두세요.

### 클릭 결과가 보이지 않아요.

필요한 곳에서 클릭 추적이 켜져 있는지, 받는 사람이 지원되는 클릭 활동을 했는지 확인하세요. 그다음 이메일 **Statistics**나 워크플로우 캠페인 리포트를 살펴보세요.

### 워크플로우를 게시하지 않고 테스트 이메일을 보낼 수 있나요?

네. 이메일 액션을 설정하는 중에 **Test Emails**와 **Send Test Mail**을 쓰면 돼요. 테스트 메시지를 보내려고 워크플로우를 게시할 필요는 없어요.

### Save Action을 누르면 워크플로우가 활성화되나요?

아니요. **Save Action**은 이메일 액션 설정만 저장해요. 트리거로 실행되려면 워크플로우를 저장하고 게시해야 해요.
