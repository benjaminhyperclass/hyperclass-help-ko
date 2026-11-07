---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005639-how-to-use-entity-history-in-listings-with-highlevel-audit-logs
번역일: 2026-11-07
카테고리: 31-리셀링
---

# 리스팅의 엔터티 기록을 감사 로그에서 확인하기

**리스팅**의 엔터티 기록(Entity History)은 하이퍼클래스 **감사 로그**와 연결되어 있어요. 리스팅에 어떤 변경이 있었는지, 누가 언제 바꿨는지 한눈에 볼 수 있어요. 규정 준수를 확인하거나 변경 책임을 추적할 때 유용해요.

## 리스팅의 엔터티 기록이란?

엔터티 기록은 리스팅 레코드마다 변경 내역을 자세히 남기는 감사 추적 기능이에요. 사용자가 직접 바꾼 내용이든 시스템이 자동으로 바꾼 내용이든 모두 기록되고, 하이퍼클래스 **감사 로그**에서 확인할 수 있어요. 덕분에 변경 과정이 투명해지고 규정 준수 추적도 쉬워져요.

---

## 엔터티 기록의 주요 장점

엔터티 기록이 운영 관리와 데이터 투명성에 어떻게 도움이 되는지 살펴보세요.

- 리스팅 엔터티별로 전체 변경 이력을 볼 수 있어요.
- 사용자별, 시스템 프로세스별로 변경을 추적할 수 있어요.
- 실시간 기록으로 내부 감사와 규정 준수를 뒷받침해요.
- **리스팅** 화면에서 바로 **감사 로그**로 이동해 기록을 확인할 수 있어요.
- 데이터 수정 내용이 분명하게 남아 협업이 수월해져요.
- 모듈형 로깅 구조라서 앞으로 추가될 시스템 기능에도 대비할 수 있어요.

---

## 감사 로그에서 엔터티 기록 확인하기

감사 로그 화면에서 엔터티 기록을 찾아 리스팅 변경 내역을 확인하는 방법이에요.

1. 서브 계정 대시보드에서 왼쪽 사이드바의 **설정**을 클릭하세요.

   ![서브 계정 왼쪽 사이드바의 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049680443/original/vURz7LXZVid2Xm_E2xekqtXntc-3ijvmpg.png?1752170572)
2. **설정** 안에서 **감사 로그**를 선택하세요.

   ![설정 메뉴에서 감사 로그 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049680473/original/Y7T-fAPiDpZ55ePrW4pdF3pu32avzP8qYQ.png?1752170660)
3. **모듈** 드롭다운 필터에서 **리스팅**을 선택하세요.

   ![모듈 필터에서 리스팅 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049680516/original/gZy7WP22wxR6V74r85RU48aCTsxFr3msYA.png?1752170728)
4. 필터를 사용해 엔터티 ID, 타임스탬프, 사용자 기준으로 정렬하세요.

   ![엔터티 ID, 타임스탬프, 사용자 기준 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049680538/original/mvrpAH5cP52BrNEQmTAEGnzqckZO1kR7Ug.png?1752170763)
5. 엔터티를 클릭하면 전체 변경 타임라인과 데이터 변경 내용을 볼 수 있어요.

---

## 엔터티 기록의 기능 살펴보기

엔터티 기록이 어떤 구조로 동작하는지, 어떤 기능이 있는지 알아보세요.

### 보강된 감사 상세 (Augmented Audit Details)

사용자 ID, 타임스탬프, 엔터티 ID와 함께 변경 전후 데이터를 자세히 기록해요.

### 사용자 식별 (User Attribution)

사용자는 고유 ID로 연결되어 있어서 누가 변경했는지 쉽게 알 수 있어요.

### 모듈형 구조 (Modular Architecture)

앞으로 추가될 리스팅 기능과도 연동할 수 있게 설계되어 있어요.

### 사용자 지정 감사 추적 (Custom Audit Trail)

일반 감사 이벤트를 넘어, 리스팅에서 일어나는 더 폭넓은 작업을 추적해요.

---

## 자주 묻는 질문

### 엔터티 기록 로그를 내보낼 수 있나요?

아니요. 현재는 공개 API를 통해 엔터티 기록 로그를 내보내는 기능을 지원하지 않아요.

### 이 로그는 누가 볼 수 있나요?

**감사 로그** 접근 권한이 있는 사용자만 엔터티 기록을 볼 수 있어요.

### 삭제한 리스팅도 기록에 포함되나요?

네. 삭제도 변경 전후 상태 스냅샷과 함께 기록돼요.

### 시스템이 자동으로 바꾼 변경도 볼 수 있나요?

네. 자동화나 워크플로우로 발생한 변경에는 그에 맞는 표시가 붙어요.
