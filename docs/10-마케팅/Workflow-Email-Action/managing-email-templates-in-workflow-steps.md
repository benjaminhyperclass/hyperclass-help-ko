---

번역일: 2026-04-07
카테고리: 10-마케팅 > Workflow Email Action
---

# 워크플로우 단계에서 이메일 템플릿 관리하기

원본 템플릿을 실수로 변경하지 않으면서 워크플로우 내에서 이메일 템플릿을 사용하는 방법을 알아보세요. 이 가이드에서는 템플릿 동작 방식, 워크플로우 내에서 안전하게 이메일 콘텐츠를 커스터마이즈하는 방법, 여러 단계에 걸친 업데이트 관리 방법을 설명합니다. 이 가이드를 마치면 위험과 혼란을 최소화하면서 이메일 템플릿을 자신 있게 관리할 수 있을 것입니다.

---

**목차**

- [워크플로우 내 이메일 템플릿이란](#워크플로우-내-이메일-템플릿이란)
- [워크플로우 단계에서 이메일 템플릿 관리의 주요 장점](#워크플로우-단계에서-이메일-템플릿-관리의-주요-장점)
- [워크플로우에서 이메일 액션 사용하는 방법](#워크플로우에서-이메일-액션-사용하는-방법)
- [이메일 발송 액션 내 이메일 템플릿 편집기](#이메일-발송-액션-내-이메일-템플릿-편집기)
- [커스터마이제이션 검토를 위한 테스트 이메일 발송](#커스터마이제이션-검토를-위한-테스트-이메일-발송)
- [자주 묻는 질문](#자주-묻는-질문)

---

# 워크플로우 내 이메일 템플릿이란

하이퍼클래스 워크플로우에서 "이메일 발송(Send Email)" 액션을 사용하면 저장된 이메일 템플릿을 추가하여 커뮤니케이션을 자동화할 수 있습니다. 템플릿은 메시지 표준화에 도움이 되지만, 각 워크플로우에서는 제목이나 CTA(행동 유도) 등의 세부 조정이 필요한 경우가 많습니다.

이메일 발송 액션에 템플릿을 추가하면 하이퍼클래스가 해당 워크플로우 단계용 복사본을 생성합니다. "템플릿과 편집 동기화"를 OFF로 유지하면 편집 내용이 워크플로우 단계에만 적용되고 원본 템플릿은 변경되지 않습니다. "템플릿과 편집 동기화"를 ON으로 설정하면 워크플로우 이메일과 원본 템플릿이 서로 업데이트됩니다(양방향 동기화).

---

## 워크플로우 단계에서 이메일 템플릿 관리의 주요 장점

- **안전한 커스터마이제이션:** 원본 템플릿이나 다른 워크플로우에 영향을 주지 않고 워크플로우에서 직접 이메일을 편집할 수 있습니다.

- **유연한 재사용:** 여러 워크플로우에서 같은 템플릿을 사용하면서 상황에 맞게 조정할 수 있습니다.

- **전역 동기화(필요 시):** 수동 동기화 프로세스를 사용하여 템플릿에서 선택한 워크플로우 단계로 업데이트를 푸시할 수 있습니다.

- **템플릿 라이브러리 확장:** 커스터마이즈된 워크플로우 이메일을 새 템플릿으로 저장하여 향후 사용할 수 있습니다.

- **위험 감소:** 팀 협업이나 캠페인 편집 중 의도하지 않은 전역 변경을 방지할 수 있습니다.

---

## 워크플로우에서 이메일 액션 사용하는 방법

#### 1단계: 워크플로우 캠페인으로 이동

워크플로우 캠페인으로 이동하는 방법은 2가지입니다:

- Marketing(마케팅) → Emails(이메일) → Campaigns(캠페인) → Workflow campaigns(워크플로우 캠페인)

![워크플로우 캠페인 메뉴 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058569605/original/D0Vbh2T2VoCLhxSp24piFTyQX_0c6Tekbw.jpeg?1763394110)

- Automation(자동화) → Workflows(워크플로우)

![워크플로우 메뉴 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058569614/original/iT9kO_eJ9A4bgczSLY29U7V5qK_zxXRj1Q.jpeg?1763394112)

#### 2단계: 이메일 발송 액션 추가

- 기존 워크플로우를 열거나 새로 생성합니다
- 이메일 발송(Send Email) 액션을 추가하거나 편집합니다

중요: 다음 단계로 넘어가기 전에 트리거를 설정하고 워크플로우의 기본 구조를 정의해야 합니다. 이렇게 하면 자동화가 구성할 준비가 됩니다.

![이메일 발송 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756159/original/H3gGkcmjhnMF_f2ORUFR0P7PrxLu2AD6zA.png?1760135495)

#### 3단계: 시작 방법 선택

Create Email(이메일 만들기) 하위에서 사용 목적에 맞는 경로를 선택하세요. 빠른 트랜잭션 노트, 브랜드 스타일 디자인, 검증된 템플릿 재사용 중에서 선택할 수 있습니다.

- **Quick Compose(빠른 작성)** (기본): 빠른 메시지를 위한 간단한 편집기
- **Smart Builder(스마트 빌더)**: 디자인, 코드, 또는 일반 텍스트 편집기를 선택하여 처음부터 작성
- **Select Template(템플릿 선택)**: 내 템플릿(My Templates) 또는 템플릿 라이브러리(Templates Library)에서 선택

참고: 이메일 콘텐츠를 편집하기 전에 발신자명(From Name), 발신 이메일(From Email), CC, BCC 등의 기본 이메일 설정을 필요에 따라 입력하세요. 이렇게 하면 이메일 발송 시 적절한 발신자 정보가 적용됩니다.

![이메일 생성 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756221/original/QRLeeH3g50IZro5tI78F--iSemNplf70_w.png?1760135614)

#### 4단계: 템플릿 미리보기(선택사항)

템플릿을 사용하는 경우 **Templates(템플릿)** 드롭다운을 사용하여 이 워크플로우 단계에서 사용할 이메일을 선택하세요. 템플릿 미리보기 메뉴에서 **점 3개 아이콘**을 클릭하여 **Edit Design(디자인 편집)** 또는 **Remove(제거)**를 선택할 수 있습니다. Edit Design을 클릭하면 이메일 템플릿 편집기가 열립니다.

아래 체크박스를 사용하여 "템플릿과 편집 동기화" 여부를 결정하세요.

[이메일 템플릿 편집기에 대한 자세한 정보는 여기를 클릭하세요](#이메일-발송-액션-내-이메일-템플릿-편집기)

![템플릿 미리보기 및 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058570516/original/GfPYykLPV6LC4NnPr0-u9Bl5y5yLyCMuyA.png?1763394673)

#### 5단계: 고급 설정

고급 설정(Advanced Settings)을 확장하여 다음을 활성화하세요:

- **Link Tracking(링크 추적)** → 각 링크의 클릭 수와 CTR 확인
- **UTM Parameters(UTM 매개변수)** → 캠페인 추적 태그 추가
- **Tags on Actions(액션에 태그)** → 열기/클릭에 따라 연락처에 자동으로 태그 추가

![고급 설정 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058570781/original/gBKS4HL8bbvrvjxvSxKFIpFLQ-HEYyZKvw.png?1763394801)

#### 6단계: 저장 및 통계 확인

- **Save Action(액션 저장)**을 클릭합니다. 준비되면 워크플로우를 발행하세요.
- 발송 후 이메일 액션을 다시 열어 **Statistics(통계)**를 확인하세요. **View Details(세부 정보 보기)** 또는 **Click Performance(클릭 성과)**를 클릭하면 더 자세한 인사이트를 볼 수 있습니다.

![통계 및 성과 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756612/original/9r_BYtHVM9GR83eizIj4TOrGwIqywHVtJQ.jpeg?1760136764)

---

## 이메일 발송 액션 내 이메일 템플릿 편집기

이메일 발송 액션에서 **이메일 템플릿 편집기**를 열려면 템플릿 미리보기에서 점 3개 아이콘을 클릭하고 Edit Template(템플릿 편집)을 선택하세요. 이렇게 하면 이 워크플로우 단계에 특화된 템플릿을 커스터마이즈할 수 있습니다.

![템플릿 편집기 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058570887/original/4P7XidCB962LaeXF8BkhYfVMOE68gax3Dg.png?1763394922)

### 이메일 편집기 도구 및 레이아웃 옵션 개요

이메일 편집기에는 템플릿의 구조, 디자인, 콘텐츠를 커스터마이즈하는 데 도움이 되는 여러 도구가 포함되어 있습니다. 이러한 인터페이스 섹션을 이해하면 전문적이고 반응형 이메일을 더 쉽게 만들 수 있습니다.

- **템플릿 제목 및 이름 편집**: 상단 중앙에서 이메일 템플릿의 이름을 볼 수 있습니다. 제목 옆의 연필 아이콘을 클릭하여 템플릿 이름을 변경할 수 있습니다. 이는 특히 여러 버전이나 사용 사례를 관리할 때 템플릿을 체계적으로 정리하는 데 도움이 됩니다.

![템플릿 이름 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058578999/original/mgsc6Y15EiDQMziQ_X4fG8QBoS2cDQ19ug.png?1763399825)

- **상단 액션 툴바(레이아웃 컨트롤)**: 제목 아래 아이콘 행을 통해 이메일의 레이아웃과 구조를 관리할 수 있습니다. **Add Elements(요소 추가)** 아이콘은 레이아웃 블록을 열고, Manage Element(요소 관리) 아이콘은 레이어를 관리하며, Appearance(모양) 아이콘은 전역 텍스트 스타일을 설정하고, Saved Item(저장된 항목) 아이콘은 너비와 패딩 같은 템플릿 수준 설정을 처리합니다. 이러한 도구는 이메일의 시각적 배치를 기본적으로 제어할 수 있게 해줍니다.

![상단 액션 툴바](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579022/original/KCig9FJDo9lQk1_OrDUT0FmCabhltVlaIw.png?1763399859)

- **요소 라이브러리(드래그 앤 드롭 블록)**: 왼쪽의 세로 패널에 사용 가능한 모든 드래그 앤 드롭 콘텐츠 블록이 표시됩니다. 텍스트, 이미지, 버튼, 로고, 구분선, 소셜 링크, 비디오, 푸터, 상품 그리드, 카운트다운 타이머 등을 추가할 수 있습니다. 이러한 요소를 통해 메시지와 목표에 맞는 풍부하고 시각적인 이메일을 구축할 수 있습니다.

![요소 라이브러리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579035/original/pG4hLWsyX5dSuC8W4qHOMMbj_cEXLRGUXA.png?1763399889)

- **보기 모드 및 편집 옵션**: 상단 중앙 섹션에서 편집 모드와 미리보기 모드를 전환할 수 있습니다. 또한 데스크톱, 태블릿, 모바일 보기를 전환하여 다양한 기기에서 이메일이 어떻게 보일지 확인할 수 있습니다. 이는 반응형 디자인을 보장하는 데 필수적입니다.

![보기 모드 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579247/original/d17em5az_g5_UVj-5wFurHEDHpaSdLHJxw.png?1763400073)

- **설정 및 버전 기록**: **점 3개** 아이콘을 클릭하면 See Version History(버전 기록 보기)와 Settings(설정)가 있는 드롭다운이 열립니다. 버전 기록에서는 템플릿의 이전 초안을 볼 수 있습니다. 설정에서는 제목과 미리보기 텍스트를 업데이트할 수 있습니다.

![설정 및 버전 기록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579134/original/J_v_kBCWLHFyxbg9uMKC4ac2JXMAM8TbYA.png?1763399981)

- **저장 및 새 템플릿으로 저장**: 이메일 커스터마이제이션을 완료한 후 우상단의 **Save as new Template(새 템플릿으로 저장)**을 클릭하여 향후 사용할 수 있도록 저장하세요. 이렇게 하면 원본을 변경하지 않고 템플릿 라이브러리에 새 버전이 생성됩니다. **Save as new Template**을 클릭한 후 커스텀 버전을 식별할 수 있는 이름을 입력하세요. **Continue(계속)**를 클릭하여 다른 워크플로우에서 향후 사용할 수 있도록 이메일 템플릿 라이브러리에 저장하세요.

우상단의 **Save(저장)**를 클릭하면 이 워크플로우 단계 내의 이메일을 업데이트합니다. 이렇게 하면 변경 사항이 해당 단계에만 로컬로 저장되며 이메일 템플릿 라이브러리에 새 템플릿을 생성하지 **않습니다**.

![저장 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579387/original/nOMSSiQaw53zax_R3tebJO5PTWKhcZtmIQ.png?1763400188)

---

## 커스터마이제이션 검토를 위한 테스트 이메일 발송

워크플로우 내에서 이메일 템플릿을 편집한 후 **Test Emails(테스트 이메일)** 필드에 하나 이상의 수신자 주소를 입력하고 Send Test Mail(테스트 메일 발송)을 클릭하세요. 이렇게 하면 실제 인박스에서 커스터마이즈된 이메일을 미리 보고 워크플로우 액션을 저장하기 전에 서식, 개인화, 디자인을 확인할 수 있습니다.

![테스트 이메일 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579463/original/K_TNfSUysr3LvCI7CI3R_mvLm6lz-bhI4g.png?1763400271)

---

## 자주 묻는 질문

**Q: 편집 후 워크플로우 이메일을 원본 템플릿과 다시 연결할 수 있나요?**

예—이메일 액션이 기존 템플릿을 사용하는 경우 나중에 **템플릿과 편집 동기화**를 ON 또는 OFF로 전환할 수 있습니다. 하이퍼클래스가 모달에서 변경을 확인합니다. 동기화가 ON이면 워크플로우 이메일과 템플릿의 편집 내용이 서로 업데이트됩니다.

**Q: 특정 템플릿을 사용하는 워크플로우 단계를 추적할 수 있나요?**

예. 템플릿 섹션의 동기화 변경(Sync Changes) 도구에는 동기화 목적으로 현재 선택한 템플릿에 연결된 워크플로우 단계 목록이 표시됩니다. 이는 전역 업데이트가 적용될 위치를 식별하는 데 도움이 됩니다.

**Q: 전역 업데이트를 적용한 후 동기화된 워크플로우 이메일을 편집하면 어떻게 되나요?**

동기화 후 수동으로 변경한 내용은 해당 워크플로우 단계에만 로컬로 유지됩니다. 편집된 버전을 새 템플릿으로 저장하지 않는 한 원본 템플릿에는 영향을 주지 않습니다.

**Q: 여러 워크플로우에 템플릿을 동기화하기 전에 변경 사항을 미리 볼 수 있나요?**

아니요. 동기화는 선택한 워크플로우 단계에 템플릿의 현재 버전을 적용하는 직접적인 작업입니다. 진행하기 전에 템플릿과 선택한 워크플로우를 모두 검토하는 것이 좋습니다.

**Q: 템플릿 삽입 후 팀원이 특정 워크플로우 이메일을 편집하지 못하게 할 수 있나요?**

현재 워크플로우 내 이메일 액션 편집에 대한 잠금이나 제한 기능은 없습니다. 이를 관리하려면 템플릿 사용 정책을 문서화하거나 역할 기반 권한을 사용하여 접근을 제한하는 것을 고려하세요.

---
*원문 최종 수정: Wed, 21 Jan, 2026 at 12:01 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*