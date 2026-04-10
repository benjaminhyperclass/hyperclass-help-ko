---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Voice-AI
---

# 통화 중/통화 후 액션 분리

**목차**

- [개요](#개요)
- [새로운 기능](#새로운-기능)
- [핵심 개선사항](#핵심-개선사항)
- [사용 방법](#사용-방법)
- [지원되는 액션 유형](#지원되는-액션-유형)
  - [통화 중](#통화-중)
  - [통화 후](#통화-후)

## 개요

음성 AI(Voice AI)의 **액션 빌더(Action Builder)**가 완전히 새롭게 디자인되어 더욱 깔끔하고 빠르며 직관적인 경험을 제공합니다. 이번 업데이트는 카드 기반 레이아웃, 탭 구조, 간소화된 워크플로우를 도입하여 AI 직원이 통화 중과 통화 후에 수행할 작업을 생성, 관리, 검토하는 것을 훨씬 쉽게 만듭니다.

이 기능을 활성화하려면: Settings(설정) → Labs → "Voice AI - Separate During and Post Call Actions" 활성화

---

## 새로운 기능

- **카드 기반 인터페이스**
액션이 이제 개별 카드로 표시됩니다. 개선된 시각적 명확성으로 액션을 쉽게 스캔하고 정렬하며 정리할 수 있습니다.

![카드 기반 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578046/original/3RvCiXMNSA2LtzG8exuGG0j1BJw0PbHxmA.png?1747168856)

- **탭 레이아웃**
액션이 이제 **통화 중(During the Call)**과 **통화 후(After the Call)** 섹션으로 분리되었습니다. 각 탭에는 설정된 액션의 총 개수가 표시됩니다.

- **간소화된 생성 흐름**
굵게 표시되고 쉽게 접근할 수 있는 **"New Action(새 액션)"** 버튼으로 빠르고 구조화된 액션 생성을 유도합니다.

![새 액션 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578089/original/3Njbttz4ii9VZ92LIuRU7Y2X5V-Rt_NZAw.jpeg?1747168934)

- **개별 액션 모달**
모든 액션 유형이 전용 모달에서 열리므로 탭을 전환하거나 긴 양식을 스크롤할 필요가 없습니다.

- **빠른 삭제 옵션**
액션 카드 메뉴에서 직접 액션을 삭제할 수 있어 편집기를 열 필요가 없습니다.

![빠른 삭제 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578104/original/vgrUiUJ44ABEyIWPDFmNZo4UTNYOadf1Nw.png?1747168957)

## 핵심 개선사항

- **개선된 시각적 계층 구조**
더 나은 라벨과 그룹화된 레이아웃 덕분에 액션 유형을 더 쉽게 구분할 수 있습니다.

- **간소화된 편집 및 삭제**
액션 카드에서 바로 더 적은 클릭으로 액션을 편집하거나 제거할 수 있습니다.

- **내장된 제약 조건 및 스마트 가이던스**
  - **시각적 카운터**가 사용 중인 각 액션 유형의 개수를 보여줍니다.
  - **툴팁과 인라인 가이던스**가 잘못된 설정을 방지합니다:
    - 통화 중 최대 **15개 총 액션**
    - **예약 액션은 1개**만 허용
    - 통화 후 최대 **25개 연락처 필드 업데이트 액션**

## 사용 방법

- 편집하려는 **음성 AI 직원**을 열고 에이전트 목표를 클릭합니다.

![에이전트 목표 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578309/original/LnlppK9UioCFblywgVW74xqac-R4-U82DA.png?1747169559)

- **"New Action(새 액션)"** 버튼을 사용하여 시작합니다.

- 설정하려는 액션 유형을 선택합니다. 예: 통화 전환

![액션 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578145/original/SPCvamI8apQzIMDBQ5UUxk-wYrHglXGwIg.png?1747169092)

- 전용 모달이 나타나면 필수 세부 정보를 입력합니다.

![액션 설정 모달](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578199/original/YTKC_vkUNW-LdoHEXEkoqx10OqlDHPPDGA.png?1747169227)

- 저장합니다. 새 액션이 해당 탭 아래에 카드로 표시됩니다.

## 지원되는 액션 유형

### 통화 중

- 통화 전환(Call Transfer)
- 워크플로우 트리거(Trigger Workflow)
- SMS 발송(Send SMS)
- 예약하기(Book Appointment)
- 커스텀 액션(Custom Actions) (베타)

### 통화 후

- 연락처 필드 업데이트(Update Contact Fields)

![통화 후 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046578263/original/3HRS6002J0G6csS-Q6MWpGPDkXd5v8-rHg.jpeg?1747169446)

---
*원문 최종 수정: Tue, 13 May, 2025 at 3:53 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*