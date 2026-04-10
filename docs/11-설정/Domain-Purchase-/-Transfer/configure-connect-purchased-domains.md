---

번역일: 2026-04-07
카테고리: 11-설정 > Domain Purchase / Transfer
---

# 구매한 도메인 설정 및 연결하기

Hyperclass에서 도메인을 구매한 경우(외부에서 구매한 도메인을 연결하는 것이 아닌), DNS 레코드를 Hyperclass 내에서 직접 관리할 수 있습니다.

---

**목차**

- [구매한 도메인 설정이란?](#구매한-도메인-설정이란)
- [구매한 도메인 설정 메뉴 위치](#구매한-도메인-설정-메뉴-위치)
- [설정하기](#설정하기)
- [설정 - DNS 레코드](#설정---dns-레코드)
- [설정 - 도메인 연결](#설정---도메인-연결)

---

## **구매한 도메인 설정이란?**

모든 도메인에는 설정(DNS)이 있습니다. Hyperclass를 통해 도메인을 구매한 경우, Hyperclass가 도메인 등록기관이 되므로 Hyperclass를 벗어나지 않고도 도메인을 설정할 수 있습니다. 관련 DNS 레코드(예: CNAME)를 추가, 편집, 삭제할 수 있습니다.

---

## **구매한 도메인 설정 메뉴 위치**

`하위 계정 → Settings(설정) → Domains → Purchased Domains`로 이동하세요.

![구매한 도메인 설정 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042070927/original/E-L8yQ9nA2R1PQTKGP3DCXlsuQXQ8UfVAQ.png?1740261457)

![구매한 도메인 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042146866/original/fNeSIN4pTex6c5Zc2cULAyQNNkgfZJBp7Q.png?1740412636)

---

## 설정하기

구매한 도메인 옆의 Configure를 클릭하여 설정을 엽니다. 도메인을 두 가지 방식으로 관리할 수 있습니다:

- **Add Record**(레코드 추가) 또는 기존 레코드 편집
- **Connect Domain**(도메인 연결) - 사이트 섹션의 항목(웹사이트, 스토어 등)에 연결

![도메인 설정 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042070969/original/_UmEc0xX_VxHBd3NaynhcKXaTJ51giI8Ig.png?1740261829)

![도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071018/original/W9rJlJr5zItRSLpC3vmhfzBnUyMznEmPlg.png?1740262071)

### **설정 - DNS 레코드**

다음 DNS 레코드를 추가하고 편집할 수 있습니다:
- A
- CNAME
- AAAA
- MX
- TXT

루트 도메인을 연결할 때는 A 레코드를 하나만 가져야 합니다. 같은 도메인(예: yourdomain.com)에 여러 개의 A 레코드가 있으면 DNS 해석 충돌이 발생할 수 있으며, 특히 시스템이 필요한 A 레코드를 자동으로 삽입하려고 시도할 때 문제가 됩니다.

![DNS 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071007/original/iKo0QleN6FjXmket82lmnAcwglbRYoqQPw.png?1740261988)

### 설정 - 도메인 연결

Connect This Domain을 클릭하여 사이트 섹션에서 만든 퍼널, 웹사이트, 스토어, 블로그 등에 도메인을 연결합니다.

Continue를 클릭하세요
![도메인 연결 1단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071078/original/Ny8uVT-XCKEB6LhIWAS2IFZxSDpVPhHOkA.png?1740262721)
Continue를 클릭하세요
![도메인 연결 2단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071079/original/kwAX5QDhIPRhAkC8A0hHKa1obdi62W_6uw.png?1740262727)
Add Records를 클릭하세요
![도메인 연결 3단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071082/original/IAHyGBfIpPJGdomSfo7wQafMRHJcIs3hbg.png?1740262740)
올바른 사이트 하위 유형을 선택하고 Proceed를 클릭하여 완료하세요
![도메인 연결 4단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071083/original/FMXi857lqnt5t8qetOwy5TbXrAQ_SeQFKg.png?1740262745)
완료되었습니다.
![도메인 연결 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042071084/original/IT1Zc8QwOdXA9PMAqzJiPrqimxLfa5JGYw.png?1740262755)

---

## **자주 묻는 질문**

**Q1: 구매한 도메인 하나로 웹사이트와 퍼널을 동시에 사용할 수 있나요?**

아니요, 하나의 루트 도메인은 한 번에 하나의 사이트 유형(웹사이트, 퍼널, 블로그, 스토어 등)에만 연결할 수 있습니다. 같은 도메인을 여러 용도로 사용하려면 각 콘텐츠 유형별로 서브도메인(store.yourdomain.com 또는 blog.yourdomain.com 같은)을 만들어 연결하는 것이 좋습니다.

**Q2: Hyperclass에서 구매한 도메인의 DNS 레코드는 어떤 것들을 관리할 수 있나요?**

Hyperclass를 통해 도메인을 구매하면 플랫폼 내에서 DNS를 직접 완전히 관리할 수 있습니다. A, CNAME, AAAA, MX, TXT 레코드를 추가, 편집, 삭제할 수 있어서 외부 등록기관이나 서드파티 DNS 도구가 필요하지 않습니다.

**Q3: Hyperclass에서 구매한 도메인은 구매 후 별도로 인증해야 하나요?**

아니요, Hyperclass에서 직접 구매한 도메인은 자동으로 인증되며 바로 설정할 수 있습니다. DNS 설정을 관리하고 퍼널, 웹사이트, 스토어, 블로그에 도메인을 연결하는 작업을 즉시 시작할 수 있습니다.

---
*원문 최종 수정: Thu, 24 Apr, 2025 at 9:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*