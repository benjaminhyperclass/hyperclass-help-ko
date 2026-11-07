---
원문: /support/solutions/articles/155000007400-html-editor-security-validation
번역일: 2026-11-07
카테고리: 06-사이트
---

# HTML 편집기 보안 검사

폼, 설문, 퀴즈의 HTML 편집기에 안전하지 않은 JavaScript가 저장되지 않도록 막는 보안 검사 기능을 설명해요. 코드를 저장할 때 오류가 뜨는 이유와 해결 방법을 알고 싶을 때 참고하세요.

## 개요

다음 화면의 **HTML Code Editor**(HTML 코드 편집기)에 보안 검사가 추가되었어요.

- 폼
- 설문
- 퀴즈

이 검사는 안전하지 않은 JavaScript가 저장되는 것을 막아 아래 위험으로부터 계정을 보호해요.

- 크로스 사이트 스크립팅(XSS)
- 쿠키 탈취
- 토큰·세션 가로채기
- 계정 탈취 시도

안전하지 않은 코드가 발견되면 저장이 차단되고 오류 메시지가 표시돼요.

---

## 작동 방식

사용자 지정 HTML을 편집할 때는 다음과 같이 진행해요.

1. 폼, 설문, 퀴즈 빌더를 여세요.
2. **HTML element**(HTML 요소)를 추가하세요.
3. **Edit HTML**(HTML 편집)을 클릭하세요.
4. 코드를 입력하세요.

편집기는 입력한 코드를 실시간으로 자동 검사해요.

보안 문제가 발견되면 다음과 같이 표시돼요.

- 편집기 아래에 빨간색 오류 메시지가 나타나요.
- **저장** 버튼이 비활성화돼요.
- 안전하지 않은 코드를 지워야 저장할 수 있어요.

---

## 차단되는 코드

편집기는 민감한 정보가 노출될 수 있는 위험도 높은 JavaScript 패턴을 차단해요.

### 1. 쿠키 접근

차단되는 코드:

```
document.cookie
```

아래 코드도 차단돼요.

```
document['cookie']
window['document']['cookie']
```

쿠키에는 인증 정보가 들어 있을 수 있어요. 쿠키에 접근하면 계정이 탈취될 수 있어요.

---

### 2. `eval()` 사용

차단되는 코드:

```
eval("alert('hello')")
```

`eval()`은 임의의 문자열을 코드로 실행해요. 악성 스크립트를 숨기는 데 쓰일 수 있어요.

---

### 3. `new Function()` 사용

차단되는 코드:

```
new Function('return document.cookie')
```

문자열로 된 코드를 동적으로 실행하기 때문에 `eval()`과 같은 위험이 있어요.

---

### 4. 문자열을 넘기는 `setTimeout()` 사용

차단되는 코드:

```
setTimeout("alert('hi')", 1000)
```

허용되는 코드:

```
setTimeout(function () {
  alert('hi')
}, 1000)
```

문자열을 넘기면 브라우저가 그 문자열을 코드로 실행해요.

---

### 5. 문자열을 넘기는 `setInterval()` 사용

차단되는 코드:

```
setInterval('checkStatus()', 5000)
```

허용되는 코드:

```
setInterval(() => checkStatus(), 5000)
```

---

### 6. `localStorage` 읽기

차단되는 코드:

```
localStorage.getItem("authToken")
```

`localStorage`에서 값을 읽으면 세션이나 인증 정보 같은 민감한 데이터가 노출될 수 있어요.

허용되는 코드:

```
localStorage.setItem("theme", "dark")
localStorage.removeItem("temp")
localStorage.clear()
```

---

## 허용되는 코드

다음은 차단되지 않아요.

- 일반 HTML
- 안전한 JavaScript 로직
- 화살표 함수
- 타이머에서 함수 참조를 쓰는 경우`localStorage`에 값 쓰기`sessionStorage` 사용

---

## 알아 두세요

- 대소문자를 구분하지 않고 검사해요(`eval`, `EVAL` 등).
- 같은 문제가 여러 번 나와도 오류 메시지는 한 번만 표시돼요.
- HTML 입력란이 비어 있어도 저장할 수 있어요.
- 스크립트가 없는 순수 HTML은 저장할 수 있어요.

---

## 코드가 차단될 때

다음과 같이 고치면 문제를 해결할 수 있어요.

- 쿠키에 직접 접근하는 코드를 지워요.`eval()`이나 `new Function()`을 쓰지 않아요.
- 문자열로 된 타이머 대신 함수 참조를 사용해요.`localStorage`에서 인증 정보나 세션 데이터를 읽지 않아요.
