---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006783-how-to-use-ftp-to-access-your-wordpress-website
번역일: 2026-11-07
카테고리: 06-사이트
---

# FTP로 WordPress 웹사이트 파일에 접속하기

FTP(File Transfer Protocol)를 쓰면 웹사이트 파일에 안전하고 빠르게 접속할 수 있어요. 내 컴퓨터의 파일을 다루듯 서버의 파일을 직접 올리고, 내려받고, 편집할 수 있어요. 이 문서에서는 FileZilla로 FTP에 연결하는 방법을 안내해요.

### FTP를 쓰면 좋은 경우

- 직접 만든 플러그인이나 테마를 업로드할 때
- `wp-config` 파일이나 `.htaccess` 파일을 편집할 때
- 화면이 하얗게 나오거나 플러그인에 문제가 생겼을 때 원인을 찾을 때
- 백업이나 특정 파일을 내려받을 때

---

### 준비할 것

FTP로 연결하기 전에 WordPress 호스팅 대시보드의 **사이트 > WordPress > 고급 설정 > FTP Access**(FTP 접속)에서 아래 정보를 확인하세요.

- **호스트** (예: `103.67.202.37`)
- **Port**(포트) (보통 `21`)
- **사용자명** (예: `example@ssvnXXXX.wpdns.site`)
- **비밀번호** (확인할 수 없으면 **비밀번호 재설정**을 클릭하세요)

![FTP 접속 정보 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056863793/original/b0fcEMhfP_-WRJbd1opIx3-jCtzBmQ5zYQ.png?1761545264)

![FTP 접속 정보 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056863827/original/a0CfpauKAMmmqSIgF1vOham57IA3mNq1HQ.png?1761545322)

---

### FileZilla로 FTP에 연결하기

무료이고 많이 쓰는 FTP 프로그램인 [FileZilla](https://filezilla-project.org/)를 추천해요.

1. FileZilla를 내려받아 설치하세요.
   - [https://filezilla-project.org/download.php](https://filezilla-project.org/download.php)에 접속하세요.
   - 사용하는 운영체제(Windows, Mac, Linux)에 맞는 버전을 선택하세요.
   - FileZilla Client 다운로드 링크는 다음과 같아요.
     - **Windows (64-bit):** [Download FileZilla Client for Windows](https://filezilla-project.org/download.php?platform=win64)
     - **macOS (Apple Silicon):** [Download FileZilla Client for macOS (Apple Silicon)](https://filezilla-project.org/download.php?platform=macos-arm64)
     - **macOS (Intel):** [Download FileZilla Client for macOS (Intel)](https://filezilla-project.org/download.php?platform=osx)
     - **Linux (64-bit):** [Download FileZilla Client for Linux](https://www.google.com/search?q=https://filezilla-project.org/download.php%3Fplatform%3Dlinux-x86_64)

2. FileZilla를 열고 접속 정보를 입력하세요. FileZilla 창 맨 위에 입력란이 있어요.

   | 입력란 | 입력할 값 |
   | --- | --- |
   | **호스트** | 내 FTP 호스트 (예: `103.67.202.37`) |
   | **사용자명** | 대시보드에 표시된 사용자명 |
   | **비밀번호** | 생성하거나 재설정한 비밀번호 |
   | **Port**(포트) | `21` |

3. **Quickconnect**(빠른 연결)를 클릭하세요.

4. 웹사이트 파일을 확인하세요.
   - **오른쪽**에는 서버에 있는 웹사이트 파일이 보여요.
   - **왼쪽**에는 내 컴퓨터의 파일이 보여요.
   - 양쪽 사이에서 파일을 끌어다 놓아 옮길 수 있어요.

---

### 알아 두면 좋은 팁

- 어떤 역할을 하는 파일인지 모르면 삭제하지 마세요.
- 파일을 편집하려면 파일을 마우스 오른쪽 버튼으로 클릭하고 **보기/편집**을 선택하세요.
- 변경하기 전에 항상 백업을 내려받으세요.

---

### 자주 겪는 문제

| 문제 | 해결 방법 |
| --- | --- |
| 연결이 안 돼요 | 비밀번호, 포트, 호스트 IP를 다시 확인하세요. |
| 시간 초과 오류가 나요 | FileZilla의 **설정**에서 패시브 모드를 사용해 보세요. |
| **권한 거부됨** | 관리자에게 문의하거나 FTP 비밀번호를 재설정하세요. |

---

### 참고 자료

- [FileZilla 공식 문서](https://wiki.filezilla-project.org/Documentation)
- [FTP 입문 영상 가이드 (YouTube)](https://www.youtube.com/results?search_query=filezilla+ftp+tutorial)

---

### 도움이 더 필요하신가요?

문제가 해결되지 않으면 관리자에게 아래 내용을 함께 전달해 문의하세요.

- 사이트 이름
- 사용자명
- FileZilla 설정 화면 스크린샷
