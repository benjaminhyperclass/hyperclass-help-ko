---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006908-how-to-send-your-first-invoice-using-highlevel-
번역일: 2026-11-06
카테고리: 08-결제
---

# 하이퍼클래스에서 첫 인보이스 보내기

인보이스는 매출을 추적하고 작업 대금을 제때 받는 데 꼭 필요해요. 이 문서에서는 하이퍼클래스 안에서 인보이스를 만들고, 설정하고, 보내는 방법을 알려 드려요.

## 개요

서브 계정에서 만든 **상품**을 불러오거나 인보이스에 직접 내용을 입력해서 고객에게 인보이스를 보낼 수 있어요. 인보이스는 두 가지 유형이 있어요.

1. 인보이스
2. **정기 인보이스** (정기 인보이스 편집 방법 문서 참고)

| 기능 | 일회성 인보이스 | 정기 인보이스 |
| --- | --- | --- |
| 상품 유형 | 일회성 상품 | 정기 상품 |
| 과거 날짜 지정 | ✅ 가능 (발행일) | ❌ 불가 (현재 또는 미래 날짜부터 시작) |
| 자동화 | 한 번 보내면 끝나요. | 매달 자동으로 생성돼요. |
| 이럴 때 좋아요 | 고정 비용, 셋업 비용, 일회성 청구 | 월 단위 정기 계약 |

이 문서에서는 인보이스를 만드는 방법을 설명해요.

{% hint style="info" %}
Stripe Connect 없이 인보이스를 사용한다면 'Stripe Connect 없이 인보이스로 수동 결제 기록하기' 가이드를 참고하세요. 이 경우 결제 내역을 직접 기록해야 해요.
{% endhint %}

---

## 인보이스 만들기 전에 설정하기

- 인보이스를 만들기 전에 전체 인보이스 기본값을 설정해 두면 좋아요. 선택 사항이지만 권장해요. 인보이스에서 쓰려는 기능을 미리 켜 둘 수 있어요.
- **결제 > 인보이스 & 견적서 > 전체 인보이스**로 이동하세요.

![결제 메뉴에서 인보이스 & 견적서의 전체 인보이스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057702927/original/tdpILBBwgy4H2zPF9FDtvKtdxtHhI1iJ-w.png?1762419504)

- 인보이스 화면의 **설정** 버튼을 클릭하면 아래 기본값을 설정할 수 있어요.

**비즈니스 정보**

- **비즈니스 로고**, 이름, 전화번호, 주소, 웹사이트를 입력하세요.

![비즈니스 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058059925/original/ZqkxfHzzwp09zzm01Y382gnYbYqlN6rEzA.png?1762850900)

- **+ 커스텀 값 추가**를 클릭하면 다른 정보도 넣을 수 있어요. 드롭다운에서 필요한 값을 고르고 **저장**을 클릭하세요.

![커스텀 값 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058059964/original/HYgTfkZyEbeFisX8AXMcVG1ZQLyTctomkg.png?1762850918)

**이메일 구성**

- 고객에게 인보이스를 보낼 때 사용할 이메일 주소와 발신자 이름을 입력하고 **저장**을 클릭하세요.

![이메일 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057706513/original/hmAaDavBwZ-hkRTDbDwX4zteU_9UESPVLA.png?1762421036)

**제목, 약관 및 레이아웃**

- 인보이스와 견적서의 제목과 약관을 편집할 수 있어요.

![제목과 약관 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057707747/original/icQ8AbPPnh--Y6NcUridDPyaq3YtLTXbtQ.png?1762421589)

- **레이아웃 맞춤 설정**을 클릭해 인보이스 레이아웃과 레이블을 바꾸고 **저장**을 클릭하세요.

{% hint style="info" %}
인보이스 레이아웃 맞춤 설정: 버튼 색상과 텍스트를 바꾸고, 섹션 이름을 바꾸고, 항목 레이블을 편집하는 방법이에요. 이 도구로 고객이 믿을 수 있는, 브랜드에 맞는 전문적인 인보이스를 만들어 보세요.
{% endhint %}

![레이아웃 맞춤 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057708271/original/BaJr8oHDNi6CBPj5Cms-sT7Y3st3d0ietw.png?1762421922)

**결제 설정**

**결제 설정**에서 아래 항목을 편집하고 켤 수 있어요.

- **Invoice due after days**(인보이스 만기 일수) 설정
- **인보이스 접두사** 설정
- 인보이스에 쓸 기본 Stripe 결제 방법 관리: **관리**를 클릭하세요.

![결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057717631/original/6jtuUmvqx5dyy3Y_6nDdmeXWINdgTa7GOw.png?1762425534)

- 여기서 토글을 켜고 꺼서 고객이 **All valid payment methods**(사용 가능한 모든 결제 수단)로 결제할 수 있게 할지, **Bank transfer only**(**계좌 이체**만)로 제한할지 정할 수 있어요. 설정한 뒤 **저장**을 클릭하세요.

![결제 방법 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713062/original/zUeAVu5dQqibHUJ9vk5KjIqO-cHDZtNAXQ.png?1762423842)

- **Partial payments**(부분 결제)를 켜고, 한 번에 내야 하는 최소 비율을 설정하세요. 자세한 내용은 '인보이스에서 부분 결제 사용하기' 문서를 참고하세요.
- **연체료 부과** 옵션을 켜세요.

![연체료 부과 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057715382/original/2jO1-Ho6RrAXd8RMnhHeg0byW45siiOGyw.png?1762424904)

- **관리**를 클릭하면 **Manage Late fees**(연체료 관리) 창이 열려요. 남은 금액에 적용할 유형을 아래 중에서 고를 수 있어요.

1. **Flat fees**(정액)
2. **Percentage**(비율)

![연체료 관리 창에서 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057716709/original/hSrsrNN6iOi2DFt6hb47TFp3Arrm9i3H8Q.png?1762425156)

- 비율이나 금액, 부과 간격, 유예 기간, 연체료로 받을 수 있는 최대 금액을 입력하고 **저장**을 클릭하세요.

![연체료 세부 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057716912/original/abMCMKtGkwa4TmCns7i78zWWu_A4YcURwA.png?1762425261)

- **Tip payments**(팁 결제)를 켜고 팁 비율 값을 설정한 뒤 **저장**을 클릭하세요.

![팁 결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057717434/original/afvjZidBgqn0oM6ezzhsJU7pirjkDd9v4w.png?1762425476)

**상품 설정**

- **상품 설명**을 가져오는 옵션을 켜고, 선택 사항으로 둘 수도 있어요.

![상품 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057721128/original/uW8RZlauFB8RfIC3a0qCD6ngB9COgfnoLA.png?1762426780)

**리마인더 설정**

인보이스 리마인더는 **Automatic Payment**(자동 결제)가 꺼져 있고 결제 일정이 없는 모든 일회성·정기 인보이스에 적용돼요.

기본으로 리마인더가 하나 있고, 아래 항목을 바꿀 수 있어요.

- **이메일 템플릿**과 **SMS 템플릿**: 수정하고 미리 볼 수 있어요.
- 리마인더 이메일의 **제목 줄** 편집
- 리마인더 발송 빈도 설정
- **영업 시간** 설정
- 리마인더를 보낼 시간대 선택

리마인더를 여러 개 보낼 수도 있어요. **Add another Reminder**(리마인더 추가)를 클릭하고 **저장**을 클릭하세요.

{% hint style="warning" %}
인보이스를 만들 때 만기일을 확인하세요. 만기일이 3일 이내라면 그 인보이스의 3일 전 리마인더를 직접 꺼야 해요. 인보이스 편집 화면에서 리마인더 목록으로 스크롤해 '3일 전' 리마인더의 체크를 해제하거나 삭제하세요.
{% endhint %}

![리마인더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057723729/original/ulFSG_5ScIjkjG_8ImKDlGQhcJWquhuwOQ.png?1762428155)

**청구 커스텀 필드**

- **+Add Custom Field**(커스텀 필드 추가)를 선택하면 커스텀 필드를 추가할 수 있어요.

![커스텀 필드 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057725212/original/PNv7HLFbl4WR8SbgbovE3WPGIBN2Mplgdw.png?1762429078)

- 드롭다운에서 필요한 커스텀 필드를 고르고 **저장**을 클릭하세요. 오른쪽에서 미리보기를 확인할 수 있어요.

![커스텀 필드 선택과 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057727495/original/hZrJYwz-oNhLD4eO2V20FsYlXVJvPrUxwQ.png?1762429960)

**알림**

**알림** 드롭다운을 열면 두 가지 알림이 있어요.

- **Customer Notification**(고객 알림)

  **Customer Notification**에서는 아래 알림의 이메일 템플릿, 제목 줄, SMS 템플릿을 켜고 관리할 수 있어요.

  1. **인보이스 수신됨**
  2. **Estimate Received**(견적서 수신됨)
  3. **인보이스 결제가 완료되었습니다**
  4. **인보이스 결제 실패**
  5. **자동 결제 정보**
  6. **자동 결제 금액이 변경되었습니다**
  7. **자동 결제 실패**

![고객 알림 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057727912/original/s-ThMXr-C3Nus5C_F84A_ZmUPPb0fsadYQ.png?1762430193)

- **Team Notification**(팀 알림)

  **Team Notification**에서는 아래 알림의 이메일 템플릿과 제목 줄을 켜고 관리할 수 있어요.

  1. **인보이스 결제가 완료되었습니다**
  2. **인보이스 결제 실패**
  3. **자동 결제 실패**
  4. **자동 결제 건너뜀**
  5. **인보이스를 보내지 못했습니다**
  6. **견적서가 수락되었습니다**
  7. **견적서가 거절 처리되었습니다**

---

## 인보이스 만들기

- **결제 > 인보이스 & 견적서 > 전체 인보이스**로 이동하세요.

![전체 인보이스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057736509/original/B_6nQDcKXdQZajCvsg5mTHdR7RMWkjipBA.png?1762433855)

- **+ 신규**를 클릭하고 드롭다운에서 **New invoice**(새 인보이스)를 선택하세요.

![신규 버튼에서 새 인보이스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057736580/original/M-MVfxC02TW03Qrr278AZDzeW1Keh58IjQ.png?1762433895)

1. **Client & Schedule**(클라이언트 및 일정): 고객을 추가하고 **인보이스 번호**, **Issue date**(발행일), **Due date**(만기일)를 편집할 수 있어요.

![클라이언트 및 일정 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058747899/original/IwhiIRgCtMOxHxLw2mwi8RFeyjJVl9O27Q.png?1763556268)

   편집을 클릭해 **비즈니스 정보**를 수정하고 **저장**을 클릭하세요.

{% hint style="info" %}
이 정보는 인보이스에 표시돼요.
{% endhint %}

![비즈니스 정보 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058747995/original/9WBVpSL_LyfQ9JBjNW6yAtyBLmG6Jh8o9w.png?1763556302)

2. 상품 추가: **항목 추가**를 클릭해 **상품**에서 만들어 둔 상품을 추가하세요.

![항목 추가로 상품 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748092/original/sd6oJEuAJmfesq018XHMHCQJumNErpBPXQ.png?1763556350)

   상품을 추가하면 인보이스 항목에서 가격과 수량을 바로 편집할 수 있어요.

![인보이스 항목에서 가격과 수량 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410120/original/Cc1kmlSXGU1CaKXsJeWCpb9JnGU_v-TV1g.png?1762159849)

---

## 인보이스에 할인 추가하기

소계 아래에 있는 **할인 추가** 아이콘을 클릭하면 할인을 추가할 수 있어요.

- 정액 할인과 비율 할인 중에서 고르세요.
- 값을 입력하고 **저장**을 클릭하세요.

![할인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748187/original/daNwNztGB3z3oNIWOZshkST3k6Yi0EoiUA.png?1763556399)

---

## 인보이스에 세금 추가하기

세금은 전체 설정과 인보이스, 두 단계로 관리해요.

#### 전체 세금 설정

1. 왼쪽 메뉴에서 **설정**을 선택하고 **세금**을 선택하세요.
2. 세금을 구매 가격에 포함할지, 따로 더할지 선택하세요.
3. 세금을 직접 추가하려면 **Add tax**(세금 추가) 또는 **Create Tax**(세금 만들기)를 클릭하고 세율을 입력하세요.
4. 세금을 자동으로 받으려면 **Automatic Tax**(자동 세금)를 켜고, 세금 카테고리를 선택한 뒤 해당 지역을 추가하세요.

![세금 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410122/original/_NubUlWOsiRl1WBSWSphgSu85pJmxWN8ew.png?1762159849)![세금 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410134/original/Kh4eCEEHADSLU8pZMcbTj6V9LfJ44htyfA.png?1762159850)![세금 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410135/original/fCHBPQpL0Ul7uSf0ILp_90wdptpQJ_cpBQ.png?1762159850)

#### 인보이스에 세금 적용하기

- 할인 영역 아래의 **Add Tax**(세금 추가)를 클릭하고, 세금을 직접 추가할지 자동으로 추가할지 선택하세요.

![인보이스에서 세금 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748247/original/TmM-S3KKSt6_KblLN6l0fVcQu_-K4fxfFA.png?1763556417)

- 상품 목록 위에 있는 **Enable tax automatically**(세금 자동 적용) 토글을 사용할 수도 있어요.

![세금 자동 적용 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748362/original/16UZxUId7pmi6GOEJaKzPWs9AzupIUUUwg.png?1763556447)

---

## 결제 일정 추가하기

- **결제 일정 추가**를 클릭하면 팝업 창이 열려요.

![결제 일정 추가 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748404/original/sgmgbHb83dan-sbKZd7J15UwPujJhmbC0w.png?1763556469)

- 결제 일정은 두 가지 유형이 있어요.

1. 비율
2. **고정 금액**

- 결제별 비율이나 금액과 결제 기한을 입력하고 **저장**을 클릭하세요.

![결제 일정 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748443/original/1rXjYlwAq_rDodZtA_zGTKjf-w4_SrBR5Q.png?1763556493)

기본으로 결제 2건이 추가돼요. 결제를 더 추가하려면 **결제 추가**를 클릭하세요.

![결제 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748481/original/fxivRE-mdvN28olE4vKKZpiaDcr97da-Pg.png?1763556513)

---

## 사용자 지정 결제 제공업체 지원

지원되는 사용자 지정 결제 제공업체를 쓰면 인보이스에서 아래 기능을 사용할 수 있어요.

결제 일정: 인보이스 결제를 일정에 따라 받을 수 있고, 예정된 결제를 인보이스에서 확인하고 관리할 수 있어요.

![결제 일정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078379422/original/K1YzgvM5JcMwfsV5aIf_q13M8WWw24lMXA.png?1786640764)

부분 결제: 결제 제공업체가 지원하면 인보이스를 나눠서 받을 수 있어요. 결제 내역과 남은 금액을 확인할 수 있어요.

팁: 지원되는 사용자 지정 결제 제공업체로 결제할 때 고객이 팁을 추가할 수 있어요.

![팁 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078379571/original/ZrB3DJVB9yBxoHPt0-PN8M9fodwNcw20Zw.png?1786640814)

연체료: 사용자 지정 결제 제공업체로 결제하는 연체 인보이스에도 연체료가 자동으로 계산돼요.

{% hint style="info" %}
사용할 수 있는 기능은 사용자 지정 결제 제공업체에 따라 달라요.
{% endhint %}

---

## 추가 옵션 사용하기

인보이스의 **추가 옵션** 섹션에서 특정 약관이나 수수료를 켤 수 있어요.

- **이용약관**: 고객이 확인할 전체 이용약관을 추가해요.

![이용약관 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410126/original/7A9H5C2yT5eH42fp14GV4gHe0QQkRUeoRw.png?1762159849)

- **연체료 부과**: 연체료는 비율이나 정액으로 부과할 수 있어요. 비율이나 금액, 부과 간격, 유예 기간, 연체료로 받을 수 있는 최대 금액을 입력하세요.

![연체료 부과 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410101/original/w0xcnR4VjJ7wc0mSAGcW-baArBFDAMNutA.png?1762159849)

![연체료 부과 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410102/original/_KxcYXAXS2pqwXIZOTmsYT-L59YYQz_Muw.png?1762159849)

- **Charge Processing Fee**(처리 수수료 부과) & **팁 포함**: 받을 처리 수수료 비율과 팁 비율 범위를 입력하세요. 처리 수수료는 인보이스 편집 화면이나 처음 미리보기에는 보이지 않아요. 고객이 **결제**를 클릭해야 보여요.

![처리 수수료와 팁 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057541374/original/xsx1YD9LCj1ckUCjlhw4L3w-BM-yeASDeg.png?1762262503)

- **첨부파일 추가**: 이 파일은 고객에게 보내는 인보이스 이메일에 첨부돼요.

![첨부파일 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410117/original/wq8BdAC8P6t_xkPOViqUnaE_7xO1WY4X0g.png?1762159849)

{% hint style="info" %}
부분 결제를 받거나, 연체료를 부과하거나, 팁 결제를 받으려면 **인보이스 & 견적서** 탭의 **설정** 버튼 아래 **결제 설정**에서 해당 옵션을 먼저 켜 두어야 해요.
{% endhint %}

![결제 설정에서 옵션 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057410143/original/lxLeVSEeG5Ak5q-Ga6UdNeD2YNHqp-BwYQ.png?1762159851)

---

## 인보이스 보내기

- 인보이스를 보내기 전에 **저장** 버튼을 클릭해서 먼저 저장할 수 있어요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057740841/original/ZB5RO2-kFSgI378b-EW8rpKF53LNiQMnpQ.png?1762435696)

- **저장** 옆의 점 세 개를 클릭하면 인보이스를 **미리보기**하고, **결제 방법**을 관리하고, 전체 인보이스 설정을 편집할 수 있어요.
- 인보이스 편집 화면 오른쪽의 미리보기는 실제 모습 그대로 보여 주는 미리보기(WYSIWYG)가 아니에요. 레이아웃 구조만 보여 주는 샘플 데이터가 표시돼요.
- 실제 최종 레이아웃을 보려면 아래 방법 중 하나를 쓰세요.

  - 점 세 개 > **미리보기**
  - 인보이스를 보낸 뒤: **연락처 > 이메일 > 인보이스 보기**
- 정확한 미리보기에서는 받는 사람이 보는 모습 그대로 전체 인보이스를 볼 수 있어요. 해당하는 경우 항목 이름이 한 줄로 표시되는 것 같은 서식도 제대로 나와요.
- 전체 미리보기는 새 브라우저 탭에서 열려요. 편집 화면으로 돌아가려면 원래 탭으로 전환하세요.

![점 세 개 메뉴의 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748153/original/NYoft_zY16zb1rQCGxLcrwq5cBoiLR1bgA.png?1763556371)

- **보내기** 옆의 작은 아래 화살표를 클릭하면 인보이스를 복사하고 발송됨으로 표시하는 옵션이 나와요.

{% hint style="info" %}
이 버튼을 클릭하면 인보이스가 **Draft**(초안)에서 **발송됨** 상태로 바뀌고, 실시간으로 작동하는 결제 링크가 바로 클립보드에 복사돼요. 어떤 이메일 템플릿에든 바로 붙여 넣을 수 있어요.
{% endhint %}

![보내기 옆 화살표 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058748051/original/eyT4tw0B5zYxxsNtm3-EuOWYtzI7RhhBbw.png?1763556328)

- **보내기**를 클릭하면 **인보이스 이름**을 편집하고, 이메일·문자·둘 다 중에서 발송 방식(**이메일로 전송** 등)을 고를 수 있어요. **이메일 템플릿** 아래의 메일 미리보기를 클릭하면 이메일 요소를 편집할 수 있어요.

![인보이스 보내기 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057742033/original/73wTHnQwgtfaiocOvmnTKjA-mmLt7wGliQ.png?1762436309)

- 요소를 편집하면 미리보기를 확인하고 템플릿을 저장할 수 있어요.

![이메일 템플릿 편집 후 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058747789/original/9fHKV46WbC8B1uPMzcimHHvuyIvoAyfnmg.png?1763556200)

- **추가 옵션**에서 **Test**(테스트) 모드나 **라이브** 모드로 설정하고 **저장**을 클릭하세요.

---

## 인보이스 링크 가져오기

Outlook이나 다른 외부 이메일 서비스로 인보이스 링크를 보낼 수 있어요.

![인보이스 링크 복사 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060296926/original/TTTZDpg78vaB-xVfEgg4keQTsmEwsqmiFQ.png?1765361745)

- 인보이스 화면으로 이동하세요.
- 링크를 복사할 인보이스 옆의 점 세 개 메뉴를 클릭하세요.

![인보이스 옆 점 세 개 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060296951/original/hQhqGAhkmYDA5JPf5R4xX_i5zufLT1RXgg.png?1765361773)

- **링크 복사**를 선택하세요.
- 복사한 링크를 Outlook 이메일에 바로 붙여 넣으세요.

원한다면 인보이스를 PDF로 내려받아 이메일에 첨부할 수도 있어요.

---

## 자주 묻는 질문

### 이전에 만든 인보이스에는 로고가 안 보이고 새 인보이스에만 보여요. 왜 그런가요?

원본 이미지 파일이 **미디어 라이브러리**에서 삭제되어서 그래요.

인보이스는 로고를 원래 파일 위치에서 불러와요. 그 파일을 삭제하면 기존 인보이스 전체의 링크가 끊어져요.

해결 방법은 다음과 같아요.

- 새 인보이스: 문제없어요. 설정에 있는 현재 로고를 사용해요.
- 아직 결제되지 않은 인보이스: **미디어 라이브러리**에 새 로고를 업로드하고, **사업 세부정보**에 이 새 이미지가 반영되었는지 확인하세요. 그러면 이 인보이스들에 로고가 다시 나타나요.
- 결제가 완료된 인보이스: 결제가 끝난 기록은 편집할 수 없어서 로고를 복구할 수 없어요. 영수증을 다시 보내야 한다면 PDF에 로고를 직접 추가해야 해요.

참고: [비즈니스 프로필 설정 - 일반 정보](../../11-설정/Business-Profile-Settings/business-profile-settings-general-information.md)

### 인보이스 편집 화면에서 **이용약관**이나 메모에 글을 입력할 수 없고 서식 도구 모음(**굵게**, 기울임꼴 등)만 보여요. 어떻게 해결하나요?

텍스트 편집기가 제대로 불러와지지 않을 때 생기는 브라우저 오류예요. 보통 웹 브라우저에 저장된 오래된 데이터(캐시와 쿠키)와 충돌해서 생겨요.

텍스트 입력란이 보이지 않을 때는 이렇게 해결하세요.

1. 웹 브라우저의 캐시와 쿠키를 모두 삭제하세요.
2. 모든 탭을 닫고 하이퍼클래스 계정에 다시 로그인하세요.
3. 텍스트 편집기가 정상적으로 열리면 이용약관을 입력할 수 있어요.

### 내 계정과 연결된 최신 인보이스는 어디서 찾나요?

에이전시 화면의 **청구 대시보드**에서 **결제** 아래에 모든 인보이스가 있어요.

### 인보이스가 **발송됨**으로 표시되는데 고객이나 담당자가 받지 못했어요. 어떻게 해결하나요?

이메일 발송 문제는 시스템 오류보다 브라우저 문제 때문에 생기는 경우가 많아요. 웹 브라우저에 남은 오래된 캐시와 쿠키가 오류를 일으켜서, 실제로는 보내지지 않았는데 보낸 것처럼 표시될 수 있어요.

해결 방법은 다음과 같아요.

1. 팀원에게 브라우저의 캐시와 쿠키를 삭제하도록 안내하세요.
2. 로그아웃한 뒤 계정에 다시 로그인하도록 하세요.
3. 견적서를 다시 보내 보세요. <!-- 검토 필요: 원문 내용이 서로 다름 (질문은 인보이스인데 답변은 견적서를 다시 보내라고 안내) -->

그래도 해결되지 않으면 하이퍼클래스 고객지원에 문의하세요. 이메일 발송 도메인에 더 큰 문제가 있을 수 있어요.

### 계정 통화가 다른 통화로 설정되어 있는데 고객에게 USD로 청구하려면 어떻게 하나요?

인보이스에 금액을 그냥 입력해서는 안 돼요. 먼저 **결제 > 상품**으로 이동해 새 상품을 만들고, 통화 드롭다운에서 USD를 선택하세요. 인보이스를 만들 때 **항목 추가**를 클릭하고 그 USD 상품을 선택하세요. 이렇게 하면 Stripe가 통화 변환과 결제 처리를 제대로 해 줘요.

### 인보이스를 보냈는데 고객이 링크가 깨졌다고 하거나 눌러도 결제할 수 없다고 해요. 왜 그런가요?

인보이스가 예정된 만기일을 지나서 결제 링크가 비활성화된 거예요. 결제 날짜가 이미 지나면 시스템이 결제 옵션을 자동으로 비활성화해요.

해결하려면 결제 일정을 바로잡은 새 인보이스를 보내야 해요.

1. 원본 인보이스를 **Clone**(복제)하세요.
2. **결제 일정**의 날짜를 오늘이나 미래 날짜로 바꾸세요.
3. 새 인보이스를 고객에게 다시 보내세요. 그러면 링크가 활성화돼요.

### 일회성 셋업 비용과 월 구독료를 한 인보이스에 같이 청구할 수 있나요?

아니요. 시스템이 일회성 결제와 정기 결제를 서로 다른 청구 방식으로 관리하기 때문에, 인보이스를 두 개로 나눠 만들어야 해요.

- 일회성 인보이스: 셋업 비용을 청구할 때 써요. 한 번만 발생하고 반복되지 않는 거래예요.
- **정기 인보이스**: 월 구독료를 청구할 때 써요. 시스템이 새 인보이스를 자동으로 만들고 반복 일정에 따라 고객에게 청구해요.

### 문자(SMS)로 인보이스를 보낼 때 오류가 나는 이유가 뭔가요?

보통 아래 두 가지 중 하나예요.

1. 잘못된 번호: 전화번호가 틀렸거나, 사용 중지됐거나, 연결할 수 없는 번호일 수 있어요.
2. 수신거부 설정: 수신자가 통신사 설정에서 수신거부(DND, Do Not Disturb)를 켜 두면 자동 발송 문자나 홍보 문자가 차단돼요.

### 인보이스 번호가 건너뛰어지는 것 같아요. 왜 그런가요?

보통 **Draft**(초안) 인보이스를 삭제했을 때 그래요. 인보이스 번호는 인보이스를 만드는 순간 확보되기 때문에, 아직 초안 상태여도 번호가 사용돼요.

### 건너뛴 인보이스 번호를 다시 써서 기록을 순서대로 유지할 수 있나요?

네. 시스템이 삭제된 번호를 자동으로 재사용하지는 않지만, 새 인보이스를 만들 때 **인보이스 번호** 필드를 직접 바꿀 수 있어요. 건너뛴 번호를 입력하면 장부의 순서를 유지할 수 있어요.

### 무효 처리한 인보이스를 되돌리거나 결제 완료로 바꿀 수 있나요?

아니요. 하이퍼클래스에서 인보이스 무효 처리는 되돌릴 수 없는 최종 작업이에요. 인보이스를 무효 처리하면 회계상 금액이 0으로 바뀌고, **발송됨**, **Open**(열림), **유료** 상태로 되돌릴 수 없어요.

### 수동 결제를 기록할 때 입력한 메모는 어디서 확인하나요?

수동 결제(현금, 수표, **계좌 이체**)를 기록할 때 추가한 메모는 인보이스의 트랜잭션 상세 정보에 저장돼요. 확인하는 방법은 다음과 같아요.

1. **결제 > 인보이스**로 이동하세요.
2. 확인하려는 인보이스(**유료** 상태)를 찾아 클릭하세요.
3. 인보이스 화면 오른쪽 위의 점 세 개(⋮)를 클릭하세요.
4. 드롭다운 메뉴에서 **트랜잭션 보기**를 선택하세요.
5. 열린 트랜잭션 창에서 **Notes**(메모) 섹션을 찾으세요. 앞서 기록한 메모가 표시돼요.

### 인보이스를 Test 모드에서 라이브 모드로 바꾸려면 어떻게 하나요?

Test 모드로 만든 인보이스는 라이브 모드로 변환할 수 없어요. 라이브로 보내려면 인보이스를 복제한 뒤 복제본을 라이브 모드로 보내세요.

1. **인보이스**로 이동하세요.
2. Test 모드로 만든 인보이스를 찾으세요.
3. 인보이스 옆의 점 세 개(⋮)를 클릭하세요.
4. **Clone**(복제)을 선택하세요.
5. 복제된 인보이스를 여세요. **Draft**(초안)로 만들어져요.
6. 필요하면 내용을 확인하거나 편집하세요.
7. **보내기**를 클릭하고 보낼 때 **라이브** 모드를 선택하세요.

### 고객이 인보이스를 받지 못했다고 해요. 어떻게 확인할 수 있나요?

**대화** 탭에서 인보이스 이메일의 전달 과정을 정확히 추적할 수 있어요. **인보이스** 탭의 **발송됨** 상태로는 알 수 없는, 메일 서버의 실시간 데이터를 볼 수 있어요.

1단계: 해당 고객의 연락처 상세 페이지로 이동하세요.

2단계: 화면 가운데의 **대화** 탭을 클릭하세요.

3단계: 인보이스가 담긴 발신 메시지를 찾으세요.

{% hint style="info" %}
자동 발송되는 인보이스는 보통 이메일로 나가므로, SMS 아이콘(전화기)이 아니라 **이메일** 아이콘(봉투)이 표시된 메시지인지 확인하세요.
{% endhint %}

4단계: 메시지 위에 마우스를 올리고 점 세 개(**추가 작업**)를 클릭한 뒤 **상세 정보**를 선택하세요.

### 인보이스를 보낼 때 '문제가 발생했습니다' 오류가 떠요. 왜 그런가요?

인보이스를 완전히 저장하지 않은 채 보내려고 할 때 주로 나타나는 오류예요. **보내기**를 클릭하면 시스템이 먼저 이메일이나 SMS로 전달할 최종본을 만들어요(복제). 인보이스가 아직 초안이거나 저장되지 않은 상태면 이 복제가 실패하면서 일반적인 **문제가 발생했습니다** 오류가 떠요.

1. 보내려는 인보이스를 여세요.
2. **저장**을 클릭하고 **Successfully Saved**(저장 완료) 메시지가 뜰 때까지 기다리세요.
3. 저장되면 **보내기**를 다시 클릭하세요.

### 할인을 적용한 뒤 인보이스의 세금이 잘못 계산돼요. 왜 그런가요?

전체 세금 포함 설정이 서로 충돌해서 생기는 경우가 많아요. 이 설정이 가격과 세금을 서로 어떻게 계산할지 정해요.

해결하려면 할인을 적용하기 전에 상품 가격이 세금 별도 금액으로 처리되도록 설정해야 해요.

1. **결제 > 설정**으로 이동하세요.
2. 세금 포함 설정(**Tax Inclusion**)을 잘못된 옵션(예: "Tax will be included in the purchase price")에서 아래 옵션으로 바꾸세요.
   **Tax will not be included in the purchase price. The price shown to the customer is not inclusive of tax.**(세금은 구매 가격에 포함되지 않아요. 고객에게 보이는 가격은 세금이 포함되지 않은 금액이에요.)

이렇게 하면 시스템이 할인이 적용된 소계에 세금을 계산해 더하므로, 최종 인보이스 금액이 바로잡혀요.

### 연체된 인보이스에는 원래 금액과 연체료가 같이 표시되나요?

네. 연체료가 적용되면 같은 인보이스에 더해져서, 원래 금액과 연체료가 하나의 총액으로 표시돼요. 연체료가 부과되면 고객에게 이메일로도 알려 줘요.

{% hint style="info" %}
자세한 내용은 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

### 인보이스에 분할 결제 기한을 설정하면 오류가 나요. 왜 그런가요?

분할 결제 기한은 인보이스 전체 만기일과 같거나 그보다 빨라야 하기 때문이에요. 먼저 인보이스의 전체 만기일을 바꾸고, 그다음 분할 결제 날짜를 설정하고 저장하세요.

### 인보이스가 바로 발송되지 않아요. 만기일이 오늘인데도 "하루 뒤에 도착한다"고 나와요. 어떻게 확인하나요?

아래 항목을 확인해 보세요.

- 발행일과 만기일
  **Issue date**(발행일)가 오늘로 설정되어 있는지 확인하세요. 발행일이 미래(하루 뒤라도)로 되어 있으면 만기일과 상관없이 발송이 늦춰져요.
- 시간대 설정
  **설정 > 비즈니스 프로필**에서 계정 시간대를 확인하세요. 다른 시간대(예: US/Eastern)로 설정되어 있으면 시스템 기준으로는 아직 '오늘'이 시작되지 않았을 수 있어요.
- 정기 인보이스와 일회성 인보이스
  정기 인보이스는 정해진 일정에 따라 묶음으로 처리돼요. 바로 보내려면 일회성 인보이스를 만들고 **보내기**를 직접 클릭하세요.

### 인보이스를 여러 명에게 보내려면 어떻게 하나요?

기본적으로 인보이스는 연락처의 대표 이메일 주소로만 발송돼요. 다른 수신자에게도 보내려면 **보내기**를 클릭하고, 보내기 전에 **CC** 옵션에서 이메일 주소를 추가하세요.

### 인보이스 날짜가 되기 전에 고객의 신용카드 정보를 미리 받으려면 어떻게 하나요?

예약된 인보이스는 만기일에 발송되기 전까지 신용카드 정보를 받지 않아요. 시스템은 거래나 승인이 일어날 때만 카드를 저장(보관)해요. 인보이스가 미래 날짜(예: 2월 1일)로 예약되어 있으면 아직 발송되지 않은 상태라서 고객이 카드 정보를 입력할 방법이 없어요.

카드 정보를 미리 받는 방법은 다음과 같아요.

- 소액 셋업 비용 추가(권장): 일회성 셋업 비용(예: 1달러)을 추가하세요. 인보이스가 바로 발송되고, 고객이 소액을 결제하면 카드가 저장돼서 이후 청구에 쓸 수 있어요.
- 체험 기간 사용: 정기 인보이스를 오늘 시작하고, 청구일에 끝나는 체험 기간을 추가하세요. 고객이 체험을 시작하려고 카드를 입력하고, 체험 기간이 끝나면 전체 금액이 청구돼요.
- 0달러 주문 폼 사용: 결제 없이 신용카드 정보만 받는 주문 폼을 만드세요. 카드가 저장되면 이후 인보이스에 자동 결제를 켜세요.
