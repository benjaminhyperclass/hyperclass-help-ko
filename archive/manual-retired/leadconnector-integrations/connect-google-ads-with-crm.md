---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007187-connect-google-ads-with-crm
번역일: 2026-04-23
카테고리: leadconnector-integrations
---

# Google 광고와 CRM 연결하기

Google 광고(Google Ads) 연동 기능을 통해 Google 광고에서 발생한 리드를 직접 수집하고 CRM에 자동으로 동기화할 수 있습니다. 이 연동을 통해 Google에서 귀하의 제품이나 서비스에 관심을 보인 잠재 고객의 연락처 정보를 쉽게 수집하고, CRM을 통해 빠르게 후속 조치를 취할 수 있습니다. 리드 수집 과정을 자동화함으로써 시간을 절약하고 영업 및 마케팅 활동의 효율성을 높일 수 있습니다.

**목차**

- Google 광고 연결 방법
- 양식 필드 매핑
- 연결 성공 여부 테스트 방법

## Google 광고 연결 방법

**1단계:** 하위 계정(Sub-Account) 화면 → 설정(Settings) → 연동(Integrations)으로 이동합니다.

![Google Ads 연동 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804445/original/mwth-2CEwSAvz8xfRKSVZWhMwZ-kBifmRA.png?1763615572)

**2단계:** Google Ads 연동 아래의 관리(Manage) 버튼을 클릭합니다.
앱 설명 페이지로 리다이렉트됩니다.
설치(Install) 버튼을 클릭해서 진행합니다.

![Google Ads 연동 설치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804374/original/vRKww40gB4yopU8KZTKc-KxWBSFXNQOoDA.png?1763615386)

**3단계:** OAuth 인증을 통해 Google 계정으로 로그인하라는 안내가 나타납니다.
인증 완료 후, 리드 동기화에 연결할 Google Ads 계정을 선택합니다.

![Google 계정 인증 및 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060777311/original/6lQMtWmnCH2A8y3NhD-ug-OCkcrszWgWDw.png?1765948709)

**4단계:** 연결이 완료되면 선택한 광고 계정에 연결된 모든 리드 양식이 관련 캠페인 이름과 상태와 함께 표시됩니다.
양식 옆의 재생(Play) 아이콘을 클릭하여 매핑을 설정하고 리드 동기화를 활성화합니다.

![리드 양식 목록 및 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060777317/original/o3ifg-k6xaWx9LJZB6wM5xKE9baemUgZVg.png?1765948727)

**5단계:** "Google 리드 양식 제출됨(Google Lead Form Submitted)" 트리거를 사용하여 워크플로우를 설정하고, 새 리드가 들어올 때 후속 조치를 자동화합니다.

## 양식 필드 매핑

- 매핑하고 리드를 동기화할 양식의 재생/편집 아이콘을 클릭합니다.

- 필드 매핑(Map Fields) 버튼을 사용하여 Google 광고 양식 필드와 CRM 필드를 연결합니다.

- 특정 양식에서 들어오는 리드를 비활성화하려면 일시정지 아이콘을 클릭합니다.

![양식 필드 매핑 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060777352/original/eLZUKOPYl-B3wbzbLji0KMXnNSPQ6UH2CA.png?1765948748)

## 연결 성공 여부 테스트 방법

### 1단계: 캠페인 열기

Google Ads 관리자에서 CRM과 동기화하고자 하는 캠페인으로 이동합니다.

![Google Ads 캠페인 접속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804371/original/rfJ8aQ7bey1doaQuNt8YRxcFxJRKVnFw1g.png?1763615386)

### 2단계: 캠페인 선택

캠페인 목록 화면에서 캠페인 이름을 클릭하여 세부 정보를 엽니다.

![캠페인 목록에서 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804375/original/Jl2VATrQrOPz8wGCA5JrfloVyzl3YQ4f0g.png?1763615387)

### 3단계: 리드 양식 접근

캠페인 내의 리드 양식 섹션으로 이동하여 편집(Edit)을 클릭합니다.

![리드 양식 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804370/original/lOsRcQfkJUBkCpFU6R2znfrxFm_-zJY9Yg.png?1763615386)

### 4단계: 연결된 양식 열기

캠페인에 연결된 양식으로 리다이렉트됩니다.
양식 이름을 클릭하여 엽니다.

![연결된 양식 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804372/original/eG624sYhg3xjd_M0peTnKe57V1ITlSp9YA.png?1763615386)

### 5단계: 테스트 데이터 전송

데이터 전송(Send Data) 버튼을 클릭하여 연동을 테스트합니다.

참고: 경고 메시지가 나타날 수 있지만 이 테스트에서는 무시하셔도 됩니다.

![테스트 데이터 전송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804373/original/ys9fcXXTIiAT89d_121__FkBYFzUZL2W1A.png?1763615386)

---
*원문 최종 수정: Tue, 16 Dec, 2025 at 11:20 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*