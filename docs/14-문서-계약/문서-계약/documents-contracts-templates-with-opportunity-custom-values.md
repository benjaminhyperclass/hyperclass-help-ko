---

번역일: 2026-04-08
카테고리: 14-문서-계약 > 문서-계약
---

# 기회 커스텀 값이 포함된 문서 및 계약 템플릿

문서 및 계약 템플릿에서 병합 필드를 사용해 기회 커스텀 값을 포함할 수 있습니다.

---

**목차**

- [문서 및 계약 템플릿의 기회 커스텀 값이란?](#문서-및-계약-템플릿의-기회-커스텀-값이란)
- [문서 및 계약 템플릿에서 기회 커스텀 값 사용하기](#문서-및-계약-템플릿에서-기회-커스텀-값-사용하기)
- [워크플로우에서 기회 커스텀 값이 포함된 문서 및 계약 템플릿 사용하기](#워크플로우에서-기회-커스텀-값이-포함된-문서-및-계약-템플릿-사용하기)
- [기회 파이프라인에서 문서 및 계약 자동 발송](#기회-파이프라인에서-문서-및-계약-자동-발송)

---

## 문서 및 계약 템플릿의 기회 커스텀 값이란?

문서 및 계약은 이메일이나 웹사이트와 비슷하지만, 거래의 세부 사항을 명시하고 서명을 통해 계약을 확정할 수 있는 문서/계약서를 생성합니다.

문서 및 계약 템플릿은 "빈칸 채우기" 섹션이 있는 재사용 가능한 파일로, 워크플로우에서 자동으로 채워질 수도 있습니다.

참고: 이 문서는 개별 문서 및 계약이 아닌 *템플릿*에 관한 내용입니다. **템플릿**을 보고 편집하려면 Payments(결제) > Documents & Contracts(문서 및 계약) 드롭다운에서 Templates(템플릿)를 선택하세요. 페이지 제목에 Templates가 포함되어 있고 Templates 탭에 있는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050551741/original/2us6irbQsjrlEFwLOkwPKxtRoLy42pA4lQ.png?1753726809)

문서 및 계약 편집기에서 URL 표시줄에 "templates"라는 단어를 확인하세요. 이는 개별 문서/계약이 아닌 **템플릿을 편집하고 있다**는 것을 확인해줍니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050551819/original/6Svu2dkQ5Pe3wLuRFnGJls1S-8kt-5WFsw.png?1753727000)

---

## 문서 및 계약 템플릿에서 기회 커스텀 값 사용하기

- Payments(결제) → Documents & Contracts Templates(문서 및 계약 템플릿) → New template(새 템플릿)으로 이동합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040198849/original/kEJEEXCPOJiuSNCC7lr_K3BZRbbq5Di4TQ.png?1737467636)

- 기회 커스텀 값/필드를 입력하려는 위치에 텍스트 박스나 테이블을 드래그합니다. 텍스트 영역에 직접 정확한 병합 필드(예: {{opportunity.xyz}})를 입력하거나 병합 필드 메뉴를 사용하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040198929/original/6HozCmIyeocMbl1ahr4ZMlIMm1gjpbtDSg.png?1737467697)

- **병합 필드 메뉴에서**: Contact(연락처) → Custom fields(커스텀 필드) → Opportunity Details(기회 세부정보)로 이동하여 동적인 필드명을 선택합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199078/original/V0wYrL-eUekZf_gQ_NHvQPwyNwup_W50tg.png?1737467786)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199106/original/-aCciUWXyiHx3XnbJlcYt9f-r-T_751YZw.png?1737467799)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199134/original/KEGOo2JKmEq9vr6fiaOQANLre5WWNaIkgA.png?1737467810)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199153/original/5E4j-Mir_ZMv1Yml3wKsyzY3pmP-nd5vzA.png?1737467824)

- **검토**: 텍스트 영역에서 병합 필드가 올바른 위치에 표시되는지 다시 확인하세요. 자동화가 실행될 때 병합 필드는 개인화된 데이터로 자동 교체됩니다. 반드시 **저장**하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199289/original/RITNDKTg1I2uEd3OVJQaeDqYIy6s-oNgwQ.png?1737467923)

---

## 워크플로우에서 기회 커스텀 값이 포함된 문서 및 계약 템플릿 사용하기

- **Automation(자동화) > Workflows(워크플로우) > 워크플로우 생성 또는 편집**으로 이동합니다. 워크플로우 편집기에서 **Send Documents & Contracts Action(문서 및 계약 발송 액션)**을 사용합니다. 액션 내에서 입력하려는 템플릿을 선택하고 초안으로 저장하거나 발송합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199882/original/5sa4KEqttINY-2v28dLzboXFdd4TdiJVfg.png?1737468347)

---

## 기회 파이프라인에서 문서 및 계약 자동 발송

특정 기회 파이프라인 단계에서 템플릿 문서/계약을 자동으로 발송하려면, 워크플로우에서 몇 개의 트리거와 액션을 사용하여 설정할 수 있습니다.

**1단계: 워크플로우 생성**

Automation(자동화) > Workflow(워크플로우) > 워크플로우 생성 또는 편집으로 이동합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199677/original/OfyRxM02UTuWPY2uxxqdwvrNpW-dUPKGDQ.png?1737468195)

**2단계: 트리거 추가**

기회/파이프라인 트리거의 좋은 옵션으로는 Pipeline Stage Changed(파이프라인 단계 변경됨) 또는 Opportunity Status Changed(기회 상태 변경됨)가 있습니다. 트리거의 필터를 관련 파이프라인, 단계, 기회 등으로 설정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199505/original/Orf2J4JrEQskwivAp85qZj342ciV81msNw.png?1737468099)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199807/original/y30822cRiC0OU_xRZixkGgLs4iZ9aL7S2A.png?1737468289)

**3단계: 액션 추가**

워크플로우에 Send Documents & Contracts Action(문서 및 계약 발송 액션)을 추가하고 적절한 템플릿을 선택합니다(이전 지침에 따라). 템플릿의 병합 필드가 파일을 발송하기 전에 기회 커스텀 값을 자동으로 가져와 채웁니다. 반드시 **저장**하세요.

---
*원문 최종 수정: 2025년 7월 28일*
*Hyperclass 사용 가이드 — hyperclass.ai*