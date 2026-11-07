---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002253-workflow-action-custom-code
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Code(커스텀 코드)

**Custom Code**(커스텀 코드) 액션은 워크플로우 안에서 JavaScript 코드를 직접 실행하는 액션이에요. 기본 제공 액션으로 만들 수 없는 로직이 필요할 때 쓰세요. 코드를 직접 쓰지 않고 AI로 만들 수도 있어요.

[동영상](https://www.youtube.com/embed/4dvhpO-cvqQ?&wmode=opaque)

## Custom Code란?

Custom Code는 기본 제공 액션에 없는 로직을 직접 만들 수 있는 도구예요. 미리 만들어진 액션보다 훨씬 자유롭게 복잡한 작업을 자동화하고, 기본으로 지원하지 않는 서비스와도 연동할 수 있어요. 프리미엄 액션이에요.

## 작동 방식

### 1. 액션 추가하기

1. 워크플로우에서 "+" 아이콘을 선택해 액션을 추가해요.
2. "Custom Code"를 검색해 선택하세요.

### 2. 프로그래밍 언어

코드는 JavaScript로 작성해요. 기본으로 JavaScript가 선택되어 있어요.

![프로그래밍 언어 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024378127/original/vCWA7jTLsUWY_h-z1Ck3SO08t0yZYuihhw.png?1712923705)

### 3. 코드에 포함할 속성

커스텀 코드보다 앞에 있는 트리거나 액션의 값을 코드에서 쓰고 싶을 때 이 필드를 사용해요.

- 이전 단계의 값을 `inputData`라는 딕셔너리에 담아 코드에서 불러올 수 있어요.
- **Key**(키) 입력란에 키 이름을 입력하고, 커스텀 값 선택기에서 그 키에 넣을 값을 골라요.
- **Add Property**(속성 추가)를 클릭하면 속성을 여러 개 추가할 수 있어요.
- 예를 들어 트리거에서 고객 정보를 받아 가공해야 한다면, 고객 이름을 Input Data 필드에 추가하고 `inputData.keyName` 또는 `inputData['keyName']`으로 불러오세요.

![속성 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024378049/original/mkwVkOObW-V10c1bOgLQ0DJC0CQ4fjQ5qA.png?1712923663)

### 4. 코드 편집기

- **Code Editor**(코드 편집기)에서 코드를 작성해요.
- 참고할 수 있도록 샘플 코드가 미리 입력되어 있어요.
- 출력값도 코드 편집기 안의 코드에서 직접 작성해야 해요.
- 출력값은 JavaScript 객체 또는 객체의 배열이어야 해요.

![코드 편집기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024378027/original/kHyz3pZI-RI9S0Ca4p1YvYPCBejYVve4_A.png?1712923639)

### 5. 향상된 콘솔 지원

사용자 코드의 `console.log` 출력을 모두 기록해 보여 줘요. 코드를 디버깅하고 확인하기가 더 쉬워져요.

![콘솔 출력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027875958/original/K0BsznDm80JrDaTX-UqXEfvu2vtqvIOWhw.png?1718802876)

### 6. 외부 HTTP 요청

Custom Code에서는 외부 HTTP 요청을 보낼 수 있어요.

1. 코드 편집기 위의 **HTTP Request**(HTTP 요청) 버튼을 클릭해요.
2. 다음 중에서 요청 방식을 선택하세요.
   - **Get Method**
   - **Post Method**
   - **Put Method**
   - **Patch Method**
   - **Delete Method**
   - **Head Method**
   - **Options Method**

선택한 요청의 코드가 코드 편집기 아래쪽에 채워져요.

![HTTP 요청 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031663651/original/NWpdt8gG-WfHVs1EiibGgGHoluVDhrgsmA.png?1724674043)

![HTTP 요청 방식 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031663702/original/Ob9Ll6kArI7ngGwSq70HnuiJ-UcNJ5nc0g.png?1724674052)

![코드 편집기에 채워진 요청 코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031665905/original/4Da5WUEasD9nTmpu84KkQQfFfHeykeDoJg.png?1724675586)

### 7. 코드 정리하기

코드 편집기 아래쪽의 **Format Code**(코드 정리) 버튼을 누르면 코드를 읽기 쉬운 형태로 정리해 줘요.

- 코드가 잘 정리되어 있으면 읽고 이해하기가 쉬워요.
- 들여쓰기, 띄어쓰기, 줄바꿈이 일정하면 코드 블록이나 함수 같은 구간을 구분하기 쉬워요.

![코드 정리 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040260049/original/2i2TDFNI9mLohJ2WLF-OAPHwbzYWsPt7FQ.png?1737545882)

### 8. 코드 테스트하기

코드 테스트는 꼭 거쳐야 하는 단계예요. 테스트를 하지 않으면 코드의 출력값을 이후 단계에서 쓸 수 없어요.

1. **Test your Code**(코드 테스트) 버튼을 클릭해요. 테스트를 실행하는 팝업이 열려요.
2. 속성을 추가했다면 **Test Setup**(테스트 설정) 탭에 샘플 값을 입력해요. 속성을 추가하지 않았다면 이 과정은 건너뛰어요.
3. 팝업 안의 **Test your Code** 버튼을 클릭해 결과를 확인해요.

코드에 오류가 없으면 **Test Result Success**(테스트 성공)가 표시돼요. 오류가 있으면 **Test Result Failed**(테스트 실패)가 표시되니, 코드를 다시 확인해 오류를 고치세요.

![코드 테스트 팝업 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040704154/original/lnc7U0ylQXPQU2iUjFC1urV6_Mb0BMMvIQ.png?1738228691)

![테스트 성공 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040704225/original/LFTyDgiuqeZ56sE6AoR7bBSsZOa4sDQVeA.jpeg?1738228725)

![테스트 실패 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040704299/original/AFkt23K95-pVPzvItG697Rm9goHpeEv9uw.png?1738228746)

### 9. 실행 로그에서 입력값 확인하기

입력값은 **Execution Logs**(실행 로그)에서도 확인할 수 있어요.

1. 값을 확인하려는 실행 건으로 이동해요.
2. more details를 클릭하세요.

![실행 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040260812/original/RgJrOqeucNAjU44v9pesVqODOUf6f7u54g.png?1737546274)

![입력값 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040260857/original/rbE0v-1cwhoPJWnMg0T5DsAaTTNISu9Flw.png?1737546291)

### 10. 커스텀 코드에서 응답 바로 반환하기

커스텀 코드에서 응답을 바로 반환할 수 있어요.

주요 이점:

- 비동기 코드를 더 간결하게 작성하고, 디버깅하고, 관리할 수 있어요.
- 비동기 작업을 처리하기가 쉬워지고, 커스텀 스크립트의 전반적인 효율도 좋아져요.

![응답 반환 코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028307901/original/Hq5-hpYYprjyTt27r2647tAzQvd185kgWQ.png?1719479946)

## Custom Code AI

원하는 기능을 간단히 설명하면 AI가 커스텀 코드를 만들어 주는 **Code with AI**(AI로 코드 작성, 베타) 기능이에요.

### 기존 방식

- 워크플로우에서 커스텀 코드를 만들려면 JavaScript 코드를 처음부터 직접 작성해야 했어요. 시간이 오래 걸리고 프로그래밍 지식도 필요했어요.
- 이전 워크플로우 단계의 입력 속성을 코드에서 쓰려면 직접 연결해야 했어요.
- 적용하기 전에 코드를 직접 테스트하고 디버깅해야 했어요.
- 이 과정에는 시간과 기술이 많이 들었어요.

### 새로워진 점

AI가 코드 작성을 도와줘서 과정이 훨씬 간단해졌어요.

- AI 코드 생성: 원하는 기능을 쉬운 말로 설명하면 AI가 JavaScript 코드를 만들어 줘요.
- 속성 자동 연결: 설명을 바탕으로 AI가 필요한 입력 속성을 알아서 코드에 넣어 줘요.
- 한 번에 적용: AI가 만든 코드를 검토하고 워크플로우에 바로 넣을 수 있어요.
- 다시 생성: 첫 결과가 마음에 들지 않으면 Generate를 다시 눌러 새 코드를 받아 보세요.

{% hint style="info" %}
요청 내용을 최대한 구체적으로 쓸수록 결과가 좋아요.
{% endhint %}

### 사용 방법

1. 선택: 워크플로우에서 **Custom Code** 액션을 선택해요.

   ![Custom Code 액션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527561/original/nAuVDOdQnA_E5f_4vFRoyZnV4uiwuuVPLQ.png?1740997277)

2. AI 켜기: **Build with AI**(AI로 빌드하기)를 클릭해 AI 도우미를 열어요.

   ![Build with AI 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527587/original/NGS2QkhHBqVWTPkey7Js2HHEO9y-OxhfMw.png?1740997301)

3. 설명 입력: 원하는 기능을 입력해요. 예를 들어 "API가 날짜를 MM-DD-YYYY 형식으로 반환해요. 이걸 YYYY-MM-DD 형식으로 바꾸는 코드를 만들어 주세요."처럼 쓸 수 있어요.
4. 생성: **Generate**(생성)를 클릭하면 AI가 코드를 만들어 줘요.

   ![설명 입력 및 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527680/original/wHemORBiauxMu8J1jd5jKPyo-Ukw5r0AHg.png?1740997376)

   ![AI가 생성한 코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527732/original/bbQ38-TfLfpWsC2KL8rjDbSwD0pjs1xVfA.png?1740997417)

5. 재생성: 코드를 바꾸고 싶다면 바꿀 내용을 텍스트 상자에 적고 **Regenerate**(재생성)를 클릭해요.

   ![재생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527814/original/IdROuIKWKKyiOz_M_FaiBWIqEXTOuU2tsA.jpeg?1740997504)

6. 적용: 결과를 검토한 뒤 **Use Code**(코드 사용)를 클릭해 워크플로우에 넣어요.

   ![코드 적용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527822/original/raFUyfiaiJllR7EUEYNmwx7IBk8zZpL5tw.jpeg?1740997515)

### 활용 사례

- 데이터 서식 지정: 전화번호나 날짜를 원하는 형식으로 자동 변환해요.
- API 연동: HTTP 요청으로 외부 서비스와 연결하는 코드를 만들어요.
- 수학 계산: 이자율, 할인율 같은 값을 계산해요.
- 문자열 처리: 제목 줄에서 이메일 주소를 뽑아내는 것처럼 텍스트에서 필요한 정보를 추출해요.
- 조건 로직: 특정 조건에 따라 리드를 분류하는 것처럼 맞춤형 판단 과정을 만들어요.

## 알아 두세요

- 코드를 테스트할 때는 커스텀 값이 전달되지 않아요. 연락처 정보만 전달되고, 코드에서 쓰는 다른 속성은 테스트 중에 전달되지 않아요.
- 테스트는 꼭 해야 해요. 테스트하지 않은 코드는 이후 액션에서 출력값을 쓸 수 없어요.
- 속성 필드에서 키 이름을 정하고 이전 단계의 값을 연결하세요. 코드 안에서는 `inputData.keyName` 또는 `inputData['keyName']`으로 값을 불러와요.
