---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000004651-how-to-make-my-form-submissions-secure-from-spammers-
번역일: 2026-04-23
카테고리: surveys-forms-qr-codes-and-quizzes
---

# 폼 제출을 스팸으로부터 보호하는 방법

## 폼을 보안하는 방법은 무엇인가요?

저희 폼(Forms) 제품에는 가짜 제출로부터 보호하는 내장 보안 기능이 포함되어 있습니다. IP 주소, 지리적 데이터, 기타 고급 매개변수 등 다양한 보안 신호를 활용합니다. 또한 Cloudflare의 DDoS 보호 기능을 사용하여 폼과 제출 데이터를 보호합니다.

하지만 보안을 더욱 강화하려면 폼을 설계할 때 다음 모범 사례를 적용해 보세요.

## 1. CAPTCHA를 사용하여 스팸 방지

CAPTCHA 추가는 사기꾼과 스패머가 대량의 가짜 항목을 제출하는 것을 차단하는 가장 효과적인 방법 중 하나입니다. 이를 통해 다음을 방지할 수 있습니다:

- CRM을 어지럽히는 가짜 연락처 생성
- 인프라에 과부하를 일으키는 과도한 자동 폼 제출
- 가짜 항목으로 인해 트리거되는 자동 SMS, 이메일 또는 기타 커뮤니케이션 업데이트로 인한 비용 증가

폼에 캡차를 추가하려면 `Forms(폼) → Custom Fields(커스텀 필드) → Captcha(캡차)`로 이동하세요.

![폼에 캡차 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041769873/original/OnIaOzeQ89UkB-13cZHpPSg97FvNXi_7sA.png?1739861456)

이는 SMS, 이메일 또는 기타 형태의 커뮤니케이션 업데이트를 전송하는 자동화를 설정한 경우 특히 유용합니다. 그렇지 않으면 악의적인 사용자가 CRM에 가짜 연락처를 생성하여 비용이 증가할 수 있습니다.

## 2. 이메일 및 전화번호 유효성 검사

이메일과 전화번호 유효성 검사를 활성화하여 합법적인 사용자만 폼을 제출할 수 있도록 하세요. 이를 통해:

- 임시, 무효 또는 가짜 연락처 정보를 차단할 수 있습니다
- 사기성 항목이 마케팅 및 영업 데이터에 영향을 미치는 것을 방지할 수 있습니다
- 불필요한 아웃리치 비용을 줄일 수 있습니다

![이메일 유효성 검사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041769874/original/kvfcznmDJx78bA7krpFxxpcOz8HX_LVVoQ.png?1739861456)

![전화번호 유효성 검사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041769875/original/yHdxRt5oosWrSyOYkARjdFUFiW4DLP_7hQ.png?1739861456)

## 3. 지역별 SMS 권한 제한

폼이 SMS 커뮤니케이션을 트리거하는 경우, SMS 지역 권한을 구성하여 고위험 지역으로 메시지가 전송되지 않도록 방지하세요.

**전화 서비스에서 지역 권한 관리** - 전화 시스템은 하위 계정(Sub-account) 수준에서 SMS 권한을 관리합니다. 기본적으로 고위험 지역을 제외한 대부분의 국가가 활성화되어 있습니다. 지역 권한을 수정해야 하는 경우, 로케이션(Location) ID와 문자 및 통화를 활성화하거나 비활성화할 국가 목록과 함께 지원팀에 문의하세요.

기본적으로 비활성화되어 있는 특정 고위험 국가는 다음과 같습니다:

- 소말리아 (+252)
- 북한 (+850)
- 쿠바 (+53)
- 시리아 (+963)
- 이란 (+98)
- 수단 (+249)
- 라이베리아 (+231)
- 짐바브웨 (+263)
- 아프가니스탄 (+93)
- 예멘 (+967)

**모범 사례** - 최적의 보안을 위해서는 실제 고객이 위치한 지역에만 SMS 권한을 활성화하는 것이 좋습니다. 사기 활동을 방지하기 위해 고위험 지역에서 SMS를 활성화할 때는 신중하게 접근하세요.

## 핵심 요약

폼 보안 강화는 스팸, 가짜 연락처 및 불필요한 비용으로부터 비즈니스를 보호합니다. 내장 보호 기능도 도움이 되지만, CAPTCHA, 이메일/전화번호 유효성 검사, 지역 제한 SMS 권한을 추가하면 보안이 더욱 강화됩니다. 이러한 모범 사례를 구현하여 진정한 제출만 시스템에 도달하도록 하세요.

---
*원문 최종 수정: Tue, 18 Feb, 2025 at 12:55 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*