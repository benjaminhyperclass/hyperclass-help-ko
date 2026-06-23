---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 시스템 생성 링크 브랜딩 (API 도메인) 설정하기

이 가이드는 에이전시와 하위 계정(Sub-account) 레벨에서 브랜디드(API) 도메인을 설정하여 Hyperclass의 시스템 생성 링크를 커스터마이징하는 방법을 설명합니다. 브랜디드 도메인을 구현하면 링크 전송 시 전달률이 향상되고 브랜드 인지도가 강화됩니다.

---

**목차**

- [API 도메인이란?](#api-도메인이란)
- [API 도메인 설정의 주요 장점](#api-도메인-설정의-주요-장점)
- [에이전시 레벨 API 도메인](#에이전시-레벨-api-도메인)
- [하위 계정 레벨 도메인 (브랜디드 도메인)](#하위-계정-레벨-도메인-브랜디드-도메인)
- [문제 해결](#문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

---

## API 도메인이란?

**API 도메인**을 사용하면 폼, 설문, 캘린더 링크, 트리거 링크, 단축 링크, 리뷰 링크 등 시스템에서 생성되는 링크에 사용되는 도메인을 커스터마이징할 수 있습니다. 이 커스터마이징은 링크가 선택한 도메인을 반영하도록 하여 브랜드 일관성과 신뢰성을 높여줍니다.

커스텀 API 도메인을 설정하면 다음 항목에서 생성되는 링크의 도메인이 업데이트됩니다:

- 폼
- 설문
- 캘린더 링크
- 트리거 링크
- 결제 링크
- 리뷰 링크

**API 도메인**은 두 가지 레벨에서 설정할 수 있습니다:

| 설정 레벨 | 설명 |
|-----------|------|
| **에이전시 레벨 (API 도메인)** | 모든 하위 계정에 기본 브랜디드 도메인을 적용합니다. |
| **하위 계정 레벨 (브랜디드 도메인)** | 특정 하위 계정에 브랜디드 도메인을 적용하여 에이전시 레벨 도메인을 재정의합니다. |

---

## API 도메인 설정의 주요 장점

- **전달률 향상**: 커스터마이징된 링크는 스팸으로 표시될 가능성이 낮아 이메일 전달률이 개선됩니다.

- **브랜드 인지도 향상**: 수신자가 링크에서 브랜디드 도메인을 보게 되어 브랜드 정체성이 강화됩니다.

- **일관된 사용자 경험**: 링크 도메인의 통일성으로 사용자에게 매끄럽고 전문적인 경험을 제공합니다.

---

## 에이전시 레벨 API 도메인

에이전시 레벨에서 API 도메인을 설정하면 모든 시스템 생성 링크가 일관된 브랜디드 도메인을 사용하여 신뢰성과 전달률이 향상됩니다. 에이전시 레벨에서 기본 API 도메인을 설정하면 하위 계정이 자동으로 브랜딩을 상속받아 수동 설정 노력을 줄이면서 전문적인 온라인 존재감을 유지할 수 있습니다.

### 1단계: 에이전시 도메인 설정(Settings) 접근

**Agency** View → **Agency** Settings(설정) → Company → Whitelabel → Domains로 이동합니다.

![에이전시 도메인 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042628858/original/lDtr3IQBFIawYKEYyxmN0qTU3H701ASifw.png?1741098470)

### 2단계: API 도메인 입력

"**Add Domain(도메인 추가)**" 버튼을 클릭하면 [도메인 연결 마법사](../../42-통합/기타/how-to-use-the-domain-connect-feature-.md)가 실행됩니다. 안내에 따라 마법사가 도메인 등록기관에서 자동으로 **CNAME**을 생성하도록 합니다.

![도메인 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042796264/original/nvfbHGPvFXl546Kr5Iyo6e-f-rZJgDVbLg.png?1741275401)

### 3A단계: DNS 설정(Settings) 구성

**CNAME**을 수동으로 생성해야 하는 경우, DNS 설정에서 도메인 등록기관(예: GoDaddy, CloudFlare, Namecheap)에 로그인합니다.

![DNS 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042879142/original/TQI7K06STR-vqyrZrIVzvnM_MqnZbGua9g.gif?1741374879)

### 3B단계: 수동 설정

수동 설정을 선호하는 경우, 도메인 등록기관에서 **CNAME** 레코드를 생성합니다:

- Name: 선택한 서브도메인(예: links)
- Target: **brand.ludicrous.cloud**

![CNAME 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042879336/original/X99DozJordYQmIRm-u9oKB_XjDILWeyP2w.png?1741375275)

**중요사항:** **Agency Settings(에이전시 설정)** 페이지 > Company 페이지 하단으로 스크롤하여 "**Update Company(회사 업데이트)**" 버튼을 클릭해 변경사항을 저장합니다.

---

## 하위 계정 레벨 도메인 (브랜디드 도메인)

하위 계정 레벨에서 브랜디드 도메인을 설정하면 개별 비즈니스가 자신의 도메인으로 시스템 생성 링크를 커스터마이징하여 브랜드 정체성과 신뢰도를 높일 수 있습니다. 이는 에이전시 레벨 API 도메인을 재정의하여 폼, 설문 및 기타 기능의 링크가 하위 계정의 고유한 브랜딩을 반영하도록 합니다.

### 1단계: 비즈니스 프로필(Business Profile) 접근

하위 계정 뷰에서 Settings(설정) → Business Profile(비즈니스 프로필)로 이동합니다.

![비즈니스 프로필 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042629216/original/roStP7JK9HSGD5_xcBUKLxxkedSqwWBTIA.png?1741098738)

### 2단계: 브랜디드 도메인 입력

Branded Domain 필드에 시스템이 시스템 생성 링크를 만들 때 사용할 서브도메인을 입력합니다(예: links.yourclient.com).

![브랜디드 도메인 입력 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042796410/original/DiKoLNeD-qGNjht3a0ZUOEVbSWIXGCFz8Q.png?1741275506)

### 3단계: 도메인 추가

**Add Domain(도메인 추가)**를 클릭하여 [도메인 연결 마법사](../../42-통합/기타/how-to-use-the-domain-connect-feature-.md)를 실행합니다. 안내에 따라 도메인 등록기관에서 CNAME 레코드를 자동으로 생성합니다.

- Name: 선택한 서브도메인(예: links)
- Target: **brand.ludicrous.cloud**

![도메인 연결 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042796984/original/ySzmgId-7AlODjR6Bdifashr3oJu8fhsuQ.gif?1741275958)

**중요사항:** **Settings(설정) → Business Profile(비즈니스 프로필)** 페이지 하단으로 스크롤하여 "**Update Information(정보 업데이트)**" 버튼을 클릭해 변경사항을 저장합니다.

---

## 문제 해결

- **기존 API/브랜디드 도메인 업데이트**: API/브랜디드 도메인을 **brand.ludicrous.cloud**로 업데이트해야 하는 경우, 기존 도메인 필드를 지우고 설정을 저장한 다음, 새 서브도메인을 다시 입력하고 다시 저장합니다.

- **개발 목적**: API 도메인은 시스템 생성 링크 브랜딩 용도로만 제공되며 개발 목적에는 적합하지 않습니다. 위 아티클에서 언급된 기능에서 생성되는 링크를 화이트라벨(또는 마스킹)하기 위해서만 설계되었습니다.

API 통합의 경우 [Hyperclass의 API 문서](https://developers.gohighlevel.com/)를 참조하세요.

**다음 단계**: 브랜디드(API) 도메인을 설정한 후 시스템 생성 링크를 모니터링하여 새 도메인이 반영되는지 확인합니다. DNS 설정을 정기적으로 확인하고 필요에 따라 업데이트하여 모든 커뮤니케이션에서 매끄러운 브랜딩을 유지합니다.

---

## 자주 묻는 질문

**Q: API/브랜디드 도메인으로 루트 도메인을 사용할 수 있나요?**
기존 웹사이트 설정과의 충돌을 피하기 위해 서브도메인(예: links.yoursite.com)을 사용하는 것이 권장됩니다.

**Q: 하위 계정 레벨 브랜디드 도메인을 설정하지 않으면 어떻게 되나요?**
시스템이 해당 하위 계정에 대해 에이전시 레벨 브랜디드 도메인을 기본값으로 사용합니다.

**Q: DNS 변경사항이 전파되는 데 얼마나 걸리나요?**
DNS 전파는 최대 48시간이 걸릴 수 있지만, 변경사항은 종종 더 빨리 적용됩니다.

---
*원문 최종 수정: Thu, 22 May, 2025 at 1:07 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*