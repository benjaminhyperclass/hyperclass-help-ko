---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# Mailgun: Private API 키 설정

검증된 Mailgun 도메인을 Hyperclass에 연결하여 안정적으로 이메일을 보내고 받으려면 Mailgun Private API 키를 사용하세요. 이 가이드는 Mailgun에서 키를 찾는 방법, 에이전시와 하위 계정 레벨에서 Hyperclass의 어느 부분에 정확히 붙여넣는지, 그리고 연결을 검증하고 문제를 해결하는 방법을 설명합니다.

---

**목차**

- [Hyperclass용 Mailgun Private API 키란 무엇인가요?](#hyperclass용-mailgun-private-api-키란-무엇인가요)
- [Mailgun Private API 키 사용의 주요 장점](#mailgun-private-api-키-사용의-주요-장점)
- [사전 준비사항](#사전-준비사항)
- [지역 및 도메인 가시성 (미국 vs. EU)](#지역-및-도메인-가시성-미국-vs-eu)
- [Hyperclass에서 Mailgun Private API 키 설정하는 방법](#hyperclass에서-mailgun-private-api-키-설정하는-방법)
- [1단계: Mailgun에서 Private API 키 복사하기](#1단계-mailgun에서-private-api-키-복사하기)
- [2단계: 에이전시 레벨에서 키 추가하기 (선택사항, 공유 사용)](#2단계-에이전시-레벨에서-키-추가하기-선택사항-공유-사용)
- [하위 계정 설정 고려사항](#하위-계정-설정-고려사항)
- [문제 해결 및 검증](#문제-해결-및-검증)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **Hyperclass용 Mailgun Private API 키란 무엇인가요?**

Mailgun Private API 키는 Hyperclass를 Mailgun 계정과 인증하여 Hyperclass가 검증된 발송 도메인에 접근하고, 이메일을 보내고, 답장을 처리할 수 있게 해줍니다. 키는 Mailgun에서 생성한 후 Hyperclass에 붙여넣습니다. 저장하면 적격한 미국 지역의 검증된 도메인이 하위 계정 레벨에서 선택할 수 있는 도메인 드롭다운에 나타납니다.

**중요**: Private API 키는 기밀로 취급하세요. 티켓이나 스크린샷에 공유하지 마세요. 정기적으로 또는 노출이 의심될 때마다 교체하세요. Mailgun에서 새 키를 생성하고 키가 저장된 에이전시/하위 계정에서 업데이트하세요.

---

## **Mailgun Private API 키 사용의 주요 장점**

이 연결의 가치를 이해하면 올바른 설정 위치를 선택하고 발송 문제를 방지하는 데 도움이 됩니다. 아래 항목들은 올바른 설정이 Hyperclass에서 이메일 발송 시 안정성, 제어, 확장성을 어떻게 개선하는지 보여줍니다.

- **중앙화된 인증:** 적절한 경우 에이전시 레벨에서 하나의 키로 여러 하위 계정을 운영할 수 있습니다.

- **하위 계정 레벨 제어:** 클라이언트가 자체 Mailgun 계정과 도메인이 필요한 경우 특정 하위 계정에서 에이전시 키를 재정의할 수 있습니다.

- **도메인 드롭다운 가시성:** 드롭다운에서 검증된 미국 지역 도메인을 선택하면 잘못된 설정을 줄이고 올바른 도메인에서 발송할 수 있습니다.

- **답장 처리 활성화:** 유효한 키와 적절한 수신 경로를 통해 답장이 올바른 하위 계정의 대화(Conversations)에 도착합니다.

- **보안 및 교체:** 키는 Mailgun에서 재생성하고 Hyperclass에서 업데이트하여 계정 보안을 유지할 수 있습니다.

- **확장성:** 다중 클라이언트 에이전시는 설정을 표준화하고 온보딩을 가속화하며 필요시 클라이언트 소유 인프라와 연계할 수 있습니다.

---

## **사전 준비사항**

환경을 미리 준비하면 도메인이 Hyperclass에 나타나지 않거나 이메일 발송이 실패하는 일반적인 문제를 방지할 수 있습니다. 키를 붙여넣기 전에 각 항목을 확인하세요.

- **미국 지역**에서 설정된 최소 하나의 **검증된** 발송 도메인(녹색 체크)이 있는 Mailgun 계정

- Hyperclass **에이전시** 뷰와 관련 **하위 계정**에 대한 접근 권한 및 **설정(Settings) → 이메일 서비스(Email Services)** 열기 권한

- Mailgun 도메인에 대한 DNS가 올바르게 구성됨 (DKIM, SPF, MX, 그리고 링크 추적을 사용하는 경우 추적 CNAME)

- 필요시 Mailgun IP 허용 목록을 일시적으로 완화하여 Hyperclass가 도메인을 동기화할 수 있도록 허용 (검증 후 복원)

---

## **지역 및 도메인 가시성 (미국 vs. EU)**

Hyperclass는 Mailgun의 **미국 지역**에서만 검증된 도메인을 읽습니다. 도메인이 EU 지역에서 생성된 경우 Hyperclass 도메인 드롭다운에 나타나지 않습니다.

- Mailgun 도메인이 **미국**에 있고 **검증됨(Verified)**으로 표시되는지 확인하세요.

- 도메인이 **EU**에 있다면 Hyperclass에서 사용할 미국 지역 도메인을 생성/마이그레이션하세요.

---

## **Hyperclass에서 Mailgun Private API 키 설정하는 방법**

순서대로 단계를 따르면 가장 일반적인 잘못된 설정을 방지할 수 있습니다. Mailgun에서 키를 가져온 후 에이전시나 하위 계정 레벨에서 Hyperclass에 붙여넣고, 도메인을 선택한 다음 검증하세요.

### **1단계:** Mailgun에서 Private API 키 복사하기

Mailgun에 로그인하세요. **프로필 아바타**(우측 상단) → **API Security**를 클릭하세요. 필요시 새 키를 생성하거나 기존 **Private API 키**를 **복사**하세요.

![Mailgun에서 Private API 키 복사하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053009311/original/GtL1-0NEzqjrBBuInbEo7iGwCdJMlMXDJg.png?1756903644)

### **2단계:** 에이전시 레벨에서 키 추가하기 (선택사항, 공유 사용)

**Hyperclass(에이전시 뷰)**에서 **설정(Settings) → 이메일 서비스(Email Services)**로 이동하세요. **Mailgun**을 선택하고 **Private API 키**를 붙여넣으세요. 도메인을 선택한 후 **저장(Save)**을 클릭하세요.

(선택사항) **하위 계정**을 열어서 동기화 후 해당 드롭다운에 도메인이 나타나는지 확인하세요.

![Hyperclass에서 Mailgun Private API 키 설정하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053009956/original/qkvDGL6oRHmywR-iuQL6r5qAEsjbwNL4-A.gif?1756903946)

**중요**: 도메인이 미국으로 설정되어 있고 도메인 옆에 녹색 체크 표시가 있는지 확인하세요.

![검증된 미국 지역 도메인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053010520/original/wTfs0PssGmngzK3Zuvif__AnMaGOueL_bQ.png?1756904136)

성공적인 연결은 다음과 같이 나타납니다:

![성공적인 Mailgun 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279962136/original/B2HJkrzdKmeChQEF6-kdruFACqTiCGu4bQ.png?1675701596)

---

## 하위 계정 설정 고려사항

- 각 하위 계정을 클라이언트 자체의 Mailgun 또는 귀하의 Mailgun으로 구성할 수 있습니다.

- 여러 하위 계정에 동일한 Mailgun API와 동일한 도메인/서브도메인을 사용할 수 있습니다.

- 여러 하위 계정에 동일한 Mailgun API와 서로 다른 도메인/서브도메인을 사용할 수 있습니다.

- 여러 하위 계정에 서로 다른 Mailgun API와 도메인/서브도메인을 사용할 수 있습니다.

- 각 하위 계정에 고유한 도메인/서브도메인을 설정하여 콜드 인바운드 이메일을 수집할 수도 있습니다. [콜드 이메일 인바운드 설정에 대해 자세히 알아보세요.](cold-email-inbound-setup.md)

---

## 문제 해결 및 검증

설정한 도메인이 드롭다운에 나타나지 않는 경우:

1. 도메인 또는 서브도메인을 EU가 아닌 미국에서 설정해 주세요.

![미국 지역 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053011369/original/DjcnT9n3f0d2eep2HYX_dDL2BMw-etfKvg.png?1756904535)

2. Mailgun 계정에 허용된 IP가 추가되어 있어서 저희가 가져올 수 없는지 확인하세요. 모든 IP 화이트리스트를 제거해 주세요. 나중에 다시 추가할 수 있습니다.

![Mailgun IP 화이트리스트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053011609/original/jeX5H0Z7HskxTbYLqBiaDc9sqEipH4BMNQ.png?1756904672)

---

## **자주 묻는 질문**

**Q: Private API 키와 Public API 키 중 어느 것이 필요한가요?**

**Private API 키**를 사용하세요. Public 키로는 Hyperclass에서 공급자를 인증할 수 없습니다.

**Q: 제 도메인이 Mailgun EU에서 검증되었는데 왜 Hyperclass에서 선택할 수 없나요?**

Hyperclass는 **미국 지역**의 검증된 도메인만 읽습니다. Hyperclass에서 사용하려면 미국 지역 도메인을 생성하거나 마이그레이션하세요.

**Q: 에이전시와 하위 계정 모두에 키를 붙여넣으면 어떻게 되나요?**

**하위 계정** 구성이 해당 하위 계정의 에이전시 공급자를 재정의하여 클라이언트별 도메인과 발송을 허용합니다.

**Q: 여러 하위 계정이 하나의 Mailgun 키를 공유할 수 있나요?**

네. **에이전시** 레벨에 키를 붙여넣으면 검증된 미국 지역 도메인을 하위 계정 전체에서 사용할 수 있습니다. 클라이언트를 분리해야 하는 경우 하위 계정 레벨 키를 사용하세요.

**Q: 키를 저장한 후에도 도메인이 나타나지 않으면 어떻게 해야 하나요?**

미국 지역과 도메인 검증을 다시 확인하고, 동기화를 위해 Mailgun IP 허용 목록을 일시적으로 완화한 다음 복원하세요. 또한 의도한 레벨에서 저장하고 있는지 확인하세요.

---
*원문 최종 수정: Wed, 3 Sep, 2025 at 8:16 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*