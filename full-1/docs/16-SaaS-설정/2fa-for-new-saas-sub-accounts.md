---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001488-2fa-for-new-saas-sub-accounts
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# 새 SaaS 서브 계정에 2단계 인증(2FA) 적용하기

새로 가입한 SaaS 서브 계정이 전화번호를 구매하기 전에 2단계 인증(2FA)을 거치도록 설정할 수 있어요. 이 문서에서는 2FA가 필요한 이유, 작동 방식, 인증을 건너뛰는 방법을 설명해요.

## 사용 목적

VoIP 번호와 일회용 이메일 주소로 서브 계정을 여러 개 만드는 사기 행위로부터 SaaS 에이전시를 보호해요.

## 작동 방식

1. 에이전시 관리자는 **SaaS 구성기 > 고급 설정 > 2-Factor Authentication**(2단계 인증)에서 새로 가입하는 SaaS 서브 계정에 2FA를 켤 수 있어요.

   ![SaaS 구성기의 2단계 인증 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043388191/original/71LNHYYO9fPeOuIfIHqXTAzdqpLyPgAzoA.png?1742201029)
2. 고객이 처음으로 전화번호를 구매하려고 하면, 서브 계정 관리자에게 SMS를 받을 수 있는 전화번호를 입력하라는 안내가 나와요. 그 번호로 인증 코드가 전송되고, 관리자는 이 코드를 입력해야 해요.

   ![전화번호 입력 후 인증 코드를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013478151/original/nIRphKVFHbJ9TUBBTVMuJjz_UOOtLlfuOg.png?1700759362)
3. 2FA를 완료하면 전화번호를 계속 구매할 수 있어요.

{% hint style="warning" %}
서브 계정 인증에 한 번 사용한 전화번호는 7일이 지나기 전까지 다른 서브 계정을 만들거나 인증하는 데 쓸 수 없어요.
{% endhint %}

## 2단계 인증 건너뛰기

1. 서브 계정 관리자는 2FA를 건너뛸 방법이 없어요.
2. 에이전시 관리자는 해당 서브 계정의 **고객 관리** 페이지에서 코드 없이 수동으로 서브 계정을 인증할 수 있어요.

   ![서브 계정의 고객 관리 페이지에서 수동 인증하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013478357/original/ENsTpAonx1Bv_hYpnxY0-t5JQ2K69sNzSw.png?1700759472)
