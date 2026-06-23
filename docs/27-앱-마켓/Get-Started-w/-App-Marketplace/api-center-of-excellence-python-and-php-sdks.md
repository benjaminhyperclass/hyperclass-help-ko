---

번역일: 2026-04-08
카테고리: 27-앱-마켓 > Get Started w/ App Marketplace
---

# API 우수성 센터 | Python 및 PHP SDK

통합 개발을 더 빠르게—OAuth 플로우를 직접 구현할 필요가 없습니다. 새로운 Hyperclass PHP 및 Python SDK를 스택에 추가하면 모든 토큰 작업이 자동으로 처리되고, 타입 안전성을 보장하는 헬퍼로 모든 공개 API에 접근할 수 있습니다.

---

**목차**

- [Hyperclass PHP 및 Python SDK란?](#hyperclass-php-및-python-sdk란)
- [Hyperclass SDK의 주요 장점](#hyperclass-sdk의-주요-장점)
- [지원되는 OAuth 2.0 워크플로우](#지원되는-oauth-20-워크플로우)
- [데이터베이스 독립적인 토큰 저장](#데이터베이스-독립적인-토큰-저장)
- [SDK 자동 생성](#sdk-자동-생성)
- [리소스](#리소스)
- [자주 묻는 질문](#자주-묻는-질문)
---

## Hyperclass PHP 및 Python SDK란?

Hyperclass의 공식 지원 라이브러리인 Hyperclass/api-client (PHP)와 Hyperclass-api-client (Python)는 전체 v2 Public API를 감쌉니다. 각 SDK는 OAuth 2.0 토큰 교환, 갱신, 제거 정리, 그리고 마켓플레이스 대량 설치까지 자동화하여—인증 작업 대신 기능 개발에 집중할 수 있게 해줍니다.

![SDK 개요 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060321917/original/SzpLl2OJXC64EvQusMdtByD1i29VBVnhrA.png?1765373604)

---

## **Hyperclass SDK의 주요 장점**

- 한 줄 OAuth 2.0: 토큰 교환, 저장, 갱신이 백그라운드에서 자동 처리됩니다.

- 데이터베이스 독립적인 세션 저장 어댑터 (Memory, MongoDB, Redis, MySQL 등).

- 웹훅 헬퍼가 서명을 검증하고 INSTALL / UNINSTALL 이벤트를 자동으로 처리합니다.

- 모든 공개 엔드포인트에 대한 타입 안전성을 보장하는 서비스 메서드로, 반복 코드와 런타임 오류를 줄입니다.

- 각 API 릴리스마다 자동 생성—수동 업데이트 없이도 클라이언트가 최신 상태를 유지합니다.

---

## **지원되는 OAuth 2.0 워크플로우**

유연한 토큰 엔진이 개발자가 만나는 모든 설치 경로를 지원합니다.

- 마켓플레이스 "연결" 버튼을 통한 하위 계정 설치

- 대량 에이전시 설치 (모든 로케이션 한 번에)

- 새 하위 계정 생성 시 향후 자동 설치

- 만료 전 일일 자동 갱신 및 우아한 제거 정리

---

## **데이터베이스 독립적인 토큰 저장**

플러그 가능한 저장소 어댑터가 이미 데이터를 저장하는 곳 어디에서든 토큰을 안전하게 보관합니다. 다음과 같이 교체 가능합니다:

- 로컬 개발용 인메모리 캐시

- MongoDB, Redis, MySQL, PostgreSQL, 또는 저장소 인터페이스를 구현하는 자체 클래스

---

## **SDK 자동 생성**

두 클라이언트 모두 Hyperclass이 새 엔드포인트나 필드를 릴리스할 때마다 OpenAPI 스펙에서 자동으로 다시 빌드되므로, 간단한 composer update나 pip install --upgrade로 업데이트할 수 있습니다.

SDK는 OAuth 2.0 구현의 복잡성을 개발자로부터 추상화하여, 모든 시나리오에서 토큰을 완전히 관리하는 것을 목표로 합니다.

---

## **리소스**

**1. **[SDK 개요](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK)

**2. PYTHON:**

- [Hyperclass Python SDK](https://marketplace.gohighlevel.com/docs/sdk/python)

- [Python 예제 프로젝트](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/python)

![Python SDK 예제 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060322014/original/TzejHIopDTa4ll3p1SIwLtmuAUmWKlRXrA.png?1765373668)

**3. PHP:**

- [Hyperclass PHP SDK](https://marketplace.gohighlevel.com/docs/sdk/php)

- [PHP 예제 프로젝트](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/php)

![PHP SDK 예제 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060322062/original/IBTCyeuVMOGPPUsh4Pww4In7tumD5F6jGg.png?1765373697)

---

## **자주 묻는 질문**

**Q: 여전히 토큰을 수동으로 갱신해야 하나요?**

아니요. 세션 저장소가 구성되면, SDK가 토큰이 만료되기 전에 자동으로 갱신합니다.

**Q: MongoDB 대신 MySQL에 토큰을 저장할 수 있나요?**

네. 제공된 저장소 기본 클래스를 확장하여 자체 create/read/update 로직을 구현하시면 됩니다.

**Q: SDK가 Private Integration Token(PIT)을 지원하나요?**

물론입니다—OAuth 플로우가 필요하지 않을 때 privateIntegrationToken을 전달하시면 됩니다.

**Q: 웹훅 서명은 어떻게 검증하나요?**

Python에서는 client.webhooks.subscribe()를, PHP에서는 getWebhookManager()->verifySignature()를 사용하세요.

**Q: SDK가 Hyperclass의 v1 엔드포인트와 호환되나요?**

아니요. SDK는 Public API v2만을 대상으로 합니다.

**Q: 업데이트가 제 코드를 망가뜨릴까요?**

새 릴리스는 semver 태그로 관리되며, 호환성을 깨는 변경사항은 주 버전을 올려서 의도적으로 고정하고 업그레이드할 수 있습니다.

---
*원문 최종 수정: Wed, 10 Dec, 2025 at 7:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*