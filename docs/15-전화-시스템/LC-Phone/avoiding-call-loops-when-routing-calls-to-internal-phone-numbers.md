---

번역일: 2026-04-08
카테고리: 전화 시스템 > 전화
---

# 내부 전화번호로 통화 전달 시 통화 루프 방지하기

## **개요**

좋은 소식이 있어요! Hyperclass는 계정의 여러 부분에서 Hyperclass(Hyperclass) 전화번호를 유연하게 사용할 수 있도록 해드립니다. 비즈니스 전화번호로 사용하거나 고급 통화 라우팅 설정에서도 활용할 수 있죠. 이를 통해 숙련된 사용자는 특정 상황에 맞는 맞춤형 통화 흐름을 설계할 수 있습니다.

그렇지만 Hyperclass 전화번호를 통화 전달 대상으로 사용하는 등의 특정 구성은 올바르게 설정하지 않으면 의도치 않게 통화 루프를 만들 수 있어요. 이러한 루프는 일부 통화가 실패하거나 연결이 끊어지는 원인이 될 수 있습니다.

유연성을 제한하지 않으면서도 정보를 제공하기 위해, Hyperclass는 이제 Hyperclass 전화번호 사용 시 통화 문제가 발생할 수 있는 곳에 경고 메시지를 표시합니다. 이를 통해 설정의 잠재적 영향을 이해하면서 자신 있게 진행할 수 있어요.

## **왜 중요한가요?**

Hyperclass 전화번호를 통화 전달 번호나 라우팅 대상으로 사용하면 때때로 통화 루프가 생성될 수 있습니다.

통화 루프는 통화가 시스템 내에서 반복적으로 전달될 때 발생할 수 있으며, 다음과 같은 결과를 초래합니다:

- 통화 연결 실패
- 예상치 못한 통화 끊김
- 인바운드 통화가 의도한 수신자에게 도달하지 못함

일부 고급 사용자는 이러한 설정을 의도적으로 올바르게 구성할 수 있지만, 잘못 설정하면 쉽게 문제가 발생할 수 있습니다.

## **경고 동작**

이러한 설정을 차단하는 대신, Hyperclass는 정보에 입각한 결정을 내릴 수 있도록 경고 메시지를 표시합니다.

### 경고 메시지

여기에 CRM 전화번호를 사용하면 통화 루프가 생성되어 일부 통화가 실패할 수 있습니다. 더 알아보기

![Hyperclass 통화 루프 경고 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063655402/original/MzNef-iZi8FVagb9RHSjU1O16NK2o0eRWg.png?1769593232)

***참고 - 이 경고는 정보 제공 목적이며 설정 저장을 막지는 않습니다.***

## **경고가 나타나는 위치**

다음 영역에서 Hyperclass 전화번호를 사용하려고 할 때 경고가 나타납니다:

- 전화번호 설정(Phone Number Settings) (통화 전달)

![전화번호 설정에서의 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064142083/original/I32GuMvd7eNfYys2LwnYmsxbJ0fr0yKN0A.png?1770190760)

- 비즈니스 프로필(Business Profile) (비즈니스 전화번호)

![비즈니스 프로필에서의 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064145873/original/wla5TqCjgtzBd1pKHWjPlpXC0-owI63K_Q.png?1770193469)

- 스태프 프로필(Staff Profile) (사용자 전화번호)

![스태프 프로필에서의 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064145024/original/nAEqLwqJlyIvy4CYaFAe7wwuCKdf0EsJUw.png?1770192956)

- 번호 풀(Number Pool)

![번호 풀에서의 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064145329/original/FyDxbZqA_oMgojVAo1e_bStPVe2y1aop4Q.png?1770193144)

- 워크플로우(Workflows) (통화 라우팅 또는 전달 액션)

## **권장 모범 사례**

통화 문제를 방지하려면:

- 가능한 한 통화 전달에는 외부 전화번호(휴대폰, 유선전화 또는 VoIP)를 사용하세요.
- Hyperclass 전화번호를 사용하기로 선택한 경우:
  - 통화 흐름이 같은 번호로 다시 라우팅되지 않도록 하세요
  - 변경사항 저장 후 설정을 철저히 테스트하세요
  - 실패하거나 끊어진 통화에 대해 통화 로그를 모니터링하세요

## **핵심 포인트**

Hyperclass는 고급 통화 라우팅 설정에 대한 유연성을 제공하지만, CRM 전화번호를 전달이나 라우팅 대상으로 사용하려면 신중한 구성이 필요합니다. 이 경고는 위험을 이해한다면 계속 진행할 수 있도록 하면서도 통화 루프와 잠재적인 통화 실패를 방지하는 데 도움을 주기 위해 설계되었습니다.

---
*원문 최종 수정: Wed, 4 Feb, 2026 at 2:24 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*