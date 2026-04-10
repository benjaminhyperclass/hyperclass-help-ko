---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 하위 계정 SaaS 플랜 업그레이드/다운그레이드 방법

Pro 플랜을 사용 중이고 SaaS 모드의 하위 계정이 있다면, 3가지 SaaS 플랜 중 어느 것이든 활성화할 수 있습니다. 시스템에서 SaaS 플랜에 추가되면, 구독은 Stripe 수준에서 관리됩니다. 고객이 직접 구독을 업그레이드(만)할 수 있도록 설정을 켤 수 있습니다. 관리자 측에서 계정을 업그레이드/다운그레이드해야 한다면 Stripe에서 직접 해야 합니다.

## **하위 계정의 SaaS 플랜 업그레이드/다운그레이드란?**

SaaS 플랜 업그레이드 또는 다운그레이드를 통해 에이전시나 고객이 HighLevel 하위 계정을 다른 구독 등급으로 이동할 수 있습니다. 이는 청구, 기능 접근 권한, 사용 한도에 영향을 미칩니다. 누가 플랜을 변경할 수 있는지, 언제 요금이 부과되는지, 특정 플랜이 나타나는(또는 나타나지 않는) 이유를 이해하면 관리자와 고객 모두 예상치 못한 상황을 피할 수 있습니다.

## 업그레이드/다운그레이드 SaaS 플랜의 주요 장점

- **매출 성장:** Company Billing(회사 청구) 내에서 셀프 서비스 업그레이드를 활성화하면 고객이 필요한 순간 더 많은 기능에 액세스할 수 있습니다.

- **청구 정확성:** 비례 배분 규칙을 통해 고객이 플랜을 변경할 때 공정하게 요금을 부과하거나 크레딧을 제공받습니다.

- **기능 제어:** 플랜 기반 권한을 통해 변경사항이 적용되는 즉시 기능이 추가되거나 제거됩니다.

- **이탈률 감소:** 다운그레이드 이유와 선택적 할인 제안을 통해 취소 위험에 있는 고객을 유지할 수 있습니다.

- **운영 명확성:** 명확한 카테고리/레벨 설정과 Stripe 상품 정렬로 누락되거나 잘못된 플랜 옵션을 방지합니다.

## 모든 고객/하위 계정이 직접 플랜을 변경할 수 있도록 허용하는 방법

에이전시는 이제 SaaS 고객이 회사 청구 페이지에서 SaaS 구독을 업그레이드할 수 있도록 허용할 수 있습니다. 이 설정은 Agency SaaS Configurator(에이전시 SaaS 구성기)에서 제어됩니다.

참고: 이 설정은 향후 SaaS 구성기를 사용하여 생성될 **모든 SaaS 계정**에 적용됩니다.

- **Agency(에이전시)** 계정에 로그인합니다.

- **SaaS Configurator(SaaS 구성기)**를 클릭합니다.

- **Advanced Settings(고급 설정)** 탭을 클릭합니다.

![고급 설정 탭](https://jumpshare.com/share/xv1OPqX0ZwCnrfFityhe+/Screen+Shot+2025-12-09+at+7.29.16+PM.png)

- **Allow sub-account admins to upgrade their subscription(하위 계정 관리자가 구독을 업그레이드할 수 있도록 허용)** 옵션을 활성화합니다.

- 업그레이드 시 고객에게 새로운 기능과 앱에 대한 액세스를 즉시 제공하고 싶다면 Add New Plans Features and Apps Upon Upgrading(업그레이드 시 새 플랜 기능 및 앱 추가) 옵션을 활성화합니다.

![업그레이드 설정](https://jumpshare.com/share/XM23h8d2Cq8inOMAS2Hr+/Screen+Shot+2025-12-09+at+8.00.58+PM.png)

## **특정 고객/하위 계정이 직접 플랜을 변경할 수 있도록 허용하는 방법**

이 설정은 다음 경로로 고객별로 개인화할 수도 있습니다:

- 에이전시 계정에 로그인합니다.

- **Sub-accounts(하위 계정)**를 클릭합니다.

- 셀프 서비스 플랜 업그레이드를 활성화하려는 하위 계정에 대해 **Three Dots(점 3개)** > **Manage Client(고객 관리)**를 클릭합니다.

![고객 관리](https://jumpshare.com/share/rVRGLPVrZWBJ1eZiMlXw+/Screen+Shot+2025-12-09+at+8.12.08+PM.png)

- **Allow sub-account admins to upgrade their subscription(하위 계정 관리자가 구독을 업그레이드할 수 있도록 허용)** 옵션을 활성화합니다.

- 업그레이드 시 고객에게 새로운 기능과 앱에 대한 액세스를 즉시 제공하고 싶다면 Add New Plans Features and Apps Upon Upgrading(업그레이드 시 새 플랜 기능 및 앱 추가) 옵션을 활성화합니다.

![개별 고객 설정](https://jumpshare.com/share/tFgldzrcAp6bsYEORmyr+/Screenshot+2025-12-09+at+8.08.11%E2%80%AFPM.png)

## **고객/하위 계정이 구독을 업그레이드하는 방법**

- 하위 계정에 로그인합니다.

- Settings(설정) > Company Billing(회사 청구)로 이동합니다.

![회사 청구](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060236383/original/Y9q2Uq2hSKlLAnk2V2fnBESOlVoeW1IxWA.png?1765292095)

- **Upgrade(업그레이드)**를 클릭합니다.

![업그레이드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060236426/original/kNndbG7aeuo39PgK2NDdrM2htx9BaHwRhg.png?1765292134)

- 원하는 플랜을 선택합니다.

![플랜 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060236668/original/PA1QyQasuchZqKo6CZqlMkTHULfeNbvy4A.png?1765292284)

- 원하는 플랜을 선택하면 확인 메시지가 표시되며, 생성된 플랜의 월간 및 연간 옵션 중에서 선택할 수 있습니다:

![플랜 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283852490/original/kFYGhwqxIrVkK_C_8uqXFaTt6SBcEmhZZQ.png?1677442334)

- Confirm & Pay(확인 및 결제)를 클릭하면 요금이 청구되고, 해당 플랜과 관련된 기능을 계정에서 활성화할 수 있습니다.

![결제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283852530/original/RMElQ7DTY-E66queGSyUWLBgJ01MOLS23A.png?1677442426)

## 관리자 측에서 SaaS 플랜을 변경하는 방법:

이 예시에서는 Standard, Professional, Premium의 3가지 SaaS 플랜이 있습니다. 각 상위 플랜은 더 많은 기능을 제공합니다.

![SaaS 플랜](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179188952/original/xg82nBBNc8zEEx0Q6jvtLt240q4mCO6EIg.png?1642180292)

기본 기능만 있는 Standard 플랜의 하위 계정이 있습니다.

![현재 플랜](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179189995/original/MTfPSGTUV_DzOktBCvriVc4ymTDBR-Oc6Q.png?1642180555)

이 하위 계정을 Professional 플랜으로 업그레이드하려면 Stripe 계정으로 이동하여 이 하위 계정과 연결된 고객을 열어야 합니다.

### Stripe 고객 찾기

고객의 이메일을 사용해 Stripe에서 고객을 검색할 수 있습니다. 하지만 권장되는 방법은 이 하위 계정의 인보이스 ID를 검색하여 고객 ID를 가져오는 것입니다.

1. Subaccount Settings(하위 계정 설정) > Company Billing(회사 청구)으로 이동하고 Billing History(청구 내역)에 표시된 인보이스의 "View(보기)"를 클릭합니다.

![인보이스 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179191623/original/YgHpXmm6kMJ-ZXFtH_ampYMSw6Qq10CdJQ.png?1642180932)

2. 인보이스 번호를 복사합니다.

![인보이스 번호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179191948/original/28_J0a_IQe8l30wGT2UWHt0iDyTkxAwCqQ.png?1642181036)

3. Stripe에서 인보이스 번호를 검색하고 인보이스를 클릭하여 세부 정보를 엽니다.

![Stripe 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179192675/original/IxhpfGaIOK5uxgGt3WgUba37jlPIW6ybQg.png?1642181198)

4. 인보이스의 'Billed to(청구 대상)' 열에 표시된 고객 이메일을 클릭하면 Stripe의 고객 프로필로 이동합니다.

![고객 프로필](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179193172/original/jJl6AoSWYy6CzP-DRhLJOuy9aCe_S1tF0Q.png?1642181316)

### 구독 플랜 변경

이제 Stripe의 고객 프로필에서 고객의 구독 플랜을 업데이트했습니다.

1. 구독 플랜을 업데이트하려면 연필 아이콘을 클릭합니다.

![구독 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179204701/original/tW6N-xWl8eQg9Slvwr0PISwUriI_BCJgzg.png?1642183950)

2. 현재 가격을 제거하고 새 플랜의 가격을 추가합니다.

![가격 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179205217/original/qgQsQVyZBOJFYg9daBCfeUTldUzQNuxs2A.png?1642184088)

3. 변경 사항을 검토하고, 다음 인보이스에서 청구 차액을 조정하려면 변경 사항을 비례 배분한 다음 업데이트 버튼을 누릅니다.

![변경 검토](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179205549/original/YHLzV6ZB7SuwdPZgJPqUR47CJ458GKHFgQ.png?1642184206)

4. 에이전시 계정에서 Accounts(계정) 탭 > 해당 하위 계정의 View details(세부 정보 보기)로 이동합니다. 이제 플랜이 업그레이드되었지만 새 플랜에 따른 접근 가능한 기능을 업데이트해야 합니다:

![플랜 업데이트됨](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179200049/original/j2uNrKdUuGRToQ7uQSxL_inhtBd_CYkXlw.png?1642183048)

5. 이 하위 계정에 대한 업데이트된 기능 세트를 저장하면 완료됩니다!

![기능 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179200337/original/oun45XOJp3E2WWwfY5NH_zIyebPvLT-YOQ.png?1642183137)

## 자주 묻는 질문

**Q: 고객이 즉시 업그레이드하고 기능을 바로 사용할 수 있나요?**

네, Add New Plans Features and Apps Upon Upgrading(업그레이드 시 새 플랜 기능 및 앱 추가) 옵션을 활성화하면 됩니다.

**Q: 고객에게 대상 플랜이 표시되지 않는 이유는 무엇인가요?**

**Category/Level(카테고리/레벨)** 정렬, **currency(통화)** 일치, 셀프 서비스 권한, **Stripe 가격**이 HighLevel로 가져왔는지 확인하세요.

**Q: 고객이 스스로 다운그레이드하는 것을 막을 수 있나요?**

네. 셀프 다운그레이드를 비활성화하고 에이전시 지원을 통해 플랜 변경을 처리하세요.

**Q: Stripe에서 가격을 변경했는데 새 가격이 표시되지 않으면 어떻게 하나요?**

업데이트된 가격을 HighLevel로 **Import(가져오기)**하고 플랜에 올바른 **currency(통화)**와 **price ID(가격 ID)**가 선택되어 있는지 확인하세요.

**Q: 플랜 변경 후 결제가 실패하면 어떻게 되나요?**

계정이 **auto-pause(자동 일시정지)**될 수 있습니다. 결제 방법을 업데이트하고, 요금 청구를 다시 시도한 후, 계정을 재개하세요.

---
*원문 최종 수정: Tue, 9 Dec, 2025 at 9:07 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*