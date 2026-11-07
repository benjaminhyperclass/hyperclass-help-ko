---
원문: /support/solutions/articles/155000001711-workflow-action-for-generating-one-time-link
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 워크플로우 액션 — Generate One-Time Booking Link(일회용 예약 링크 생성)

워크플로우 안에서 일회용 예약 링크를 자동으로 만들어 연락처에게 보내는 방법을 안내해요. 링크를 하나씩 직접 만들 필요가 없어서, 예약 안내를 자동화할 때 쓰면 편해요.

## 일회용 링크란?

일회용 링크는 예약이 끝나면 자동으로 만료되는 고유한 예약 링크예요. **Generate One-Time Booking Link**(일회용 예약 링크 생성) 액션을 쓰면 워크플로우 안에서 이 링크를 바로 만들 수 있어요.

## 워크플로우에 일회용 링크를 넣으면 좋은 점

- **예약 과정 간소화:** 링크를 직접 만드는 수고가 없어서, 실수 없이 매끄럽게 예약을 진행할 수 있어요.
- **다양한 워크플로우에 활용:** 여러 예약 상황에 맞춰 만든 워크플로우에 두루 넣어 쓸 수 있어요.
- **예약 관리 강화:** 예약을 유연하고 효과적으로 관리할 수 있어서, 더 세밀하게 조정할 수 있어요.

## 동적 일회용 링크 만들기

아래 순서대로 따라 하면 워크플로우 안에서 일회용 링크를 만들 수 있어요.

1. 계정에서 워크플로우를 만드세요. 필요에 맞게 워크플로우를 시작할 트리거를 정해요.

   ![워크플로우를 만들고 트리거를 정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018179878/original/9PH-4QaDl1YRM4CRiWB2XUQGAMQ-z3B54w.png?1705662313)

2. 워크플로우에 액션을 추가하세요. **Appointments**(예약) 카테고리에서 **Generate One Time Booking Link**(일회용 예약 링크 생성)를 선택해요.

   ![Appointments 카테고리에서 Generate One Time Booking Link 액션을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018179038/original/YCkyI2w8TIZMetLj9EHdbrWc3tthBnU8FQ.png?1705662119)

3. 일회용 링크를 만들 캘린더를 선택하세요.

   ![일회용 링크를 만들 캘린더를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018180332/original/lDOQfOfeezXDE2rv93kRi7tuZRnssl3r0g.png?1705662475)

4. 만든 링크를 연락처에게 보내려면 워크플로우에 이메일 같은 커뮤니케이션 액션을 추가하세요.

   ![링크를 보내기 위해 이메일 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018181091/original/RKQiBow9CoDlsPKjvyEGvC-0QiqzQ_JTHw.png?1705662726)

5. **Custom Value**(커스텀 값)로 이메일 본문에 일회용 링크를 넣으세요. 트리거가 실행될 때마다 고유한 일회용 링크가 새로 만들어져요. **Generate One Time Booking Link**를 선택한 다음 **One Time Link**를 고르세요.

   ![Custom Value에서 One Time Link를 선택해 이메일 본문에 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018180795/original/lGXO4iv2tvapxRKiIFiXIeulY_6LFexvVg.png?1705662663)

6. 이메일 본문을 필요에 맞게 수정하고 **Save**(저장)를 클릭하세요.

7. 워크플로우 설정이 끝나면 게시하세요. 이제 정해 둔 조건으로 연락처가 워크플로우에 들어올 때마다 고유한 일회용 링크가 만들어져 이메일로 전달돼요.
