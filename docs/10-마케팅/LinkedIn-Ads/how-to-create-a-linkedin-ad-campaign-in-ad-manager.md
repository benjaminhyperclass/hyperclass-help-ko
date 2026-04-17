---

번역일: 2026-04-07
카테고리: 10-마케팅 > LinkedIn Ads
---

# 광고 관리자에서 LinkedIn 광고 캠페인을 만드는 방법

광고 관리자(Ad Manager)는 LinkedIn 광고를 3단계 계층 구조로 구성합니다:

- **캠페인 그룹**: 최상위 컨테이너
- **캠페인**: 예산, 오디언스, 일정을 정의
- **광고**: 크리에이티브(미디어, 텍스트, CTA, 폼)를 정의

이 가이드는 캠페인 그룹을 만든 후 그 안에서 캠페인과 광고를 구성하는 과정을 안내합니다.

---

## 목차

- [1단계: 캠페인 그룹 만들기](#1단계-캠페인-그룹-만들기)
  - [예산 및 일정](#예산-및-일정)
  - [입찰](#입찰)
- [2단계: 그룹 내에 캠페인 만들기](#2단계-그룹-내에-캠페인-만들기)
  - [캠페인 레벨에서 정의되는 필드](#캠페인-레벨에서-정의되는-필드)
  - [오디언스 타겟팅](#오디언스-타겟팅)
- [3단계: 캠페인 내에 광고 만들기](#3단계-캠페인-내에-광고-만들기)
  - [광고 레벨에서 정의되는 필드](#광고-레벨에서-정의되는-필드)
  - [크리에이티브 필드](#크리에이티브-필드)
  - [리드 생성 폼 (목표가 리드 생성인 경우)](#리드-생성-폼-목표가-리드-생성인-경우)
- [4단계: 검토 및 발행](#4단계-검토-및-발행)
- [5단계: 캠페인 그룹 성과 확인](#5단계-캠페인-그룹-성과-확인)
- [모범 사례](#모범-사례)

## **1단계: 캠페인 그룹 만들기**

![LinkedIn 캠페인 그룹 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813131/original/uRfzv4cSE3Z5FmBhbyxg_HMV_vH1te9ApQ.png?1759145783)

캠페인 그룹(Campaign Group)은 LinkedIn 캠페인의 최상위 컨테이너입니다.

- **캠페인 그룹명**: 설명적인 이름을 선택하세요 (예: "4분기 SaaS 리드")
- **목표 선택**: 다음 중 선택:
  - **리드 생성** - LinkedIn 폼으로 리드를 수집
  - **웹사이트 트래픽** - 외부 랜딩 페이지로 클릭 유도

### 예산 및 일정

캠페인 그룹의 일일 또는 전체 예산을 설정합니다.

- **일정**: 캠페인 그룹의 시작 및 종료 날짜를 설정합니다.

![LinkedIn 캠페인 예산 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813145/original/Qgl8GjQ1tt1w3kx_OPJLJZVUgmylJOzwUw.png?1759145800)

### **입찰**
리드당 비용(리드 생성) 또는 클릭당 비용(트래픽)에 대한 수동 입찰 설정.

💡 **팁**: 캠페인 그룹은 비즈니스 목표에 따라 캠페인을 정리하는 데 도움을 줍니다.

## 2단계: 그룹 내에 캠페인 만들기

그룹이 생성되면 캠페인을 추가할 수 있습니다.

### **캠페인 레벨에서 정의되는 필드**

- **캠페인명**: 고유 식별자를 갖게 됩니다
- **미디어 타입**: 단일 이미지, 동영상 또는 캐러셀 타입의 미디어
- **언어**
- **지리적 위치**
- **선택사항: 의도된 오디언스**

![LinkedIn 캠페인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813264/original/NTT-StjHux21FptKzUJLqkBC1Yub-zZ1ew.png?1759145841)

### 오디언스 타겟팅 ([자세한 내용 보기](audience-targeting-for-linkedin-campaigns-in-ad-manager.md))

- **필수**: 위치 (포함/제외)
- **선택 필터**: 직책, 업종, 회사 규모, 직급, 스킬, 교육, 관심사 및 특성
- **로직 빌더**:
  - 최대 3개의 속성 그룹 추가
  - 그룹 내에서는 OR 로직
  - 그룹 간에는 AND 로직
  - 포함 및 제외 지원

예시:
- **그룹 1** - 직책 = 마케팅 매니저 OR 디렉터
- **그룹 2** - 업종 = 헬스케어
- **제외** - 인턴

![LinkedIn 오디언스 타겟팅](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813301/original/WK-tnfdbNLY4LWiXpQQpGcbPOCRy0IowUQ.png?1759145860)

![LinkedIn 타겟팅 조건](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813310/original/-N51skvsrRuahcBy4coM0l-tHez-dei8Ow.png?1759145871)

![LinkedIn 타겟팅 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813351/original/0MJRgKTWJ57YK3Bymy4P8HdrS-xXgKhZig.png?1759145884)

## 3단계: 캠페인 내에 광고 만들기

각 캠페인은 여러 개의 광고를 포함할 수 있습니다.

### **광고 레벨에서 정의되는 필드**

- **광고명**: 내부 식별자
- **미디어 타입** (캠페인 레벨에서 선택됨):
  - **단일 이미지 광고** - 이미지 하나 업로드

![LinkedIn 단일 이미지 광고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813485/original/QmnWmEx8Gg3X-75XN-cSNX1-ZYGpLJu4IA.png?1759145930)

  - **단일 동영상 광고** - 동영상 업로드
  - **캐러셀 광고** - 각각 고유한 항목을 가진 여러 카드:
    - 헤드라인
    - 이미지/동영상
    - 목적지 URL

![LinkedIn 캐러셀 광고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813548/original/7J6OptbpOQCPgW5F8CcwMEIHIbe0dIaUgw.png?1759145952)

### **크리에이티브 필드**

- **소개 텍스트**: 최대 3,000자
- **헤드라인**: 최대 70자 (필수)
- **설명**: 최대 300자 (선택사항)
- **행동 유도 버튼**: LinkedIn CTA 목록에서 선택 (더 알아보기, 다운로드, 신청 등)
- **목적지 URL**: 모든 광고에 필수. Hyperclass는 누락된 경우 자동으로 https://를 앞에 추가합니다.

![LinkedIn 광고 크리에이티브](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813647/original/SZnwjnD_pYo5omDVodCyLQYqfPVa_Y0bwA.png?1759146022)

### **리드 생성 폼 (목표가 리드 생성인 경우)**

- **폼명**: 자동 생성되며 편집 가능
- **헤드라인 및 설명**: 폼에서 눈에 띄게 표시
- **미리 채워진 필드**: 최대 12개 (이름, 이메일, 직책 등)
- **커스텀 질문**: 최대 3개 (단답 또는 객관식)
- **숨겨진 필드**: 최대 20개 (UTM 태그, 캠페인 ID)
- **개인정보 섹션**: 필수 개인정보 URL + 선택적 공개 텍스트
- **동의 체크박스**: 최대 5개
- **확인 페이지**: 감사 메시지 + 선택적 CTA (웹사이트 방문, 다운로드, 전화)
- **LinkedIn 리드 폼 및 생성 방법** 자세히 알아보기: [링크](how-to-create-a-linkedin-lead-form-in-ad-manager.md)

![LinkedIn 리드 폼 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813821/original/sKpAqAyVXAxfQn76GFg9WVJCC3XwD_XCQA.png?1759146093)

## **4단계: 검토 및 발행**

실행하기 전에 검토 및 발행 화면에 도착합니다:

- 캠페인 목표, 예산, 일정 및 최적화 모드
- 전체 크리에이티브 미리보기 (데스크톱 및 모바일)
- 유효성 검사: URL이 유효한지, 예산이 LinkedIn 최소 요구사항을 충족하는지, 필수 필드가 채워졌는지 확인

![LinkedIn 캠페인 검토](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813627/original/VwKBvycIXafWlrvoIOSqHDhxqgVvYLDQcQ.png?1759146007)

## 5단계: 캠페인 그룹 성과 확인

발행 후 성과는 Statistics(통계) → LinkedIn에서 추적할 수 있습니다. LinkedIn 통계에 대한 자세한 내용은 이 도움말 문서를 참조하세요: [LinkedIn 광고 통계](understanding-linkedin-statistics-in-ad-manager.md)

- **캠페인 그룹 레벨**: 지출, 노출수, 클릭수, 클릭률(CTR)
- **캠페인 레벨**: 전환수, 오디언스 효과, 리드당 비용(CPL)
- **광고 레벨**: 크리에이티브 성과 (CTR, CPC, CPL, 전환수)

![LinkedIn 캠페인 성과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813836/original/ZY_GHPa2WnAzjkPO4jX55zI49UNHjrHi3w.png?1759146111)

![LinkedIn 성과 분석](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813860/original/l_72_qSJegeIBxB1w4jjXemcimodFFO7BA.png?1759146121)

![LinkedIn 광고 통계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813868/original/D6jRE_7VwgXguFsaBbvIGCWPEvMev9_3eg.png?1759146128)

## 모범 사례

- 비즈니스 목표별로 정리하세요 (예: 인지도, 리드 생성)
- 캠페인은 집중적으로 유지하세요 (각각 하나의 오디언스 정의)
- 캠페인당 여러 광고를 실행하여 크리에이티브를 비교하세요
- 넓게 시작한 후 필터로 세분화하세요
- **리드 생성**: 짧은 폼이 더 높은 전환율을 보입니다
- **트래픽**: 분석을 위해 항상 UTM 태깅을 활성화하세요

---
*원문 최종 수정: Mon, 29 Sep, 2025 at 7:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*