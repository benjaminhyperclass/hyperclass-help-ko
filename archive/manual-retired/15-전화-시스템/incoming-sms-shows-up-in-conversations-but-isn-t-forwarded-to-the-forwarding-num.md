---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# 수신 SMS가 대화에는 나타나지만 지정한 전달 번호로 전달되지 않을 때

**개요**

Hyperclass의 모바일 앱과 웹 앱은 수신 SMS 메시지를 Conversations(대화) 탭에서 직접 받도록 설계되어 있습니다. 하지만 커스텀 트리거와 알림이 포함된 워크플로우를 설정하면 이러한 수신 메시지 알림을 전달할 수도 있습니다. 단, 이 경우 추가 요금이 발생합니다.

수신 SMS 메시지가 대화 탭에 나타나면서 동시에 지정한 번호로 알림이 자동 전달되길 원한다면, 이 가이드를 따라해보세요. 아래 문제 해결 단계를 통해 모든 수신 메시지가 원하는 전달 번호로 성공적으로 리디렉션되도록 할 수 있습니다.

**목차**

- [1단계: 워크플로우 만들기](#1단계-워크플로우-만들기)
- [2단계: 처음부터 시작](#2단계-처음부터-시작)
- [3단계: 워크플로우 트리거 추가](#3단계-워크플로우-트리거-추가)
- [4단계: "고객 응답" 선택](#4단계-고객-응답-선택)
- [5단계: 필터 추가](#5단계-필터-추가)
- [6단계: 응답 채널 선택](#6단계-응답-채널-선택)
- [7단계: SMS 선택](#7단계-sms-선택)
- [8단계: 트리거 저장 클릭](#8단계-트리거-저장-클릭)
- [9단계: 액션 추가 – 내부 알림 발송](#9단계-액션-추가-내부-알림-발송)
- [10단계: 커스텀 값 추가 – 메시지 본문](#10단계-커스텀-값-추가-메시지-본문)
- [11단계: 커스텀 값 추가 – 연락처 이름](#11단계-커스텀-값-추가-연락처-이름)
- [자주 묻는 질문](#자주-묻는-질문)

---

Hyperclass의 모바일 앱과 웹 앱을 사용하면 수신 메시지를 Conversations(대화) 탭에서만 받게 됩니다.

수신 SMS는 전달 번호로 자동 전달되지 않습니다

커스텀 값 **{{message.body}}**를 사용하여 **Customer replied(고객 응답)** 워크플로우 트리거를 다음과 같이 설정해야 합니다

워크플로우 생성 단계:

## **1단계: 워크플로우 만들기**

Automation(자동화) > Workflows(워크플로우) > Create Workflow(워크플로우 만들기)로 이동합니다.

![워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130737/original/95tUaOX4SPgqFWq8o42zKkLBOrb3tjWtdA.png?1758279172)

## **2단계: 처음부터 시작**

Start from Scratch(처음부터 시작)를 클릭한 후 Create New Workflow(새 워크플로우 만들기)를 선택합니다.

![처음부터 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130880/original/H-26rH1GF0MkZOOQL1iKd1V_1tzRhIcl5g.png?1758279262)

## **3단계: 워크플로우 트리거 추가**

Add New Workflow Trigger(새 워크플로우 트리거 추가)를 클릭합니다.

![워크플로우 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131077/original/HOq864JsX-wWx1cruXGdObKDsvKSPJ05FA.png?1758279349)

## **4단계: "고객 응답" 선택**

워크플로우 트리거로 Customer Replied(고객 응답)를 선택합니다.

![고객 응답 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131310/original/51XMxxiWX-u4o-Kl0w4oApwzqZDavHBnqw.png?1758279423)

## **5단계: 필터 추가**

Add Filters(필터 추가)를 클릭합니다.

![필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131335/original/0fpNZPq7R2UlUM6JFbgvlu_PAdMnq6j2fQ.png?1758279461)

## **6단계: 응답 채널 선택**

필터 옵션에서 Reply Channel(응답 채널)을 선택합니다.

![응답 채널 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131523/original/6qbjI1i223rfhQpNppjcwA_F6uARI6fPHw.png?1758279519)

## **7단계: SMS 선택**

응답 채널 드롭다운에서 SMS를 선택합니다.

![SMS 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131571/original/g_oLzHXTS11l9bLBtjbxWzvvLXFKS_yKLw.png?1758279548)

## 8단계: 트리거 저장 클릭

Please select action(액션을 선택해주세요)을 클릭합니다.

![트리거 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131595/original/o3pLYwY_EgdHXo0ZNMn7dVP5B-N8olGW_Q.png?1758279574)

## **9단계: 액션 추가 – 내부 알림 발송**

Send Internal Notification(내부 알림 발송)을 선택합니다.

⚠주의: SMS 알림은 발송되는 SMS마다 요금이 부과됩니다.

![내부 알림 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131685/original/AUl9fAcdFRTqir3wrdvPRqlqpK14SQ55gg.png?1758279623)

![내부 알림 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131784/original/mK9gRU0NiByWvt9VPG3n_e-oUo4dLNKwFQ.png?1758279666)

## **10단계: 커스텀 값 추가 – 메시지 본문**

Custom Values(커스텀 값) > Message(메시지) > Message Body(메시지 본문)로 이동합니다.

![메시지 본문 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131877/original/fUx-zzkaWf67vLqw4LGymFTCmAxkow8q8Q.png?1758279735)

## **11단계: 커스텀 값 추가 – 연락처 이름**

개인화를 위해 Contact(연락처) > First Name(이름)으로 이동합니다.

![연락처 이름 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054132059/original/CfQHim1rFFEmNoNrFnjOC4B78pxkyUJtrg.png?1758279821)

---

# 자주 묻는 질문

현재 자주 묻는 질문이 없습니다. 이 섹션에 질문을 추가할 수 있도록 이 문서에 대한 피드백을 제출해주세요!

---
*원문 최종 수정: Fri, 19 Sep, 2025 at 6:04 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*