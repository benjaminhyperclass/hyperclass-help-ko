---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007650-workflow-trigger-inbound-email
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Inbound Email(인바운드 이메일)

**Inbound Email**(인바운드 이메일) 트리거를 쓰면 메일함으로 새 이메일이 들어올 때마다 자동화를 실행할 수 있어요. 보낸 사람이 기존 연락처든 처음 보는 사람이든, 어떤 이메일을 워크플로우로 받을지 세밀하게 정할 수 있어요. 리드를 놓치지 않고 모으고, 대화를 알맞은 담당자에게 넘기고, 더 빠르게 답할 수 있어요.

[동영상](https://www.youtube.com/embed/WXVSQplwD4o?&wmode=opaque)

---

## Inbound Email 워크플로우 트리거란?

**Inbound Email** 트리거는 메일함으로 이메일이 들어오면 실행돼요. 기존 **Customer Replied**(고객 답장) 트리거는 내가 보낸 메시지에 연락처가 답장할 때만 실행돼요. 반면 **Inbound Email** 트리거는 아직 CRM에 없는 새 발신자의 콜드 이메일까지 들어오는 모든 이메일을 대상으로 해요.

이 트리거가 다루는 이메일은 세 가지예요.

- 콜드 이메일: 알 수 없는 발신자(연락처에 없는 사람)가 보낸 새 이메일이에요.
- 웜 이메일: 아는 발신자(CRM에 있는 기존 연락처)가 보낸 새 이메일이에요.
- 고객 답장: 아는 발신자가 기존 이메일 스레드에 보낸 답장이에요. 설정으로 포함 여부를 정할 수 있어요.

{% hint style="warning" %}
하이퍼클래스 이메일 또는 Mailgun 전용 도메인으로 설정한 이메일 도메인만 이 트리거로 콜드 이메일을 추적할 수 있어요. 양방향 동기화(Gmail/Outlook), 공유 도메인, 그 밖의 SMTP 설정에서는 콜드 이메일을 받을 수 없고, 기존 연락처가 보낸 이메일만 받을 수 있어요. 설정별 동작은 아래에서 자세히 설명해요.

Inbound Email 트리거는 연락처가 이미 만들어져 있을 때 작동해요.
{% endhint %}

<!-- 검토 필요: 원문 내용이 서로 다름 (위 '연락처가 이미 만들어져 있을 때 작동'과 콜드 이메일 추적·연락처 자동 생성 설명이 앞뒤가 맞지 않음) -->

---

## 사전 준비: 지원되는 이메일 설정

트리거를 설정하기 전에 서브 계정의 이메일 설정이 지원되는 방식인지 확인하세요. **Inbound Email** 트리거는 다음 중 하나로 설정한 계정에서 가장 잘 작동해요.

- 하이퍼클래스 이메일 전용 도메인
- Mailgun 전용 도메인

지원되는 전용 도메인이 설정되어 있지 않으면 모든 종류의 인바운드 이메일을 받을 수 없어요. 이때는 설정에 따라 트리거 화면에 안내 배너가 나타나요.

![지원되지 않는 이메일 설정일 때 트리거 화면에 나타나는 안내 배너](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069328830/original/-ExHmwH1X-3SKSmBBKlkgV6xbUQp5B4uKg.png?1776361155)

---

## 핵심 정리: 전용 도메인과 인바운드 이메일

- 전용 도메인으로 보낸 이메일은 @ 앞의 이름과 상관없이 모두 받아요. 예를 들어 도메인이 acme.com이면 sales@acme.com, support@acme.com, random@acme.com으로 보낸 이메일이 모두 들어와요.
- 서브 계정마다 고유한 전용 이메일 서브도메인을 쓰세요. 같은 도메인을 여러 서브 계정에 설정하면 들어오는 이메일이 예측할 수 없는 곳으로 전달될 수 있어요.
- 전용 도메인이 아닌 이메일 설정(예: Gmail / Outlook만 연결)이면 이메일 구성 화면으로 이동하거나, 콜드 이메일을 안정적으로 받을 수 없다는 안내가 표시돼요.

---

## 이메일 설정별 동작

아래 표는 이메일 설정에 따라 인바운드 이메일이 어떻게 처리되는지 정리한 거예요. 어떤 설정에서 **Inbound Email** 트리거를 쓸 수 있는지 확인해 보세요.

| 이메일 설정 유형 | 콜드 인바운드 이메일 수신 | 기존 연락처의 인바운드 이메일 수신 |
| --- | --- | --- |
| 하이퍼클래스 이메일 – 공유 도메인 | 아니요 | 예, 하이퍼클래스에서 보낸 이메일에 대한 답장만 받아요 |
| 전용 도메인 – Mailgun 또는 하이퍼클래스 이메일 | 예 | 예 |
| 양방향 동기화 – Gmail / Outlook | 아니요 | 예 |
| 기타 SMTP – SendGrid, 커스텀 SMTP 등 | 아니요 | 예 |

---

## 워크플로우에서 Inbound Email 트리거 설정하기

트리거를 깔끔하게 설정해 두면 잘못 실행되는 일을 막고 자동화를 예측하기 쉬워요. 다음 순서로 **Inbound Email** 트리거를 추가하고 설정하세요.

1. 하이퍼클래스 계정에 로그인해요.
2. **자동화 > 워크플로우**로 이동해요.
3. 새 워크플로우를 **만들기**로 만들거나, 기존 워크플로우를 열어요.
4. **+ Add New Trigger**(새 트리거 추가) 버튼을 누르고, 트리거 목록에서 **Inbound Email**을 선택해요.

   ![Inbound Email 트리거를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069126097/original/HhBLmzMnKvIwz3-CkR6DhCACLTkx5nDTTA.gif?1776177217)

5. **Trigger Name**(트리거 이름)에 나중에 알아보기 쉬운 이름을 입력해요. 예: "영업 메일함 신규 리드"
6. **+ Add Filters**(필터 추가)를 눌러 워크플로우가 실행될 조건을 좁혀요. 쓸 수 있는 필터는 아래 트리거 필터 부분을 참고하세요.
7. 트리거 설정 체크박스(**Track replies in existing threads**(기존 스레드의 답장 추적), **Automatically create a contact**(연락처 자동 생성))를 설정해요.

   <!-- 검토 필요: 원문 내용이 서로 다름 (원문이 안내하는 'Trigger Settings' 섹션이 문서에 없고, 고급 설정에는 'Trigger Only for New Email Conversations' 토글만 나옴) -->

8. **Save Trigger**(트리거 저장)를 눌러요.
9. 필요한 워크플로우 액션을 추가하고 워크플로우를 **Publish**(게시)해요. 예: **Send Email**(이메일 보내기), **Create Contact**(연락처 만들기), **Add Tag**(태그 추가), **Assign to User**(사용자에게 배정)

   ![트리거와 액션을 추가해 워크플로우를 구성하는 화면](https://jumpshare.com/share/lhguEFAImsc5PoEtmJp7+/GIF+Recording+2026-10-08+at+20.06.35.gif)

---

## 트리거 필터

필터로 어떤 인바운드 이메일에 워크플로우를 실행할지 정확히 정할 수 있어요. 필터를 여러 개 조합해서 조건을 세밀하게 만들 수 있고, 지원되는 필터에서는 쉼표로 구분해 값을 여러 개 입력할 수 있어요.

필터에서 쓰는 연산자는 다음과 같아요.

- **Equals**(일치)
- **Is any of**(여러 값 중 하나)
- **Contains**(포함)
- **Does not contain**(포함하지 않음)

| 필터 이름 | 연산자 | 예시 | 참고 / 동작 |
| --- | --- | --- | --- |
| **Email Sent To / Mailbox**(받는 주소 / 메일함) | **Equals**, **Is any of**, **Contains**, **Does not contain** | sales@acme.com (equals)<br>@acme.com (contains) | **Equals**: 지정한 이메일 주소가 To / Mailbox 필드에 있을 때만 통과해요. **Is any of**: To 헤더의 주소 중 하나라도 일치하면 통과해요(쉼표로 구분한 여러 값 지원). **Contains** / **Does not contain**: 각 주소에서 일부 문자열이 맞는지 확인해요. |
| **From**(보낸 사람) | **Equals**, **Contains**, **Does not contain** | john@lead.com<br>@lead.com | 값은 항상 하나만 입력해요. 표시 이름이 아니라 추출한 이메일 주소와 비교하고, 대소문자를 구분하지 않아요. |
| **CC**(참조) | **Equals**, **Is any of**, **Contains**, **Does not contain** | manager@acme.com<br>@acme.com | **Equals**: 지정한 이메일 주소가 CC 필드에 있을 때만 통과해요. **Is any of**: To 헤더의 주소 중 하나라도 일치하면 통과해요(쉼표로 구분한 여러 값 지원). **Contains** / **Does not contain**: 각 주소에서 일부 문자열이 맞는지 확인해요. |
| **Subject**(제목) | **Equals**, **Contains**, **Does not contain** | Contains: refund<br>Equals: Request for Quote | 대소문자를 구분하지 않아요. 비교 전에 앞뒤 공백을 제거해요. |
| **Body (plain text)**(본문, 일반 텍스트) | **Contains**, **Does not contain** | Contains: Order ID: | 기본적으로 일반 텍스트 본문을 기준으로 비교해요. |
| **Has Attachments**(첨부파일 있음) | **Is true** / **Is false** | TRUE | true로 설정하면 첨부파일에 맞춘 후속 액션을 쓸 수 있어요. |
| **Replied to Workflow**(워크플로우에 대한 답장) | **Is**, **Is not** | 특정 워크플로우 선택 | 특정 워크플로우에서 보낸 메시지에 대한 답장인지 기준으로 걸러요. 특정 자동화에 대한 답장만 따로 처리할 때 유용해요. 대소문자를 구분하지 않아요. 비교 전에 공백을 제거해요. |
| **Contact Tag**(연락처 태그) | **Has tag**(태그 있음), **Does not have tag**(태그 없음) | 16_aug_2022 | 태그로 연락처를 걸러요. **Has tag**: 연락처에 선택한 태그가 있을 때만 실행돼요. **Does not have tag**: 연락처에 선택한 태그가 없을 때만 실행돼요. 대상 그룹별로 자동화를 나눌 때 유용해요. |

<!-- 검토 필요: 원문 내용이 서로 다름 (CC 필터의 Is any of 설명이 'To 헤더'로 되어 있음. Replied to Workflow 설명의 마지막 문장 'Whitespace is trimmed before'는 원문에서 끊겨 있음) -->

---

## 고급 설정

**Inbound Email** 트리거에는 동작을 더 세밀하게 정하는 **Advanced Settings**(고급 설정) 섹션이 있어요. 접었다 펼 수 있고, **Advanced Settings**의 화살표(chevron)를 누르면 펼쳐져요.

![트리거의 고급 설정 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069328671/original/jMm4ljmIFP01BHAsRfSXs9Dnz21im7X32g.png?1776360995)

### 새 이메일 대화에서만 트리거하기

**Trigger Only for New Email Conversations**(새 이메일 대화에서만 트리거)

유형: 토글 | 기본값: 꺼짐

- 꺼짐(기본값)이면 기존 이메일 스레드의 답장을 포함해 들어오는 모든 이메일에서 트리거가 실행돼요.
- 켜면 새 인바운드 이메일 대화가 시작될 때만 트리거가 실행돼요. 첫 메시지만 해당하고, 기존 스레드의 답장은 해당하지 않아요.

진행 중인 대화에서 답장이 오갈 때마다 트리거가 계속 실행되는 걸 피하고 싶을 때 쓰면 좋아요. 스레드의 첫 인바운드 이메일만 받으려면 이 토글을 켜세요(예: 신규 리드 수집, 첫 응대 자동 답장).

---

## 커스텀 값 선택기 필드

**Inbound Email** 트리거를 쓰면 워크플로우 액션과 **If/Else**(조건 분기) 조건에서 다음 커스텀 값을 쓸 수 있어요. 후속 이메일을 개인화하거나, 대화를 나눠 보내거나, 이메일 내용을 분석할 때 활용하세요.

![Custom Value Picker에서 고를 수 있는 Inbound Email 커스텀 값 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069328594/original/HgE5mjv6N636oyFPLUMxRwcrFCI53ByXAA.png?1776360937)

| 커스텀 값 | 설명 |
| --- | --- |
| {{inboundEmail.messageId}} | 인바운드 이메일의 고유 메시지 ID |
| {{inboundEmail.subject}} | 인바운드 이메일의 제목 |
| {{inboundEmail.bodyPlain}} | 이메일의 일반 텍스트 본문 |
| {{inboundEmail.bodyFullPlain}} | 전체 답장 스레드를 포함한 일반 텍스트 본문 전체 |
| {{inboundEmail.fromEmail}} | 보낸 사람의 이메일 주소 |
| {{inboundEmail.fromName}} | 보낸 사람의 표시 이름 |
| {{inboundEmail.cc}} | 인바운드 이메일의 CC 수신자 |

---

## Inbound Email 트리거 활용 사례

실제 인바운드 이메일 상황에 맞는 자동화를 만들 때 아래 예시를 템플릿처럼 활용하세요.

### 콜드 인바운드 이메일에서 리드 수집

- 트리거: **Inbound Email**
- 필터: **To / Mailbox** = sales@yourdomain.com
- 액션: **Create Contact**로 연락처를 자동으로 만들고, 파이프라인 단계 "신규 리드"에 배정하고, 접수 확인 이메일을 보내고, 리드 육성 시퀀스를 시작해요.

<!-- 검토 필요: 원문 내용이 서로 다름 (Inbound Email 트리거는 연락처가 이미 있을 때 작동한다는 안내와 연락처 자동 생성 예시가 앞뒤가 맞지 않음) -->

### 메일함별 팀 배정

- 트리거: **Inbound Email**
- 필터: **To / Mailbox** contains @yourdomain.com
- 액션: **If/Else** 액션으로 To / Mailbox 값을 확인해요. sales@로 온 이메일은 SDR 대기열로, support@로 온 이메일은 티켓 워크플로우로, billing@로 온 이메일은 재무팀으로 보내요.

### AI로 첫 응대 자동 답장

- 트리거: **Inbound Email**
- 설정: **Track replies in existing threads** = Off (새 스레드에서만 실행)
- 액션: **AI Prompt**(AI 프롬프트, ChatGPT) 액션으로 이메일 본문에 맞는 답장을 만든 뒤 자동 답장으로 보내요.

### 제목 기준 자동화

- 트리거: **Inbound Email**
- 필터: **Subject** contains "refund"
- 액션: 관리자에게 에스컬레이션하고, 지원 티켓을 만들고, "환불 요청" 태그를 달아요.

### 운영·규정 준수: 첨부파일 기준 워크플로우

- 트리거: **Inbound Email**
- 필터: **Has Attachments** = True
- 액션: 운영팀에 알리고, 연락처에 태그를 달고, 기회를 다음 파이프라인 단계(예: "서명 문서 수신")로 옮겨요.

---

## 자주 묻는 질문

### Inbound Email 트리거와 Customer Replied 트리거는 뭐가 다른가요?
**Customer Replied** 트리거는 내가 이미 보낸 메시지에 연락처가 답장할 때 실행돼요. **Inbound Email** 트리거는 모르는 발신자의 콜드 이메일을 포함해 들어오는 모든 이메일에서 실행돼요. 처음 연락해 온 이메일이나 아직 CRM에 없는 사람의 이메일을 받아야 한다면 **Inbound Email** 트리거를 쓰세요.

### 어떤 이메일 설정에서 이 트리거를 쓸 수 있나요?
하이퍼클래스 이메일 전용 도메인과 Mailgun 전용 도메인에서만 인바운드 이메일을 모두 받을 수 있어요. 양방향 동기화(Gmail/Outlook)와 그 밖의 SMTP 제공업체에서는 CRM에 있는 기존 연락처가 보낸 이메일만 받을 수 있어요.

### 기존 Customer Replied 워크플로우가 작동하지 않게 되나요?
아니요. **Customer Replied** 트리거는 전과 똑같이 작동해요. **Inbound Email** 트리거는 새로 추가된 별개의 트리거라서 기존 설정에는 영향이 없어요.

### 이메일 하나가 Inbound Email 트리거와 Customer Replied 트리거를 둘 다 실행할 수 있나요?
두 트리거를 서로 다른 워크플로우에 설정했다면 이메일 하나가 둘 다에 해당할 수 있어요. 겹치는 상황을 피하려면 트리거 필터를 확인하고, "Track replies in existing threads" 설정으로 겹침을 조절하세요.

### 같은 도메인을 여러 서브 계정에 설정하면 어떻게 되나요?
같은 전용 도메인을 여러 서브 계정에서 쓰면 들어오는 이메일이 예측할 수 없는 곳으로 전달될 수 있어요. 안정적으로 전달되려면 서브 계정마다 고유한 전용 이메일 서브도메인을 쓰세요.

### 스레드의 모든 답장마다 트리거가 실행되지 않게 할 수 있나요?
네. "Track replies in existing threads" 설정의 체크를 해제하세요. 해제하면 새 인바운드 이메일(새 스레드)에서만 트리거가 실행돼요.

<!-- 검토 필요: 원문 내용이 서로 다름 (이 FAQ와 활용 사례는 'Track replies in existing threads' 설정을 안내하지만, 고급 설정에는 'Trigger Only for New Email Conversations' 토글만 나옴) -->

### 여러 조건으로 이메일을 걸러낼 수 있나요?
네. 필터를 여러 개 조합해서(예: **To / Mailbox** + **Subject** + **Has Attachments**) 워크플로우가 실행될 조건을 세밀하게 정할 수 있어요.
