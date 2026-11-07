---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — End Call(IVR 통화 종료)

**End Call (IVR)**(IVR 통화 종료) 액션은 IVR 통화를 끝낼 때 쓰는 액션이에요. 바로 끊을 수도 있고, 마지막 안내 메시지나 사용자 지정 오디오를 들려준 뒤에 끊을 수도 있어요.

## 개요

**End Call (IVR)** 액션을 쓰면 IVR 시스템이 통화를 즉시 끊어요. 끊기 전에 마지막 메시지나 사용자 지정 오디오를 재생하도록 설정할 수도 있어요. IVR 안내를 마무리하거나, 통화를 끊기 전에 안내 메시지를 전하고 싶을 때 유용해요.

## 액션 이름

**End Call**(통화 종료)

## 액션 설명

**End Call (IVR)** 액션은 통화를 바로 끊어요. 원하면 통화를 끊기 전에 재생할 메시지나 오디오를 설정할 수 있어요. 발신자에게 마지막 안내나 확인 메시지를 전하고 끊을 때 쓰면 좋아요.

## 액션 상세 정보

![End Call 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032468051/original/hx11NzrEWZfe8i3H0wvJPK-ZU8cUKqRhNw.png?1725823415)

### 설정 방법

1. **Action Name**(액션 이름): 워크플로우 안에서 이 액션을 알아볼 수 있도록 이름을 정해요.
2. **Add Voice Instructions**(음성 안내 추가): 통화를 끊기 전에 마지막 메시지를 들려주려면 이 토글을 켜요. 켜지 않으면 통화가 바로 끊겨요.
3. **Say or Play Message**(메시지 말하기 또는 재생): 텍스트 음성 변환 메시지(**Say a message**, 메시지 말하기)를 쓸지, 업로드한 오디오 파일(**Play audio file**, 오디오 파일 재생)을 쓸지 선택해요.
4. **Text to Say**(말할 텍스트): **Say a message**를 선택했다면 발신자에게 들려줄 문구를 입력해요.
5. **Language**(언어): 텍스트 음성 변환 메시지의 언어를 선택해요.
6. **Message Voice**(메시지 음성): 텍스트 음성 변환 메시지의 목소리를 **Man**(남성) 또는 **Woman**(여성) 중에서 선택해요.
7. **Number of Loops**(반복 횟수): 메시지를 몇 번 반복해서 들려줄지 정해요. 기본값은 1이에요.

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 워크플로우 안에서 이 액션을 구분하는 이름 | 예 |
| **Add Voice Instructions** | 통화를 끊기 전에 마지막 메시지를 넣을지 켜고 끄는 토글 | 아니요 |
| **Say or Play Message** | 마지막 메시지를 **Say a message**로 전할지 **Play audio file**로 전할지 선택 | 아니요 |
| **Text to Say** | 음성으로 변환해 발신자에게 들려줄 텍스트 | 아니요 |
| **Language** | 텍스트 음성 변환 목소리의 언어 | 아니요 |
| **Message Voice** | 텍스트 음성 변환 목소리를 **Man** 또는 **Woman** 중에서 선택 | 아니요 |
| **Number of Loops** | 마지막 메시지를 반복할 횟수(기본값 1) | 아니요 |

## 예시

시나리오: 고객 상담 통화가 끝날 때, 곧 통화가 종료된다는 것을 알리고 전화해 준 고객에게 감사 인사를 전하려고 해요.

- **Action Name**: End IVR Call
- **Add Voice Instructions**: 켜짐
- **Say or Play Message**: Say a message
- **Text to Say**: "Thank you for calling ABC Services. Your call will now end."(ABC 서비스에 전화해 주셔서 감사합니다. 이제 통화를 종료합니다.)
- **Language**: English (US)
- **Message Voice**: Woman
- **Number of Loops**: 1

이렇게 설정하면 시스템이 메시지를 재생한 다음 통화를 자동으로 끊어요.

## 추가 메모

- **Add Voice Instructions**를 끄면 마지막 메시지 없이 통화가 바로 끊겨요.
- 텍스트 음성 변환을 쓰면 통화를 끊기 전에 상황에 맞는 실시간 정보를 전달하기 좋아요.
