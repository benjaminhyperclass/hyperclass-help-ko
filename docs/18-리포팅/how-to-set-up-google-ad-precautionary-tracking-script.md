---

번역일: 2026-04-06
카테고리: 18-리포팅
---

# 구글 광고 보조 추적 스크립트 설정하는 방법

이 글에서 다루는 내용:

#### [](#How-to-set-up-Google-Ad-Precautionary-Tracking-Script)

[구글 광고 보조 추적 스크립트 설정하는 방법](#구글-광고-보조-추적-스크립트-설정하는-방법)

[1단계: 구글 광고 계정에 접속하기](#1단계-구글-광고-계정에-접속하기)

[2단계: 도구 및 설정 > 일괄 작업 > 스크립트 클릭하기 (아래 이미지 참조)](#2단계-도구-및-설정--일괄-작업--스크립트-클릭하기-아래-이미지-참조)%C2%A0)

[3단계: 기본 코드를 삭제하고 이 스크립트를 추가하기](#3단계-기본-코드를-삭제하고-이-스크립트를-추가하기)

[**4단계:** 스크립트 이름을 변경하고 빈도를 시간별로 설정하기](#Step-4%3A%C2%A0After-closing,-we-need-to-change-the-name-of-the-script-and-change-the-frequency-from-the-list-to-the-Hourly-view.)

[자주 묻는 질문](#자주-묻는-질문)

- [다른 스크립트가 있으면 영향을 받나요?](#다른-스크립트가-있으면-영향을-받나요)
- [왜 승인이 필요한가요?](#왜-승인이-필요한가요)

## 구글 광고 보조 추적 스크립트 설정하는 방법

이 스크립트는 구글 광고 보조 추적 코드를 설정하는 간단한 예시입니다.

#### 이 스크립트는 UTM 템플릿이 어트리뷰션 데이터 수집에 실패할 경우를 대비한 안전장치 역할을 합니다.

특정 링크의 모든 클릭을 추적하여 구글 애널리틱스로 전송합니다. 이 스크립트에서 변경해야 할 것은 추적 페이지의 URL뿐이며, 이는 웹사이트에서 사용하는 URL과 일치해야 합니다.

## 1단계: 구글 광고 계정에 접속하기

## 2단계: 도구 및 설정 > 일괄 작업 > 스크립트 클릭하기 (아래 이미지 참조)

![구글 광고 도구 및 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241977655/original/vEEGwa2QwMlESew_jEuLDUxkpD7wzoHZ3w.png?1659117941)

참고사항:

만약 해당 메뉴를 찾을 수 없다면, 고급 보기로 전환하여 도구 및 설정 옵션을 확인해 보세요.

## 3단계: 기본 코드를 삭제하고 이 스크립트를 추가하기

```javascript
function main() {    var TrackingTemplate = "{lpurl}?utm_source=adwords&utm_medium={AdName}&utm_campaign={CampaignName}&utm_content={AdGroupName}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}";    var _CAMPAIGN_CONTAINS = "";    var _ADGROUP_CONTAINS = "";    var STATUS = "ENABLED";    if (TrackingTemplate.search(/{AdGroupName}|{CampaignName}|{AdName}/g) == -1) {        Logger.log("Enter at least one of the {CampaignName} or {AdGroupName} or {AdName} parameter in the tracking template");        return    }        if (TrackingTemplate.search("{AdGroupName}") > 0) {        var adgroupIterator = {            hasNext: function() {                return false            }        }        if (_ADGROUP_CONTAINS == "" && _CAMPAIGN_CONTAINS == "") {            adgroupIterator = AdsApp.adGroups().withCondition("Status = " +  STATUS).get();        } else if (_ADGROUP_CONTAINS == "" && _CAMPAIGN_CONTAINS !== "") {            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + _CAMPAIGN_CONTAINS + "'").withCondition("Status = " + STATUS).get();        } else if (_ADGROUP_CONTAINS !== "" && _CAMPAIGN_CONTAINS !== "") {            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + _CAMPAIGN_CONTAINS + "'").withCondition("Name contains '" + _ADGROUP_CONTAINS + "'").withCondition("Status = " + STATUS).get();        } else if (_ADGROUP_CONTAINS !== "" && _CAMPAIGN_CONTAINS == "") {            adgroupIterator = AdsApp.adGroups().withCondition("Name contains '" + _ADGROUP_CONTAINS + "'").withCondition("Status = " + STATUS).get();        }        if (!adgroupIterator.hasNext()) {            Logger.log("No Campaigns/Adgroups matched with this condition");            return        }        while (adgroupIterator.hasNext()) {            var adgroup = adgroupIterator.next();            var adgrouptemplate = TrackingTemplate.replace(/{AdGroupName}/g, adgroup.getName().replace(/\s/g, '%20'))            if (TrackingTemplate.search("{CampaignName}") > 0) {                adgrouptemplate = adgrouptemplate.replace(/{CampaignName}/g, adgroup.getCampaign().getName().replace(/\s/g, '%20'))            }            if (TrackingTemplate.search("{AdName}") > 0) {                var adsIterator = adgroup.ads().get();                while (adsIterator.hasNext()) {                  var ad = adsIterator.next();                  var adType = ad.getType();                  var headline = "";                  if (ad.getHeadline()) {                    headline = ad.getHeadline();                  } else if(ad.isType().expandedTextAd()) {                    headline = ad.asType().expandedTextAd().getHeadlinePart1();                  } else if(ad.isType().gmailImageAd()) {                    headline = ad.asType().gmailImageAd().getName();                  } else if(ad.isType().gmailMultiProductAd()) {                    headline = ad.asType().gmailMultiProductAd().getHeadline();                  } else if(ad.isType().gmailSinglePromotionAd()) {                    headline = ad.asType().gmailSinglePromotionAd().getHeadline();                  } else if(ad.isType().html5Ad()) {                    headline = ad.asType().html5Ad().getName();                  } else if(ad.isType().imageAd()) {                    headline = ad.asType().imageAd().getName();                  } else if(ad.isType().responsiveDisplayAd()) {                    headline = ad.asType().responsiveDisplayAd().getShortHeadline();                  } else if(ad.isType().responsiveSearchAd()) {                    var headlines = ad.asType().responsiveSearchAd().getHeadlines();                    if (headlines && headlines[0].text) {                      headline = headlines[0].text;                    }                  }                  Logger.log("Headline text : " + headline);                  if (headline) {                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, headline.replace(/\s/g, '%20'))                  } else {                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, ad.getId())                  }                }            }            adgroup.urls().setTrackingTemplate(adgrouptemplate);            Logger.log(adgroup.getCampaign().getName() + " => " + adgroup.getName() + " => " + adgrouptemplate)        }
    }
}
```

## 4단계: 스크립트 이름을 변경하고 **빈도**를 목록에서 **시간별**로 변경하기

![스크립트 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248384457/original/eWel0Kfb1IBQoxSSLIJ2-oWLVw2oYZZ-_g.png?1661957147)

# 자주 묻는 질문

### 다른 스크립트가 있으면 영향을 받나요?

네, UTM 매개변수에 영향을 주므로 스크립트가 서로 겹쳐서 실행될 수 있습니다.

### 왜 승인이 필요한가요?

스크립트가 구글 광고 계정에 구현되기 때문에 승인이 필요합니다. 실행하기 전에 미리보기를 확인하는 것이 필요하며, 대부분의 캠페인이 성공적으로 랜딩 페이지를 찾은 것으로 표시되어야 합니다.

---
*원문 최종 수정: Wed, 14 Sep, 2022 at 11:55 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*