---
원문: https://help.gohighlevel.com/support/solutions/articles/48000979925-sending-priority-from-name-address
번역일: 2026-11-06
카테고리: 09-이메일
---

# 발신자 이메일 우선순위 — 보내는 사람과 발신자 주소

연락처가 어떤 발신자 이메일을 보게 되는지, 그리고 수동 이메일·자동 이메일·워크플로우에서 어디에 설정하는지 알려 드려요.

{% hint style="info" %}
이제 모든 계정에서 워크플로우를 쓸 수 있어요. 트리거와 캠페인으로 하던 일을 하나의 빌더에서 모두 할 수 있고, 그 밖의 기능도 함께 쓸 수 있어요.
{% endhint %}

## 이 문서에서 알아볼 내용

리드에게 이메일을 보낼 때 어떤 발신자 이메일이 쓰이는지 알아봅니다. 수동 발송인지 자동 발송인지, 연락처에 담당 사용자가 배정되어 있는지에 따라 달라지고, 각각 정해진 우선순위를 따라요.

이어서 발신자 이메일을 설정할 수 있는 곳을 하나씩 안내해요. **대화**, 이메일 템플릿, 일괄 발송, **워크플로우 설정**, 워크플로우의 **이메일 보내기** 액션이 있어요.

## 리드는 어떤 발신자 이메일로 메일을 받나요?

연락처가 보게 되는 발신자 이메일은 (a) 수동 이메일인지 자동 이메일인지, (b) 연락처에 사용자가 배정되어 있는지에 따라 달라져요. 아래 우선순위 표를 기준으로 확인하세요.

| 이메일 유형 | 발신자 출처 | 배정되지 않은 연락처 | 배정된 연락처 |
| --- | --- | --- | --- |
| 수동 이메일 | 로그인한 사용자 이메일 | 1순위 | 1순위 |
| | 서브 계정 이메일 | 해당 없음 | 해당 없음 |
| | 배정된 사용자 이메일 | 해당 없음 | 해당 없음 |
| | 에이전시 이메일 | 해당 없음 | 해당 없음 |
| 자동 이메일 | 캠페인 / 워크플로우 설정 | 1순위 | 1순위 |
| | 배정된 사용자 이메일 | 해당 없음 | 2순위 |
| | 서브 계정 이메일 | 2순위 | 3순위 |
| | 에이전시 이메일 | 3순위 | 4순위 |
| 리뷰 요청 이메일 | 항상 로그인한 사용자 이메일을 발신자로 사용해요. | | |
| 예약 확인 이메일 (**캘린더 설정 > 3. Confirmation**(확인)) | 서브 계정에 설정된 Mailgun 서브도메인을 기반으로 한 do-not-reply@replies.domain.com을 사용해요. SMTP로 연동된 이메일이 있으면 그 이메일을 사용해요. | | |

{% hint style="info" %}
SMTP 제공업체를 어떻게 연결하는지 모르시나요? SMTP 연동 설정 안내를 참고하세요.
{% endhint %}

Mailgun 또는 하이퍼클래스 이메일을 사용 중이고 리드에게 담당 사용자가 배정되어 있지 않으면, **비즈니스 이메일**이 발신자로 쓰여요.

![Mailgun 또는 하이퍼클래스 이메일을 사용할 때 배정되지 않은 리드에게 비즈니스 이메일이 발신자로 쓰이는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230234/original/LukUd53t-tjwMn_dHkUbmkoiyMFs0MVgSg.png?1758468487)

## 연락처에 담당 사용자가 배정되어 있는지 확인하기

1. **연락처 > 스마트 리스트**를 열고 확인하려는 연락처를 찾으세요.

   ![스마트 리스트에서 연락처를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230430/original/xV9ahg5895S7bEOtO_x3vpeQJchyHcPkRw.png?1758468592)

2. **대화**를 열고 오른쪽 아이콘을 클릭해 연락처 상세 패널을 여세요.

   ![대화에서 연락처 상세 패널을 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230574/original/xeWmQjJoK1c1CDvcp3ouxStrSEb9_oFCPw.png?1758469037)

3. 상세 패널에서 **할당된 사용자** 필드를 확인하세요. 값이 있으면 배정된 연락처이고, 비어 있으면 배정되지 않은 연락처예요.

   ![연락처의 할당된 사용자 필드를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230590/original/WHLGxGLu_lgUbp8VMrPX7Qdu0N2sZvL4ng.png?1758469109)

## 발신자 이메일을 설정할 수 있는 곳

연락처가 이메일을 받는 방식마다 설정하는 곳이 달라요. 모두 다섯 곳이에요.

## 수동 이메일 — 대화 탭

**대화** 탭에서 이메일을 한 통씩 직접 보낼 때는 **발신자 주소**가 로그인한 사용자 이메일로 기본 설정돼요.

![대화 탭에서 발신자 이메일이 로그인한 사용자 이메일로 기본 설정된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230663/original/iOGx-LWFQvZQbd1jviS60WE9MGKlCVQPew.png?1758469162)

{% hint style="info" %}
양방향 이메일 동기화를 설정했다면 **발신자 이메일**에 연동한 이메일이 대신 표시돼요.

Gmail 양방향 이메일 동기화 설정 · Outlook 양방향 이메일 동기화 설정
{% endhint %}

## 자동 이메일 — 이메일 템플릿

**마케팅 > 이메일 > 템플릿**으로 이동한 다음 **+ 신규**를 클릭하면 새 템플릿을 시작할 수 있어요.

![마케팅 > 이메일 > 템플릿 > 새 템플릿](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230722/original/mhcvjez4vv9dDOSLWqm1Mze-o6roXtuMnA.png?1758469252)
![발신자 세부 정보를 설정하는 이메일 템플릿 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230755/original/WfELc367egeqKtFKSioPk9xJheyU7_k2cw.png?1758469342)

## 자동 이메일 — 일괄 작업: 이메일 보내기

1. **연락처 > 스마트 리스트**로 이동해 이메일을 보낼 연락처를 선택한 다음 **이메일 보내기**를 클릭하세요.

   ![연락처를 선택한 스마트 리스트 화면 — 이메일 보내기 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230958/original/ChQW9qc8NCaqCoYr44PpauJrgatMH9al2Q.png?1758469438)

2. 일괄 발송 창에서 **보내는 사람**과 **보내는 이메일**을 입력하세요. 이번 발송에 한해 기본 발신자 대신 이 값이 쓰여요.

   ![일괄 발송 창의 보내는 사람, 보내는 이메일 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230965/original/xc9hiF8uAXelg45ZHErj1zHTKZwQtNzbZg.png?1758469471)

## 자동 이메일 — 워크플로우 설정

1. **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 클릭하세요.

   ![자동화 > 워크플로우 > 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231022/original/nIi7qExg8bVqI6mUWWXejs12Dp5xBLFmGQ.png?1758469549)

2. **처음부터 시작**을 선택하고 **Create new workflow**(새 워크플로우 만들기)를 클릭하세요.

   ![처음부터 시작을 선택해 새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231079/original/yf8J13CKvWamnZ9W9o7HBUKnHzBk-fXmEA.png?1758469619)

3. 워크플로우 빌더에서 **설정 > 커뮤니케이션 > 발신자 세부 정보**를 여세요.
4. **발신 도메인**에서 **모든 도메인**을 선택하거나, 자동화에 쓸 수 있도록 인증된 전용 발송 도메인을 선택하세요.
5. **발신자 이메일** 아래에 **발신자 이름**과 **발신자 이메일**을 입력하고, 워크플로우 설정을 저장하세요.

   ![워크플로우 설정 — 발신자 주소 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083349277/original/39CmNVRjfzQy1Ph_kF2JfoMREuyOz9Y2zA.png?1792002457)

## 자동 이메일 — 워크플로우 이메일 보내기 액션

1. 워크플로우에서 **+** 버튼을 클릭하고 **이메일 보내기**를 선택하세요.

   ![워크플로우에 이메일 보내기 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231139/original/wV8WhjpkvQj_C9WDKCRPclPpO91043Halg.png?1758469707)

2. 액션 안에서 **보내는 사람**과 **보내는 이메일**을 입력하세요. 액션에 입력한 발신자 정보는 선택한 발신 도메인을 포함해 워크플로우 설정보다 우선해서 적용돼요.

   ![이메일 보내기 액션 안의 보내는 사람, 보내는 이메일 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231144/original/PaXSJLcjoxA2QdrjoDIiKown142mVkbcYQ.png?1758469725)

## 자주 묻는 질문

### Outlook에서는 발신자 이메일이 왜 항상 길고 이상하게 보이나요?

실제 발송 주소(엔벨로프 발신자)가 화면에 보이는 발신자 주소와 다를 때 Outlook이 발신자 정보를 이렇게 표시해요. 같은 이메일을 Gmail 주소로 보내면 발신자가 정상적으로 보여요. [Outlook에서 "sent by" 정보를 숨기는 방법](https://stackoverflow.com/questions/35148098/hide-sent-by-information-in-outlook/35149628)을 참고하세요.

![발신자에 'sent by'가 표시된 Outlook 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301042/original/spc9PucOJ-wT0rT3Sf4IBvjR6JcaJn-1QQ.png?1666018222)
![같은 이메일을 다른 메일 앱에서 본 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301207/original/D6asla-m-OdXThoGwKQTtT1P_GnYyRIpsg.png?1666018251)

### Gmail에 표시되는 "via" 정보를 없애려면 어떻게 하나요?

서브 계정에 설정된 Mailgun 도메인과 같은 도메인의 발신자 이메일을 사용하세요. 보내는 주소의 도메인이 SPF/DKIM이 맞춰진 발송 도메인과 다르면 Gmail이 "via" 안내를 표시해요. 자세한 내용은 [발신자 이름 옆에 표시되는 추가 정보](https://support.google.com/mail/answer/1311182)를 참고하세요.

### 이메일 보내기 액션의 발신자 정보가 워크플로우 설정과 다르면 어떻게 되나요?

이메일 보내기 액션의 발신자 정보가 선택한 발신 도메인을 포함해 워크플로우 설정보다 우선해요. 액션에 발신자 정보를 따로 입력하지 않으면 워크플로우의 기본값을 그대로 따라요.

### 배정되지 않은 연락처에게 자동 캠페인을 보내면 어떤 이메일이 쓰이나요?

배정되지 않은 연락처에게 자동 발송할 때의 우선순위는 캠페인/워크플로우 설정 → 서브 계정 이메일 → 에이전시 이메일 순서예요. 값이 있는 첫 번째 항목이 적용돼요. 워크플로우에 발신자를 설정해 두었다면 연락처에게는 그 발신자가 보여요.

### 수동 이메일의 발신자를 배정된 사용자의 이메일로 할 수 있나요?

수동 이메일은 항상 로그인한 사용자의 이메일을 사용해요. 메시지를 실제로 작성하는 사용자이기 때문이에요. 배정된 사용자를 발신자로 하려면 그 사용자가 직접 로그인해서 이메일을 보내게 하거나, 배정된 사용자 이메일의 우선순위가 올라가는 자동 워크플로우로 바꾸세요.

### 리뷰 요청 이메일은 왜 캠페인 발신자가 아니라 항상 로그인한 사용자로 나가나요?

리뷰 요청은 의도적으로 로그인한 사용자를 발신자로 고정해 두었어요. 받는 사람이 팀의 알아볼 수 있는 실제 이름을 보게 하려는 거예요. 리뷰 요청은 브랜드 별칭보다 아는 사람이 보낸 메일일 때 성과가 눈에 띄게 더 좋아요.

### 예약 확인 이메일은 어디에서 발송되나요? 발신자를 바꿀 수 있나요?

예약 확인 이메일(**캘린더 설정 > 3. Confirmation**(확인)에서 설정)은 서브 계정에 설정된 Mailgun 서브도메인을 기반으로 한 시스템 주소를 사용해요. SMTP로 연동된 이메일이 있으면 그 이메일을 사용해요. 다른 발신자가 필요하면 SMTP 연동을 연결하세요. 그러면 기본 주소 대신 연동한 이메일이 쓰여요.
