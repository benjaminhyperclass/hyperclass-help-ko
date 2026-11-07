---
원문: /support/solutions/articles/155000007346-configure-payment-providers-by-channel
번역일: 2026-11-06
카테고리: 08-결제
---

# 채널별 결제 제공업체 설정

채널마다 다른 결제 제공업체를 지정하는 방법을 설명해요. 현재 지원하는 채널과 앞으로 지원할 계획, 그리고 기본 제공업체와 선호 제공업체 설정이 결제 화면(체크아웃)에 어떤 영향을 주는지도 함께 안내해요.

## 개요

채널별로 결제 제공업체를 설정하면 퍼널, 폼, 스토어, 인보이스 같은 비즈니스 영역마다 서로 다른 결제 제공업체를 지정할 수 있어요. 하나의 전역 기본 제공업체만 쓰지 않고, 하이퍼클래스에서 채널 단위로 결제를 어디로 보낼지 정해요. 결제가 어디에서 시작됐는지에 따라 제공업체가 달라지는 거예요. 그래서 결제 경험을 상황에 맞게 조정하고 수수료도 줄일 수 있어요.

## 채널별 설정의 장점

- 더 유연해요: 판매 방식마다 다른 결제 제공업체를 쓸 수 있어요.
- 더 효율적으로 운영할 수 있어요: 수수료, 지역, 제공업체별 강점에 따라 결제를 나눠 보낼 수 있어요.
- 더 안전하게 테스트할 수 있어요: 새 제공업체를 테스트 모드에서 먼저 써 봐도 실제 결제에는 영향이 없어요.
- 설정이 깔끔해요: 계정의 기본 제공업체를 매번 바꿀 필요가 없어요.

## 지원되는 채널

현재 지원하는 채널은 다음과 같아요.

- **퍼널 - One Step Order Forms**(원스텝 주문 폼)
- **퍼널 - Two Step Order Forms**(투스텝 주문 폼)
- **폼**
- **스토어**
- **캘린더**
- **인보이스**
- **인보이스 자동 결제**
- **결제 링크**
- **코스**
- **커뮤니티**
- **설문**

![지원되는 채널 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067633090/original/d0j6u9ylm4TpDI-BrOs4PfEep9Itb8VYXQ.png?1774368085)

## 제공업체가 선택되는 방식

결제 화면에서 어떤 제공업체를 쓸지는 아래 규칙에 따라 정해져요.

- 우선순위: 채널에 설정한 제공업체가 전역 기본 제공업체보다 우선해요. 채널에 제공업체를 설정하지 않았다면 전역 기본 제공업체를 사용해요. 제공업체를 고를 때는 연결된 제공업체만 선택 목록에 나와요.
- 함께 쓸 수 있는 조합: PayPal과 다른 제공업체 하나(예: Stripe 또는 NMI)를 함께 쓸 수 있어요. PayPal을 뺀 여러 제공업체를 함께 쓰는 조합(예: Stripe + NMI)은 지원하지 않아요.
- 제공업체 편집: 선택한 제공업체는 어떤 것이든 제거할 수 있어요. PayPal은 다른 제공업체와 함께 추가하거나 제거할 수 있어요. 다만 PayPal을 다른 제공업체로 바로 바꿀 수는 없어요. 먼저 PayPal을 제거해야 해요.

## 라이브 모드와 테스트 모드

**라이브**와 **테스트** 설정을 나눠 두면 실제 결제에 영향을 주지 않고 제공업체를 시험해 볼 수 있어요. 연동이 잘 되는지 확인하고 결제 화면을 안전하게 테스트할 때 꼭 필요해요.

- **라이브 모드**: 실제 고객 결제에 사용해요.
- **테스트 모드**: 실제 결제를 처리하지 않고 결제 흐름을 테스트할 때 사용해요.
- 모드마다 채널별로 서로 다른 제공업체를 지정할 수 있어요.

![라이브 모드와 테스트 모드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067638393/original/vAb6zwylvoef4-UHOhI8aPzxrjKxX9n-4Q.jpeg?1774371017)

## 채널별 결제 제공업체 설정하기

제대로 설정해 두면 결제가 올바른 곳으로 전달되고 결제 실패도 막을 수 있어요. 아래 순서대로 설정하세요.

1. **결제**로 이동하세요.

   ![결제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067631348/original/y9zs559O-BlpJo8pGRgUZLOjBnzHxJfXhg.png?1774367145)
2. **연동**을 클릭하세요.

   ![연동 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067631491/original/0ESzJdAoiZEg8MqdvQy1SnzMCYd12BfCrg.png?1774367197)
3. **Configure Providers**(제공업체 설정)를 클릭하세요.

   ![Configure Providers 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067631597/original/ZiHHcn6x0hQFTZntSoROfbNZufPQxHwOhA.png?1774367229)
4. 필요에 따라 **라이브** 또는 **테스트** 모드로 전환하세요.

   ![라이브·테스트 모드 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067631664/original/hSdp81mLzvEZ509gfNwCxxH3TMDpi-IeBA.png?1774367267)
5. 채널마다 사용할 결제 제공업체를 선택하세요.

   - 제공업체 추가: 채널 옆의 **+** 를 클릭하고, 드롭다운에서 연결된 제공업체(Stripe, PayPal, Square 등)를 선택하세요. PayPal과 다른 제공업체 하나(예: Stripe 또는 NMI)를 추가할 수 있어요. 드롭다운에는 계정에 이미 연결된 제공업체만 표시돼요.

     ![제공업체 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067632534/original/8vaQLn5Y8LhYyGJfGqQiVuntG4SHFd87sA.png?1774367777)
   - 제공업체 제거: 제공업체 옆의 **X** 를 클릭하세요. 확인 창이 나오면 제거를 확인하세요.

     ![제공업체 제거 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067632102/original/TlxTt5Z5IhFCCrJa7fuFEENhPgWFwi_gbg.png?1774367508)
   - 제공업체 초기화: 초기화하면 직접 설정한 내용이 지워져요. 해당 채널은 전역 기본 제공업체로 돌아가요.

     ![제공업체 초기화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067632883/original/YGjbOlnveYthZ6ecEG9S1qLypgDJy5DPIw.png?1774367942)

## 자주 묻는 질문

### 선호 제공업체의 연결이 해제되면 어떻게 되나요?

채널에 설정한 제공업체의 연결을 **연동** 페이지에서 해제하면, 시스템이 자동으로 기본 제공업체로 전환해요. 나중에 다시 연결하면 그 채널의 선호 제공업체로 다시 선택해야 해요.

### 스토어나 퍼널처럼 더 세부적인 단위로 제공업체를 설정할 수 있나요?

아직은 안 돼요. 현재는 채널 단위로만 설정할 수 있어요. 스토어, 퍼널, 개별 자산 단위의 세부 설정은 앞으로 업데이트에서 지원할 계획이에요.

### 결제를 끄려고 채널에서 제공업체를 모두 제거할 수 있나요?

아니요. 제공업체를 모두 제거하면 하이퍼클래스가 해당 채널을 전역 기본 제공업체로 되돌려요. 운영 중인 서비스의 결제 수단이 실수로 사라지는 일을 막기 위한 동작이에요. 결제 수단이 숨겨지는 경우는 연결된 제공업체가 아예 하나도 없을 때뿐이에요.

### 결제 화면에서 결제 제공업체를 몇 개까지 쓸 수 있나요?

PayPal과 다른 제공업체 하나(예: Stripe 또는 NMI)를 쓸 수 있어요. PayPal을 뺀 여러 제공업체를 함께 쓰는 조합은 지원하지 않아요.

### 기본 제공업체는 채널 설정에 어떤 영향을 주나요?

기본 제공업체는 대체 수단 역할을 해요. 채널에 제공업체를 설정하면 그 설정이 기본 제공업체보다 우선해요. 채널에 제공업체를 설정하지 않았다면 기본 제공업체를 사용해요.

### 고객은 결제 화면에서 어떤 결제 수단을 보게 되나요?

기본 제공업체와 PayPal을 모두 설정했다면 고객에게 두 가지가 모두 보여요. PayPal을 설정하지 않았다면 기본 제공업체만 표시돼요.
