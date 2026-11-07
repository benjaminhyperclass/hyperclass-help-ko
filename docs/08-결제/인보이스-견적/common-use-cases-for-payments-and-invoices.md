---
원문: /support/solutions/articles/48001220600-common-use-cases-for-payments-and-invoices
번역일: 2026-11-06
카테고리: 08-결제
---

# 결제와 인보이스 활용 사례

결제와 인보이스를 자주 쓰는 상황별로 따라 할 수 있게 정리했어요. 통화 중 카드 결제, Stripe Connect 없이 수동 결제 기록, 인보이스에 항목 추가, 카드 처리 수수료 추가 방법을 다뤄요.

결제는 상품이나 서비스의 값을 치르는 일이에요. 신용카드, 체크카드, 계좌 이체, 수표, 현금 등 어떤 방법으로든 할 수 있어요. 인보이스는 상품이나 서비스에 대해 결제된 금액을 기록하는 문서예요. 보통 결제와 함께 보내서 회계 처리 과정에서 추적할 수 있게 해요.

## 고객과 통화하면서 인보이스를 보내지 않고 카드로 결제하기

1. 연락처를 선택해 인보이스를 만드세요. 연락처가 없으면 그 자리에서 바로 추가하세요.
2. 판매하는 상품을 추가하세요. 드롭다운에 상품이 없으면 **새 항목 추가**를 선택하세요.
3. 인보이스 빌더 화면에서 인보이스를 보내지 않고, 상단 바의 점 세 개(⋮) 아이콘을 클릭한 뒤 **결제 기록**을 클릭하세요.

   ![인보이스 빌더 상단 바에서 결제 기록을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246566971/original/suTkwlIPuN0aGGkym3Vlg9D4kIJhlN-JxQ.png?1661156309)

4. 나타나는 창에서 **카드로 청구**를 선택하세요. 다음 화면에서 처음 결제하는 고객이면 **새 카드**를 선택하세요.

   ![카드로 청구와 새 카드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246567506/original/Q2KQKCDwm6V0nuasc7kCVI_A3-KQASG-wA.png?1661156443)

5. 이미 구매한 적이 있는 고객이면 저장된 카드 목록에 이전에 사용한 카드가 보여요.

   ![저장된 카드 목록에 이전에 사용한 카드가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246567346/original/zm84QK6BmJQ0Qk-3jd2QN3gzkcny_uI2Bg.png?1661156409)

{% hint style="info" %}
이 방법으로 결제가 청구된 고객에게는 자동 이메일·문자 확인 메시지가 가지 않아요.
{% endhint %}

## Stripe Connect 없이 인보이스로 수동 결제 기록하기

Stripe Connect 없이도 인보이스 기능을 쓸 수 있어요. 다만 신용카드·체크카드로 결제를 받으려면 Stripe Connect가 필요해요.

{% hint style="info" %}
Stripe Connect 없이 인보이스를 쓰면 결제를 직접 기록하고 수금해야 해요.
지금은 Stripe Connect 없이 수동 결제를 기록하는 기능이 일회성 인보이스에서만 동작해요.
{% endhint %}

1. 왼쪽 메뉴에서 **결제 > 인보이스**로 이동하세요.
2. Stripe Connect를 추가하라는 팝업이 나타나면 닫으세요.
3. **신규** 버튼을 클릭하고 **새 인보이스**를 선택해 새 인보이스를 만드세요.

   ![신규 버튼에서 새 인보이스를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248706461/original/7ef07YaAczPcFyBU1Use4qEWF-nJZ_7-tw.png?1662060526)

4. 인보이스 빌더 화면에서 고객 정보, 판매한 상품·서비스, 세금 정보를 입력하세요. 할인이 있으면 함께 입력하세요. 준비가 끝나면 점 세 개(⋮) 아이콘을 클릭하고 **결제 기록**을 선택하세요.

   ![점 세 개 메뉴에서 결제 기록을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247158855/original/MvrisAXgz10AdjG2XT5s8vwba4fAHnx7Ug.png?1661357700)

5. **수동으로 기록**을 선택하세요.

   ![수동으로 기록을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159083/original/JOdy5yeO6X_yrxktCCDvpD4pmMC-EWqDEw.png?1661357750)

6. 다음 화면에 **Cash**(현금), **Card**(카드), **Check**(수표), **계좌 이체**, **Other**(기타) 옵션이 나와요. 해당하는 옵션을 선택하고 다음 화면에서 **제출**을 클릭하세요.

   ![결제 방법을 선택하고 제출하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159265/original/N2jhkSm24UYQmVJyyH_i6VPS9NUp2JrvNw.png?1661357791)

7. 이제 해당 고객의 인보이스가 기록돼요.

{% hint style="info" %}
이 방법으로 결제가 청구된 고객에게는 자동 이메일·문자 확인 메시지가 가지 않아요.
{% endhint %}

![수동 결제가 기록된 인보이스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247159585/original/CJehc8BqQeswGJai7baepTzLBJ_ny4CBww.png?1661357855)

## 상품 목록에 없는 상품·서비스를 인보이스에 추가하기

하이퍼클래스의 **상품**에 서비스나 상품을 만들어 두지 않았어도 인보이스에 추가할 수 있어요. 아래 순서를 따라 하세요.

1. 인보이스를 만들고 **항목 추가**를 클릭하세요.

   ![인보이스에서 항목 추가를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286137736/original/JnMIJ8SUPPZrMU3KzdY5z3zy3q1Tk9x7Iw.png?1678343369)

2. **상품**에 없는 항목을 추가하려면 **새 항목**을 선택하세요.

   ![새 항목을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286137826/original/7jNOKdhLjcqxuQDInhLOSSify7rXDNBr7g.png?1678343425)

3. 다음 화면에서 아래처럼 진행하세요.
   - 상품 이름과 가격을 입력하세요.
   - 나중에 다시 쓰려면 **나중에 사용하도록 저장**을 선택하세요. 이 상품·서비스가 **상품**에 저장돼요.
   - **새 항목 추가** 버튼을 클릭해 인보이스에 추가하세요.

   ![상품 이름과 가격을 입력하고 새 항목 추가를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286138236/original/TJE_MeHyip8-jsEDifSgYGgykGCBMHWXSQ.png?1678343528)

새 항목이 인보이스에 추가되어 바로 보낼 수 있어요.

![새 항목이 추가된 인보이스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286138402/original/QPgmWsgnf-l8-S5DcCYT880Jt2y6zUc_Fg.png?1678343615)

## 인보이스에 카드 처리 수수료 추가하기

1. **결제 > 세금 설정**으로 이동해 청구하려는 카드 처리 수수료를 "세금"으로 추가하세요.

   ![세금 설정에서 카드 처리 수수료를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286421947/original/o66BfPPAA-Cqd5ToVwdSJFyij8HJWKmFOg.png?1678436215)

2. 새 인보이스를 만들고 청구할 항목을 추가하세요.
3. **Add Tax**(세금 추가)를 클릭하고, 세금 설정에서 만들어 둔 카드 처리 수수료를 선택한 뒤 **저장**을 클릭하세요.

   ![Add Tax에서 카드 처리 수수료를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422185/original/wFSNxzQEYbgXbGb6NGBCPj51McSEdyLesw.png?1678436287)

   ![카드 처리 수수료를 선택하고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422242/original/g0fqsqQlu1GXT56QZ29QBFEo-dxRzxsYkA.png?1678436310)

카드 처리 수수료를 추가하면 인보이스 빌더에 이렇게 표시돼요.

![인보이스 빌더에 카드 처리 수수료가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286422356/original/TtrjI1nOSPog7w6teWUkOHq-3HE5nMf5KA.png?1678436360)

결제하는 사람에게는 인보이스가 이렇게 보여요.

![결제하는 사람에게 보이는 인보이스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039257935/original/7UURaKWOUJn5bgk3o6oVIwr8k8g0t9jLGg.jpg?1735936659)

## 자주 묻는 질문

### 하이퍼클래스 결제로 인보이스의 부분 결제를 추적할 수 있나요?

네, 부분 결제를 추적할 수 있어요. 전체 금액으로 인보이스를 만든 뒤, 부분 결제가 이루어질 때마다 인보이스를 업데이트하세요. 그러면 남은 잔액을 정확히 관리할 수 있어요.

### 고객에게 보내는 인보이스의 모양을 바꿀 수 있나요?

현재는 표준 인보이스 템플릿을 제공해요. 사업체 이름, 로고, 메모 같은 세부 정보는 추가할 수 있어요. 하지만 레이아웃이나 색상 조정 같은 고급 사용자 지정은 지금은 지원하지 않아요.

### 구독형 서비스용 반복 인보이스를 설정할 수 있나요?

네, 구독형 서비스용 반복 인보이스를 만들 수 있어요. 하이퍼클래스에는 자동 반복 인보이스 기능이 없어요. 대신 이미 보낸 인보이스를 복제하고, 알림을 설정해 주기적으로 보낼 수 있어요.

### 외부 결제 처리 서비스를 연동하려면 어떻게 하나요?

하이퍼클래스는 Stripe, PayPal 같은 대표적인 결제 처리 서비스와의 연동을 지원해요. 플랫폼의 **연동** 메뉴에서 계정을 연결하세요. 연결하고 나면 인보이스에서 바로 결제를 받을 수 있어요.

### **테스트**를 눌렀는데도 결제 페이지에 **라이브 모드**라고 나와요

대개 실제 Stripe 계정이 아직 **라이브 모드**로 되어 있어서 그래요. Stripe 대시보드에 로그인해 오른쪽 위의 **테스트 모드** 스위치를 켜세요. 그런 다음 하이퍼클래스 페이지를 새로고침하세요.

### 고객이 결제를 마쳤는데 인보이스에 **결제 처리**라고 계속 표시돼요

**결제 처리**는 결제가 시작되었지만 아직 정산되지 않았다는 뜻이에요. 보통 ACH 계좌 이체나 PayPal eCheck 같은 결제 수단에서 나타나며, 처리되는 데 영업일 기준 2~5일이 걸려요. 결제가 정상적으로 처리되면 인보이스 상태가 자동으로 **유료**로 바뀌어요.

### 인보이스를 보냈는데 고객이 링크가 깨졌다거나 결제할 수 없다고 해요. 왜 그런가요?

인보이스가 예정된 결제일을 지나서 결제 링크가 비활성화된 거예요. 결제일이 이미 지나면 시스템이 결제 옵션을 자동으로 비활성화해요.

일정을 바로잡은 새 인보이스를 보내야 해요. 아래 순서로 진행하세요.

1. 원래 인보이스를 복제하세요.
2. **결제 일정**의 날짜를 오늘이나 이후 날짜로 수정하세요.
3. 새 인보이스를 고객에게 다시 보내세요. 그러면 링크가 활성화돼요.

### 결제 완료로 표시된 인보이스(테스트·데모 결제 포함)를 무효 처리하거나 삭제할 수 없어요

하이퍼클래스에서는 이미 결제 완료로 표시된 인보이스는, 테스트나 데모용으로 만든 결제라도 무효 처리할 수 없어요. 먼저 결제를 환불해야 인보이스를 무효 처리할 수 있어요.

해결 방법은 다음과 같아요.

1. 해당 인보이스로 이동해 점 세 개(⋮) 아이콘을 클릭하세요.
2. **트랜잭션 보기**를 선택하세요.
3. **Refund**(환불)를 클릭하고 환불을 완료하세요.
4. 인보이스로 돌아가세요.
5. 점 세 개(⋮) 아이콘을 다시 클릭하고 **Void**(무효 처리)를 선택하세요.

환불하고 나면 인보이스를 무효 처리할 수 있고, 더 이상 진행 중이거나 결제 완료된 인보이스로 표시되지 않아요.

{% hint style="info" %}
- 결제 완료된 인보이스는 바로 삭제할 수 없어요.
- **테스트 모드**로 분명하게 표시되지 않은 데모·테스트 결제는 시스템에서 실제 결제처럼 동작해요.
- 환불하면 인보이스가 기록, 리포트, 고객에게 보이는 내용에 영향을 주지 않아요.
- 하이퍼클래스 고객지원에는 에이전시 수준 사용자(**에이전시 소유자**/관리자/사용자)만 문의할 수 있어요. 서브 계정 사용자는 문의할 수 없어요.
{% endhint %}

### 수동 결제를 기록할 때 결제 날짜가 사라지고 **잘못된 날짜입니다** 오류가 떠요

입력한 수동 결제 날짜가 시스템이 허용하는 범위를 벗어나거나 인보이스 일정과 맞지 않으면 이런 일이 생겨요. 시스템이 해당 날짜를 거부하고 입력란을 비워 버려요.

원인은 다음과 같아요.

- 인보이스는 나중 날짜에 발행되었는데, 결제 날짜를 훨씬 이전으로 입력한 경우
- 시스템이 결제 날짜를 인보이스의 발행일과 상태 날짜 기준으로 검증하는 경우
- 언어·지역 설정 때문에 검증 문제가 생길 수도 있지만, 주된 원인은 아닌 경우

해결 방법은 다음과 같아요.

- 결제 날짜를 인보이스 발행일과 같거나 그 이후로 입력하세요.
- 결제를 기록하기 전에 페이지를 새로고침하세요.
- 인보이스 일정에 맞는 날짜로 결제를 기록해 보세요.
- 필요하면 계정 언어를 잠시 영어로 바꾼 뒤 다시 시도하세요.

### 인보이스에 부분 결제를 할 수 없어요

인보이스에 이미 결제 일정(분할 납부)이 설정되어 있으면 부분 결제를 할 수 없어요. 이 경우 부분 결제가 예정된 결제와 충돌하기 때문에 시스템이 허용하지 않아요.

해결 방법은 다음과 같아요.

- 결제 일정을 삭제하거나 수정하세요.
- 인보이스로 이동해 **결제 기록** > **수동으로 기록**을 선택한 뒤 부분 결제를 입력하세요.

### 어떤 인보이스에는 **처리 수수료**가 보이고 다른 인보이스에는 안 보여요

**설정 > Charges**(요금)에서 설정한 **처리 수수료**는 이미 만들어 둔 인보이스에 자동으로 적용되지 않아요. 새 수수료 옵션을 넣으려면 설정을 켜기 전에 만든 인보이스를 다시 만들어야 해요. 수수료 옵션은 설정에서 변경 사항을 저장한 이후에 만든 인보이스에만 보이고 적용돼요.
