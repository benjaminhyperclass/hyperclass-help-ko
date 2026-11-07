---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007631-apify-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우의 Apify 액션·트리거(Apify Actions & Triggers)

하이퍼클래스 워크플로우를 Apify와 연결하면 스크래핑 작업과 액터 실행을 자동화에 넣고, 외부 데이터를 가져와 쓸 수 있어요. 웹훅을 따로 설정하거나 별도의 연결 도구를 쓸 필요가 없어요. 이 문서에서는 연동이 무엇인지, 계정은 어떻게 연결하는지, 워크플로우에서 어떻게 설정하는지 안내해요.

## Apify 액션·트리거란?

Apify 액션과 트리거는 하이퍼클래스 워크플로우와 Apify를 이어 줘요. 이 연동으로 스크래핑과 데이터 수집 작업을 자동화 흐름에 넣을 수 있어요.

- 트리거: Apify 작업이 끝났을 때 하이퍼클래스가 반응해요.
- 액션: 하이퍼클래스가 Apify에 작업을 보내고, 그 결과 데이터를 받아 와요.

그래서 리드 발굴, 데이터 보강, 외부 데이터 처리를 하나의 워크플로우 안에서 자동화할 수 있어요.

## 이럴 때 유용해요

- **데이터 수집 자동화**: 워크플로우에서 Apify 작업을 시작해, 수동으로 내보내거나 별도 연결 도구를 쓰지 않고 외부 데이터를 모아요.
- **빠른 데이터 보강**: 스크래핑한 웹사이트·업체 데이터로 연락처 정보, 세분화, 후속 워크플로우를 개선해요.
- **더 빠른 대응**: Apify 액터나 태스크가 끝나면 워크플로우가 시작되어, 팀이 최신 데이터를 바로 활용할 수 있어요.
- **도구 간 수동 설정 감소**: Apify 활동과 하이퍼클래스 워크플로우 로직을 하나의 자동화 흐름으로 묶어요.
- **유연한 워크플로우 구성**: 하이퍼클래스 이벤트로 스크래핑을 시작할 수도 있고, Apify 작업 완료 이벤트로 하이퍼클래스 액션을 시작할 수도 있어요.

## 시작하기 전에 확인할 것

워크플로우를 만들기 전에 아래 조건을 먼저 확인하세요. 미리 준비하면 연결 문제를 줄이고 테스트도 수월해요.

- 워크플로우를 실행할 하이퍼클래스 서브 계정에서 **자동화 > 워크플로우**에 접근할 수 있어야 해요.
- 유효한 API 키가 있는 Apify 계정이 필요해요.
- 워크플로우 빌더 밖에서 Apify를 연결하려면 **설정 > 연동**에 접근할 수 있어야 해요.
- 이 액션과 트리거의 요금 부과 방식에 따라, 프리미엄 워크플로우 사용 요금이 적용될 수 있어요.

## Apify 계정 연결하기

Apify 계정을 연결해야 워크플로우에서 Apify 액션과 트리거를 쓸 수 있어요. 연결할 때는 Apify API 키를 사용해요. API 키가 하이퍼클래스와 Apify 계정 간의 통신을 승인해 줘요.

1. 하이퍼클래스에서 **자동화 > 워크플로우**를 열고 Apify 액션이나 트리거를 아무거나 추가하세요.
   - 아직 연결하지 않았다면 **Connect Now**(지금 연결)를 클릭하고 ClickUp에 로그인해 접근을 승인하세요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
   - 이미 연결했다면 해당 단계의 필드가 바로 불러와져요.

   ![워크플로우에서 Apify 액션 또는 트리거를 추가하고 계정을 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070206564/original/xv9hTqarTTj6d62jAUzaUoHnwcsgnJGTJA.png?1777459502)
2. 다른 방법으로는 서브 계정 **설정 > 연동 > ClickUp > 연결**로도 연결할 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 -->

   ![설정의 연동 화면에서 계정을 연결하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070206447/original/CQGm9419Kh-3Z-ioGGJbRbsJQaunhq55lw.png?1777459428)

## 사용할 수 있는 트리거 (Apify → 하이퍼클래스)

Apify 트리거를 쓰면 Apify에서 작업이 끝났을 때 하이퍼클래스 워크플로우가 시작돼요. 스크래핑이나 데이터 처리가 끝난 뒤에 다음 단계를 진행하고 싶을 때 유용해요.

| 트리거 | 설명 |
| --- | --- |
| **Finished Actor Run**(액터 실행 완료) | Apify 액터 실행이 끝나면 워크플로우를 시작해요. |
| **Finished Task Run**(태스크 실행 완료) | Apify 태스크 실행이 끝나면 워크플로우를 시작해요. |

## 사용할 수 있는 액션 (하이퍼클래스 → Apify)

Apify 액션을 쓰면 하이퍼클래스 워크플로우가 Apify에 요청을 보내고, 돌려받은 결과를 활용할 수 있어요. 하이퍼클래스에서 일어난 이벤트로 스크래핑, 데이터 보강, 데이터 조회를 시작하고 싶을 때 유용해요.

| 액션 | 설명 |
| --- | --- |
| **Run A Task**(태스크 실행) | 미리 만들어 둔 Apify 태스크를 실행해요. |
| **Run An Actor**(액터 실행) | 워크플로우에서 전달한 입력값으로 Apify 액터를 시작해요. |
| **Scrape Single URL**(단일 URL 스크래핑) | 웹페이지 한 곳에서 구조화된 데이터를 추출해요. |
| **Fetch Dataset Items**(데이터셋 항목 가져오기) | Apify 실행 결과로 나온 출력 데이터를 가져와요. |
| **Find Last Task Run**(마지막 태스크 실행 찾기) | 가장 최근 태스크 실행의 상세 정보를 돌려줘요. |
| **Find Last Actor Run**(마지막 액터 실행 찾기) | 가장 최근 액터 실행의 상세 정보를 돌려줘요. |

## Apify 액션·트리거 설정하기

순서대로 설정하면 워크플로우가 의도한 방향으로 실행되고, 필요할 때 데이터를 기다렸다가 결과를 안정적으로 처리해요. 먼저 간단한 사례로 테스트해서 필드 연결과 타이밍을 확인하는 것이 좋아요.

### 1. 워크플로우 열기

**자동화 > 워크플로우**로 이동해 새 워크플로우를 만들거나 기존 워크플로우를 여세요.

![자동화 > 워크플로우에서 워크플로우를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070207399/original/uYPogS-f6yfRuqHG9ZHDj6VpgUXfhHGsmQ.png?1777459883)

### 2. Apify 연결하기

Apify 단계를 추가하고 API 키로 계정을 연결하세요. 또는 **설정 > 연동**에서 Apify를 먼저 연결해도 돼요.

![Apify 계정을 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070206698/original/HlG5-cBy21zcoslGH1oc-aPFl1jxeQz9wQ.png?1777459584)

### 3. 워크플로우 방향 정하기

목적에 맞는 구성 방식을 고르세요.

- Apify → 하이퍼클래스 (트리거 먼저): Apify 실행이 끝난 뒤에 워크플로우를 시작하려면 Apify 트리거를 사용해요.

  ![Apify 트리거로 시작하는 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070207941/original/rEY2PtMBLlGnYL90NJI_paNQnQBAdGvZOQ.png?1777460110)

- 하이퍼클래스 → Apify (액션 먼저): 하이퍼클래스 이벤트로 스크래핑이나 데이터 조회를 시작하려면 Apify 액션을 사용해요.

  ![Apify 액션으로 시작하는 워크플로우 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070207964/original/q3ld6aHCHp0w3xvmXSyg62Ei63lFHC9HWQ.png?1777460135)

### 4. 트리거 또는 액션 설정하기

사용할 Apify 트리거나 액션을 설정하세요.

예를 들면 이렇게 선택해요.

- 액터가 끝난 뒤 하이퍼클래스가 반응하게 하려면 **Finished Actor Run**을 선택해요.
- 저장해 둔 Apify 태스크를 워크플로우에서 시작하려면 **Run A Task**를 선택해요.
- 웹페이지 한 곳에서 구조화된 데이터를 모으려면 **Scrape Single URL**을 선택해요.

![Apify 트리거 또는 액션을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070208124/original/U_xyUwD_OBQd8fCr_jIC3itp57In5S-fZw.png?1777460207)

### 5. 결과 데이터를 가져오기 전에 Wait 단계 넣기

워크플로우에서 Apify 액터나 태스크를 시작한 뒤 그 결과가 필요하다면, **Find Last Actor Run**, **Find Last Task Run**, **Fetch Dataset Items** 앞에 **Wait**(대기) 단계를 추가하세요. 하이퍼클래스가 돌려받은 데이터를 처리하기 전에 Apify 실행이 끝날 시간을 확보할 수 있어요.

### 6. 테스트하고 게시하기

먼저 작은 규모로 테스트하고, 돌려받은 데이터가 올바른지 확인하세요. 필드 연결과 액션이 모두 의도대로 동작하면 워크플로우를 게시하세요.

## 활용 사례

실제 사례를 보면 Apify를 자동화에 어떻게 쓸지 정하기 쉬워요. 아래 사례는 에이전시와 기업이 스크래핑한 데이터나 구조화된 데이터를 하이퍼클래스에서 활용하는 방법이에요.

### 사례 1: Google Maps로 지역 업체 리드 생성하기

목표: 아웃리치 캠페인에 쓸 지역 리드를 자동으로 만들어요.

워크플로우 구성:

- 트리거: **Finished Actor Run**(Apify의 Google Maps 스크래퍼)
- 액션: **Fetch Dataset Items**
- 액션: **Create/Update Contact**(연락처 생성/업데이트)
- 액션: **Add to Workflow**(워크플로우에 추가, 이메일/SMS 캠페인)

예시:
마케터가 Apify 액터로 한 도시의 치과 정보를 스크래핑해요. 작업이 끝나면 리드가 하이퍼클래스에 자동으로 추가되고, 각 리드가 이메일과 SMS 후속 발송이 이어지는 콜드 아웃리치 캠페인에 등록돼요.

![Google Maps 리드 생성 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068883142/original/8Sfxq06fDWoMU90HR2KZHCOSQrVLS0vGAA.png?1775822234)

### 사례 2: 경쟁사 모니터링과 즉시 알림

목표: 경쟁사의 변화를 추적하고 빠르게 대응해요.

워크플로우 구성:

- 트리거: **Finished Task Run**(웹사이트/상품 스크래퍼)
- 액션: **Fetch Dataset Items**
- 액션: **Send Internal Notification**(내부 알림 보내기)
- 액션: **Create Task**(작업 만들기, 하이퍼클래스)

예시:
Apify 태스크가 경쟁사 웹사이트나 가격 페이지를 모니터링해요. 변경이 감지되면 워크플로우가 시작되고, 마케팅팀에 알림이 가요. 광고나 가격 전략 수정 같은 대응 작업도 함께 만들어져요.

![경쟁사 모니터링 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068883198/original/vDSpHBEwPg8BMN9E2tKL7unZqzkbbMXehw.png?1775822281)

## 자주 묻는 질문

### 대용량 데이터셋은 어떻게 처리하나요?
액터나 태스크를 실행한 뒤에 **Wait** 단계를 추가하세요. 그다음 **Fetch Dataset Items**로 데이터를 가져와, 돌려받은 데이터를 처리하기 좋은 크기의 워크플로우 단계로 나눠서 처리하세요.

### Apify 액션과 트리거를 쓰면 비용이 드나요?
네. 사용 방식에 따라 Apify 계정 기준의 Apify 요금이 발생할 수 있어요. 해당하는 경우 하이퍼클래스의 프리미엄 워크플로우 사용 요금도 함께 적용돼요.

### 하이퍼클래스에서 Apify는 어디서 연결하나요?
**자동화 > 워크플로우** 안의 Apify 단계에서 연결할 수 있어요. **설정 > 연동**에서도 연결할 수 있어요.

### 데이터가 반환되지 않으면 어떻게 하나요?
Apify 실행이 정상적으로 끝났는지 확인하세요. 올바른 액션을 썼는지도 점검하고, 결과를 가져오기 전에 **Wait** 단계를 추가한 뒤 작은 샘플로 다시 테스트해 보세요.
