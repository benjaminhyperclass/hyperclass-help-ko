---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# WhatsApp 템플릿 상태 및 모범 사례

템플릿은 고객과 마케팅, 유틸리티, 인증 [대화](https://developers.facebook.com/docs/whatsapp/pricing#conversations)를 시작하기 위해 템플릿 메시지에서 사용됩니다.

자유형 메시지와 달리, 템플릿 메시지는 아직 메시지를 보내지 않은 고객이나 최근 24시간 내에 메시지를 보내지 않은 고객에게 보낼 수 있는 유일한 메시지 유형입니다.

템플릿은 템플릿 메시지로 발송되기 전에 승인을 받아야 합니다. 또한 고객 피드백과 참여도에 따라 자동으로 비활성화될 수 있습니다. 비활성화된 템플릿은 품질 등급이 개선되거나 더 이상 [비즈니스](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTEAAR0vK3h7u6QlT54uJUzZbyHruXrkfJLBnhMLRa5WplWUoYr5dwT-Y4iPY9Q_aem_AfMSb44oNDIjQTO-1phjCttgBtPalnDVSqM5tzT4buoDJy3H1WoVu9r1fZVidoEEkBYBT6mof1t3qOn2BeeCiYQU&h=AT2vT4Ysb9LGBntXmlR-R0xz-UboFIswubjGJT-1xbrVtxjcj3u8zwIzBMnLTnzoWtF8Pn1pzzzm_lqOJxb9Jn0-yVmo79oVqFVbHTJLYnNUXfCZXuLKJ8PnYfQCDkell-9LTevLOhDPJu2KBrylNQO5tvc) 또는 [커머스](https://www.whatsapp.com/legal/commerce-policy/?fbclid=IwZXh0bgNhZW0CMTEAAR152f6sNEjMf8JyB54RhhhQ2hIgSTMHji2V1aJ9wMbsr0CwOyNRm4tmSDs_aem_AfPpn-sCUKuAFawk0oah0VWOc-tM_-U6BHMiGxprpeZMTLOaLVrAP7Ek9qQ-UJxEKpTtaHaQM0Tio9E1WAWiBPUM) 정책을 위반하지 않을 때까지 템플릿 메시지로 발송할 수 없습니다.

---

**목차**

- [승인 프로세스](#승인-프로세스)
- [일반적인 템플릿 거부 사유](#일반적인-템플릿-거부-사유)
- [WhatsApp 템플릿 발송](#whatsapp-템플릿-발송)
- [WhatsApp 템플릿 상태](#whatsapp-템플릿-상태)
- [FAQ](#faq)
---

# 승인 프로세스

템플릿을 생성한 후에는 고객에게 발송되기 전에 승인 프로세스를 거쳐야 합니다. 이 프로세스는 일반적으로 최대 24시간이 소요됩니다. 승인되면 템플릿 상태가 "활성 - 품질 대기"로 설정되고 사용을 시작할 수 있습니다. 거부되면 편집 후 재제출하거나 결정에 이의를 제기할 수 있습니다.

메시지 템플릿이 승인되면 상태가 "활성 - 품질 대기"로 설정되고 고객에게 발송을 시작할 수 있습니다. 거부된 경우 [편집](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#editing)해서 재제출하거나 결정에 [이의를 제기](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#appeals)할 수 있습니다.

## 템플릿 생성 방법

[](%3Cdiv%20style=%22position%3A%20relative;%20padding-bottom%3A%2064.5933014354067%;%20height%3A%200;%22%3E%3Ciframe%20src=%22https%3A//www.loom.com/embed/564745b6c51946afb1d4a52b4738c164?sid=ffc1ff56-2e0e-4659-9b8a-078608d26b32%22%20frameborder=%220%22%20webkitallowfullscreen%20mozallowfullscreen%20allowfullscreen%20style=%22position%3A%20absolute;%20top%3A%200;%20left%3A%200;%20width%3A%20100%;%20height%3A%20100%;%22%3E%3C/iframe%3E%3C/div%3E)

## 샘플

템플릿을 제출할 때는 템플릿이 고객에게 어떻게 보일지 시각화하기 위해 샘플 변수 값을 포함하는 것이 중요합니다. 템플릿 생성 시 샘플을 추가할 수 있습니다.

![샘플 변수 값 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024924194/original/pom_P9j4uQOeludQsVMRpySTTfFyQYWwGQ.png?1713872158)

---

# 일반적인 템플릿 거부 사유

다음과 같은 이유로 제출이 거부되는 경우가 많으므로 이러한 실수를 피해야 합니다.

- 변수 매개변수가 누락되었거나 중괄호가 일치하지 않음. 올바른 형식은 {{1}}입니다.
- 변수 매개변수에 #, $, % 등의 특수 문자가 포함됨.
- 변수 매개변수가 순차적이지 않음. 예를 들어 {{1}}, {{2}}, {{4}}, {{5}}는 정의되었지만 {{3}}이 없는 경우.
- 메시지 템플릿에 WhatsApp 커머스 정책을 위반하는 내용이 포함됨: 상품이나 서비스를 판매할 때 해당 상품이나 서비스와 관련된 모든 메시지와 미디어(설명, 가격, 수수료, 세금 및/또는 필요한 법적 공시 포함)는 거래로 간주됩니다. 거래는 [WhatsApp 커머스 정책](https://www.whatsapp.com/legal/commerce-policy/?fbclid=IwZXh0bgNhZW0CMTEAAR14Q9zNjCik9FK8Edd7eKLhWn20O_UzLPr8iFHGIYutiJU3FG96aH-zCTE_aem_AfM8oWr6KYbOfBTlkCqT38tK5s8cF3tXMl132fhZZWEnx4xgOM_ZuoRfx3DmvqiB91FdT2J4nRKEmfxDcPw77Vw9)을 준수해야 합니다.
- 메시지 템플릿에 [WhatsApp 비즈니스 정책](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTEAAR3jeX0zE3tpYTKAlsZBvyV67GmR6K3E7ZNmXvNWB-NfEkm37-lQ6QuOC90_aem_AfNuhVsot9h1IQve1TpPmOWXJcwaRYQqUAi4NjAg4t4XEpSzd5EbScKQycdVm3kq_kKeHT3teYNvDXFw2Z5lYjWV&h=AT2fFZg1ZKLftoy1BU4MG8oSs3nC4Rgf8q1C9xJ3RnUzk0EsmeN8Tf9p0v2bMni4pMOjf877czVrjq9yQOR8yL35VMIpI3qbvPamIYfkZlTVfs3O6xWQ9udmqmErUqib3hnSBMaqeDPdseMaiTr5_rIPwPXbRJjisiEkkmqe)을 위반하는 내용이 포함됨: 사용자에게 민감한 식별자를 요청하지 마세요. 예를 들어, 전체 개인 결제 카드 번호, 금융 계좌 번호, 주민등록번호 또는 기타 민감한 식별자를 공유하도록 요청하지 마세요. 민감한 식별자가 포함될 수 있는 문서를 사용자에게 요청하는 것도 포함됩니다. 부분 식별자(예: 주민등록번호 뒤 4자리) 요청은 괜찮습니다.
- 고객에게 법적 조치로 위협하거나 공개적으로 모욕하겠다고 위협하는 등 잠재적으로 남용적이거나 위협적인 내용이 포함됨.
- 메시지 템플릿이 기존 템플릿과 중복됨. 기존 템플릿의 본문과 바닥글과 동일한 문구로 템플릿이 제출되면 중복 템플릿은 거부됩니다.

![템플릿 거부 사유 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024924765/original/bANeo0nAPgu7BC2MFPs18SXmyeDD8Nrz7Q.png?1713872446)

---

# WhatsApp 템플릿 발송

템플릿이 승인되면(상태가 ACTIVE로 설정됨) 고객에게 발송을 시작할 수 있습니다.

메시지 템플릿의 상태는 고객 피드백과 참여도에 따라 자동으로 ACTIVE에서 PAUSED 또는 DISABLED로 변경될 수 있습니다. 따라서 [상태 변경을 모니터링](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#monitoring-status-changes)하고 의존하는 메시지 템플릿이 일시정지되거나 비활성화되거나 그럴 위험이 있을 때 적절한 조치를 취하는 것을 권장합니다.

---

# WhatsApp 템플릿 상태

템플릿은 다음과 같은 상태를 가질 수 있습니다.

- **검토 중**: 템플릿이 아직 검토 중임을 나타냅니다. 검토는 최대 24시간이 소요될 수 있습니다.
- **거부됨**: 검토 과정에서 템플릿이 거부되었거나 정책 중 하나 이상을 위반했습니다. [이의제기](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#appeals)를 참조하세요.
- **활성 - 품질 대기**: 메시지 템플릿이 아직 고객으로부터 품질 피드백이나 읽기율 정보를 받지 못했습니다. 이 상태의 메시지 템플릿은 고객에게 발송할 수 있습니다. [품질 등급](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#quality-rating)을 참조하세요.
- **활성 - 고품질**: 템플릿이 고객으로부터 거의 또는 전혀 부정적인 피드백을 받지 않았습니다. 이 상태의 메시지 템플릿은 고객에게 발송할 수 있습니다. [품질 등급](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#quality-rating)을 참조하세요.
- **활성 - 보통 품질**: 템플릿이 여러 고객으로부터 부정적인 피드백이나 낮은 읽기율을 받았으나, 곧 일시정지되거나 비활성화될 수 있습니다. 이 상태의 메시지 템플릿은 고객에게 발송할 수 있습니다. [품질 등급](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#quality-rating)을 참조하세요.
- **활성 - 저품질**: 템플릿이 여러 고객으로부터 부정적인 피드백이나 낮은 읽기율을 받았습니다. 이 상태의 메시지 템플릿은 고객에게 발송할 수 있지만 곧 일시정지되거나 비활성화될 위험이 있으므로 고객이 보고하는 문제를 해결하는 것을 권장합니다. [품질 등급](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#quality-rating)을 참조하세요.
- **일시정지됨**: 고객으로부터의 반복적인 부정적 피드백이나 낮은 읽기율로 인해 템플릿이 일시정지되었습니다. 이 상태의 메시지 템플릿은 고객에게 발송할 수 없습니다. [템플릿 일시정지](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#template-pausing)를 참조하세요.
- **비활성화됨**: 고객으로부터의 반복적인 부정적 피드백으로 인해 템플릿이 비활성화되었습니다. 이 상태의 메시지 템플릿은 고객에게 발송할 수 없습니다.
- **이의제기 요청됨**: 이의제기가 요청되었음을 나타냅니다. [이의제기](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#appeals)를 참조하세요.

**WhatsApp(왓츠앱) > Templates(템플릿) > Status(상태)**로 이동해서 템플릿 상태를 확인할 수 있습니다.

![WhatsApp 템플릿 상태 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024925270/original/MeSdtU1yIn3tBYgblzakubUS9tTBMZi0OA.jpeg?1713872747)

---

# FAQ

## Q: WhatsApp 메시지 템플릿이란 무엇이고 왜 필요한가요?

WhatsApp 메시지 템플릿은 최근에 메시지를 보내지 않은 고객이나 이전에 비즈니스와 상호작용하지 않은 고객과 대화를 시작할 수 있게 해주는 미리 작성된 메시지 형식입니다. 능동적인 커뮤니케이션, 마케팅, 고객 지원에 필수적입니다.

## Q: 메시지 템플릿은 일반 WhatsApp 메시지와 어떻게 다른가요?

일반 WhatsApp 메시지는 지난 24시간 내에 메시지를 보낸 고객에게 자유롭게 보낼 수 있습니다. 템플릿은 승인이 필요하며 새로운 연락처나 지난 24시간 내에 활동하지 않은 사람들에게 연락할 수 있는 유일한 방법입니다.

## Q: 템플릿 승인 과정은 얼마나 걸리나요?

승인은 일반적으로 최대 24시간이 소요됩니다. 결정이 내려지면 알림을 받게 됩니다.

## Q: 템플릿이 거부되는 일반적인 이유는 무엇인가요?

변수 포맷 오류, WhatsApp 정책 위반 콘텐츠, 기존 템플릿과 너무 유사한 경우입니다. 정책을 신중히 검토하고 템플릿 형식을 확인하세요.

## Q: 템플릿 상태가 변경되었습니다. 이것은 무엇을 의미하나요?

템플릿 상태("활성 - 저품질" 또는 "일시정지됨" 등)는 고객 피드백을 반영합니다. 고품질이고 좋은 반응을 받는 템플릿만 발송할 수 있도록 이러한 상태를 모니터링하세요.

## Q: 템플릿이 부정적인 피드백이나 낮은 참여도를 받으면 어떻게 되나요?

템플릿이 부정적인 피드백이나 낮은 참여도를 받으면 전화번호의 품질 등급을 보호하기 위해 자동으로 일시정지될 수 있습니다. 일시정지 기간은 템플릿의 품질 등급에 따라 다르며, 템플릿이 일시정지되면 알림을 받게 됩니다.

## Q: 일시정지된 템플릿을 편집할 수 있나요?

네, 일시정지된 템플릿을 편집하여 내용을 개선하고 부정적인 피드백이나 낮은 참여도를 야기하는 문제를 해결할 수 있습니다. 편집 후 재제출하면 승인될 때까지 상태가 "검토 중"으로 변경됩니다.

---
*원문 최종 수정: Thu, 26 Mar, 2026 at  6:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*