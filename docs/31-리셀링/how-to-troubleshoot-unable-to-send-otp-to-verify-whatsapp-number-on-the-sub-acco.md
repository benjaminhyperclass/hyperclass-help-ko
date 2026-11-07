---
원문: /support/solutions/articles/155000005116-how-to-troubleshoot-unable-to-send-otp-to-verify-whatsapp-number-on-the-sub-account
번역일: 2026-11-07
카테고리: 31-리셀링
---

# 서브 계정에서 WhatsApp 인증 OTP가 오지 않을 때

서브 계정에서 WhatsApp 번호를 인증하려는데 일회용 인증 코드(OTP)가 오지 않을 때 확인할 내용이에요. 번호가 이미 일반 WhatsApp Business 앱에 등록되어 있는 경우를 다룹니다.

## 문제

서브 계정에서 WhatsApp 번호를 인증하는 데 필요한 OTP를 받지 못해요.

## 원인

이 문제는 보통 해당 WhatsApp 번호가 이미 일반 WhatsApp Business 앱에 등록되어 있을 때 생겨요.

---

## 해결 방법

아래 순서대로 확인하고 조치하세요.

### WhatsApp 등록 여부 확인

- 해당 전화번호가 이미 WhatsApp에서 사용 중인지 확인하세요.
- 온라인 도구인 [2Chat WhatsApp Checker](https://2chat.co/tools/whatsapp-checker)에서 번호가 등록되어 있는지 확인할 수 있어요.
- WhatsApp 또는 WhatsApp Business 앱에서 직접 확인할 수도 있어요.

### 번호가 이미 등록되어 있다면

일반 WhatsApp Business 앱에 등록된 번호는 WhatsApp Business API(WABA)에 사용할 수 없어요. 아래 중 하나를 선택하세요.

- WABA에 등록할 다른 전화번호를 사용하세요.
- 그 번호에 연결된 기존 WhatsApp 계정을 비활성화한 뒤 다시 등록하세요.

{% hint style="info" %}
계정을 비활성화한 뒤 번호가 완전히 해제되어 WABA 등록에 쓸 수 있게 되기까지는 시간이 걸릴 수 있어요.
{% endhint %}
