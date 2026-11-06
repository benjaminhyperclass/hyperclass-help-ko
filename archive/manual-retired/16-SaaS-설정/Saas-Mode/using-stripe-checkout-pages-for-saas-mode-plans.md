---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 모드 플랜에 Stripe 체크아웃 페이지 사용하기

이 방법은 [SaaS 모드 - 전체 설정 가이드 + FAQ](saas-mode-full-setup-guide-faq.md)에서 소개한 2단계 주문 폼 대신 SaaS 플랜을 판매하는 대안입니다.

## 1단계: 커스텀 SaaS 플랜 설정하기

- SaaS 설정 문서를 아직 확인하지 않으셨다면 여기서 검토해보세요: [https://youtu.be/OCQrblkyvMg](https://youtu.be/OCQrblkyvMg)

- 커스텀 SaaS 플랜 설정을 완료한 후 저장을 클릭하면, Stripe 계정의 상품(Product)으로 자동 저장됩니다.

![커스텀 SaaS 플랜 저장하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48112368291/original/hXK98xgqETfzg1VzRvpUlpd1cPWwtNlUrA.gif?1623959106)

## 2단계: Stripe 체크아웃 퍼널 구축하기

- 커스텀 SaaS 플랜을 소개하는 퍼널을 디자인하세요.

퍼널이 처음이시라면 퍼널 빌더 동영상을 확인해보세요: https://hyperclass.gitbook.io/hyperclass-docs

- 오른쪽 상단의 요소(Elements)를 클릭하고, 버튼 요소(Element)를 선택해서 퍼널 안에 배치하세요.

![퍼널에 버튼 요소 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48112321351/original/abzK3Trgw-rEnZoiy401qhDMtPVi4PkRVQ.gif?1623947488)

## 3단계: 상품 링크 가져오기

- Stripe 계정으로 이동해서 왼쪽 메뉴의 상품(Products)을 클릭하세요.

- 상품 중 하나를 클릭하면 오른쪽에 "create payment link(결제 링크 생성)"가 표시됩니다.

이것을 클릭하면 해당 상품이 열립니다.

- 여기서 원하는 경우 결제 링크를 커스터마이징할 수 있습니다.

예시: 14일 무료 체험 추가하기

- 오른쪽 상단의 "create a link(링크 생성)"를 클릭하세요.

- 해당 상품의 링크를 복사할 수 있는 다른 페이지로 리다이렉트됩니다.

![Stripe에서 상품 링크 생성하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48112321324/original/1lyXgNDxHYzgbvv6meN0KGQZJdnD85bGyQ.gif?1623947476)

## 4단계: 버튼 설정하기

- 퍼널로 다시 돌아가서 버튼 요소(Element)를 클릭하고, 왼쪽의 일반(General) 탭에서 아래로 스크롤해서 버튼 액션(Button Actions) "LINKS TO"를 찾으세요.

- "Open Pop up" 박스를 클릭하고 Website URL로 설정한 다음, 여기에 상품 링크를 입력하세요.

- 저장을 클릭하세요.

![버튼에 상품 링크 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48112321258/original/95me1FmHeBJYnhlsdKhV6DCUd9AlgXJWXw.gif?1623947457)

완료되었습니다!

이제 고객이 퍼널 페이지의 버튼을 클릭하면 Stripe 체크아웃으로 바로 이동합니다!

---
*원문 최종 수정: Fri, 18 Jun, 2021 at 10:41 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*