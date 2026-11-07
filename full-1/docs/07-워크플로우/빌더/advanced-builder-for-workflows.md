---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006635-advanced-builder-for-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 Advanced Builder(고급 빌더) 사용 가이드

Advanced Builder는 워크플로우를 한 화면의 자유로운 캔버스에서 만들고 다듬는 편집 모드예요. 이 문서에서는 통계 확인, 스티커 메모, 워크플로우 댓글, 오른쪽 클릭 메뉴 같은 기능과 캔버스 사용법을 안내해요.

워크플로우를 더 빠르게 만들고 함께 다듬을 수 있도록 Advanced Builder가 개선되었어요. 이제 캔버스를 떠나지 않고도 계획하고, 기록하고, 수정할 수 있어요. 이번 개선에는 더 깔끔해진 **Stats Mode**(통계 모드), 이미지를 넣을 수 있는 **Sticky Notes**(스티커 메모), 화면 안에서 바로 남기는 **Workflow Comments**(워크플로우 댓글), 오른쪽 클릭으로 여는 **Quick Actions**(빠른 액션) 메뉴가 포함돼요.

[동영상](https://www.youtube.com/embed/i3rxkA-ydnk?&wmode=opaque)

---

## Advanced Builder란?

Advanced Builder는 자동화를 만드는 완전한 시각형 자유 캔버스예요. 여러 트리거 경로, 병렬 브랜치, 복잡한 조건을 한 화면에서 끌어다 놓고 연결할 수 있어요. 워크플로우가 실행되는 방식은 달라지지 않아요. 유연성, 성능, 협업을 위해 만들어졌어요.

**Bulk Selection Tools**(일괄 선택 도구)에는 선택한 대상에 맞는 작업이 들어 있어요. **Enable/Disable**(활성화/비활성화), **Format Selection**(선택 영역 정리), **Add Sticky Note**(스티커 메모 추가)예요. 여러 노드를 한 번에 선택해 작업하면 브랜치를 정리하고, 간격을 맞추고, 로직에 메모를 다는 일을 몇 초 만에 할 수 있어요. 규모가 아주 큰 워크플로우에 특히 좋아요.

이번 개선은 하이퍼클래스 **워크플로우 빌더**에 들어가는 네 가지예요. Stats Mode, Sticky Notes 2.0, Workflow Comments, 오른쪽 클릭 Quick Actions예요. 이 기능들은 성과 확인, 팀 협업, 일상적인 편집을 편하게 해 주고 작업 공간도 깔끔하게 유지해 줘요.

---

## 사용 위치와 조건

- 위치: 워크플로우를 열고 왼쪽 위에서 **Advanced Builder**(고급 빌더)로 전환하세요.
- 보기 전환: 같은 워크플로우에서 **Standard**(표준)와 **Advanced**(고급)를 오갈 수 있어요. Advanced에서만 쓰는 기능은 아래 '참고 사항, 제한, 권장 사항'을 확인하세요. <!-- 검토 필요: 원문의 'Additional Notes'가 가리키는 섹션이 문서 안에 없음 -->

{% hint style="info" %}
워크플로우 이름 표시: 빌더 상단의 워크플로우 이름이 길면 말줄임표(…)로 줄여서 보여요. 이름 위에 마우스를 올리면 전체 제목을 볼 수 있어요.
{% endhint %}

![Advanced Builder로 전환하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059091928/original/g9xV1gW00pqV9v6MUOC1DpzdE4PU5_0o3w.gif?1763993150)

[동영상](https://www.youtube.com/embed/l2-t9CaxgFE?&wmode=opaque)

---

## Stats View(통계 보기)

**Stats View**를 쓰면 **워크플로우 빌더**를 벗어나지 않고 트리거의 등록 현황과 커뮤니케이션 액션의 성과를 확인할 수 있어요.

Stats View를 사용하려면 다음 순서로 진행하세요.

1. Advanced Builder에서 워크플로우를 엽니다.
2. **Stats Mode**를 켭니다.
3. 트리거나 트리거에 표시된 통계 중 하나를 선택합니다.
4. **Attempted**(시도됨), **Matched**(일치됨), **Unmatched**(일치하지 않음) 등록 결과를 확인합니다.

![Stats View에서 트리거 통계를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076677185/original/JVfuhVn41VeAXURlhr6vgP0p69mNKwWgug.png?1784803303)

워크플로우 트리거에는 Stats View에 다음 항목이 표시돼요.

- **Attempted**: 트리거가 확인한 연락처
- **Matched**: 트리거 조건을 충족한 연락처
- **Unmatched**: 트리거 조건을 충족하지 못한 연락처

![트리거 통계 항목을 클릭하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076676939/original/iryJCqCZTBHz64Ymx6MCANVvlcKWbWCtvw.gif?1784803137)

트리거 통계를 클릭하면 상세 화면이 열려요. 연락처별 결과를 확인하고, 특정 연락처를 검색하고, 연락처가 일치하지 않은 이유를 살펴볼 수 있어요.

커뮤니케이션 액션에는 해당 액션의 발송 및 반응 통계가 표시돼요. 통계를 클릭하면 상세 리포트가 열려요.

![커뮤니케이션 액션 통계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076675829/original/IuY1sQN1fo6nTS01f_BMvAEK4WpB0Mx7Ew.png?1784802571)

워크플로우 성과를 분석하는 팁은 [워크플로우 캠페인 분석하기](../../10-마케팅/Workflow-Email-Action/how-to-analyze-workflow-campaigns.md)를 참고하세요. 워크플로우 목록에서 **Stats**(통계) 아래의 펼침 화살표를 클릭하면 워크플로우 단위 통계도 볼 수 있어요.

![워크플로우 목록에서 통계를 펼치는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915452/original/9rcKt_uTXnQ_WVrfXVHUnUyXksG_8oR64w.png?1737003186)

{% hint style="info" %}
커뮤니케이션 액션을 워크플로우에서 사용한 뒤 삭제해도 통계는 워크플로우에 그대로 남아 있어요.

Stats View를 켜 둔 동안에는 워크플로우를 편집할 수 없어요. 트리거 통계에는 최근 30일 데이터가 들어 있어요.

트리거 통계의 전체 사용법은 Workflow Trigger Narration and Statistics 문서를 참고하세요.
{% endhint %}

---

## 캔버스

### 스텝 추가하고 연결하기

- **Triggers & Actions**(트리거 및 액션) 패널을 엽니다.
- 패널에서 설정하거나, 항목을 캔버스로 바로 끌어다 놓습니다.
- 커넥터 핸들(또는 **+** 아이콘)에서 끌어 노드를 연결합니다.

![캔버스에서 스텝을 추가하고 연결하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055989412/original/neH1lwsEiNitnKprmoJTFVi9jfqESgVFFw.gif?1760459760)

### 스텝 자동 연결(끌어다 놓기)

**Triggers & Actions** 패널(사이드바)에서 트리거나 액션을 캔버스로 끌어다 놓으면, 놓는 위치에 따라 자동으로 연결돼요.

- 브랜치 끝에 이어 붙이기: 브랜치의 마지막 노드 위에 놓으면 맨 끝에 추가돼요.
- 스텝 사이에 끼워 넣기: 연결된 두 노드 사이에 놓으면 중간에 들어가요.

![스텝을 끌어다 놓아 자동 연결하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067225359/original/7dBST391yMsPbyKqWGs2l9_I7Go3Rr146A.gif?1773842268)

{% hint style="warning" %}
**중요**

- 여러 노드를 선택(드래그 영역 선택 또는 Shift+드래그)해 한꺼번에 옮길 수 있어요.
- 브랜치를 **다른 워크플로우로** 복사해 붙여 넣어 같은 패턴을 재사용할 수 있어요.
- 캔버스에 놓은 새 스텝은 설정한 뒤 저장하세요.
- 설정하지 않은 액션은 실행되지 않아요. 워크플로우는 설정이 끝나지 않은 액션을 실행하지 않아요.
{% endhint %}

---

## 트리거와 연결 해제된 노드의 Go-To 연결(병렬 브랜치)

### Trigger Go-To(트리거별 시작 액션 지정)

[동영상](https://www.youtube.com/embed/f3orQOCQqCk?&wmode=opaque)

트리거를 시작하려는 액션으로 정확히 연결할 수 있어요.

- 연결하기: 트리거의 **Go-To** 커넥터를 대상 액션 위로 끌어다 놓습니다.
- 표시 모양: Trigger Go-To 연결은 화살표가 있는 점선으로 보여요. 일반 순차 연결은 실선 그대로예요.
- 실행 방식: 트리거가 작동하면 워크플로우가 대상 액션으로 바로 이동해 그 지점부터 이어서 진행돼요.

![트리거를 대상 액션에 연결한 Go-To 점선](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069380101/original/nIFVEOUuPvWiIu47LrwtYX55qvbXqcSBbQ.jpeg?1776429175)

{% hint style="info" %}
자세한 내용은 Go-To Connections for Triggers: Advanced Builder Workflow 문서를 참고하세요.
{% endhint %}

---

## Delinked nodes(연결 해제된 노드: 독립/병렬 브랜치)

순서대로 이어지지 않는 브랜치를 만들 수 있어요. 한 캔버스에서 여러 트리거나 결과를 다룰 때 유용해요.

- 캔버스 어디에든 액션으로 이루어진 독립 그룹을 만듭니다.
- **Go-To** 연결로 트리거를 붙이면 그 브랜치에서 시작해요.
- 각 브랜치는 같은 워크플로우 안에서 독립적으로 실행돼요.

![연결 해제된 브랜치 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755867/original/x7qC1lGEGE-dcEXb3gKSm1t-XB6tFBK3Lg.jpeg?1760134183)

한눈에 알아보는 표시 방법이에요.

- 실선 커넥터: 일반 순차 경로
- 화살표가 있는 점선 커넥터: **Trigger Go-To**(대상 액션으로 이동)
- 따로 떨어진 그룹: **Delinked** 브랜치

## Default Path(병렬 브랜치의 기본 경로)

Advanced Builder에서 병렬 브랜치가 여러 개인 워크플로우는 **Default Path**(기본 경로)를 정할 수 있어요. Default Path는 다음 경우에 연락처가 어느 브랜치로 들어갈지 정해요.

- 워크플로우 테스트를 실행할 때
- 다른 워크플로우에서 연락처가 이 워크플로우로 들어올 때

**작동 방식**

- 루트 노드에는 Default Path라는 이름표가 붙어요.
- 각 브랜치의 첫 번째 노드(액션)에서 브랜치 아이콘을 클릭하면 그 브랜치를 Default Path로 지정해요.
- Default Path를 지정하면 워크플로우 테스트와 다른 워크플로우에서 들어오는 연락처가 그 브랜치를 따라가요.

**표시 방법**

- 트리거 커넥터가 실선이면 그 브랜치가 Default Path예요.
- 트리거 커넥터가 점선이면 Go To 커넥터로 도달하는 브랜치이고, 기본 경로가 아니에요.

**Default Path 지정하기**

1. Advanced Builder에서 병렬 브랜치가 여러 개인 워크플로우를 엽니다.
2. 기본 경로로 쓸 브랜치의 첫 번째 액션에서 브랜치 아이콘을 클릭합니다.
3. 그 브랜치를 Default Path로 지정합니다.
4. 워크플로우 테스트를 실행하거나 다른 워크플로우에서 연락처를 등록해 경로를 확인합니다.

**예시**

리마인더 브랜치가 여러 개 있는 워크플로우에서 한 브랜치를 Default Path로 지정하면, 테스트 연락처가 그 리마인더 브랜치로 먼저 들어가요.

---

## 노드 활성화/비활성화(Enable / Disable)

[동영상](https://www.youtube.com/embed/mzfjxKgMVGk?&wmode=opaque)

테스트할 때 액션이나 조건을 삭제하거나 다시 연결하지 않고도 꺼 둘 수 있어요.

- **Disable**(비활성화): 노드에 마우스를 올리고 **pause**(일시정지)를 클릭합니다.
- **Enable**(활성화): 다시 마우스를 올리고 **play**(재생)를 클릭합니다.
- 실행 방식: 비활성화된 노드는 건너뛰어요. 연결은 그대로 유지돼요.

![노드를 비활성화하고 활성화하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069380308/original/pIAzyiTju06bN5sLZiyBuWJjv48rI_8vQQ.gif?1776429288)

---

## 스티커 메모와 색상 구분

팀원이나 나중의 나를 위해 메모로 로직을 설명해 두세요.

- 왼쪽 사이드바에서 메모를 추가합니다.
- 색상과 스타일을 고른 뒤 내용을 입력합니다.
- 메모에는 이미지와 링크를 넣을 수 있어요.

![캔버스에 스티커 메모를 추가한 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055990171/original/lWesgzRmMXSAmj5Roh_xnlzy2AwJRdhL0w.png?1760460252)

---

## 키보드 단축키로 빠르게 이동하기

[동영상](https://www.youtube.com/embed/RUT2PeeQF94?&wmode=opaque)

왼쪽 위의 키보드 아이콘을 열면 **Keyboard Shortcuts**(키보드 단축키) 전체 목록을 볼 수 있어요. **Navigation**(이동), **Tools**(도구), **View**(보기), **Edit**(편집)으로 나뉘어 있어요.

![키보드 단축키 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755866/original/jS5kgFi-XYcAbSG8fqWuNvljI1kIzG0Nmg.jpeg?1760134183)

예시

- 방향키: 선택 대상 이동
- Cmd/Ctrl + C / V: 복사/붙여넣기
- **Next**(다음)/**Previous**(이전) 액션 버튼: 액션 사이를 빠르게 이동

{% hint style="info" %}
자세한 내용은 Keyboard Shortcuts in Workflow Builder 문서를 참고하세요.
{% endhint %}

---

## Tidy Up(자동 정렬)

**Tidy Up**을 클릭하면 어수선해진 캔버스를 한 번에 정리해 줘요. 많이 편집한 뒤나 가져오기를 한 뒤에 쓰면 좋아요.

![Tidy Up으로 캔버스를 정리하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755927/original/2O9bzUQHsnEsu9mogf3zDITWB85uRtVdaA.gif?1760134584)

---

## Workflow Switcher(워크플로우 전환기)

빌더를 벗어나지 않고 다른 워크플로우로 이동할 수 있어요.

- 왼쪽 사이드바에서 **Workflow Switcher**를 엽니다.
- 최근 워크플로우를 보거나 이름·태그로 검색합니다.
- 결과를 클릭하면 새 탭에서 열려요. 지금 작업 중인 캔버스는 그대로 열려 있어요.

![Workflow Switcher를 여는 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755871/original/Dho5NNvnSv5K45y8vi4bKnclX5f8umMTFg.jpeg?1760134184)

![Workflow Switcher 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755872/original/hA5bo8dIsuJMnwdxwSCqHYcre8I8CE4pAA.jpeg?1760134184)

---

## 참고 사항, 제한, 권장 사항

- 연락처당 한 번만 등록: 병렬 브랜치가 있어도 같은 연락처가 한 워크플로우의 여러 브랜치를 동시에 거치지는 않아요.
- **Standard Builder**(표준 빌더)로 돌아갈 때: 먼저 Advanced에서만 쓰는 기능(**Trigger Go-To**, **Delinked nodes**, **Disabled nodes**)을 제거하세요.
- 일찍 정리하기: 색상으로 구분한 메모와 **Tidy Up**을 활용해 복잡한 구조도 읽기 쉽게 유지하세요.
- 이름을 분명하게: 트리거와 액션에 알아보기 쉬운 이름을 붙이세요. 캔버스에서도, **Version History**(버전 기록)에서도 도움이 돼요.
