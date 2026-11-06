---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 빌더
---

# 하위 계정 간 연락처 복사하는 방법

Hyperclass의 '연락처 복사(Copy Contact)' 워크플로우 액션을 사용하여 하위 계정 간에 태그와 커스텀 필드를 포함한 연락처를 복제하고 데이터 무결성을 유지하는 방법을 알아보세요.

---

### 추가 튜토리얼 동영상:

[https://www.youtube.com/watch?v=deI0HZ2HcAQ](https://www.youtube.com/watch?v=deI0HZ2HcAQ)

[https://www.youtube.com/watch?v=nqCFyLRiols](https://www.youtube.com/watch?v=nqCFyLRiols)

[https://www.youtube.com/watch?v=wZ85Ej6VnKc](https://www.youtube.com/watch?v=wZ85Ej6VnKc)

---

## **'연락처 복사' 사용 전 준비사항**

- 에이전시는 Hyperclass 플랜($97, $297, $497 또는 연간 동등 플랜) 중 하나를 사용해야 합니다.
- 에이전시 설정(Agency Settings)에서 LC 프리미엄 트리거 & 액션(LC Premium Triggers & Actions)이 활성화되어 있어야 합니다.
- 프리미엄 액션 & 트리거가 활성화되면 기존 및 신규 하위 계정에서 100회 무료 실행이 제공됩니다.
- 기존 하위 계정의 실행 비용을 방지하려면, 에이전시 뷰에서 각 하위 계정에 대해 재청구를 수동으로 활성화해야 합니다.
- SaaS 구성기에서 프리미엄 액션이 활성화되면, 새로 생성되는 하위 계정은 자동으로 LC 프리미엄 액션 & 트리거에 등록되므로 에이전시의 추가 조치가 필요하지 않습니다.

---

## **연락처 복사 단계**

1. Hyperclass 대시보드에서 워크플로우 빌더(Workflow Builder)로 이동하여 새 워크플로우를 생성하거나 기존 워크플로우를 편집하세요.

![워크플로우 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683643/original/eP2hToI_4TLeO8vY2qpceI0Gn2YqPIwScw.png?1752177408)

2. '하위 계정으로 연락처 복사(Copy Contact to Sub-Account)' 워크플로우 액션을 추가하세요.

![연락처 복사 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683666/original/mqdIFP8q7BBzdMNkhD1J1-6OhAkuENLVYQ.png?1752177469)

3. 대상 하위 계정을 선택하여 액션을 설정하세요.

![대상 하위 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683973/original/dLRWwP6Caa7r6a2N_l09_5BMsc8beEhJ1Q.png?1752178137)

4. 필요에 따라 다음 설정을 활성화하세요:

- **태그 복사(Copy Tags)**: 원본 연락처의 태그를 복제합니다. 선택한 하위 계정에서 새로 복사된 연락처에 여러 태그를 추가하여 연락처를 효과적으로 정리할 수 있습니다. 원본 연락처 정보에서 태그를 선택하거나 새로 수동으로 생성할 수도 있습니다.

- **커스텀 필드 복사(Copy Custom Fields)**: 대상 하위 계정에 동일한 커스텀 필드가 있는 경우 커스텀 필드를 복제합니다.

- **연락처가 이미 존재하는 경우 업데이트(Update Contact if it Already Exists)**: 대상 하위 계정에 기존 연락처가 있는 경우 업데이트합니다.

- **이메일과 이름이 없는 연락처는 복사 건너뛰기(Skip Copy if Contact Lacks Email and Name)**: 불완전한 연락처 레코드의 복사를 방지합니다.

### 커스텀 필드 복사

활성화하면 연락처의 커스텀 필드가 선택한 계정으로 복사됩니다. 커스텀 필드 값은 선택한 계정에 해당 필드가 존재하는 경우에만 복사됩니다.

### 토글: 연락처가 이미 존재하는 경우 업데이트

- 이 옵션을 활성화하고 연락처가 선택한 하위 계정에 이미 존재하는 경우, 해당 하위 계정에서 연락처가 업데이트됩니다.
- 하위 계정에 연락처가 존재하지 않는 경우에는 새 연락처가 생성됩니다.

![연락처 업데이트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018335574/original/NQ-ywFOUEi4ny-4WBP0pGjrX1S84B1-fwg.png?1705925986)

### 이메일과 이름이 없는 연락처 복사 건너뛰기

연락처에 이메일 또는 이름이 없는 경우 해당 연락처는 복사되지 않고 건너뛰어집니다.

### 복사되는 항목

연락처 복사 액션을 사용할 때 다음 필드들이 복사됩니다:

- 연락처 정보
- 일반 정보
- 태그 (연락처 복사 액션에서 태그 복사 토글이 켜져 있어야 함)
- 커스텀 필드 **(연락처 복사 액션에서 커스텀 필드 복사 토글이 켜져 있고, 하위 계정에 동일한 커스텀 필드가 있어야 함) (양쪽 계정에서 커스텀 필드 타입이 동일해야 함)**

### 복사되지 않는 항목

대화(Conversations), 활동(Activity), 메모(Notes), 할 일(Tasks), 예약(Appointments), 결제(Payments), 독립적으로 전송된 문서/파일은 복사되지 않습니다.

- **문서/파일** - 연락처 복사 액션의 일부로는 파일 및 문서 전송이 지원되지 않습니다. 파일은 독립적인 자산으로 대상 하위 계정으로 이전되지 않습니다. 경우에 따라 복사된 연락처와 연관된 파일 참조는 여전히 원본 연락처 또는 소스 레코드에 의존할 수 있습니다. 소스 계정에서 원본 연락처가 삭제되면 해당 연관 파일에 액세스할 수 없게 될 수 있습니다. 중요한 파일에 대한 액세스를 유지해야 하는 경우, 소스 계정에 원본 연락처를 그대로 두세요.

---
*원문 최종 수정: 2026-03-15*
*Hyperclass 사용 가이드 — hyperclass.ai*