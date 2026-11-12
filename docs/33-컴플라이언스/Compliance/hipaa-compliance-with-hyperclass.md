---
원문: /support/solutions/articles/48000983084-hipaa-compliance-with-highlevel
번역일: 2026-11-06
카테고리: 33-컴플라이언스
---

# 하이퍼클래스 HIPAA 규정 준수 패키지 구독과 BAA 관리

하이퍼클래스는 계정 전체에 적용되는 선택형 HIPAA 애드온을 제공해요. 이 애드온을 구독하면 ePHI 암호화, 비즈니스 제휴 계약(BAA), 감사 로그, MFA 적용을 쓸 수 있어요. 이 문서에서는 HIPAA 규정 준수 패키지를 구독하는 방법과 하이퍼클래스 안에서 BAA를 관리하는 방법을 안내해요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

애드온 요금은 월 297달러(US$297)이고, 한 번 구매하면 비활성화할 수 없어요.

{% hint style="info" %}
HIPAA 규정 준수는 유료 업그레이드예요. 하이퍼클래스 계정은 기본적으로 HIPAA를 준수하지 않아요. HIPAA를 구매해 활성화하면 내 계정 안의 모든 로케이션 계정에 적용되고, 다시 비활성화할 수 없어요.
{% endhint %}

## HIPAA 규정 준수란?

HIPAA는 1996년 제정된 미국의 건강보험 이동성 및 책임에 관한 법(Health Insurance Portability And Accountability Act of 1996)이에요. 의료 정보를 보호하기 위한 개인정보 및 보안 규정을 담고 있어요.

이 법은 1996년 8월 21일 빌 클린턴 대통령이 서명해 발효되었고, 다섯 개의 편(Title)으로 이루어져 있어요.

- Title I: HIPAA 건강보험 개혁
- Title II: HIPAA 행정 간소화
- Title III: HIPAA 세금 관련 건강 규정
- Title IV: 단체 건강보험 요건의 적용 및 집행
- Title V: 수입 상쇄

온라인 마케팅에서 HIPAA 규정 준수라고 하면 보통 HIPAA Title II를 지키는 것을 뜻해요.

## HIPAA Title II란?

행정 간소화 규정(Administrative Simplification)이라고도 해요. Title II에는 다음과 같은 HIPAA 규정 준수 요건이 있어요.

- 국가 제공자 식별자 표준(National Provider Identifier Standard): 개인, 고용주, 건강보험 플랜, 의료 제공자를 포함한 모든 의료 관련 주체는 10자리 고유 번호인 NPI(국가 제공자 식별 번호)를 가져야 해요.
- 거래 및 코드 세트 표준(Transactions and Code Set Standard): 의료 기관은 보험 청구를 제출하고 처리할 때 표준화된 전자 데이터 교환(EDI) 방식을 따라야 해요.
- HIPAA 개인정보 보호 규정(Privacy Rule): 정식 명칭은 '개인 식별 가능 건강 정보의 프라이버시 표준'이에요. 환자의 건강 정보를 보호하는 국가 표준을 정해요.
- HIPAA 보안 규정(Security Rule): '전자 보호 건강 정보의 보호를 위한 보안 표준'으로, 환자 데이터 보안 기준을 정해요.
- HIPAA 집행 규정(Enforcement Rule): HIPAA 규정 위반 여부를 조사하는 지침을 정해요.

하이퍼클래스, 고객 에이전시, 에이전시의 고객(의료기관, Practice) 사이의 관계에 적용되는 요건은 HIPAA 개인정보 보호 규정과 HIPAA 보안 규정이에요. 각 규정의 자세한 내용은 아래 링크에서 확인하세요.

- [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html)
- [HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html)

## HIPAA 규정 준수 패키지의 주요 장점

- 에이전시 전체 적용: 활성화하면 HIPAA 보호 장치가 에이전시 전체에 적용돼요.
- BAA 포함: 서명된 비즈니스 제휴 계약(BAA)이 패키지에 포함돼요.
- 결제 시 명시적 동의: 필수 확인 절차를 거치므로 혼동을 줄이고 의도한 경우에만 활성화돼요.
- 투명한 요금: 결제 전에 월 297달러라는 금액을 분명하게 확인할 수 있어요.
- 간편한 결제 수단 선택: 구매 창에서 바로 결제 수단을 추가하거나 선택할 수 있어요.
- 영구 활성화: 한 번 활성화하면 취소, 환불, 제거, 다운그레이드를 할 수 없어요.
- BAA 서명자 정보 수정 가능: 고객지원에 문의하지 않아도 하이퍼클래스 **문서 & 계약** 안에서 서명자 정보를 직접 수정할 수 있어요.
- HIPAA 자동 활성화: BAA에 서명하면 HIPAA 규정 준수가 자동으로 켜져요. 수동으로 활성화할 필요가 없어요.
## 하이퍼클래스의 규정 준수

하이퍼클래스, 고객 에이전시, 에이전시의 고객(Practice) 사이의 관계에서 의료기관(Practice)은 'HIPAA 적용 대상 기관(covered entity)'이고, 하이퍼클래스와 에이전시는 'HIPAA 비즈니스 제휴자(Business Associate)'예요.

하이퍼클래스는 컨설팅 업체 The Compliancy Group과 함께 HIPAA 개인정보 보호 규정과 보안 규정을 완전히 준수하도록 준비했어요. 그래서 고객 에이전시와 HIPAA 비즈니스 제휴 계약(BAA)을 맺을 수 있어요.

다만 고객 의료기관 환자의 개인 건강 기록 데이터를 완전히 보호하려면, 에이전시도 HIPAA Title II를 완전히 준수해야 해요. 그래야 에이전시도 고객 의료기관에 HIPAA 비즈니스 제휴 계약을 제공할 수 있어요.

에이전시의 규정 준수를 도와줄 The Compliancy Group의 연락처가 필요하면 하이퍼클래스 고객지원에 문의하세요.

## 보안

{% hint style="warning" %}
어떤 요금제(97달러, 970달러, 297달러, 2,970달러, 497달러, 4,970달러)를 쓰는 에이전시든 HIPAA 규정 준수를 구독할 수 있어요.
{% endhint %}

데이터베이스는 모든 데이터를 디스크에 쓰기 전에 자동으로 암호화해요. 별도의 설정이 필요 없고, 서비스에 접근하는 방식을 바꿀 필요도 없어요. 권한이 있는 사용자가 데이터를 읽으면 자동으로 복호화돼요.

서버 측 암호화에서는 Google이 암호화 키를 대신 관리해요. 암호화된 데이터에 쓰는 것과 같은 강화된 키 관리 시스템을 쓰고, 엄격한 키 접근 통제와 감사가 적용돼요. 각 데이터베이스 객체의 데이터와 메타데이터는 256비트 AES(Advanced Encryption Standard)로 암호화돼요. 각 암호화 키도 주기적으로 교체되는 마스터 키로 다시 암호화돼요.

## HIPAA 규정 준수 패키지 구독하기

1. 에이전시 계정에서 **설정**을 클릭하세요.
2. **컴플라이언스**를 클릭하세요.

   ![컴플라이언스 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060651277/original/xsZS63gA34toqszMi5F9BLktLuIQv478zw.png?1765814045)
3. **Before You Buy**(구매 전 안내)의 내용을 모두 읽어 보세요.

   ![구매 전 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060651752/original/IWBsHWtWTiHg5lpaD_KLxU3NfdKnQ8PIwQ.png?1765814174)
4. **Buy HIPAA Package at $297 per Month**(월 297달러에 HIPAA 패키지 구매) 버튼을 클릭해 다음 단계로 이동하세요.

   ![HIPAA 패키지 구매 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060652019/original/A90gAH8zrBOXjKFysiH5bsVTHrfLEOGFxA.png?1765814376)
5. **Note**, **Features**, **Acknowledgement**(확인 사항) 상자의 내용을 꼼꼼히 읽어 보세요.

   ![주의사항, 기능, 확인 사항 상자](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060657710/original/irJyqPKzAdcD91qXvp7n8jOt7IH7hYwwhQ.png?1765817169)
6. 준비가 되면 **Acknowledgement** 체크박스를 선택하고 **Pay $297 & Subscribe**(297달러 결제 및 구독) 버튼을 클릭하세요.

   ![확인 체크박스 선택 후 결제 및 구독 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060657881/original/sCbjRLjdi61rmmtE8fduaYJ3eISn6JzdOA.png?1765817349)
7. BAA에 서명하면 HIPAA 규정 준수 패키지가 에이전시 단위로 활성화돼요. 이후 에이전시 소유자가 각 서브 계정의 **고급 설정**에서 HIPAA를 직접 켜야 해당 로케이션의 마지막 보안 강화 단계가 끝나요.

   ![서브 계정의 고급 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068202568/original/9ExdezcGdrrbdqCGaVM2PUGusFwGc6VXDg.jpeg?1775011123)
8. BAA에 서명한 뒤 **서브 계정 > 해당 서브 계정 > 고급 설정**으로 이동하세요. HIPAA 보호가 필요한 서브 계정마다 **HIPAA 규정 준수** 토글을 **켜짐**으로 바꾸세요. 한 번 켜면 다시 끌 수 없어요.

   ![HIPAA 규정 준수 토글을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068305726/original/95FuR2lbEx3sz9rlUkY_d96-v8lcAXzmlA.png?1775095378)

{% hint style="warning" %}
HIPAA 설정에 접근할 수 있는지는 사용자에게 지정된 권한에 따라 달라질 수 있어요. 필요한 설정에 접근할 수 없다면 해당 사용자의 **사용자 권한**을 확인하세요.
{% endhint %}

## 문서 보기와 다운로드

{% hint style="info" %}
HIPAA 관련 문서는 모두 하이퍼클래스 **문서 & 계약** 시스템 안에서 생성되고 보관돼요. 서명한 비즈니스 제휴 계약(BAA)을 보거나 다운로드하려면 **설정 > 컴플라이언스**로 이동해 서명된 BAA를 찾고, **문서 보기**를 클릭해 연 다음 화면에서 바로 다운로드하세요. 고객지원 직원도 Employee Portal에서 문서 상태를 확인하고 서명된 BAA를 다운로드할 수 있어요. 이때 PandaDoc나 고객 대시보드에 접속할 필요가 없어요.
{% endhint %}

1. 서명을 마치면 **컴플라이언스** 화면에서 BAA를 바로 보고 다운로드할 수 있어요.

   ![컴플라이언스 화면에 표시된 BAA](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060659280/original/AWETm4hRw5x6KaZSdRrrLTq1dmDb-eopHg.png?1765818299)
2. **문서 보기** 버튼을 클릭하세요.

   ![문서 보기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060659699/original/ea0atyfRJTZxEwVbhXswuOSH-rlERo1fCg.png?1765818488)

## BAA 보기, 수정, 서명, 다운로드

HIPAA 관련 문서는 모두 하이퍼클래스 **문서 & 계약** 시스템 안에서 생성되고 관리돼요. 에이전시 사용자는 **컴플라이언스** 화면에서 비즈니스 제휴 계약(BAA)을 보고, 서명자 정보를 수정하고, 서명하고, 다운로드할 수 있어요.

### BAA 수정하고 서명하기

1. 에이전시 화면에서 **설정 > 컴플라이언스**로 이동하세요.

   ![설정의 컴플라이언스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073232556/original/-kIdB4rim1KwZwC4s75aIYwnED9cU0ItzA.png?1780996435)
2. **BAA** 섹션에서 **상세 보기**를 클릭하세요.
3. **문서 보기**를 클릭하면 문서 창에서 BAA가 열려요.
4. 서명자 정보나 사업자 정보를 고쳐야 하면 문서 창 오른쪽 위의 **Edit Document**(문서 편집)를 클릭하세요.
5. 필요한 내용을 수정한 뒤 **Update Changes**(변경 사항 업데이트)를 클릭해 저장하세요.
6. 정보가 맞으면 같은 화면에서 바로 BAA에 서명하세요.
7. 서명을 마치면 **컴플라이언스** 화면에서 완료된 BAA를 보고 다운로드할 수 있어요.

## 자주 묻는 질문

### HIPAA 규정 준수 패키지를 나중에 취소하거나 제거할 수 있나요?
아니요. 한 번 활성화하면 에이전시에서 HIPAA가 영구적으로 유지돼요. 취소, 환불, 제거, 다운그레이드를 할 수 없어요.

### 활성화한 뒤 마음이 바뀌면 요금을 환불받을 수 있나요?
아니요. 이 구독은 취소도 환불도 할 수 없어요.

### HIPAA는 어떤 에이전시가 활성화해야 하나요?
PHI를 다루면서 BAA를 포함한 계약 및 제품 차원의 통제가 필요한 에이전시예요.

### HIPAA를 준수하는 서브 계정을 제 에이전시로 이전할 수 있나요?
네. 두 에이전시가 모두 HIPAA를 준수하는 경우에는 서브 계정 하나를 다른 에이전시로 이전할 수 있어요.

### 모바일 앱도 적용되나요?
네. 하이퍼클래스 모바일 앱의 **대화**, **캘린더**, **연락처**에도 같은 암호화와 MFA 통제가 적용돼요.

### HIPAA를 나중에 비활성화할 수 있나요?
아니요. PHI는 암호화를 되돌릴 수 없기 때문에, 이 애드온은 해당 에이전시에서 영구적으로 유지돼요.

### 어떤 데이터 유형이 포함되나요?
PHI를 저장할 수 있는 모든 객체가 포함돼요. 연락처, 메모, 커스텀 필드, SMS/MMS, 음성 녹음, 이메일 본문과 첨부파일, 폼/설문 제출 내용, 캘린더, 인보이스가 해당돼요. 쉽게 말해 계정에 있는 모든 데이터예요.

### HIPAA 문서에 PandaDoc를 계속 써야 하나요?
아니요. 이제 HIPAA 관련 문서는 모두 하이퍼클래스 **문서 & 계약** 시스템 안에서 바로 생성되고 관리돼요.

### BAA에 서명한 뒤 HIPAA를 직접 켜야 하나요?
네. BAA에 서명한 뒤 에이전시 소유자가 **서브 계정 > [로케이션] > 고급 설정**으로 이동해 서브 계정마다 **HIPAA 규정 준수** 토글을 **켜짐**으로 바꿔야 해요.

### BAA의 서명자 정보를 수정할 수 있나요?
네. 고객지원 티켓을 보내지 않아도 문서 안에서 서명자 정보를 직접 수정할 수 있어요.

### HIPAA가 리뷰 AI 응답에도 영향을 주나요?
네. HIPAA를 켠 서브 계정에서는 리뷰 AI가 만든 리뷰 답변도 HIPAA 규정에 맞게 자동으로 처리돼요.
