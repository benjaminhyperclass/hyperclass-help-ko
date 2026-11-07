---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003065-error-notifications-in-workflows
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 오류 알림

워크플로우에서 오류가 생기면 이메일로 알림을 받고, **Needs Review**(검토 필요) 탭에서 오류가 있는 워크플로우를 한곳에서 확인할 수 있어요. 알림 수신 설정과 오류 확인 처리 방법도 함께 안내해요.

[동영상](https://www.youtube.com/embed/UsO2QW5R2pA?&wmode=opaque)

## 새로 추가된 기능

![오류 알림 기능 개요 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010120843/original/hjYWq4PoovHAidQkDm2TjPwkqtcCzpozJw.png?1697302948)

오류가 생기면 이메일을 받고, 오류가 있는 워크플로우를 모아 보는 전용 공간도 쓸 수 있어요.

- **워크플로우 설정** 메뉴가 새로 생겼어요.
  - 이 메뉴를 누르면 이메일 알림을 설정하는 페이지로 이동해요.
- 워크플로우 목록 페이지에 **Needs Review**(검토 필요) 탭이 새로 생겼어요.
  - 오류가 있는 워크플로우를 모두 보여 줘요.
- 워크플로우에 오류가 생기면 서브 계정 관리자에게 이메일이 자동으로 발송돼요.
- 실행 로그에 오류 확인 버튼이 새로 생겼어요.
  - 이 버튼으로 오류를 확인했다고 표시할 수 있어요.

## 1단계에서 적용되는 액션

- **Webhook**(웹훅), **Custom Webhook**(커스텀 웹훅)
- 프리미엄 액션: Slack, Array, Custom code, ChatGPT, Google Sheets
- Facebook: Add to custom audience(커스텀 오디언스에 추가), Remove from custom audience(커스텀 오디언스에서 제거), Conversion API, Messenger, Interactive messenger
- Instagram: Instagram DM, Interactive messenger

## 사용 방법

1. **워크플로우 설정**을 눌러 알림을 받을 이메일을 설정하세요.
2. 워크플로우 목록 페이지의 **Needs Review** 탭에서 오류가 있는 워크플로우 목록을 확인하세요.

   ![오류가 있는 워크플로우를 보여 주는 워크플로우 목록 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030929334/original/66GLMUSKfhNYvumpmxw_h-tZZMubvTFKDA.jpeg?1723539807)

3. 확인할 항목을 누르면 실행 로그로 이동해요.
4. 오류를 확인했다면 **Mark errors as read**(오류를 읽음으로 표시)로 확인 처리하세요.

   ![확인 처리 전 실행 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030929335/original/-m6Yzi9I2U_bvR3ijXfeVJ68kKaOKnTzeA.jpeg?1723539807)

## 알아 두세요

- 알림은 기본적으로 꺼져 있어요.
- **이메일 수신자**는 필요에 따라 추가하거나 제거할 수 있어요.
- 워크플로우에서 오류가 생기면 바로 이메일이 와요.
- 이메일의 **Review it**(검토하기) 버튼을 누르면 **Needs Review** 탭으로 이동해요.
- 이메일은 24시간에 한 번만 와요. 24시간이 지난 뒤 새 오류가 발견되면 그때 다시 이메일이 가요.

![오류 알림 이메일 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030929333/original/oQqjxXtuVVrBDXSucYLP3B0BXWNPNarplg.jpeg?1723539807)

## 알림 끄기

**워크플로우 설정**으로 이동해 토글을 끄세요. 그러면 오류 알림 이메일이 더 이상 오지 않아요.

![알림 토글을 끄는 워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030956167/original/1_jFd_jjMzDZkpNoOPwIpym1axsXaRvrYQ.png?1723554473)
