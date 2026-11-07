---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Transcript Generated(통화 녹취록 생성됨)

**Transcript Generated** 트리거는 통화 녹취록이 만들어지는 즉시 워크플로우를 실행해요. 음성 AI, IVR, 하이퍼클래스 전화 통화에서 모두 쓸 수 있어요. 통화가 끝난 뒤 후속 연락, 연락처 정보 업데이트, 작업 생성을 사람 손을 거치지 않고 자동으로 처리할 수 있어요.

[동영상](https://www.youtube.com/embed/Xgavz9U84KA?&wmode=opaque)

에이전트에 음성 AI 번역 기능을 켜 두었다면, 통화 후 실행되는 워크플로우에서 아래 두 가지를 모두 받을 수 있어요.

- 번역된 녹취록
- 번역된 요약

번역된 항목은 내부 알림 전달, 현지 언어 후속 메시지 작성, CRM 기록에 표준화된 결과 저장 등에 쓸 수 있어요.

{% hint style="info" %}
번역 기능을 켜지 않았다면 워크플로우는 통화에서 기본으로 만들어진 녹취록과 요약을 사용해요.
{% endhint %}

## Transcript Generated 트리거란?

**Transcript Generated** 트리거는 하이퍼클래스가 녹음된 통화의 텍스트 변환을 마치면 워크플로우를 자동으로 실행해요. 트리거가 실행되면 전체 녹취록, 통화 시간, 통화 방향, 발신자 위치, 타임스탬프 등 다양한 통화 정보가 자동화로 전달돼요. 덕분에 다음 액션을 바로 이어서 실행할 수 있어요.

이 트리거가 지원하는 통화는 다음과 같아요.

- 음성 AI 통화: 텍스트 변환이 기본으로 켜져 있어요.
- 하이퍼클래스 전화 통화: **Phone Settings**(전화 설정)에서 텍스트 변환을 켜야 해요.
- IVR 통화: **IVR Settings**(IVR 설정)에서 텍스트 변환을 켜야 해요.

통화 내용을 워크플로우 자동화와 연결하면 더 빠르게 응대하고, 고객에게 맞춘 소통을 하고, 반복되는 행정 업무를 줄일 수 있어요.

## Transcript Generated 트리거의 장점

- 통화 직후 자동화: 통화가 끝나고 몇 초 안에 후속 액션을 실행해서 수동 작업으로 생기는 지연을 없애요.
- AI 기반 맞춤 응대: 녹취록 데이터를 **AI Decision Maker**(AI 의사결정)나 **GPT Actions**(GPT 액션)에 넘겨서 감정, 의도, 핵심 문구에 맞는 다음 단계를 정할 수 있어요.
- 인사이트 자동 기록: 구매 의사, 반대 의견, 키워드를 연락처 기록에 바로 남겨요.
- 풍부한 데이터 활용: 통화 시간, 통화 방향, 타임스탬프, 위치, 사용자 정보 같은 통화 메타데이터로 더 정교한 자동화 조건을 만들 수 있어요.
- 모든 통화 채널 지원: 음성 AI, IVR, 일반 하이퍼클래스 전화 통화에서 모두 똑같이 작동해요.
- 업무 효율: 통화 후 반복되는 행정 업무를 줄여서 팀이 의미 있는 고객 소통에 집중할 수 있어요.

## Transcript Generated 트리거 설정하기

### 1단계: 워크플로우 만들기 또는 편집하기

1. **자동화 > 워크플로우**로 이동해서 **+ Create Workflow**(워크플로우 만들기)를 클릭하세요.
2. **처음부터 시작**을 선택하거나 기존 워크플로우를 여세요.

![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057196440/original/R2uoEFMc0ZtxbpO1rTnLxEj-TK2V0rYg3A.png?1761822044)

### 2단계: Transcript Generated 트리거 추가하기

**Add New Trigger**(새 트리거 추가)를 클릭하고 트리거 목록에서 **Transcript Generated**를 선택하세요.

![트리거 목록에서 Transcript Generated 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057211567/original/fm0Aa6OyMltWIvGPQGTW52HBY3msd44aRw.png?1761828147)

### 3단계: 텍스트 변환 켜기

트리거가 작동하려면 텍스트 변환이 켜져 있어야 해요.

- 음성 AI: 기본으로 켜져 있어요.
- 하이퍼클래스 전화: 트리거 설정 안에 표시되는 안내 링크를 눌러 **Phone Settings**에서 텍스트 변환을 켜세요.
- IVR: 트리거 설정 안에 표시되는 안내 링크를 눌러 **IVR Settings**에서 텍스트 변환을 켜세요.

![트리거 설정 안의 텍스트 변환 안내 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057212911/original/h7sPks6XiNcRkTY01MgNQszmaO2-ztAr2Q.png?1761828696)

{% hint style="info" %}
텍스트 변환이 꺼져 있으면 워크플로우에 설정으로 이동해서 켜라는 안내가 표시돼요.

![텍스트 변환을 켜라는 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057212263/original/kJDGoasbLz4OS7c4el3Al7sWQxg2osuG4Q.png?1761828452)
{% endhint %}

### 4단계: 필터 적용하기

**Apply Filters**(필터 적용)에서 워크플로우가 실행될 조건을 세밀하게 정할 수 있어요. 사용할 수 있는 필터는 다음과 같아요.

- **Call Type**(통화 유형): **Voice AI**(음성 AI), **IVR**, **Normal Calls**(일반 통화) 중에서 선택해요.
- **Call Direction**(통화 방향, 선택 사항): 수신 통화 또는 발신 통화로 걸러요.
- **Call Duration**(통화 시간, 선택 사항): 최소 통화 시간을 정해서 짧거나 끝까지 이어지지 않은 통화를 제외해요(예: 30초 초과).

![통화 유형과 통화 방향 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057379567/original/Ram6nqDg85MgHTnOAxmFW0b_Sy5tQe2y7w.png?1762079186)

![통화 시간 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057379613/original/bq6MRmWvzwbBTGhW346UUSUgcpJAUvy0Fw.png?1762079354)

### 5단계: 저장하고 게시하기

1. 설정이 끝나면 **Save Trigger**(트리거 저장)를 클릭하세요.
2. 원하는 워크플로우 액션을 추가하세요.
3. 워크플로우 상태를 **Draft**(초안)에서 **Publish**(게시)로 바꿔 활성화하세요.

## 자주 묻는 질문

### 텍스트 변환이 실패하거나 일부 음성만 있으면 어떻게 되나요?

음질이 나쁘거나 녹음 일부가 빠져서 통화가 끝까지 변환되지 않으면 **Transcript Generated** 트리거는 실행되지 않아요. 하이퍼클래스는 시스템이 녹취록 생성을 정상적으로 확인했을 때만 이 트리거를 실행해요. 일부만 변환된 녹취록이면 워크플로우는 정상적으로 실행되고, 빠진 텍스트 구간은 {{full transcript}} 커스텀 값에서 빈칸으로 나타나요.

### 여러 워크플로우가 같은 녹취록 이벤트를 동시에 사용할 수 있나요?

네. 워크플로우마다 조건(예: 서로 다른 필터나 통화 방향)이 따로 있으면 Transcript Generated 이벤트 하나로 여러 워크플로우를 실행할 수 있어요. 다만 필터가 불필요하게 겹치지 않게 설정하세요. 겹치면 같은 이메일이 중복 발송되는 것처럼 같은 자동화가 반복될 수 있어요.

### 녹취록 데이터는 어떻게 저장되고 보호되나요?

녹취록은 하이퍼클래스 인프라 안에 안전하게 저장되고, 해당 연락처 기록에만 연결돼요. 접근은 사용자 권한에 따라 관리돼요. 관리자는 녹취록을 보고, 삭제하고, 내보낼 수 있어요. 이메일이나 웹훅으로 보내는 것처럼 워크플로우 액션으로 공유하지 않는 한 녹취록 텍스트는 외부에 공개되지 않아요.

### Twilio나 맞춤 음성 AI 연동처럼 외부 시스템에서 가져오거나 동기화한 통화에도 이 트리거를 쓸 수 있나요?

아니요. 이 트리거는 하이퍼클래스 안에서 녹음되고 텍스트로 변환된 통화에만 작동해요. 가져온 통화 기록이나 외부 시스템의 녹취록은 내부 텍스트 변환 과정을 거치지 않으므로 이 워크플로우 트리거를 실행하지 않아요.

### 같은 연락처에서 짧은 시간 안에 녹취록이 여러 개 생기면 어떻게 되나요?

통화마다 생기는 녹취록 이벤트는 각각 따로 실행돼요. 하이퍼클래스는 이벤트를 시간 순서대로 처리하고, 동시에 생긴 이벤트는 차례대로 대기열에 넣어요. 그래서 태그 지정이나 연락처 필드 업데이트 같은 자동화 액션이 데이터 충돌 없이 일관되게 실행돼요.

### 워크플로우에서 처리할 수 있는 녹취록 크기에 제한이 있나요?

네. 커스텀 필드에 저장할 때 워크플로우가 참조할 수 있는 녹취록은 최대 16KB예요. 대화가 더 길면 잘리지 않도록 메모 필드나 파일 URL 저장(웹훅 또는 CRM 액션 이용)을 사용하세요. 필드에 저장하지 않더라도 워크플로우 자체는 전체 녹취록을 기준으로 실행될 수 있어요.
