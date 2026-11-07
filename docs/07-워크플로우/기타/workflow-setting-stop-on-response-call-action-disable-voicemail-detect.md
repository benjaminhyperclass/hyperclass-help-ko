---
원문: /support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 설정 — Stop on Response와 Call 액션의 Disable Voicemail Detect

이 문서는 워크플로우 설정 **Stop on Response**(응답 시 중단)와 **Call**(통화) 액션의 **Disable Voicemail Detect**(음성사서함 감지 끄기) 설정이 서로 어떻게 영향을 주는지 설명해요.

이 두 설정은 워크플로우가 연락처에 자동 전화를 걸 때 어떻게 반응할지 정해요. 사람과 음성사서함을 구분해서 정확도를 높일지, 구분하지 않고 통화를 더 빨리 연결할지 선택할 수 있어요.

워크플로우 설정 전체는 Workflow Settings - Overview 문서에서 확인하세요.

{% hint style="info" %}
**Call** 액션에서 비즈니스 쪽에서 일어나는 일은 **Stop on Response**와 관계가 없어요. 비즈니스에 먼저 전화를 걸어요. 비즈니스가 받지 않으면 워크플로우는 계속 진행돼요. 비즈니스가 받았는데 연락처가 받지 않아도 워크플로우는 계속 진행돼요. **Stop on Response**에 영향을 주는 쪽은 연락처(또는 연락처의 음성사서함)뿐이에요.
{% endhint %}

## Stop on Response

워크플로우 전체에 적용되는 일반 설정이에요. 켜 두면 연락처가 워크플로우에서 보낸 SMS, 이메일, 전화 중 무엇에든 응답했을 때 그 연락처를 워크플로우에서 자동으로 뺍니다. 이미 관심을 보인 리드에게 자동 메시지가 계속 가는 일을 막아 줘요.

![Stop on Response 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056954910/original/ExA6xUTEZTcK0JLbf1jsuHXFp7yL2rBvPg.png?1761609860)

## Disable Voicemail Detect

**Call** 액션 안에만 있는 고급 설정이에요. 전화를 받은 쪽이 사람인지 자동응답기(음성사서함)인지 시스템이 가려낼지 정해요.

![Call 액션의 Disable Voicemail Detect 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056954924/original/iFgpTL5EKEjFsCvGfpReEPw1rPfH3D3g5g.png?1761609939)

## 조합

어떻게 설정할지는 목적에 따라 달라요. 음성사서함 때문에 워크플로우가 멈추지 않게 하고 싶은지, 통화 연결을 가장 빠르게 하고 싶은지 먼저 정하세요.

| Stop On Response | Disable Voicemail Detect | 결과 |
| --- | --- | --- |
| ON | ON | 연락처의 음성사서함이 전화를 받으면 워크플로우가 중단돼요. 통화가 음성사서함으로 넘어가지 않게 하려면 **Call Timeout**(통화 타임아웃)을 20초 미만으로 설정하세요. |
| ON | OFF | 워크플로우가 음성사서함을 감지해요. 음성사서함으로 넘어간 통화는 **Stop on Response**를 작동시키지 않으므로, 연락처는 워크플로우에 계속 남아요. |
| OFF | OFF | 연락처의 응답이나 음성사서함 여부와 상관없이 워크플로우가 계속돼요. 음성사서함 감지가 기본으로 켜져 있어서 조금 더 느려요. |
| OFF | ON | 연락처의 응답이나 음성사서함 여부와 상관없이 워크플로우가 계속돼요. 음성사서함 감지를 꺼 두었기 때문에 조금 더 빨라요. |

## 자주 묻는 질문

### 전화를 받지 않았는데도 통화 후에 워크플로우가 멈춰요. 왜 그런가요?
워크플로우에서 **Stop on Response**를 켜 두고, **Call** 액션에서 **Disable Voicemail Detect**도 켠 경우에 흔히 생겨요. 통화가 음성사서함으로 넘어가면 시스템이 이를 응답으로 보고 워크플로우를 중단해요. 이를 막으려면 해당 액션의 **Call Timeout**을 20초 이하로 설정하세요.

### 음성사서함 감지를 켜면 왜 지연이 생기나요?
음성사서함 감지가 켜져 있으면(기본 설정) 시스템이 전화가 연결된 뒤 몇 초 동안 멈춰서 소리를 분석해요. 실제 사람의 목소리인지, 미리 녹음된 음성사서함 인사말인지 가려내는 과정이에요. 이 분석 때문에 통화가 완전히 연결되기까지 잠깐 지연돼요.

### 음성사서함으로 넘어가지 않으려면 **Call Timeout**을 얼마로 설정하는 게 좋나요?
보통 20초를 권장해요. 대부분의 통신사와 전화 서비스는 20초보다 오래 울린 뒤에 음성사서함으로 넘겨요.

### **대화** 화면에서 직접 거는 전화에도 **Stop on Response**가 적용되나요?
아니요. **Stop on Response**는 해당 워크플로우 안에서 자동으로 보낸 액션에만 적용돼요. 직접 보낸 연락이나 다른 워크플로우에서 보낸 연락은 영향을 주지 않아요.
