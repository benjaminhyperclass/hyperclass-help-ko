---
원문: /support/solutions/articles/155000004126-quiz-builder-guide
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퀴즈 빌더 가이드

**퀴즈 빌더**로 리드 정보를 모으고 개인별 결과를 보여 주는 인터랙티브 퀴즈를 만들 수 있어요. 점수, 카테고리, 자동화, CRM 매핑을 함께 쓰면 퀴즈 응답을 개인 맞춤 경험으로 이어갈 수 있어요.

---

## 퀴즈 빌더란?

퀴즈 빌더로 리드 정보를 모으고, 관심 정도를 파악하고, 퀴즈 마지막에 개인별 결과를 보여 주는 인터랙티브 퀴즈를 만들 수 있어요. 퀴즈에는 여러 페이지와 다양한 질문 유형을 넣을 수 있고, 점수와 카테고리는 선택적으로 쓸 수 있어요. 메시지와 콜투액션을 담은 결과 페이지도 직접 꾸밀 수 있어요.

처음부터 만들어도 되고 템플릿을 써도 돼요. 퀴즈는 임베드 코드나 공유 링크로 게시해요. 제출된 응답은 CRM 커스텀 필드에 매핑할 수 있고, 워크플로우를 실행해 그룹별 후속 조치를 할 수도 있어요.

---

## 퀴즈 빌더의 주요 장점

- 오디언스 세분화: 퀴즈 응답과 점수로 결과와 관심도에 따라 연락처를 나눌 수 있어요.
- 자동화 후속 조치: 퀴즈가 제출되는 즉시 워크플로우를 실행해 실시간으로 소통할 수 있어요.
- 개인 맞춤 경험: 점수 구간, 섹션, CTA로 결과 페이지를 꾸며 다음 행동을 안내해요.
- CRM 매핑: 퀴즈 결과(점수, 구간, 카테고리)를 CRM 커스텀 필드에 매핑해 계속 세분화하고 리포트에 활용해요.

---

## 퀴즈 빌더 화면 구성과 이동

빌더 상단의 탭으로 퀴즈의 주요 영역을 오갈 수 있어요.

- **편집**: 질문, 페이지, 디자인 요소를 추가해요.
- **설정**: 퀴즈 로직, 결과, 연동을 설정해요.
- **알림**: 내부 이메일 알림과 **Auto Responder**(자동 응답 이메일)를 설정해요.
- **제출**: 빌더를 벗어나지 않고 퀴즈 응답 데이터를 확인해요.

![퀴즈 빌더 탭 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076943935/original/449-4rhOYsJQQ_s-kRvenVY-gjkP5ZMfcw.png?1785161418)

### 퀴즈 요소 순서 바꾸기

요소 순서를 바꾸면 질문 흐름을 조절해서 응답자가 퀴즈를 더 쉽게 따라갈 수 있어요. 긴 퀴즈에서는 작은 배치 변경에도 시간이 걸리는데, 드래그할 때 보이는 표시가 개선되어 훨씬 편해졌어요.

순서를 바꾸려면 빌더에서 요소를 클릭한 채 새 위치로 끌어다 놓으세요. 끌고 있는 동안 하이퍼클래스가 은은한 그림자를 보여 줘요. 긴 퀴즈에서 화면 위쪽이나 아래쪽 가까이로 끌면 자동으로 스크롤돼요. 그래서 스크롤하려고 요소를 중간에 놓지 않아도 페이지 전체에서 요소를 옮길 수 있어요.

![퀴즈 요소를 끌어서 순서 바꾸기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069283979/original/elAKi0JwPPO2RpgsltUCksGRuG30RnASzg.gif?1776335328)

---

## 퀴즈 요소

끌어다 놓을 수 있는 퀴즈 요소가 미리 많이 준비되어 있어요. 빠르게 추가하는 요소 외에, 연락처나 기회의 커스텀 필드도 퀴즈에 추가할 수 있어요.

### 오브젝트 필드 추가

퀴즈 빌더에서 **Add Object Fields**(오브젝트 필드 추가)를 사용하면 지원되는 오브젝트의 필드를 둘러보거나 검색할 수 있어요.

필드를 여러 개 선택한 뒤 **Add N fields**(N개 필드 추가)를 클릭하거나, 선택한 필드 묶음을 퀴즈 캔버스로 끌어다 놓으면 한 번에 추가돼요.

필드 행에는 유형과 쿼리 키가 표시되어 원하는 필드를 쉽게 찾을 수 있어요.

아래 표의 유형은 **Quick Add**(빠른 추가) 아래에 있는 항목이에요.

| 유형 | 이름 | 설명 |
| --- | --- | --- |
| **Quick Add > 질문** | **단일 선택** | 선택지가 여러 개 보이고, 하나만 선택해요. |
| **Quick Add > 질문** | **복수 선택** | 선택지가 여러 개 보이고, 여러 개를 선택할 수 있어요. |
| **Quick Add > 질문** | **Yes / No**(예/아니요) | 예 또는 아니요 중 하나를 선택해요. |
| **Quick Add > 질문** | **단답형** | 짧은 텍스트 입력란이에요. |
| **Quick Add > 질문** | **Long Answer**(장문형) | 스크롤되는 큰 텍스트 입력란이에요. |
| **Quick Add > 질문** | **Number**(숫자) | 숫자(양수 또는 음수)만 입력할 수 있고, 위/아래 화살표로 1씩 더하거나 빼요. |
| **Quick Add > 질문** | **단일 드롭다운** | 드롭다운에 선택지가 여러 개 있고, 하나만 선택해요. |
| **Quick Add > 질문** | **Multi Dropdown**(다중 드롭다운) | 드롭다운에 선택지가 여러 개 있고, 여러 개를 선택할 수 있어요. |
| **Quick Add > 개인 정보** | **Full Name**(전체 이름) | 텍스트 입력란 |
| **Quick Add > 개인 정보** | **First Name**(이름) | 텍스트 입력란 |
| **Quick Add > 개인 정보** | **Last Name**(성) | 텍스트 입력란 |
| **Quick Add > 개인 정보** | **생년월일** | 날짜 선택기 |
| **Quick Add > 개인 정보** | **Phone**(전화번호) | 형식을 검사하는 전화번호 입력란 |
| **Quick Add > 개인 정보** | **이메일** | 형식을 검사하는 이메일 입력란 |
| **Quick Add > 주소** | **주소** | 텍스트 입력란 |
| **Quick Add > 주소** | **City**(도시) | 텍스트 입력란 |
| **Quick Add > 주소** | **State**(주/도) | 텍스트 입력란 |
| **Quick Add > 주소** | **Country**(국가) | 국가 드롭다운 검색 |
| **Quick Add > 주소** | **Postal Code**(우편번호) | 텍스트 입력란 |
| **Quick Add > 주소** | **Organization**(조직) | 텍스트 입력란 |
| **Quick Add > 주소** | **웹사이트** | 형식을 검사하는 URL 입력란 |
| **Quick Add > 평점** | **평점** | 별 5개 |
| **Quick Add > 사용자 지정됨** | **문자** | 입력란이 아니에요. 질문 없이 퀴즈에 텍스트를 넣는 용도예요. |
| **Quick Add > 사용자 지정됨** | **Html** | 외부 HTML 스크립트를 퀴즈에 추가해요. |
| **Quick Add > 사용자 지정됨** | **Captcha**(캡차) | "로봇이 아닙니다" 확인 |
| **Quick Add > 사용자 지정됨** | **Source**(출처) | 리드의 출처로 추적할 커스텀 값을 추가해요. |
| **Quick Add > 사용자 지정됨** | **T & C**(이용약관 동의) | "동의합니다..." 문구를 직접 바꿀 수 있는 체크박스예요. |
| **Quick Add > 사용자 지정됨** | **Score**(점수) | 숫자 입력란 |
| **Quick Add > 기타** | **이미지** | 입력란이 아니에요. 퀴즈에 이미지를 넣는 용도예요. |
| **Quick Add > 기타** | **File Upload**(파일 업로드) | 파일 선택기 |
| **Quick Add > 기타** | **Monetary**(금액) | 입력란 |
| **Quick Add > 기타** | **서명** | 직접 그리는 서명 패드 |

{% hint style="info" %}
필드 이름에 "score"라는 단어가 들어간 커스텀 필드는 하이퍼클래스가 자동으로 숫자 점수 요소로 인식해요. 퀴즈에 커스텀 필드를 만들거나 추가할 때 이 점을 기억해 두세요.
{% endhint %}

---

## 점수와 카테고리

점수와 카테고리는 퀴즈의 "로직 계층"이에요. 응답을 명확한 결과로 바꿔서, 연락처가 결과 페이지에서 알맞은 결과를 보게 해 줘요.

- 카테고리는 퀴즈가 보여 줄 수 있는 결과 그룹이에요. 결과에 붙이는 라벨이라고 생각하면 돼요(예: "초급", "중급", "고급", 또는 "서비스 A vs 서비스 B"). 답변을 카테고리에 연결해 두면 퀴즈가 연락처에게 맞는 결과를 판단해요.
- 점수는 숫자 결과를 계산하는 점수 체계예요. 답변 선택지마다 점수를 부여하고, 합산해서 총점, 카테고리별 점수, 점수 구간을 정해요(예: 0~10 = 스타터, 11~20 = 성장, 21~30 = 확장).

{% hint style="info" %}
자세한 내용은 "카테고리와 점수를 지정해 동적 결과 메시지를 만드는 방법 - 완벽 가이드!"(How to Assign Categories and Scoring in Quizzes With Dynamic Result Messages - A Complete Guide!) 문서를 참고하세요.
{% endhint %}

![카테고리와 점수 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065728924/original/yKk4Ic4FSR68ugT5COA646aifl2gaSC9YA.png?1772057481)

---

## 퀴즈 공개 일정 설정

일정을 설정하면 퀴즈가 응답을 받는 기간을 정할 수 있어요. 시간제 평가, 캠페인, 신청서처럼 특정 기간에만 열어 두어야 하는 퀴즈에 유용해요.

퀴즈의 시작 일시, 종료 일시, 시간대를 선택적으로 설정할 수 있어요. 퀴즈가 열리기 전이나 만료된 뒤에 접속한 방문자에게 하이퍼클래스가 사용자 지정 화면을 보여 주거나 다른 페이지로 이동시킬 수도 있어요.

일정 설정은 선택 사항이에요. 일정 기반 공개를 켜지 않으면 퀴즈는 평소처럼 계속 응답을 받아요.

전체 설정 방법은 [폼, 설문, 퀴즈 공개 일정 설정과 사용자 지정 오픈·만료 화면](설문/schedule-form-survey-quiz-availability-with-custom-open-expiry-experiences.md)을 참고하세요.

---

## 결과 페이지

결과 페이지는 연락처가 퀴즈를 제출한 뒤 마지막으로 보게 되는 화면이에요. 점수, 구간, 카테고리 같은 결과를 보여 주고, 그 결과가 무슨 뜻인지 설명하고, 다음에 할 행동을 안내해요.

결과 페이지를 잘 만들면 퀴즈 결과가 명확한 추천으로 이어져서 전환율이 높아져요(예: 통화 예약, 알맞은 오퍼 선택, 알맞은 육성 경로 시작). 용도와 브랜드에 맞게 결과 페이지를 꾸밀 수 있어요.

- 헤더 편집: 로고, 비즈니스 이름, 문구를 추가해요. 레이아웃, 여백, 배경 색상도 조정할 수 있어요.
- 점수 설정: 결과는 동적 콘텐츠를 기반으로 해요. 점수 구간별로 보여 줄 문구를 편집할 수 있어요(예: 낮음, 보통, 높음).
- 구간 조정: 각 구간을 나누는 백분율 범위를 정할 수 있어요(예: 낮음 = 0~39%, 보통 = 40~79% 등). 구간마다 색상도 바꿔서 결과를 시각적으로 표현할 수 있어요(예: 낮은 점수는 빨간색, 높은 점수는 초록색).
- 콜투액션(CTA) 추가: CTA 섹션을 편집해 다음 단계를 유도해요. 예를 들어 "결과에 대해 이야기하고 싶으세요? 통화를 예약하세요!"라고 쓰고, 버튼에 캘린더, 상품 페이지, 다른 자료의 링크를 걸 수 있어요.
- 푸터 꾸미기: 푸터 로고와 소셜 미디어 링크를 추가하고, 푸터를 고정할 수도 있어요.

{% hint style="info" %}
자세한 내용은 "퀴즈 결과 페이지 꾸미기"(Customizing Quiz Results Page) 문서를 참고하세요.
{% endhint %}

![결과 페이지 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065814206/original/OHJkLH14EvWtCjo0XTOIWu9dpOASBMLSwg.jpeg?1772126552)

### 결과 페이지에서 점수 구간 설정하기

점수 구간을 설정하면 연락처의 총점에 따라 다른 결과 내용을 보여 줄 수 있어요. 퀴즈를 따로 만들지 않아도 개인 맞춤 결과를 유지할 수 있어요.

1. 퀴즈 편집기에서 **설정**으로 이동한 뒤 **Edit Results Page**(결과 페이지 편집)를 선택하세요.

   ![설정에서 결과 페이지 편집 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065729268/original/pppYGEgPiyfxMutF9Y7pnUkN_cBcFAT4ow.png?1772058163)
2. **Configure Score Tiers**(점수 구간 설정)를 클릭하세요.

   ![점수 구간 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065729398/original/iLSmfGLnsKvXYVDhQbi46uoYFsYLG0oCHQ.png?1772058571)
3. 각 구간의 이름, 색상, 범위를 편집하세요. 기존 구간을 삭제하거나 새 구간을 추가할 수도 있어요.

   ![구간 이름, 색상, 범위 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065729376/original/LfcCqmLr7uOOoTJhnIvmooyRzDEBTZSZPw.png?1772058463)

---

## 제출과 CRM 매핑

CRM 필드 매핑은 연락처의 퀴즈 결과를 연락처 커스텀 필드에 기록해요. 전체 점수와 구간, 카테고리별 점수와 구간, 가장 높거나 낮은 카테고리 정보가 대상이에요.

퀴즈 데이터를 CRM에 매핑해 두면 다음과 같이 활용할 수 있어요.

1. 연락처 세분화: 퀴즈 성과에 따라 연락처를 필터링하거나 그룹으로 묶어요.
   - "전체 점수 ≥ 80"인 사용자로 스마트 리스트를 만들어요.
   - "피트니스 구간 = 초급"인 사용자를 묶어 맞춤 메시지를 보내요.
2. 자동화 개인화: 퀴즈 결과로 후속 워크플로우를 맞춤 설정해요.
   - 가장 높은 카테고리나 가장 낮은 카테고리에 따라 다른 육성 이메일을 보내요.
   - 카테고리 점수가 기준값을 넘으면 액션을 실행해요.

{% hint style="info" %}
CRM 매핑 설정 방법은 "퀴즈 결과를 CRM 커스텀 필드에 매핑하기"(Map Quiz Results to CRM Custom Fields) 문서를 참고하세요.
{% endhint %}

![CRM 매핑 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066025233/original/x5rh0VbIz1YUzu8z-SyRef5yGV5cxqk6Ow.png?1772467170)

---

## 퀴즈 만들기

#### 1단계: 퀴즈 편집기 열기

**사이트 > 퀴즈 > + Add Quiz**(퀴즈 추가)로 이동하거나, 편집할 퀴즈를 선택하세요.

![퀴즈 목록과 퀴즈 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065729491/original/xygWbtQvHbudzc4vTeSBlvI2rwj_6ro1Og.jpeg?1772058922)

#### 2단계: 템플릿 선택

**처음부터 만들기** 또는 **템플릿으로 만들기**를 선택하세요. **템플릿 라이브러리**에서는 템플릿을 둘러보고, 필터링하고, 검색할 수 있어요. 마음에 드는 템플릿을 미리 보고 활성화하면 퀴즈 빌더에 불러와요.

![처음부터 만들기와 템플릿으로 만들기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065729948/original/JQf9IOObLj218f1RFBX3BfHH-NFJBqSjkA.jpeg?1772060188)

#### 3단계: 퀴즈 설정

필요에 맞게 퀴즈를 설정하세요. 질문과 페이지는 필요한 만큼 추가할 수 있어요.

페이지 추가와 삭제: 페이지는 나열된 순서대로 표시돼요(1페이지가 먼저, 2페이지가 그다음).

![페이지 추가와 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065730042/original/7qm9Du_2x7d7RiBiDtaoYkpLk4qw60seFg.jpeg?1772060479)

요소 추가와 삭제: 요소는 반드시 페이지에 추가해야 해요. 요소를 끌어다 놓으면 같은 페이지 안에서 순서를 바꾸거나 다른 페이지로 옮길 수 있어요.

![요소 추가와 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048169065/original/mOZ86FVyDO11tvmv2Xz9sH3NYath1T6PYw.png?1749747235)

요소 편집: 요소를 클릭하면 요소가 강조되고 오른쪽 패널에 해당 요소의 설정이 열려요. 대부분의 요소에는 질문(퀴즈 응답자에게 보이는 질문)과 공통 설정이 있어요. 공통 설정으로는 **Query Key**(쿼리 키, URL 파라미터로 질문을 미리 채울 때 사용), 필수, 숨김 등이 있어요. 요소마다 고유한 설정도 있어요. 예를 들어 선택형 질문에는 **Options**(옵션)가 있고, 여기서 **Jump To**(이동) 분기 로직도 쓸 수 있어요.

![요소 편집 오른쪽 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065730058/original/_9El0vvRMFPLU8NiNKs297pyqgPRPaXTEg.jpeg?1772060581)

알림: **알림** 탭을 선택하면 퀴즈 이메일 설정을 할 수 있어요. 내부 **Email Notification**(이메일 알림)과, 퀴즈를 제출한 사람에게 보내는 **Auto Responder**(자동 응답 이메일)를 켤 수 있어요.

제목, 받는 사람 이메일 주소, 회신 받을 이메일 주소, 보내는 사람 이름을 설정할 수 있어요.

퀴즈 이메일 알림에는 다음 파일을 포함할 수 있어요.

- **퀴즈 제출 PDF**: 제출된 응답이 들어 있어요.
- **Quiz Results Page PDF**(퀴즈 결과 페이지 PDF): 평가 또는 채점된 결과 페이지가 들어 있어요.

퀴즈 참여자에게 선택한 PDF를 자동으로 보내고 싶다면 **Auto Responder**를 켜세요.

![알림 탭의 이메일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077026618/original/ktGHZwJUqKqb-CbHU7xV52CZzJoekc3qbA.png?1785240890)

카테고리: 그리드 아이콘을 클릭하면 카테고리 팝오버가 열려요. 여기서 카테고리를 추가, 이름 변경, 삭제할 수 있고, 답변 선택지에 카테고리와 점수를 지정할 수 있어요. 카테고리가 결과 페이지로 어떻게 이어지는지도 팝오버에서 설명해 줘서, 카테고리 점수가 어떻게 표시될지 확인할 수 있어요.

![카테고리 팝오버](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065730122/original/1msD9NGgPgRuHyabWXwIAYoAeD3A8yJzdQ.jpeg?1772060895)

**스타일**과 **Options**(옵션): 상단 패널 오른쪽에 있는 선과 점 모양 아이콘을 클릭하세요. **스타일**에는 **레이아웃**, **Footer**(푸터), **Colors & Background**(색상 및 배경), **Miscellaneous**(기타)가 있어요. **레이아웃**에는 상단 여백 같은 간격 설정이 있어서, 사용자 지정 CSS 없이 퀴즈 콘텐츠 위쪽 공간을 조정할 수 있어요. **Options**에는 **On Submit**(제출 시, 퀴즈를 마쳤을 때의 동작), **Facebook Pixel ID**, **Facebook Pixel Events**, **Quiz Settings**(퀴즈 설정), **Footer HTML**(푸터 HTML)이 있어요.

![스타일과 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048169688/original/lHD-I26KXB6TYLR1oyFecQx66dHq7IyL7g.png?1749748197)

요소별 레이블 정렬: 퀴즈 전체에 하나의 정렬을 적용하지 않고, 필드마다 레이블 위치를 다르게 지정할 수 있어요. 특히 간결한 레이아웃에서 시각적 리듬과 간격을 세밀하게 맞추는 데 좋아요. 먼저 질문을 선택하고, 오른쪽 사이드바의 **Label Alignment**(레이블 정렬)에서 선택 화살표로 원하는 정렬을 정하세요. 모바일에서는 데스크톱 설정과 관계없이 정렬이 자동으로 위쪽(Top)으로 지정되어 보기 편한 레이아웃이 유지돼요.

![요소별 레이블 정렬 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054089605/original/7byToOnvBrS8XqxgKMNg1kpByinA2Ok-LA.png?1758224105)

#### 4단계: 결과 페이지 꾸미기

용도와 브랜드에 맞게 결과 페이지를 꾸밀 수 있어요. 자세한 방법은 "퀴즈 결과 페이지 꾸미기"(Customizing Quiz Result Pages) 문서를 참고하세요.

![결과 페이지 꾸미기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065814221/original/O6nuyTg4pcFpd3245cxDf8ETmnC7bndjfw.jpeg?1772126567)

#### 5단계: 연동하고 게시하기

퀴즈를 저장했다면 오른쪽 위의 **Integrate**(연동) 버튼을 클릭하세요. 두 가지 방법이 있어요.

- **임베드**: iframe 코드를 복사해 웹사이트나 퍼널 페이지에 퀴즈를 바로 넣어요.
- **링크**: 바로 가기 링크를 복사해 이메일, 소셜 미디어, 대화에서 공유해요.

![연동 버튼과 임베드, 링크 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065814164/original/esNf9y6_gRbYB6CrvP71cmOfrVN2ih6nhg.jpeg?1772126529)

---

## 자주 묻는 질문

### 퀴즈 빌더를 내 웹사이트와 연동할 수 있나요?
네, 제공되는 임베드 코드로 웹사이트에 퀴즈를 넣거나, 바로 가기 링크로 공유할 수 있어요.

### 점수 체계를 직접 정할 수 있나요?
네, 질문마다 다른 점수를 부여하고 여러 점수 카테고리를 만들 수 있어요.

### 퀴즈 빌더에서 분기 로직을 쓸 수 있나요?
네, 답변별로 "Jump to"(이동) 규칙을 설정하면 응답에 따라 흐름이 달라지는 퀴즈를 만들 수 있어요.

### 퀴즈 결과는 어떻게 분석하나요?
**사이트 > 퀴즈**로 이동한 뒤 드롭다운에서 **제출**을 선택하면, 퀴즈 대시보드에서 모든 제출 내역을 보고 결과를 분석할 수 있어요.

### 퀴즈 점수에 따라 후속 조치를 자동화할 수 있나요?
네, **워크플로우 빌더**에서 **Quiz Submitted**(퀴즈 제출) 트리거를 사용하면 사용자의 점수나 카테고리에 따라 자동 후속 시퀀스를 만들 수 있어요.

### 코스 수료증 발급에 퀴즈 빌더를 쓸 수 있나요?
**사이트 > 퀴즈**의 퀴즈 빌더는 평가, 리드 선별, 점수 계산, 개인 맞춤 결과에 쓸 수 있어요. 다만 **하이퍼클래스 코스** 안에서 평가용으로 쓰는 퀴즈는 따로 설정해요.

학습자가 코스 퀴즈나 과제를 통과하거나 완료한 뒤 수료증을 발급하려면, 코스 평가 워크플로우와 해당 수료증 자동화를 사용하세요.
