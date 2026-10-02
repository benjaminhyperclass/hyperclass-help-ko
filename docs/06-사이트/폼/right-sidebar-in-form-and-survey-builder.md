---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000004090-right-sidebar-in-form-and-survey-builder
번역일: 2026-10-02
카테고리: 06-사이트 > 폼
---

# 폼과 설문 빌더의 오른쪽 사이드바

**하이퍼클래스 폼(Form)과 설문(Survey) 빌더의 오른쪽 사이드바**는 폼을 제작하는 동안 스타일링과 설정 기능을 한곳에 모아 제공해요. Styles(스타일), Themes(테마), Advanced Settings(고급 설정)를 활용해서 폼이나 설문의 레이아웃, 입력 필드 모양, 여백, 색상 등을 자유롭게 조절할 수 있어요!

**목차**

- [폼과 설문 빌더의 오른쪽 사이드바 개요](#Overview-of-the-Right-Sidebar-in-Form-and-Survey-Builder)
- [오른쪽 사이드바 여는 방법](#How-to-Open-the-Right-Sidebar)
- [Styles 탭](#Styles-Tab)
- [Themes 탭](#Themes-Tab)
- [Advanced 탭](#Advanced-Tab)
- [요소 단위 라벨 정렬](#Element-Level-Label-Alignment)
- [자주 묻는 질문](#Frequently-Asked-Questions)
- [관련 아티클](#Related-Articles)

# 폼과 설문 빌더의 오른쪽 사이드바 개요

오른쪽 사이드바는 폼과 설문 빌더에서 시각적 요소와 레이아웃 설정을 관리하는 컨트롤 패널이에요. Styles, Themes, Advanced 탭으로 구성되어 있어서 폼이나 설문의 보이는 방식과 동작을 세밀하게 조정할 수 있어요. 모든 디자인 컨트롤을 한곳에 모아둠으로써 변경사항을 빠르게 미리보고 일관성을 유지하기 쉽게 만들어줘요.

오른쪽 사이드바는 3개의 탭으로 구성돼요:

- **Styles**: 폼이나 설문의 레이아웃과 모양을 세밀하게 조정해요
- **Themes**: 일관된 브랜딩을 위한 사전 제작 프리셋을 적용해요
- **Advanced**: 특수한 용도를 위한 추가 옵션에 접근해요

## 오른쪽 사이드바 여는 방법

폼(Form) 또는 설문(Survey) 빌더 안에서 오른쪽 사이드바를 열려면, 빌더 우측 상단의 Styles & Options 버튼을 클릭하세요. 다시 Style & Options 버튼을 클릭하면 사이드바가 접혀요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054082291/original/6UY4qozJsRosRb0QWBE1Dw59qFXdcSzEZQ.png?1758218624)

## Styles 탭

Styles 탭에서는 폼이나 설문의 핵심 레이아웃을 설정해요. 이 탭에서 레이아웃, 색상 구성, 브랜딩을 제어할 수 있어요. Styles 탭 안의 컨트롤 항목은 다음과 같아요:

- **Layout(레이아웃):** 입력 필드와 라벨이 표시되는 방식, 너비, 여백, 패딩, 폼이나 설문 상단의 여백을 포함해서 전체적인 배치와 필드 표현 방식을 정의해요. **커스텀 CSS** 없이도 상단 여백 컨트롤로 간격을 조정할 수 있어요. 변경사항은 미리보기에 실시간으로 반영되며, 여백 입력란을 비워두면 기본 여백이 유지돼요. [요소 단위 라벨 정렬에 대한 자세한 내용은 여기를 클릭하세요](#Element-Level-Label-Alignment)

- 이제 **상단과 하단 패딩**을 0px로 설정해서 완전한 엣지-투-엣지(edge-to-edge) 레이아웃을 만들 수 있어요. 이전에는 패딩을 0으로 설정해도 발행된 페이지에서 세로 여백이 남아있는 경우가 있었어요.

- **Footer (설문):** 설문 푸터(Footer)는 응답자가 설문을 진행하면서 보게 되는 네비게이션과 진행 상태 정보를 제어해요. 응답자가 단계 간 이동을 쉽게 할 수 있도록 유지하면서, 푸터의 동작 방식, 외관, 네비게이션 컨트롤을 설문 디자인에 맞게 커스터마이징할 수 있어요.

  사용 가능한 Footer 설정 항목:
  - **Footer Behavior(푸터 동작 방식)**: 응답자가 설문을 진행할 때 푸터가 어떻게 동작할지 Stick to card(카드에 고정) 또는 Stick to page(페이지에 고정) 중에서 선택하세요.
  - **Background Fill(배경 채우기)**: 푸터 배경을 커스터마이징하세요.
  - **Footer Height(푸터 높이)**: 푸터 영역의 높이를 조정하세요.
  - **Typography(타이포그래피)**: 푸터에서 사용되는 폰트 종류, 폰트 크기, 폰트 굵기를 설정하세요.
  - **Progress Bar(진행 바)**: 진행 바를 활성화해서 응답자에게 설문 진행 상태를 시각적으로 보여주세요.
  - **Button Type(버튼 타입)**: 지원되는 텍스트와 화살표 옵션을 포함해서 설문 네비게이션 컨트롤의 표시 방식을 선택하세요.
  - **Button Position(버튼 위치)**: 푸터 내 네비게이션 버튼의 배치를 제어하세요.
  - **Button Text(버튼 텍스트)**: Previous(이전), Go Back(뒤로가기), Next(다음), Submit(제출) 액션에 표시되는 라벨을 커스터마이징하세요.
  - **Button Colors(버튼 색상)**: 설문 디자인에 맞게 네비게이션 버튼과 텍스트 색상을 커스터마이징하세요.

  Footer 설정을 변경한 후에는 설문을 미리보기해서 응답자에게 네비게이션, 진행 상태, 스타일이 예상대로 표시되는지 확인하세요.

- **Colors & Background(색상 및 배경):** 폰트 설정, 배경 색상을 선택하고, 지원되는 경우 브랜드에 맞는 배경 또는 헤더 이미지를 적용하세요.

- **Miscellaneous(기타)**: 에이전시(Agency) 수준의 브랜딩을 적용하거나 해제하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054084354/original/mWGHumaIC874yBVUsW7iygaVDtzYdyhfiQ.png?1758219960)

## Themes 탭

Themes 탭을 사용하면 프리셋을 이용해서 전문적인 느낌의 폼과 설문을 빠르게 만들 수 있어요. Themes로 초기 설정 작업 속도를 높인 다음, 이후에 Styles로 여백과 너비를 세밀하게 조정하세요.

폼이나 설문에 테마를 적용하려면, 원하는 테마에 마우스를 올려서 Use Theme를 선택하세요. 팝업 창에서 Proceed를 클릭해서 선택을 확정하세요.

**참고:** 테마를 변경하면 현재 적용된 스타일 수정사항이 사라져요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054084653/original/f4E9xHjwkUNtIcEhn4ZIfZkLi-31PamvAQ.png?1758220167)

## 버튼 스타일링 패널

버튼 스타일링 패널은 모든 버튼 외관 컨트롤을 한곳에 모아서 커스텀 코드 없이도 세련되고 일관된 스타일을 적용할 수 있게 해줘요. 프리셋으로 빠르게 시작한 다음, 타이포그래피, 여백, 테두리, 모서리 둥글기, 그림자, 너비를 세밀하게 조정하세요.

참고: 기존 버튼 컨트롤은 이제 더 쉽게 스타일링하고 빠르게 업데이트할 수 있도록 이 패널 안에서 그룹별 섹션으로 나뉘어 표시돼요.

### 버튼 스타일링 패널 열기

- 빌더에서 폼을 여세요.
- 캔버스에서 버튼 요소를 클릭하세요.
- 오른쪽 사이드바에서 Button(또는 Styles → Button)을 펼치세요.

### 버튼 테마 선택하기 (갤러리 + 미리보기)

- Select Themes를 클릭하세요.
- Filled(채워짐), Border(테두리), Text Only(텍스트만) 카테고리를 둘러보세요.
- 테마에 마우스를 올리거나 선택해서 캔버스에서 실시간으로 변경사항을 미리보세요.
- Apply를 클릭해서 선택한 버튼에 테마를 적용하세요.

### 버튼 스타일 커스터마이징 (그룹별 컨트롤)

목적: CSS 없이 테마를 브랜드 기준에 맞게 세밀하게 조정해요.

**Colors & Background(색상 및 배경)**: 텍스트, 배경, 테두리 색상을 설정하세요.

**Typography(타이포그래피)**: 폰트 종류와 굵기를 선택하세요(커스텀 폰트 지원). 크기, 자간, 텍스트 변환을 설정하세요.

**Layout & Alignment(레이아웃 및 정렬)**: 버튼을 왼쪽/가운데/오른쪽으로 정렬하세요. Full Width(전체 너비) 토글을 켜서 컨테이너 전체를 채우세요.

**Padding(패딩)**: 상/하 및 좌/우 패딩을 조정하세요(값 연결/연결 해제 가능).

**Border & Corner Radius(테두리 및 모서리 둥글기)**: 테두리 두께와 스타일을 설정하세요. 모서리 둥글기를 조정해서 둥근 버튼이나 각진 버튼을 만드세요.

**Shadow(그림자)**: 그림자를 활성화한 다음, 흐림 정도/거리/퍼짐 정도를 조정하세요.

**초기화 또는 되돌리기**

Reset 또는 Revert를 클릭해서 스타일 변경사항을 취소하세요. Select Themes를 다시 열어서 다른 시작점을 선택할 수 있어요.

## Advanced 탭

Advanced 탭은 핵심 레이아웃과 테마 컨트롤을 넘어서는 특수한 용도를 위한 추가 옵션을 제공해요. 폼을 관리하기 쉽게 유지하면서 더 깊은 세부 조정이 필요할 때 사용하세요. Advanced 탭 안의 컨트롤 유형은 다음과 같아요:

- **Form(폼)**: 폼 컨테이너의 테두리, 모서리, 그림자를 조정하세요
- **Input Field(입력 필드)**: 텍스트와 포커스 색상, 테두리와 모서리, 너비, 패딩, 그림자를 포함해서 입력 요소 자체를 스타일링하세요
- **Label(라벨)**: 라벨의 타이포그래피와 색상을 제어하세요
- **Short Label(짧은 라벨)**: 짧은 라벨의 타이포그래피와 색상을 설정하세요
- **Placeholder(플레이스홀더)**: 플레이스홀더 텍스트의 외관을 커스터마이징하세요
- **Custom CSS(커스텀 CSS)**: 정밀한 제어를 위해 커스텀 CSS를 추가하세요.

**참고:** 커스텀 CSS는 Styles와 Themes보다 우선순위가 높으며, 테마 스타일에 영향을 줄 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054085253/original/Xi1ZJLAWDG_jGOnc3EKFJ6MrvFLZ2SRjwQ.png?1758220711)

## 요소 단위 라벨 정렬

요소 단위 라벨 정렬(Element-Level Label Alignment)을 사용하면 폼이나 설문 전체에 하나의 전역 정렬을 적용하는 대신, 각 필드마다 다른 라벨 위치를 설정할 수 있어요. 특히 콤팩트한 레이아웃에서 시각적 리듬과 간격을 세밀하게 조정하는 데 유용해요.

요소 단위 라벨 정렬을 사용하기 전에 알아두어야 할 사항이에요:

- 폼(Forms), 설문(Surveys), 퀴즈(Quizzes)에서 사용 가능해요(단, Single Column 레이아웃을 사용하는 폼에서만 가능해요)
- 기존 폼은 필드 단위에서 명시적으로 업데이트하지 않는 한 전역 정렬을 그대로 유지해요
- 텍스트 입력, 드롭다운, 라디오 버튼 등 표준 필드에 적용돼요
- 모바일에서는 데스크톱 설정과 관계없이 명확하고 사용하기 편리한 레이아웃을 위해 정렬이 자동으로 Top(상단)으로 설정돼요

### 요소 단위 라벨 정렬 설정 방법

- 폼 또는 설문 빌더에서 필드 하나를 선택하세요
- 팝업으로 나타나는 오른쪽 사이드바에서 Label Alignment를 찾으세요
- 여기서 화살표를 사용해 해당 요소에 원하는 라벨 정렬(Top, Left, Right 또는 Form Default)을 선택하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054087925/original/NpDjnZgtei4aDFmaUUA8AmL5pN6yXZ0acg.png?1758221956)

## 자주 묻는 질문

**Q: 오른쪽 사이드바에서의 변경사항은 자동으로 저장되나요?**
아니요, 빌더에서 Save를 클릭해야 변경사항이 적용돼요.

**Q: 나중에 테마를 변경하면 제가 세밀하게 설정한 스타일이 덮어씌워지나요?**
새 테마를 적용하면 시각적 스타일의 일부가 초기화될 수 있어요. 테마 변경 후에는 Styles를 다시 확인하세요. 커스텀 CSS는 여전히 테마와 스타일보다 우선 적용되므로, 충돌이 없는지 CSS를 검토하세요.

**Q: 현재 디자인을 잃지 않고 여러 테마 프리셋을 빠르게 테스트하려면 어떻게 하나요?**
폼이나 설문에 새 테마를 적용한 후, 빌더 우측 상단의 Back 버튼을 눌러서 이전 디자인으로 되돌릴 수 있어요.

**Q: 레이아웃을 Two Column이나 Single Line으로 변경하면 필드별 라벨 정렬은 어떻게 되나요?**
요소 단위 라벨 정렬은 Single Column에서만 사용 가능해요. 레이아웃을 변경하면 필드별 컨트롤이 제거되고 라벨은 기본 설정으로 되돌아가요.

**Q: 나중에 전역 라벨 정렬을 변경하면 이미 설정해 둔 필드는 어떻게 되나요?**
Form Default로 설정된 필드는 새로운 전역 설정에 맞춰 자동으로 업데이트돼요. Left/Right/Top으로 명시적으로 설정된 필드는 해당 필드별 선택을 그대로 유지해요.

---
*원문 최종 수정: Wed, 9 Sep, 2026 at 11:47 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*