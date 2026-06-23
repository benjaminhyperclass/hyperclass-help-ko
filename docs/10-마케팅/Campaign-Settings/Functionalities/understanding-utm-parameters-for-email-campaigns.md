---

번역일: 2026-04-07
카테고리: 10-마케팅 > Campaign Settings/Functionalities
---

# 이메일 캠페인 UTM 파라미터 이해하기

UTM 추적이 무엇인지, 어떻게 작동하는지, 그리고 Hyperclass 이메일 마케팅에서 이를 활용하여 마케팅 성과를 더 잘 파악하는 방법을 알아보세요.

## UTM 추적이란 무엇인가요?

UTM 파라미터는 URL 끝에 추가되는 짧은 코드입니다. 이는 Google Analytics 같은 도구가 웹사이트 트래픽의 출처를 식별하는 데 도움을 줍니다. Hyperclass 이메일 캠페인에 UTM 파라미터를 포함시키면, 메시지가 웹사이트 트래픽과 전환에 미치는 영향을 분석할 수 있습니다.

현재 구현에서는 기본적으로 지원하는 3가지 UTM 파라미터가 있습니다:

**a. utm_source = email**: 내부 추적 목적으로 기본 선택되어 있는 필수 필드로, 값은 "email"입니다.

**b. utm_medium = email marketing**: 필수 필드이지만 값을 사용자 정의할 수 있습니다. 기본값은 "email marketing"입니다.

**c. utm_campaign = Campaign Name (Send Date)**: 드롭다운에서 값을 선택할 수 있는 선택적 필드입니다.

텍스트로 값을 지정하여 최대 5개까지 추가 파라미터를 이 목록에 추가할 수 있습니다.

## **UTM 파라미터 모범 사례**

- **개인정보 지양**: 개인식별정보(예: 주민등록번호, 주소)는 사용하지 마세요. 이러한 데이터는 분석 플랫폼에서 제한됩니다.

- **필수 파라미터 사용**: 명확성과 효과적인 분석을 위해 utm_source, utm_medium, utm_campaign을 고수하세요.

- **일관된 대소문자**: UTM 파라미터는 대소문자를 구분합니다. 대문자 규칙을 선택하고 일관되게 사용하세요.

- **밑줄 선호**: 인코딩 문제를 방지하기 위해 공백 대신 밑줄(_)을 사용하세요.

## UTM 파라미터가 작동하지 않는 경우

1. **트리거 링크**: 트리거 링크 하위의 링크의 경우, 이번 릴리스 버전에서는 UTM 파라미터가 작동하지 않습니다.

2. **잘못된 구문**: 링크에는 https://와 같은 필요한 접두사가 있어야 하고 올바른 형태여야 합니다. 특히 커스텀 값으로 저장된 경우 더욱 주의해야 합니다.

3. **테스트 이메일**: UTM 파라미터를 테스트하려면 더미 캠페인을 보내는 것이 좋습니다.

## **UTM 파라미터 사용 단계**

- **이메일 마케팅으로 이동**: 플랫폼의 마케팅(Marketing) 섹션으로 이동하세요.

- **설정 접근**: 이메일 캠페인(Email Campaign) 하위의 **설정(Settings)** 페이지를 클릭하세요.

- **추적 옵션 검토**: **추적(Tracking)** 옵션을 클릭하여 기본 UTM 파라미터를 검토하세요.

![UTM 파라미터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046572/original/fI_PPIE21-aT1Yd6u-LMpPirqnNNBaqsyg.png?1722254439)

- **기본 UTM 파라미터 활성화**: 모든 캠페인에 UTM 파라미터를 기본적으로 적용하려면 활성화 스위치를 토글하세요.

- **기본값 편집**: 필요에 따라 utm_medium 또는 utm_campaign 값을 수정하세요.

- **커스텀 파라미터 추가**: **Add Custom Parameter**를 클릭하여 추가 파라미터와 해당 값을 지정하세요.

![커스텀 파라미터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046649/original/929hzznoa3R_PTPyddZje_pSglisCBjXNw.png?1722254559)

- **파라미터 선택**: 캠페인에 추가하려는 UTM 파라미터 옆의 체크박스를 선택하세요.

![파라미터 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046703/original/uYJ62iZfgOdEDWrpOou3Uzz7Wfsj1k7Q6Q.png?1722254616)

- **변경사항 저장**: **저장(Save)**을 클릭하여 설정을 적용하세요.

![설정 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046732/original/kgRF5qcYybs4RpNWmqdck9_TQpjy_qLtug.png?1722254648)

- **특정 캠페인에서 비활성화**: 특정 캠페인에서 UTM 파라미터를 비활성화하려면 **보내기(Send)** 또는 **예약(Schedule)** 페이지에서 추적 옵션을 끄세요.

![특정 캠페인 추적 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046814/original/ydy9bC1vs5nh1NzOMn_2Q34EOHSgZUnr6A.png?1722254677)

---
*원문 최종 수정: Wed, 4 Sep, 2024 at 3:42 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*