---
원문: /support/solutions/articles/155000003461-workflow-action-generate-one-time-booking-link
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Generate One Time Booking Link(일회용 예약 링크 생성)

**Generate One Time Booking Link**(일회용 예약 링크 생성) 액션은 워크플로우 안에서 일회용 예약 링크를 자동으로 만들어 줘요. 연락처마다 고유한 링크를 보내야 할 때 사용하세요.

## 개요

일회용 링크는 예약이 완료되면 자동으로 만료되는 고유한 일정 예약 링크예요. 이 액션을 쓰면 워크플로우 안에서 바로 이런 링크를 만들 수 있어요.

## 액션 이름

Generate One Time Booking Link

## 액션 설명

이 액션을 쓰면 링크를 직접 만들 필요가 없어서, 예약 과정을 오류 없이 매끄럽게 진행할 수 있어요. 예약을 더 유연하게 관리할 수 있다는 점도 장점이에요.

## 설정 방법

워크플로우에서 일회용 링크를 자동으로 만들려면 아래 순서대로 설정하세요.

1. 계정에서 워크플로우를 만들어요. 상황에 맞게 워크플로우를 시작할 트리거를 정하세요.

   [![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993277/original/O10E6elJz1v8jSs4umstCeXyk0Ax-gigpA.png?1726564861)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018179878/original/9PH-4QaDl1YRM4CRiWB2XUQGAMQ-z3B54w.png?1705662313)

2. 워크플로우에 액션을 추가해요. **Appointments**(예약) 카테고리로 이동한 다음 **Generate One Time Booking Link**를 선택하세요.

   [![Appointments 카테고리에서 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993274/original/r8Xt76pd0HYYErmU1OT6R31FJ204JTWmiw.png?1726564860)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018179038/original/YCkyI2w8TIZMetLj9EHdbrWc3tthBnU8FQ.png?1705662119)

3. 일회용 링크를 만들 캘린더를 선택하세요.

   [![캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993279/original/Pb-w18mPLnkVZA9Dd9tAKS0CfXj8JdU4dA.png?1726564861)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018180332/original/lDOQfOfeezXDE2rv93kRi7tuZRnssl3r0g.png?1705662475)

4. 만들어진 링크를 연락처에게 보내려면 워크플로우에 이메일 같은 커뮤니케이션 액션을 추가하세요.

   [![이메일 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993278/original/HVn5xo9-tr9w71Eo6bQKLmBewFhjPc1FCg.png?1726564861)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018181091/original/RKQiBow9CoDlsPKjvyEGvC-0QiqzQ_JTHw.png?1705662726)

5. 이메일 본문에 **Custom Value**(커스텀 값)로 일회용 링크를 넣어요. 이 링크는 트리거가 실행될 때마다 새로 만들어져요. **Generate One Time Booking Link**를 선택한 다음 **One Time Link**(일회용 링크)를 고르세요.

   [![커스텀 값으로 일회용 링크 삽입](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993280/original/CghJ2vb2XniMDcil1Gkh_Nf4_r2lAhvg7A.png?1726564861)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018180795/original/lGXO4iv2tvapxRKiIFiXIeulY_6LFexvVg.png?1705662663)

6. 필요에 맞게 이메일 본문을 수정한 다음 **Save**(저장)를 클릭하세요.

7. 워크플로우 설정이 끝났으면 게시하세요. 이제 정해 둔 조건으로 연락처가 워크플로우에 들어올 때마다 고유한 일회용 링크가 만들어져 이메일로 전달돼요.

## 예시

**폼을 제출한 사용자에게 일회용 예약 링크 보내기**

**트리거**

**Form Submitted**(폼 제출) 트리거를 추가하고, 제출하면 예약 링크를 받게 할 폼을 선택하세요.

**액션**

1. **Generate One Time Booking Link** 액션을 추가하고 캘린더를 선택하세요.
2. **Send Email**(이메일 보내기) 액션을 추가하세요. 이메일 본문에서 **Custom Value** 선택기를 사용해 일회용 예약 링크를 넣으세요.

**결과**

고객이 폼을 제출하면 바로 캘린더 예약 링크를 받아요. 고객은 이 링크로 예약을 잡을 수 있어요.
