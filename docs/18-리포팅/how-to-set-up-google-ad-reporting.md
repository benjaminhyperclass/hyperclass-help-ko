---
원문: /support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting
번역일: 2026-11-06
카테고리: 18-리포팅
---

# Google Ads 리포팅 설정

Google Ads 리포팅에서는 고객사의 디지털 광고 캠페인을 실시간으로 확인하고 분석할 수 있어요. 이 문서에서는 Google Ads 리포팅을 쓰기 위해 꼭 해 두어야 할 설정을 단계별로 안내해요.

## Step 1 - **연동**에서 올바른 Google Ads 계정 선택

연결된 Google 계정의 사용자는 [관리자](https://support.google.com/admanager/answer/177403) 수준의 최고 권한이 있거나 [Google Ads 관리자 계정 액세스 권한](https://support.google.com/google-ads/answer/6139186#MCC_invite)이 있어야 해요.

## Step 2 - 올바른 MCC 계정 ID와 클라이언트 계정 ID 선택

MCC는 My Client Center의 약자예요. Google Ads 관리자 계정이라고도 부르며, 여러 고객사의 Google Ads 계정을 관리하는 계정이에요.

![MCC 계정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241723515/original/cpKfLamkhGxOwB2benWY2aBbeModkz311w.png?1659031538)

### MCC ID는 화면 오른쪽 위에 있어요

![MCC ID 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248202783/original/2kB4rlhnXyUOvhwIOf5AADT7gZ7J91IbsQ.png?1661885519)

### 클라이언트 계정 ID는 도움말 섹션을 클릭하면 볼 수 있어요

![클라이언트 계정 ID 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241724794/original/41FtCevRGsKvW2aJupKjPEfYRnjb_h9fcA.png?1659031996)

---

## Step 3 - Google Ads 계정에 UTM 템플릿 추가

UTM 트래킹 템플릿은 세 곳에 추가할 수 있어요. 계정 설정, 캠페인 설정, 광고 그룹 수준 중에서 고르면 돼요. 계정 수준의 설정인 **계정 설정**에 추가하는 것을 권장해요.

### UTM 트래킹 템플릿 (복사해서 사용하세요)

```
{lpurl}?utm_source=adwords&utm_medium={adname}&utm_campaign={campaignname}&utm_content={adgroupname}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}
```

### 작동 방식

트래킹 템플릿에는 {lpurl}처럼 최종 URL을 넣어 주는 [ValueTrack 파라미터](https://support.google.com/google-ads/answer/6305348?hl=en#urlinsertion)가 반드시 있어야 해요.

광고를 클릭하면 이 파라미터가 최종 URL을 넣어 줘요. 트래킹 템플릿에 URL 삽입 파라미터가 없으면 랜딩 페이지 URL이 깨져요.

한 URL에 [ValueTrack 파라미터](https://support.google.com/google-ads/answer/6305348?hl=en#urlinsertion)를 여러 개 넣으려면 앰퍼샌드(&)로 이어 붙이면 돼요. 예를 들면 다음과 같아요.

```
{lpurl}?matchtype={matchtype}&device={device}
```

캠페인, 광고 그룹, 광고 및 확장 소재 수준에서 ValueTrack 파라미터가 들어간 트래킹 템플릿을 설정하거나 편집하는 방법은 [이 문서](https://support.google.com/google-ads/answer/6305348?hl=en#zippy=%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-ad-group-level%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-ads-extensions-level%2Cfinal-url-tracking-template-or-custom-parameter%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-sitelink-level)를 참고하세요.

### 예시

**최종 URL:** http://example.com

트래킹 템플릿:

```
{lpurl}?utm_source=adwords&utm_medium={adname}&utm_campaign={campaignname}&utm_content={adgroupname}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}
```

광고를 클릭한 뒤의 랜딩 페이지 URL:

```
{lpurl}?utm_source=adwords&utm_medium=black_friday&utm_campaign=blackday10&utm_content=marketingbanner&utm_keyword=getdiscounteddeal&utm_matchtype=e&campaign_id=12345&ad_group_id=2394984903&ad_id=93844980940&gclid=84843ewhfb834nedhj4u49
```

### 템플릿 붙여 넣기

1. **Google Ads 계정** > **계정 설정** > **추적**으로 이동하세요. 아래 이미지를 참고하세요.

   ![계정 설정의 추적 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241751601/original/EXs2wVlSlNDgpnZygMVfKqT4A5Kzxz5wAw.png?1659042898)

2. 위에서 복사한 UTM 트래킹 템플릿을 **Tracking template**(추적 템플릿) 필드에 붙여 넣으세요.

   ![추적 템플릿 필드에 붙여 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241751703/original/FzN2NCdQqsIInlAJVnvV2WbbdMb1WoWbRA.png?1659042970)

{% hint style="info" %}
- 트래킹 템플릿을 추가한 뒤에는 테스트를 실행해 보세요. 대부분의 캠페인에서 랜딩 페이지가 확인되었다고 나올 거예요. 오류가 있으면, 진행 중인 캠페인에 한해 수정하세요.
- 예전에는 UTM 소스로 google(utm_source=google)을 썼어요. 지금은 더 이상 쓰지 않지만, 광고 차단 프로그램이 이 값으로 URL을 알아보고 UTM 파라미터를 지워 버려요.
{% endhint %}

---

## Step 4 - 예방용 스크립트 추가

자세한 설정 방법은 'Google Ads 예방용 트래킹 스크립트 설정 방법' 문서를 참고하세요.

이 스크립트는 Google Ads 예방용 트래킹 코드를 설정하는 간단한 예시예요. UTM 템플릿으로 어트리뷰션 데이터를 수집하지 못할 때를 대비한 안전장치 역할을 해요.

특정 링크의 모든 클릭을 추적해서 Google Analytics로 보내요. 이 스크립트에서 바꿔야 할 것은 트래킹 페이지 URL뿐이에요. 웹사이트에서 쓰는 URL과 똑같이 맞춰 주세요.

---

## 알아 두면 좋은 중요한 사항

1. 캠페인, 광고, 광고 세트 이름은 서로 겹치지 않아야 해요.
2. 이름 파라미터는 캠페인, 광고 세트, 광고가 유지되는 동안 바꿀 수 없어요. 이름을 바꿔야 한다면 문제가 생기지 않도록 새 캠페인, 광고 세트, 광고를 만드세요.
3. 캠페인, 광고 세트, 광고의 이름을 바꾸면서 새로 만들지 않기로 하면, CRM 데이터는 계속 원래(첫 번째) 캠페인을 참조해요. Google Ads가 파라미터에 이전 이름을 넘겨 주기 때문에 캠페인 리포팅이 왜곡돼요.
4. 왼쪽 위에 **Objectives**(목적) 드롭다운이 있어요. 캠페인을 만들 때 회사가 이 광고 캠페인에 어떤 목적을 두었는지 정하는 데 쓰여요.

   ![Objectives 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249248484/original/BVS_7NnRNEQp3b4qJgSWEcs3kymdNOhDkw.png?1662394187)
