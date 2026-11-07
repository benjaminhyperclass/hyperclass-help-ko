---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003567-whatsapp-workflow-statistics
번역일: 2026-11-07
카테고리: 31-리셀링
---

# 워크플로우에서 WhatsApp 통계 보기

워크플로우의 WhatsApp 액션으로 보낸 메시지가 어떻게 전달됐는지 확인하고, 자세한 발송 리포트를 내보낼 수 있어요.

## 워크플로우에서 WhatsApp 통계 확인하기

1. **자동화**로 이동한 다음, WhatsApp 액션이 들어 있는 **워크플로우**를 선택하세요.

   ![자동화에서 WhatsApp 액션이 포함된 워크플로우 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043820079/original/wFh8-bz9V3isFoJFameT8f2Tgy4gMlPYUg.png?1742806079)

2. **WhatsApp Action**(WhatsApp 액션)을 클릭한 다음 **통계**를 클릭하세요.

   ![WhatsApp 액션에서 통계 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043820113/original/jXMjzTc02Me4RI-4svj_dxVHTyWIH9c7Gg.png?1742806104)

3. **통계** 탭을 선택하면 성과 지표를 볼 수 있어요.

   ![통계 탭의 성과 지표 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033365328/original/gQwM9qlLbXNLbQwf9NVbPH5l4tqhStRAGQ.png?1727090787)

{% hint style="info" %}
수신 확인(읽음 확인)을 끈 고객은 **전달됨** 탭에 표시돼요.
{% endhint %}

이제 해당 액션으로 발송된 모든 WhatsApp 메시지를 항목별로 자세히 볼 수 있어요.

---

### 상태별 의미

| 상태 | 설명 |
| --- | --- |
| 합계 | 선택한 기간 동안 이 액션으로 발송된 WhatsApp 메시지의 전체 수예요. |
| **Pending**(대기 중) | 대기열에 있지만 아직 발송되지 않은 메시지예요. |
| 발송됨 | WhatsApp으로 보냈지만 아직 상대방에게 전달되기를 기다리는 메시지예요. WhatsApp에서는 체크 표시 하나로 나타나요. |
| 전달됨 | 받는 사람의 기기에 정상적으로 전달된 메시지예요. 체크 표시 두 개로 나타나요. 수신 확인을 끈 사용자도 여기에 포함돼요. |
| **Read**(읽음) | 받는 사람이 열어 보거나 읽은 메시지예요. 파란색 체크 표시로 나타나요. |
| **Failed**(실패) | 아래와 같은 이유로 전달되지 못한 메시지예요. WhatsApp 번호가 아닌 경우, 블랙리스트에 오른 템플릿, 차단된 계정, 마케팅 템플릿 한도 초과 등이 있어요. 자세한 내용은 [사용자별 마케팅 템플릿 메시지 한도](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#per-user-marketing-template-message-limits)를 참고하세요. |

{% hint style="info" %}
수신 확인을 끈 사람에게 보낸 메시지는 실제로 읽었더라도 **전달됨** 상태로 표시돼요.
{% endhint %}

---

## WhatsApp 통계 내보내기

1. **자동화**에서 WhatsApp 액션이 들어 있는 **워크플로우**로 이동하세요.

   ![자동화에서 WhatsApp 액션이 있는 워크플로우 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033361425/original/cd8rmqmotkOPgulgFy92GKB5Nyd8udpUOA.png?1727088301)

2. **WhatsApp Action**(WhatsApp 액션)을 클릭한 다음 **통계**를 클릭하세요.

   ![WhatsApp 액션에서 통계 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033365164/original/uYqbiaJj_5U9WVNcaTRBT1EVmohPBHOUrA.png?1727090686)

3. 전체 통계를 확인하세요.

   ![전체 통계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033365328/original/gQwM9qlLbXNLbQwf9NVbPH5l4tqhStRAGQ.png?1727090787)

4. **내보내기**를 클릭하세요.

   ![내보내기 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033372860/original/dqzJlBiGLlFi6Ln3FUXYgeBF--GjHDiPZQ.png?1727095136)

수신자 이름, 전화번호, 상태, 시간 정보가 담긴 파일이 다운로드돼요.

---

## FAQ

### WhatsApp 통계 기능으로 어떤 정보를 볼 수 있나요?
메시지 전달과 반응에 대한 자세한 분석을 볼 수 있어요. 합계, 발송됨, 전달됨, 읽음, 대기 중, 실패 상태별로 확인할 수 있어요.

### 워크플로우에서 WhatsApp 메시지 통계는 어디서 보나요?
**자동화**로 이동해 **워크플로우**를 선택하고, **WhatsApp Action**(WhatsApp 액션)을 클릭한 다음 **통계**를 클릭하세요.

### "합계" 숫자는 무엇을 뜻하나요?
선택한 기간 동안 해당 액션으로 발송된 WhatsApp 메시지의 전체 수예요.

### "발송됨"과 "전달됨"은 어떻게 다른가요?
"발송됨"은 시스템에서 WhatsApp으로 메시지를 보낸 상태이며, 체크 표시 하나로 나타나요. "전달됨"은 메시지가 받는 사람의 기기에 도착한 상태이며, 체크 표시 두 개로 나타나요.

### 받는 사람이 수신 확인을 꺼 두면 어떻게 표시되나요?
WhatsApp의 개인정보 설정 때문에, 메시지를 읽었더라도 "전달됨"으로 표시돼요.

### 메시지가 실패하는 이유는 무엇인가요?
다음과 같은 경우에 실패할 수 있어요.

- 올바르지 않은 번호이거나 WhatsApp을 쓰지 않는 전화번호
- 블랙리스트에 오른 템플릿
- 차단된 WhatsApp 계정
- 사용자별 마케팅 메시지 한도 초과

### 리포트용으로 통계를 다운로드할 수 있나요?
네. 통계 화면의 **내보내기** 버튼을 누르면 메시지 상세 정보가 담긴 CSV 파일을 받을 수 있어요.

### 내보낸 파일에 메시지별 기록도 들어 있나요?
네. 각 행에 연락처 이름, 전화번호, 상태, 시간 정보가 들어 있어요.
