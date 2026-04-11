---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# LeadConnector/Twilio 전화번호를 WhatsApp 비즈니스 계정에 사용하는 방법

이 문서에서는 LeadConnector/Twilio 전화번호를 사용하여 WhatsApp 비즈니스 계정을 등록하는 방법을 안내합니다.

목차

- **목차**[LC 전화번호 구매하는 방법](#lc-전화번호-구매하는-방법)
- [WhatsApp 설정 사전 요구사항](#whatsapp-설정-사전-요구사항)
- [LC/Twilio 번호를 WhatsApp 비즈니스 계정과 연결하는 방법](#lctwilio-번호를-whatsapp-비즈니스-계정과-연결하는-방법)
- [자주 묻는 질문](#자주-묻는-질문)

# LC 전화번호 구매하는 방법

---

**WhatsApp 설정 사전 요구사항**

**1. 에이전시 Stripe 계정 연결**

고객에게 WhatsApp을 재판매하려면 **에이전시 Stripe 계정**을 연결해야 합니다. 이를 통해 하위 계정으로부터 WhatsApp 구독 결제를 직접 받을 수 있습니다.

➡ [에이전시에 Stripe 연결하는 방법](#)

**참고:** Stripe를 연결하지 않으면 **Direct Deploy**를 사용하여 WhatsApp을 배포할 수 있습니다. 하지만 이 경우 구독 요금이 **에이전시 등록 카드**로 직접 청구되며, 재판매 기능은 사용할 수 없습니다.

---

**2. 재판매 활성화**

**Agency Settings(에이전시 설정) > Reselling(재판매) 탭**에서 다음을 설정할 수 있습니다:

• WhatsApp을 서비스로 제공
• 하위 계정에 대한 맞춤 가격 설정

이를 통해 HighLevel이 에이전시에 고정 요금을 청구하는 동안 고객에게는 마크업을 적용하여 각 구독에서 수익을 얻을 수 있습니다.

---

**3. Facebook 비즈니스 설정**

하위 계정에서 WhatsApp을 설정하려면 다음이 필요합니다:

• **Facebook 계정**
• **Meta Business Manager 계정**

온보딩 과정에서 **WhatsApp Business Account(WABA)**와 **비즈니스 프로필**이 없는 경우 생성하는 방법을 안내합니다.

---

[Facebook 계정](https://www.facebook.com/signup)과 [Facebook Meta 비즈니스 계정](https://business.facebook.com/)이 필요합니다. (Meta 비즈니스 계정에 대한 자세한 내용은 [여기](https://www.facebook.com/business/tools/meta-business-suite)를 참조하세요.)

# LC/Twilio 번호를 WhatsApp 비즈니스 계정과 연결하는 방법

LC/Twilio 전화번호를 WhatsApp 비즈니스 번호로 사용할 수 있습니다. HighLevel에서 구매한 전화번호에 통화 전달을 설정한 후, 해당 번호를 WhatsApp에 추가하면 인증 코드가 전달된 번호로 전화를 통해 전송됩니다.

1단계: Phone Numbers(전화번호) > Add Number(번호 추가) 클릭 > 번호 선택 후 구매

![전화번호 구매 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458203/original/E3Is6MyjirxtH5L6uadI4bU3FqpQLNNWgw.png?1718104381)

2단계: 본인 번호로 통화 전달 설정

특히 구매한 전화번호가 음성 기능만 있는 경우 필수입니다. Meta에서 WhatsApp 등록 시 OTP를 전송하기 때문입니다. 전달받을 번호에 접근할 수 있는지 확인하세요.

![통화 전달 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458577/original/c62e787T4z_0szoTBRBjSOsqUhkCxnCDYA.png?1718104663)

3단계: Settings(설정) > WhatsApp > Buy WhatsApp(WhatsApp 구매)

![WhatsApp 구매 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458910/original/0mKj3aVy3tCodz6RheT2C8WBk3mb_Le1fw.png?1718104802)

4단계: Facebook으로 가입하기 클릭

![Facebook 가입 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458984/original/vk03jmvXUfK6nB0Wf5wQmqnvUVJt8Bx5-w.png?1718104844)

5단계: Facebook 계정으로 로그인

![Facebook 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459096/original/kZl1KGww6BW28wwkn3S6yAHJIQLNKnuvNw.png?1718104893)

6단계: 시작하기 클릭

![시작하기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459121/original/lm2DH061k8jGYZhgq_EAECWQ_xlDvumF6Q.png?1718104920)

7단계: 비즈니스 정보 입력 > 비즈니스 포트폴리오 선택 > 비즈니스 이름 입력 > 웹사이트 또는 프로필 페이지 추가 > 국가 선택

![비즈니스 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459357/original/iBKqJ972UHE_f86YmRnwgDtLAHwctXleWQ.png?1718105043)

8단계: WhatsApp 비즈니스 계정 생성 또는 선택

![WhatsApp 비즈니스 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459512/original/-7hOYxzFpr16hREuUy4VABh1lxyd0zpNMw.png?1718105134)

9단계: WhatsApp 비즈니스 프로필 생성 > WhatsApp 비즈니스 계정 이름 입력 > WhatsApp 비즈니스 표시 이름 입력 > 카테고리 입력

![WhatsApp 비즈니스 프로필 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459710/original/AKt_prQB0gCQTNKbJjdurBe6Ou_CT4K8yg.png?1718105250)

10단계: LC/Twilio 전화번호 입력

![전화번호 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027473803/original/KXaOeBlv2YNYSaFXd6XBd-bU7_M6S3almw.jpeg?1718113485)

번호가 음성 기능만 있는 경우 인증을 Phone(전화)으로 선택하고 통화 전달이 활성화되어 있는지 확인하세요. 번호에 SMS 기능이 있으면 SMS를 선택하세요.

SMS를 선택한 경우 Meta에서 보내는 코드를 LeadConnector 앱의 대화 메뉴에서 받을 수 있습니다.

![SMS 코드 수신](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027460097/original/Uk5rn8tmEXwKEmB0tnFsHhIxPWEPNoyXQQ.png?1718105485)

11단계: 전화/SMS로 받은 코드 입력

![인증 코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027461285/original/nF-4Jcf3r-G4FL_hL7rggx-Wj6Hy8mUPjg.png?1718106166)

12단계: 권한 검토

![권한 검토](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027461995/original/W2LdFMjSGT3D9qIxnwoNru4D8BGfJcfCHA.png?1718106613)

13단계: WhatsApp 연동이 완료되었으며 이제 WhatsApp으로 고객과 대화할 수 있습니다.

![WhatsApp 연동 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027462041/original/YzDco9k4RN1u8zIghPHjGZPcLM_uF1r6IQ.png?1718106644)

# 자주 묻는 질문

## A2P 10DLC 등록이 완료되지 않아도 LC/Twilio 번호를 WhatsApp에 사용할 수 있나요?

### 답변: 네, 해당 번호로 WhatsApp에 등록할 수 있습니다. 하지만 더 나은 컴플라이언스와 안정성을 위해 A2P 10DLC 등록을 완료하는 것을 강력히 권장합니다.

## WhatsApp 인증을 위해 LC/Twilio 번호에 통화 전달을 설정하는 방법은 무엇인가요?

### 답변: HighLevel에서 전화번호를 구매한 후, Phone Numbers(전화번호) > Add Number(번호 추가) > 번호 선택 후 구매하세요. 그 다음 본인 번호로 통화 전달을 설정하여 WhatsApp 등록 시 인증 코드를 받을 수 있도록 하세요.

## 해당 번호가 기존 WhatsApp 계정에 등록되어 있다는 오류 메시지가 나타났습니다. 어떻게 해야 하나요?

![등록된 번호 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027471137/original/kPQIZh_lGyO51atsprXMwaxLZ8SPwhgItA.png?1718111947)

**답변:**

이 오류는 보통 두 가지 상황에서 발생합니다:

- **모바일 기기에 활성 WhatsApp 계정이 있는 경우:**
현재 모바일 기기에 활성 WhatsApp 계정이 있다면, 채팅 계정과 연결하기 위해 해당 계정을 삭제해야 합니다. 다음 단계를 따라하세요:
WhatsApp 앱을 여세요.
Settings(설정) > Account(계정) > Delete my account(내 계정 삭제)로 이동하세요.
- **참고:** 연동 후에는 휴대폰에서 WhatsApp을 사용할 수 없으며, 이전 대화 기록과 연락처는 이전되지 않습니다.
- [기존 WhatsApp 번호를 비즈니스 계정으로 이전하는 방법에 대해 자세히 알아보기](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/migrate-existing-whatsapp-number-to-a-business-account)
- **WhatsApp 번호가 다른 제공업체에 연결된 경우:**
WhatsApp 번호가 다른 제공업체에 연결되어 있다면, 새로운 WABA 계정을 생성하고 번호를 새 WABA 계정으로 이전해야 합니다.

## 메시지 전송 불가 오류가 발생합니다

### 답변:

오류 발생 원인은 다음과 같습니다:

- 수신자 전화번호가 WhatsApp 전화번호가 아닙니다.
- +91 국가 코드(인도)를 사용하는 WhatsApp 사용자에게 인증 템플릿을 전송하는 경우입니다. 현재 인도의 WhatsApp 사용자에게는 인증 템플릿을 전송할 수 없습니다.
- 고품질 사용자 경험을 위해 메시지가 전송되지 않았습니다. [사용자별 마케팅 템플릿 메시지 제한](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#per-user-marketing-template-message-limits)을 참조하세요.

---

## **자주 묻는 질문**

**각 하위 계정이나 에이전시마다 WhatsApp 연동을 별도로 구매해야 하나요?**

월 $29.99의 WhatsApp 연동은 에이전시 수준에서 라이센스가 부여됩니다. 여러 에이전시 계정을 관리하는 경우, 각각 별도의 WhatsApp 연동이 필요합니다. 연동은 서로 다른 에이전시 인스턴스 간에 공유할 수 없습니다.

---
*원문 최종 수정: Mon, 26 May, 2025 at 4:33 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*