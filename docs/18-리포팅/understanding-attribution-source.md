---
원문: /support/solutions/articles/48001219997-understanding-attribution-source
번역일: 2026-11-06
카테고리: 18-리포팅
---

# 어트리뷰션 소스 이해하기

하이퍼클래스에서 어트리뷰션이 무엇인지, 연락처가 어떤 소스에서 들어왔다고 판단하는지 설명하는 문서예요. 광고 리포팅을 설정하는 문서도 함께 안내해요. ▶ 영상 [10강 2부 23:20](https://www.youtube.com/watch?v=-eAdd6izkHU&t=1400s)

## 어트리뷰션이란?

어트리뷰션은 연락처가 어떤 채널이나 소스에서 들어왔는지 나눠서 보여 줘요. 이 정보로 성장 기회를 찾고, 어느 채널의 잠재력이 가장 큰지 판단할 수 있어요.

예를 들어 Facebook 광고와 Google 광고를 함께 운영한다면, 어느 쪽이 하이퍼클래스로 리드를 더 많이 데려오는지 알고 싶을 거예요. 어트리뷰션이 그 답을 알려 줘요.

## '첫 번째'와 '최근' 어트리뷰션이란?

연락처가 어떤 소스에서 왔는지 판단할 때는 보통 처음 기록과 가장 최근 기록을 함께 봐요. 이 두 값은 모든 연락처에 항상 저장돼요.

**첫 번째 어트리뷰션**은 연락처가 우리 시스템과 처음 상호작용한 기록이에요. 이때 해당 세션의 어트리뷰션 데이터를 저장해요. 예를 들어 누군가 문의하기 폼을 작성한 경우예요.

**최근 어트리뷰션**은 가장 최근에 기록된 상호작용이에요. 이때도 가장 최근 세션의 어트리뷰션 데이터를 저장해요. 예를 들어 문의하기 폼을 작성한 연락처가 나중에 하이퍼클래스 투스텝 주문 폼으로 상품을 구매하면, 이 구매 세션의 데이터가 최근 어트리뷰션으로 기록돼요.

최근 어트리뷰션은 마지막으로 기록된 상호작용에 따라 계속 바뀌어요. 첫 번째 어트리뷰션은 바뀌지 않아요.

이제 두 어트리뷰션이 무엇인지 알았으니, 어디에서 확인하는지 볼게요.

## 연락처의 어트리뷰션 데이터는 어디서 볼 수 있나요?

첫 번째 어트리뷰션이든 최근 어트리뷰션이든, 모든 연락처의 상세 화면 오른쪽 아래에서 확인할 수 있어요.

1. 서브 계정에서 **연락처**(Contacts)로 이동하세요.
2. 확인할 연락처를 선택하세요.
3. **activity**(활동) 탭의 오른쪽 아래 열에서 어트리뷰션 데이터를 확인하세요.

![연락처 상세 화면에서 어트리뷰션 데이터를 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247964170/original/VSgXZHb-pBWW3cGC7emsU4xKKLFyaKQJ3g.gif?1661800754)

연락처가 만들어질 때 첫 기여와 최신 기여는 이렇게 정해져요.

```
- 첫 기여: 연락처의 첫 상호작용이 시스템에 기록된 것이에요. 보통 웹사이트를 처음 방문했거나, 위에 나온 소스 중 하나와 상호작용한 때예요.

- 최신 기여: 연락처가 시스템에 등록되기 직전의 마지막 상호작용이에요.
```

## 어트리뷰션 소스 유형

연락처의 **첫 번째 어트리뷰션** 또는 **최근 어트리뷰션** 값에는 **어트리뷰션 소스**로 아래 중 하나가 표시돼요. 각 소스를 차례로 살펴볼게요.

- **Paid Search**(유료 검색)
- **Paid Social**(유료 소셜)
- **다이렉트 트래픽**
- **오가닉 검색**
- **소셜 미디어**
- **Referrals**(다른 사이트에서 유입)
- **기타**
- **CRM 화면**
- **타사**

![어트리뷰션 소스 유형 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015178854/original/LaAFs5bfFxyo0Su56GWkBEkyyD7o2l6oQA.png?1702496706)

### Paid Search(Google Ads)

**Paid Search**로 분류되는 트래픽은 Google AdWords 같은 유료 검색 캠페인에서 들어온 트래픽이에요. Google 광고 리포팅을 분석할 때 도움이 돼요.

UTM 파라미터가 정확히 일치해야 해요. 대소문자도 구분해요.

```
{YourLandingPageUrl.com}?utm_source=adwords&utm_medium={adname}&utm_campaign={campaignname}&utm_content={adgroupname}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}
```

Google Ads UTM 파라미터

| 이름 | 키 | 값 | 유형 | 예시 |
| --- | --- | --- | --- | --- |
| UTM Source | utm_source | adwords |  |  |
| UTM Medium | utm_medium | {adname} |  |  |
| UTM Campaign | utm_campaign | {campaignname} | 수동 입력, 변경 가능 | summer_sale |
| UTM Content | utm_content | {adgroupname} |  |  |
| Match Type | utm_matchtype | {matchtype} |  |  |
| Campaign ID | campaign_id | {adgroupid} | Google Ads에서 설정, 고정 | 123456789 |
| Ad Group ID | ad_group_id | {adgroupid} |  |  |
| Ad ID | ad_id | {creative} |  |  |

자세한 내용은 [Google 광고 리포팅 설정하기](how-to-set-up-google-ad-reporting.md)를 참고하세요.

### Paid Social

**Paid Social**로 분류되는 트래픽은 유료 소셜 캠페인에서 들어온 트래픽이에요. 리드가 Facebook에서 들어온다면 Facebook 광고 리포팅을 분석할 때 도움이 돼요.

UTM 파라미터가 정확히 일치해야 해요. 대소문자도 구분해요.

```
{YourLandingPageUrl.com}?utm_source=fb_ad&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&campaign_id={{campaign.id}}
```

Facebook·Instagram 광고 UTM 파라미터

| 이름 | 키 | 값 | 유형 | 예시 |
| --- | --- | --- | --- | --- |
| UTM Source | utm_source | fb_ad |  |  |
| UTM Medium | utm_medium | {{adset.name}} |  |  |
| UTM Campaign | utm_campaign | {{campaign.name}} | 수동 입력, 변경 가능 | summer_sale |
| UTM Content | utm_content | {{ad.name}} |  |  |
| Campaign ID | campaign_id | {{campaign.id}} | Facebook Ads에서 설정, 고정 | 123456789 |

자세한 내용은 [Facebook 광고 리포팅 설정하기](추적-어트리뷰션/how-to-set-up-facebook-ad-reporting.md)를 참고하세요.

### 다이렉트 트래픽

**다이렉트 트래픽**으로 분류되는 트래픽은 어디에서 왔는지 알 수 있는 표시가 없어요(위 8번 행 참고). 보통 브라우저에 URL을 직접 입력했거나, 사이트에 들어오기 전에 쿼리 파라미터를 모두 지운 경우예요.

이런 방문자의 출처 URL을 보려면 **다이렉트 트래픽** 소스를 클릭하세요.

![다이렉트 트래픽 소스를 클릭해 출처 URL을 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247964541/original/eIy9MeT34UCvxRzk02GYCS7qwWMvBizWbQ.gif?1661800923)

### 오가닉 검색

**오가닉 검색**으로 분류되는 트래픽은 Google, Bing, Yahoo, DuckDuckGo 같은 검색 엔진의 무료 검색 결과에서 들어온 트래픽이에요.

검색 엔진에서 사용한 키워드를 보려면 소스 표에서 **오가닉 검색** 소스를 클릭하세요.

키워드가 '알 수 없음(SSL)'으로 나오는 경우가 있어요. 검색 엔진이 사용자 데이터를 암호화하기 때문일 가능성이 커요. 예를 들어 Google은 사용자가 입력한 검색어를 모두 암호화해요.

### 소셜 미디어

**오가닉 소셜**로 분류되는 트래픽은 소셜 미디어 웹사이트나 앱에서 들어온 트래픽이에요. 예를 들어 방문자가 내 콘텐츠나 웹사이트를 자기 소셜 미디어 계정에 공유하고, 팔로워가 그 콘텐츠를 보거나 게시물 속 링크를 방문하는 경우예요.

### Referrals

**Referrals**로 분류되는 트래픽은 내 웹사이트로 연결되는 링크가 있는 외부 사이트에서 들어온 트래픽이에요. 검색 엔진이나 소셜 미디어 사이트는 해당하지 않아요. 하나의 유입 도메인에 내 사이트로 연결되는 페이지가 여러 개 있을 수도 있어요.

### 기타

수신 전화, SMS, 이메일, WhatsApp 메시지, Facebook 메시지 등 여러 채널로 리드가 생길 때는 모든 정보를 한곳에 보여 주는 것이 중요해요. 그래야 모든 리드를 추적하고 놓치는 리드가 없도록 할 수 있어요. 리드를 한곳에서 관리하면 잠재 고객을 놓치지 않을 수 있어요.

### CRM 화면

하이퍼클래스 CRM에서 리드를 직접 만들면 그 리드의 소스는 **CRM 화면**으로 정해져요. 이 분류로 하이퍼클래스 CRM 안에서 직접 만든 리드만 따로 구분할 수 있어요.

### 타사

Zap(Zapier) 같은 타사 도구로 리드가 만들어지면 그 리드의 소스는 **타사**로 정해져요. 이 분류로 타사 연동을 통해 만들어진 리드를 구분할 수 있어요.

## 어떤 이벤트가 어트리뷰션을 기록하나요?

같은 세션 안에서 연락처가 아래 동작 중 하나 이상을 해야 해요.

1. 폼/설문 제출
2. 캘린더 예약 제출
3. **채팅 위젯**(연락처 정보를 제출한 뒤)
4. 주문 폼 제출(원스텝 또는 투스텝)

하이퍼클래스의 폼, 설문, 캘린더, **채팅 위젯**, 주문 폼은 연락처가 지원되는 동작을 마치면 어트리뷰션 데이터를 수집해요.

지원되는 타사 폼도 **외부 트래킹**으로 추적하면 어트리뷰션 데이터를 수집할 수 있어요. **외부 트래킹**은 지원되는 DOM 기반 폼을 자동으로 감지하고, UTM 파라미터, 페이지 URL, 세션 데이터 같은 어트리뷰션 데이터를 수집해요.

설정 요건과 지원되는 폼 유형은 외부 폼 추적 문서를 참고하세요.

## 어트리뷰션 소스는 어떻게 정해지나요?

하이퍼클래스가 연락처에 어트리뷰션 소스를 왜 그렇게 붙였는지 알고 싶다면, 판단 기준을 알아야 해요.

모든 어트리뷰션 이벤트는 트래픽을 특정 소스로 분류하는 규칙을 따라요. 전체 페이지 URL과 유입 도메인(있는 경우)을 이 규칙에 하나씩 대조해요.

규칙은 아래 순서대로 적용돼요.

| 순서 | 규칙 | 소스 |
| --- | --- | --- |
| 1 | Google 광고인 경우 `utm_source` 파라미터에 "adwords"라는 단어가 들어 있어요. | **Paid Search** |
| 2 | Google 클릭 ID인 `gclid`, `wbraid`, `gbraid` 파라미터가 있어요.<br>Bing/Yahoo의 Microsoft 클릭 ID인 `msclkid` 파라미터가 있어요. | **Paid Search** |
| 3 | `utm_source`, `utm_medium`, `utm_campaign` 파라미터가 있고 유입 도메인이 google.com이에요. | **Paid Search** |
| 4 | Facebook 광고인 경우 `utm_source` 파라미터에 "fb_ad"라는 단어가 들어 있어요. `utm_source=facebook`은 더 이상 지원하지 않으니 "fb_ad"를 사용하세요.<br>LinkedIn 광고는 `utm_source`에 "linkedin_ad", Twitter 광고는 "twitter_ad", Reddit 광고는 "reddit_ad"가 들어 있어요.<br>WhatsApp 대화에는 `ctwa_clid` 파라미터가 있어요. | **Paid Social** |
| 5 | 유입 도메인이 소셜 미디어 사이트예요. | **소셜 미디어** |
| 6 | 유입 도메인이 검색 엔진이에요(Google, Yahoo, Bing, DuckDuckGo). | **오가닉 검색** |
| 7 | 유입 도메인이 소셜 미디어 사이트도 검색 엔진도 아니에요. | **Referrals** |
| 8 | 유입 도메인도 추적 URL도 없어요. | **다이렉트 트래픽** |
| 9 | 리드가 수신 전화/SMS/이메일/WhatsApp/Facebook 메시지로 들어왔거나, 위에 해당하지 않는 다른 경로로 들어왔을 때 표시돼요. | **기타** |
| 10 | CRM 시스템 안에서 리드를 직접 만들었어요. | **CRM 화면** |
| 11 | Zap(Zapier) 같은 타사 연동 도구로 리드가 만들어졌어요. | **타사** |

하이퍼클래스가 어트리뷰션 소스를 정하는 방식을 확인했어요. 이제 각 소스를 하나씩 함께 살펴봐요.

## 광고 리포팅 설정

유료 광고의 어트리뷰션 추적을 설정하려면 아래 Facebook, Instagram, Google 광고 설정 문서를 참고하세요.

### Facebook·Instagram 광고 리포팅 설정

Facebook과 Instagram 광고 어트리뷰션을 설정하려면 [Facebook 광고 리포팅 설정하기](추적-어트리뷰션/how-to-set-up-facebook-ad-reporting.md)를 확인하세요.

Facebook 광고 관련 추가 자료

- [Facebook 전환 API용 퍼널 이벤트 픽셀 설정하기](../42-통합/Facebook-Integration/how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api.md)
- [Meta 픽셀 설정 및 설치 방법](https://www.facebook.com/business/help/952192354843755?id=1205376682832142)
- [Facebook 전환 리드 둘러보기](../42-통합/Facebook-Integration/facebook-conversion-leads-walkthrough.md)
- [워크플로우의 Facebook 전환 API 트리거](../42-통합/Facebook-Integration/facebook-conversions-api-trigger-in-workflows.md)

### Google 광고 리포팅 설정

Google 광고 어트리뷰션을 설정하려면 [Google 광고 리포팅 설정하기](how-to-set-up-google-ad-reporting.md)를 확인하세요.

Google 광고 관련 추가 자료

- [Google Analytics 4 추적](추적-어트리뷰션/google-analytics-4-tracking.md)
- [Google 광고 리포팅 용어 이해하기](understanding-google-ad-reporting-terminology.md)
- [Google 광고 리포팅 문제 해결 가이드](troubleshoot-guide-for-google-ad-reporting.md)

추가 도움이 필요하면 하이퍼클래스 고객지원에 24시간 문의할 수 있어요. 외부 리포팅과 어트리뷰션 추적처럼 더 고급 설정이 필요하면 광고 전문가와 상의해야 할 수도 있어요.

## 광고 리포팅 문제 해결

[Facebook·Instagram 광고 리포팅](추적-어트리뷰션/how-to-set-up-facebook-ad-reporting.md)이나 [Google 광고 리포팅](how-to-set-up-google-ad-reporting.md)을 설정했는데도 어트리뷰션 데이터가 하이퍼클래스에 기록되지 않는다면 아래 순서로 확인해 보세요.

1. 최종 URL에 공백이나 오타가 없는지 확인하세요.

   UTM 파라미터를 만들 때 오타, 복사하면서 생긴 불필요한 공백, 대소문자를 꼭 확인하세요. 안내에 나온 예시를 그대로 복사해 붙여 넣는 것이 가장 좋아요. 제대로 입력했는지 한 번 더 확인하세요. 예시는 대소문자를 구분하기 때문에, 대문자나 소문자가 잘못 들어가면 어트리뷰션에 오류가 생겨요.

   최종 URL은 연락처가 광고에서 클릭하는 URL이에요. 이 URL을 통해 내 사이트나 폼에서 다음 동작을 하게 돼요.

2. 제출이 최종 URL 페이지에서 이뤄지는지 확인하세요.

   UTM 파라미터가 기록되려면 광고를 통해 들어온 사용자가 그 페이지를 벗어나지 않아야 해요. 예를 들어 사용자가 페이지에 들어온 뒤 버튼을 눌러 다른 페이지로 이동해서 폼을 제출하면, UTM의 어트리뷰션 데이터를 추가할 수 없어요. 그래서 사용자가 폼을 작성할 때까지 이 페이지에 머물게 해야 해요.

   팝업이나 제출 폼이 있는 섹션을 추가하면 데이터를 수집할 수 있어요.

3. Facebook, Instagram, Google 광고에 커스텀 UTM 파라미터를 추가하지 마세요. 설정 안내에 나온 하이퍼클래스 UTM 템플릿을 그대로 사용하세요.

   설정 가이드에 나온 템플릿 예시에 커스텀 UTM 파라미터를 더하지 마세요. 문제가 생겨서 데이터가 누락되거나 아무 데이터도 기록되지 않을 수 있어요.
