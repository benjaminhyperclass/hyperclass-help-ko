---

번역일: 2026-04-08
카테고리: 42-통합 > Google Integrations
---

# Google 리드 광고 연동

Google 리드가 생성되는 즉시 자동으로 수집하세요. Hyperclass의 Google 광고 연동은 폼 제출 데이터를 CRM으로 직접 전송하여, 워크플로우가 자동으로 응답하고 잠재 고객을 다음 단계로 진행시킵니다. 수동 업로드나 추가 연동 도구가 필요하지 않습니다.

---

**목차**

- [Google 광고 연동이란](#google-광고-연동이란)
- [Google 광고 연동의 주요 기능](#google-광고-연동의-주요-기능)
- [Google 광고 연결 방법](#google-광고-연결-방법)
- [폼 필드 매핑](#폼-필드-매핑)
- [연결 성공 여부 테스트 방법](#연결-성공-여부-테스트-방법)
- [자주 묻는 질문](#자주-묻는-질문)
---

## **Google 광고 연동이란**

Google 광고 연동은 Google 광고 계정을 Hyperclass 하위 계정과 연결하여, Google 리드 양식을 통해 제출된 리드가 실시간으로 연락처가 되도록 합니다. 안전한 OAuth 기반 연결은 폼 메타데이터를 워크플로우에 노출시켜, 잠재 고객이 "제출"을 클릭하는 순간 자동화를 트리거할 수 있게 합니다.

Google 광고 연동을 통해 Google 광고에서 직접 리드를 수집하고 CRM과 자동으로 동기화할 수 있습니다. 이 연동으로 Google에서 제품이나 서비스에 관심을 보인 잠재 고객의 연락처 정보를 쉽게 수집하고 CRM을 통해 빠르게 후속 조치를 취할 수 있습니다. 리드 수집 과정을 자동화함으로써 시간을 절약하고 영업 및 마케팅 효율성을 높일 수 있습니다.

---

## Google 광고 연동의 주요 기능

1. 간편한 설정

- Google 광고 계정을 Hyperclass에 쉽게 연결
- 단일 Google(Gmail) 로그인으로 여러 Google 광고 계정 지원
- 모든 활성 캠페인과 리드 양식을 한 곳에서 확인

2. 자동 리드 동기화

- 활성화되고 매핑된 Google 광고 리드 양식에서 리드가 제출될 때마다 CRM에 새 연락처 생성
- 한 번 활성화하면 추가 설정 없이 리드가 자동으로 동기화

3. 워크플로우 자동화

- "Google 리드 양식 제출됨" 트리거를 사용하여 즉시 워크플로우 실행
- 광고 계정 및 리드 양식과 같은 필터를 적용하여 타겟팅된 자동화 생성
- SMS, 이메일 후속 조치, 내부 알림 등을 자동화

---

## **Google 광고 연결 방법**

### **1단계:** 하위 계정 보기 → Settings(설정) → Integrations(연동)으로 이동합니다.

![Google 광고 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063072918/original/Ywut85Go3B0CS5vis9crZQ1-KgV-7Fm5ag.png?1768918893)

### **2단계:** Google Ads 연동에서 Manage(관리)를 클릭합니다.

앱 설명 페이지로 리다이렉트됩니다. Install(설치)을 클릭하여 진행합니다.

![Google 광고 연동 설치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063073238/original/wynEsNLfJabEFmUn_ewfATQ0ZI4CT6d9EA.png?1768919033)

### **3단계:** OAuth 인증을 통해 Google 계정으로 로그인하라는 메시지가 표시됩니다.

인증 후 리드 동기화를 위해 연결하려는 Google 광고 계정을 선택합니다.

![Google 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063073556/original/2k4JWtWg4k982i2y4YfFsT3BDkYzrOTttw.png?1768919145)

### **4단계:** 연결되면 선택한 광고 계정에 연결된 모든 리드 양식이 관련 캠페인 이름 및 상태와 함께 표시됩니다.

양식 옆의 재생 아이콘을 클릭하여 매핑하고 리드 동기화를 활성화합니다.

![리드 양식 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063073919/original/9x4b0dkNhvh_ohLd06-a2LVpfVMBjX330w.png?1768919250)

### **5단계:** "Google 리드 양식 제출됨" 트리거를 사용하여 워크플로우를 설정해 새 리드가 들어올 때 후속 작업을 자동화합니다.

![워크플로우 트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063074195/original/kkS_oYcwN2Ypqv5lPx8c8bLvrip3T3ukMQ.png?1768919361)

---

## **폼 필드 매핑**

- 매핑하고 리드를 동기화하려는 양식의 재생/편집 아이콘을 클릭합니다.
- Map Fields(필드 매핑) 버튼을 사용하여 Google 광고 양식 필드를 CRM 필드와 연결합니다.
- 특정 양식에서 들어오는 리드를 비활성화하려면 일시정지 아이콘을 클릭합니다.

![폼 필드 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063074514/original/DSm_gBdUtwDXLsnvZ0cn0Sxk9yaHDYqDbg.png?1768919535)

---

## 연결 성공 여부 테스트 방법

### **1단계:** 캠페인 열기

Google 광고 관리자에서 CRM과 동기화하려는 캠페인으로 이동합니다.

![캠페인 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804371/original/rfJ8aQ7bey1doaQuNt8YRxcFxJRKVnFw1g.png?1763615386)

### **2단계:** 캠페인 선택

캠페인 목록 보기에서 캠페인 이름을 클릭하여 세부 정보를 엽니다.

![캠페인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804375/original/Jl2VATrQrOPz8wGCA5JrfloVyzl3YQ4f0g.png?1763615387)

### **3단계:** 리드 양식 접근

캠페인 내의 Lead Form(리드 양식) 섹션으로 이동하여 Edit(편집)을 클릭합니다.

![리드 양식 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804370/original/lOsRcQfkJUBkCpFU6R2znfrxFm_-zJY9Yg.png?1763615386)

### **4단계:** 연결된 양식 열기

캠페인과 연결된 양식으로 리다이렉트됩니다.
양식 이름을 클릭하여 엽니다.

![연결된 양식 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804372/original/eG624sYhg3xjd_M0peTnKe57V1ITlSp9YA.png?1763615386)

### **5단계:** 테스트 데이터 전송

Send Data(데이터 전송)를 클릭하여 연동을 테스트합니다.

**참고**: 경고 메시지가 표시될 수 있지만 이 테스트에서는 무시해도 됩니다.

![테스트 데이터 전송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058804373/original/ys9fcXXTIiAT89d_121__FkBYFzUZL2W1A.png?1763615386)

---

## **자주 묻는 질문**

**Q. Google 광고에 연결하려면 관리자 권한이 필요한가요?**

네. 연결하려는 Google 광고 계정에 액세스할 수 있는 Google(Gmail) 계정을 사용해야 합니다. 필요한 권한이 없으면 광고 계정과 리드 양식이 표시되지 않습니다.

**Q. 여러 개의 Google 광고 계정을 연결할 수 있나요?**

네. 단일 Google 로그인을 사용하여 여러 Google 광고 계정을 연결하고 모든 관련 캠페인과 리드 양식을 한 곳에서 관리할 수 있습니다.

**Q. CRM에 연락처는 언제 생성되나요?**

연동에서 활성화되고 올바르게 매핑된 Google 광고 리드 양식을 통해 리드가 제출될 때마다 연락처가 생성됩니다.

**Q. 리드가 동기화되지 않는 이유는 무엇인가요?**

다음 사항을 확인해보세요:

- 올바른 Google 광고 계정이 연결되었는지
- 캠페인이나 양식에 대해 리드 동기화가 활성화되었는지
- 모든 필수 리드 양식 필드가 CRM 필드에 매핑되었는지
- 동기화 상태가 Active(활성)로 표시되는지

---
*원문 최종 수정: Tue, 20 Jan, 2026 at 8:44 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*