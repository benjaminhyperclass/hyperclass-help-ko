---
원문: /support/solutions/articles/48001219356-how-to-set-up-google-ad-precautionary-tracking-script
번역일: 2026-11-06
카테고리: 18-리포팅
---

# Google Ads 예방용 추적 스크립트 설정

Google Ads에 예방용 추적 스크립트를 등록하는 방법을 안내해요. UTM 템플릿이 어트리뷰션 데이터를 수집하지 못할 때를 대비해 쓰는 스크립트예요.

이 스크립트는 Google Ads 예방용 추적 코드를 설정하는 간단한 예시예요. UTM 템플릿이 어트리뷰션 데이터를 수집하지 못하면 대신 그 역할을 해요.

특정 링크에서 일어나는 모든 클릭을 추적해서 Google Analytics로 보내요. 이 스크립트에서 바꿔야 할 것은 추적 페이지의 URL뿐이에요. 웹사이트에서 쓰는 URL과 같아야 해요.

## 1단계. Google Ads 계정에 접속하세요

Google Ads 계정에 로그인하세요.

## 2단계. 스크립트 메뉴로 이동하세요

**Tools and Settings**(도구 및 설정) > **일괄 작업** > **스크립트**를 차례로 클릭하세요. 아래 이미지를 참고하세요.

![Google Ads의 도구 및 설정 메뉴에서 스크립트로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241977655/original/vEEGwa2QwMlESew_jEuLDUxkpD7wzoHZ3w.png?1659117941)

{% hint style="info" %}
메뉴가 보이지 않으면 **advanced view**(고급 보기)로 전환해 보세요. 그러면 **Tools and Settings** 메뉴가 나타나요.
{% endhint %}

## 3단계. 기본 코드를 지우고 아래 스크립트를 붙여 넣으세요

미리 입력되어 있는 코드를 지운 다음, 아래 스크립트를 붙여 넣으세요.

```
function main() {  
    var TrackingTemplate = "{lpurl}?utm_source=adwords&utm_medium={AdName}&utm_campaign={CampaignName}&utm_content={AdGroupName}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}";  
  
  
    var _CAMPAIGN_CONTAINS = "";  
    var _ADGROUP_CONTAINS = "";  
    var STATUS = "ENABLED";  
  
  
    if (TrackingTemplate.search(/{AdGroupName}|{CampaignName}|{AdName}/g) == -1) {  
        Logger.log("Enter at least one of the {CampaignName} or {AdGroupName} or {AdName} parameter in the tracking template");  
        return  
    }  
      
    if (TrackingTemplate.search("{AdGroupName}") > 0) {  
        var adgroupIterator = {  
            hasNext: function() {  
                return false  
            }  
        }  
        if (_ADGROUP_CONTAINS == "" && _CAMPAIGN_CONTAINS == "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("Status = " +  STATUS).get();  
        } else if (_ADGROUP_CONTAINS == "" && _CAMPAIGN_CONTAINS !== "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + _CAMPAIGN_CONTAINS + "'").withCondition("Status = " + STATUS).get();  
        } else if (_ADGROUP_CONTAINS !== "" && _CAMPAIGN_CONTAINS !== "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + _CAMPAIGN_CONTAINS + "'").withCondition("Name contains '" + _ADGROUP_CONTAINS + "'").withCondition("Status = " + STATUS).get();  
        } else if (_ADGROUP_CONTAINS !== "" && _CAMPAIGN_CONTAINS == "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("Name contains '" + _ADGROUP_CONTAINS + "'").withCondition("Status = " + STATUS).get();  
        }  
  
  
        if (!adgroupIterator.hasNext()) {  
            Logger.log("No Campaigns/Adgroups matched with this condition");  
            return  
        }  
        while (adgroupIterator.hasNext()) {  
            var adgroup = adgroupIterator.next();  
            var adgrouptemplate = TrackingTemplate.replace(/{AdGroupName}/g, adgroup.getName().replace(/\s/g, '%20'))  
            if (TrackingTemplate.search("{CampaignName}") > 0) {  
                adgrouptemplate = adgrouptemplate.replace(/{CampaignName}/g, adgroup.getCampaign().getName().replace(/\s/g, '%20'))  
            }  
  
  
            if (TrackingTemplate.search("{AdName}") > 0) {  
                var adsIterator = adgroup.ads().get();  
                while (adsIterator.hasNext()) {  
                  var ad = adsIterator.next();  
                  var adType = ad.getType();  
                  var headline = "";  
  
  
                  if (ad.getHeadline()) {  
                    headline = ad.getHeadline();  
                  } else if(ad.isType().expandedTextAd()) {  
                    headline = ad.asType().expandedTextAd().getHeadlinePart1();  
                  } else if(ad.isType().gmailImageAd()) {  
                    headline = ad.asType().gmailImageAd().getName();  
                  } else if(ad.isType().gmailMultiProductAd()) {  
                    headline = ad.asType().gmailMultiProductAd().getHeadline();  
                  } else if(ad.isType().gmailSinglePromotionAd()) {  
                    headline = ad.asType().gmailSinglePromotionAd().getHeadline();  
                  } else if(ad.isType().html5Ad()) {  
                    headline = ad.asType().html5Ad().getName();  
                  } else if(ad.isType().imageAd()) {  
                    headline = ad.asType().imageAd().getName();  
                  } else if(ad.isType().responsiveDisplayAd()) {  
                    headline = ad.asType().responsiveDisplayAd().getShortHeadline();  
                  } else if(ad.isType().responsiveSearchAd()) {  
                    var headlines = ad.asType().responsiveSearchAd().getHeadlines();  
                    if (headlines && headlines[0].text) {  
                      headline = headlines[0].text;  
                    }  
                  }  
  
  
                  Logger.log("Headline text : " + headline);  
  
  
                  if (headline) {  
                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, headline.replace(/\s/g, '%20'))  
                  } else {  
                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, ad.getId())  
                  }  
                }  
            }  
            adgroup.urls().setTrackingTemplate(adgrouptemplate);  
            Logger.log(adgroup.getCampaign().getName() + " => " + adgroup.getName() + " => " + adgrouptemplate)  
        }
    }
}
```

## 4단계. 스크립트 이름과 실행 빈도를 바꾸세요

창을 닫은 뒤 스크립트 이름을 바꾸세요. 그리고 **frequency**(빈도)를 목록에서 **Hourly**(매시간)로 바꾸세요.

![스크립트 이름과 실행 빈도를 매시간으로 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248384457/original/eWel0Kfb1IBQoxSSLIJ2-oWLVw2oYZZ-_g.png?1661957147)

## 자주 묻는 질문

### 다른 스크립트를 이미 쓰고 있으면 영향이 있나요?

네, 영향이 있을 수 있어요. 이 스크립트가 UTM 파라미터에 영향을 주기 때문에 기존 스크립트를 덮어쓸 수 있어요.

### 스크립트를 왜 승인해야 하나요?

스크립트가 Google Ads 계정에 적용되기 때문에 승인이 필요해요. 실행하기 전에 미리보기를 확인해야 해요. 미리보기에서 대부분의 캠페인이 랜딩 페이지를 찾아 성공으로 표시되어야 해요.
