---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006078-xero-integration-with-highlevel
번역일: 2026-11-06
카테고리: 08-결제
---

# Xero 연동으로 인보이스 동기화하기

결제 - **Xero 연동** 기능은 하이퍼클래스와 Xero 사이에서 연락처와 인보이스를 자동으로 동기화해요. 변경 사항이 실시간으로 반영되고 세금도 정확하게 매핑되어, 수작업을 줄이고 두 시스템의 데이터를 일관되게 유지할 수 있어요.

## Xero 연동 한눈에 보기

Xero 연동을 쓰면 하이퍼클래스에서 만든 인보이스를 Xero로 단방향 동기화할 수 있어요. 먼저 Xero의 연락처를 하이퍼클래스로 가져오기 때문에, 인보이스를 동기화할 때 알맞은 Xero 연락처와 연결돼요. 일치하는 연락처가 없으면 인보이스를 동기화하는 중에 Xero에 새 연락처가 만들어져요.

**현재 동기화되는 항목**

- 연락처: Xero에서 하이퍼클래스로 가져와 매핑에 사용해요. 일치하는 연락처가 없으면 인보이스를 동기화할 때 Xero에 새 연락처가 만들어져요.
- 인보이스: 하이퍼클래스에서 만든 인보이스는 Xero에 자동으로 만들어져요. 항목 라인과 할인도 함께 들어가요. 상품은 Xero에 만들어지지 않고, 항목 라인은 인보이스에만 남아요.
- 세금: 매핑된 세금이 Xero에 이미 있으면 그 세금이 적용돼요. 없으면 새 세율이 만들어져 인보이스와 함께 전송돼요.
- 통화: 인보이스 통화가 Xero로 전달돼요. Xero 조직에 없는 통화는 새로 추가돼요. Xero 요금제가 다중 통화를 지원하는지 확인하세요.
- 상태: 인보이스 상태가 바뀔 때마다 Xero에 동기화돼요. 예: 발송됨, **부분 결제됨**, 무효

**동기화되지 않는 항목**

- 영수증: 이 연동에는 영수증 동기화가 포함되어 있지 않아요. 곧 지원할 예정이에요.

### 흐름도

![Xero 연동 흐름도](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052075397/original/JBkgecCQkPnRuEeHkRTHVxGZqjTegX8jyw.png?1755774291)

---

## Xero 연동의 장점

이 연동을 쓰면 재무 업무를 더 효율적이고 정확하게 처리할 수 있어요.

- 새로 만들거나 수정한 연락처를 자동으로 동기화해 기록을 정확하게 유지해요.
- 최신 결제 상태와 세금 정보가 담긴 인보이스를 하이퍼클래스에서 Xero로 바로 전달해요.
- 복합 세금 구조에서도 세금을 정확하게 매핑해 규정을 지킬 수 있어요.
- 결제가 활성화된 계정만 보이도록 걸러서, 필요한 데이터만 깔끔하게 볼 수 있어요.

---

## Xero 연동 설정하기

하이퍼클래스 서브 계정을 Xero에 연결하면 재무 데이터가 두 플랫폼 사이를 자연스럽게 오가요. 다음 단계를 따라 연동을 설정하세요.

### 1단계: 연동에서 Xero 열기

왼쪽 메뉴에서 **설정 > 연동 > Xero**를 클릭하세요.

![설정 > 연동 > Xero 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052070129/original/uzX2jg7WfM2yiVPnqkjVRQoGzHr2W1LUTQ.png?1755771800)

### 2단계: Xero 선택

연동 목록에서 Xero 타일을 클릭한 다음 **연결**을 선택하세요. 권한을 승인하는 Xero 보안 창이 열려요.

![연동 목록에서 Xero 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907154/original/GBLAjHNNQejAbp4YrY-Jv0nGdybkIU65Xg.png?1761568772)

### 3단계: 로그인 및 권한 승인

Xero 로그인 창이 나오면 로그인하세요. 연결할 Xero 조직을 선택하고 **Allow access**(액세스 허용)를 클릭하세요. 하이퍼클래스는 연락처와 설정을 읽고 인보이스 거래를 만드는 데 필요한 표준 권한을 요청해요.

![Xero 권한 승인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907424/original/8VgcvzeiTBD-50UXRDzPwJg_wVeCAgjqQw.png?1761568913)

{% hint style="info" %}
연결한 뒤에는 하이퍼클래스에서 연결을 확인하세요. **설정 > 연동 > Xero**에서 연결된 조직 이름과 연결 상태를 볼 수 있어요.
{% endhint %}

### 4단계: 인보이스 기본 계정 선택

하이퍼클래스 안의 Xero 설정 창에서, 인보이스를 등록할 때 사용할 계정과 조직을 선택하세요.

![인보이스 기본 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907699/original/NLtmmZwE-jGy0o-SBZJ8xhQgIb4Ll05NMQ.png?1761569114)

---

## Xero 연동에서 계정과목표(Chart of Accounts)가 보이지 않을 때

Xero를 연결했는데 하이퍼클래스에서 계정과목표가 보이지 않으면, 아래 단계로 계정과목표를 활성화하세요.

### 1단계: Xero에서 설정으로 이동

Xero 대시보드에서 조직을 선택하세요. 드롭다운 메뉴에서 **설정**을 클릭하세요.

![Xero 대시보드의 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650525/original/V5GhObE_hP5_jtSQfOGHz_Df4wQG6oq4kA.jpeg?1756455179)

### 2단계: 고급 설정 열기

조직 설정 화면에서 아래로 스크롤해 **Looking for advanced settings?**(고급 설정을 찾으시나요?)를 클릭하세요.

![고급 설정 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650526/original/MhNDbxF8re4TyogB_DPkIF42Qmp7uGR6Vw.jpeg?1756455179)

### 3단계: 계정과목표 열기

**Advanced Accounting**(고급 회계) 아래에서 **Chart of accounts**(계정과목표)를 클릭하세요.

![고급 회계 아래의 계정과목표](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650522/original/2UkCixPoVD7z-HbBP0KYMuNZaXTkh4uZHg.jpeg?1756455177)

### 4단계: 연결할 계정 선택

계정 목록에서 연결할 계정을 고르세요(예: Prepayments). 계정을 클릭하여 편집하면 세부 정보를 수정할 수 있어요.

![연결할 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650524/original/GIwnfvHXPPSP2RiQqNVc7zkEJj9MiX0REw.png?1756455179)

### 5단계: 계정에서 결제 활성화

편집 팝업에서 다음과 같이 하세요.

- ✅ **Enable payments to this account**(이 계정으로 결제 활성화)를 체크하세요.
- **저장**을 클릭하세요.

![계정에서 결제 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056908925/original/Z6KxVG9-8cbq0f2T_cStKfqrLuBhjnEQmA.png?1761569654)

### 6단계: 하이퍼클래스에 연결

하이퍼클래스의 **Xero 연동**으로 돌아가세요. **연결된 계정**에서 방금 활성화한 계정(예: Prepayments)을 선택하세요.

![연결된 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650515/original/l3sp-IJO5kkUzVlecULoxkFCCguDQTI-yw.jpeg?1756455174)

여기까지 마치면 하이퍼클래스에서 계정과목표가 보이고 바로 사용할 수 있어요.

---

## 작동 방식

### 1. 연락처 가져오기 (Xero → 하이퍼클래스)

- 연결하면 하이퍼클래스가 Xero의 활성 연락처(기본 프로필 정보)를 가져와요. 이후 만드는 인보이스가 알맞은 연락처와 연결돼요.
- 나중에 인보이스를 동기화할 때 가져온 연락처 중 일치하는 항목이 없으면, 하이퍼클래스가 동기화 중에 Xero에 연락처를 자동으로 만들어요.

### 2. 인보이스 동기화 (하이퍼클래스 → Xero)

하이퍼클래스에서 인보이스를 만들거나 보낼 때 **Sync to Xero**(Xero로 동기화)를 선택하면, 연결된 Xero 조직에 아래 내용이 담긴 인보이스가 등록돼요.

1. 연락처: 가져온 연락처 중 일치하는 Xero 연락처를 사용해요. 없으면 Xero에 새 연락처가 만들어져요.
2. 항목 라인: 이름, 수량, 금액, 할인이 인보이스에 담겨 전송돼요. 상품은 Xero에 만들어지지 않아요.
3. 세금:

   - 매핑된 세금이 Xero에 이미 있으면 그 세율이 적용돼요.
   - 없으면 하이퍼클래스가 세율을 그 자리에서 만들어 인보이스에 사용해요.
4. 통화:

   - 인보이스 통화가 Xero로 전달돼요.
   - 해당 통화가 활성화되어 있지 않으면, 인보이스를 등록하기 전에 하이퍼클래스가 Xero 조직에 통화를 추가하고 활성화해요. Xero 요금제가 다중 통화를 지원하는지 확인하세요.

### 3. 의도적으로 제외된 기능

- 영수증 동기화 없음: 영수증과 경비 항목(또는 영수증 PDF)은 이 연동으로 동기화되지 않아요.
- 상품 카탈로그 동기화 없음: 하이퍼클래스는 Xero에서 상품을 만들거나 관리하지 않아요. 항목 라인은 인보이스 안에만 들어 있어요.

### 4. 연결 해제

{% hint style="info" %}
Xero에서 회계용 추적 카테고리나 별도의 매출 계정을 쓴다면, 하이퍼클래스의 Xero 설정에서 기본 계정 매핑을 신중하게 정하세요. 항목 라인에 은행 계정을 매핑하면 Xero 검증 오류가 날 수 있으니 피하세요.
{% endhint %}

---

## 자주 묻는 질문

### 단방향 동기화인가요, 양방향 동기화인가요?
단방향이에요. 연락처는 Xero에서 하이퍼클래스로 가져와 매핑에 쓰고, 인보이스는 하이퍼클래스에서 Xero로 동기화돼요.

### 하이퍼클래스가 Xero에 새 연락처를 만들어 주나요?
네. 인보이스의 고객이 가져온 연락처와 일치하지 않으면, 동기화할 때 하이퍼클래스가 Xero에 연락처를 만들어요.

### 상품도 Xero에 만들어지나요?
아니요. 항목 라인은 인보이스에만 등록되고, 상품은 Xero에 만들어지거나 관리되지 않아요.

### 세금은 어떻게 처리되나요?
매핑된 세율이 Xero에 이미 있으면 그 세율을 써요. 없으면 하이퍼클래스가 세율을 만들어 인보이스에 적용해요.

### 통화는 어떻게 처리되나요?
하이퍼클래스가 인보이스 통화를 Xero에 전달하고, Xero 조직에서 아직 활성화되지 않은 통화는 추가해요. Xero 조직이 다중 통화를 지원하는지 확인하세요.

### 영수증도 동기화되나요?
아니요. 이 연동에는 영수증 동기화가 포함되어 있지 않아요.

### Xero 조직 여러 개를 하이퍼클래스 계정 하나에 연결할 수 있나요?
이 버전에서는 안 돼요. 하이퍼클래스 계정 하나는 한 번에 Xero 조직 하나에만 연결돼요. 에이전시나 화이트라벨 운영자는 서브 계정마다 각각 별도의 Xero 조직을 연결할 수 있어요.

### 연결은 어디에서 관리하나요?
**설정 > 연동 > Xero**로 이동하세요. 연결된 조직 이름과 상태를 확인하고, 필요하면 연결을 해제하거나 다시 연결할 수 있어요.

### "Organisation is not subscribed to currency XXX." 오류가 나요. 어떻게 해야 하나요?
인보이스 통화가 Xero 조직에서 활성화되어 있지 않을 때 나타나는 오류예요. Xero에서 다중 통화를 활성화한 뒤 다시 시도하거나, 조직에서 해당 통화를 허용하는지 확인하세요. 해당 통화를 쓸 수 있게 되면, 하이퍼클래스가 동기화 과정에서 통화를 전달하고 만들어요.

### 연결을 해제했어요. 다시 연결하려면 어떻게 하나요?
**설정 > 연동 > Xero**로 돌아가 **연결**을 클릭하세요. 다시 인증하고 조직을 선택하면 돼요.

### Xero를 연결하기 전에 만든 인보이스도 자동으로 동기화되나요?
아니요. 일반적으로 Xero 연동 이후에 만든 인보이스만 자동으로 동기화돼요.
