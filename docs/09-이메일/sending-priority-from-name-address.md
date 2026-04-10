---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 이메일 발송 우선순위 - 발신자명과 발신 주소

참고: 이제 워크플로우가 모든 계정에서 사용 가능하므로, 트리거와 캠페인이 하던 모든 작업(그리고 그 이상!)을 하나의 빌더에서 할 수 있습니다! 워크플로우에 대해 자세히 알아보기

## 이 글에서 다룰 내용:

- [리드가 어떤 발신자 이메일로부터 이메일을 받게 되는가?](#리드가-어떤-설정된-발신자-이메일로부터-이메일을-받게-되는가)
- [연락처가 배정되었는지 배정되지 않았는지 확인하는 방법](#연락처가-배정되었는지-배정되지-않았는지-확인하는-방법)
- [발신자 이메일을 설정할 수 있는 곳 - 수동 이메일](#발신자-이메일을-설정할-수-있는-곳---수동-이메일)
  - [대화 탭](#대화-탭)
- [발신자 이메일을 설정할 수 있는 곳 - 자동 이메일](#발신자-이메일을-설정할-수-있는-곳---자동-이메일)
  - [이메일 템플릿](#이메일-템플릿)
  - [일괄 작업 - 이메일 발송](#일괄-작업---이메일-발송)
  - [워크플로우 이메일 발송 액션](#워크플로우-이메일-발송-액션)
  - [캠페인 설정](#캠페인-설정)
  - [트리거 - 이메일 발송 액션](#트리거---이메일-발송-액션)

## 리드가 어떤 설정된 발신자 이메일로부터 이메일을 받게 되는가?

| 상황 | 배정되지 않은 연락처 | 배정된 연락처 |
|------|------------------|-------------|
| **수동 이메일** | | |
| 로그인한 사용자 이메일 | 1순위 | 1순위 |
| 로케이션 이메일 | 해당 없음 | 해당 없음 |
| 배정된 사용자 이메일 | 해당 없음 | 해당 없음 |
| 에이전시 이메일 | 해당 없음 | 해당 없음 |
| **자동 이메일** | | |
| 캠페인/워크플로우 설정 | 1순위 | 1순위 |
| 배정된 사용자 이메일 | 해당 없음 | 2순위 |
| 로케이션 이메일 | 2순위 | 3순위 |
| 에이전시 이메일 | 3순위 | 4순위 |
| **리뷰 요청 이메일** | 로그인한 사용자 이메일을 항상 발신자 이메일로 사용 | |
| **예약 요청 이메일** (캘린더 설정→3. 확인) | 로케이션에 설정한 Mailgun 서브도메인에 따라 [do-not-reply@replies.domain.com](mailto:do-not-reply@replies.domain.com)을 사용하거나, SMTP 연동 이메일을 사용 | |

SMTP 제공업체 연결 방법을 모르시나요? [다음 단계를 따라 설정해보세요.](setting-up-smtp-providers.md)

Mailgun/LC 이메일을 사용하는 경우, 리드가 배정되지 않았다면 여기서 비즈니스 이메일을 사용합니다:

![비즈니스 이메일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230234/original/LukUd53t-tjwMn_dHkUbmkoiyMFs0MVgSg.png?1758468487)

---

## 연락처가 배정되었는지 배정되지 않았는지 확인하는 방법

스마트 리스트 탭에서 연락처를 검색하세요

![스마트 리스트에서 연락처 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230430/original/xV9ahg5895S7bEOtO_x3vpeQJchyHcPkRw.png?1758468592)

대화 검색 → 오른쪽 아이콘을 클릭하여 연락처 상세 정보 보기

![대화에서 연락처 상세 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230574/original/xeWmQjJoK1c1CDvcp3ouxStrSEb9_oFCPw.png?1758469037)

여기서 연락처에 누가 배정되어 있는지 확인하세요:
![연락처 배정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230590/original/WHLGxGLu_lgUbp8VMrPX7Qdu0N2sZvL4ng.png?1758469109)

## 발신자 이메일을 설정할 수 있는 곳 - 수동 이메일

## 대화 탭

발신 이메일은 기본적으로 로그인한 사용자의 이메일이 됩니다:
![기본 발신 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230663/original/iOGx-LWFQvZQbd1jviS60WE9MGKlCVQPew.png?1758469162)

하지만 양방향 이메일 동기화를 설정했다면, 연동된 이메일이 표시됩니다:

[Gmail용 양방향 이메일 동기화 설정 방법](how-to-set-up-two-way-email-sync-for-gmail.md)

[Outlook용 양방향 이메일 동기화](two-way-email-sync-for-outlook.md)

## 발신자 이메일을 설정할 수 있는 곳 - 자동 이메일

## 이메일 템플릿

마케팅(Marketing) > 이메일(Emails) > 템플릿(Templates) > +신규(New) 클릭
![이메일 템플릿 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230722/original/mhcvjez4vv9dDOSLWqm1Mze-o6roXtuMnA.png?1758469252)

![이메일 템플릿 발신자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230755/original/WfELc367egeqKtFKSioPk9xJheyU7_k2cw.png?1758469342)

---

### 일괄 작업 - 이메일 발송

연락처(Contacts) → 스마트 리스트(Smart Lists) → 연락처 선택 → 이메일 발송(Send Email) 클릭
![일괄 이메일 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230958/original/ChQW9qc8NCaqCoYr44PpauJrgatMH9al2Q.png?1758469438)

발신자명과 발신 이메일 추가
![발신자 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230965/original/xc9hiF8uAXelg45ZHErj1zHTKZwQtNzbZg.png?1758469471)

### 워크플로우 설정

자동화(Automation) → 워크플로우(Workflows) → 워크플로우 생성(Create Workflow) 클릭

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231022/original/nIi7qExg8bVqI6mUWWXejs12Dp5xBLFmGQ.png?1758469549)

처음부터 시작(Start from scratch) 선택 후 새 워크플로우 생성(Create new workflow) 클릭:
![새 워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231079/original/yf8J13CKvWamnZ9W9o7HBUKnHzBk-fXmEA.png?1758469619)

설정(Settings) → 발신자 주소 구성(Configure Sender Address) 클릭
![워크플로우 발신자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231085/original/Et08a1v65mJKmkImQ3wZ9dD1byc63SKmcQ.png?1758469667)

## 워크플로우 이메일 발송 액션

+ 버튼 클릭 > "이메일 발송(Send Email)" 옵션 선택
![이메일 발송 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231139/original/wV8WhjpkvQj_C9WDKCRPclPpO91043Halg.png?1758469707)

발신자명과 발신 이메일 입력
![발신자 정보 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231144/original/PaXSJLcjoxA2QdrjoDIiKown142mVkbcYQ.png?1758469725)

## 자주 묻는 질문

### 1. Outlook의 발신 이메일이 항상 길고 이상하게 보이는 이유는 무엇인가요?

![Outlook 발신자 표시 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301042/original/spc9PucOJ-wT0rT3Sf4IBvjR6JcaJn-1QQ.png?1666018222)

![Outlook 발신자 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301207/original/D6asla-m-OdXThoGwKQTtT1P_GnYyRIpsg.png?1666018251)

이는 Outlook이 발신자 정보를 표시하는 방식의 문제입니다. 이 이메일을 gmail.com으로 보내면 Gsuite에서는 발신자 정보가 올바르게 표시됩니다.

[Outlook에서 "sent by" 정보를 숨기는 방법](https://stackoverflow.com/questions/35148098/hide-sent-by-information-in-outlook/35149628)에 대해 자세히 알아보세요.

### 2. Gmail에서 전송 정보를 제거하는 방법은?

설정한 Mailgun 도메인과 동일한 발신자 이메일 도메인을 사용해야 합니다. [발신자명 옆의 추가 정보](https://support.google.com/mail/answer/1311182)에 대해 자세히 알아보세요.

---

## 관련 아티클

- [SMTP 제공업체 설정](setting-up-smtp-providers.md)
- [이메일 발송 가이드: 이메일 모범 사례 및 이메일 워밍업](email-sending-guide-email-best-practices-email-warm-up.md)
- [Gmail용 양방향 이메일 동기화 설정 방법](how-to-set-up-two-way-email-sync-for-gmail.md)
- [Outlook용 양방향 이메일 동기화 설정 방법](two-way-email-sync-for-outlook.md)
- Mailgun으로 커스텀 이메일 도메인 사용하기
- [이메일이 전송되지 않을 때 SMTP 사용의 제한사항](limitation-of-using-smtp-when-emails-are-not-sending.md)

---
*원문 최종 수정: Sun, 21 Sep, 2025 at 10:48 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*