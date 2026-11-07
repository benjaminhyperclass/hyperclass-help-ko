---
원문: /support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Webhook(커스텀 웹훅) 보안 자격 증명 관리

**Custom Webhook**(커스텀 웹훅) 액션에 보안이 강화된 자격 증명 관리 기능이 추가됐어요. 이 문서에서는 시크릿 키를 가려서 저장하는 방식과 키를 만들고 관리하는 방법을 안내해요.

## 개요

이제 **Custom Webhook** 액션에서 **Basic auth**(기본 인증), **Bearer token**(베어러 토큰), **API key**(API 키) 인증 방식의 시크릿 키를 가려서 보관해요. 민감한 정보가 실수로 노출되는 일을 막고, 자격 증명을 더 쉽게 저장하고 관리할 수 있어요.

## 주요 개선 사항

### 가려진 시크릿 키

- 보안 저장: 모든 시크릿 키는 안전하게 저장되고, 화면에서는 가려져서 표시돼요.
- 지원하는 인증 방식: **Basic auth**, **Bearer token**, **API key**
- 노출 최소화: 키가 일반 텍스트로 표시되지 않아서 유출 위험이 줄어요.

### 간편한 자격 증명 관리

- 키 관리: 드롭다운 메뉴에서 기존 키를 선택하거나 새 키를 만들 수 있어요.
- 삭제 권한 제한: 에이전시 관리자 또는 키를 만든 사용자만 키를 삭제할 수 있어요.
- 서브 계정 단위 보안: 키는 만든 서브 계정 안에서만 쓸 수 있어요.

## 이번 업데이트가 중요한 이유

1. 보안 강화

   - 시크릿 키가 가려져 있어서 실수로 유출될 가능성이 크게 낮아져요.
   - 키를 실제 값이 아닌 이름으로 구분하므로 위험이 줄어요.
2. 더 세밀한 접근 제어

   - 민감한 자격 증명은 키를 만든 사용자와 서브 계정 단위의 관리자만 수정할 수 있어요.

## 설정 방법

워크플로우 빌더에서 새 Custom Webhook 액션을 추가하고 설정하는 방법이에요.

1. 워크플로우 빌더에서 액션으로 **Custom Webhook**을 선택하세요.
2. 인증 방식을 **Basic auth**, **Bearer token**, **API key** 중에서 고르세요.
3. **Create New Key**(새 키 만들기)를 선택하세요.
4. **key name**(키 이름, 키를 구분하는 이름)을 입력하세요.
5. **key value**(키 값, 실제 자격 증명)를 입력하세요.
6. 저장하면 키가 가려져서 일반 텍스트로 표시되지 않아요.
7. 이후에는 드롭다운 메뉴에서 키를 선택하거나 필요에 따라 삭제하세요.

## 중요 참고 사항

- 삭제 권한: 에이전시 관리자 또는 키를 만든 사용자만 키를 삭제할 수 있어요.
- 기존 키: 새 키로 업데이트하면 이전 키는 자동으로 제거돼요.

![Custom Webhook 액션의 인증 및 키 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064373/original/d90fEX1tr4sa9wyPSUWh0U8BQVvguDAx3A.png?1744643159)

![Custom Webhook 액션의 인증 및 키 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064380/original/OzCNzq-qJdDKgQDDKd2d7-XQZtv-6ZU2tw.png?1744643171)

![Custom Webhook 액션의 인증 및 키 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064383/original/BPZy4-09gQZDgA5rETgzBp5cfL2uF-a4MQ.png?1744643181)

![Custom Webhook 액션의 인증 및 키 설정 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064392/original/1SUoBaiQVlKf3CIzrZSPHUG_dZ41O4DkHg.png?1744643191)

![Custom Webhook 액션의 인증 및 키 설정 화면 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064424/original/0OvsqZI1JfmGPxEE5Nnz7WX1ACOuw0Mf3A.png?1744643209)
