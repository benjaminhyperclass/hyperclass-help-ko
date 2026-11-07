---
원문: /support/solutions/articles/48001155000-email-services-configuration-reply-forward-settings
번역일: 2026-11-06
카테고리: 09-이메일
---

# 이메일 서비스의 회신·전달 주소 설정

하이퍼클래스 이메일 서비스에서 전달 주소, 회신 주소, BCC, 회신 추적을 설정하는 방법을 안내해요. 리드의 답장 사본을 받거나, 답장이 도착할 주소를 바꾸고 싶을 때 참고하세요.

## 회신·전달 설정 위치

이 설정에서는 이메일 사본을 받고, 회신 주소를 정하고, 회신을 추적하는 방식을 조정할 수 있어요. 아래 경로로 이동하세요.

**설정 > 이메일 서비스 > Reply & Forward Settings**(회신 및 전달 설정)

![이메일 서비스 설정으로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378307/original/sTiyHi3hqgNimmaOnIK2tUuzV8jltXg4GQ.jpg?1724182488)

## 전달 주소

리드가 이메일에 답장하면 그 답장은 항상 **대화** 탭에 표시돼요. 리드의 답장 사본을 다른 사람의 받은편지함으로도 받고 싶다면 **전달 주소**에 그 이메일 주소를 입력하세요.

전달 주소는 쉼표로 구분해 여러 개 입력할 수 있어요. 예를 들면 다음과 같아요.
email1@test.com, email2@test.com, email3@test.com

{% hint style="warning" %}
**전달 주소**와 **BCC 이메일**은 Mailgun과 하이퍼클래스 이메일에서만 작동해요. 다른 SMTP 제공업체는 지원하지 않아요. 수신·발신 이메일(받는 사람, 참조, 숨은 참조)에는 모두 요금이 부과돼요.
{% endhint %}

![전달 주소 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378336/original/c3rgbqnGtH4wUFzgVQHWw-xOjviN0LTHvQ.jpg?1724182531)

## 회신 주소(Reply Address)

회신 주소를 추가하면 받는 모든 이메일 답장이 **대화** 탭 대신 그 주소로 전달돼요.

외부 받은편지함(CRM 밖)에서 리드의 이메일에 답장하면 그 답장은 CRM에 다시 동기화되지 **않아요**.

이메일 주소는 최대 5개까지 추가할 수 있어요.

1. **설정 > 이메일 서비스 > Reply & Forward Settings > Reply Address**(회신 주소)로 이동하세요.
2. 주소를 추가하세요.
3. **저장**을 클릭하세요.

![회신 주소 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031547525/original/19Bs496zgaiTVo1bO9nwhTXXoA-anf5jsw.png?1724400925)
![회신 주소 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378366/original/qADgEHJ_7tnNV3n3amaaOlUmjr9frQvMeQ.jpg?1724182590)

## BCC 이메일

이 서브 계정에서 보내는 1:1 이메일, 워크플로우 이메일, 결제 관련 이메일의 숨은 참조(BCC) 사본을 모두 받을 수 있어요. **설정 > 이메일 서비스 > Reply & Forward Settings > BCC 이메일**에서 설정하세요.

{% hint style="info" %}
**BCC 적용 범위** BCC는 **1:1 이메일, 워크플로우 이메일, 결제 관련 이메일**에만 지원돼요. 대량 발송 이메일이나 캠페인 이메일에는 적용되지 **않아요**.
{% endhint %}

![BCC 이메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378457/original/e6UutfFjMKYAJTconTpaZbdXT1s829mt9Q.jpg?1724182752)

## 할당된 사용자에게 전달

리드에 **할당된 사용자**는 회신 이메일을 자신의 이메일 받은편지함으로 바로 받아요. 이메일은 **설정 > 스태프 관리 > Edit User**(사용자 편집) **> 사용자 정보**에 등록된 주소로 전송돼요.

![할당된 사용자에게 전달 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378472/original/8FqD-K9rmcAe_-g7s3oyRrYwr-6kvqjWYQ.jpg?1724182778)

## 전달된 이메일 요금

재청구(rebilling)를 켜 두면 전달된 메시지도 일반 발신 이메일과 같은 방식으로 요금이 부과돼요. 덕분에 사용량을 더 정확하고 투명하게 확인할 수 있어요.

| 서비스 | 적용 대상 |
| --- | --- |
| 하이퍼클래스 이메일 | 에이전시와 서브 계정(재청구를 켠 경우) |
| Mailgun(서브 계정 소유) | 서브 계정만 |

**전달된 이메일**은 한 통마다 일반 이메일 발송 요금과 같은 기준으로 요금이 부과돼요.

{% hint style="info" %}
**요금 확인 방법** 청구 내역에서 **Billing Source Type**(청구 소스 유형, 요금을 발생시킨 서비스)과 **Billing Trigger ID**(청구 트리거 ID, 전달된 이메일 이벤트의 고유 식별자)를 확인하세요.
{% endhint %}

## 회신 추적 활성화 – 기타 SMTP 제공업체

Mailgun은 Mailgun에 설정한 수신 라우트(Receiving Route)와 직접 연동돼 있어서 **회신 추적 활성화** 옵션이 따로 없어요. Mailgun에서 회신을 설정하는 방법은 Mailgun 회신 설정 안내를 참고하세요.

발신 이메일 주소(예: testing@gmail.com)를 가리면 회신 주소는 **testing@replies.subdomain.com**처럼 표시돼요. 이 주소는 **에이전시 설정 > Mailgun**에서 해당 서브 계정에 설정한 Mailgun 서브도메인이에요.

이 경우에도 답장은 서브 계정의 **대화** 탭에 정상적으로 표시돼요.

![SMTP 회신 추적 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286916898/original/w-1dICJ2Bsh_RZAP7ac2r7jnJsfEuOMb8Q.png?1678723680)
![회신 추적 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378496/original/gePZQCEUWIstIyH1C68WKaiSaOcgjonr8Q.jpg?1724182805)

### ✅ 회신 추적을 켠 경우 예시

이메일 헤더에 표시되는 회신 주소는 Mailgun 서브도메인 주소예요. 덕분에 시스템이 답장을 받아 **대화** 탭으로 보내 주고, 그곳에서 답장을 읽고 응답하거나 태그로 자동화 워크플로우를 실행할 수 있어요.

{% hint style="warning" %}
**중요** 회신 주소를 복사해 그 주소로 새 이메일을 보내면 **대화** 탭으로 전달되지 *않아요*. 시스템에서 보낸 원래 이메일에 답장해야 해요.
{% endhint %}

![회신 추적을 켠 경우의 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48260597029/original/MM1xCqK_FV3P9RIVLiwReIssTd-Qb4hbIQ.png?1667330277)

### ❌ 회신 추적을 켜지 않은 경우 예시

회신 추적이 꺼져 있으면 회신 주소가 설정된 발신 이메일 주소로 지정돼요. 답장은 그 받은편지함으로 바로 가고, **대화** 탭에는 기록되지 **않아요**.

![회신 추적을 켜지 않은 경우의 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48260597698/original/IFF1KAgY2Qq0-jX_xY_cHqEWOSsOv33SJg.png?1667330551)

## 자주 묻는 질문

### 이메일 답장을 전달할 때 첨부파일은 왜 같이 전달되지 않나요?
**이메일 서비스** 탭의 전달 설정은 첨부파일 전달을 지원하지 않아요. 연락처가 첨부파일을 넣어 답장했다면 하이퍼클래스에 로그인해서 대화 화면에서 확인해야 해요.

### 추가한 전달 이메일이 저장 후에 사라져요.
이메일 주소가 올바르지 않거나 서브 계정에 추가한 전용 도메인과 충돌하면 전달 주소로 쓸 수 없어서 저장되지 않아요.

### 전달된 이메일은 무료인가요?
아니요. 재청구가 켜져 있으면 전달된 이메일은 한 통마다 일반 발신 이메일처럼 요금이 부과돼요.

### 전달 이메일 요금은 어떤 서비스에 적용되나요?
**하이퍼클래스 이메일**(재청구를 켠 에이전시와 서브 계정)과 서브 계정 단위의 **Mailgun**(서브 계정 소유)에 적용돼요.

### 전달된 이메일도 일반 발송과 같은 건당 요금이 적용되나요?
네. 요금은 일반 이메일 발송 요금과 같은 기준이에요. *(요금제별 추가 비용이나 수수료는 담당 매니저에게 확인하세요.)*

### 어떤 전달 이메일에 요금이 부과됐는지 어디서 확인하나요?
청구 내역에서 **Billing Source Type**(요금을 발생시킨 서비스)과 **Billing Trigger ID**(고유 이벤트 ID)를 확인하면 각 요금을 추적할 수 있어요. *(정확한 페이지와 CSV 열은 담당 팀에 확인하세요.)*

### 재청구를 꺼 두면 이 요금도 적용되나요?
아니요. 전달 이메일 요금은 서브 계정에서 재청구가 켜져 있어야 부과돼요.

### 이 변경은 과거 내역에도 적용되나요?
요금은 보통 적용 시작일부터 부과돼요. *(정확한 적용 시작일과 소급 적용 여부는 담당 매니저에게 확인하세요.)*

### 에이전시 단위의 Mailgun 전달에도 요금이 부과되나요?
이번 안내는 **서브 계정 단위의 Mailgun**(서브 계정 소유)만 다뤄요. 에이전시 단위 Mailgun 전달은 이번 요금 안내에 포함되지 않아요.

![자주 묻는 질문 관련 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029443187/original/_qck3ZATobcGzaVOA4RzV5XfjyYYBRnrLA.jpg?1721248883)
