---
원문: /support/solutions/articles/155000007570-marketing-messages-api-for-whatsapp-mm-lite-
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 마케팅 메시지 API(MM Lite)

MM Lite는 Meta의 최적화된 발송 방식을 활용해 하이퍼클래스에서 보내는 WhatsApp 마케팅 메시지의 성과를 높여 주는 기능이에요. 이 문서에서는 MM Lite가 무엇인지, 어떤 경우에 쓰는지, WhatsApp 설정에서 어떻게 켜는지 안내해요.

{% hint style="warning" %}
MM Lite(Marketing Messages Lite)는 WhatsApp 마케팅 메시지를 더 효과적으로 보내기 위한 Meta의 고급 시스템이에요. 모든 사람에게 일괄로 보내는 대신, 반응할 가능성이 높은 사용자에게 우선적으로 보내요. 그래서 전달률과 캠페인 성과를 높일 수 있어요.

하이퍼클래스에서 WhatsApp 자동화를 쓰고 있다면, MM Lite로 기본적인 일괄 발송에서 한 단계 나아가 성과 중심의 메시지 발송을 할 수 있어요.

지금 중요한 이유: Meta가 스팸을 줄이기 위해 메시지 발송 제한을 더 엄격하게 적용하기 시작했어요. 이제 메시지 전달 여부는 품질과 사용자 반응에 따라 달라져요. MM Lite는 이런 환경에서 좋은 결과를 내도록 돕는 기능이에요.
{% endhint %}

## MM Lite란?

Marketing Messages Lite, 줄여서 MM Lite는 하이퍼클래스에서 보내는 WhatsApp 마케팅 메시지 중 조건에 맞는 메시지를 위한 Meta의 최적화된 발송 시스템이에요. 반응할 가능성이 높은 연락처에게 우선 전달해서 프로모션 메시지를 더 효율적으로 보낼 수 있어요. MM Lite는 마케팅 용도로 만들어졌어요. 대화, 고객 지원 같은 마케팅이 아닌 소통은 기존 WhatsApp 메시지로 계속 보내요.

MM Lite를 쓰면 기존 템플릿, 워크플로우, 캠페인을 다시 만들지 않아도 마케팅 성과를 높일 수 있어요. 켜고 나면 조건에 맞는 마케팅 메시지에는 최적화된 발송 방식이 적용되고, 기존 WhatsApp 설정은 그대로 동작해요.

---

## MM Lite의 주요 장점

MM Lite는 WhatsApp 마케팅 메시지를 대규모로 보내면서 발송 시점, 고객 반응, 캠페인 효율을 더 잘 관리하고 싶은 비즈니스에 유용해요. 고객 경험을 지키면서 마케팅 성과를 높이는 데 도움이 돼요.

- **발송 최적화:** 조건에 맞는 WhatsApp 마케팅 메시지를 반응할 가능성이 높은 연락처에게 우선 보내요.
- **마케팅 효율 향상:** 단순히 많은 사람에게 뿌리는 방식이 아니라, 더 똑똑한 발송 로직으로 캠페인을 보낼 수 있어요.
- **시간 기반 발송:** TTL(Time-to-Live)을 설정하면, 시기가 지나 의미가 없어진 마케팅 메시지가 뒤늦게 전달되는 일을 막을 수 있어요.
- **템플릿 재제작 불필요:** 이미 승인된 WhatsApp 템플릿은 MM Lite를 켠 뒤에도 그대로 쓸 수 있어요.
- **워크플로우 유지:** 기존 워크플로우, 자동화, 캠페인은 활성화한 뒤에도 중단 없이 계속 실행돼요.
- **마케팅 전용 발송:** MM Lite는 마케팅 메시지용이에요. 고객 지원, 대화 등 그 외 메시지에는 기존 WhatsApp 메시지를 계속 쓸 수 있어요.

---

## MM Lite를 쓰면 좋은 경우

MM Lite는 발송 시점, 고객 반응, 대상 품질이 중요한 WhatsApp 프로모션 메시지에 가장 잘 맞아요. 어떤 경우에 MM Lite를 쓰는지 알아 두면 고객 소통 유형마다 알맞은 발송 방식을 고를 수 있어요.

조건에 맞는 WhatsApp 마케팅 메시지에는 MM Lite를 쓰세요. 예를 들면 다음과 같아요.

- 프로모션
- 오퍼
- 재참여 캠페인
- 캠페인 일괄 발송
- 마케팅 후속 메시지
- 상품 또는 서비스 안내

마케팅이 아닌 다음과 같은 경우에는 기존 WhatsApp 메시지를 계속 쓰세요.

- 고객 지원 대화
- 서비스 대화
- 거래 및 유틸리티 안내
- 인증 메시지
- 고객 서비스 기간 내에 보내는 자유 형식 답장

WhatsApp 메시지는 마케팅, 유틸리티, 인증, 서비스 유형으로 나뉘고, 유형마다 요금과 발송 방식이 다를 수 있어요. 요금과 유형별 자세한 내용은 [WhatsApp 요금, 청구, 재청구 가이드](WhatsApp/whatsapp-pricing-billing-and-rebilling-guide.md)를 참고하세요.

---

## MM Lite를 켜기 전에 준비할 것

MM Lite를 켜려면 WhatsApp과 Meta 계정에 대한 올바른 접근 권한이 필요해요. 미리 확인해 두면 설정이 지연되는 일을 줄이고, 올바른 비즈니스 계정에서 업그레이드를 승인할 수 있어요.

MM Lite를 켜기 전에 다음을 준비하세요.

- 하이퍼클래스에서 사용 중인 WhatsApp 설정
- 연결된 Facebook Business Manager에 대한 접근 권한
- 올바른 비즈니스 포트폴리오에 연결된 WhatsApp 비즈니스 계정
- 비즈니스 수준의 접근 요청을 승인할 수 있는 권한
- 템플릿 기반 마케팅 캠페인을 보낼 계획이라면, 승인된 WhatsApp 마케팅 템플릿

템플릿 기반으로 WhatsApp 메시지를 보내려면 먼저 승인된 WhatsApp 템플릿이 있어야 해요. 템플릿은 **설정 > WhatsApp > 템플릿**에서 만들고 Meta에 승인을 요청해요.

---

## MM Lite로 업그레이드하기

하이퍼클래스에서 MM Lite로 업그레이드하는 일은 간단하고, 진행 중인 캠페인에도 영향을 주지 않아요. 다음 단계를 따르세요.

1. 서브 계정 열기
   - 서브 계정에 로그인하세요.
   - **설정 > WhatsApp**으로 이동하세요.

2. MM Lite 켜기
   - 대시보드에 MM Lite 활성화를 안내하는 배너가 보여요.
   - **Enable MM Lite**(MM Lite 활성화)를 클릭해 시작하세요.

3. WhatsApp 계정 페이지로 이동하기
   - WhatsApp 계정 화면으로 이동해요.
   - **요청** 탭으로 이동하세요.

4. 요청 검토하기
   - **리뷰 요청**을 클릭하세요.

     ![리뷰 요청 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067122956/original/eVnr0Ju6ugeVUEpM53lmogDc8nHpRPmlyw.png?1773752179)
   - Marketing Messages API로 ROI를 높이는 방법을 안내하는 화면이 나타나요.

     ![Marketing Messages API 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067123021/original/TMLowifhj4FnUdCMw8pxvbVhLuXeIVeHGQ.png?1773752220)
   - **계속**을 클릭하세요.

5. 접근 승인하기
   - 하이퍼클래스의 접근 요청을 검토하라는 새 화면이 나타나요.

     ![접근 요청 검토 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067123042/original/uGII2S730g3qA02uoorVSmi34NEjH2kEPw.png?1773752237)
   - **완료**를 클릭해 승인하세요.

     ![완료 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067123089/original/9Kg8QWvcLOjor2gcv6YAz87x9V8SYCn3kw.png?1773752280)

여기까지 마치면 다음과 같이 돼요.

- 계정에서 MM Lite가 켜져요.

  ![MM Lite가 켜진 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067124379/original/ZC_GlB9LMZ8rhMee1sgj7BTCwtxnHDyr9w.png?1773752896)
- 기존 템플릿, 워크플로우, 캠페인은 중단 없이 계속 동작해요.

---

## 켠 뒤에는 어떻게 되나요?

활성화한 뒤에는 다음과 같이 달라져요.

- 마케팅 메시지에 최적화된 발송 로직이 적용되기 시작해요.
- 시스템이 학습하고 적응하면서 캠페인 성과가 점차 좋아질 수 있어요.
- 캠페인은 지금처럼 계속 운영하면 되고, 효율만 더 좋아져요.

---

## 자주 묻는 질문

### Marketing Messages Lite(MM Lite)가 무엇인가요?
MM Lite는 WhatsApp 마케팅 메시지의 전달을 개선하기 위한 Meta의 향상된 메시지 시스템이에요. 지능형 최적화로 반응할 가능성이 높은 사용자에게 메시지가 도달하도록 도와서 캠페인 성과를 높여 줘요.

### MM Lite는 WhatsApp Cloud API와 어떻게 다른가요?
기존 WhatsApp Cloud API는 마케팅 발송 최적화 없이 메시지를 보내요. MM Lite는 다음과 같은 방식으로 마케팅 성과를 높여 줘요.

- 반응 가능성이 높은 사용자에게 우선 발송
- 발송 시점 최적화
- 캠페인 전반의 성과 개선

### MM Lite로 업그레이드하면 기존 캠페인에 영향이 있나요?
아니요. 하이퍼클래스에서 업그레이드해도 현재 WhatsApp 설정에는 영향이 없어요. 기존 템플릿은 그대로 유지되고, 자동화와 워크플로우도 계속 실행되며, 캠페인도 영향을 받지 않아요.

### MM Lite를 켜려면 기술 지식이 필요한가요?
아니요. 업그레이드 과정에는 코딩, API 변경, 기술 지식이 필요하지 않아요. 안내에 따라 설정을 진행하면 돼요.

### 업그레이드한 뒤에도 고객 지원에 WhatsApp을 쓸 수 있나요?
네. MM Lite는 마케팅 메시지 전용이에요. 다음과 같은 경우에는 기존 WhatsApp 메시지를 계속 쓰면 돼요.

- 고객 대화
- 지원 문의
- 거래 관련 메시지
- 서비스 관련 소통

### MM Lite를 쓰면 메시지 전달률이 좋아지나요?
MM Lite는 조건에 맞는 WhatsApp 마케팅 메시지의 전달 성과를 높이도록 만들어졌어요. 다만 결과는 대상 고객, 메시지 품질, 반응 이력, 사용 목적에 따라 달라질 수 있어요.

### TTL(Time-to-Live)이 무엇이고 왜 중요한가요?
TTL은 메시지가 얼마 동안 전달 대상으로 유지될지를 정하는 값이에요. 만료된 오퍼처럼 의미가 없어진 메시지는 정해 둔 전달 기간이 지나면 전달되지 않아요. 덕분에 사용자 경험을 더 좋게 유지할 수 있어요.

### MM Lite는 사용자에게 스팸을 보내지 않도록 어떻게 도와주나요?
MM Lite는 사용자 반응 신호와 발송 빈도 제어를 활용해 메시지 발송을 최적화해요. 메시지를 지나치게 많이 보내는 일을 줄이고, 사용자 피로감을 막고, 더 관련성 높은 소통을 할 수 있도록 도와요.

### 업그레이드하려면 Facebook Business Manager에 접근할 수 있어야 하나요?
네. 권한을 승인하고 MM Lite 업그레이드를 마치려면 Facebook Business Manager에 접근할 수 있어야 해요.

### MM Lite로 전환과 캠페인 성과를 추적할 수 있나요?
네. MM Lite는 Meta Pixel, Conversions API 같은 도구와 함께 쓰면 전환을 추적하고, ROI를 측정하고, 이후 캠페인을 최적화하는 데 도움이 돼요.

### MM Lite는 모든 유형의 메시지에 쓸 수 있나요?
아니요. MM Lite는 프로모션, 오퍼, 캠페인 일괄 발송 같은 마케팅 용도로 만들어졌어요. 거래, 유틸리티, 인증, 서비스 관련 메시지는 기존 WhatsApp 메시지를 계속 사용하세요.

### MM Lite를 켜면 결과가 나오기까지 얼마나 걸리나요?
몇 번의 캠페인을 보내다 보면 결과가 보이기 시작할 수 있어요. 시스템이 사용자 반응 데이터를 모으면서 성과와 전달률이 시간이 지날수록 더 좋아질 수 있어요.

### MM Lite는 모든 종류의 마케팅 메시지를 지원하나요?
네. MM Lite는 다음과 같은 여러 마케팅 메시지 용도를 지원해요.

- 1:1 마케팅 대화: 맞춤형 제안, 오퍼 등
- 대량 캠페인: 프로모션 일괄 발송, 공지 등
- 워크플로우 자동화: 드립 캠페인, 후속 메시지, 리드 육성 등

그래서 하이퍼클래스 안에서 조건에 맞는 WhatsApp 마케팅 소통을 한곳에서 관리할 수 있어요.
