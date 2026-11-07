---
원문: /support/solutions/articles/155000000734-how-to-use-the-domain-connect-feature-
번역일: 2026-11-06
카테고리: 42-통합
---

# Domain Connect로 도메인 연결하기

Domain Connect는 도메인을 서비스에 연결할 때 필요한 DNS 설정을 자동으로 해 주는 기능이에요. 클릭 몇 번이면 도메인을 연결할 수 있어서, DNS 레코드를 직접 고치지 않아도 돼요.

커뮤니티에서 만든 다른 튜토리얼도 참고해 보세요.

Domain Connect는 루트 도메인과 서브도메인 모두에 쓸 수 있어요. 도메인이 연결 가능한지 자동으로 확인하고 필요한 설정까지 해 줘서, 도메인 관리가 한결 쉬워져요.

{% hint style="info" %}
Domain Connect는 도메인을 연결하는 기능이지, 도메인을 호스팅하는 기능이 아니에요. Google Domains, Go Daddy, Cloudflare, IONOS 중 한 곳에서 도메인을 미리 구매해 두어야 사용할 수 있어요.

Cloudflare 프록시를 쓰는 경우, 자동으로 만들어진 DNS 레코드에서 Cloudflare 프록시가 꺼져 있는지 확인하세요.
{% endhint %}

{% hint style="warning" %}
도메인 제공업체 탭에서 승인을 마친 뒤에는 그 탭을 닫고 도메인 인증 단계를 이어서 진행하세요.
{% endhint %}

---

## 이 기능은 무엇인가요?

Domain Connect는 도메인을 여러 웹 서비스나 애플리케이션에 연결하는 과정을 자동으로 처리해 주는 기능이에요.

- 주요 도메인 제공업체와 간편하게 연동: Google Domains, Go Daddy, Cloudflare에 있는 도메인을 클릭 몇 번으로 다양한 서비스에 연결할 수 있어요.
- 번거로운 설정은 자동으로: DNS를 직접 설정하지 않아도 Domain Connect가 대신 처리해요. 시간이 절약되고 실수도 줄어요.

### 왜 중요한가요?

- 빠르고 간단해요: 도메인을 여러 서비스와 애플리케이션에 쉽게 연결할 수 있어요.
- 안전해요: 주요 도메인 제공업체의 검증된 인프라를 이용해 안전하게 연결해요.
- 앞으로 더 넓어져요: 앞으로 지원하는 제공업체가 늘어나고, WordPress나 이메일 서비스 같은 플랫폼과의 연동도 지원할 예정이에요.

---

## 사용 방법

{% hint style="info" %}
Domain Connect는 도메인을 연결하는 기능이지, 도메인을 호스팅하는 기능이 아니에요. Google Domains, Go Daddy, Cloudflare 중 한 곳에서 도메인을 미리 구매해 두어야 사용할 수 있어요.
{% endhint %}

1. 서브 계정에 로그인한 뒤 **설정 > 도메인** 탭으로 이동하세요.
2. **도메인 추가** 버튼을 클릭해 시작하세요.
   ![도메인 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005678664/original/vb1feDifIlYLaDf8X50iU9FxXW0cs8-qYQ.png?1692626777)
3. 입력란에 루트 도메인이나 서브도메인을 입력하세요. "www" 서브도메인을 입력하면 루트 도메인도 함께 추가할 수 있는 옵션이 나타나요.
   ![도메인 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005679165/original/gWOZnKvc-obX2BoPomYNA5ZcFkouYe5whQ.png?1692626938)
4. **계속** 버튼을 클릭하세요.
   ![계속 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005679474/original/REaa7jW8jWBcddTN_qcK8TOSyjHcTxWKdQ.png?1692627034)
5. 도메인이 Google Domains, Go Daddy, Cloudflare 중 한 곳에 있으면 **승인** 버튼이 나타나요. 이 버튼을 클릭해 Domain Connect가 DNS 설정에 접근하도록 허용하세요.
   ![승인 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005681595/original/CeyuCabf_IfnHMKWo-yqXoFcnj4mJis2Uw.png?1692628157)
6. 도메인 제공업체 화면에 나오는 안내에 따라 승인을 마치세요. 필요한 DNS 레코드가 자동으로 추가되거나 연결돼요.
   ![도메인 제공업체의 승인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005680289/original/-I644NlqOUVms8QjqZ_XZHvTv_O5f39qmg.png?1692627489)
7. 승인이 끝나면 제공업체 탭을 닫고 Domain Connect 화면으로 돌아오세요.
   ![승인 완료 후 돌아오는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005680769/original/W8qlnuBzQdVvbNRiGMFqkgxIJ0i_y2CnQA.png?1692627806)

   {% hint style="info" %}
   Google Domains는 이 탭을 닫고 서브 계정으로 돌아와야 승인 과정이 마무리돼요.
   {% endhint %}

8. 필요한 항목이 시스템에 추가되면서 도메인과 하이퍼클래스의 연결이 확인돼요.
9. 도메인 제공업체가 지원되지 않는 경우에는 화면에 나오는 안내에 따라 필요한 DNS 레코드를 직접 추가할 수 있어요.
   ![DNS 레코드 직접 추가 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005681058/original/PQ19AiYtyi4CogvMpdmy5YYTIdBbxvOuOQ.png?1692627955)
10. 도메인에 접속해서 연결이 잘 되었는지 확인하세요. 변경 사항이 반영되기까지 30초 이상 걸릴 수 있어요.

승인에 문제가 있거나 오류가 생기면 아래와 같은 메시지가 나타나요.

![승인 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005681790/original/Q9n2H6uwWOj-zHboG1mMiZNI9pOfMMjvug.png?1692628209)

---

## FAQ

### Domain Connect를 쓰지 않고 도메인을 직접 설정할 수도 있나요?

네, 직접 설정할 수 있어요. DNS 레코드를 직접 설정하고 싶거나, 도메인 제공업체가 아직 Domain Connect를 지원하지 않는 경우에는 수동 설정을 계속 사용할 수 있어요.

### 도메인 제공업체가 Domain Connect가 지원하는 세 곳에 없으면 어떻게 하나요?

Domain Connect가 지원하지 않는 제공업체를 쓰더라도 필요한 DNS 레코드를 직접 추가하면 돼요. 수동 설정 방법은 지금까지와 같아요.

### **Also add www domain**(www 도메인도 추가)을 켰는데 www 서브도메인이 이미 다른 시스템에 연결되어 있으면 어떻게 되나요?

DNS 레코드에 서브도메인용 CNAME 레코드가 새로 만들어져 하이퍼클래스로 연결돼요. 하지만 www 도메인에 이미 있던, 다른 서비스를 가리키는 CNAME 레코드나 A 레코드는 삭제되지 않아요. www 도메인이 하이퍼클래스에서 작동하려면 기존 레코드를 직접 삭제해야 해요.
