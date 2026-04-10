---

번역일: 2026-04-08
카테고리: 07-워크플로우 > 연동 워크플로우 액션
---

# 워크플로우 액션 - 커스텀 코드

**목차**

- [개요](#개요)
- [액션명](#액션명)
- [액션 설명](#액션-설명)
- [액션 세부사항](#액션-세부사항)
- [예제](#예제)

## 개요

**커스텀 코드(Custom Code)** 액션을 사용하면 JavaScript 코드를 작성하고 실행하여 워크플로우의 기능을 확장할 수 있습니다. 이전 단계의 속성을 포함하고, 작업을 수행한 다음, 후속 단계에서 사용할 출력을 반환할 수 있습니다.

## 액션명

**커스텀 코드(Custom Code)**

## 액션 설명

**커스텀 코드(Custom Code)** 액션은 워크플로우 내에서 JavaScript 코드를 실행할 수 있게 해주며, 사용자가 시스템의 기능을 확장할 수 있도록 합니다. 이 액션은 데이터를 처리하고 워크플로우의 후속 단계에서 사용할 수 있는 출력을 반환할 수 있습니다.

## 액션 세부사항

![커스텀 코드 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467316/original/J_XDJ_paKZxPI-1e39hRdh68vOEr0s-dbQ.png?1725819732)

### **설정 방법**

- **액션명(Action Name):** 커스텀 코드 단계의 목적을 나타내는 이름을 지정하세요.
- **언어(Language):** 기본값으로 JavaScript가 설정됩니다. 현재 다른 언어는 지원되지 않습니다.
- **코드에 포함할 속성(Property to Include in Code):** 키-값 쌍을 추가합니다. 키는 코드에서 사용될 것이고, 값은 하드코딩하거나 이전 워크플로우 단계에서 동적으로 매핑할 수 있습니다.
- 코드 내에서 inputData.<키> 형태로 참조하여 이러한 키-값 쌍을 사용하세요. 예를 들어, 키가 number1이라면 코드에서 inputData.number1로 접근할 수 있습니다.
- **코드(Code):** 이전 단계에서 매핑된 값을 처리할 JavaScript 코드를 작성하세요.
- 출력은 JavaScript 객체 또는 객체 배열 형태가 되도록 하세요. 예시: output = { result: sum }.

| 필드명 | 설명 | 필수 |
|--------|------|------|
| 액션명(Action Name) | 워크플로우에서 표시될 액션의 이름 | 예 |
| 언어(Language) | 커스텀 코드에 사용할 프로그래밍 언어 (기본값: JavaScript) | 예 |
| 코드에 포함할 속성(Property To Include In Code) | 이전 단계에서 매핑되어 코드 내에서 사용할 필드. 코드 내에서 inputData.키이름으로 값에 접근 | 예 |
| 코드(Code) | 원하는 작업을 수행할 JavaScript 코드. 출력은 JavaScript 객체여야 함 | 예 |

## 예제

```javascript
// 이것은 async 함수로 감싸집니다
const sum = inputData.number1 + inputData.number2;

// 결과를 JavaScript 객체로 반환
output = { result: sum };
```

이 예제는 매핑된 속성 number1과 number2에서 두 숫자를 더하고 그 합계를 출력합니다.

---
*원문 최종 수정: 2024년 9월 8일*
*Hyperclass 사용 가이드 — hyperclass.ai*