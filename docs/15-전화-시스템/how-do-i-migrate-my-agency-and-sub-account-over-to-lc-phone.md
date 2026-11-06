---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# 에이전시와 하위 계정을 LC Phone으로 어떻게 마이그레이션하나요?

10월 19일부터 모든 에이전시에서 LC-Phone 시스템을 이용할 수 있습니다. 번거로운 설정 과정을 건너뛰고 원클릭으로 바로 시스템을 구축할 수 있어요.

# LC-Phone을 선택해야 하는 이유?

LC-Phone을 사용하면 CRM에서 SMS/전화를 송수신하기 위해 서드파티 전화 서비스 제공업체(Twilio, Plivo 등)를 연동할 필요가 없습니다.

LC-Phone으로 CRM에서 SMS/전화 송수신 기능을 바로 사용할 수 있어요! 자세한 내용은 [여기](what-is-lc-lead-connector-phone-system-.md)에서 확인하세요.

이 문서에서 다루는 내용:

- [LC-Phone을 선택해야 하는 이유?](#lc-phone을-선택해야-하는-이유)
- [이 기능을 사용하는 방법](#이-기능을-사용하는-방법)
- [1단계 - LC-Phone 시스템 접근 권한 확인](#1단계-lc-phone-시스템-접근-권한-확인)
- [2단계 - 에이전시를 ISV로 전환](#2단계-에이전시를-isv로-전환)
- [3단계 - 기존 하위 계정을 LC Phone으로 이전](#3단계-기존-하위-계정을-lc-phone으로-이전)
- [하위 계정 마이그레이션 전 중요 확인 사항](#하위-계정-마이그레이션-전-중요-확인-사항)
- [A. 모든 하위 계정을 LeadConnector Phone으로 일괄 마이그레이션 - 미국/캐나다 계정](#a-모든-하위-계정을-leadconnector-phone으로-일괄-마이그레이션-미국캐나다-계정)
- [B. 단일 계정을 LeadConnector Phone으로 마이그레이션 - 미국/캐나다 계정](#b-단일-계정을-leadconnector-phone으로-마이그레이션-미국캐나다-계정)
- [C. 단일 계정을 LeadConnector Phone으로 마이그레이션 - 미국/캐나다 이외 계정](#c-단일-계정을-leadconnector-phone으로-마이그레이션-미국캐나다-이외-계정)
- [자주 묻는 질문](#자주-묻는-질문)

# 이 기능을 사용하는 방법?

사용 단계:

- 에이전시에서 Phone System(전화 시스템) - Twilio 설정의 Switch to LC-Phone System(LC-Phone 시스템으로 전환) 버튼을 클릭하여 LC-Phone으로 이전해야 합니다.
- 에이전시가 LC-Phone으로 전환되면, 하위 계정들을 이전해야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293530236/original/zG3-Ibb0RYwDMx8wrIjtXpVm0ROZAQyV-A.gif?1681929691)

참고사항:  

미국/캐나다 이외의 하위 계정을 마이그레이션할 때는 [Regulatory Bundle/Address(규제 번들/주소)를 생성](regulatory-bundle-and-address-creation-for-sub-accounts.md)해야 합니다.

## 1단계 - LC-Phone 시스템 접근 권한 확인

10월 19일 오후 12:00(UTC)부터 모든 에이전시에서 자동으로 LC-Phone 시스템을 사용할 수 있습니다. Agency Setting(에이전시 설정) → Phone System - Twilio → Use LC-Phone System(LC-Phone 시스템 사용) 모달이 표시되는지 확인하여 접근 권한을 검증하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029975946/original/xiy-obhgwFc4SkbSxd4xTv_YHiskhVD7cA.jpg?1722022551)

카드와 은행에 따라 테스트 결제를 통한 3D Secure 인증이 필요할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029975956/original/xzwJd1uPm96E1_Z0CpybzNbsTb4nqtO2eg.jpg?1722022584)

## 2단계 - 에이전시를 ISV로 전환

- Switch to LeadConnector Phone System(LeadConnector 전화 시스템으로 전환) 클릭
- 일반 정보를 읽고 I accept(동의) 체크박스를 선택하여 프롬프트를 확인합니다. A2P 등록은 다시 해야 하며 마이그레이션되지 않습니다. 즉, 이미 자체 Twilio 계정에서 A2P를 등록한 경우에도 A2P를 다시 등록하고 $4.95 수수료를 지불해야 합니다.
- Confirm(확인)을 클릭합니다.
- 훌륭해요! 이제 LC-Phone 시스템을 사용하고 있습니다. 성공 메시지가 표시됩니다.

참고사항:

에이전시 계정을 LC로 전환하면 이후부터 모든 새로운 하위 계정이 LeadConnector 전화 서비스 하에서 생성됩니다. 새로운 하위 계정(향후)이 처리되면, 에이전시는 3단계부터 기존 하위 계정 이전을 시작할 수 있습니다.

## 3단계 - 기존 하위 계정을 LC Phone으로 이전

### 하위 계정 마이그레이션 전 중요 확인 사항:

- 모든 하위 계정을 LC Phone으로 마이그레이션하는 기능은 한 번만 사용할 수 있습니다.
- 모든 하위 계정 마이그레이션은 미국/캐나다 국가의 하위 계정만 마이그레이션합니다.
- 각 하위 계정은 개별적으로 마이그레이션할 수 있으며, Switch to LeadConnector(LeadConnector로 전환) 버튼도 제공됩니다.
- 미국/캐나다 이외의 하위 계정을 마이그레이션하려면 Regulatory Bundle(규제 번들)을 생성한 후 번호 마이그레이션을 요청해야 합니다.

### A. 모든 하위 계정을 LeadConnector Phone으로 일괄 마이그레이션 - 미국/캐나다 하위 계정

- Switch all sub-accounts to LC(모든 하위 계정을 LC로 전환) 클릭
- 일반 정보를 읽고 I accept(동의) 체크박스를 선택하여 프롬프트를 확인합니다.
- Confirm(확인)을 클릭합니다.
- 모든 계정이 처리 상태로 이동됩니다.
이 단계에서는 아무것도 할 필요가 없습니다. 기존 하위 계정은 정상적으로 계속 작동합니다. 전화번호가 이전되면 자동으로 감지하여 새로운 하위 계정으로 자동 전환됩니다.

참고사항:

이 작업은 미국/캐나다 하위 계정만 마이그레이션하므로 완료까지 2-3 영업일이 소요됩니다. 더 오래 걸리면 고객지원 티켓을 제출해 주세요.

완료되면 화면이 다음과 같이 표시됩니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289796170/original/2Ff-bWlvkVxSS81yn9LKWkB4-iyhHSrCdw.gif?1680023971)

### B. 단일 계정을 LeadConnector Phone으로 마이그레이션 - 미국/캐나다 하위 계정

- Switch to LC(LC로 전환) 클릭
- 일반 정보를 읽고 I accept(동의) 체크박스를 선택하여 프롬프트를 확인합니다.
- Confirm(확인)을 클릭합니다.
- 계정이 처리 상태로 이동됩니다.
이 단계에서는 아무것도 할 필요가 없습니다. 기존 하위 계정은 정상적으로 계속 작동합니다. 전화번호가 이전되면 자동으로 감지하여 새로운 하위 계정으로 자동 전환됩니다.

참고사항:

마이그레이션 완료까지 약 2-3 영업일이 소요됩니다. 더 오래 걸리면 고객지원 티켓을 제출해 주세요.

### C. 단일 계정을 LeadConnector Phone으로 마이그레이션 - 미국/캐나다 이외 하위 계정

- Switch to LC(LC로 전환) 클릭
- 일반 정보를 읽고 I accept(동의) 체크박스를 선택하여 프롬프트를 확인합니다.
- Confirm(확인)을 클릭합니다.
- 계정이 처리 상태로 이동됩니다.
- Regulatory Bundle(규제 번들) 생성 - 로케이션 Settings(설정) → Phone Number(전화번호) 페이지 → Regulatory Bundle/Address(규제 번들/주소) 페이지로 이동
- 모든 세부 정보를 입력하고 제출합니다.
- Regulatory Bundle이 성공적으로 생성되고 승인되면, 해당 주소에 연결된 번호를 이전하라고 티켓에 회신하세요.
- 번호는 다음 24시간 내에 이전됩니다.
이 단계에서는 아무것도 할 필요가 없습니다. 기존 하위 계정은 정상적으로 계속 작동합니다. 전화번호가 이전되면 자동으로 감지하여 새로운 하위 계정으로 자동 전환됩니다.

중요 참고사항:

제출된 규제 번들에 따라 마이그레이션 완료까지 약 4-5 영업일이 소요됩니다. 더 오래 걸리면 고객지원 티켓을 제출해 주세요.

# 자주 묻는 질문

#### 1. LC Phone 시스템으로 이전하면 어떤 이점이 있나요?

- 원클릭 빠른 시작
- 실시간 청구로 더 나은 비용 효율성
- 더 나은 전송률로 보안 강화
- [여기](what-is-lc-lead-connector-phone-system-.md)에서 자세히 알아보세요.

#### 2. 에이전시가 LC Phone으로 온보딩될 때 기존 하위 계정은 어떻게 되나요?

에이전시가 LC Phone으로 이전될 때 기존 하위 계정은 자동으로 이전되지 않습니다. 하위 계정의 경우 일괄 또는 개별 마이그레이션이 필요합니다.

#### 3. 어느 국가에서 ISV를 사용할 수 있나요?

Twilio ISV/LC-Phone 시스템은 모든 국가에서 사용할 수 있습니다. 규제 번들을 지원하며, [여기](regulatory-bundle-and-address-creation-for-sub-accounts.md)에서 자세히 알아보세요.

#### 4. 하위 계정을 LC-Phone 시스템으로 이전해도 SaaS 재청구가 작동하나요?

네, SaaS 재청구는 LC Phone 시스템에서도 계속 작동합니다.

#### 5. LC Phone과 Twilio의 비용은 어떻게 다른가요?

LeadConnector Phone 시스템 비용은 Twilio와 동일해야 합니다. [여기](lc-phone-pricing-billing-guide.md)에서 자세히 알아보세요.

#### 6. 하위 계정의 전화 사용량을 어디서 확인할 수 있나요?

Agency Settings(에이전시 설정) → Billing(청구) → See Details(세부 정보 보기)(Credits(크레딧) 하위)로 이동하여 모든 하위 계정 전화 사용량을 내보낼 수 있습니다.

하위 계정 → settings(설정) → phone numbers(전화번호) → usage summary(사용량 요약)에서도 사용량을 확인할 수 있습니다.

#### 7. LC Phone으로 전환할 때 하나의 하위 계정만 전환할 수 있나요? 아니면 모든 하위 계정을 전환해야 하나요?

모든 새로운 하위 계정은 자동으로 LC Phone을 사용합니다. 단, [LC Phone 비활성화 폼](https://link.hyperclass.ai/widget/form/ItLl5XOY2IQcSI8iDkiR)에서 자체 Twilio 계정 SID 및 인증 토큰을 제출하여 해당 하위 계정의 LC Phone을 비활성화할 수 있습니다. 기존 하위 계정의 경우, 모든 하위 계정을 LC Phone으로 전환하거나 원하는 하위 계정만 LC Phone으로 전환할 수 있습니다.

#### 8. LeadConnector로 전환하고 국제 번호가 필요한 경우 어떻게 진행해야 하나요?

이전해야 할 국제 번호가 있는 경우, 다음 문서를 참고하여 하위 계정 전화번호 탭에서 번들을 설정할 수 있습니다:

[하위 계정용 규제 번들 및 주소 생성](regulatory-bundle-and-address-creation-for-sub-accounts.md)

번들이 설정되면 번호를 LC Phone으로 이전할 수 있습니다!

#### 9. 특정 하위 계정에서 자체 전화 시스템을 연동할 수 있나요?

물론입니다! 모든 새 계정은 기본적으로 LC-Phone을 사용하지만, 언제든지 서드파티 전화 서비스 제공업체를 연동할 수 있습니다.

하지만 고객이 LC-Phone 시스템 대신 자체 Twilio SID 및 인증 토큰을 사용하려면, ISV를 비활성화하고 해당 로케이션을 자체 Twilio 계정 사용으로 되돌릴 수 있도록 [LC Phone 비활성화 폼](https://link.hyperclass.ai/widget/form/ItLl5XOY2IQcSI8iDkiR)을 제출해 주세요.

#### 10. 현재 Twilio에서 계정이 정지된 상태인데, LeadConnector로 계정을 이전할 수 있나요?

아니요, LeadConnector로 마이그레이션하기 전에 Twilio 지원팀과 협력하여 정지 문제를 해결해야 합니다. [계정이 정지된 이유](why-is-your-account-suspended.md)를 확인해 보세요.

#### 11. 고객이 Twilio에서 LC로 전환하면 하위 계정의 통화 녹음이 손실되나요?

전환 전 프롬프트에 "통화 녹음이 손실될 수 있습니다"라고 표시되지만, 녹음은 여전히 Twilio 계정에 보관됩니다. 통화 녹음은 이전되지 않지만, 고객의 Twilio 계정에서 계속 사용할 수 있습니다. 필요한 경우 Twilio에서 수동으로 다운로드하여 보관할 수 있습니다.

---
*원문 최종 수정: Tue, 27 Aug, 2024 at 11:14 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*