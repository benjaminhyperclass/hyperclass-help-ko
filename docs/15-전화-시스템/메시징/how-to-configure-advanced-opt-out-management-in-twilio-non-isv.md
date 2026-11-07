---
원문: /support/solutions/articles/155000008992-how-to-configure-advanced-opt-out-management-in-twilio-non-isv
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# Twilio에서 Advanced Opt-Out Management(고급 수신 중단 관리) 설정하기 (비ISV 계정)

Twilio 메시징 서비스에 연결된 전화번호가 수신 중단, 수신 재동의, 도움말 키워드를 어떻게 처리할지 직접 정할 수 있어요. 고객이 보낼 수 있는 키워드와 자동으로 받는 확인 메시지를 원하는 대로 바꿀 때 이 문서를 따라 하세요.

## 개요

Advanced Opt-Out Management를 쓰면 메시징 서비스(Messaging Service)에 연결된 전화번호의 수신 중단(Opt-Out), 수신 재동의(Opt-In), 도움말(Help) 키워드 처리 방식을 바꿀 수 있어요. 고객이 보낼 수 있는 키워드를 정하고, 고객이 받는 자동 확인 메시지도 직접 쓸 수 있어요.

예를 들어 수신 중단은 `STOP`, 수신 재동의는 `START`, 도움말은 `HELP` 같은 키워드로 설정할 수 있어요. Twilio는 설정한 키워드를 대소문자 구분 없이 인식해요.

{% hint style="info" %}
**ISV 계정이라면**
이 문서는 **비ISV** Twilio 계정에만 해당해요. 계정이 **ISV** 방식으로 설정되어 있다면 하이퍼클래스 고객지원에 문의하세요. 팀에서 Advanced Opt-Out Management 설정을 도와드려요.
{% endhint %}

## 메시징 서비스 열기

1. **Twilio Console**에 로그인해요.
2. **Messaging → Services**(메시징 → 서비스)로 이동해요.
3. 사용 중인 전화번호가 연결된 메시징 서비스를 열어요.

![Twilio Console의 메시징 서비스 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082056988/original/jv9N4C9AIXy-ZHoVIIpQ8gz49ETz-Yv23g.png?1790659215)

{% hint style="info" %}
알맞은 서비스인지 확인하려면 해당 전화번호가 서비스의 **Sender Pool**(발신자 풀)에 들어 있는지 보세요.
{% endhint %}

## Opt-Out Management 열기

1. 메시징 서비스 메뉴에서 **Opt-Out Management**(수신 중단 관리)를 선택해요.
2. Advanced Opt-Out이 아직 켜져 있지 않다면 **Enable Advanced Opt-Out**(고급 수신 중단 사용)을 클릭해요.

![Enable Advanced Opt-Out 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082057088/original/GKUcXMhEemM-665arpgoheaPD1ro6joviw.png?1790659332)

{% hint style="warning" %}
메시징 서비스에서 Advanced Opt-Out을 켜면 그 설정이 해당 메시징 서비스의 발신자에게 적용돼요. 또 Twilio에 따르면, 한 번 켠 Advanced Opt-Out을 끄려면 **Twilio Support**에 문의해야 해요.
{% endhint %}

## 표준 수신 중단 키워드 편집하기

**Standard Opt-Out Keywords**(표준 수신 중단 키워드) 아래에서 **Edit**(편집)을 클릭하세요. 응답은 세 가지 유형으로 설정할 수 있어요.

### 유형 1: Opt-Out(수신 중단)

고객이 더 이상 메시지를 받고 싶지 않을 때 보낼 키워드를 설정해요. 예를 들면 다음과 같아요.

`STOP`, `CANCEL`, `END`, `OPTOUT`, `QUIT`, `REVOKE`, `STOPALL`, `UNSUBSCRIBE`

고객이 수신을 중단한 뒤 받는 확인 메시지도 직접 쓸 수 있어요. 예시는 다음과 같아요.

"You have successfully been unsubscribed. You will not receive any more messages from this number. Reply START to resubscribe."

수신 중단 키워드가 들어오면, 그 수신자는 다시 수신에 동의할 때까지 이후 메시지를 받지 못해요. `STOP`은 예약된 수신 중단 키워드여서 삭제할 수 없어요.

![Opt-Out 키워드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082057131/original/E8qf-F2nAa6g6Cbp8pFq0DPgIum5Uxy1rA.png?1790659348)

### 유형 2: Opt-In(수신 재동의)

고객이 다시 메시지를 받고 싶을 때 보낼 키워드를 설정해요. 예를 들면 다음과 같아요.

`START`, `UNSTOP`, `YES`

고객이 수신 재동의에 성공했을 때 보낼 확인 메시지도 설정할 수 있어요. 예시는 다음과 같아요.

"You have successfully been re-subscribed to messages from this number. Reply HELP for help. Reply STOP to unsubscribe. Msg&Data Rates May Apply."

`START`와 `UNSTOP`은 예약된 수신 재동의 키워드여서 삭제할 수 없어요.

![Opt-In 키워드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082057133/original/97n11uDo88QBzFTesAmXjwFK5Y4B20uo-A.png?1790659359)

### 유형 3: Help(도움말)

고객이 메시지와 관련해 도움이 필요할 때 보낼 키워드를 설정해요. 예를 들면 다음과 같아요.

`HELP`, `INFO`

자동으로 보낼 도움말 응답도 직접 쓸 수 있어요. 예시는 다음과 같아요.

"Reply STOP to unsubscribe. Msg&Data Rates May Apply."

`HELP`는 예약된 키워드여서 삭제할 수 없어요.

![Help 키워드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082057137/original/fppc9ASWMNQruPRs9_Idcpt5M4z1vE8m0Q.png?1790659370)

| 응답 유형 | 예약 키워드 (삭제 불가) | 키워드 예시 |
| --- | --- | --- |
| Opt-Out(수신 중단) | STOP | CANCEL, END, OPTOUT, QUIT, REVOKE, STOPALL, UNSUBSCRIBE |
| Opt-In(수신 재동의) | START, UNSTOP | YES |
| Help(도움말) | HELP | INFO |

## 변경 내용 저장하기

필요한 키워드와 확인 메시지를 모두 설정했다면 **Save**(저장)를 클릭하세요.

이후 고객이 이 메시징 서비스에 연결된 발신자에게 인식 가능한 키워드를 보내면, 설정한 방식대로 처리돼요.

## 키워드 인식 방식

키워드는 대소문자를 구분하지 않아요. 그래서 `STOP`, `Stop`, `stop`은 모두 같은 키워드로 처리돼요.

수신 메시지 전체가 설정한 키워드와 일치해야 해요. 예를 들어 `STOP`만 보내면 수신 중단이 적용되지만, 그 단어가 들어 있는 긴 문장은 적용되지 않을 수 있어요.

설정이 끝났어요. 이제 이 메시징 서비스의 모든 발신자에게 직접 정한 수신 중단, 수신 재동의, 도움말 키워드와 응답이 적용돼요.

## 설정 전에 알아 두세요

### ISV 계정은 고객지원에 문의하세요

이 문서의 절차는 비ISV 계정용이에요. **ISV** 방식으로 설정된 계정이라면 직접 변경하지 말고 하이퍼클래스 고객지원에 문의하세요.

### 메시징 서비스별로 설정해요

Advanced Opt-Out은 메시징 서비스 단위로 설정해요. 변경하기 전에 해당 전화번호가 연결된 메시징 서비스를 편집하고 있는지 확인하세요.

### 켜기 전에 검토하세요

Advanced Opt-Out을 켜면 해당 메시징 서비스의 수신 재동의, 수신 중단, 도움말 메시지 처리 방식이 바뀌어요. 특히 준수해야 할 규정이 따로 있는 메시징 프로그램이라면, 켜기 전에 설정한 키워드와 확인 메시지를 꼼꼼히 검토하세요.

## 자주 묻는 질문

### ISV 계정인데 이 절차를 따라 해도 되나요?

아니요. 이 문서는 비ISV 계정 전용이에요. 계정이 ISV 방식으로 설정되어 있다면 하이퍼클래스 고객지원에 문의하세요. 팀에서 Advanced Opt-Out Management 설정을 도와드려요.

### 어떤 메시징 서비스를 편집해야 하는지 어떻게 알 수 있나요?

Twilio Console에서 **Messaging → Services**를 열고 각 서비스의 **Sender Pool**을 확인하세요. 설정하려는 전화번호가 들어 있는 서비스를 편집하면 돼요.

### STOP, START, UNSTOP, HELP를 키워드 목록에서 삭제할 수 있나요?

아니요. 예약된 키워드라서 삭제할 수 없어요. 대신 이 키워드와 함께 쓸 키워드를 더 추가할 수 있고, 키워드에 따라 나가는 확인 메시지도 직접 쓸 수 있어요.

### 키워드는 대소문자를 구분하나요?

아니요. Twilio는 키워드를 대소문자 구분 없이 인식해요. `STOP`, `Stop`, `stop`은 모두 같게 처리돼요.

### "Please stop texting me" 같은 메시지도 수신 중단으로 처리되나요?

처리되지 않을 수 있어요. 수신 메시지 전체가 설정한 키워드와 일치해야 하기 때문이에요. `STOP`처럼 한 단어만 보내면 수신 중단이 적용되지만, 그 단어가 들어 있는 긴 문장은 적용되지 않을 수 있어요.

### 고객이 수신을 중단하면 어떻게 되나요?

고객은 설정해 둔 수신 중단 확인 메시지를 받아요. 그리고 `START` 같은 수신 재동의 키워드로 다시 동의하기 전까지, 해당 발신자의 이후 메시지를 받지 못해요.

### 한 번 켠 Advanced Opt-Out을 끌 수 있나요?

Console에서는 끌 수 없어요. Twilio에 따르면 Advanced Opt-Out을 켠 뒤에 끄려면 **Twilio Support**에 문의해야 해요. 켜기 전에 설정을 꼼꼼히 검토하세요.

### 설정이 내 Twilio 전화번호 전체에 적용되나요?

설정한 메시징 서비스의 발신자에게만 적용돼요. 다른 메시징 서비스에 있는 번호는 해당 서비스에서 따로 설정해야 해요.
