# 결제 페이지 사전 v1.0.0 — 추출·번역 보고 (2026-10-31, 작업지시서 v1 E1)

| 항목 | 값 |
|---|---|
| 원천 | `links.hyperclass.ai/payment-link/6ae596a700921ddbe8ee08a6`(hyperclass.ai 공개 링크) 비로그인 헤드리스 — **폼 입력·클릭 없음** |
| 카탈로그 | vue-i18n `en_US`, 7 ns · **337키**(common 26 · invoice 28 · estimates 27 · paymentLink 49 · paymentMethod 5 · shipstation 33 · giftCard 32). 작업지시서 크롬 실측 380 과 차이는 기록만 |
| 형식 | 사전 컴파일 AST(minified) → 평문으로 역변환해 `data/payments/en.json` 저장. 플레이스홀더 13건 보존 |
| 번역 | 신규 313(`i18n-batch-translator.py` 무수정, 실패 0) · 메인 v4 재사용 11 · 수동 14 · 글로서리 통일 10(제품→상품 9, 매장→스토어 1) |
| 수동 고정 | 구독 동의 `paymentLink.subscriptionTextPrefix/Suffix` = **벤자민 승인안**(자동 처리 제외, `_meta.fixed`) · Taxes/Tax = 부가세 · `common.day/week/month/year` = 일·주·월\|개월·년 · `priceAfterTrial` = "체험 종료 후 {currency}{price} / {interval}" \| "… / {intervalCount}{interval}"(3개월 붙여 쓰기) · 세금 요약 2 |
| 렌더 확인 | 앱이 "prefix + 업체명 + suffix" 를 공백으로 잇는다(실측 "By confirming … allow Hyperclass.ai to charge …") → "구독을 확인하시면 Hyperclass.ai 측이 약관에 따라 향후 결제 금액을 청구하는 데 동의하시게 됩니다. 구독은 언제든지 해지하실 수 있습니다." |
| `common.month` | "/ month"(단수형)와 "{n} months"(복수형) 겸용 → "월 \| 개월": 화면은 "₩99,000.00 / 월", 체험 문구는 "3개월" |
| 리뷰 | `round-review.py` 무수정: R5 2(1 반영, 카드번호 자리표시자 유지) · Claude high 1·medium 8·low 6 → 13 반영, 2 유지(month 단수 '월', 3개월 붙여 쓰기 — 사유 위) |
| 검사 | 플레이스홀더 불일치 0 · 브랜드 0 · GHL 번호 0 · 평서형 해요체 0 |
| 카탈로그 밖 | 탭 제목 "FastPayDirect Payment Link"(로더가 `document.title` 교체) · 상품·가격 이름(Payments → Products 데이터, "Monthly" → "월간"은 벤자민) |
