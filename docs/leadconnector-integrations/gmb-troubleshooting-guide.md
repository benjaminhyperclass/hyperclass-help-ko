---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005265-gmb-troubleshooting-guide
번역일: 2026-04-23
카테고리: leadconnector-integrations
---

# GMB 연동 문제 해결 가이드

**목차**

- [GMB 연동 시 일반적인 오류들](#gmb-연동-시-일반적인-오류들)
- [소유권 충돌 문제](#소유권-충돌-문제)
- [Voice of Merchant 대기](#voice-of-merchant-대기)
- [인증 문제](#인증-문제)
- [가이드라인 준수](#가이드라인-준수)
- [BUSINESS_LOCATION_SUSPENDED](#business_location_suspended)
- [BUSINESS_LOCATION_DISABLED](#business_location_disabled)

## GMB 연동 시 일반적인 오류들

### 소유권 충돌 문제

**오류 메시지**: 소유권 충돌 해결 - 이 위치는 정상 상태인 다른 위치와 중복됩니다. 정상 상태인 위치에 액세스할 수 있는 경우 해당 위치의 ID를 사용하여 작업을 수행하세요. 그렇지 않으면 현재 소유자에게 액세스를 요청하세요.

[https://business.google.com/add](https://business.google.com/add)로 이동하여 <<비즈니스 이름>>을 검색하세요.

![GMB 비즈니스 검색 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046556543/original/j-dotp4OboNwfL3LX5XT6JcxUSkDlPxlHQ.jpeg?1747146130)

다른 사용자가 비즈니스를 관리하고 있다면 아래와 같이 표시됩니다.

![다른 사용자가 관리하는 비즈니스 프로필](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046556552/original/0aFhhiHtBtSlpbejqTEdNbHriy1OjfVi_Q.jpeg?1747146131)

프로필이 "[user-with-access@mail.id](mailto:user-with-access@mail.id)" 이메일로 관리되고 있습니다.

- **현재 프로필 소유자를 아는 경우**: 직접 연락하여 필요한 액세스 권한을 부여해달라고 요청하세요. [프로필 액세스 유형에 대해 자세히 알아보기](https://support.google.com/business/answer/9178945?hl=en&ref_topic=4539640)

- **현재 소유자를 모르는 경우**: [비즈니스 프로필 소유자에게 액세스 요청하기](https://support.google.com/business/answer/4566671?hl=en)

- [business.google.com/add](http://business.google.com/add)로 이동하세요.

- 비즈니스 이름 "<<비즈니스 이름>>"을 입력하고 검색 결과에서 선택하세요.

- '계속'을 클릭하세요. 다른 사람이 프로필을 인증했다는 메시지가 나타납니다. 프로필 관리 권한이 있다면 현재 프로필 소유자에게 소유권을 요청할 수 있습니다.

- '액세스 요청'을 클릭하고 양식을 작성하세요.

- '제출'을 클릭하세요. 이메일 알림을 받게 되고 현재 프로필 소유자는 연락을 요청하는 이메일을 받게 됩니다. 소유권 요청이 성공적으로 제출되었음을 알리는 확인 이메일을 받았는지 확인하세요.

요청을 제출한 후 3일 동안 응답을 기다리세요. 이 기간 내에 현재 소유자로부터 응답을 받지 못하면 확인 이메일의 '요청 보기'를 클릭하세요. 그러면 계정에서 프로필을 클레임하고 인증할 수 있습니다. [소유권 요청에 대해 자세히 알아보기](https://support.google.com/business/answer/4566671?hl=en)

**본인이 프로필 소유자인 경우**: 이 이메일 주소로 비즈니스 프로필 계정에 로그인할 수 없다면 [계정에 다시 액세스하는 방법을 알아보세요](https://support.google.com/accounts/troubleshooter/2402620).

## Voice of Merchant 대기

**오류 메시지**: Voice of the Merchant를 얻기 위해 기다려주세요. 품질 목적으로 비즈니스가 검토 중입니다.

인증 과정이 이미 시작되었으며, 해당 위치에서 완료할 수 있는지를 나타냅니다.

사용자가 이 과정을 완료하면 저희 플랫폼에 연동할 수 있습니다.

## 인증 문제

**오류 메시지**: 구글 비즈니스 프로필에서 Google의 인증/재인증이 필요합니다

구글 지원 문서: [https://support.google.com/business/answer/7107242](https://support.google.com/business/answer/7107242)

사용자는 구글에 지원 요청을 제기해야 합니다.

사용자는 이 링크([https://support.google.com/business/](https://support.google.com/business/))로 이동해야 합니다.

![구글 비즈니스 지원 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046556544/original/yPKvIorY0FQeA5olJchdMU7y-gyssEz8Cg.jpeg?1747146130)

또는 이 링크([https://support.google.com/business/topic/4854130](https://support.google.com/business/topic/4854130))로 이동하세요.

![구글 비즈니스 지원 토픽 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046557274/original/PpWI7hD4BnDHofQaxTfaB212XqQwTmuEbQ.png?1747146669)

![지원 요청 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046556553/original/Cl--GdQ0ObTyyFhDRJIRsPPK3uH4SOX3EA.jpeg?1747146132)

또는 사용자가 구글 고객센터에서 바로 인증을 요청할 수 있습니다.

- 이 링크([https://support.google.com/business/gethelp](https://support.google.com/business/gethelp))로 이동하세요

![구글 비즈니스 도움말 요청 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046557416/original/I4nlYf4GaMXer-4fMLZX1762SXotm0qb1w.png?1747146738)

![도움말 요청 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046557381/original/WmxZEUC8kRkAOkqzInf361W770_9hrh54w.png?1747146715)

- **내용**: Google Location ID: 6748628454128375769. 내 비즈니스 위치 ID(6748628454128375769)는 구글 비즈니스 메시징을 사용하기 위해 인증이 필요합니다.

![지원 요청 내용 작성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046557480/original/c5n_ZY4GGgHvLWVBp-H-DLC4h7Ma6VhsqQ.png?1747146765)

![지원 요청 제출](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046557506/original/VbXlA-W1w3z6mVURLS56_db4-EBtmYv9MA.png?1747146790)

## 가이드라인 준수

고객은 추가 정보 양식에 Google locationId(ListingID)를 반드시 기재해야 합니다.

#### BUSINESS_LOCATION_SUSPENDED

**오류 메시지**: 비즈니스 위치가 가이드라인 준수를 위해 Google에 의해 정지되었습니다.

비즈니스 위치가 정지되었습니다. 이 문제를 해결하려면 [고객센터 문서](https://support.google.com/business/answer/4569145)를 참조하세요.

#### BUSINESS_LOCATION_DISABLED

**오류 메시지**: 비즈니스 위치가 가이드라인 준수를 위해 Google에 의해 비활성화되었습니다.

비즈니스 위치가 비활성화되었습니다. 이 문제를 해결하려면 [고객센터 문서](https://support.google.com/business/answer/9334246)를 참조하세요.

---
*원문 최종 수정: Tue, 22 Jul, 2025 at 9:54 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*