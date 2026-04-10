---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Contact Workflow Actions
---

# 워크플로우 액션 - 일회용 예약 링크 생성

**목차**

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [설정 방법](#설정-방법)
- [예시](#예시)

## 개요

일회용 링크는 예약이 완료되면 자동으로 만료되는 고유한 예약 링크입니다. '일회용 예약 링크 생성' 액션을 사용하면 워크플로우 내에서 이러한 링크를 쉽게 생성할 수 있습니다.

## 액션 이름

Generate One Time Booking Link (일회용 예약 링크 생성)

## 액션 설명

이 액션은 링크 생성 시 발생하는 수동 작업을 없애고, 원활하고 오류 없는 예약 프로세스를 보장합니다. 예약 관리에 대한 동적이고 효과적이며 유연한 접근 방식을 제공하여 사용자에게 더 나은 제어력과 적응성을 제공합니다.

## 설정 방법

워크플로우 내에서 동적 일회용 링크를 생성하려면 다음 단계를 따르세요:

1. **워크플로우 생성**: 계정에서 워크플로우를 생성합니다. 특정 요구 사항에 따라 워크플로우를 시작하는 트리거를 정의하세요.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993277/original/O10E6elJz1v8jSs4umstCeXyk0Ax-gigpA.png?1726564861)

2. **'일회용 예약 링크 생성' 액션 추가**: 워크플로우에서 액션을 추가하세요. 'Appointments(예약)' 카테고리로 이동하여 'Generate One Time Booking Link(일회용 예약 링크 생성)'를 선택합니다.

![액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993274/original/r8Xt76pd0HYYErmU1OT6R31FJ204JTWmiw.png?1726564860)

3. **캘린더 선택**: 일회용 링크를 생성할 캘린더를 선택하세요.

![캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993279/original/Pb-w18mPLnkVZA9Dd9tAKS0CfXj8JdU4dA.png?1726564861)

4. **생성된 링크 공유**: 연락처와 링크를 공유하려면 워크플로우에 커뮤니케이션 액션(예: 이메일)을 추가하세요.

![링크 공유](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993278/original/HVn5xo9-tr9w71Eo6bQKLmBewFhjPc1FCg.png?1726564861)

5. **커스텀 값 추가**: 트리거가 활성화될 때마다 생성되는 고유한 일회용 링크를 커스텀 값을 사용하여 이메일 본문에 삽입하세요. 'Generate One Time Booking Link(일회용 예약 링크 생성)'를 선택하고 'One Time Link(일회용 링크)'를 선택합니다.

![커스텀 값 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032993280/original/CghJ2vb2XniMDcil1Gkh_Nf4_r2lAhvg7A.png?1726564861)

6. **이메일 본문 커스터마이징**: 필요에 따라 이메일 본문을 커스터마이징하고 '저장'을 클릭합니다.

7. **워크플로우 발행**: 워크플로우 설정이 완료되면 발행하세요. 이제 정의한 조건에 의해 트리거되어 연락처가 워크플로우에 진입할 때마다, 고유한 일회용 링크가 생성되어 이메일을 통해 전송됩니다.

## 예시

**폼을 제출한 사용자에게 일회용 예약 링크 보내기**

**트리거**

**Form Submitted(폼 제출)** - 트리거를 추가하고 제출 시 사용자가 예약 링크를 받을 폼을 선택합니다.

**액션**

**Generate One time booking link(일회용 예약 링크 생성)** - 액션을 추가하고 캘린더를 선택합니다.

**Send Email(이메일 발송)** - 이메일 액션에서 커스텀 값 선택기를 사용하여 이메일에 일회용 예약 링크를 추가합니다.

**결과**

고객이 폼을 제출하자마자 캘린더에 대한 예약 링크를 받게 되며, 이를 사용하여 약속을 예약할 수 있습니다.

---
*원문 최종 수정: Tue, 17 Sep, 2024 at 4:25 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*