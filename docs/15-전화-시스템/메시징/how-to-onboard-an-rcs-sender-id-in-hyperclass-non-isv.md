---
원문: /support/solutions/articles/155000007603-how-to-onboard-an-rcs-sender-id-in-highlevel-non-isv-
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# Twilio에서 RCS 발신자 ID 등록하기 (Non-ISV)

Twilio에서 RCS 발신자를 만들고, 메시징 서비스를 설정한 뒤 둘을 연결해요. 마지막으로 온보딩에 필요한 정보를 하이퍼클래스 고객지원에 전달하면 끝나요.

## 개요

Twilio 플랫폼에서 RCS(Rich Communication Services) 발신자 ID를 등록하는 표준 절차를 안내해요. 발신자를 만들고, 웹훅을 설정하고, 메시징 서비스에 연결한 다음, 만들어진 ID들을 하이퍼클래스 고객지원에 전달해 온보딩을 마무리해요.

{% hint style="info" %}
이 문서에서 설명하는 Twilio Console 화면은 영어로 표시돼요. 그래서 Twilio 메뉴와 버튼 이름은 영어 그대로 쓰고, 처음 나올 때 뜻을 괄호로 덧붙였어요.
{% endhint %}

## 사전 준비

시작하기 전에 아래 조건을 확인하세요.

- ✓ 활성 상태이고 RCS에 등록된 Twilio 계정이 있어야 해요.
- ✓ 발신자 ID를 만들 서브 계정에 접근할 수 있어야 해요.

{% hint style="info" %}
RCS 발신자 ID는 통신사와 Google의 승인이 필요해요. 통신사·Google 온보딩과 승인 절차는 이 문서에서 다루지 않아요.
{% endhint %}

## 설정 순서

Twilio Console에서 6단계로 진행해요. 순서대로 따라 하세요. 1~3단계는 발신자를 만들고, 4~5단계는 메시징 서비스를 만들고, 6단계는 둘을 연결해요.

## RCS 발신자 ID 만들기

### 1단계. 올바른 서브 계정으로 로그인하기

1. [Twilio Console](https://console.twilio.com)로 이동하세요.
2. RCS 발신자 ID를 설정할 서브 계정으로 로그인하세요.

{% hint style="warning" %}
발신자 ID는 계정별로 따로 관리돼요. 다음 단계로 넘어가기 전에 올바른 서브 계정에 들어와 있는지 확인하세요.
{% endhint %}

### 2단계. RCS 발신자 ID 만들기

1. 왼쪽 메뉴에서 **Develop > RCS > Senders**(발신자)로 이동하세요.
2. **Create RCS Sender**(RCS 발신자 만들기)를 클릭하고 아래 필수 항목을 입력하세요.

| 항목 | 설명 |
| --- | --- |
| Sender Display Name(발신자 표시 이름) | 메시지를 받는 사람에게 보이는 이름 |
| Description(설명) | 발신자와 사용 목적에 대한 간단한 설명 |
| Logo Image(로고 이미지) | 브랜드 로고. 메시지 대화 화면에 표시돼요. |
| Banner Image(배너 이미지) | 발신자 프로필에 쓸 배너 이미지 |
| Accent Color(강조 색상) | RCS 메시지 화면에 쓰는 브랜드 색상 |

{% hint style="info" %}
- 등록 과정에서 Twilio가 추가 항목을 보여 주면 그 항목도 입력하세요.
- 입력한 정보는 하이퍼클래스 고객지원에도 함께 전달해 주세요.
{% endhint %}

![Twilio Console의 RCS 발신자 만들기 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068353442/original/8droV66pyFRJB8J4WBaiUwIkJ4gUVX9NpA.png?1775133420)

### 3단계. 웹훅 설정하기

발신자 ID를 만들었다면 **Configuration**(구성) 탭으로 이동해 아래 URL을 설정하세요.

| 웹훅 | URL | 방식 |
| --- | --- | --- |
| Incoming Messages URL(수신 메시지 URL) | `https://backend.leadconnectorhq.com/phone-system/cpaas/v1/messages/incoming` | POST |
| Fallback URL(대체 URL) | `https://backend.leadconnectorhq.com/phone-system/cpaas/v1/messages/incoming` | POST |
| Status Callback URL(상태 콜백 URL) | `https://backend.leadconnectorhq.com/phone-system/cpaas/v1/messages/status` | POST |

{% hint style="warning" %}
모든 웹훅의 방식은 **POST**로 설정해야 해요.
{% endhint %}

![웹훅 URL이 POST로 설정된 RCS 발신자의 Configuration 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068353576/original/3uuaA7p3uThP8d49SdAWeW7htcj5MEZ9Pw.png?1775133491)

## 메시징 서비스 만들기

### 4단계. 메시징 서비스 만들기

1. **Develop > Messaging > Services**로 이동하세요.
2. **Create Messaging Service**(메시징 서비스 만들기)를 클릭하세요.
3. 이름을 입력하고 **Select what you want to use Messaging for**(메시징을 어떤 용도로 쓸지 선택)에서 알맞은 옵션을 고르세요.

{% hint style="info" %}
메뉴에 **Messaging**이 보이지 않으면 **Explore Products**(제품 둘러보기)를 클릭해서 먼저 추가하세요.
{% endhint %}

![Twilio의 메시징 서비스 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068352732/original/BByQFZ5miE9hB0zpqew0cbb6rnrA4YvVGw.png?1775133067)

### 5단계. 메시징 서비스 웹훅 설정하기

메시징 서비스 설정의 **Integration**(연동) 단계에서 아래 값을 설정하세요. Twilio 설정 흐름에서는 3단계에 해당해요.

**Incoming Messages**(수신 메시지)

| 항목 | 값 | 방식 |
| --- | --- | --- |
| Request URL(요청 URL) | `https://backend.leadconnectorhq.com/phone-system/cpaas/v1/messages/incoming` | HTTP POST |
| Fallback URL(대체 URL) | `https://backend.leadconnectorhq.com/phone-system/cpaas/v1/messages/incoming` | HTTP POST |

**Delivery Status Callback**(전송 상태 콜백)

| 항목 | 값 |
| --- | --- |
| Callback URL(콜백 URL) | `https://backend.leadconnectorhq.com/phone-system/cpaas/v1/messages/status` |

입력을 마치면 **Save**(저장)를 클릭하세요.

![웹훅 URL을 입력하는 메시징 서비스의 Integration 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068352900/original/NAGXR_VJKs-6otrah9h7_-WkzkD_j5787w.png?1775133123)

## 메시징 서비스에 RCS 발신자 ID 연결하기

### 6단계. 발신자 풀에 RCS 발신자 추가하기

1. 방금 만든 메시징 서비스를 여세요.
2. **Sender Pool**(발신자 풀) 탭으로 이동해 **Add Senders**(발신자 추가)를 클릭하세요.
3. **Sender Type**(발신자 유형)에서 **RCS Sender**를 선택하고 **Continue**(계속)를 클릭하세요.
4. 목록에서 RCS 발신자를 선택하고 **Add RCS Senders**(RCS 발신자 추가)를 클릭하세요.

Twilio 설정이 끝났어요. 이제 RCS 발신자가 메시징 서비스에 연결되었어요. 마지막으로 아래 정보를 하이퍼클래스 고객지원에 전달하면 돼요.

## 온보딩을 위해 하이퍼클래스 고객지원에 정보 전달하기

온보딩을 마무리하려면 아래 정보를 하이퍼클래스 고객지원에 전달하세요.

### 각 값을 찾는 방법

- Messaging Service SID: **Messaging > Services**로 이동해 서비스를 열고 **Properties**(속성)로 이동하세요. SID는 MG…로 시작해요.
- RCS Sender SID: **RCS > Senders**로 이동해 발신자를 여세요. SID는 XE…로 시작해요.
- RCS Sender ID: 위와 같은 페이지에 있어요. ID는 rcs:…로 시작해요.
- Account SID(계정 SID): Twilio 서브 계정 대시보드에서 찾을 수 있어요.
- 로고/배너 이미지 URL: **RCS > Senders > [내 발신자] > Public Details**(공개 상세 정보)로 이동하세요.

![Messaging Service SID가 표시된 메시징 서비스 Properties 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068354283/original/99IrhHCbPG5G6AmCyz2exvJzHh38kp4CJA.png?1775133905)

Properties 페이지에서 확인할 수 있는 Messaging Service SID예요.

![로고와 배너 이미지 URL이 표시된 RCS 발신자의 Public Details](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068354301/original/4U9rM2NWJxrpEsndtVCnfVhkb5nLqbmqwQ.png?1775133913)

Public Details에서 확인할 수 있는 로고와 배너 이미지 URL이에요.

### 필수 정보 요약

| 필요한 정보 | 확인할 위치 | 예시 형식 |
| --- | --- | --- |
| Account SID(계정 SID) | Twilio 서브 계정 대시보드 | ACxxxxxxxx... |
| Messaging Service SID | Messaging > Services > Properties | MGxxxxxxxx... |
| RCS Sender SID | RCS > Senders | XExxxxxxxx... |
| RCS Sender ID | RCS > Senders | rcs:xxxxxxx... |
| Sender Display Name | RCS > Senders > [Sender ID] > Public Details | "Our RCS Sender" |
| Description | RCS > Senders > [Sender ID] > Public Details | "Description of the RCS Sender ID…" |
| Logo Image URL | RCS > Senders > [Sender ID] > Public Details | https://… |
| Banner Image URL | RCS > Senders > [Sender ID] > Public Details | https://… |
| 표시 이름(Friendly Name) | 직접 정하는 이름 (플랫폼 안에서 표시용으로만 사용) | "Our RCS Sender" |

## 자주 묻는 질문

### 이 단계를 마치면 바로 RCS 메시지를 보낼 수 있나요?

아니요. RCS 발신자 ID는 Google과 통신사의 승인도 받아야 해요. 이 문서는 Twilio 설정만 다루고, 승인 절차는 별도로 진행돼요.

### 어느 서브 계정을 쓰는지가 왜 중요한가요?

발신자 ID는 계정별로 따로 관리돼요. 엉뚱한 서브 계정에서 발신자를 만들면 연결하려는 메시징 서비스와 계정에서 쓸 수 없어요. 이 경우 올바른 서브 계정에서 발신자를 다시 만들어야 해요.

### 웹훅을 RCS 발신자와 메시징 서비스 양쪽에 모두 설정해야 하나요?

네. 양쪽에 모두 설정하면 Twilio의 어느 리소스가 이벤트를 처리하더라도 수신 메시지와 전송 상태 업데이트가 플랫폼으로 올바르게 전달돼요. 3단계와 5단계에 적힌 URL을 그대로 사용하세요.

### 웹훅 방식을 GET으로 설정해도 되나요?

아니요. 모든 웹훅 방식은 POST로 설정해야 해요. 메시징 서비스 설정에서는 HTTP POST로 표시돼요.

### Twilio Console에 Messaging이 보이지 않아요. 어떻게 하나요?

Twilio Console에서 **Explore Products**를 클릭해 **Messaging**을 메뉴에 추가하세요. 그런 다음 **Develop > Messaging > Services**로 돌아가세요.

### RCS Sender SID와 RCS Sender ID는 어떻게 다른가요?

둘 다 Twilio의 같은 발신자 페이지에 표시돼요. SID는 XE…로 시작하고, Sender ID는 rcs:…로 시작해요. 두 값을 모두 하이퍼클래스 고객지원에 전달하세요.

### 표시 이름(Friendly Name)은 어디에 쓰나요?

직접 정하는 이름표예요. 플랫폼 안에서 표시용으로만 쓰이고, 메시지를 받는 사람에게는 보이지 않아요.
