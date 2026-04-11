---

번역일: 2026-04-06
카테고리: 리포팅
---

# 구글 광고 리포팅 문제해결 가이드

구글 애드워즈(Google AdWords)는 전 세계에서 가장 인기 있는 광고 플랫폼 중 하나입니다. 비즈니스를 홍보하고 더 많은 트래픽을 얻는 좋은 방법이지만, 이 플랫폼에서 얼마나 잘 성과를 내고 있는지 추적하기는 어려울 수 있습니다.

광고가 어떻게 돌아가고 있는지 알고 싶다면 구글 애드워즈 리포팅을 사용해야 합니다. 이 가이드에서는 구글 광고 설정이 올바르게 되어 있는지 확인하는 몇 가지 문제해결 단계를 보여드립니다.

#### 이 아티클에서 다루는 내용:

#### [구글 광고 리포팅 문제해결 방법](#구글-광고-리포팅-문제해결-방법)

- 
#### [1. 구글 광고 계정 연동이 CRM에 연결되어 있는지 확인하세요](#1-구글-광고-계정-연동이-crm에-연결되어-있는지-확인하세요)

- 
#### [2. UTM 추적 템플릿은 계정 설정, 캠페인, 광고 설정 중 한 곳에만 추가할 수 있습니다](#2-utm-추적-템플릿은-계정-설정-캠페인-광고-설정-중-한-곳에만-추가할-수-있습니다)

- 
#### [3. 구글 광고, 광고 그룹, 캠페인 이름은 고유해야 합니다. 이름이 고유하지 않으면 다른 광고 그룹/광고에서 중복으로 표시됩니다](#3.-구글-광고,-광고-그룹,-캠페인-이름은-고유해야-합니다) [예시:](#3.-구글-광고,-광고-그룹,-캠페인-이름은-고유해야-합니다)

- 
#### [잘못된 설정 (하지 말아야 할 것)](#잘못된-설정-하지-말아야-할-것)

- 
#### [올바른 설정 (해야 할 것)](#올바른-설정-해야-할-것)


# 구글 광고 리포팅 문제해결 방법


## 1. 구글 광고 계정 연동이 CRM에 연결되어 있는지 확인하세요

연동(Integration)이 연결되어 있다면, 연동에 입력된 Gmail 주소가 구글 광고 계정과 연결된 주소인지 확인하세요.

![구글 광고 연동 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248432003/original/VUJN3JbEGt7osLkXqk99TOyEbrlo8bkPRA.png?1661970067)

연결된 사용자의 이메일 주소가 구글 광고 계정에서 최대한의 권한(관리자)을 가지고 있는지 확인하세요.

![구글 광고 권한 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248432893/original/mkh9c39KkvP1v3mTsb3Fchx75i56figAeQ.png?1661970338)

참고사항:

연동에서 연결한 Gmail 계정은 구글 광고 계정에서 사용자(User 또는 관리자) 역할을 가져야 하며, 관리자(Manager) 역할은 안 됩니다.


## 2. UTM 추적 템플릿은 계정 설정, 캠페인, 광고 설정 중 한 곳에만 추가할 수 있습니다

여러 곳에 추가하면 추적 템플릿이 계정 > 캠페인 > 광고 순서로 우선순위에 따라 작동합니다.

참고사항:

UTM 추적은 대소문자를 구분하므로 템플릿을 정확히 따라야 하며, 대문자를 절대 사용하면 안 됩니다.


## 3. 구글 광고, 광고 그룹, 캠페인 이름은 고유해야 합니다. 이름이 고유하지 않으면 다른 광고 그룹/광고에서 중복으로 표시됩니다. 예시:

### 잘못된 설정 (하지 말아야 할 것)
캠페인 이름

Winter Shoes 

캠페인 id 

12345

광고 그룹

Sport Shoes 1

광고

*Nike Sport Shoes 1

Sport Shoes 2

광고

*Nike Sport Shoes 1 

* Nike Sport Shoes 1이 똑같은 이름으로 두 번 나열되어 있습니다. 이런 이름들은 고유해야 합니다.

고객 A가 유료 검색(Paid Search)으로 생성됐다고 가정해봅시다. 고객 A는 구글 광고 리포팅의 리드 열에서 Nike Sports Shoes 1로 두 개의 다른 광고 그룹에 표시될 것입니다. 이는 위 표에서 *Nike Sport Shoes 1이 두 개의 다른 광고에 나열되어 있기 때문입니다.

https//example.com?utm_source=adwords&utm_medium={NikeSportShoes1}&utm_campaign={Wintershoes}&utm_content={sportshoes1}&utm_keyword={sports}&utm_matchtype={e}&campaign_id={12345}&ad_group_id={123456789}&ad_id={sportshoes}


### 올바른 설정 (해야 할 것)

캠페인 이름

Winter Shoes 

캠페인 id 

12345

광고 그룹

Sport Shoes 1 York

광고

Nike Sport Shoes 1.1 York logo

Sport Shoes 2 John 

광고

Nike Sport Shoes 1.2 John logo 


참고사항:
구글 광고 캠페인, 광고 그룹, 광고의 이름을 변경하더라도 기존의 UTM 매개변수 사본은 변경되지 않고 대신 이전 매개변수로 어트리뷰션됩니다. 새로운 캠페인, 광고 그룹, 광고를 만드는 것을 권장합니다. 구글 광고 리포팅의 목록 보기에서 > Hyperclass가 이름을 업데이트하지만, 이전 UTM 매개변수를 사용하기 때문에 데이터가 매출, 리드, ROI를 어트리뷰션하는 것을 중단할 것입니다.

---
*원문 최종 수정: Mon, 5 Sep, 2022 at 9:04 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*