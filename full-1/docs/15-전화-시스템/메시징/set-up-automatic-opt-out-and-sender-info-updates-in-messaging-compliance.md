---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006771-set-up-automatic-opt-out-and-sender-info-updates-in-messaging-compliance
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 메시징 규정 준수에서 수신 거부 문구·발신자 정보 자동 추가 설정하기

진행 중인 SMS/MMS 대화에 수신 거부 문구와 발신자 정보를 일정 주기로 자동으로 다시 넣어 주는 기능이에요. 이 문서에서는 기능이 무엇인지, 왜 필요한지, 계정에서 어떻게 설정하는지 알려 드려요.

## 이 기능은 무엇인가요?

여러 캠페인을 운영하면서 SMS/MMS 규정을 계속 지키기는 쉽지 않아요. 이 문서에서 다루는 **Automatically Add Opt-Out & Sender Info to Messages Periodically**(수신 거부 문구와 발신자 정보를 주기적으로 메시지에 자동 추가)는 필요한 수신 거부 문구와 발신자 정보를 SMS/MMS 대화에 일정한 간격으로 붙여 주는 컴플라이언스 자동화 기능이에요.

진행 중인 대화에도 TCPA, CTIA, GDPR, CCPA 기준을 계속 충족하도록 도와줘요. 그래서 규제 위반으로 인한 불이익이나 메시지 필터링 위험을 줄일 수 있어요.

한 번 설정해 두면 "Reply STOP to unsubscribe" 같은 수신 거부 문구와 발신자 이름을 시스템이 알아서 갱신해요. 대화마다 직접 넣을 필요가 없어요.

## 주요 장점

이 자동화는 규정 준수를 간단하게 하고, 캠페인 전반의 메시지 전달률을 안정적으로 유지하도록 만들어졌어요.

- 지속적인 규정 준수: 진행 중인 모든 SMS/MMS 대화에 필수 고지 사항이 주기적으로 들어가요.
- 주기 설정 가능: 규정 준수 정보를 갱신하는 간격을 1일에서 60일 사이로 고를 수 있어요. 기본값은 30일이에요.
- 손쉬운 자동화: 백그라운드에서 작동해서 직접 확인하고 관리하는 시간을 줄여 줘요.
- 높은 전달률: 통신사와 규제 가이드라인에 맞게 메시지를 유지해서 스팸 필터링을 줄여요.
- 투명성 향상: 발신자와 수신 거부 방법이 분명하게 보여서 수신자의 신뢰를 얻을 수 있어요.

## 수신 거부 문구·발신자 정보 자동 추가 설정하기

아래 단계를 따라 SMS/MMS 대화에 규정 준수 정보를 자동으로 갱신하도록 설정하세요. 각 단계는 스크린샷의 순서와 같아서 화면을 보며 따라 하기 쉬워요.

### 시작하기 전에

**서브 계정별 설정**

**정기 수신 거부 활성화** 설정은 서브 계정(로케이션) 단위로 적용돼요. 이 설정을 켜면 진행 중인 대화에서 발신자 정보와 수신 거부 문구를 일정 간격으로 다시 넣어 줘요.

**켜 두면 좋은 경우**

- 오래 이어지는 대화에서도 규정 준수 문구가 자동으로 갱신되기를 원할 때
- 반복 프로모션이나 육성 메시지를 보내면서 수신 거부 안내를 일정하게 보여 주고 싶을 때

**꺼도 되는 경우**

- 첫 메시지에만 규정 준수 문구가 들어가면 충분하고, 주기적으로 다시 넣고 싶지 않을 때
- 후속 메시지의 규정 준수 문구를 직접 관리할 때 (권장하지 않아요)

**기본값**

- 신규 서브 계정: 켜짐
- 기존 서브 계정: 꺼짐

정기 규정 준수 업데이트를 켰는지와 관계없이, 대화에서 처음 보내는 SMS에는 발신자 정보와 수신 거부 문구가 들어가요.

### 1단계. 설정으로 이동하기

메인 대시보드의 왼쪽 메뉴에서 **설정**을 클릭하세요. 시스템 수준의 설정을 관리하는 곳이에요.

![왼쪽 메뉴의 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673225/original/yZgrKyZ9AcEayLR6sDrBaDBdQZlwxZJaCw.png?1761216175)

### 2단계. 설정에서 전화번호 열기

**설정** 메뉴에서 **전화번호**를 선택하세요(**설정 > 전화번호**). 연결된 모든 전화번호의 메시지, 음성, 규정 준수 설정을 관리하는 곳이에요.

![설정 아래의 전화번호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673278/original/WTbY05gedpMahf3YSOnahPlXukZiPinAlg.png?1761216199)

### 3단계. 메시지 탭으로 이동하기

**전화 시스템** 페이지 상단에서 **메시지** 탭을 클릭하세요. 이 탭에는 메시지 전달, 규정 준수, 분석과 관련된 설정이 모여 있어요.

![전화 시스템 페이지의 메시지 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673422/original/2wbAd271moAAxe1W8ncGA8exNhbEJu5WEg.png?1761216266)

### 4단계. 메시징 규정 준수 열기

**메시지** 탭 안에서 **메시징 규정 준수** 하위 탭을 선택하세요. 수신 거부 메시지, 발신자 정보, 정기 규정 준수 자동화 같은 컴플라이언스 관련 설정이 들어 있어요.

![메시징 규정 준수 하위 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056674386/original/FxUg3VFlGjspu6zvIkKGR4clWcaR3AteTw.png?1761216797)

### 5단계. 수신 거부 메시지 추가하기

수신 거부 메시지를 추가하면 보내는 모든 SMS에 수신 거부 방법이 분명하게 들어가요. TCPA와 CTIA에서 요구하는 핵심 사항이에요.

1. **Make SMS compliant by adding an opt-out message**(수신 거부 메시지를 추가해 SMS를 규정에 맞게 만들기)를 켜세요.
2. 수신 거부 문구를 입력하세요. 예: *Reply STOP to Unsubscribe!*
3. **커스터마이징**을 클릭해 편집 창을 여세요.

![수신 거부 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056674022/original/jeMAi8xivw2q9V6PvjJlmnCrTv6aYceASw.jpeg?1761216668)
![수신 거부 메시지 맞춤 설정 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673569/original/x8XDsGR49AM0etDpm0OCYtagrTc6AagZaA.png?1761216353)

### 6단계. 발신자 정보 추가하기

발신자 정보를 넣으면 수신자가 누가 보낸 메시지인지 알 수 있어요. 신뢰도가 높아지고 규정 준수에도 도움이 돼요.

1. **Make SMS compliant by adding sender information**(발신자 정보를 추가해 SMS를 규정에 맞게 만들기)을 켜세요.
2. **비즈니스 이름 입력** 칸에 비즈니스 이름이나 발신자 서명을 입력하세요. 예: *Thanks, Chase Sandbox*
3. **커스터마이징**을 클릭해 발신자 문구와 위치를 편집하세요.

![발신자 정보 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673590/original/g-bRefMYWPlWdqOebKPqWo7ayLT9vLZtOA.png?1761216397)
![발신자 정보 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673630/original/nCMHAol7dqbw0oRe0zk2pM-evl90G77HDw.png?1761216437)
![발신자 정보 맞춤 설정 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673661/original/7ELeLgKBhoaHye4fRFc_EDgPGoFY8H3vRw.png?1761216458)

### 7단계. 정기 수신 거부 활성화

정기 업데이트를 켜면 간격을 1일에서 60일 사이로 고를 수 있어요. 정해 둔 간격이 지나면 하이퍼클래스가 해당 연락처에게 보내는 다음 메시지를 확인해요. 발신자 정보와 수신 거부 문구가 없으면 다시 넣어 줘요.

1. **정기 수신 거부 활성화**를 켜세요. 이 서브 계정에서 정기 재삽입을 끄려면 이 설정을 끄세요.
2. **Include Sender ID & Opt-Out Message Every [X] Days**(발신자 ID와 수신 거부 메시지를 [X]일마다 포함)에서 간격을 고르세요(1~60일).
3. **저장**을 클릭해 변경 사항을 적용하세요.

![일 단위 간격을 고르는 정기 수신 거부 활성화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673866/original/87ks2l_4vkI5uxEsv_gWl7Stfo3sLKS-5Q.png?1761216523)

### 8단계. 지역 제한 적용하기 (선택)

필요하다면 **Block any SMS/MMS to Texas recipients or from Texas area-code numbers**(텍사스 수신자에게 보내거나 텍사스 지역번호 번호에서 보내는 모든 SMS/MMS 차단)를 켤 수 있어요. 주(州)별 메시징 규정을 지키는 데 도움이 돼요.

![지역 제한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056673894/original/o63j_NXEFxCnQZ9WoLvJtKiFQegtUrL1yQ.png?1761216556)

---

## 하이퍼클래스가 수신 거부 문구 중복을 막는 방법

하이퍼클래스는 수신 거부 문구를 자동으로 추가하기 전에, 보내는 메시지에 이미 수신 거부 안내가 있는지 확인해요. 메시지에 올바른 수신 거부 안내가 이미 있으면 수신자가 같은 규정 준수 문구를 반복해서 보지 않아도 돼요.

메시지에 이미 "Reply STOP to unsubscribe"처럼 완전한 수신 거부 안내가 들어 있으면, 하이퍼클래스는 수신 거부 메시지를 또 추가하지 않아요.

하이퍼클래스는 개별 키워드가 아니라 완전한 수신 거부 안내가 있는지를 살펴요. 예를 들어 일반 문장에 "stop"이라는 단어가 들어 있어도 규정 준수 메시지는 그대로 추가돼요.

## 자주 묻는 질문

### 이 자동화는 이전 대화에도 적용되나요?

아니요. 새로운 대화와 진행 중인 대화에만 적용돼요. 지난 메시지는 그대로 유지돼요.

### 수신 거부 정보를 다시 넣는 시점은 어떻게 정해지나요?

설정한 주기(예: 30일마다)를 기준으로 해요. 시스템이 메시지 대화를 자동으로 추적하다가, 주기가 지나면 규정 준수 정보를 갱신해요.

### 규정 준수를 직접 관리하는 경우 이 기능을 끌 수 있나요?

대부분의 대상 계정에서는 끌 수 있어요. 진행 중인 대화에 발신자 정보와 수신 거부 문구가 다시 들어가는 걸 원하지 않으면 정기 재삽입을 끄세요. 이때도 처음 보내는 메시지에는 해당 규정 준수 정보가 들어가요.

체험 모드(Trial Mode)의 에이전시, 만든 지 15일 이내의 서브 계정, 이 설정을 바꿀 권한이 없는 사용자는 일부 규정 준수 설정을 끌 수 없어요.

### 이 기능은 메시지 전달률과 통신사 필터링에 어떤 영향을 주나요?

통신사는 발신자 정보나 수신 거부 안내가 없는 메시지를 걸러 내거나 차단하는 경우가 많아요. 메시지를 규정에 맞게 최신 상태로 유지하면 전달률을 높게 유지하고, 통신사 제재나 메시지 차단을 막는 데 도움이 돼요.

### 주기는 어떻게 정하면 좋나요?

1일에서 60일 사이로 자유롭게 정할 수 있어요. 기본값인 30일은 대부분의 발신자에게 잘 맞아요. 수신 거부 문구가 계속 보이면서도 지나치게 반복되지 않거든요. 발송 빈도가 높은 캠페인은 짧게, 발송량이 적고 오래 이어지는 대화는 길게 정하세요.

### 이 설정이 모든 서브 계정에 한꺼번에 적용되나요?

아니요. **정기 수신 거부 활성화**는 서브 계정(로케이션) 단위로 적용돼서 서브 계정마다 따로 설정해야 해요. 신규 서브 계정은 기본적으로 켜져 있고, 기존 서브 계정은 꺼져 있어요.

### 처음 보내는 메시지에도 규정 준수 정보가 들어가나요?

네. 첫 메시지 동작은 달라지지 않아요. 정기 수신 거부를 켰는지와 관계없이, 대화에서 처음 보내는 메시지에는 발신자 정보와 수신 거부 문구가 들어가요.
