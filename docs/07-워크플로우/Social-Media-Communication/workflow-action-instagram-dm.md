---
원문: /support/solutions/articles/155000003298-workflow-action-instagram-dm
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Instagram DM

**Instagram DM** 액션을 쓰면 워크플로우에서 연락처에게 Instagram 다이렉트 메시지(DM)를 자동으로 보낼 수 있어요. 이 문서에서는 액션을 설정하는 방법, Instagram 트리거와 함께 쓰는 방법, 템플릿과 첨부파일을 넣는 방법, 메시지가 잘 전달되기 위한 24시간 조건을 안내해요.

## Instagram DM 액션이란?

**Instagram DM**(Instagram DM 보내기) 액션은 연결된 Instagram 계정과 최근에 소통한 연락처에게 DM을 자동으로 보내요. 메시지를 하나하나 직접 보내지 않고도 Instagram 대화를 관리하고, 문의에 답하고, 필요한 정보를 전달할 수 있어요.

템플릿, 커스텀 값, 트리거 링크, 첨부파일로 메시지를 꾸밀 수 있어요. 다만 메시지가 실제로 전달되는지는 Instagram의 메시지 제한에 달려 있어요. 연락처가 최근 24시간 안에 비즈니스 계정으로 DM을 보냈는지도 그 조건에 들어가요.

---

## Instagram DM 액션 설정하기

**Instagram DM** 액션을 설정하려면 연결된 Instagram 계정, 워크플로우 트리거, 메시지가 필요해요. 알맞은 트리거를 고르고 Instagram의 메시지 조건을 이해해 두면 메시지가 원하는 연락처에게 잘 도착해요.

### 1단계: 워크플로우 만들기 또는 열기

1. **자동화 > 워크플로우**로 이동하세요.
2. **Create Workflow**(워크플로우 만들기)를 눌러 새 워크플로우를 만들거나, 기존 워크플로우를 여세요.
3. 워크플로우를 **Workflow Builder**(워크플로우 빌더)에서 여세요. **Standard Builder**(표준 빌더)와 **Advanced Builder**(고급 빌더) 중 어느 쪽이든 쓸 수 있어요.

   ![워크플로우 빌더에서 워크플로우를 연 화면](https://jumpshare.com/share/V7fhgryQHgwasuG8dyHy+/Screen+Shot+2026-10-09+at+18.26.09.png)

### 2단계: 워크플로우 트리거 추가

워크플로우 트리거는 연락처가 자동화에 들어오는 시점을 정해요. Instagram DM에 답장하는 경우에는 **Customer Replied**(고객 답장) 트리거를 쓰고 답장 채널을 **Instagram DM**으로 설정하는 방법을 권장해요.

1. **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. **Customer Replied**를 검색해 선택하세요.
3. **+ Add Filters**(필터 추가)를 클릭하세요.
4. **Reply Channel**(답장 채널)을 선택하고 **Instagram DM**을 고르세요.
5. 들어오는 메시지를 더 좁혀야 하면 다른 필터도 추가하세요.
6. **Save Trigger**(트리거 저장)를 클릭하세요.

   ![Customer Replied 트리거에 Instagram DM 필터를 추가하는 화면](https://jumpshare.com/share/qZkHrrnpLPgdNDPkLNDl+/GIF+Recording+2026-10-09+at+18.27.49.gif)

### 3단계: Instagram DM 액션 추가 및 설정

트리거를 설정했다면 **Instagram DM** 액션을 추가해서 연락처가 받을 메시지를 정해요.

1. 워크플로우 트리거 아래의 **+** 아이콘을 클릭하세요.
2. 워크플로우 액션에서 **Instagram DM**을 검색하세요.
3. **Instagram DM**을 선택해 액션 설정 패널을 여세요.
4. 워크플로우 안에서 이 액션을 구분할 수 있도록 **Action Name**(액션 이름)을 입력하세요.

1. **Select a Template**(템플릿 선택, 선택 사항): 전에 만들어 둔 메시지를 다시 쓰고 싶다면 기존 메시지 템플릿을 고르세요.
2. **Message**(메시지) 입력: 연락처에게 보낼 메시지를 입력하세요.
3. 메시지 개인화: 커스텀 값이나 트리거 링크를 넣어 연락처별 정보나 클릭할 수 있는 자료를 포함하세요.
4. **Write with AI**(AI로 작성, 선택 사항): 메시지 초안 작성을 도와주는 기능이에요.
5. **Add Attachment**(첨부파일 추가, 선택 사항): 클릭해서 내 기기의 파일을 올리거나 **Media Storage**(미디어 저장소)에 있는 파일을 선택하세요.
6. **Add Files Through URL**(URL로 파일 추가, 선택 사항): 온라인에 올라가 있는 자료를 파일 URL로 첨부하세요.
7. **Save Action**(액션 저장)을 클릭하세요.

   ![Instagram DM 액션을 설정하고 저장하는 화면](https://jumpshare.com/share/wnWkRStgCJu8g4TeyUda+/GIF+Recording+2026-10-09+at+18.34.44.gif)

---

## Instagram DM 액션의 필드와 설정

**Instagram DM** 액션의 각 필드는 보내는 메시지의 서로 다른 부분을 정해요. 어떤 필드가 필수인지 알아 두면 설정 오류를 줄일 수 있어요.

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 워크플로우 안에서 이 액션을 구분하는 이름이에요. | 예 |
| **Templates** | 미리 만들어 둔 메시지 템플릿을 골라 일관된 메시지를 보낼 수 있어요. | 아니요 |
| **Message** | 연락처에게 보낼 내용이에요. 개인화를 위한 커스텀 값을 쓸 수 있어요. | 예 |
| **Add Attachment** | 이미지나 문서 같은 파일·미디어를 메시지에 첨부해요. | 아니요 |
| **Add Files Through URL** | 외부에 올라가 있는 파일을 URL로 추가해요. | 아니요 |

---

## Instagram DM 전달 규칙과 권장 사항

Instagram은 자동으로 보내는 DM에 메시지 제한을 두고 있어요. 이 규칙을 알아 두면 알맞은 워크플로우 액션을 고르고 전달 실패를 줄일 수 있어요.

### 24시간 메시지 조건

**Instagram DM** 액션은 최근 24시간 안에 연결된 Instagram 비즈니스 계정으로 DM을 보낸 연락처에게만 쓰세요.

이 기간 안에 DM을 보낸 적이 없는 연락처에게는 **Instagram DM** 액션으로 새 DM이 전달된다고 기대할 수 없어요.

{% hint style="warning" %}
연락처가 Instagram 게시물에 댓글을 남겼다고 해서, 기본 **Instagram DM**에 필요한 24시간 DM 가능 기간이 자동으로 생기지는 않아요.
{% endhint %}

### Instagram 댓글 트리거와 함께 쓸 때의 동작

**Instagram DM** 액션을 **Instagram Comment(s) On A Post**(게시물의 Instagram 댓글) 워크플로우 트리거와 함께 쓰면, 연락처의 최근 활동에 따라 동작이 달라져요.

- **최근 Instagram 댓글이 있는 경우:** 연락처가 내 Instagram 게시물에 최근 댓글을 남겼다면, 메시지는 그 댓글에 대한 답장으로 DM을 통해 전송돼요.
- **최근 Instagram 댓글이 없는 경우:** 최근 댓글이 없으면 액션이 DM을 직접 보내려고 시도해요. 이때는 연락처가 최근 24시간 안에 비즈니스 계정으로 DM을 보낸 적이 있어야 해요.

---

## 권장 대안: Instagram Interactive Messenger

Instagram 댓글을 기반으로 한 자동화나 대화형 소통에는 하이퍼클래스에서 **Instagram Interactive Messenger** 워크플로우 액션을 권장해요.

상황에 맞게 **Reply Type**(답장 유형)을 선택하세요.

- **Reply to Comment via DM**(DM으로 댓글에 답장): Instagram 게시물 댓글에 비공개 메시지로 답하고 싶을 때 써요.
- **Reply to DM**(DM에 답장): 연락처가 보낸 Instagram DM에 답하고 싶을 때 써요.

**Instagram Interactive Messenger**는 버튼, 빠른 답장 같은 대화형 요소도 지원해서 더 복잡한 대화 워크플로우에 쓰기 좋아요.

자세한 내용은 [워크플로우 액션 — Instagram Interactive Messenger](../Communication-Workflow-Actions/workflow-action-instagram-interactive-messenger.md)를 참고하세요.

{% hint style="info" %}
2024년 8월 31일에 해결된 Meta 측 문제 이후로 Instagram 메시지 동작이 바뀌었어요. 게시물 댓글만으로 기본 **Instagram DM** 액션의 DM 전송이 제한 없이 허용된다고 가정하면 안 돼요.
{% endhint %}

---

## 자주 묻는 질문

### Instagram DM 워크플로우는 실행되는데 메시지가 전달되지 않아요. 왜 그런가요?
연락처가 Instagram의 메시지 조건을 충족하지 못했거나, Instagram 계정 연결을 확인해야 할 수 있어요. 연락처가 최근 24시간 안에 DM을 보냈는지 확인하고, 연결된 계정을 점검하고, 워크플로우 실행 상세 내역을 살펴보세요.

### Instagram 리드 폼을 제출한 연락처에게 Instagram DM을 보낼 수 있나요?
리드 폼 제출을 기준으로 워크플로우를 설정할 수는 있어요. 하지만 폼을 제출했다고 해서 **Instagram DM** 액션의 메시지 조건이 자동으로 충족되지는 않아요. 기본 DM을 전달하려면 연락처가 최근에 Instagram DM으로 소통한 이력도 있어야 해요.

### Instagram 게시물에 댓글을 달면 24시간 DM 가능 기간이 자동으로 열리나요?
아니요. 댓글만으로는 기본 24시간 DM 가능 기간이 생기지 않아요. 댓글을 기반으로 비공개 답장을 보내려면 **Instagram Interactive Messenger**에서 알맞은 **Reply Type**을 선택해 쓰세요.

### 같은 Instagram DM 메시지를 여러 워크플로우에서 쓸 수 있나요?
네. 여러 **Instagram DM** 액션에서 기존 메시지 템플릿을 선택하면 워크플로우 전반에서 같은 메시지를 유지할 수 있어요.

### 연락처 정보로 Instagram 메시지를 개인화할 수 있나요?
네. **Message** 필드에서 커스텀 값을 쓸 수 있어요. 사용할 수 있는 연락처 정보나 워크플로우 정보를 메시지에 넣어 보세요.

### Instagram DM과 Instagram Interactive Messenger는 어떻게 다른가요?
**Instagram DM**은 설정한 DM을 보내는 데 주로 쓰고, 첨부파일을 함께 보낼 수도 있어요. **Instagram Interactive Messenger**는 댓글에서 DM으로 이어지는 답장 유형과, 버튼·빠른 답장 같은 대화형 요소를 지원해요.

### 키워드에 따라 연락처마다 다른 Instagram 메시지를 보낼 수 있나요?
네. 트리거 필터에서 **Contains Phrase**(문구 포함)나 **Exact Match**(정확히 일치) 같은 조건을 설정하면 특정 메시지나 댓글을 구분할 수 있어요. 더 복잡한 경우에는 워크플로우 경로나 조건을 나눠서 알맞은 메시지를 보내세요.

### 파일을 올리는 대신 온라인에 있는 파일을 쓸 수 있나요?
네. **Add Files Through URL** 옵션에 URL을 입력하면, 기기나 **Media Storage**에서 직접 올리지 않고 온라인에 있는 파일을 쓸 수 있어요.
