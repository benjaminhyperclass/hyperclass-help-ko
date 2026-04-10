---

번역일: 2026-04-07
카테고리: 09-이메일 > LC-이메일
---

# 하위 계정 이메일 설정 및 LC 이메일 마이그레이션 관리

**목차**

- [하위 계정의 이메일 공급업체 필터링 방법](#하위-계정의-이메일-공급업체-필터링-방법)
- [하위 계정을 LC 이메일로 마이그레이션하기](#하위-계정을-lc-이메일로-마이그레이션하기)
- [하위 계정의 LC 이메일 일괄 마이그레이션](#하위-계정의-lc-이메일-일괄-마이그레이션)
  - [모든 Mailgun 하위 계정 또는 특정 Mailgun 전용 도메인 하위 계정 이전](#모든-mailgun-하위-계정-또는-특정-mailgun-전용-도메인-하위-계정-이전)
- [에이전시 내 하위 계정에 LC 이메일 전용 도메인 포함하기](#에이전시-내-하위-계정에-lc-이메일-전용-도메인-포함하기)

**자주 묻는 질문**:
- [전용 도메인을 한 하위 계정에서 다른 계정으로 이전할 수 있나요?](#전용-도메인을-한-하위-계정에서-다른-계정으로-이전할-수-있나요)
- [에이전시 전용 도메인을 하위 계정과 공유할 수 있나요?](#에이전시-전용-도메인을-하위-계정과-공유할-수-있나요)
- [하위 계정 전용 도메인을 다른 하위 계정과 공유할 수 있나요?](#하위-계정-전용-도메인을-다른-하위-계정과-공유할-수-있나요)
- [에이전시를 LC 이메일로 마이그레이션하기](#에이전시를-lc-이메일로-마이그레이션하기)

---

## **하위 계정의 이메일 공급업체 필터링 방법**

Agency Settings(에이전시 설정) → Email Services(이메일 서비스) → Location Settings(로케이션 설정)으로 이동한 후 "Filter" 버튼을 클릭하세요. 페이지에서 모든 하위 계정의 이메일 서비스 기록을 확인할 수 있습니다.

![하위 계정 필터링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252712/original/YmM2wAiqU-5jolPSNg2Yn16al7uTDzUjeA.jpg?1722446880)

필터에는 3가지 옵션이 있습니다:
1. LeadConnector
2. Mailgun
3. Others(자체 이메일 서비스 제공업체를 사용하는 하위 계정)

- **LeadConnector 필터링**
  이 옵션을 사용하면 LeadConnector를 기본 이메일 서비스로 사용하는 모든 하위 계정을 찾을 수 있습니다.
  - 여러 필터를 조합하여 검색 범위를 더 좁힐 수 있습니다. 예를 들어, 도메인 이름과 이메일 인증 상태를 동시에 필터링할 수 있습니다.
  - 전용 도메인 이름으로 필터링
  - 이메일 인증 활성화/비활성화 계정으로 필터링

![LeadConnector 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252730/original/b3tXfxAa4jIefKeh_KPWLI_n0rYjeUzp-Q.jpg?1722446912)

- **Mailgun 필터링**
  이 옵션을 사용하면 Mailgun을 기본 이메일 서비스로 사용하는 모든 하위 계정을 찾을 수 있습니다.
  - Mailgun 전용 도메인으로 필터링하는 옵션이 있습니다.

![Mailgun 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252742/original/8HTaDVlXljCwRhzz-CWLg4TUNIMzjyR3ZQ.jpg?1722446942)

- **기타 필터링**
  이 옵션을 사용하면 자체 이메일 서비스 제공업체를 사용하는 모든 하위 계정을 찾을 수 있습니다.

---

## **하위 계정을 LC 이메일로 마이그레이션하기**

- Agency Settings(에이전시 설정) → Email Services(이메일 서비스) → Location Settings(로케이션 설정)으로 이동하세요.
- 하위 계정을 선택하고 연필 아이콘을 클릭하세요.

![하위 계정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252762/original/CbERxgMKRVh0fDJblhrCq0B2pqrYalFiaA.jpg?1722446970)

- LeadConnector를 선택하고 전용 도메인을 선택하거나 Fallback to Default(에이전시 기본 도메인으로 대체)를 설정한 후 설정을 저장하세요.

![LeadConnector 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252804/original/_CkxDciIp9pJjtqrwmg3LGbLXZcn9jykQA.jpg?1722447017)

---

## **하위 계정의 LC 이메일 일괄 마이그레이션**

- Agency Settings(에이전시 설정) → Email Services(이메일 서비스) → Location Settings(로케이션 설정)으로 이동한 후 "Filter" 버튼을 클릭하세요. 페이지에서 모든 하위 계정의 이메일 서비스 기록을 확인할 수 있습니다.
- 필터를 기반으로 하위 계정을 LC 이메일로 이동할 수 있습니다.
- **Mailgun 하위 계정을 LC 이메일로 이동하는 예시**

### **모든 Mailgun 하위 계정 또는 특정 Mailgun 전용 도메인 하위 계정 이전**

Agency Settings(에이전시 설정) → Email Services(이메일 서비스) → Location Settings(로케이션 설정)으로 이동한 후 "Filter" 버튼을 클릭하세요.

두 가지 옵션이 있습니다:
- 모든 Mailgun 하위 계정을 필터링하려면 Mailgun을 선택하세요.
- Mailgun 전용 도메인과 연결된 모든 하위 계정을 필터링하려면 Mailgun과 전용 도메인을 선택하세요.

모든 Mailgun 하위 계정이 필터링됩니다. Location 이름 근처의 체크박스를 클릭하고 테이블 헤더의 "Select all" 옵션을 사용하세요.

![하위 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252823/original/GcbDyOeWRb0jOej7fLya83evVbYNEEnXrA.jpg?1722447049)

"Manage" 버튼을 클릭하고 Request type에서 Migrate to LC를 선택하세요. Confirm을 클릭하여 LC 전용 도메인을 선택하세요.

![마이그레이션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252832/original/o4JAOKGUd8apM_iQShtIMdw_Jh-3lSWOkA.jpg?1722447078)

전용 도메인을 선택하고 Confirm을 클릭하여 하위 계정을 LC 이메일로 마이그레이션하세요.

![도메인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252857/original/g3YFjSvfTOQz18yXlC7aJ_HpfFqTqDkhng.jpg?1722447108)

---

## **에이전시 내 하위 계정에 LC 이메일 전용 도메인 포함하기**

- Agency Settings(에이전시 설정) → Email Services(이메일 서비스) → Location Settings(로케이션 설정)으로 이동하세요.
- 하위 계정을 선택하고 연필 아이콘을 클릭하세요.

![설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252871/original/03vYq26qmaasC-Daqia7g0g4t4NV3ACJ_g.jpg?1722447137)

---

# 자주 묻는 질문

### **전용 도메인을 한 하위 계정에서 다른 계정으로 이전할 수 있나요?**

도메인을 삭제한 후 하위 계정에 추가해야 합니다.

또는

에이전시 레벨에서 도메인을 추가하고 하나 이상의 하위 계정과 공유하세요. [자세히 알아보기](#에이전시-전용-도메인을-하위-계정과-공유할-수-있나요)

---

### **에이전시 전용 도메인을 하위 계정과 공유할 수 있나요?**

네, 하위 계정과 공유할 수 있습니다.

- 필터를 사용하거나 이름으로 하위 계정을 필터링하고 Manage를 클릭하세요.
- Request type에서 Migrate the LC를 선택하고 도메인을 선택하세요.

**참고**: 기본적으로 전용 도메인이 없는 하위 계정에는 에이전시의 기본 전용 도메인이 공유됩니다.

---

### **하위 계정 전용 도메인을 다른 하위 계정과 공유할 수 있나요?**

아니요, 하위 계정에서 생성된 도메인은 에이전시나 다른 하위 계정과 공유할 수 없습니다.

---

### **에이전시를 LC 이메일로 마이그레이션하기**

관련 문서: [에이전시를 LC 이메일로 마이그레이션하는 방법](how-to-migrate-my-agency-over-to-lc-email.md)

---
*원문 최종 수정: Tue, 21 Jan, 2025 at 7:18 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*