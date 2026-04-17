---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# Hyperclass API 문서

Hyperclass는 개발자가 Hyperclass CRM 및 마켓플레이스와 통합, 자동화, 커스텀 애플리케이션을 구축할 수 있는 포괄적인 API 플랫폼을 제공합니다. 저희 API는 연락처, 메시징, 워크플로우, 캘린더, 결제, 웹훅 등을 위한 REST 엔드포인트를 포함하고 있습니다.

**중요**: V1 API는 지원이 종료되었습니다.

기존 연결/연동은 계속 작동하지만, V1 API에 대한 지원은 더 이상 제공되지 않습니다.

V1에서 V2로 마이그레이션을 원하시나요? (수많은 새 기능과 보안 기능 포함)
[Private Integrations](../Private-Integrations/private-integrations-everything-you-need-to-know.md)를 확인해보세요.

참고 사항: 앞으로 새로운 API 키를 생성하는 기능이 에이전시 및 하위 계정 설정에서 제거될 예정입니다. 이 변경사항은 아직 API 키를 생성하지 않았거나 현재 사용하지 않는 계정에 적용됩니다.

---

## Hyperclass API 문서

Hyperclass API 문서는 **[https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/)**에서 확인하실 수 있습니다. 기존 Stoplight 문서를 사용하셨다면 북마크를 업데이트해주세요. Stoplight 문서는 향후 몇 개월 내에 중단될 예정입니다.

## Hyperclass API 도움말 및 지원 받는 방법

**중요**: 현재 Hyperclass 지원팀은 API 관련 주제에 대한 설정 코드 검토나 개발자 컨설팅 서비스를 제공하지 않습니다. 그러나 설정이 완료되고 올바른데도 오류가 지속된다면, 저희가 수정해야 할 API 버그를 발견했을 수 있습니다. 이 양식을 작성하여 버그를 신고할 수 있습니다: [https://developers.gohighlevel.com/support](https://developers.gohighlevel.com/support)

Hyperclass API와 관련된 모든 질문은 개발자 슬랙 그룹에 가입하여 재능 있는 고객 커뮤니티에 질문해보세요: [https://developers.gohighlevel.com/join-dev-community](https://developers.gohighlevel.com/join-dev-community)

**Hyperclass 개발팀은 매달 마지막 주 전 금요일에 Developer Council Call을 진행하며, 이벤트 캘린더에서 확인하실 수 있습니다: [https://www.gohighlevel.com/events](https://www.gohighlevel.com/events)**

개발자 마켓플레이스, 문서, 슬랙 채널 등을 찾을 수 있는 [개발자 랜딩 페이지](https://developers.gohighlevel.com/)를 확인해보세요: [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)

---

## Hyperclass에 새로운 API 관련 아이디어 제출하는 방법

**참고 사항**: 저희 API 문서는 공개적으로 사용 가능한 모든 엔드포인트를 나열하고 있습니다. 아래 나열된 API 개발자 사이트 중 어디에도 원하는 엔드포인트가 없다면, [GitHub Issues 페이지](https://github.com/GoHighLevel/highlevel-api-docs)에 방문하여 요청을 제출하시는 것을 권장합니다.

---

## **요금제별 API 접근 차이점**

기본 API 접근은 Starter 및 Unlimited 요금제에 포함되어 있으며, 고급 API 접근은 Agency Pro 요금제에서 사용할 수 있습니다.

저희 OAuth 2.0 API(고급 API 접근에서만 사용 가능)에서 향후 출시될 엔드포인트 외에도, 이 등급에서는 Agency API 키 사용이 가능하며, 하위 요금제는 Location API 키만 접근할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48227025193/original/qVjiLkUumrEo5aDB8Cjz8gbaVT_Y2E8mFg.jpg?1652973498)

---

## **API 1.0 및 API 2.0의 속도 제한은?**

GHL은 최적의 성능과 안정성을 보장하기 위해 OAuth를 사용하는 공용 V2 API에 속도 제한을 구현했습니다. 이러한 제한은 다음과 같이 조정되었습니다:

**버스트 제한**: 각 마켓플레이스 앱(즉, 클라이언트)당 리소스(즉, Location 또는 Company)별로 10초당 최대 100개의 API 요청.

**일일 제한**: 각 마켓플레이스 앱(즉, 클라이언트)당 리소스(즉, Location 또는 Company)별로 하루 200,000개의 API 요청.

이러한 새로운 제한은 저희 시스템의 전반적인 성능과 안정성 향상에 기여합니다.

제한된 사용량을 모니터링하려면 다음 API 응답 헤더를 참조하세요:

- **'X-RateLimit-Limit-Daily':** 일일 제한
- **'X-RateLimit-Daily-Remaining':** 하루 남은 요청 수
- **'X-RateLimit-Interval-Milliseconds'**: 버스트 요청의 시간 간격
- **'X-RateLimit-Max':** 지정된 시간 간격에서 최대 요청 제한
- **'X-RateLimit-Remaining':** 현재 시간 간격에서 남은 요청 수

---

## **자주 묻는 질문**

**Q. Hyperclass API는 무엇에 사용되나요?**

Hyperclass API를 통해 개발자는 커스텀 연동을 구축하고, 워크플로우를 자동화하며, 외부 애플리케이션을 Hyperclass 플랫폼과 연결할 수 있습니다. 연락처, 대화, 캘린더, 워크플로우, 결제 등을 위한 REST 엔드포인트를 제공합니다.

**Q. Hyperclass는 여전히 API V1을 지원하나요?**

아니요. Hyperclass API V1은 지원이 종료되었습니다. 기존 연동이 계속 작동할 수 있지만, 업데이트나 기술 지원은 제공되지 않습니다. 개발자는 지속적인 지원과 새로운 기능을 위해 API V2로 마이그레이션해야 합니다.

**Q. Hyperclass API는 어떤 인증 방법을 지원하나요?**

Hyperclass는 다음을 지원합니다:

- 내부 또는 단일 로케이션 연동을 위한 Private Integration Token
- 공개 연동 및 사용자 인증이 필요한 마켓플레이스 앱을 위한 OAuth 2.0

**Q. Private Integration Token 대신 OAuth 2.0을 언제 사용해야 하나요?**

다음의 경우 OAuth 2.0을 사용하세요:

- 공개 또는 마켓플레이스 앱을 구축할 때
- 여러 로케이션 또는 계정에 접근할 때
- 안전하고 사용자가 승인한 접근이 필요할 때

Private Integration Token은 내부 도구나 단일 계정 사용 사례에 가장 적합합니다.

**Q. Hyperclass의 API 속도 제한은 무엇인가요?**

Hyperclass는 다음을 적용합니다:

- 10초당 100개 요청 (리소스당)
- 하루 200,000개 요청 (리소스당)

사용량을 추적하는 데 도움이 되도록 API 응답에 속도 제한 헤더가 포함되어 있습니다.

**Q. Hyperclass 지원팀이 API 연동을 구축하거나 디버그하는 데 도움을 줄 수 있나요?**

아니요. Hyperclass 지원팀은 직접적인 API 개발이나 디버깅 지원을 제공하지 않습니다. 도움이 필요한 개발자는 다음을 해야 합니다:

- 공식 API 문서 검토
- Hyperclass Developer Community 가입
- 개발자 지원 포털을 통한 버그 신고

**Q. 공식 Hyperclass API 문서는 어디에서 찾을 수 있나요?**

공식 API 문서는 Hyperclass Developer Marketplace에서 확인할 수 있습니다: [https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/?utm_source=chatgpt.com)

**Q. 모든 Hyperclass 요금제에서 API 접근이 가능한가요?**

API 접근은 요금제에 따라 다릅니다:

- Starter 및 Unlimited: 기본 API 접근
- Agency Pro: OAuth 및 에이전시 수준 토큰을 포함한 고급 API 접근

일부 엔드포인트는 상위 요금제에서만 사용할 수 있습니다.

**Q. 새로운 API 기능이나 엔드포인트를 요청하려면 어떻게 해야 하나요?**

Hyperclass API 문서의 공식 GitHub 저장소에 이슈를 생성하여 API 기능 요청을 제출하거나 문서 문제를 신고할 수 있습니다.

**Q. Hyperclass는 SDK나 웹훅을 제공하나요?**

네. Hyperclass는 실시간 이벤트 업데이트를 위한 웹훅을 제공하며, 특정 연동을 위해 SDK가 제공되거나 지원됩니다. 지원되는 웹훅 이벤트와 SDK 세부사항은 API 문서를 참조하세요.

---

## 도움말 및 지원

Hyperclass 지원팀은 직접적인 API 코딩 도움이나 설정 검토를 제공하지 않습니다. 문제가 발생하면:

**1. API 버그의 경우**

여기서 직접 버그를 신고하세요: [https://developers.gohighlevel.com/support](https://developers.gohighlevel.com/support)

**2. 개발자 커뮤니티**

다른 개발자와 협업하기 위해 Hyperclass Dev Slack에 가입하세요: [https://developers.gohighlevel.com/join-dev-community](https://developers.gohighlevel.com/join-dev-community)

---
*원문 최종 수정: Wed, 4 Feb, 2026 at 7:34 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*