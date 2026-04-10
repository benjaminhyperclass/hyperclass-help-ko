---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# Square 결제 프로세서 연결 및 사용 방법

비즈니스 사용자는 이제 자신의 Square 계정을 연결하여 GHL 내에서 결제를 처리할 수 있습니다.

이 기능은 하위 계정의 `Payments(결제) → Integrations(연동)`에서 이용할 수 있으며, 비즈니스는 API 키를 사용하여 연결할 수 있습니다.

비즈니스는 `Payments(결제) → Products(상품)`에서 상품을 설정하여 일회성 결제와 구독 결제를 모두 처리할 수 있습니다. 여기에는 주문 양식, 인보이스, 온라인 스토어, 폼, 멤버십, 결제 링크 등 하위 계정에서 사용할 수 있는 모든 기능이 포함됩니다. 현재 SaaS와 재청구에는 사용할 수 없습니다. 비즈니스는 `Payments(결제) → Orders and Transactions(주문 및 거래)`에서 모든 결제를 추적할 수 있으며, 기존의 모든 트리거 기능도 이 연동과 함께 사용할 수 있습니다.

Square를 샌드박스/테스트 모드로 연결하려면 다음 단계를 따르세요:
1. Square 계정에 로그인합니다 - [https://app.squareup.com/login](https://app.squareup.com/login)
2. Square 대시보드에서 샌드박스 Square 계정을 열고 샌드박스 사용자로 로그인 상태를 유지합니다
3. 그다음 GHL로 가서 Square Test Mode의 Connect 버튼을 클릭합니다. 로그인된 샌드박스 계정을 자동으로 선택하여 GHL에 연결합니다

추가 사항:

- 고객은 GHL 연동 페이지에서 Square 계정에 있는 모든 실제 위치를 볼 수 있으며, 어떤 Square 위치가 어떤 하위 계정과 연결될지 선택할 수 있습니다.

- 기존 Square 고객은 'Reconnect'를 클릭하여 Square 계정을 다시 연결하고 Square 위치를 가져올 수 있는 액세스를 허용할 수 있습니다. 이렇게 하면 모든 위치가 가져와져서 GHL의 연동 페이지에 표시되며, 고객은 하위 계정과 연결된 올바른 위치를 선택할 수 있습니다.

![Square 연동 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040237961/original/4UI3nOFxugNQF6AQRg6gArPW4Z6aSGzw9w.png?1737531423)

- 연결/재연결이 성공하면 기본적으로 실제 위치가 선택되며, 이후 고객의 요구사항에 따라 변경할 수 있습니다.

연동 및 Square의 최종 고객 뷰에 대한 참고 이미지:

![Square 연동 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358474/original/oYXLsz2fEU0gyl-mOMQNbScuMQNTkse9Ww.jpeg?1725560426)

![Square 연결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040237886/original/PmUORb-Pw09oD5QubjXzHzioL5Ms3twKZg.png?1737531367)

![Square 위치 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358469/original/YA4DLl0hz5xm9i_2BTnTBLE8jhLUG_QE7Q.jpeg?1725560426)

![Square 결제 처리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358473/original/pOo3GcY6CzwvpBHljdcEZVFudSQYAzwsXQ.jpeg?1725560426)

![Square 결제 성공 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358476/original/JCaChSp10SnRHC18E3TtlkYX4dMljxNBlw.jpeg?1725560426)

![Square 거래 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358471/original/KPzCiQ7CTvfaIborBaXaj_S8r7yZvXAXdg.jpeg?1725560426)

![Square 대시보드 뷰](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358470/original/I5Tpv8km9BsCDBY_GjLr665Kgg9OlxzsMg.jpeg?1725560426)

---
*원문 최종 수정: Wed, 22 Jan, 2025 at 1:38 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*