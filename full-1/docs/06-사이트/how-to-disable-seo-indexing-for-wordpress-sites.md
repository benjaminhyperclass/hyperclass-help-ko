---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005158-how-to-disable-seo-indexing-for-wordpress-sites
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 사이트의 SEO 색인 끄기

**Disable SEO Indexing**(SEO 색인 비활성화) 기능을 쓰면 플러그인을 설치하거나 WordPress 설정을 직접 열지 않고도 내 WordPress 사이트가 검색엔진에 노출되지 않게 할 수 있어요. 이 문서에서는 그 방법을 안내해요.

## Disable SEO Indexing이란?

이 기능으로 WordPress 사이트를 검색엔진에 보여 줄지 직접 정할 수 있어요. 개발용·테스트용·비공개 사이트를 비공개로 유지할 때 유용해요. 하이퍼클래스 화면에서 설정하면 사이트의 robots.txt 파일과 메타 태그에 **noindex**, **nofollow** 규칙이 자동으로 적용돼요.

{% hint style="warning" %}
Admin 권한 사용자만 이 설정에 접근하고 변경할 수 있어요.
{% endhint %}

## 이 기능의 장점

허가 없이 사이트가 노출되는 일을 막는 것은 개인정보 보호, 보안, SEO 전략에 모두 중요해요. 이 기능은 다음과 같은 점에서 도움이 돼요.

- SEO 관리가 간편해요: 별도 플러그인을 설치하거나 WordPress 관리자 화면에 들어가지 않고도 검색엔진 노출 여부를 관리할 수 있어요.
- 비공개를 지킬 수 있어요: 개발용, 테스트용, 내부 프로젝트 사이트가 Google이나 Bing 같은 검색엔진에 나타나지 않게 해요.
- 누구나 쉽게 쓸 수 있어요: 스위치를 한 번 누르면 SEO 색인을 켜고 끌 수 있어요.
- 개발 과정이 빨라져요: 아직 완성되지 않은 웹사이트가 검색 결과에 미리 나타나는 일을 막아요.
- 결과를 바로 알 수 있어요: 변경 내용을 저장하면 성공 또는 실패 알림이 바로 나타나요.

## WordPress 사이트의 SEO 색인 끄는 방법

아래 순서대로 따라 하면 검색엔진이 내 WordPress 사이트를 색인하지 않게 할 수 있어요.

1. 서브 계정에 로그인하세요.
2. 왼쪽 메뉴에서 **사이트**를 클릭하세요.

   ![왼쪽 메뉴의 사이트](https://jumpshare.com/share/e9Vg0m6T3kzqbKaEQoww+/Screen+Shot+2025-09-25+at+5.46.17+PM.png)
3. **WordPress** 탭을 클릭하세요.

   ![WordPress 탭](https://jumpshare.com/share/5hd6vQfWaiUbOhl8WuzT+/Screen+Shot+2025-09-25+at+5.48.47+PM.png)
4. 색인을 끄려는 사이트에서 **웹사이트 관리** 버튼을 클릭하세요.

   ![웹사이트 관리 버튼](https://jumpshare.com/share/wsu7rO3Cmv5bauuQ8YXQ+/Screen+Shot+2025-09-25+at+5.51.36+PM.png)
5. **고급 설정** 탭을 클릭하세요.

   ![고급 설정 탭](https://jumpshare.com/share/LyHr1c1s9dFBTui20o0G+/Screen+Shot+2025-09-25+at+5.53.18+PM.png)
6. **WordPress Management**(WordPress 관리) 탭을 클릭하세요.

   ![WordPress Management 탭](https://jumpshare.com/share/C4TFfIum8FTH6GuGvCOD+/Screen+Shot+2025-09-25+at+5.56.21+PM.png)
7. **Discourage SEO Indexing**(SEO 색인 제한) 스위치를 **켜짐**으로 바꾸세요. 그러면 검색엔진이 사이트를 색인하지 않아요.

   ![Discourage SEO Indexing 스위치 켜짐](https://jumpshare.com/share/temmdMmZ7CIg9y3YDt5V+/Screen+Shot+2025-09-25+at+5.58.26+PM.png)

## 기능 상세 정보

이 기능이 WordPress 사이트를 어떻게 보호하는지 기술적인 내용을 살펴볼게요.

- robots.txt 수정: 사이트의 robots.txt 파일에 noindex, nofollow 규칙을 자동으로 추가해요. 검색엔진이 페이지를 수집하거나 색인하지 않도록 알려 주는 규칙이에요.
- 메타 태그 삽입: 사이트 HTML 헤더에 `<meta name="robots" content="noindex, nofollow">` 태그를 넣어 noindex 지시를 한 번 더 강조해요.
- Admin 전용 접근: Admin 권한이 있는 사용자만 SEO 색인 설정을 보거나 변경할 수 있어요.
- 실시간 반영: 설정을 바꾸면 바로 적용돼요. WordPress 파일이나 플러그인을 직접 수정할 필요가 없어요.

## 자주 묻는 질문

### 페이지별로 검색엔진 색인을 끌 수 있나요?
아니요. 지금 기능은 사이트 단위로만 동작해요. 웹사이트 전체의 색인이 꺼지고, 페이지별로 제외할 수는 없어요.

### SEO 색인을 끄면 사이트 방문자에게 영향이 있나요?
아니요. 검색엔진이 사이트를 색인하지 않게 할 뿐이에요. 사이트 성능이나 방문자의 접속에는 영향이 없어요.

### Yoast나 RankMath 같은 SEO 플러그인도 계속 쓸 수 있나요?
네, 쓸 수 있어요. 다만 색인에 관해서는 하이퍼클래스의 SEO 색인 설정이 WordPress 플러그인 설정보다 우선해요.

### 모든 종류의 봇을 막아 주나요?
아니요. 주로 규칙을 따르는 검색엔진 봇에 적용돼요. 규칙을 따르지 않는 봇이나 스크레이퍼는 접근을 시도할 수 있어요.

### SEO 색인을 끄면 Google Analytics 추적도 멈추나요?
아니요. SEO 색인을 꺼도 추적과 분석은 그대로 작동해요.

### 내 사이트가 색인되지 않는지 어떻게 확인하나요?
Google Search Console의 "URL 검사(URL Inspection)" 도구를 사용해 보세요. 사이트의 robots.txt와 페이지 HTML 소스를 직접 열어 noindex 설정이 들어갔는지 확인할 수도 있어요.

### Admin이 아닌 사용자도 SEO 색인 설정을 바꿀 수 있나요?
아니요. 하이퍼클래스 안의 WordPress 설치에서는 Admin 권한 사용자만 이 설정을 관리할 수 있어요.
