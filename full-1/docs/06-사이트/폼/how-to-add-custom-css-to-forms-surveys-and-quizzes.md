---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-
번역일: 2026-11-07
카테고리: 06-사이트
---

# 폼, 설문, 퀴즈에 사용자 지정 CSS 적용하기

**사용자 지정 CSS**를 쓰면 폼, 설문, 퀴즈의 디자인을 원하는 대로 바꿀 수 있어요. 이 문서에서는 CSS를 넣는 위치, 바로 쓸 수 있는 예시 코드, 적용이 안 될 때 확인할 점을 안내해요.

---

## 1. 사용자 지정 CSS를 넣는 위치

### 방법 1: 폼, 설문, 퀴즈 안에서 넣기 (권장)

1. **사이트 > 폼 빌더**로 이동하세요. 설문이나 퀴즈라면 **설문 빌더** 또는 **퀴즈 빌더**로 이동하세요.
2. 수정할 폼을 여세요.
3. **스타일** 탭 > **고급 설정** > **사용자 지정 CSS** 섹션으로 이동하세요.
4. CSS 코드를 붙여넣으세요.
5. **저장**을 누른 다음 **게시**를 누르세요.

이 방법은 폼이나 설문 자체의 안쪽 디자인을 바꿔요.

{% hint style="info" %}
폼, 설문, 퀴즈 위쪽에 간단히 여백만 주고 싶다면 CSS를 쓰기 전에 빌더의 **스타일 > 레이아웃** 섹션에 있는 상단 여백 설정을 먼저 사용해 보세요. CSS는 **레이아웃** 패널에서 할 수 없는 세부적인 디자인 조정에 쓰는 것이 좋아요.

![스타일 > 레이아웃에서 상단 여백을 조정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061031145/original/lcu3t-1T8a_HVtwexyRA8YmVKEAA6SUR0Q.gif?1766162420)
{% endhint %}

### 방법 2: 퍼널 또는 웹사이트 페이지에서 넣기

폼이 페이지에 삽입되어 있다면 이렇게 하세요.

1. 빌더에서 해당 퍼널 또는 웹사이트를 여세요.
2. **설정 > 사용자 지정 CSS**로 이동하세요.
3. 폼을 감싸는 바깥 영역(여백, 안쪽 여백, 배경색 등)의 CSS를 여기에 추가하세요.

{% hint style="warning" %}
폼은 iframe 안에서 불러와지기 때문에, 이 방법으로는 입력 필드나 버튼의 디자인을 바꿀 수 없어요.
{% endhint %}

### 방법 3: 외부 사이트(WordPress 등)에서 넣기

외부 사이트에서도 iframe을 감싸는 영역의 디자인은 바꿀 수 있어요. 하지만 iframe 안에 있는 폼 필드는 바꿀 수 없어요.

---

## 2. 기본 CSS 예시

### A. 입력 필드

```
input, textarea, select {  border: 1px solid #ccc;  border-radius: 8px;  padding: 10px;  font-size: 16px; }
input:focus, textarea:focus {  border-color: #7C3AED;  box-shadow: 0 0 4px rgba(124, 58, 237, 0.3); }
```

### B. 제출 버튼

```
button[type="submit"] {  background-color: #7C3AED;  color: white;  padding: 12px 20px;  border: none;  border-radius: 8px;  font-size: 16px;  cursor: pointer; }
button[type="submit"]:hover {  background-color: #6931d4; }
```

### C. 레이블과 오류 메시지

```
label {  font-weight: 600;  color: #111827; }
.hl-error, .error-message {  color: #DC2626;  font-size: 14px; }
```

### D. 설문/퀴즈 진행률 표시줄

```
.hl-progress .fill {  background-color: #7C3AED;  transition: width 0.3s ease; }
```

### E. 모바일에 맞춘 스타일

```
@media (max-width: 480px) {  form {    padding: 0 10px;  }  button[type="submit"] {    width: 100%;  } }
```

---

## 3. 설문 이동 버튼 스타일 지정하기

아래 CSS를 쓰면 설문의 **이전**, **다음**, **제출** 버튼도 꾸밀 수 있어요.

```
.ghl-footer-preview .ghl-submit-btn {  background-color: #28A745 !important;  color: #FFFFFF !important; }
 .ghl-footer-preview .ghl-footer-next {  background-color: #28A745 !important;  color: #FFFFFF !important; }
 .ghl-footer-preview .ghl-footer-back {  background-color: #28A745 !important;  color: #FFFFFF !important; }
```

{% hint style="info" %}
`#28A745`를 브랜드 색상 코드로 바꾸면 테마에 맞출 수 있어요.
{% endhint %}

---

## 4. 문제 해결

### CSS가 적용되지 않아요

- 폼, 설문, 퀴즈 안에 있는 **사용자 지정 CSS** 영역에 CSS를 넣었는지 확인하세요.
- **게시**를 누른 다음 브라우저를 새로고침하거나 시크릿 모드로 열어 보세요.
- 폼이 페이지에 삽입되어 있다면, 페이지 CSS는 iframe 때문에 폼 안쪽에 적용되지 않아요.

---

## 5. 빠른 팁

- 수정한 뒤에는 항상 **저장**과 **게시**를 하세요.
- 요소의 클래스 이름은 마우스 오른쪽 버튼 > 검사(Inspect)로 찾을 수 있어요.
- `!important`를 너무 많이 쓰지 마세요.
- 데스크톱과 모바일에서 모두 어떻게 보이는지 확인하세요.

---

## 6. 복사해서 쓰는 예시 템플릿

아래 코드를 폼의 **사용자 지정 CSS** 입력란에 붙여넣으세요.

```
input, textarea, select {  width: 100%;  border: 1px solid #D0D5DD;  border-radius: 8px;  padding: 10px; }
label { font-weight: 600; color: #111827; } button[type="submit"] {  background: #7C3AED;  color: #fff;  padding: 12px 18px;  border: none;  border-radius: 8px;  cursor: pointer; }
button[type="submit"]:hover {  background: #6931d4; }
```

---

모두 끝났어요! 이제 폼, 설문, 퀴즈에 설정한 스타일이 적용되고, 버튼도 브랜드에 맞게 꾸며져요.
