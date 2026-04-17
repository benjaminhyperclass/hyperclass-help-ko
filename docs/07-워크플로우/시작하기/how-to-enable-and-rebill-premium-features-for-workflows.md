---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# 워크플로우 프리미엄 기능 활성화 및 재청구 설정하기

- 모든 요금제의 에이전시($97, $970, $297, $2970, $497, $4970)에서 워크플로우 프리미엄 기능을 사용할 수 있습니다.
- 에이전시 설정에서 프리미엄 기능을 활성화하면, 기존 및 신규 하위 계정 모두에게 100회 무료 실행이 제공됩니다.
- 에이전시가 기존 하위 계정의 실행 비용 청구를 피하려면, 각 하위 계정에 대해 에이전시 뷰에서 재청구를 수동으로 활성화해야 합니다(자세히 보기).
- SaaS 구성기에서 프리미엄 기능이 활성화되면, 새로 생성되는 하위 계정은 자동으로 프리미엄 기능에 등록되며 에이전시에서 추가 작업이 필요하지 않습니다.

#### 이 가이드에서 다룰 내용:

- [프리미엄 기능이란?](#프리미엄-기능이란)
- [작동 원리](#작동-원리)
- [새로운 프리미엄 트리거](#새로운-프리미엄-트리거)
- [새로운 프리미엄 액션](#새로운-프리미엄-액션)
  - [Google Sheets](#google-sheets)
  - [Slack 알림](#slack-알림)
  - [커스텀 아웃바운드 웹훅](#커스텀-아웃바운드-웹훅)
  - [워크플로우 AI 액션](#워크플로우-ai-액션)
- [에이전시 레벨에서 프리미엄 기능 활성화하기](#에이전시-레벨에서-프리미엄-기능-활성화하기)
- [프리미엄 기능 요금](#프리미엄-기능-요금)
- [고객에게 비용 재청구하여 수익 창출하기](#고객에게-비용-재청구하여-수익-창출하기)
- [화이트라벨 고객 안내 자료](#화이트라벨-고객-안내-자료)

# 프리미엄 기능이란?

워크플로우를 한 단계 더 발전시키고 싶으신가요? 그렇다면 워크플로우 빌더에서 새로 출시된 프리미엄 기능을 확인해보세요!

프리미엄 기능을 사용하면 Zapier, Integromat, PabblyConnect와 같은 비싼 서드파티 자동화 도구 없이도 워크플로우를 외부 시스템이나 소프트웨어에 연결할 수 있는 고급 기능을 제공합니다.

프리미엄 기능을 통해 Slack이나 Google Sheets 같은 시스템을 워크플로우에 통합하고, 같은 프로세스 내에서 인바운드 웹훅 액션(POST 요청)을 받을 수 있습니다. 더 나은 점은 원하는 마크업으로 실행 비용을 고객에게 재청구할 수 있다는 것입니다.

# 작동 원리

## 새로운 프리미엄 트리거

### 인바운드 웹훅

인바운드 웹훅은 외부 시스템이 CRM으로 데이터를 자동으로 전송할 수 있게 해주는 강력한 기능입니다. 외부 시스템에서 이벤트가 발생할 때마다, 트리거와 연결된 특정 URL로 HTTP POST 요청을 보내 CRM에서 워크플로우를 실행할 수 있습니다. 이러한 실시간 데이터 전송 기능은 다른 시스템과 원활하게 통합하여 CRM의 기능을 향상시킵니다.

![인바운드 웹훅 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292559858/original/cYRkZ_IjqZd5rcJ7EdcH8swiLIrVl709ww.png?1681407524)

자세한 내용은 [이 가이드](../기타/how-to-use-the-inbound-webhook-workflow-premium-trigger-.md)를 참조하세요.

## 새로운 프리미엄 액션

### Google Sheets

Google Sheets 프리미엄 워크플로우 액션은 Google Sheets 문서 내에서 다양한 데이터 관리 작업을 자동화할 수 있는 강력한 도구입니다. 이 기능을 사용하면 복잡한 서드파티 통합 없이도 스프레드시트에서 행을 생성, 업데이트, 삭제, 조회할 수 있습니다. 자세한 내용과 사용 사례는 [이 도움말](../기타/how-to-use-the-google-sheets-premium-workflow-action-.md)을 참조하세요.

![Google Sheets 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284831431/original/Vj_bEdtOW00vB3IXlOjh1cGgQvEmxB5jdA.png?1677771535)

![Google Sheets 액션 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284831468/original/AdGnxfspm5w_VHER5ta3hEta4YC5xVqHIg.png?1677771546)

### Slack 알림

워크플로우 Slack 프리미엄 액션은 널리 사용되는 팀 협업 도구인 Slack 내에서 메시징을 자동화하고 간소화하도록 설계된 고급 커뮤니케이션 기능입니다. 이 기능을 통해 Slack 워크스페이스 내의 특정 사용자, 비공개 또는 공개 채널에 타겟팅된 메시지를 보낼 수 있습니다.

이 액션은 세 가지 주요 이벤트를 제공합니다:

- 사용자에게 메시지 보내기: 할당된 사용자(Assigned User), 커스텀 이메일(Custom Email), 내부 사용자(Internal User), Slack 사용자(Slack User) 중에서 선택하여 올바른 사람에게 직접 메시지를 보낼 수 있습니다.
- 비공개 채널에 메시지 보내기: 워크스페이스 내의 비공개 채널을 선택하여 메시지를 보낼 수 있으며, Slack 통합을 생성한 사용자가 수동으로 보낸 것처럼 표시됩니다.
- 공개 채널에 메시지 보내기: 워크스페이스 내의 공개 채널을 선택하여 메시지를 브로드캐스트할 수 있어, 모든 워크스페이스 구성원이 정보에 접근할 수 있습니다.

자세한 내용과 사용 사례는 [이 가이드](../기타/how-to-use-the-workflow-slack-premium-action-.md)를 참조하세요.

![Slack 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284832615/original/kk6QAPn7uQtGZqrVm7ii8IeuaSaTzK3oyQ.png?1677771709)

![Slack 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284832678/original/utTwaKhXUc6GWt_-UGhk3GrVrEqgBuYxDg.png?1677771721)

### 커스텀 아웃바운드 웹훅

커스텀 웹훅 프리미엄 액션은 CRM 시스템과 서드파티 서비스 간의 실시간 통신을 가능하게 하는 강력하고 유연한 기능입니다. 다양한 HTTP 및 인증 방법을 사용하여 지정된 URL에 커스텀 데이터 요청을 구성하고 전송할 수 있습니다. 이 기능은 헤더, 쿼리 매개변수 추가 및 커스텀 값 매핑을 지원하여 요구사항에 맞는 맞춤형 요청 구조를 생성할 수 있습니다.

자세한 내용과 사용 사례는 [이 가이드](../기타/how-to-use-the-custom-webhook-lc-premium-workflow-action-.md)를 참조하세요.

![커스텀 웹훅 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284833052/original/Du3HM8O-Ni4054Et_SYkfi_VhJYAU36JbA.png?1677771800)

![커스텀 웹훅 상세 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284833213/original/hyb3T5jD4N6pEAQLkprCzCA_irzy6d__ug.png?1677771810)

### 워크플로우 AI 액션

인공지능을 활용하여 비즈니스 프로세스를 향상시키는 혁신적인 도구인 워크플로우 AI 프리미엄 액션을 소개합니다. 콘텐츠 생성, 이메일 작성, 의도 인식 등 다양한 작업에 AI의 힘을 활용하여 워크플로우에 AI를 원활하게 통합할 수 있습니다. 워크플로우에서 자동화와 개인화의 새로운 차원을 열어 비즈니스 운영 전반에서 응답성과 맥락성을 보장합니다. [이 가이드](../기타/how-to-configure-the-workflow-ai-action-.md)에서 자세한 내용을 확인하세요.

![워크플로우 AI 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049490023/original/zFAi3ABFAsPjsNtVS7yeysXqhE5sxCCXCg.png?1751956064)

# 에이전시 레벨에서 프리미엄 기능 활성화하기

- 전체 에이전시(모든 하위 계정 포함)에 대해 프리미엄 기능을 활성화하려면, 에이전시 레벨 > Settings(설정) > Company(회사) > Workflow - Premium Features(워크플로우 - 프리미엄 기능)으로 이동하여 토글을 활성화하세요.

![프리미엄 기능 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285114992/original/Ry-x4lNK-3-6bng0t5zJbCbzRkki8OLSpA.gif?1677857880)

- Agency Settings(에이전시 설정) > Workflows - Premium Features(워크플로우 - 프리미엄 기능)에서 각 하위 계정에 대한 프리미엄 기능이나 재청구를 활성화하거나 비활성화할 수 있습니다. 하위 계정 설정은 에이전시 레벨에서 프리미엄 기능이 활성화된 경우에만 접근할 수 있습니다.

![하위 계정 프리미엄 기능 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050568427/original/P8B2ebwS7ZxlfHJ7FvpWwSEdHAR4mnUVwQ.png?1753772739)

참고사항: 모든 요금제의 에이전시($97, $970, $297, $2970, $497, $4970)에서 프리미엄 기능에 접근할 수 있습니다.

# 프리미엄 기능 요금

- 에이전시 설정을 통해 프리미엄 액션과 트리거가 활성화되면, 기존 및 신규 하위 계정은 100회 무료 실행을 받습니다.
- 100회 무료 실행이 소진되면, 재청구가 활성화되지 않은 한 모든 하위 계정 사용에서 각 실행마다 에이전시 지갑에서 $0.01가 차감됩니다.

# 고객에게 비용 재청구하여 수익 창출하기

($497 SaaS 에이전시만 해당)

에이전시 계정에서 프리미엄 기능을 활성화하면, 모든 고객이 자동으로 사용할 수 있게 됩니다.

원가로 고객에게 청구하거나 추가 마크업을 적용할 수 있습니다.

## 고객에게 재청구를 활성화하는 방법

- 먼저 에이전시에 대해 프리미엄 기능이 활성화되어 있는지 확인하세요.
- 하위 계정이 아직 SaaS 모드가 아니라면, 에이전시 계정 > Accounts(계정) 탭 > 하위 계정으로 스크롤 > 점 세 개 아이콘 클릭 후 "Switch to SaaS(SaaS로 전환)" 선택하여 하위 계정을 SaaS 모드로 전환하세요.
- 에이전시 계정 > Accounts(계정) 탭 > 하위 계정으로 스크롤 > View Details(상세 보기) 링크 클릭 > Premium Features for Workflow Re-Sell Settings(워크플로우 프리미엄 기능 재판매 설정) 섹션으로 스크롤하여 토글을 켜세요.
- 슬라이더를 사용하여 원하는 마크업 금액을 설정하고 저장하세요!
- 재청구를 원하는 모든 하위 계정에 대해 이 과정을 반복하세요.

![재청구 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051124188/original/mPFAp7BbVDLH7iiTmnDrEu04p4oPe-93aQ.png?1754572254)

## 재청구 예시

아래 이미지는 프리미엄 기능이 비활성화된 경우로, 무료 100회 실행 이후 에이전시가 실행 비용을 지불합니다.

![재청구 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051123417/original/SJwXKGSxhWHaNiHXnj2YSS45XFzeazmFtA.png?1754571934)

이 경우 재청구가 활성화되었지만 마크업이 없습니다. 에이전시가 고객에게 비용을 전가할 수는 있지만 수익(마진)은 발생하지 않습니다.

![재청구 활성화, 마크업 없음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051123863/original/_Ra_qLfLd3RE-zv1M15W0QaVCZtmruwJZw.png?1754572085)

이 경우 재청구가 활성화되었고 5배 마크업이 적용되었습니다. 에이전시는 500% 마진을 가지며 고객이 $1을 소비할 때마다 $4를 벌어들입니다.

![5배 마크업 적용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051123950/original/Htt4OLNfG5KxvZjbWLxVFGtTyLcTJMDjdA.png?1754572125)

## 재청구 작동 방식

- 에이전시는 HighLevel에 결제하고 HighLevel 브랜딩의 인보이스를 받습니다
- 하위 계정(고객)은 에이전시에 결제하고 에이전시 브랜딩의 인보이스를 받습니다. 결제 금액은 에이전시 레벨에 연결된 Stripe 계정에 입금됩니다.

이는 플랫폼의 다른 재청구/재판매 모델 제품과 매우 유사합니다. LC Phone이나 LC Email 재청구처럼, 프리미엄 워크플로우 액션의 재청구도 에이전시 지갑과 로케이션 지갑의 "크레딧"을 각각 활용합니다.

![재청구 작동 원리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284822559/original/irKDZVwLE-ObhLu4z1YZborho0yAeNLjAg.jpg?1677769882)

# 화이트라벨 고객 안내 자료

[고객용 화이트라벨 가이드](https://share-docs.clickup.com/8631005/d/h/87cpx-81404/c965877bd0063d8/87cpx-73044)

관련 가이드:
- [인바운드 웹훅 트리거](https://help.leadconnectorhq.com/support/solutions/articles/48001237402-how-to-use-the-inbound-webhook-workflow-premium-trigger-)
- [Google Sheets 액션](../기타/how-to-use-the-google-sheets-premium-workflow-action-.md)
- [커스텀 웹훅 액션](https://help.leadconnectorhq.com/support/solutions/articles/48001238168-how-to-use-the-custom-webhook-lc-premium-workflow-action-)
- [Slack 액션](https://help.leadconnectorhq.com/support/solutions/articles/48001238248-how-to-use-the-workflow-slack-premium-action-)
- [날짜/시간 포맷터 액션](https://help.leadconnectorhq.com/support/solutions/articles/48001238250-how-to-use-the-date-time-formatter-premium-workflow-action-)
- [숫자 포맷터 액션](https://help.leadconnectorhq.com/support/solutions/articles/48001238737-how-to-use-the-number-formatter-premium-action-)

---
*원문 최종 수정: Thu, 7 Aug, 2025 at 8:11 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*