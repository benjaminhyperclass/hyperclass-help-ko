---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002929-understanding-utm-parameters-for-email-campaigns
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 이메일 캠페인의 UTM 파라미터 이해하기

UTM 트래킹이 무엇이고 어떻게 작동하는지, 하이퍼클래스 이메일 마케팅에서 어떻게 쓰는지 알아봐요. 마케팅 성과를 더 정확하게 파악하고 싶을 때 참고하세요.

[동영상](https://www.youtube.com/embed/yfxjM9FbnDI?&wmode=opaque)

## UTM 트래킹이란?

UTM 파라미터는 URL 끝에 붙이는 짧은 코드예요. Google Analytics 같은 도구가 웹사이트 방문자가 어디에서 왔는지 알아보는 데 쓰여요. 하이퍼클래스 이메일 캠페인에 UTM 파라미터를 넣으면 이메일 내용이 웹사이트 방문과 전환에 어떤 영향을 주는지 분석할 수 있어요.

현재는 기본으로 3가지 UTM 파라미터를 지원해요.

- `utm_source` = email: 필수 항목이고 기본으로 선택되어 있어요. 값은 내부 추적용으로 "email"이 들어가요.
- `utm_medium` = email marketing: 필수 항목이지만 값은 바꿀 수 있어요. 기본값은 "email marketing"이에요.
- `utm_campaign` = **캠페인 이름**(발송일): 선택 항목이에요. 값은 드롭다운에서 고를 수 있어요.

이 목록에는 파라미터를 최대 5개까지 더 추가할 수 있어요. 추가할 때는 값을 텍스트로 직접 입력해요.

## UTM 파라미터 사용 요령

1. 개인 식별 정보는 넣지 마세요. 주민등록번호, 주소 같은 정보는 분석 플랫폼에서 제한하는 데이터예요.
2. 꼭 필요한 파라미터만 쓰세요. 명확하게 분석하려면 `utm_source`, `utm_medium`, `utm_campaign`만 쓰는 게 좋아요.
3. 대소문자를 통일하세요. UTM 파라미터는 대소문자를 구분해요. 대소문자 규칙을 하나 정해 일관되게 쓰세요.
4. 공백 대신 밑줄(\_)을 쓰세요. 인코딩 문제를 피할 수 있어요.

## UTM 파라미터가 적용되지 않는 경우

1. **트리거 링크**: **트리거 링크**에 들어 있는 링크에는 이번 버전에서 UTM 파라미터가 적용되지 않아요.
2. 잘못된 형식의 링크: 링크에는 https:// 같은 앞부분이 있어야 하고 형식도 정확해야 해요. 특히 커스텀 값에 저장한 링크라면 더 꼼꼼히 확인하세요.
3. 테스트 이메일: UTM 파라미터를 확인하려면 테스트용 캠페인을 발송해 보는 것이 좋아요.

## UTM 파라미터 사용 단계

1. **이메일 마케팅**(Email Marketing)으로 이동하세요.
2. **이메일 캠페인** 아래에 있는 **설정** 페이지를 클릭하세요.
3. **추적**을 클릭해 기본 UTM 파라미터를 확인하세요.

   ![추적 옵션에서 기본 UTM 파라미터를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046572/original/fI_PPIE21-aT1Yd6u-LMpPirqnNNBaqsyg.png?1722254439)
4. 모든 캠페인에 UTM 파라미터를 기본으로 적용하려면 활성화 토글을 켜세요.
5. 필요하면 `utm_medium` 또는 `utm_campaign`의 기본값을 수정하세요.
6. 파라미터를 더 추가하려면 **Add Custom Parameter**(사용자 지정 파라미터 추가)를 클릭하고 파라미터와 값을 입력하세요.

   ![사용자 지정 파라미터를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046649/original/929hzznoa3R_PTPyddZje_pSglisCBjXNw.png?1722254559)
7. 캠페인에 넣을 UTM 파라미터 옆의 체크박스를 선택하세요.

   ![캠페인에 넣을 UTM 파라미터를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046703/original/uYJ62iZfgOdEDWrpOou3Uzz7Wfsj1k7Q6Q.png?1722254616)
8. **저장**을 클릭해 설정을 적용하세요.

   ![저장 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046732/original/kgRF5qcYybs4RpNWmqdck9_TQpjy_qLtug.png?1722254648)
9. 특정 캠페인에서만 UTM 파라미터를 쓰지 않으려면 **보내기** 또는 **일정** 페이지에서 **UTM 트래킹** 옵션을 끄세요.

   ![보내기 또는 일정 페이지에서 UTM 트래킹을 끄는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046814/original/ydy9bC1vs5nh1NzOMn_2Q34EOHSgZUnr6A.png?1722254677)
