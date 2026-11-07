---
원문: /support/solutions/articles/48001222501-how-to-migrate-my-agency-over-to-lc-email
번역일: 2026-11-07
카테고리: 09-이메일
---

# 하이퍼클래스 이메일로 에이전시 전환하기

Mailgun이나 SMTP를 연동해 쓰던 에이전시가 하이퍼클래스 이메일로 옮기는 방법을 안내해요. 현재 하이퍼클래스 이메일 서버를 쓰고 있는지 확인하는 방법도 함께 다뤄요. 이 작업은 에이전시 관리자만 할 수 있어요.

{% hint style="info" %}
Mailgun이나 SMTP를 연동해 쓰는 하이퍼클래스 기존 고객이라면 아래 안내를 따라 주세요.

신규 에이전시이고 SMTP/Mailgun 제공업체를 한 번도 연동하지 않았다면, 이미 기본으로 하이퍼클래스 이메일을 쓰고 있어요. 테스트로 확인할 수 있어요.
{% endhint %}

하이퍼클래스 이메일은 Mailgun 같은 외부 이메일 서비스 제공업체에 따로 가입하는 번거로움을 없애 주는 서비스예요. 예전에는 에이전시가 가입한 뒤 이메일을 보내고 받으려면 Mailgun이나 다른 이메일 서비스 제공업체를 연동해야 했어요.

하이퍼클래스 이메일을 쓰면 모든 서브 계정에서 별도 설정 없이 바로 이메일을 보내고 받을 수 있어요. 이 문서를 따라 에이전시와 서브 계정을 하이퍼클래스 이메일로 옮겨 보세요.

---

## 하이퍼클래스 이메일로 전환하기

1. **에이전시 설정** > **이메일 서비스**로 이동하세요.
2. **하이퍼클래스 이메일 사용** 버튼이 보이면, **하이퍼클래스**를 **Default provider**(기본 제공업체)로 선택하세요.
3. 화면에 나오는 안내에 따라 진행하세요.

{% hint style="info" %}
**하이퍼클래스 이메일 사용** 버튼을 눌러도 이미 SMTP나 Mailgun을 연동한 서브 계정에는 영향이 없어요. 기존 SMTP 연동을 없애려면 아래 단계를 따라 주세요.

버튼을 누른 뒤에 만드는 새 계정은 모두 자동으로 하이퍼클래스 이메일로 전환돼요. 새 계정에 직접 Mailgun이나 SMTP를 연동해서 하이퍼클래스 이메일을 쓰지 않도록 설정할 수도 있어요.
{% endhint %}

### 도메인을 추가할 때 오류가 나는 경우

도메인이나 서브도메인을 추가하려는데 다음 오류가 나타날 수 있어요.

**요청 실패**

이 도메인(replies.example.com)은 이미 Mailgun 계정에 설정되어 있어요.

Mailgun에 로그인해서 해당 도메인을 삭제하면 하이퍼클래스 이메일에서 사용할 수 있어요.

도메인을 삭제해야 한다고 생각되면 하이퍼클래스 고객지원에 문의해 주세요.

![요청 실패 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029832042/original/v0M02hZm2B1viRUHbRD3mWAjg_Edg2NfSg.jpg?1721848869)

## SMTP 연동 제거하기

1. **하이퍼클래스**를 **Default provider**(기본 제공업체)로 선택하세요.
2. **Gmail** 연동을 클릭하세요.
3. **trash**(휴지통) 아이콘을 클릭하세요.

![Gmail 연동의 휴지통 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029832061/original/sLvqpJUiNauxdCOgNeyr8Fu_P7iHkx7owA.jpg?1721848911)

---

## 하이퍼클래스 이메일 서버를 쓰고 있는지 확인하기

발송 도메인이 아래 목록에 있다면 하이퍼클래스 이메일로 전환이 끝난 거예요.
`mg.msgsndr.org``mg.msgsndr.net``replies001.msgsndr.com``replies.msgsndr.com``replies000.msgsndr.com``ec1.msgsndr.org``ec1.msgsndr.net`

![발송 도메인 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48258278599/original/NsnAs5TRldG6TnkrawVIUlQR9DnHQxQXzA.png?1666313812)
