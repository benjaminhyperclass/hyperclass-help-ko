---

번역일: 2026-04-08
카테고리: 35-개발자 > Developer Resources
---

# HighLevel API 문서

HighLevel은 개발자가 HighLevel CRM 및 마켓플레이스와 통합, 자동화, 커스텀 애플리케이션을 구축할 수 있도록 포괄적인 API 플랫폼을 제공합니다. 저희 API는 연락처, 메시징, 워크플로우, 캘린더, 결제, 웹훅 등을 위한 REST 엔드포인트를 포함합니다.

**중요**: V1 API는 지원 종료되었습니다. 

기존 연결/통합은 계속 작동하지만, V1 API에 대한 지원은 더 이상 제공되지 않습니다.

V1에서 V2로 마이그레이션하고 싶으신가요? (수많은 새 기능과 보안 기능 포함)
[Private Integrations(프라이빗 통합)](../../42-통합/Private-Integrations/private-integrations-everything-you-need-to-know.md)을 확인해 보세요.

참고사항: 앞으로 에이전시와 하위 계정 설정에서 새 API 키를 생성하는 기능이 제거될 예정입니다. 이 변경사항은 아직 API 키를 생성하지 않았거나 현재 사용하지 않는 계정에 적용됩니다.

---

**목차**

- [HighLevel API 문서](#highlevel-api-문서)
- [HighLevel API 도움말 또는 지원 받는 방법](#highlevel-api-도움말-또는-지원-받는-방법)
- [HighLevel에 새 API 관련 아이디어 제출하는 방법](#highlevel에-새-api-관련-아이디어-제출하는-방법)
- [플랜 레벨별 API 접근 권한 차이](#플랜-레벨별-api-접근-권한-차이)
- [API 1.0 및 API 2.0의 Rate Limit은?](#api-10-및-api-20의-rate-limit은)
- [자주 묻는 질문](#자주-묻는-질문)
- [도움말 및 지원](#도움말-및-지원)

---

## HighLevel API 문서

HighLevel API 문서는 이제 **[https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/)**에서 확인하실 수 있습니다. 기존에 레거시 Stoplight 문서를 사용했다면 북마크를 업데이트해 주세요. Stoplight 문서는 앞으로 몇 달 내에 중단될 예정입니다.

## HighLevel API 도움말 또는 지원 받는 방법

**중요**: 현재 HighLevel 지원팀은 API 관련 주제에 대한 설정 코드 검토나 개발자 컨설팅 서비스를 제공하지 않습니다. 하지만 설정이 완료되고 올바름에도 불구하고 오류가 지속된다면, 저희가 수정해야 할 API 버그를 발견했을 수 있습니다. 이 양식을 작성하여 버그를 신고할 수 있습니다: [https://developers.gohighlevel.com/support](https://developers.gohighlevel.com/support)

HighLevel API와 관련된 질문이 있으시면, 개발자 Slack 그룹에 가입하여 재능 있는 고객 커뮤니티에게 문의하세요: [https://developers.gohighlevel.com/join-dev-community](https://developers.gohighlevel.com/join-dev-community)

**HighLevel 개발팀은 매월 끝에서 두 번째 금요일에 Developer Council Call을 주최합니다. 이벤트 캘린더에서 확인할 수 있습니다: [https://www.gohighlevel.com/events](https://www.gohighlevel.com/events)**

Developer Marketplace, 문서, Slack 채널 등을 찾을 수 있는 [개발자 랜딩 페이지](https://developers.gohighlevel.com/)를 확인해 보세요! [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)

---

## HighLevel에 새 API 관련 아이디어 제출하는 방법

**참고사항**: 저희 API 문서는 공개적으로 사용 가능한 모든 엔드포인트를 나열합니다. 아래 나열된 API 개발자 사이트에서 엔드포인트를 찾을 수 없다면, [GitHub Issues 페이지](https://github.com/GoHighLevel/highlevel-api-docs)를 방문하여 요청을 제출하는 것을 권장합니다.

---

## **플랜 레벨별 API 접근 권한 차이**

기본 API 접근은 스타터 및 무제한 플랜에 포함되어 있으며, 고급 API 접근은 에이전시 프로 플랜에서 사용할 수 있습니다.

OAuth 2.0 API(고급 API 접근에서만 사용 가능)에서 출시될 향후 엔드포인트 외에도, 이 등급은 에이전시 API 키 사용을 잠금 해제합니다. 낮은 플랜 레벨은 로케이션 API 키만 접근할 수 있습니다.

![플랜별 API 접근 권한 차이점](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48227025193/original/qVjiLkUumrEo5aDB8Cjz8gbaVT_Y2E8mFg.jpg?1652973498)

---

## **API 1.0 및 API 2.0의 Rate Limit은?**

GHL은 최적의 성능과 안정성을 보장하기 위해 OAuth를 사용하는 퍼블릭 V2 API에 rate limit을 구현했습니다. 이 제한은 다음과 같이 조정되었습니다:

**Burst limit**: 각 마켓플레이스 앱(즉, 클라이언트)당 리소스(즉, 로케이션 또는 회사)당 10초에 최대 100개의 API 요청

**일일 제한**: 각 마켓플레이스 앱(즉, 클라이언트)당 리소스(즉, 로케이션 또는 회사)당 하루 200,000개의 API 요청

이러한 새로운 제한은 시스템의 전반적인 성능과 안정성 향상에 기여합니다.

제한된 사용량을 모니터링하려면 다음 API 응답 헤더를 참조하세요:

- **'X-RateLimit-Limit-Daily':** 일일 제한
- **'X-RateLimit-Daily-Remaining':** 하루 남은 요청 수
- **'X-RateLimit-Interval-Milliseconds'**: Burst 요청에 대한 시간 간격
- **'X-RateLimit-Max':** 지정된 시간 간격에서의 최대 요청 제한
- **'X-RateLimit-Remaining':** 현재 시간 간격에서 남은 요청 수

---

## **자주 묻는 질문**

**Q. HighLevel API는 무엇에 사용되나요?**

HighLevel API를 통해 개발자는 커스텀 통합을 구축하고, 워크플로우를 자동화하며, 외부 애플리케이션을 HighLevel 플랫폼과 연결할 수 있습니다. 연락처, 대화, 캘린더, 워크플로우, 결제 등을 위한 REST 엔드포인트를 제공합니다.

**Q. HighLevel에서 여전히 API V1을 지원하나요?**

아니요. HighLevel API V1은 지원 종료되었습니다. 기존 통합은 계속 작동할 수 있지만, 업데이트나 기술 지원은 제공되지 않습니다. 개발자는 지속적인 지원과 새로운 기능을 위해 API V2로 마이그레이션해야 합니다.

**Q. HighLevel API는 어떤 인증 방법을 지원하나요?**

HighLevel은 다음을 지원합니다:

- 내부 또는 단일 로케이션 통합을 위한 프라이빗 통합 토큰
- 퍼블릭 통합 및 사용자 승인이 필요한 마켓플레이스 앱을 위한 OAuth 2.0

**Q. 언제 프라이빗 통합 토큰 대신 OAuth 2.0을 사용해야 하나요?**

다음과 같은 경우 OAuth 2.0을 사용하세요:

- 퍼블릭 또는 마켓플레이스 앱을 구축할 때
- 여러 로케이션 또는 계정에 접근할 때
- 안전하고 사용자가 승인한 접근이 필요할 때

프라이빗 통합 토큰은 내부 도구나 단일 계정 사용 사례에 가장 적합합니다.

**Q. HighLevel의 API rate limit은 무엇인가요?**

HighLevel은 다음을 적용합니다:

- 리소스당 10초에 100개 요청
- 리소스당 하루 200,000개 요청

사용량 추적을 도와주는 rate limit 헤더가 API 응답에 포함됩니다.

**Q. HighLevel 지원팀에서 API 통합 구축이나 디버깅을 도와주나요?**

아니요. HighLevel 지원팀은 실무 API 개발이나 디버깅 지원을 제공하지 않습니다. 도움이 필요한 개발자는 다음을 해야 합니다:

- 공식 API 문서 검토
- HighLevel Developer Community에 가입
- Developer Support 포털을 통해 버그 신고

**Q. 공식 HighLevel API 문서는 어디서 찾을 수 있나요?**

공식 API 문서는 HighLevel Developer Marketplace에서 확인할 수 있습니다: [https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/)

**Q. 모든 HighLevel 플랜에서 API 접근이 가능한가요?**

API 접근은 플랜에 따라 다릅니다:

- 스타터 및 무제한: 기본 API 접근
- 에이전시 프로: OAuth 및 에이전시 레벨 토큰을 포함한 고급 API 접근

일부 엔드포인트는 상위 플랜에서만 사용할 수 있습니다.

**Q. 새 API 기능이나 엔드포인트는 어떻게 요청하나요?**

HighLevel API 문서의 공식 GitHub 저장소에서 이슈를 생성하여 API 기능 요청을 제출하거나 문서 문제를 신고할 수 있습니다.

**Q. HighLevel에서 SDK나 웹훅을 제공하나요?**

네. HighLevel은 실시간 이벤트 업데이트를 위한 웹훅을 제공하며, 특정 통합을 위한 SDK가 사용 가능하거나 지원됩니다. 지원되는 웹훅 이벤트 및 SDK 세부 정보는 API 문서를 참조하세요.

---

## 도움말 및 지원

HighLevel 지원팀은 실무 API 코딩 도움이나 설정 감사를 제공하지 않습니다. 문제가 발생한 경우:

**1. API 버그의 경우**

여기에서 직접 버그를 신고하세요: [https://developers.gohighlevel.com/support](https://developers.gohighlevel.com/support)

**2. 개발자 커뮤니티**

다른 개발자들과 협력하려면 HighLevel Dev Slack에 가입하세요: [https://developers.gohighlevel.com/join-dev-community](https://developers.gohighlevel.com/join-dev-community)

---
*원문 최종 수정: Wed, 4 Feb, 2026 at 7:34 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*