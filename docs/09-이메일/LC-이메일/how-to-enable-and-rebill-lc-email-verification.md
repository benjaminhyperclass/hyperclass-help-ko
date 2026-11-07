---
원문: /support/solutions/articles/48001235221-how-to-enable-and-rebill-lc-email-verification
번역일: 2026-11-06
카테고리: 09-이메일
---

# 하이퍼클래스 이메일 검증 켜기와 재청구 설정

이메일을 보내기 전에 주소가 실제로 있는 활성 주소인지 자동으로 확인해서 발신자 평판을 지키고 전달률을 높이는 기능이에요. 하이퍼클래스 이메일과 Mailgun에서 사용할 수 있어요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## 이 문서에서 다루는 내용

이메일 검증은 이메일을 보내기 전에 주소가 정상인지, 활성 상태인지 한꺼번에 확인하는 도구예요. 켜 두면 백그라운드에서 자동으로 실행되므로 직접 할 일은 없어요.

이 문서에서는 다음 내용을 안내해요.

- 에이전시와 서브 계정에서 이메일 검증을 켜는 방법
- 90일마다 다시 검증하는 방법
- 요금과 재청구 설정
- 연락처별 검증 상태를 확인하는 방법

## 이메일 검증이란

이메일 검증은 이메일 주소가 정상적이고 활성 상태인 계정의 조건을 갖췄는지 확인하는 백그라운드 작업이에요. 켜 두면 자동으로 실행되므로 직접 시작할 필요가 없어요.

가짜 주소나 사용하지 않는 주소를 발송 전에 걸러 내면 발송 점수가 높게 유지되고 이메일 전달률도 크게 좋아져요. 이메일 주소의 상태는 시간이 지나면 바뀔 수 있으므로, 90일마다 다시 검증하도록 설정할 수도 있어요.

{% hint style="info" %}
이메일 검증은 유료 서비스예요. 하이퍼클래스 이메일과 Mailgun 이메일 제공업체에서만 사용할 수 있어요.
{% endhint %}

## 에이전시에서 이메일 검증 켜기

에이전시 관리자는 **설정**에서 서브 계정별로, 또는 모든 서브 계정에 한꺼번에 이메일 검증을 켜거나 끌 수 있어요.

1. 에이전시 대시보드를 열고 **설정**으로 이동하세요.

   ![에이전시 설정으로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226444/original/BmdtAPhC_AVF0oeJONK0GfYUKuI58wSjdg.png?1737504795)

2. **이메일 서비스 > Location Settings**(서브 계정 설정)로 이동한 다음 **이메일 검증** 열을 찾으세요.

   ![이메일 서비스의 서브 계정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226468/original/3Pa434oDNqywtAwKMJwsUo5gzpxviq3RAQ.png?1737504887)

3. 서브 계정마다 이메일 검증 토글을 켜거나 끄세요. 모든 서브 계정에 한꺼번에 적용하려면 일괄 적용 토글을 사용하세요.

   ![서브 계정별 이메일 검증 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226484/original/1r_FrAbbQAaa9K1H1Bg9wxpKgJ0YsWs1RA.png?1737504968)

4. (선택) 새로 만드는 서브 계정의 기본 동작을 정하려면 **고급 설정**으로 이동하세요. 그리고 **Automatically enable email verification for new Subaccounts**(새 서브 계정에 이메일 검증 자동 활성화)를 체크하거나 체크 해제하세요.

   ![새 서브 계정에 이메일 검증을 자동으로 켜는 고급 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226767/original/tjBsZtiTzP9nxA3pj7WwVtRUolE4Fq86cA.png?1737506094)

## 서브 계정에서 이메일 검증 켜기

서브 계정 사용자도 자기 계정 설정에서 직접 이메일 검증을 켤 수 있어요.

1. 서브 계정을 열고 **설정**으로 이동하세요.

   ![서브 계정 설정으로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226719/original/dUw4mXRhuaZ5TCLgsajdcEGO_TEzAC3vEw.png?1737505836)

2. **설정** 안에서 **비즈니스 프로필 > 일반**으로 이동하세요.

   ![비즈니스 프로필의 일반 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226733/original/GPwxyWWVxdylX5rmqrrSMUQMO1OdYYK6Xg.png?1737505901)

3. **Verify Email**(이메일 검증) 체크박스를 체크하거나 체크 해제해서 이 서브 계정의 이메일 검증을 켜거나 끄세요.

   ![서브 계정 설정의 이메일 검증 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226749/original/4EFxdTjfNaZ6brzMO_wFU_8Ad5-Rnj2BXg.png?1737505937)

{% hint style="info" %}
서브 계정 사용자가 이메일 검증을 켜면, 활성 상태인 모든 에이전시 관리자와 회사의 등록 이메일 주소로 알림이 자동으로 발송돼요(하이퍼클래스 이메일 사용 시에만). 제목 줄은 "ATTN: Email Verification Enabled in Sub-Account"(서브 계정에서 이메일 검증이 활성화됨)예요.
{% endhint %}

![서브 계정에서 검증을 켰을 때 에이전시 관리자에게 가는 알림 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029902371/original/GIN4_Fw_IN3QaYv5k9TPQIeWSt1F-OgPow.jpg?1721926642)

## 90일마다 이메일 다시 검증하기

이메일 주소의 상태는 시간이 지나면서 바뀔 수 있어요. 6개월 전에는 정상이던 주소가 지금은 사용하지 않는 주소일 수도 있죠. 90일 재검증을 켜 두면 이런 변화를 발송 점수가 떨어진 뒤가 아니라 떨어지기 전에 잡아낼 수 있어요.

1. **에이전시 > 서브 계정**으로 이동하세요. 서브 계정 카드 오른쪽 아래의 점 세 개 메뉴를 클릭하고 **고객 관리**를 선택하세요.

   ![서브 계정 카드의 점 세 개 메뉴와 고객 관리 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226787/original/GYYxPDEUZlzGxEZLaEG2L9vd-8x2k7V53g.png?1737506220)

2. **고급 설정 > 고급 이메일 설정**으로 이동하세요. 그리고 **90일 재검증 활성화**를 체크하거나 체크 해제하세요.

   ![고급 이메일 설정의 90일 재검증 활성화 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226804/original/3NDtG-FaLhZrJuPdH4PjCCRFJ9CVlIpwmg.png?1737506342)

## 이메일 검증 요금과 재청구

이메일 검증은 모든 플랜에서 이메일 검증 1,000건당 $2.50이에요. 대부분의 다른 제공업체보다 훨씬 저렴해요(예: Mailgun은 1,000건당 $12).

**하이퍼클래스 이메일 인증**의 재청구 설정은 **SaaS 구성기 > 플랜 상세 > 재청구**에 있어요. 재청구 기능은 플랜에 따라 달라요.

| 플랜 | 재청구 기능 |
| --- | --- |
| Starter | 재청구 불가 |
| Unlimited | 고정 마크업만 가능(1.05배) |
| Pro | 변동 마크업 가능(1.05배~10배) |

![이메일 검증 재청구를 설정하는 SaaS 구성기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040226905/original/3n_R-VvMrLnzpi0n3JKwX6g1gbCSa_bOhg.png?1737506674)

이메일 검증 요금을 건별로 확인하려면 에이전시 청구 지갑으로 이동하세요. 실행 내역이 하나하나 나뉘어 표시되므로 사용량을 투명하게 확인할 수 있어요.

1. 에이전시 대시보드를 열고 **설정**으로 이동하세요.

   ![에이전시 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300128/original/arhHUQsbo9aVrGwGQI9r0YcvjJYUapTB8Q.png?1737596728)

2. **청구/결제 > 지갑 및 거래 내역**으로 이동한 다음 **상세 거래 내역**을 여세요.

   ![청구/결제의 지갑 및 거래 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300100/original/Cht9DFF36yQaJKnY1JVRE_IIo9xuQZ5f8g.png?1737596561)

3. 필터로 **이메일 검증** 항목만 표시한 다음, 각 거래를 클릭해서 자세한 내역을 확인하세요.

   ![이메일 검증 요금만 보도록 거래 내역을 필터링한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300126/original/wXYCGB6MXvRNpdodySbMi0DXIwTizc-46A.png?1737596703)

## 이메일 검증이 동작하는 방식

이메일 검증이 켜져 있으면, 아직 검증하지 않은 모든 이메일 주소는 첫 이메일을 보내기 전에 검증돼요. 90일 재검증도 켜져 있다면 검증 후 90일이 지난 주소는 검증이 만료되고, 다음 발송 전에 다시 확인해요.

**연락처 세부정보** 페이지에서 연락처별 검증 상태를 직접 확인하거나 검증을 실행할 수도 있어요.

1. 서브 계정의 **연락처**로 이동하세요.

   ![서브 계정의 연락처 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300160/original/SKALqJ_LL8rxLaZEnTLKDl0ezY0AIPcnaQ.png?1737596920)

2. 목록에서 연락처를 선택해 상세 화면을 여세요.

   ![연락처 상세 화면 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300210/original/1Q8oQog4BgRGb0F-0x-Fqo21WRN7R5J4FQ.png?1737597032)

3. 상세 패널에서 **연락처** 섹션을 클릭해 펼치세요.

   ![연락처 세부정보에서 연락처 섹션 펼치기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300233/original/kEive6W3un5YtnbZ2ZUXMd_LJsU5m0Ikqw.png?1737597112)

4. 아래로 스크롤해서 **이메일** 필드를 찾으세요. 이 필드에 연락처 이메일 주소의 현재 검증 상태가 표시돼요.

   ![연락처 세부정보 페이지의 이메일 필드에 표시된 검증 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040440257/original/FJYzNO-k72vrGzNDGyN2Ij9YXP1dlTEt6g.png?1737770899)

검증 상태의 의미는 다음과 같아요.

| 상태 | 의미 |
| --- | --- |
| **미인증** | 이메일 검증 서비스에서 아직 확인하지 않은 이메일이에요. |
| **Invalid**(유효하지 않음) | 확인했지만 이메일 검증을 통과하지 못했어요. 이 주소로는 이메일이 발송되지 않아요. |
| **Verified**(인증됨) | 확인했고 이메일 검증을 통과했어요. 안전하게 보낼 수 있어요. |

![미인증 상태 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300289/original/kvN55koy3sDHrGJXgDXIkSvAk13u-WgfNw.png?1737597234)

미인증 상태

![유효하지 않음 상태 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300292/original/xqVPIQfH1Set388He-QkYoEOsNzwMSkrTA.png?1737597259)

유효하지 않음 상태

![인증됨 상태 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040300294/original/A1DriVwG5LvV65BmqXhRbf4RwIltTTViuA.png?1737597283)

인증됨 상태

## 이메일 검증이 실제로 확인하는 것

이메일 검증 도구는 기술적인 검사를 여러 단계로 실행해서 주소가 실제로 있고 메일을 받을 수 있는지 판단해요. 각 검사는 다음과 같아요.

1. 구문 검증: name@domain.com처럼 주소 형식이 올바른지 확인해요. @가 빠졌거나 사용할 수 없는 문자가 들어간 명백한 오타를 걸러 내요.
2. 도메인/MX 레코드 조회: 도메인(예: gmail.com)에 활성 MX 레코드가 있는지 확인해요. 도메인이 이메일을 받도록 설정되어 있는지 알 수 있어요.
3. SMTP 핑(메일함 존재 확인): 메일 서버에 연결해서 해당 메일함이 있는지 물어봐요. 실제로 메시지를 보내지는 않아요. 서버가 있다고 응답하면 주소를 "유효"로 표시해요.

{% hint style="info" %}
세 가지 검사를 모두 통과했다면 검증 시점에 그 주소가 존재하는 것으로 보인다는 뜻이에요. 이메일이 받은편지함에 도착한다는 뜻은 아니에요.
{% endhint %}

## 이메일 검증이 보장하지 않는 것

이메일 검증은 발송 전에 하는 점검이라서 발송 중과 발송 후에 일어나는 일은 통제할 수 없어요. 다음 항목은 검증이 보장하지 않아요.

- 이메일이 반송되지 않는 것: "유효"한 주소도 발송 후에 거부될 수 있어요.
- 이메일이 스팸함으로 가거나 조용히 폐기되지 않고 받은편지함에 도착하는 것
- 주소가 계속 활성 상태인 것: 검증을 통과한 뒤에도 메일함이 비활성화될 수 있어요.
- 발신 도메인이나 IP가 차단 목록에 올라 있지 않은 것
- 수신자의 받은편지함이 가득 차지 않았고 일시적인 서버 문제도 없는 것

{% hint style="info" %}
검증은 지도에서 우편 주소가 있는지 확인하는 것과 비슷해요. 문 앞에서 택배를 받아 준다는 보장도, 마지막으로 확인한 뒤 그 집에서 이사 간 사람이 없다는 보장도 아니에요.
{% endhint %}

## 검증된 이메일이 반송되는 흔한 이유

검증을 통과한 뒤에도 이메일이 전달되지 않을 수 있어요. 가장 흔한 원인과, 검증이 이를 잡아내지 못하는 이유는 다음과 같아요.

| 원인 | 검증이 놓치는 이유 |
| --- | --- |
| 캐치올 도메인 | 서버가 SMTP 확인 단계에서는 모든 주소를 받아들이고, 발송 후에 없는 메일함을 거부해요. |
| 검증 후 메일함 비활성화 | 확인한 시점에는 유효한 주소였지만, 이후 계정이 삭제되거나 정지됐어요. |
| 발신자 평판 / IP 차단 목록 | 검증은 수신자 쪽을 확인할 뿐, 발신 도메인이나 IP가 신뢰받는지는 확인하지 않아요. |
| 스팸 / 콘텐츠 필터링 | 수신자의 메일 서버가 콘텐츠를 보고, 또는 DMARC/SPF/DKIM 실패를 이유로 메시지를 거부해요. |
| 역할 기반 주소 필터링 | info@, admin@, noreply@ 같은 주소는 유효하다고 확인되더라도 정책상 마케팅 이메일을 거부할 수 있어요. |
| 일시적인 소프트 바운스 | 발송 시점에 서버가 다운됐거나 용량이 찼거나 그레이리스팅 중이었던 경우로, 주소 유효성과는 관계가 없어요. |

{% hint style="warning" %}
가장 흔한 원인은 캐치올 도메인이에요. 서버가 SMTP 확인 단계에서 일부러 모든 주소를 받아들이기 때문에, 검증 도구가 실제 메일함과 캐치올을 안정적으로 구별할 방법이 없어요.
{% endhint %}

## 자주 묻는 질문

### 이메일 검증은 무엇을 확인하나요?
이메일 주소가 Mailgun의 알려진 "불량" 목록에 있는지 확인해요. 그 밖에 구문이 올바른지, 도메인이 이메일을 받도록 설정되어 있는지, 주소가 실제로 존재하는지, 위험도가 높은 주소가 아닌지, info@domain.com이나 admin@domain.com 같은 역할 기반 주소가 아닌지도 확인해요.

### 이메일 검증이 왜 중요한가요?
유효하지 않은 주소를 제거해서 전달률을 높이고, 목록 상태를 깨끗하게 유지해요. 오픈율이나 CTR 같은 마케팅 지표도 좋아지고, 발신자 평판도 지킬 수 있어요. 모두 이메일이 받은편지함에 도착하는지에 직접 영향을 줘요.

### 이메일 검증은 이메일 전달률에 어떤 영향을 주나요?
반송된 이메일은 IP 주소와 도메인 평판을 떨어뜨려요. 이메일 서비스 제공업체가 메시지를 전달하지 못하면 이메일 클라이언트에 이 도메인을 신뢰하기 어려울 수 있다는 신호가 가요. 그러면 이후 이메일이 스팸함으로 가거나 아예 차단될 수 있어요. 발송 전에 주소를 검증하면 반송률이 낮아지고 발신자 평판을 유지할 수 있어요.

### 제 서브 계정에 이메일 검증이 자동으로 켜져 있는 이유가 뭔가요?
만든 지 30일 이내의 서브 계정 중에서, 가져온 이메일 목록의 전달률이 90% 아래로 떨어진 경우에 이메일 검증이 자동으로 켜져요. 계정의 목록 품질이 자리 잡는 동안 발신자 평판을 보호하기 위한 안전장치예요.

### 이메일 목록은 언제 검증해야 하나요?
구매한 메일링 목록(권장하지 않아요)이나 출처를 잘 모르는 목록을 넘겨받았을 때 검증하세요. 목록이 크게 늘었거나 한동안 정리하지 않았을 때도 마찬가지예요. 확신이 없다면 상태를 점검해 보세요. 오래된 주소를 반송으로 뒤늦게 알게 되는 것보다 미리 찾아내는 편이 항상 나아요.

### 고객의 이메일 검증 사용량은 어디에서 볼 수 있나요?
**에이전시 설정 > 청구/결제 > See Details**(세부 정보 보기, **Credits**(크레딧) 아래)로 이동하면 고객별 사용량을 볼 수 있어요. 전체 내역을 항목별로 보려면 **청구/결제 > 지갑 및 거래 내역 > 상세 거래 내역**에서 이메일 검증으로 필터링하세요.

### 고객에게 이메일 검증 사용량을 청구하려면 어떻게 하나요?
Unlimited 또는 Pro 플랜이라면 **SaaS 구성기 > 플랜 상세 > 재청구**에서 재청구를 켤 수 있어요. 비용에 마크업을 더해 고객에게 자동으로 청구하므로, 직접 인보이스를 보낼 필요가 없어요.

### 이미 이메일을 보낸 연락처에도 이메일 검증이 영향을 주나요?
아니요. 검증은 해당 연락처에게 보내는 다음 이메일 발송 전에만 실행돼요. 이미 보낸 이메일에는 영향이 없어요. 90일 재검증이 켜져 있으면 연락처의 검증 상태가 90일 뒤에 만료되고, 이후 발송 전에 다시 확인해요.
