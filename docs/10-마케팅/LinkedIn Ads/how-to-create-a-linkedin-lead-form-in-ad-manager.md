---

번역일: 2026-04-07
카테고리: 10-마케팅 > LinkedIn Ads
---

# Ad Manager에서 LinkedIn 리드 폼 만드는 방법

LinkedIn 리드 폼을 사용하면 사용자가 플랫폼을 벗어나지 않고도 LinkedIn 광고 내에서 직접 사용자 정보를 수집할 수 있습니다. Ad Manager를 통해 이러한 폼을 쉽게 생성하고 미리보기하며 CRM에 매핑할 수 있습니다.

이 가이드는 리드 폼 생성 과정의 각 단계를 설명합니다.

---

## 목차

- [1단계: 리드 폼 빌더 열기](#1단계-리드-폼-빌더-열기)
- [2단계: 기본 정보 추가](#2단계-기본-정보-추가)
- [3단계: 인사말 섹션](#3단계-인사말-섹션)
- [4단계: 언어 설정](#4단계-언어-설정)
- [5단계: 질문 구성](#5단계-질문-구성)
- [6단계: 폼 필드 매핑](#6단계-폼-필드-매핑)
- [7단계: 데이터 개인정보보호](#7단계-데이터-개인정보보호)
- [8단계: 확인 페이지](#8단계-확인-페이지)
- [9단계: 미리보기 및 저장](#9단계-미리보기-및-저장)
- [모범 사례](#모범-사례)

## 1단계: 리드 폼 빌더 열기

- Ad Manager에서 LinkedIn 캠페인을 생성할 때 목표를 Lead Generation(리드 생성)으로 선택합니다.

- 광고 레벨에서 Select a Lead Form(리드 폼 선택) 옵션을 볼 수 있습니다.

- Create New(새로 만들기)를 클릭하여 리드 폼 빌더를 엽니다.

![리드 폼 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054815265/original/he8z4TURH1_nq6ad9ij_0427DYYra09c0A.png?1759146729)

![새 리드 폼 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054815171/original/DViXwxCFL7KZgN8S50N1_V5afJgE8kZAAQ.png?1759146685)

## 2단계: 기본 정보 추가

- **Form Name (폼 이름)** (필수)
  - 타임스탬프와 함께 자동 생성됩니다 (예: LinkedIn Form 29 Sep 25, 05:02 PM).
  - 더 구체적인 이름으로 편집할 수 있습니다 (예: Q4 웨비나 신청).
  - 최대 길이: 256자.

![폼 이름 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054815156/original/FKIhzt_k3nQUlYJbTHGq2gzSK6EXaqeoWQ.png?1759146678)

## 3단계: 인사말 섹션

이 섹션은 폼의 첫인상을 결정합니다.

- **Headline (제목)** (필수)
  - 최대 60자.
  - 폼 상단에 눈에 띄게 표시됩니다.
  - 예시: "안녕하세요, 방문해 주셔서 감사합니다!"

- **Details (상세 설명)** (선택)
  - 최대 160자.
  - 제안 내용을 설명하는 간단한 소개 문단입니다.
  - 예시: "무료 eBook 다운로드를 신청하고 주간 인사이트를 받아보세요."

![인사말 섹션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054815537/original/otrWe6GeCYr4xAg7mtljvtOPLBfowIOWNw.png?1759146840)

## 4단계: 언어 설정

- 폼의 표시 언어를 선택합니다.
- 타겟 대상에게 현지화된 경험을 제공합니다.

![언어 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054815604/original/wwIVq8GdkC0fKzzUCkMQxJlPf8ipW3iIFw.png?1759146874)

## 5단계: 질문 구성

수집할 정보를 정의합니다.

- **Prefilled Fields (미리 채워진 필드)** (최대 12개)
  - 표준 LinkedIn 프로필 필드: 이름, 성, 이메일, 직책, 회사명 등.
  - 사용자의 빠른 작성을 위해 LinkedIn에서 자동으로 채워집니다.

- **Custom Questions (커스텀 질문)** (최대 3개)
  - Short Answer(단답형) 또는 Multiple Choice(객관식) 선택.
  - 예시: "예산 범위는 어떻게 되시나요?" 객관식 옵션과 함께.

- **Hidden Fields (숨겨진 필드)** (최대 20개)
  - 사용자에게는 보이지 않지만 제출 시 함께 전송됩니다.
  - 추적용으로 유용합니다 (예: 캠페인 ID, UTM 태그).

![질문 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054815854/original/mR_KXR1VA3Pzh7ZinOI1klclaQ-ptKu8Mg.png?1759146976)

## 6단계: 폼 필드 매핑

- 각 LinkedIn 필드(미리 채워진 필드, 커스텀 필드, 숨겨진 필드)를 Hyperclass CRM 연락처 필드에 매핑합니다.
- 수집된 리드가 워크플로우, 자동화 또는 파이프라인으로 원활하게 동기화되도록 합니다.

![필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054816002/original/mn3lS-kCNc5y1rDzmJiTR5Hxdy8wRF8iEw.png?1759147033)

## 7단계: 데이터 개인정보보호

- **Privacy Policy URL (개인정보처리방침 URL)** (필수)
  - 회사의 개인정보 페이지에 연결되어야 합니다.
  - 폼에서 클릭 가능한 라벨로 나타납니다.

- **Privacy Text (개인정보 텍스트)** (선택)
  - 추가 면책 조항 텍스트입니다.

- **Consent Checkboxes (동의 체크박스)** (최대 5개)
  - GDPR/CCPA 준수 또는 마케팅 옵트인용입니다.
  - 예시: "마케팅 이메일 수신에 동의합니다."

![데이터 개인정보보호 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054816089/original/wgxgClY-zRbQP4v7WB3lQyc8jADWqqqyYQ.png?1759147086)

## 8단계: 확인 페이지

사용자가 폼을 제출한 후 감사 화면이 표시됩니다.

- **Headline (제목)** - 짧은 메시지 (최대 60자).
  - 예시: "가입해 주셔서 감사합니다!"

- **Description (설명)** - 더 긴 확인 메모 (최대 300자).
  - 예시: "요청을 받았습니다. 다음 단계는 이메일을 확인해 주세요."

- **CTA 옵션**
  - Visit Website(웹사이트 방문) - 사용자를 사이트로 안내합니다.
  - Download File(파일 다운로드) - 즉시 리소스를 공유합니다.
  - Call Business(업체에 전화) - 클릭하여 전화걸기 옵션을 제공합니다.
  - 각 CTA에는 링크 입력과 버튼 텍스트가 필요합니다.

![확인 페이지 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054816345/original/FYrcIMU7ivo_pZB3ocYT02ub3T8cqJ2nag.png?1759147200)

## 9단계: 미리보기 및 저장

- 오른쪽의 실시간 미리보기 패널에서 LinkedIn에서 폼이 어떻게 보일지 확인할 수 있습니다(데스크톱 및 모바일).

- 다음을 확인하세요:
  - 제목과 소개 텍스트가 간결해 보이는지.
  - 필드가 명확하고 올바르게 매핑되었는지.
  - 개인정보 세부사항이 포함되었는지.

- Create Form(폼 생성)을 클릭하여 저장합니다.

## 모범 사례

- 폼을 짧게 유지하세요. 필드가 적을수록 완료율이 높아집니다.

- 가치를 전달하는 매력적인 제목과 설명을 항상 포함하세요.

- 규정 준수와 투명성을 위해 최소 하나의 동의 체크박스를 추가하세요.

- 고급 추적을 위해 숨겨진 필드를 사용하세요 (예: source = LinkedIn).

- 런칭 전에 미리보기로 폼을 테스트하세요.

---
*원문 최종 수정: Mon, 29 Sep, 2025 at 7:03 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*