---
원문: /support/solutions/articles/48001143244-branding-system-generated-links-api-domain-
번역일: 2026-11-06
카테고리: 11-설정
---

# 시스템에서 만드는 링크에 브랜드 도메인 적용하기 (API 도메인)

에이전시와 서브 계정에서 브랜드(API) 도메인을 설정해 시스템이 만드는 링크의 도메인을 바꾸는 방법을 안내해요. 브랜드 도메인을 쓰면 이메일 도달률이 좋아지고, 링크를 받는 사람이 우리 브랜드를 더 쉽게 알아볼 수 있어요.

## API 도메인이란?

API 도메인은 시스템이 만드는 링크에 쓰이는 도메인을 원하는 도메인으로 바꾸는 기능이에요. 폼, 설문, 캘린더 링크, 트리거 링크, 단축 링크, 리뷰 링크 등에 적용돼요. 링크마다 우리 도메인이 보이니 브랜드의 일관성과 신뢰도를 높일 수 있어요.

사용자 지정 API 도메인을 설정하면 다음 링크의 도메인이 바뀌어요.

- 폼
- 설문
- 캘린더 링크
- **트리거 링크**
- **결제 링크**
- **리뷰 링크**

API 도메인은 두 단계에서 설정할 수 있어요.

| 설정 단계 | 설명 |
| --- | --- |
| 에이전시 수준(API 도메인) | 모든 서브 계정에 기본 브랜드 도메인을 적용해요. |
| 서브 계정 수준(**브랜드 도메인**) | 특정 서브 계정에만 브랜드 도메인을 적용해요. 에이전시 수준 도메인보다 우선해요. |

## API 도메인을 설정하면 좋은 점

- 이메일 도달률 향상: 사용자 지정 링크는 스팸으로 분류될 가능성이 낮아 이메일 도달률이 높아져요.
- 브랜드 인지도 강화: 링크를 받는 사람에게 브랜드 도메인이 보여 브랜드 이미지가 강해져요.
- 일관된 사용자 경험: 링크 도메인이 통일되어 있어 고객이 매끄럽고 전문적인 경험을 할 수 있어요.

## 에이전시 수준 API 도메인

에이전시 관리자만 쓸 수 있어요. 에이전시에서 API 도메인을 설정하면 시스템이 만드는 모든 링크에 같은 브랜드 도메인이 쓰여 신뢰도와 도달률이 높아져요. 기본 API 도메인을 에이전시에 설정해 두면 서브 계정이 브랜딩을 자동으로 이어받아서 서브 계정마다 따로 설정하지 않아도 돼요.

### 1단계: 에이전시 도메인 설정 열기

**에이전시 보기 > 에이전시 설정 > 회사 > Whitelabel(화이트라벨) > 도메인**으로 이동하세요.

![에이전시 설정의 도메인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042628858/original/lDtr3IQBFIawYKEYyxmN0qTU3H701ASifw.png?1741098470)

### 2단계: API 도메인 입력

**도메인 추가** 버튼을 클릭하면 [도메인 연결 마법사](../42-통합/기타/how-to-use-the-domain-connect-feature.md)가 열려요. 안내에 따라 진행하면 마법사가 도메인 등록 업체에 CNAME을 자동으로 만들어 줘요.

![도메인 추가 후 도메인 연결 마법사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042796264/original/nvfbHGPvFXl546Kr5Iyo6e-f-rZJgDVbLg.png?1741275401)

### 3A단계: DNS 설정하기

CNAME을 직접 만들어야 한다면 도메인 등록 업체(예: GoDaddy, CloudFlare, Namecheap)에 로그인해서 DNS 설정으로 이동하세요.

![도메인 등록 업체의 DNS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042879142/original/TQI7K06STR-vqyrZrIVzvnM_MqnZbGua9g.gif?1741374879)

### 3B단계: 직접 설정하기

직접 설정하려면 도메인 등록 업체에서 다음과 같이 CNAME 레코드를 만드세요.

- **이름**: 사용할 서브도메인 (예: `links`)
- **타겟**: `brand.ludicrous.cloud`

![CNAME 레코드 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042879336/original/X99DozJordYQmIRm-u9oKB_XjDILWeyP2w.png?1741375275)

{% hint style="warning" %}
**에이전시 설정 > 회사** 페이지 맨 아래로 스크롤해서 **Update Company**(회사 정보 업데이트) 버튼을 클릭해 변경 사항을 저장하세요.
{% endhint %}

## 서브 계정 수준 도메인 (브랜드 도메인)

서브 계정에서 브랜드 도메인을 설정하면 각 비즈니스가 시스템이 만드는 링크에 자기만의 도메인을 쓸 수 있어요. 이 설정은 에이전시 수준 API 도메인보다 우선해서, 폼·설문 등의 링크에 해당 서브 계정의 브랜딩이 반영돼요.

### 1단계: 비즈니스 프로필 열기

**서브 계정 보기**에서 **설정 > 비즈니스 프로필**로 이동하세요.

![서브 계정의 비즈니스 프로필 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042629216/original/roStP7JK9HSGD5_xcBUKLxxkedSqwWBTIA.png?1741098738)

### 2단계: 브랜드 도메인 입력

**브랜드 도메인** 필드에 시스템이 링크를 만들 때 사용할 서브도메인을 입력하세요 (예: links.yourclient.com).

![브랜드 도메인 입력 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042796410/original/DiKoLNeD-qGNjht3a0ZUOEVbSWIXGCFz8Q.png?1741275506)

### 3단계: 도메인 추가

**도메인 추가**를 클릭하면 [도메인 연결 마법사](../42-통합/기타/how-to-use-the-domain-connect-feature.md)가 열려요. 안내에 따라 진행하면 도메인 등록 업체에 CNAME 레코드가 자동으로 만들어져요.

- **이름**: 사용할 서브도메인 (예: `links`)
- **타겟**: `brand.ludicrous.cloud`

![도메인 추가 후 CNAME 자동 생성 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042796984/original/ySzmgId-7AlODjR6Bdifashr3oJu8fhsuQ.gif?1741275958)

{% hint style="warning" %}
**설정 > 비즈니스 프로필** 페이지 맨 아래로 스크롤해서 **정보 업데이트** 버튼을 클릭해 변경 사항을 저장하세요.
{% endhint %}

## 문제 해결

- 기존 API/브랜드 도메인 변경하기: API/브랜드 도메인이 `brand.ludicrous.cloud`를 가리키도록 바꾸려면 기존 도메인 입력란을 비우고 저장하세요. 그런 다음 새 서브도메인을 다시 입력하고 한 번 더 저장하세요.
- 개발 용도로는 쓸 수 없어요: API 도메인은 시스템이 만드는 링크를 브랜딩하는 용도로만 만들어졌어요. 위에서 설명한 기능의 링크를 화이트라벨(도메인 가림) 처리하는 기능이라서 개발 용도로는 맞지 않아요. API 연동이 필요하다면 하이퍼클래스 고객지원에 문의하세요.

{% hint style="info" %}
다음 단계: 브랜드(API) 도메인을 설정한 뒤에는 시스템이 만든 링크에 새 도메인이 제대로 반영되는지 확인하세요. 모든 커뮤니케이션에서 브랜딩이 매끄럽게 유지되도록 DNS 설정도 정기적으로 확인하고 필요하면 업데이트하세요.
{% endhint %}

## 자주 묻는 질문

### 루트 도메인을 API/브랜드 도메인으로 쓸 수 있나요?
기존 웹사이트 설정과 충돌하지 않도록 서브도메인(예: `links.yoursite.com`)을 쓰는 것을 권장해요.

### 서브 계정 수준 브랜드 도메인을 설정하지 않으면 어떻게 되나요?
해당 서브 계정은 에이전시 수준의 브랜드 도메인을 기본으로 사용해요.

### DNS 변경 사항이 적용되기까지 얼마나 걸리나요?
DNS 전파에는 최대 48시간이 걸릴 수 있어요. 그보다 빨리 적용되는 경우도 많아요.
