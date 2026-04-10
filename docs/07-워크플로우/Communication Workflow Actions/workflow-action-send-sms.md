---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Communication Workflow Actions
---

# 워크플로우 액션 - SMS 발송

SMS 발송 액션을 사용하면 문자 메시지를 통해 연락처와 직접 소통할 수 있습니다. 이 가이드에서는 액션 설정 방법을 단계별로 안내하고, 예약 리마인더, 프로모션 캠페인 등에 활용하는 실제 사례를 통해 그 이점을 보여드립니다.

---

**목차**

- [SMS 발송 액션이란?](#sms-발송-액션이란)
- [SMS 발송 액션은 언제 사용하나요?](#sms-발송-액션은-언제-사용하나요)
- [단계별 안내: SMS 발송 액션 설정하기](#단계별-안내-sms-발송-액션-설정하기)
- [SMS 발송 액션 실제 활용 사례](#sms-발송-액션-실제-활용-사례)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **SMS 발송 액션이란?**

SMS 발송 액션은 자동화된 워크플로우의 일부로 개인화된 문자 메시지를 보낼 수 있는 강력한 도구입니다. 이 기능은 조건, 트리거 또는 일정에 따라 메시지를 발송하여 적시에 소통할 수 있도록 도와줍니다. 연락처 이름과 같은 동적 필드로 SMS 내용을 커스터마이징할 수 있고, URL을 통해 첨부파일도 포함하여 더욱 풍부한 커뮤니케이션이 가능합니다.

---

## SMS 발송 액션은 언제 사용하나요?

SMS 발송 액션은 적시에 타겟팅된 커뮤니케이션이 필요한 상황에 완벽합니다:

• **예약 리마인더:** 자동화된 리마인더로 노쇼(no-show)를 최소화하세요.

• **프로모션 캠페인:** 고객의 휴대폰으로 직접 특가 정보를 전달하세요.

• **주문 업데이트:** 주문이 배송될 때 고객에게 알려주세요.

• **이벤트 알림:** 참석자들에게 변경사항이나 취소 소식을 업데이트하세요.

---

## **단계별 안내: SMS 발송 액션 설정하기**

**1단계: SMS 발송 액션 추가하기**

1. 워크플로우 편집기를 열어주세요. 새 워크플로우를 만들거나 이해를 위해 기존 워크플로우를 선택할 수 있습니다.

![워크플로우 편집기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717482/original/P3-hyXNpkiRB39FUnx2QwQd-wmjTFBmbgw.png?1733302478)

2. "SMS 발송" 액션을 원하는 트리거나 조건 뒤의 워크플로우에 드래그 앤 드롭하세요.

![SMS 발송 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717484/original/8S5CFrbAzmyxz1YN9Wt4QLIwyVsBvHeUyg.png?1733302492)

**2단계: 액션 이름 지정하기**

• 워크플로우에서 쉽게 식별할 수 있도록 "예약 리마인더 SMS"와 같은 설명적인 이름을 지정하세요.

![액션 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717512/original/m7ce-UIp_VUuhzge0y9nX7fL870VCyEsnA.png?1733302519)

**3단계: 메시지 작성하기**

• **메시지:** SMS 내용을 작성하세요. 개인화를 위해 {{contact.first_name}}과 같은 동적 필드를 사용하세요.

![메시지 작성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717520/original/4HaY46EhBTWCmgtwkDOviN3Wg1j-g96ZGA.png?1733302544)

• **템플릿:** 시간을 절약하기 위해 사전 제작된 템플릿이 있다면 선택하세요.

![템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717749/original/XInvYP3fZNNF1mDamdkOrbhDjU1l4TEpQw.png?1733302717)

**4단계: 첨부파일 추가하기 (선택사항)**

• URL을 사용하여 파일이나 리소스를 첨부하세요(예: 지도, 티켓, 안내서 등).

![첨부파일 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717564/original/kEC9Ya3v5wlKY_JgiNfgxjRYREl82TPgHA.png?1733302566)

**5단계: SMS 테스트하기**

• "테스트 전화번호" 필드를 사용하여 메시지를 미리보고 테스트하세요.

![SMS 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717593/original/xUFXgIMGpNH7I4diECA_RXcSXsGD-Be5Pw.png?1733302585)

**6단계: 워크플로우 저장 및 테스트하기**

• 워크플로우를 저장하고 샘플 데이터로 테스트하여 SMS가 예상대로 발송되는지 확인하세요.

![워크플로우 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717636/original/MhyfQA1O-cBNHGsREX8QLgHsHiXIiAKatg.png?1733302611)

---

## SMS 발송 액션 실제 활용 사례

**다단계 예약 리마인더**

시나리오: 리마인더를 통해 예약 노쇼를 줄이기

![다단계 리마인더 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720188/original/IupbkZVZZnwlVj79eRr6EgHdqO95uVN8YA.png?1733304377)

**워크플로우:**

1. **트리거:** 고객이 예약을 완료함

2. **액션 1:** 예약 시간 24시간 전까지 대기

3. **액션 2:** 24시간 전에 리마인더 SMS 발송

• 메시지:

안녕하세요 {{contact.first_name}}님, 내일 {{appointment.start_time}}에 예약이 있다는 알림드립니다. 뵙기를 기대하고 있겠습니다!

![24시간 전 리마인더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720211/original/IMO9U8SvgmQjahCbhZfEcElJjFBb0dkcaA.png?1733304392)

4. **액션 3:** 예약 시간 1시간 전까지 대기

![1시간 전 대기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720224/original/4w617tEuBrSk6w_d_R2iHdaSg3o0_lQ23A.png?1733304411)

5. **액션 4:** 예약 시간 1시간 전에 또 다른 SMS 리마인더 발송

• **메시지:**

안녕하세요 {{contact.first_name}}님, {{appointment.start_time}}에 예약이 한 시간 남았습니다. 곧 뵙겠습니다!

---

## 자주 묻는 질문

**Q: SMS 발송 액션으로 보내는 메시지를 개인화할 수 있나요?**

네. SMS 발송 액션은 연락처의 이름, 예약 시간, 커스텀 필드 등 연락처 및 예약 정보를 사용하여 메시지를 개인화할 수 있는 동적 필드를 지원합니다. 이를 통해 더욱 관련성 있고 매력적인 메시지를 만들 수 있습니다.

**Q: SMS 메시지에 링크나 첨부파일을 포함할 수 있나요?**

네. SMS 메시지는 직접적인 파일 첨부를 지원하지 않지만, 파일, 문서, 지도, 티켓 또는 기타 온라인 리소스로 연결되는 URL을 포함할 수 있습니다.

**Q: 워크플로우를 활성화하기 전에 SMS를 테스트할 수 있나요?**

네. SMS 발송 액션에는 **테스트 전화번호** 필드가 있어서 워크플로우를 활성화하기 전에 테스트 메시지를 미리보고 발송할 수 있습니다. 이를 통해 메시지 내용과 개인화가 예상대로 나타나는지 확인할 수 있습니다.

**Q: 워크플로우에서 SMS는 언제 발송되나요?**

SMS는 워크플로우의 앞부분에서 설정된 트리거, 조건, 대기 단계에 따라 워크플로우가 SMS 발송 액션에 도달했을 때 발송됩니다. 이를 통해 메시지 타이밍과 전달을 정확하게 제어할 수 있습니다.

---
*원문 최종 수정: Mon, 22 Dec, 2025 at 8:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*