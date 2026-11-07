---
원문: https://help.gohighlevel.com/support/solutions/articles/48001230403-pause-resume-sub-accounts
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# 서브 계정 일시중지와 재개

에이전시는 SaaS 서브 계정을 일시중지하고 다시 재개할 수 있어요. SaaS(Software as a Service) 고객이 결제를 하지 않으면 해당 계정을 일시중지(사용 중지)할 수 있습니다.

일시중지된 계정은 결제가 끝날 때까지 소프트웨어의 서비스와 기능을 쓸 수 없어요. SaaS 고객은 요금을 결제하면 일시중지된 계정을 직접 재개할 수 있어요. 일반 고객은 에이전시가 직접 계정을 재개해야 해요.

## SaaS·일반 서브 계정 일시중지하기

{% hint style="info" %}
이 기능은 **에이전시 관리자**만 쓸 수 있어요.
{% endhint %}

### 자동으로 일시중지하기 (SaaS 서브 계정만 가능)

SaaS 구독료가 결제되지 않으면 서브 계정이 자동으로 일시중지되도록 설정할 수 있어요.

SaaS 고객의 구독 결제가 실패했을 때, 에이전시는 다음 중 하나를 선택할 수 있어요.

1. 해당 서브 계정을 일시중지한다.
2. 서브 계정을 그대로 운영한다.

이 설정은 에이전시 왼쪽 메뉴의 **SaaS 구성기 > Suspend Sub-Accounts when their SAAS subscription fails**(SaaS 구독이 실패하면 서브 계정 정지)에서 바꿀 수 있어요.

![SaaS 구독 실패 시 서브 계정 정지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279495262/original/bn9yS0-FSwItHURYBLLu8i6ZNaUA73K8vg.png?1675418944)

이 설정을 켜면 SaaS 구독 결제가 실패한 고객의 서브 계정이 일시중지돼요.

#### 구독 결제 실패는 어떤 경우를 말하나요?

고객이 요금을 내지 않아서 Stripe에서 구독 상태가 `canceled`, `past_due`, `incomplete_expired`, `incomplete` 중 하나로 바뀌면 구독 결제가 실패한 것으로 봐요. Stripe 구독 상태가 어떻게 동작하는지는 [Stripe 도움말](https://stripe.com/docs/billing/subscriptions/overview)을 참고하세요.

### 직접 일시중지하기 (SaaS·일반 서브 계정 모두 가능)

1. 에이전시 왼쪽 메뉴에서 **서브 계정**을 선택해요.
2. 일시중지할 서브 계정을 찾아 스크롤해요.
3. 서브 계정 이름을 클릭하거나, 맨 오른쪽의 점 세 개 > **고객 관리**를 클릭해요.

   ![서브 계정 목록에서 고객 관리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276497543/original/ff3bifD55IwfokW2doROhVdNqRdIXcem6A.png?1674141558)

4. 오른쪽의 **작업** 드롭다운에서 **서브 계정 일시중지**를 선택해요.

   ![작업 드롭다운에서 서브 계정 일시중지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276513268/original/8pwu5w0kSGoJg-T4l38kVdXTMOdT8Rsd3g.png?1674143962)

5. 확인 창이 나타나면 체크박스를 선택하고 **서브 계정 일시중지**를 클릭해요.

   ![일시중지 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276513790/original/VLSuzvGuzH7P0xLe_uG1jRrSi2N3WaZdfw.png?1674144047)

몇 초 안에 서브 계정이 일시중지되고, 이 화면에 일시중지되었다는 배너가 표시돼요.

![일시중지 배너가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276514041/original/sgg75asyWZnxZQ9ni6CQdE_u2P3rgFV11A.png?1674144112)

**에이전시 관리자**는 일시중지된 계정에도 평소처럼 로그인할 수 있어요. 배너는 그대로 표시되지만, 에이전시 관리자는 계정을 문제없이 쓸 수 있어요.

![에이전시 관리자가 로그인한 일시중지 계정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276514288/original/eM02iMNC7vO9bPNcplkpKrOAp1QuhVS5SQ.png?1674144188)

고객이 서브 계정에 접속하면 SaaS 고객인지 아닌지에 따라 두 가지 중 한 가지 안내 화면이 표시돼요. 자세한 내용은 아래에서 확인하세요.

---

## 서브 계정이 일시중지되면 고객의 관리자와 사용자에게 무엇이 보이나요?

서브 계정이 일시중지되면 그 서브 계정에 연결된 **클라이언트 포탈**이 열리지 않아요.

서브 계정을 재개하면 별도 설정 없이 **클라이언트 포탈**에 다시 접속할 수 있어요.

### SaaS 고객의 구독 결제가 실패한 경우

고객에게 SaaS 구독을 다시 활성화하는 화면이 표시돼요.

1. 서브 계정 사용자는 결제 수단을 추가하거나 관리할 수 없어요. 결제 정보 업데이트는 서브 계정 관리자(또는 에이전시)에게 요청해야 해요.

   ![사용자에게 표시되는 결제 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064708290/original/A69ZaVfOTFcxxpBz22ghIGYe0aESe9tOKA.png?1770824679)

2. 서브 계정 관리자는 계속 이용하는 데 결제 수단이 필요하면 결제 수단을 업데이트할 수 있어요.

SaaS 구독을 다시 활성화하면 서브 계정이 자동으로 재개돼요.

![SaaS 구독 재활성화 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276515744/original/T5dI3-7fqGDbDc0Es_c1RTmFDufc9dmAdw.png?1674144478)

![SaaS 구독 재활성화 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276518659/original/__75gO2Ql-vBJqfS8DZsGeul04QzMl5IhA.png?1674145008)

![SaaS 구독 재활성화 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276517935/original/wEXEwiSr14NPPdyGdJKOadGCjRxCllvjzQ.png?1674144867)

### 일반(비 SaaS) 고객이거나, SaaS 고객이지만 구독 결제가 실패하지 않은 경우

고객에게 에이전시에 연락해 상황을 해결하라는 화면이 표시돼요. 이 화면에는 에이전시 **설정 > 회사** 페이지에 등록된 전화번호와 이메일이 사용돼요.

![에이전시에 문의하라는 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276522592/original/wCL7YdwDAZlIqZE-pRXmBnxeL6BESB-cQg.png?1674145778)

---

## 서브 계정 재개하기

에이전시 관리자는 언제든 서브 계정을 재개할 수 있어요.

1. 에이전시 왼쪽 메뉴에서 **서브 계정**을 선택해요.
2. **일시 중지** 상태인 서브 계정을 찾아요.
3. 서브 계정 이름을 클릭하거나, 맨 오른쪽의 점 세 개를 클릭한 다음 **고객 관리**를 선택해요.

   ![일시중지된 서브 계정의 고객 관리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276524523/original/VL9IfVISchwMDUoPuiU0ZYMRjPtOXwCYYA.png?1674146167)

4. **작업** 드롭다운에서 **Resume Sub-account**(서브 계정 재개)를 클릭해요.

   ![작업 드롭다운에서 서브 계정 재개 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276525747/original/mpu5hvMPCSZKd0UBuQrtHzlwrEPy_ojTFw.png?1674146407)

5. 확인 창이 나타나면 필수 체크박스를 선택하고 **Resume Sub Account**를 클릭해요.

   ![재개 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48276526043/original/b3Gbt1hyxteCr8eBinkjFDEwixZ9T6Kx2A.png?1674146461)

---

## 자주 묻는 질문

### 서브 계정이 일시중지되면 자동화, 캘린더, 메시지 등은 어떻게 되나요? 전부 멈추나요?

- 서브 계정이 일시중지되면 그 안의 워크플로우가 모두 초안 상태로 바뀌어요. 계정을 재개한 뒤 고객이 워크플로우를 다시 게시해야 할 수 있어요.
- 나머지 기능은 평소처럼 계속 작동해요. 달라지는 점은 고객에게 구독을 업데이트하거나 등록된 에이전시에 문의하라는 안내가 표시된다는 것뿐이에요.
  - [SaaS 고객의 구독 결제가 실패한 경우](pause-resume-sub-accounts.md)
  - [일반(비 SaaS) 고객이거나, SaaS 고객이지만 구독 결제가 실패하지 않은 경우](pause-resume-sub-accounts.md)
