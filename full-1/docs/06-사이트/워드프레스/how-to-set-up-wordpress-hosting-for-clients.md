---
원문: https://help.gohighlevel.com/support/solutions/articles/48001199648-how-to-set-up-wordpress-hosting-for-clients
번역일: 2026-11-06
카테고리: 06-사이트
---

# 고객사용 WordPress 호스팅 설정하기

하이퍼클래스 WordPress 호스팅을 쓰면 에이전시가 고객사 서브 계정용 WordPress 웹사이트를 하이퍼클래스 안에서 직접 만들고, 이전하고, 관리할 수 있어요.

이 문서에서는 WordPress 사이트를 만드는 방법, 사용자에게 접근 권한을 주는 방법, 도메인·백업·고급 설정을 관리하는 방법을 안내해요. 에이전시 사용자와 고객사 사용자가 쓸 수 있는 기능이 어떻게 다른지도 함께 다뤄요.

---

## 하이퍼클래스 플러그인 (새 호스팅 사이트에 자동 설치)

하이퍼클래스 호스팅으로 새로 만든 WordPress 사이트에는 설정 중에 하이퍼클래스 플러그인이 자동으로 설치돼요.

플러그인이 잘 연결되었는지는 하이퍼클래스 WordPress 대시보드의 **Plugin Status**(플러그인 상태)에서 확인하세요. 상태가 **Connected**(연결됨)인지 **Disconnected**(연결 끊김)인지 볼 수 있어요.

## 새 WordPress 사이트 만들기

1. 먼저 **사이트** 탭에서 WordPress 호스팅 기능을 구매해야 해요. 구매를 마쳤다면 **+ Create Site**(사이트 만들기) 버튼을 클릭하세요.

   ![사이트 탭의 사이트 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587928/original/5Dc4BJsxtu_DvAlMygRPzMuPN4sLu-EkxQ.png?1783584600)
2. 처음부터 만들지, 템플릿을 사용할지, 기존 사이트를 복제할지 선택하세요.

   ![사이트 생성 방식 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587930/original/eSUQEFHq52gbTLuSCTOJSE4Z-oqsjejI_g.png?1783584600)
3. 사이트 정보와 사용자 정보를 입력하세요.

   ![사이트 및 사용자 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587926/original/vEsIn1DAW6-DYhUrwUGYeTvVL46G97xbzA.png?1783584600)

설치가 끝날 때까지 2~5분 정도 기다리세요.

4. 설치가 끝나면 WordPress 대시보드, **사용자 관리**, **Backup & Restore**(백업 및 복원), 추가 설정에 접근할 수 있어요.

## WordPress 대시보드

여기에서 사이트와 관리자 포털에 접속할 수 있어요. **Additional Domains**(추가 도메인)와 **Primary Domain**(기본 도메인)도 이 화면에서 관리해요.

기존 사이트를 옮기고 있나요? 하이퍼클래스 마이그레이터 플러그인으로 기존 WordPress 사이트를 간편하게 가져올 수 있어요. 무료 전담 이전 지원을 이용할 수도 있어요.

이 대시보드에서 WordPress 사이트의 캐시도 바로 새로 고칠 수 있어요. **Refresh Cache**(캐시 새로고침)를 이용하세요.

![WordPress 대시보드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587932/original/nlEHid7iuHVt02AiKjuC-BltphjqAOSigg.png?1783584601)

## 사용자 관리

여기에서 사이트의 모든 사용자를 관리할 수 있어요.

![사용자 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587925/original/-SB9KXnAOwAL5pslun_fZC8vBlsX_EZS1Q.png?1783584600)

## 백업 및 복원

**Backup & Restore**(백업 및 복원)에서는 최근 30일 동안의 백업을 볼 수 있어요. 백업은 매일 오전 5시(CST)에 진행돼요.

![백업 및 복원 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587934/original/-P52sspFbXASQA4_baupzvycSDlCE_1LkA.png?1783584601)

필요할 때 수동 백업을 직접 실행할 수도 있어요. 아래 영상을 참고하세요.

커뮤니티에서 올라온 다른 튜토리얼:

- https://youtu.be/zvfav4EXnE4
- https://youtu.be/7z9A0d4Ml4c
- https://youtu.be/ROQLp8\_D8Vc

## 고급 설정

1. 여기에서 **FTP Access**(FTP 접속)와 **Communication Settings**(통신 설정)를 관리할 수 있어요.

   ![FTP 접속 및 통신 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587927/original/w-ymw15A09GbO1WRRD-HsnKmM3bw36xV6w.png?1783584600)
2. **Cache Management**(캐시 관리)도 **고급 설정**에서 열 수 있어요.

   ![캐시 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587933/original/Vs_yXRARxytJOOcBF9g90fRIoS2wtfDJGA.png?1783584601)
3. WordPress 디버깅을 켜거나 끌 수 있어요. 이 도구로 사이트의 PHP 오류 메시지, 경고, 알림 등 개발자용 안내를 확인할 수 있어요.

   ![WordPress 디버깅 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587931/original/KImBDfvvgutg8WrZK02L3mBl87Ebgm1hRg.png?1783584600)
4. **Server Settings**(서버 설정)에서는 phpMyAdmin으로 WordPress 데이터베이스를 관리할 수 있어요.

   ![서버 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075587929/original/0MkPak1ziSXw6lLLq6SQIzV8YcY87usARA.png?1783584600)

## 추가 도메인 연결하기

사이트를 게시할 준비가 되면 WordPress 사이트에 도메인을 연결할 수 있어요.

도메인을 WordPress 사이트에 연결하는 방법은 별도 문서를 참고하세요.

## 자주 발생하는 문제와 해결 방법

1. 플러그인이 설치되지 않아요

- 관리자 권한이 있는지 확인하세요.
- 호스팅 제한 사항이 있는지 확인하세요.

2. 사이트에 위젯이 표시되지 않아요

- 캐시(플러그인/서버/CDN)를 삭제하세요.
- 충돌하는 플러그인을 잠시 비활성화하세요.

3. 연결 오류가 나요

- 인증 정보를 다시 확인하세요.
- 하이퍼클래스에서 올바른 서브 계정이 선택되어 있는지 확인하세요.

## 자주 묻는 질문

### 같은 도메인을 다른 서브 계정에 추가할 수 없어요.
같은 도메인이나 서브도메인은 2개의 로케이션에서 동시에 사용할 수 없어요.

### 기본 도메인을 변경할 수 없는 이유가 뭔가요?
추가 도메인을 먼저 성공적으로 추가해야 기본 도메인을 변경할 수 있어요.

### A / CNAME 레코드를 추가했는데도 도메인이 추가되지 않아요.
몇 가지 원인이 있을 수 있어요.

- 도메인 이름에 오타가 있어요: 오타를 고치면 해결돼요.
- DNS 변경 사항이 아직 반영되지 않았어요: 몇 시간 뒤나 다음 날 다시 시도해 보세요.
- DNS 설정이 올바르지 않아요: 도메인 제공업체에 연락해 고객지원팀과 오류를 확인하세요.
- 충돌하는 레코드가 여러 개 있어요: 같은 서브도메인에 충돌하는 레코드가 있을 수 있어요. 예를 들어 blog.mydomain.com에 `wp3.msgsndr.com`을 가리키는 CNAME 레코드가 있는데, 다른 업체를 가리키는 A 레코드도 있는 경우예요. 이럴 때는 중복된 레코드를 삭제하면 해결돼요.

### 루트 도메인(예: mydomain.com)을 연결할 수 없어요.
해당 슬러그/루트 도메인을 WordPress에 사용하려면 추가 A, AAAA, TXT 레코드 등이 없는지 확인하세요.

### 서브 계정 하나에 WordPress 사이트를 몇 개까지 만들 수 있나요?
계정 하나에 원하는 만큼 사이트를 만들 수 있어요. 제한은 없어요.

### 고객사의 WordPress 구독 해지는 어떻게 요청하나요?
WordPress 해지 요청을 시작하려면 WordPress 대시보드의 **고급 설정**에서 **사이트 삭제**로 이동하세요.
