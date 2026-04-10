---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# WhatsApp - 메시지 한도

메시지 한도는 비즈니스 전화번호가 24시간 이동 기간 동안 개시할 수 있는 비즈니스 시작 대화(마케팅, 유틸리티 또는 인증 템플릿을 WhatsApp 사용자에게 보낸 결과로 시작되는 대화)의 최대 수입니다.

비즈니스 전화번호는 처음에 24시간 이동 기간 동안 250개의 비즈니스 시작 대화로 제한되지만, 이 한도는 증가시킬 수 있습니다.

## WhatsApp 메시지 한도 이해하기

WhatsApp 메시지 한도는 비즈니스 전화번호가 24시간 기간 내에 개시할 수 있는 비즈니스 시작 대화의 최대 개수를 의미합니다. 이러한 대화는 일반적으로 WhatsApp 사용자에게 마케팅, 유틸리티 또는 인증 템플릿을 보내는 것으로 시작됩니다. Meta는 이러한 한도가 어떻게 작동하는지와 효과적으로 활용하는 방법을 자세히 설명합니다.

---

## 초기 WhatsApp 메시지 한도

처음에 비즈니스 전화번호는 24시간 기간 내에 250개의 비즈니스 시작 대화로 제한됩니다. 하지만 이 한도는 조정 가능하며 더 많은 볼륨을 수용하도록 증가시킬 수 있습니다. 증가 단계는 다음과 같습니다:

- 1,000개 비즈니스 시작 대화
- 10,000개 비즈니스 시작 대화
- 100,000개 비즈니스 시작 대화
- 무제한 비즈니스 시작 대화

![메시지 한도 증가 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024898508/original/SpAE7ByTb9YnYEJoFN4xiaEHueNnUH4tKg.png?1713856803)

---

## WhatsApp 메시지 한도 증가시키기

비즈니스 전화번호가 증가 자격을 얻으려면 [연결된 상태](https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers#phone-number-status)여야 하며, 비즈니스 전화번호가 [낮은 품질](https://www.facebook.com/business/help/896873687365001) 등급을 가지고 있다면 품질 등급이 개선될 때까지 250개 비즈니스 시작 대화로 계속 제한될 수 있습니다.

### 비즈니스 인증

[비즈니스 인증](https://www.facebook.com/business/help/2058515294227817)을 위해 비즈니스를 제출하세요. 비즈니스가 승인되면 Meta는 [메시징 품질](https://developers.facebook.com/docs/whatsapp/messaging-limits/#messaging-quality)을 분석하여 메시징 활동이 메시징 한도 증가를 보장하는지 결정합니다. 이 분석을 바탕으로 Meta는 메시징 한도 증가를 [승인](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-approvals)하거나 [거부](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-denials)합니다.

![비즈니스 인증 프로세스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024898924/original/flaijVvBm7jbgNfIieDYCcLSGZrnFIccXQ.png?1713857256)

### 신원 인증

비즈니스 인증을 제출하고 승인을 받으면 [신원 인증](https://www.facebook.com/business/help/587323819101032)을 요청받을 수 있습니다.

신원 인증을 요청받으면 [WhatsApp Manager](https://business.facebook.com/wa/manage/home/) > Overview > Limits 패널에 다음과 같은 알림이 표시됩니다:

![신원 인증 요청 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024896857/original/Wx2M0OQXVaph-NQfMHg-_8C_KrDjEvQAUA.png?1713854985)

신원 인증을 완료하고 신원이 확인되면 Meta는 메시징 한도 증가를 [승인](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-approvals)합니다. 신원이 확인되지 않으면 Meta는 메시징 한도 증가를 [거부](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-denials)하며, [WhatsApp Manager](https://business.facebook.com/wa/manage/home/) > Overview > Limits 패널에 다음 알림 중 하나가 표시됩니다:

![신원 인증 거부 알림 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024896906/original/gcYX6j1iQK0I1RQG4dRaD6H_F3uGtFRqLQ.png?1713855043)

![신원 인증 거부 알림 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024896918/original/cAbM9SCQmwMZvkEJI2O2ZhC9mHHein4dFA.png?1713855050)

### 30일 동안 1,000개 대화 개시

[높은 품질 등급](https://www.facebook.com/business/help/896873687365001)의 템플릿을 사용하여 30일 이동 기간 동안 1,000개 이상의 비즈니스 시작 대화를 개시하세요. 이 임계값에 도달하면 Meta는 [메시징 품질](https://developers.facebook.com/docs/whatsapp/messaging-limits/#messaging-quality)을 분석하여 메시징 활동이 메시징 한도 증가를 보장하는지 결정합니다. 이 분석을 바탕으로 Meta는 증가를 [승인](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-approvals)하거나 [거부](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-denials)합니다.

### 고품질 메시지 발송

비즈니스 또는 신원 인증이 거부된 경우, 고품질 메시지를 보내고 있는지 확인하세요. Meta는 메시징 활동과 품질을 정기적으로 재평가하며, 이 분석을 바탕으로 증가를 [승인](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-approvals)할 수 있습니다.

고품질 메시지를 보내기 위한 지침은 다음과 같습니다:

- 메시지가 [WhatsApp 비즈니스 메시징 정책](https://business.whatsapp.com/policy?fbclid=IwZXh0bgNhZW0CMTEAAR32s0sx7BV-s-H2qLRdlqPXowSfdAkcyu451sDhd3zojoWkvitoHdYC2TE_aem_AfXsqBIoXPdFha8AAq55fELrm7Un-QpMMQ17WTmh0CwRmBaXtDvBlWzZawuXFlsEjajqzvRZCFVKtKSCpHIdgdkX)을 준수하는지 확인하세요.
- 비즈니스에서 메시지 수신에 동의한 사용자에게만 메시지를 보내세요.
- 메시지를 사용자에게 개인화되고 유용하게 만드세요. 개방형 환영 메시지나 소개 메시지는 피하세요.
- 메시징 빈도를 고려하세요. 고객에게 하루에 너무 많은 메시지를 보내지 마세요. 정보성 메시지는 내용과 길이를 최적화하여 신중하게 보내세요.

### 증가 요청

비즈니스 인증이나 신원 인증을 완료했거나 30일 동안 1,000개 대화 임계값을 충족했지만 여전히 250개 비즈니스 시작 대화로 제한된다면, 직접 지원 티켓을 열어 메시징 티어 업그레이드를 요청할 수 있습니다.

Ask a Question > WABiz: Phone Number & Registration > Request type > Request a Messaging Tier Upgrade

지원 제출과 [메시징 품질](https://developers.facebook.com/docs/whatsapp/messaging-limits/#messaging-quality)을 바탕으로 Meta는 증가를 [승인](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-approvals)하거나 [거부](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-denials)합니다.

---

## 모범 사례

**옵트인 동의:** 고객이 WhatsApp에서 비즈니스 메시지 수신에 명시적으로 동의했는지 항상 확인하세요. 개인정보와 선호도를 존중하세요.

**신속한 응답:** 고객 문의에 신속하게 응답하도록 노력하세요. 빠른 응답은 고객 만족도를 높이고 전반적인 고객 경험을 개선합니다.

**개인화:** 가능할 때마다 각 고객에게 메시지를 맞춤화하세요. 개인화된 메시지는 더 매력적이며 더 강한 고객 관계를 조성할 수 있습니다.

**부가가치 콘텐츠:** 제품 업데이트, 독점 제안, 업계 관련 유용한 팁 등 WhatsApp을 통해 고객에게 가치 있는 콘텐츠를 제공하세요.

**명확한 소통:** 메시지가 간결하고 명확하며 관련성 있는지 확인하세요. 고객을 짜증나게 할 수 있는 스팸성 또는 무관한 콘텐츠는 피하세요.

**예시**

보내기: "안녕하세요 Sarah님! 저희 봄 컬렉션이 출시되었다는 소식을 전하게 되어 기쁩니다! 🌸 최신 스타일을 확인하시고 코드 SPRING20으로 첫 구매 시 20% 할인 혜택을 누리세요. 지금 쇼핑하기: [링크]"

피하기: "안녕 Sarah! 저희가 신발도 판다는 거 알고 있었어? 신발 할인 혜택을 위해 매장에 와보세요!!!! #신발사랑"

**보안 조치:** 고객 데이터를 보호하고 대화의 기밀성을 보장하기 위한 보안 조치를 구현하세요. WhatsApp을 통해 민감한 정보를 공유하지 마세요.

**피드백 루프:** 고객이 WhatsApp에서 비즈니스 경험에 대한 피드백을 제공하도록 격려하세요. 이 피드백을 사용하여 서비스와 제공 사항을 개선하세요.

---

## FAQ

### Q: WhatsApp 비즈니스 계정으로 처음에 몇 개의 대화를 시작할 수 있나요?

처음에는 24시간 이동 기간 내에 250개의 비즈니스 시작 대화로 제한됩니다.

### Q: '비즈니스 시작' 대화는 무엇을 의미하나요?

이는 WhatsApp 사용자에게 마케팅, 유틸리티 또는 인증 템플릿을 보내서 비즈니스가 시작하는 모든 대화를 의미합니다.

### Q: 대화 한도를 어떻게 증가시킬 수 있나요?

여러 가지 방법이 있습니다:

- 비즈니스 인증 받기: 비즈니스를 인증에 제출하세요.
- 30일 동안 1,000개 이상 대화 보내기: 30일 기간 동안 고품질 메시지 템플릿을 사용하세요.
- 고품질 메시징 유지: 메시지가 개인화되고 유용하며 WhatsApp 비즈니스 메시징 정책을 준수하는지 확인하세요.
- 직접 증가 요청: 다른 기준을 충족하는 경우 지원 티켓을 여세요. **Ask a Question > WABiz: Phone Number & Registration > Request type > Request a Messaging Tier Upgrade**

### Q: 한도가 자동으로 증가되는 방법이 있나요?

네! 1,000개 대화 한도에 도달하고 다른 요구 사항(좋은 품질 등급, 연결된 전화번호)을 유지하면 사용량에 따라 한도가 자동으로 증가될 수 있습니다.

### Q: 대화 한도 증가에 메시지 품질이 중요한 이유는 무엇인가요?

WhatsApp은 긍정적인 사용자 경험을 우선시합니다. 사용자가 가치 있다고 생각하는 고품질 메시지를 보내는 것은 신뢰를 구축하고 대화 한도 증가로 이어집니다.

### Q: 현재 대화 한도와 품질 등급을 어디에서 확인할 수 있나요?

이 정보는 [WhatsApp Manager](https://business.facebook.com/wa/manage/home/)에서 찾을 수 있습니다:

한도는 **Overview > Limits 패널**(1K 한도 도달 전) 또는 **Account tools > Insights 패널**(1K 한도 도달 후)에서 확인할 수 있습니다.

품질 등급은 **Account tools > Phone numbers 패널**에서 확인할 수 있습니다.

---
*원문 최종 수정: Tue, 23 Apr, 2024 at 2:28 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*