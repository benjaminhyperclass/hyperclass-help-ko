---
원문: /support/solutions/articles/48000979919-sticky-contact-in-forms-surveys-and-calendars
번역일: 2026-11-06
카테고리: 06-사이트
---

# 폼·설문·캘린더에서 Sticky Contact(연락처 자동 채우기) 사용하기

**Sticky Contact**(연락처 자동 채우기)는 방문자가 전에 입력한 정보를 기억했다가, 방문자가 폼·설문·캘린더·주문 폼으로 돌아오면 지원되는 필드를 미리 채워 주는 기능이에요. 이 문서에서는 Sticky Contact가 어떻게 동작하는지, 어디에서 켜는지, 쓸 때 주의할 점이 무엇인지 알려 드려요.

---

## Sticky Contact란?

Sticky Contact는 브라우저에 저장된 데이터를 이용해 방문자가 전에 입력한 이름, 이메일 주소, 전화번호 같은 정보를 기억해요. 같은 방문자가 같은 브라우저와 기기로 다시 들어오면, 지원되는 필드에 저장된 정보가 미리 채워져요.

다시 방문한 사람이 같은 정보를 반복해서 입력하지 않아도 돼요. 지원되는 폼, 설문, 캘린더, 주문 폼에서 쓸 수 있어요.

```
⛔ 이런 경우에는 Sticky Contact를 사용하지 마세요:

- 내부 팀원이 고객 대신 폼, 설문, 캘린더 예약을 작성하는 경우

- 키오스크처럼 여러 고객이 같은 공용 기기를 사용하는 경우

Sticky Contact는 방문자 정보를 기기에 저장합니다. 여러 사람이 같은 기기에서 정보를 제출하면, 저장된 데이터 때문에 이후 제출이 엉뚱한 연락처 레코드를 업데이트할 수 있습니다.

이런 경우에는 Sticky Contact를 끄거나, 필요한 내용을 해당 고객의 연락처 레코드에서 직접 수정하세요.
```

---

## Sticky Contact의 주요 장점

- 다시 방문한 사람이 더 빠르게 제출할 수 있어요.
- 같은 연락처 정보를 반복해서 입력하지 않아도 돼요.
- 여러 단계로 이어지는 퍼널에서도 쓸 수 있어요.
- 지원되는 폼, 설문, 캘린더, 주문 폼에서 모두 쓸 수 있어요.

---

## Sticky Contact를 켜는 위치

Sticky Contact는 지원되는 폼, 설문, 캘린더, 주문 폼에서 켤 수 있어요. 설정은 항목마다 따로 해야 해요.

### 폼에서 Sticky Contact 켜기

폼을 만들거나 편집하는 방법은 [하이퍼클래스에서 문의 폼 만들고 관리하기](../02-연락처/기타/how-to-create-a-contact-form-in-hyperclass.md)를, 사이트 빌더 안에서 폼과 설문을 만드는 방법은 [사이트 빌더에서 폼·설문 만들기](Funnel-and-Website-Settings/create-forms-surveys-inside-the-site-builder.md)를 참고하세요.

1. **사이트 > 폼**으로 이동한 다음 **폼 빌더**를 열어요.

   ![폼 빌더로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153328/original/X9nPVVlR8RSsjKKKG8sWWpceelIsFHrDAw.png?1754585782)

2. 기존 폼을 선택하거나 새 폼을 만들어요.

   ![폼 선택 또는 새로 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153377/original/muk70pRiIDwwG_sWLH_b9p6t51xFR_rgDw.png?1754585809)

3. **Form Settings**(폼 설정) 탭을 클릭해요.

   ![폼 설정 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153436/original/YhxzLMF8zeAnHUtA1rv36-N5arw0SZpmPA.png?1754585847)

4. **Sticky Contact** 토글을 켜세요.
5. **저장**을 클릭해 변경사항을 적용해요.

   ![Sticky Contact 토글을 켜고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153450/original/6e60HRKSMAe0MlrzeasyJybnU3M29KpYJA.png?1754585879)

---

### 설문에서 Sticky Contact 켜기

설문에서도 Sticky Contact를 켤 수 있어요. 폼에서 받은 사용자 정보가 설문 필드에 자동으로 채워져서, 퍼널에서 후속 단계로 이어질 때 특히 편해요.

1. **사이트 > 설문**으로 이동한 다음 **설문 빌더**를 실행해요.

   ![설문 빌더로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153515/original/YOuMVVjAkfTUAJYcFp1pvm1atqT_M7pLGw.png?1754585923)

2. 기존 설문을 열거나 새 설문을 만들어요.

   ![설문 열기 또는 새로 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153545/original/6ulOjnWFDru8Hir8as7mgnZiNoULpf7WGA.png?1754585947)

3. **Survey Settings**(설문 설정) 섹션으로 이동해요.

   ![설문 설정 섹션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153607/original/xpZ3t2KzY9P3tmLgQpP3-C-93W3jWZ6xzw.png?1754585972)

4. **Sticky Contact** 토글을 켜세요.
5. **저장**을 클릭해요.

   ![Sticky Contact 토글을 켜고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153666/original/SN6m13wsp91Xit4CBl9KTqsIROpYb-4tEg.png?1754586008)

---

### 캘린더에서 Sticky Contact 켜기

캘린더에서는 같은 사람이 예약을 다시 할 때 사용자 정보가 자동으로 채워져요.

1. **캘린더 > 캘린더 설정**으로 이동해요.

   ![캘린더 설정으로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153731/original/KHFeSOnyOgMjRGNfK3YBx0HcfLC3i09qmw.png?1754586079)

2. 편집할 캘린더를 선택해요.

   ![편집할 캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153769/original/B6H2TJzQvM6oKkIA-VCdUwkD7xsKOQfxFA.png?1754586111)

3. **Forms & Payments**(폼 및 결제)까지 스크롤해요.

   ![Forms & Payments 섹션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153837/original/LxTjfuhdKwmFWYw9y4mH0py7nBArhBbifg.png?1754586174)

4. **Sticky Contact** 토글을 켜세요.
5. **변경사항 저장**을 클릭해요.

   ![Sticky Contact 토글을 켜고 변경사항을 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051153866/original/KiKiF_Qmzs8te84QtyXzZ2z3_3AvE_Gvew.png?1754586202)

---

### 주문 폼에서 Sticky Contact 켜기

퍼널에서 지원되는 주문 폼에도 Sticky Contact를 쓸 수 있어요. 같은 브라우저와 기기로 돌아온 고객이 주문 폼을 열면, 전에 입력한 연락처 정보가 미리 채워져요.

주문 폼을 퍼널에 추가하는 방법은 [퍼널에 1단계 주문 폼 추가하기](퍼널-웹사이트/how-to-add-a-one-step-order-form-to-a-funnel.md)와 [퍼널에 2단계 주문 폼 추가하기](how-to-add-a-two-step-order-form-to-a-funnel.md)를 참고하세요.

1. **사이트 > 퍼널**로 이동한 다음, 퍼널과 주문 폼이 들어 있는 단계를 열어요.
2. 퍼널 빌더에서 **One-Step Order Form**(1단계 주문 폼) 또는 **Two-Step Order Form**(2단계 주문 폼) 요소를 선택해요.

   ![퍼널 빌더에서 주문 폼 요소를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082792603/original/zWo1mRFqGx3BDYM6RIrjS8WJ1dRuN074IA.png?1791405059)

3. 주문 폼 설정을 열고 **Sticky Contact**를 켜세요.

   ![주문 폼 설정에서 Sticky Contact를 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082792555/original/132VK-uQq-JfJUFu7k0nQf6E49p75-YyCg.png?1791405000)

4. **저장 및 게시**를 클릭해요.

---

## 자주 묻는 질문

### Sticky Contact가 서브도메인 사이에서도 작동하나요?
아니요. Sticky Contact 데이터는 도메인별로 저장돼요. 서로 다른 서브도메인에 있는 폼은 미리 채울 수 없어요.

### 사용자가 쿠키를 삭제하면 어떻게 되나요?
쿠키가 삭제되면 Sticky Contact가 전에 입력한 데이터를 더 이상 기억하지 못해요. 필드도 미리 채워지지 않아요.

### Sticky Contact는 GDPR을 준수하나요?
네. 다만 개인정보 보호 관련 법을 지키려면 사용자에게 쿠키 사용을 안내하고, 사용하지 않을 수 있는 옵션도 함께 제공해야 해요.

### Sticky Contact가 브라우저 자동 완성과 충돌하나요?
아니요. Sticky Contact는 브라우저 자동 완성과 별개로 작동해요. 두 기능을 함께 쓰면 오히려 서로 보완해서 더 매끄럽게 입력할 수 있어요.

### 캘린더 설정에 Sticky Contact가 보이지 않아요.
캘린더 예약에 사용자 지정 폼을 쓰면 캘린더 설정에는 Sticky Contact 항목이 나타나지 않아요. 대신 해당 사용자 지정 폼에서 직접 Sticky Contact를 켜세요. 캘린더는 그 폼에 저장된 Sticky Contact 데이터를 사용해요. 자세한 내용은 [캘린더에 사용자 지정 폼 추가하기](../04-캘린더-예약/Customizing-Calendars/adding-custom-forms-to-calendars.md)를 참고하세요.

### 퍼널의 캘린더나 폼에서 Sticky Contact가 작동하지 않아요.
[퍼널 문제 해결 | 퍼널의 캘린더/폼에서 Sticky Contact가 작동하지 않을 때](트러블슈팅/funnel-troubleshooting-sticky-contacts-not-working-on-calendar-form-in-funnels.md) 문서를 확인해 보세요.
