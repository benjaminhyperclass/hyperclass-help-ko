---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003369-workflow-action-ivr-say-play
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — IVR Say/Play(말하기/재생)

**Say/Play**(말하기/재생) 액션은 전화를 건 사람에게 안내 메시지를 들려줄 때 써요. 문자를 음성으로 바꿔 읽어 주거나(TTS), 미리 녹음한 오디오를 재생할 수 있어요.

## 개요

이 액션은 IVR(자동 음성 응답) 시스템의 일부예요. IVR은 전화한 사람에게 선택지를 안내하거나 중요한 메시지를 전달해요.

## 액션 이름

**Say/Play**

## 액션 설명

문자를 음성으로 읽어 줄지, 미리 녹음한 오디오를 재생할지 정하는 액션이에요. 인사말, 안내 사항 등 전화 통화에서 전달할 내용에 쓸 수 있어요.

## 액션 설정

![Say/Play 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467835/original/NB9MGkUup5hqPvn782YDAT8EHar4UBS8-A.png?1725822187)

### 설정 방법

1. **Say or Play Message**(메시지 말하기 또는 재생): 메시지를 문자로 읽어 줄지(TTS), 미리 녹음한 오디오로 재생할지 선택해요.

   - **Say a message**(메시지 말하기): 음성으로 바꿀 문장을 입력해요.
   - **Play a message**(메시지 재생): 발신자에게 들려줄 오디오 파일을 업로드해요.
2. **Text to Say**(읽을 문장): **Say a message**를 선택했다면, 시스템이 소리 내어 읽을 문장을 입력해요.
3. **Language**(언어): 메시지를 읽을 언어를 선택해요. 이 설정에서는 영어만 지원해요.
4. **Message Voice**(메시지 음성): 남성 목소리와 여성 목소리 중에서 선택해요.
5. **Number of Loops**(반복 횟수): 메시지를 몇 번 재생할지 정해요. 기본값은 1이에요.

### 필드 요약

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| Say or Play Message | 문자 음성 변환(TTS)과 미리 녹음한 오디오 재생 중에서 선택 | 예 |
| Text to Say | 음성으로 바꿀 문장(TTS를 선택한 경우) | 아니요 (TTS를 선택한 경우에만 해당) |
| Language | 문장을 읽을 언어 | 예 |
| Message Voice | TTS에 쓸 음성 종류(예: 남성, 여성) | 예 |
| Number of Loops | 메시지를 반복할 횟수 | 아니요 |

## 예시

고객 서비스 IVR에 환영 메시지를 설정한다면 이렇게 입력할 수 있어요.

- **Action Name**(액션 이름): 발신자에게 보내는 환영 메시지
- **Say or Play Message**: Say a message
- **Text to Say**: "Hello, welcome to ABC Services. Please press 1 for Sales, 2 for Support." (안녕하세요, ABC 서비스입니다. 영업 문의는 1번, 지원 문의는 2번을 눌러 주세요.)
- **Language**: English (US)
- **Message Voice**: Woman
- **Number of Loops**: 1

## 추가 참고 사항

- 미리 녹음한 오디오를 쓴다면 파일 형식이 호환되는지 확인하세요(예: MP3).
- 메시지 종류와 중요도에 맞게 반복 횟수를 조정하세요.
