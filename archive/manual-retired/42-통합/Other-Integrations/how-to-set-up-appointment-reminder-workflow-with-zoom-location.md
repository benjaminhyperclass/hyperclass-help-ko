---

번역일: 2026-04-09
카테고리: 통합 > Other Integrations
---

# 줌 로케이션을 사용한 예약 알림 워크플로우 설정 방법

[Zoom 연동](../기타/zoom-integration.md)을 사용하는 경우, 예약 알림 캠페인을 설정할 때 로케이션 값을 처리할 수 있도록 반드시 1분 대기 단계를 추가해 주세요.

### 새 워크플로우 트리거 추가(Add New Workflow Trigger) 클릭

![새 워크플로우 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750313/original/dlaBtDgOzEhuKUZXLKkTEYvo5Oze1qpqmA.png?1642793171)

### 선택(Select) 클릭

![선택 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750332/original/vaAqfmFv7vtZKcDD6RNc6e9MRcLEfl3xfA.png?1642793180)

### 예약(Appointment) 클릭

![예약 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750398/original/yNO32w0BDhWA1DyPASShLMt-NzwkYhUX5g.png?1642793221)

### 필터 추가(Add filters) 클릭

![필터 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750478/original/G48Hp-KjeRf7S7P2IyGFsNuOd1x2Akht4A.png?1642793246)

### 선택(Select) 클릭

![선택 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750578/original/N-IhVCQY-F88m6QIQ0c4xPWgVhcj59kEWg.png?1642793261)

### 예약 상태(Appointment status is) 클릭

![예약 상태 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750808/original/9kf5eWI57Hxj8Eu9yJ-uDXrj-luWZumpMg.png?1642793344)

### 선택(Select) 클릭

![상태 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181750941/original/rgH4BTjlCU3Mcc7FUgHd5do0e1CubKFTtA.png?1642793391)

### 확정됨(confirmed) 클릭

![확정됨 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181751878/original/D5tybGYNGeABM1Vt3ZDSbMyeJJ3IJmEPXA.png?1642793524)

### 트리거 저장(Save Trigger)

![트리거 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181751636/original/2BlWBjAVfxNME5R8kELrIbTpT_Az_hl_Ng.png?1642793430)

### + 클릭

![플러스 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181753701/original/87P7hzTDQE8rnvWzT0NLwQ1YmUBZgCPGBg.png?1642794027)

### 아래로 스크롤하여 대기(Wait) 클릭

![대기 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181751835/original/dyXHZn4SzzukEub3LA1pM0_8hMLL-1QeSQ.png?1642793512)

### 대기 지연 시간을 1분으로 설정

![1분 대기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181758892/original/1fwiWPDcLXiQoJrA8evlrMHR70IPhQnbRA.png?1642795660)

### 액션 저장 후 나머지 예약 알림 워크플로우 구성 계속하기

대기 단계 후 + 클릭

![대기 후 플러스 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181754400/original/bpCkY8_NWaHkYMLi4UV6PYDkdyvMiGZhNA.png?1642794196)

리드에게 예약 확인을 보내기 위해 이메일/SMS 발송 선택

![이메일/SMS 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181754477/original/XGO_8Lln7RmrzgPI6H38-z2KYttEO0i1zw.png?1642794235)

예약 워크플로우에서 사용할 수 있는 커스텀 필드 목록을 확인하려면 [여기](https://hyperclass.gitbook.io/hyperclass-docs)를 클릭하세요.

액션 저장(Save action) 클릭:

![액션 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181755559/original/OngUirRFxjJpdLWAHpINFkDe7611U39eQQ.png?1642794515)

다른 단계를 추가하기 위해 + 클릭:

![다음 단계 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181755851/original/i1fBijwF7dypWKgDrGN6f8bUp5goPnlqHw.png?1642794629)

### 아래로 스크롤하여 대기(Wait) 클릭

![대기 액션 다시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181751835/original/dyXHZn4SzzukEub3LA1pM0_8hMLL-1QeSQ.png?1642793512)

시간 지연(Time Delay) 클릭

![시간 지연](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181756203/original/06uWLiU8Cq9OtJaas9aGmT_-Es2KQ3Xhqw.png?1642794754)

이벤트/예약 시간(Event / Appointment time) 클릭

![예약 시간](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181756238/original/C71guWpC5zpBnONZsEMkWP8GlNxAnoxArw.png?1642794776)

4일 전에 알림을 보내고 싶다면:

여기에 4 입력

![4일 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181756457/original/D4azMWuGg2kJAEkxM0oHHIAnzjYEuklMKA.png?1642794869)

분을 일로 변경

![분을 일로 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181756799/original/Bp2sDZ59J92Oa1YrH1Oz1AUeKQwcGOOxBQ.png?1642794969)

"다음 대기 또는 이벤트 시작일 액션까지 모든 아웃바운드 커뮤니케이션 액션 건너뛰기" 선택

![커뮤니케이션 건너뛰기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181758001/original/0yI_UPifvDh63I4LGKTSSuoe9CeizzyIKQ.png?1642795364)

대기 단계 후 + 클릭

![대기 후 플러스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181754400/original/bpCkY8_NWaHkYMLi4UV6PYDkdyvMiGZhNA.png?1642794196)

리드에게 예약 알림을 보내기 위해 이메일/SMS 발송 선택

![알림 메시지 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48181754477/original/XGO_8Lln7RmrzgPI6H38-z2KYttEO0i1zw.png?1642794235)

추가 예약 알림 메시지를 위해 또 다른 대기 단계를 계속 추가할 수 있습니다.

---
*원문 최종 수정: Fri, 21 Jan, 2022 at 2:09 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*