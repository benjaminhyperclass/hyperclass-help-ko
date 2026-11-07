---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Gather Input On Call(통화 중 입력 수집)

**Gather Input On Call**(통화 중 입력 수집) 액션은 통화 중인 발신자가 전화기 키패드로 누른 번호를 받아 오는 액션이에요. "상담은 1번, 메시지 남기기는 2번"처럼 번호를 눌러 메뉴를 고르게 하는 IVR(자동응답) 흐름을 만들 때 써요.

## 개요

**Gather Input On Call** 액션을 쓰면 발신자에게 키패드 입력을 받을 수 있어요. 예를 들어 "상담 연결은 1번, 메시지 남기기는 2번을 눌러 주세요"라고 안내하고 선택을 받는 IVR 시스템에서 쓸 수 있어요. 이 액션은 응답을 자동화하고, 사용자가 입력한 값에 따라 다음 단계로 넘어가도록 도와줘요.

## 액션 이름

**Gather Input On Call**

## 액션 설명

**Gather Input On Call (IVR)** 액션은 DTMF(Dual Tone Multi-Frequency, 전화기 키를 누를 때 나는 신호) 입력으로 발신자의 정보를 수집해요. 주로 IVR 흐름에서 사용하며, 사용자가 전화기 키를 눌러 시스템과 소통해요. 누른 키에 따라 분기를 나눌 수 있어서, 입력값별로 다른 흐름을 만들 수 있어요.

## 액션 상세 정보

![Gather Input On Call 액션 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467893/original/UcwBIizZxLaiHIF6_C7pXEdsTOKADGR4dg.png?1725822507)

![Gather Input On Call 액션 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467902/original/GGJsEM9GZ_TeC1H01k3e01ossdpOH4BbWA.png?1725822537)

### 설정 방법

1. **Action Name**(액션 이름): 이 입력 수집 액션을 알아볼 수 있는 이름을 입력해요.
2. **Say or Play Message**(메시지 말하기 또는 재생): **Say a message**(메시지 말하기, 텍스트 음성 변환)와 미리 녹음한 오디오 파일 업로드 중에서 골라요.
3. **Text to Say**(말할 텍스트): **Say a message**를 골랐다면 재생할 안내 문구를 입력해요. 예: "지원팀 연결은 1번을 눌러 주세요"
4. **Language**(언어): 텍스트 음성 변환에 쓸 언어를 선택해요.
5. **Message Voice**(메시지 음성): 텍스트 음성 변환 메시지를 **Man**(남성) 목소리로 할지 **Woman**(여성) 목소리로 할지 선택해요.
6. **Number of Loops**(반복 횟수): 다음 단계로 넘어가기 전에 메시지를 몇 번 반복할지 정해요.
7. **Advanced Settings**(고급 설정): 입력 수집을 멈출 제한 시간(초)을 설정해요. 사용자가 키를 누르면 입력 수집을 멈추도록 선택할 수도 있어요.
8. **Match Conditions**(일치 조건): 발신자가 입력한 값에 따라 분기를 만들 때 사용해요. 예를 들면 다음과 같아요.

   - 분기 1: "1"을 누르면 지원
   - 분기 2: "2"를 누르면 영업

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 액션 이름을 입력해요. | 예 |
| **Say or Play Message** | 메시지를 말할지, 미리 녹음한 오디오 파일을 재생할지 선택해요. | 예 |
| **Text to Say** | **Say a message**를 선택했다면 발신자에게 들려줄 텍스트를 입력해요. | 예 |
| **Language** | 메시지를 말할 언어를 선택해요. | 예 |
| **Message Voice** | 남성 또는 여성 목소리 중에서 선택해요. | 예 |
| **Number of Loops** | 메시지를 재생하거나 반복할 횟수를 선택해요. | 예 |
| **Stop Gathering After (Seconds)** | 입력 수집을 멈출 시간(초)을 설정해요. | 예 |
| **Stop Gathering After (Digits)** | 몇 자리를 수집한 뒤 입력 수집을 멈출지 정해요. | 아니요 |
| **Stop Gathering on Key Press** | 켜 두면 키를 누르는 즉시 입력 수집을 멈춰요. | 아니요 |
| **Match Conditions** | 누른 키 값에 따라 분기를 정의하는 옵션이에요. | 예 |

## 예시

시나리오: 은행 IVR 시스템에서 발신자의 입력을 받는 경우

메시지: "거래 내역을 들으시려면 1번, 상담원과 연결하시려면 2번, 종료하시려면 3번을 눌러 주세요."

키 입력에 따른 동작:

- "1"을 누르면 거래 내역을 읽어 주는 분기로 이동해요.
- "2"를 누르면 고객 지원 상담원에게 연결돼요.
- "3"을 누르면 고객에게 감사 인사를 전한 뒤 통화를 종료해요.
