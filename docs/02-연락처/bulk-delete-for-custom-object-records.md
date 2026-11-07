---
원문: /support/solutions/articles/155000007906-bulk-delete-for-custom-object-records
번역일: 2026-11-07
카테고리: 02-연락처
---

# 사용자 지정 객체 레코드 일괄 삭제

목록 화면에서 **사용자 지정 객체** 레코드를 한 번에 여러 개 삭제할 수 있어요. 오래된 레코드, 테스트용 레코드, 잘못 가져온 레코드를 하나씩 열지 않고 정리할 때 쓰세요.

## 사용자 지정 객체 일괄 삭제란?

일괄 삭제는 **사용자 지정 객체** 목록 화면에서 쓰는 기능이에요. 체크박스로 레코드를 여러 개 선택한 뒤 한 번에 삭제할 수 있어요.

레코드를 하나씩 선택해도 되고, 한 페이지의 레코드를 모두 선택해도 돼요. 필터나 검색을 먼저 적용한 다음, 걸러진 결과에서 선택할 수도 있어요.

## 이럴 때 좋아요

- 여러 **사용자 지정 객체** 레코드를 한 번에 삭제할 수 있어요.
- 레코드를 하나씩 열지 않고 목록 화면에서 바로 정리할 수 있어요.
- 삭제한 레코드는 **일괄 작업** 페이지에서 60일 안에 복구할 수 있어요.

## 사용자 지정 객체 레코드를 일괄 삭제하는 방법

1. 서브 계정에서 원하는 **사용자 지정 객체**로 이동하세요.

2. 목록 화면에서 각 행 왼쪽의 체크박스로 삭제할 레코드를 선택하세요. 맨 위 체크박스를 선택하면 해당 페이지의 레코드가 모두 선택돼요.

   ![목록 화면에서 레코드를 선택한 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007269/original/6X6EC85JdsSafppjkv6gW4C-sMxQ39fwwQ.jpeg?1778491214)

3. 나타나는 일괄 작업 표시줄에서 **삭제**를 클릭하세요.

   ![일괄 작업 표시줄의 삭제 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007313/original/wQevRoBbGQJkiqRQGyWweMWV5kO2l_yCcw.jpeg?1778491247)

4. 확인 창에서 작업을 확인하세요.

   ![삭제 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007411/original/RKy1s07VkrFeIedg_BGDNGa6SLWTbCxzXw.jpeg?1778491300)

5. **일괄 작업** 페이지에서 진행 상황과 로그를 확인할 수 있어요.

   ![일괄 작업 페이지의 진행 상황](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007753/original/cRmWII4FAwDoO4sfhQAKUDNhIpmvUgyWGg.jpeg?1778491376)

   ![일괄 작업 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007730/original/Rg9khG3lGEN1xdstBhi51tU_y-lDPsOSiQ.png?1778491365)

## 레코드를 삭제하면 어떻게 되나요?

**사용자 지정 객체** 레코드를 삭제하면 레코드와 모든 필드 값이 함께 삭제돼요.

삭제한 레코드에 있던 모든 관계와 연결도 함께 사라져요. 구체적으로는 다음과 같아요.

- 관련 **메모**, **작업**과의 연결
- 관련 **연락처**, **회사**, **기회 관리** 항목과의 연결
- 다른 **사용자 지정 객체** 레코드와의 연결
- 이 관계에 적용된 연결 레이블

관련 메모, 작업, 연락처, 회사, 기회 관리 항목, 다른 **사용자 지정 객체** 레코드 자체는 삭제되지 않아요. 삭제한 레코드와 이어진 연결만 끊어져요.

## 삭제한 레코드를 복구하는 방법

일괄 삭제한 **사용자 지정 객체** 레코드는 삭제 후 **60일** 안에 **일괄 작업** 페이지에서 복원할 수 있어요. 60일이 지나면 레코드는 영구 삭제되어 복구할 수 없어요.

삭제한 레코드를 복원하는 방법은 다음과 같아요.

1. 서브 계정에서 **일괄 작업**으로 이동하세요.

   ![일괄 작업 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007774/original/BRlikpZ9Wss_f_MvIZHzjrItnE8QGEFYmQ.png?1778491396)

2. 해당 작업 행을 찾아 오른쪽의 점 세 개 메뉴를 클릭한 다음 **복원**을 클릭하세요.

   ![점 세 개 메뉴의 복원 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071007866/original/2aWH300_6pYvScelCRACitPeYVGLs6XOmA.png?1778491424)

3. 확인 창에서 작업을 확인하세요.

복원은 새 작업으로 실행되고, **일괄 작업** 표에 표시돼요. 복원이 끝나면 레코드가 필드 값, 연결과 함께 목록 화면으로 돌아와요.

## 자주 묻는 질문

### 필터나 검색을 적용한 목록에서도 일괄 삭제할 수 있나요?

네, 할 수 있어요. 필터나 검색을 먼저 적용한 다음, 걸러진 결과에서 체크박스로 레코드를 선택하세요.

### 삭제한 사용자 지정 객체 레코드는 얼마 동안 복원할 수 있나요?

삭제한 날부터 약 60일 동안 복원할 수 있어요. 그 이후에는 레코드가 영구 삭제돼요.

### 일괄 삭제하면 연결된 메모와 작업도 삭제되나요?

아니요. **사용자 지정 객체** 레코드를 삭제하면 관련 메모, 작업과의 연결만 삭제돼요. 메모와 작업 자체는 삭제되지 않아요.

### 삭제한 레코드를 복원하면 연결도 함께 복원되나요?

네, 복원돼요. **일괄 작업** 페이지에서 레코드를 복원하면 이전의 연결과 연결 레이블도 레코드와 함께 복원돼요.
