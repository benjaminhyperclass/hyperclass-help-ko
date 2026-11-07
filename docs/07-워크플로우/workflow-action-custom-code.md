---
원문: /support/solutions/articles/155000003362-workflow-action-custom-code
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Code(커스텀 코드)

**Custom Code**(커스텀 코드) 액션은 워크플로우 안에서 JavaScript나 Python 코드를 직접 작성해 실행하는 액션이에요. 이전 단계의 값을 코드에서 불러와 계산이나 처리를 하고, 그 결과를 다음 단계에서 쓸 수 있어요.

## 개요

**Custom Code** 액션을 쓰면 워크플로우의 기능을 직접 짠 JavaScript와 Python 코드로 넓힐 수 있어요. 이전 단계의 속성을 코드에 넣어 연산하고, 결과를 반환해 이후 단계에서 활용하세요.

## 액션 이름

**Custom Code**

## 액션 설명

**Custom Code** 액션은 워크플로우 안에서 JavaScript와 Python 코드를 실행해요. 데이터를 처리한 뒤 결과를 반환하면, 그 결과를 이어지는 단계에서 쓸 수 있어요.

## Action Details(액션 상세 정보)

### 설정 방법

1. **Action Name**(액션 이름): 코드 단계의 목적이 드러나는 이름을 입력하세요.
2. **Language**(언어): 기본값은 JavaScript예요. 드롭다운에서 Python을 선택할 수도 있어요.
3. **Property to Include in Code**(코드에 포함할 속성): 코드에서 쓸 값을 키-값 쌍으로 추가하세요.
   - 키는 코드에서 쓸 이름이에요. 값은 직접 입력하거나, 이전 워크플로우 단계에서 가져올 수 있어요.
   - 코드에서는 `inputData.<key>` 형태로 값을 불러와요. 예를 들어 키가 `number1`이면 코드에서 `inputData.number1`로 접근해요.
4. **Code**(코드):
   - 앞 단계에서 연결한 값을 처리하는 JavaScript 또는 Python 코드를 작성하세요.
   - 출력은 JavaScript/Python 객체나 객체 배열 형태여야 해요. 예: `output = { result: sum }`

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 워크플로우에 표시될 액션의 이름이에요. | 예 |
| **Language** | 커스텀 코드에 쓰는 프로그래밍 언어예요(기본값은 JavaScript). | 예 |
| **Property To Include In Code** | 코드 안에서 쓸 필드로, 이전 단계에서 연결해 와요. 코드에서는 inputData.keyName으로 값에 접근해요. | 예 |
| **Code** | 원하는 작업을 수행하는 JavaScript 코드예요. 출력은 JavaScript 객체여야 해요.| 예 |

## 예시

```
javascript

Copy code

// This is wrapped in an async function
const sum = inputData.number1 + inputData.number2;

// Return the result as a JavaScript object
output = { result: sum };
```

이 예시는 연결한 속성 `number1`과 `number2`의 두 숫자를 더해서, 그 합을 출력해요.
