---
원문: https://help.gohighlevel.com/support/solutions/articles/48001209235-list-of-all-outgoing-system-generated-emails
번역일: 2026-11-06
카테고리: 09-이메일
---

# 시스템이 자동으로 보내는 이메일 전체 목록

하이퍼클래스가 자동으로 보내는 모든 시스템 이메일을 정리했어요. 각 이메일이 무엇인지, 언제 발송되는지, 끌 수 있다면 어떻게 끄는지 확인할 수 있어요.

이메일은 발송 단위에 따라 나뉘어요. 서브 계정(로케이션) 단위 이메일은 개별 로케이션과 연결되어 있고, 예약·리뷰·소셜 플래너·결제와 관련돼요. 에이전시 단위 이메일은 에이전시가 직접 보내며, 비밀번호 재설정·사용자 등록·결제 실패·등록 상태 알림 등이 있어요.

## 서브 계정(로케이션) 단위 이메일

### 이메일 1.1 — 새 예약 요청

누군가 예약하면 **Unassigned Calendar**(미배정 캘린더)와 **Group Calendar**(그룹 캘린더)에서 이 이메일을 보내요.

![새 예약 요청 알림 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252656817/original/HaUAl_kuzcg5njAp7EfZN7bRcJJFQtvlAA.png?1663872783)

{% hint style="info" %}
캘린더 이메일이 no-reply@support.domain.com 주소로 발송되는 이유가 궁금하다면, 기본 발신자 설정 때문일 가능성이 커요. 자세한 내용은 아래 추가 자료의 '캘린더 이메일 발신 주소 작동 방식'을 참고하세요.
{% endhint %}

#### 그룹 캘린더에서 배정된 사용자의 '새 예약 요청' 비활성화하기

1. **설정 > 캘린더 설정**을 엽니다.
2. 해당 캘린더를 엽니다.
3. **3. Confirmation**(3. 확인) 탭을 클릭합니다.
4. 저장합니다.

![그룹 캘린더에서 새 예약 요청 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252827089/original/4raiJ9DfsyCZUproWQAFBU8qdbUXaC_Rsg.png?1663941035)

#### 미배정 캘린더에서 '새 예약 요청' 비활성화하기

1. **설정 > 캘린더 설정**을 엽니다.
2. 해당 캘린더를 엽니다.
3. **3. Confirmation** 탭을 클릭합니다.
4. 이메일 주소를 제거합니다.
5. 저장합니다.

![미배정 캘린더의 확인 탭에서 이메일 제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252827085/original/kfcgFMaRBedVPmRfd5hoeEZnQrEu377X3g.png?1663941034)

![미배정 캘린더의 확인 탭 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253316570/original/75I9IfgNAJbDy9tDhOm2aqsOA__d6jBTkA.png?1664264542)

{% hint style="info" %}
**auto confirmation**(자동 확인)과 **send appointment alert emails**(예약 알림 이메일 발송) 설정이 켜져 있으면, 예약 담당자는 계속 예약 요청 이메일을 받아요. 개발팀이 이후 캘린더 업데이트에서 수정할 예정이에요.
{% endhint %}

### 이메일 1.2 — 예약 후 리뷰 요청 (이메일 및 SMS) · 비활성화 가능

예약이 끝난 뒤 연락처에게 리뷰를 남겨 달라고 요청하는 이메일과 SMS예요.

![예약 후 리뷰 요청 이메일 및 SMS](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189218359/original/Zfqpk9L21fqO1a6BE3-xQ4di5penLhmFgg.png?1644563046)

{% hint style="info" %}
리뷰 요청을 보내면 로그인한 사용자가 메시지의 발신자로 표시돼요.
{% endhint %}

![리뷰 요청의 발신자로 표시된 로그인 사용자](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252650500/original/a7pwrO-vCEj6bTZ0G_T1PAo_w_QdbBZkSw.png?1663870327)

연락처에 배정된 사용자 명의로 리뷰 요청을 보내고 싶다면, 워크플로우의 **Send Review Request**(리뷰 요청 보내기) 액션을 사용하세요. 이 액션은 배정된 사용자를 대신해 요청을 보내요.

![워크플로우의 Send Review Request 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029814545/original/qnBAl7pqUO17YV4BxidTCsidG3PayKMOdw.jpg?1721830376)

### 이메일 1.3 — 소셜 플래너: 만료된 토큰 재연결 알림 · 비활성화 가능

연결된 소셜 계정의 인증 토큰이 만료되어 다시 연결해야 할 때 보내는 이메일이에요.

![소셜 플래너 만료 토큰 재연결 알림 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253062195/original/B_kRBa1B1MtPI1vRxlOyEYdimetXLwFedQ.png?1664178280)

![소셜 플래너 만료 토큰 재연결 알림 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253062801/original/U1UqfGwWPmfJ5r25Kd52CW4jpu5O_-Yamg.png?1664178471)

![소셜 플래너 만료 토큰 재연결 알림 예시 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253069352/original/yvegNEM8_ctEjA13OkqVlg6bk3-Ft4m3SA.png?1664179997)

{% hint style="info" %}
이메일 알림을 보낼 때는 로그인한 사용자가 메시지의 발신자로 표시돼요.
{% endhint %}

### 이메일 1.4 — 새 리뷰 이메일 · 비활성화 가능

로케이션에 연결된 플랫폼 중 한 곳에 새 공개 리뷰가 등록되면 보내는 이메일이에요.

![새 리뷰 알림 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189208813/original/G4qVenOaP3CWDAM6Xa8LK21SGcrUUMz_Zg.png?1644562058)

## 인보이스 및 결제 알림 이메일

인보이스 관련 이메일은 두 곳으로 가요. 비즈니스(서브 계정)에는 확인이 필요한 실패·건너뜀 건을 알리고, 최종 고객에게는 인보이스 영수증, 결제 완료, 예정된 자동 결제를 알려요.

### 수신 대상: 비즈니스(서브 계정)

#### 이메일 2.1 — 최종 고객의 인보이스 결제 시도 실패

![최종 고객의 인보이스 결제 시도 실패 — 비즈니스에 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029814237/original/FRnmN6T8fDG3dFeYg4nVBJLqlussGThM0g.jpg?1721830175)

#### 이메일 2.2 — 최종 고객의 인보이스 결제 완료

![최종 고객의 인보이스 결제 완료 — 비즈니스에 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029814039/original/e_a43i2g--_4y5mlcwv3iT7YZW4BJbMfdA.jpg?1721830058)

#### 이메일 2.3 — 반복 템플릿 자동 결제 오류

![반복 템플릿 자동 결제 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029813971/original/2J7_puL8ozxkIlHbqK8Gq7b55ECMr2nLfA.jpg?1721830007)

#### 이메일 2.4 — 인보이스 금액을 직접 수정해서 자동 결제를 건너뜀

![인보이스 금액을 직접 수정해서 자동 결제를 건너뜀](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029813924/original/jdFlKe9-3j_Fpno-iAvpEN8scEZagEdYMg.jpg?1721829967)

### 수신 대상: 최종 고객

#### 이메일 2.5 — 인보이스 수신됨

![최종 고객에게 발송되는 인보이스 수신 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029812903/original/Bb4fH2Ebn6GdGUWxMb5hlQ6Ms7RZSHhoGQ.jpg?1721829377)

#### 이메일 2.6 — 인보이스 결제 완료

![최종 고객에게 발송되는 결제 완료 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029812820/original/FRvZXinN01kA1nyI1dwH2jaxBB5tdELB5w.jpg?1721829316)

#### 이메일 2.7 — 인보이스 결제 시도 실패

![최종 고객에게 발송되는 결제 시도 실패 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029812301/original/bye8zPVJW1OiR9aHQaC0YlfMjLb4AJ31SQ.jpg?1721828962)

#### 이메일 2.8 — 예정된 자동 결제 안내

![최종 고객에게 발송되는 예정된 자동 결제 안내 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029812267/original/Pv_YVUQa6ul5B8HQK0PlH9lxQQeBWDRm-g.jpg?1721828923)

#### 이메일 2.9 — 반복 템플릿 자동 결제 실패

![최종 고객에게 발송되는 반복 템플릿 자동 결제 실패 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029812081/original/zXgHSVUj31Fg9p7jcpl_9K_5zM8fJDB09Q.jpg?1721828780)

## 에이전시 단위 이메일

### 이메일 3.1 — 비밀번호 재설정

사용자가 로그인 페이지에서 비밀번호 재설정을 요청하면 보내는 이메일이에요.

![비밀번호 재설정 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029811938/original/QX5Rvdq9jNa2Z2NttWlthUQSgrP7AqLBIg.jpg?1721828685)

### 이메일 3.2 — 인증 코드 이메일

로그인할 때 추가 인증 코드가 필요하면 보내는 이메일이에요.

![인증 코드 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029811879/original/pyOXMZ8vHCWdO9OAe26Xuu0bd7SvR8cfXw.jpg?1721828652)

### 이메일 3.3 — 변형 A: 신규 사용자 이메일 알림 — 에이전시

<!-- 검토 필요: 원문에 변형 A 제목이 두 번 나옴 -->

### 이메일 3.3 — 변형 A: 신규 사용자 이메일 알림 — 에이전시 및 서브 계정 관리자

하이퍼클래스는 새 사용자가 추가될 때마다 에이전시 관리자에게 이메일 알림을 보내요. 서브 계정 관리자도 자기 서브 계정에 사용자가 추가되면 알림을 받아요.

두 알림 모두 카드 형태로 새롭게 디자인되어 글꼴과 여백이 개선됐고, **Manage user**(사용자 관리) 버튼이 있어요. 이 버튼을 누르면 **팀 설정** 페이지가 열려요.

#### 에이전시에 새 사용자가 추가될 때

에이전시 관리자는 새 사용자가 추가될 때마다 이 알림을 받아요. 이메일에는 사용자의 이름, 이메일 주소, 사용자 ID, 그리고 그 사용자와 연결된 모든 서브 계정이 들어 있어요.

관리자는 **Manage user**를 클릭해 **팀 설정** 페이지를 열 수 있어요.

![에이전시에 새 사용자가 추가되었을 때의 알림 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084586715/original/q_p3R_Mhc-gDSVCxQ1zYc-YOGH8qXe7GbA.png?1793356764)

#### 서브 계정에 새 사용자가 추가될 때

서브 계정 관리자는 자기 서브 계정에 사용자가 추가되면 이 알림을 받아요. 이메일에는 새 카드 레이아웃으로 사용자 정보가 표시돼요.

관리자는 **Manage user**를 클릭해 **팀 설정** 페이지를 열 수 있어요.

![서브 계정에 새 사용자가 추가되었을 때의 알림 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084587153/original/6AGaNziQUwvz-R4m66O4sBRU8mvfrgcnqA.png?1793356954)

{% hint style="info" %}
두 알림 모두 에이전시의 화이트라벨 이름, 로고, 도메인을 그대로 사용해요. 새로 디자인된 이메일은 푸터도 저작권 문구만 남도록 간단해졌어요.
{% endhint %}

에이전시 계정이나 서브 계정에 사용자가 추가되면 에이전시에 알려 주는 이메일이에요.

![사용자 추가 시 에이전시에 발송되는 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189212059/original/W3ejvk7Io-eKoZ9aKIiBjwjILuQ1DD3wkg.png?1644562368)

### 이메일 3.3 — 변형 B: 신규 사용자 환영 — 사용자 이름 및 비밀번호

새로 만든 사용자에게 사용자 이름과 비밀번호를 보내는 이메일이에요.

![계정 정보가 담긴 신규 사용자 환영 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189214634/original/LtfzuABjvbIWmu7va-XwqMnRSgADUWNtbg.png?1644562602)

### 이메일 3.3 — 변형 C: 신규 SaaS 판매 알림

SaaS 요금제 가입이 발생하면 에이전시에 보내는 이메일이에요.

![신규 SaaS 판매를 에이전시에 알리는 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189215119/original/R266vIgYMCL2wUCMWsqAzPsVZsM4Cp3QFA.png?1644562707)

### 이메일 3.4 — 클라이언트 결제 실패

클라이언트의 정기 SaaS 결제가 처리되지 않으면 에이전시에 보내는 이메일이에요.

![클라이언트 결제 실패 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189204118/original/OTGSUgFaZBbGPGOw4lzAHWy8mghNuXnU4Q.png?1644561544)

### 이메일 3.5 — 신규 YEXT 판매 — 내부 이메일

YEXT 리스팅 서비스를 구매하면 에이전시에 보내는 내부용 알림이에요.

![신규 YEXT 판매 내부 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189205286/original/DEkzpBjD94xC9jPPKqAN-uVBBKlb7iakxg.png?1644561720)

## A2P 및 수신자 부담 번호 인증 알림

A2P와 수신자 부담 번호 등록 상태 알림은 에이전시 소유자와 관리자에게 이메일로 가요. 발신 주소는 `noreply@donotreply.leadconnectorhq.com`이에요.

통신사에서 아래 상태로 업데이트되면 알림이 발송돼요.

- A2P 브랜드: 거절, 승인
- A2P 캠페인: 제출, 거절, 승인
- 수신자 부담: 제출, 검토 대기 중, 거절, 승인

![A2P / 수신자 부담 번호 인증 상태 이메일 샘플 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029811639/original/umlvv8vgTjlQgIs_znfJnZ97wPb2VUOMng.jpg?1721828484)

![A2P / 수신자 부담 번호 인증 상태 이메일 샘플 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029811606/original/PRE1KB3STKEp90VD4Fk0CLwTGxSr_6FQcQ.jpg?1721828453)

![A2P / 수신자 부담 번호 인증 상태 이메일 샘플 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029811251/original/puUfhZEobdr3AE7FTK1ysZpOunddwXFcpA.jpg?1721828226)

## 자주 묻는 질문

### 시스템 이메일을 전부 끌 수 있나요?
전부는 끌 수 없어요. 이 문서에서 '비활성화 가능'이라고 표시한 이메일만 설정으로 제어할 수 있어요. 비밀번호 재설정, 인증 코드, 계정 정보가 담긴 신규 사용자 이메일은 계정에 접속하는 데 꼭 필요해서 끌 수 없어요.

### 캘린더 이메일이 제 주소가 아니라 no-reply@support.domain.com으로 오는 이유가 뭔가요?
로케이션에 Mailgun 서브도메인이나 SMTP 연동이 설정되어 있지 않으면 이 주소가 기본 발신자로 쓰여요. 나만의 발신 도메인을 설정하려면 아래 추가 자료의 '캘린더 이메일 발신 주소 작동 방식'을 읽어 보세요.

### 리뷰 요청 이메일의 발신자는 누구로 표시되나요?
기본적으로 로그인한 사용자가 발신자로 표시돼요. 연락처에 배정된 사용자 명의로 보내려면 워크플로우의 **Send Review Request**(리뷰 요청 보내기) 액션을 사용하세요. 이 액션은 배정된 사용자를 대신해 요청을 보내요.

### 인보이스 이메일은 비즈니스와 고객에게 동시에 가나요?
서로 별개의 알림이에요. 비즈니스에는 실패, 성공, 건너뛴 자동 결제에 대한 요약 이메일이 가고, 최종 고객에게는 영수증, 결제 확인, 예정된 자동 결제 안내, 실패 알림이 가요. 알림이 발생하는 계기는 같고 받는 사람만 달라요.

### A2P와 수신자 부담 번호 인증 이메일은 누가 받나요?
에이전시 소유자와 관리자가 받아요. 발신 주소는 `noreply@donotreply.leadconnectorhq.com`이고, 다른 수신자로 바꿀 수 없어요.

### 시스템 이메일의 디자인과 내용을 바꿀 수 있나요?
계정 단위 이메일 대부분(비밀번호 재설정, 인증 코드, 신규 사용자)은 바꿀 수 없어요. 예약 확인이나 리뷰 요청 같은 서브 계정 이메일은 각 설정 페이지에서 내용을 맞출 수 있고, 온보딩 이메일도 바꿀 수 있어요. 자세한 내용은 아래 추가 자료를 참고하세요.

### 사용자가 시스템 이메일을 받지 못해요. 무엇을 확인해야 하나요?
다음 사항을 확인하세요.

- 사용자 정보에 이메일 주소가 올바르게 입력되어 있는지 확인하세요.
- 스팸함과 정크 메일함을 확인하세요. 비밀번호 재설정 이메일은 특히 자주 걸러져요.
- 사용자의 이메일 도메인이 발신자를 차단하고 있지 않은지 확인하세요.
- 에이전시 단위 이메일 설정에서 해당 알림이 꺼져 있지 않은지 확인하세요.

## 추가 자료

- [새 서브 계정 사용자에게 보내는 온보딩 이메일 사용자 지정하기](기타/how-to-customize-the-onboarding-email-that-is-sent-to-new-sub-account-users.md)
- [새 멤버십 사용자에게 로그인 정보가 담긴 사용자 지정 이메일 보내기](../07-워크플로우/트리거/how-to-send-new-membership-users-custom-emails-with-their-login-information.md)
- [이메일 빌더와 인라인 편집기 사용하기](../10-마케팅/Email-Builder-Capabilities/how-to-use-the-email-builder-and-its-in-line-editor.md)
- 캘린더 이메일 발신 주소 작동 방식
