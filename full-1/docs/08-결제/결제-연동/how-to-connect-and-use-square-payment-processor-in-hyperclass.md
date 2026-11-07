---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003314-how-to-connect-and-use-square-payment-processor-in-highlevel
번역일: 2026-11-07
카테고리: 08-결제
---

# Square 결제 처리 업체 연결하고 사용하기

Square 계정을 하이퍼클래스에 연결해 결제를 처리하는 방법을 안내해요. 일반 모드와 샌드박스(테스트) 모드 연결 방법, 그리고 Square 위치를 서브 계정에 연결하는 방법을 다뤄요.

[동영상](https://www.youtube.com/embed/1MXtebt9\_E0?&wmode=opaque)

## Square 연결하기

비즈니스 사용자는 Square 계정을 하이퍼클래스에 연결해 결제를 처리할 수 있어요.

서브 계정의 **결제 > 연동**에서 API 키로 연결해요.

## Square로 할 수 있는 일

- **결제 > 상품**에서 상품을 설정하면 일회성 결제와 구독 결제를 모두 처리할 수 있어요.
- 서브 계정에서 쓰는 주문 폼, 인보이스, 온라인 스토어, 폼, 멤버십, 결제 링크 등 모든 기능을 지원해요.
- 결제 내역은 **결제 > 주문**과 **결제 > 거래 내역**에서 확인할 수 있어요.
- 기존 트리거 기능도 이 연동과 함께 그대로 쓸 수 있어요.
- SaaS와 재청구(re-billing)에서는 아직 쓸 수 없어요.

## 샌드박스/테스트 모드로 Square 연결하기

1. Square 계정에 로그인하세요: <https://app.squareup.com/login>
2. Square 대시보드에서 샌드박스 Square 계정을 열고, 샌드박스 사용자로 로그인한 상태를 유지하세요.
3. 하이퍼클래스로 돌아와 Square Test Mode의 **Connect**(연결) 버튼을 클릭하세요. 로그인해 둔 샌드박스 계정이 자동으로 선택되어 하이퍼클래스에 연결돼요.

## 추가 안내

- Square 계정에 등록된 모든 실제 매장 위치가 하이퍼클래스의 **연동** 페이지에 표시돼요. 어떤 Square 위치를 어떤 서브 계정과 연결할지 직접 고를 수 있어요.
- 이미 Square를 쓰고 있다면 **재연결**을 클릭해 Square 계정을 다시 연결하세요. Square 위치를 가져오도록 접근을 허용하면 모든 위치를 불러와 하이퍼클래스의 **연동** 페이지에 보여 줘요. 그중에서 서브 계정에 맞는 위치를 선택하면 돼요.

![Square 위치 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040237961/original/4UI3nOFxugNQF6AQRg6gArPW4Z6aSGzw9w.png?1737531423)

- 연결 또는 재연결에 성공하면 실제 위치 하나가 기본으로 선택돼요. 필요에 따라 다른 위치로 바꿀 수 있어요.

## 연동 화면과 고객 화면 참고 이미지

Square 연동 화면과 고객이 보게 되는 화면이에요.

![Square 연동 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358474/original/oYXLsz2fEU0gyl-mOMQNbScuMQNTkse9Ww.jpeg?1725560426)

![Square 연동 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040237886/original/PmUORb-Pw09oD5QubjXzHzioL5Ms3twKZg.png?1737531367)

![Square 연동 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358469/original/YA4DLl0hz5xm9i_2BTnTBLE8jhLUG_QE7Q.jpeg?1725560426)
![Square 연동 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358473/original/pOo3GcY6CzwvpBHljdcEZVFudSQYAzwsXQ.jpeg?1725560426)
![Square 연동 화면 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358476/original/JCaChSp10SnRHC18E3TtlkYX4dMljxNBlw.jpeg?1725560426)
![Square 연동 화면 6](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358471/original/KPzCiQ7CTvfaIborBaXaj_S8r7yZvXAXdg.jpeg?1725560426)
![Square 연동 화면 7](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032358470/original/I5Tpv8km9BsCDBY_GjLr665Kgg9OlxzsMg.jpeg?1725560426)
