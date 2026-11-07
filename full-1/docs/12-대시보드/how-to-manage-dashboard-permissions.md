---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001532-how-to-manage-dashboard-permissions
번역일: 2026-11-06
카테고리: 12-대시보드
---

# 대시보드 권한 관리

대시보드는 만든 사람만 볼 수 있게 비공개로 둘 수도 있고, 역할별로 접근 수준을 달리해 공유할 수도 있어요. 이 문서에서는 대시보드 권한의 종류와 설정 방법을 안내해요.

## 대시보드 권한이란?

대시보드 권한은 다음 네 가지 수준으로 나뉘어요.

| 수준 | 설명 |
| --- | --- |
| **FULL**(전체 권한) | 대시보드를 만들고, 편집하고, 공유하고, 삭제할 수 있어요. |
| **EDIT**(편집 권한) | 대시보드와 위젯을 편집할 수 있어요. 대시보드를 삭제할 수는 없어요. |
| **VIEW**(보기 권한) | 대시보드를 읽기 전용으로 볼 수 있어요. |
| **NO ACCESS**(접근 불가) | 대시보드에 아예 접근할 수 없어요. |

권한 수준별로 할 수 있는 작업은 아래 표와 같아요.

| | FULL | EDIT | VIEW | NO ACCESS | PRIVATE DASHBOARD(비공개 대시보드) | OWNER(소유자) |
| --- | --- | --- | --- | --- | --- | --- |
| 권한 관리 | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| 대시보드 삭제 | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| 기본 대시보드로 설정(**기본값으로 설정**) | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| 대시보드 편집 | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| 대시보드 복제 | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| 대시보드 보기 | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| 다른 서브 계정으로 복제(에이전시 수준만 가능) | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |

- 대시보드 권한은 대시보드 소유자이거나 FULL 권한이 있는 역할만 편집할 수 있어요.
- 에이전시 관리자는 비공개가 아닌 모든 대시보드에 항상 FULL 권한을 가져요.
- 기본 대시보드로 설정하는 일은 **계정 관리자**, 또는 해당 대시보드에 FULL 권한이 있는 에이전시 역할만 할 수 있어요.
- 다른 서브 계정으로 대시보드를 복제하는 일은 에이전시 역할만 할 수 있어요.

## 대시보드 권한 설정하기

### 새 대시보드에 권한 설정하기

1. 왼쪽 메뉴에서 **대시보드**로 이동한 다음, 파란색 **Dashboard Selection**(대시보드 선택) 메뉴를 클릭하고 **Add Dashboard**(대시보드 추가)를 클릭하세요.

   ![대시보드 선택 메뉴에서 대시보드 추가 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433881/original/rQJh1RSrr244FcvqH8VsYlSNaL1_5L9_6A.png?1743641657)

2. **Create a Blank Dashboard**(빈 대시보드 만들기) 아래에 있는 **Select**(선택)를 클릭하세요.

   ![빈 대시보드 만들기에서 선택 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433890/original/lpbrI6m-ixLatlPsrrpGNDCwvkylimB_Fw.png?1743641724)

3. **New Dashboard**(새 대시보드) 창에서 대시보드를 비공개로 그대로 두거나, 비공개를 꺼서 공유 권한을 설정하세요. 설정을 마쳤으면 **확인**을 클릭하세요. 설정한 권한으로 새 대시보드가 만들어져요.

   ![새 대시보드 창에서 권한 설정 후 확인 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433908/original/9V9Sr9PLG29YqUu0VXW1O2t2yRRyqmHvdQ.png?1743641801)

### 기존 대시보드에 권한 설정하기

1. 권한을 바꿀 대시보드에서 점 3개 모양의 작업 메뉴를 클릭하고 **Manage Permissions**(권한 관리)를 클릭하세요.

   ![작업 메뉴에서 권한 관리 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433750/original/XBQjE4b9QWgmSCGpAV3ShVjvdPCuPizE5g.png?1743641029)

2. **Private**(비공개) 토글로 비공개(나만 볼 수 있음)와 공유 권한 설정 중 하나를 선택하세요. 변경을 마쳤으면 **저장**을 클릭하세요. 창이 닫히고 대시보드로 돌아가요.

   ![비공개 토글로 권한 설정 후 저장 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433989/original/whua1cN1ou81Jrr3_UI7SGEnO-PPebUdng.png?1743642044)

## 에이전시 화면과 계정 화면의 차이

로그인한 사용자의 역할에 따라 권한 화면과 선택할 수 있는 옵션이 달라져요.

### 에이전시 화면의 대시보드 권한

에이전시 관리자는 만든 사람이 비공개로 설정한 대시보드를 제외한 모든 대시보드에 항상 FULL 권한을 가져요. 에이전시 화면에서는 접근 수준을 설정할 수 있는 역할이 **Agency User**(에이전시 사용자), **계정 관리자**, **계정 사용자** 세 가지예요.

![에이전시 화면의 대시보드 권한](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044434191/original/ag_owqTRkCZiAF5mHoJ3MUHYMr0kLRkY-g.png?1743643164)

### 계정 화면의 대시보드 권한

계정 화면에서는 접근 수준을 설정할 수 있는 역할이 **계정 관리자**와 **계정 사용자** 두 가지예요.

![계정 화면의 대시보드 권한](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023290478/original/LNohQGZJfVvUZVBvP4IWBFbbhDDct6fjHA.png?1711017852)

## 역할과 권한의 위계

대시보드 권한은 다음과 같은 위계를 따라요.

에이전시 관리자 > 에이전시 사용자 > **계정 관리자** > **계정 사용자**

상위 역할의 권한이 하위 역할의 권한보다 우선해요. 하위 역할은 상위 역할보다 높은 권한을 가질 수 없어요.

예를 들어 대시보드가 **계정 관리자**: EDIT로 설정되어 있을 때 **계정 관리자**를 VIEW로 바꾸면, **계정 사용자**도 자동으로 VIEW로 바뀌어요. <!-- 검토 필요: 원문 내용이 서로 다름 (원문 예시에서 "Account User:Edit is changed to Account Admin:View"로 변경 대상이 불분명함) -->

## 데이터 내보내기 권한

**Export data**(데이터 내보내기) 권한은 사용자가 대시보드 위젯의 데이터를 내보낼 수 있는지를 정해요. 팀원들과 리포트를 공유하면서도, 대시보드 데이터를 언제 내려받을 수 있는지는 관리자가 정할 수 있어요.

## 자주 묻는 질문

### 권한을 따로 설정하지 않으면 어떻게 되나요?
기본적으로 대시보드는 접근을 제한하지 않는 한 모든 사용자에게 보여요.

### **할당된 데이터만**은 정확히 무엇을 제한하나요?
대시보드 위젯에 사용자에게 할당된 레코드(연락처, 기회 등)와 관련된 데이터만 보이도록 걸러 줘요.

### 대시보드에서 사용자나 역할을 빼려면 어떻게 하나요?
해당 대시보드의 권한 창을 다시 열고, 빼려는 사용자나 역할의 체크를 해제하세요.
