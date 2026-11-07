---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001305-how-to-configure-contacts-limit-for-saas-sub-accounts
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# SaaS 서브 계정의 연락처 제한 설정하기

SaaS 모드에서는 서브 계정에서 만들 수 있는 연락처 수를 제한할 수 있어요. 이 문서에서는 SaaS 플랜 전체에 제한을 거는 방법과, 특정 서브 계정의 제한만 따로 바꾸는 방법을 안내해요. 이 설정은 에이전시 관리자만 쓸 수 있어요.

{% hint style="warning" %}
연락처 제한은 완전한 제한이 아니에요. 제한을 모두 채운 뒤에도 API, 폼, 워크플로우 등을 통해서는 서브 계정에 연락처가 더 만들어질 수 있어요. 다만 화면에서 연락처를 직접 만들거나 한꺼번에 가져오는 것은 할 수 없어요.
{% endhint %}

![연락처 제한 설정 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010764886/original/9ayXK3MedkuT1JLB-SkJA1drKLS23k_OiA.png?1698039994)

## SaaS 플랜에 연락처 제한 설정하기

1. **SaaS 구성기**로 이동해요.
2. 연락처 제한을 설정할 플랜에서 **세부 정보 수정**을 선택해요.
3. **사용 제한** 탭으로 이동해요. 여기에서 **연락처 제한** 옵션을 찾을 수 있어요.

   ![사용 제한 탭의 연락처 제한 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010785820/original/uCVkxCo-szCIBK7iYGasO_UpIPy1uPrwOw.png?1698052937)

4. 기본값은 연락처를 제한 없이 만들 수 있는 상태예요. **연락처 제한** 토글을 켜고, 이 플랜에 적용할 제한 수를 입력해요.

   ![연락처 제한 토글을 켜고 제한 수를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010786045/original/Gys-OwLlTxGNc4YWEu9JZFN1BlFdwO1Y7A.png?1698053005)

5. **저장**을 선택해요.

{% hint style="info" %}
이제 플랜에 연락처 제한이 설정돼요. 이 플랜으로 새로 만들거나 이 플랜으로 업그레이드하는 서브 계정에는 이 제한이 적용돼요.
<!-- 검토 필요: 원문 내용이 서로 다름 (원문에는 'contact limit'이 아니라 'user limit'으로 적혀 있음) -->
{% endhint %}

## 특정 서브 계정의 연락처 제한 바꾸기

1. 에이전시 화면에서 **서브 계정** 페이지로 이동해요.
2. 연락처 제한을 설정할 서브 계정을 선택해요.
3. **고객 관리** 페이지가 열리면 **사용 제한** 섹션으로 이동해요. 여기에서 **연락처 제한**을 찾을 수 있어요.

   ![고객 관리 페이지의 사용 제한 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010786960/original/7zXxbMG0Ych7IuonVWaThtf4mqJqmMNrCw.png?1698053393)

4. 원하는 제한 수를 설정하거나 수정한 뒤 **저장**을 선택해요.

{% hint style="info" %}
**고객 관리** 페이지에서 설정한 연락처 제한은 해당 서브 계정이 가입한 플랜의 제한보다 우선해요. 서브 계정이 플랜을 업그레이드하면 제한도 새 플랜 기준으로 다시 설정돼요.
{% endhint %}
