---
원문: /support/solutions/articles/48001222860-wp-file-manager-plugin-stable-alternative-for-ftp-access-
번역일: 2026-11-07
카테고리: 06-사이트
---

# WP File Manager 플러그인: FTP 대신 쓰는 안정적인 방법

WordPress 파일 관리자는 WordPress 대시보드에서 파일 관리 작업을 할 수 있게 해 주는 플러그인이에요. 제어판이나 FTP(File Transfer Protocol) 클라이언트에 따로 로그인하지 않아도, 한곳에서 WordPress 웹사이트 파일에 접근할 수 있어요.

## FTP 접속 대신 이 플러그인을 쓰는 이유

FTP는 데이터를 보내는 방식 자체가 안전하지 않아요. 이 프로토콜로 파일을 보내면 데이터와 사용자 이름, 비밀번호가 모두 암호화되지 않은 평문으로 전달돼요. 그래서 해커가 이 정보를 거의 힘들이지 않고 가져갈 수 있어요.

WP File Manager는 구조 창과 화면이 알아보기 쉬운 사용자 인터페이스를 제공해요.

플러그인은 무료로 내려받아 쓸 수 있어요. 다만 비공개 폴더 만들기, 사용자 역할별 파일 작업 제어 같은 고급 기능을 쓰려면 라이선스를 구매해야 해요. 팀이 여러 웹사이트를 관리한다면 이런 기능이 유용해요.

## WP File Manager 플러그인 설치하기

WP 관리자 화면의 **플러그인**(Plugins) 탭에서 설치할 수 있어요. 아래 이미지를 참고하세요.

![WP 관리자 화면에서 WP File Manager 플러그인을 설치하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253646254/original/XE5sIAcZXp3SIio_9oW2qGgZbMrW6csYuw.gif?1664367408)

1. WP 관리자(WP Admin) 화면으로 이동하세요.
2. **플러그인**을 클릭하세요.
3. **Add New**(새로 추가)를 클릭하세요.
4. WP File Manager를 검색하세요. 위 이미지에 나온 플러그인을 선택하세요.
5. 플러그인을 설치하고 활성화하세요.

이 플러그인에 대한 자세한 내용은 아래 링크에서 확인할 수 있어요.

<https://wordpress.org/plugins/wp-file-manager/>

{% hint style="warning" %}
FTP 접근의 위험과 마찬가지로, 이 플러그인으로 다루는 파일에 주의하지 않으면 여전히 문제가 생길 수 있어요.

문제가 생기면 WordPress를 가장 최근의 안정적인 백업으로 복원하세요.
{% endhint %}
