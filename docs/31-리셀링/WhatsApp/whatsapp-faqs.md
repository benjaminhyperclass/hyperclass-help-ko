---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# WhatsApp 자주 묻는 질문

**목차**

- [Q. 이 사용자의 전화번호가 실험 대상이라서 메시지 전송이 실패했어요](#q-이-사용자의-전화번호가-실험-대상이라서-메시지-전송이-실패했어요)
- [Q. WhatsApp 구독을 취소하면 전화번호와 템플릿에 영향이 있나요?](#q-whatsapp-구독을-취소하면-전화번호와-템플릿에-영향이-있나요)
- [Q. "로케이션 구매"와 "에이전시 직접 배포" 간에 전환하면 WhatsApp 번호와 템플릿은 어떻게 되나요?](#q-로케이션-구매와-에이전시-직접-배포-간에-전환하면-whatsapp-번호와-템플릿은-어떻게-되나요)
- [Q. WhatsApp 구독이 비활성화된 상태에서 메시지를 보내거나 받을 수 있나요?](#q-whatsapp-구독이-비활성화된-상태에서-메시지를-보내거나-받을-수-있나요)
- [Q. WhatsApp 재구독 후 문제가 발생하면 어떻게 해야 하나요?](#q-whatsapp-재구독-후-문제가-발생하면-어떻게-해야-하나요)
- [Q. WhatsApp 템플릿과 연결된 워크플로우와 자동화가 구독 취소 기간 중에도 보존되나요?](#q-whatsapp-템플릿과-연결된-워크플로우와-자동화가-구독-취소-기간-중에도-보존되나요)
- [Q. 기존 WhatsApp 번호를 사용하려면 어떤 단계를 거쳐야 하나요?](#q-기존-whatsapp-번호를-사용하려면-어떤-단계를-거쳐야-하나요)
- [Q. WhatsApp 비즈니스 플랫폼과 WhatsApp 비즈니스 앱을 동시에 사용할 수 있나요?](#q-whatsapp-비즈니스-플랫폼과-whatsapp-비즈니스-앱을-동시에-사용할-수-있나요)
- [Q. WhatsApp 번호를 WhatsApp 비즈니스 플랫폼으로 이전한 후 데이터가 손실되나요?](#q-whatsapp-번호를-whatsapp-비즈니스-플랫폼으로-이전한-후-데이터가-손실되나요)
- [Q. WhatsApp 번호를 이전하기 전에 데이터를 백업하는 방법은?](#q-whatsapp-번호를-이전하기-전에-데이터를-백업하는-방법은)
- [Q. Meta의 WhatsApp 비즈니스 플랫폼(API) 새 업데이트는 무엇인가요?](#q-meta의-whatsapp-비즈니스-플랫폼api-새-업데이트는-무엇인가요)
- [Q. 이것이 메시지 전달률에 어떤 영향을 미치나요?](#q-이것이-메시지-전달률에-어떤-영향을-미치나요)
- [Q. 빈도 제한에서 제외되는 메시지는 어떤 것들인가요?](#q-빈도-제한에서-제외되는-메시지는-어떤-것들인가요)
- [Q. 빈도 제한이 모든 사용자에게 적용되나요?](#q-빈도-제한이-모든-사용자에게-적용되나요)
- [Q. Facebook 비즈니스 관리자 계정을 인증하면 어떤 이점이 있나요?](#q-facebook-비즈니스-관리자-계정을-인증하면-어떤-이점이-있나요)
- [Q. Facebook 비즈니스 관리자 계정이 아직 인증되지 않았다면 어떻게 하나요?](#q-facebook-비즈니스-관리자-계정이-아직-인증되지-않았다면-어떻게-하나요)
- [Q. 비즈니스 인증이 실패하면 어떻게 되나요?](#q-비즈니스-인증이-실패하면-어떻게-되나요)
- [Q. Facebook 비즈니스 관리자 계정 인증을 요청하는 방법은?](#q-facebook-비즈니스-관리자-계정-인증을-요청하는-방법은)
- [Q. 메시지 전달률을 개선하기 위한 권장 모범 사례는?](#q-메시지-전달률을-개선하기-위한-권장-모범-사례는)
- [Q. WhatsApp은 개인 메시징에서는 무료인데, "WhatsApp 대화 요금"은 무엇을 의미하나요?](#q-whatsapp은-개인-메시징에서는-무료인데-whatsapp-대화-요금은-무엇을-의미하나요)

---

## Q. 이 사용자의 전화번호가 실험 대상이라서 메시지 전송이 실패했어요

2023년 6월 14일부터, WhatsApp 사용자의 약 1%는 다음 조건 중 하나가 충족되지 않는 한 모든 비즈니스로부터 마케팅 템플릿 메시지를 받지 않습니다:

- 고객과 비즈니스 간에 [고객 서비스 창](https://developers.facebook.com/docs/whatsapp/pricing#customer-service-windows)이 존재하는 경우
- 고객과 비즈니스 간에 활성 [마케팅 대화](https://developers.facebook.com/docs/whatsapp/pricing#conversation-categories)가 존재하는 경우
- 고객과 비즈니스 간에 활성 [무료 진입점 대화](https://developers.facebook.com/docs/whatsapp/pricing#free-entry-point-conversations)가 존재하는 경우

실험 그룹에 속한 고객에게 마케팅 템플릿 메시지를 보내면, 대화가 생성되지 않으므로 메시지가 전송되지 않으며 요금도 청구되지 않습니다.

## Q. WhatsApp 구독을 취소하면 전화번호와 템플릿에 영향이 있나요?

아니요, WhatsApp 구독을 취소해도 WhatsApp 전화번호나 템플릿에는 영향이 없습니다. 재구독하면 모든 번호와 템플릿이 구독 취소 전 상태 그대로 복원됩니다.

## Q. "로케이션 구매"와 "에이전시 직접 배포" 간에 전환하면 WhatsApp 번호와 템플릿은 어떻게 되나요?

"로케이션 구매"와 "에이전시 직접 배포" 간의 전환은 WhatsApp 전화번호나 템플릿에 영향을 주지 않습니다. 재구독하면 모든 것이 변경 전 상태 그대로 나타납니다.

## Q. WhatsApp 구독이 비활성화된 상태에서 메시지를 보내거나 받을 수 있나요?

아니요, WhatsApp 구독이 비활성화된 동안에는 메시지를 보내거나 받을 수 없습니다. 하지만 전화번호와 템플릿을 포함한 모든 데이터는 그대로 유지되며 재구독 시 복원됩니다.

## Q. WhatsApp 재구독 후 문제가 발생하면 어떻게 해야 하나요?

재구독 후에도 전화번호나 템플릿이 나타나지 않으면 저희 지원팀에 문의해 주세요.

## Q. WhatsApp 템플릿과 연결된 워크플로우와 자동화가 구독 취소 기간 중에도 보존되나요?

네, WhatsApp 템플릿과 연결된 모든 워크플로우와 자동화는 그대로 유지됩니다. 재구독하면 이러한 워크플로우들이 이전과 같이 작동합니다.

**참고:** 메시징 워크플로우의 중단을 피하기 위해 신속히 재구독하시기 바랍니다.

## Q. 기존 WhatsApp 번호를 사용하려면 어떤 단계를 거쳐야 하나요?

기존 번호를 사용하려면 해당 번호와 연결된 기존 WhatsApp 계정을 삭제해야 합니다. 다음 단계를 따르세요:

- WhatsApp을 열어주세요.
- 설정(Settings) > 계정(Account) > 내 계정 삭제(Delete my account)로 이동합니다. 자세한 정보는 [기존 WhatsApp 번호를 비즈니스 계정으로 이전하기](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/migrate-existing-whatsapp-number-to-a-business-account/) 가이드를 참고하세요.

## Q. WhatsApp 비즈니스 플랫폼과 WhatsApp 비즈니스 앱을 동시에 사용할 수 있나요?

네, WhatsApp 공존 기능을 사용하여 가능합니다. WhatsApp 공존 기능을 통해 비즈니스는 기존 WhatsApp 비즈니스 앱 계정을 WhatsApp Cloud API로 구동되는 LeadConnector의 고급 CRM 도구와 함께 사용할 수 있습니다. [자세한 내용은 여기서 확인하세요](../../36-기타/리커버리/whatsapp-coexistence-feature.md)

## Q. WhatsApp 번호를 WhatsApp 비즈니스 플랫폼으로 이전한 후 데이터가 손실되나요?

네, 이전 후에는 WhatsApp과 관련된 모든 데이터가 손실됩니다. Meta는 플랫폼 간 데이터 전송을 허용하지 않습니다. 이전을 진행하기 전에 데이터를 백업하는 것을 강력히 권장합니다.

## Q. WhatsApp 번호를 이전하기 전에 데이터를 백업하는 방법은?

데이터를 백업하려면:

- WhatsApp을 열어주세요.
- 설정(Settings) > 채팅(Chats) > 채팅 백업(Chat backup)으로 이동합니다.
- 안내에 따라 원하는 위치(예: Google Drive 또는 iCloud)에 데이터를 백업합니다.

## Q. Meta의 WhatsApp 비즈니스 플랫폼(API) 새 업데이트는 무엇인가요?

Meta는 인도 전화번호를 가진 WhatsApp 사용자에게 전송되는 마케팅 메시지 수를 제한하는 빈도 제한(Frequency Capping)을 도입했습니다. 이는 특정 기간 동안 한 사람이 모든 비즈니스로부터 받을 수 있는 마케팅 메시지 수를 제한합니다. Meta는 WhatsApp 사용자에 대한 스팸과 과도한 메시지 전송을 줄여 전체적인 사용자 경험을 개선하고 비즈니스가 고객과 효과적으로 소통할 수 있는 더 나은 기회를 제공하기 위해 빈도 제한을 도입했습니다.

## Q. 이것이 메시지 전달률에 어떤 영향을 미치나요?

빈도 제한은 선착순 원칙으로 작동합니다. 마케팅 메시지는 제한에 도달할 때까지 전달됩니다. 이 제한을 초과하는 메시지는 전달되지 않습니다.

## Q. 빈도 제한에서 제외되는 메시지는 어떤 것들인가요?

빈도 제한은 새로운 대화를 시작하는 프로모션 및 마케팅 템플릿 메시지에만 적용됩니다. 다음 메시지에는 적용되지 않습니다:

• **세션 메시지**: 기존 고객 서비스 상호작용 내의 지원 메시지
• **WhatsApp 광고 클릭**: 사용자가 WhatsApp 광고를 클릭하여 시작된 대화

## Q. 빈도 제한이 모든 사용자에게 적용되나요?

아니요, 빈도 제한은 인도(+91 국가 코드) 사용자에게 전송되는 마케팅 메시지에만 적용됩니다.

여러 전화번호를 가진 WhatsApp 비즈니스 계정의 제한은 어떻게 결정되나요?

제한은 개별 사용자가 모든 비즈니스로부터 받은 총 메시지 수를 기준으로 합니다. 특정 비즈니스 하나로부터 받은 메시지 수로 결정되지 않습니다.

## Q. Facebook 비즈니스 관리자 계정을 인증하면 어떤 이점이 있나요?

Meta가 Facebook 비즈니스 관리자 계정을 인증하면 WhatsApp에서 무제한 비즈니스 대화를 시작할 수 있습니다.

## Q. Facebook 비즈니스 관리자 계정이 아직 인증되지 않았다면 어떻게 하나요?

인증이 대기 중인 동안:

- 24시간 롤링 윈도우에서 최대 250개의 비즈니스 대화를 시작할 수 있습니다.
- 고객이 시작한 대화에는 제한 없이 응답할 수 있습니다.
- 인증되지 않은 Facebook 비즈니스 관리자 계정에서 두 개의 WhatsApp 비즈니스 번호를 가질 수 있습니다.

## Q. 비즈니스 인증이 실패하면 어떻게 되나요?

비즈니스 인증이 실패해도 앞서 언급한 제한(즉, 24시간 동안 250개 비즈니스 대화 및 고객이 시작한 대화에 제한 없이 응답)하에서 WhatsApp 비즈니스 번호를 계속 사용할 수 있습니다.

## Q. Facebook 비즈니스 관리자 계정 인증을 요청하는 방법은?

인증을 요청하려면 법적 기관의 증명과 비즈니스에 대한 접근 권한을 제공해야 합니다. 자세한 지침은 [WhatsApp 비즈니스 관리자에서 비즈니스 인증하기](http://Q1:%20What%20are%20the%20benefits%20of%20verifying%20my%20Facebook%20Business%20Manager%20account?%20%20Once%20Meta%20verifies%20your%20Facebook%20Business%20Manager%20account,%20you%20can%20initiate%20unlimited%20business%20conversations%20on%20WhatsApp.%20%20Q2:%20What%20can%20I%20do%20if%20my%20Facebook%20Business%20Manager%20account%20is%20not%20yet%20verified?%20%20While%20your%20verification%20is%20pending,%20you%20can:%20%20Initiate%20up%20to%20250%20business%20conversations%20in%20a%2024-hour%20rolling%20window.%20Respond%20to%20customer-initiated%20conversations%20without%20any%20restrictions.%20Have%20two%20WhatsApp%20business%20numbers%20in%20an%20unverified%20Facebook%20Business%20Manager%20account.%20Q3:%20What%20happens%20if%20my%20business%20verification%20is%20unsuccessful?%20%20If%20your%20business%20verification%20is%20unsuccessful,%20you%20can%20continue%20using%20your%20WhatsApp%20business%20number%20with%20the%20restrictions%20mentioned%20(i.e.,%20250%20business%20conversations%20in%20a%2024-hour%20period%20and%20responding%20to%20customer-initiated%20conversations%20without%20restrictions).%20%20Q4:%20How%20do%20I%20request%20verification%20for%20my%20Facebook%20Business%20Manager%20account?%20%20To%20request%20verification,%20you%20need%20to%20provide%20proof%20of%20your%20legal%20entity%20and%20access%20to%20the%20business.%20Detailed%20instructions%20can%20be%20found%20in%20the%20guide%20on%20Verifying%20your%20Business%20in%20WhatsApp%20Business%20Manager.) 가이드에서 확인할 수 있습니다.

## Q. 메시지 전달률을 개선하기 위한 권장 모범 사례는?

**옵트인 참여**: 명시적으로 옵트인한 고객에게만 메시지를 보내세요.

- **연락처 목록 세분화**: 공통 특성을 기반으로 대상을 그룹화하여 타겟팅된 메시지를 보내세요.
- **개인화된 추천**: 고객 행동과 구매 패턴을 사용하여 개인화된 상품 추천을 보내세요.
- **양보다 질 강조**: 메시지가 가치를 더하고 고객의 니즈에 공감할 수 있도록 하세요.
- **양방향 대화를 통한 참여**: 고객이 브랜드에 관심을 갖고 참여하도록 의미 있는 상호작용을 만들어 보세요.

## Q. WhatsApp은 개인 메시징에서는 무료인데, "WhatsApp 대화 요금"은 무엇을 의미하나요?

WhatsApp 앱과 WhatsApp 비즈니스 앱은 무료이지만, WhatsApp 비즈니스 API를 사용하여 고객과 대규모로 커뮤니케이션하는 비즈니스에는 대화 요금이 부과됩니다.

이러한 요금은 비즈니스가 WhatsApp 비즈니스 플랫폼을 통해 고객에게 알림을 보낼 때, 특히 고객이 최근 24시간 내에 응답하지 않은 경우에 적용됩니다. 비용은 고객의 국가 코드에 따라 달라집니다. 저희는 추가 수수료 없이 실제 비용을 기준으로 이러한 요금을 청구합니다.

## Q. "마지막 온보딩이 실패했습니다! 이 WABA는 이미 이 로케이션 ID에서 온보드되었습니다"는 무엇을 의미하나요?

이 메시지는 온보딩하려는 WABA(WhatsApp 비즈니스 계정)가 오류 메시지나 스크린샷에 표시된 것처럼 이미 다른 로케이션 ID에 연결되어 있음을 나타냅니다. 이 WABA를 다른 로케이션 ID에 온보딩하려면 먼저 현재 로케이션에서 연결을 해제해야 합니다. 제거한 후에는 원하는 로케이션 ID로 온보딩을 진행할 수 있습니다.

![WABA 온보딩 오류 메시지 스크린샷](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045415633/original/skP_FQdW4Ni7-aBEvmTDOeCEU4GuXcxnrg.png?1745299749)

---
*원문 최종 수정: Tue, 22 Apr, 2025 at 12:33 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*