---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007214-troubleshooting-not-receiving-the-otp-to-verify-your-whatsapp-number
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp 번호 인증 OTP가 오지 않을 때

서브 계정에서 WhatsApp 번호를 인증하는데 OTP(일회용 비밀번호)가 오지 않을 때 원인을 찾고 해결하는 방법을 안내해요.

## 이런 문제가 생기는 이유

OTP 인증이 실패하는 가장 흔한 이유는, 연결하려는 전화번호가 이미 WhatsApp Business 앱이나 WhatsApp Messenger에 등록되어 있기 때문이에요. 일반적인 연결 방식에서는 한 번호를 한 번에 한 WhatsApp 플랫폼에서만 쓸 수 있어요.

{% hint style="info" %}
한 번에 한 플랫폼에서만 쓸 수 있다는 규칙은 일반 연결 경로에 해당해요. 계정이 WhatsApp 코엑시스턴스(Coexistence)를 쓸 수 있는 경우에는, 별도의 전용 연결 절차를 통해 같은 번호를 WhatsApp Business 앱과 API에서 동시에 쓸 수 있어요. 이 절차는 OTP 확인을 위와 같은 방식으로 거치지 않아요. 같은 번호로 앱과 CRM을 함께 쓰고 싶다면, 아래 해결 방법 2를 적용하기 전에 코엑시스턴스를 쓸 수 있는지 먼저 확인하세요.
{% endhint %}

## 번호가 이미 등록되어 있는지 확인하기

전화번호가 지금 아래 중 한 곳에서 사용 중인지 확인하세요.

- WhatsApp Business 앱
- 일반 WhatsApp Messenger

번호가 이미 등록되어 있으면 WhatsApp이 연결 과정에서 OTP 발송을 막아요. WhatsApp Business에 번호가 등록되어 있는지는 아래 두 가지 방법으로 확인할 수 있어요.

**방법 1: WhatsApp의 Click to Chat 기능 사용하기**

1. 브라우저를 엽니다.
2. 아래 주소를 입력합니다. `<countrycode><phonenumber>` 자리에 국가 번호를 포함한 전체 번호를 넣으세요.

```
https://wa.me/<countrycode><phonenumber>

Example: https://wa.me/919876543210
```

3. Enter 키를 누릅니다.

결과는 이렇게 해석해요.

- WhatsApp이 열리면 → 번호가 WhatsApp에 등록되어 있어요(개인 계정일 수도, 비즈니스 계정일 수도 있어요).
- "Phone number shared via url is invalid"(URL로 공유된 전화번호가 올바르지 않습니다)라고 나오면 → 번호가 WhatsApp에 등록되어 있지 않아요.

**방법 2: WhatsApp Business 앱에서 확인하기**

1. 휴대폰 연락처에 해당 번호를 저장합니다.
2. WhatsApp을 엽니다.
3. **새 채팅 시작**을 선택한 뒤 저장한 연락처를 검색합니다.

결과는 이렇게 확인해요.

- 연락처가 나타나면 → 번호가 WhatsApp에 등록되어 있어요.
- 연락처가 나타나지 않으면 → 등록되어 있지 않아요.

비즈니스 앱 여부는 이렇게 알 수 있어요.

- 프로필에 "**비즈니스 계정**" 또는 **Verified Business**(인증된 비즈니스)라고 표시되면 WhatsApp Business에 등록된 번호예요.
- 비즈니스 계정에는 보통 비즈니스 이름과 업종이 표시되고, 카탈로그가 함께 보이기도 해요.

## 해결 방법 선택하기

둘 중 하나를 선택하세요.

|  |  |
| --- | --- |
| 1 | 다른 전화번호 사용하기(권장)<br>- WhatsApp에 한 번도 등록한 적 없는 새 번호를 준비하세요.<br>- 새 번호로 연결 절차를 진행하세요. |

|  |  |
| --- | --- |
| 2 | 기존 WhatsApp 계정 삭제하기<br>꼭 같은 번호를 써야 한다면 아래 순서를 차근차근 따라 하세요.<br>1. 같은 번호로 모바일 기기에 WhatsApp(Business 또는 일반)을 설치합니다.<br>2. WhatsApp을 열고 **설정**으로 이동합니다.<br>3. **계정**을 선택한 다음 **계정 삭제**를 누릅니다.<br>4. 모바일 기기에서 **삭제 확인**을 눌러 WhatsApp 계정 삭제를 확정합니다.<br>5. 몇 분 기다린 뒤, 서브 계정에서 연결 절차와 OTP 인증을 다시 진행합니다. |

{% hint style="warning" %}
WhatsApp 계정을 삭제하면 해당 번호와 연결된 대화 내역과 데이터가 영구적으로 지워져요.
{% endhint %}

## 그래도 OTP가 오지 않아요

아래 두 가지에 모두 해당하는데도 OTP를 받지 못한다면 지원 티켓을 등록해 주세요.

- 번호가 WhatsApp 또는 WhatsApp Business에 등록되어 있지 않아요.
- 그런데도 OTP가 오지 않아요.

티켓에는 다음 내용을 함께 적어 주세요.

- 전화번호(국가 번호 포함)
- 서브 계정 ID
- OTP 인증 중에 나온 오류 메시지 전체 또는 화면 캡처
- OTP 인증에 실패한 대략적인 시각

하이퍼클래스 고객지원 팀이 Meta와 함께 추가로 확인해 드려요.
