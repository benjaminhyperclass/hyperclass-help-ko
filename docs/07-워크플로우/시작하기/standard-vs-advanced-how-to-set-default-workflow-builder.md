---
원문: /support/solutions/articles/155000007323-standard-vs-advanced-how-to-set-default-workflow-builder
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 기본 워크플로우 빌더 설정하기 — Standard와 Advanced 중 선택

새 워크플로우를 만들 때 어떤 빌더가 열릴지(Standard 또는 Advanced) 정하고, 누가 보기를 전환할 수 있는지도 설정할 수 있어요. 이 문서는 에이전시 관리자를 위해 기본 워크플로우 빌더 설정 방법, 역할별 권한, 빌더를 전환할 때의 안전장치를 안내해요. 팀의 사용 환경을 통일하고, Advanced Builder를 원하는 속도로 도입할 때 활용하세요.

## 기본 워크플로우 빌더 설정이란?

기본 워크플로우 빌더 설정은 사용자가 새 워크플로우를 만들 때 어떤 빌더가 열릴지 정하는 설정이에요.

서브 계정 하나의 기본 빌더는 **자동화 > 글로벌 워크플로우 설정**에서 정해요.

에이전시는 **에이전시 설정 > 워크플로우 설정**에서 기본 빌더 설정을 한곳에서 관리할 수도 있어요. 에이전시 기본값을 에이전시가 소유한 서브 계정에 적용할 수 있고, 서브 계정마다 다른 기본값을 지정할 수도 있어요.

새 서브 계정은 만들어질 때 에이전시 기본값을 그대로 물려받아요. 기본값을 바꿔도 이미 만든 워크플로우는 달라지지 않아요.

## 기본 워크플로우 빌더 설정의 장점

Standard는 단순하게 쓰기 좋고, Advanced는 시각적인 로직과 복잡한 경로를 만들 때 좋아요. 아래 장점을 참고해 팀에 맞는 빌더를 정하세요.

- 일관된 사용 환경: 새 워크플로우가 항상 팀이 기대하는 빌더에서 열려요.
- 단계적 도입: Advanced Builder를 숙련된 사용자부터 쓰게 하고, 점차 넓혀 갈 수 있어요.
- 문의 감소: 권한이 있는 사용자는 관리자의 도움 없이 직접 보기를 바꿀 수 있어요.
- 작업 보호: Standard로 전환할 수 있는 사용자를 제한해서 Advanced 전용 기능이 실수로 지워지는 일을 막아요.
- 기본값 중앙 관리: 소유한 서브 계정을 하나씩 설정하지 않고 **에이전시 설정**에서 기본 워크플로우 빌더를 관리할 수 있어요.

## 기본 빌더 옵션

기본 빌더는 워크플로우를 만들 때 처음 보이는 화면을 정해요. 기본값을 알맞게 정하면 새로 쓰는 사용자도 적응하기 쉽고, 평소 작업 중에 화면을 오갈 일도 줄어요.

- 위치: **자동화 > 글로벌 워크플로우 설정**이에요. 워크플로우를 열었을 때 나오는 **Settings**(설정) 탭에서도 열 수 있어요.
- 선택지: **Standard Builder**(표준 빌더) 또는 **Advanced Builder**(고급 빌더)
- 적용 범위: 설정을 저장한 뒤에 만드는 워크플로우에만 적용돼요. 이미 있는 워크플로우는 마지막으로 저장한 보기를 그대로 유지해요.
- 표시 조건: **글로벌 워크플로우 설정** 화면은 에이전시 관리자와 에이전시 사용자에게만 보여요.

## 빌더 전환 권한

권한을 설정하면 필요한 사람만 워크플로우의 보기를 바꿀 수 있어요. 그래서 Advanced 전용 로직이 의도치 않게 사라지는 일을 막을 수 있어요.

- 설정 내용: Standard와 Advanced 사이에서 워크플로우 보기를 바꿀 수 있는 역할을 고를 수 있어요.
- 역할 옵션: 보통 **Sub-account admins**(서브 계정 관리자)와 **Sub-account users**(서브 계정 사용자)를 선택해요. 에이전시 사용자는 기본으로 켜져 있어요.
- 숨겨지는 컨트롤: 권한이 없는 사용자에게는 워크플로우 편집 화면에서 **Switch View**(보기 전환) 컨트롤이 보이지 않아요.
- 운영 팁: 복잡한 로직을 자주 쓰는 서브 계정에서는 Advanced Builder에 익숙한 사용자와 검토자에게만 전환 권한을 주세요.

## 워크플로우별 보기 유지

설정한 기본값은 새 워크플로우가 어떤 빌더에서 열릴지만 정해요. 이미 만든 워크플로우는 마지막으로 저장한 빌더 보기를 계속 써요.

- 작동 방식: 권한이 있는 사용자가 워크플로우의 보기를 바꾸고 **저장**하면, 그 워크플로우는 다시 바꿀 때까지 가장 최근에 저장한 보기로 열려요.
- 중요한 제약: 워크플로우에 Advanced 전용 요소가 있으면, 그 요소를 지우기 전에는 Standard로 전환할 수 없을 수 있어요. 자세한 내용은 "Advanced Builder for Workflows" 문서와 "Delinked Nodes (Independent Branches)" 문서를 참고하세요.

## 기본 워크플로우 빌더 설정 방법

새 자동화가 알맞은 빌더에서 시작되고, 권한이 있는 사용자만 보기를 바꿀 수 있도록 아래 순서로 설정하세요.

### 1. 서브 계정 하나의 기본 빌더 설정하기

1. 왼쪽 메뉴에서 **자동화**를 클릭한 다음, 위쪽 메뉴에서 **글로벌 워크플로우 설정**을 선택하세요. 기본 빌더와 보기 전환 권한을 설정하는 에이전시 전용 설정 화면이 열려요.

   ![자동화 메뉴에서 글로벌 워크플로우 설정 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063873200/original/rOOCIOQwIJWmUpjlb-IrsNJLPE5yS-kcZw.png?1769785419)

2. **Default builder for new workflows**(새 워크플로우의 기본 빌더)에서 **Standard Builder** 또는 **Advanced Builder**를 고르세요. 선택한 값은 새 워크플로우에만 적용돼요. 이미 있는 워크플로우에는 영향이 없어요.

   ![새 워크플로우의 기본 빌더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063873264/original/fC5F15WmL3R44se4cjlXvDX_NbXcjkHtPw.png?1769785459)

3. **Who can switch between builders**(빌더를 전환할 수 있는 사람)에서 워크플로우 보기를 바꿀 수 있는 역할을 체크하세요. 예를 들면 **Sub-account admins**, **Sub-account users**가 있어요. 에이전시 사용자는 기본으로 켜져 있어요. 권한이 없는 사용자에게는 **Switch View** 컨트롤이 보이지 않아요.

   ![보기 전환 권한을 가질 역할 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063873512/original/HrodxSFAxM_K23MkaiVw3darH-pyfxGEhA.png?1769785631)

4. 워크플로우를 열고 왼쪽 위의 빌더 선택기로 **Standard Builder**와 **Advanced Builder**를 전환해 보세요. 이 단계에서 **글로벌 워크플로우 설정**이 제대로 적용됐는지 확인할 수 있어요. 권한이 있는 사용자에게만 전환 컨트롤이 보이고, 워크플로우는 마지막으로 저장한 보기로 열려야 해요. 그러면 기본값과 전환 권한이 잘 작동하는 거예요.

   ![워크플로우 편집 화면의 빌더 선택기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063873567/original/gTIso67KpvueI0y2le1crQZRdbHcBtfx_g.png?1769785674)

### 2. 에이전시 수준에서 기본 빌더 설정하기

1. **에이전시 설정**으로 이동하세요.

   ![에이전시 설정으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080861006/original/dLQYOBbaHg9t7VTbkLtOoeaZhbbLYa9ebw.png?1789386210)

2. **워크플로우 설정**을 여세요. 기본 빌더 설정에서 Standard 또는 Advanced를 선택하세요.

   ![워크플로우 설정에서 기본 빌더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080861164/original/bDFESlmMNljXtcXHqzHQAyx6dxbQIHEVIg.png?1789386255)

3. 에이전시 기본값을 전체 또는 개별 서브 계정에 적용하세요. 에이전시 기본값은 에이전시가 소유한 서브 계정 전체에 적용할 수 있어요. 적용하면 선택한 Standard 또는 Advanced 기본값이 해당 서브 계정에 반영돼요. 이후에 만드는 서브 계정은 만들어질 때 에이전시 기본값을 물려받아요.

   ![에이전시 기본값을 서브 계정에 적용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080861345/original/9af92voY8eEqaWYemcKhMQPSqcDsrJhu4w.png?1789386334)

## 자주 묻는 질문

### 기본값을 바꾸면 이미 만든 워크플로우에도 영향이 있나요?

아니요. 기본값은 새로 만드는 워크플로우에만 적용돼요. 이미 있는 워크플로우는 마지막으로 저장한 보기를 그대로 유지해요.

### 특정 사용자가 Advanced Builder를 아예 쓰지 못하게 막을 수 있나요?

네. **Who can switch between builders**에서 해당 사용자의 역할을 빼세요. 그 사용자에게는 기본 빌더만 보이고 **Switch View** 컨트롤은 나타나지 않아요.

### Advanced 전용 기능이 있는 워크플로우를 Standard로 전환하려고 하면 어떻게 되나요?

데이터가 실수로 사라지지 않도록, Standard에서 저장하기 전에 지원되지 않는 Advanced 전용 요소를 먼저 지워야 해요.

### 권한이 있는 사용자는 Switch View 컨트롤을 어디에서 찾나요?

워크플로우 편집 화면의 왼쪽 위에 있어요. 권한이 없는 사용자에게는 보이지 않아요.

### 서브 계정마다 다른 기본값을 설정할 수 있나요?

네. **에이전시 설정 > 워크플로우 설정**으로 이동해서 **Manage default builder per sub-account**(서브 계정별 기본 빌더 관리) 아래의 **관리**를 선택하세요. 서브 계정을 찾은 다음 기본 빌더로 Standard 또는 Advanced를 선택하면 돼요.

### 글로벌 워크플로우 설정은 누가 볼 수 있나요?

적절한 접근 권한이 있는 에이전시 관리자와 에이전시 사용자가 볼 수 있어요. 서브 계정 사용자에게는 이 화면이 보이지 않아요.

### 초안과 게시 상태가 기본 빌더나 보기에 영향을 주나요?

아니요. **Draft**(초안)와 **Published**(게시됨) 상태는 워크플로우가 어떤 빌더 보기로 열리는지와 관계가 없어요.

### 이 설정을 조회하거나 바꾸는 API가 있나요?

현재 이 설정에 대해 공개된 API는 문서화되어 있지 않아요. 설정은 화면에서 직접 해야 해요.
