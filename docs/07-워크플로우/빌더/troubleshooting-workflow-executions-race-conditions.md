---
원문: /support/solutions/articles/48001218068-troubleshooting-workflow-executions-race-conditions
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 실행 문제 해결 — 레이스 컨디션(Race Condition)

레이스 컨디션은 둘 이상의 변경이 같은 초에 동시에 일어나는 상황이에요. 변경들이 서로 "경주"하듯 부딪히면서 순서가 뒤바뀌어 실행되기도 하고, 실행됐다고 표시되지만 실제로는 적용되지 않기도 해요. 이 문서에서는 워크플로우 실행 기록에서 레이스 컨디션을 찾아내는 방법과 막는 방법을 알려 드려요.

## 메시지 링크로 해당 실행 정확히 열기

문제가 생긴 메시지에서 바로 실행 기록을 열면 올바른 실행 건, 연락처, 시간 정보를 확인한 상태로 타이밍 문제를 살펴볼 수 있어요.

**절차**

1. **대화**로 이동해 문제가 생긴 메시지가 있는 대화를 열어요.
2. 해당 메시지의 **message details**(메시지 상세 정보)를 열어요.
3. **워크플로우** 링크를 클릭해요. 관련 정보가 불러와진 상태로 **Execution Details**(실행 상세)가 열려요.
4. 타임스탬프와 액션 순서를 확인해서 여러 액션이 같은 초에 실행됐는지 살펴보세요.

**워크플로우 링크가 보이지 않을 때**

**message details**에 워크플로우 링크가 없다면 로그에서 실행 기록을 열 수 있어요.

- **자동화 > 워크플로우**에서 해당 워크플로우를 연 다음 **Logs**(로그)로 이동해요. 그런 다음 연락처와 메시지가 발송된 시간대 전후로 필터하거나 검색하세요.

---

## 예시: Add Tag 액션은 실행됐는데 태그가 없는 경우

이 예시에서는 워크플로우 실행 로그에 태그가 연락처에 성공적으로 추가된 것으로 나와요.

그런데 연락처 상세 화면을 확인하면 태그가 보이지 않아요.

![연락처 상세 화면에 태그가 없는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237098616/original/QV-c-v9lQ1vmsqrWFtQJxnTd9FnvBUttZQ.png?1657132211)

실행 로그로 돌아가서 시간을 자세히 보세요. **Add to workflow**(워크플로우에 추가) 액션과 **Add Tag**(태그 추가) 액션이 정확히 같은 초에 실행됐어요. 이것이 레이스 컨디션이에요.

![같은 초에 실행된 두 액션이 보이는 실행 로그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237097905/original/PtKVYprrQGKLzBww-ZXcYyVETqRuSFn5pg.png?1657131977)

---

## 레이스 컨디션 막는 방법

레이스 컨디션을 해결하려면 **Wait**(대기) 액션을 1분으로 설정해서 추가하세요.

![두 액션 사이에 Wait 액션을 추가한 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037771738/original/aZsqCC0OAIfQkSQqUbLor31c9DWXbFaYeg.png?1733350591)

**Wait** 액션을 1분으로 설정하면 레이스 컨디션이 발생할 가능성이 없어요.

![Wait 1분 액션을 추가한 뒤의 실행 로그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037771768/original/dfxKTUGbzhTGDHHNdPEUqtvKhpVqmyF86A.png?1733350650)
