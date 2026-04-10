---

번역일: 2026-04-07
카테고리: 06-사이트 > 폼
---

# 커스텀 HTML/JavaScript로 커스텀 필드 자동 채우기 및 제출 시 저장하기

폼이나 설문에서 기존 커스텀 필드를 커스텀 HTML/JavaScript로 자동 채우고, 제출할 때 저장하는 방법은 간단하고 직관적입니다.

## 커스텀 필드 ID 확인하기:

1. 폼의 미리보기 페이지로 이동하세요.

2. 페이지에서 마우스 오른쪽 버튼을 클릭하고 '검사(Inspect)'를 선택하세요.

3. 마우스 포인터 도구를 선택하세요.

4. "커스텀 필드"를 클릭하세요.

5. name과 ID 속성에서 ID를 복사하세요.

## 예시:

`xxTrustedFormCertUrl`라는 이름의 커스텀 필드를 만들었다면, 위의 단계를 따라 해당 ID를 확인하세요.

![커스텀 필드 ID 확인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030589638/original/Ak0ELPT01APZudMgXz-2EIlDZnEjRjwL3A.jpeg?1723028691)

**참고:** `myData`는 예시일 뿐입니다. 실제 커스텀 HTML/JavaScript 코드에서는 캡처된 데이터가 어디에 있는지 파악하여 `myData`를 실제 데이터로 교체해야 합니다.

```javascript
document.getElementsByName('customFieldId')[0].value = myData;    
document.getElementsByName('customFieldId')[0].dispatchEvent(new Event("input"));
```

---
*원문 최종 수정: 2024년 8월 7일*
*Hyperclass 사용 가이드 — hyperclass.ai*