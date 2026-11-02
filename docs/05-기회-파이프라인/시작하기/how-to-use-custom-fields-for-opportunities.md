---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000000561-how-to-use-custom-fields-for-opportunities
번역일: 2026-11-02
카테고리: 05-기회-파이프라인 > 시작하기
---

# 기회(Opportunities)에서 커스텀 필드(Custom Fields) 사용하기

기회(Opportunities)용 커스텀 필드(Custom Fields) 기능을 사용하면 필요에 맞게 정보를 수집, 정리, 커스터마이징할 수 있어 기회 관리 프로세스를 완전히 개인화할 수 있어요. 기회 모달(Opportunity Modal) 안에서 커스텀 필드를 생성, 분류, 그룹화하여 데이터 관리와 프로세스 추적을 더욱 정교하게 만들 수 있습니다. 연락처(Contacts)에서처럼 쉽게 커스터마이징할 수 있어요.

이 기능은 현재 Labs에서 이용하실 수 있습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003923483/original/cjLoF2igsC2Qfr8s8sdBc17IoofwOaeQhQ.png?1690539467)

#### 이 아티클에서 다루는 내용

#### [이 기능은 무엇인가요?](#What-is-this-feature?)

#### [활용 사례](#Usage-Cases%3A)

#### 
[**기능 사용 방법**](#How-to-use-this-feature?)

#### 
[**자주 묻는 질문**](#FAQs)

#### [기회(Opportunity)에서 커스텀 필드는 어떻게 확인하나요?](#How-can-I-see-my-custom-fields-in-an-Opportunity?)

#### ['빈 필드 숨기기' 기능은 어떤 역할을 하나요?](#What-does-the-'hide-empty-fields'-feature-do?)


## 이 기능은 무엇인가요?

기회(Opportunities)용 커스텀 필드(Custom Fields) 기능을 사용하면 영업 기회에 대해 특정 데이터 필드를 추가하고, 커스터마이징하고, 정리할 수 있어요.

이를 통해 잠재적인 영업 건이나 작업을 더 유연하고 정밀하게 추적할 수 있습니다. 비즈니스 운영이나 영업 프로세스에 고유한 추가 데이터 항목을 포함시킬 수 있어요. 이러한 커스텀 필드에는 프로젝트 마감일, 제품 사양, 고객 선호도 등 다양한 정보가 들어갈 수 있습니다.

또한 이 기능을 통해 커스텀 필드를 여러 폴더로 분류하여 더 체계적이고 깔끔한 화면을 구성할 수 있어요. 값이 비어 있는 필드를 숨기는 옵션도 있어서, 기회 카드를 더 깔끔하고 효율적으로 볼 수 있습니다.

### 활용 사례

**영업 마감일:** 각 기회의 영업 마감일에 대한 커스텀 필드를 만들어서 팀원들이 모든 주요 마감일을 놓치지 않도록 할 수 있어요.

**영업 단계:** 최초 접촉, 니즈 분석, 협상, 최종 계약 등 기회별 영업 단계를 구분할 수 있어요.

**제품 상세 정보:** 제품 모델, SKU, 서비스 유형 등 기회와 관련된 제품 또는 서비스의 세부 정보를 커스텀 필드로 추적할 수 있어요.

**고객 선호도:** 선호하는 연락 시간이나 특별한 요청 사항 등 고객의 구체적인 선호도나 니즈를 추적할 수 있어요.

**리드 소스:** 리드가 어디서 유입됐는지 추적할 수 있어요. 추천, 소셜 미디어, 다이렉트 메일 등이 포함될 수 있습니다.

**고객 예산:** 고객의 예산이나 지출 여력에 대한 필드를 만들어 두면 제안을 더 정밀하게 맞출 수 있어요.

**전환 가능성:** 기회가 실제 영업 성사로 이어질 확률을 나타내는 필드를 만들 수 있어요. 이는 리소스 배분의 우선순위를 정하는 데 도움이 됩니다. 숫자 필드로 만들고 Math Operation 워크플로우 액션으로 값을 업데이트하는 방식으로 활용할 수 있어요.

**다음 후속 연락 일자:** 대화를 이어가고 영업 성사 가능성을 높이기 위해, 잠재 고객에게 언제 다시 연락해야 하는지 추적하고 싶을 수 있어요.

**연관 캠페인:** 기회가 특정 마케팅 캠페인과 연결되어 있다면, 각 기회가 어떤 캠페인과 연관되어 있는지 추적하는 커스텀 필드를 만들 수 있어요.

**고객의 업종 또는 직업:** 고객의 업종이나 직업 정보를 담는 필드를 만들어 두면 고객의 니즈를 더 잘 이해하고 그에 맞춰 커뮤니케이션을 조정할 수 있어요.


## 기능 사용 방법

**설정(Settings)으로 이동:** 커스텀 필드 생성을 위한 설정은 하위 계정(Sub-account)의 설정 페이지에서 찾을 수 있어요.

**커스텀 필드 생성:** 설정(Settings) 메뉴에서 '커스텀 필드(Custom Fields)'로 이동하세요. '필드 추가(Add Field)' 또는 '필드 생성(Create Field)'을 클릭합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003926979/original/l5FROAGJ8IFlg3fyI27xzUWJiXYdCRSi-A.png?1690541104)
 

**필드 정의하기:** 오브젝트로 '기회(Opportunity)'를 선택한 다음, 한 줄 텍스트, 숫자, 드롭다운 등 커스텀 필드 유형을 정의하세요. '프로젝트 시작일' 또는 '영업 단계'처럼 목적에 맞는 이름을 붙여주세요.

현재 기회(Opportunities)에 추가할 수 있는 커스텀 필드 유형은 다음과 같습니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003927631/original/s-ZgSCwM-EvvgQQDaE89KhGVZe6tcCH2dQ.png?1690541399)

- 텍스트 입력
- 한 줄
- 여러 줄
- 텍스트 박스 목록
- 값(Values)
- 숫자
- 전화번호
- 금액
- 옵션 선택
- 드롭다운(단일 선택)
- 드롭다운(다중 선택)
- 라디오 선택
- 체크박스
- 날짜 선택
- 서명
- 리치 텍스트
- **URL:** 모든 도메인 허용, 특정 도메인만 허용, 또는 특정 도메인 차단 설정 가능
- **날짜 & 시간:** 날짜, 시간 또는 둘 다 수집 가능하며, 미래 날짜·과거 날짜·특정 범위로 제한 가능하고, 선택 가능한 요일도 지정할 수 있어요
- **사용자:** **여러 사용자 허용(Allow multiple users)**을 켜면 한 명 이상을 배정할 수 있어요. 이 설정은 이후에 변경할 수 없습니다. 배정된 사용자는 팔로워 수준의 접근 권한을 갖게 돼요

참고하세요
'파일 업로드' 필드 유형은 다른 곳에서는 일반적으로 제공되지만, 기회(Opportunities)에서는 현재 지원을 위해 작업 중입니다. 이 기능이 추가되면 기회 섹션의 커스텀 필드에 파일을 직접 업로드할 수 있게 돼요.

이제 '기회(Opportunities)'와 '연락처(Contacts)'라는 옵션이 보일 거예요. 필요한 정보를 입력한 뒤 기회(Opportunities)를 선택하고 저장(Save)을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003927964/original/Dpk6HxzTu7ktlVvscbUdiiOrv1s4Vh_E0A.png?1690541537)


**커스텀 폴더 만들기:** 기회용 커스텀 필드를 커스텀 폴더로 그룹화할 수 있어요. 이렇게 하면 필드를 더 체계적으로 분류하고 정리할 수 있습니다. 설정하려면 '커스텀 필드(Custom Fields)' 섹션의 '폴더(Folders)'로 이동해서 새 폴더를 만들고 이름을 지정한 다음, 오브젝트로 '기회(Opportunity)'를 선택하세요.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003928158/original/hqiCkHKiwMvZ4IjsBY5DV6ZMOpJ2Lbm04A.png?1690541617)


**커스텀 필드 사용하기:** 기회(Opportunity)를 생성하거나 편집할 때 '기회(Opportunities)' 섹션으로 이동하면 새로 만든 커스텀 필드가 보일 거예요. 필요한 정보를 입력하시면 됩니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003928314/original/61fXXWE6LCSQzCWb2yXucfHQvYoVYfomYg.png?1690541722)


**빈 필드 숨기기:** 커스텀 필드가 많아서 값이 없는 필드는 보고 싶지 않다면, '빈 필드 숨기기(Hide Empty Fields)' 기능을 켜시면 됩니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003928544/original/fNguPFyCZ_-nW3ohktcraHSqkr35cvxy3A.png?1690541797)


---

## 자주 묻는 질문

### 기회(Opportunity)에서 커스텀 필드는 어떻게 확인하나요?

'기회(Opportunities)'로 이동해서 기회를 선택하거나 새로 생성하면 커스텀 필드 목록이 표시돼요. 기회를 편집할 때 이 필드들에 값을 입력할 수 있습니다. 필드를 폴더로 정리해 두었다면, 폴더별로 순서대로 표시됩니다.


### '빈 필드 숨기기' 기능은 어떤 역할을 하나요?

이 기능을 활성화하면 현재 값이 없는 모든 필드가 숨겨져요. 덕분에 정말 필요하거나 관련 있는 필드에만 집중할 수 있어서, 기회 데이터를 더 깔끔하고 간결하게 볼 수 있습니다.

---
*원문 최종 수정: 2026년 10월 23일*
*Hyperclass 사용 가이드 — hyperclass.ai*