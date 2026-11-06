---

번역일: 2026-04-08
카테고리: 37-이커머스-스토어 > E-Commerce Store
---

# 배송: Shippo 연동하는 방법

# 1단계: Shippo에서 Live 토큰 생성하기

Shippo에서 Live 토큰을 생성하려면 다음 경로로 이동하세요: *Settings(설정) > Advanced(고급) > API > Live Token(라이브 토큰)*

- "generate live token" 클릭:
![Live 토큰 생성하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306280/original/UKPUtVdnqBnQjuDbRZy1wth6ne_LYu_MJg.jpeg?1724107619)

- Live 토큰 복사하기:
![Live 토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306276/original/2OS13zRiHnVR2fBi_mDa9wb6JChQy3ZDVQ.jpeg?1724107619)

# 2단계: Shippo에서 패키지 템플릿 및 배송 옵션 설정하기

### **Shippo에서 패키지 템플릿 설정하기:**

- 패키지 템플릿은 다음 경로에서 설정할 수 있습니다: Settings(설정) > Shipping(배송) > Packages(패키지) > Add New Template(새 템플릿 추가)
![패키지 템플릿 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306273/original/3lndX_6sYWU_Mci25DAI9z1ASDTRCW0cbg.jpeg?1724107618)

- 스토어 운영자는 커스텀 치수를 직접 입력하거나 택배사에서 제공하는 표준 박스 치수를 선택할 수 있습니다:
![커스텀 또는 표준 치수 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306269/original/GnAEz-kElmkEQFjwplZrRgViuuoAGksgyw.jpeg?1724107619)

- 표준 택배사 박스를 선택한 경우:
![표준 박스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306267/original/2CZ9p0FvLXVrxjLNy_N2ZCDI0y7xhSBfKQ.jpeg?1724107618)

- 택배사 제공 박스의 경우, 여기서 패키지 무게를 설정해야 합니다. 현재 템플릿을 기본값으로 설정하려면 체크박스에 체크하세요:
![패키지 무게 및 기본값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306268/original/sOZEggUzbaXXhBbR4lm_shySudr5nB3ppQ.jpeg?1724107618)

### **Shippo에서 배송 발송지 설정하기:**

- 발송인 및 반송 주소는 다음 경로에서 설정할 수 있습니다: Settings(설정) > Address book(주소록) > Sender & return(발송인 및 반송) > Add New address(새 주소 추가)
![발송인 주소 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306279/original/sE5aOkSa7IZ6g5CPsjwJm1asqTwn-qpJiw.jpeg?1724107619)

- 완전한 주소를 입력하고 기본 발송인 및 반송 주소를 선택하세요(필요한 경우):
![주소 입력 및 기본값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306271/original/vjMu6fhsoCrfObjv3jUs_qynO-oX96TQ7w.jpeg?1724107619)

### **Shippo에서 배송 옵션 설정하기:**

- 배송 옵션은 다음 경로에서 설정하세요: *Settings(설정) > Shipping(배송) > Rates at Checkout(결제 시 요금) > Add Shipping option(배송 옵션 추가)*
![배송 옵션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306278/original/elDXW9yMYmLOfH1u-81W6DGMmfPW8bMMMw.jpeg?1724107619)

- Live rate 옵션을 선택하고 원하는 택배사 서비스를 선택하세요:
![Live rate 및 택배사 서비스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306277/original/7Rexr6I7sE3LZL8ncKHqzkdh8HsDrAXPbg.jpeg?1724107619)

- **스토어 운영자는 배송료에 수수료를 추가하여 수익을 얻을 수 있습니다**. 이는 실시간 요금에 추가되는 부가 요금입니다. 운영자는 퍼센트 기준 또는 고정 수수료를 선택할 수 있습니다. 실시간 요금을 가져올 수 없는 경우를 대비한 대체 배송비도 설정할 수 있습니다.
![수수료 및 대체 배송비 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306272/original/_qH9MKX51RmtcfVo6JA_LbsimHZIBoTVxA.jpeg?1724107619)

- 결제 페이지의 실시간 요금에는 배송 옵션에서 설정한 이름이 표시됩니다:
![결제 페이지 배송 옵션 이름 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306275/original/sc_M8Y0k7W4AJWniNHUSI61ZgrqOcSDCxg.jpeg?1724107619)

# 3단계: 배송 설정에서 배송 발송지 설정하기

이커머스 스토어의 결제 섹션에서 배송 발송지를 설정하세요. 이는 Shippo에서 주문 생성 시 발송인 주소로 사용됩니다. 다음 경로에서 접근할 수 있습니다: *Payments(결제) > Settings(설정) > Shipping Origin(배송 발송지)*. 세부 정보를 입력하고 저장하세요.

**주의:** *유효한 주소여야 합니다. 그렇지 않으면 Shippo에서 배송 라벨 구매 시 오류가 발생합니다.*

![배송 발송지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510354/original/-25uLIJxsSXvea0cnPc_QlFPX2wEwxIs0A.png?1724336225)

# 4단계: 마켓플레이스에서 Shippo 앱 설치하기

마켓플레이스 앱 또는 연동(Integration) 페이지(설정 내)에서 "Shippo"를 검색하여 애플리케이션을 설치하세요. 설치가 완료되면 Live 토큰을 추가하여 계속 진행하세요.

# 5단계: Shippo Live 토큰 입력하고 계속하기

- 1단계에서 생성한 Live 토큰을 입력하세요:

![Live 토큰 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510646/original/4Kl-igCq0UwIEBwq1GhTWb_sHo1zy7EVCg.png?1724336377)

- Shippo에서 패키지 템플릿, 배송 발송지, 배송 옵션을 설정한 후 배송에서 Live rates 활성화:

![Live rates 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510736/original/EzX9WcJFUNgZHEmbPpkhdWKGFmKGLd0Weg.png?1724336425)

- Shippo에서 패키지 템플릿, 배송 발송지, 배송 옵션 설정 중 누락된 항목이 있는 경우 다음 오류가 표시됩니다:

![설정 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031511338/original/zRJYAv6iFSCaJ5-B_yGraZql-U_OlOcHEw.png?1724336766)

# 6단계: 실시간 배송료 활성화/비활성화하기

체크박스를 체크하거나 해제하여 배송료를 활성화하거나 비활성화할 수 있습니다. 실시간 배송료를 활성화/비활성화한 후 저장을 클릭하세요.

---
*원문 최종 수정: Fri, 13 Sep, 2024 at 9:12 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*