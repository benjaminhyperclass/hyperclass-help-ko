---

번역일: 2026-04-08
카테고리: 전화 시스템 > 통화
---

# Hyperclass 전화 시스템의 로컬 발신번호 표시 기능

고객의 지역에 따라 현지 전화번호를 표시하여 통화 응답률을 높여보세요. 로컬 발신번호 표시(Local Presence Dialing) 기능은 수신자의 지역번호와 일치하거나 가장 가까운 발신번호를 자동으로 선택하여, 고객이 더 편안하게 전화를 받을 수 있도록 도와줍니다. 이 기능은 미국과 캐나다의 여러 지역에서 사업을 운영하는 기업에게 특히 유용하며, 고객 응답률을 높이고 놓친 통화를 줄여줍니다.

---

## 로컬 발신번호 표시란?

로컬 발신번호 표시는 연락처의 전화번호 지역번호를 기준으로 가장 적합한 발신 전화번호/발신번호를 동적으로 선택하는 기능입니다. 구매하고 인증한 지역별 전화번호를 활용하여 통화가 수신자에게 현지 번호로 표시되므로, 통화 응답률이 크게 개선되고 신뢰도가 높아집니다.

### 중요 포인트

- **해당 지역의 모든 지역번호 지원**: 달라스의 241 지역번호로 연락처에 전화를 걸 때
  - 241 지역번호를 가진 전화번호가 있다면, 해당 번호로 통화가 진행됩니다
  - 241 지역번호는 없지만 달라스의 다른 지역번호인 972 번호가 있다면, 972 번호가 사용됩니다
  - 달라스의 어떤 지역번호도 없다면, 하위 계정의 기본 전화번호가 사용됩니다

- **지역과 일치하는 전화번호가 없을 경우 하위 계정의 기본 전화번호를 백업으로 사용**

- **미국/캐나다만 지원**

---

## 로컬 발신번호 표시의 주요 장점

로컬 발신번호 표시는 고객 참여도를 개선하고 신뢰를 구축하는 데 도움이 되는 여러 가지 장점을 제공합니다.

- **높은 응답률**: 현지 발신번호는 친숙하게 느껴져서 모르는 번호라도 받을 가능성이 높아집니다.

- **브랜드 신뢰도 향상**: 일관된 현지 번호 표시가 신뢰성을 구축하고 스팸으로 인식될 가능성을 줄입니다.

- **자동 번호 선택**: 수동으로 전환할 필요 없이 통화 시 자동으로 일치하거나 지역 번호를 사용합니다.

- **지역 대체 지원**: 정확한 지역번호 일치가 없을 경우 같은 지역의 다른 번호를 사용합니다.

- **유연성**: 하위 계정 수준에서 활성화/비활성화할 수 있어 누가 이 기능을 사용할지 제어할 수 있습니다.

---

## 로컬 발신번호 표시 작동 원리

기능이 발신번호를 선택하는 방식을 이해하면 발신 통화에서 최대 효과를 얻을 수 있습니다.

- 발신 통화를 시작할 때 시스템은 연락처의 전화번호 지역번호를 사용 가능한 번호 풀과 비교 확인합니다.

- 정확히 일치하는 번호가 있으면 해당 번호를 발신번호로 사용합니다.

- 정확한 일치가 없으면 같은 지리적 지역의 번호를 사용하려고 시도합니다(예: 달라스의 다른 지역번호).

- 지역 일치도 없으면 하위 계정의 기본 발신번호를 사용합니다.

- 번호 선택 로직은 사용자 개입 없이 실시간으로 실행됩니다.

---

## 로컬 발신번호 표시 설정하기

적절한 설정을 통해 발신 통화가 자동으로 지역 번호를 활용하여 최대 효과를 얻을 수 있습니다.

- **Settings(설정) > Phone Numbers(전화번호) > Advanced Settings(고급 설정) > Voice Calls(음성 통화) > Outbound Call(발신 통화) > Default Phone Number for Outbound Calls(발신 통화 기본 전화번호)**로 이동하세요.

- **Enable Local Presence Dialing(로컬 발신번호 표시 활성화)** 토글을 **On**으로 설정하세요.

![로컬 발신번호 표시 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052178244/original/oM3E5f1hZR_8vP6RfMXvuT0jW6xWsAMPuA.png?1755871116)

---

## 사용 사례 예시

동일한 지역번호로 연락처에 자동으로 전화를 걸어 통화 응답률을 높이는 예시입니다.

**예시 1:** 텍사스 달라스(달라스 지역번호 214)에 있는 사람에게 전화 걸기

![달라스 연락처 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052178492/original/00PdMp8jcNV50ULahIkfokw8WYKg1qqQag.png?1755871252)

달라스 번호를 자동으로 사용합니다(사용 가능한 경우)

![달라스 번호 자동 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052178526/original/SLc_B11iBVjKM8wqZkYqxI8Vl3BnZjg8oQ.png?1755871287)

**예시 2:** 지역번호 888로 전화 걸기

![888 지역번호 연락처](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052178756/original/Q5co1zhtlmC3XAFfi2_CzR6yiHME8rDDMw.png?1755871442)

사용 가능한 모든 전화번호 중에서 연락처와 동일한 지역번호의 전화번호로 자동으로 통화하여 신뢰도를 높이고 통화 응답 가능성을 향상시킵니다.

![동일 지역번호 자동 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052178877/original/doNeqK8Lg8iFkYnymE9kJUZDYLnCIiwHZg.png?1755871483)

---

## 자주 묻는 질문

**Q: 연락처의 지역번호가 구매한 번호와 일치하지 않으면 어떻게 되나요?**
시스템이 하위 계정의 기본 비즈니스 발신번호로 대체됩니다.

**Q: 특정 통화에 대해 자동 선택을 무시할 수 있나요?**
네. 통화 전에 다이얼러 상단바의 Change(변경)를 클릭하고 전화번호를 선택할 수 있습니다. 통화 후에는 시스템이 다시 로컬 발신번호 표시로 전환됩니다. 발신 번호 선택을 유지하려면 로컬 발신번호 표시를 비활성화할 수 있습니다.

**Q: 추가할 수 있는 번호 개수에 제한이 있나요?**
하위 계정의 모든 전화번호와 인증된 발신번호(Verified Caller ID)를 지원합니다. 별도의 제한은 없습니다.

**Q: 인증된 발신번호(Verified Caller ID)도 지원하나요?**
네, 지원합니다. 통화에 사용할 발신번호를 결정할 때 인증된 발신번호의 지역번호도 고려됩니다.

**Q: 자체 Twilio 계정을 사용하는 경우에도 작동하나요?**
네, 로컬 발신번호 표시는 자체 Twilio 계정에서도 작동합니다.

**Q: 특정 하위 계정이나 사용자에 대해 로컬 발신번호 표시를 비활성화할 수 있나요?**
로컬 발신번호 표시는 하위 계정 수준에서는 비활성화할 수 있지만 개별 사용자에 대해서는 불가능합니다.

**Q: 이 기능을 해외에서도 사용할 수 있나요?**
로컬 발신번호 표시는 현재 미국과 캐나다에서만 지원됩니다.

**Q: 로컬 발신번호 표시가 통화 응답률을 자동으로 개선하나요?**
친숙한 현지 번호를 표시하면 수신자가 전화를 받을 가능성이 높아지지만 보장은 할 수 없습니다.

---

## 관련 가이드

- [Free Caller Registry로 '스팸 의심' 발신번호 표시 해결하기](remediate-spam-likely-on-your-caller-id-using-free-caller-registry.md)
- [내 통화가 스팸으로 표시되는 이유와 예방 방법](why-are-my-calls-marked-as-spam-and-how-can-i-avoid-it-.md)
- [전화번호 설정 옵션 개요](../overview-of-phone-number-configuration-options.md)
- [긍정적인 발신자 평판 유지를 위한 권장사항과 모범 사례](recommendations-and-best-practices-for-maintaining-a-positive-caller-reputation.md)
- [인증된 발신번호 설정 방법 (음성 통화용 번호 사용)](../LC-Phone/how-to-set-up-verified-caller-id-use-your-number-for-voice-calls-.md)
- [Voice Integrity로 전화번호 평판 개선하기](../전화번호/improve-your-phone-number-s-reputation-with-voice-integrity.md)

---
*원문 최종 수정: Thu, 16 Oct, 2025 at 1:02 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*