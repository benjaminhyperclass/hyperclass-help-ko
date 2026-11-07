---
원문: /support/solutions/articles/155000005060-getting-started-automatic-email-and-sms-followup
번역일: 2026-11-07
카테고리: 01-시작하기
---

# 폼 제출 후 이메일·SMS 자동 팔로업 설정하기

워크플로우로 이메일과 SMS 드립 캠페인을 자동화하면 100명 이상의 리드도 시간을 두고 꾸준히 챙길 수 있어요. 직접 일일이 연락하지 않아도 팔로업이 끊기지 않아서 전환율을 높이는 데 도움이 돼요.

## 폼 제출 시 이메일 팔로업 자동화 만들기

자동 이메일 팔로업은 가상 비서가 응대를 대신해 주는 것과 같아요. 리드 응대를 맡겨 두고 비즈니스를 키우는 데 집중하세요. 지금 바로 시작해 볼게요.

1. 왼쪽 메뉴에서 **자동화**(Automation)로 이동하세요.
2. **Create Workflow**(워크플로우 만들기) > **Select a Recipe**(레시피 선택)를 클릭하세요.

   ![워크플로우 만들기에서 레시피 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581033/original/WcH21GdgXzbhdvoUVa4tNQf_1_08Vut93A.png?1747179468)
3. **Email Drip Sequence**(이메일 드립 시퀀스) 레시피를 선택하세요.

   ![Email Drip Sequence 레시피 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581060/original/Tj-RRazx6RhMQpi1QQsFNFs7q_lJ7XnKIA.png?1747179664)
4. **Form Submitted**(폼 제출) 트리거를 추가하세요. **Add filter**(필터 추가)를 클릭하고 **Form is**(폼이)를 선택한 뒤, 해당 폼을 고르고 **Save**(저장)를 클릭하세요.

   ![Form Submitted 트리거에 폼 필터 설정하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581084/original/zAjzZndjO1KSvpj4AV1U-atmKRvT1HzvNQ.png?1747179815)
5. 이메일 액션을 편집하세요. 제목, 메시지 내용, 첨부파일 등을 원하는 대로 수정한 뒤 **Save Action**(액션 저장)을 클릭하세요.

   ![이메일 액션 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581097/original/PtGURjOfoP6in_HjzmRIA0Mc9ZGPFHct2w.png?1747179890)
6. **Publish**(게시)를 클릭하세요.
7. **Save**를 클릭하세요.

   ![워크플로우 게시 후 저장하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581119/original/VqQBVcXsLI0etoSsmteLursaVttIuC9C8A.png?1747179939)

자세히 보기

- 워크플로우 액션 – Send Email
- 워크플로우 트리거 – Form Submitted
- 워크플로우 시작하기

이메일 팔로업 자동화를 마쳤어요. 다음으로 SMS를 더하면 더 개인적인 소통을 할 수 있어요.

---

## 폼 제출 시 SMS 팔로업 자동화 만들기

이메일과 함께 SMS로도 팔로업하면 소통 효과가 훨씬 좋아져요. 문자는 보통 몇 분 안에 열어 보기 때문에 리드에게 계속 기억될 수 있어요. 설정 순서는 다음과 같아요.

1. 왼쪽 메뉴에서 **자동화**로 이동하세요.
2. **Create Workflow**를 클릭하고 **처음부터 시작**을 선택하세요.

   ![처음부터 시작을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581232/original/smJkMVMCyDjpuk_On_1cGXSq840AX7jzUA.png?1747180393)
3. **Form Submitted** 트리거를 추가하세요. **Add filter**를 클릭하고 **Form is**를 선택한 뒤, 원하는 폼을 고르고 **Save**를 클릭하세요.

   ![Form Submitted 트리거에 폼 필터 설정하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581246/original/Qdotp_0rf92IObkAs4bDnPVl-tewFBqE6w.png?1747180520)
4. **Send SMS**(SMS 전송) 액션을 추가하세요.

   ![Send SMS 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581254/original/Cx9kDxy9mFiQ3RyGSNp74C4oxnaMxah1HA.png?1747180587)
5. 받는 사람의 관심을 끌 수 있게 문자 메시지를 짧고 분명하게 작성한 뒤 **Save Action**을 클릭하세요.

   ![SMS 메시지 작성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581262/original/4yJLH7ynBbS51X-fg_A7cfllJaWu5VOK3A.png?1747180666)
6. **Send SMS** 액션 앞에 **Drip**(드립) 액션을 추가하세요. Drip 액션은 정해 둔 인원씩 일정한 간격으로 다음 단계로 보내는 액션이에요.

   ![Send SMS 앞에 Drip 액션 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581306/original/y9bHtUsx2uVH5zekLbKC-4_veAg9c11yjg.png?1747180787)
7. **batch size**(배치 크기)를 **100**으로 설정하세요. drip interval(드립 간격)은 **every 1 day**(1일마다)로 선택하고 **Save Action**을 클릭하세요.

   ![Drip 액션의 배치 크기와 간격 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581315/original/NBxtLS-6InTEmSb-rYBC3u-tCSlQz-XQ4A.png?1747180857)
8. **Publish**를 클릭하세요.
9. **Save**를 클릭하세요.

   ![워크플로우 게시 후 저장하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046581328/original/kqUISiCGQfI8XWhg7i_0i2TcyA6Kf_pqXg.png?1747180890)

자세히 보기

- 워크플로우 액션 – Send SMS
- 워크플로우 액션 목록

수고하셨어요! 다음으로 다른 워크플로우 액션도 살펴보면 업무 과정을 더 간소하게 만들 수 있어요.
