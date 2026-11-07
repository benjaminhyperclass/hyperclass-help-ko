---
원문: /support/solutions/articles/155000003270-workflow-action-dnd-contact
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — DND Contact(연락처 수신거부 설정)

하이퍼클래스 워크플로우에서 **DND Contact**(연락처 수신거부 설정) 액션을 설정하는 방법을 안내해요. 연락처의 수신거부(DND) 상태를 자동으로 켜거나 끄고 싶을 때 쓰세요.

## DND Contact 액션이란?

**DND Contact** 액션으로 연락처의 수신거부(Do-Not-Disturb, DND) 설정을 관리할 수 있어요. 모든 커뮤니케이션 채널이나 특정 채널의 수신거부를 켜거나 끌 수 있고, 수신(Inbound)과 발신(Outbound) 방향도 정할 수 있어요.

연락을 원하지 않는다고 한 연락처에 자동 메시지가 가지 않게 할 때 유용해요. 특정 연락처에서 오는 원치 않는 수신 연락을 막을 때도 쓸 수 있어요.

---

## 액션 이름

### DND Contact

### 액션 설명

| **필드명** | **설명** | **필수 여부** |
| --- | --- | --- |
| Mark as Read or Unread(읽음 또는 읽지 않음으로 표시) | 대화를 읽음 또는 읽지 않음으로 표시할지 선택해요. 선택지는 **None**(없음), **Mark as Read**(읽음으로 표시), **Mark as Unread**(읽지 않음으로 표시)예요. | 아니요 |

**DND Contact** 액션에서는 다음을 선택할 수 있어요.

1. 수신거부 **Direction**(방향)을 **Inbound**(수신) 또는 **Outbound**(발신)로 설정
2. **Enable DND for all channels**(모든 채널의 수신거부 활성화)
3. **Enable DND for specific channels**(특정 채널의 수신거부 활성화)
4. **Disable DND for all channels**(모든 채널의 수신거부 비활성화)
5. **Disable DND for specific channels**(특정 채널의 수신거부 비활성화)

이 액션을 쓰면 연락처의 선호나 요청에 맞춰 커뮤니케이션을 조절할 수 있어요.

![DND Contact 액션 설정 화면](https://jumpshare.com/share/EIGZ8h6RJrmWYs1kkL4Y+/Screen+Shot+2026-02-04+at+8.50.59+PM.png)

---

## DND Contact 액션 설정하기

아래 순서대로 워크플로우에 액션을 추가하고 설정하세요. 그러면 매번 같은 결과를 기대할 수 있어요.

1. 서브 계정에 로그인해요.
2. **자동화 > 워크플로우**로 이동해요.

   ![자동화 > 워크플로우 메뉴](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)
3. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.

   ![워크플로우 만들기 또는 열기](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)
4. **+ Add New Trigger**(새 트리거 추가) 버튼을 눌러 트리거를 추가해요(예: **Customer Booked Appointment**(고객 예약 완료)).

   ![트리거 추가 화면](https://jumpshare.com/share/BUg8dugNkMNLEXI11AnS+/GIF+Recording+2026-02-04+at+9.02.32+PM.gif)
5. **+** 를 눌러 액션을 추가하고, **Enable/Disable DND**(수신거부 켜기/끄기)를 검색해요.
6. 액션의 **Name**(이름)을 입력해요.
7. 수신거부 **Direction**(방향)을 **Inbound**(수신) 또는 **Outbound**(발신) 중에서 선택해요.
8. **Selected**(선택한 채널) 또는 **All Channels**(전체 채널)에 대해 **Enable**(활성화) 또는 **Disable**(비활성화)을 선택해요.

   ![액션 설정 화면](https://jumpshare.com/share/NRoxKpLr1BS6wI293P1r+/GIF+Recording+2026-02-04+at+9.10.39+PM.gif)
9. 워크플로우를 **Publish**(게시)하고 **Save**(저장)해요.

   ![워크플로우 게시 및 저장](https://jumpshare.com/share/OGq6TLFzsqv5qc5ixY1o+/Screen+Shot+2026-02-04+at+9.15.36+PM.png)

---

## 이 액션과 함께 쓸 수 있는 트리거 예시

아래 예시 외의 트리거도 사용할 수 있어요.

- **Appointment Status Changed**(예약 상태 변경)

  - 트리거: **Appointment Status Changed** 트리거를 사용해요.
  - 설정: 예약 상태 필터를 **Completed**(완료) 또는 **Showed**(참석)로 설정해요. 어느 쪽을 쓸지는 사용하는 시스템의 용어에 따라 달라요.
  - 액션: **DND Contact** 액션을 추가해 수신거부를 비활성화해요. 이제 연락처에 메시지를 보낼 수 있다는 뜻이에요.
- **Appointment Scheduled**(예약 일정 등록)

  - 트리거: **Appointment Scheduled** 트리거를 사용해요.
  - 설정: 예약 시간 이후 일정 시간 동안 기다리는 조건을 추가해요(예: 예약 종료 시간 1시간 후).
  - 액션: 기다린 뒤 **DND Contact** 액션을 추가해 수신거부를 비활성화해요. 예약이 끝났다고 보는 거예요.
- **Task Completed**(작업 완료)

  - 트리거: 예약 후속 작업과 연결된 **Task Completed** 트리거를 사용해요.
  - 설정: 감사 이메일이나 설문 보내기처럼 예약 이후에 할 후속 조치에 작업을 연결해요.
  - 액션: 작업이 완료로 표시되면 **DND Contact** 액션을 추가해 수신거부를 비활성화해요. 그러면 다시 연락할 수 있어요.
- **Custom Field Update**(커스텀 필드 업데이트)

  - 트리거: 예약이 끝났음을 나타내는 필드가 업데이트될 때 **Custom Field Update** 트리거를 사용해요.
  - 설정: 예약이 끝났다고 판단될 때(직접 처리하든 다른 프로세스를 거치든) 값이 표시되는 커스텀 필드를 만들어요.
  - 액션: 이 필드가 업데이트되면 **DND Contact** 액션으로 수신거부를 비활성화해요.
- **Manual Trigger via Internal Notification**(내부 알림을 통한 수동 트리거)

  - 트리거: 팀원이 예약 완료를 확인한 뒤 연락처 기록이나 상태를 직접 업데이트하는 프로세스를 만들어요.
  - 설정: 내부 알림이나 작업 완료를 트리거로 사용해요.
  - 액션: **DND Contact** 액션으로 해당 연락처의 수신거부를 비활성화해요.
- **Contact Created**(연락처 생성, 수신 스팸 차단)
  - 트리거: 수신 전화나 SMS로 연락처가 만들어질 때 **Contact Created** 트리거를 사용해요.
  - 설정: 스팸 패턴을 가려내는 조건을 추가해요(예: 전화번호 형식, 반응 없음, 알려진 스팸 지표).
  - 액션: **DND Contact** 액션의 **Direction**을 **Inbound**로 설정해요. 이 연락처에서 앞으로 오는 전화와 SMS를 막을 수 있어요.

---

## 로그와 변경 주체 표시

이 워크플로우 액션이 수신거부를 켜거나 끄면, 하이퍼클래스는 **대화**와 활동 로그에 다음과 같이 기록해요.

- **DND Enabled by Workflows**(워크플로우가 수신거부를 켬)
- **DND Disabled by Workflows**(워크플로우가 수신거부를 끔)

팀원이 직접 수신거부를 바꾸면 로그에 **DND Enabled/Disabled by User**(사용자가 수신거부를 켬/끔)로 표시돼요. 연락처가 직접 바꾸면 **DND Enabled/Disabled by Contact**(연락처가 수신거부를 켬/끔)로 표시돼요. 모든 채널에 똑같이 적용돼요.

---

## 활용 예시

시나리오: 고객이 홍보용 SMS는 받지 않겠다고 했지만, 이메일로는 계속 소식을 받고 싶어 해요.

1. 연락처가 SMS 수신을 거부할 때 시작되는 워크플로우 트리거를 설정해요.
2. **DND Contact** 액션을 추가해요.
3. SMS에만 수신거부를 켜고 다른 채널은 그대로 두도록 설정해요.
4. 이렇게 하면 연락처는 SMS 알림을 받지 않고, 이메일이나 다른 선호 채널로는 계속 소식을 받아요.

이 방식은 고객의 선호를 존중하고, 원치 않는 연락을 피해 좋은 관계를 이어 가는 데 도움이 돼요.

시나리오: 마케팅 에이전시가 수신 스팸 전화 때문에 파이프라인에 쓸모없는 연락처가 쌓이는 것을 막고 싶어요.

1. 연락처가 스팸으로 확인될 때(커스텀 필드, 태그, 수동 처리 등) 시작되는 워크플로우 트리거를 설정해요.
2. **DND Contact** 액션을 추가해요.
3. 모든 채널의 수신거부를 켜고 **Direction**을 **Inbound**로 설정해요.
4. 이렇게 하면 해당 연락처에서 오는 전화와 SMS가 차단되어 시스템에 불필요한 기록이 쌓이지 않아요.

이 방식은 원치 않는 수신 연락을 걸러 내서 에이전시가 파이프라인을 깔끔하게 유지하는 데 도움이 돼요.
