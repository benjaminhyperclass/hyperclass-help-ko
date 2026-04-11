---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 클라이언트를 위한 워드프레스 설정 방법

이 가이드는 HighLevel을 사용할 때 워드프레스 웹사이트를 설정하기 위해 클라이언트가 알아야 하는 초기 단계를 안내합니다. 필요한 사전 조건, 접근 권한, 그리고 워드프레스와 HighLevel 기능 간의 원활한 연결을 위한 권장 설정 흐름을 다룹니다.

다음과 같은 상황에서 이 문서를 활용하세요:

- 워드프레스를 처음 설정하는 경우
- 클라이언트 소유의 워드프레스 사이트를 HighLevel에 연결하는 경우  
- 채팅 위젯(Chat Widget), 폼(Form), 또는 기타 연동을 위해 사이트를 준비하는 경우

---

**목차**

- [LeadConnector 플러그인 (신규 호스팅 사이트에 자동 설치)](#leadconnector-플러그인-신규-호스팅-사이트에-자동-설치)
- [새 워드프레스 사이트 설정하기](#새-워드프레스-사이트-설정하기)
- [워드프레스 대시보드](#워드프레스-대시보드)
- [사용자 관리](#사용자-관리)
- [백업 및 복원](#백업-및-복원)
- [고급 설정](#고급-설정)
- [추가 도메인 연결하기](#추가-도메인-연결하기)
- [일반적인 문제 및 해결 방법](#일반적인-문제-및-해결-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## **LeadConnector 플러그인 (신규 호스팅 사이트에 자동 설치)**

워드프레스 사이트가 **HighLevel 호스팅을 통해 새로 생성된 경우**, HighLevel이 설정 과정에서 **LeadConnector(LC) 플러그인**을 자동으로 설치합니다.

HighLevel 워드프레스 대시보드의 **플러그인 상태(Plugin Status)** 표시기를 통해 플러그인이 **연결됨(Connected)** 또는 **연결 끊김(Disconnected)** 상태인지 확인할 수 있습니다.

---

## **새 워드프레스 사이트 설정하기**

1. 워드프레스 사이트를 설정하려면 먼저 사이트(Sites) 탭에서 워드프레스 호스팅 기능을 구매해야 합니다. 구매 후 "+ Create Site" 버튼을 클릭하여 시작할 수 있습니다.

![워드프레스 사이트 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041169428/original/1wCzfIXwy2OBgCizrsE6D_SP1qkRb6oMGw.png?1738898076)

2. 처음부터 만들기, 템플릿 사용하기, 또는 기존 사이트 복제하기 중에서 선택하세요.

![사이트 생성 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041169466/original/zlAmNcfczdHuM0zc2aDij4j5gPrCEFEEIg.png?1738898250)

3. 사이트와 사용자 정보를 입력하세요.

![사이트 및 사용자 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041169482/original/52l0vg3shnmAvD9PqOtMQfJm3u-dOIjI-A.png?1738898314)

설치가 완료될 때까지 2-5분 정도 기다리세요.

4. 설치가 완료되면 워드프레스 대시보드, 사용자 관리, 백업 및 복원, 그리고 몇 가지 추가 설정에 액세스할 수 있습니다.

## 워드프레스 대시보드

여기서 사이트와 관리자 포털에 접근할 수 있습니다. 추가 도메인 및 기본 도메인을 관리하고, [All-in-One WP Migration 플러그인](https://wordpress.org/plugins/all-in-one-wp-migration/)을 사용해 기존 워드프레스 사이트를 가져올 수 있습니다.

워드프레스 사이트의 캐시를 새로고침할 수 있습니다.

![워드프레스 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041170883/original/Xf8Lj9EhiMx3PQq_mppaQDjIZen4q_dCJw.png?1738903111)

---

## 사용자 관리

여기서 사이트의 모든 사용자를 관리할 수 있습니다.

![사용자 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041170922/original/l-25cuA7-OPzo76scGXBBN7tUR8JM258wA.png?1738903226)

---

## 백업 및 복원

지난 30일간의 백업을 확인할 수 있습니다. 백업은 매일 중부 표준시(CST) 오전 5시에 자동으로 실행됩니다.

![백업 및 복원](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041170940/original/Y6_VQY35rxw2lN6PBOhqbtLfB7PhfNV55g.png?1738903246)

필요에 따라 수동 백업을 실행할 수도 있습니다. 아래 영상을 참고하세요:

### 커뮤니티의 추가 튜토리얼

[https://youtu.be/zvfav4EXnE4](https://youtu.be/zvfav4EXnE4)

[https://youtu.be/7z9A0d4Ml4c](https://youtu.be/7z9A0d4Ml4c)

[https://youtu.be/ROQLp8_D8Vc](https://youtu.be/ROQLp8_D8Vc)

---

## 고급 설정

1. 여기서 FTP 액세스 및 커뮤니케이션 설정을 관리할 수 있습니다.

![FTP 및 커뮤니케이션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041169531/original/tHVcZAofqXwtLil9As_ER6P9IU0Q0lzRzQ.png?1738898473)

2. 캐시 관리는 고급 설정(Advanced Settings)에서 접근할 수 있습니다.

![캐시 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177246/original/aBTCxliqeeBD6vgEyy1CkTs8WhxNQsSg8w.png?1738913787)

3. 워드프레스 디버깅 활성화/비활성화: 이 도구를 사용하여 웹사이트의 PHP 오류 메시지, 경고, 알림 및 기타 개발자 관련 알림에 접근할 수 있습니다.

![워드프레스 디버깅](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177289/original/61c8xjRkzFzL0IF1587-RGsC7hTPjsve8Q.png?1738913826)

4. 서버 설정: phpMyAdmin을 사용하여 워드프레스 데이터베이스를 관리합니다.

![서버 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177441/original/6v26sQ_4s71RvTwlagg5VkDViNxXV1Y5Gw.png?1738913963)

## **추가 도메인 연결하기**

사이트가 발행 준비가 완료되면 도메인을 워드프레스 사이트에 연결할 수 있습니다.

워드프레스 사이트와 도메인을 연결하는 방법에 대해서는 이 문서를 참고하세요.

---

## **일반적인 문제 및 해결 방법**

1. 플러그인이 설치되지 않는 경우
   - 관리자 액세스 권한이 있는지 확인하세요
   - 호스팅 제한사항을 확인하세요

2. 사이트에 위젯이 표시되지 않는 경우
   - 캐시를 삭제하세요 (플러그인/서버/CDN)
   - 충돌하는 플러그인을 일시적으로 비활성화하세요

3. 연결 오류가 발생하는 경우
   - 인증 정보를 다시 확인하세요
   - HighLevel에서 올바른 로케이션/계정이 선택되었는지 확인하세요

## **자주 묻는 질문**

**Q: 다른 하위 계정/로케이션에 같은 도메인을 추가할 수 없어요**

같은 도메인/서브도메인은 2개의 로케이션에서 동시에 사용할 수 없습니다.

**Q: 기본 도메인을 업데이트할 수 없는 이유가 뭔가요?**

추가 도메인을 연결한 경우에만 기본 도메인을 업데이트할 수 있습니다.

**Q: A / CNAME 레코드를 추가했는데도 도메인이 여전히 추가되지 않아요**

이런 상황은 여러 가지 이유로 발생할 수 있습니다:

- 도메인 이름에 오타가 있는 경우 [위 예시와 같이]
  이 경우 오타를 수정하면 문제가 해결됩니다.

- DNS 변경사항이 아직 전파되지 않은 경우
  이 경우 더 기다린 후 몇 시간 뒤나 다음 날에 다시 시도해보세요.

- DNS 설정이 올바르게 구성되지 않은 경우
  도메인 제공업체에 문의하여 해당 지원팀과 오류에 대해 논의하세요.

- 같은 서브도메인에 대해 충돌하는 (중복) 레코드가 있는 경우 [예: blog.mydomain.com이 wp3.msgsndr.com을 가리키는 CNAME 레코드가 있으면서 동시에 다른 제공업체를 가리키는 A 레코드도 있는 경우]
  이런 경우 다른 중복 레코드를 제거하면 문제가 해결됩니다.

**Q: 루트 도메인(예: mydomain.com)을 연결할 수 없어요**

워드프레스에서 해당 슬러그/루트 도메인을 사용할 계획이라면 추가 AAA, TXT 레코드 등이 없는지 확인하세요.

**Q: 하위 계정당 워드프레스 사이트를 몇 개까지 만들 수 있나요?**

단일 계정에서 원하는 만큼 많은 사이트를 만들 수 있습니다. 제한이 없습니다 :)

**Q: 클라이언트의 워드프레스 구독을 취소하려면 어떻게 해야 하나요?**

워드프레스 취소 요청을 시작하려면 30일 최소 약정 기간을 완료한 후 워드프레스 대시보드의 고급 설정(Advanced Settings)에서 "Delete Site"로 이동해야 합니다.

---
*원문 최종 수정: Tue, 3 Feb, 2026 at 8:00 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*