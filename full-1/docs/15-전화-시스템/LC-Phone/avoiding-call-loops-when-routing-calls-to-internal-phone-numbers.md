---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007297-avoid-call-loops-when-routing-calls-to-internal-phone-numbers
번역일: 2026-11-07
카테고리: 15-전화-시스템
---

# 내부 전화번호로 통화를 연결할 때 통화 루프 피하기

통화 루프가 왜 생기는지, 하이퍼클래스 어디에서 경고가 표시되는지, 통화 연결을 어떻게 설정해야 통화 실패나 끊김을 줄일 수 있는지 알려 드려요.

## 통화 루프는 어떻게 생기나요?

하이퍼클래스 전화번호는 계정 곳곳에서 자유롭게 쓸 수 있어요. **비즈니스 전화번호**로 쓸 수 있고, 고급 통화 연결 설정에도 쓸 수 있어요. 덕분에 숙련된 사용자는 상황에 맞게 통화 흐름을 직접 설계할 수 있어요.

다만 하이퍼클래스 전화번호를 착신 전환 대상으로 지정하는 것처럼 일부 설정은 제대로 구성하지 않으면 의도치 않게 통화 루프를 만들 수 있어요. 루프가 생기면 일부 통화가 실패하거나 끊길 수 있어요.

하이퍼클래스는 사용자의 선택권을 제한하지 않으면서 미리 알려 드리려고, 하이퍼클래스 전화번호가 통화 문제로 이어질 수 있는 곳에 경고 메시지를 표시해요. 설정이 미칠 수 있는 영향을 알고 안심하고 진행할 수 있어요.

## 통화 루프가 왜 문제가 되나요?

통화 루프는 통화가 원래 가야 할 목적지에 닿지 못하고, 같은 전화 시스템 안으로 계속 되돌아오는 현상이에요. 이 동작을 알아 두면 수신 통화를 방해할 수 있는 연결 설정을 피할 수 있어요.

통화 루프가 생기면 다음과 같은 일이 일어날 수 있어요.

- 통화가 연결되지 않아요.
- 통화가 갑자기 끊겨요.
- 수신 통화가 받아야 할 사람에게 전달되지 않아요.

고급 통화 연결 설정에도 하이퍼클래스 전화번호를 쓸 수 있어요. 대신 통화가 같은 번호로 다시 돌아오지 않도록 통화 흐름을 꼼꼼하게 구성해야 해요.

## 경고는 어떻게 표시되나요?

하이퍼클래스는 설정을 아예 막지 않고, 안내용 경고만 보여 줘요. 고급 통화 연결 설정은 그대로 쓸 수 있어요. 변경 내용을 저장하기 전에 위험 가능성을 미리 알 수 있어요.

### 경고 메시지

통화 루프가 생길 수 있는 설정이 감지되면 다음 경고가 표시돼요.

여기에 CRM 전화번호를 사용하면 통화 루프가 생겨 일부 통화가 실패할 수 있어요. 자세히 알아보기

{% hint style="info" %}
이 경고는 안내용이에요. 경고가 표시되어도 설정을 저장할 수 있어요.
{% endhint %}

![통화 루프 경고 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063655402/original/MzNef-iZi8FVagb9RHSjU1O16NK2o0eRWg.png?1769593232)

## 경고가 표시되는 위치

다음 위치에서 하이퍼클래스 전화번호를 사용하려고 하면 경고가 표시돼요.

- **Phone Number Settings**(전화번호 설정)의 착신 전환

  ![전화번호 설정의 착신 전환 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064142083/original/I32GuMvd7eNfYys2LwnYmsxbJ0fr0yKN0A.png?1770190760)
- **비즈니스 프로필**의 **비즈니스 전화번호**

  ![비즈니스 프로필의 비즈니스 전화번호 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064145873/original/wla5TqCjgtzBd1pKHWjPlpXC0-owI63K_Q.png?1770193469)
- **Staff Profile**(스태프 프로필)의 **User Phone Number**(사용자 전화번호)

  ![스태프 프로필의 사용자 전화번호 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064145024/original/nAEqLwqJlyIvy4CYaFAe7wwuCKdf0EsJUw.png?1770192956)
- **번호 풀**

  ![번호 풀 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064145329/original/FyDxbZqA_oMgojVAo1e_bStPVe2y1aop4Q.png?1770193144)

## 통화 문제를 피하는 방법

통화 문제를 피하려면 다음을 권장해요.

- 착신 전환에는 가능하면 외부 전화번호(휴대전화, 유선전화, VoIP)를 쓰세요.
- 하이퍼클래스 전화번호를 쓰기로 했다면 다음을 지키세요.
  - 통화가 같은 번호로 다시 돌아가지 않도록 통화 흐름을 구성하세요.
  - 변경 내용을 저장한 뒤 설정을 꼼꼼히 테스트하세요.
  - 통화 기록에서 실패하거나 끊긴 통화가 없는지 확인하세요.
