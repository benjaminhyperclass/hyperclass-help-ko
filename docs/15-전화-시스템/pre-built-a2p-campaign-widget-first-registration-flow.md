---

번역일: 2024-12-26
카테고리: 전화 시스템
---

# 사전 제작 A2P 캠페인(위젯 우선) 등록 플로우

**개요**

빠른 설정(사전 제작 A2P 캠페인) 등록 플로우는 다음을 목적으로 설계된 체계적인 캠페인 제출 경험입니다:

- 컴플라이언스 정확성 향상
- 통신사 거부율 감소
- 수동 컴플라이언스 작성 제거
- 분류 오류 방지
- A2P 등록 프로세스 간소화

이 플로우는 채팅 위젯 기반 옵트인 방식을 강제하며 통신사에 맞는 컴플라이언스 표준을 자동으로 적용합니다.

필수 컴플라이언스 요소를 고정하고 필수 고지사항을 자동 생성함으로써 시스템은 제출 오류와 승인 지연을 크게 줄입니다.

참고: 이 캠페인 등록 플로우는 다음에 사용할 수 없습니다:
- 혼합 사용 사례 캠페인
- 개인사업자(Sole Proprietor) 캠페인

**사전 제작 캠페인 플로우 접근하기**

사용자는 이제 표준 A2P 플로우에서 캠페인 등록을 시작할 때 "빠른 설정(Quick Setup)"을 선택할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068347197/original/_TzRHItSj4GNDEfvgKcqQoQCVZ3VFoWQNw.png?1775130286)

이 가이드 경험은:
- 채팅 위젯을 유일한 옵트인 방식으로 강제
- 컴플라이언스 준수 동의 언어 자동 생성
- 필수 컴플라이언스 요소 고정
- 금융 및 마케팅 잘못된 분류 방지
- 거부 위험 감소
- 컴플라이언스 위젯을 캠페인에 자동 연결

**중요 참고사항 - "채팅 위젯" 선택 전에 반드시 읽어주세요**

A2P 캠페인에서 **채팅 위젯**을 선택하는 경우
웹사이트의 다른 모든 폼에서 **동의 체크박스를 제거해야 합니다**.
채팅 위젯을 옵트인 방식으로 사용하면서 다른 폼에 동의 체크박스가 있으면 캠페인이 거부될 수 있습니다.

**진행하기 전에:**
1. 웹사이트의 모든 폼에서 동의 체크박스 제거
2. 채팅 위젯이 유일한 옵트인 방식으로 사용되는지 확인

## **메시지 사용 사례 선택**

메시지 사용 사례 선택은 캠페인이 보낼 메시지의 유형을 정의하고 등록 중 캠페인이 분류되는 방식을 결정합니다.

플로우에는 구조화된 2단계 선택 프로세스가 포함됩니다.

### **1단계: 메시지 유형**

| 옵션 | 설명 |
|------|------|
| **마케팅 / 프로모션** | 광고, 제안, 판매, 프로모션 |
| **거래 / 비마케팅** | 정보 제공 또는 서비스 관련 메시지 |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068347327/original/HdjtIRW1tkzKPIn5WGJo2lp99t8TL9yEXg.png?1775130351)

### **2단계: 사용 사례 선택**

사용 가능한 사용 사례는 선택한 메시지 유형에 따라 달라집니다.

#### **마케팅 / 프로모션**을 선택한 경우:
- 마케팅만 사용 가능합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066293348/original/rOr7djVCvi1tJ1A7ZSosefkilG92cQ53QA.png?1772721869)

#### **거래/비마케팅**을 선택한 경우:
- 고객 관리만 사용 가능합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068348315/original/ZR2MPyamENkPW5og0h4Bpj1V5rQquS2Pbw.png?1775130790)

### **이 구조가 중요한 이유**

이 통제된 선택 프로세스는:
- 호환되지 않는 조합 방지
- 분류 오류 감소
- 캠페인을 통신사 요구사항에 맞춤
- 거부율 감소

## **자동 연령 게이팅(통신사 준수)**

다음의 경우 연령 게이팅이 자동으로 적용됩니다:
- 연령 제한 콘텐츠가 선택된 경우

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066294376/original/OS_H8g6TfRLYN55pKf4TK8C3F3ZbTGcg1g.png?1772722275)

### 트리거되는 경우:

| 액션 | 시스템 동작 |
|------|-----------|
| 연령 제한 체크박스 선택 | 생년월일(DOB) 필드 표시 |
| DOB 필드 | 필수이며 제거 불가 |
| 제출 | DOB 완료까지 차단 |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066296762/original/mjIq_2hR4l_m2WgQwQUdX3n2rGXyU0-_XA.png?1772723455)

**참고** - 1. 연령 제한 콘텐츠를 선택하지 않으면 DOB 필드가 표시되지 않습니다.
         2. 이는 규제 산업의 자동 컴플라이언스를 보장합니다.

## **자동 생성 컴플라이언스 위젯**

시스템이 다음을 포함하는 컴플라이언스 준수 채팅 위젯을 자동으로 생성합니다:

- 고지 언어에 삽입된 비즈니스 이름
- 필수 고지사항 텍스트
- STOP/HELP 지시사항
- 데이터 요금 고지사항
- 메시지 빈도 고지사항
- 캠페인 연결
- 임베드 코드 생성

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066294824/original/Lg7XRWmVgS3i3vFeBDo4aFqjPsYvnoR3Ug.png?1772722469)

### 고정된 컴플라이언스 컨트롤

사용자는 다음을 할 수 없습니다:
- 고지사항 텍스트 편집
- 필수 필드 제거
- 커스텀 컴플라이언스 필드 추가
- 컴플라이언스 언어 수정
- 대체 옵트인 방식 선택

이는 일관된 컴플라이언스를 보장하고 수동 오류를 줄입니다.

## **위젯 구조**

### *필수(고정 필드)*

| 필드 | 상태 |
|------|------|
| 전화번호 | 필수 |
| 고지사항 블록 | 고정 |
| STOP/HELP 언어 | 고정 |
| 데이터 요금 고지사항 | 고정 |
| 메시지 빈도 고지사항 | 고정 |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066295506/original/UgErNUBlbBNpcwjCJ6vPhSYMIjG5AnMBEQ.png?1772722830)

### *조건부*

| 필드 | 조건 |
|------|------|
| 생년월일 | 연령 게이팅이 트리거된 경우 필수 |

### *선택사항*

| 필드 | 편집 가능? |
|------|-----------|
| 이름 | 예 |
| 메시지 필드 | 예 |
| UI 스타일링(색상/헤더만) | 예 |

### *제거됨*

| 제거된 항목 | 이유 |
|-----------|------|
| 이메일 필드 | SMS 컴플라이언스에 불필요 |
| 커스텀 컴플라이언스 필드 | 통신사 승인 언어에서 벗어나는 것을 방지 |
| 편집 가능한 고지사항 텍스트 | 컴플라이언스 위반 방지 |
| 옵트인 방식 선택기 | 위젯 전용 강제 |

## **마케팅 동의 체크박스**

마케팅 / 프로모션 캠페인의 경우:
- 전용 마케팅 동의 체크박스가 포함됩니다.
- 제출 전 체크박스는 필수입니다.
- 마케팅 동의를 명시적으로 확인하지 않으면 진행할 수 없습니다.

이는 프로모션 메시지에 대한 추가적인 컴플라이언스 보호장치를 제공합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066296668/original/Wf6gwwvCWuN9KmbMNqbkcrm0nQDLFF6pRw.png?1772723418)

## 읽기 전용 위젯 미리보기

사용자는 다음을 미리 볼 수 있습니다:
- 전체 위젯
- 고지사항 배치
- DOB 필드(트리거된 경우)

컴플라이언스 무결성을 유지하기 위해 미리보기는 편집할 수 없습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066296401/original/wICXY-axuBqoD1HbSoU0oxLSTfXfX2b_xw.png?1772723258)

## **위젯 코드 복사 시 컴플라이언스 알림**

계속하기를 클릭하면 중요한 요구사항을 강조하는 컴플라이언스 알림이 표시됩니다:

- 채팅 위젯이 웹사이트의 유일한 SMS 옵트인 방식이어야 합니다.
- 사용자는 연락처 폼, 리드 폼, 랜딩 페이지 폼, 예약 폼 등 웹사이트의 다른 모든 폼에서 SMS 동의 체크박스나 고지사항을 제거해야 합니다.

이 알림은 비즈니스가 캠페인 설정을 진행하기 전에 웹사이트를 올바르게 구성하도록 도우며 여러 SMS 옵트인 방식으로 인한 A2P 캠페인 거부를 방지합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066854772/original/k5Njw-GEEyQXQg8dizfZJv44Vnx0tRxumA.png?1773391071)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066854687/original/EXcCdsGidT7eBzLVhuR0iCt1kASqMGEPtA.png?1773391048)

## **최종 동의 검토**

제출 전:
- 필수 필드가 자동 입력됩니다
- 컴플라이언스 섹션이 고정됩니다
- 샘플 메시지가 생성됩니다
- 옵트인 방식이 정의됩니다
- 웹사이트 컴플라이언스 체크리스트 확인이 필요합니다

이 최종 검토는 제출 전에 모든 컴플라이언스 요소가 올바르게 구성되었는지 확인합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066855028/original/V5w2tgoDCQkKy28Vu4_0A5bghCeqXRiHOA.png?1773391203)

이 단계에서 사용자는 다음을 할 수 없습니다:
- 고지사항 텍스트 편집
- 필수 필드 제거
- 동의 체크박스 추가
- 컴플라이언스 필드 편집
- 대체 옵트인 방식 선택

모든 컴플라이언스 요소는 일관성을 보장하고 제출 오류를 방지하기 위해 편집할 수 없습니다.

**참고** - 비즈니스 웹사이트 컴플라이언스 체크리스트에는 이제 사용자가 다음을 확인하도록 요구하는 추가 확인 항목이 포함됩니다:
- 채팅 위젯이 웹사이트의 유일한 SMS 옵트인 방식인지, 그리고
- 다른 모든 웹사이트 폼이나 플로우에서 SMS 동의 체크박스나 고지사항을 제거했는지

이는 고객이 캠페인 설정 프로세스에서 더 일찍 이 요구사항을 검토하고 인정하도록 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066855139/original/yzPSJ7QLJtUtzr4hveLOD3BSKaUc95Eh-A.png?1773391261)

**채팅 위젯 설치에 대한 AI 검증**

이제 브랜드 설정 중 제출된 비즈니스 웹사이트 URL에 LeadConnector 채팅 위젯이 있는지 자동으로 검증합니다.

이 AI 기반 검증은 웹사이트를 스캔하여 채팅 위젯이 올바르게 설치되었는지 확인합니다. 검증은 사용자가 "신청서 검토(Review Application)"를 클릭할 때 발생하며, 웹사이트에 LeadConnector 채팅 위젯이 통합되었는지 확인하는 컴플라이언스 검토가 시작됩니다.

이는 채팅 위젯이 아직 통합되지 않은 캠페인 제출을 방지하고 SMS 옵트인 구현이 누락되거나 잘못되어 캠페인이 거부될 가능성을 줄입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066857743/original/jD9yeaagMx-NiKaUvGgqZ_gB-Q-93x6p2A.png?1773392731)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066857767/original/nj-FiiQ_hU6E95tOUuSf2eDryjr2ZAunSA.png?1773392745)

### **캠페인 제출 전 필수 확인**

컴플라이언스 검증이 완료되고 사용자가 신청서 제출(Submit Application)을 클릭하면 제출 검토 확인 대화창이 나타납니다.

캠페인을 제출하기 전에 사용자는 필요한 체크박스를 선택하여 컴플라이언스를 확인해야 합니다.

이러한 확인을 체크하면 제출을 진행할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066858418/original/jJOxkBL4VBipM66djomZDNLHL-jgPxrXlQ.png?1773393077)

### **개인정보처리방침 및 서비스 이용약관 요구사항**

채팅 위젯을 올바르게 구성하는 것 외에도 고객은 자신의 웹사이트 개인정보처리방침과 서비스 이용약관(TOS)이 컴플라이언스를 준수하고 웹사이트에 명확하게 제공되도록 해야 합니다.

LeadConnector의 서비스 이용약관이 채팅 위젯에 사용되더라도 고객의 웹사이트 정책은 여전히 통신사 컴플라이언스 요구사항을 충족해야 합니다.

특히 고객의 개인정보처리방침에는 모바일 정보가 마케팅 목적으로 제3자와 공유되지 않는다는 비공유 조항이 포함되어야 합니다.

개인정보처리방침에는 다음과 유사한 언어가 포함되어야 합니다:

모바일 정보는 마케팅/프로모션 목적으로 제3자/제휴사와 공유되지 않습니다. 고객 서비스와 같은 지원 서비스의 하청업체와 정보를 공유하는 것은 허용됩니다. 다른 모든 사용 사례 카테고리는 문자 메시지 발신자 옵트인 데이터와 동의를 제외합니다. 이 정보는 제3자와 공유되지 않습니다.

개인정보처리방침과 서비스 이용약관이 있고 컴플라이언스를 준수하는지 확인하는 것은 통신사 가이드라인을 충족하고 A2P 캠페인 거부 위험을 줄이는 데 도움이 됩니다.

## **누가 이 플로우를 사용할 수 있는가**

사전 제작 A2P 캠페인(위젯 우선) 등록 플로우는 다음에게 제공됩니다:
- 새로운 A2P 캠페인을 제출하는 에이전시
- 새로운 캠페인을 등록하는 하위 계정
- 마케팅 전용 캠페인
- 거래 전용 캠페인
- 연령 제한 콘텐츠가 포함된 캠페인

사용할 수 없는 경우:
- 혼합 사용 사례 캠페인
- 개인사업자(Sole Proprietor) 캠페인

## **주요 이점**

- 거부율 감소
- 자동 연령 게이팅 컴플라이언스
- 금융 및 마케팅 잘못된 분류 방지
- 더 빠른 제출 프로세스
- 수동 컴플라이언스 작성 제거

사전 제작 A2P 캠페인(위젯 우선) 플로우는 승인 결과를 개선하고 캠페인 설정을 단순화하도록 설계된 구조화된 컴플라이언스 중심 등록 경험을 제공합니다.

**자주 묻는 질문**

Q1. 혼합 사용 사례 또는 개인사업자 캠페인이 거부되면 어떻게 하나요?
혼합 사용 사례 또는 개인사업자 캠페인이 거부되면 새로운 등록 플로우를 사용하여 다시 제출할 수 없습니다. 이전에 거부된 캠페인을 삭제하고 완전히 새로운 캠페인을 제출해야 합니다.

---
*원문 최종 수정: Thu, 2 Apr, 2026 at 6:53 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*