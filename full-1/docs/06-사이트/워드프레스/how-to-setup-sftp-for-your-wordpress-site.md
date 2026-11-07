---
원문: https://help.gohighlevel.com/support/solutions/articles/48001229821-how-to-setup-sftp-for-your-wordpress-site
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 사이트에 SFTP 연결하기

내 컴퓨터의 클라이언트 프로그램으로 WordPress 사이트의 파일과 폴더에 접속하는 방법을 안내해요. SFTP 접속 정보를 만들고, 그 정보로 클라이언트 프로그램에 로그인할 수 있어요.

SFTP는 Secure File Transfer Protocol(또는 SSH File Transfer Protocol)의 약자예요. SSH(Secure SHell) 프로토콜을 확장해서 만든 방식이에요. 하이퍼클래스에서는 데이터를 안전하게 암호화해서 보호하기 위해 SFTP 연결만 지원해요.

## WordPress 사이트에 SFTP로 연결하기

1. **사이트 > WordPress > 고급 설정 > FTP Access**로 이동하세요.

   ![사이트의 WordPress 고급 설정에서 FTP Access 메뉴를 연 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177708/original/iJrg6pXwzAbgxbW4ags-0dDrePz_311PHg.png?1738914168)

2. **Add FTP User**(FTP 사용자 추가)를 클릭하고 접속 정보를 설정하세요.

   ![FTP 사용자를 추가하고 접속 정보를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177768/original/WHcML7VtbudGk349-rrXNisLp-BpvW3V7Q.png?1738914237)

3. 화면에 나오는 Host URL, Port number, Username, Password로 클라이언트 프로그램에 로그인하면 WordPress 파일에 접속할 수 있어요.

   ![Host URL, 포트 번호, 사용자 이름, 비밀번호가 표시된 SFTP 접속 정보 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041177838/original/ZNFZREntaP41zVm9WtDGMb6XUE6FUn17Lg.png?1738914299)

{% hint style="info" %}
접속 정보는 안전하게 보관하세요. Username과 Password는 사용자마다 달라요. 필요하면 이 접속 정보를 재설정할 수도 있어요.
{% endhint %}

## 추천 클라이언트 프로그램

무료와 유료 프로그램이 많아요. 아래 프로그램 중에서 고르는 것을 추천해요.

- [FileZilla](https://filezilla-project.org/) (무료 – macOS, Windows)
- [WinSCP](https://winscp.net/eng/index.php) (무료 – Windows)
- [FlashFXP](https://www.flashfxp.com/) (유료 – Windows)
- [Cyberduck](https://cyberduck.io/) (무료 – macOS, Windows)
- [Transmit](https://panic.com/transmit/) (유료 – macOS)
