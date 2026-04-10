---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 이메일 서비스 설정 - 답장 및 전달 설정

**목차**

- [답장 및 전달 주소란?](#답장-및-전달-주소란)
- [답장 및 전달 설정 위치](#답장-및-전달-설정-위치)
- [전달 주소](#전달-주소)
- [답장 주소](#답장-주소)
- [BCC 이메일](#bcc-이메일)
- [담당 사용자에게 전달](#담당-사용자에게-전달)
- [답장 추적 활성화 - 다른 SMTP 제공업체](#답장-추적-활성화---다른-smtp-제공업체)
- [답장 추적 사용 예시](#답장-추적-사용-예시)
- [답장 추적 미사용 예시](#답장-추적-미사용-예시)
- [자주 묻는 질문](#자주-묻는-질문)

---

# 답장 및 전달 주소란?

전달 주소나 BCC를 사용해서 계정에서 주고받는 이메일의 사본을 받을 수 있는 추가 설정들입니다. 답장 추적에 대해서도 자세히 설명합니다.

## **답장 및 전달 설정 위치**

로케이션에 들어가서 Settings(설정) → Email Services(이메일 서비스)를 클릭하세요.

![이메일 서비스 설정 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378307/original/sTiyHi3hqgNimmaOnIK2tUuzV8jltXg4GQ.jpg?1724182488)

---

## 전달 주소

리드가 이메일에 답장하면 그 답장은 항상 Conversations(대화) 탭에 표시되지만, 리드의 이메일 답장 사본을 누군가의 이메일로도 받고 싶다면 여기에 해당 이메일 주소를 입력하면 됩니다. [모든 수신 및 발신 이메일(받는 사람, 참조, 숨은 참조)에 대해 요금이 부과됩니다.](what-is-lc-email-i-want-to-know-more.md)

쉼표로 구분해서 여러 전달 이메일 주소를 입력할 수 있습니다. 예: email1@test.com, email2@test.com, email3@test.com

**중요:** 전달 주소와 BCC 이메일은 **Mailgun과 LC Email을 사용할 때만 작동합니다.** 다른 SMTP 제공업체는 지원하지 않습니다.

![전달 주소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378336/original/c3rgbqnGtH4wUFzgVQHWw-xOjviN0LTHvQ.jpg?1724182531)

---

## **답장 주소**

이제 답장 주소를 추가할 수 있는 옵션이 있습니다. 모든 수신 이메일이 Conversations(대화) 탭으로 라우팅되는 대신 해당 이메일 주소로 전송됩니다.

CRM 외부의 받은 편지함에서 리드의 이메일에 답장하면 답장이 CRM으로 다시 동기화되지 않습니다.

최대 5개의 이메일 주소를 추가할 수 있습니다.

Settings(설정) → Email Services(이메일 서비스) → Reply & Forward Settings(답장 및 전달 설정) → Reply Address(답장 주소)에서 설정할 수 있습니다.

답장 주소를 입력한 후에는 반드시 저장하세요.

![답장 주소 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031547525/original/19Bs496zgaiTVo1bO9nwhTXXoA-anf5jsw.png?1724400925)

![답장 주소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378366/original/qADgEHJ_7tnNV3n3amaaOlUmjr9frQvMeQ.jpg?1724182590)

---

## BCC 이메일

해당 로케이션에서 발송되는 모든 1:1 이메일, 워크플로우 이메일, 결제 이메일의 숨은 참조 사본을 받게 됩니다. Settings(설정) → Email Services(이메일 서비스) → Reply & Forward Settings(답장 및 전달 설정) → BCC Emails(BCC 이메일)에서 설정할 수 있습니다.

BCC 기능은 1:1 이메일, 워크플로우 이메일, 결제 이메일에만 지원됩니다.
대량 이메일이나 캠페인 이메일에는 작동하지 않습니다.

![BCC 이메일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378457/original/e6UutfFjMKYAJTconTpaZbdXT1s829mt9Q.jpg?1724182752)

---

## 담당 사용자에게 전달

리드의 담당 사용자가 이메일 답장을 자신의 이메일 받은 편지함에서 받게 됩니다. 이메일은 Settings(설정) → My Staff(내 직원) → 사용자 편집 → User Info(사용자 정보)에서 설정된 해당 사용자의 이메일 주소로 전송됩니다.

![담당 사용자에게 전달 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378472/original/8FqD-K9rmcAe_-g7s3oyRrYwr-6kvqjWYQ.jpg?1724182778)

---

## 전달 이메일 요금 청구

전달된 메시지는 **재청구**가 활성화되었을 때 일반 발신 이메일과 동일하게 청구되어 사용량 정확성과 투명성을 향상시킵니다.

**적용 범위**

LC **Email**: 에이전시 및 하위 계정(**재청구**가 활성화된 경우)

Mailgun(로케이션 소유): 하위 계정만

**요금이 적용되는 경우**

전달된 각 이메일에 대해 일반 이메일 발송 요금과 동일한 이메일당 요금이 부과됩니다.

**요금 확인 방법**

청구 항목에서 다음을 확인하세요:

- Billing Source Type(청구 소스 유형): 요금을 발생시킨 서비스
- Billing Trigger ID(청구 트리거 ID): 전달된 이메일 이벤트의 고유 식별자

---

## 답장 추적 활성화 - 다른 SMTP 제공업체

Mailgun의 경우 Mailgun에 설정된 수신 경로와 직접 통합되어 있어서 답장 추적을 활성화하는 별도 옵션이 없습니다. [MailGun에서 답장을 설정하는 방법에 대해 자세히 알아보세요.](how-to-setup-replies-in-mailgun.md)

발신자 이메일을 testing@gmail.com과 같이 마스킹하면, 답장 주소가 **testing@replies.subdomain.com**으로 표시됩니다. 이는 **Agency Settings(에이전시 설정) → Mailgun**에서 로케이션에 대해 설정한 Mailgun 서브도메인입니다.

답장은 여전히 하위 계정의 Conversations(대화) 탭에 올바르게 표시됩니다.

![답장 추적 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286916898/original/w-1dICJ2Bsh_RZAP7ac2r7jnJsfEuOMb8Q.png?1678723680)

![답장 추적 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031378496/original/gePZQCEUWIstIyH1C68WKaiSaOcgjonr8Q.jpg?1724182805)

### 답장 추적 사용 예시

아래 스크린샷에서 강조 표시된 이메일이 답장 이메일 주소가 됩니다. 이렇게 하면 이메일 답장을 Conversations(대화) 탭으로 다시 캡처해서 읽고, 수동으로 응답하거나 태그를 사용해서 응답을 트리거할 수 있습니다. 이것이 SMTP 연동 사용의 한계입니다.

**중요:** 아래 강조 표시된 이메일을 복사해서 직접 이메일을 보내거나 새로운 이메일 스레드를 시작하면 이메일 답장을 Conversations(대화) 탭으로 다시 가져올 수 없습니다. 시스템에서 보낸 이메일에 답장해야 합니다.

![답장 추적 있는 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48260597029/original/MM1xCqK_FV3P9RIVLiwReIssTd-Qb4hbIQ.png?1667330277)

### 답장 추적 미사용 예시

아래 스크린샷에서 강조 표시된 이메일이 답장 이메일 주소가 됩니다. 이메일 답장을 Conversations(대화) 탭으로 다시 캡처할 수 없습니다. 하지만 응답은 받은 편지함에서 설정된 발신자 이메일로 전송됩니다.

![답장 추적 없는 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48260597698/original/IFF1KAgY2Qq0-jX_xY_cHqEWOSsOv33SJg.png?1667330551)

---

## 자주 묻는 질문

**Q:** **첨부 파일이 이메일 답장과 함께 전달되지 않는 이유는 무엇인가요?**

이메일 서비스 탭의 전달 설정은 첨부 파일 전달을 지원하지 않습니다. 연락처가 첨부 파일이 있는 이메일에 답장하면 HighLevel 대화 보기에 로그인해서 확인해야 합니다.

**Q:** **추가한 전달 이메일이 저장하려고 하면 사라지는 이유는 무엇인가요?**

이메일 주소가 유효하지 않거나 하위 계정에 추가된 전용 도메인과 충돌하는 경우 전달 주소로 사용할 수 없습니다.

**Q: 전달된 이메일은 무료인가요?**
아니요. **재청구**가 활성화되면 **전달된 각 이메일**이 일반 발신 이메일처럼 청구됩니다.

**Q: 이것이 적용되는 서비스는 무엇인가요?**
LC Email(재청구가 활성화된 경우 에이전시 및 하위 계정)과 **하위 계정** 수준의 **Mailgun(로케이션 소유)**입니다.

**Q: 전달된 이메일이 일반 발송과 동일한 이메일당 요금을 사용하나요?**
네—요금은 표준 이메일 발송 요금과 일치합니다.

**Q: 청구된 전달 이메일을 어디서 확인할 수 있나요?**
각 요금을 추적하려면 **Billing Source Type(청구 소스 유형)**(서비스)과 **Billing Trigger ID(청구 트리거 ID)**(이벤트 ID)에 대한 청구 보기를 확인하세요.

**Q: 재청구가 꺼져 있어도 이러한 요금이 적용되나요?**
A: 아니요. 전달된 이메일 통과 요금은 하위 계정에 대해 **재청구**가 활성화되어야 합니다.

**Q: 이 변경 사항은 소급 적용되나요?**
요금은 일반적으로 시행일부터 적용됩니다.

**Q: 에이전시 수준 Mailgun 전달이 청구되나요?**
이 업데이트는 **하위 계정** 수준의 **Mailgun(로케이션 소유)**만을 참조합니다.

![관련 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029443187/original/_qck3ZATobcGzaVOA4RzV5XfjyYYBRnrLA.jpg?1721248883)

---

*원문 최종 수정: Wed, 4 Feb, 2026 at 4:21 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*