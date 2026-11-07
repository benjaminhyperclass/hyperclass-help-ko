---
원문: /support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-
번역일: 2026-11-07
카테고리: 09-이메일
---

# 이메일 발송 제공업체 적용 순서

하이퍼클래스는 이메일을 보낼 때 아래 순서대로 제공업체를 확인해요. 어떤 제공업체로 이메일이 나가는지 궁금할 때 참고하세요.

## 1. 서브 계정 기본 제공업체 (서브 계정 보기)

서브 계정에서 선택한 **기본 제공업체**를 가장 먼저 사용해요.

![서브 계정의 기본 제공업체 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982731/original/zbPvxMEXm3pq7JIa2cM_0D5R-KAY4xq9XQ.png?1675707794)

## 2. 서브 계정용 이메일 설정 (에이전시 보기)

서브 계정에서 **기본 제공업체**를 선택하지 않았다면, 에이전시 보기에서 설정한 제공업체를 사용해요. 이 설정은 에이전시 관리자만 할 수 있고, **설정 > 이메일 서비스**에서 확인할 수 있어요.

### 서브 계정에 Mailgun 설정하기

- 서브 계정마다 고객사의 Mailgun이나 에이전시의 Mailgun을 설정할 수 있어요.
- 여러 서브 계정에서 같은 Mailgun API와 같은 도메인/서브도메인을 쓸 수 있어요.
- 여러 서브 계정에서 같은 Mailgun API를 쓰면서 도메인/서브도메인은 다르게 쓸 수도 있어요.
- 여러 서브 계정에서 Mailgun API와 도메인/서브도메인을 모두 다르게 쓸 수도 있어요.
- 서브 계정마다 고유한 도메인/서브도메인을 설정해서 콜드 인바운드 이메일을 받을 수도 있어요. 자세한 내용은 [콜드 이메일 인바운드 설정](cold-email-inbound-setup-mailgun.md)을 참고하세요.

### 서브 계정에 하이퍼클래스 이메일 설정하기

- 에이전시 수준에서 커스텀 도메인을 추가하면, 서브 계정 수준에서 따로 커스텀 도메인을 설정하기 전까지 모든 서브 계정에 그 도메인이 쓰여요. 서브 계정에 커스텀 도메인을 설정하면 서브 계정의 도메인을 우선 사용해요.
- 하이퍼클래스 이메일이 무엇인지 더 알고 싶다면 "What is LC - Email? I want to know more" 문서에 해당하는 하이퍼클래스 이메일 소개 문서를 참고하세요.
- 에이전시를 하이퍼클래스 이메일로 옮기는 방법은 "Migrate My Agency Over to 하이퍼클래스 이메일" 문서를 참고하세요.
- 전용 발송 도메인(하이퍼클래스 이메일) 설정 방법은 "Set Up a Dedicated Sending Domain" 문서를 참고하세요.
- GoDaddy로 전용 발송 도메인(하이퍼클래스 이메일)을 설정하는 방법은 "Set up a Dedicated Sending Domain using GoDaddy" 문서를 참고하세요.

![서브 계정용 이메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982772/original/VaHl4lAMpUxjgcZsYcWwp920XsXHSheaUA.png?1675707822)

이메일 서비스 설정을 내려받는 기능도 새로 생겼어요. 발송량이 많은 계정을 관리할 때 특히 편해요.

![이메일 서비스 설정 내려받기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003776772/original/DCVsZICi-ulERP-6Euya18IckqdaGaEGBQ.png?1690410906)

## 3. 에이전시 기본 제공업체 (에이전시 보기, 이메일 서비스 탭)

위 두 곳에 모두 설정이 없으면, 에이전시 보기의 **이메일 서비스** 탭에 설정한 에이전시 **기본 제공업체**를 사용해요. 이 설정은 **설정 > 이메일 서비스**에서 확인할 수 있어요.

![에이전시 이메일 서비스 탭의 기본 제공업체 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279983260/original/wnB4delmXyXEl7HCwnIUbAzHqc7AHcj6gg.png?1675708045)

- 새로 만든 서브 계정은 여기에 설정한 Mailgun API 키를 기준으로 설정을 이어받아요.
- 이메일 인증 코드를 보낼 때도 이 설정을 사용해요.

## 4. 하이퍼클래스 이메일

아무것도 설정하지 않았다면, 아래 이미지와 비슷한 서브도메인으로 이메일을 보내고 받아요.

![하이퍼클래스 이메일 기본 서브도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48190650236/original/d1nUQfQzUpkJ6yrUxRHE-kMy5QxGulcFcQ.png?1644970144)
