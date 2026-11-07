---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-
번역일: 2026-11-06
카테고리: 14-문서-계약
---

# 예약 날짜가 들어간 계약서를 자동으로 보내기

고객이 서비스(촬영, 상담 등)를 예약하면, 예약 날짜가 적힌 계약서를 바로 보내서 서명받는 과정이 중요할 때가 있어요. 이 문서는 워크플로우로 그 과정을 자동화하는 방법을 설명해요. 간단한 예약 과정에도, 기회 파이프라인을 쓰는 복잡한 과정에도 쓸 수 있어요.

### 목표와 문제

**목표:** 고객이 예약하자마자, 고객의 예약 날짜와 시간이 들어간 계약서를 워크플로우가 자동으로 보내게 하고 싶어요.

**문제:** 계약서 템플릿에 `{{appointment.start_time}}` 머지 태그를 바로 넣을 수 없어요. 계약서를 보내는 액션은 예약 트리거에서 직접 값을 가져오지 않고, **연락처**나 **기회**의 필드에서 값을 가져오도록 되어 있기 때문이에요.

**해결 방법:** 워크플로우에서 먼저 예약 날짜를 (연락처나 기회의) 커스텀 필드에 복사하고, 그다음 이 필드의 값을 가져오는 계약서를 보내면 돼요.

### 사전 준비

워크플로우를 만들기 전에 다음 두 가지를 먼저 준비하세요.

1. **날짜를 저장할 커스텀 필드**

   - **설정 > 커스텀 필드**로 이동하세요.
   - **필드 추가**를 클릭하고, 간단한 방법을 쓸 때는 **연락처**를, 고급 방법을 쓸 때는 **기회**를 선택하세요.
   - **Field Type**(필드 유형)을 **문자**로 설정하세요.
   - 알아보기 쉬운 이름을 붙이세요(예: "Session Date", "Event Date", "Booking Date").
   - **저장**을 클릭하세요.  
     ![커스텀 필드 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334458/original/2n_9jKIOgBkhoB0Mzn0d1iYyWNRKS9w8sA.png?1763055816)  
     ![연락처 또는 기회 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334484/original/xEYltwdVZikd7IshUSTpm48cbM-ZcDS0kg.png?1763055844)
2. **수정한 계약서 템플릿**

   - **결제 > 계약서**로 이동하세요.
   - 기존 템플릿(예: "서비스 약관 - 날짜 포함")을 찾아 **복제**하거나, **새 템플릿**을 만드세요.
   - 템플릿을 편집해서 방금 만든 커스텀 필드 변수를 넣으세요.

     - 연락처 방식: `{{contact.session_date}}`
     - 기회 방식: `{{opportunity.session_date}}`
   - 템플릿을 **저장**하세요.  
     ![계약서 템플릿에 변수 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334518/original/wQZcLx_fRh0ubqYc9mhSyY89wWtMRkJXuw.png?1763055919)

     - 문서 템플릿에서 연락처 커스텀 필드를 사용하는 모습이에요.

       
     ![문서 템플릿에서 연락처 커스텀 필드 사용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334631/original/1_dsWBzgbpDKQE0qtcnIEFuYbkllbOu8TA.png?1763056087)  
     - 한 연락처가 예약을 여러 번 할 수 있다면 기회 커스텀 필드를 쓰세요. [자세히 알아보기](documents-contracts-templates-with-opportunity-custom-values.md)  
     ![문서 템플릿에서 기회 커스텀 필드 사용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334707/original/8e_ppnIBc1ubP87v0ayU6PqQj43wig-OXQ.png?1763056147)

### 워크플로우 설정: 방법 고르기

업무 방식에 맞는 방법을 고르세요.

### 방법 1: 연락처를 쓰는 간단한 워크플로우

가장 간단한 방법이에요. 예약에 기회 파이프라인을 쓰지 않고, 예약 직후 계약서만 보내고 싶을 때 알맞아요.

1. 트리거를 설정하세요.

   - 새 워크플로우를 추가하고 **Customer Booked Appointment**(고객 예약 완료) 트리거를 선택하세요.
   - (선택) **Filters**(필터)에서 **In calendar**(캘린더에서)를 골라, 이 자동화를 실행할 캘린더를 지정하세요.  
     ![예약 완료 트리거와 캘린더 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334985/original/DWmNdpQIEIVKOysA_cvKhqT_25FWJPuuAg.png?1763056350)
2. **Update Contact Field**(연락처 필드 업데이트) 액션을 추가하세요.

   - **(+)** 아이콘을 클릭해 새 액션을 추가하세요.
   - **Update Contact Field**를 선택하세요.
   - **Select Field**(필드 선택)에서 만들어 둔 **연락처** 커스텀 필드를 고르세요(예: "Session Date").
   - **Select Value**(값 선택)에서 **태그 아이콘**을 클릭하고 **Appointment** > **Start Time**을 선택하세요. 예약 날짜가 연락처의 커스텀 필드에 복사돼요.  
     ![연락처 필드에 예약 시작 시간 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058335015/original/hDhXIMGYMBHgHghG-NnNVrgtfukDsrBndA.png?1763056380)
3. **Send Documents & Contracts**(문서 및 계약서 보내기) 액션을 추가하세요.

   - **Update Contact Field** 단계 바로 아래의 **(+)** 아이콘을 클릭하세요.
   - **Send Documents & Contracts** 액션을 선택하세요.
   - **Template** 드롭다운에서 '사전 준비' 단계에서 수정해 둔 새 계약서 템플릿을 선택하세요.
   - 워크플로우를 **Save**하고 **Publish**하세요.  
     ![계약서 보내기 액션에서 템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058335021/original/6-RZG61WmSVkkfz-gPs_jAclYcYMQBPZYQ.png?1763056398)
4. 이렇게 보낸 계약서에는 예약 날짜가 미리 채워져 있어요.

### 방법 2: 기회를 쓰는 고급 워크플로우

이미 기회 기반 파이프라인을 쓰는 비즈니스를 위한 방법이에요. 연락처의 기존 기회를 찾아서 예약 날짜로 업데이트해요. 예약 후에 새 기회를 만들면서 그 안에 정보를 채우는 워크플로우로 설정할 수도 있어요.

1. 트리거를 설정하세요.

   - **Customer Booked Appointment** 트리거를 추가하고, 해당 캘린더로 필터링하세요.  
     ![예약 완료 트리거와 캘린더 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337419/original/u5hswQQdTNXNSB2QKc57ZhSYbg6p81knXA.png?1763059442)
2. **Find Opportunity**(기회 찾기) 액션을 추가하세요.

   - **(+)** 아이콘을 클릭하고 **Find Opportunity**를 선택하세요.
   - `OPPORTUNITY TO BE FOUND`(찾을 기회)를 **Most recently created opportunity**(가장 최근에 만든 기회)로 설정하세요.
   - **Field** 필터를 추가하세요. 만들어 둔 커스텀 필드(예: "Session Date")를 고르고 조건을 **Is Empty**(비어 있음)로 설정하세요. 날짜가 필요한 기회만 업데이트하게 하는 설정이에요.  
     ![기회 찾기 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337450/original/E7tIOWjVC6MUJ5nGqHf-bdsFggiQRjKd4A.png?1763059505)
3. **Update Opportunity**(기회 업데이트) 액션을 추가하세요.

   - **Opportunity Found**(기회 찾음) 분기에서 **(+)** 아이콘을 클릭하세요.
   - **Update Opportunity** 액션을 선택하세요.
   - **Add field**(필드 추가)를 클릭하고 만들어 둔 **기회** 커스텀 필드(예: "Session Date")를 선택하세요.
   - 값은 **태그 아이콘**을 클릭하고 **Appointment** > **Start Time**을 선택하세요.
4. **Send Documents & Contracts** 액션을 추가하세요.

   - **Update Opportunity** 단계 바로 아래의 **(+)** 아이콘을 클릭하세요.
   - **Send Documents & Contracts** 액션을 선택하세요.
   - **Template** 드롭다운에서 수정해 둔 **기회** 기반 계약서 템플릿을 선택하세요.  
     ![기회 업데이트 후 계약서 보내기 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337501/original/vGzr6KUhErXUipWSquvy1IbL61PtgYG6Tw.png?1763059540)
5. 이제 보낸 계약서에 예약 날짜가 미리 채워져 있어요.  
   ![예약 날짜가 채워진 계약서](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337545/original/02Lk5tVrUuip5tokRCmxv89ExYiO_4lMeg.png?1763059627)

### 워크플로우 순서 확인

방법 1과 방법 2 어느 쪽이든 워크플로우는 다음 순서를 따라야 해요.

1. **Trigger**(트리거): 예약 완료
2. **Update Field**(필드 업데이트): 연락처 또는 기회
3. **Send Contract**(계약서 보내기): 수정한 템플릿 사용

### 계약서는 갔는데 날짜 칸이 비어 있어요

원인은 두 가지일 수 있어요.

1. 워크플로우 순서가 잘못됐어요. **Update Field** 액션(연락처 또는 기회)이 반드시 **Send Contract** 액션보다 앞에 있어야 해요.
2. 기회를 업데이트하는 경우, 예약한 사람에게 기존 기회가 있어야 해요. 기회가 없다면 **Create Opportunity**(기회 만들기) 액션을 사용하세요.

### 새 날짜 칸이 없는 예전 계약서가 발송돼요

**Send Contract** 액션으로 돌아가서, 드롭다운에서 예전 템플릿이 아니라 복제해서 만든 새 템플릿을 선택했는지 확인하세요.
