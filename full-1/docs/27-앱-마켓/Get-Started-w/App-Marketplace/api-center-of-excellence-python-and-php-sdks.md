---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007096-api-center-of-excellence-python-and-php-sdks
번역일: 2026-11-07
카테고리: 27-앱-마켓
---

# Python·PHP SDK로 연동 빠르게 개발하기 (API Center of Excellence)

하이퍼클래스 PHP·Python SDK를 쓰면 OAuth 인증 흐름을 직접 만들지 않고도 연동을 빠르게 개발할 수 있어요. 토큰 관리는 SDK가 자동으로 처리하고, 모든 공개 API를 타입이 지정된 헬퍼 메서드로 호출할 수 있어요.

## 하이퍼클래스 PHP·Python SDK란?

공식 지원 라이브러리인 `gohighlevel/api-client`(PHP)와 `gohighlevel-api-client`(Python)는 v2 공개 API 전체를 감싸고 있어요. 두 SDK는 다음 작업을 자동으로 처리해요.

- OAuth 2.0 토큰 교환
- 토큰 갱신(rotation)
- 앱 삭제 시 정리 작업
- 마켓플레이스 일괄 설치

덕분에 인증 코드를 짜는 대신 기능 개발에 집중할 수 있어요.

![SDK 구조 개요 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060321917/original/SzpLl2OJXC64EvQusMdtByD1i29VBVnhrA.png?1765373604)

## SDK의 주요 장점

- 한 줄로 OAuth 2.0을 처리해요. 토큰 교환, 저장, 갱신이 내부에서 자동으로 이루어져요.
- 데이터베이스에 구애받지 않는 세션 저장 어댑터를 제공해요(Memory, MongoDB, Redis, MySQL 등).
- 웹훅 헬퍼가 서명을 검증하고 INSTALL / UNINSTALL 이벤트를 자동으로 처리해요.
- 모든 공개 엔드포인트에 타입이 지정된 서비스 메서드가 있어, 반복 코드와 런타임 오류가 줄어요.
- API가 릴리스될 때마다 자동으로 생성되므로, 직접 업데이트하지 않아도 클라이언트가 최신 상태로 유지돼요.

## 지원하는 OAuth 2.0 워크플로우

유연한 토큰 엔진이 개발자가 만나는 모든 설치 경로를 지원해요.

- 마켓플레이스의 **연결** 버튼으로 하는 서브 계정 설치
- 에이전시 일괄 설치(서브 계정 전체를 한 번에)
- 새 서브 계정이 만들어질 때 이어지는 자동 설치
- 만료 전 매일 자동으로 이루어지는 토큰 갱신, 그리고 앱 삭제 시 깔끔한 정리

## 데이터베이스에 구애받지 않는 토큰 저장

교체할 수 있는 저장 어댑터를 쓰면, 이미 데이터를 저장하고 있는 곳에 토큰도 안전하게 보관할 수 있어요. 다음 중에서 골라 쓰세요.

- 로컬 개발용 메모리 캐시
- MongoDB, Redis, MySQL, PostgreSQL, 또는 저장소 인터페이스를 구현한 직접 만든 클래스

## SDK 자동 생성

두 클라이언트는 새 엔드포인트나 필드가 릴리스될 때마다 OpenAPI 명세를 바탕으로 자동으로 다시 만들어져요. 그래서 `composer update` 또는 `pip install --upgrade` 한 번이면 업데이트할 수 있어요.

SDK는 OAuth 2.0 구현의 복잡함을 개발자에게서 덜어 주고, 모든 상황에서 토큰을 대신 관리해 주는 것을 목표로 해요.

## 리소스

1. SDK 개요(SDK OVERVIEW)

2. Python
   - 하이퍼클래스 Python SDK
   - [예제 Python 프로젝트](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/python)

     ![Python 예제 프로젝트 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060322014/original/TzejHIopDTa4ll3p1SIwLtmuAUmWKlRXrA.png?1765373668)

3. PHP
   - 하이퍼클래스 PHP SDK
   - [예제 PHP 프로젝트](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/php)

     ![PHP 예제 프로젝트 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060322062/original/IBTCyeuVMOGPPUsh4Pww4In7tumD5F6jGg.png?1765373697)

{% hint style="info" %}
SDK 개요와 SDK 문서의 위치가 궁금하면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

## 자주 묻는 질문

### 토큰을 계속 수동으로 갱신해야 하나요?

아니요. 세션 저장소를 설정해 두면 SDK가 토큰이 만료되기 전에 자동으로 갱신해요.

### MongoDB 대신 MySQL에 토큰을 저장할 수 있나요?

네. 제공되는 저장소 기본 클래스를 확장해서 생성·조회·수정 로직을 직접 구현하면 돼요.

### SDK에서 비공개 연동 토큰(PIT)을 쓸 수 있나요?

네. OAuth 흐름이 필요 없다면 `privateIntegrationToken`을 전달하세요.

### 웹훅 서명은 어떻게 검증하나요?

Python에서는 `client.webhooks.subscribe()`를, PHP에서는 `getWebhookManager()->verifySignature()`를 사용하세요.

### SDK는 하이퍼클래스의 v1 엔드포인트와도 호환되나요?

아니요. SDK는 공개 API v2만 지원해요.

### SDK를 업데이트하면 기존 코드가 깨지나요?

새 릴리스에는 semver 태그가 붙어요. 기존 코드가 깨질 수 있는 변경은 메이저 버전을 올리므로, 버전을 고정해 두었다가 원하는 시점에 업그레이드할 수 있어요.
