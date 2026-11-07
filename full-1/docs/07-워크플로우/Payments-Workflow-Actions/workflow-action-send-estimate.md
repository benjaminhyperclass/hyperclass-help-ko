---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003705-workflow-action-send-estimate
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Send Estimate(견적서 보내기)

**Send Estimate**(견적서 보내기) 액션은 워크플로우 안에서 견적서 템플릿으로 견적서를 만들고, 연락처에게 자동으로 보내 줘요. 이메일이나 문자로 브랜드가 반영된 견적서를 알맞은 시점에 보내고 싶을 때 쓰세요. 이 문서에서는 하이퍼클래스 워크플로우에 이 액션을 추가하고 설정하는 방법을 안내해요.

## Send Estimate 액션이란

**Send Estimate** 액션은 견적서 템플릿으로 견적서를 자동으로 만든 뒤, 선택한 채널(이메일 또는 문자)로 연락처에게 보내요. 파이프라인 기반 영업에서 제안서를 일정한 품질로 보내야 할 때 쓰도록 만든 액션이에요. 브랜딩, 세금, 합계가 템플릿대로 반영되므로 직접 작업할 필요가 없어요.

워크플로우가 이 액션에 도달하면 하이퍼클래스는 선택한 템플릿으로 견적서를 만들어요. 그리고 가져올 수 있는 연락처·기회 정보를 채워 넣고, 선택한 보낸 사람과 채널로 연락처에게 보내요.

## Send Estimate 액션의 장점

- 빠른 제안: 리드가 특정 단계에 도달하거나, 폼을 제출하거나, 가격 문의를 했을 때 바로 견적서를 보낼 수 있어요.
- 일관성과 브랜딩: 모든 견적서에 올바른 템플릿, 로고, 세금, 통화가 적용돼요. 따로 PDF를 만들 필요가 없어요.
- 채널 선택: 가지고 있는 연락처 정보와 상대방이 선호하는 소통 방식에 맞춰 이메일이나 SMS로 보낼 수 있어요.
- 이력 관리: 각 견적서를 언제 보냈고, 열람했고, 수락했고, 결제했는지 기록이 남아요.

## 사전 준비

아래 항목을 미리 준비하면 발송 실패나 템플릿 불일치로 영업이 지연되는 일을 막을 수 있어요.

- 해당 서브 계정에서 **결제**가 켜져 있고 결제 처리 서비스가 연결되어 있어야 해요.
- 활성 상태의 견적서 템플릿이 하나 이상 있어야 해요. 템플릿에는 브랜딩, 세금, 통화가 설정되어 있어야 해요.
- 선택한 채널에 맞는 유효한 이메일 주소나 전화번호가 연락처에 있어야 해요.
- 이메일 발송 도메인이 인증되어 있고 규정에 맞아야 해요. SMS는 규정에 맞게 발송해야 하고, 연락처가 수신에 동의한 상태여야 해요.

## 워크플로우에 Send Estimate 액션 설정하기

아래 순서대로 액션을 추가하고 설정하면, 의도한 대로 일정하게 작동해요.

1. 서브 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 > 워크플로우 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064719189/original/4mVu7Ke8FwkzhXqYfkNdJ1AiVOUgwWHmZQ.jpeg?1770831880)
3. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.

   ![새 워크플로우를 만들거나 기존 워크플로우를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064719188/original/y2GeElPYuGlLguqDiv1j0_cZHtxo-i_BDQ.jpeg?1770831880)
4. **+ Add New Trigger**(새 트리거 추가) 버튼을 눌러 Send Estimate 액션과 어울리는 트리거를 추가하세요. 예를 들면 **Pipeline Stage Changed**(파이프라인 단계 변경), **Opportunity Status Changed**(기회 상태 변경), **Form Submitted**(폼 제출) 등이 있어요.

   ![트리거를 추가하는 화면 녹화](https://jumpshare.com/share/nOMmbw8Ihs2VaiOTezBW+/GIF+Recording+2026-02-11+at+11.17.29+PM.gif)
5. **+** 를 눌러 액션을 추가하고 **Send Estimate**를 검색하세요.

   ![Send Estimate 액션을 검색하는 화면 녹화](https://jumpshare.com/share/idL65o39Ln64vYbtGugQ+/GIF+Recording+2026-02-11+at+11.18.38+PM.gif)
6. **From User**(보낸 사용자)와 **Estimate Template**(견적서 템플릿)을 선택하세요.

   ![보낸 사용자와 견적서 템플릿을 선택하는 화면 녹화](https://jumpshare.com/share/idL65o39Ln64vYbtGugQ+/GIF+Recording+2026-02-11+at+11.18.38+PM.gif)
7. **Payment Mode**(결제 모드)를 선택하세요. 실제 결제를 받으려면 **Live**(라이브) 모드를, 결제가 일어나지 않는 샌드박스에서 확인하려면 **Test**(테스트) 모드를 쓰세요.
8. **Sending Mode**(발송 모드)에서 **Create as Draft**(초안으로 만들기)와 **Send Directly**(바로 보내기) 중 하나를 선택하세요.
   - **Create as Draft**: 견적서가 초안으로 저장돼요. 보내기 전에 내용을 검토할 수 있어요.
   - **Send Directly**: 워크플로우가 실행된 직후 견적서가 바로 발송돼요.
9. **Channel**(채널)에서 견적서를 보낼 방법으로 **Email**, **Text**, **Email & Text** 중 하나를 선택하세요. 기본값은 **Email & Text**예요. <!-- 검토 필요: 원문에는 견적서가 아니라 invoice(인보이스)로 쓰여 있음 -->
10. **Save Action**(액션 저장)을 클릭하세요.

    ![액션 설정을 저장하는 화면](https://jumpshare.com/share/n3Jh3US5rMFWGnBmwhFT+/Screenshot+2026-02-11+at+11.30.10%E2%80%AFPM.png)
11. 워크플로우를 테스트해서 설정이 제대로 되었는지 확인하세요. 그런 다음 **Publish**(게시)와 **Save**(저장)를 클릭하세요.

    ![워크플로우를 게시하고 저장하는 화면](https://jumpshare.com/share/1cQVrs8r6S14HnF0R1kh+/Screen+Shot+2026-02-11+at+11.33.32+PM.png)

## 예시: 주택 리모델링 견적서

시나리오: 주택 리모델링 업체가 잠재 고객이 관심을 보이면 곧바로 견적서를 보내고 싶어 해요.

설정:

- **트리거**: **Opportunity Created**(기회 생성). 상황에 맞는 다른 트리거를 써도 돼요.
- **Action Name**(액션 이름): 주택 리모델링 견적서 보내기
- **From User**: Sarah Johnson
- **Estimate Template**: 주택 리모델링 제안서
- **Estimate Mode**(견적서 모드): **Live** <!-- 검토 필요: 원문 내용이 서로 다름 (설정 순서에서는 Payment Mode, 예시에서는 Estimate Mode로 표기) -->

결과: 지정한 트리거가 발생하면 선택한 견적서가 고객에게 자동으로 발송돼요. 그래서 계약으로 이어질 가능성을 높일 수 있어요.

## 자주 묻는 질문

### 연락처에게 이메일 주소와 전화번호가 둘 다 있으면 어떻게 되나요?

**Channel** 필드에서 **Email & Text** 옵션을 선택하세요.

### Test 모드로 하면 실제 고객에게 알림이 가나요?

아니요. 직접 관리하는 테스트용 연락처로 **Test** 모드를 실행해서 문구, 변수, 발송 상태를 확인한 뒤 **Live**로 전환하세요.

### 견적서는 어떤 사용자 이름으로 발송되나요?

**From User**에서 선택한 사용자로 발송돼요. 나중에 그 사용자가 비활성화되면 액션을 열어 활성 상태인 발송자로 바꿔 주세요.

### 견적서를 열람했는지, 수락했는지 어디에서 확인하나요?

연락처 화면이나 견적서 화면을 열면 발송 이력과 상태 이벤트를 볼 수 있어요. 상태는 발송됨(Sent), 열람(Viewed), 수락(Accepted), 거절(Declined), 결제 완료(Paid) 등으로 표시돼요.
