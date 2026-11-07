---
원문: /support/solutions/articles/155000002491-whatsapp-delivery-status-under-workflows
번역일: 2026-11-07
카테고리: 31-리셀링
---

# 워크플로우에서 WhatsApp 전송 상태 활용하기

워크플로우 안에서 WhatsApp 메시지의 전송 상태를 조건으로 쓰는 방법을 안내해요.

## 사전 준비

- 서브 계정에서 WhatsApp을 구독하고 활성화해야 해요. 서브 계정에 WhatsApp을 설정하는 방법은 WhatsApp 서브 계정 설정 문서를 참고하세요.
- 비즈니스가 먼저 시작하는 대화를 보내려면 승인된 템플릿이 있어야 해요. 만드는 방법은 WhatsApp 템플릿 만들기 문서를 참고하세요.

## WhatsApp 전송 상태 레시피

**자동화**에는 미리 만들어 둔 WhatsApp 전송 상태 레시피가 있어요. 이 레시피를 바로 사용해도 돼요.

![WhatsApp 전송 상태 레시피 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026559813/original/ZM-GKrgtuPHvnIQs2Hf9h5Ha4pN9Dw-ZPQ.png?1716560015)

## 워크플로우에서 WhatsApp 전송 상태 사용하기

1. **자동화 > 워크플로우 만들기 > 처음부터 시작**으로 이동하세요.

   ![처음부터 시작 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026487798/original/z68RVmgwwDv2YtzvBuVA-wo_E-KciAficw.png?1716466176)

2. **Add Trigger**(트리거 추가) > **WhatsApp Action**(WhatsApp 액션) > **WhatsApp 템플릿 선택** 순서로 진행하세요.

   ![WhatsApp 액션에서 템플릿 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488035/original/hoDiVPGKoAsE_pckEFA48JDT2al-Wra58A.png?1716466391)

3. **Wait for WhatsApp Message Delivery Status**(WhatsApp 메시지 전송 상태 대기) 토글을 켠 다음 **Save Action**(액션 저장)을 클릭하세요.

   ![전송 상태 대기 토글 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488147/original/LW8bIaKeBl2uhQONwMLuXWnlKAm3lkm5Kg.png?1716466458)

4. **Add Action**(액션 추가) > **If/Else**(조건 분기)를 선택하세요.

   ![If/Else 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488215/original/IJ34vqlnZ-VHR7aR7JEV2TWNiduHXY8RzA.png?1716466538)

5. **연락처 세부정보** > **유효한 WhatsApp**을 선택하고, **True**와 **False**에 대한 **조건 추가**를 설정하세요.

   ![유효한 WhatsApp 조건 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026492804/original/HRodQYCR8yD7hbpwb9-03RiNm5UOJdoD-w.png?1716469670)

6. **False** 분기와 **None** 분기에는 SMS 또는 이메일로 대신 보내도록 설정하세요.

   ![False와 None 분기에 SMS/이메일 대체 발송을 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026493561/original/CnwlstxlE20N-ywEH1GHMiuf3IBYEkrQyQ.png?1716470151)

## 자주 묻는 질문

### WhatsApp 전송 상태 지원 기능은 무엇인가요?
워크플로우에서 WhatsApp 메시지의 전송 상태에 따라 조건 분기를 만들 수 있는 기능이에요. 이를 활용하면 커뮤니케이션 전략을 더 잘 세울 수 있어요.

### 워크플로우에서 WhatsApp 전송 상태를 어떻게 사용하나요?
**유효한 WhatsApp** 상태를 기준으로 **If/Else** 조건을 만들어 다음 단계를 정할 수 있어요. 상황에 맞게 유연하게 대응하는 커뮤니케이션을 구성할 수 있어요.

### 워크플로우에서 연락처를 대기시키는 토글은 어떤 역할을 하나요?
이 토글을 켜면 Meta에서 전송 상태를 받을 때까지 연락처가 워크플로우에 머물러요. 전송 상태를 받은 뒤에야 다음 단계로 넘어가요.
