---
원문: /support/solutions/articles/155000004641-payments-integration-in-surveys-collect-payments-sell-products
번역일: 2026-11-07
카테고리: 06-사이트
---

# 설문 결제 연동 — 결제 수집과 상품 판매

설문 안에서 바로 결제를 받거나 상품을 팔 수 있어요. 후원금 받기, 상품 판매, 서비스 요금 청구에 쓸 수 있고, 설문을 2단계 주문 폼으로 활용할 수도 있어요.

## 새로 추가된 기능

설문에 **결제 연동**(Payments Integration)이 추가됐어요. 이제 설문에서 바로 결제를 받거나 상품을 판매할 수 있어요.

## 주요 특징

- 설문의 **결제 옵션**
  - **결제 수집**: 정해진 금액이나 직접 입력한 금액으로 결제를 받아요.
  - **Sell Products**(상품 판매): 가격과 수량 옵션을 넣어 상품을 추가해요. 구독 상품도 추가할 수 있어요.
- 끊김 없는 결제 흐름
  - 응답자가 다음 단계로 넘어가면 바로 결제가 처리돼요.
  - 결제 요소를 사용하는 설문에서는 부분 연락처가 그대로 유지돼요.
  - 따로 해야 할 작업은 없어요. 결제는 매끄럽고 안전하게 진행돼요.
- 결제 안내 문구
  - 원하면 안내 상자를 넣어 “다음 단계로 넘어가면 바로 결제가 진행됩니다.”라는 문구를 보여 줄 수 있어요.
  - 이 안내는 필요에 따라 켜거나 끌 수 있어요.

## 사용 방법

### 구성

1. **결제 수집** 또는 **Sell Products**(상품 판매) 요소를 설문에 끌어다 놓아요.
2. 요소 설정에서 상품 정보, 가격, 구독 플랜(선택)을 추가해요.
3. 필요하면 결제 안내 문구를 켜서 화면을 원하는 대로 꾸며요.

### 실행

1. 응답자가 결제 정보를 입력하고 **다음**을 누르면 결제가 바로 처리돼요.
2. 결제가 성공하면 확인 화면이 나타나요.

### 참고 사항

- 결제는 100% 안전하게 암호화돼요.
- **Test Mode**(테스트 모드)에서 먼저 설정을 확인한 뒤 **Live Mode**(라이브 모드)로 바꾸세요. 그러면 문제없이 운영할 수 있어요.

{% hint style="info" %}
이 기능은 커뮤니케이션 경로를 간소화해 사용자 참여를 높이도록 만들어졌어요. 상호작용을 자동화하고 단순하게 만들고 싶은 비즈니스에 잘 맞아요.
{% endhint %}

### 구성

설문의 **Sell Products**(상품 판매) 요소에는 결제 제공업체, 상품, 가격, 변형을 한곳에서 관리하는 통합 결제 구성 패널이 생겼어요.

1. **설문 빌더**에서 설문을 열어요.
2. **Sell Products**(상품 판매) 요소를 추가해요.
3. 요소를 선택해 구성 패널을 열어요.
4. 결제 제공업체를 연결해야 하면 **Connect providers**(제공업체 연결)를 클릭해요.
5. **상품 추가**를 클릭해 상품을 추가하고, 선택할 수 있는 가격과 변형을 설정해요.
6. **저장**한 뒤 **미리보기**로 설문을 확인해요.

![상품 판매 요소의 구성 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085048084/original/LRddCcroeEOXaOUR8YUAI9z2saWFbYw7ZQ.png?1793887669)

### 가격 수준과 변형 선택

선택한 상품이 지원하면 고객이 가격 수준과 상품 변형을 직접 고를 수 있어요.

고객이 고른 내용은 결제 요약에 표시되고, 체크아웃, 인보이스 발행, 결제 처리 과정에도 그대로 전달돼요. 필수 선택 항목은 제출하기 전에 확인해요.

![가격 수준 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085048032/original/OzrDcgLsCKb7FQtNv1WAV6ekeyxQjsLokw.png?1793887641)

![상품 변형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085047977/original/FiFzxsm6J-Haxt3UxPyYK05u5wB6K4uvaw.png?1793887614)

{% hint style="info" %}
기존 설문과 결제 설정은 변경 없이 그대로 작동해요.

가격 수준과 변형 선택은 호환되는 설정의 지원 상품에서 쓸 수 있어요.
{% endhint %}

![설문 결제 화면 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041625617/original/kDZe2QA7Lva-V9V4O0hK7bCSUKaNk_P7HQ.png?1739541418)

![설문 결제 화면 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041625616/original/Qo3nWsuPpbCOEB9bwc8csGFElvSapMfshw.png?1739541418)

![설문 결제 화면 예시 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041625618/original/sjAeRTAin2gVfyVUKuT-t0EmrYHaSCXwLw.jpeg?1739541418)

![설문 결제 화면 예시 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041625619/original/gf42K3Bj3CfIc71e_p7NyN4Ai1P8uEv35A.png?1739541418)![설문 결제 화면 예시 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041625620/original/L-2SzQbLQGZVx1q2BTF91aKcP1jd2iSaIQ.jpeg?1739541419)
