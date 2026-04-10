---

번역일: 2026-04-07
카테고리: 11-설정 > 사용자-설정
---

# 화이트라벨 에이전시의 구글 로그인

## 화이트라벨 에이전시에서 구글 로그인 활성화하기

에이전시 관리자(Admin)와 소유자(Owner)는 아래 단계를 따라 화이트라벨(WL) 도메인에서 구글 로그인을 활성화할 수 있습니다:

- 
에이전시 계정에 로그인하세요.

- 
`Settings(설정) → Company(회사) → Whitelabel(화이트라벨)`로 이동하세요.

![화이트라벨 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045188581/original/IH6fLYFmJCOe8VmFqAoRZ20Cklh6wDnvjQ.png?1744799250)

- 
화이트라벨 도메인이 올바르게 설정되어 있다면, 구글 로그인을 활성화하는 토글이 표시됩니다.

- 
활성화하면, 화이트라벨 로그인 페이지에 "Sign in with Google(구글로 로그인)" 버튼이 표시되어 사용자가 구글 OAuth를 통해 인증할 수 있습니다.

![구글 로그인 버튼이 있는 로그인 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045188729/original/i-gl6yA1JB1c65Mo473oiM4bEXx2BDi7Xw.png?1744799340)

## 사용자 로그인 흐름:

화이트라벨 도메인에서 구글 로그인을 사용할 때, 사용자는 다음 단계를 따라야 합니다:

- 
화이트라벨 도메인에 접속하여 로그인 페이지의 "Sign in with Google(구글로 로그인)" 버튼을 클릭하세요.

- 
사용자는 다음 URL로 리다이렉트됩니다: https://login.leadconnectorhq.com/google?origin=<your whitelabel domain>

- 
브라우저에서 위 URL에 대한 팝업을 허용하세요.

이는 브라우저당 한 번만 설정하면 되며, 구글 OAuth 창이 올바르게 나타나기 위해 필요합니다.

![팝업 허용 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045196662/original/yvTdGvq0Gvx1R7i0a87dkUhc7AwDzJ4ydQ.png?1744804372)

- 
팝업이 허용되면 구글 OAuth 화면이 나타납니다.

해당 화이트라벨 에이전시에 등록된 구글 계정을 선택하세요.

- 
선택한 계정이 에이전시와 연결되어 있지 않다면 오류 메시지가 표시됩니다:

"User does not exist(사용자가 존재하지 않음)"

![사용자 존재하지 않음 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045197802/original/8JFZDxXMqHMlj-XnVvwiJ6jJPhibA2BIlA.png?1744805165)

- 인증이 성공하면 사용자는 로그인 화면으로 다시 리다이렉트되어 계정에 로그인됩니다.

## 커스텀 CSS:

- 새 버튼이 추가되어도 기존 CSS 구현에는 영향을 주지 않습니다. 하지만 에이전시 관리자는 개별 사용 사례와 스타일링 선호도에 따라 새 버튼에 대한 CSS를 추가하거나 조정해야 할 수 있습니다.

---
*원문 최종 수정: Wed, 23 Apr, 2025 at 8:43 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*