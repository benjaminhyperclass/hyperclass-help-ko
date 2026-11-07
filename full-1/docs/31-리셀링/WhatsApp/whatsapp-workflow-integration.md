---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001624-whatsapp-workflow-integration
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 워크플로우 자동화

WhatsApp을 하이퍼클래스 워크플로우에 연결해 메시지 응답을 자동화하는 방법을 안내해요. 워크플로우 만들기, 발신 전화번호 선택, 연락처 답장 기다리기, WhatsApp 수신거부 설정을 차례로 다뤄요.

## 자동화 워크플로우 만들기

[동영상](https://www.loom.com/embed/f9a9a217121645759cfaa9e2c1ca8267?sid=6528b3d1-8b9d-4bc4-ab8a-a333331bfc55)

---

## 워크플로우로 WhatsApp 응답 자동화하기

### 새 워크플로우 만들기

1. **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 클릭하세요.
2. **처음부터 시작**을 선택하면 원하는 대로 자동화를 직접 만들 수 있어요.

![새 워크플로우를 처음부터 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044514048/original/HwQ3rYz6g05-6BZMg047Hhg9VnccwIxwwg.png?1743746351)

### 트리거 설정하기

**Add New Trigger**(새 트리거 추가)를 클릭하고 **Customer Replied**(고객 답장)를 검색하세요.

![Customer Replied 트리거를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022183226/original/sUSMWm5-yNH4-0hOudq2E0OXOjwBnvx5UA.png?1709552281)

### WhatsApp 전용 필터 적용하기

필터를 추가하고 **Reply Channel**(답장 채널)에서 **WhatsApp**을 선택하세요. 그러면 이 자동화가 WhatsApp 답장에만 적용돼요.

![Reply Channel 필터에서 WhatsApp을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041857757/original/J9U3yH8vF3xbOT_-KX7iRU09yESPJboE_Q.png?1739954737)

### 자동으로 실행할 액션 정하기

1. **+**(더하기) 버튼을 클릭해 액션을 추가하세요.
2. 액션 유형으로 **WhatsApp**을 선택하세요.

![액션 유형으로 WhatsApp을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022192979/original/F6hqIxCIJQQo2S5Sx3nSzM26LFMTqkA-Dg.png?1709556390)

### 스마트 분기 켜기 (선택 사항)

버튼이 있는 WhatsApp 플로우나 템플릿을 사용할 때 분기를 켜면 고객의 반응에 따라 다음 단계를 나눌 수 있어요.

- **Flow Completed**(플로우 완료): 사용자가 WhatsApp 플로우를 끝까지 마치면 실행돼요.
- **Undelivered**(전달되지 않음): 사용자에게 연락이 닿지 않는 등 메시지 전송에 실패하면 실행돼요.
- **Timeout**(시간 초과): 사용자가 정해진 시간 안에 응답하지 않으면 실행돼요.

이 분기를 활용해 고객의 행동에 따라 대체 메시지, 알림, 다음 단계를 보낼 수 있어요.

![스마트 분기를 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044476683/original/GcTMT6BtWryKXzdjpFX5RDuy_PRq2oD6Hg.png?1743684856)

### 워크플로우 저장하고 활성화하기

**Save Action**(액션 저장)을 클릭한 다음 **Publish**(게시)와 **Save**(저장)를 차례로 클릭하면 워크플로우가 활성화돼요.

![워크플로우를 저장하고 게시하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044514160/original/xRxAiLILrTTKgSBSNi3dblxDU04cR4uGXg.png?1743746562)

{% hint style="info" %}
직접 입력한 문구 대신, 사전 승인을 받은 WhatsApp 메시지 템플릿을 보낼 수도 있어요. 표준화된 메시지를 보낼 때 편해요.
{% endhint %}

응답을 자동화하면 고객에게 제때 정돈된 답변을 보내면서 업무도 효율적으로 운영할 수 있어요.

---

## WhatsApp 메시지를 보낼 발신 전화번호 선택하기

{% hint style="info" %}
드롭다운에는 연결됨 상태인 전화번호만 나타나요.
{% endhint %}

### 워크플로우에 액션 추가하기

워크플로우에서 **+** 아이콘을 눌러 새 액션을 추가하세요.

![워크플로우에서 + 아이콘으로 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041864330/original/TfD_Iq8lduSr-5v-BheZhkxazpCSV1Ohpg.png?1739958604)

### 액션 유형으로 WhatsApp 선택하기

1. **Action**(액션) 섹션에서 **WhatsApp**을 검색하세요.
2. **WhatsApp**을 클릭해 다음으로 넘어가세요.

![Action 섹션에서 WhatsApp을 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041866017/original/Pz8rOOnMRkoheKL9H6XsxEnG2UbGTt0fkw.png?1739959605)

### 발신 전화번호 고르기

**From Phone Number**(발신 전화번호) 드롭다운에서 WhatsApp 메시지를 보낼 전화번호를 선택하세요.

![드롭다운에서 발신 전화번호를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041866265/original/RpoAgk7Zq_9b16e8HSA1Y6-Ih16E9028MQ.png?1739959769)

---

## WhatsApp 연락처 답장 기다리기 설정

WhatsApp 메시지를 먼저 보낸 뒤, 연락처가 답장하면 워크플로우의 다음 단계를 실행하도록 설정할 수 있어요. 자동화 안에서도 더 자연스럽고 반응이 빠른 대화를 만들 수 있어요.

1. **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 클릭하고 **처음부터 시작**을 선택하세요.

   ![워크플로우를 처음부터 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022182863/original/ipATIuH1_hqUQWQY6aDtbcEpe9Pcqrf54g.png?1709552111)

2. **Add New Trigger**(새 트리거 추가)를 선택하고 **Contact Created**(연락처 생성됨)를 검색하세요.

   ![Contact Created 트리거를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251284/original/MY0_6AfevQBjYRp3AihgmpaTD7ECVY_ImQ.png?1709620624)

3. + 버튼을 클릭해 액션을 추가하고 **WhatsApp**을 선택하세요.

   ![+ 버튼으로 WhatsApp 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022192979/original/F6hqIxCIJQQo2S5Sx3nSzM26LFMTqkA-Dg.png?1709556390)

4. **Select WhatsApp Template**(WhatsApp 템플릿 선택)을 클릭한 다음 보낼 템플릿을 선택하세요.

   ![보낼 WhatsApp 템플릿을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251430/original/sLmHezU-aVwrod0cV6ddCiseq2rmDVHHlA.png?1709620865)

5. + 버튼을 클릭하고 **Wait**(대기)를 선택하세요.

   ![+ 버튼으로 Wait 액션을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251482/original/zPzS8XjleFNVBe5m0NKvTccYC_WLMqd2SA.png?1709620935)

6. **WAIT FOR**(대기 조건)에서 **Contact Reply**(연락처 답장)를, **REPLY TO**(답장 채널)에서 **WhatsApp**을 선택한 뒤 **Save Action**(액션 저장)을 클릭하세요.

   ![Wait 액션에서 Contact Reply와 WhatsApp을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251584/original/TGUQ-M9QRj-f6SH4hkF5FSuzE9PauZsyNQ.png?1709621069)

7. + 버튼을 클릭해 액션을 추가하세요. **Action Name**(액션 이름)에 **WhatsApp**을 입력하고, **Select WhatsApp Template**(WhatsApp 템플릿 선택)에서 **None - Manual Text**(없음 - 직접 입력 텍스트)를 선택하세요.

   {% hint style="info" %}
   고객이 답장하면 무료 진입점 대화(Free Entry Point Conversations) 기간이 열려요. 이때는 추가 비용 없이 자유 형식 문자 메시지를 보낼 수 있어요.
   {% endhint %}

   ![None - Manual Text를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022252040/original/3Z38eC0Lhwi99VfQI-axw40FNEgjjjQPWQ.png?1709621441)

8. **Save Action**(액션 저장)을 클릭하고 자동화를 **Publish**(게시)한 뒤 **Save**(저장)를 클릭하세요.

   ![액션을 저장하고 자동화를 게시하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022252156/original/IOhI_LbETpeZ_tRlaIFjVdd-sYvZVOMvdA.png?1709621521)

---

## WhatsApp 수신거부(DND) 설정

고객이 "STOP"을 보내는 것처럼 특정 행동을 하면, 모든 채널 또는 WhatsApp에만 수신거부(DND) 상태를 설정할 수 있어요. 고객의 수신 선호를 존중하면서 커뮤니케이션 채널을 더 잘 관리할 수 있어요.

1. **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 클릭하고 **처음부터 시작**을 선택하세요.

   ![워크플로우를 처음부터 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022182863/original/ipATIuH1_hqUQWQY6aDtbcEpe9Pcqrf54g.png?1709552111)

2. **Add New Trigger**(새 트리거 추가)를 선택하고 **Customer Replied**(고객 답장)를 선택하세요.

   ![Customer Replied 트리거를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254082/original/XK2tm4XPWdAXLU4TvHQK0q4usOOzQmYVFA.png?1709623321)

3. **Add Filters**(필터 추가)를 선택하세요. **Reply Channel**(답장 채널)에서 **WhatsApp**을, **Contains Phrase**(문구 포함)에서 **STOP**을 선택하고 **Save Trigger**(트리거 저장)를 클릭하세요.

   ![Reply Channel과 Contains Phrase 필터를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254303/original/QqCo2BKrJy4KoiuRr2SfLdGN74ytvZ34GA.png?1709623563)

4. + 버튼을 선택하고 **DND**를 검색한 다음 **Enable/Disable DND**(수신거부 활성화/비활성화)를 선택하세요.

   ![DND를 검색해 Enable/Disable DND를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254401/original/J0moMQBtGQ4fZ-c9R_fEJhKadp43dFR9mQ.png?1709623651)

5. **Enable DND for specific channels**(특정 채널의 수신거부 활성화)를 선택하세요. **Channels**(채널)에서 **WhatsApp**을 선택하고 **Save Action**(액션 저장)을 클릭하세요.

   {% hint style="info" %}
   모든 채널에 수신거부를 적용하려면 **Enable DND for all channels**(모든 채널의 수신거부 활성화)를 선택하세요.
   {% endhint %}

   ![특정 채널에서 WhatsApp을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254564/original/tylJrrI3xHY5Z2eWRl4OgE_2C6cqZetXkw.png?1709623796)

---

## 자주 묻는 질문

### 수신거부(DND) 설정은 WhatsApp에만 적용되나요, 다른 채널에도 적용되나요?
모든 채널에 적용할 수도 있고, WhatsApp에만 적용할 수도 있어요. 고객이 모든 방식의 연락을 막고 싶어 하는지, 연락을 원치 않는다고 밝힌 특정 채널만 막고 싶어 하는지에 맞춰 선택하면 돼요.

### 워크플로우에서 WhatsApp 메시지를 보낼 때 "None - Manual Text"와 템플릿 선택은 무엇이 다른가요?
**None - Manual Text**는 24시간 기간 안에서 자유 형식으로 메시지를 직접 쓸 때 사용해요. 템플릿은 사전 승인을 받은 메시지를 보낼 때 쓰며, 24시간 기간이 지난 뒤 대화를 시작하거나 특정 마케팅·지원 목적으로 보낼 때 유용해요.

### WhatsApp과 SMS, 이메일 같은 다른 채널을 함께 쓰는 워크플로우를 만들 수 있나요?
네, 만들 수 있어요. 워크플로우는 WhatsApp을 다른 커뮤니케이션 채널과 자유롭게 조합해 다양한 자동화 시퀀스를 구성할 수 있어요.

### WhatsApp 워크플로우 자동화로 24시간 기간이 지난 뒤에도 메시지를 보낼 수 있나요?
네, 승인된 WhatsApp 템플릿을 사용하면 최초 24시간 기간이 지난 뒤에도 안내나 후속 메시지를 보낼 수 있어요. 단, 템플릿 기반 메시지에는 추가 요금이 부과돼요.

### '무료 진입점 대화(Free Entry Point Conversation)'는 무엇이고, 일반 대화와 어떻게 다른가요?
- 고객이 "Click to WhatsApp" 광고나 Facebook 콜투액션 버튼을 클릭하면 시작돼요.
- 기본 24시간 기간과 달리 72시간 동안 이어져요.
- 이 연장된 기간에는 자유 형식 메시지와 템플릿 메시지를 모두 보낼 수 있어요.

### 'Wait for WhatsApp Reply' 단계에서 설정한 내용과 다른 답장이 오면 어떻게 되나요?
설정한 조건에 맞는 답장이 올 때까지 워크플로우가 계속 기다려요. 예상 밖의 답장도 처리하고 싶다면 다른 조건을 가진 분기를 워크플로우에 추가해 보세요.

### WhatsApp 메시지를 보낼 발신 번호는 어떻게 선택하나요?
다음 순서로 선택해요.

1. 워크플로우에서 **+** 아이콘을 눌러 새 액션을 추가하세요.
2. **Action**(액션) 섹션에서 **WhatsApp**을 검색해 선택하세요.
3. 드롭다운 목록에서 전화번호를 선택하세요.

### 드롭다운 목록에 내 전화번호가 보이지 않아요.
**전화번호** 탭에 연결된 번호만 드롭다운에 나타나요. 이 화면에서 WhatsApp 번호가 올바르게 연결되어 있는지 확인하세요.

### WhatsApp 메시지에 전화번호를 여러 개 추가할 수 있나요?
네, WhatsApp 번호를 여러 개 연결했다면 워크플로우를 설정할 때 드롭다운 목록에서 원하는 번호를 선택할 수 있어요.

### 잘못된 전화번호를 선택하면 어떻게 되나요?
잘못 선택한 번호로 메시지가 발송돼요. 워크플로우를 편집해 올바른 전화번호로 바꾸면 돼요.

### 워크플로우마다 이 설정을 해야 하나요?
네, 워크플로우마다 발신 전화번호를 직접 선택해야 올바른 번호로 메시지가 발송돼요.
