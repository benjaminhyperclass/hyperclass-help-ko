---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001158589-scroll-to-elements-or-sections-in-websites-or-funnels
번역일: 2026-10-02
카테고리: 06-사이트 > 퍼널-웹사이트
---

# 웹사이트 또는 퍼널에서 특정 요소/섹션으로 스크롤 이동하기

이 아티클에서는 버튼, 링크, 메뉴 항목을 클릭했을 때 웹사이트 또는 퍼널 페이지의 특정 섹션으로 자동 스크롤 이동하도록 설정하는 방법을 안내해요. 사용자 경험을 개선하고 부드러운 탐색 흐름을 만드는 데 유용한 기능이에요.

---

# 스크롤 이동(Scroll to Element)이란?

스크롤 이동 기능을 사용하면 클릭 가능한 모든 요소(요소/엘리먼트)를 페이지 내 특정 섹션(섹션)에 연결할 수 있어요. 특히 랜딩 페이지나 긴 분량의 콘텐츠에서 페이지를 더 동적이고 사용하기 편하게 만들어줘요.

---

## 스크롤 이동의 주요 장점

스크롤 이동 액션(액션)을 이해하고 활용하면 사용자 흐름을 매끄럽게 만들고 자연스러운 상호작용을 구성할 수 있어요.

- **탐색 제어**: 페이지를 새로고침하지 않고도 사용자를 원하는 섹션으로 이동시킬 수 있어요.
- **깔끔한 UX**: 콘텐츠를 자연스럽게 안내해 이탈률을 줄이는 데 도움이 돼요.
- **커스텀 인터랙션**: 버튼, 링크, 네비게이션 메뉴(네비게이션 메뉴) 모두에 적용할 수 있어요.
- **CTA 최적화**: "가격 보러 가기", "더 알아보기" 같은 CTA(행동 유도) 버튼에 적합해요.
- **모바일 친화적**: 모든 기기에서 부드럽게 작동해요.

---

## 부드러운 스크롤 효과

이제 스크롤 이동 액션은 갑작스럽게 화면이 전환되는 대신, 부드러운 스크롤(smooth scrolling) 효과로 작동해요.

사용자가 "Scroll to Element(요소로 스크롤)"로 설정된 버튼, 텍스트 링크, 네비게이션 메뉴 항목을 클릭하면 페이지가 선택한 섹션으로 자연스럽게 이동해요. 이를 통해 더 자연스러운 탐색 경험을 제공하고, 특히 긴 페이지에서 시각적 흐름이 더 매끄러워져요.

별도의 설정이 필요하지 않아요. 부드러운 스크롤 효과는 모든 퍼널과 웹사이트의 스크롤 이동 액션에 자동으로 적용돼요.

---

## 스크롤 이동 설정하기

간단한 선택자(selector) 기반 연결 방식을 사용해 특정 섹션으로 스크롤 이동하는 방법을 알아볼게요. 선택자를 복사한 후에는 텍스트, 버튼, 메뉴 항목 어디에든 적용할 수 있어요.

### 1단계: CSS 선택자(CSS Selector) 복사하기

모든 스크롤 이동 설정은 먼저 이동하려는 섹션의 선택자를 가져오는 것부터 시작해요. 이 선택자는 2단계에서 링크 끝에 붙여넣게 돼요.

- 빌더(페이지 빌더)에서 퍼널 또는 웹사이트를 엽니다.
- 스크롤 이동 대상으로 삼을 섹션을 클릭하세요.
- 오른쪽 패널에서 Advanced(고급) 탭으로 이동하세요.
- CSS Selector(CSS 선택자) 필드에 표시된 값을 복사하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047383045/original/anO66C_loo2lL1GPQvoixLANqmOIWVPvmw.png?1748448179)

### 2단계: 스크롤 방식 선택하기

CSS 선택자를 복사했다면, 사용자가 클릭했을 때 스크롤 동작이 실행되도록 다음 방법 중 하나를 선택하세요.

#### 방법 1: 텍스트에 섹션 하이퍼링크 걸기

복사한 선택자를 사용해 텍스트를 클릭 가능한 스크롤 링크로 만드는 방법이에요.

- 원하는 텍스트를 드래그해서 선택하세요.
- 서식 도구 모음에서 링크(Link) 아이콘을 클릭하세요.
- 전체 페이지 URL + 복사해둔 CSS 선택자를 입력하세요. (예: *www.yourdomain.com/#section_abc12*)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384005/original/FijLk7q_-n8ODDI3qrTOxRZ-U5rUBdjziw.png?1748448985)

#### 방법 2: 버튼에 URL 링크 사용하기

버튼에 직접 URL을 지정해서 특정 섹션으로 스크롤 이동시키는 방법이에요.

- 빌더에서 버튼을 선택하세요.
- Button Actions(버튼 액션) 항목에서 Link To(연결 대상) 드롭다운을 클릭하고 Website URL(웹사이트 URL)을 선택하세요.
- 전체 페이지 URL + 복사해둔 CSS 선택자를 입력하세요. (예: www.yourdomain.com/#section_abc12)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384459/original/WsennYVa7c4fJYehxIZq4NuUfrgJSG6tYw.png?1748449481)

#### 방법 3: 버튼에 Scroll to Element 액션 사용하기

하이퍼클래스 자체 제공 스크롤 기능을 이용해 섹션으로 이동시키는 방법이에요.

- 빌더에서 버튼을 선택하세요.
- Button Actions(버튼 액션) 항목에서 Link To(연결 대상) 드롭다운을 클릭하고 Scroll to Element(요소로 스크롤)를 선택하세요.
- 드롭다운에서 버튼을 클릭했을 때 이동할 섹션을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384714/original/jwaXrN6ERXJq6E693Nt9RYvzs5sPw2Ex-w.png?1748449782)

#### 방법 4: 네비게이션 메뉴 항목 스크롤 이동으로 설정하기

네비게이션 메뉴 항목도 페이지 내 특정 섹션으로 스크롤 이동하도록 설정할 수 있어요.

- 네비게이션 메뉴를 선택하세요.
- 메뉴 항목 옆의 점 3개(⋮) 아이콘을 클릭하세요.
- Go to(이동 대상) 필드를 **Go to website URL(웹사이트 URL로 이동)**로 변경하세요.
- 전체 페이지 URL + 복사해둔 CSS 선택자를 입력하세요. (예: www.yourdomain.com/#section_abc12)
- Submit(제출) 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384833/original/IZvf5P519qqENTLgp_ewqdwp2ZbSJxlhzQ.png?1748449923)

---

## 자주 묻는 질문

**Q: 서로 다른 퍼널 단계(퍼널 단계) 사이에서도 스크롤 이동이 되나요?**
아니요. 스크롤 이동은 같은 페이지 내에서만 작동해요.

**Q: 모바일에서도 작동하나요?**
네, 스크롤 이동 기능은 모든 기기에서 정상적으로 작동해요.

**Q: 스크롤이 작동하지 않아요. 어떻게 해야 하나요?**
선택자가 정확한지, `#`으로 시작하는지 확인해보세요. 페이지를 새로고침한 후 다시 테스트해보세요.

**Q: 여러 섹션에 같은 CSS 선택자가 적용되어 있으면 어떻게 되나요?**
첫 번째로 일치하는 섹션만 사용돼요. 각 스크롤 대상 섹션에는 고유한 선택자를 지정해주세요.

---
*원문 최종 수정: 2026-02-12*
*Hyperclass 사용 가이드 — hyperclass.ai*