---
원문: /support/solutions/articles/48001178719-enabling-twilio-rebilling-for-customers-who-want-use-their-own-twilio-account
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# 고객이 본인 Twilio 계정을 쓰고 있을 때 Twilio 리빌링 켜기

고객이 본인 Twilio 계정을 하이퍼클래스에 연결해 쓰고 있다면, Twilio 리빌링을 켜기 전에 전화번호를 에이전시의 Twilio 계정으로 옮겨야 해요. 이 문서에서는 그 이전 절차와 자격 증명을 바꾸는 방법을 안내해요. 에이전시 관리자만 쓸 수 있어요.

Twilio 리빌링이 작동하려면 하이퍼클래스의 고객 서브 계정이 에이전시 Twilio 계정 안의 서브 계정과 연결되어 있어야 해요.

고객의 서브 계정이 지금 고객 본인의 Twilio 계정에 연결되어 있다면, SaaS 모드에서 Twilio 리빌링을 켜기 전에 아래 단계를 먼저 따라 하세요.

## 1단계. Twilio 계정에서 서브 계정 만들기

1. 에이전시의 Twilio 계정에 로그인해요.
2. 톱니바퀴 아이콘을 클릭해요.
3. **Sub-accounts**(서브 계정)를 선택해요.
4. 빨간색 + 아이콘을 클릭해 새 서브 계정을 만들어요.
5. Twilio 리빌링을 켜려는 고객의 이름과 같게 서브 계정 이름을 지어요.

![Twilio에서 새 서브 계정을 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956311/original/FqqemNrQTtoXA_bHrFYVNJQ3YVDGu-2xRQ.jpg?1726501850)

## 2단계. 문의 문구 템플릿 채우기

아래 템플릿을 복사해서 빈 곳을 채워요. Twilio 지원팀에 보내는 문구라서 영어 그대로 두었어요.

> Hi Twilio,
>
> My client [client name] whose Twilio account is registered under [client's Twilio account email] would like to move the following numbers from their account to a sub-account in my account:
>
> [list of phone numbers]
>
> The Losing Account SID is: [the SID of the sub-account that is giving up the phone number]
>
> The Gaining Account SID is: [the SID for the new sub-account that you created in Step 1]
>
> We would like the number(s) above transferred as soon as possible. Thanks in advance!

- **Losing Account SID**에는 번호를 내주는 고객 서브 계정의 SID를 넣어요. 하이퍼클래스에서 **에이전시 설정 > Twilio** 탭으로 가면 목록의 고객 이름 옆에서 확인할 수 있어요.
- **수신 계정 SID**(Gaining Account SID)에는 1단계에서 만든 새 서브 계정의 SID를 넣어요.

## 3단계. Twilio에서 지원 티켓 열기

1. Twilio 계정에서 물음표 아이콘을 클릭해요.
2. **Submit a Ticket**(티켓 제출)을 선택해요.
3. 2단계에서 완성한 템플릿 문구를 티켓에 붙여 넣고 제출해요.

![Twilio에서 티켓을 제출하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956374/original/LJi9ZAUoLbrQ5dCXpAlwdQtGzfHH5KLjYw.jpg?1726501892)

## 4단계. 고객에게 같은 티켓을 요청하기

1. 템플릿의 첫 문단을 아래 문장으로 바꿔요.

   > I would like to transfer the following number(s) from my Twilio account to another account:

2. 수정한 템플릿을 고객에게 보내요.
3. 고객에게 본인의 Twilio 계정에서 이 템플릿으로 티켓을 열어 달라고 요청해요.

{% hint style="warning" %}
Twilio에서 이전을 승인하려면 에이전시와 고객, 양쪽의 티켓이 모두 필요해요.
{% endhint %}

## 5단계. 이전 완료 확인하기

Twilio에서 이전이 끝났다는 확인을 받으면, 1단계에서 만든 서브 계정 안에 번호가 보여요.

## 6단계. 하이퍼클래스에서 자격 증명 바꾸기

1. 하이퍼클래스에 로그인해요.
2. **에이전시 설정 > Twilio**로 이동해요.
3. 아래로 스크롤해 해당 고객을 찾아요.
4. 고객 계정 이름 오른쪽의 점 세 개 아이콘을 클릭해요.
5. **자격 증명 업데이트**를 선택해요.
6. **SID**와 **Auth Token** 값을 에이전시 Twilio 계정의 새 서브 계정에서 가져온 값으로 바꿔요.

![하이퍼클래스에서 자격 증명을 업데이트하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956414/original/5j-RlazVj5ZqQ4CAAVCJdgumM4uJppqXag.jpg?1726501927)

새 SID와 토큰은 아래 순서로 확인할 수 있어요.

1. 에이전시의 Twilio 계정에 로그인해요.
2. 오른쪽 위의 톱니바퀴 아이콘을 클릭해요.
3. **Sub-accounts**(서브 계정)를 선택해요.
4. 해당 고객의 이름을 클릭하면 두 값이 보여요.

![Twilio 서브 계정 화면에서 SID와 토큰을 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956464/original/iMgyUlLUA-JWWQImVop5LEBiCboj8XGnpg.jpg?1726501961)

## 자주 묻는 질문

### 리빌링을 켠 뒤 고객이 Twilio 연동에 문제를 겪으면 어떻게 하나요?
먼저 이 문서의 안내대로 모든 구성과 설정이 제대로 적용됐는지 확인하세요. 문제가 계속되면 Twilio 지원팀에 도움을 요청해 보세요. 플랫폼과 관련된 문제라면 하이퍼클래스 고객지원에 문의하세요. Twilio API나 요금 설정에 변경된 내용이 없는지 확인하는 것도 도움이 될 수 있어요.

### 고객 본인 계정으로 Twilio 리빌링을 쓸 때 제한이 있나요?
고객 본인의 Twilio 계정을 리빌링에 쓰면 유연하게 운영할 수 있지만, Twilio의 요금제 차이, 제공 기능, 지역별 제한 때문에 청구나 서비스 기능에 영향이 있을 수 있어요. Twilio 문서와 하이퍼클래스의 연동 기능을 함께 확인해서 호환되는지, 어떤 제약이 있는지 미리 살펴보세요.
