---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping
번역일: 2026-04-23
카테고리: Facebook > 폼 필드 매핑
---

# Facebook 폼 필드 매핑

## 개요

이 가이드는 연결된 Facebook 리드 광고 폼의 필드를 CRM 연락처 필드에 매핑하는 방법을 설명합니다. 필드 매핑을 통해 Facebook 폼으로 제출된 데이터(이름, 전화번호, 이메일 등)가 연락처 레코드에 올바르게 전송되어 원활한 후속 조치와 자동화가 가능해집니다.

**목차**

- [개요](#개요)
- [폼 매핑 방법](#폼-매핑-방법)
- [커스텀 필드 생성 방법](#커스텀-필드-생성-방법)
- [Facebook 연동 관련 추가 지원 문서](#facebook-연동-관련-추가-지원-문서)

## 폼 매핑 방법

**1단계.** Facebook 연동을 CRM과 연결합니다. (상세한 생성 과정은 지원 문서를 참조하세요)

**2단계.** Facebook과 CRM 연동이 설정되면, Facebook 리드 폼의 필드를 CRM의 관련 필드와 매핑해야 합니다. (`Settings(설정) → Integrations(연동) → Form field Mapping(폼 필드 매핑)`)

**3단계.** **기본 필드**는 자동으로 매핑됩니다:

- full_name → Contact Name(연락처 이름)
- email → Email(이메일)
- phone_number → Phone(전화번호)

커스텀 필드의 경우:

- CRM에서 연락처 커스텀 필드를 생성할 수 있습니다.
- 그런 다음 Facebook 폼 필드를 적절한 커스텀 필드에 수동으로 매핑합니다.

**4단계.** 매핑이 완료되면 토글 버튼이 활성화되어 상태가 활성으로 표시되고, 필드 매핑 상태가 "**Edit Fields(필드 편집)**"로 표시됩니다.

참고: Facebook 폼의 필드 타입과 CRM의 필드 타입이 일치해야 합니다.

![Facebook 폼 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437611/original/ILkW_ECp9M5dJgSexjcr7E5DqJITDXoLUQ.png?1746970720)

![Facebook 폼 필드 매핑 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437656/original/av5GV4rystHg1X1ODRcmts4DV2yuHI24zQ.png?1746970879)

## 커스텀 필드 생성 방법

- `Settings(설정) → Custom Fields(커스텀 필드)`로 이동합니다
- "**+ Add Custom Field(커스텀 필드 추가)**" 버튼을 클릭합니다
- 객체 타입을 선택합니다 (이 경우 Contacts(연락처))
- 필드 이름, 타입(텍스트, 드롭다운, 체크박스, 날짜 등)을 입력하고, 선택적으로 커스텀 섹션 아래에 그룹화합니다
- 커스텀 필드를 저장합니다

저장되면 해당 엔터티 타입이 사용되는 CRM의 모든 영역에서 커스텀 필드를 사용할 수 있습니다.

Facebook 리드 광고 사용 시 지원되는 커스텀 필드:

- TEXT(텍스트)
- LARGE_TEXT(긴 텍스트)
- NUMERICAL(숫자)
- PHONE(전화번호)
- MONETARY(금액)
- DATE(날짜)
- DROPDOWN (single)(단일 선택 드롭다운)

![커스텀 필드 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437709/original/vTC81u865ClCs_2pNIvw8ANDfebVsXT0Ag.png?1746971076)

![커스텀 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437711/original/cP8ciDJuHM9ShhkSrIzLAC9NumIzYyOXJw.png?1746971094)

Facebook 폼 생성 시 설정에서 Facebook 폼의 필드 이름을 업데이트하지 않는 것을 권장합니다. 이는 LC 측에서 매핑에 영향을 줄 수 있기 때문입니다:

![Facebook 폼 설정 주의사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437675/original/EXZ1scbZaLhhfB0FMuagxPXWQ_XCX9x3QQ.jpeg?1746970980)

![Facebook 폼 필드 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437676/original/Poq6oIdnHeKbO8GlGwv7aqkhnpEusW4pIQ.jpeg?1746970981)

## Facebook 연동 관련 추가 지원 문서

- [Facebook 다중 페이지 설정](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide)
- [Facebook 페이지 선택 가이드](https://help.leadconnectorhq.com/support/solutions/articles/155000005228-page-selection-guide)
- [Facebook 다중 페이지 문제 해결](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot)
- [Facebook / Instagram 설정 및 문제 해결](https://help.leadconnectorhq.com/support/solutions/articles/155000005226-messaging-setup-troubleshoot)

---
*원문 최종 수정: Tue, 22 Jul, 2025 at 9:59 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*