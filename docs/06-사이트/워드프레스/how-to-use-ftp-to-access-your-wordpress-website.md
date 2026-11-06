---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000006784-how-to-use-ftp-to-access-your-wordpress-website
번역일: 2026-04-23
카테고리: wordpress-folder
---

# FTP로 워드프레스 웹사이트에 접속하는 방법

FTP(File Transfer Protocol)는 웹사이트 파일에 안전하고 빠르게 접근할 수 있는 방법입니다. 컴퓨터에서 파일을 관리하는 것처럼 파일을 업로드, 다운로드, 편집할 수 있어요.

### 🤔 FTP를 사용하는 이유:

- 커스텀 플러그인이나 테마 업로드
- wp-config 또는 .htaccess 파일 편집
- 하얀 화면이나 플러그인 문제 해결
- 백업이나 특정 파일 다운로드

### ✅ 필요한 정보

FTP로 연결하기 전에 워드프레스 호스팅 대시보드에서 다음 정보를 확인하세요 (Sites(사이트) → WordPress → Advanced Settings(고급 설정) → FTP Access(FTP 접근)):

- Host(호스트) (예: 103.67.202.37)
- Port(포트) (보통 21)
- Username(사용자명) (예: example@ssvnXXXX.wpdns.site)
- Password(비밀번호) (없다면 "Reset Password" 클릭)

![FTP 접근 정보 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056873013/original/tPxYJm4244LiFgaNUkcJBZ3FHIWijatp5A.jpeg?1761553785)

![FTP 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056873014/original/feTOeZasy_N8KehFzd9_VpSM0TIyio5Neg.jpeg?1761553785)

### FileZilla로 FTP 연결하기 (단계별 가이드)

무료이고 신뢰할 수 있는 FTP 클라이언트인 [FileZilla](https://filezilla-project.org/)를 추천합니다.

#### 1. FileZilla 다운로드 및 설치

- 웹사이트 방문: https://filezilla-project.org/download.php
- 운영체제에 맞는 버전 선택 (Windows, Mac, Linux)
- FileZilla 클라이언트 다운로드
  - Windows (64-bit): [Windows용 FileZilla 클라이언트 다운로드](https://filezilla-project.org/download.php?platform=win64)
  - macOS (Apple Silicon): [macOS용 FileZilla 클라이언트 다운로드 (Apple Silicon)](https://filezilla-project.org/download.php?platform=macos-arm64)
  - macOS (Intel): [macOS용 FileZilla 클라이언트 다운로드 (Intel)](https://filezilla-project.org/download.php?platform=osx)
  - Linux (64-bit): [Linux용 FileZilla 클라이언트 다운로드](https://www.google.com/search?q=https://filezilla-project.org/download.php%3Fplatform%3Dlinux-x86_64)

#### 2. FileZilla 열기 및 접속 정보 입력

FileZilla 창 상단에 다음 정보를 입력하세요:

| 필드 | 값 |
|------|-----|
| Host(호스트) | FTP 호스트 주소 (예: 103.67.202.37) |
| Username(사용자명) | 대시보드에서 제공받은 사용자명 |
| Password(비밀번호) | 생성/재설정한 비밀번호 |
| Port(포트) | 21 |

그 다음 Quickconnect(빠른 연결) 버튼을 클릭하세요.

#### 3. 웹사이트 파일 탐색

- 오른쪽: 서버의 웹사이트 파일
- 왼쪽: 내 컴퓨터의 파일
- 양쪽 사이에서 파일을 드래그 앤 드롭할 수 있어요.

### 💡 유용한 팁

- 파일의 용도를 모르면 삭제하지 마세요.
- 파일을 편집하려면 마우스 우클릭 후 View/Edit(보기/편집)을 선택하세요.
- 변경하기 전에 항상 백업을 다운로드하세요.

### ❓ 일반적인 문제

| 문제 | 해결 방법 |
|------|----------|
| 연결할 수 없음 | 비밀번호, 포트, 호스트 IP를 다시 확인하세요 |
| 타임아웃 오류 | FileZilla → Settings(설정)에서 passive 모드를 시도하세요 |
| 권한 거부됨 | 관리자에게 문의하거나 FTP 비밀번호를 재설정하세요 |

### 📚 도움이 되는 자료

- [FileZilla 공식 문서](https://wiki.filezilla-project.org/Documentation)
- [초보자용 FTP 비디오 가이드 (YouTube)](https://www.youtube.com/results?search_query=filezilla+ftp+tutorial)

### 🙋 추가 도움이 필요한가요?

문제가 계속되면 다음 정보와 함께 관리자에게 문의하세요:

- 사이트 이름
- 사용자명
- FileZilla 설정의 스크린샷

---
*원문 최종 수정: Mon, 27 Oct, 2025 at 3:30 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*