---
원문: /support/solutions/articles/155000007517-how-to-create-event-calendars
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 이벤트 캘린더 만들기

특정 사용자에게 예약을 배정하지 않고도 예약 가능한 이벤트 일정을 만들 수 있어요. 이벤트 캘린더는 콘퍼런스, 세미나, 박람회처럼 진행자를 예약에 연결할 필요가 없는 공동 이벤트에 알맞아요.

## 이벤트 캘린더란?

이벤트 캘린더는 진행자나 사용자와 연결하지 않는 이벤트를 위한 캘린더 유형이에요. 미팅을 특정 팀원에게 배정하지 않고, 캘린더 단위로 예약을 관리해요. 그래서 누구나 참여하는 공개 이벤트나 공동 이벤트 일정에 잘 맞아요.

개인 사용자가 연결한 캘린더가 아니라 이벤트 자체를 기준으로 예약 가능 시간을 정할 때 특히 편리해요. 하이퍼클래스에서 가장 간단하게 설정할 수 있는 캘린더 유형 중 하나이기도 해요.

## 이벤트 캘린더의 장점

- 진행자 없이 사용: 미팅을 특정 사용자에게 배정하지 않고도 예약 가능한 일정을 만들 수 있어요.
- 빠른 시작: 사용자를 지정하거나 직원의 가용 시간에 맞춰 캘린더를 짜지 않아도 이벤트 기반 예약 캘린더를 만들 수 있어요.
- 간단한 예약 과정: 예약 링크나 임베드 코드를 공유하면 참석자가 전용 예약 페이지에서 등록할 수 있어요.
- 유연한 미팅 장소: 실제 장소를 입력하거나, 고정된 온라인 미팅 링크를 **미팅 장소** 필드에 붙여 넣을 수 있어요.
- 외부 캘린더 동기화: 해당 이벤트 캘린더에 선택한 외부 캘린더와만 예약을 동기화해요.

## 이벤트 캘린더가 다른 점

이벤트 캘린더는 하이퍼클래스의 개인 캘린더, 팀 캘린더 같은 다른 유형과 동작 방식이 달라요. 설정하기 전에 차이를 알아 두면 동기화 문제, 미팅 링크에 대한 오해, 캘린더 충돌 혼선을 줄일 수 있어요.

- 이벤트 캘린더에는 사용자가 없어서 미팅을 사용자에게 배정할 수 없어요.
- 배정된 사용자가 없으므로 Zoom, Google Meet, Microsoft Teams 같은 동적 미팅 링크 도구는 지원되지 않아요.
- 온라인 미팅을 하려면 미팅 플랫폼에서 고정 회의 링크를 복사해 미팅 장소에 붙여 넣으세요.
- 배정된 사용자가 없으므로 미팅이 **캘린더 설정 > 연결**의 사용자 캘린더로 동기화되지 않아요.
- **캘린더 설정 > 연결**에서 추가한 **충돌 캘린더**는 이벤트 캘린더에서 고려하지 않아요.
- 미팅은 해당 이벤트 캘린더의 **External Sync**(외부 동기화)에서 선택한 캘린더로만 동기화돼요.
- 이벤트는 선택한 외부 캘린더에서만 가져오고, 그 캘린더로만 내보내요.
- **External Sync**로는 Google Calendar를 하나만 연결할 수 있어요.

## 이벤트 캘린더를 쓰면 좋은 경우

캘린더 유형을 알맞게 고르면 원하는 예약 경험을 제공할 수 있어요. 이벤트 캘린더는 이벤트 자체가 중심이고, 예약을 특정 직원에게 연결할 필요가 없을 때 가장 좋아요.

- 콘퍼런스, 박람회, 세미나, 워크숍, 공개 세션처럼 여럿이 함께하는 이벤트 예약에 쓰세요.
- 미팅을 사용자에게 배정하고 싶지 않을 때 쓰세요.
- 팀원의 가용 시간 설정에 의존하지 않는 더 빠르고 간단한 설정을 원할 때 쓰세요.
- 예약을 여러 사용자에게 돌아가며 배정해야 하거나, 여러 직원의 캘린더나 직원의 가용 시간에 따라 예약이 달라질 때는 이벤트 캘린더를 쓰지 마세요.

## 이벤트 캘린더 설정하기

1. 서브 계정에서 왼쪽 메뉴의 **캘린더**로 이동해요. 상단 메뉴에서 **캘린더 설정**을 클릭하세요.

   ![캘린더 메뉴와 상단 캘린더 설정 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923565/original/Lq8oVLYqaGvbtciBIephSghs2sfYhxPjMg.png?1773433724)
2. **캘린더 설정** 페이지 오른쪽 위에서 **+ New Calendar**(새 캘린더)를 클릭하세요.

   ![캘린더 설정 페이지의 새 캘린더 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923572/original/CEI2JkUFGjfYfFON7YMni8e6sNDP-6YtFA.png?1773433756)
3. 캘린더 유형 팝업에서 다른 캘린더 유형을 보여 주는 드롭다운을 열고 **Event Calendar**(이벤트 캘린더)를 선택하세요.

   ![캘린더 유형 팝업에서 이벤트 캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923583/original/4obFphkm_39dIwqPteQPwAOqEtDuPApvHA.png?1773433785)
4. **캘린더 이름**을 입력하세요. 필요하면 캘린더의 **설명**도 적어요. 예약 위젯 링크를 바꾸려면 **사용자 지정 URL**을 수정하세요.

   ![캘린더 이름, 설명, 사용자 지정 URL 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923696/original/mSXrFnm34GO7Unpz5jLkuO0uilg03YaXoQ.png?1773433965)
5. **Meeting Duration**(미팅 시간)을 정하고, **가용성**에서 이벤트를 예약할 수 있는 요일과 시간을 선택하세요.

   ![미팅 시간과 가용성 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923702/original/_oIFKQOmT3m7HvpAU9C7rn78tUhPavWXnQ.png?1773434000)
6. **미팅 장소**를 입력하세요. 오프라인 이벤트라면 실제 장소를 입력해요. 온라인 이벤트라면 고정 회의 링크를 붙여 넣으세요.

   ![미팅 장소 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923724/original/tpu--2kWhI-01Mk6rc4kfIlGnBSTswTwFA.png?1773434031)
7. 추가 옵션을 설정해야 하면 **고급 설정**을 클릭하세요.

   ![고급 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923663/original/9REZNu6BgyLGqZe1KyBoQjHBt0X-LlliUg.png?1773433913)
8. **확인**을 클릭해 이벤트 캘린더를 만드세요. 성공 메시지가 나타나면 필요에 따라 예약 링크나 임베드 코드를 복사하세요.

   ![이벤트 캘린더 생성 완료 후 예약 링크와 임베드 코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066923746/original/vikux9-ODk8fteIRLR9SZpmL0sBukuQ-yw.png?1773434074)

## 자주 묻는 질문

### 이벤트 캘린더에서 Zoom, Google Meet, Microsoft Teams 같은 온라인 미팅 장소를 자동으로 만들 수 있나요?
네. 이벤트 캘린더에는 배정된 사용자가 없어서 동적 미팅 링크는 지원되지 않지만, 고정 링크는 사용할 수 있어요.

### 이벤트 캘린더 예약은 어디로 동기화되나요?
해당 이벤트 캘린더에 선택한 외부 캘린더로만 동기화돼요.

### 이벤트 캘린더를 Google Calendar 여러 개와 동기화할 수 있나요?
아니요. **External Sync**로는 Google Calendar를 하나만 연결할 수 있어요.
