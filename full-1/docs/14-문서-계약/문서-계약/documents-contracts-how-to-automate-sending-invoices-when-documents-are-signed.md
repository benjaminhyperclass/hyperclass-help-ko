---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004504-documents-contracts-how-to-automate-sending-invoices-when-documents-are-signed
번역일: 2026-11-07
카테고리: 14-문서-계약
---

# 문서 서명이 끝나면 인보이스 자동으로 보내기

**문서 & 계약**에서 문서에 서명하는 순간 반복 인보이스가 자동으로 만들어지고 발송되도록 설정할 수 있어요. 이 문서에서는 템플릿에 반복 상품을 넣고, 인보이스 발송 방식을 정하고, 워크플로우까지 연결하는 방법을 안내해요.

## 새로운 기능

2-in-1 **문서 & 계약** 기능에 반복 인보이스 생성 기능이 추가됐어요. 문서에 서명하는 시점에 반복 인보이스를 자동으로 만들고 관리할 수 있어요. 주요 변경 사항은 다음과 같아요.

- 설정 패널 자동 열림: 새 템플릿이나 문서에 상품 목록을 추가한 뒤 그 목록을 클릭하면 설정 패널이 자동으로 열려서 바로 설정할 수 있어요.  
  ![상품 목록을 클릭하면 열리는 설정 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192610/original/m32qF971fhQ6W0aWKAm1haQRa96V4I8eJw.png?1737463687)
- 반복 유형 자동 지정: 반복 상품을 추가하면 상품 유형이 자동으로 반복으로 바뀌어요.
- 가격 유형 태그: 상품이 일회성인지 반복인지 태그로 표시돼서 가격 유형을 한눈에 구분할 수 있어요.  
  ![일회성과 반복 상품을 구분하는 가격 유형 태그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192575/original/BvTl1r-opmC8DgoyB8z7wzUbyuTU5E24HQ.png?1737463645)
- 유연한 인보이스 일정: 서명 즉시 인보이스를 만들거나, 서명일을 기준으로 정해진 일정에 맞춰 만들도록 선택할 수 있어요.  
  ![인보이스 생성 일정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192590/original/PphDdpE_JVjTz8UCOdPTjOjDc__V-bCtcA.png?1737463657)

## 사용 방법

### 템플릿에서 설정하기

1. 새 템플릿 만들기
   - **결제 > 문서 & 계약 > 템플릿 > 새 템플릿**으로 이동해요.  
     ![새 템플릿 만들기 메뉴 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192695/original/_2f8RiHPRq3Ck-IfTr1HmJdOpvMFgpdAOQ.png?1737463746)
2. 상품 목록과 서명 추가하기
   - 템플릿에 상품 목록을 추가해요.
   - 필요한 위치에 서명 요소를 넣어요.  
     ![템플릿에 상품 목록과 서명 요소를 추가한 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192790/original/18VAl-uoP2MKbCWRUUOqI6zYkIFvSCQ4Bg.png?1737463789)
3. 반복 상품 설정하기
   - 상품 목록에 반복 상품을 추가해요.
   - 설정 패널이 자동으로 열려요.  
     ![반복 상품을 추가하면 열리는 설정 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192818/original/XWkZ94CHm5lsYqgW7teiPASepCzdpa3rMA.png?1737463823)
4. 상품 유형 구분하기
   - 상품 목록에 일회성 상품과 반복 상품이 구분되어 표시돼요.

   {% hint style="info" %}
   - 일회성 상품: 항상 일회성 결제로 처리돼요.
   - 설정 비용이 있는 반복 상품: 두 개의 항목으로 표시돼요. 하나는 반복 결제, 다른 하나는 일회성 설정 비용이에요.
   - 이후에 발송되는 인보이스에는 반복 상품만 청구돼요.
   {% endhint %}

### 상품 목록에서 반복 인보이스 설정하기

1. **Generate Invoice at Signing**(서명 시 인보이스 생성)
   - 켜면: 서명하는 시점에 첫 인보이스가 만들어지는 반복 인보이스 일정이 생성돼요. 이후 인보이스는 정해 둔 주기(예: 매월)에 따라 만들어져요.
     - 예: 1월 25일에 서명한 문서에 월 단위 일정을 설정했다면 다음 인보이스는 2월 25일에 발송돼요.
   - 끄면: 서명일과 상관없이 인보이스를 보낼 날짜를 직접 정할 수 있어요.
2. **직접 결제 켜기**
   - 켜면: 기본 서명자가 서명을 마치자마자 인보이스 페이지로 바로 이동하고, 인보이스가 담긴 이메일도 발송돼요.
   - 끄면: 인보이스가 초안으로 저장돼요. 나중에 직접 보낼 수 있어요.  
     ![직접 결제 켜기 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192852/original/53u9d00rt6mIJJRGbNWgOoALYyEREYHhfA.png?1737463853)  
     ![직접 결제 켜기 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192883/original/9VWaDF-ImEVjKlK_pm_qLC-ASsWa7Mxllg.png?1737463880)

### 워크플로우 설정하기

1. 템플릿 저장하기
   - 설정을 마친 뒤 템플릿을 저장해요.  
     ![템플릿 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192893/original/-3UIQsdRELaPte1YEzcXcntWdBZGqKdhxg.png?1737463897)
2. 워크플로우 구성하기
   - **워크플로우**로 이동해서 저장한 템플릿을 사용하는 새 워크플로우를 만들어요.  
     ![저장한 템플릿으로 워크플로우를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192926/original/trhoweVKEWsarS92L9_mLcX6oECFxCQrFg.png?1737463916)
3. 발송하고 완료하기
   - 워크플로우가 실행되면 서명자는 인보이스가 첨부된 문서를 받아요.
   - 서명을 마치면 기본 서명자는 인보이스 페이지로 이동해서 바로 결제할 수 있어요. 인보이스가 담긴 이메일도 함께 발송돼요.  
     ![서명자가 받는 문서 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192963/original/-5DIX_m1N7lwK76TblG97tZr_a23Zw9K3Q.png?1737463928)  
     ![서명 후 이동하는 인보이스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192971/original/1VXEFDVxboVsHLyRxvqLUGI9qf5ZIczQNQ.png?1737463939)  
     ![인보이스 결제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192978/original/62cCnKuHvRplJjDhOVXsERda4Hl4lYskiQ.png?1737463953)  
     ![인보이스가 담긴 이메일 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040193092/original/Dq1GC8aTbjw7fxaRsQaIYV35IbibaoibJQ.png?1737464042)
4. 결제 확인하기
   - **문서** 또는 **인보이스** 화면에서 결제 내역을 확인해요.

## 자주 묻는 질문

### 문서에 결제 일정을 넣었는데 인보이스가 생성되지 않았어요

결제 일정의 날짜 중 하나가 인보이스 만기일을 **지나갈** 때 이런 일이 생겨요. 첫 결제를 **사용자 지정 날짜**로 설정했을 때 자주 발생해요. 이를 막으려면 첫 결제를 “**기본 서명 시**”로 설정하세요. 그러면 일정이 맞게 정렬되어 인보이스가 생성돼요.
