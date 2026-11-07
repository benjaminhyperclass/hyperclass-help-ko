---
원문: /support/solutions/articles/155000005131-migrating-international-numbers-twilio-to-lc-phone-
번역일: 2026-11-07
카테고리: 15-전화-시스템
---

# 해외 번호 직접 이전하기 (Twilio → 하이퍼클래스 전화)

Twilio의 해외 번호를 하이퍼클래스 전화로 이전하는 중에 진행이 멈춘 것 같을 때, 이전을 **직접** 마무리하는 방법을 안내해요. 이전 기능이 개선된 버전으로 나오기 전까지 쓰는 임시 방법이에요.

![해외 번호 이전 안내 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051327391/original/HGQgiI84RMzA0lHZdWrT-hnh-uGiuGzbWw.png?1754908671)
![해외 번호 이전 안내 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051327183/original/vaj_MhszJm_4Mllnb8d3U0ted4pKffEhIg.png?1754908549)

---

## 직접 이전하는 순서

### 1. 서브 계정을 하이퍼클래스 전화로 이전하기

하이퍼클래스 계정의 **전화 연동** 설정에서 이전을 시작하세요. 상태가 **Migration in Progress**(마이그레이션 진행 중)로 바뀌어요.

{% hint style="info" %}
이전이 멈춰 있다면 아래 단계를 이어서 진행하세요.
{% endhint %}

---

### 2. 규정 번들과 주소 만들기

Twilio 규정을 지키려면 꼭 필요한 단계예요. 만드는 방법은 [규정 번들 만드는 방법](https://www.twilio.com/en-us/guidelines/regulatory)에서 확인할 수 있어요.

1. Twilio 콘솔에 들어가세요.
2. 이전할 전화번호와 같은 국가·지역으로 **규정 번들**을 만드세요.
3. 번들에 연결할 **Regulatory Address**(규정 주소)를 추가하세요.
4. 번들이 알맞은 **번호 유형**(예: Mobile, Local, Toll-Free)으로 승인되었는지 확인하세요.

---

### 3. 하이퍼클래스 고객지원에 필요한 정보 요청하기

하이퍼클래스 고객지원이나 파트너 담당자에게 문의해서 아래 정보를 받으세요.

- **수신 계정 SID**
- **Regulatory Bundle SID**(규정 번들 SID)
- **Regulatory Address SID**(규정 주소 SID)

---

### 4. Twilio에서 직접 번호 이전 요청하기

Twilio의 지원 티켓 기능으로 번호 이전을 직접 요청해요.

1. Twilio 콘솔에 로그인하세요.
2. **지원 티켓**을 만들어 현재 계정의 번호를 전달받은 **수신 계정 SID**로 옮겨 달라고 요청하세요.
3. 티켓의 **참조**에 `migration@leadconnectorhq.com`을 넣으세요.
4. 요청 내용에 LOA(Letter of Authorization, 위임장), 번들 SID, 주소 SID를 함께 적으세요.

---

## 자주 겪는 문제

| 문제 | 설명 |
| --- | --- |
| "Migration in Progress" 상태에서 멈춤 | 규정 요건을 다 채우지 않았을 때 자주 생겨요. |
| 규정 승인 누락 | 직접 이전을 시작하기 전에 번들이 완전히 승인되어 있어야 해요. |
| 번들의 번호 유형이 맞지 않음 | 번들을 번호 유형(Local, Mobile, Toll-Free)에 맞게 설정하세요. |
