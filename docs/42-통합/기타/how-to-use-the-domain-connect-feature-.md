---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# Domain Connect 기능 사용 방법

커뮤니티 튜토리얼 더 보기

[https://www.youtube.com/watch?v=FqaYxK-p9Yw](https://www.youtube.com/watch?v=FqaYxK-p9Yw)

[https://www.youtube.com/watch?v=Gtkme8bR_kc&feature=youtu.be](https://www.youtube.com/watch?v=Gtkme8bR_kc&feature=youtu.be)

[https://www.youtube.com/watch?v=dmJZPW9Aic4&feature=youtu.be](https://www.youtube.com/watch?v=dmJZPW9Aic4&feature=youtu.be)

Domain Connect는 복잡한 도메인 연결 과정을 원활한 경험으로 변화시켜줍니다. 단순한 클릭으로 도메인을 자동 감지하고 설정하여, 수동 DNS 레코드 조정의 필요성을 대체합니다. 루트 도메인과 서브도메인 모두에 적합한 Domain Connect는 지속적인 도메인 관리 경험을 위한 손쉬운 효율성과 적응성을 상징합니다.

#### 이 글에서 다루는 내용:

- [이 기능이 무엇인가요?](#이-기능이-무엇인가요)
- [왜 중요한가요?](#왜-중요한가요)
- [이 기능을 사용하는 방법](#이-기능을-사용하는-방법)
- [자주 묻는 질문](#자주-묻는-질문)
- [Q: Domain Connect를 사용하지 않고 도메인을 수동으로 설정할 수 있나요?](#q-domain-connect를-사용하지-않고-도메인을-수동으로-설정할-수-있나요)
- [Q: 도메인 제공업체가 Domain Connect에서 지원하는 주요 3사에 해당하지 않으면 어떻게 하나요?](#q-도메인-제공업체가-domain-connect에서-지원하는-주요-3사에-해당하지-않으면-어떻게-하나요)
- [Q: "www 도메인도 추가" 옵션을 켰는데 www 서브도메인이 이미 다른 시스템에 연결되어 있으면 어떻게 하나요?](#q-www-도메인도-추가-옵션을-켰는데-www-서브도메인이-이미-다른-시스템에-연결되어-있으면-어떻게-하나요)

주의사항:

이것은 도메인 연결 기능이지 도메인 호스팅 기능이 아닙니다. Google Domains, GoDaddy, Cloudflare 또는 IONOS에서 이미 도메인을 구매해야 작동합니다. Cloudflare 프록시의 경우, 자동 생성된 DNS 레코드에서 Cloudflare 프록시가 꺼져 있는지 확인하세요.

중요: 제공업체 탭이 승인된 후에는 탭을 닫고 도메인 검증 과정으로 진행하세요.

## 이 기능이 무엇인가요?

Domain Connect 기능은 도메인을 다양한 웹 서비스나 애플리케이션에 연결하는 과정을 자동화하고 간소화하도록 설계되었습니다. 자세한 설명은 다음과 같습니다:

**주요 제공업체와의 간편한 연동**: Google Domains, GoDaddy 또는 Cloudflare를 통해 몇 번의 클릭만으로 도메인을 다양한 서비스에 연결하세요.

**번거로움 없는 설정**: 수동 DNS 설정의 어려움은 잊어버리세요. Domain Connect가 모든 것을 대신 해주어 시간을 절약하고 오류를 방지합니다.

### 왜 중요한가요?

**빠르고 간단**: 이제 도메인을 다양한 서비스와 애플리케이션에 연결할 수 있습니다.

**안전하고 보안**: 주요 제공업체의 신뢰할 수 있는 인프라를 활용하여 안전한 연결을 제공합니다.

**미래 지향적**: Domain Connect는 더 많은 제공업체 지원과 WordPress 및 이메일 서비스 같은 플랫폼과의 연동을 확장할 예정입니다.

## 이 기능을 사용하는 방법

주의사항:

이것은 도메인 연결 기능이지 도메인 호스팅 기능이 아닙니다. Google Domains, GoDaddy 또는 Cloudflare에서 이미 도메인을 구매해야 작동합니다.

- 하위 계정에 로그인하고 `Settings(설정) > Domains` 탭으로 이동하세요.
- `Add Domain` 버튼을 클릭하여 프로세스를 시작하세요.
![Domain Connect 시작하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005678664/original/vb1feDifIlYLaDf8X50iU9FxXW0cs8-qYQ.png?1692626777)

- 제공된 필드에 루트 도메인 또는 서브도메인을 입력하세요. "www" 서브도메인도 함께 추가하는 경우, 루트 도메인을 추가할 수 있는 옵션이 표시됩니다.
![도메인 입력하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005679165/original/gWOZnKvc-obX2BoPomYNA5ZcFkouYe5whQ.png?1692626938)

- `Continue` 버튼을 클릭하여 진행하세요.
![계속하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005679474/original/REaa7jW8jWBcddTN_qcK8TOSyjHcTxWKdQ.png?1692627034)

- 도메인이 Google Domains, GoDaddy 또는 Cloudflare에 있다면, `Authorize` 버튼이 표시됩니다. 버튼을 클릭하여 Domain Connect가 DNS 설정에 접근할 수 있도록 허용하세요.
![승인하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005681595/original/CeyuCabf_IfnHMKWo-yqXoFcnj4mJis2Uw.png?1692628157)

- 화면의 안내에 따라 도메인 제공업체의 인터페이스에서 승인 과정을 완료하세요. 이렇게 하면 필요한 DNS 레코드가 자동으로 추가되거나 연결됩니다.
![승인 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005680289/original/-I644NlqOUVms8QjqZ_XZHvTv_O5f39qmg.png?1692627489)

- 승인이 완료되면 해당 탭을 닫고 Domain Connect 인터페이스로 돌아가세요.
![승인 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005680769/original/W8qlnuBzQdVvbNRiGMFqkgxIJ0i_y2CnQA.png?1692627806)

주의사항:

Google Domains의 경우, 이 탭을 닫고 하위 계정으로 돌아가야 승인 과정이 완료됩니다.

- 필요한 항목이 시스템에 추가되어 도메인과 CRM 간의 연결이 확인됩니다.
- 제공업체가 지원되지 않는 경우, 인터페이스에서 제공되는 지침에 따라 필요한 DNS 레코드를 수동으로 추가할 수 있습니다.
![수동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005681058/original/PQ19AiYtyi4CogvMpdmy5YYTIdBbxvOuOQ.png?1692627955)

- 도메인을 테스트하여 연결이 성공적으로 설정되었는지 확인하세요. 변경 사항이 반영되는 데 최대 30초 이상 걸릴 수 있습니다. 승인 또는 기타 오류에 문제가 있는 경우 다음 메시지가 표시됩니다:
![오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005681790/original/Q9n2H6uwWOj-zHboG1mMiZNI9pOfMMjvug.png?1692628209)

## 자주 묻는 질문

### Q: Domain Connect를 사용하지 않고 도메인을 수동으로 설정할 수 있나요?

A: 네, 수동 설정은 DNS 레코드를 직접 설정하거나 도메인 제공업체가 현재 Domain Connect에서 지원되지 않는 사용자들을 위한 옵션으로 여전히 이용 가능합니다.

### Q: 도메인 제공업체가 Domain Connect에서 지원하는 주요 3사에 해당하지 않으면 어떻게 하나요?

A: 현재 Domain Connect에서 지원하지 않는 도메인 제공업체의 사용자들은 여전히 필요한 DNS 레코드를 수동으로 추가할 수 있습니다. 수동 설정 과정은 동일하게 유지됩니다.

### Q: "www 도메인도 추가" 옵션을 켰는데 www 서브도메인이 이미 다른 시스템에 연결되어 있으면 어떻게 하나요?

A: DNS 레코드에서 서브도메인용 CNAME 레코드가 생성되어 저희로 연결되지만, 다른 서비스로 연결된 www 도메인의 기존 CNAME 또는 A 레코드는 삭제할 수 없습니다. www 도메인이 저희와 함께 작동하려면 해당 레코드를 직접 삭제해야 합니다.

---
*원문 최종 수정: Tue, 6 Feb, 2024 at 10:23 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*