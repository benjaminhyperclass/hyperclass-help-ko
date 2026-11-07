---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005082-google-login-for-wl-agencies
번역일: 2026-11-07
카테고리: 11-설정
---

# 화이트라벨 에이전시에서 Google 로그인 사용하기

화이트라벨(WL) 도메인의 로그인 페이지에 Google 로그인을 추가하는 방법과, 사용자가 Google 계정으로 로그인하는 과정을 안내해요. 에이전시 관리자와 소유자만 설정할 수 있어요.

## 화이트라벨 에이전시에서 Google 로그인 켜기

에이전시 관리자와 소유자는 아래 순서로 화이트라벨 도메인에서 Google 로그인을 켤 수 있어요.

1. 에이전시 계정에 로그인하세요.
2. **설정 > 회사 > Whitelabel**(화이트라벨)로 이동하세요.

   ![화이트라벨 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045188581/original/IH6fLYFmJCOe8VmFqAoRZ20Cklh6wDnvjQ.png?1744799250)

3. 화이트라벨 도메인이 올바르게 설정되어 있다면 **Google Login**(Google 로그인) 토글이 보여요. 이 토글을 켜세요.
4. 토글을 켜면 화이트라벨 로그인 페이지에 **Google로 로그인** 버튼이 나타나요. 사용자는 이 버튼으로 Google OAuth 인증을 거쳐 로그인할 수 있어요.

   ![로그인 페이지에 표시된 Google로 로그인 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045188729/original/i-gl6yA1JB1c65Mo473oiM4bEXx2BDi7Xw.png?1744799340)

## 사용자 로그인 과정

사용자가 Google 계정으로 화이트라벨 도메인에 로그인하는 순서예요.

1. 화이트라벨 도메인에 접속해 로그인 페이지에서 **Google로 로그인** 버튼을 클릭하세요.
2. 아래 URL로 이동해요.

   `https://login.leadconnectorhq.com/google?origin=<your whitelabel domain>`

3. 브라우저에서 위 URL의 팝업을 허용하세요.

   {% hint style="info" %}
   팝업 허용은 브라우저마다 한 번만 하면 돼요. Google OAuth 창이 제대로 표시되려면 꼭 필요해요.
   {% endhint %}

   ![브라우저 팝업 허용 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045196662/original/yvTdGvq0Gvx1R7i0a87dkUhc7AwDzJ4ydQ.png?1744804372)

4. 팝업이 허용되면 Google OAuth 화면이 나타나요.
   - 해당 화이트라벨 에이전시에 등록된 Google 계정을 선택하세요.
   - 선택한 계정이 에이전시와 연결되어 있지 않으면 “User does not exist”(존재하지 않는 사용자)라는 오류 메시지가 표시돼요.

   ![존재하지 않는 사용자 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045197802/original/8JFZDxXMqHMlj-XnVvwiJ6jJPhibA2BIlA.png?1744805165)

5. 인증에 성공하면 로그인 화면으로 다시 돌아오고, 계정에 로그인돼요.

## 사용자 지정 CSS

새로 추가된 **Google로 로그인** 버튼은 기존에 적용해 둔 CSS에 영향을 주지 않아요. 다만 사용 환경과 원하는 스타일에 따라, 에이전시 관리자가 새 버튼에 맞게 CSS를 추가하거나 조정해야 할 수 있어요.
