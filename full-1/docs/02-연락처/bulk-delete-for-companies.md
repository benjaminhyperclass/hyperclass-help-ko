---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007904-bulk-delete-for-companies
번역일: 2026-11-07
카테고리: 02-연락처
---

# 회사 일괄 삭제

목록 화면에서 여러 회사 레코드를 한 번에 삭제하는 기능이에요. 오래된 회사, 테스트용 회사, 잘못 가져온 회사를 하나씩 지우지 않고 한꺼번에 정리할 때 쓰세요.

## 회사 일괄 삭제란?

회사 목록 화면에서 체크박스로 여러 레코드를 선택해 한 번에 삭제하는 기능이에요.

레코드를 하나씩 선택할 수도 있고, 한 페이지의 레코드를 모두 선택할 수도 있어요. 필터나 검색을 먼저 적용한 뒤 그 결과에서 선택해도 돼요.

## 주요 장점

- 여러 회사를 한 번에 삭제할 수 있어요.
- 회사를 하나씩 열지 않고 목록 화면에서 바로 정리할 수 있어요.
- **회사**, **사용자 지정 객체**, **작업**에서 선택하고 삭제하는 방식이 모두 같아요.
- 삭제한 회사는 60일 이내에 **일괄 작업** 페이지에서 복원할 수 있어요.

## 회사를 일괄 삭제하는 방법

1. 서브 계정에서 **회사**로 이동하세요.

2. 목록 화면에서 삭제할 회사의 왼쪽 체크박스를 선택하세요. 맨 위 머리글의 체크박스를 선택하면 현재 페이지의 모든 레코드가 선택돼요.

![목록 화면에서 회사 체크박스를 선택한 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071005935/original/-RCFHqCBnRYdIfC0agaDk1Sz3r-ocz_RNw.jpeg?1778490713)

3. 나타나는 일괄 작업 막대에서 **삭제**를 클릭하세요.

![일괄 작업 막대의 삭제 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071005922/original/-D5QRuba8PMYgOORHfrr6xtHDyt35AgfuQ.png?1778490702)

4. 확인 창에서 삭제를 확인하세요.

![삭제 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071006023/original/Hz_USA-FoRqxOeDCDVe7hJK3QLaAnFmy-w.png?1778490762)

5. **일괄 작업** 페이지에서 진행 상황과 로그를 확인할 수 있어요.

![일괄 작업 페이지에서 진행 상황과 로그를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071006084/original/wAYENd027mXat9oBdhcLdjRRJa9Kv17sXg.png?1778490796)

## 회사를 삭제하면 어떻게 되나요?

회사를 삭제하면 해당 회사 레코드와 모든 필드 값이 삭제돼요.

삭제한 회사에 연결된 관계와 연결 정보도 함께 삭제돼요. 아래 항목이 포함돼요.

- 관련 **연락처**, **기회 관리**, **사용자 지정 객체** 레코드와의 연결
- 관련 메모, **작업**과의 연결
- 이런 관계에 적용한 모든 연결 레이블

회사 레코드에 직접 속한 데이터에는 회사에 원래 적용되던 연쇄 삭제 방식이 그대로 적용돼요.

## 삭제한 회사를 복구하는 방법

일괄 삭제한 회사는 삭제한 날부터 **60일** 이내에 **일괄 작업** 페이지에서 복원할 수 있어요. 60일이 지나면 회사가 완전히 삭제되어 복구할 수 없어요.

삭제한 회사를 복원하려면 다음과 같이 하세요.

1. 서브 계정에서 **일괄 작업**으로 이동하세요.

![일괄 작업 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071006133/original/gWdQ6AvsALhJGTUzXFxxz1nulpiLvFIEFA.png?1778490826)

2. 해당 작업 행을 찾아 오른쪽의 점 세 개 메뉴를 클릭한 다음 **복원**을 클릭하세요.

![점 세 개 메뉴에서 복원을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071006194/original/g2szJw1gcyEKINwPMluOGe7F0w6sosm8Yg.png?1778490870)

3. 확인 창에서 복원을 확인하세요.

복원은 새 작업으로 실행되고 **일괄 작업** 표에 나타나요. 작업이 끝나면 회사가 필드 값, 연결 정보와 함께 목록 화면에 다시 표시돼요.

## 자주 묻는 질문

### 필터나 검색을 적용한 목록에서도 회사를 일괄 삭제할 수 있나요?

네, 할 수 있어요. 필터나 검색을 먼저 적용한 다음, 그 결과에서 체크박스로 레코드를 선택하세요.

### 삭제한 회사는 얼마 동안 복원할 수 있나요?

삭제한 날부터 60일 동안 복원할 수 있어요. 그 이후에는 회사가 완전히 삭제돼요.

### 삭제한 회사를 복원하면 연결 정보도 함께 복원되나요?

네, 복원돼요. **일괄 작업** 페이지에서 회사를 복원하면 이전의 연결 정보와 연결 레이블도 레코드와 함께 복원돼요.
