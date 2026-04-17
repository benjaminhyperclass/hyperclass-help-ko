---

번역일: 2026-04-08
카테고리: 리포팅 > 추적-어트리뷰션
---

# 페이스북 광고 리포팅 문제 해결

페이스북 광고는 비즈니스를 홍보하는 훌륭한 방법이지만, 올바르게 설정되어 있는지 확인해야 합니다. 적절한 설정이 없다면 비용 손실과 시간 낭비로 이어질 수 있습니다.

이 가이드에서는 페이스북 광고 설정을 점검하여 최대한의 성과를 얻는 방법을 알려드립니다.

다루는 내용:

#### 페이스북 광고 리포팅 설정 문제 해결 방법:

1. 페이스북 광고 계정 연동이 활성화되어 있어야 함
2. UTM 추적 템플릿은 대상(Destination)이 아닌 추적(Tracking)에 추가해야 함
3. 페이스북 광고, 광고 세트, 캠페인 이름의 고유성이 필요함
4. 페이스북 광고 캠페인, 광고 세트, 광고를 변경해도 UTM 매개변수 복사본에는 영향을 주지 않으며, 기존 매개변수로 어트리뷰션됨
5. 페이스북 리드 폼 매핑(Facebook Lead Form Mapping) 연결 시 올바른 페이스북 페이지를 선택해야 함

## 페이스북 광고 리포팅 설정 문제 해결 방법:

### 1. 페이스북 광고 계정 연동이 활성화되어 있어야 함

하위 계정 > Settings(설정) > Integrations(연동)에서 연결된 페이스북 광고 계정이 [관리자 권한](https://web.facebook.com/business/help/1588743581429919?id=735435806665862&_rdc=1&_rdr#:~:text=Note%20that%20you%20must%20be%20an%20admin%20of%20the%20Facebook%20Page%20and%20have%20leads%20access%20permissions%20in%20order%20to%20connect%20a%20CRM%20system.)을 가지고 있는지 확인해야 합니다.

참고사항:

CRM의 연동 섹션에서 페이지가 보이지 않는다면 [CRM 액세스 할당 방법](https://web.facebook.com/business/help/1588743581429919?id=735435806665862&_rdc=1&_rdr#:~:text=Note%20that%20you%20must%20be%20an%20admin%20of%20the%20Facebook%20Page%20and%20have%20leads%20access%20permissions%20in%20order%20to%20connect%20a%20CRM%20system.)을 확인하세요. [페이스북 관리자인데도 문제가 있다면, Lead Connector가 접근 가능하고 페이지 액세스를 허용할 수 있는지 확인해보세요.](../../05-기회-파이프라인/기타/facebook-lead-ad-integration.md)

Meta 광고 관리자에서 페이스북 페이지와 인스타그램 계정에 광고하려면 다음이 필요합니다:

광고 계정에는 계정 관리를 돕는 3가지 유형의 관리자 권한이 있습니다. 누군가에게 광고 계정 액세스 권한을 부여할 때, 역할을 할당하여 그들이 할 수 있는 작업이나 볼 수 있는 내용을 선택합니다. 아래 표는 3가지 광고 계정 역할(가로)과 각각이 할 수 있는 작업(세로)을 보여줍니다:

![페이스북 광고 계정 권한 표](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248640131/original/i4b0NyjU-xcO7XDQpNq_pAs_KhnqHRGR3Q.png?1662042909)

참고사항:

페이지 관리자이거나 페이지 관리자에게 [페이지 관리자(권장), 편집자, 조정자, 광고주 또는 채용 담당자 역할을 할당](https://www.facebook.com/help/187316341316631?helpref=faq_content)받아야 합니다.

참고: [새로운 페이지 경험으로 전환하고 작업 액세스 권한](https://www.facebook.com/business/help/1101781386943864)이 있다면, 광고 관리자나 Meta 비즈니스 스위트에서 광고를 관리할 수 있습니다.

### 2. UTM 추적 템플릿은 대상(Destination)이 아닌 추적(Tracking)에 추가해야 함

추가 참고자료 - [페이스북 광고 리포팅 설정 방법](how-to-set-up-facebook-ad-reporting.md)

![UTM 추적 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247908119/original/hfjpXumheRhCLWFfZsAOubs4t7ZjtSS_Lw.jpeg?1661784949)

### 3. 페이스북 광고, 광고 세트, 캠페인 이름의 고유성이 필요함

이름이 고유하지 않으면 페이스북 광고의 서로 다른 광고 세트/광고에서 연락처의 중복 항목이 표시됩니다.

잘못된 설정 예시:

| 캠페인 이름 | New Restaurant in Town |
|------------|------------------------|
| 캠페인 ID | 12345 |
| 광고 세트 | Dish 1 |
| 광고 | Fresh Red Pasta |
| 광고 세트 | Dish 2 |
| 광고 | Fresh Red Pasta |

이 예시에서는 고객 A가 유료 검색으로 생성됩니다. 고객 A는 두 개의 서로 다른 광고 세트에서 Nike Sport Shoes 1이라는 이름의 광고의 페이스북 광고 리포팅 리드 열에 나타날 것입니다.

https://example.com?utm_source=fb_ad&utm_medium={dish1}&utm_campaign={newrestaurantintown}&utm_content={freshredpasta}&campaign_id={12345}

올바른 설정:

| 캠페인 이름 | New Restaurant in Town |
|------------|------------------------|
| 캠페인 ID | 12345 |
| 광고 세트 | Dish 1 Starter |
| 광고 | 1.1 Fresh Red Pasta with extra sauce |
| 광고 세트 | Dish 2 Main Course |
| 광고 | 2.1 Fresh Red Pasta with no sauce |

### 4. 페이스북 광고 캠페인, 광고 세트, 광고 이름을 변경해도 UTM 매개변수 복사본에는 영향을 주지 않으며, 기존 매개변수로 어트리뷰션됩니다

새로운 캠페인, 광고 세트, 광고를 생성하는 것을 권장합니다. CRM의 페이스북 광고 리포팅 목록 보기에서는 이름이 업데이트되지만, UTM이 여전히 이전 캠페인, 광고 세트, 광고와 연결되어 있어 판매, 리드, ROI 어트리뷰션이 중단됩니다.

- 캠페인/광고 세트/광고의 수명 기간 동안 이름 매개변수는 변경할 수 없습니다. 이름을 변경해야 한다면 다른 캠페인/광고 세트/광고를 생성하세요.
- 캠페인/광고 세트/광고 이름을 변경하기로 결정했지만 새 캠페인을 생성하지 않는다면, CRM 시스템의 데이터는 계속해서 원래/첫 번째 캠페인을 참조합니다. [페이스북 광고는 매개변수에서 이전 이름을 제공합니다]

### 5. 페이스북 리드 폼 매핑(Facebook Lead Form Mapping) 연결 시 올바른 페이스북 페이지를 선택해야 함

페이스북 폼 리드를 수집하려면 활성화로 매핑해야 합니다.

참고사항:

- 텍스트 필드와 커스텀 필드는 쉽게 매핑할 수 있습니다
- 라디오 버튼 커스텀 필드는 페이스북 리드 폼과 매핑할 수 없습니다
- 시간대(Timezone) 필드는 매핑할 수 없습니다

---
*원문 최종 수정: Mon, 19 Sep, 2022 at 9:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*