---
원문: /support/solutions/articles/48001207525-troubleshooting-warning-please-contact-your-agency-to-change-email-settings
번역일: 2026-11-07
카테고리: 09-이메일
---

# "이메일 설정을 변경하려면 에이전시에 문의하세요" 경고 해결하기

**SMTP 제공업체**를 추가할 때 오류가 나는 이유와, 서브 계정의 이메일 재청구를 끄는 방법을 안내해요. 이 설정은 에이전시 관리자만 바꿀 수 있어요.

## 개요

**SMTP 제공업체**를 추가할 때 오류가 나타나면, 대부분 서브 계정의 **Email Reselling**(이메일 재판매) 설정 때문이에요. 이 문서에서는 이 오류를 설명하고, 서브 계정의 이메일 재청구를 끄는 방법을 알려 드려요.

## 오류 화면

![SMTP 제공업체 추가 시 나타나는 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48180856684/original/hnm15p3rph-EYFQ09-2Ix_UBaxPdERt3RQ.png?1642631121)

**SMTP 제공업체**를 추가하려는데 이 오류 메시지가 나타나면, 에이전시의 **SaaS 구성기** 페이지에서 해당 서브 계정의 **Email Reselling**이 켜져 있는지 확인하세요.

## 이메일 재청구 끄기

1. 에이전시 보기에서 서브 계정 페이지로 이동하세요.
2. **서브 계정**을 클릭한 뒤, 서브 계정을 검색하세요.

   ![서브 계정 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280512342/original/R86QkuQrkReIza2aG45_43Rzv42ujoCqJw.png?1675884865)

3. 서브 계정을 찾았으면 서브 계정 이름을 클릭하세요. 또는 오른쪽 아래의 점 세 개를 클릭해서 **고객 관리**를 선택해도 돼요.

   ![서브 계정의 고객 관리 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280512511/original/yKwzD5ifdBAzF08vPBIyCgt0wdU7aEv3qA.png?1675884922)

4. 화면 맨 아래로 내려가 **이메일 재판매 설정**을 찾으세요. 표시된 버튼을 눌러 이메일 재청구를 끄세요.

   ![이메일 재판매 설정의 토글 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280512843/original/-QsFDNwIZh47kMExMGYCprVoBDWbaDWhjQ.png?1675885077)

## 자주 묻는 질문

### 이메일 재판매가 무엇이고, 왜 SMTP 제공업체 추가가 막히나요?
이메일 재판매는 서브 계정의 이메일 사용량을 에이전시의 재청구 설정으로 청구할지 정하는 기능이에요. 일부 SMTP 연동은 사용량과 청구 내역이 정확히 맞도록 이 설정을 먼저 켜 두어야 해요.

### 이메일 재판매가 꺼져 있으면 어디에서 켜나요?
에이전시의 **SaaS 구성기** 페이지에서 해당 서브 계정을 찾아 이메일 재판매 옵션을 켜세요. 그런 다음 **SMTP 제공업체**를 다시 추가해 보세요.

### 이메일 재청구를 끄면 이미 이메일을 보내고 있는 서브 계정에 영향이 있나요?
이메일 재청구를 끄면 그 서브 계정의 이메일 사용량에 에이전시의 마크업이 적용되어 재청구되지 않아요. 끄기 전에 앞으로 어떻게 청구할지 고객과 먼저 확인하세요.

### 이메일 재청구를 껐다가 다시 켤 수 있나요?
네, 켤 수 있어요. 서브 계정의 **고객 관리** 화면에 있는 **이메일 재판매 설정** 토글을 껐을 때와 같은 방법으로 다시 켜면 돼요.

### 이 설정은 서브 계정마다 적용되나요, 에이전시 전체에 적용되나요?
서브 계정마다 적용돼요. 이메일 재청구를 켜거나 끄려는 서브 계정마다 위의 1~4단계를 반복하세요.
