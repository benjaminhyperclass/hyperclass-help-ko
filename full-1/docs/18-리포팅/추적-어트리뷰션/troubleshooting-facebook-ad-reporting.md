---
원문: https://help.gohighlevel.com/support/solutions/articles/48001220950-troubleshooting-facebook-ad-reporting
번역일: 2026-11-06
카테고리: 18-리포팅
---

# Facebook 광고 리포팅 문제 해결

Facebook 광고는 사업을 알리기에 좋은 방법이지만, 설정이 맞지 않으면 비용과 시간이 낭비될 수 있어요. 이 문서에서는 Facebook 광고 설정을 점검하는 방법 5가지를 안내해요.

## Facebook 광고 리포팅 설정 점검하기

### 1. Facebook 광고 계정 연동이 활성 상태여야 해요

서브 계정의 **설정 > 연동**에 연결한 Facebook 광고 계정에 [관리자 권한](https://web.facebook.com/business/help/1588743581429919?id=735435806665862&_rdc=1&_rdr#:~:text=Note%20that%20you%20must%20be%20an%20admin%20of%20the%20Facebook%20Page%20and%20have%20leads%20access%20permissions%20in%20order%20to%20connect%20a%20CRM%20system.)이 있는지 확인하세요.

{% hint style="info" %}
하이퍼클래스 **연동** 화면에 내 페이지가 보이지 않나요? 'CRM 접근 권한 지정 방법' 문서를 확인해 보세요.

본인이 Facebook 관리자가 맞다면, 아래 내용을 따라 **기본 제공 서비스**에 접근할 수 있는지, 그리고 내 페이지에 대한 접근을 허용할 수 있는지 확인해 보세요.
{% endhint %}

Meta 광고 관리자에서 Facebook 페이지와 Instagram 계정으로 광고하려면 다음이 필요해요.

광고 계정에는 계정을 관리하는 데 쓰는 관리자 권한이 3가지 있어요. 다른 사람에게 광고 계정 접근 권한을 줄 때는 역할을 지정해서 그 사람이 할 수 있는 일과 볼 수 있는 내용을 정해요. 아래 표는 광고 계정 역할 3가지(가로)와 각 역할이 할 수 있는 일(세로)을 정리한 거예요.

![광고 계정 역할별 권한 표](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248640131/original/i4b0NyjU-xcO7XDQpNq_pAs_KhnqHRGR3Q.png?1662042909)

{% hint style="info" %}
페이지 관리자여야 해요. 아니라면 페이지 관리자에게 페이지 관리자(권장), 편집자, 운영자, 광고주, 채용 관리자 중 하나의 역할을 지정해 달라고 요청하세요. 새로운 페이지 환경으로 전환했고 작업 접근 권한이 있다면 광고 관리자나 Meta Business Suite에서 광고를 관리할 수 있어요.
{% endhint %}

### 2. UTM 추적 템플릿은 **Destination**(대상)이 아니라 **Tracking**(추적)에 추가하세요

추가 자료: Facebook 광고 리포팅 설정 방법

![UTM 추적 템플릿을 추가하는 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247908119/original/hfjpXumheRhCLWFfZsAOubs4t7ZjtSS_Lw.jpeg?1661784949)

### 3. Facebook 광고, 광고 세트, 캠페인의 이름은 고유해야 해요

이름이 고유하지 않으면 Facebook 광고 리포트에서 서로 다른 광고 세트·광고에 같은 연락처가 중복으로 나타나요.

이렇게 설정하면 안 돼요:

|  |  |  |
| --- | --- | --- |
| **캠페인 이름** | 마을에 새로 생긴 식당 |  |
| **캠페인 ID** | 12345 |  |
| **Ad Set**(광고 세트) | 요리 1 |  |
| **광고** |  | 신선한 레드 파스타 |
|  | 요리 2 |  |
| **광고** |  | 신선한 레드 파스타 |

이 예시에서 연락처 A는 유료 검색으로 생성돼요. 그러면 연락처 A는 Facebook 광고 리포팅의 **리드** 열에서 서로 다른 두 광고 세트의 Nike Sport Shoes 1이라는 광고에 모두 나타나요.

<!-- 검토 필요: 원문 내용이 서로 다름 -->

```
https//example.com?utm_source=fb_ad&utm_medium={dish1}&utm_campaign={newrestaurantintown}&utm_content={freshredpasta}&campaign_id={12345}
```

올바른 설정:

|  |  |  |
| --- | --- | --- |
| **캠페인 이름** | 마을에 새로 생긴 식당 |  |
| **캠페인 ID** | 12345 |  |
| **Ad Set** | 요리 1 전채 |  |
| **광고** |  | 1.1 추가 소스를 곁들인 신선한 레드 파스타 |
|  | 요리 2 메인 코스 |  |
| **광고** |  | 2.1 소스 없는 신선한 레드 파스타 |

### 4. Facebook 캠페인·광고 세트·광고 이름을 바꿔도 Facebook 광고 측 UTM에는 반영되지 않아요. 이전 파라미터로 집계돼요

새 캠페인, 광고 세트, 광고를 만드는 것을 권장해요. 하이퍼클래스의 Facebook 광고 리포팅 **목록 보기**에는 바뀐 이름이 반영돼요. 하지만 UTM이 여전히 이전 캠페인, 광고 세트, 광고에 연결되어 있어서 매출, 리드, ROI가 더 이상 집계되지 않아요.

- 캠페인/광고 세트/광고를 운영하는 동안에는 이름 파라미터를 바꿀 수 없어요. 이름을 바꿔야 한다면 다른 캠페인/광고 세트/광고를 새로 만드세요.
- 캠페인/광고 세트/광고 이름을 바꾸고 새 캠페인은 만들지 않으면, 하이퍼클래스의 데이터는 계속 처음 만든 캠페인을 가리켜요. (Facebook 광고가 파라미터로 이전 이름을 전달하기 때문이에요.)

### 5. [**Facebook Lead Form Mapping**(Facebook 리드 폼 매핑)](../../42-통합/Facebook-Integration/facebook-lead-ad-integration-troubleshooting-guide.md)을 연결할 때는 올바른 Facebook 페이지를 선택해야 해요

Facebook 폼에서 리드를 수집하려면 매핑을 활성 상태로 설정해야 해요.

{% hint style="info" %}
- 텍스트 필드와 커스텀 필드는 쉽게 매핑할 수 있어요.
- 라디오 커스텀 필드는 Facebook 리드 폼과 매핑할 수 없어요.
- **Timezone**(시간대) 필드는 매핑할 수 없어요.
{% endhint %}
