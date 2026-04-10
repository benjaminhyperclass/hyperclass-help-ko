---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 커스텀 HTML/자바스크립트로 커스텀 필드 자동 입력 및 제출 데이터 캡처하기

폼이나 설문에서 기존 커스텀 필드(Custom Field)를 커스텀 HTML/자바스크립트로 자동 입력하고, 제출 시 저장하는 방법은 간단하고 직관적입니다.

## 커스텀 필드 ID 가져오기:

1. 폼의 미리보기로 이동합니다.

2. 페이지에서 우클릭하고 '검사(Inspect)'를 선택합니다.

3. 마우스 포인터 도구를 선택합니다.

4. "커스텀 필드"를 클릭합니다.

5. name과 ID 속성에서 ID를 복사합니다.

## 예시:

`xxTrustedFormCertUrl`이라는 이름의 커스텀 필드를 만들었다면, 위 단계를 따라 ID를 가져오세요.

![커스텀 필드 ID 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030589638/original/Ak0ELPT01APZudMgXz-2EIlDZnEjRjwL3A.jpeg?1723028691)

참고: `myData`는 단순한 예시입니다. 실제 커스텀 HTML/자바스크립트 코드에서는 캡처된 데이터가 어디에 있는지 파악하고 `myData` 부분을 해당 데이터로 교체해야 합니다.

```javascript
document.getElementsByName('customFieldId')[0].value = myData;    
document.getElementsByName('customFieldId')[0].dispatchEvent(new Event("input"));
```

---
*원문 최종 수정: Wed, 7 Aug, 2024 at 7:11 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*