---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007362-import-companies-custom-objects-using-a-csv-file
번역일: 2026-04-23
카테고리: custom-objects
---

# CSV 파일로 회사 및 커스텀 오브젝트 가져오기

이 아티클은 CSV 파일을 사용하여 회사(Companies)와 커스텀 오브젝트 레코드를 대량으로 가져오는 방법을 설명합니다. 새 레코드를 생성하거나 기존 레코드를 업데이트하거나, 하나의 가져오기 작업으로 두 작업을 모두 수행할 수 있습니다.

이 기능은 다른 CRM에서 데이터를 마이그레이션하거나, 새 고객을 온보딩하거나, 대규모로 체계적인 레코드를 유지 관리할 때 유용합니다.

## 중요사항

가져오기는 CSV(.csv) 파일만 지원합니다.

Excel(.xlsx) 파일과 Google 시트 링크는 지원되지 않습니다.

## 준비 사항

가져오기를 시작하기 전에:

### 사용자 권한

가져오기를 수행하려면 관리자(Admin) 권한이 있어야 합니다.

### 파일 요구사항

- 파일 형식은 .csv여야 함
- 최대 파일 크기: 30MB
- 단일 시트/탭만 가능
- 첫 번째 행에는 반드시 헤더가 있어야 함
- 헤더는 기존 표준 또는 커스텀 필드와 일치해야 함

### 필드 준비

- 필수 필드에는 유효한 값이 포함되어야 함
- 커스텀 필드는 계정에 이미 존재해야 함
- 레코드를 업데이트하는 경우, 올바른 식별자(예: 레코드 ID)를 포함해야 함

## 피해야 할 일반적인 실수

❌ 필수 필드 누락
❌ 기본 필드 값 공백
❌ 업데이트 모드 사용 시 잘못된 레코드 ID
❌ 고유 필드 충돌
❌ CRM 필드 이름과 일치하지 않는 CSV 헤더

항상 작은 파일로 먼저 테스트해보세요.

## 가져오기 모드 설명

CSV를 업로드할 때 다음 세 가지 모드 중 하나를 선택합니다:

### 1️⃣ 생성(Create)

새 레코드만 생성합니다.

- 기본(Primary) 필드가 필요함
- 기존 레코드는 업데이트되지 않음
- 중복 처리는 고유 필드 규칙을 따름(해당하는 경우)

### 2️⃣ 업데이트(Update)

기존 레코드만 업데이트합니다.

- 레코드 ID 또는 커스텀 오브젝트의 경우 고유 필드가 필요함
- 일치하는 레코드 ID/고유 필드가 없는 행은 건너뜀

### 3️⃣ 생성 및 업데이트(Create & Update)

새 레코드를 생성하고 기존 레코드를 업데이트합니다.

- 레코드 ID나 고유 필드가 일치하면 → 레코드 업데이트
- 일치하지 않으면 → 레코드 생성
- 설정된 경우 고유 필드 규칙 적용

## 회사 또는 커스텀 오브젝트 가져오기 방법

### 1단계: 가져오기로 이동

회사의 경우:
- 회사(Companies)로 이동
- 우상단의 가져오기(Import) 클릭

커스텀 오브젝트의 경우:
- 커스텀 오브젝트(Custom Object)로 이동
- 우상단의 가져오기(Import) 클릭

![회사 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686100/original/uLPSIrhNKxA7elGRf1D6VygCSXmZ5WO75A.jpeg?1772024407)

### 2단계: 오브젝트 선택

- 가져올 회사 또는 커스텀 오브젝트를 선택
- 한 번에 하나의 커스텀 오브젝트만 가져올 수 있음

![오브젝트 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686097/original/T_5JEj4jpTBORV1TpCxt1ZiY6tqgkbUPlg.jpeg?1772024406)

### 3단계: CSV 파일 업로드

- CSV 파일 업로드
- 가져오기 모드 선택

![CSV 파일 업로드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686098/original/ITeVr_TSZ1MarBvmthkm8gjnCrVbYOghpQ.jpeg?1772024406)

- 해당하는 경우, 중복 제거에 사용할 고유 필드 선택

### 4단계: 컬럼을 필드에 매핑

각 CSV 컬럼을 올바른 CRM 필드에 연결합니다.

- 필수 필드는 반드시 매핑되어야 함
- 매핑되지 않은 컬럼은 무시할 수 있음
- 성공적으로 매핑된 필드는 녹색 표시기로 표시됨
- 오류나 경고는 하이라이트됨

![필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686099/original/6IQfTTOx-tDafRkGRVj-dHoM7jU5tqgbLg.jpeg?1772024407)

### "빈 값 업데이트 안 함"

활성화된 경우:
- CSV의 빈 셀은 기존 값을 덮어쓰지 않습니다.

비활성화된 경우:
- 빈 셀이 기존 값을 지웁니다(제한된 필드 제외).

## 중복 처리 및 고유 필드

회사나 커스텀 오브젝트에 고유 필드가 포함된 경우:

- 레코드 ID 또는 하나의 고유 필드를 중복 제거 필드로 선택해야 함(여러 개가 매핑된 경우)
- 시스템이 다른 고유 필드의 충돌을 확인
- 선택되지 않은 고유 필드에서 충돌이 발생하면 해당 행은 실패

![중복 처리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686096/original/QW1YEyXq_YptWUnuqMTbRU3-jE8rUZFRZQ.jpeg?1772024406)

이는 깨끗하고 충돌 없는 데이터를 보장합니다.

## 빈 값 업데이트 제한

다음 항목은 빈 값으로 업데이트할 수 없습니다:

- 기본(Primary) 필드
- 필수 필드

이러한 보호 기능은 우발적인 데이터 손실을 방지합니다.

## 가져오기 상태 모니터링

모든 가져오기는 일괄 작업(Bulk Actions)에서 추적할 수 있습니다.

일괄 작업에서 다음을 할 수 있습니다:

- 상태 확인(처리 중, 완료, 실패)
- 일시정지, 재개, 또는 취소(실행 중인 경우)
- 상세 통계 확인
- 오류 로그 다운로드

![가져오기 상태 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686091/original/nn3hmpAXP7BPw562FyfwMMjrqgvdc3TXfA.jpeg?1772024405)

### 가져오기 통계

각 가져오기는 다음을 제공합니다:

탭:
- 전체(All)
- 성공(Success)
- 오류(Error)
- 경고(Warning)

행별 상세 정보:
- 라인 번호
- 레코드 ID
- 기본 필드
- 상태
- 오류/경고 메시지
- 해결 가이드

![가져오기 통계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065686092/original/Gp31DhQtAG-bxzsDn9qDRS4wnIiW28IKng.jpeg?1772024405)

## 자주 묻는 질문

### Q: 여러 커스텀 오브젝트를 한 번에 가져올 수 있나요?

아니요. 한 번에 하나의 커스텀 오브젝트만 가져올 수 있습니다.

### Q: 생성 날짜(Created At) 같은 시스템 필드를 가져올 수 있나요?

아니요. 시스템 필드는 가져오기를 통해 수정할 수 없습니다.

### Q: 고유 필드가 충돌하면 어떻게 되나요?

해당 특정 행이 실패합니다. 나머지 가져오기는 계속 진행됩니다.

### Q: 가져오기를 되돌릴 수 있나요?

아니요. 가져오기는 취소할 수 없습니다. 시작하기 전에 항상 CSV를 검증하세요.

### Q: 과거 가져오기는 어디서 볼 수 있나요?

일괄 작업(Bulk Actions)으로 이동하여 가져오기 히스토리와 통계를 확인하세요.

---
*원문 최종 수정: Wed, 25 Feb, 2026 at 7:02 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*