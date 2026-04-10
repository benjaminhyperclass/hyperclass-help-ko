---

번역일: 2026-04-07
카테고리: 06-사이트 > 워드프레스
---

# 워드프레스 SSH 접속

이 가이드에서는 워드프레스 호스팅 환경에서 SSH 접속을 설정하는 방법을 안내합니다. SSH를 통해 WP-CLI 같은 명령줄 도구로 웹사이트를 안전하게 관리할 수 있습니다. SSH 키 생성부터 호스팅 대시보드에 추가, 그리고 각 운영체제별로 서버에 안전하게 연결하는 방법을 배워보세요.

**목차**

- [SSH란 무엇이고 왜 사용하나요?](#ssh란-무엇이고-왜-사용하나요)
- [SSH 접속의 주요 장점](#ssh-접속의-주요-장점)
- [SSH 키 생성 방법](#ssh-키-생성-방법)
  - [macOS에서](#macos에서)
  - [Linux에서](#linux에서)
  - [Windows에서](#windows에서)
- [호스팅 대시보드에 SSH 키 추가하기](#호스팅-대시보드에-ssh-키-추가하기)
- [SSH로 서버에 연결하기](#ssh로-서버에-연결하기)
- [자주 사용하는 WP-CLI 명령어](#자주-사용하는-wp-cli-명령어)
- [SSH 키 관리하기](#ssh-키-관리하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **SSH란 무엇이고 왜 사용하나요?**

SSH(Secure Shell)는 서버에 암호화된 연결을 제공하는 보안 프로토콜입니다. 서버 리소스에 직접 접근하고자 하는 고급 사용자에게 이상적이며, 워드프레스 관리에서 더 강력한 제어와 자동화 가능성을 제공합니다.

![SSH 개념 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810461/original/VtpVJotbnt8DU4zjBDiC30ZKLAKDbAKMkQ.png?1750786796)

![SSH 연결 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810470/original/2El18UwuiFIjXWaxfP07doVCTzUyG3G2kw.png?1750786804)

# **SSH 접속의 주요 장점**

SSH 접속은 서버 관리와 사이트 보안을 향상시키는 여러 가지 주요 장점을 제공합니다:

- **WP-CLI** 사용으로 더 빠르고 스크립트화된 워드프레스 관리 가능
- 안전하고 암호화된 서버 연결 제공
- FTP 없이도 직접적인 파일 작업 가능
- 자동화와 배포 워크플로우 지원
- 팀을 위한 다중 사용자, 키 기반 인증 지원
- 비밀번호 없는 키 기반 로그인으로 보안 강화

# **SSH 키 생성 방법**

SSH 키를 생성하면 승인된 장치만 서버에 연결할 수 있습니다. 사용하는 운영체제에 따라 아래 단계를 따라해보세요.

## **macOS에서**

터미널을 사용해서 SSH 키를 빠르게 생성하고 복사할 수 있습니다.

- **터미널**을 열어주세요.
- 다음 명령어를 실행하세요: `ssh-keygen -t rsa`
- 모든 프롬프트에서 Enter를 눌러주세요 (비밀번호는 필요 없음).
- 키를 복사하세요: `pbcopy < ~/.ssh/id_rsa.pub`

![macOS SSH 키 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810476/original/eMqljVaWPFzV23f73ONEj6KS6c2IWoklXA.png?1750786818)

## **Linux에서**

Linux에서 SSH 키 생성과 복사는 간단하고 안전합니다.

- **터미널**을 열어주세요.
- 다음 명령어를 실행하세요: `ssh-keygen -t rsa`
- Enter를 눌러 기본값을 수락하세요.
- 필요시 xclip을 설치하세요:
  - Ubuntu: `sudo apt install xclip`
  - Arch: `sudo pacman -S xclip`
  - Fedora/CentOS: `sudo yum -y install xclip`
- 키를 복사하세요: `cat ~/.ssh/id_rsa.pub | xclip -sel clip`

## **Windows에서**

Windows 사용자는 PowerShell을 사용해서 SSH 키를 만들 수 있습니다.

- **PowerShell**을 열어주세요.
- 다음 명령어를 실행하세요: `ssh-keygen.exe -t rsa`
- 프롬프트에서 Enter를 눌러주세요.
- 키를 복사하세요: `Get-Content .ssh\id_rsa.pub | Set-Clipboard`

# **호스팅 대시보드에 SSH 키 추가하기**

SSH 키를 추가하면 해당 장치가 서버에 접근할 수 있도록 승인됩니다.

- 호스팅 대시보드에 로그인하세요.
- **Advanced Settings(고급 설정) > Server Settings(서버 설정)**으로 이동하세요.
- SSH Access(SSH 접속)을 활성화하세요.
- **SSH Keys Manager(SSH 키 관리자)**로 이동 → **Import New Key(새 키 가져오기)**를 클릭하세요.
- 공개 키를 붙여넣으세요.
- 키에 이름을 지정하세요 (예: "지은이의 맥북").
- **Import(가져오기)**를 클릭하면 시스템이 키를 승인합니다.

![SSH 키 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810523/original/fW5WGEi_xKbTe0XP5NBYxIe-VaM-krrPoQ.png?1750786855)

# **SSH로 서버에 연결하기**

연결하면 서버에서 터미널 명령어를 사용할 수 있습니다.

- 대시보드에서 **Host/IP**와 **Username**을 확인하세요.
- 터미널을 열어주세요.
- 다음 명령어를 실행하세요: `ssh yourusername@yourhostip`
- 첫 연결 시 `yes`로 확인하세요.
- 워드프레스 디렉토리로 이동하세요: `cd public_html`

![SSH 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810528/original/I5rpgnCRvGK9MDHAzdRdlw9XyTBwQg8JGA.png?1750786866)

# **자주 사용하는 WP-CLI 명령어**

이 명령어들로 워드프레스 사이트를 효율적으로 관리할 수 있습니다:

- 플러그인 목록 보기: `wp plugin list`
- 캐시 정리: `wp cache flush`
- CDN 캐시 삭제: `wp cdn purge`

# **SSH 키 관리하기**

더 나은 보안과 유연성을 위해 키를 관리할 수 있습니다:

- SSH Keys Manager(SSH 키 관리자)를 통해 언제든 **사용하지 않는 키를 삭제**하세요.
- 다른 장치나 팀원을 위한 키를 추가하세요.
- 보안 강화를 위해 정기적으로 키를 교체하세요.

---

# 자주 묻는 질문

**개인 키를 잃어버리면 어떻게 하나요?**
새 키 쌍을 생성하고 공개 키를 다시 추가해야 합니다.

**키 대신 비밀번호를 사용할 수 있나요?**
아니요, 이 호스팅 플랫폼의 SSH에서는 키 기반 인증이 필수입니다.

**분실이나 도난당한 장치의 접근 권한은 어떻게 취소하나요?**
SSH Keys Manager(SSH 키 관리자)에서 해당 키를 즉시 삭제하세요.

**모든 요금제에서 SSH 접속을 사용할 수 있나요?**
호스팅 요금제 세부 정보를 확인해주세요. 일부 요금제에는 SSH가 포함되지 않을 수 있습니다.

---
*원문 최종 수정: Tue, 24 Jun, 2025 at 12:49 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*