---
원문: /support/solutions/articles/155000003040-workflow-trigger-affiliate-enrolled-in-campaign
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 워크플로우 트리거 — Affiliate Enrolled In Campaign(제휴 캠페인 등록)

**Affiliate Enrolled In Campaign**(제휴 캠페인 등록) 트리거는 하이퍼클래스에서 제휴 파트너가 제휴 캠페인에 추가될 때 워크플로우를 시작해요. 이 트리거로 온보딩 메시지 발송, 팀 알림, 태그 적용을 자동화할 수 있고, 이후 단계에서 제휴 관련 커스텀 값도 쓸 수 있어요.

## Affiliate Enrolled In Campaign 트리거란?

**Affiliate Enrolled In Campaign** 트리거는 제휴 파트너가 제휴 캠페인에 추가되면 워크플로우를 시작해요. 수동으로 추가하는 경우는 물론, **Add To Affiliate Campaign**(제휴 캠페인에 추가) 워크플로우 액션 같은 자동화로 추가하는 경우에도 작동해요. 제휴 파트너 온보딩과 팀 내부 소통을 간소화할 때 특히 유용해요.

이 트리거를 쓰면 이후 워크플로우 단계에서 제휴 관련 커스텀 값을 사용할 수 있어요. 제휴 파트너의 연락처 정보, 캠페인 정보, 추천 링크, 포털 링크 등이 여기에 포함돼요. 이 값을 이메일, SMS, 내부 알림, CRM 업데이트에 넣으면 메시지를 개인화하고, 제휴 성과를 추적하고, 온보딩 경험을 개선할 수 있어요.

{% hint style="info" %}
이 트리거는 서브 계정에서 **제휴 관리자**(Affiliate Manager)가 켜져 있고 제휴 캠페인이 1개 이상 있을 때만 보여요.
{% endhint %}

## Affiliate Enrolled In Campaign 트리거의 주요 장점

이 트리거로 제휴 파트너 온보딩, 내부 추적, 캠페인 참여를 자동화할 수 있어요. 핵심 장점 다섯 가지는 다음과 같아요.

- 매끄러운 제휴 파트너 온보딩: 로그인 링크, 캠페인 정보, 안내 사항을 담은 개인화 이메일이나 SMS로 새 제휴 파트너를 자동으로 환영해요. 수동 설정과 혼선이 줄어요.
- 동적 제휴 데이터 활용: 제휴 파트너 이름, 연락처, 발생 수익, 포털 링크 같은 커스텀 값을 바로 쓸 수 있어요. 이 필드를 자동 발송 메시지에 직접 넣을 수 있어요.
- 내부 소통 개선: 새 제휴 파트너가 캠페인에 참여할 때마다 내부 알림으로 팀에 알려요. 팀원이 바로 후속 조치를 하거나 새 파트너를 지원할 수 있어요.
- 캠페인별 세분화: 제휴 파트너가 등록된 캠페인에 따라 태그를 적용해요. 메시지를 더 정확하게 보내고, 리포트를 더 잘 보고, 캠페인별 후속 시퀀스를 맞춤으로 구성할 수 있어요.
- 확장 가능한 제휴 프로그램 운영: 온보딩과 알림 단계를 자동화하면 품질과 개인화 수준을 유지하면서 제휴 파트너가 늘어나는 규모에 맞춰 운영할 수 있어요.

## Affiliate Enrolled In Campaign 트리거 설정하기

### 워크플로우 빌더 열기

1. 하이퍼클래스 대시보드 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동해요.
2. 워크플로우 목록 오른쪽 위의 파란색 **+ Create Workflow**(워크플로우 만들기) 버튼을 클릭해요.
3. 드롭다운 메뉴에서 **처음부터 시작**을 선택해요. 새 워크플로우를 직접 만들 수 있어요.

![워크플로우 목록에서 새 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050122714/original/rQylRHJ1b_2k3EjHY9H4MZyLYWjYDbN83g.png?1753031219)

### 제휴 캠페인 트리거 추가하기

1. 워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭해요.
2. 트리거 목록에서 **Affiliate**(제휴) 섹션으로 스크롤해 **Affiliate Enrolled In Campaign**을 선택해요.

이 트리거는 제휴 파트너가 특정 캠페인에 참여할 때 워크플로우를 시작해요.

![트리거 목록에서 Affiliate Enrolled In Campaign 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050122729/original/Bcrr0WKwL0f-ntuscOCGNv9FyJSqaSfsiQ.png?1753031272)

### 트리거 이름 정하기

트리거 이름을 "Affiliate Enrolled In Campaign"처럼 목적이 드러나게 입력해요. 이름을 정해 두면 워크플로우를 정리하기 쉽고, 나중에 용도를 알아보기도 쉬워요.

![트리거 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050122735/original/cnIk8HirSZv7z9ENKkDfzoBKc6iriofvjw.png?1753031319)

### 필터 추가하기

1. **Add filters**(필터 추가)를 클릭해 특정 제휴 캠페인으로 트리거 범위를 좁혀요.
2. 캠페인 조건을 선택하고, 워크플로우가 감시할 캠페인을 골라요.

![특정 제휴 캠페인으로 필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050122742/original/NxHd82ysrhOxv8ZGp054G_PcDHcKxMDQng.png?1753031365)

### 필터 유형 선택하기

드롭다운에서 필터 유형을 선택해요. 캠페인이나 사용자 지정 속성 같은 **Standard Fields**(표준 필드) 중에서 트리거가 작동할 조건을 정할 수 있어요. 원하는 제휴 파트너 등록에만 워크플로우가 반응해요.

![필터 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050122748/original/AHNmD0VFigF0s7K-9sHG3WaxygbGgKdVQQ.png?1753031407)

### 트리거 설정 저장하기

캠페인을 고르고 필터 조건을 정했다면 **Save Trigger**(트리거 저장)를 클릭해요. 설정이 완료되고, 선택한 캠페인에 제휴 파트너가 등록될 때만 워크플로우가 시작돼요.

![트리거 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050122756/original/LDqqXEWe1PoF_jINqEmyxIOYJThICi6SDg.png?1753031463)

## Affiliate Enrolled In Campaign 트리거에서 커스텀 값 사용하기

커스텀 값을 쓰면 제휴 파트너별 데이터로 메시지를 개인화하고 내부 업무를 간소화할 수 있어요. 트리거를 설정하면 주요 데이터 필드를 자동으로 가져올 수 있어서, 제휴 파트너와 팀 모두에게 더 알찬 온보딩을 제공할 수 있어요.

**Affiliate Enrolled In Campaign** 트리거를 설정하고 캠페인 이름 같은 필터를 적용한 뒤에는 이메일, SMS, 내부 알림 같은 워크플로우 단계에서 커스텀 값을 쓸 수 있어요. 제휴 파트너 이름, 연락처, 수익, 수수료, 로그인 링크 같은 정보를 활용해 상황에 맞는 개인화 콘텐츠를 보낼 수 있어요.

- 내부 알림 단계 추가: 제휴 파트너가 특정 캠페인에 참여하면 팀에 알리는 내부 알림을 만들어요. **Affiliate Name**(제휴 파트너 이름), **Affiliate Email**(제휴 파트너 이메일), **Affiliate Phone**(제휴 파트너 전화번호), **Campaign Name**(캠페인 이름) 같은 커스텀 값을 넣으면 등록 상황을 한눈에 알 수 있어요.
- 제휴 파트너에게 개인화 SMS 보내기: 제휴 파트너 이름과 캠페인 정보를 넣은 환영 SMS 단계를 추가해요. **Magic Login Link**(매직 로그인 링크)를 함께 넣으면 제휴 파트너가 바로 포털에 접속할 수 있어요. 지체 없이 오퍼를 홍보할 준비를 마칠 수 있어요.
- 웰컴 이메일 보내기: 제휴 파트너 이름, 캠페인 이름, 추천 링크, 포털 링크, 매직 로그인 링크 같은 값을 넣어 웰컴 이메일을 만들어요. **Client Portal Link**(클라이언트 포탈 링크)에 하이퍼링크를 걸고, 이용 약관이나 프로그램 가이드라인을 첨부해 안내를 더 분명하게 할 수도 있어요.
- 캠페인 세분화용 태그 사용: 워크플로우에서 캠페인 이름을 활용해 "수하물 캠페인 제휴 파트너" 같은 고유한 태그를 적용해요. 이후 워크플로우나 프로모션 콘텐츠에서 제휴 파트너를 소속 캠페인별로 나눌 수 있어요.

![커스텀 값을 사용한 워크플로우 단계 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050127966/original/Jpvn-gAUMDMa5yUX3oRXgqNlFTeagDKrCg.gif?1753068328)

## 자주 묻는 질문

### 워크플로우 옵션에 "Affiliate Enrolled In Campaign" 트리거가 보이지 않아요.

이 트리거는 서브 계정에서 **제휴 관리자**가 켜져 있고 제휴 캠페인이 1개 이상 만들어져 있어야 보여요. 서브 계정에서 **제휴 관리자**를 쓸 수 있는지 확인하고, 제휴 캠페인이 1개 이상 있는지 확인하세요. 캠페인이 없다면 **제휴 관리자** 탭에서 캠페인을 만드세요. 두 조건이 모두 갖춰지면 워크플로우 빌더의 "Affiliate" 카테고리에서 트리거를 볼 수 있어요.

### 제휴 파트너가 가입한 캠페인에 따라 온보딩을 다르게 할 수 있나요?

네, 할 수 있어요. 트리거를 설정할 때 캠페인별로 필터를 적용하면 돼요. 제휴 파트너가 가입한 캠페인에 따라 서로 다른 워크플로우나 분기 로직을 실행할 수 있어요. 예를 들어 "코스 제휴 프로그램"에는 웰컴 이메일 하나를, "상품 출시 캠페인"에는 다른 이메일을 보낼 수 있어요. 조건 단계를 추가하거나 태그를 활용해 세그먼트 기반 액션을 만들 수도 있어요.

### 이메일/SMS 단계에서 제휴 커스텀 값(추천 링크, 매직 로그인 링크 등)이 비어 있어요.

이 트리거와 연결된 제휴 커스텀 값은 실제 **Affiliate Enrolled In Campaign** 이벤트로 워크플로우가 실행될 때만 채워져요. 추천 링크나 포털 링크 같은 값이 비어 있다면 다음을 확인하세요.

- 워크플로우가 **Affiliate Enrolled In Campaign** 트리거를 사용하고 있는지
- 트리거가 제대로 저장되어 있는지
- 테스트용 제휴 파트너가 실제로 해당 캠페인에 등록되었는지

### 제휴 파트너를 수동으로 등록해도 트리거가 실행되나요?

네, 실행돼요. 폼, 퍼널, 가입 링크로 제휴 파트너가 자동 등록될 때나, 팀에서 **제휴 관리자**에서 직접 추가해 수동으로 등록할 때 모두 트리거가 작동해요. 등록이 이루어지고 필터 조건(설정한 경우)과 일치하면 워크플로우가 시작되어 설정한 단계를 실행해요.
