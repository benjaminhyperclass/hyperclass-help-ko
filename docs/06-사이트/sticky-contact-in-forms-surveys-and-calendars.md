---

번역일: 2026-04-06
카테고리: 06-사이트
---

# 폼, 설문, 캘린더의 스티키 연락처

이 문서는 하이레벨 폼의 스티키 연락처(Sticky Contact) 기능을 설명합니다. 이 기능은 이전에 입력한 정보를 미리 채워서 재방문 사용자의 폼 작성 과정을 간소화합니다. 기능을 활성화하고, 문제를 해결하고, 효과적으로 사용하는 방법을 알아보세요.

---

**목차**

- [스티키 연락처란 무엇인가요?](#스티키-연락처란-무엇인가요)
- [스티키 연락처의 주요 장점](#스티키-연락처의-주요-장점)
- [스티키 연락처 찾기 및 활성화](#스티키-연락처-찾기-및-활성화)
- [폼에서 스티키 연락처](#폼에서-스티키-연락처)
- [설문에서 스티키 연락처](#설문에서-스티키-연락처)
- [캘린더에서 스티키 연락처](#캘린더에서-스티키-연락처)
- [자주 묻는 질문](#자주-묻는-질문)
---

# 스티키 연락처란 무엇인가요?

스티키 연락처는 하이레벨 폼에서 쿠키를 사용해 사용자가 이전에 입력한 데이터를 저장하고 불러오는 기능입니다. 이름, 이메일, 전화번호 같은 필드가 재방문 시 자동으로 채워져서 더 매끄러운 사용자 경험을 제공합니다.

이는 자동 완성 기능과 유사하지만, 하이레벨 시스템 내에서 직접 작동하여 일관성과 사용자 경험을 향상시킵니다.

스티키 연락처는 **정기 이벤트 등록**에서 특히 유용합니다. 재참석자가 세부 정보를 다시 입력할 필요 없이 빠르게 다시 등록할 수 있고, **고객 포털**에서는 자주 사용하는 사용자가 자동으로 채워진 폼 덕분에 더 빠른 네비게이션과 주문 관리를 할 수 있습니다. 마찰을 최소화함으로써 스티키 연락처는 더 나은 참여와 높은 폼 완료율을 지원합니다.

⛔ 다음과 같은 경우에는 스티키 연락처를 사용하지 마세요:
- 내부 팀원이 고객을 대신해서 폼/설문/캘린더 위젯을 작성하는 경우
- 키오스크와 같은 곳에서 여러 고객이 같은 폼을 작성하는 경우

이런 상황에서는 저장된 데이터가 모두 단일 기기(팀원의 컴퓨터나 키오스크)에 있기 때문에, 스티키 연락처가 첫 번째 제출의 연락처 기록을 다음 제출의 세부 정보로 계속 덮어쓰게 됩니다.

내부 팀원이 고객을 대신해서 폼을 완료하거나 예약을 잡는 시나리오에서는 스티키 연락처를 비활성화하거나 연락처 상세(Contact Record)에서 직접 업데이트하는 것이 좋습니다.

## **스티키 연락처의 주요 장점**

스티키 연락처는 브라우저에 저장된 데이터를 활용하여 사용자 노력을 줄이고 폼 완료율을 높입니다. 사용해야 하는 이유는 다음과 같습니다:

- 재방문자의 폼 제출 속도를 높입니다.
- 반복을 줄여서 사용자 경험을 향상시킵니다.
- 다단계 퍼널 워크플로우에 이상적입니다.
- 폼, 설문, 캘린더, 주문 폼에서 작동합니다.
- 접점 간 데이터 일관성을 유지하는 데 도움이 됩니다.
- 사용자 이탈을 줄여서 전환율을 높일 수 있습니다.

## 스티키 연락처 찾기 및 활성화

스티키 연락처는 하이레벨의 여러 영역에서 활성화할 수 있어서 일관되고 간소화된 사용자 경험을 보장합니다. 앱의 해당 섹션에서 찾고 활성화하는 방법은 다음과 같습니다.

### 폼에서 스티키 연락처

**폼에서 스티키 연락처 활성화 단계:**

`Sites(사이트) > Forms(폼)`으로 이동한 다음 **Form Builder(폼 빌더)**를 엽니다.

![스티키 연락처 폼 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153328/original/X9nPVVlR8RSsjKKKG8sWWpceelIsFHrDAw.png?1754585782)

기존 폼을 선택하거나 새 폼을 만듭니다.

![폼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153377/original/muk70pRiIDwwG_sWLH_b9p6t51xFR_rgDw.png?1754585809)

**Form Settings(폼 설정)** 탭을 클릭합니다.

![폼 설정 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153436/original/YhxzLMF8zeAnHUtA1rv36-N5arw0SZpmPA.png?1754585847)

**Sticky Contact(스티키 연락처)** 스위치를 "켜기"로 토글합니다. **Save(저장)**을 클릭해서 변경사항을 적용합니다.

![스티키 연락처 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153450/original/6e60HRKSMAe0MlrzeasyJybnU3M29KpYJA.png?1754585879)

---

### 설문에서 스티키 연락처

설문에서도 스티키 연락처를 활성화할 수 있어서, 폼에서 수집한 사용자 데이터가 설문 필드에 자동으로 채워집니다. 퍼널 후속 조치에서 특히 유용합니다.

설문에서 스티키 연락처 활성화 단계:

`Sites(사이트) > Surveys(설문)`으로 이동한 다음 **Survey Builder(설문 빌더)**를 실행합니다.

![설문 빌더](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153515/original/YOuMVVjAkfTUAJYcFp1pvm1atqT_M7pLGw.png?1754585923)

설문을 열거나 새로 만듭니다.

![설문 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153545/original/6ulOjnWFDru8Hir8as7mgnZiNoULpf7WGA.png?1754585947)

**Survey Settings(설문 설정)** 섹션으로 이동합니다.

![설문 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153607/original/xpZ3t2KzY9P3tmLgQpP3-C-93W3jWZ6xzw.png?1754585972)

**Sticky Contact(스티키 연락처)**를 "켜기"로 토글합니다. 설정을 저장합니다.

![설문 스티키 연락처 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153666/original/SN6m13wsp91Xit4CBl9KTqsIROpYb-4tEg.png?1754586008)

---

### 캘린더에서 스티키 연락처

캘린더는 반복 예약에서 사용자 세부 정보를 자동으로 채워주는 스티키 연락처의 이점을 얻습니다.

**캘린더에서 스티키 연락처 활성화 단계:**

`Calendars(캘린더) > Calendar Settings(캘린더 설정)`으로 이동합니다.

![캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153731/original/KHFeSOnyOgMjRGNfK3YBx0HcfLC3i09qmw.png?1754586079)

편집하고 싶은 캘린더를 선택합니다.

![캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153769/original/B6H2TJzQvM6oKkIA-VCdUwkD7xsKOQfxFA.png?1754586111)

Forms & Payments(폼 및 결제)까지 스크롤합니다.

![폼 및 결제 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153837/original/LxTjfuhdKwmFWYw9y4mH0py7nBArhBbifg.png?1754586174)

토글을 사용해서 **Sticky Contact(스티키 연락처)**를 켭니다. 변경사항을 저장합니다.

![캘린더 스티키 연락처 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153866/original/KiKiF_Qmzs8te84QtyXzZ2z3_3AvE_Gvew.png?1754586202)

## 자주 묻는 질문

**Q: 스티키 연락처가 서브도메인 간에 작동할 수 있나요?**
아니요, 스티키 연락처 데이터는 도메인별로 적용됩니다. 다른 서브도메인 간에는 폼을 미리 채울 수 없습니다.

**Q: 사용자가 쿠키를 삭제하면 어떻게 되나요?**
쿠키가 삭제되면 스티키 연락처가 더 이상 이전에 입력한 데이터를 보유하지 않으며, 필드가 미리 채워지지 않습니다.

**Q: 스티키 연락처는 GDPR을 준수하나요?**
네, 하지만 데이터 보호법을 준수하기 위해 사용자에게 쿠키 사용을 알리고 옵트아웃 옵션을 제공하는 것이 중요합니다.

**Q: 스티키 연락처가 브라우저 자동 완성과 충돌하나요?**
아니요, 스티키 연락처는 브라우저 자동 완성과 독립적으로 작동합니다. 하지만 두 기능이 상호 보완하여 매끄러운 사용자 경험을 제공할 수 있습니다.

**Q: 캘린더 설정에서 스티키 연락처가 보이지 않는 이유는 무엇인가요?**

캘린더 예약에 커스텀 폼을 사용하고 있다면, 캘린더 설정에서 스티키 연락처 설정이 나타나지 않습니다. 대신 커스텀 폼 자체에서 스티키 연락처를 활성화해야 합니다. 캘린더는 해당 폼에 저장된 스티키 연락처 데이터를 따릅니다.

---
*원문 최종 수정: 2025년 8월 7일*
*Hyperclass 사용 가이드 — hyperclass.ai*