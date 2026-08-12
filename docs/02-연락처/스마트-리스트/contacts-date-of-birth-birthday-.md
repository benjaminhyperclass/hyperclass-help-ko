---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001077108-contacts-date-of-birth-birthday-
번역일: 2026-08-11
카테고리: 02-연락처 > 스마트-리스트
---

# 연락처 - 생년월일(Date of Birth, 생일)

연락처(Contacts)의 생일(Birthday) 필드를 사용하면 커뮤니케이션을 개인화하고, 연락처 생일을 기반으로 자동화 캠페인을 구축하고, 스마트 리스트(Smart List)에서 나이별로 연락처를 필터링할 수 있어요. 이 아티클에서는 생일 필드를 효과적으로 활용하는 방법을 설명해요.

**목차**

- [생일 필드란 무엇인가요?](#What-is-the-Birthday-Field?)
- [연락처 생년월일 필드의 주요 장점](#Key-Benefits-of-the-Contact-Date-of-Birth-Field)
- [생일 알림 캠페인 만드는 방법](#How-to-Build-Birthday-Reminder-Campaigns)
- [스마트 리스트에서 생년월일로 연락처 필터링하는 방법](#How-to-Filter-Contacts-by-Birth-Date-in-Smart-Lists)
- [스마트 리스트에서 나이로 연락처 필터링하는 방법](#How-to-Filter-Contacts-by-Age-in-Smart-Lists)
- [모범 사례](#Best-Practices)
- [자주 발생하는 문제와 해결 방법](#Common-Issues-and-Troubleshooting)
- [자주 묻는 질문](#Frequently-Asked-Questions)

## 생일 필드란 무엇인가요?

연락처 생년월일(Date of Birth) 필드는 연락처 상세(레코드)에 고객의 생일을 저장하는 항목이에요. 값이 입력되면 워크플로우(Workflow), 스마트 리스트 및 기타 연락처 관리 과정에서 활용할 수 있어서, 커뮤니케이션을 개인화하고 나이 관련 기준으로 연락처를 정리할 수 있어요.

**다음 방법으로 값을 입력할 수 있어요:**

- 직접 입력
- 폼(Form) 제출
- CSV 가져오기(Import)
- API 연동

이 필드를 활용하면 생일 기반 자동화 트리거(Trigger)를 만들거나 나이별로 연락처를 세그먼트할 수 있어요.

![](https://jumpshare.com/share/YVNFnL3hzfETUryTwl5I+/Screen+Shot+2026-06-15+at+19.13.54.png)

## 연락처 생년월일 필드의 주요 장점

- **맞춤형 소통:** 생일 메시지와 특별 혜택을 자동으로 발송할 수 있어요.
- **워크플로우 자동화:** 생일 기반 알림 및 캠페인을 트리거할 수 있어요.
- **오디언스 세그먼트:** 나이 기반 필터로 스마트 리스트를 만들 수 있어요.
- **고객 경험 개선:** 시기적절하고 관련성 높은 커뮤니케이션을 제공할 수 있어요.

## 생일 알림 캠페인 만드는 방법

생일 워크플로우를 설정하면 생일 알림이나 혜택 발송을 자동화할 수 있어요.

### 1단계: 생일 트리거 설정하기

- `Workflows(워크플로우) > Create New Workflow(새 워크플로우 만들기)`로 이동하세요.
- 트리거(Trigger)를 Birthday Reminder(생일 알림)로 설정하세요.
- 트리거 조건을 선택하세요:

  - After no. of days (며칠 후)
  - Before no. of days (며칠 전)
  - Day is (특정 일)
  - Month is (특정 월)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948330/original/A-EJmS-eU8slwJQO8xWd4wXGOcnUm1t4yg.gif?1749477876)

### 2단계: 액션(Action) 정의하기

- **이메일(Email) 발송:** 개인화된 생일 축하 메시지나 혜택을 보내요.
- **SMS(문자) 발송:** 짧은 생일 축하 문구나 쿠폰 코드를 보내요.
- **할 일(Task) 배정:** 필요 시 내부 팀에게 직접 후속 조치를 하도록 알려요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948420/original/dY-FvszUwlOsrnpiCsrWVS72Ety5D6TVsw.gif?1749478000)

### 예시 워크플로우 구조

| 단계 | 액션 |
|---|---|
| 1 | 생일 트리거 발생 |
| 2 | 생일 SMS 발송 |
| 3 | 생일 이메일 발송 |
| 4 | (선택) 내부 팀에게 알림 |

## 스마트 리스트에서 생년월일로 연락처 필터링하는 방법

생일 필드를 활용하면 생년월일을 기준으로 연락처를 세그먼트하여 타겟 커뮤니케이션을 진행할 수 있어요.

### 생년월일로 필터링하는 방법

- `Contacts(연락처) > Smart Lists(스마트 리스트)`로 이동하세요.
- **Advanced Filters(고급 필터)**를 클릭하세요.
- 연락처 정보(contact information) 항목에서 Date of birth(생년월일) 필터를 선택하세요.
- 적절한 필터 조건을 선택하세요:

  - Today (오늘)
  - Tomorrow (내일)
  - Yesterday (어제)
  - This week (이번 주)
  - This month (이번 달)
  - This quarter (이번 분기)
  - In month (특정 월에)
  - This year (올해)
  - On (특정 날짜에)
  - Between (특정 기간 사이)
  - More than (초과)
  - After date (특정 날짜 이후)
  - Less than (미만)
  - Before date (특정 날짜 이전)
  - In the next (이후 며칠 내)
  - In the last (이전 며칠 내)

![](https://jumpshare.com/share/QdGpRnhsNDlSwzfEci1c+/GIF+Recording+2026-06-15+at+19.26.19.gif)

## 스마트 리스트에서 나이로 연락처 필터링하는 방법

Age(나이) 필드를 활용하면 나이를 기준으로 연락처를 세그먼트하여 타겟 커뮤니케이션을 진행할 수 있어요.

### 나이로 필터링하는 방법

- `Contacts(연락처) > Smart Lists(스마트 리스트)`로 이동하세요.
- **Advanced Filters(고급 필터)**를 클릭하세요.

![](https://jumpshare.com/share/u3mx4bfTvGCFM0HM0XfA+/Screen+Shot+2026-06-15+at+19.45.08.png)

- 연락처 정보 항목에서 Age(나이) 필터를 선택하세요.
- 적절한 필터 조건을 선택하세요:

  - Equals to (같음)
  - Between (사이)
  - More than (초과)
  - Less than (미만)

- **Save(저장)**를 클릭하세요.

시스템은 현재 날짜와 저장된 생일 값을 기준으로 나이를 동적으로 계산해요.

![](https://jumpshare.com/share/lag30Pty4c2vTehB76Tf+/GIF+Recording+2026-06-15+at+20.19.44.gif)

## 모범 사례

- **생일 정보를 미리 수집하세요:** 리드 수집 폼에 생일 필드를 포함해서 처음부터 정보를 확보하세요.
- **날짜 형식을 확인하세요:** MM/DD/YYYY 형식을 사용해서 자동화 트리거가 정상적으로 작동하도록 하세요.
- **자동화를 테스트하세요:** 실제로 활성화하기 전에 샘플 연락처로 생일 워크플로우를 항상 테스트하세요.
- **시간대를 고려하세요:** 설정에 따라 워크플로우가 연락처별 시간대를 사용할 수 있다는 점을 참고하세요.

## 자주 발생하는 문제와 해결 방법

| 문제 | 해결 방법 |
|---|---|
| **생일 자동화가 트리거되지 않아요** | 생일 필드에 완전하고 올바른 형식의 날짜가 입력되어 있는지 확인하세요. |
| **나이 계산이 잘못돼요** | 출생 연도가 정확하게 입력되었는지 확인하세요. 연도가 없거나 잘못 입력되면 오류가 발생할 수 있어요. |
| **생일에 SMS나 이메일이 발송되지 않았어요** | 워크플로우 타이밍, 트리거 설정, 연락처 시간대 설정을 다시 확인하세요. |

## 자주 묻는 질문

**Q: 연락처 생년월일 필드로 자동 생일 메시지를 보낼 수 있나요?**

네. 연락처 생년월일 필드는 워크플로우에서 활용되어 이메일, SMS, 알림 발송이나 태그 적용 같은 생일 관련 자동화를 트리거할 수 있어요.

**Q: 생일 워크플로우가 작동하려면 연락처에 생년월일 값이 반드시 필요한가요?**

네. 생일 기반 워크플로우는 연락처 상세에 유효한 생년월일 값이 있어야 작동해요. 필드가 비어 있거나 값이 유효하지 않으면 워크플로우가 예상대로 트리거되지 않아요.

**Q: 연락처의 나이를 기준으로 스마트 리스트를 만들 수 있나요?**

네. 스마트 리스트 필터에서 연락처 생년월일 필드를 활용해서 나이 기반 오디언스 세그먼트를 만들 수 있어요.

**Q: 생일 워크플로우가 트리거되지 않아요, 왜 그런가요?**

연락처에 유효한 생년월일 값이 있는지 확인하고, 워크플로우 트리거가 올바르게 설정되어 있는지 확인한 다음, 워크플로우가 활성(Active) 상태이며 발행(Published)되어 있는지 확인하세요.

**Q: 나이 기반 스마트 리스트 결과가 잘못 나와요, 왜 그런가요?**

해당 연락처들의 생년월일 값을 확인하고, 스마트 리스트 필터가 올바르게 설정되어 있는지 확인한 다음, 가져온 데이터에 형식 문제가 없는지 확인하세요.

**Q: 생일이 포함된 연락처를 가져올 때 주의할 점이 있나요?**

일관된 날짜 형식을 사용하고, 생년월일 값이 올바르게 가져와졌는지 확인하세요. 정확한 데이터는 워크플로우와 스마트 리스트 필터가 예상대로 작동하는 데 도움이 돼요.

---
*원문 최종 수정: 2026-06-15*
*Hyperclass 사용 가이드 — hyperclass.ai*