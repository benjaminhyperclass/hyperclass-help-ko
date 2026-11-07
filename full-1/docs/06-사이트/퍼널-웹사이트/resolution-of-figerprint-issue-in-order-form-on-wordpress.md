---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001549-resolution-of-figerprint-issue-in-order-form-on-wordpress
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 주문 폼의 핑거프린트 오류 해결하기

WordPress 사이트 안에 넣은 주문 폼에서 핑거프린트(fingerprint) 오류가 날 때 원인을 확인하고 해결하는 방법을 안내해요.

WordPress의 주문 폼에서 핑거프린트 오류가 나면 주문 폼에 아래와 같은 오류가 표시돼요.

![주문 폼에 표시되는 핑거프린트 오류 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014402697/original/cP4v-wGDWhkB1EDZBzxOomxLCCr1SCjEVg.png?1701776525)

![주문 폼에 표시되는 핑거프린트 오류 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014402714/original/meJbprQnM-30iC7DGGjKuXAIcMMyHZ3K5w.png?1701776536)

핑거프린트 오류는 현재 두 가지 경우로 나뉘어요.

## 시나리오 1: 일부 고객의 브라우저에서만 오류가 나요

일부 고객의 브라우저에서만 이 문제가 생긴다면, 해당 고객의 브라우저 설정 때문에 쿠키(저장소)에 접근하지 못하는 경우예요.

해결 방법: 이런 경우는 매우 드물어요. 우선 고객에게 브라우저 설정에서 쿠키 접근을 허용하도록 안내해 주세요. 장기적으로는 쿠키에 접근할 수 없을 때 경고를 표시하도록 하이퍼클래스에서 기능을 추가할 예정이에요.

## 시나리오 2: 모든 기기와 브라우저에서 항상 오류가 나요

모든 기기와 브라우저에서 매번 이 문제가 생긴다면, 퍼널 도메인이 제대로 설정되지 않은 거예요.

해결 방법: 웹사이트를 WordPress에서 운영하면서 주문 폼 퍼널을 별도 경로로 넣어 사용한다면, WordPress 웹사이트와 퍼널의 도메인은 같아야 하고 서브도메인만 달라야 해요.

예를 들어 WordPress 웹사이트가 www.example.com 으로 설정되어 있다면, example.com 이 도메인이고 www 가 서브도메인이에요. 이 경우 퍼널 도메인으로 www.example.com 이나 example.com 을 쓰면 안 돼요. 퍼널에는 다른 서브도메인(예: funnels.example.com)을 사용하세요.

### 도메인이 같아야 하는 이유

현재 방식은 iFrame을 사용해 WordPress 안에 퍼널 페이지를 표시해요. 결제를 하려면 웹 브라우저의 쿠키(저장소)에 접근해야 하는데, 웹 브라우저는 서로 다른 도메인 사이의 접근을 허용하지 않아요.

## 퍼널에 도메인 추가하기

1. **설정 > 도메인**으로 이동해 WordPress 웹사이트와 같은 도메인을 다른 서브도메인으로 추가하세요. 해당 서브도메인에는 다른 웹사이트가 호스팅되어 있으면 안 돼요.

   ![설정 > 도메인에서 서브도메인을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014508607/original/DgJefUC8jkG6Dr_9J06vu_KDm1U5yBOJ8Q.png?1701857135)

2. WordPress에서 사용할 퍼널의 **퍼널 설정**으로 이동하세요. 도메인을 설정하고 저장하세요.

   ![퍼널 설정에서 도메인을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014508838/original/TmlC2p8wbnuOjS3cxrgBvf2DUz9cA348pg.png?1701857251)

3. 퍼널이 해당 서브도메인에 정상적으로 연결되어 작동하는지 확인하세요.

   ![퍼널이 서브도메인에 연결된 것을 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509152/original/ycSfZp9GtFEXROsc8XQm8E-FiHHBS4YZGw.png?1701857392)

## WordPress에서 기존 퍼널 고치기

1. WordPress의 하이퍼클래스 WP 설정으로 이동하세요. 이미 열려 있는 페이지라면 강력 새로고침을 하세요. 그런 다음 **API 키** 저장 버튼을 클릭하세요.

   ![API 키 저장 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509549/original/irqYmKDulfmiS759GP4nAqUjEe3MJdNyeg.png?1701857523)

2. 고치려는 퍼널 페이지의 **편집** 버튼을 클릭하세요.

   ![고치려는 퍼널 페이지의 편집 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509862/original/kHIR3tNtMHyeyTQVpOhkaX3-3HY9XTWhxw.png?1701857636)

3. 로딩이 끝날 때까지 기다리세요. 단계가 자동으로 채워져요.

   ![로딩이 끝나고 단계가 자동으로 채워진 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014510155/original/qoiNCxQZO6Ac7OzvqVZaUGKNdTsTILXfFQ.png?1701857703)

4. 미리보기 URL에 WordPress 웹사이트와 같은 도메인이 표시돼요. 서브도메인은 달라요. 이제 **저장** 버튼을 클릭하세요.

   ![미리보기 URL을 확인하고 저장 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509982/original/w6uS76mPd-CZR2eNbjsYmX9TnyG7RTVFeQ.png?1701857677)
