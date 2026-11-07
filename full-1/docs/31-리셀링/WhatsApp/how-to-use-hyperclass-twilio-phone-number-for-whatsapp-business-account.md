---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002352-how-to-use-leadconnector-twilio-phone-number-for-whatsapp-business-account
번역일: 2026-11-06
카테고리: 31-리셀링
---

# 하이퍼클래스/Twilio 전화번호로 WhatsApp 비즈니스 계정 등록하기

하이퍼클래스에서 구매한 전화번호나 Twilio 번호로 WhatsApp 비즈니스 계정을 등록하는 방법을 안내해요. WhatsApp용 번호를 따로 마련하지 않아도 돼요.

이 문서에서 다룰 내용은 다음과 같아요.

- 하이퍼클래스 전화번호 구매
- 사전 준비 사항 완료
- WhatsApp에 등록
- 인증 및 설정 완료

## 하이퍼클래스 전화번호 구매하기

WhatsApp에 연결하기 전에 하이퍼클래스에서 구매한 전화번호가 필요해요. 이 번호로 설정 중에 WhatsApp 인증 코드를 받아요. 인증 코드는 **SMS** 또는 **전화 통화**(착신 전환)로 받을 수 있어요.

1. **설정 > 전화번호**로 이동하세요.
2. **번호 추가**를 클릭하고 번호를 선택한 뒤 **구매 진행**을 클릭하세요.
3. 통화를 받을 수 있는 개인 번호로 **Call Forwarding**(착신 전환)을 설정하세요.

{% hint style="warning" %}
하이퍼클래스/Twilio 번호가 음성 통화만 지원한다면 착신 전환이 필요해요. WhatsApp을 등록할 때 Meta가 전화 통화로 인증 OTP를 보내기 때문에, 그 전화를 받을 수 있어야 해요.
{% endhint %}

## WhatsApp 설정 전 사전 준비

WhatsApp 등록을 시작하기 전에 아래 단계를 모두 마치세요.
<!-- 검토 필요: 원문 내용이 서로 다름 (원문은 "세 단계"라고 하지만 실제로는 두 단계만 나열됨) -->

### 1. 에이전시 Stripe 계정 연결

고객에게 WhatsApp을 재판매하려면 **에이전시 Stripe 계정**이 연결되어 있어야 해요. 연결하면 서브 계정에서 WhatsApp 구독 결제를 직접 받을 수 있어요.

➡ Stripe를 에이전시에 연결하는 방법

{% hint style="info" %}
Stripe를 연결하지 않아도 **직접 배포**로 WhatsApp을 배포할 수 있어요. 다만 구독료는 에이전시에 등록된 카드로 직접 청구되고, 재판매 기능은 사용할 수 없어요.
{% endhint %}

### 2. 재판매 활성화

**에이전시 설정 > 재판매** 탭에서 다음을 할 수 있어요.

- 서브 계정에 WhatsApp을 유료 서비스로 제공
- 직접 가격을 정하고 구독마다 수익 얻기

{% hint style="info" %}
WhatsApp 비즈니스 계정(WABA)과 **비즈니스 프로필**이 아직 없다면, 온보딩 과정에서 만들 수 있도록 안내해 드려요. Facebook 계정과 Meta 비즈니스 계정은 미리 준비해야 해요.
{% endhint %}

## 하이퍼클래스/Twilio 번호를 WhatsApp에 연결하기

아래 13단계를 따라 WhatsApp 비즈니스 등록을 마치세요.

하이퍼클래스 번호든 Twilio 번호든 WhatsApp 비즈니스 번호로 쓸 수 있어요. Meta는 이 번호로 인증 코드를 보내요. **SMS**로 받거나, 개인 번호로 전달된 **전화 통화**로 받을 수 있어요.

**1단계.** **전화번호**로 이동해 **번호 추가**를 클릭하고, 번호를 선택한 뒤 **구매 진행**을 클릭하세요.

![전화번호 구매 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458203/original/E3Is6MyjirxtH5L6uadI4bU3FqpQLNNWgw.png?1718104381)

**2단계.** 통화를 받을 수 있는 개인 번호로 **Call Forwarding**(착신 전환)을 설정하세요.

{% hint style="warning" %}
번호가 음성 통화만 지원한다면 꼭 필요한 설정이에요. WhatsApp을 등록할 때 Meta가 전화 통화로 OTP를 보내므로, 다음 단계로 넘어가기 전에 전달받을 번호를 쓸 수 있는지 확인하세요.
{% endhint %}

![착신 전환 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458577/original/c62e787T4z_0szoTBRBjSOsqUhkCxnCDYA.png?1718104663)

**3단계.** **설정 > WhatsApp**으로 이동해 **Buy WhatsApp**(WhatsApp 구매)을 클릭하세요.

![WhatsApp 구매 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458910/original/0mKj3aVy3tCodz6RheT2C8WBk3mb_Le1fw.png?1718104802)

**4단계.** **Signup with Facebook**(Facebook으로 가입)을 클릭해 Meta 온보딩을 시작하세요.

![Facebook으로 가입 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027458984/original/vk03jmvXUfK6nB0Wf5wQmqnvUVJt8Bx5-w.png?1718104844)

**5단계.** Facebook 계정에 로그인하세요. Meta 비즈니스 관리자(Meta Business Manager)에 연결된 계정을 사용해야 해요.

![Facebook 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459096/original/kZl1KGww6BW28wwkn3S6yAHJIQLNKnuvNw.png?1718104893)

**6단계.** **시작하기**를 클릭해 WhatsApp 비즈니스 계정 만들기를 시작하세요.

![시작하기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459121/original/lm2DH061k8jGYZhgq_EAECWQ_xlDvumF6Q.png?1718104920)

**7단계.** 비즈니스 정보를 입력하세요. **Select Business Portfolio**(비즈니스 포트폴리오 선택) > **비즈니스명 입력** > 웹사이트 또는 프로필 링크 추가 > **국가 선택** 순서로 진행해요.

![비즈니스 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459357/original/iBKqJ972UHE_f86YmRnwgDtLAHwctXleWQ.png?1718105043)

**8단계.** WhatsApp 비즈니스 계정(WABA)을 만들거나 선택하세요. 이미 계정이 있으면 선택하고, 없으면 새로 만들어요.

![WhatsApp 비즈니스 계정 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459512/original/-7hOYxzFpr16hREuUy4VABh1lxyd0zpNMw.png?1718105134)

**9단계.** WhatsApp **비즈니스 프로필**을 만드세요. **비즈니스 계정 이름**과 **표시 이름**을 입력하고 **비즈니스 카테고리**를 선택해요.

![WhatsApp 비즈니스 프로필 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027459710/original/AKt_prQB0gCQTNKbJjdurBe6Ou_CT4K8yg.png?1718105250)

**10단계.** **전화번호**에 하이퍼클래스/Twilio 번호를 입력하고 인증 방법을 선택하세요.

{% hint style="info" %}
번호가 음성 통화만 지원한다면 **Phone Call**(전화 통화)을 선택하세요. 먼저 착신 전환이 켜져 있는지 확인해야 해요. 번호가 문자 메시지를 지원한다면 **SMS**를 선택하세요. SMS를 선택하면 Meta가 보낸 OTP가 하이퍼클래스 모바일 앱의 **대화**에 표시돼요.
{% endhint %}

![전화번호 입력 및 인증 방법 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027473803/original/KXaOeBlv2YNYSaFXd6XBd-bU7_M6S3almw.jpeg?1718113485)

**SMS**를 선택했다면 하이퍼클래스 모바일 앱을 열고 **대화**로 이동하세요. Meta가 보낸 인증 코드가 수신 메시지로 나타나요.

![대화에서 인증 코드 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027460097/original/Uk5rn8tmEXwKEmB0tnFsHhIxPWEPNoyXQQ.png?1718105485)

**11단계.** 전화 통화나 SMS로 받은 인증 코드를 입력하세요.

![인증 코드 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027461285/original/nF-4Jcf3r-G4FL_hL7rggx-Wj6Hy8mUPjg.png?1718106166)

**12단계.** 하이퍼클래스가 WhatsApp 비즈니스 계정을 관리하기 위해 요청하는 권한을 확인하고 수락하세요.

![권한 확인 및 수락 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027461995/original/W2LdFMjSGT3D9qIxnwoNru4D8BGfJcfCHA.png?1718106613)

**13단계.** 설정이 끝났어요! WhatsApp 연동이 준비되었고, 이제 하이퍼클래스에서 바로 메시지를 보내고 받을 수 있어요.

![설정 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027462041/original/YzDco9k4RN1u8zIghPHjGZPcLM_uF1r6IQ.png?1718106644)

{% hint style="info" %}
같은 번호로 개인 WhatsApp 계정을 쓰고 있다면 먼저 그 계정을 삭제해야 해요. WhatsApp 앱에서 **설정 > 계정 > Delete my account**(내 계정 삭제)로 이동하세요. 계정을 삭제하면 개인 채팅 기록은 옮겨지지 않아요.
{% endhint %}

## 자주 묻는 질문

### A2P 10DLC 등록을 마치지 않았는데 하이퍼클래스/Twilio 번호를 WhatsApp에 쓸 수 있나요?

네, A2P 10DLC 등록을 마치지 않아도 WhatsApp에 번호를 등록할 수 있어요. 다만 규정을 더 잘 지키고 메시지가 안정적으로 전달되도록 A2P 10DLC 등록을 마치기를 강력히 권장해요.

### 하이퍼클래스/Twilio 번호에 착신 전환은 어떻게 설정하나요?

전화번호를 구매한 뒤 **설정 > 전화번호**로 이동하세요. 해당 번호를 찾아 통화를 받을 수 있는 개인 번호로 **Call Forwarding**(착신 전환)을 설정하면 돼요. 이렇게 해 두면 등록 중에 WhatsApp OTP를 받을 수 있어요.

### 번호가 이미 다른 WhatsApp 계정에 등록되어 있다는 오류가 나요. 어떻게 해야 하나요?

이 오류는 두 가지 경우에 나타나요.

- **경우 1 — 휴대폰에서 개인 WhatsApp을 쓰고 있는 경우:** 이 번호로 개인 WhatsApp 계정이 활성화되어 있어요. 먼저 그 계정을 삭제하세요. WhatsApp 앱에서 **설정 > 계정 > Delete my account**(내 계정 삭제)로 이동하면 돼요. 개인 채팅 기록은 옮겨지지 않아요. [번호를 비즈니스 계정으로 옮기는 방법 알아보기](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/migrate-existing-whatsapp-number-to-a-business-account)
- **경우 2 — 다른 제공업체에 연결된 번호인 경우:** 번호가 다른 WhatsApp 비즈니스 제공업체에 연결되어 있어요. 새 WABA를 만들고 번호를 그쪽으로 옮겨야 해요.

### "Message Undeliverable"(메시지 전달 불가) 오류가 나요. 원인이 뭔가요?

다음과 같은 원인이 있어요.

- 받는 사람의 전화번호가 WhatsApp에 등록되어 있지 않아요.
- **+91(인도)** 번호로 인증 템플릿을 보내고 있어요. 현재는 인도의 WhatsApp 사용자에게 인증 템플릿을 보낼 수 없어요.
- [사용자별 마케팅 템플릿 메시지 한도](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#per-user-marketing-template-message-limits) 때문에 메시지가 차단되었어요.

### 서브 계정마다 WhatsApp 연동을 따로 구매해야 하나요?

WhatsApp 연동은 에이전시 단위로 라이선스가 적용돼요. 에이전시 계정마다 별도의 WhatsApp 연동이 필요하고, 서로 다른 에이전시 인스턴스끼리 공유할 수는 없어요.

## 설정 완료

하이퍼클래스/Twilio 번호가 WhatsApp 비즈니스에 연결되었어요. 서브 계정의 **대화**로 이동하면 고객에게 메시지를 보내고, 템플릿을 보내고, WhatsApp 채널을 한곳에서 관리할 수 있어요.
