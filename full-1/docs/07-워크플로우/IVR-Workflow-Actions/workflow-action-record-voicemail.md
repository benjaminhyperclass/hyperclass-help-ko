---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Record Voicemail (IVR)(음성 사서함 녹음)

**Record Voicemail (IVR)**(음성 사서함 녹음) 액션은 전화를 건 사람이 남기는 음성 메시지를 녹음해요. 자동 응답(IVR) 흐름 중에 발신자가 음성 사서함을 남기게 하고 싶을 때 쓰세요.

## 개요

**Record Voicemail (IVR)** 액션을 쓰면 통화 흐름 중에 발신자가 음성 메시지를 남길 수 있어요. 무음이 일정 시간 이어지거나, 발신자가 키를 누르거나, 최대 녹음 길이에 이르면 녹음이 자동으로 끝나도록 설정할 수도 있어요. 녹음된 음성 사서함은 **대화**에서 확인할 수 있어요.

## 액션 이름

**Record Voicemail (IVR)**

## 액션 설명

이 액션은 자동 응답(IVR)이 발신자의 음성 녹음을 음성 사서함으로 받도록 해요. 무음, 키 입력, 시간 제한에 따라 녹음을 언제 멈출지도 정할 수 있어요. 녹음을 시작하기 전에 발신자에게 안내 음성을 들려줄 수도 있어요.

## 액션 상세 정보

![Record Voicemail 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032468108/original/GV9HD1jqFuQsW1h8MADN-2tzB9-6iTJGGw.png?1725823639)

![Record Voicemail 액션 설정 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032468111/original/lTXQBsegzr59AJicaT9O7cKiK50k0i07pA.png?1725823666)

### 설정 방법

1. **Action Name**(액션 이름): 이 음성 사서함 액션을 구분할 수 있는 이름을 입력하세요. 예: "음성 사서함 녹음"
2. **Play Beep**(신호음 재생): 녹음이 시작됐다는 걸 알리는 신호음을 재생하려면 켜세요. 선택 항목이에요.
3. **Stop Recording After (Seconds of Silence)**(무음이 이어진 뒤 녹음 중지): 무음이 몇 초 이어지면 녹음을 멈출지 초 단위로 입력하세요.
4. **Stop Recording on Keypress**(키를 누르면 녹음 중지): 발신자가 전화기 키패드에서 누르면 녹음이 멈추는 키를 지정하세요. 예: #
5. **Max Recording Length**(최대 녹음 길이): 음성 사서함 녹음의 최대 길이를 초 단위로 입력하세요.
6. **Add Voice Instructions (Optional)**(음성 안내 추가, 선택): 발신자에게 미리 녹음한 안내 음성을 들려주려면 켜세요.

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 음성 사서함 액션의 이름 | 필수 |
| **Play Beep** | 녹음이 시작됐음을 알리는 신호음을 재생 | 선택 |
| **Stop Recording After** | 녹음이 자동으로 멈출 때까지 이어지는 무음 시간(초) | 필수 |
| **Stop Recording on Keypress** | 발신자가 눌러서 녹음을 멈출 수 있는 키 (예: 1~9, #, \*) | 선택 |
| **Max Recording Length** | 음성 사서함의 최대 길이(초) | 필수 |
| **Add Voice Instructions** | 발신자에게 안내할 메시지를 말하거나 녹음한 파일을 업로드 | 선택 |

## 예시

고객이 메뉴에 응답하지 않을 때 음성 사서함을 녹음하고 싶다고 해 볼게요. 다음과 같이 설정하면 돼요.

- **Action Name**: "고객 음성 사서함 녹음"
- **Play Beep**: 켬 (신호음 재생)
- **Stop Recording After (Seconds of Silence)**: 5 (무음이 5초 이어지면 녹음 중지)
- **Stop Recording on Keypress**: # (고객이 #키를 눌러 녹음을 멈출 수 있음)
- **Max Recording Length**: 360 (최대 6분까지 녹음)
- **Add Voice Instructions**: "신호음이 울리면 메시지를 남겨 주세요." (켜면 발신자에게 이 안내가 나와요)

## 추가 메모

- **Stop Recording on Silence**: 발신자가 일정 시간 동안 말하지 않으면 녹음을 자동으로 멈추고 싶을 때 유용해요.
- **Recording Keypress**: 발신자가 말을 마친 뒤 빠르게 녹음을 끝낼 수 있어요.
- **Max Recording Length**: 최대 저장 용량을 넘지 않도록 시스템 요구 사항에 맞게 설정하세요.
