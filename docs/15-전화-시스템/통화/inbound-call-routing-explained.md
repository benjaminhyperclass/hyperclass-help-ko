---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 통화
---

# 수신 전화 라우팅 - 상세 가이드

목차

- [전화번호로의 수신 전화](#전화번호로의-수신-전화)
- [자주 묻는 질문](#자주-묻는-질문)
  - [1. 전화번호를 여러 개 사용하는 경우 연락처가 어느 번호로 전화했는지 어떻게 알 수 있나요?](#1-전화번호를-여러-개-사용하는-경우-연락처가-어느-번호로-전화했는지-어떻게-알-수-있나요)
  - [2. 전화번호가 사용자에게 배정되었는지 확인하는 방법은?](#2-전화번호가-사용자에게-배정되었는지-확인하는-방법은)
  - [3. '호출된 번호에 배정된 사용자에게 연결' 옵션이 활성화되었는지 확인하는 방법은?](#3-호출된-번호에-배정된-사용자에게-연결-옵션이-활성화되었는지-확인하는-방법은)
  - [4. 연락처/리드가 전화한 번호가 사용자에게 배정되었는지 확인하는 방법은?](#4-연락처리드가-전화한-번호가-사용자에게-배정되었는지-확인하는-방법은)
  - [5. '비즈니스 전화번호로 통화 전달' 옵션이 활성화되었는지 확인하는 방법은?](#5-비즈니스-전화번호로-통화-전달-옵션이-활성화되었는지-확인하는-방법은)
  - [6. 전화번호가 사용자에게 배정되지 않았고 전달 번호도 설정하지 않았는데 통화가 전달되는 이유는?](#6-전화번호가-사용자에게-배정되지-않았고-전달-번호도-설정하지-않았는데-통화가-전달되는-이유는)
  - [7. 전달 번호를 설정하지 않으면 어떻게 되나요?](#7-전달-번호를-설정하지-않으면-어떻게-되나요)
  - [8. 전화번호를 음성 메시지로 바로 연결할 수 있나요?](#8-전화번호를-음성-메시지로-바로-연결할-수-있나요)
  - [9. 모든 통화를 항상 하나의 번호로만 전달하고 싶은데 어떻게 설정하나요?](#9-모든-통화를-항상-하나의-번호로만-전달하고-싶은데-어떻게-설정하나요)
  - [10. 전화번호로 전화하면 바로 끊어지고 벨도 울리지 않습니다. 번호를 재설정하고 새로 구매해도 같은 문제가 발생하는 이유는?](#10-전화번호로-전화하면-바로-끊어지고-벨도-울리지-않습니다-번호를-재설정하고-새로-구매해도-같은-문제가-발생하는-이유는)
  - [11. 내선 번호와 함께 통화 전달을 설정할 수 있나요?](#11-내선-번호와-함께-통화-전달을-설정할-수-있나요)

리드가 다시 전화를 걸면 통화는 어디로 연결될까요?

# 전화번호로의 수신 전화

전화번호로 들어오는 수신 전화의 전달은 사용자 전화 배정, 리드 배정, 또는 연락처가 팀원에게 배정된 상황에 따라 결정됩니다. 이 경우 팀원 프로필의 통화 설정이 중요한 역할을 합니다.

**아래는 사용자나 리드가 전화번호에 배정되었는지 여부에 따른 수신 전화 흐름을 확인할 수 있는 표입니다**

| 웹 앱 | 모바일 앱 | 사용자 전화번호 | 전화 페이지 전달 번호 | 비즈니스 프로필 전화번호 | 통화 흐름 (액션) |
|-------|-----------|-----------------|---------------------|------------------------|-----------------|
| Yes   | Yes       | Yes             | Yes                 | Yes                    | 웹/모바일/사용자 전화번호로 전달 |
| Yes   | Yes       | Yes             | Yes                 | No                     | 웹/모바일/사용자 전화번호로 전달 |
| Yes   | Yes       | Yes             | No                  | Yes                    | 웹/모바일/사용자 전화번호로 전달 |
| Yes   | Yes       | Yes             | No                  | No                     | 웹/모바일/사용자 전화번호로 전달 |
| Yes   | Yes       | No              | No                  | No                     | 웹 앱/모바일 앱으로 전달 |
| Yes   | No        | No              | No                  | No                     | 웹으로 전달 |
| Yes   | Yes       | No              | Yes                 | Yes                    | 웹/모바일 및 전화 페이지 전달 번호로 전달 |
| Yes   | Yes       | No              | No                  | Yes                    | 웹/모바일 및 비즈니스 전화번호로 전달 |
| No    | No        | Yes             | Yes                 | Yes                    | 사용자 전화번호로 전달 |
| No    | No        | Yes             | No                  | No                     | 사용자 전화번호로 전달 |
| No    | No        | Yes             | Yes                 | No                     | 사용자 전화번호로 전달 |
| No    | No        | No              | No                  | No                     | 전달할 곳이 없어 즉시 통화 종료 |
| No    | No        | No              | Yes                 | Yes                    | 전화 페이지 전달 번호로 전달 |
| No    | No        | No              | No                  | Yes                    | 비즈니스 전화번호로 전달 |
| Yes   | No        | No              | No                  | No                     | 웹 앱으로 전달 |
| No    | Yes       | No              | No                  | No                     | 모바일 앱으로 전달 |

# 자주 묻는 질문

## 1. 전화번호를 여러 개 사용하는 경우 연락처가 어느 번호로 전화했는지 어떻게 알 수 있나요?

대화(Conversations) 메뉴에서 해당 연락처를 찾아서 수신 전화에 마우스를 올리고 점 세 개를 클릭한 다음 Details(세부정보)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031126630/original/2AqmZjuM4uOEoewZ-MmJRWWv3dxr-qhFaQ.png?1723760431)

To(수신처)에서 연락처가 어느 전화번호로 전화했는지 확인할 수 있습니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031126652/original/pQdzPFPqVeIBljToR7G-2a1H8wKp0KwHNw.png?1723760535)

## 2. 전화번호가 사용자에게 배정되었는지 확인하는 방법은?

하위 계정에서 왼쪽 하단의 설정(Settings)을 클릭하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031127421/original/6kMzndKB4jw5GLakQVMdkoxXJCFAqgbeLg.png?1723764448)

My Staff(팀 관리) > Edit(편집)을 클릭하세요(아무 사용자나 선택해서 편집):

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031127415/original/rc-ET-1SdKZE2c2ygOYPn8-xRs0Nkmh6Cg.png?1723764416)

Call & Voicemail Settings(통화 및 음성메일 설정)을 펼치세요.

Select Phone Number(전화번호 선택) 드롭다운을 클릭했을 때:

- 전화번호(이미 다른 사용자에게 배정됨)이라고 나오는데 어느 사용자인지 모르겠다면, 각 사용자를 편집해서 통화 및 음성메일 설정 섹션을 펼쳐 어느 사용자에게 번호가 배정되었는지 확인해야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906795/original/kjhWIybQJmsrIhn0jRAGmpiC6ljHxJw1Rg.jpg?1721933465)

다음과 같이 전화번호가 보인다면, 예를 들어 제 전화번호가 (778) 907-0712인 경우:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906813/original/Emia26C6jgW0DZhauMVcayyBIwJZ3i5WRA.jpg?1721933510)

이는 배정된 전화번호 (778) 907-0712로 오는 모든 통화가 이 사용자의 전화번호로 라우팅된다는 의미입니다.

리드가 다른 사용자에게 배정되었더라도, 수신 전화는 항상 해당 사용자의 전화번호로 연결됩니다.

사용자 전화번호가 무엇인지 확인 > 첫 번째 섹션의 User Info(사용자 정보)를 펼쳐서 사용자 전화번호를 확인하세요.

사용자 전화번호가 없으면 전화번호 설정에서 지정한 전달 번호로 넘어갑니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906835/original/i5OTyVajw910opiu26C-hS0Ada8V2k8YIg.jpg?1721933554)

## 3. '호출된 번호에 배정된 사용자에게 연결' 옵션이 활성화되었는지 확인하는 방법은?

이 옵션은 하위 계정 보기 > 설정(Settings) > 전화번호(Phone Numbers) > 고급 설정(Advanced Settings) > 음성 통화(Voice Calls) > 수신 통화(Inbound Call)에서 확인할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906879/original/pXXiBsnlnfyFFuYNiVrJgOECZf12HjY1Hg.jpg?1721933602)

## 4. 연락처/리드가 전화한 번호가 사용자에게 배정되었는지 확인하는 방법은?

하위 계정에서 연락처(Contacts)를 클릭하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906906/original/9zfmVvXPFIihQ2Kr-L1y2ANjn-waPps1QA.jpg?1721933666)

우측 상단의 빠른 검색 박스에서 전화번호로 연락한 연락처의 전화번호를 검색하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906918/original/YPS4nP-tEjvdsGdrEMhmsEKlgml3cd1-Bg.jpg?1721933707)

연락처를 클릭하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906931/original/Jnve5YjQhEfQpP_20qBsjcaOfS6uwnoXaw.jpg?1721933745)

상단에서 연락처가 어느 사용자에게 배정되었는지 확인하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906949/original/GRx5qXENBweJgJ22cqgbUl2rXgT0xxyt_Q.jpg?1721933785)

사용자 A에게 배정되었다면 모든 수신 전화는 사용자 A로 갑니다.

하지만 연락처가 전화한 전화번호가 이미 사용자 B에게 배정되었다면([확인 방법](inbound-call-routing-explained.md) - 전화번호가 사용자에게 배정된 것이 1순위이므로, 연락처가 사용자 A에게 배정되었더라도 모든 수신 전화는 사용자 B로 갑니다.

## 5. '비즈니스 전화번호로 통화 전달' 옵션이 활성화되었는지 확인하는 방법은?

이 옵션은 하위 계정 보기 > 설정(Settings) > 전화번호(Phone Numbers) > 고급 설정(Advanced Settings) > 음성 통화(Voice Calls) > 수신 통화(Inbound Call)에서 확인할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029906989/original/b_JFDrfWYl85V7RYFW8aNjrB5yxfOr6J1A.jpg?1721933851)

## 6. 전화번호가 사용자에게 배정되지 않았고 전달 번호도 설정하지 않았는데 통화가 전달되는 이유는?

다음 경로에서 회사 전화번호가 설정되었는지 확인해보세요:

Business Information(비즈니스 정보) > Company Phone(회사 전화번호)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029907025/original/0NXXOIC8KZKXvveSo80Wy07e3vqBFAQsoQ.jpg?1721933901)

## 7. 전달 번호를 설정하지 않으면 어떻게 되나요?

전화번호로 전화하면 즉시 통화가 종료됩니다. 또한 번호가 팀원에게 배정되어 있고 웹/모바일 앱 전달이 활성화되어 있으면 웹과 모바일 앱으로 통화가 전달됩니다.

## 8. 전화번호를 음성 메시지로 바로 연결할 수 있나요?

[회사 및 사용자용 음성메일](../voicemail-for-company-and-for-users.md)을 설정할 수 있습니다.

한 가지 방법은 음성메일이 설정된 Google Voice 번호를 구해서 전달 번호에 입력하는 것입니다.

수신 통화 타임아웃을 1초로 설정하면 2-3번 벨 소리 후 더 빨리 통화를 종료할 수 있습니다.

또는 전화번호를 사용자에게 배정하고 [모바일 앱에서 수신 통화](how-to-forward-inbound-calls-to-mobile-app.md)를 받을 수도 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029907065/original/otHk9jsvCxqULOruojQNlj4BoqQ2_WvWTA.jpg?1721933980)

## 9. 모든 통화를 항상 하나의 번호로만 전달하고 싶은데 어떻게 설정하나요?

새 사용자를 만들어서 전화번호를 그 사용자에게 배정하세요. 모든 통화가 항상 해당 사용자의 전화번호로 갑니다.

## 10. 전화번호로 전화하면 바로 끊어지고 벨도 울리지 않습니다. 번호를 재설정하고 새로 구매해도 같은 문제가 발생하는 이유는?

전화번호를 편집해서 위스퍼 메시지에 설정된 커스텀 값이 있는지 확인해보세요. 잘못된 커스텀 값은 수신 통화에 영향을 주어 통화가 끊어지게 할 수 있습니다.

또 다른 가능한 원인은 전화번호가 음성 통화를 지원하지 않을 수 있다는 것입니다. [Twilio에서 특정 통화 로그를 확인하는 방법](../how-to-check-logs-for-a-specific-call-in-twilio.md) 문서에서 전화번호의 기능도 확인할 수 있는 방법을 안내하고 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029907101/original/ichGvGlWDIfV-T6iVpK_qhAYXlxvvv3trQ.jpg?1721934040)

## 11. 내선 번호와 함께 통화 전달을 설정할 수 있나요?

전화번호가 사용자에게 배정된 경우에만 가능합니다. 사용자의 전화번호 옆에 내선 번호 필드가 있습니다. 모든 통화는 항상 해당 사용자의 전화번호로 갑니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029907118/original/IHUO00y-GNbrPLcPsoOVRhFve1PxlMlxXQ.jpg?1721934083)

시나리오: 리드가 Hyperclass 캠페인으로부터 SMS나 전화를 받습니다. 리드가 발신자 ID에서 본 번호로 다시 전화를 겁니다. 이는 원래 설정된 전화번호입니다(설정 → 전화번호에서 확인 가능). 통화는 어디로 연결될까요?

회사 전화번호 (1차 단계):

통화 전달 번호가 없고 리드가 사용자 배정 캠페인을 통해 특정 사용자에게 배정되지 않은 경우...

통화는 회사 전화번호로 전달됩니다.

회사 전화번호를 업데이트하려면 다음 단계를 따르세요:

- 클라이언트 뷰에서 설정(Settings)을 클릭하세요.
- 회사(Company)를 클릭하세요.
- 회사 전화번호(Company Phone) 필드의 번호를 업데이트하세요.
- 회사 업데이트(Update Company)를 클릭하세요.

통화 전달 번호 (2차 단계):

통화 전달 번호가 있고 리드가 사용자 배정 캠페인을 통해 특정 사용자에게 배정되지 않은 경우...

통화는 통화 전달 번호로 전달됩니다.

통화 전달 번호를 업데이트하려면 다음 단계를 따르세요:

- 클라이언트 뷰에서 설정(Settings)을 클릭하세요.
- 전화번호(Phone Numbers)를 클릭하세요.
- 선택된 기본 발신 번호의 통화 전달 번호를 업데이트하세요.
- 저장(Save)을 클릭하세요.

사용자 전화번호 (3차 단계)

리드가 사용자 배정 캠페인을 통해 사용자에게 배정된 경우...

통화는 사용자 전화번호로 전달됩니다.

사용자 전화번호를 업데이트하려면 다음 단계를 따르세요:

- 클라이언트 뷰에서 설정(Settings)을 클릭하세요.
- 팀 관리(Team Management)를 클릭하세요.
- 리드가 배정된 사용자의 편집(Edit)을 클릭하세요.
- 전화번호(Phone) 필드를 업데이트하세요.
- 저장(Save)을 클릭하세요.

---
*원문 최종 수정: Mon, 21 Oct, 2024 at 3:17 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*