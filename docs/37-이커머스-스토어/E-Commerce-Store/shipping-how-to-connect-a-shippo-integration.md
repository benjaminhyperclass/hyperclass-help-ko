---
원문: /support/solutions/articles/155000003109-shipping-how-to-connect-a-shippo-integration-
번역일: 2026-11-07
카테고리: 37-이커머스-스토어
---

# Shippo 연동 연결하기

Shippo를 연동하면 스토어 결제 화면에서 실시간 배송 요금을 보여 줄 수 있어요. 이 문서에서는 Shippo에서 라이브 토큰을 만들고, 하이퍼클래스에 Shippo를 설치해 연결하는 과정을 순서대로 안내해요.

## 1단계: Shippo에서 라이브 토큰 만들기

Shippo에서 **Settings > Advanced > API > Live Token**(설정 > 고급 > API > 라이브 토큰)으로 이동하세요.

1. 라이브 토큰 생성 버튼을 클릭하세요.
   ![라이브 토큰 생성 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306280/original/UKPUtVdnqBnQjuDbRZy1wth6ne_LYu_MJg.jpeg?1724107619)
2. 생성된 라이브 토큰을 복사하세요.
   ![라이브 토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306276/original/2OS13zRiHnVR2fBi_mDa9wb6JChQy3ZDVQ.jpeg?1724107619)

## 2단계: Shippo에서 패키지 템플릿과 배송 옵션 설정하기

### Shippo에서 패키지 템플릿 설정하기

1. Shippo에서 **Settings > Shipping > Packages > Add New Template**(설정 > 배송 > 패키지 > 새 템플릿 추가)으로 이동하세요.
   ![패키지 템플릿 추가 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306273/original/3lndX_6sYWU_Mci25DAI9z1ASDTRCW0cbg.jpeg?1724107618)
2. 치수를 직접 입력하거나, 배송사가 제공하는 표준 소포 규격 중에서 고를 수 있어요.
   ![치수 직접 입력 또는 표준 소포 규격 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306269/original/GnAEz-kElmkEQFjwplZrRgViuuoAGksgyw.jpeg?1724107619)
3. 배송사가 제공하는 표준 소포를 고르면 아래와 같은 화면이 나와요.
   ![배송사 제공 표준 소포 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306267/original/2CZ9p0FvLXVrxjLNy_N2ZCDI0y7xhSBfKQ.jpeg?1724107618)
4. 배송사 제공 소포를 선택했다면 여기에서 패키지 무게를 설정하세요. 이 템플릿을 기본값으로 쓰려면 체크박스를 선택하세요.
   ![패키지 무게 설정과 기본 템플릿 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306268/original/sOZEggUzbaXXhBbR4lm_shySudr5nB3ppQ.jpeg?1724107618)

### Shippo에서 배송 출발지 설정하기

1. Shippo에서 **Settings > Address book > Sender & return > Add New address**(설정 > 주소록 > 발신 및 반품 > 새 주소 추가)로 이동해 발신·반품 주소를 설정하세요.
   ![발신 및 반품 주소 추가 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306279/original/sE5aOkSa7IZ6g5CPsjwJm1asqTwn-qpJiw.jpeg?1724107619)
2. 전체 주소를 입력하세요. 필요하면 기본 발신 주소와 기본 반품 주소로 지정하세요.
   ![전체 주소 입력과 기본 주소 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306271/original/vjMu6fhsoCrfObjv3jUs_qynO-oX96TQ7w.jpeg?1724107619)

### Shippo에서 배송 옵션 설정하기

1. Shippo에서 **Settings > Shipping > Rates at Checkout > Add Shipping option**(설정 > 배송 > 결제 시 요금 > 배송 옵션 추가)으로 이동하세요.
   ![배송 옵션 추가 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306278/original/elDXW9yMYmLOfH1u-81W6DGMmfPW8bMMMw.jpeg?1724107619)
2. **Live rate**(실시간 요금) 옵션을 선택하고, 사용할 배송사 서비스를 고르세요.
   ![실시간 요금 옵션과 배송사 서비스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306277/original/7Rexr6I7sE3LZL8ncKHqzkdh8HsDrAXPbg.jpeg?1724107619)
3. 스토어 운영자는 배송비에 마크업 요금을 붙여 수익을 낼 수 있어요. 마크업 요금은 실시간 요금에 더해지는 추가 요금이에요. 비율 기준이나 고정 금액 중에서 고를 수 있어요. 실시간 요금을 불러오지 못할 때 적용할 대체 배송 요금도 정할 수 있어요.
   ![마크업 요금과 대체 배송 요금 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306272/original/_qH9MKX51RmtcfVo6JA_LbsimHZIBoTVxA.jpeg?1724107619)
4. 결제 페이지의 실시간 요금에는 배송 옵션에 입력한 이름이 표시돼요.
   ![결제 페이지에 표시되는 실시간 요금 이름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306275/original/sc_M8Y0k7W4AJWniNHUSI61ZgrqOcSDCxg.jpeg?1724107619)

## 3단계: 하이퍼클래스에서 배송 출발지 설정하기

이커머스 스토어의 **결제** 메뉴에서 배송 출발지를 설정하세요. 여기에 입력한 주소가 Shippo에서 주문을 만들 때 발신 주소로 쓰여요. **결제 > 설정 > 출발지**로 이동해 정보를 입력하고 **저장**을 클릭하세요.

{% hint style="info" %}
유효한 주소여야 해요. 그렇지 않으면 Shippo에서 오류가 나서 배송 라벨을 구매할 수 없어요.
{% endhint %}

![출발지 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510354/original/-25uLIJxsSXvea0cnPc_QlFPX2wEwxIs0A.png?1724336225)

## 4단계: 마켓플레이스에서 Shippo 앱 설치하기

**앱 마켓플레이스**나 **설정**의 **연동** 페이지에서 Shippo를 검색해 설치하세요. 설치가 끝나면 라이브 토큰을 입력해 계속 진행해요.

## 5단계: Shippo 라이브 토큰 입력하고 계속하기

1. 1단계에서 만든 라이브 토큰을 입력하세요.

   ![라이브 토큰 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510646/original/4Kl-igCq0UwIEBwq1GhTWb_sHo1zy7EVCg.png?1724336377)
2. Shippo에서 패키지 템플릿, 배송 출발지, 배송 옵션을 모두 설정한 뒤 **배송 설정**에서 실시간 요금을 활성화하세요.
   ![배송 설정에서 실시간 요금 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510736/original/EzX9WcJFUNgZHEmbPpkhdWKGFmKGLd0Weg.png?1724336425)
3. Shippo에서 패키지 템플릿, 배송 출발지, 배송 옵션 중 빠진 것이 있으면 아래와 같은 오류가 나타나요.

   ![설정이 빠졌을 때 나타나는 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031511338/original/zRJYAv6iFSCaJ5-B_yGraZql-U_OlOcHEw.png?1724336766)

## 6단계: 실시간 배송 요금 켜기/끄기

**배송 요금**의 체크박스를 선택하면 실시간 배송 요금이 켜지고, 해제하면 꺼져요. 켜거나 끈 다음에는 **저장**을 클릭하세요.
