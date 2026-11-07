---
원문: /support/solutions/articles/155000006452-how-to-create-a-linkedin-ad-campaign-in-ad-manager
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 광고 관리자에서 LinkedIn 광고 캠페인 만들기

**광고 관리자**(Ad Manager)에서 LinkedIn 광고 캠페인을 만드는 순서를 안내해요. **Campaign Group**(캠페인 그룹)을 먼저 만들고, 그 안에 캠페인과 광고를 차례로 만들어요.

광고 관리자는 LinkedIn 광고를 세 단계 계층으로 구성해요.

- **Campaign Group**: 가장 위 단계의 묶음이에요.
- **캠페인**: 예산, 오디언스, 일정을 정해요.- **광고**: 크리에이티브(미디어, 문구, 콜투액션, 폼)를 정해요.

{% hint style="info" %}
하이퍼클래스는 현재 LinkedIn 광고를 Campaign Group > Campaign > Ad 순서로 구성해요. LinkedIn Campaign Manager에서는 LinkedIn이 용어를 바꿔서 Campaign Group이 Campaign으로, Campaign이 Ad Set으로 보일 수 있어요. 용어는 달라도 기본 계층 구조는 비슷해요.
{% endhint %}

{% hint style="warning" %}
캠페인 템플릿을 사용할 수 있어요. LinkedIn 캠페인은 광고 관리자 템플릿으로도 만들 수 있어요. **Ad Manager Templates**(광고 관리자 템플릿)를 선택하고 LinkedIn 템플릿을 고른 다음, 세부 내용을 확인하고 **Continue**(계속)를 클릭하세요. 지원하는 캠페인 설정은 선택한 템플릿에서 미리 채워져요.
{% endhint %}

## 1단계: Campaign Group 만들기

![Campaign Group 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813131/original/uRfzv4cSE3Z5FmBhbyxg_HMV_vH1te9ApQ.png?1759145783)

**Campaign Group**은 LinkedIn 캠페인을 담는 가장 위 단계의 묶음이에요.

- **Campaign Group Name**(캠페인 그룹 이름): 알아보기 쉬운 이름을 지어요. 예: "4분기 SaaS 리드"
- **Objective Selection**(목표 선택): 아래 중에서 선택해요.
  - **리드 생성**: LinkedIn 폼으로 리드를 모아요.
  - **Website Traffic**(웹사이트 트래픽): 외부 웹사이트나 랜딩 페이지로 사용자를 보내요. LinkedIn의 Website Visits 목표에 해당해요.

### 예산 및 일정

- 캠페인 그룹의 일일 예산이나 총 예산을 정해요.
- **일정**: 캠페인 그룹의 시작일과 종료일을 정해요.

![예산과 일정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813145/original/Qgl8GjQ1tt1w3kx_OPJLJZVUgmylJOzwUw.png?1759145800)

### 입찰

- 리드 생성 목표는 리드당 비용(CPL)을, 웹사이트 트래픽 목표는 클릭당 비용(CPC)을 직접 입력해요.

{% hint style="info" %}
팁: Campaign Group을 쓰면 캠페인을 사업 목표별로 정리할 수 있어요.
{% endhint %}

## 2단계: 그룹 안에 캠페인 만들기

그룹을 만들었다면 **캠페인**을 추가할 수 있어요.

### 캠페인 단계에서 설정하는 항목

- **캠페인 이름**: 캠페인을 구분하는 고유 식별자가 돼요.
- **Media Type**(미디어 유형): **단일 이미지**, 동영상, 캐러셀 중에서 골라요.
- **언어**
- **지리적 위치**
- 선택 사항: **Intended Audience**(대상 오디언스)

![캠페인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813264/original/NTT-StjHux21FptKzUJLqkBC1Yub-zZ1ew.png?1759145841)

### 오디언스 타기팅

자세한 내용은 [LinkedIn 캠페인 오디언스 타기팅](audience-targeting-for-linkedin-campaigns-in-ad-manager.md)을 참고하세요.

- 필수: **Location**(위치). 포함 또는 제외로 설정해요.
- 선택 필터: **Job Title**(직책), **Industry**(업종), **Company Size**(회사 규모), **Seniority**(직급), **Skills**(기술), **Education**(학력), **Interests & Traits**(관심사 및 특성)
- **Logic Builder**(로직 빌더):
  - 속성 그룹을 최대 3개까지 추가할 수 있어요.
  - 그룹 안에서는 **또는**(OR) 조건이 적용돼요.
  - 그룹 사이에는 AND 조건이 적용돼요.
  - 포함과 제외를 모두 설정할 수 있어요.

예시:

- 그룹 1 - 직책 = 마케팅 매니저 **또는** 이사
- 그룹 2 - 업종 = 헬스케어
- 제외 - 인턴

![오디언스 타기팅 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813301/original/WK-tnfdbNLY4LWiXpQQpGcbPOCRy0IowUQ.png?1759145860)

![오디언스 타기팅 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813310/original/-N51skvsrRuahcBy4coM0l-tHez-dei8Ow.png?1759145871)

![오디언스 타기팅 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813351/original/0MJRgKTWJ57YK3Bymy4P8HdrS-xXgKhZig.png?1759145884)

## 3단계: 캠페인 안에 광고 만들기

캠페인 하나에 광고를 여러 개 만들 수 있어요.

### 광고 단계에서 설정하는 항목

- **광고명**: 내부에서 구분하기 위한 이름이에요.
- **Media Type**(캠페인 단계에서 선택한 유형):
  - **단일 이미지** 광고 - 이미지 한 장을 업로드해요.  
    ![단일 이미지 광고 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813485/original/QmnWmEx8Gg3X-75XN-cSNX1-ZYGpLJu4IA.png?1759145930)
  - **Single Video Ad**(단일 동영상 광고) - 동영상을 업로드해요.
  - **Carousel Ad**(캐러셀 광고) - 이미지 카드 여러 장을 옆으로 넘겨 볼 수 있게 보여 줘요.

    각 카드에는 아래 항목을 넣을 수 있어요.

    - 이미지
    - **헤드라인**
    - **대상 URL**
  - LinkedIn 캐러셀 광고는 이미지 카드를 2개에서 10개까지 지원해요. 캐러셀 카드에는 동영상을 넣을 수 없어요.

    - ![캐러셀 광고 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813548/original/7J6OptbpOQCPgW5F8CcwMEIHIbe0dIaUgw.png?1759145952)

### 크리에이티브 항목

- **Introduction Text**(소개 문구): 최대 3,000자까지 쓸 수 있어요. 게재 위치에 따라 긴 문구는 잘릴 수 있으니 핵심 메시지는 짧게 쓰세요.
- **헤드라인**: 짧게 쓰세요. 잘림을 줄이려면 LinkedIn은 70자 안팎을 권장해요.
- **설명**: 최대 300자까지 쓸 수 있어요. 짧은 설명이 게재 위치와 상관없이 더 일정하게 표시될 수 있어요.
- **Call-to-Action**(콜투액션): LinkedIn CTA 목록에서 골라요(Learn More, Download, Apply 등).
- **대상 URL**: 모든 광고에 필요해요. `https://`가 빠져 있으면 하이퍼클래스가 자동으로 앞에 붙여 줘요.

![광고 크리에이티브 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813647/original/SZnwjnD_pYo5omDVodCyLQYqfPVa_Y0bwA.png?1759146022)

### 리드 생성 폼 (목표가 리드 생성인 경우)

- **폼명**: 자동으로 만들어지며 수정할 수 있어요.
- **헤드라인**과 **설명**: 폼에서 눈에 띄게 표시돼요.
- **Pre-filled Fields**(미리 채워진 필드): 최대 12개까지 쓸 수 있어요(이름, 이메일, 직책 등).
- **Custom Questions**(맞춤 질문): 최대 3개까지 쓸 수 있어요(주관식 또는 객관식).
- **Hidden Fields**(숨김 필드): 최대 20개까지 쓸 수 있어요(UTM 태그, 캠페인 ID).
- **Privacy Section**(개인정보 섹션): 개인정보 URL은 필수이고, 고지 문구는 선택이에요.
- **Consent Checkboxes**(동의 체크박스): 최대 5개까지 쓸 수 있어요.
- **Confirmation Page**(확인 페이지): 감사 메시지와 선택 CTA(Visit Website, Download, Call)를 설정해요.
- LinkedIn 리드 폼과 만드는 방법은 [LinkedIn 리드 폼 만들기](how-to-create-a-linkedin-lead-form-in-ad-manager.md)에서 확인하세요.

![리드 생성 폼 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813821/original/sKpAqAyVXAxfQn76GFg9WVJCC3XwD_XCQA.png?1759146093)

## 4단계: 검토 및 게시

광고를 시작하기 전에 **Review & Publish**(검토 및 게시) 화면이 나와요. 이 화면에서 아래 내용을 확인해요.

- 캠페인 목표, 예산, 일정, 최적화 모드
- 전체 크리에이티브 미리보기(데스크톱 및 모바일)
- 유효성 검사: URL이 올바른지, 예산이 LinkedIn 최소 기준을 충족하는지, 필수 항목이 모두 채워졌는지 확인해요.

![검토 및 게시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813627/original/VwKBvycIXafWlrvoIOSqHDhxqgVvYLDQcQ.png?1759146007)

## 5단계: Campaign Group 성과 보기

게시한 뒤에는 **통계 > LinkedIn**에서 성과를 확인할 수 있어요. LinkedIn 통계는 [LinkedIn 광고 통계 이해하기](understanding-linkedin-statistics-in-ad-manager.md)에서 자세히 설명해요.

- **Campaign Group** 단계: 지출, 노출수, 클릭수, CTR
- **캠페인** 단계: 전환, 오디언스 효과, CPL
- **광고** 단계: 크리에이티브 성과(CTR, CPC, CPL, 전환)

![통계 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813836/original/ZY_GHPa2WnAzjkPO4jX55zI49UNHjrHi3w.png?1759146111)

![통계 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813860/original/l_72_qSJegeIBxB1w4jjXemcimodFFO7BA.png?1759146121)

![통계 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054813868/original/D6jRE_7VwgXguFsaBbvIGCWPEvMev9_3eg.png?1759146128)

## 운영 팁

- 사업 목표별로 정리하세요(예: 인지도, 리드 생성).
- 캠페인 하나에는 오디언스 정의를 하나만 두어 초점을 맞추세요.
- 캠페인 하나에 광고를 여러 개 돌려서 크리에이티브를 비교하세요.
- 처음에는 넓게 시작하고, 필터로 점점 좁혀 가세요.
- 리드 생성: 폼이 짧을수록 전환이 더 잘 돼요.
- 트래픽: 분석을 위해 항상 UTM 태깅을 켜세요.
