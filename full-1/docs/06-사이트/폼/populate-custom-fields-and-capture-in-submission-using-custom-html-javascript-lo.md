---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003043-populate-custom-fields-and-capture-in-submission-using-custom-html-javascript-logic
번역일: 2026-11-07
카테고리: 06-사이트
---

# 사용자 지정 HTML/JavaScript로 커스텀 필드 값을 채우고 제출 시 저장하기

폼이나 설문에 있는 기존 **커스텀 필드**에 사용자 지정 HTML/JavaScript 코드로 값을 자동으로 채우면, 그 값이 제출 데이터와 함께 저장돼요. 먼저 커스텀 필드의 ID를 확인한 뒤, 아래 코드로 값을 넣으면 됩니다.

## 커스텀 필드 ID 확인하기

1. 폼의 **미리보기** 화면으로 이동하세요.
2. 페이지에서 마우스 오른쪽 버튼을 누르고 **검사**(Inspect)를 선택하세요.
3. 개발자 도구에서 마우스 포인터 도구(요소 선택 도구)를 선택하세요.
4. 폼에서 해당 **커스텀 필드**를 클릭하세요.
5. `name` 속성과 `id` 속성에 있는 ID를 복사하세요.

### 예시

`xxTrustedFormCertUrl`이라는 이름으로 커스텀 필드를 만들었다면, 위 순서대로 따라 해서 이 필드의 ID를 확인할 수 있어요.

![개발자 도구에서 커스텀 필드의 name과 id 속성을 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030589638/original/Ak0ELPT01APZudMgXz-2EIlDZnEjRjwL3A.jpeg?1723028691)

{% hint style="info" %}
코드에 있는 `myData`는 예시일 뿐이에요. 사용 중인 사용자 지정 HTML/JavaScript 코드에서 수집한 데이터가 어디에 있는지 직접 찾아서 `myData` 자리에 바꿔 넣어야 해요.
{% endhint %}

```
document.getElementsByName('customFieldId')[0].value = myData;    
document.getElementsByName('customFieldId')[0].dispatchEvent(new Event("input"));
