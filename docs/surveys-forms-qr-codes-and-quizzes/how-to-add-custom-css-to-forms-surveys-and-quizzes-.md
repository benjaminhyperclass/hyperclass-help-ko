---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000006728-how-to-add-custom-css-to-forms-surveys-and-quizzes-
번역일: 2026-04-23
카테고리: 설문·폼·QR코드·퀴즈
---

# 폼, 설문, 퀴즈에 커스텀 CSS 추가하는 방법

커스텀 CSS를 사용해서 폼(Forms), 설문(Surveys), 퀴즈(Quizzes)의 디자인을 쉽게 변경할 수 있어요. 아래 간단한 단계를 따라해 보세요.

## 1. 커스텀 CSS를 추가하는 위치

### 옵션 1: 폼, 설문, 퀴즈 내부에 추가 (권장)

- Sites(사이트) → Form Builder(폼 빌더) (또는 Survey Builder(설문 빌더) / Quiz Builder(퀴즈 빌더))로 이동하세요.

- 폼을 열어주세요.

- Styles(스타일) 탭 → Advanced Section(고급 섹션) → Custom CSS(커스텀 CSS)를 클릭하세요.

- CSS 코드를 붙여넣으세요.

- Save(저장)를 클릭한 후 Publish(발행)하세요.

이 방법은 폼이나 설문 자체 내부의 모양을 업데이트합니다.

### 옵션 2: 퍼널이나 웹사이트 페이지에 추가

폼이 페이지에 삽입되어 있는 경우:

- 빌더에서 퍼널(Funnel) 또는 웹사이트(Website)를 열어주세요.

- Settings(설정) → Custom CSS(커스텀 CSS)로 이동하세요.

- 여기에 CSS를 추가해서 폼 주변 컨테이너(여백, 패딩, 배경색 등)를 스타일링하세요.

⚠ 폼이 iframe 내에서 로드되기 때문에 여기서는 입력 필드나 버튼을 스타일링할 수 없습니다.

### 옵션 3: 외부 사이트에서 (WordPress 등)

iframe 컨테이너는 스타일링할 수 있지만, 내부 폼 필드는 변경할 수 없습니다.

## 2. 기본 CSS 예시

### A. 입력 필드

---
*원문 최종 수정: Thu, 16 Oct, 2025 at 7:00 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*