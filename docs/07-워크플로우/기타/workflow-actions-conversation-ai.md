---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워크플로우 액션 - 대화 AI

대화 AI 워크플로우 액션을 사용하여 AI가 생성한 메시지를 보내고, 연락처의 답변을 기다린 후, 분기와 조건을 활용해 워크플로우를 라우팅하세요. 이 글에서는 Hyperclass에서 대화 AI 워크플로우 액션을 사용하는 방법을 설명합니다.

**목차**

- [대화 AI 워크플로우 액션이란?](#대화-ai-워크플로우-액션이란)
- [대화 AI 워크플로우 액션의 주요 장점](#대화-ai-워크플로우-액션의-주요-장점)
- [대화 AI 워크플로우 액션 설정 방법](#대화-ai-워크플로우-액션-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## 대화 AI 워크플로우 액션이란?

대화 AI 워크플로우 액션은 연락처에게 AI가 생성한 메시지 하나를 보내고, 답변을 기다린 후, 연락처의 응답에 따라 워크플로우를 라우팅합니다. 봇의 프롬프트 설정과 학습 데이터를 활용해 답변을 생성하며, 다양한 결과에 따른 분기를 지원합니다.

## 대화 AI 워크플로우 액션의 주요 장점

- **타겟 아웃리치**: 구체적인 질문을 하고 연락처로부터 직접적인 답변을 기다립니다.
- **스마트 라우팅**: 연락처의 응답을 분기와 조건에 따라 평가하여 다음 단계를 안내합니다.
- **프롬프트 인식 답변**: 개성, 추가 지시사항, 질문, 학습 데이터, 대화 기록을 결합하여 맥락을 제공합니다.
- **채널 선택**: 선택한 채널(SMS, Facebook, WhatsApp, 라이브 채팅, Instagram)에서 전송할 수 있습니다.

## 대화 AI 워크플로우 액션 설정 방법

다음 단계를 따라 워크플로우에 액션을 추가하고 일관되고 예측 가능한 결과를 위해 설정하세요.

- 하위 계정에 로그인하세요.
- Automations(자동화) > Workflows(워크플로우)로 이동하세요.

![대시보드 스크린샷](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)

- **새 워크플로우**를 생성하거나 **기존 워크플로우**를 여세요.

![워크플로우 목록](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)

- **+ Add New Trigger(새 트리거 추가)** 버튼을 클릭하여 **트리거**를 추가하세요(예: *Customer Replied(고객 답변)*). 필요한 경우 **Reply Channel(답변 채널)**을 설정하세요(예: SMS).

![트리거 추가 과정](https://jumpshare.com/share/bfCBKfEABQ5tgCPZfvmk+/GIF+Recording+2026-01-05+at+6.09.00+PM.gif)

- **+**를 클릭하여 **액션을 추가**하고 **Conversation AI**를 검색하세요. Conversation AI 액션을 선택하고 액션에 **이름**을 지정하세요.

![대화 AI 액션 추가](https://jumpshare.com/share/bF6jf5XN5BBWxB30m7Tv+/GIF+Recording+2026-01-05+at+6.10.58+PM.gif)

- **Advanced Bot Configuration(고급 봇 설정)**을 토글하여 봇의 기본 설정을 재정의할 수 있습니다:

Personality(개성) — 톤을 정의합니다.

- Additional Instructions(추가 지시사항) — 목표/의도와 가이드라인을 설정합니다. 비워두면 봇의 기존 설정을 사용합니다.

![고급 봇 설정](https://jumpshare.com/share/Qm7f7HSl3RIU1Y2DOOXN+/Screen+Shot+2026-01-05+at+6.13.16+PM.png)

- Question(질문) 항목에 봇이 보낼 메시지를 입력하세요. **커스텀 값**을 사용할 수 있습니다.

![질문 설정](https://jumpshare.com/share/LJfRkkxyunVJWekHEvjX+/Screen+Shot+2026-01-05+at+6.18.07+PM.png)

- Timeout(타임아웃)을 설정하세요(답변을 기다리는 시간). 분, 시간, 일 단위로 설정할 수 있습니다.

![타임아웃 설정](https://jumpshare.com/share/Iyf2Vr0lac1J5m629Iv7+/Screen+Shot+2026-01-05+at+6.40.18+PM.png)

- **Channel(채널)**을 선택하세요(액션당 하나씩): SMS, Facebook, Instagram, WhatsApp, Live Chat(라이브 채팅) 중 하나를 선택합니다.

![채널 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061913669/original/elqM3Z7dxdMtcPTx0vnTsHFZbE_K-o6c-g.png?1767618785)

- **Skip if answered(답변이 있으면 건너뛰기)**를 켜서 수동으로 답변한 경우 이 액션을 건너뛰도록 설정하세요.

![건너뛰기 설정](https://jumpshare.com/share/rKvHTow1Nfkccibd9KcA+/Screen+Shot+2026-01-05+at+6.44.27+PM.png)

- **Bot responses limit(봇 응답 제한)**을 설정하세요(일치하는 조건이 없을 때 **No Condition Met(조건 불일치)**으로 라우팅되기 전까지의 최대 AI 메시지 수).

![봇 응답 제한](https://jumpshare.com/share/YmfxFtvIE2KRlj0HiMHV+/Screen+Shot+2026-01-05+at+6.49.19+PM.png)

- Wait time(대기 시간)을 초 단위로 설정하세요(봇이 답변하기 전 수신 메시지를 수집하기 위한 지연 시간).

![대기 시간 설정](https://jumpshare.com/share/FkWSQGuVTg0AFyp9gJmC+/Screen+Shot+2026-01-05+at+6.56.30+PM.png)

- **Branches & Conditions(분기 및 조건)**을 설정하세요:

Time Out(타임아웃)과 **No Condition Met(조건 불일치)**는 항상 존재하며 제거할 수 없습니다.

- 추가 분기를 생성하고 명확한 매칭 조건을 정의하세요.

![분기 및 조건 설정](https://jumpshare.com/share/AjykLyHb5QowrR8oGyr2+/Screen+Shot+2026-01-05+at+7.00.05+PM.png)

- Save Action(액션 저장)을 클릭하세요.

![액션 저장](https://jumpshare.com/share/Fu4hWxk9goP3Uelzlt3C+/Screen+Shot+2026-01-05+at+7.01.26+PM.png)

- **Test Workflow(워크플로우 테스트)**를 사용하여 실제 운영 전에 검증하세요. (선택사항이지만 권장됨)
- 워크플로우를 발행하고 **저장**하세요.

![워크플로우 발행](https://jumpshare.com/share/IvN5fTCvGjB0oqXcl0oz+/Screen+Shot+2026-01-05+at+7.04.38+PM.png)

## 자주 묻는 질문

**Q: 연락처가 답변하지 않으면 어떻게 되나요?**
워크플로우가 **Time Out(타임아웃)** 분기를 따라갑니다.

**Q: 연락처의 답변이 어떤 조건과도 일치하지 않으면 어떻게 되나요?**
워크플로우가 **No Condition Met(조건 불일치)** 분기를 따라갑니다.

**Q: 더 많은 분기를 추가할 수 있나요?**
네. 추가 분기를 생성하고 더 많은 결과와 일치하는 조건을 추가할 수 있습니다.

**Q: AI가 메시지를 작성할 때 어떤 정보를 사용하나요?**
AI는 **개성**, **추가 지시사항**, **질문**, **학습 데이터**, **대화 기록**을 사용합니다.

**Q: 어떤 채널이 지원되나요?**
**SMS, Facebook, WhatsApp, 라이브 채팅, Instagram**을 선택할 수 있습니다.

---
*원문 최종 수정: Mon, 5 Jan, 2026 at 7:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*