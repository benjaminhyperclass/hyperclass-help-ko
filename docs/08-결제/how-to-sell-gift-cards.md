---

번역일: 2026-04-06
카테고리: 08-결제 > 기프트 카드
---

# 기프트 카드 판매하는 방법

Hyperclass 기프트 카드(Gift Cards)를 사용하면 고객이 본인을 위해 구매하거나 다른 사람에게 선물할 수 있는 선불 잔액을 판매할 수 있어요. 전용 결제 링크, 임베드 코드, QR 코드로 판매하거나, 퍼널(Funnels), 폼(Forms), 스토어(Stores), 웹사이트(Websites), 결제 링크(Payment Links), 인보이스(Invoices), 캘린더(Calendars) 등 기존 결제 시스템에 추가해서 판매할 수 있어요.

이 가이드에서는 각 판매 방법, 고객 경험, 그리고 원활한 배송과 사용을 위한 모범 사례를 안내해드려요.

## 기프트 카드 판매 개요

기프트 카드 판매는 Hyperclass에서 **선불 잔액**을 상품으로 제공하는 프로세스예요. 기프트 카드 전용 결제 페이지로 판매하거나, 기존 판매 워크플로우(퍼널, 폼, 스토어, 웹사이트, 결제 링크, 인보이스, 캘린더)에 추가해서 판매할 수 있어요. 고객이 이미 구매하는 모든 곳에서 기프트 카드를 판매할 수 있답니다!

고객이 구매를 완료하면 Hyperclass에서 **기프트 카드 주문(Gift Card Order)**을 생성하고, 결제 시 선택한 배송 옵션(즉시 또는 예약)에 따라 기프트 카드를 배송해요. 각 기프트 카드에는 다음이 포함됩니다:

- **전용 결제 링크**
- **임베드 코드**  
- **QR 코드**
- 상품 선택을 지원하는 모든 결제 시스템에 추가 가능

### 기프트 카드 판매의 주요 장점

- **다양한 판매 채널**: 전용 링크, 임베드, QR 코드, 기존 결제 시스템을 통해 판매해 최대한의 도달 범위 확보
- **선물 기능 내장**: "본인용 또는 선물용" 흐름으로 다른 사람을 위한 구매와 예약 배송이 간단해짐
- **안전한 테스트 및 출시**: 별도의 테스트와 라이브 링크로 실제 잔액에 영향을 주지 않고 가격, 액면가, 흐름을 검증 가능
- **즉시 현금 흐름**: 사용 전에 미리 수익 확보
- **브랜드 맞춤 디자인**: 커스텀 아트워크를 업로드하고 그라데이션을 선택해 브랜드에 맞는 기프트 카드 제작

---

## 사전 준비사항

원활한 출시를 위해 다음 항목들을 확인해주세요! 기프트 카드를 판매하기 전에 다음이 준비되어 있어야 해요:

- **최소 하나의 기프트 카드 상품이 생성되고 활성화됨**

기프트 카드를 판매하기 전에 먼저 최소 하나의 기프트 카드를 생성하고 활성화해야 해요. **결제(Payments) → 기프트 카드(Gift Cards) → 기프트 카드 만들기**에서 할 수 있어요.

- [기프트 카드 생성 과정의 자세한 개요는 여기를 클릭하세요](getting-started-with-gift-cards.md)

- **연결된 결제 방법**

기프트 카드 판매 시 결제를 받기 위해 결제 방법이 설정되어 있어야 해요.

- [결제 설정 방법에 대한 자세한 개요는 여기를 클릭하세요](how-to-connect-stripe-to-your-sub-account.md)

---

## 테스트 모드 vs 라이브 모드

**테스트 모드**는 별도의 결제 링크와 결제 키를 사용하는 안전한 샌드박스예요. 구매 시뮬레이션, 가격/세금 검증, 재고 동작 확인, 배송 메시지 미리보기, 사용 테스트에 활용하세요. **라이브 모드**는 실제 거래용입니다.

기프트 카드 구매 위치:
- 테스트 모드 → 테스트 모드 결제에서만 사용 가능
- **라이브 모드** → 라이브 모드 결제에서만 사용 가능

**팁**: 전송(Send, 결제 없이 발급)은 **라이브 모드에서만** 가능해요. [기프트 카드 전송 방법 알아보기](how-to-send-gift-cards.md)

---

## 지원되는 채널

기프트 카드를 판매할 수 있는 모든 채널을 확인하고 각 설정 단계로 바로 이동하려면 아래 링크를 클릭하세요. 전략에 맞게 하나를 선택하거나 여러 판매 채널을 조합할 수 있어요!

- [전용 결제 링크](#전용-결제-링크로-기프트-카드-판매): 각 기프트 카드 상품의 독립 페이지
- [임베드 코드](#임베드-코드로-기프트-카드-판매): 웹사이트 페이지에 직접 결제 기능 삽입
- [QR 코드](#qr-코드로-기프트-카드-판매): 오프라인이나 인쇄물에 이상적, 전용 결제 링크로 연결
- [기존 결제 시스템](#기존-결제-시스템으로-기프트-카드-판매): 기프트 카드를 상품으로 추가:
  - **폼(Forms)**
  - **퍼널(Funnels)**
  - **스토어(Stores)**
  - **결제 링크(Payment Links)**
  - **인보이스(Invoices)**
  - **캘린더(Calendars)**

---

## 전용 결제 링크로 기프트 카드 판매

전용 결제 링크는 모든 기프트 카드 상품에 제공되는 독립적인 구매 페이지예요. 퍼널이나 폼을 만들 필요 없이 이메일, SMS, 소셜 미디어 게시물에서 공유하거나 웹사이트 버튼으로 사용하기에 완벽한, 가장 빠른 판매 시작 방법이에요. 각 기프트 카드 상품은 테스트와 라이브 모드 모두에서 고유한 결제 링크를 가져요.

### 기프트 카드 판매용 전용 결제 링크에 접근하는 방법

고객과 바로 공유할 수 있는 라이브 전용 결제 링크를 얻으려면 다음 단계를 따라하세요.

#### 1단계: 기프트 카드로 이동

왼쪽 메뉴에서 결제(Payments) 탭을 클릭하세요. 그 다음 상단 리본에서 **기프트 카드(Gift Cards)**를 클릭해 기프트 카드 대시보드를 열어요.

![기프트 카드 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977592/original/eP0yWOj1qpmOaDM-0WZz-YPmnfqvaXVybg.jpeg?1763747983)

#### 2단계: 기프트 카드 선택

전용 결제 링크를 열고 싶은 카드를 찾으세요. 기프트 카드 타일에서 **판매(Sell)**를 클릭하세요.

![기프트 카드 판매 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977614/original/65Td6F0agjaG9GXPY62YyBie9Egu0tDalQ.png?1763748029)

#### 3단계: 전용 결제 링크 복사

**복사(Copy)** 아이콘을 클릭해 **라이브 모드** 결제 링크를 클립보드에 복사하세요. 이 링크를 고객에게 공유하면 기프트 카드를 구매할 수 있어요.

![결제 링크 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977676/original/o5iXB--uasIRnRZHwdG6EiTOwbuXRU2dLA.png?1763748129)

### 테스트 기프트 카드 판매용 '테스트' 링크에 접근하는 방법

실제 잔액에 영향을 주지 않고 내부 QA를 위한 테스트 링크를 복사하려면 다음 단계를 따라하세요.

#### 1단계: 기프트 카드로 이동

왼쪽 메뉴에서 결제(Payments) 탭을 클릭하세요. 그 다음 상단 리본에서 **기프트 카드(Gift Cards)**를 클릭해 기프트 카드 대시보드를 열어요.

![기프트 카드 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977733/original/MS_bB5EHGbrFT8UDNJfZf4_hushhkmAlHw.jpeg?1763748200)

#### 2단계: 기프트 카드 선택

전용 결제 링크를 열고 싶은 카드를 찾으세요. 기프트 카드 타일에서 **판매(Sell)**를 클릭하세요.

![기프트 카드 판매 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977614/original/65Td6F0agjaG9GXPY62YyBie9Egu0tDalQ.png?1763748029)

#### 3단계: 테스트 모드 결제 링크 클릭

오른쪽 상단의 **테스트 모드 결제 링크(Test Mode Checkout Link)**를 클릭해 테스트 모드 결제 링크를 열어요. 이 링크는 내부 테스트에 사용할 수 있어요!

![테스트 모드 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977794/original/rYnO7Pjg20JGgPZPKKgUyaRa1ecIxU1VrA.png?1763748294)

### 전용 결제 링크에서의 고객 경험

전용 구매 링크를 사용해 기프트 카드를 구매할 때 구매자가 거치게 되는 흐름을 요약해드릴게요.

#### 1단계: 액면가 선택

구매자는 사용 가능한 금액 중 하나를 선택해요(예: $10, $25, $50, $100).

![액면가 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058977928/original/tiP8dlvbirStiiXPosVIaqrs1QC9xafnVg.png?1763748657)

#### 2단계: 기프트 카드 수신자 선택

구매자는 본인용(Myself) 또는 선물용(Someone Else) 중 선택해요.

- 선물용인 경우: 수신자의 이름과 이메일, 발신자의 이름과 이메일을 수집해요.

![선물용 기프트 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058978830/original/yOrGVrvZooPsYcUVH0tLGOaHWvJZrNFZIA.png?1763749017)

- 본인용인 경우: 구매자의 이름과 이메일을 수집해요.

![본인용 기프트 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058978851/original/CZfTI7nI7yD7bY37nc-fsHGBGoTULdvTAQ.png?1763749066)

#### 3단계: 배송 날짜 추가

즉시 배송(Deliver Now) 또는 나중에 예약(Schedule for later)을 선택하고 날짜(시간이 표시되면 시간도)를 선택하세요.

수신자를 위한 선택적 메시지를 추가할 수 있어요.

**중요**: 예약된 기프트 카드는 나중에 발송되지만, 코드에 접근해서 결제 시 사용하면 언제든 사용할 수 있어요.

![배송 날짜 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058979342/original/Cp-5d275rL4S6_ei-aYCN3xsEslF3dCWvQ.png?1763750155)

#### 4단계: 결제 및 확인 완료

구매자는 사용 가능한 결제 방법을 선택하고 결제(Pay)를 클릭해요.

결제가 확인되면 구매자는 이 화면에서 기프트 카드를 다운로드할 수 있어요.

![결제 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058980015/original/Sxdvl_RTquSqEKn9PvWXlH0AQTPjMaDEIA.png?1763751144)

#### 5단계: 배송

선물용으로 구매한 경우, 수신자는 선택한 시간(즉시 또는 예약된 날짜)에 이메일로 기프트 카드를 받게 돼요.

![이메일 배송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058979378/original/somg39aFUZOM0TAqnT9yroV05yNshhrgEQ.png?1763750271)

---

## 임베드 코드로 기프트 카드 판매

커스텀 개발 없이 외부 웹페이지에 전용 결제 기능을 추가해보세요! 임베드 후 고객은 웹사이트를 떠나지 않고도 기프트 카드를 둘러보고 구매를 완료할 수 있어요. 이 코드는 다음에 임베드할 수 있어요:

- 워드프레스 웹사이트
- HTML 랜딩 페이지
- 블로그 페이지
- 커스텀 포털
- 링크 인 바이오 페이지

외부 웹페이지에 전용 기프트 카드 결제를 직접 임베드하려면 아래 단계를 따라하세요:

#### 1단계: 기프트 카드로 이동

왼쪽 메뉴에서 결제(Payments) 탭을 클릭하세요. 그 다음 상단 리본에서 **기프트 카드(Gift Cards)**를 클릭해 기프트 카드 대시보드를 열어요.

![기프트 카드 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058894091/original/e6bHr0noS5eCDtJiwd8HQdUawymLnoiSyA.jpeg?1763677096)

#### 2단계: 판매 클릭

임베드 코드를 찾고 싶은 카드를 찾으세요. 기프트 카드 타일에서 **판매(Sell)**를 클릭하세요.

![기프트 카드 판매 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058894118/original/haCSRs-4UdxbPT4uJ_THBCDT3B15NOBxIA.png?1763677185)

#### 3단계: 임베드 코드 복사

복사(Copy) 버튼을 클릭해 임베드 코드를 복사하세요. 이 코드를 사용해 전용 기프트 카드 결제를 외부 웹페이지에 직접 임베드할 수 있어요.

![임베드 코드 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058894124/original/huqnF2TdNqzdQjHxPQWWmSaUiUHvjBjafg.png?1763677230)

---

## QR 코드로 기프트 카드 판매

QR 코드는 오프라인과 매장 내 판매를 쉽게 만들어줘요. 코드를 스캔하면 동일한 전용 결제 링크가 열려요. 매장 내 디스플레이, 인쇄 캠페인, 클릭할 수 없는 매체에 완벽해요. QR 코드에 접근하려면 아래 단계를 따라하세요:

#### 1단계: 기프트 카드로 이동

왼쪽 메뉴에서 결제(Payments) 탭을 클릭하세요. 그 다음 상단 리본에서 **기프트 카드(Gift Cards)**를 클릭해 기프트 카드 대시보드를 열어요.

![기프트 카드 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058893858/original/oLyafhbXGZQ_w3KAnNJcRuRZnyQVLtS7Eg.png?1763676221)

#### 2단계: QR 코드 열기

QR 코드를 찾고 싶은 카드를 찾으세요. 기프트 카드 타일에서 **QR 코드(QR Code)**를 클릭하세요.

![QR 코드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058893884/original/cnQr4AIek9CDsNMEMRBUe9QHS7vScHSfdA.png?1763676331)

#### 3단계: QR 코드 공유

여기서 QR 코드를 다운로드하고 공유할 수 있어요!

- **다운로드(Download)**를 클릭해 QR 이미지를 저장하세요. 이 파일은 인쇄물과 기타 캠페인에 사용할 수 있어요!

![QR 코드 다운로드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058893913/original/Bj8Y3gzVnJI4iH8q0Y2XKqbSfK3gvP8j7Q.png?1763676488)

- **공유(Share)**를 클릭한 다음, 드롭다운에서 **복사(Copy)**를 선택해 QR 코드 링크를 복사하세요. 이 링크를 공유할 수 있어요!

![QR 코드 링크 공유](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058893979/original/F8aL2Hz57m42F1BGPcLnbsaq83WHvCOvWw.png?1763676695)

---

## 기존 결제 시스템으로 기프트 카드 판매

기프트 카드는 지원되는 모든 결제 시스템에서 상품으로 판매할 수 있어요. 이 옵션을 통해 기프트 카드를 다른 상품들과 함께 번들로 묶을 수 있는 완전한 유연성을 얻을 수 있어요. 기프트 카드 상품 추가는 다음 채널에서 지원돼요:

- 폼(Forms)
- 퍼널(Funnels)
- 스토어(Store)
- 결제 링크(Payment Links)
- 웹사이트(Websites)
- 인보이스(Invoices)
- 캘린더(Calendars, 상품을 지원하는 경우)

지원되는 각 결제 채널에서 기프트 카드를 판매하는 방법을 알아보려면 아래 단계를 따라하세요!

### 폼으로 판매

폼의 결제 요소(Payment Element)를 사용해 리드 수집과 간단한 결제 시나리오에서 기프트 카드를 판매하세요.

한 번의 폼 제출로 결제를 받고 기프트 카드를 판매할 수 있어요.

#### 1단계: 폼 열기 또는 생성

사이트(Sites) → 폼(Forms)으로 이동해 기존 폼을 열거나 새 폼을 생성하세요.

![폼 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058894265/original/niwLmGsc4K_kgpOYblVYKVovmsHfcvyA-A.png?1763677829)

#### 2단계: 상품 판매 요소 추가

결제(Payments) 아래에서 상품 판매(Sell Products) 요소를 찾아 폼으로 드래그하세요.

![상품 판매 요소](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058894295/original/usaZdOb7fDQUtal-NLToU7miSulF7MZ2IA.png?1763677982)

#### 3단계: 기프트 카드 상품 선택

**상품 판매(Sell Products)** 요소를 클릭해 요소 설정을 열어요. 여기서 상품 추가(Add Product)를 클릭하고 목록에서 기프트 카드를 선택하세요.

기프트 카드가 상품으로 추가되면 파란색 저장(Save) 버튼을 클릭해 변경사항을 저장하세요.

![기프트 카드 상품 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058894313/original/gzhNEhCxSjiesVLBmAu-cEG-yFFE8ZXC2g.png?1763678047)

### 퍼널로 판매

퍼널 내 1단계 또는 2단계 주문 폼에서 기프트 카드를 제공하세요. 퍼널을 통해 구매하는 고객은 결제 성공 후 자동으로 기프트 카드를 받게 돼요!

**팁**: 테스트 모드 퍼널에 기프트 카드를 추가하면 고객은 테스트 기프트 카드만 받게 돼요.

#### 1단계: 퍼널 열기

사이트(Sites) → 퍼널(Funnels)로 이동해 기존 퍼널을 열거나 새 퍼널을 생성하세요.

![퍼널 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058980587/original/EfUWr_6t_BcvXgaemnfwRwDHjbRpTNo2Yg.png?1763752272)

#### 2단계: 폼 요소 추가

폼(Form) 요소를 찾아 페이지로 드래그하세요.

![폼 요소 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058980688/original/lCPm9wksAi11NQa76EzvCKHDpznxkUAx5A.png?1763752558)

#### 3단계: 폼 선택

폼(Form) 요소를 클릭하고 드롭다운을 사용해 기프트 카드 구매용으로 이전에 설정한 폼을 선택하세요. 기프트 카드용 폼이 없다면 링크를 클릭해 새 폼을 생성하세요. [기프트 카드 구매용 폼 생성에 대한 자세한 정보는 여기를 참고하세요.](#폼으로-판매)

폼이 추가되고 모든 편집이 완료되면 퍼널을 발행(publish)하세요.

![폼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058980708/original/fXsBBpDOj3PHVdF98tNsizK--5gNH8mOpA.png?1763752621)

### 스토어로 판매

온라인 스토어에서 기프트 카드를 전시해 고객이 다른 상품처럼 둘러보고 구매할 수 있게 하세요.

#### 1단계: 스토어 열기 또는 생성

사이트(