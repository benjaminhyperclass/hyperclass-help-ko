---

번역일: 2026-04-06
카테고리: 02-연락처
---

# CSV 파일을 사용한 연락처 가져오기

이 가이드에서는 CSV 파일을 사용하여 Hyperclass로 연락처를 가져오는 방법을 설명합니다. 파일 업로드, 필드 매핑, 데이터 확인 과정을 배우고, 필요시 연락처와 함께 기회 관리 데이터도 동시에 가져오는 방법을 알아보겠습니다.

**중요**: Hyperclass에서는 CSV(.csv) 파일 형식만 지원합니다. Excel이나 Google 스프레드시트 파일은 업로드할 수 없습니다. CSV 파일 형식에 대한 자세한 내용은 [연락처 및 기회 관리 가져오기를 위한 CSV 파일 형식](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities) 가이드를 참고하세요.

**목차**

- [연락처 가져오기 사전 준비사항](#연락처-가져오기-사전-준비사항)
- [흔한 실수 방지하기](#흔한-실수-방지하기)
- [연락처 가져오기](#연락처-가져오기)
  - [1단계: Contacts(연락처) 탭으로 이동](#1단계-contacts연락처-탭으로-이동)
  - [2단계: 가져올 데이터 선택](#2단계-가져올-데이터-선택)
  - [3단계: CSV 파일 업로드](#3단계-csv-파일-업로드)
  - [4단계: 컬럼을 필드에 매핑](#4단계-컬럼을-필드에-매핑)
  - [5단계: 검토, 확인 및 최종 설정](#5단계-검토-확인-및-최종-설정)
- [선택사항: 연락처 및 기회 관리 동시 가져오기](#선택사항-연락처-및-기회-관리-동시-가져오기)
- [가져오기 상태 모니터링](#가져오기-상태-모니터링)
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 가이드](#관련-가이드)

## 연락처 가져오기 사전 준비사항

가져오기 작업을 시작하기 전에 다음 요구사항을 충족하는지 확인하세요:

- **사용자 권한**: Admin(관리자) 권한이 있는 사용자만 연락처를 가져올 수 있습니다.
- **파일 형식**: CSV(.csv) 형식이어야 합니다.
- **파일 크기 제한**: CSV 파일은 30MB 미만이어야 합니다. 더 클 경우 작은 파일로 나누세요.
- **단일 시트 요구사항**: CSV 파일에는 하나의 시트/탭만 포함되어야 합니다.
- **CSV 요구사항**: 첫 번째 행은 비어있으면 안 됩니다! 시스템 필드와 일치하는 컬럼 헤더가 최소 하나는 포함된 헤더 행이 있어야 합니다.

## 흔한 실수 방지하기

❌ **헤더 불일치**: CSV 헤더가 시스템 필드와 일치하는지 확인하세요.

❌ **필수 필드 공백**: 모든 행에는 최소 하나의 필수 필드(이름, 이메일 또는 전화번호)가 있어야 합니다.

❌ **전화번호 특수 문자**: 공백, 대시(-), 문자를 제거하세요.

❌ **CSV 내 중복 레코드**: 가져오기 전에 목록을 정리하세요.

## 연락처 가져오기

CSV 파일 형식을 사용한 연락처 가져오기는 리드, 고객 목록을 Hyperclass로 빠르게 불러오는 가장 효율적인 방법입니다. 다른 CRM에서 이전하거나, 신규 고객을 온보딩하거나, 첫 마케팅 캠페인을 설정할 때 간단한 CSV 파일로 연락처를 빠르게 업로드하고 정리할 수 있습니다. 원한다면 기회 관리 데이터도 동시에 가져와서 파이프라인 설정을 더욱 원활하게 할 수 있습니다.

### 1단계: Contacts(연락처) 탭으로 이동

네비게이션 툴박스에서 Import Contacts(연락처 가져오기) 버튼을 클릭합니다.

![연락처 가져오기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045268769/original/qntGJzsHbNyAo4uqr_KzH2KJyDyMv6lnkg.png?1744890922)

### 2단계: 가져올 데이터 선택

Contacts(연락처)만 가져올지, 아니면 Contacts(연락처)와 Opportunities(기회 관리)를 함께 가져올지 선택합니다.

![가져올 데이터 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045269232/original/hblK0LKqfhz9WHiZfO5xoO0UMuxaLhHALg.png?1744891201)

### 3단계: CSV 파일 업로드

Contacts(연락처) 가져오기를 선택한 후 Next(다음)를 클릭하고, CSV 파일을 업로드합니다. 새 연락처를 추가하는지 기존 연락처를 업데이트하는지에 따라 올바른 가져오기 유형을 선택하세요.

![CSV 파일 업로드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045270049/original/vQyHg0jDGj9TG88kbdLBy_IItrA-4ZWVFQ.gif?1744891799)

**참고**: 연락처를 업데이트할 때 Hyperclass는 다음 순서로 기존 레코드를 확인합니다:
Contact ID → Email → Phone

이 매칭 순서는 정확한 업데이트를 보장하고 중복을 방지합니다. 중복 제거 설정을 변경하거나 [Allow Duplicate Contacts (Contact Deduplication Preferences)](기타/allow-duplicate-contact-explained.md)에 대해 자세히 알아볼 수 있습니다.

### 4단계: 컬럼을 필드에 매핑

파일의 각 컬럼이 시스템의 해당 필드에 올바르게 매핑되었는지 확인합니다. 몇 가지 주의사항:

- "Don't update Empty Values(빈 값 업데이트 안 함)" 체크박스를 선택하면, 가져온 파일에 빈 값이 있고 해당 필드에 이미 값이 있을 경우 업데이트하지 않습니다.
- 특정 필드를 가져오지 않기로 결정했다면, 매핑하지 않은 상태로 두고 하단의 체크박스를 선택하여 진행할 수 있습니다. - "모든 필수 필드가 매핑되었는지 확인하세요. 진행하려면 모든 필드를 매핑하거나 매핑되지 않은 컬럼에 대해 데이터 가져오지 않음을 선택하세요."
- CSV에서 연락처와 기회 관리 데이터가 같은 행에 있으면 자동으로 서로 연결됩니다.

**참고**: CSV 파일에 Hyperclass에 아직 존재하지 않는 필드의 데이터가 포함된 경우, 가져오기를 완료하기 전에 해당 필드를 [Custom Fields(커스텀 필드)](../23-레거시-자동화/Logic-&amp;-Fulfillment/how-to-use-custom-fields.md)로 생성해야 합니다. Hyperclass에서는 CSV 컬럼을 표준 필드와 커스텀 필드 모두에 매핑할 수 있지만, 해당 필드가 계정에 이미 생성되어 있어야 합니다.

![컬럼 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045270487/original/0Kj5Ar-TSLDpndJhF8UKibEgkC1QbQZF8g.gif?1744892075)

### 5단계: 검토, 확인 및 최종 설정

환경설정을 검토하고 필드 매핑을 확인한 후 동의를 확인하여 가져오기를 시작합니다. 이 마지막 단계에서 연락처가 올바르게 태그되고, 정렬되고, 워크플로우에 추가되며, 데이터가 완전히 검증되도록 합니다.

**환경설정: 가져오기 전 선택사항**

- 새 연락처에 대한 스마트 리스트 생성
- 가져온 연락처를 워크플로우에 추가
- 쉬운 세분화를 위해 가져온 연락처에 태그 추가

**필드 매핑 검토**: 모든 필수 필드가 올바르게 매핑되었는지 확인하세요. 커스텀 필드가 의도한 대로 할당되었는지 확인하세요. 선택사항: 매핑되지 않은 컬럼은 자동으로 무시됩니다.

![최종 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045271590/original/VMvcfndMIiLbhM1kZ1_xbnDXXUo-xeLpXQ.gif?1744892718)

## 선택사항: 연락처 및 기회 관리 동시 가져오기

CSV에 연락처와 거래(기회 관리) 정보가 모두 포함된 경우, 동일한 흐름을 사용하여 둘 다 한 번에 가져올 수 있습니다. 이는 새 리드를 영업 파이프라인으로 직접 온보딩하고 가져오기 중에 단계나 거래 금액과 연결하려는 경우 특히 유용합니다. 프로세스는 연락처 가져오기와 정확히 동일하며, 유일한 차이점은 초기 가져오기 설정에서 "Contacts(연락처)"와 "Opportunities(기회 관리)"를 모두 선택하는 것입니다.

Contacts(연락처) 페이지에서 Import(가져오기) 버튼을 클릭한 후, 가져올 객체를 선택하라는 메시지가 나타납니다. 두 개 모두 선택하고 위에 설명한 동일한 단계를 진행하면 됩니다.

![연락처 및 기회 관리 가져오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045272006/original/svNfsDr0fNSalxqv41yASWcbrzcoJg_Aww.png?1744893094)

**팁**: CSV에 기회 관리 관련 컬럼(예: Pipeline, Stage, Status, Opportunity Name)이 포함되어야 해당 데이터가 올바르게 생성됩니다. 필요하지 않다면 필드를 매핑하지 않은 상태로 둘 수 있습니다.

## 가져오기 상태 모니터링

- Contacts(연락처) 및 Opportunities(기회 관리) Bulk Actions(일괄 작업) 페이지를 통해 가져오기 진행 상황과 상태를 모니터링할 수 있습니다.
- 연락처와 기회 관리 가져오기 모두 Bulk Actions(일괄 작업) 하위의 같은 위치에 표시됩니다.
- "Show Stats(통계 보기)" 버튼을 클릭하여 가져오기 통계를 확인하고, 오류 로그를 다운로드하여 "Error(오류)" 탭에서 오류에 대한 자세한 정보와 해결 방법을 볼 수 있습니다.

![가져오기 상태 모니터링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045272144/original/FDJfjgAB0C83p5q7Cc62HjX-HkxheDGMrg.png?1744893191)

## 자주 묻는 질문

**Q: 이메일이나 전화번호 없이 가져올 수 있나요?**
연락처를 생성하려면 이름, 이메일, 전화번호 중 최소 하나는 있어야 합니다.

**Q: CSV의 일부 컬럼을 건너뛸 수 있나요?**
네, 필드 매칭 시 매핑하지 않은 상태로 두면 됩니다.

**Q: 연락처 레코드를 업데이트할 수 있나요?**
네, "Update(업데이트)" 또는 "Create and Update(생성 및 업데이트)"를 선택하고 연락처 ID나 이메일을 기반으로 매칭합니다.

**Q: 이전 가져오기는 어디서 확인할 수 있나요?**
Bulk Actions(일괄 작업)으로 이동하여 가져오기 기록을 볼 수 있습니다.

## 관련 가이드

- [CSV 파일을 사용한 기회 관리 가져오기](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000002517-importing-opportunities-using-a-csv-file)
- [중복 연락처 허용 (연락처 중복 제거 환경설정)](../11-설정/Business-Profile-Settings/allow-duplicate-contacts-contact-deduplication-preferences-.md)
- [연락처 및 기회 관리 가져오기를 위한 CSV 파일 형식](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities)

---
*원문 최종 수정: Wed, 18 Mar, 2026 at 1:37 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*