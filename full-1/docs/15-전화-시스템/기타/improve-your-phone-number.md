---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008284-branded-calling-improve-your-phone-number-reputation
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 브랜디드 콜링으로 전화번호 평판 높이기

브랜디드 콜링은 발신자 인증, 발신자 이름 표시, 전화번호 평판 관리를 함께 활용해서 아웃바운드 통화의 신뢰도를 높이는 방법이에요. 하이퍼클래스에서는 SHAKEN/STIR, CNAM, **음성 정합성**(Voice Integrity)이 이 과정의 서로 다른 부분을 맡아요. 필요한 등록을 마치면 통신사와 수신자가 정상적인 비즈니스 통화를 알아보는 데 도움이 돼요. 다만 실제 발신자 표시와 스팸 표시 여부는 통신사, 단말기, 분석 업체에 따라 달라질 수 있어요.

## 브랜디드 콜링이란?

브랜디드 콜링은 누가 거는 전화인지, 정상적인 통화인지를 통신사와 수신자가 알 수 있게 해 주는 신뢰 신호를 합쳐 부르는 말이에요. 전화번호만 보여 주는 대신 인증, 발신자 이름 등록, 평판 서비스를 함께 사용해서 아웃바운드 통화의 인지도를 높일 수 있어요.

등록을 하면 신뢰 신호는 좋아지지만, 통화 응답률이 높아지거나 앞으로 스팸 표시가 붙지 않는다고 보장하지는 않아요. 통화 방식, 수신자 피드백, 통화량, 통신사 정책은 계속 전화번호 평판에 영향을 줘요.

{% hint style="info" %}
브랜디드 콜링을 사용해도 모든 수신자에게 비즈니스 이름이나 신뢰 통화 표시가 보이거나, 스팸 표시 없이 전화가 걸린다고 보장하지는 않아요. 발신자 표시는 수신자의 통신사, 단말기, 요금제, 연락처 설정, 발신자 표시 분석 업체에 따라 달라져요.
{% endhint %}

![브랜디드 콜링 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076694857/original/iehRMu9_aQ3iO4GE5FIfx5KXVDve_m-dCg.png?1784811790)

## SHAKEN/STIR, CNAM, 음성 정합성이 함께 작동하는 방식

등록마다 해결하는 문제가 달라요. 차이를 알면 알맞은 등록을 골라 권장 순서대로 진행할 수 있어요.

| 신뢰 단계 | 등록 | 하는 일 | 상태 | 주요 한계 |
| --- | --- | --- | --- | --- |
| 인증 | SHAKEN/STIR | 발신자 표시 정보를 인증하고, 발신자가 해당 번호를 사용할 권한이 있는지 확인하는 데 도움을 줘요 | **음성 정합성** 전에 필수 | 불필요 통화 표시나 스팸 표시를 없애 주지는 않아요 |
| 식별 | CNAM | 미국 전화번호를 등록된 비즈니스 이름이나 개인 이름과 연결해요 | **음성 정합성**에는 선택이지만 적극 권장 | 이름이 표시된다고 보장하지는 않아요 |
| 평판 | **음성 정합성** | 조건에 맞는 미국 번호를 First Orion, Hiya, TNS에 등록해서 평판 검토를 받아요 | 조건에 맞는 미국 번호에 권장 | 검토와 표시 변경에 시간이 걸릴 수 있어요 |

## SHAKEN/STIR 발신자 인증

SHAKEN/STIR는 브랜디드 콜링의 인증 기반이에요. 디지털 인증서를 사용해서 통신사가 발신자 표시 정보가 정상인지, 발신자가 해당 전화번호를 사용할 권한이 있는지 확인할 수 있게 해 줘요.

{% hint style="info" %}
EIN이 없는 비즈니스는 문서에 안내된 SHAKEN/STIR 및 CNAM 등록 절차를 이용할 수 없어요. 이런 경우에는 Free Caller Registry를 대안으로 검토해 보세요. 조건에 맞는 미국 번호를 평판 검토에 제출할 수 있어요.

자세히 알아보기: [Remediate "Spam Likely" on Your Caller ID Using Free Caller Registry](../통화/remediate-spam-likely-on-your-caller-id-using-free-caller-registry.md)
{% endhint %}

SHAKEN/STIR로 할 수 있는 일은 다음과 같아요.

- 발신자 표시 정보를 인증해요.
- 발신자 표시 도용(스푸핑)과 사기를 막는 데 도움이 돼요.
- 정상적인 아웃바운드 통화에 대한 통신사의 신뢰를 높여요.
- 수신 통신사에 따라 신뢰할 수 있는 통화나 인증된 통화로 표시될 가능성이 높아져요.
- **음성 정합성** 신청 자격을 갖추는 데 도움이 돼요.

SHAKEN/STIR는 불필요 통화 표시나 스팸 표시를 없애 주지 않아요. 번호가 인증되어 있어도 통화 패턴, 신고, 분석 업체 데이터, 이전 활동에 따라 표시가 붙을 수 있어요.

{% hint style="info" %}
조건에 맞는 A2P 등록과 연결된 전화번호는 자동으로 등록될 수 있어요. 그 외 사용자는 **신뢰 센터**에서 등록할 수 있어요.

자세히 알아보기: [What is SHAKEN/STIR?](../통화/what-is-shaken-stir.md)
{% endhint %}

![SHAKEN/STIR 인증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076705941/original/RgzbK_QTXk1QZx0sAlVdNqEvdxoncNXrQg.png?1784817015)

## CNAM 발신자 이름 표시

CNAM은 미국 전화번호를 등록된 비즈니스 이름이나 개인 이름과 연결해서, 수신자가 내 전화를 알아보도록 도와줘요. 아웃바운드 통화를 걸면 수신 통신사가 그 이름을 가져와 표시할 수 있어요.

CNAM으로 할 수 있는 일은 다음과 같아요.

- 내 번호를 알아보기 쉬운 이름과 연결해요.
- 발신자를 더 잘 알아볼 수 있게 해요.
- 연락처가 전화를 건 비즈니스를 알아보는 데 도움이 돼요.
- SHAKEN/STIR 인증에 더해 식별 단계를 추가해요.

하이퍼클래스 **신뢰 센터**에서 CNAM을 등록하려면 EIN이 필요해요.

{% hint style="info" %}
자세히 알아보기: [What is CNAM?](../통화/what-is-cnam.md)
{% endhint %}

![CNAM 발신자 이름 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076704164/original/3Qx_WmKVoYmrBXG36Gnq_mOag0NMzHs5vA.png?1784816180)

## 음성 정합성과 전화번호 평판

**음성 정합성**을 쓰면 조건에 맞는 비즈니스가 미국 전화번호를 주요 발신자 표시 분석 업체에 제출할 수 있어요. 이 업체들은 통화 평판을 평가하고, 통신사와 발신자 표시 앱이 통화에 표시를 붙일지 판단할 때 쓰는 정보를 제공해요.

{% hint style="info" %}
**음성 정합성** 신청서를 제출하기 전에 SHAKEN/STIR 등록을 먼저 마쳐야 해요. CNAM은 선택이지만, 정확한 발신자 이름을 추가하는 것을 권장해요.
{% endhint %}

하이퍼클래스는 **음성 정합성** 등록을 다음 업체에 제출해요.

- First Orion
- Hiya
- TNS

**음성 정합성**으로 도움받을 수 있는 일은 다음과 같아요.

- 잘못 붙은 "Spam Likely" 표시를 바로잡아요.
- 이전에 스팸으로 분류된 번호의 평판을 회복해요.
- 분석 업체에 정확한 비즈니스 정보와 통화 용도를 제공해요.
- 정상적인 통화가 잘못된 경고 없이 수신자에게 도달할 가능성을 높여요.

분석 업체마다 등록을 따로 검토해요. 신청은 보통 영업일 기준 2일 이내에 처리되지만, 모든 네트워크와 플랫폼에서 스팸 표시가 바뀌려면 더 오래 걸릴 수 있어요.

{% hint style="info" %}
자세히 알아보기: [Improve Your Phone Number's Reputation with Voice Integrity](../전화번호/improve-your-phone-number-s-reputation-with-voice-integrity.md)
{% endhint %}

![음성 정합성과 전화번호 평판](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076707685/original/jhv2Nad2HedISUWZEcqvip-2bhw-Btiovw.png?1784817863)

## 자주 묻는 질문

### 브랜디드 콜링을 하려면 세 가지 등록이 모두 필요한가요?
**음성 정합성**을 제출하려면 SHAKEN/STIR가 먼저 필요해요. CNAM은 **음성 정합성**에는 선택이지만 적극 권장해요. 세 가지를 모두 사용하면 인증, 식별, 평판 신호를 더 완성도 있게 갖출 수 있어요.

### 브랜디드 콜링을 하면 내 비즈니스 이름이 꼭 표시되나요?
아니요. CNAM은 내 번호에 이름을 연결해 주지만, 그 이름을 실제로 표시할지는 수신 통신사와 단말기가 정해요.

### SHAKEN/STIR와 CNAM을 등록하려면 EIN이 꼭 필요한가요?
네, EIN은 필수예요.

### SHAKEN/STIR를 등록하면 "Spam Likely" 표시가 없어지나요?
아니요. SHAKEN/STIR는 발신자 표시 정보를 인증하지만, 불필요 통화 표시나 스팸 표시를 직접 없애 주지는 않아요.

### SHAKEN/STIR 승인 전에 **음성 정합성**을 등록할 수 있나요?
아니요. **음성 정합성** 등록을 마치려면 SHAKEN/STIR를 먼저 설정해야 해요.

### **음성 정합성**에 CNAM이 필수인가요?
아니요. CNAM은 선택이에요. 다만 정확한 발신자 이름이 등록에 신뢰 신호를 더해 주기 때문에 권장해요.

### 해외 전화번호에도 **음성 정합성**을 쓸 수 있나요?
아니요. **음성 정합성**은 현재 미국 전화번호만 지원해요.

### **음성 정합성** 승인 후 스팸 표시는 얼마나 빨리 없어지나요?
**음성 정합성** 신청은 보통 영업일 기준 2일 이내에 처리돼요. 하지만 통신사, 단말기, 발신자 표시 플랫폼 전체에 변경 사항이 반영되려면 더 오래 걸릴 수 있어요.

### 사업자에게 EIN이 없으면 어떻게 하나요?
조건에 맞는 미국 번호를 위한 평판 개선 대안으로 Free Caller Registry를 검토해 보세요. 다만 SHAKEN/STIR나 CNAM을 대신하지는 않아요. 자세한 내용은 [Remediate "Spam Likely" on Your Caller ID Using Free Caller Registry](../통화/remediate-spam-likely-on-your-caller-id-using-free-caller-registry.md) 문서를 참고하세요.

### 등록한 뒤에도 내 번호에 다시 스팸 표시가 붙을 수 있나요?
네. 통신사와 분석 업체는 통화량, 수신자 신고, 참여도, 통화 패턴 같은 평판 신호를 계속 평가해요. 자세한 내용은 [Why Are My Calls Marked as Spam, and How Can I Avoid It?](../통화/why-are-my-calls-marked-as-spam-and-how-can-i-avoid-it.md)와 [Recommendations and Best Practices for Maintaining a Positive Caller Reputation](../통화/recommendations-and-best-practices-for-maintaining-a-positive-caller-reputation.md) 문서를 참고하세요.

### 인증된 발신자 번호(verified caller ID)와 SHAKEN/STIR는 같은 건가요?
아니요. 발신번호를 선택하거나 인증하면 승인된 번호 중 어느 번호가 표시될지 정해져요. SHAKEN/STIR는 그 번호를 사용할 권한이 있는지를 따로 인증해요.
