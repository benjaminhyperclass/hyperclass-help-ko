---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Contact Workflow Actions
---

# 워크플로우 액션 - 외부 통화 기록

**목차**

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [설정 방법](#설정-방법)

## 개요

이 워크플로우 액션을 사용하면 외부 통화 도구에서 이루어진 통화를 CRM에 기록할 수 있습니다. 이를 통해 모든 커뮤니케이션 세부 사항이 CRM에 중앙집중화되어 더 나은 추적과 관리가 가능합니다. 이 액션을 통해 통화 녹음 파일도 전달할 수 있으며, 이는 연락처의 대화(Conversations) 섹션에서 확인할 수 있습니다.

## 액션 이름

Log External Call (외부 통화 기록)

## 액션 설명

이 액션은 커뮤니케이션의 정확한 기록 유지, 상호작용 추적, 그리고 모든 팀원이 고객 관계 상태에 대해 정보를 공유하도록 하는 데 필수적입니다. 이 액션을 사용함으로써 비즈니스는 고객 관계 관리(CRM) 노력을 향상시키고 전반적인 커뮤니케이션 전략을 개선할 수 있습니다.

## 설정 방법

이 액션은 인바운드 웹훅 트리거(Inbound Webhook Trigger)와 함께 효과적으로 사용할 수 있습니다. 이 트리거는 통화 시스템에서 통화가 발생할 때마다 통화 세부 정보를 공유하기 위해 호출할 수 있는 웹훅 URL을 제공합니다.

인바운드 웹훅 트리거 설정: 도움말 문서

트리거가 설정되면, direction 필드를 사용하여 If/Else 분기를 추가하여 인바운드와 아웃바운드 흐름을 분리하세요.

![워크플로우 분기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991613/original/24LrQDtH5ygw9I_ZcbbhTvV06Dx1LMXJrQ.jpeg?1726563970)

참고: direction 필드는 인바운드 웹훅 트리거(Inbound Webhook Trigger) 옵션에서 접근할 수 있습니다.

![direction 필드 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991607/original/9993xT0LYviYnfBNoc19VQhWgDIbcBec5A.png?1726563969)

인바운드 통화와 아웃바운드 통화를 위한 두 개의 분기를 생성한 후, "연락처 생성(Create Contact)" 액션을 추가하세요. 이는 웹훅을 통해 전달하는 전화번호를 사용하여 통화가 기록될 연락처를 식별합니다.

연락처 생성(Create Contact) 액션에서 전화 필드를 인바운드 통화 흐름에서는 "From Number"에, 아웃바운드 통화 흐름에서는 "To Number"에 매핑하세요. 이렇게 하면 해당 전화번호와 연결된 연락처를 생성하거나 식별할 수 있습니다.

![연락처 생성 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991610/original/RZWcAM1IHNjcp_ZQUg7ePzD7zzINYFUSZA.png?1726563970)

이후, 외부 통화 기록(Log External Call) 액션을 추가하세요.

![외부 통화 기록 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991614/original/U0E3hTX1vSzhRyybhI8Ch4MQIRxYiVZXwQ.jpeg?1726563970)

Direction(방향), Date(날짜), To(수신자), From(발신자), Call Status(통화 상태), Attachment(첨부파일) 각 필드에 대해 커스텀 값(Custom Values) 아이콘 > 인바운드 웹훅 트리거(Inbound Webhook Trigger)를 클릭하여 관련 값을 업데이트하세요.

![필드 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991609/original/qPGcACU6zpiSZjFADSXRRLWRHWyOn12x-A.png?1726563970)

워크플로우가 발행되면, 외부 통화가 CRM에 기록되고 연락처의 대화(Conversations) 섹션에서 확인할 수 있습니다.

![통화 기록 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991611/original/3rKb5m94uSvBK4htvBkU8CSlfk8w7hRMUw.jpeg?1726563970)

---
*원문 최종 수정: Tue, 17 Sep, 2024 at 4:06 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*