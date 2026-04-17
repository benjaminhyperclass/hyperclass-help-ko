---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# 워크플로우에서 WhatsApp 전송 상태 활용하기

이 글에서는 워크플로우(Workflows) 내에서 WhatsApp 전송 상태를 활용하는 방법을 설명해드립니다.

목차
- [워크플로우에서 WhatsApp 사용을 위한 사전 요구사항](#워크플로우에서-whatsapp-사용을-위한-사전-요구사항)
- [WhatsApp 전송 상태 레시피](#whatsapp-전송-상태-레시피)
- [워크플로우에서 WhatsApp 전송 상태 사용법](#워크플로우에서-whatsapp-전송-상태-사용법)
- [자주 묻는 질문](#자주-묻는-질문)

## 워크플로우에서 WhatsApp 사용을 위한 사전 요구사항

하위 계정에서 WhatsApp을 구독하고 활성화해야 합니다. 하위 계정에서 WhatsApp을 설정하는 방법은 다음 문서를 참고하세요: WhatsApp 하위계정 설정

또한 비즈니스 주도 대화를 보내려면 승인된 템플릿이 필요합니다. [WhatsApp 템플릿 만드는 방법](how-to-create-a-whatsapp-template-.md)을 참고하세요.

## WhatsApp 전송 상태 레시피

Automation(자동화) 메뉴에서 미리 만들어진 WhatsApp 전송 상태 레시피를 사용할 수 있습니다.

![WhatsApp 전송 상태 레시피](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026559813/original/ZM-GKrgtuPHvnIQs2Hf9h5Ha4pN9Dw-ZPQ.png?1716560015)

## 워크플로우에서 WhatsApp 전송 상태 사용법

**1단계:** Automation(자동화) → Create Workflow(워크플로우 생성) → Start from Scratch(처음부터 시작)로 이동합니다.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026487798/original/z68RVmgwwDv2YtzvBuVA-wo_E-KciAficw.png?1716466176)

**2단계:** Add Trigger(트리거 추가) → WhatsApp Action(WhatsApp 액션) → Select WhatsApp template(WhatsApp 템플릿 선택)

![트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488035/original/hoDiVPGKoAsE_pckEFA48JDT2al-Wra58A.png?1716466391)

**3단계:** WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS(WhatsApp 메시지 전송 상태 대기) 토글을 활성화하고 Save Action(액션 저장)을 클릭합니다.

![전송 상태 대기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488147/original/LW8bIaKeBl2uhQONwMLuXWnlKAm3lkm5Kg.png?1716466458)

**4단계:** Add Action(액션 추가) → If/Else(조건 분기)

![조건 분기 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488215/original/IJ34vqlnZ-VHR7aR7JEV2TWNiduHXY8RzA.png?1716466538)

**5단계:** Contact Details(연락처 세부정보) → Valid WhatsApp(유효한 WhatsApp) 선택 후, True와 False 조건을 추가합니다.

![조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026492804/original/HRodQYCR8yD7hbpwb9-03RiNm5UOJdoD-w.png?1716469670)

**6단계:** False와 None 분기에는 SMS/이메일로 대체 전송하는 설정을 추가합니다.

![대체 전송 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026493561/original/CnwlstxlE20N-ywEH1GHMiuf3IBYEkrQyQ.png?1716470151)

## 자주 묻는 질문

**Q. 새로운 WhatsApp 전송 상태 지원 기능은 무엇인가요?**

워크플로우에서 WhatsApp 전송 상태 지원 기능이 도입되었습니다! 이 기능을 통해 WhatsApp 메시지의 전송 상태에 따른 조건 로직을 활용하여 커뮤니케이션 전략을 개선할 수 있습니다.

**Q. 워크플로우에서 WhatsApp 전송 상태를 어떻게 활용할 수 있나요?**

Valid WhatsApp(유효한 WhatsApp) 상태를 기준으로 If/Else(조건 분기) 조건을 사용하여 워크플로우의 다음 단계를 결정할 수 있습니다. 이를 통해 더욱 동적이고 반응적인 커뮤니케이션 전략을 구축할 수 있습니다.

**Q. 워크플로우에서 연락처를 대기시키는 토글의 목적은 무엇인가요?**

Meta로부터 전송 상태를 받을 때까지 워크플로우에서 연락처를 대기시키는 토글 기능을 추가했습니다. 이를 통해 전송 상태를 확인한 후 다음 단계로 진행할 수 있습니다.

---
*원문 최종 수정: Mon, 24 Mar, 2025 at 2:58 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*