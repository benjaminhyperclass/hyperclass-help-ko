---
원문: /support/solutions/articles/155000004789-troubleshooting-url-indexing-issues-in-funnels
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퍼널 URL 색인 문제 해결하기

같은 퍼널 페이지에 URL이 여러 개 생기거나 주소 끝에 임의의 숫자가 붙을 때 쓰는 문서예요. 퍼널 URL 정리, 고유한 페이지 경로 설정, canonical 태그, 리다이렉트 사용법을 안내해요. 검색 엔진이 같은 퍼널 페이지의 중복 URL이나 의도하지 않은 URL 변형을 발견하면 이런 문제가 생길 수 있어요. 퍼널 URL 끝에 임의의 숫자가 붙거나, Google이 원하지 않는 URL을 색인하거나, Google Search Console에 중복 경로가 나타나기도 해요.

## 퍼널의 URL 색인이란?

URL 색인은 검색 엔진이 퍼널 페이지 URL을 찾아서 크롤링하고 저장해, 검색 결과에 보여 주는 과정이에요. 퍼널 URL이 깔끔하고 일관되면 검색 엔진이 어떤 페이지를 대표 버전으로 볼지 판단하기 쉬워요. 하이퍼클래스의 퍼널에는 퍼널 전체 URL과 스텝별 URL이 있어요. 그래서 경로를 겹치지 않게 정리해 두는 것이 중요해요.

다음과 같은 경우에 URL 색인 문제가 생길 수 있어요.

- 퍼널 URL 끝에 임의의 숫자가 붙었어요.
- Google이 대표 URL 대신 다른 URL 변형을 색인했어요.
- 같은 퍼널 페이지에 여러 버전으로 접속할 수 있어요.
- 퍼널 경로가 다른 페이지나 퍼널 스텝과 겹쳐요.
- 리다이렉트나 canonical 태그가 없거나 잘못 설정되어 있어요.

---

## 퍼널 URL 색인 문제를 고치면 좋은 점

퍼널 URL이 깔끔하면 방문자와 검색 엔진 모두 각 페이지가 어디에 속하는지 쉽게 알 수 있어요. URL 충돌을 해결하면 중복 콘텐츠로 인식되는 일도 줄고, Google Search Console 같은 도구에서 데이터를 확인하기도 편해져요.

1. 더 깔끔한 URL: 페이지 경로를 고유하게 만들 수 있다면 퍼널 URL의 불필요한 임의 숫자를 없앨 수 있어요.
2. SEO 명확성 향상: 검색 엔진이 퍼널 페이지의 대표 버전을 알아보기 쉬워져요.
3. 더 정확한 추적: Google Search Console이나 분석 도구에서 퍼널 URL을 볼 때 헷갈리는 일이 줄어요.
4. 방문자 경험 개선: 공유하는 링크가 깔끔하고 읽기 쉬워서 알아보기 좋아요.
5. 중복 URL 충돌 감소: 여러 페이지나 퍼널 스텝이 같은 경로를 두고 겹치는 일을 막을 수 있어요.

---

## 퍼널 URL의 임의 숫자 없애기

같은 도메인의 다른 페이지나 퍼널 스텝이 이미 그 경로를 쓰고 있으면 퍼널 URL에 임의의 숫자가 붙어요. 하이퍼클래스가 URL 중복을 막으려고 고유한 숫자열을 자동으로 붙이는 거예요.

### 해결 방법

1. **사이트**로 이동한 다음 **퍼널**을 여세요.

   ![사이트 메뉴에서 퍼널 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071314982/original/XTpLfhAGdeLvkb4jHciF4RKOuEnHdII_7w.png?1778753428)
2. 문제가 있는 퍼널을 선택하세요.
3. 임의의 숫자가 붙은 퍼널 스텝을 선택하세요.

   ![임의의 숫자가 붙은 퍼널 스텝 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071315191/original/XWdOOFfAoMGDvcbdU3kdDulm9MKGyxFH0w.png?1778753523)
4. 퍼널 스텝 설정을 여세요.
5. **Path**(경로) 필드를 찾으세요.

   ![Path 필드 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071315385/original/vA4XYkJmL4MPOcO_conO4NsVceDj_qJ_Hw.png?1778753643)
6. 같은 도메인에서 아직 쓰지 않는 고유한 경로를 입력하세요.
7. **변경사항 저장**을 클릭하세요.

   ![변경사항 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071315475/original/tKJwffQwy9VunjhDqKfZaIhPHMVr97DRGg.png?1778753703)
8. 경로를 바꾸고 나면 퍼널 URL 끝에 임의의 숫자가 더 이상 나타나지 않아요.

{% hint style="warning" %}
중요: 같은 도메인에서는 페이지 경로가 모두 고유해야 해요. 퍼널 스텝, 웹사이트 페이지, 게시된 다른 페이지가 같은 경로를 쓰면 하이퍼클래스가 충돌을 막기 위해 URL을 조정할 수 있어요.
{% endhint %}

---

## 퍼널 URL과 퍼널 스텝 URL 이해하기

퍼널에는 URL 단계가 여러 개 있고, 단계마다 방문자와 검색 엔진이 퍼널에 접속하는 방식이 달라져요. 차이를 알아 두면 경로 충돌을 막고 색인 문제도 더 쉽게 찾을 수 있어요.

퍼널에는 다음과 같은 URL이 있어요.

- 퍼널 URL: 퍼널에 지정된 대표 URL이에요. 보통 퍼널의 첫 번째 스텝이 열려요.
- 스텝 URL: 퍼널의 개별 스텝(페이지)에 지정된 URL이에요.
- 중첩 경로: 페이지, 퍼널, 이커머스 페이지, 웨비나를 정리할 때 쓰는 더 깊은 URL 경로예요.

하이퍼클래스의 퍼널 경로 도움말에 따르면 퍼널 URL과 스텝 URL은 서로 다른 경로 단계예요. 그래서 한쪽 경로를 바꿔도 퍼널의 모든 URL이 자동으로 바뀌지는 않아요.

---

## canonical 태그로 대표 퍼널 URL 지정하기

canonical 태그는 중복되거나 비슷한 URL이 있을 때 어떤 URL을 대표 버전으로 볼지 검색 엔진에 알려 주는 태그예요. 방문자를 다른 주소로 보내지 않고, 브라우저에 보이는 URL도 바꾸지 않아요.

여러 URL 버전에 계속 접속할 수 있지만 검색 엔진에는 하나를 대표 버전으로 알리고 싶을 때 canonical 태그를 사용하세요.

```
Example Canonical Tag:

<link rel="canonical" href="https://www.example.com/preferred-page-url" />
```

---

## canonical 태그 추가하기

1. **사이트**로 이동한 다음 **퍼널**을 여세요.

   ![사이트 메뉴에서 퍼널 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071316113/original/8wO9JLZxIsAaQ9xbltJBD6zFTpfyO8eI-Q.png?1778753960)
2. 문제가 있는 퍼널을 선택하세요.
3. **편집**을 클릭한 다음 **SEO Settings**(SEO 설정)로 이동하세요.

   ![편집 화면에서 SEO 설정으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071325431/original/flH0v3Q2H60XyJSg2FIfZb40-1xEpk4_lQ.png?1778759728)![SEO 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071325366/original/kwubM155dh0k7qWSA8GZnYSHT2MDdfX1_Q.png?1778759682)
4. **SEO 메타데이터**를 여세요.
5. 커스텀 메타 태그를 입력하는 영역을 찾으세요.

   ![커스텀 메타 태그 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071325567/original/di6_1L9ctT7K4TSYexDQ26uni8zmFnKwyA.png?1778759803)
6. 대표로 삼을 퍼널 페이지 URL로 canonical 태그를 추가하세요.

   ![canonical 태그 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071325619/original/4p7XJ376RTrGfS7k_FXYd2zWuNoutULJTQ.png?1778759845)
7. **변경사항 저장**을 클릭하세요.

   ![변경사항 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071325722/original/_xwuIN5SjcRJE-mf5NaJ8IR61S0ag3U0IQ.png?1778759908)
8. 하이퍼클래스의 퍼널과 웹사이트에는 **SEO 메타데이터**(커스텀 메타 태그) 영역에서 커스텀 메타 태그를 추가할 수 있어요.

---

## 퍼널 URL이 바뀌었을 때 301 리다이렉트 사용하기

301 리다이렉트는 방문자와 검색 엔진을 이전 URL에서 새 URL로 보내 주는 설정이에요. 퍼널 URL이 바뀌어서 이전 URL을 더 이상 쓰지 않을 때 유용해요.

다음과 같은 경우에 301 리다이렉트를 사용하세요.

- 이전 URL로 들어온 방문자를 새 URL로 자동으로 보내야 할 때
- 퍼널 페이지 경로가 바뀌었을 때
- 기존 링크, 광고, 공유된 URL이 아직 이전 경로를 가리킬 때
- 방문자가 오래되었거나 열리지 않는 페이지에 도착하지 않게 하고 싶을 때

하이퍼클래스에서는 **사이트 > URL 리다이렉트**에서 리다이렉트를 설정할 수 있어요.

{% hint style="info" %}
canonical 태그와 301 리다이렉트의 차이

여러 URL에 계속 접속할 수 있지만 검색 엔진이 그중 하나를 대표로 보게 하고 싶다면 canonical 태그를 사용하세요.

방문자를 이전 URL에서 새 URL로 자동으로 보내야 한다면 301 리다이렉트를 사용하세요.
{% endhint %}

---

## 변경 후 Google Search Console 확인하기

Google Search Console에서는 Google이 어떤 URL을 발견하고, 크롤링하고, 색인으로 선택했는지 확인할 수 있어요. 퍼널 경로를 바꾸거나 canonical 태그를 추가하거나 리다이렉트를 만든 뒤에는, Google이 페이지를 다시 크롤링해 검색 결과를 갱신하기까지 시간이 걸릴 수 있어요.

권장 순서는 다음과 같아요.

- Google Search Console을 여세요.
- **URL Inspection Tool**(URL 검사 도구)을 사용하세요.
- 대표로 삼을 퍼널 URL을 입력하세요.
- 색인된 URL과 canonical URL 정보를 확인하세요.
- 필요하면 대표 URL의 색인 생성을 요청하세요.

하이퍼클래스에서 퍼널 URL, 리다이렉트, 커스텀 태그를 설정할 수는 있어요. 하지만 페이지를 언제 크롤링하고 검색 결과에 반영할지는 Google이 정해요.

---

## 실수로 noindex 태그를 넣지 않도록 주의하기

noindex 태그는 검색 엔진에 페이지를 색인하지 말라고 알려 주는 태그예요. 퍼널이나 웹사이트 페이지를 일부러 검색 결과에서 빼고 싶을 때만 사용하세요.

검색 결과에 나와야 하는 퍼널 URL의 문제를 해결하는 중이라면 noindex 태그를 추가하지 마세요. 커스텀 태그로 검색 엔진의 색인을 막는 방법은 별도 도움말이 있어요. 이는 URL 색인 문제를 고치는 것과는 다른 용도예요.

```
Example Noindex Tag:

<meta name="robots" content="noindex">

Only use this when the page should not appear in search results.
```

---

## 자주 묻는 질문

### 퍼널 URL 끝에 임의의 숫자가 붙는 이유가 뭔가요?
보통 같은 도메인의 다른 페이지나 퍼널 스텝이 이미 그 경로를 쓰고 있다는 뜻이에요. URL 중복 충돌을 막으려고 하이퍼클래스가 고유한 숫자열을 붙여요.

### 퍼널 URL의 임의 숫자는 어떻게 없애나요?
문제가 있는 퍼널 스텝을 열고 **Path**(경로) 필드를 찾으세요. 같은 도메인에서 아직 쓰지 않는 고유한 경로를 입력하고 변경사항을 저장하면 돼요.

### 하이퍼클래스에서 Google이 특정 URL을 색인하도록 강제할 수 있나요?
아니요. 하이퍼클래스에서는 경로, 리다이렉트, canonical 태그를 설정할 수 있지만, 크롤링과 색인은 Google이 정해요.

### Google이 색인된 URL을 업데이트하는 데 얼마나 걸리나요?
시간은 상황마다 달라요. 변경한 뒤에는 Google Search Console의 **URL Inspection Tool**(URL 검사 도구)로 대표 URL의 색인 생성을 요청하세요.

### canonical 태그와 리다이렉트 중 무엇을 써야 하나요?
여러 URL에 계속 접속할 수 있지만 검색 엔진이 그중 하나를 대표로 보게 하려면 canonical 태그를 쓰세요. 방문자를 이전 URL에서 새 URL로 자동으로 보내야 하면 301 리다이렉트를 쓰세요.

### 퍼널 경로를 바꾸면 기존 링크가 끊기나요?
리다이렉트를 만들지 않으면 이전 경로를 쓰는 기존 링크가 작동하지 않을 수 있어요. 이전 URL을 광고, 이메일, 소셜 게시물 등 공유된 링크에 이미 쓰고 있다면 301 리다이렉트를 추가하세요.

### www가 있는 주소와 없는 주소가 서로 영향을 주나요?
네. 검색 엔진은 www.example.com/page와 example.com/page를 서로 다른 URL 버전으로 볼 수 있어요. 도메인 형식을 일관되게 쓰고, 필요하면 canonical 태그나 리다이렉트를 함께 사용하세요.

### 중복 URL을 해결하려면 noindex 태그를 넣어야 하나요?
아니요. 페이지를 검색 결과에서 빼고 싶은 경우가 아니라면 넣지 마세요. 중복 URL 문제는 상황에 따라 고유한 경로, canonical 태그, 리다이렉트 중 하나로 해결하세요.
