---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004063-automatically-generate-invoices-from-signed-documents-contracts
번역일: 2026-11-06
카테고리: 14-문서-계약
---

# 서명한 문서·계약에서 인보이스 자동으로 만들기

문서나 계약에 서명이 끝나면 인보이스가 자동으로 만들어지고, 서명자는 바로 결제 화면으로 이동할 수 있어요. 이 문서에서는 새 문서와 템플릿에서 이 기능을 설정하는 방법을 설명해요.

[동영상](https://www.youtube.com/embed/uXvBgm5rRTc?&wmode=opaque)

## 새 문서에서 인보이스 보내기

1. **결제 > 문서 & 계약 > 새 문서**로 이동하세요.

   ![새 문서 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051365192/original/Vc1wvMN6oETE-ZfL0WmBUl5YOBBL-lyvyw.png?1754927243)
2. **Primary signer**(기본 서명자)를 추가하세요.

   ![기본 서명자 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366150/original/yOa2RSTtVxoTgsulKr-slgKZelwoZszJ2g.png?1754927718)
3. **Add Product List**(상품 목록 추가)로 문서에 상품 목록을 넣으세요. 상품 유형에 따라 만들어지는 인보이스가 일회성인지 반복인지 정해져요.

   - 선택한 상품이 모두 일회성이면 일회성 인보이스가 만들어져요.
   - 반복 상품이 하나라도 있으면 반복 인보이스가 만들어져요.
   - 상품 목록에 선택 가능한 일회성 상품과 반복 상품이 함께 있으면, 받는 사람이 고른 상품에 따라 인보이스 유형이 정해져요. 일회성 상품만 고르면 일회성 인보이스가 만들어져요.
   - 문서 하나에는 반복 주기를 하나만 쓸 수 있어요. 반복 주기는 인보이스 설정에서 정하세요.

     ![상품 목록과 인보이스 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366166/original/JCxJUNJo-GPfNfUveyySJsp7N7q-NHoV3A.png?1754927734)
4. **목록에 이미지 표시**로 상품 이미지를 보이거나 숨길 수 있어요. 문서 편집기에서 새 상품을 추가할 때는 상품을 목록에 넣기 전에 이미지를 올릴 수 있어요.

   ![목록에 이미지 표시 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078276159/original/adVtdg-UjKEX9YHIMENTsfOKyYG319kiyA.png?1786559933)
5. 일회성 상품을 추가하면 인보이스 유형이 일회성으로 정해져요.

   - 상품을 선택한 뒤 오른쪽 속성 섹션에서 선택 항목으로 바꾸거나 수량을 수정할 수 있게 설정할 수 있어요.
   - 왼쪽의 **결제** 섹션에서 필요한 설정을 고르세요.

   ![일회성 상품 속성 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366432/original/bhM_qquIzDeGHIaeNvYDXLWPjyCP0u23cQ.png?1754927827)

   ![결제 섹션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366606/original/jTxRkj0ltdrXRljZlzTpKmYOovynXZ20xA.png?1754927890)
6. 상품 목록에 반복 상품을 하나 이상 추가하면 인보이스 유형이 반복으로 바뀌어요. 문서 하나에는 반복 주기를 하나만 쓸 수 있고, 왼쪽의 인보이스 반복 주기 설정에서 고르세요.

   ![반복 상품 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366786/original/3I3qx7U4b4K_DFgdFusKaZgxiZVMbtJN8A.png?1754928032)
   ![인보이스 반복 주기 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366803/original/kYuN_Ssu2furPuvhpj6ug9l1pn1EcDxEtw.png?1754928047)
7. 필요한 설정을 고르세요. 아래는 간단한 안내이고, 자세한 내용은 뒤의 **설정 항목**에서 확인할 수 있어요.

   - **직접 결제 — 켜짐:** 서명 시점에 인보이스가 있으면 기본 서명자가 서명한 뒤 바로 결제 화면으로 이동해요.
   - **인보이스 보내기 — 켜짐:** 인보이스가 만들어질 때(서명 시점 또는 예약된 일정) 이메일로 보내요.
   - **Auto‑Payment**(자동 결제) **— 켜짐:** 앞으로 만들어질 반복 인보이스를 자동으로 결제해요.
   - 테스트 결제와 라이브 결제는 결제 설정에 따라 정해져요. 문서 & 계약 템플릿에서 정하는 설정이 아니에요.
8. 문서를 **보내기**로 보내세요.
9. 서명 시점에는 이렇게 진행돼요.

   - 일회성: 기본 서명자가 바로 결제할 수 있도록 인보이스 페이지로 이동해요.
   - 반복(시작 시점 = 서명 시): 기본 서명자가 첫 번째 인보이스를 바로 결제할 수 있도록 인보이스 페이지로 이동해요.
   - 반복(시작 시점 = 나중): 서명할 때는 이동하지 않아요. 첫 번째 인보이스는 예약된 일정에 맞춰 만들어지고 발송돼요.
   - 기본 서명자만 결제 화면으로 이동해요. 다른 서명자는 서명만 하면 돼요. 설정을 켜 두었다면 인보이스 이메일도 함께 발송돼요.

   ![서명 후 인보이스 이동 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377741/original/FhMDhzp-cjaHCYGpgeMe2J7kWShDM-7Kfw.png?1754936621)
   ![서명 후 인보이스 이동 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377746/original/DMsUuq7mMmekdg22i3kkmQ0eY48hKef_cg.png?1754936635)
   ![서명 후 인보이스 이동 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377750/original/sB6OGo-MXbkH1NKMODO-DsO_q2rRCSntPQ.png?1754936646)

## 설정 항목

#### 직접 결제

- **켜짐:** 서명 시점에 인보이스가 있으면 기본 서명자가 서명한 직후 인보이스 페이지로 이동해요. 인보이스 이메일도 함께 발송돼요.
- **끄기:** 인보이스 페이지로 이동하지 않아요. 결제하는 사람은 이메일로 받은 인보이스를 이용하고, 보내는 쪽은 임시 저장된 인보이스를 나중에 보낼 수 있어요.

#### 인보이스 보내기

- **켜짐:** 인보이스가 만들어질 때(서명 시점 또는 예약된 일정) 자동으로 이메일을 보내요.
- **끄기:** 인보이스를 임시 저장 상태로 두어, 직접 확인한 뒤 수동으로 보낼 수 있어요.

#### Auto‑Payment(자동 결제)

- **켜짐:** 카드 정보를 저장하고(지원되는 결제 대행사만 해당), 반복 일정의 다음 인보이스나 결제 일정이 있는 인보이스를 자동으로 결제해요.
- **끄기:** 결제하는 사람이 발행된 인보이스를 하나씩 직접 결제해요.
- 자동 결제는 반복 일정에만 적용돼요. 일회성 인보이스는 바로 이어지는 결제 화면에서 결제해요.

#### 라이브 모드 (true/false)

- 문서 & 계약 템플릿에는 **라이브 모드** 토글이 없어요. 테스트가 필요하면 테스트/라이브 모드를 지원하는 결제 방식(예: 인보이스, 결제 링크)이나 결제 대행사의 테스트 설정을 이용하세요.

## 템플릿으로 문서와 인보이스 한 번에 자동화하기

1. **결제 > 문서 & 계약 > 템플릿 > 새 템플릿**으로 이동하세요.
2. **서명** 필드를 넣고 **Add Product List**(상품 목록 추가)로 상품 목록을 추가하세요. 상품 유형 태그는 자동으로 붙어요.
3. 반복 상품이라면 일정이 시작되는 시점을 서명 시 또는 앞으로의 특정 날짜·요일 중에서 고르세요.
4. 필요에 따라 **직접 결제**, **인보이스 보내기**, **Auto-Payment**(자동 결제)를 설정하세요.
5. 템플릿을 **저장**하세요.

   ![템플릿 설정 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377851/original/8YcFgpdyieAbTCU_6H9pvaF3n-Ltf8qtmA.jpeg?1754936733)
6. **워크플로우**를 열고 **Action: Send Documents & Contracts**(문서 & 계약 보내기 액션)를 추가한 뒤 만든 템플릿을 선택하세요. 워크플로우가 실행되면 서명자가 문서를 받아요. 직접 결제를 켜 두었다면 기본 서명자가 서명한 뒤 인보이스 페이지로 이동해요.

   ![워크플로우에서 문서 & 계약 보내기 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377889/original/d5kwC0KoHoruWVoaZv12ywCt9yS0UcPzIQ.jpeg?1754936745)

   ![액션에서 템플릿 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377931/original/IfaA7MfDcYDTmeQN6G5ejMZOkqkCUNNXVg.jpeg?1754936845)
7. 서명 시점에는 위와 같은 규칙이 적용돼요.

   - 일회성이거나 반복(시작 시점 = 서명 시)이면 기본 서명자가 결제 화면으로 이동해요.
   - 반복(시작 시점 = 나중)이면 이동하지 않아요. 첫 번째 인보이스는 일정에 맞춰 도착해요.

## 추적

- **결제 > 문서 & 계약:** 문서, 서명, 결제 상태를 한곳에서 볼 수 있어요.
- **결제 > 인보이스:** 인보이스별 기록과 결제 상태를 볼 수 있어요. 반복 일정의 진행 상황과 자동 결제 결과도 확인할 수 있어요.

## 알아 두면 좋은 점

- 매주 반복 예시: 일정이 매주 목요일이고 서명이 목요일에 끝나면 첫 번째 인보이스가 바로 만들어지고 결제 화면으로 이동해요. 그렇지 않으면 첫 번째 인보이스는 다음 목요일에 발송돼요.
- 받는 사람이 여러 명인 경우: 기본 서명자만 결제 화면으로 이동해요.
- 반복 상품과 일회성 상품이 선택 가능하게 들어 있으면, 받는 사람이 고른 상품에 따라 인보이스 유형이 정해져요. 일회성 상품만 고르면 일회성 인보이스가 만들어져요.
- 상품을 섞어 쓰는 경우: 일회성 상품은 첫 번째 인보이스에 청구되고, 반복 상품은 일정에 따라 청구돼요.

## 자주 묻는 질문

### 서명했는데 고객이 결제 화면으로 이동하지 않았어요. 왜 그런가요?

**직접 결제**가 **끄기** 상태이거나, 서명 시점에 인보이스가 없었기 때문일 수 있어요(예: 반복 결제가 나중에 시작되는 경우). **직접 결제 켜기**를 켜고, 반복 결제라면 시작 시점을 서명 시로 설정하세요.

### 진행 상황은 어디에서 확인하나요?

문서별 상태는 **문서 & 계약**에서, 인보이스와 결제 상태·일정·자동 결제 결과는 **인보이스**에서 확인할 수 있어요.

### 일회성 상품과 반복 상품을 함께 쓸 수 있나요?

네, 할 수 있어요. 상품 목록의 태그로 상품 유형을 확인할 수 있어요. 일회성 상품이 먼저 청구되고, 반복 상품은 일정에 따라 이어서 청구돼요.

### 문서에 결제 일정을 넣었는데 인보이스가 만들어지지 않았어요.

결제 일정의 날짜 중 하나가 인보이스 마감일보다 늦어지면 이런 일이 생겨요. 첫 번째 결제를 사용자 지정 날짜로 설정했을 때 자주 일어나요. 이를 피하려면 첫 번째 결제를 **기본 서명 시**로 설정하세요. 그러면 일정이 맞게 정렬되어 인보이스를 만들 수 있어요.

### 문서 & 계약 템플릿에서 테스트 모드로 인보이스를 보낼 수 있나요?

문서 & 계약 템플릿에는 **라이브 모드** 토글이 없어요. 테스트 결제를 하려면 테스트/라이브 모드를 지원하는 결제 방식(예: **결제 링크**나 인보이스 발송 옵션)이나 결제 대행사의 테스트 설정을 이용하세요.
