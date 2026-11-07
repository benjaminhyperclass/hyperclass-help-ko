---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# Twilio 웹훅 설정: 수신 전화, 문자, 통화 상태 업데이트 받기

Twilio 번호로 오는 전화, SMS/MMS 문자, 통화 상태 변경 정보를 하이퍼클래스로 보내도록 Twilio 웹훅을 설정하는 방법이에요. 내 Twilio 계정을 하이퍼클래스에 연결해서 쓰는 서브 계정에서 사용하세요.

## 개요

내 Twilio 계정을 연결한 서브 계정은 올바른 웹훅이 있어야 Twilio가 수신 전화, 수신 문자, 통화 상태 업데이트를 하이퍼클래스로 전달할 수 있어요.

음성 웹훅은 Twilio 전화번호마다 따로 설정해요. 문자 웹훅은 번호에 직접 설정할 수도 있고, 번호에 연결된 Twilio **메시징 서비스**에서 설정할 수도 있어요. 번호의 현재 구성에 따라 달라져요.

이 문서는 정확한 웹훅 주소를 알려 주고, 어떤 경로로 문자를 설정해야 하는지 설명해요. 통화, 문자, 상태 업데이트가 하이퍼클래스에 제대로 보이지 않을 때 확인할 내용도 함께 안내해요.

{% hint style="warning" %}
이 안내는 **내 Twilio 계정**을 연결해서 쓰는 서브 계정에 해당해요. 하이퍼클래스 전화로 관리하는 전화번호에는 해당하지 않아요. 자세한 내용은 [기본 전화 시스템이란?](기타/what-is-lc-phone-system.md)과 [에이전시와 서브 계정을 하이퍼클래스 전화로 옮기려면 어떻게 하나요?](how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone.md)를 참고하세요.

다른 애플리케이션이 일부러 번호의 기존 웹훅을 제어하고 있다면, 그 값을 바꾸면 수신 트래픽이 가는 경로가 달라질 수 있어요. 기존 웹훅을 바꾸기 전에 이 번호의 전화와 문자를 하이퍼클래스로 보내도 되는지 먼저 확인하세요.
{% endhint %}

## Twilio 웹훅 설정이란?

Twilio 웹훅은 누군가 내 Twilio 번호로 전화하거나 문자를 보냈을 때, Twilio가 그 이벤트를 어디로 보낼지 알려 주는 설정이에요. 웹훅을 올바르게 설정하면 하이퍼클래스가 이벤트를 받아서 연결된 서브 계정에 표시하거나 처리할 수 있어요.

음성 구성은 **수신 전화**와 **통화 상태 업데이트**를 담당해요. 메시지 구성은 **수신 SMS/MMS 문자**를 담당해요.

기존 Twilio 계정을 연결한 뒤, 번호를 옮긴 뒤, 메시징 서비스를 바꾼 뒤, 또는 하이퍼클래스에서 전화나 문자가 제대로 보이지 않을 때 특히 중요한 설정이에요.

### 웹훅을 올바르게 설정하면 좋은 점

웹훅은 수신 통신에서 Twilio와 하이퍼클래스를 이어 주는 연결 고리예요. 올바르게 설정하면 전화·문자가 누락되거나 통화 상태 정보가 빠지는 문제를 막을 수 있어요.

- 수신 전화 라우팅: Twilio로 오는 전화를 하이퍼클래스의 음성 엔드포인트로 보내요.
- 수신 문자 전달: 수신 SMS/MMS를 하이퍼클래스로 보내요.
- 통화 상태 동기화: 전용 통화 상태 웹훅으로 통화 상태 이벤트를 하이퍼클래스에 보내요.
- 메시징 서비스 지원: 여러 번호가 Twilio 메시징 서비스를 함께 쓸 때도 수신 문자를 올바르게 설정할 수 있어요.
- 빠른 문제 해결: 음성, 번호 직접 설정, 메시징 서비스 설정을 따로 나눠 보기 때문에 어디가 문제인지 빨리 찾을 수 있어요.

## 시작하기 전에

웹훅을 수정하기 전에 Twilio 계정, 전화번호, 문자 설정 경로를 먼저 확인하세요. 그래야 엉뚱한 고객이나 번호에 설정이 적용되는 일을 막을 수 있어요.

- 문제가 생긴 서브 계정이 하이퍼클래스 전화가 아니라 **연결된 Twilio 계정**을 쓰는지 확인하세요.
- 해당 전화번호를 가진 Twilio 계정 또는 Twilio 서브계정에 로그인하세요.
- 문제가 생긴 전화번호를 정확히 확인하세요.
- 그 번호가 **메시징 서비스**에 연결되어 있는지 확인하세요.
- 번호가 이제 하이퍼클래스로 들어와야 하는 경우가 아니라면, 다른 연동이 일부러 설정해 둔 웹훅 값은 바꾸지 마세요.

번호 구성 옵션이 궁금하다면 [전화번호 구성 옵션 개요](overview-of-phone-number-configuration-options.md)를 참고하세요.

{% hint style="info" %}
A2P 10DLC 등록은 웹훅 설정과 별개예요. Twilio가 같은 화면에 A2P 등록 안내를 보여 줄 수 있어요. 웹훅 설정을 마쳤다고 해서 필요한 A2P 등록이 대신 완료되지는 않아요. 자세한 내용은 [A2P 10DLC 브랜드·캠페인 등록이란?](A2P-등록/what-is-a2p-10-dlc-brand-and-campaign-registration.md)을 참고하세요.
{% endhint %}

## 웹훅 엔드포인트 한눈에 보기

이벤트마다 알맞은 하이퍼클래스 엔드포인트를 지정해야 해요. 아래 값을 그대로 복사해서 쓰고, 표시된 곳에는 HTTP POST를 선택하세요.

| 이벤트 | Twilio 필드 | 하이퍼클래스 엔드포인트 | 방식 |
| --- | --- | --- | --- |
| 수신 전화 | **A call comes in**(전화가 올 때) | `https://services.leadconnectorhq.com/phone-system/voice-call/inbound` | HTTP POST |
| 통화 상태 업데이트 | **Call status changes**(통화 상태가 바뀔 때) | `https://services.leadconnectorhq.com/appengine/twilio/incoming_call_status` | HTTP POST |
| 수신 SMS/MMS | **A message comes in**(문자가 올 때) / 메시징 서비스 **요청 URL** | `https://services.leadconnectorhq.com/appengine/twilio/incoming_message` | HTTP POST |
| 메시징 서비스 대체 URL | **Fallback URL**(대체 URL) | `https://services.leadconnectorhq.com/appengine/twilio/incoming_message` | HTTP POST |

엔드포인트를 섞어 쓰지 마세요. 수신 전화 URL, 통화 상태 URL, 수신 문자 URL은 각각 하는 일이 달라요.

## 번호에 직접 설정할까, 메시징 서비스에서 설정할까?

수신 문자 설정 위치는 Twilio 번호가 자체 문자 웹훅을 쓰는지, 메시징 서비스에 속해 있는지에 따라 달라요. 문자 설정을 바꾸기 전에 번호의 **Active Configuration**(현재 구성)을 먼저 확인하세요.

| 구성 | 수신 문자 설정 위치 |
| --- | --- |
| 연결된 메시징 서비스가 없음 | 전화번호의 **Messaging**(메시징) 섹션에서 직접 설정해요. |
| 연결된 메시징 서비스가 있음 | 연결된 **메시징 서비스**를 열고 **연동** 설정에서 구성해요. |

음성 구성은 메시징 서비스가 연결되어 있어도 개별 전화번호에서 해요. 메시징 서비스는 문자 설정 경로만 바꾸고, 아래 **Voice Configuration**(음성 구성) 단계는 그대로예요.

## 하이퍼클래스용 Twilio 웹훅 설정 방법

먼저 음성을 설정하고, 그다음 번호에 해당하는 경로로 문자를 설정하세요. 테스트하기 전에 각 설정을 꼭 저장해야 Twilio가 새 웹훅 값을 사용해요.

### 1단계: Twilio 전화번호 열기

1. 문제가 생긴 번호를 가진 Twilio 계정 또는 Twilio 서브계정에 로그인하세요.
2. **전화번호 > 관리 > Active Numbers**(활성 번호)로 이동하세요.
3. 설정할 전화번호를 선택하세요.

[Twilio Active Numbers 열기 →](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming)

![Twilio 활성 번호 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149836/original/bQdShEuBKREN9VYnYFrWSTpj806csZkc0g.jpeg?1788548209)

### 2단계: 번호의 구성 탭 열기

전화번호를 선택한 뒤 **구성** 탭을 여세요. 이 페이지에 번호의 라우팅, **Voice Configuration**(음성 구성), **Messaging**(메시징) 설정이 모여 있어요.

![전화번호의 구성 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149838/original/bP7eC5GCwGBE8YwcoKHoEfOIHZooJ-x3UQ.jpeg?1788548218)

### 3단계: US1 음성 라우팅 확인

**Voice Configuration**에서 라우팅 영역에 `United States (US1) Region call routing is: Active`(미국 US1 리전 통화 라우팅이 활성 상태)라고 표시되는지 확인하세요. US1이 활성 상태가 아니면 Twilio의 라우팅 설정에서 구성을 바꾼 뒤 다음으로 넘어가세요.

![Voice Configuration의 US1 통화 라우팅 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149845/original/8Z-XLh_cbAv7x5v9uAmn4VZ-GCFy-Rr9Mg.jpeg?1788548230)

### 4단계: 수신 전화와 통화 상태 업데이트 설정

**Voice Configuration**에는 하이퍼클래스 엔드포인트가 두 개 필요해요. 하나는 새로 걸려 오는 전화용이고, 다른 하나는 이후 통화 상태 변경용이에요.

| 항목 | 값 |
| --- | --- |
| **Configure with**(구성 방식) | `Webhook, TwiML Bin, Function, Studio Flow, Proxy Service` |
| **A call comes in** | **웹훅** |
| **Incoming Call URL**(수신 전화 URL) | `https://services.leadconnectorhq.com/phone-system/voice-call/inbound` |
| **HTTP** | HTTP POST |
| **Primary handler fails**(기본 처리 실패 시) | 이 설정에서는 바꾸지 않아도 돼요. |
| **Call status changes** URL | `https://services.leadconnectorhq.com/appengine/twilio/incoming_call_status` |
| **Call Status HTTP**(통화 상태 HTTP) | HTTP POST |
| **Caller Name Lookup**(발신자 이름 조회) | 선택 사항이에요. 원하는 대로 두세요. |

값을 입력한 뒤 전화번호 구성을 저장하세요.

![Voice Configuration에 웹훅 주소를 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149853/original/IlcEg0CgJmsfxVU2KtAK92q_EzbK0G8aPw.jpeg?1788548240)

### 5단계: US1 문자 라우팅 확인

전화번호의 **Messaging** 구성에서 `United States (US1) Region message routing is: Active`(미국 US1 리전 메시지 라우팅이 활성 상태)라고 표시되는지 확인하세요.

![Messaging 구성의 US1 메시지 라우팅 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149860/original/8YeyN1X4W-58yewvde58E7oKhTaS6C2EQQ.jpeg?1788548252)

### 6단계: 수신 문자 설정

번호의 현재 Twilio 구성에 맞는 경로를 따르세요.

#### 경로 A: 번호가 메시징 서비스에 연결되어 있지 않은 경우

1. 개별 전화번호의 **구성** 페이지에 그대로 머무르세요.
2. **Messaging**에서 **Configure with**를 `Webhook, TwiML Bin, Function, Studio Flow, Proxy Service`로 설정하세요.
3. **A message comes in**을 **웹훅**으로 설정하세요.
4. 다음 주소를 입력하세요.
   `https://services.leadconnectorhq.com/appengine/twilio/incoming_message`
5. 방식을 HTTP POST로 설정하세요.
6. 구성을 저장하세요.

#### 경로 B: 번호가 메시징 서비스에 연결되어 있는 경우

**Active Configuration**에 연결된 메시징 서비스가 표시된다면, 번호 수준의 문자 필드에만 의존하지 말고 그 서비스에서 수신 문자를 설정하세요.

![Active Configuration에 연결된 메시징 서비스가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149861/original/lCBD9SDZoHAkHMxhiniHtFMts3-l7JPeCA.png?1788548266)

1. **Active Numbers**에서 연결된 **메시징 서비스**를 클릭하세요.
2. **연동**을 여세요.
3. **Incoming Messages**(수신 메시지)에서 **Send a webhook**(웹훅 보내기)을 선택하세요.
4. 다음 주소를 **요청 URL**에 입력하세요.
   `https://services.leadconnectorhq.com/appengine/twilio/incoming_message`
5. 요청 URL의 방식을 HTTP POST로 설정하세요.
6. 같은 주소를 **Fallback URL**(대체 URL)에도 입력하세요.
   `https://services.leadconnectorhq.com/appengine/twilio/incoming_message`
7. Fallback URL의 방식을 HTTP POST로 설정하세요.
8. **저장**을 클릭하세요.

![메시징 서비스의 연동 설정에서 요청 URL과 대체 URL을 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149864/original/AkMZJ6tAZXJO-GjSEuA8nrmbdNSyaWPjpA.png?1788548280)

앞에서 설정한 통화 상태 콜백은 전화번호의 **Voice Configuration**에 속해요. 통화 상태 URL을 메시징 서비스의 **Delivery Status Callback**(전송 상태 콜백) 필드에 복사해 넣지 마세요.

![메시징 서비스의 Delivery Status Callback 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080149881/original/_BzNdLZvI5inEWeJVlZfa9apefXYYnKn7A.png?1788548290)

### 7단계: 설정 테스트

Twilio 구성을 저장한 뒤에는 통신 경로를 하나씩 따로 테스트하세요. 그래야 어떤 웹훅이 정상이고 어떤 웹훅에 문제가 있는지 정확히 알 수 있어요.

1. 외부 전화기로 Twilio 번호에 전화를 걸어, 수신 전화가 하이퍼클래스에 도착하는지 확인하세요.
2. Twilio 번호로 SMS를 보내고, 문자가 **대화**에 표시되는지 확인하세요.
3. 하이퍼클래스에서 해당 통화 활동을 확인해 통화 상태 정보가 업데이트되는지 살펴보세요.

## Twilio 웹훅 문제 해결

웹훅을 한꺼번에 바꾸지 말고, 문제가 생긴 이벤트만 확인하세요. 음성, 통화 상태, 문자는 각각 다른 구성 필드를 쓰기 때문에, 하나가 실패해도 나머지는 정상일 수 있어요.

### 수신 전화가 하이퍼클래스로 오지 않아요

다음을 확인하세요.

- 올바른 Twilio 번호를 선택했는지
- US1 음성 라우팅이 활성 상태인지
- **A call comes in**이 **웹훅**으로 설정되어 있는지
- 수신 전화 URL이 정확한지
- 방식이 HTTP POST인지
- 구성을 저장했는지

### 전화는 되는데 통화 상태가 제대로 업데이트되지 않아요

**Call status changes** URL을 다시 확인하고 HTTP POST인지 확인하세요. 통화 상태 엔드포인트는 수신 전화 엔드포인트와 달라요.

### 수신 SMS가 대화에 보이지 않아요

먼저 번호가 메시징 서비스에 연결되어 있는지 확인하세요. 연결되어 있다면 해당 서비스의 **연동** 설정을 확인하세요. 연결되어 있지 않다면 번호 수준의 문자 웹훅을 확인하세요. 번호가 SMS를 지원하는지도 확인하세요. 수신 SMS가 통화로 표시되거나 아예 보이지 않을 때는 [수신 SMS가 통화로 표시되거나 아예 나타나지 않을 때 해결하기](troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all.md)도 참고하세요.

### 웹훅은 맞는 것 같은데 문자가 계속 보이지 않아요

해당 문자의 Twilio Messaging Logs(메시징 로그)를 확인하세요. 문자가 Twilio까지 도착했는지 확인하고, 상태와 Message SID를 메모해 두세요. 문제를 문의할 때 이 정보를 함께 알려 주세요. 로그 확인 방법은 [Twilio에서 특정 문자 메시지 로그 확인하기](메시징/how-to-use-twilio-messaging-logs-to-troubleshoot-sms-non-isv.md)를 참고하세요.

### 엉뚱한 Twilio 서브계정을 설정했어요

Twilio 계정에 서브계정이 여러 개 있다면, 웹훅을 바꾸기 전에 문제가 생긴 전화번호가 하이퍼클래스 서브 계정에 연결된 Twilio 서브계정에 속해 있는지 확인하세요.

### 웹훅 값이 계속 바뀌어요

다른 연결 앱이나 연동이 해당 Twilio 번호를 관리하고 있는지 확인하세요. 웹훅을 관리하는 연동이 무엇인지 찾지 않고 계속 값만 바꾸면 라우팅 충돌이 생길 수 있어요.

## 자주 묻는 질문

### 하이퍼클래스 전화를 쓰는데도 이 웹훅을 설정해야 하나요?

아니요. 이 안내는 내 Twilio 계정을 연결한 서브 계정용이에요. 하이퍼클래스 전화의 웹훅 설정은 플랫폼에서 관리해요.

### Twilio 서브계정이 여러 개예요. 어느 계정에서 설정해야 하나요?

문제가 생긴 하이퍼클래스 서브 계정에 연결된 Twilio 서브계정이 무엇인지 확인하고, 그 서브계정이 문제의 전화번호를 가지고 있는지 확인하세요. 다른 Twilio 계정에서 같은 전화번호나 웹훅을 설정해도 연결된 서브 계정의 문제는 해결되지 않아요.

### Twilio 전화번호마다 모두 설정해야 하나요?

음성 구성은 Twilio 전화번호마다 따로 저장되므로, 문제가 있는 번호마다 확인하세요. 메시징 서비스를 함께 쓰는 번호는 그 서비스의 공통 수신 문자 연동 설정을 쓸 수 있어요.

### 전화는 되는데 수신 SMS만 안 오는 이유가 뭔가요?

음성과 문자는 웹훅 설정이 따로예요. 음성 구성이 올바르다고 해서 번호 수준의 문자 웹훅이나 연결된 메시징 서비스가 올바르게 설정되었다는 뜻은 아니에요.

### 메시징 서비스의 요청 URL과 대체 URL은 같아야 하나요?

네. 여기서 안내하는 하이퍼클래스용 Twilio 설정에서는 둘 다 `https://services.leadconnectorhq.com/appengine/twilio/incoming_message` 를 HTTP POST로 설정해요.

### 통화 상태 웹훅을 메시징 서비스의 Delivery Status Callback 필드에 넣어도 되나요?

아니요. `incoming_call_status` 엔드포인트는 전화번호의 **Voice Configuration**에 있는 **Call status changes**에 넣어야 해요. 메시징 서비스의 전송 상태 콜백으로 다시 쓰면 안 돼요.

### 이 웹훅을 설정하면 A2P 10DLC 등록도 완료되나요?

아니요. 웹훅 설정과 A2P 10DLC 등록은 별개예요. 앱에서 개인에게 보내는 메시지(A2P)에 미국 로컬 번호를 쓴다면, 승인된 A2P 등록과 메시징 서비스 연결이 여전히 필요할 수 있어요.

### 웹훅 문제를 문의하기 전에 어떤 정보를 모아야 하나요?

다음 정보를 모아 주세요.

- 문제가 생긴 하이퍼클래스 서브 계정
- Twilio 서브계정
- 전화번호
- 실패한 이벤트의 정확한 발생 시각
- 현재 웹훅 구성 스크린샷
- 가능하면 관련 Twilio Call SID 또는 Message SID
