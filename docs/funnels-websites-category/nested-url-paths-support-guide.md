---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005651-nested-url-paths-support-guide
번역일: 2026-04-23
카테고리: 퍼널/웹사이트
---

# 중첩 URL 경로 지원 가이드

**목차**

- [개요](#개요)
- [중첩 URL 경로 사용 방법](#중첩-URL-경로-사용-방법)
- [경로 검증 및 제한사항](#경로-검증-및-제한사항)
- [모범 사례](#모범-사례)
- [결론](#결론)

---

## 개요

중첩 URL 경로 기능을 사용하면 슬래시(/)를 이용해 퍼널, 웹사이트, 웨비나의 계층적 URL을 만들 수 있습니다. 기존처럼 슬래시가 하이픈으로 변환되는 대신, 콘텐츠 구조를 반영하는 의미 있는 중첩 경로를 정의하여 SEO를 개선할 수 있습니다.

### 중첩 경로 예시

- `/resources/courses/sales-funnel`
- `/webinars/2025/summer-session`
- `/campaigns/holiday/black-friday-offer`
- `/funnels/product-launch/step-1`

---

## 중첩 URL 경로 사용 방법

- 퍼널, 웹사이트, 이커머스 또는 웨비나 페이지/스텝으로 이동합니다.
- Edit(편집) 버튼을 클릭합니다.
- 원하는 중첩 URL 경로를 입력하되, /를 사용하여 계층 구조를 만듭니다.

![중첩 URL 경로 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049239626/original/BF-DUCc6mvWmzeP9xxngpd-sgXlHEzfyiw.png?1751467585)

---

## 경로 검증 및 제한사항

### 예약된 경로

특정 경로는 시스템 기능을 위해 예약되어 있어 사용할 수 없습니다. 이러한 경로를 사용하려고 하면 오류 메시지가 표시됩니다.

#### 시스템 경로

- `/b/` — 블로그 기능 전용
- `/c/` — 카테고리 전용
- `/product/` — 상품 페이지 전용
- `/collections/` — 컬렉션 페이지 전용
- `/post/` — 블로그 포스트 전용
- `/category/` — 카테고리 페이지 전용
- `/author/` — 작성자 페이지 전용
- `/tag/` — 태그 페이지 전용
- `/store/account` — 스토어 계정 기능 전용

![예약된 경로 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049239669/original/8yZSJ0IowNDeVdQryCAZkkcSjg0BMuI3-A.png?1751467629)

---

## 모범 사례

- **끝 슬래시 피하기** - 끝에 슬래시가 없는 깔끔한 경로를 사용하세요. (예: `/path/subpath/`가 아닌 `/path/subpath`)
- **이중 슬래시 제거** - 경로에 중복 슬래시가 없도록 하세요. (예: `/path//subpath`가 아닌 `/path/subpath`)
- **빈 세그먼트 없애기** - 슬래시 사이에 빈 구간을 두지 마세요. (예: `/category//item`이 아닌 `/category/item`)
- **설명적이고 의미 있는 경로 사용** - 읽기 쉽고 직관적인 URL로 콘텐츠와 계층 구조를 명확히 전달하세요. (예: `/b/123`이 아닌 `/blog/seo-tips`)
- **논리적으로 구성** - 방문자에게 이해되기 쉽고 사이트 네비게이션이나 콘텐츠 계층 구조를 반영하는 방식으로 경로를 구성하세요.
- **SEO 최적화** - 잘 구성된 키워드가 풍부한 경로는 명확한 콘텐츠 관계를 나타내어 검색 엔진 순위를 향상시킬 수 있습니다.

---

## 결론

중첩 URL 경로는 콘텐츠 구성과 사이트 SEO 개선에 강력한 유연성을 제공합니다. 이 가이드라인을 따르고 예약된 경로를 피함으로써 사용자 친화적이면서 검색 엔진에 최적화된 잘 구조화된 계층적 웹사이트를 만들 수 있습니다.

항상 중첩 경로를 철저히 테스트하고, 전체 사이트 아키텍처와 마케팅 목표에 부합하는지 확인하세요.

---
*원문 최종 수정: Wed, 2 Jul, 2025 at 9:47 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*