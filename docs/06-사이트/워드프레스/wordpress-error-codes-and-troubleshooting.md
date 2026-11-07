---
원문: /support/solutions/articles/48001221815-wordpress-error-codes-and-troubleshooting
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 오류 코드와 해결 방법

WordPress 호스팅에서만 나타나는 오류 코드가 몇 가지 있고, 오류마다 해결 방법이 달라요. 이 문서에서 오류별 의미와 해결 방법을 확인하세요.

## 오류별 의미와 해결 방법

### 파일 손상 (File Corrupted)

현재 WordPress 설치본이나, 이 파일을 만든 원본 WordPress 설치본에서 파일이 손상됐을 수 있어요. 이 경우 손상된 파일은 가져오기에 쓸 수 없어요. 파일을 삭제하고 다시 시도하세요.

![파일 손상 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250641974/original/YBX42hBJXjah-FzXIlUzTtr7XZHkiT69Vw.png?1663058735)

### 플러그인 문제 (Plugin Issue)

오류 메시지는 다음과 비슷하게 나타나요.

"Plugin named “yith-topbar-countdown” is corrupted."

(“yith-topbar-countdown”이라는 플러그인이 손상되었다는 뜻이에요.)

오류는 현재 WordPress 설치본에 있을 수도 있고, 이 파일을 만든 원본 WordPress 설치본에 있을 수도 있어요. 해당 플러그인을 삭제하고 다시 시도하세요.

![플러그인 손상 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250642923/original/XEJUx0ComeNFLCpoacYn1p3UmBApX8HYIw.png?1663058962)

### 알 수 없는 오류 (플러그인과 파일이 모두 손상된 경우)

이 경우에는 플러그인 문제를 먼저 감지해서 화면에 플러그인 오류를 보여 줘요.

"Plugin named “yith-topbar-countdown” is corrupted."

오류는 현재 WordPress 설치본에 있을 수도 있고, 이 파일을 만든 원본 WordPress 설치본에 있을 수도 있어요. 해당 플러그인을 삭제하고 다시 시도하세요.

플러그인을 삭제한 뒤에도 파일이 손상된 상태라면 오류가 위에서 설명한 파일 손상 오류로 바뀌어요. 그때는 파일을 삭제하고 다시 시도하세요.
