---
원문: https://help.gohighlevel.com/support/solutions/articles/48001158589-scroll-to-elements-or-sections-in-websites-or-funnels
번역일: 2026-11-07
카테고리: 06-사이트
---

# 웹사이트·퍼널에서 특정 섹션으로 스크롤 이동 설정하기

버튼, 링크, 메뉴 항목을 클릭하면 웹사이트나 퍼널 페이지의 원하는 섹션으로 자동 스크롤되게 만들 수 있어요. 방문자가 페이지 안에서 부드럽게 이동할 수 있어서 사용 경험이 좋아져요.

## 요소로 스크롤이란?

**Scroll to Element**(요소로 스크롤) 기능을 쓰면 클릭할 수 있는 모든 항목을 같은 페이지의 특정 섹션에 연결할 수 있어요. 랜딩 페이지나 긴 콘텐츠 페이지를 더 편하게 둘러볼 수 있어요.

---

## 요소로 스크롤의 장점

스크롤 이동을 활용하면 방문자가 페이지를 훑어보는 흐름이 자연스러워져요.

- 이동 제어: 페이지를 새로 불러오지 않고도 원하는 섹션으로 바로 보낼 수 있어요.
- 깔끔한 사용 경험: 콘텐츠를 자연스럽게 안내해 페이지를 그냥 떠나는 방문자를 줄이는 데 도움이 돼요.
- 맞춤 상호작용: 버튼, 링크, 내비게이션 메뉴에 모두 쓸 수 있어요.
- CTA에 적합: "요금 보기로 이동"이나 "자세히 보기" 같은 버튼에 잘 어울려요.
- 모바일 지원: 기기에 상관없이 스크롤 이동이 부드럽게 작동해요.

---

## 부드러운 스크롤

이제 스크롤 이동은 페이지가 갑자기 튀지 않고 부드럽게 움직여요.

**Scroll to Element**로 설정한 버튼, 텍스트 링크, 내비게이션 메뉴 항목을 클릭하면 선택한 섹션까지 화면이 매끄럽게 이동해요. 긴 페이지에서도 시선의 흐름이 자연스럽게 이어져요.

따로 설정할 필요는 없어요. 퍼널과 웹사이트의 모든 스크롤 이동에 자동으로 적용돼요.

---

## 스크롤 이동 설정하기

선택자를 이용해 특정 섹션으로 이동하는 링크를 만드는 방법이에요. 선택자를 한 번 복사해 두면 텍스트, 버튼, 메뉴 항목에 모두 쓸 수 있어요.

### 1단계: CSS 선택자 복사하기

스크롤 이동은 이동할 섹션의 선택자를 복사하는 것부터 시작해요. 복사한 선택자는 2단계에서 링크 끝에 붙여 넣어요.

1. 빌더에서 퍼널이나 웹사이트를 열어요.
2. 이동하려는 섹션을 클릭해요.
3. 오른쪽 패널에서 **고급** 탭으로 가요.
4. **CSS Selector**(CSS 선택자) 필드에 표시된 값을 복사해요.

![고급 탭의 CSS Selector 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047383045/original/anO66C_loo2lL1GPQvoixLANqmOIWVPvmw.png?1748448179)

### 2단계: 스크롤 방법 선택하기

CSS 선택자를 복사했다면, 아래 방법 중 하나를 골라 클릭 시 스크롤이 작동하도록 설정해요.

#### 방법 1: 텍스트에 하이퍼링크 걸기

복사한 선택자로 텍스트를 스크롤 링크로 바꿔요.

1. 링크로 만들 텍스트를 드래그해서 선택해요.
2. 서식 도구 모음에서 **링크 아이콘**을 클릭해요.
3. 페이지 전체 URL 뒤에 복사한 CSS 선택자를 붙여 입력해요. (예: `www.yourdomain.com/#section_abc12`)

![텍스트에 링크를 거는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384005/original/FijLk7q_-n8ODDI3qrTOxRZ-U5rUBdjziw.png?1748448985)

#### 방법 2: 버튼에 URL 링크 사용하기

버튼에 URL을 직접 지정해 섹션으로 스크롤해요.

1. 빌더에서 버튼을 선택해요.
2. **Button Actions**(버튼 액션)에서 **Link To**(링크 대상) 드롭다운을 클릭하고 **웹사이트 URL**을 선택해요.
3. 페이지 전체 URL 뒤에 복사한 CSS 선택자를 붙여 입력해요. (예: `www.yourdomain.com/#section_abc12`)

![버튼에 웹사이트 URL을 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384459/original/WsennYVa7c4fJYehxIZq4NuUfrgJSG6tYw.png?1748449481)

#### 방법 3: 버튼에 Scroll to Element 액션 사용하기

하이퍼클래스에 기본으로 들어 있는 스크롤 기능을 사용해요.

1. 빌더에서 버튼을 선택해요.
2. **Button Actions**에서 **Link To** 드롭다운을 클릭하고 **Scroll to Element**를 선택해요.
3. 드롭다운에서 버튼을 눌렀을 때 이동할 섹션을 선택해요.

![버튼에 Scroll to Element 액션을 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384714/original/jwaXrN6ERXJq6E693Nt9RYvzs5sPw2Ex-w.png?1748449782)

#### 방법 4: 내비게이션 메뉴 항목에서 스크롤하기

내비게이션 메뉴도 페이지의 특정 섹션으로 스크롤하도록 설정할 수 있어요.

1. **Navigation Menu**(내비게이션 메뉴)를 선택해요.
2. 메뉴 항목 옆의 **점 세 개** 아이콘을 클릭해요.
3. **이동** 필드를 **Go to website URL**(웹사이트 URL로 이동)로 바꿔요.
4. 페이지 전체 URL 뒤에 복사한 CSS 선택자를 붙여 입력해요. (예: `www.yourdomain.com/#section_abc12`)
5. **제출**을 클릭해요.

![내비게이션 메뉴 항목에 URL을 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384833/original/IZvf5P519qqENTLgp_ewqdwp2ZbSJxlhzQ.png?1748449923)

---

## 자주 묻는 질문

### 퍼널의 다른 단계로 스크롤 이동할 수 있나요?
아니요. 스크롤 이동은 같은 페이지 안에서만 작동해요.

### 모바일에서도 작동하나요?
네, 스크롤 기능은 모든 기기에서 작동해요.

### 스크롤이 작동하지 않아요. 어떻게 해야 하나요?
선택자가 올바른지, 그리고 `#`으로 시작하는지 확인하세요. 그런 다음 페이지를 새로고침하고 다시 테스트해 보세요.

### 여러 섹션의 CSS 선택자가 같으면 어떻게 되나요?
처음 일치하는 섹션 하나만 사용돼요. 이동할 섹션마다 고유한 선택자가 되도록 해 주세요.
