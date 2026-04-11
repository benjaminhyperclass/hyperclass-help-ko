---

번역일: 2026-04-06
카테고리: 05-기회-파이프라인
---

# 칸반 보드에서 기회 카드 커스터마이징하기

이 기능으로 파이프라인 보기에서 기회 카드(Opportunity Cards)에 표시되는 필드를 완전히 커스터마이징할 수 있습니다. 카드 뷰를 맞춤 설정하여 가장 중요한 정보를 한눈에 볼 수 있도록 하여 워크플로우 효율성을 개선하고 중요한 기회 세부사항에 대한 가시성을 향상시킬 수 있습니다.

---

목차

- [기능 1 - 기회 카드 커스터마이징](#기능-1-기회-카드-커스터마이징)
- [기능 2 - 여러 파이프라인 커스터마이징](#기능-2-여러-파이프라인-커스터마이징)
- [기능 3 - 레이아웃 옵션](#기능-3-레이아웃-옵션)
- [기능 4 - 단계(컬럼) 축소, 확장, 크기 조정](#기능-4-단계컬럼-축소-확장-크기-조정)

## **기능 1 - 기회 카드 커스터마이징**

#### 1. 기회 카드 커스터마이징 접근하기:

![기회 관리 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966768/original/Pf_YMQ_LbnuimXO2sFfoPFvDe7Qjz1gL4Q.jpeg?1729252722)

- 기회 관리(Opportunities) 섹션으로 이동하세요.
- 기회 보드 우측 상단에 있는 필드 관리(Manage Fields) 옵션을 클릭하세요.

#### 2. 표시할 필드 선택하기:

![필드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966760/original/whrAEzcNjJ804SsmgmasKwxxtLxL1bq5Gg.jpeg?1729252715)

기회 카드에 최대 7개의 필드를 선택하여 표시할 수 있습니다. 이 필드들은 다음과 같습니다:

| 섹션 | 포함 내용 |
|------|-----------|
| **기회 기본 필드** | 기회명, 기회 상태, 실패 사유, 기회 금액, 기회 담당자, 기회 소스 |
| **기회 커스텀 필드** | 기회에 대해 생성된 모든 커스텀 필드 (예: 커스텀 드롭다운, 체크박스, 날짜, 텍스트 필드 등) |
| **주 연락처 정보** | 연락처명, 연락처 전화번호, 연락처 이메일 주소, 연락처 회사명, 다음 할 일 마감일, 다음 할 일까지 남은 일수, 다음 예약까지 남은 일수, 참여도 점수 |
| **기회 활동** | 생성일, 업데이트일, 마지막 단계 변경일, 마지막 상태 변경일, 마지막 단계 변경 후 경과 일수, 마지막 상태 변경 후 경과 일수, 마지막 업데이트 후 경과 일수 |

**참고:** 기회 카드를 커스터마이징할 때 보이는 필드와 폴더는 커스텀 필드(Custom Fields)에서 가져옵니다. 일반 정보나 추가 정보 같은 폴더가 보이지 않는다면, 아직 설정되지 않았다는 의미입니다. [커스텀 필드 만드는 방법을 알아보세요](how-to-use-custom-fields.md)

참여도 점수는 2025년 3월 19일 이후에 생성되거나 업데이트된 기회에서만 표시됩니다.

#### 3. 카드 하단 카운터 커스터마이징:

![빠른 작업 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966743/original/6gZVsKjAPOYe2BvRxpozZRiiWdGaVlD2YQ.jpeg?1729252706)

"빠른 작업(Quick Actions)" 탭으로 이동하여 기회 카드 하단의 카운터와 아이콘을 커스터마이징할 수도 있습니다. 사용 가능한 옵션은 다음과 같습니다:

- 대화 아이콘 (읽지 않은 메시지 수 포함)
- 할 일 아이콘 (할 일 개수 포함)
- 노트 아이콘 (노트 개수 포함)
- 태그 아이콘 (태그 개수 포함)
- 전화 아이콘
- 예약 아이콘 (다음 예약 날짜 포함)

커스터마이징된 뷰에서 기회를 내보내기(Export)할 때는 카드에 표시되는 필드뿐만 아니라 기회의 모든 필드가 포함됩니다.

---

## 기능 2 - 여러 파이프라인 커스터마이징

![여러 파이프라인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966728/original/Nk84MSDUQqHusKTwnH7Od5stwyK8Hq6YEA.png?1729252697)

- 커스터마이징은 기본적으로 파이프라인별로 적용됩니다. 하지만 로케이션에 여러 파이프라인이 있는 경우, 모든 파이프라인에 변경사항을 적용하는 추가 옵션이 있습니다.
- 커스터마이징은 사용자별로 적용되어, 수정하는 사용자에게만 변경사항이 적용되므로 개인화된 뷰를 제공합니다.

설정한 커스터마이징은 현재 뷰에 지속적으로 적용되며, 다시 수정하기 전까지 유지됩니다. 하지만 커스터마이징은 해당 사용자의 현재 로컬 저장소에만 유지되므로, 다른 브라우저에서 접속하거나 다른 사용자가 사용할 때는 반영되지 않습니다.

---

## 기능 3 - 레이아웃 옵션

- **기본 보기(Default View):**
선택된 필드를 필드 라벨과 값 모두 함께 표시합니다.

![기본 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034967173/original/XfykkqHnBzgIyvlUzaX_syB5eC1gWTEH5w.png?1729253051)

- **간소 보기(Compact View):**
선택된 필드의 값만 표시합니다.
필드에 마우스를 올리면 라벨과 추가 세부정보가 나타납니다.

![간소 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034967351/original/ePg8it-v-id4yZhBJvbIsyMY7dqPxqPbsQ.jpeg?1729253160)

- **라벨 없는 보기(Unlabeled View):**
카드의 각 줄은 하나의 필드에 해당됩니다.
선택된 필드의 값만 표시합니다.

![라벨 없는 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040236440/original/gyQs4ZFRffh_ujnTh-wq4-ZgYnlctenZfg.jpeg?1737530204)

---

## **기능 4 - 단계(컬럼) 축소, 확장, 크기 조정**

기회 보드(칸반) 보기에서 파이프라인 단계를 축소, 확장, 크기 조정하여 불필요한 요소를 줄이고 활성화된 작업에 집중할 수 있습니다.

### 단계 축소/확장 방법

1. 기회 관리(Opportunities)로 이동하세요.

2. 칸반 보기(Kanban view)에 있는지 확인하세요.

3. 단계 헤더의 (> 또는 <) 버튼을 클릭하여 해당 단계를 축소하거나 확장하세요.

![단계 축소 확장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068183806/original/cHrOJzaBpWHn62uUbsNYXL3IAQUg_6t4Dw.gif?1774977556)

### 단계 크기 조정 방법

1. 단계 컬럼의 오른쪽 가장자리 근처에 마우스를 올리세요.

2. 가장자리를 드래그하여 컬럼 폭을 조정하세요.

![단계 크기 조정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068183988/original/-eJhez5lIbXh8aWLdVcyTR9WABIyLk0Now.gif?1774977647)

### 저장 동작 (레이아웃 지속성)

- 단계 레이아웃은 사용자별로 적용되며 다른 사용자에게는 영향을 주지 않습니다.
- 설정은 로컬 저장소에 저장되므로 같은 브라우저에서는 지속됩니다.
- 다른 브라우저나 기기에서 Hyperclass를 열면 저장된 레이아웃이 적용되지 않을 수 있습니다.

![레이아웃 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068184153/original/5JxzqzS3_TpTNjHuDqlB3zOzgLWI14Jd6A.gif?1774977796)

팁:

- 비활성 또는 우선순위가 낮은 단계를 축소하여 파이프라인을 더 쉽게 스캔할 수 있도록 하세요.
- 활성 단계를 넓혀서 기회를 더 빠르게 검토하고 우선순위를 매기세요.

---
*원문 최종 수정: 2026년 3월 31일*
*Hyperclass 사용 가이드 — hyperclass.ai*