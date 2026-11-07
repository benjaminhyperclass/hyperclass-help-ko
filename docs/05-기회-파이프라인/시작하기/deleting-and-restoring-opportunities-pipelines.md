---
원문: /support/solutions/articles/155000002041-deleting-and-restoring-opportunities-pipelines
번역일: 2026-11-06
카테고리: 05-기회-파이프라인
---

# 기회·파이프라인 삭제하고 복원하기

오래된 기회와 파이프라인을 삭제해 CRM을 깔끔하게 정리하고, 실수로 삭제했을 때는 복원할 수 있어요. 이 문서에서는 기회와 파이프라인을 삭제하고 복원하는 방법을 안내해요.

## 기회·파이프라인 삭제와 복원이란?

기회는 파이프라인 안에서 관리하는 개별 딜이나 고객사이고, 파이프라인은 영업 과정을 단계별로 구성한 틀이에요. 기회를 삭제하면 진행 중인 파이프라인에서 사라져요. 삭제한 기회는 활성 기회 목록에 보이지 않지만, 데이터는 시스템에 남아 있어서 최대 60일 동안 복원할 수 있어요.

그래서 오래되었거나 필요 없는 기회를 정리하면서도, 나중에 필요하면 다시 되살릴 수 있어요.

## 삭제와 복원 기능의 장점

CRM을 관리할 때 실수에 대한 부담을 덜 수 있어요.

- 실수로 삭제해도 복구: 60일 이내라면 파이프라인과 기회를 쉽게 복원할 수 있어요.
- 감사 로그 연동: 변경 내역을 확인하고, 삭제된 항목을 한눈에 보며 복구할 수 있어요.
- 관리자 권한: 삭제와 복원 같은 중요한 작업은 권한이 있는 사용자만 할 수 있어요.
- 파이프라인 전체 복구: 삭제된 파이프라인을 복원하면 그 안의 단계와 기회도 함께 돌아와요.
- 깔끔한 관리: 기회 목록이나 파이프라인 구조를 필요할 때 정리할 수 있어요.

## 기회 삭제하기

### 방법 1: 기회 하나만 삭제하기

#### 기회 관리 열기

왼쪽 사이드바에서 **기회 관리**(Opportunities)를 클릭해 딜 목록을 열어요. 위쪽에서 **기회 관리** 탭이 선택되어 있는지 확인하세요. 그래야 파이프라인의 모든 현재 기회를 볼 수 있어요.

![기회 관리 메뉴와 기회 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051142927/original/1b-vxbD8HJEP9J_k5Pbl56CJmbMmQP2o8Q.png?1754580087)

#### 기회 선택하기

활성 기회 목록에서 삭제할 기회를 찾아 클릭해요. 기회의 상세 페이지가 열려요.

![기회를 클릭해 상세 페이지를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143133/original/2DYDCwvk3ed1tPT3VK-Vl2zTYIrUNFIgrA.gif?1754580146)

#### 삭제 아이콘 클릭하기

맨 아래 줄에 있는 **삭제** 아이콘을 클릭해요. **삭제 확인**을 클릭하면 해당 기회가 삭제돼요.

![기회 상세 페이지 아래쪽의 삭제 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143178/original/Q8LM3hAad7v6J86HNdxNLzqdzKZIPuOa4w.png?1754580180)

### 방법 2: 기회 여러 개 한 번에 삭제하기

1. **기회 관리**로 이동해요.
2. 체크박스로 삭제할 기회를 여러 개 선택해요.
   ![체크박스로 여러 기회를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063760832/original/MEaYZcEp8GnWzHJmG6YaP2clMXmrmxtimw.png?1769685609)
3. 일괄 작업 막대에서 **삭제**를 클릭해요.
4. **확인하려면 DELETE를 입력하세요** 입력란에 DELETE를 입력해 삭제를 확인해요.
   ![삭제 확인을 위해 DELETE를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063760866/original/UG0sVQonEL_iPTZSOhoVFu1eqmuwFQbEqg.png?1769685629)
5. 삭제는 백그라운드에서 처리돼요.

삭제를 시작하면 성공 메시지가 나타나고, 메시지의 링크를 누르면 **일괄 작업** 페이지에서 진행 상황을 확인할 수 있어요.
![삭제 성공 메시지와 일괄 작업 페이지 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063760907/original/1AtaK_PedYu7AcvC7vrBq8Rzh5SWP8IXkw.png?1769685655)

## 기회 복원하기

### 일괄 작업에서 복원하기 (권장)

1. **기회 관리**에서 **일괄 작업**으로 이동해요.
   ![기회 관리에서 일괄 작업으로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063761079/original/vD9c1S3CCg7GXkEoDx0kOynca6DjtfWkqw.png?1769685738)
2. 되돌리려는 삭제 작업을 찾아요.
3. 줄임표(⋮)를 클릭하고 **복원**을 선택해요.
   ![줄임표 메뉴에서 복원을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063761153/original/89c3vR43Rtz-EH05PDFCfbBarW_iYrJ6PA.png?1769685781)
4. 복원 작업을 확인해요.
   ![복원 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063761173/original/6P2z4DGGoJhW7eB4shX5uyz5JhM5P_1hLg.png?1769685797)

{% hint style="warning" %}
삭제된 연락처에 연결된 기회는 복원할 수 없어요.
{% endhint %}

### 감사 로그에서 복원하기 (다른 방법)

#### 설정으로 이동하기

복원을 시작하려면 사이드바 왼쪽 아래에서 **설정**을 클릭해요. 여기서 **감사 로그**를 열어 삭제된 기회를 복구할 수 있어요.

![사이드바 왼쪽 아래의 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143553/original/PxzBOwVG4vMwfZ7QTERkOFNcO6A0_WOe7A.png?1754580315)

#### 감사 로그 열기

**설정** 메뉴에서 아래로 스크롤해 **감사 로그**를 클릭해요. 삭제, 수정, 생성을 포함한 모든 사용자 작업의 전체 기록을 볼 수 있어요.

![설정 메뉴의 감사 로그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143834/original/XYiGO3nuiMX6VBQ116UZkHTKuWEb2N9DEQ.png?1754580369)

#### 기회 필터 적용하기

**액션** 필터를 **삭제됨**으로, **모듈** 필터를 **기회**로 설정해 로그를 좁혀요. 최근 60일 동안 삭제된 기회와 삭제한 사람, 삭제한 시간이 표시돼요.

![액션과 모듈 필터를 설정한 감사 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051144095/original/MgJ9aAWLwCHgN7I4Z_0teaPfm0cuCkNc_g.png?1754580436)

#### 기회 복원하기

복구할 삭제된 기회를 찾아 오른쪽의 줄임표(점 세 개)를 클릭해요. 드롭다운에서 **복원**을 선택하면 원래 파이프라인과 단계로 되돌아가요.

![줄임표 메뉴에서 복원을 선택하는 감사 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051144410/original/nxaGwnakQzXTTQegr_FqN54_LEBF7Eeo2g.png?1754580577)

### 또 다른 복원 방법

감사 로그 대신 **기회 페이지** 오른쪽 위의 점 세 개 메뉴를 클릭해도 돼요. 드롭다운에서 **Restore Opportunities**(기회 복원)를 선택하면 최근 삭제한 항목이 나와서 빠르게 복구할 수 있어요.

![기회 페이지 오른쪽 위 메뉴의 Restore Opportunities](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051144494/original/iHyJJfYBMxks69mX2_B_ZiRHCrC0CPGxlQ.png?1754580676)

## 파이프라인 삭제하기

{% hint style="info" %}
파이프라인은 에이전시 관리자와 계정 관리자만 삭제하고 복원할 수 있어요.
{% endhint %}

#### 파이프라인 탭 열기

왼쪽 사이드바에서 **기회 관리**로 이동한 뒤, 위쪽의 **파이프라인** 탭을 클릭해요. 계정에 있는 모든 파이프라인 목록이 나타나요.

![기회 관리의 파이프라인 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145496/original/7ErlF4pd2VX5qWfFGoeEeLVjOtQKwfDvDA.png?1754580971)

#### 파이프라인 삭제하기

삭제할 파이프라인 옆의 휴지통 아이콘을 클릭해요. 확인 창이 나타나고, 확인하면 파이프라인과 그에 딸린 모든 단계와 기회가 영구 삭제돼요.
![파이프라인 옆의 휴지통 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145574/original/FyLu6Yv6lq4Aml6ywppdCttcvosWLsR7FQ.png?1754581025)

## 파이프라인 복원하기

#### 설정에서 복구 시작하기

삭제한 파이프라인을 복원하려면 왼쪽 사이드바에서 **설정**으로 이동해요. 여기서 **감사 로그**를 열면 삭제된 항목을 복구할 수 있어요.

![왼쪽 사이드바의 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145668/original/uQP3TxvgrVuDCuFapAJHUODrTwjvG1p5IA.png?1754581140)

#### 감사 로그 열기

**설정** 패널에서 **감사 로그**를 클릭해 기록된 모든 사용자 활동을 확인해요. 여기서 삭제된 파이프라인 기록을 찾고 복원할 수 있어요.

![설정 패널의 감사 로그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145686/original/fnNxV_48vrc3Oqd4DJdw6lsHMcSbyhPKAw.png?1754581158)

#### 삭제된 파이프라인 복원하기

**감사 로그**에서 삭제된 파이프라인을 찾아 항목 오른쪽의 줄임표(점 세 개)를 클릭해요. **복원**을 선택하면 파이프라인과 그 단계, 모든 기회가 계정으로 돌아와요.

![삭제된 파이프라인 항목의 줄임표 메뉴에서 복원 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145908/original/_ixU5j4wxwshqiaQOJrz2eAqf5QJ3uSsdg.png?1754581310)

## 자주 묻는 질문

### 삭제한 파이프라인과 기회는 얼마 동안 복구할 수 있나요?

삭제한 시점부터 최대 60일까지 복구할 수 있어요.

### 삭제된 파이프라인에서 기회 하나만 복원할 수 있나요?

아니요. 파이프라인 전체를 복원해야 해요. 그러면 그 안의 기회와 단계도 함께 복구돼요.

### 파이프라인이나 기회는 누가 복원할 수 있나요?

에이전시 관리자나 계정 관리자만 복원할 수 있어요.

### 60일이 지난 뒤에 파이프라인을 완전히 삭제하면 어떻게 되나요?

60일이 지나면 시스템에서 데이터를 복구할 수 없어요.

### 파이프라인이나 기회를 누가 삭제하거나 복원했는지 기록이 남나요?

네, **감사 로그**에 삭제와 복원을 포함한 모든 사용자 작업이 기록되고, 누가 했는지도 확인할 수 있어요.
