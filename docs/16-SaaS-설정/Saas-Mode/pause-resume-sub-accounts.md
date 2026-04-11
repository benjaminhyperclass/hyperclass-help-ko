---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# 하위 계정 일시정지/재개하기

에이전시는 이제 SAAS 하위 계정(Sub-Account)을 "일시정지"하고 "재개"할 수 있습니다. SaaS(Software as a Service) 고객이 결제를 하지 않을 경우, 해당 계정을 일시정지(비활성화)할 수 있어요.

이는 결제가 완료될 때까지 소프트웨어의 서비스나 기능에 접근할 수 없다는 의미입니다. SAAS 고객이 일시정지된 계정을 재개하는 방법은 미납 요금을 결제하는 것입니다. 일반 고객의 경우, 수동으로 계정을 재개해야 해요.

#### 이 글에서 다루는 내용:

#### [SAAS/일반 하위 계정 일시정지하는 방법](#saas일반-하위-계정-일시정지하는-방법)

#### [자동으로 (SAAS 하위 계정만 적용)](#자동으로-saas-하위-계정만-적용)

#### [구독 실패란 무엇인가요?](#구독-실패란-무엇인가요)

#### [수동으로 (SAAS와 일반 하위 계정 모두 적용)](#수동으로-saas와-일반-하위-계정-모두-적용)

#### [하위 계정이 일시정지되면 고객의 관리자와 사용자는 무엇을 보나요?](#하위-계정이-일시정지되면-고객의-관리자와-사용자는-무엇을-보나요)

#### [구독 실패가 있는 SaaS 고객의 경우](#구독-실패가-있는-saas-고객의-경우)

#### [일반(non-SaaS) 고객이거나 SaaS 고객에게 구독 실패가 없는 경우](#일반non-saas-고객이거나-saas-고객에게-구독-실패가-없는-경우)

#### [하위 계정 재개하기](#하위-계정-재개하기)

#### [자주 묻는 질문](#자주-묻는-질문)

#### ['일시정지된' 하위 계정의 자동화, 캘린더, 메시징 등은 어떻게 되나요? 모든 것이 정지되나요?](#일시정지된-하위-계정의-자동화-캘린더-메시징-등은-어떻게-되나요-모든-것이-정지되나요)

## SAAS/일반 하위 계정 일시정지하는 방법

참고사항

이 기능은 에이전시 관리자(Agency Admin)만 사용할 수 있습니다.

### 자동으로 (SAAS 하위 계정만 적용)

에이전시는 SaaS 구독료가 미납된 경우 하위 계정을 자동으로 일시정지할 수 있어요.

SaaS 고객의 구독이 실패했을 때, 에이전시는 다음 중 하나를 선택할 수 있습니다:

- 하위 계정 일시정지하기
- 계속 운영하기

이 설정은 에이전시 사이드바(Agency Sidebar) > SAAS Configurator > Suspend Sub-Accounts when their SAAS subscription fails(SAAS 구독 실패 시 하위 계정 정지)에서 제어할 수 있습니다.

![SAAS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279495262/original/bn9yS0-FSwItHURYBLLu8i6ZNaUA73K8vg.png?1675418944)

이 설정을 활성화하면 SaaS 구독이 실패했을 때 고객 하위 계정이 일시정지됩니다.

#### 구독 실패란 무엇인가요?

구독이 실패했다는 것은 고객이 결제하지 않아서 Stripe에서 구독 상태가 canceled, past_due, incomplete_expired, incomplete로 변경된 경우를 말합니다. Stripe 구독 상태가 어떻게 작동하는지 알아보려면 이 [Stripe 도움말 문서](https://stripe.com/docs/billing/subscriptions/overview)를 참고하세요.

### 수동으로 (SAAS와 일반 하위 계정 모두 적용)

에이전시 사이드바의 하위 계정(Sub-Accounts) 탭으로 이동하세요. 일시정지하고 싶은 하위 계정까지 스크롤합니다.

계정 이름을 클릭하거나 오른쪽 끝의 점 세 개 > Manage Client(클라이언트 관리)를 클릭하세요.

![하위 계정 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276497543/original/ff3bifD55IwfokW2doROhVdNqRdIXcem6A.png?1674141558)

오른쪽의 Actions(작업) 드롭다운 > Pause Sub-Account(하위 계정 일시정지)로 이동하세요.

![작업 드롭다운 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276513268/original/8pwu5w0kSGoJg-T4l38kVdXTMOdT8Rsd3g.png?1674143962)

확인을 요청하는 창이 나타납니다. 체크박스를 선택하고 Pause Sub Account(하위 계정 일시정지)를 클릭하여 진행하세요.

![일시정지 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276513790/original/VLSuzvGuzH7P0xLe_uG1jRrSi2N3WaZdfw.png?1674144047)

몇 초 안에 하위 계정이 일시정지됩니다. 이 창에 일시정지됨을 나타내는 배너가 추가돼요:

![일시정지 배너](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276514041/original/sgg75asyWZnxZQ9ni6CQdE_u2P3rgFV11A.png?1674144112)

에이전시 관리자는 여전히 해당 계정에 평소처럼 로그인할 수 있어요. 배너는 표시되지만, 에이전시 관리자로서 계정 사용에는 문제가 없습니다.

![관리자 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276514288/original/eM02iMNC7vO9bPNcplkpKrOAp1QuhVS5SQ.png?1674144188)

고객이 하위 계정에 접근하려고 하면, SAAS 고객인지 여부에 따라 두 가지 메시지 중 하나를 화면에서 보게 됩니다(자세한 내용은 아래 참고).

## 하위 계정이 일시정지되면 고객의 관리자와 사용자는 무엇을 보나요?

하위 계정이 일시정지되면 해당 하위 계정에 연결된 클라이언트 포털(Client Portal)**이 열리지 않습니다**.

하위 계정을 재개하면 추가 설정 없이 클라이언트 포털 접근이 복구됩니다.

### 구독 실패가 있는 SaaS 고객의 경우

고객은 SaaS 구독을 재활성화하는 화면을 보게 됩니다.

1. 하위 계정 **사용자**는 결제 방법을 추가하거나 관리할 수 없습니다. 결제 업데이트를 완료하려면 하위 계정 **관리자**(또는 에이전시)에게 연락해야 합니다.

![사용자 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064708290/original/A69ZaVfOTFcxxpBz22ghIGYe0aESe9tOKA.png?1770824679)

2. 하위 계정 **관리자**는 계속 사용하기 위해 결제 방법이 필요한 경우 결제 방법을 업데이트할 수 있습니다.

SaaS 구독을 재활성화하면 하위 계정이 자동으로 재개됩니다.

![관리자 재활성화 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276515744/original/T5dI3-7fqGDbDc0Es_c1RTmFDufc9dmAdw.png?1674144478)

![관리자 재활성화 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276518659/original/__75gO2Ql-vBJqfS8DZsGeul04QzMl5IhA.png?1674145008)

![관리자 재활성화 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276517935/original/wEXEwiSr14NPPdyGdJKOadGCjRxCllvjzQ.png?1674144867)

### 일반(non-SaaS) 고객이거나 SaaS 고객에게 구독 실패가 없는 경우

고객은 상황을 해결하기 위해 에이전시에 연락하라는 화면을 보게 됩니다. 에이전시 > Settings(설정) > Company(회사) 페이지의 전화번호와 이메일을 사용합니다.

![일반 고객 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276522592/original/wCL7YdwDAZlIqZE-pRXmBnxeL6BESB-cQg.png?1674145778)

## 하위 계정 재개하기

에이전시 관리자는 언제든지 에이전시 사이드바(Agency Sidebar) > Sub-Accounts(하위 계정) > 일시정지된 계정으로 이동하여 하위 계정을 재개할 수 있습니다.

그 다음 계정 이름을 클릭하거나 오른쪽 끝의 점 세 개를 클릭한 후 Manage Client(클라이언트 관리)를 클릭하세요:

![하위 계정 재개 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276524523/original/VL9IfVISchwMDUoPuiU0ZYMRjPtOXwCYYA.png?1674146167)

그 다음 Actions(작업) 드롭다운으로 이동하여 Resume Sub-account(하위 계정 재개)를 클릭하세요:

![하위 계정 재개 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276525747/original/mpu5hvMPCSZKd0UBuQrtHzlwrEPy_ojTFw.png?1674146407)

확인을 요청하는 창이 나타납니다. 필수 체크박스를 선택한 후 Resume Sub Account(하위 계정 재개)를 클릭하세요:

![재개 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276526043/original/b3Gbt1hyxteCr8eBinkjFDEwixZ9T6Kx2A.png?1674146461)

# 자주 묻는 질문

### '일시정지된' 하위 계정의 자동화, 캘린더, 메시징 등은 어떻게 되나요? 모든 것이 정지되나요?

- 하위 계정이 일시정지되면 해당 계정의 모든 워크플로우(Workflow)가 초안(Draft) 상태가 됩니다. 계정이 재개된 후 고객이 다시 발행(Publish)해야 할 수 있어요.
- 하위 계정의 나머지 모든 것은 평상시처럼 계속 작동합니다. 유일한 변화는 고객들이 이제 구독을 업데이트하거나 등록된 에이전시에 연락하라는 안내를 받게 된다는 것입니다.

---
*원문 최종 수정: Wed, 11 Feb, 2026 at 9:46 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*