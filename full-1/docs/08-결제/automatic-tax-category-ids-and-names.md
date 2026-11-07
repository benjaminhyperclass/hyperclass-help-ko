---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006278-automatic-tax-category-ids-and-names
번역일: 2026-11-06
카테고리: 08-결제
---

# 자동 세금 카테고리 ID와 이름

하이퍼클래스에서 쓸 수 있는 세금 카테고리를 정리한 문서예요. 세금 카테고리를 지정하면 상품, 서비스, 구독의 세금이 정확하게 계산돼요.

## 개요

하이퍼클래스에서는 **세금 카테고리 ID**와 **세금 카테고리 이름**으로 거래, 구독, 상품에 세금을 적용해요. 화면에서는 세금 카테고리 이름을 고르면 돼요. 그러면 내부적으로 고유한 세금 카테고리 ID가 연결되어 세금 계산과 리포팅에 쓰여요. 카테고리를 알맞게 지정하면 각 지역과 국제 세금 규정에 맞게 세금이 처리돼요.

## 세금 카테고리 사용 방법

1. 카테고리 지정: 상품이나 서브 계정의 기본값을 만들거나 편집할 때, **세금 카테고리**에서 알맞은 세금 카테고리 이름을 고르세요.
2. 세금 계산: 하이퍼클래스는 지정한 세금 카테고리 이름을 바탕으로, 고객 위치와 설정해 둔 nexus 주소(세금 연고지 주소)에 맞는 세율을 적용해요.
3. API를 사용할 때는 하이퍼클래스에서 쓰는 카테고리 ID와 카테고리 이름을 사용하세요.

## 참고 사항

- 현지 세법이 바뀔 수 있으니 세금 카테고리를 정기적으로 검토하세요.
- 거래에 해당하는 세금 카테고리가 없으면 "Non-Taxable" 또는 알맞은 세금 카테고리 이름을 선택하세요. 그러면 세금이 적용되지 않아요.

## 세금 카테고리 ID와 이름

<!-- 검토 필요: 원문 표는 약 3,000개 행이라 아래에는 앞부분 일부만 옮겼음. 나머지 행은 원문 순서 그대로 이어 붙여야 함. 카테고리 이름과 세금 코드는 API·Avalara 기준 데이터 값이므로 번역하지 않고 영어 원문을 유지함. -->

| 카테고리 ID | 카테고리 이름 | 세금 코드(Avalara) |
| --- | --- | --- |
| 6852749d6e0bd35d786d14c3 | Pet / Veterinary Drugs / Over-the-Counter / Sold as Part of Treatment / Partially Administered by Veterinarian | PP052402 |
| 6852749d6e0bd3f8c56d14b9 | Prepared Food / Intended for Immediate Consumption | PA0010000 |
| 6852749d6e0bd3b35f6d14bf | Pet / Veterinary Drugs / Prescription Only / Sold as Part of Treatment / Not Administered by Veterinarian | PP052403 |
| 6852749d6e0bd39a9b6d14be | Pet / Veterinary Drugs / Prescription Only / Not Sold as Part of Treatment | PP052405 |
| 6852749d6e0bd39dd76d14b4 | Services | S0000000 |
| 6852749d6e0bd347fd6d14bc | Gun Safes | PF030011 |
| 6852749d6e0bd3b3466d14b6 | Non-Taxable Product | NT |
| 6852749d6e0bd32ece6d14b8 | Lodging accommodations | SL090200 |
| 6852749d6e0bd30e366d14c1 | Pet / Veterinary Drugs / Over-the-Counter / Not Sold as Part of Treatment | PP052406 |
| 6852749d6e0bd3f52b6d14b7 | Adjustment for excluded charges - India | AT |
| 6852749d6e0bd337fa6d14bd | Rental or Lease of Audio Visual Media | PR060250 |
| 6852749d6e0bd31fdc6d14b5 | Other | O0000000 |
| 6852749d6e0bd343ce6d14c0 | Pet / Veterinary Drugs / Over-the-Counter / Sold as Part of Treatment / Not Administered by Veterinarian | PP052404 |
| 6852749d6e0bd364436d14c4 | Fabrication Services / Fabricator Provides Raw Materials / Item Is Not Installed Into Real Property | SF010001 |
| 6852749d6e0bd3c1926d14c5 | Irrigation Solution / Requires Prescription / Sold to Medical Facility | PH403322 |
| 6852749d6e0bd341166d14c7 | IV Solution / Saline / Requires Prescription / Sold to Medical Facility | PH403362 |
| 6852749d6e0bd32ff76d14bb | Cut Flowers / Sold by Retailer | PA028802 |
| 6852749d6e0bd30f086d14ba | Tangible Personal Property (TPP) | P0000000 |
| 6852749d6e0bd38d146d14c6 | IV Solution / Not Saline / Requires Prescription / Sold to Medical Facility | PH403330 |
| 6852749d6e0bd3686f6d14c2 | Pet / Veterinary Drugs / Prescription Only / Sold as Part of Treatment / Partially Administered by Veterinarian | PP052401 |
