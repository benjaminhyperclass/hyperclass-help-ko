---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002472-workflow-action-send-email
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Send Email(이메일 보내기)

워크플로우에서 **Send Email**(이메일 보내기) 액션을 사용해 연락처에게 개인화된 이메일을 자동으로 보내는 방법을 안내해요. 이 액션의 장점, 설정 순서, 실제 예시를 차례로 확인할 수 있어요.

## Send Email 액션이란?

**Send Email** 액션은 워크플로우 안에서 연락처에게 개인화된 이메일을 알맞은 시점에 자동으로 보내요. 마케팅, 고객 응대, 후속 관리에 두루 쓰이는 핵심 액션이에요. 예약을 확인하거나 프로모션을 안내하거나 변경 사항을 알릴 때, 이메일을 제때 정확하게 보낼 수 있어요.

## Send Email 액션의 장점

1. 적시 소통: 이메일이 자동으로 발송되어, 직접 보내지 않아도 연락처가 가장 알맞은 때에 메시지를 받아요.
2. 개인화: 수신자 이름, 예약 정보, 구매 내역 같은 동적 필드로 이메일 내용을 꾸밀 수 있어서 메시지가 더 와닿아요.
3. 고객 경험 개선: 확인 이메일, 알림, 후속 이메일을 자동으로 보내면 고객 만족도가 높아지고 전달 누락이 줄어요.
4. 시간 절약: 이메일 템플릿과 자동화 워크플로우를 설정해 두면 수동 발송이 줄고, 내용도 일관되게 유지돼요.
5. 유연성: 파일을 첨부하고, 사용자 지정 템플릿을 쓰고, 이메일 내용을 비즈니스에 맞게 고칠 수 있어요.

## Send Email 액션 설정하기

1. 워크플로우에 **Send Email** 액션을 추가해요.

   워크플로우 편집 화면을 열고, 알맞은 위치에 **Send Email** 액션을 끌어다 놓으세요. 예약이나 폼 제출 같은 트리거 뒤에 두면 돼요.

   ![워크플로우에 Send Email 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736641/original/rSRvpKGC3aJWhSTfK9163dJ91T94-kN6dQ.png?1733315232)

2. **Action Name**(액션 이름)을 입력해요.

   액션을 알아보기 쉬운 이름을 붙이세요(예: "예약 확인 이메일"). 워크플로우에서 이 액션을 쉽게 찾을 수 있어요.

   ![액션 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736677/original/QoF_h9pWR9esYRh3Iu940B1CB4PPtZ93HA.png?1733315246)

3. 보내는 사람 정보를 입력해요.

   - **From Name**(보내는 사람): 발신자로 표시될 이름을 입력해요(예: "우리 회사").
   - **From Email**(보내는 이메일): 이메일을 보낼 주소를 입력해요(예: "mycompany@email.com").

   ![보내는 사람 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736717/original/44AB5dukboaRiyt2oXEn6KTnzqjoxicJKw.png?1733315267)

4. **Subject**(제목)를 입력해요.

   - 수신자가 이메일 내용을 짐작할 수 있는 제목을 쓰세요(예: "예약해 주셔서 감사합니다!").

   ![이메일 제목 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736764/original/QnROSypS1wnDp6DKT7WG1QDejTm-X7i2iA.png?1733315282)

5. **Email Body**(이메일 본문)를 선택하거나 직접 작성해요.

   - **Templates**(템플릿): 드롭다운에서 이메일 템플릿을 선택해요. 선택 사항이에요. 사용할 템플릿이 없다면 **Email Body** 필드에 직접 메시지를 써도 돼요.

   ![템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738878/original/nkLAq44Occ8I3hXgt8Zm6hfDn_i2x5hXZw.png?1733316773)

   **Email Body** 필드에 본문을 작성해요. 커스텀 값을 넣으면 메시지를 개인화할 수 있어요. 예를 들면 다음과 같아요.

   `안녕하세요 {{contact.first_name}}님, 예약해 주셔서 감사합니다! 예약 일시는 {{appointment.start_time}}입니다.`

   기존 템플릿을 선택하면 **Sync Edits to Template**(템플릿에 편집 내용 동기화) 체크박스가 보일 수 있어요. 동기화를 켜면 워크플로우 이메일과 원본 템플릿 중 한쪽을 고칠 때 다른 쪽도 함께 바뀌어요. 끄면 두 내용이 서로 독립적으로 유지돼요.

   ![이메일 본문 작성과 템플릿 동기화 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738571/original/mp7rUi8BRDm0C-Nh-mnkAqd_N-HjSocj1A.png?1733316613)

6. 필요하면 **Add Attachments**(첨부파일 추가)로 파일을 첨부해요.

   예약 확인서, 상품 정보, 인보이스 같은 파일을 이메일에 첨부할 수 있어요. 선택 사항이에요.

   ![첨부파일 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738514/original/bAlI8GYnifiSE-txEgcsN0Jy1BpiszRCdQ.png?1733316597)

7. 테스트 이메일을 보내 확인해요.

   설정을 마치기 전에 테스트 이메일을 보내 보는 것이 좋아요. **Test Emails**(테스트 이메일) 필드에 이메일 주소를 입력하고 **Send Test Mail**(테스트 메일 보내기)을 클릭하면, 내용과 서식이 올바른지 확인할 수 있어요.

   ![테스트 이메일 보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738469/original/qpq4RxBV4SAhDKOQ6MiEsfATDqh_BTnghg.jpeg?1733316555)

8. 액션을 저장해요.

   설정이 마음에 들면 **Save Action**(액션 저장)을 클릭하세요. 이제 워크플로우가 이 단계에 도달하면 이메일이 자동으로 발송돼요.

   ![액션 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738495/original/2qFY4tN4T9IcNYCHOzabMCRo_k1i3AD66Q.png?1733316579)

9. 필요하면 참조(CC)와 숨은참조(BCC)를 추가해요.

   - 이메일 액션에서 **cc**/**bcc** 버튼을 클릭하면 해당 필드를 추가할 수 있어요.
   - 버튼을 클릭하면 각 필드가 나타나요.

   ![cc/bcc 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043818660/original/l2h_I4sEcgG37HOd1q8P6CVbkmo7uZAGKA.png?1742805133)

   ![cc/bcc 필드 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043818693/original/c8N1epW7-bCdigKhX9qWZdBARv5szZtS5g.png?1742805148)

## 예시: 예약 확인 이메일

**Goal**(목표): 연락처가 예약하면 이메일을 보내요.

워크플로우 설정은 다음과 같아요.

1. **Trigger**(트리거): **Appointment booked**(예약 완료)
2. **Action**(액션): **Send Email**

   - **Action Name**: 예약 확인 이메일
   - **From Name**: 우리 회사
   - **From Email**: mycompany@email.com
   - **Subject**: 예약해 주셔서 감사합니다!
   - **Body**(본문):

     안녕하세요 {{contact.first_name}}님,

     예약해 주셔서 감사합니다! 예약 일시는 {{appointment.only_start_date}} {{appointment.start_time}}입니다.

     곧 뵙겠습니다!

3. (선택) 예약 상세 PDF의 첨부파일 URL을 추가해요.
4. 테스트 이메일을 보내요.
5. 액션을 저장해요.

## 문제 해결

- 이메일이 발송되지 않아요: 연락처의 이메일 주소가 올바른지, 보내는 이메일과 도메인이 제대로 설정되어 있는지 확인하세요.
- 병합 필드가 빈 칸으로 나와요: 연락처나 트리거에서 해당 값이 제공되는지 확인하세요(예: 예약 필드는 예약과 관련된 트리거가 있어야 해요).
- 서식이 이상해요: 테스트 이메일을 보내 여백, 링크, 템플릿이 이메일 서비스마다 제대로 보이는지 확인하세요.

## 팁과 모범 사례

- 제목은 짧고 구체적으로 써요.
- 팀 전체에서 일관성을 유지하려면 템플릿을 사용해요.
- 병합 필드로 개인화하되, 트리거에 따라 없을 수 있는 필드에는 기대지 않도록 해요.
- CC/BCC 이메일을 여러 개 추가할 때는 쉼표로 구분했는지 다시 확인해요.

## 관련 액션

- **Send SMS**(SMS 보내기)
- **Internal Notification**(내부 알림)
- **AI Powered Email Generation**(AI 이메일 생성) 워크플로우 액션

## 자주 묻는 질문

### 이 액션에서 템플릿을 사용할 수 있나요?

네. 기존 이메일 템플릿을 선택하거나, 편집 화면에서 이메일을 직접 작성할 수 있어요.

### 이메일을 개인화할 수 있나요?

네. `{{contact.first_name}}` 같은 커스텀 값(병합 필드)을 쓰면 제목과 본문을 개인화할 수 있어요.

### CC/BCC 수신자도 워크플로우 이메일 통계에 나오나요?

아니요. CC/BCC 수신자는 **Email Stats**(이메일 통계)에 나오지 않아요. 워크플로우의 발송 성공·실패는 기본 연락처의 이메일을 기준으로 정해져요.

### Send Test Mail로 CC/BCC 수신 여부도 확인할 수 있나요?

아니요. 테스트 이메일은 서식과 내용을 확인하는 용도예요. CC/BCC 수신 여부는 확인할 수 없어요.

### CC/BCC 이메일 주소가 올바르지 않으면 어떻게 되나요?

올바르지 않은 CC/BCC 주소는 건너뛰어요. 올바른 CC/BCC 수신자와 기본 연락처는 이메일을 그대로 받을 수 있어요.

### 첨부파일을 추가할 수 있나요?

네. **Send Email** 액션에서 **Media Library**(미디어 라이브러리)에 있는 파일을 선택하거나, 내 기기에서 새 파일을 업로드해 첨부할 수 있어요.

### 테스트 이메일이나 실제 이메일에서 병합 필드가 빈 칸으로 나와요

워크플로우의 트리거나 액션이 해당 데이터를 제공하지 않으면 병합 필드가 비어 있을 수 있어요(예: 예약 필드는 예약과 관련된 트리거가 필요해요). 연락처 정보에 값이 없는 경우에도 마찬가지예요.

### 이메일이 스팸함으로 가거나 전달되지 않아요

전달률은 보내는 사람 설정과 도메인 설정에 달려 있어요. 발송 설정을 확인하고, 여러 메일 서비스로 테스트해 보세요.
