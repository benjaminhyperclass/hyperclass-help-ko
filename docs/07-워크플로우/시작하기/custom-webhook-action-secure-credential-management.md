---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# 커스텀 웹훅(Custom Webhook) 액션 – 보안 자격 증명 관리

이 가이드는 커스텀 웹훅 액션의 최신 개선 사항을 안내합니다. 보안 강화와 간편한 자격 증명 관리에 중점을 두고 설명합니다.

---

**목차**

- [개요](#개요)
- [주요 개선 사항](#주요-개선-사항)
  - [마스킹된 시크릿 키](#마스킹된-시크릿-키)
  - [사용자 친화적 자격 증명 관리](#사용자-친화적-자격-증명-관리)
- [이 업데이트가 중요한 이유](#이-업데이트가-중요한-이유)
- [시작하기](#시작하기)
- [중요 참고사항](#중요-참고사항)

---

## 개요

커스텀 웹훅 액션이 이제 Basic auth, Bearer token, API key 인증 방식에서 마스킹된 시크릿 키를 지원합니다. 이 업데이트를 통해 민감한 정보의 우발적 노출을 방지하고 자격 증명을 더 쉽게 관리하고 저장할 수 있습니다.

## 주요 개선 사항

### 마스킹된 시크릿 키

- **안전한 저장**: 모든 시크릿 키는 안전하게 저장되고 인터페이스에서 마스킹 처리됩니다.

- **지원하는 인증 방식**: Basic auth, Bearer token, API key

- **노출 위험 감소**: 키가 평문으로 표시되지 않아 유출 위험을 최소화합니다.

### 사용자 친화적 자격 증명 관리

- **키 관리**: 기존 키 중에서 선택하거나 드롭다운 메뉴에서 새 키를 생성할 수 있습니다.

- **삭제 제한**: 에이전시 관리자 또는 키 생성자만 삭제할 수 있습니다.

- **로케이션 수준 보안**: 키가 생성된 로케이션 내에서만 접근 가능합니다.

## 이 업데이트가 중요한 이유

- **보안 강화**
  - 시크릿 키가 마스킹되어 우발적 유출 가능성이 크게 줄어듭니다.
  - 키는 실제 값 대신 이름으로 식별되어 위험을 줄입니다.

- **향상된 접근 제어**
  - 민감한 자격 증명은 키를 생성한 사용자와 로케이션 수준의 관리자만 수정할 수 있습니다.

## 시작하기

워크플로우(Automations) 빌더에서 새로운 커스텀 웹훅 액션을 추가하고 설정하는 단계를 따라해보세요.

1. **커스텀 웹훅 액션 추가**
   
   워크플로우 빌더에서 액션 단계로 커스텀 웹훅을 선택합니다.

2. **인증 유형 선택**
   
   다음 방법 중 하나를 선택합니다: Basic auth, Bearer token, 또는 API key

3. **자격 증명 설정**
   
   - "Create New Key(새 키 생성)"를 선택합니다.
   - 키 이름(식별용)과 키 값(실제 자격 증명)을 입력합니다.
   - 저장하면 키가 마스킹되어 평문으로 표시되지 않습니다.

4. **모니터링 및 관리**
   
   필요에 따라 드롭다운 메뉴를 사용하여 키를 선택하거나 삭제합니다.

## 중요 참고사항

- **삭제 권한**: 에이전시 관리자 또는 키 생성자만 삭제할 수 있습니다.

- **기존 키**: 새 키로 업데이트하면 기존 키는 자동으로 제거됩니다.

![커스텀 웹훅 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064373/original/d90fEX1tr4sa9wyPSUWh0U8BQVvguDAx3A.png?1744643159)

![인증 방식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064380/original/OzCNzq-qJdDKgQDDKd2d7-XQZtv-6ZU2tw.png?1744643171)

![새 키 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064383/original/BPZy4-09gQZDgA5rETgzBp5cfL2uF-a4MQ.png?1744643181)

![키 관리 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064392/original/1SUoBaiQVlKf3CIzrZSPHUG_dZ41O4DkHg.png?1744643191)

![마스킹된 키 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064424/original/0OvsqZI1JfmGPxEE5Nnz7WX1ACOuw0Mf3A.png?1744643209)

---
*원문 최종 수정: Mon, 14 Apr, 2025 at 10:07 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*