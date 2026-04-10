---

번역일: 2026-04-06
카테고리: 06-사이트
---

# 설문 부분 완료 시 연락처 생성

설문 응답자가 설문을 진행하면서 단계적으로 연락처 정보를 수집하고 저장할 수 있어, 부분적으로만 완료된 설문에서도 유용한 연락처 데이터를 생성할 수 있습니다.

- **부분 연락처 생성**: 응답자가 모든 슬라이드를 완료하기 전에 설문을 종료하더라도 설문 진행 중에 연락처 정보를 자동으로 저장할 수 있습니다. 이를 통해 부분 응답이 기록되는 즉시 리드나 연락처 데이터를 수집할 수 있습니다.
- **슬라이드 로직 호환성**: 이 기능은 슬라이드 로직과 통합되어, 응답자가 답변에 따라 다른 슬라이드로 건너뛰는 경우에도 연락처 생성이 계속 발생합니다(일부 제한 사항 있음).
- **간편한 설정**: 부분 연락처 생성 활성화는 간단하며, 설문 빌더의 옵션 메뉴에서 직접 수행할 수 있습니다. 이 기능은 설문 과정 전반에 걸쳐 중요한 연락처 정보를 수집하고 유지하는 능력을 향상시킵니다.

---

## 부분 완료 활성화 및 사용 방법

Sites(사이트) > Survey(설문) > Builder(빌더) > Add Survey(설문 추가)로 이동합니다.
![설문 빌더 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036592128/original/AbIyZ-wu1D5v33OAOMhfcYDeYO78Iutc0w.png?1731609922)

Survey Builder(설문 빌더)에서 Options(옵션)을 열고 "Create Contact on Partial Submission(부분 제출 시 연락처 생성)"을 토글로 켭니다.

첫 번째 슬라이드에 연락처 정보를 배치하여 연락처 레코드를 생성할 수 있는 정보가 있도록 합니다.
![연락처 정보 배치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036591689/original/vmw5Caw_AEam7R6YaphjPKBrEyKTlBkhbQ.png?1731608934)

설문 응답자가 첫 번째 슬라이드를 작성하고 Next(다음) 버튼을 클릭합니다.
![첫 번째 슬라이드 작성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036591561/original/x77t4bZRFEkh43LmjSUVs2fOovyO8IOInw.png?1731608740)

나머지 설문이 완료되고 제출되기 전에 연락처가 생성됩니다.
![연락처 생성 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036591628/original/fnqHzm7_dWwnRSoVpPBmdAmmW6j0Yois-g.png?1731608819)

---

## 부분 완료의 알려진 제한사항

2024년 11월 기준으로 부분 완료가 복잡한 슬라이드 로직과 상호작용하는 방식에 제한이 있습니다. 모범 사례는 설문 앞부분에 기본적인 연락처 정보 필드를 배치하는 것입니다. 마지막 또는 마지막에서 두 번째 슬라이드로 즉시 건너뛰지 마세요.

- **마지막 슬라이드로 건너뛸 경우 부분 연락처 지원 안됨**: 슬라이드 로직이 마지막 슬라이드로 직접 건너뛰는 경우, 부분 연락처 생성이 지원되지 않습니다. 시스템은 마지막 슬라이드를 최종 제출로 처리하며, 부분 제출 기능이 실행되지 않습니다.
- **마지막에서 두 번째 슬라이드에서 연락처 업데이트 안됨**: 마지막에서 두 번째 슬라이드(최종 슬라이드 바로 전)로 건너뛸 때는 연락처 정보가 업데이트되지 않습니다. 연락처는 최종 제출 시에만 완료되고 업데이트됩니다.

---
*원문 최종 수정: Thu, 14 Nov, 2024 at 1:08 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*