---

번역일: 2026-04-08
카테고리: 27-앱 마켓플레이스 > 워크플로우 트리거 & 액션
---

# 마켓플레이스 앱 - 외부 연결 관리

앱을 통해 Hyperclass를 타사 애플리케이션과 연동할 수 있습니다. 이러한 연동을 위해서는 앱을 타사 애플리케이션과 연결해야 합니다. 이 문서에서는 이러한 연결이 어떻게 작동하고 관리되는지 설명합니다.

## 기본 개념 이해하기

- 모든 연결은 하위 계정(Sub-account) 수준에서 이루어집니다. 따라서 각 하위 계정은 타사 앱과 고유한 연결을 갖게 됩니다.
- 특정 하위 계정에 외부 연결이 필요한 앱을 설치하는 경우, 설치 완료 직후 연결 요청이 자동으로 실행됩니다.

![앱 설치 후 자동 연결 요청](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041573300/original/ik0HIVrKF1X-aTWH85LsiPS0QbNUWEzSbg.png?1739471779)

- 여러 하위 계정에 앱을 일괄 설치하는 경우, 설치 과정에서 연결 요청이 자동으로 실행되지 않습니다. 연결은 개별 하위 계정 수준에서 설정되기 때문에, 하위 계정 사용자가 해당 하위 계정의 마켓플레이스에서 앱을 직접 연결해야 합니다.

![일괄 설치 시 개별 연결 필요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041573285/original/luvTYLuiRFg9O81K_AxTOFbCYXBc3n3AGg.png?1739471749)

## 지원되는 인증 방법

현재 세 가지 인증 방법을 지원합니다:

- **OAuth** - 타사 앱으로 로그인하여 연동을 승인하는 방식
- **API Keys** - 타사 앱에서 API 키를 복사하여 Hyperclass에 붙여넣는 방식  
- **Basic Auth** - 타사 앱의 사용자명/비밀번호 자격 증명을 사용하는 방식

---
*원문 최종 수정: Thu, 13 Feb, 2025 at 12:38 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*