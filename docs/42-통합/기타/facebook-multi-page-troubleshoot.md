---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 페이스북 멀티 페이지 문제해결

**목차**

- [페이스북 연동 설정](#페이스북-연동-설정)
- [문제해결](#문제해결)
  - [리드 광고가 하위 계정에 들어오지 않는 이유는?](#리드-광고가-하위-계정에-들어오지-않는-이유는)
  - [Pabbly Connect나 Zapier 같은 외부 서비스로 페이스북 리드를 연동하는 방법은?](#pabbly-connect나-zapier-같은-외부-서비스로-페이스북-리드를-연동하는-방법은)
  - [하위 계정의 페이스북 토큰이 만료된 경우 - 왜 발생하고 어떻게 해결하나요?](#하위-계정의-페이스북-토큰이-만료된-경우-왜-발생하고-어떻게-해결하나요)
- [일반적인 오류](#일반적인-오류)
  - [권한 문제](#권한-문제)
  - [인스타그램 연결/메시지](#인스타그램-연결메시지)
  - [리드가 동기화되지 않는 경우](#리드가-동기화되지-않는-경우)

# 페이스북 연동 설정

페이스북 연동을 설정하려면 다음 문서를 참조해 주세요: Facebook Lead Ads 연동

# 문제해결

## 리드 광고가 하위 계정에 들어오지 않는 이유는?

- **페이스북 페이지에 대한 전체 접근 권한이 있는지 확인해 주세요 - [비즈니스 포트폴리오에 사람을 추가하고 비즈니스 자산 할당하기](https://www.facebook.com/business/help/2169003770027706)**

- **하위 계정에서 Settings(설정) > Integrations(연동) > Facebook으로 이동하여 폼 필드 매핑에서 광고 관리자에서 선택한 폼이 활성 상태로 설정되어 있는지 확인해 주세요**

- **Lead Connector가 접근 가능하고 페이지에 접근할 수 있는지 확인해 보세요: [https://www.facebook.com/settings?tab=business_tools&ref=settings](https://www.facebook.com/settings?tab=business_tools&ref=settings)**

**Lead Connector가 페이스북 계정과 연결되어 있는지 확인**
![페이스북 연결 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040883734/original/P0axfyxcTqGU5Hic3LDPc5lmny61Ren4Zg.png?1738570041)

- **Lead Connector가 페이지 접근 및 리드 접근과 관련하여 모든 권한을 가지고 있는지 확인**
![권한 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040884114/original/tP84DHRfB-6M45HJ7N5C9PFFxviFOteboQ.jpg?1738570108)

- **위 단계를 완료했다면 [페이스북 리드 광고 테스트 도구](https://developers.facebook.com/tools/lead-ads-testing)를 사용해 리드가 하위 계정에 추가되는지 확인해 보세요**
  - **리드를 가져올 페이지 선택**
  - **테스트할 폼 선택**
  - **App ID: 390181264778064가 있는지 확인하고, 없다면 6단계로 이동**
![앱 ID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040887202/original/JOUUNggg81s9fRcmAOPlcn0B0rBkNgWrpA.jpg?1738571755)

- LeadConnector의 페이지 접근이 해지되었거나 App ID가 나타나지 않는다면, 페이스북에서 LeadConnector에 수동으로 리드 접근 권한을 할당해야 합니다:
  1. Business Suite로 이동
  2. Business Suite에 접근할 수 없다면 비즈니스 설정으로 이동하여 비즈니스를 선택하고 5단계로 건너뛰기
  3. 좌측 상단 드롭다운을 클릭하고 비즈니스 계정 선택
  4. 좌측 하단의 Settings(설정) 클릭
  5. More Business Settings(더 많은 비즈니스 설정) 클릭
  6. 좌측 메뉴에서 Integrations(연동) 클릭 후 Leads Access(리드 접근) 선택
  7. Assign CRMs(CRM 할당) 클릭. 페이스북 페이지와 연동된 CRM 시스템 목록이 표시됩니다
  8. LeadConnector 옆의 원을 체크하고 Assign(할당) 클릭

## Pabbly Connect나 Zapier 같은 외부 서비스로 페이스북 리드를 연동하는 방법은?

Zapier나 Pabbly Connect 같은 외부 연동 도구를 사용할 수 있습니다. 자세한 정보를 확인해 주세요.

## 하위 계정의 페이스북 토큰이 만료된 경우 - 왜 발생하고 어떻게 해결하나요?

"Important: Facebook connection has expired."라는 제목의 이메일을 받았다면, 하위 계정 중 하나의 페이스북 연동이 끊어졌다는 의미입니다.

### 연결이 끊어지는 이유는?

연동이 끊어지는 몇 가지 이유가 있습니다. 가장 일반적인 원인들은:

- 사용자가 비밀번호를 변경한 경우
- 페이스북 토큰이 시간이 지나 자연적으로 만료된 경우
- 사용자가 앱 연동을 해제한 경우
- 사용자가 페이스북에서 로그아웃한 경우
- 사용자가 페이지 권한을 변경하거나 사용자를 추가/제거한 경우
- 다른 국가의 가상 비서가 VPN 없이 로그인한 경우

### 재연결 방법:

1. 받은 이메일에 표시된 계정을 "Switch To An Account" 드롭다운에서 선택
2. 좌측 사이드바에서 "Settings(설정)" 클릭
3. 사이드바에서 "Integrations(연동)" 클릭
4. 페이스북 아이콘 하단의 "Connected" 버튼을 클릭해 끊어진 연동을 해제한 후, Connect를 다시 클릭해 재연결
5. 팝업 창에서 본인으로 계속 진행하고, 연결할 페이스북 페이지를 선택한 다음 "Connect Page" 버튼 클릭

# 일반적인 오류

## 권한 문제

### 누락된 권한 찾기:

- 하위 계정 >> Settings(설정) >> Integration(연동) >> FB 카드의 Troubleshoot(문제해결) >> Missing permission(누락된 권한)으로 이동
- 누락된 모든 권한과 영향을 받는 기능이 표시됩니다.

### 누락된 권한 활성화하기:

- 다음 [링크](https://www.facebook.com/settings?tab=business_tools&ref=settings)로 이동
- 누락된 권한을 활성화
![권한 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040889448/original/CVt9KLXDa8EwOORsS19c_Mv0Yc0agmoxpA.jpeg?1738573445)

## 인스타그램 연결/메시지

1단계: 인스타그램 계정이 페이스북 페이지에 연결되어 있는지 확인: [https://business.facebook.com/latest/settings](https://business.facebook.com/latest/settings)

인스타그램 계정이 연결되어 있지 않다면 계정을 연결하고 2단계로 진행

![인스타그램 연결 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040975476/original/3g746MlCF6hZnTEOy-5Fa--9yhQAgUz3KQ.png?1738666567)

2단계: 메시지 접근이 활성화되어 있는지 확인: 사용자가 전체 제어 권한을 가진 사람으로 추가되어 있는지 확인

3단계: 페이지의 연결된 자산에서 인스타그램 계정이 있는지 확인

![연결된 자산 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046611086/original/ev47qghhU-n-p_caT5eMAHFcZKVaLnqubg.png?1747219962)

4단계: 연결된 도구가 인스타그램 메시지에 접근할 수 있는지 확인. 인스타그램 앱에서 다음 설정을 확인해야 합니다:

- 인스타그램 앱에 로그인
- 설정 및 활동으로 이동
- 메시지 및 스토리 응답에서 메시지 요청으로 이동
- 연결된 도구에 대한 접근 허용

![인스타그램 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055401728/original/CJZYxt33vBHBhsSbtTaqwZY8TDD3seCTHQ.jpeg?1759833021)

5단계: 하위 계정 >> Settings(설정) >> Integration(연동) >> FB 카드의 설정에서 Instagram과 Facebook 메시징이 활성화되어 있는지 확인

![메시징 활성화 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040976262/original/HQYRihlJ3uWVpwE1WLjQo24mOosdY5lDSA.png?1738667129)

## 리드가 동기화되지 않는 경우

모든 설정이 활성화되어 있는지 확인하려면 다음 링크에 접속해 주세요: [https://business.facebook.com/latest/settings](https://business.facebook.com/latest/settings,)

1단계: Users(사용자) >> people에서 사용자가 추가되어 있고 비즈니스 포트폴리오 접근에서 전체 제어 권한을 가지고 있는지 확인

![사용자 권한 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024108/original/XMorT9S1GCKBD6ueFcoYDcJhrLE3Pg2FFQ.png?1738733903)

2단계: 사이드 네비게이션에서 Accounts(계정) >> pages 섹션을 선택하고, 사용자가 사람에 추가되어 있고 전체 제어 권한을 가지고 있는지 확인

![페이지 권한 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024250/original/Jc1ZZMMzWVPP_doCesHfvnjKVJMT6HzyLQ.png?1738734180)

3단계: 사이드 네비게이션에서 integrations(연동) >> Lead access로 이동하여 CRM 하단에 lead connector가 연결되어 있는지 확인

![리드 커넥터 연결 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024278/original/PBfANlNMAIo3BfkP9k4zlc8lzRTnc8nh6Q.png?1738734268)

---
*원문 최종 수정: Tue, 7 Oct, 2025 at 5:30 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*