---
원문: /support/solutions/articles/155000004585-marketplace-apps-managing-external-connections
번역일: 2026-11-07
카테고리: 27-앱-마켓
---

# 마켓플레이스 앱의 외부 서비스 연결 관리

앱을 쓰면 하이퍼클래스를 외부 서비스와 연동할 수 있어요. 연동하려면 앱을 외부 서비스와 먼저 연결해야 해요. 이 문서에서는 연결이 어떻게 이루어지고 어떻게 관리하는지 설명해요.

## 기본 개념

- 모든 연결은 서브 계정 단위로 만들어져요. 그래서 서브 계정마다 외부 서비스와 각각 고유한 연결을 가져요.
- 특정 서브 계정에 외부 연결이 필요한 앱을 설치하면, 설치가 끝나자마자 연결 요청 화면이 바로 열려요.

![앱 설치 직후 표시되는 연결 요청 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041573300/original/ik0HIVrKF1X-aTWH85LsiPS0QbNUWEzSbg.png?1739471779)

- 여러 서브 계정에 앱을 일괄 설치하면 설치 중에는 연결 요청이 자동으로 열리지 않아요. 연결은 서브 계정마다 따로 만들어지기 때문에, 각 서브 계정 사용자가 서브 계정의 **앱 마켓플레이스**에서 직접 앱을 연결해야 해요.

![서브 계정의 앱 마켓플레이스에서 앱을 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041573285/original/luvTYLuiRFg9O81K_AxTOFbCYXBc3n3AGg.png?1739471749)

## 지원하는 인증 방식

현재 세 가지 인증 방식을 지원해요.

- OAuth: 외부 서비스 계정으로 로그인한 뒤 연동을 승인해요.
- API 키: 외부 서비스에서 API 키를 복사해 하이퍼클래스에 붙여넣어요.
- Basic Auth: 외부 서비스의 사용자 이름과 비밀번호로 인증해요.
