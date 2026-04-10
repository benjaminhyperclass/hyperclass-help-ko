---

번역일: 2026-04-07
카테고리: 06-사이트 > 워드프레스
---

# 워드프레스 사이트 SFTP 설정 방법

SFTP는 로컬 컴퓨터의 클라이언트 프로그램을 통해 웹사이트의 파일과 폴더에 접근하는 방법입니다. SFTP는 Secure File Transfer Protocol(또는 SSH File Transfer Protocol)의 줄임말로, SSH(Secure SHell) 프로토콜의 확장으로 설계되었습니다. 데이터의 안전과 암호화를 보장하기 위해 CRM에서는 SFTP 연결만을 지원합니다.

#### 이 가이드에서 다루는 내용:

#### [워드프레스 사이트에 SFTP로 연결하는 방법](#워드프레스-사이트에-sftp로-연결하는-방법)

## 워드프레스 사이트에 SFTP로 연결하는 방법

1. Sites(사이트) → WordPress(워드프레스) → Advanced Settings(고급 설정) → FTP Access(FTP 접근)으로 이동합니다.

![워드프레스 FTP 접근 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177708/original/iJrg6pXwzAbgxbW4ags-0dDrePz_311PHg.png?1738914168)

2. Add FTP User(FTP 사용자 추가)를 클릭하고 로그인 정보를 설정합니다.

![FTP 사용자 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177768/original/WHcML7VtbudGk349-rrXNisLp-BpvW3V7Q.png?1738914237)

3. 호스트 URL, 포트 번호, 사용자명, 비밀번호를 사용해서 클라이언트 프로그램에 로그인하여 워드프레스 파일에 접근할 수 있습니다. 이 로그인 정보를 안전하게 보관하세요. 사용자명과 비밀번호는 각 사용자마다 고유하며, 필요시 언제든 재설정할 수 있습니다.

![SFTP 연결 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177838/original/ZNFZREntaP41zVm9WtDGMb6XUE6FUn17Lg.png?1738914299)

다양한 무료 및 유료 클라이언트 프로그램이 있으며, 다음 중 하나를 추천합니다:

- [FileZilla](https://filezilla-project.org/) (무료 – macOS 또는 Windows)
- [WinSCP](https://winscp.net/eng/index.php) (무료 – Windows)
- [FlashFXP](https://www.flashfxp.com/) (유료 – Windows)
- [Cyberduck](https://cyberduck.io/) (무료 – macOS 또는 Windows)
- [Transmit](https://panic.com/transmit/) (유료 – macOS)

---
*원문 최종 수정: Fri, 7 Feb, 2025 at 1:45 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*