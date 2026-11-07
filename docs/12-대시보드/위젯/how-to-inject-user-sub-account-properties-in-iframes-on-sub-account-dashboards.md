---
원문: /support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards
번역일: 2026-11-07
카테고리: 12-대시보드
---

# 서브 계정 대시보드의 iframe에 사용자·서브 계정 속성 넣기

iframe으로 임베드한 콘텐츠의 주소(URL)에 사용자나 서브 계정의 속성을 값으로 넣을 수 있어요. 아래 순서대로 따라 하세요.

## 서브 계정 대시보드에 임베드 추가하기

1. 서브 계정 **대시보드**를 열고 편집 모드로 전환하세요.
2. 편집 모드에서 **오브젝트** 탭으로 이동하세요.
3. **오브젝트** 메뉴에서 **Embed**(임베드)를 선택하세요.
4. **URL 입력** 칸에 대시보드에 임베드할 콘텐츠의 URL을 입력하세요.
5. URL을 입력한 뒤, 콘텐츠를 원하는 대로 바꿀 수 있도록 필요한 파라미터를 추가하세요.
6. 서브 계정이나 사용자 식별값을 iframe 소스에 동적으로 넣으세요.
   - URL에 `{{location.id}}`, `{{location.name}}` 같은 자리 표시자를 쓰면 URL을 더 폭넓게 활용할 수 있어요.
   - 예를 들어 `{{location.id}}`로 아래와 같은 동적 URL을 만들 수 있어요.

     `https://yourdomain.com/v2/location/{{location.id}}/conversations`

   - 이런 링크를 대시보드의 iframe URL로 임베드할 수 있어요.

## 사용할 수 있는 사용자 속성

1. URL에 여러 사용자 속성을 넣을 수 있어요. `{{user.userpropertyhere}}`에서 `userpropertyhere` 자리에 아래 속성 중 하나를 넣으세요.`companyId``email``phone``role``type``firstName``lastName``name``fullName`
2. 예를 들어 `https://yourwebsiteurlhere.com/?user={{user.firstName}}`처럼 쓰면 사용자의 이름(firstName)을 URL로 전달할 수 있어요.
