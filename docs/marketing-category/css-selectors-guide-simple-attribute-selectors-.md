---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007357-css-selectors-guide-simple-attribute-selectors-
번역일: 2026-04-23
카테고리: 마케팅
---

# CSS 선택자 가이드: 기본 및 속성 선택자

CSS 선택자는 스타일을 적용하고 싶은 HTML 요소를 찾아내는 데 사용됩니다. 이 가이드에서는 가장 자주 사용되는 선택자들을 다뤄서 여러분이 정확하고 자신 있게 요소를 타겟팅할 수 있도록 도와드립니다.

## 기본 선택자

기본 선택자는 다음 기준으로 요소를 타겟팅합니다:

- 요소 이름
- ID
- 클래스
- 모든 것을 선택하는 범용 선택자 (*)

### 주요 기본 선택자

| 선택자 | 예시 | 역할 |
|--------|------|------|
| element | p | 모든 `<p>` 요소를 선택 |
| #id | #firstname | id="firstname"인 요소를 선택 |
| * | * | 모든 요소를 선택 |
| .class | .intro | class="intro"인 모든 요소를 선택 |
| element.class | p.intro | class가 "intro"인 `<p>` 요소를 선택 |

### 사용 예시

```css
/* 모든 paragraph 요소 선택 */
p {
    color: blue;
}

/* 특정 ID를 가진 요소 선택 */
#firstname {
    font-weight: bold;
}

/* 모든 것 선택 (범용 선택자) */
* {
    margin: 0;
    padding: 0;
}

/* 클래스를 가진 모든 요소 선택 */
.intro {
    font-size: 18px;
}

/* intro 클래스를 가진 <p> 요소만 선택 */
p.intro {
    background-color: yellow;
}
```

## 속성 선택자

속성 선택자는 속성의 존재 여부나 값에 따라 요소를 타겟팅합니다.

### 주요 속성 선택자

| 선택자 | 예시 | 설명 |
|--------|------|------|
| [attribute] | [lang] | lang 속성을 가진 요소 |
| [attribute=value] | [lang="it"] | 속성 값이 정확히 일치 |
| [attribute~=value] | [title~="flower"] | 속성에 "flower"라는 단어가 포함 |
| [attribute\|=value] | [lang\|="en"] | 값이 "en"이거나 "en-"으로 시작 |
| [attribute^=value] | [href^="https"] | 속성이 "https"로 시작 |
| [attribute$=value] | [href$=".pdf"] | 속성이 ".pdf"로 끝남 |
| [attribute*=value] | [href*="w3schools"] | 속성에 "w3schools"가 포함 |

### 사용 예시

```css
/* lang 속성을 가진 요소 */
[lang] {
    border: 1px solid gray;
}

/* 정확한 일치 */
[lang="it"] {
    font-style: italic;
}

/* title에 "flower"라는 단어가 포함된 요소 */
[title~="flower"] {
    color: green;
}

/* lang이 en이거나 en-으로 시작하는 요소 */
[lang|="en"] {
    text-decoration: underline;
}

/* https로 시작하는 링크 */
[href^="https"] {
    color: green;
}

/* .pdf로 끝나는 링크 */
[href$=".pdf"] {
    background-image: url("pdf-icon.png");
}

/* w3schools가 포함된 링크 */
[href*="w3schools"] {
    font-weight: bold;
}
```

## 실제 사용 예시

### 예시 1: 외부 링크 스타일링

```css
/* 외부 링크 */
a[href^="http"] {
    color: blue;
    text-decoration: underline;
}

/* PDF 링크에 아이콘 추가 */
a[href$=".pdf"]::after {
    content: " 📄";
}
```

### 예시 2: 폼 스타일링

```css
/* 필수 입력 필드 */
input[required] {
    border: 2px solid red;
}

/* 텍스트 입력 필드 */
input[type="text"] {
    padding: 10px;
    border-radius: 4px;
}

/* 이메일 입력 필드 */
input[type="email"] {
    background-color: #f0f0f0;
}
```

### 예시 3: 선택자 조합하기

```css
/* container 클래스를 가지고 data-theme 속성이 있는 div */
div.container[data-theme] {
    padding: 20px;
}

/* btn 클래스를 가진 submit 버튼 */
button.btn[type="submit"] {
    background-color: green;
    color: white;
}
```

## 빠른 참고 치트시트

| 목적 | 선택자 |
|------|--------|
| 특정 타입의 모든 요소 선택 | element (div, p, a) |
| ID로 선택 | #idname |
| 클래스로 선택 | .classname |
| 모든 것 선택 | * |
| 속성 보유 | [attr] |
| 속성 값 일치 | [attr="value"] |
| 속성 값으로 시작 | [attr^="value"] |
| 속성 값으로 끝남 | [attr$="value"] |
| 속성 값 포함 | [attr*="value"] |

## 활용 팁

### 특이성(Specificity)이 중요해요

- `#id`는 `.class`보다 강해요
- `.class`는 `element`보다 강해요

### 정확한 타겟팅을 위해 선택자를 조합하세요

```css
div.container[data-active="true"]
```

이 선택자는 다음 조건을 모두 만족하는 요소만 선택해요:
- `<div>` 요소
- "container" 클래스를 가짐
- data-active="true" 속성을 가짐

### 대소문자 구분

속성 선택자는 기본적으로 대소문자를 구분해요. 대소문자 구분 없이 사용하려면 `i`를 추가하세요:

```css
[href$=".PDF" i]
```

### 동적 스타일링에 최적

속성 선택자는 JavaScript 없이도 data-* 속성을 활용한 동적 스타일링에 완벽해요.

---
*원문 최종 수정: 2026-02-12*
*Hyperclass 사용 가이드 — hyperclass.ai*