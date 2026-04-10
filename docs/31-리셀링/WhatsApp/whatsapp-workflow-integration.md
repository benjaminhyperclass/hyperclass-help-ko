---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# 왓츠앱 - 워크플로우 연동

이 문서에서는 Hyperclass에서 왓츠앱을 연동하여 자동화 워크플로우를 만드는 방법을 설명합니다.

**목차**

- [자동화 워크플로우 만드는 방법](#자동화-워크플로우-만드는-방법)
- [워크플로우 자동화로 왓츠앱 응답 자동화하기](#워크플로우-자동화로-왓츠앱-응답-자동화하기)
- [왓츠앱 메시지 발신용 전화번호를 선택하는 방법](#왓츠앱-메시지-발신용-전화번호를-선택하는-방법)
- [왓츠앱 연락처 답변 대기 설정 방법](#왓츠앱-연락처-답변-대기-설정-방법)
- [왓츠앱 수신거부(DND) 설정 방법](#왓츠앱-수신거부dnd-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

# 자동화 워크플로우 만드는 방법

# 워크플로우 자동화로 왓츠앱 응답 자동화하기

## 1단계: 새 워크플로우 만들기

- Automations(자동화) → Create Workflow(워크플로우 만들기)로 이동하세요.
- "Start from Scratch(처음부터 시작)"를 선택하여 맞춤 자동화를 구축하세요.

![새 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044514048/original/HwQ3rYz6g05-6BZMg047Hhg9VnccwIxwwg.png?1743746351)

### 2단계: 트리거 설정

- Add New Trigger(새 트리거 추가)를 클릭하고 "Customer Replied(고객 응답)"를 검색하세요.

![트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022183226/original/sUSMWm5-yNH4-0hOudq2E0OXOjwBnvx5UA.png?1709552281)

### 3단계: 왓츠앱 전용 필터 적용

- 필터를 추가하세요: Reply Channel(답변 채널) → WhatsApp을 선택하여 이 자동화가 왓츠앱 응답에만 적용되도록 설정하세요.

![왓츠앱 필터 적용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041857757/original/J9U3yH8vF3xbOT_-KX7iRU09yESPJboE_Q.png?1739954737)

### 4단계: 자동화 액션 정의

- +(플러스) 버튼을 클릭하여 액션을 추가하세요.
- 액션 유형으로 WhatsApp을 선택하세요.

![액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022192979/original/F6hqIxCIJQQo2S5Sx3nSzM26LFMTqkA-Dg.png?1709556390)

**5단계: 스마트 분기 활성화 (선택사항)**

**버튼이 있는 왓츠앱 플로우나 템플릿**을 사용할 때, 분기를 활성화하면 강력한 로직을 구현할 수 있습니다:

• **Flow Completed(플로우 완료)** – 사용자가 왓츠앱 플로우를 완료했을 때 실행
• **Undelivered(전달 실패)** – 메시지 전달에 실패했을 때 (예: 사용자에게 연결 불가) 트리거
• **Timeout(시간 초과)** – 사용자가 시간 내에 응답하지 않을 때 활성화

이를 활용하여 고객 행동에 따른 대체 메시지, 알림, 또는 다음 단계를 전송할 수 있습니다.

![스마트 분기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044476683/original/GcTMT6BtWryKXzdjpFX5RDuy_PRq2oD6Hg.png?1743684856)

### 6단계: 워크플로우 저장 및 활성화

- Save Action(액션 저장) → Publish(발행) → Save(저장)를 클릭하여 워크플로우를 활성화하세요.

![워크플로우 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044514160/original/xRxAiLILrTTKgSBSNi3dblxDU04cR4uGXg.png?1743746562)

참고: 표준화된 메시지를 위해 수동 텍스트 대신 미리 승인된 왓츠앱 메시지 템플릿을 발송할 수도 있습니다.

응답을 자동화하면 비즈니스 운영을 최적화하면서 고객과 시기적절하고 전문적인 커뮤니케이션을 보장할 수 있습니다.

# 왓츠앱 메시지 발신용 전화번호를 선택하는 방법

참고: 연결 상태(connected status)를 가진 전화번호만 드롭다운에서 선택할 수 있습니다.

### 1단계: 워크플로우에서 액션 추가

- 워크플로우에서 "+" 아이콘을 탭하여 새 액션을 추가하세요.

![액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041864330/original/TfD_Iq8lduSr-5v-BheZhkxazpCSV1Ohpg.png?1739958604)

### 2단계: 액션 유형으로 왓츠앱 선택

- 액션 섹션에서 "WhatsApp"을 검색하세요.
- WhatsApp을 클릭하여 진행하세요.

![왓츠앱 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041866017/original/Pz8rOOnMRkoheKL9H6XsxEnG2UbGTt0fkw.png?1739959605)

### 3단계: 발신 전화번호 선택

- 드롭다운 메뉴에서 왓츠앱 메시지 발송에 사용할 전화번호를 선택하세요.

![전화번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041866265/original/RpoAgk7Zq_9b16e8HSA1Y6-Ih16E9028MQ.png?1739959769)

# 왓츠앱 연락처 답변 대기 설정 방법

초기 왓츠앱 메시지를 보낸 후 연락처의 답변을 기다렸다가 워크플로우의 다음 단계를 트리거할 수 있습니다. 이를 통해 자동화 워크플로우에서 보다 자연스럽고 반응적인 상호작용이 가능합니다.

1단계: Automations(자동화) > Workflows(워크플로우) > Create Workflow(워크플로우 만들기) > Start from Scratch(처음부터 시작)으로 이동

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022182863/original/ipATIuH1_hqUQWQY6aDtbcEpe9Pcqrf54g.png?1709552111)

2단계: Add new Trigger(새 트리거 추가) 선택 후 Contact Created(연락처 생성) 검색

![트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251284/original/MY0_6AfevQBjYRp3AihgmpaTD7ECVY_ImQ.png?1709620624)

4단계: 플러스 버튼을 클릭하여 액션 추가 > WhatsApp 선택

![왓츠앱 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022192979/original/F6hqIxCIJQQo2S5Sx3nSzM26LFMTqkA-Dg.png?1709556390)

5단계: SELECT WHATSAPP TEMPLATE(왓츠앱 템플릿 선택) > 발송할 템플릿 선택

![템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251430/original/sLmHezU-aVwrod0cV6ddCiseq2rmDVHHlA.png?1709620865)

6단계: + 버튼 클릭 > Wait(대기) 선택

![대기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251482/original/zPzS8XjleFNVBe5m0NKvTccYC_WLMqd2SA.png?1709620935)

7단계: WAIT FOR(대기 조건) > Contact Reply(연락처 답변) > REPLY TO(답변 채널) > WhatsApp 선택 후 Save Action(액션 저장)

![답변 대기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251584/original/TGUQ-M9QRj-f6SH4hkF5FSuzE9PauZsyNQ.png?1709621069)

8단계: + 버튼 선택 > ACTION NAME: WhatsApp > SELECT WHATSAPP TEMPLATE : None - Manual Text(없음 - 수동 텍스트)

참고: 고객이 답변하여 [무료 진입점 대화](whatsapp-pricing-and-billing-full-guide.md)가 시작되었으므로 **추가 비용 없이** 자유 텍스트 메시지를 보낼 수 있습니다.

![수동 텍스트 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022252040/original/3Z38eC0Lhwi99VfQI-axw40FNEgjjjQPWQ.png?1709621441)

9단계: Save Action(액션 저장) 후 자동화를 발행(Publish)하고 Save(저장) 클릭

![워크플로우 발행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022252156/original/IOhI_LbETpeZ_tRlaIFjVdd-sYvZVOMvdA.png?1709621521)

# 왓츠앱 수신거부(DND) 설정 방법

특정 고객 행동(예: "STOP" 전송)을 기반으로 모든 채널 또는 왓츠앱에 대해서만 DND 상태를 설정할 수 있습니다. 이를 통해 고객 선호도를 존중하고 커뮤니케이션 채널을 보다 효과적으로 관리할 수 있습니다.

1단계: Automations(자동화) > Workflows(워크플로우) > Create Workflow(워크플로우 만들기) > Start from Scratch(처음부터 시작)으로 이동

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022182863/original/ipATIuH1_hqUQWQY6aDtbcEpe9Pcqrf54g.png?1709552111)

2단계: Add New Trigger(새 트리거 추가) 선택 > Customer Replied(고객 응답)

![고객 응답 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254082/original/XK2tm4XPWdAXLU4TvHQK0q4usOOzQmYVFA.png?1709623321)

3단계: Add filters(필터 추가) 선택 > Reply channel(답변 채널) > WhatsApp과 Contains phase(포함 문구) > STOP 설정 후 Save Trigger(트리거 저장)

![DND 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254303/original/QqCo2BKrJy4KoiuRr2SfLdGN74ytvZ34GA.png?1709623563)

4단계: + 버튼 선택 > DND 검색 > Enable/Disable DND(DND 활성화/비활성화) 선택

![DND 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254401/original/J0moMQBtGQ4fZ-c9R_fEJhKadp43dFR9mQ.png?1709623651)

5단계: Enable DND for specific channels(특정 채널에 DND 활성화) 선택 > Channels: WhatsApp > Save Action(액션 저장)

참고: Enable DND for all channels(모든 채널에 DND 활성화)를 선택하여 모든 채널에 DND를 활성화할 수 있습니다.

![DND 채널 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254564/original/tylJrrI3xHY5Z2eWRl4OgE_2C6cqZetXkw.png?1709623796)

# 자주 묻는 질문

## 수신거부(DND) 설정이 다른 커뮤니케이션 채널에도 영향을 주나요, 아니면 왓츠앱만 영향을 받나요?

DND를 모든 채널에 적용하거나 왓츠앱에만 적용하도록 설정할 수 있습니다. 이를 통해 고객이 모든 커뮤니케이션 방식에서 연락을 받지 않기를 원하는지, 또는 특정 채널에서만 연락을 받지 않기를 원하는지 제어할 수 있습니다.

## 워크플로우에서 왓츠앱 메시지를 보낼 때 "None - Manual Text"와 템플릿 선택의 차이는 무엇인가요?

"None - Manual Text"는 24시간 윈도우 내에서 자유 형식의 메시지를 작성할 수 있게 해줍니다. 템플릿 선택은 미리 승인된 메시지를 보내는 것으로, 24시간 윈도우 밖에서 대화를 시작하거나 특정 마케팅 또는 지원 목적에 유용합니다.

## 왓츠앱을 SMS나 이메일과 같은 다른 채널과 결합한 워크플로우를 만들 수 있나요?

네! Hyperclass 워크플로우는 유연하여 왓츠앱을 다른 커뮤니케이션 채널과 결합해 포괄적인 자동화 시퀀스를 만들 수 있습니다.

## 24시간 윈도우 밖에서 메시지를 보내기 위해 왓츠앱 워크플로우 자동화를 사용할 수 있나요?

네, 초기 24시간 윈도우 이후에 아웃리치나 후속 메시지를 위해 승인된 왓츠앱 템플릿을 사용할 수 있습니다. 이러한 템플릿 기반 메시지는 추가 요금이 발생한다는 점을 유의하세요.

## '무료 진입점 대화'란 무엇이며 일반 대화와 어떻게 다른가요?

- 고객이 "왓츠앱으로 클릭" 광고나 페이스북 클릭 유도 버튼을 클릭할 때 트리거됩니다.
- 표준 24시간 윈도우와 비교해 72시간 동안 지속됩니다.
- 이 연장된 윈도우 동안 자유 형식 메시지와 템플릿 메시지를 모두 보낼 수 있습니다.

## '왓츠앱 답변 대기' 단계에서 설정한 것과 다른 내용으로 고객이 답변하면 어떻게 되나요?

워크플로우는 고객이 설정한 내용과 일치하는 답변을 보낼 때까지 계속 대기합니다. 예상치 못한 응답을 처리하려면 대안 조건이 있는 추가 분기를 워크플로우에 추가하는 것을 고려하세요.

## 왓츠앱 메시지 전송을 위해 연락처 번호를 어떻게 선택하나요?

다음 단계를 따라 연락처 번호를 선택할 수 있습니다:

- 워크플로우에서 "+" 아이콘을 탭하여 새 액션을 추가하세요.
- 액션 섹션에서 "WhatsApp"을 검색하고 선택하세요.
- 드롭다운 목록에서 전화번호를 선택하세요.

## 드롭다운 목록에 내 전화번호가 보이지 않는 이유는 무엇인가요?

Phone Number(전화번호) 탭에서 연결된 전화번호만 드롭다운에 나타납니다. 왓츠앱 번호가 이 섹션에서 올바르게 연결되었는지 확인하세요.

## 왓츠앱 메시징을 위해 여러 전화번호를 추가할 수 있나요?

네, 연결된 왓츠앱 번호가 여러 개 있다면 워크플로우를 설정할 때 드롭다운 목록에서 원하는 번호를 선택할 수 있습니다.

## 잘못된 전화번호를 선택하면 어떻게 되나요?

잘못된 번호를 선택하면 해당 번호에서 메시지가 발송됩니다. 이를 수정하려면 워크플로우를 편집하고 올바른 전화번호를 선택하세요.

## 모든 워크플로우에 대해 이 설정을 구성해야 하나요?

네, 메시지가 올바른 소스에서 발송되도록 보장하기 위해 각 워크플로우마다 발신 전화번호를 수동으로 선택해야 합니다.

---
*원문 최종 수정: Fri, 4 Apr, 2025 at 1:23 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*