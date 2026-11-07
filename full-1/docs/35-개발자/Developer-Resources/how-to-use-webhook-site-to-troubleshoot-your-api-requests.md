---
원문: https://help.gohighlevel.com/support/solutions/articles/48001212085-how-to-use-webhook-site-to-troubleshoot-your-api-requests
번역일: 2026-11-07
카테고리: 35-개발자
---

# Webhook.site로 API 요청 문제 확인하기

Webhook.site는 연동, 워크플로우, 사용자 지정 API 호출이 보낸 HTTP 요청을 그대로 받아서 보여 주는 무료 외부 도구예요. 웹훅 페이로드를 점검하고 설정을 확인할 수 있어서, 하이퍼클래스나 실제 운영 엔드포인트로 보내기 전에 문제를 먼저 찾아낼 수 있어요.

---

[동영상](https://www.loom.com/embed/98a4404158934515a67062bf4ac70222)

---

## Webhook.site란?

Webhook.site에 접속하면 고유한 테스트 URL이 바로 만들어져요. 이 URL로 들어오는 웹훅 요청을 모두 모아 실시간으로 보여 줘요. 이런 때 쓰면 좋아요.

- 원시 웹훅 페이로드(헤더, 본문, 메서드)를 확인할 때
- 실제 엔드포인트로 보내기 전에 요청 구조가 올바른지 확인할 때
- Zapier, Make(Integromat), 자체 개발 앱 등 다른 자동화 도구의 연동 문제를 찾을 때

{% hint style="warning" %}
이 문서의 절차는 고급 연동(Advanced Integration)을 다루며, 참고용으로만 제공해요.

Basic API와 Advanced API는 복잡해서 하이퍼클래스가 직접 지원하거나 대응해 드리지 않아요. 대신 시작과 연결을 도와줄 수 있는 도구와 모임이 있어요.

- API 관련 도움이 필요하면 개발자 협의회(Developer Council) Slack 커뮤니티에 참여할 수 있어요. 참여 방법은 하이퍼클래스 고객지원에 문의하세요.
- 개발자 협의회 Zoom 통화는 매월 한 번(끝에서 두 번째 금요일) 열려요. 일정은 이벤트 캘린더에서 확인할 수 있어요. 자세한 내용은 하이퍼클래스 고객지원에 문의하세요.
- API 문서 링크 등 더 자세한 정보도 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

---

## 사용 방법

### 1단계. Webhook.site 열기

브라우저에서 <https://webhook.site>를 열어요. 고유한 테스트 URL이 자동으로 만들어져요.

![Webhook.site 첫 화면에서 자동으로 만들어진 고유 테스트 URL](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064186797/original/78EqPHmlHxnXgPeQwPPVXkY78oq_19psgw.png?1770213973)

### 2단계. 고유 테스트 웹훅 옆의 **클립보드에 복사** 클릭하기

Webhook.site 첫 화면에서 내 고유 테스트 웹훅 옆에 있는 **클립보드에 복사**를 클릭해요.

![Webhook.site 첫 화면에서 고유 테스트 웹훅 옆의 클립보드에 복사 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558661/original/AMwU34bm7Qtr34Kv-qg5tlrcbmjHLwVPEg.png?1647882452)

### 3단계. Zapier 같은 사용자 지정 연동 또는 다른 외부 솔루션으로 이동하기

이 예시에서는 Zapier를 사용해요. Webhook.site로 테스트하려면 **Set Up Action**(액션 설정)을 클릭해요.

![Zapier에서 Set Up Action을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558665/original/y413VeWzjcuvSTcRG3D7Qr0i-WG1OsdbRg.png?1647882452)

### 4단계. 하이퍼클래스 API URL을 Webhook.site 테스트 URL로 바꾸기

테스트하는 동안만 하이퍼클래스 API URL을 Webhook.site URL로 바꿔 넣어요. 하이퍼클래스로 데이터를 POST하는 다른 사용자 지정 연동도 같은 방식으로 하면 돼요.

![하이퍼클래스 API URL을 Webhook.site 테스트 URL로 바꾸는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558659/original/u3eeM4pSIkQSw2ivNF_WpkezIC7Rrd2j4Q.png?1647882452)

### 5단계. 변경 내용 저장하기

변경 내용을 저장한 다음, 평소 웹훅을 실행하는 흐름을 그대로 실행해요.

Zapier, Integromat 등에 테스트 기능이 있어도 쓰지 마세요. 대신 실제 상황과 같은 예시로 실행해요.

- 폼을 제출할 때 웹훅이 실행되는 경우: 해당 폼으로 가서 테스트 제출을 해요.
- 외부 시스템에서 어떤 동작이 일어날 때 자동화가 실행되는 경우: 외부 시스템에서 그 동작을 직접 해요.

이렇게 하면 나와 개발자가 가장 정확한 정보를 얻을 수 있어요. 고급 API 문제를 찾을 때 매우 유용해요.

### 6단계. 페이로드 데이터 확인하기

웹훅이 실행될 때마다 하이퍼클래스가 받게 되는 원시 데이터가 화면에 표시돼요. 이 데이터를 API 문서 사이트의 정보와 비교하면서 설정이 맞는지 확인해 보세요.

![Webhook.site에 표시된 페이로드 원시 데이터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204626853/original/rZKm85AvhyACSqZ3wxKtgoFf4Zkh8lDLMQ.png?1647895301)

### 7단계. **Copy** 클릭하기

원시 데이터(Raw Data) 입력 상자 오른쪽 위의 **Copy**(복사)를 클릭하면 페이로드 전체를 복사할 수 있어요. 복사한 내용은 개발자나 하이퍼클래스 팀과 문제를 확인할 때 쓸 수 있도록 저장해 두세요.

![Raw Data 입력 상자 오른쪽 위의 Copy 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204626854/original/KfqMVOZpTrJV0t0LHq6GHcGcIK1t1AR3oQ.png?1647895301)
