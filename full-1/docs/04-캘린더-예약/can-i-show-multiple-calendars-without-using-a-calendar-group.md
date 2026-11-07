---
원문: https://help.gohighlevel.com/support/solutions/articles/48001049320-can-i-show-multiple-calendars-without-using-a-calendar-group-
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 캘린더 그룹 없이 한 페이지에 캘린더 여러 개 표시하기

캘린더 그룹을 만들지 않고도 한 페이지에 캘린더를 두 개 이상 보여 줄 수 있어요. 캘린더 링크를 이용하는 방법과 퍼널 페이지에 코드를 넣는 방법을 안내해요.

## 동영상 개요

[동영상](https://www.youtube.com/embed/eUJDwaE0WC8?&wmode=opaque)

## 캘린더 링크로 표시하기

1. 캘린더마다 링크 아이콘을 클릭해서 각 캘린더 링크를 새 탭에서 여세요.

   ![캘린더별 링크 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48028729853/original/iSYberKOoEApQfh-8Pr4Juo8nEtcOE7NUQ.png?1582550960)

2. 한 캘린더에서 캘린더 ID를 복사하세요.
3. 다른 캘린더로 이동해서 그 캘린더 ID 뒤에 쉼표(,)를 입력하세요.
4. 쉼표 뒤에 복사한 캘린더 ID를 붙여 넣고 Enter 키를 눌러 페이지를 새로 불러오세요.

   ![캘린더 ID를 쉼표로 이어 붙이는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48028730526/original/wOzP-A0gi7Wgl9PKNIla6MJdbRodnIXH4A.gif?1582551129)

## 퍼널 페이지에 캘린더 여러 개 삽입하기

1. **설정 > Appointment Widget**(예약 위젯)으로 이동해서 첫 번째 캘린더의 삽입 코드를 복사하세요.
2. 퍼널 페이지로 이동해서 **사용자 지정 JS/HTML** 요소를 추가하세요.
3. **Open Code Editor**(코드 편집기 열기)를 클릭하고 복사한 캘린더 삽입 코드를 붙여 넣으세요.

   ![코드 편집기에 캘린더 삽입 코드를 붙여 넣는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48028731607/original/O98ivJb2-YuppRZs1LjzSof-zzL4IgZELg.gif?1582551394)

4. 새 탭에서 **설정 > Appointment Widget**으로 다시 이동하세요.
5. 캘린더 이름 드롭다운에서 두 번째 캘린더를 선택하고, 그 캘린더의 ID를 복사하세요.
6. **사용자 지정 JS/HTML** 요소의 코드 편집기가 열려 있는 퍼널 페이지 탭으로 돌아가세요.
7. 코드에 있는 캘린더 ID 뒤에 쉼표(,)를 입력하고 두 번째 캘린더 ID를 붙여 넣으세요.
8. **Yes, save**(예, 저장)를 클릭하세요.

   ![두 번째 캘린더 ID를 쉼표 뒤에 붙여 넣고 저장하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48028732907/original/OOszXMmvEULTeK8eAXfOZvVv6lsRwF2CKg.gif?1582551763)

9. 퍼널 페이지를 저장한 뒤 미리보기로 확인하세요.
