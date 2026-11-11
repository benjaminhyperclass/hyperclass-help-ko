---
원문: /support/solutions/articles/48001157632-step-by-step-guide-to-facebook-integration-in-highlevel
번역일: 2026-11-06
카테고리: 42-통합
---

# Facebook 연동 단계별 안내

Facebook Lead Ads로 들어온 리드를 하이퍼클래스 서브 계정으로 바로 가져오는 방법을 안내해요. 연동하고 나면 새 리드가 들어올 때마다 워크플로우가 자동으로 실행되고, 파이프라인에 리드가 채워지고, 육성 캠페인이 시작돼요. 파일로 따로 가져올 필요가 없어요.

## Facebook 연동 개요

Facebook 비즈니스 페이지를 연결하면 리드가 하이퍼클래스 서브 계정으로 바로 들어와요. Facebook 인스턴트 폼으로 만든 Lead Ads를 지원하고, 하이퍼클래스 워크플로우로 자동화도 만들 수 있어요. Facebook 페이지에 Instagram 비즈니스 계정이 연결되어 있다면, 연동 후 Instagram 비즈니스 계정에 대한 접근도 켤 수 있어요.

## Facebook 연동의 장점

Facebook 연동을 쓰면 Facebook에서 들어오는 리드를 자동으로 받을 수 있어요.

- 리드 자동화: 새 Facebook 리드를 CRM에 자동으로 동기화해요.
- **폼 필드 매핑**: Facebook 폼 응답을 CRM 필드에 맞춰 줘요.
- 동기화 옵션: 이전 리드까지 가져올지, 앞으로 들어올 새 리드만 가져올지 고를 수 있어요.
- 워크플로우 실행: 리드 폼이 제출되면 자동화 시퀀스를 시작할 수 있어요.

## 서브 계정에 Facebook 연결하기

▶ 영상 [8강 2부 2:04](https://www.youtube.com/watch?v=TNUzXx1UteQ&t=124s) · [10강 2부 5:49](https://www.youtube.com/watch?v=-eAdd6izkHU&t=349s)

#### 1단계: 서브 계정 설정으로 이동하기

화면 왼쪽 아래에서 **설정**을 클릭하세요.

![설정 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968844/original/Z-rFmgwuH0GuEuNv6abBRQE2PF_s-pbvnw.png?1752702578)

#### 2단계: 연동 열기

**설정**의 왼쪽 메뉴에서 아래로 스크롤해 **연동**을 클릭하세요.

![설정 왼쪽 메뉴의 연동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968849/original/gp5N9t73iaJy1PWPhqRdnpC_j-fM6U4SSg.png?1752702626)

#### 3단계: Facebook–Instagram 카드에서 연결 클릭하기

**연동** 화면 오른쪽 위에서 **Facebook–Instagram** 카드를 찾아 **연결**을 클릭하세요.

![Facebook–Instagram 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968861/original/dzb7jZqVKsy4RNR4pCng9Sg7qzmIb94uPw.png?1752702670)

#### 4단계: Facebook 로그인과 권한 허용하기

Facebook 계정에 로그인하라는 팝업 창이 열려요. 아래 사항을 확인하세요.

- 올바른 Facebook 계정으로 로그인하세요.
- 필요한 권한을 모두 허용하세요. 특히 리드와 페이지 데이터에 대한 접근 권한이 필요해요.
- 동기화할 Facebook 페이지를 올바르게 선택하세요.

{% hint style="info" %}
Facebook 페이지와, 그 페이지가 연결된 Business Manager 모두에서 관리자(Admin) 권한이 있어야 해요.
{% endhint %}

![Facebook 로그인과 권한 허용 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968879/original/aAoz_kW4lWFfFpCbDgC5iYbMRxpSzhMzvQ.png?1752702791)

#### 5단계: 페이지와 동기화 옵션 선택하기

로그인하고 나면 아래 항목을 선택하세요.

- 연동할 Facebook 페이지
- 동기화 방식
  - **모든 리드**: 이전에 들어온 리드와 앞으로 들어올 새 리드를 모두 가져와요.
  - **New Leads Only**(신규 리드만): 연동 이후에 제출된 리드만 동기화해요.

{% hint style="info" %}
Facebook 페이지(그리고 사용할 수 있는 경우 광고 계정)는 이름으로 검색해서 더 빨리 찾을 수 있어요. 검색창은 페이지 목록을 모두 불러온 뒤에 나타나요. Meta가 이 단계에서 기본 검색 기능을 제공하지 않기 때문이에요. 페이지가 많은 계정은 검색창이 나타나기까지 시간이 더 걸릴 수 있어요.
{% endhint %}

![페이지와 동기화 옵션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968895/original/xd-qolVpz2IGvR40lcDS5MgGHRJFFZorXA.png?1752702847)

#### 6단계: 연동 완료하기

**연결 후 계속**을 클릭하면 연동이 끝나요. 오른쪽 위에 **Integration successful**(연동 성공)이라는 녹색 배너가 나타나요.

![연동 성공 배너](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968941/original/TJ_4Y8Mq4sfVVSkA4N1Q_hwNW9RQz3z1-w.png?1752703009)

#### 7단계: Facebook 폼 필드를 CRM 필드에 매핑하기

Facebook 폼의 필드를 하이퍼클래스의 알맞은 CRM 필드에 연결하세요. 이렇게 하면 이메일, 전화번호, 이름 같은 리드 정보가 제자리에 들어가요.

![Facebook 폼 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049968921/original/xXlhYyanyHbpfZj7XzJQviEs-LdMKDJMaQ.png?1752702914)

## 자주 묻는 질문

### Facebook 페이지를 연결하려면 어떤 권한이 필요한가요?

Facebook 페이지와 해당 페이지에 연결된 Business Manager 모두에서 관리자여야 해요. “page not visible”(페이지가 보이지 않음)이라고 나오면 이 권한을 확인한 뒤 다시 시도하세요.

### Facebook 페이지를 둘 이상 연결할 수 있나요?

네, 서브 계정 하나에 여러 페이지를 연결할 수 있어요. 자세한 내용은 「하이퍼클래스 서브 계정에 여러 Facebook 페이지 연결」 문서를 참고하세요.

### 토큰이 만료되면 어떻게 되나요?

다시 연결하라는 안내가 나타나요. 「하이퍼클래스 계정에서 Facebook 토큰이 만료된 경우」 문서의 단계를 따라 해결하세요.

### Facebook 폼이 제출될 때 워크플로우를 실행할 수 있나요?

네, 할 수 있어요. 새 리드가 들어올 때 자동화를 시작하려면 **Facebook Lead Form Submitted**(Facebook 리드 폼 제출) 워크플로우 트리거를 사용하세요.

### 연동이 잘 되는지 어떻게 확인하나요?

Facebook의 Lead Ads Testing Tool을 쓰거나 테스트 폼을 직접 제출해 보세요. 리드가 CRM에 나타나면 연동이 잘 된 거예요.

### Instagram 리드도 함께 연동되나요?

네, Instagram 비즈니스 계정이 Facebook 페이지에 연결되어 있다면 가능해요. 설정 방법은 「Instagram 비즈니스 계정 연결하기」 문서를 참고하세요.
