---

번역일: 2024-12-30
카테고리: 워크플로우
---

# 워크플로우 액션 - 조건 분기 (If/Else)

조건 분기(If/Else) 액션은 워크플로우에서 특정 조건에 따라 다른 경로로 분기하는 핵심 기능입니다. 연락처의 태그, 커스텀 필드, 시간 등 다양한 조건을 확인하여 자동화 흐름을 제어할 수 있습니다.

## Includes/Does Not Include 조건 사용하기

조건 설정 시 "포함(Includes)" 또는 "포함하지 않음(Does Not Include)" 옵션을 선택할 수 있습니다. 이는 태그나 체크박스 필드, 드롭다운 선택기 등 여러 선택 옵션이 있는 커스텀 필드에서 사용됩니다.

### AND 조건 만들기

아래 예시는 AND 조건을 사용하는 경우입니다. 시스템이 연락처 태그가 'consultation_booked'와 'consultation_confirmed' 태그를 **모두 포함하지 않는지** 확인합니다.

![AND 조건 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250497669/original/FlAzFJDU1cdgpaFpt9G1g1I-LshYykcoIw.png?1662994820)

두 태그 중 하나라도 연락처에 있으면 조건이 실패합니다. 이 예시에서 연락처가 "YES" 경로로 이동하려면 두 태그가 모두 연락처 프로필에 없어야 합니다.

### OR 조건 만들기

"OR" 시나리오를 만들려면 두 태그를 별도의 조건으로 나누고 OR 옵션을 선택해야 합니다:

![OR 조건 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250492624/original/PVEr200i5xqjrUmLV8Th7Z7N3w-UC0p-Hg.png?1662993828)

이 경우 연락처가 "Or 태그" 중 하나 또는 둘 다 만족하면 조건이 참이 됩니다. 시스템은 연락처를 "Yes" 경로로 보내기 전에 하나 또는 두 조건이 모두 맞는지만 확인합니다.

## 조건 분기(If/Else Branches)

조건 분기는 하나의 이벤트당 최대 10개의 서로 다른 결과를 지원합니다.

### 두 분기가 모두 참일 때는 어떻게 되나요? 리드가 두 경로 모두로 가나요?

아니오, 시스템은 설정한 첫 번째 올바른 경로/분기로 리드를 보냅니다. 즉, 조건/분기를 구성한 순서대로 위에서 아래로 진행됩니다.

## 시간 비교 연산자

시간 비교 연산자는 현재 날짜와 시간을 지정된 입력값과 비교하는 데 사용되는 워크플로우의 필수 구성 요소입니다. 이 연산자들은 시간 조건에 따라 워크플로우 자동화 시스템이 정보에 입각한 결정을 내릴 수 있게 해줍니다. 비교할 수 있는 다양한 날짜 및 시간 단위에는 현재 요일, 현재 날짜, 현재 월, 현재 연도, 현재 시간이 포함됩니다.

![시간 매개변수 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767416/original/KoCQkLH9MoyKbTKOIcvnrgut3GGu561TCg.png?1678205389)

![시간 비교 연산자 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767549/original/dbRqTFVic08R06DsjrWJTBvu_oQTTHsuvA.png?1678205424)

시간 비교 연산자를 사용할 특정 시간 매개변수를 선택한 후, 드롭다운에서 시간 비교 연산자를 선택해야 합니다:

![연산자 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768884/original/teNiXrftXKTqW1mha1KThd6BZnUd0INqGA.png?1678205723)

### "Is" 연산자

![Is 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768774/original/ky0A4uISIeeisjKdlTEGXhxz--Q1Om2W7w.png?1678205699)

"Is" 비교 연산자는 선택된 날짜 단위가 입력값과 동일한지 확인합니다. 예를 들어, "현재 요일이 월요일임"은 오늘이 월요일일 때만 참을 반환합니다. 마찬가지로 "현재 월이 1월임"은 현재 1월일 때만 참을 반환합니다. **현재 월의 날짜** 같은 옵션의 경우, 1일, 2일, 3일과 같이 현재 월의 날짜를 지정해야 합니다.

![현재 날짜 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285770094/original/wIhZ5qcg5hVwFuc6UAXzWcxuFSZn2B49Uw.png?1678206019)

### "Is Not" 연산자

반면 "Is not" 연산자는 선택된 날짜 단위가 제공된 입력과 다른지 확인합니다. 예를 들어, "현재 요일이 토요일이 아님"은 토요일을 제외한 모든 날에 대해 참을 반환합니다.

![Is Not 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285772852/original/kCKx0qld3p_3b3nSPMEKESQphNrTsArYkg.png?1678206507)

### "Is After" 연산자

"Is after" 연산자는 선택된 날짜 단위가 제공된 입력보다 나중인지 확인합니다. 단, 시간의 경우 이 연산자는 다음 시간에 시작하는 분만 고려합니다. 예를 들어, "현재 시간이 오후 6시 이후임"은 오후 6시 59분이 여전히 오후 6시 안에 있는 것으로 간주되므로 오후 7시 00분 이후에만 참을 반환합니다.

![Is After 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285773967/original/ctdTUP7-6TRTnlqG6bAo06Ops_t3tZrBKA.png?1678206767)

### "Is on or After" 연산자

"Is on or after" 연산자는 선택된 날짜 단위가 제공된 입력과 같거나 나중인지 확인합니다. **시간**의 경우, 이 연산자는 같은 시간과 그 이후의 분을 고려합니다. 예를 들어, "현재 시간이 오후 6시이거나 이후임"은 오후 6시 59분에 대해 참을 반환합니다. 이는 오후 6시 "안에" 있는 것으로 간주되기 때문입니다. 또한 오후 6시 이후의 모든 시간에 대해서도 참이 됩니다.

![Is on or After 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285774725/original/LbFSGZ2xAz7OwUALQtrjMyULCNhd4uguww.png?1678206957)

### "Is before" 연산자

"Is before" 연산자는 선택된 날짜 단위가 제공된 입력보다 이전인지 확인합니다. 예를 들어, "현재 월이 6월 이전임"은 6월 이전의 모든 달에 대해 참을 반환합니다.

![Is before 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775110/original/Bkcc0xt6Pds6vD8yLtPApbAMaM6GcnUwlQ.png?1678207054)

### "Is on or before" 연산자

"Is on or before" 연산자는 선택된 날짜 단위가 제공된 입력과 같거나 이전인지 확인합니다. **시간**의 경우, 이 연산자도 같은 시간의 분을 고려합니다. 예를 들어, "현재 시간이 오후 6시이거나 이전임"은 오후 6시 59분에 대해 참을 반환합니다. 이는 오후 6시 "안에" 있는 것으로 간주되기 때문입니다.

![Is on or before 연산자 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775589/original/2EYd4ky4Khaa70G3s6_cbNPSXs3-NMj_Wg.png?1678207145)

### "Is not empty" 또는 "Is empty" 연산자

마지막으로, "Is not empty" 연산자는 필드에 값이 있는지 확인하고, "Is empty" 연산자는 필드에 값이 없는지 확인합니다. 이 두 연산자는 워크플로우 자동화 시스템이 유효한 입력값을 받는지 확인하는 데 사용됩니다.

## 문제 해결

조건 분기 설정 중 문제가 발생한다면 If/Else 조건 - AND 또는 OR 조건 문제 해결 가이드를 참고하세요.

---
*원문 최종 수정: Fri, 23 Aug, 2024 at 12:46 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*