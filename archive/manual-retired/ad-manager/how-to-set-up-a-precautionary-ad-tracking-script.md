---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007632-how-to-set-up-a-precautionary-ad-tracking-script
번역일: 2026-04-23
카테고리: ad-manager
---

# 예방적 광고 추적 스크립트 설정 방법

예방적 광고 추적 스크립트를 추가하면 기본 추적 템플릿이 제대로 적용되지 않을 때 어트리뷰션 데이터를 보호할 수 있습니다. 이 스크립트는 자동으로 추적 매개변수를 적용하는 백업 역할을 하여 캠페인 데이터의 정확성과 신뢰성을 보장합니다.

---

**목차**

- [스크립트의 역할](#스크립트의-역할)
- [시작하기 전에](#시작하기-전에)
- [예방적 추적 스크립트 설정 방법](#예방적-추적-스크립트-설정-방법)
- [중요한 이유](#중요한-이유)
- [자주 묻는 질문](#자주-묻는-질문)
- [도움이 필요하신가요?](#도움이-필요하신가요)

---

## 스크립트의 역할

예방적 추적 스크립트는 캠페인 추적에 추가적인 보호 계층을 제공합니다.

기본 추적 설정에만 의존하지 않고, 이 스크립트는 문제가 발생하더라도 추적 매개변수가 계속 적용되도록 보장합니다. 이를 통해:

- 어트리뷰션 데이터 보존
- 정확한 리포팅 유지
- 캠페인 추적의 공백 줄이기
- 전반적인 데이터 신뢰성 향상

스크립트는 캠페인, 광고 그룹, 광고 수준 데이터를 사용하여 추적 템플릿을 동적으로 업데이트하며, 모든 캠페인에서 일관성을 보장합니다.

---

## 시작하기 전에

스크립트를 설정하기 전에 다음 사항을 확인하세요:

- 광고 플랫폼 계정 접근 권한
- 스크립트 생성 또는 편집 권한
- 올바른 랜딩 페이지 또는 추적 URL
- 스크립트가 기존 추적 설정에 영향을 줄 수 있다는 점 인지

또한 스크립트를 활성화하기 전에 미리보기와 승인을 완료하는 것이 중요합니다.

---

## **예방적 추적 스크립트 설정 방법**

### **스크립트 섹션 열기**

광고 플랫폼 계정에 로그인하고 스크립트 영역으로 이동하세요.

- **Tools and Settings(도구 및 설정)** 열기
- **Bulk Actions(일괄 작업)** 이동
- **Scripts(스크립트)** 선택

여기서 추적 스크립트를 생성하고 관리할 수 있습니다.

### 추적 스크립트 추가

새 스크립트를 만들거나 기존 스크립트를 편집하세요.

플레이스홀더 코드를 제거하고 다음 스크립트를 붙여넣으세요:

```javascript
function main() {    var TrackingTemplate = "{lpurl}?utm_source=adwords&utm_medium={AdName}&utm_campaign={CampaignName}&utm_content={AdGroupName}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}";     var _CAMPAIGN_CONTAINS = "";    var _ADGROUP_CONTAINS = "";    var STATUS = "ENABLED";     if (TrackingTemplate.search(/{AdGroupName}|{CampaignName}|{AdName}/g) == -1) {        Logger.log("Enter at least one required parameter");        return    }     var adgroupIterator = AdsApp.adGroups().withCondition("Status = " + STATUS).get();     while (adgroupIterator.hasNext()) {        var adgroup = adgroupIterator.next();        var template = TrackingTemplate            .replace(/{AdGroupName}/g, adgroup.getName().replace(/\s/g, '%20'))            .replace(/{CampaignName}/g, adgroup.getCampaign().getName().replace(/\s/g, '%20'));         adgroup.urls().setTrackingTemplate(template);    } }
```

스크립트 내의 랜딩 페이지 URL이 웹사이트와 일치하는지 확인하세요.

### 스크립트 이름 지정 및 일정 설정

저장한 후:

- 스크립트에 명확한 이름을 지정하세요 (예: *추적 백업 스크립트*)
- 빈도를 **매시간(Hourly)**으로 설정하세요

스크립트를 매시간 실행하면 추적이 지속적으로 업데이트되고 일관성이 유지됩니다.

### 미리보기, 승인 및 활성화

스크립트를 활성화하기 전에:

- **미리보기(Preview)**를 실행하여 캠페인을 올바르게 감지하는지 확인
- 로그를 검토하여 오류가 없는지 확인
- **승인 프로세스(Authorization process)** 완료
- 스크립트 활성화

미리보기를 통해 실제 변경사항을 적용하기 전에 문제를 예방할 수 있습니다.

---

## **중요한 이유**

백업 시스템 없이는 누락되거나 손상된 추적 템플릿으로 인해 부정확한 데이터가 발생할 수 있습니다.

이 스크립트는 다음과 같은 도움을 줍니다:

- 어트리뷰션 정확도 보호
- 일관된 캠페인 추적 보장
- 리포팅 신뢰성 향상
- 수동 문제 해결 작업 감소

---

## **자주 묻는 질문**

**Q: 기존 스크립트에 영향을 주나요?**

네, 스크립트는 추적 설정에 영향을 줄 수 있습니다. 활성화하기 전에 현재 설정을 항상 검토하세요.

**Q: 승인이 필요한 이유는 무엇인가요?**

스크립트가 광고 계정 내에서 변경사항을 적용하기 때문에 승인이 필요합니다.

**Q: 스크립트를 먼저 미리보기해야 하나요?**

네. 미리보기를 통해 실제 변경사항을 적용하기 전에 모든 것이 올바르게 작동하는지 확인할 수 있습니다.

**Q: 스크립트에서 무엇을 업데이트해야 하나요?**

랜딩 페이지 URL과 추적 매개변수가 설정과 일치하는지 확인하세요.

**Q: 원래 추적 템플릿이 여전히 필요한가요?**

네. 이 스크립트는 백업이지 대체재가 아닙니다.

---

## **도움이 필요하신가요?**

추적 설정을 검토하거나 스크립트 구성을 검증하는 데 도움이 필요하시면, 도움말 센터를 열거나 지원팀에 문의하세요.

---
*원문 최종 수정: 2026년 4월 11일*
*Hyperclass 사용 가이드 — hyperclass.ai*