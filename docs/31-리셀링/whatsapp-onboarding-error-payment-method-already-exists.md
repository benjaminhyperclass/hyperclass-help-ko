---
원문: /support/solutions/articles/155000006534-whatsapp-onboarding-error-payment-method-already-exists
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp 연결 오류 해결: 현재 WhatsApp 비즈니스 계정에 결제 수단이 이미 있다는 오류

WhatsApp 연결 중 "Please create a new WhatsApp Business Account since a payment method already exists for the current WhatsApp Business Account"(현재 WhatsApp 비즈니스 계정에 결제 수단이 이미 있으니 새 계정을 만들어 주세요)라는 오류가 나올 때 보는 문서예요. 원인과 해결 방법을 알려 드려요.

이 오류는 연결하려는 WhatsApp 비즈니스 계정(WABA)에 이미 사용 중인 결제 수단이 등록되어 있다는 뜻이에요. Meta는 결제 수단이 있는 WABA를 다른 플랫폼에 다시 연결하지 못하게 해요. 그래서 그 WABA를 다시 쓰려고 하면 연결이 실패해요.

![결제 수단이 이미 존재한다는 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055279710/original/F6ww2bYOX7RaQ5Q5Pt1Lu2qc54JZN5S0RQ.png?1759732539)

## 오류가 나는 이유

- 연결하려는 WABA를 이미 사용한 적이 있어요. Meta에서 직접 썼거나 다른 비즈니스 솔루션 공급자(BSP, Business Solution Provider)를 통해 썼을 수 있어요.
- Meta는 중복 청구를 막으려고, 청구 설정이나 결제 수단이 있는 WABA를 다른 BSP에 연결하지 못하게 해요.

## 해결 방법

연결을 끝내려면 기존 Meta Business Manager 안에 새 WhatsApp 비즈니스 계정(WABA)을 만들어야 해요. 아래 순서를 따라 하세요.

1. [Meta Business Settings](https://business.facebook.com/settings)에 접속해요.
2. 비즈니스 자산을 관리하는 Facebook 계정으로 로그인해요.
3. 왼쪽 메뉴에서 **Accounts**(계정) > **WhatsApp Accounts**(WhatsApp 계정)로 이동해요.
4. **+ Add**(추가)를 클릭해요.
5. **Create a New WhatsApp Business Account**(새 WhatsApp 비즈니스 계정 만들기)를 선택해요.
6. 새 계정의 이름을 입력해요. 다른 계정과 겹치지 않아야 해요(예: YourBusinessName-New).
7. 화면의 안내에 따라 설정을 마쳐요.
8. 하이퍼클래스의 WhatsApp 연결 화면으로 돌아와요.
9. WhatsApp **비즈니스 계정**을 선택하는 단계에서 방금 만든 WABA를 선택해요.
10. 나머지 연결 과정을 평소처럼 이어가요.

## 어떤 방식으로 설정해야 하나요?

- WhatsApp Business 앱을 계속 쓰고 싶다면, 조건이 맞을 때 **공존**을 사용하세요.
- 다른 WhatsApp 공급자에서 옮겨 오는 경우라면, 해당될 때 **Migrate from an Existing BSP**(기존 BSP에서 이전)를 사용하세요.
- 새 번호이거나 아직 쓰지 않은 번호로 시작한다면 새 WABA를 만드세요.
- 선택한 WABA에서 결제 수단 오류가 나온다면 다른 WABA를 만들거나, 조건에 맞는 다른 WABA를 선택하세요.

{% hint style="warning" %}
**중요:** 새 WABA를 만든다고 해서 항상 새 전화번호가 필요한 것은 아니에요.
{% endhint %}

## 새 WABA로도 실패하면 어떻게 하나요?

전화번호가 이미 다른 곳에 연결되어 있거나 다른 연결 문제가 있으면 새 WABA로도 실패할 수 있어요. 아래 내용을 확인하세요.

1. 새로 만든 WABA를 선택했는지 확인해요.
2. 새로 나온 오류 메시지를 꼼꼼히 읽어요.
3. **전화번호**가 WhatsApp, WhatsApp Business, 다른 공급자 중 어딘가에 아직 연결되어 있는지 확인해요.
4. 올바른 연결 방식을 쓰고 있는지 확인해요.
5. 전화번호 인증을 다시 시도해요.
6. 문제가 계속되면 아래 문의용 정보를 모아 두세요.

## "Last Onboarding Failed" 메시지는 무슨 뜻인가요?

"Last Onboarding Failed"(마지막 연결 실패) 메시지는 WABA가 이미 하이퍼클래스의 다른 서비스 계정(Location)에 연결되어 있을 때 나올 수 있어요.

오류 메시지에 WABA가 이미 특정 Location ID에 연결되어 있다고 나오면 이렇게 하세요.

1. 오류 메시지에 나온 Location ID를 적어 둬요.
2. 지금 그 WABA가 연결되어 있는 하이퍼클래스 서비스 계정(Location)을 찾아요.
3. 그 계정에서 WABA 연결을 해제해요.
4. 원래 연결하려던 계정으로 돌아와 연결을 처음부터 다시 시작해요.

이 오류 때문에 WABA를 또 만들 필요는 없어요.

## 문의할 때 준비할 정보

연결이 계속 실패하면 하이퍼클래스 고객지원에 문의하기 전에 아래 정보를 모아 두세요.

- 하이퍼클래스 Location ID
- 국가 번호를 포함한 전화번호
- WABA ID
- Phone Number ID(있는 경우)
- 오류 메시지 전체 내용
- 오류 화면 스크린샷
- 실패한 시도의 대략적인 시간
- 사용한 연결 방식
- 해당 번호가 WhatsApp, WhatsApp Business, 다른 공급자 중 어디에 연결되어 있는지
- 이미 해 본 문제 해결 단계
- Meta 오류 코드나 `fbtrace_id`(있는 경우)

## 추가 팁

기존 WABA가 다른 서비스나 캠페인에 연결되어 있다면 삭제하지 마세요.

- 어떤 결제 수단이 연결되어 있는지 모르겠다면 [Meta 결제 설정](https://business.facebook.com/billing_hub)에서 등록된 설정을 확인하세요.
- 같은 번호를 이전에 다른 공급자에 연결한 적이 있다면, 연결할 때 새 WABA를 사용하세요.
