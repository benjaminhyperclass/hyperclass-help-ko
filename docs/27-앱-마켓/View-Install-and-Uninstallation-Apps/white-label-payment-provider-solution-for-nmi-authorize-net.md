---
원문: /support/solutions/articles/155000002747-white-label-payment-provider-solution-for-nmi-authorize-net
번역일: 2026-11-07
카테고리: 27-앱-마켓
---

# NMI·Authorize.net용 화이트라벨 결제 제공업체 지원

NMI와 Authorize.net을 기반으로 만든 화이트라벨 결제(WLP) 제공업체를 하이퍼클래스에서 쓸 수 있어요. 이 문서에서는 마켓플레이스 앱 설치 방법, 지원 범위, 개발자용 공개 API를 안내해요.

## 무엇이 달라졌나요?

NMI와 Authorize.net 같은 기본 결제 솔루션 위에 만들어진 새 결제 제공업체를 하이퍼클래스에 연동할 수 있어요.

## 결제 연동 페이지에서 마켓플레이스 앱 바로 찾기

결제 연동 페이지에 마켓플레이스 앱 목록이 들어왔어요. 마켓플레이스에 올라온 연동 제공업체를 이 페이지에서 바로 찾아 설치할 수 있어요.

- 검색 기능으로 원하는 제공업체를 빠르게 찾을 수 있어요.
- 목록 페이지에서 바로 앱을 설치할 수 있어요.

## 어떻게 동작하나요?

1. 개발자가 마켓플레이스 앱을 만들 때 **White Label Payment Provider**(화이트라벨 결제 제공업체) 카테고리로 지정해요.
2. 사용자가 앱을 설치하면, 설치한 서브 계정에 맞는 제공업체 설정이 자동으로 만들어져요.
3. 설치 후에는 다른 기본 제공업체와 똑같이 연결 속성을 관리할 수 있어요.
4. 설정을 마친 뒤 WLP 제공업체를 기본 결제 수단으로 지정하면 NMI나 Authorize.net처럼 바로 쓸 수 있어요.

## 지원 범위

NMI와 Authorize.net이 처음부터 지원되던 모든 곳에서 새 WLP 제공업체도 쓸 수 있어요.

- 주문 폼 (원스텝, 투스텝 모두)
- 스토어
- 인보이스
- 결제 링크

## 공개 API 지원

마켓플레이스 연동과 함께 결제 앱 목록에 공개 API 2개가 추가됐어요. 개발자는 이 API로 NMI·Authorize.net용 WLP 솔루션을 연동하고, 더 다양한 결제 환경을 만들 수 있어요.
`POST payments/integrations/provider/whitelabel` (화이트라벨 연동 제공업체 생성)`GET payments/integrations/provider/whitelabel` (화이트라벨 연동 제공업체 목록 조회)

연동을 만들고 제출하는 과정을 담은 자세한 영상은 하이퍼클래스 고객지원에 문의하세요.

![결제 연동 페이지의 마켓플레이스 앱 목록 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028671910/original/5b7NeJ12EHXLFRvS_UieNjqf4cM5vKrQ_Q.jpeg?1720041556)
![결제 연동 페이지의 마켓플레이스 앱 목록 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028671909/original/NoFtjMQINWRiBJt6SnpNGCDDFXvPyRgTsw.jpeg?1720041556)
![결제 연동 페이지의 마켓플레이스 앱 목록 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028671911/original/tiX0EP-N602vjB5NjFrQsjn3HnbaS0RIsw.jpeg?1720041556)
![결제 연동 페이지의 마켓플레이스 앱 목록 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028671908/original/xxAsSytNVl_aDJZR5PFNbOJV-YwKFa5iFQ.jpeg?1720041556)
