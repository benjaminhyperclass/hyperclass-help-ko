---
원문: /support/solutions/articles/155000004567-facebook-multi-page-troubleshoot
번역일: 2026-11-06
카테고리: 42-통합
---

# Facebook 멀티 페이지 연동 문제 해결

Facebook 연동이 잘 되지 않을 때 원인을 찾고 고치는 방법을 안내해요. 리드 광고로 받은 리드가 서브 계정에 들어오지 않을 때, 연결이 만료됐을 때, 권한이나 Instagram 메시지에 문제가 있을 때 확인해 보세요.

## Facebook 연동 설정하기

Facebook 연동을 처음 설정하려면 'Facebook Lead Ads integration' 문서를 참고하세요.

## 문제 해결

### 리드 광고로 받은 리드가 서브 계정에 들어오지 않아요

1. Facebook 페이지에 대한 전체 제어 권한이 있는지 확인하세요. 권한은 [비즈니스 포트폴리오에 사용자를 추가하고 비즈니스 자산을 할당하기](https://www.facebook.com/business/help/2169003770027706)에서 설정할 수 있어요.
2. 서브 계정에서 **설정 > 연동 > Facebook form fields mapping**(Facebook 폼 필드 매핑)으로 이동해요. Facebook 광고 관리자에서 선택한 폼의 **Status**(상태)가 활성화되어 있는지 확인하세요.
3. 아래 링크에서 **기본 제공 서비스**가 내 페이지에 접근할 수 있는지 확인하세요. <https://www.facebook.com/settings?tab=business_tools&ref=settings>
   1. **기본 제공 서비스**가 Facebook 계정에 연결되어 있는지 확인하세요.
      ![기본 제공 서비스 연결 상태 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040883734/original/P0axfyxcTqGU5Hic3LDPc5lmny61Ren4Zg.png?1738570041)
   2. 페이지 접근과 리드 접근에 필요한 권한이 **기본 제공 서비스**에 모두 있는지 확인하세요.
      ![기본 제공 서비스 권한 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040884114/original/tP84DHRfB-6M45HJ7N5C9PFFxviFOteboQ.jpg?1738570108)
4. 위 단계를 마쳤다면 [Facebook Lead Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing)(리드 광고 테스트 도구)로 리드가 서브 계정에 들어오는지 확인하세요.
   1. 리드를 가져올 페이지를 선택하세요.
   2. 테스트할 폼을 선택하세요.
   3. App ID 390181264778064가 있는지 확인하세요. 없으면 6번 단계로 이동하세요.      ![App ID 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040887202/original/JOUUNggg81s9fRcmAOPlcn0B0rBkNgWrpA.jpg?1738571755)
5. 페이지에 대한 **기본 제공 서비스**의 접근 권한이 해제됐거나 App ID가 나타나지 않으면, Facebook에서 **기본 제공 서비스**에 리드 접근 권한을 직접 지정해야 해요. 아래 이름은 Facebook 화면 기준이에요.
   1. **Business Suite**로 이동하세요.
   2. **Business Suite**에 접근할 수 없다면 **Business Settings**(비즈니스 설정)로 이동해 비즈니스를 선택한 뒤 5번으로 건너뛰세요.
   3. 왼쪽 위 드롭다운을 클릭하고 비즈니스 계정을 선택하세요.
   4. 왼쪽 아래의 **Settings**(설정)를 클릭하세요.
   5. **More Business Settings**(비즈니스 설정 더 보기)를 클릭하세요.
   6. 왼쪽 메뉴에서 **Integrations**(통합)를 클릭한 다음 **Leads Access**(리드 접근)를 클릭하세요.
   7. **Assign CRMs**(CRM 지정)를 클릭하세요. Facebook 페이지와 연동된 CRM 시스템 목록이 나타나요.
   8. **기본 제공 서비스** 옆의 원을 체크하고 **Assign**(지정)을 클릭하세요.

### Pabbly Connect나 Zapier 같은 외부 서비스로 Facebook 리드를 연동하려면 어떻게 하나요?

Zapier나 Pabbly Connect 같은 외부 연동 도구를 쓸 수 있어요.

### 서브 계정에서 Facebook 토큰이 만료됐어요. 왜 이런 일이 생기고, 어떻게 해결하나요?

"Important: Facebook connection has expired."(중요: Facebook 연결이 만료되었어요)라는 제목의 이메일을 받았다면, 서브 계정 중 한 곳의 Facebook 연동이 끊어졌다는 뜻이에요.

#### 연결이 끊어지는 이유

연동이 끊어지는 원인은 여러 가지예요. 가장 흔한 경우는 다음과 같아요.

- 사용자가 비밀번호를 바꿨을 때
- 시간이 지나 Facebook 토큰이 자연스럽게 만료됐을 때
- 사용자가 앱의 인증을 해제했을 때
- 사용자가 Facebook에서 로그아웃했을 때
- 사용자가 페이지 권한을 바꾸거나 사용자를 추가·삭제했을 때
- 다른 나라에 있는 가상 비서가 VPN 없이 로그인했을 때

#### 다시 연결하기

1. 받은 이메일에 표시된 계정을 **Switch To An Account**(계정 전환) 드롭다운에서 선택하세요.
2. 왼쪽 사이드바에서 **설정**을 클릭하세요.
3. 사이드바에서 **연동**을 클릭하세요.
4. Facebook 아이콘 아래의 **연결됨** 버튼을 클릭해 끊어진 연동을 해제하세요.
5. **Connect**(연결)를 다시 클릭하세요.
6. 팝업 창에서 본인 계정으로 계속 진행하고, 연결할 Facebook 페이지를 선택하세요.
7. **Connect Page**(페이지 연결) 버튼을 클릭하세요.

---

## 자주 발생하는 오류

### 권한 문제

#### 없는 권한 확인하기

1. 서브 계정에서 **설정 > 연동**으로 이동하세요. Facebook 카드의 **Troubleshoot**(문제 해결)를 클릭한 뒤 **권한 없음**을 선택하세요.
2. 없는 권한과 그 때문에 영향을 받는 기능이 모두 표시돼요.

#### 없는 권한 켜기

1. 다음 [링크](https://www.facebook.com/settings?tab=business_tools&ref=settings)로 이동하세요.
2. 없는 권한을 켜세요.
   ![없는 권한을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040889448/original/CVt9KLXDa8EwOORsS19c_Mv0Yc0agmoxpA.jpeg?1738573445)

### Instagram 연결·메시지 문제

1단계: Instagram 계정이 Facebook 페이지에 연결되어 있는지 확인하세요. <https://business.facebook.com/latest/settings>

Instagram 계정이 연결되어 있지 않다면 계정을 연결한 뒤 2단계로 넘어가세요.

![Instagram 계정 연결 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040975476/original/3g746MlCF6hZnTEOy-5Fa--9yhQAgUz3KQ.png?1738666567)

2단계: 메시지 접근이 켜져 있는지 확인하세요. 사용자가 전체 제어 권한을 가진 사람으로 추가되어 있어야 해요.

3단계: 페이지의 연결된 자산에 Instagram 계정이 있는지 확인하세요.

![연결된 자산에서 Instagram 계정 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046611086/original/ev47qghhU-n-p_caT5eMAHFcZKVaLnqubg.png?1747219962)

4단계: 연결된 도구가 Instagram 메시지에 접근할 수 있는지 확인하세요. Instagram 앱에서 아래 설정을 확인해야 해요.

- Instagram 앱에 로그인하세요.
- **Settings and activity**(설정 및 활동)로 이동하세요.
- **Messages and Story reply**(메시지 및 스토리 답글) 아래에서 메시지 요청으로 이동하세요.
- **Allow access to connected tools**(연결된 도구에 대한 접근 허용)를 켜세요.

5단계: 서브 계정에서 **설정 > 연동**으로 이동하세요. Facebook 카드의 **연동 설정**에서 Instagram과 Facebook 메시지가 켜져 있는지 확인하세요.

![Facebook 카드 연동 설정에서 메시지 켜기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040976262/original/HQYRihlJ3uWVpwE1WLjQo24mOosdY5lDSA.png?1738667129)

### 리드가 동기화되지 않을 때

모든 설정이 켜져 있는지 아래 링크에서 확인하세요. <https://business.facebook.com/latest/settings>

1단계: **Users**(사용자) > **People**(사람)에서 해당 사용자가 추가되어 있고, 비즈니스 포트폴리오 접근 권한이 전체 제어인지 확인하세요.

![사용자 권한 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024108/original/XMorT9S1GCKBD6ueFcoYDcJhrLE3Pg2FFQ.png?1738733903)

2단계: 사이드 내비게이션에서 **Accounts**(계정) > **Pages**(페이지)를 선택하세요. 사용자가 사람 목록에 추가되어 있고 전체 제어 권한이 있는지 확인하세요.

![페이지 사용자 권한 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024250/original/Jc1ZZMMzWVPP_doCesHfvnjKVJMT6HzyLQ.png?1738734180)

3단계: 사이드 내비게이션에서 **Integrations**(통합) > **Leads Access**(리드 접근)로 이동하세요. **CRM** 아래에 **기본 제공 서비스**가 연결되어 있는지 확인하세요.

![CRM 아래 기본 제공 서비스 연결 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024278/original/PBfANlNMAIo3BfkP9k4zlc8lzRTnc8nh6Q.png?1738734268)
