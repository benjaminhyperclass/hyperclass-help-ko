---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# 메일건 설정 체크리스트

![메일건 설정 안내 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48090709611/original/uaJosVlH8fiE2DXTf5Iiw8nzsmhvPbfspg.jpg?1614896124)

# **메일건 + 하이퍼클래스 빠른 설정/문제 해결 체크리스트**

[Email-2-Inbox](https://help.email-2-inbox.com/calendar-chat)의 Krystin Ruschman이 제공하는 게스트 튜토리얼

![메일건 로고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48090705299/original/f-gBcDYyWzqNUi6WK3v-QFbdytgFC44JdQ.png?1614894400)

---

## **올바른 메일건 계정에 가입하셨나요?**

- Foundation 50k가 필요한 최소 플랜입니다 (Flex "Pay as you Grow" 플랜에는 답장 기능이 포함되지 않습니다)

## **메일건에서 발신 서브도메인을 올바르게 설정하셨나요?**

- 선택한 루트 도메인에서 서브도메인을 생성하세요 (예: reply.yourdomain.com)
- 메일건에서 제공한 DNS 레코드를 도메인 설정에 추가하세요
- 메일건에서 DNS 레코드를 검증하세요 (DNS 레코드 전파 시간을 기다려주세요)
- Sending > Domains에서 서브도메인 옆에 "녹색 체크마크"가 표시되는지 확인하세요
- Sending > Domain Settings에서 Click Tracking과 Open Tracking을 켜세요. 원하는 경우 Unsubscribes도 켜세요
- **Tracking Protocol**을 HTTPS로 업데이트하세요 (이렇게 하면 서브도메인에 SSL 인증서가 생성되어, 루트 도메인 SSL이 만료되거나 문제가 있어도 이메일의 링크가 작동합니다)
- Receiving에서 하이퍼클래스 웹훅과 함께 Catch-All Route가 설정되어 있는지 확인하세요 (참고: 이 라우트는 하이퍼클래스 내에서 메일건 API 키와 서브도메인을 설정하면 자동으로 생성됩니다)

## **하이퍼클래스에서 발신 서브도메인이 올바르게 설정되어 있나요?**

- Agency View > Settings(설정) > Mailgun에서 API 키와 서브도메인이 원하는 하위 계정과 연결되어 있는지 확인하세요
- **하위 계정**으로 전환 > **하위 계정** Settings(설정)으로 이동 > SMTP and Mailgun Service를 클릭하여 원하는 서브도메인이 표시되고 Default Provider로 설정되어 있는지 확인하세요
- BCC Emails 필드 – 하이퍼클래스에서 발송하는 모든 이메일을 외부 계정으로도 보내고 싶을 때만 사용하세요
- Forwarding Address – 모든 수신 답장을 외부 계정으로도 보내고 싶을 때만 사용하세요
- Forward to Assigned User – 연락처나 캠페인에 사용자를 배정하고 모든 수신 답장을 외부 계정으로도 보내고 싶을 때만 사용하세요

**참고:**
BCC와 Forwarding 기능을 사용할 때는 외부 계정에서 하이퍼클래스 이메일에 상호작용하면 Reply Route가 끊어져서 해당 이메일 체인의 추가 답장이 하이퍼클래스 대화(Conversations)에 더 이상 표시되지 않습니다. 모든 이메일 커뮤니케이션이 하이퍼클래스에 표시되길 원한다면 본인이나 고객이 외부 계정에서 이메일에 상호작용하지 않도록 주의하세요.

## **"From Name"과 "From Email"을 설정하셨나요?**

- 하이퍼클래스는 이메일을 누구로부터 보내는지 알아야 합니다. 다음은 하이퍼클래스가 해당 정보를 찾는 우선순위입니다. 값을 찾으면 검색을 중단하고 찾은 값을 사용합니다:

- Contacts(연락처) > Bulk Request > "Send Email" 아이콘 > From Name과 From Email (해당하는 경우)
- Workflow(워크플로우) > Individual Email (또는 캠페인 사용 시 Campaign Configuration) > From Name과 From Email
- Workflow(워크플로우) > Settings(설정) > From Name과 From Email
- Assigned User: 캠페인 사용 시 HL은 Campaign Configuration > Assigned User를 먼저 확인합니다 (해당 사용자 프로필과 연결된 이름과 이메일 주소를 사용)
- 캠페인을 사용하지 않는 경우 HL은 Contact > Assigned User를 확인합니다 (해당 사용자 프로필과 연결된 이름과 이메일 주소를 사용)
- Company Name과 Company Email address

## **여전히 해결되지 않나요?**

- 기본 설정 외에도 이메일 전송률에 영향을 미치는 수많은 요소가 있어서 체크리스트만으로는 문제 해결이 거의 불가능합니다.
- 위의 모든 단계를 거쳤는데도 여전히 문제가 발생한다면, [여기를 클릭하여](https://help.email-2-inbox.com/calendar-chat) Email-2-Inbox의 Krystin과 상담을 예약하세요.

* 이 체크리스트는 전체 목록이 아닐 수 있으며 교육 목적으로만 제공됩니다
* 하이퍼클래스, 메일건, DNS의 이메일 설정을 올바르게 구성하는 것은 계정 소유자의 책임이며, 철저한 테스트를 통해 검증되어야 합니다
* 이 전략에 따른 설정은 계정 소유자의 재량에 따릅니다

---
*원문 최종 수정: Tue, 27 Sep, 2022 at 10:58 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*