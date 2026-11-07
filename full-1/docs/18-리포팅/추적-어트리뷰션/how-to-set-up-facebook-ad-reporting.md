---
원문: https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting
번역일: 2026-11-06
카테고리: 18-리포팅
---

# Facebook 광고 리포팅 설정하기

Facebook 광고를 운영하면 하이퍼클래스가 리드가 어느 광고와 광고 세트에서 왔는지 최대한 찾아서 연결해 줘요. 성과가 좋은 캠페인을 더 정확히 가려내려면 Facebook UTM 매개변수, Facebook 픽셀, 워크플로우의 Conversion API를 함께 쓰는 것을 권장해요.

## 시작하기 전에 확인하세요

- 랜딩 페이지로 트래픽을 보낸다면 워크플로우에서 Facebook 픽셀과 Facebook Conversion API를 설정하세요.
- 광고를 미리보기로 볼 때는 Facebook이 링크에 UTM 매개변수를 붙이지 않아요.
- UTM 매개변수나 추적이 필요한 다른 매개변수에는 특수 문자와 이모지를 쓰지 마세요.
- 첫 광고 어트리뷰션 데이터는 아래 "유입 경로"로 들어온 연락처에만 기록돼요. 그 외의 경우에는 첫 어트리뷰션 데이터가 비어 있어요.

### 유입 경로

- **폼 제출**
- 설문 제출
- **캘린더**
- Facebook 리드 폼에서 바로 유입
- **2단계 주문 폼**
- **채팅 위젯**
- 인바운드 통화 (리드가 번호 풀로 직접 전화하면 적용되지 않고, 클릭투콜 상황에서만 작동해요)

### 연락처 단위로 쓸 수 있는 UTM 추적 매개변수

- **출처**: 연락처에 출처가 어떻게 지정되는지는 ["How are sources classified" 표](https://docs.google.com/spreadsheets/d/1XwGUuc_YhW4Qd-acn64XV_fPfgQuhf10DcF1OWFj5A0/edit?usp=sharing)에서 확인하세요.
- **캠페인 이름**: `{{contact.attributionSource.utmCampaign}}`
- **Adset Name**(광고 세트 이름): `{{contact.attributionSource.utmMedium}}`
- **Ad Name**(광고 이름): `{{contact.attributionSource.utmContent}}`
- **Campaign Id**(캠페인 ID): `{{contact.attributionSource.campaignId}}`
- **fbclid**: `{{contact.attributionSource.fbclid}}`
- **gclid**: `{{contact.attributionSource.gclid}}`
- **리퍼러**: `{{contact.attributionSource.referrer}}`

## 정확한 리포팅을 위해 Facebook에서 캠페인 이름 짓는 방법

{% hint style="info" %}
캠페인 이름, 광고 이름, 광고 세트 이름은 각각 고유해야 해요. 아래 "올바른 설정 예시"를 참고하세요.

캠페인, 광고 세트, 광고가 운영되는 동안에는 이름 매개변수를 바꿀 수 없어요. 이름을 바꿔야 한다면 캠페인, 광고 세트, 광고를 새로 만드세요.

캠페인, 광고 세트, 광고를 바꾸면서 새 캠페인을 만들지 않으면, 하이퍼클래스의 데이터는 계속 처음 캠페인을 기준으로 표시돼요.
{% endhint %}

**올바른 설정 예시**

캠페인 이름:

캠페인 - Happy Teeth

광고 세트:

캠페인#1 - Happy Teeth - 오디언스 #1 (캘리포니아 샌라파엘 반경 20마일 - 남녀)

광고 (각각 고유한 이름):

- 광고#1: Happy Teeth - 캐러셀 광고 - 오디언스 #1
- 광고#2: Happy Teeth - 동영상 광고 - 오디언스 #1
- 광고#3: Happy Teeth - 이미지 광고 - 오디언스 #1

## Facebook 광고 관리자에서 UTM 매개변수 추가하기

1. [Facebook 광고 관리자(Ads Manager)](https://business.facebook.com/adsmanager/manage/ads/)로 이동하세요.
2. UTM 매개변수를 추가할 캠페인을 선택한 다음 **Manage ads**(광고 관리) > **Ads**(광고) > **편집**을 차례로 클릭하세요.
3. 아래로 스크롤해 **추적** 섹션을 찾으세요.

   ![Facebook 광고 편집 화면의 추적 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48173301734/original/RKnA2Zuqw5UV4fyM_U3CSt4L6gkkNmCJHw.png?1640200443)

4. **Build a URL parameter**(URL 매개변수 만들기)를 클릭하세요.

   ![URL 매개변수 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48173302000/original/8k3ZCXCI4EFBApZuGGjGeuZJELLj7tpjoQ.png?1640200552)

5. **URL 파라미터** 아래에서 다음 7단계를 차례로 진행하세요.
   1. **Campaign Source**(캠페인 소스)를 클릭하고 입력란에 `fb_ad`를 입력하세요.
   2. **Campaign Medium**(캠페인 매체)을 클릭하고 드롭다운에서 `{{adset.name}}`을 선택하세요.
   3. **캠페인 이름**을 클릭하고 드롭다운에서 `{{campaign.name}}`을 선택하세요.
   4. **Campaign Content**(캠페인 콘텐츠)를 클릭하고 드롭다운에서 `{{ad.name}}`을 선택하세요.
   5. **매개변수 추가** 버튼을 클릭하세요.
   6. **Parameter name**(매개변수 이름)에 `campaign_id`를 입력하고, **값** 드롭다운에서 `{{campaign.id}}`를 선택하세요.
   7. **적용**을 클릭해 변경 사항을 저장하세요.

   ![URL 파라미터 입력을 마친 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261752780/original/KL8jbKqo5KzHh_3uSbiTvx0kcQ6nTuYmrQ.png?1667831557)

{% hint style="info" %}
Facebook이 광고를 검토하고 승인하는 데 시간이 걸려요. 승인되면 광고가 게재되기 시작하고, 하이퍼클래스에서 UTM 매개변수로 추적돼요.

UTM 매개변수나 추적이 필요한 다른 매개변수에는 특수 문자와 이모지를 쓰지 마세요.

테스트할 때 광고를 미리보기로 보면 Facebook이 링크에 UTM 매개변수를 붙이지 않아요.
{% endhint %}

## 어트리뷰션 리포팅

캠페인과 출처·어트리뷰션 리포팅에 대한 자세한 내용은 어트리뷰션 문서를 참고하세요.

## 문제 해결

### Facebook에서 광고를 미리 볼 때 UTM 매개변수가 안 보여요

광고를 미리보기로 볼 때는 Facebook이 링크에 UTM 매개변수를 붙이지 않아요.

### 연락처의 첫 어트리뷰션 데이터가 안 보여요

첫 광고 어트리뷰션 데이터는 아래 유입 경로로 들어온 연락처에만 기록돼요. 그 외의 경우에는 첫 어트리뷰션 데이터가 비어 있어요.

유입 경로:

- **폼 제출**
- 설문 제출
- **캘린더**
- Facebook 리드 폼에서 바로 유입
- **2단계 주문 폼**
- **채팅 위젯**
- 인바운드 통화 (리드가 번호 풀로 직접 전화하면 적용되지 않고, 클릭투콜 상황에서만 작동해요)

### 광고, 광고 세트, 캠페인을 바꿨더니 리포트가 맞지 않아요

- 캠페인 이름, 광고 이름, 광고 세트 이름은 각각 고유해야 해요. 위의 "올바른 설정 예시"를 참고하세요.
- 캠페인, 광고 세트, 광고가 운영되는 동안에는 이름 매개변수를 바꿀 수 없어요. 이름을 바꿔야 한다면 캠페인, 광고 세트, 광고를 새로 만드세요.
- 캠페인, 광고 세트, 광고를 바꾸면서 새 캠페인을 만들지 않으면, 하이퍼클래스의 데이터는 계속 처음 캠페인을 기준으로 표시돼요.

### Facebook **비즈니스 계정**이나 광고 관리자가 없어요

[Facebook 광고 관리자](https://www.facebook.com/business/learn/facebook-ads-reporting-performance/)는 유료 캠페인 전체를 한눈에 볼 수 있는 대시보드예요. 비즈니스 계정과 광고 계정을 아직 만들지 않았다면 아래 안내를 참고하세요.

- [Facebook Business Manager 만들기](https://www.facebook.com/business/help/1710077379203657?id=180505742745347)
- [Facebook 광고 계정 만들기](https://www.facebook.com/business/help/407323696966570?id=649869995454285)

### Facebook 리드 광고를 쓰는데도 UTM 매개변수를 써야 하나요?

네, Facebook 리드 광고를 운영할 때도 더 정확한 리포팅을 위해 UTM 매개변수를 쓰기를 권장해요. 위의 "Facebook 광고 관리자에서 UTM 매개변수 추가하기" 절차대로 추가하세요.

### UTM 매개변수는 **추적**과 도착 URL 중 어디에 추가해야 하나요?

고유한 fbclick이 붙은 링크 클릭이나 페이지 방문을 각각 추적하려면 **추적**에 UTM 매개변수를 추가해야 해요.

### **Objectives** 드롭다운은 어떤 용도인가요?

**Ad Report**(광고 리포트) 왼쪽 위에 **Objectives**(목표) 드롭다운이 있어요. 광고 캠페인을 만들 때 회사가 어떤 목표를 세웠는지 정의하는 데 쓰여요.

![광고 리포트의 Objectives 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249254559/original/cJ-u1hcrxPrPlaVnZk6ukVNXKqTEeySGaA.png?1662397101)
