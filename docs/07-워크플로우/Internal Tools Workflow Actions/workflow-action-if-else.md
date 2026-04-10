---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Internal Tools Workflow Actions
---

# 워크플로우 액션 - 조건 분기(If/Else)

## 목차

[포함/포함하지 않음을 조건으로 사용할 때:](#포함포함하지-않음을-조건으로-사용할-때)

[And 조건 만들기:](#and-조건-만들기)

[Or 조건 만들기](#or-조건-만들기)

[조건 분기 브랜치](#조건-분기-브랜치)

[두 브랜치가 모두 참일 때는 어떻게 되나요? 리드가 두 경로 모두로 가나요?](#두-브랜치가-모두-참일-때는-어떻게-되나요-리드가-두-경로-모두로-가나요)

[시간 비교 연산자](#시간-비교-연산자)

[Is(같음) 연산자](#is같음-연산자)

[Is Not(다름) 연산자](#is-not다름-연산자)

[Is After(이후) 연산자](#is-after이후-연산자)

[Is on or After(같거나 이후) 연산자](#is-on-or-after같거나-이후-연산자)

[Is before(이전) 연산자](#is-before이전-연산자)

[Is on or before(같거나 이전) 연산자](#is-on-or-before같거나-이전-연산자)

[Is not empty(비어있지 않음) 또는 Is empty(비어있음) 연산자](#is-not-empty비어있지-않음-또는-is-empty비어있음-연산자)

[문제 해결](#문제-해결)

## 포함/포함하지 않음을 조건으로 사용할 때:

참고사항:

워크플로우 빌더에는 "포함" 또는 "포함하지 않음"을 지정할 수 있는 여러 조건부 매개변수가 있습니다. 예를 들어 태그와 기타 다중 선택 커스텀 필드(체크박스 필드, 드롭다운 선택기 등)가 있습니다.

## And 조건 만들기:

아래 예시에서는 AND 조건을 사용하고 있습니다. 시스템은 연락처 태그가 'consultation_booked' 태그와 'consultation_confirmed' 태그를 모두 "포함하지 않음"인지 확인합니다.

![And 조건 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250497669/original/FlAzFJDU1cdgpaFpt9G1g1I-LshYykcoIw.png?1662994820)

두 태그 중 하나라도 해당 연락처에 있다면 조건은 실패합니다.

이 예시에서 연락처가 "예" 경로로 가려면, 두 태그가 모두 연락처 프로필/레코드에 없어야 합니다.

## Or 조건 만들기

"OR" 시나리오를 만들고 싶다면, 두 태그를 별도의 조건으로 나누고 다음과 같이 OR 옵션을 선택해야 합니다:

![Or 조건 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250492624/original/PVEr200i5xqjrUmLV8Th7Z7N3w-UC0p-Hg.png?1662993828)

이 경우, 연락처가 "Or 태그" 중 하나 또는 둘 다를 충족하면 조건이 참이 됩니다. 시스템은 연락처를 "예" 경로로 보내기 전에 하나 또는 두 조건이 모두 올바른지만 확인합니다.

더 자세한 정보: 조건 분기 조건 - AND 또는 OR 조건 문제 해결

## 조건 분기 브랜치

참고사항:

조건 분기 브랜치는 이벤트당 최대 10개의 서로 다른 결과를 지원합니다.

### 두 브랜치가 모두 참일 때는 어떻게 되나요? 리드가 두 경로 모두로 가나요?

아니요, 시스템은 설정에서 첫 번째로 올바른 경로/브랜치로 리드를 보냅니다. 즉, 조건/브랜치를 구축한 순서대로 위에서 아래로 진행됩니다.

---

## 시간 비교 연산자

시간 비교 연산자는 현재 날짜 및 시간을 지정된 입력값과 비교하는 워크플로우에서 사용되는 필수 구성 요소입니다. 이러한 연산자를 통해 워크플로우 자동화 시스템이 시간 조건에 따라 정보에 기반한 결정을 내릴 수 있습니다. 이러한 연산자를 사용하여 비교할 수 있는 다양한 날짜 및 시간 단위에는 현재 요일, 현재 일(날짜), 현재 월, 현재 연도, 현재 시간이 포함됩니다.

![시간 매개변수 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767416/original/KoCQkLH9MoyKbTKOIcvnrgut3GGu561TCg.png?1678205389)

![시간 비교 연산자 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767549/original/dbRqTFVic08R06DsjrWJTBvu_oQTTHsuvA.png?1678205424)

시간 비교 연산자를 사용할 특정 시간 매개변수를 선택한 후에는 연산자 선택 드롭다운에서 시간 비교 연산자를 선택해야 합니다:

![연산자 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768884/original/teNiXrftXKTqW1mha1KThd6BZnUd0INqGA.png?1678205723)

### Is(같음) 연산자

![Is 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768774/original/ky0A4uISIeeisjKdlTEGXhxz--Q1Om2W7w.png?1678205699)

"Is" 비교 연산자는 선택된 날짜 단위가 입력값과 같은지 확인합니다. 예를 들어, "현재 요일이 월요일임"은 오늘이 월요일일 때만 참을 반환합니다. 마찬가지로 "현재 월이 1월임"은 현재가 1월일 때만 참을 반환합니다. **현재 월의 날짜** 옵션의 경우 1일, 2일, 3일과 같이 현재 월의 날짜를 지정해야 합니다.

![현재 월의 날짜 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285770094/original/wIhZ5qcg5hVwFuc6UAXzWcxuFSZn2B49Uw.png?1678206019)

### Is Not(다름) 연산자

"Is not" 연산자는 선택된 날짜 단위가 제공된 입력과 다른지 확인합니다. 예를 들어, "현재 요일이 토요일이 아님"은 토요일을 제외한 모든 요일에 대해 참을 반환합니다.

![Is Not 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285772852/original/kCKx0qld3p_3b3nSPMEKESQphNrTsArYkg.png?1678206507)

### Is After(이후) 연산자

"Is after" 연산자는 선택된 날짜 단위가 제공된 입력 이후인지 확인합니다. 하지만 시간의 경우, 이 연산자는 다음 시간에 시작되는 분만 고려합니다. 예를 들어, "현재 시간이 오후 6시 이후임"은 오후 6시 59분이 여전히 오후 6시 내로 간주되기 때문에 오후 7시 00분 이후에만 참을 반환합니다.

![Is After 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285773967/original/ctdTUP7-6TRTnlqG6bAo06Ops_t3tZrBKA.png?1678206767)

### Is on or After(같거나 이후) 연산자

"Is on or after" 연산자는 선택된 날짜 단위가 제공된 입력과 같거나 이후인지 확인합니다. **시간**의 경우, 이 연산자는 같은 시간의 분부터 이후를 고려합니다. 예를 들어, "현재 시간이 오후 6시와 같거나 이후임"은 오후 6시 59분에 대해 참을 반환합니다. 왜냐하면 이는 오후 6시 "와 같은" 것으로 간주되기 때문입니다. 또한 오후 6시 이후의 모든 시간에 대해서도 참이 됩니다.

![Is on or After 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285774725/original/LbFSGZ2xAz7OwUALQtrjMyULCNhd4uguww.png?1678206957)

### Is before(이전) 연산자

"Is before" 연산자는 선택된 날짜 단위가 제공된 입력 이전인지 확인합니다. 예를 들어, "현재 월이 6월 이전임"은 6월 이전의 모든 월에 대해 참을 반환합니다.

![Is before 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775110/original/Bkcc0xt6Pds6vD8yLtPApbAMaM6GcnUwlQ.png?1678207054)

### Is on or before(같거나 이전) 연산자

"Is on or before" 연산자는 선택된 날짜 단위가 제공된 입력과 같거나 이전인지 확인합니다. **시간**의 경우, 이 연산자도 같은 시간의 분을 고려합니다. 예를 들어, "현재 시간이 오후 6시와 같거나 이전임"은 오후 6시 59분에 대해 참을 반환합니다. 왜냐하면 이는 오후 6시 "와 같은" 것으로 간주되기 때문입니다.

![Is on or before 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775589/original/2EYd4ky4Khaa70G3s6_cbNPSXs3-NMj_Wg.png?1678207145)

### Is not empty(비어있지 않음) 또는 Is empty(비어있음) 연산자

마지막으로, "Is not empty" 연산자는 필드에 값이 있는지 확인하고, "Is empty" 연산자는 필드에 값이 없는지 확인합니다. 이 두 연산자는 워크플로우 자동화 시스템이 유효한 입력값을 받도록 하는 데 사용됩니다.

## 문제 해결

조건 분기 조건 - AND 또는 OR 조건 문제 해결

---
*원문 최종 수정: 2024년 8월 23일*
*Hyperclass 사용 가이드 — hyperclass.ai*