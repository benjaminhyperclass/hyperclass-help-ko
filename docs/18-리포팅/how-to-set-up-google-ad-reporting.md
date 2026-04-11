---

번역일: 2026-04-06
카테고리: 18-리포팅
---

# Google 광고 리포팅 설정하는 방법

Google 광고 리포팅은 고객의 디지털 광고 캠페인에 대한 실시간 리포팅과 분석을 제공합니다. Google 광고 리포팅을 위한 필수 설정 가이드라인을 안내해드리겠습니다.

이 문서에서 다루는 내용:

[1단계 - 연동에서 올바른 Google 광고 계정 선택하기](#1단계-연동에서-올바른-google-광고-계정-선택하기)

[2단계 - 올바른 MCC 계정 ID와 클라이언트 계정 ID 선택하기](#2단계-올바른-mcc-계정-id와-클라이언트-계정-id-선택하기)

[3단계 - Google 광고 계정에 UTM 템플릿 추가하기](#3단계-google-광고-계정에-utm-템플릿-추가하기)

- [예시](#예시)

[4단계: 예방 조치용 스크립트 추가하기 (도움말 문서 참조)](#4단계-예방-조치용-스크립트-추가하기-도움말-문서-참조)

[주의사항](#주의사항)

## 1단계 - 연동에서 올바른 Google 광고 계정 선택하기

연결된 Google 계정을 가진 사용자는 [관리자](https://support.google.com/admanager/answer/177403) 또는 [Google 광고 계정 관리자 권한](https://support.google.com/google-ads/answer/6139186#MCC_invite)을 가진 사용자로서 최대 권한을 가져야 합니다.

## 2단계 - 올바른 MCC 계정 ID와 클라이언트 계정 ID 선택하기

MCC 계정은 My Client Centre의 줄임말로, Google 광고 관리자 계정으로도 알려져 있으며 여러 클라이언트의 Google 광고 계정을 관리합니다.

![MCC 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241723515/original/cpKfLamkhGxOwB2benWY2aBbeModkz311w.png?1659031538)

### MCC ID는 우상단 모서리에 표시됩니다.

![MCC ID 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248202783/original/2kB4rlhnXyUOvhwIOf5AADT7gZ7J91IbsQ.png?1661885519)

### 클라이언트 계정 ID는 도움말 섹션을 클릭하면 확인할 수 있습니다

![클라이언트 계정 ID 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241724794/original/41FtCevRGsKvW2aJupKjPEfYRnjb_h9fcA.png?1659031996)

## 3단계 - Google 광고 계정에 UTM 템플릿 추가하기

UTM 추적 템플릿은 세 곳에 추가할 수 있습니다. 계정 설정, 캠페인 설정, 또는 광고 그룹 수준에서 추가할 수 있으며, 계정 수준 설정에서 UTM 템플릿을 추가하는 것을 권장합니다.

### UTM 추적 템플릿 (복사해서 사용하세요)

{lpurl}?utm_source=adwords&utm_medium={adname}&utm_campaign={campaignname}&utm_content={adgroupname}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}

### 작동 방식

추적 템플릿은 {lpurl}과 같이 최종 URL을 삽입하는 [ValueTrack 매개변수](https://support.google.com/google-ads/answer/6305348?hl=en#urlinsertion)를 포함해야 합니다.

광고가 클릭되면 이러한 매개변수가 최종 URL을 삽입합니다. 추적 템플릿에 URL 삽입 매개변수를 포함하지 않으면 랜딩 페이지 URL이 작동하지 않습니다.

하나의 URL에 둘 이상의 [ValueTrack 매개변수](https://support.google.com/google-ads/answer/6305348?hl=en#urlinsertion)를 추가하려면 앰퍼샌드(&)를 사용하여 URL에 함께 연결하면 됩니다. 예: {lpurl}?matchtype={matchtype}&device={device}

캠페인, 광고 그룹, 광고 및 확장 수준에서 ValueTrack 매개변수로 추적 템플릿을 설정하거나 편집하려면 - [이 문서를 참조하세요](https://support.google.com/google-ads/answer/6305348?hl=en#zippy=%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-ad-group-level%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-ads-extensions-level%2Cfinal-url-tracking-template-or-custom-parameter%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-sitelink-level)

## 예시

### 최종 URL: [http://example.com](http://example.com)

추적 템플릿: {lpurl}?utm_source=adwords&utm_medium={adname}&utm_campaign={campaignname}&utm_content={adgroupname}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}

광고 클릭 후 랜딩 페이지 URL:

{lpurl}?utm_source=adwords&utm_medium=black_friday&utm_campaign=blackday10&utm_content=marketingbanner&utm_keyword=getdiscounteddeal&utm_matchtype=e&campaign_id=12345&ad_group_id=2394984903&ad_id=93844980940&gclid=84843ewhfb834nedhj4u49

### Google 광고 계정 > 계정 설정 > 추적으로 이동하세요 (아래 이미지 참조)

![Google 광고 계정 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241751601/original/EXs2wVlSlNDgpnZygMVfKqT4A5Kzxz5wAw.png?1659042898)

### 위의 추적 템플릿 URL을 아래 "추적 템플릿" 필드에 붙여넣으세요.

![추적 템플릿 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241751703/original/FzN2NCdQqsIInlAJVnvV2WbbdMb1WoWbRA.png?1659042970)

참고사항:

- 추적 템플릿을 추가한 후 테스트를 실행하면 대부분의 캠페인에서 랜딩 페이지를 찾을 수 있음을 확인할 수 있습니다. 오류가 있는 경우, 활성 캠페인이라면 수정해주세요.
- 이전에는 UTM 소스를 Google(utm_source=google)로 사용했습니다. 이는 더 이상 사용되지 않지만 광고 차단기가 URL을 식별하고 UTM 매개변수를 제거하는 데 사용됩니다.

## 4단계: 예방 조치용 스크립트 추가하기 [(도움말 문서 참조)](how-to-set-up-google-ad-precautionary-tracking-script.md)

스크립트는 Google 광고 예방적 추적 코드를 설정하는 방법의 간단한 예시입니다. 이 스크립트는 UTM 템플릿이 어트리뷰션 데이터 수집에 실패할 경우 안전장치 역할을 합니다.

특정 링크의 모든 클릭을 추적하여 Google Analytics로 전송합니다. 이 스크립트에서 변경해야 할 유일한 요소는 웹사이트에서 사용하는 것과 일치해야 하는 추적 페이지의 URL입니다.

[Google 광고 예방적 추적 스크립트 설정 방법](how-to-set-up-google-ad-precautionary-tracking-script.md)

## 주의사항

1. 캠페인 이름, 광고, 광고 세트는 고유해야 합니다.

2. 캠페인/광고 세트/광고의 수명 동안 이름 매개변수는 변경할 수 없습니다. 이름을 변경해야 하는 경우 문제를 피하기 위해 새 캠페인/광고 세트/광고를 생성하세요.

3. 캠페인/광고 세트/광고의 이름을 변경하고 새 캠페인을 생성하지 않기로 결정한 경우, CRM의 데이터는 계속해서 원래/첫 번째 캠페인을 참조합니다. [Google 광고는 매개변수에서 이전 이름을 제공하여 캠페인 리포팅을 왜곡시킵니다]

4. 좌상단에 목표(Objectives) 드롭다운이 표시됩니다. 이는 광고 캠페인을 만들 때 회사가 이 캠페인에 대해 가졌던 목표를 정의하는 데 도움이 됩니다.

![목표 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249248484/original/BVS_7NnRNEQp3b4qJgSWEcs3kymdNOhDkw.png?1662394187)

---
*원문 최종 수정: Fri, 30 Sep, 2022 at 5:00 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*