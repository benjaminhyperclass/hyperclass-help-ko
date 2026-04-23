---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005141-ssh-access-and-ssh-keys-management-on-your-wordpress-hosting
번역일: 2026-04-23
카테고리: 퍼널 & 웹사이트
---

# SSH 접근 및 SSH 키 관리 - 워드프레스 호스팅

SSH(Secure Shell)는 서버에 안전하게 연결하여 WP-CLI 같은 명령줄 도구로 워드프레스를 관리할 수 있는 보안 방법입니다. 이 가이드에서는 SSH 접근을 활성화하고, SSH 키를 생성하여 추가한 후, 사이트에 안전하게 연결하는 방법을 설명합니다.

## SSH란 무엇이고 왜 사용하나요?

SSH를 통해 고급 사용자는 다음과 같은 작업이 가능합니다:

- WP-CLI 명령어 실행:
  - 플러그인 및 테마 관리
  - 데이터 가져오기/내보내기, 캐시 정리, 설정 업데이트

- 터미널을 통한 직접 파일 관리

⚠️ SSH는 명령줄에 익숙한 사용자에게 권장됩니다. 명령어를 실행할 때는 항상 신중하게 진행하세요.

![SSH 접근 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045562559/original/TKjySjmuq4Jq21Kd3av1WbK_V_LyadiIZA.png?1745469234)

![SSH 키 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045562512/original/-2y8alycvmkLSB0r283iQA5Mwzt-pCl4vA.png?1745469063)

## 1단계: SSH 키 생성하기

저희 플랫폼의 SSH 접근은 키 기반 인증만 지원합니다. 보안 강화를 위해 비밀번호는 사용하지 않습니다.

### **macOS에서**

Mac을 사용하는 경우, 먼저 터미널을 열어야 합니다. 터미널이 열리면 다음 명령어를 복사하여 붙여넣으세요:

```
ssh-keygen -t rsa
```

모든 옵션에서 엔터를 누르세요. 비밀번호를 생성할 필요는 없습니다. 다음과 같이 표시됩니다(Mac 터미널은 보통 검은색 대신 흰색이지만 동일합니다):

![SSH 키 생성 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045565949/original/9nRUZssMRZhaJ4Y-X803HpXnxKZqRp0sfA.png?1745474982)

키가 생성되면 클립보드에 복사할 수 있습니다:

```
pbcopy < ~/.ssh/id_rsa.pub
```

### **Linux에서:**

- 터미널을 열어주세요.

SSH 키를 생성하세요:

```bash
ssh-keygen -t rsa
```

---
*원문 최종 수정: Thu, 24 Apr, 2025 at 1:09 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*