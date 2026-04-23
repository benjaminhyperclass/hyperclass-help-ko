---
원문: https://help.leadconnectorhq.com/support/solutions/articles/48001221954-wordpress-error-codes-and-faq
번역일: 2026-04-23
카테고리: WordPress 연동
---

# WordPress 오류 코드 및 FAQ

Hyperclass의 WordPress 호스팅 시스템에는 저희 시스템에서만 발생하는 고유한 오류 코드들이 있으며, 이를 해결하기 위해서는 특별한 문제해결 단계가 필요합니다.

---

## 이 문서에서 다루는 내용

#### [각 오류의 의미와 문제해결 방법](#각-오류의-의미와-문제해결-방법)

#### [파일 손상:](#파일-손상)

#### [플러그인 문제:](#플러그인-문제)

#### [알 수 없는 오류 (플러그인과 파일 모두 손상된 경우):](#알-수-없는-오류-플러그인과-파일-모두-손상된-경우)

## 각 오류의 의미와 문제해결 방법

### 파일 손상:

현재 WordPress 설치본이나 원본 WordPress 설치본(이 파일을 생성한 곳)에서 파일이 손상되어 가져오기에 사용할 수 없는 상태입니다. 이 파일을 삭제하고 다시 시도해 주세요.

![파일 손상 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250795731/original/d7yH5xdDd9jFFLRlaR3yBHFlFkcTvFaj9g.png?1663090770)

### 플러그인 문제:

오류 메시지는 다음과 같이 표시될 수 있습니다: "Plugin named "yith-topbar-countdown" is corrupted." (플러그인 "yith-topbar-countdown"이 손상되었습니다.)

이 오류는 현재 WordPress 설치본이나 원본 WordPress 설치본(이 파일을 생성한 곳)에서 발생할 수 있습니다. 해당 플러그인을 삭제하고 다시 시도해 주세요.

![플러그인 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250795733/original/RhdvD81Y2v7hRmleOWoGrn10ozjxVBnwGg.png?1663090770)

### 알 수 없는 오류 (플러그인과 파일 모두 손상된 경우):

시스템이 플러그인 문제를 먼저 감지하여 UI에 플러그인 오류를 표시합니다.

플러그인 "yith-topbar-countdown"이 손상되었습니다. 이 오류는 현재 WordPress 설치본이나 원본 WordPress 설치본(이 파일을 생성한 곳)에서 발생할 수 있습니다. 해당 플러그인을 삭제하고 다시 시도해 주세요. 

플러그인을 삭제한 후에도 파일이 손상되어 있다면, 오류가 바뀌어 위에서 설명한 파일 손상 오류가 표시됩니다. 그런 경우 파일을 삭제하고 다시 시도하시면 됩니다.

---
*원문 최종 수정: Tue, 13 Sep, 2022 at 12:43 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*