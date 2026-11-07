---
원문: /support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting
번역일: 2026-11-07
카테고리: 18-리포팅
---

# Google Ads 리포팅 문제 해결 가이드

Google Ads 리포트에 데이터가 제대로 보이지 않을 때, 설정이 올바른지 확인하는 방법을 안내해요. 연동 상태, UTM 트래킹 템플릿, 캠페인·광고 이름 규칙을 차례로 점검해 보세요.

Google AdWords는 세계에서 가장 많이 쓰는 광고 플랫폼 중 하나예요. 사업을 알리고 방문자를 늘리기에 좋지만, 성과를 추적하기는 쉽지 않을 수 있어요. 광고 성과를 알려면 Google AdWords 리포팅을 사용해야 해요. 이 문서에서는 Google 광고 설정이 제대로 되어 있는지 확인하는 문제 해결 단계를 소개해요.

## 1. Google 광고 계정 연동이 연결되어 있는지 확인하세요

연동이 연결되어 있다면, 연동에 입력한 Gmail 주소가 Google 광고 계정과 연결된 주소가 맞는지 확인하세요.

![Google 광고 계정 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248432003/original/VUJN3JbEGt7osLkXqk99TOyEbrlo8bkPRA.png?1661970067)

연결한 사용자의 이메일 주소가 Google 광고 계정에서 가장 높은 권한(관리자)을 가지고 있는지도 확인하세요.

![Google 광고 계정의 사용자 권한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248432893/original/mkh9c39KkvP1v3mTsb3Fchx75i56figAeQ.png?1661970338)

{% hint style="info" %}
연동에 연결한 Gmail 계정은 Google 광고 계정에서 사용자(User 또는 admin) 역할이어야 해요. 매니저(manager) 역할은 사용할 수 없어요.
{% endhint %}

## 2. UTM 트래킹 템플릿은 한 곳에만 추가하세요

UTM 트래킹 템플릿은 계정 설정, 캠페인, 광고 설정 중 한 곳에만 추가할 수 있어요. 여러 곳에 추가하면 계정 > 캠페인 > 광고 순서의 계층에 따라 적용돼요.

{% hint style="info" %}
UTM 트래킹은 대소문자를 구분해요. 템플릿을 정확히 그대로 따라야 하고, 대문자는 절대 쓰면 안 돼요.
{% endhint %}

## 3. Google 광고, 광고 세트, 캠페인 이름은 서로 달라야 해요

이름이 겹치면 서로 다른 광고 세트나 광고에 중복으로 표시돼요. 예를 들어 볼게요.

### 잘못된 설정 (이렇게 하지 마세요)

|  |  |  |
| --- | --- | --- |
| **캠페인 이름** | Winter Shoes |  |
| **캠페인 ID** | 12345 |  |
| **Ad Group**(광고 그룹) | Sport Shoes 1 |  |
| **광고** |  | \*Nike Sport Shoes 1 |
|  | Sport Shoes 2 |  |
| **광고** |  | \*Nike Sport Shoes 1 |

\* Nike Sport Shoes 1이 철자까지 똑같이 두 번 쓰였어요. 이름이 서로 달라야 해요.

**Paid Search**(유료 검색)로 연락처 A가 만들어졌다고 해 볼게요. 위 표에서 Nike Sport Shoes 1이 두 광고에 있으므로, 연락처 A는 **Google Ad Reporting**(Google 광고 리포팅)의 **리드** 열에서 서로 다른 두 광고 세트에 모두 Nike Sports Shoes 1로 표시돼요.

```
https//example.com?utm_source=adwords&utm_medium={NikeSportShoes1}&utm_campaign={Wintershoes}&utm_content={sportshoes1}&utm_keyword={sports}&utm_matchtype={e}&campaign_id={12345}&ad_group_id={123456789}&ad_id={sportshoes}
```

### 올바른 설정 (이렇게 하세요)

|  |  |  |
| --- | --- | --- |
| **캠페인 이름** | Winter Shoes |  |
| **캠페인 ID** | 12345 |  |
| **Ad Group** | Sport Shoes 1 York |  |
| **광고** |  | Nike Sport Shoes 1.1 York logo |
|  | Sport Shoes 2 John |  |
| **광고** |  | Nike Sport Shoes 1.2 John logo |

{% hint style="info" %}
Google 광고의 캠페인, 광고 세트, 광고 이름을 바꿔도 기존 UTM 파라미터는 바뀌지 않아요. 데이터는 예전 파라미터를 기준으로 계속 집계돼요.

새 캠페인, 광고 세트, 광고를 만드는 것을 권장해요. **Google Ad Reporting**의 **목록 보기**에서는 하이퍼클래스가 이름을 업데이트해 보여 줘요. 하지만 예전 UTM 파라미터를 읽기 때문에 매출, 리드, ROI는 더 이상 귀속되지 않아요.
{% endhint %}
