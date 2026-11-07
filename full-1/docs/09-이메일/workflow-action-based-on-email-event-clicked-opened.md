---
원문: https://help.gohighlevel.com/support/solutions/articles/48001208599-workflow-action-based-on-email-event-clicked-opened
번역일: 2026-11-07
카테고리: 09-이메일
---

# 워크플로우 트리거 — Email Events(이메일 이벤트): 이메일을 열거나 클릭했을 때 실행하기

연락처가 이메일을 열거나 클릭하는 순간 워크플로우를 시작할 수 있어요. 이 문서에서는 **Email Events** 트리거를 추가하고, 이벤트 유형으로 걸러 낸 뒤, 후속 안내를 더 정확하게 보내는 방법을 설명해요.

## 동영상 안내

[동영상](https://watchclueso.com/embed/n1aiefw0xqe2i186)

## 단계별 안내: 이메일 이벤트 트리거 추가하기

다섯 단계를 따라 하면 어떤 워크플로우에든 **Email Events**(이메일 이벤트) 트리거를 넣어, 이메일을 열거나 클릭할 때마다 워크플로우가 시작되게 할 수 있어요.

### 1단계. 첫 트리거를 선택하고 "email" 검색하기

워크플로우를 열고 **Add New Trigger**(새 트리거 추가)를 클릭한 뒤, 검색창에 email을 입력하세요. 이메일과 관련된 트리거 옵션이 나타나요.

![워크플로우 트리거 선택 화면에서 email 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029828492/original/bGpvJt4_kQ8_6QVOYFsGdEfwx6kXgkEOLQ.jpg?1721841822)

---

### 2단계. 드롭다운에서 Email Events 선택하기

드롭다운 목록에서 **Email Events**를 선택하세요. 이 트리거는 이메일 열기, 클릭, 반송 같은 반응 신호를 감지해요.

![드롭다운에서 Email Events 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029828552/original/N-2L_Wb1zwfqKZdN2qGYmNwgvQkC3hN1Tg.jpg?1721841891)

---

### 3단계. Add Filters 클릭하기

**Add Filters**(필터 추가)를 클릭하세요. 트리거가 반응할 이벤트를 정확히 좁힐 수 있어요.

![Add Filters 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029828580/original/EpAbf5v6gNamruGMSYT8aGfCODT3AslZeQ.jpg?1721841969)

---

### 4단계. Email Events → Event 선택하기

필터 옵션에서 **Email Events**를 선택한 다음 **Event**(이벤트)를 선택하세요. 사용할 수 있는 이벤트 유형 목록이 나타나요.

![Email Events, Event 순서로 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029828646/original/t3i6XuxuPNGMGhJSuCpb_-Yuzwmrw0MLZg.jpg?1721842096)

---

### 5단계. Clicked 또는 Opened 선택하기

워크플로우를 시작할 동작을 선택하세요.

- **Clicked**(클릭됨)
- **Opened**(열림)

![Clicked 또는 Opened 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029828702/original/66704TyO48ntssF31iLO2kcgyVrktX6CWg.jpg?1721842180)

이제 새 트리거가 워크플로우에 적용되었어요.

선택한 이메일 이벤트를 일으킨 연락처는 이 워크플로우에 자동으로 등록돼요.

{% hint style="info" %}
추적 관련 안내: 정확하게 추적하고 발신자 평판을 잘 유지하려면, 발송 도메인에서 이메일 열기·클릭 이벤트가 켜져 있는지 확인하세요. 메일 서비스 제공업체는 이 이벤트의 반응 데이터를 보고 전달률을 판단해요.
{% endhint %}

## 자주 묻는 질문

### Clicked와 Opened 이벤트는 어떻게 다른가요?
**Opened**는 수신자가 이메일 안의 추적 픽셀을 불러올 때 실행돼요. **Clicked**는 수신자가 추적되는 링크를 클릭할 때 실행돼요. 클릭은 직접 행동해야 하므로 열기보다 더 강한 반응 신호예요.

### Email Events 트리거를 특정 캠페인이나 워크플로우에만 적용할 수 있나요?
네, 가능해요. **Event** 필터를 추가한 뒤 **Campaign Name**(캠페인 이름)이나 **Source**(출처) 같은 필터를 더하면, 원하는 발송 건의 열기·클릭에만 트리거가 실행돼요.

### Email Events 트리거가 실행되지 않아요.
가장 흔한 원인은 발송 도메인에서 이메일 열기·클릭 추적이 꺼져 있는 경우예요. 이메일 서비스 설정을 확인하고 추적을 다시 켜세요. 또 워크플로우를 **Publish**(게시)했는지, 필터가 실제 이벤트 유형과 출처 이름에 맞게 설정되었는지도 확인하세요.

### 봇이 만든 열기나 클릭도 워크플로우를 실행하나요?
**비즈니스 프로필**에서 **Bot Detection Prevention**(봇 감지 방지)을 켜 두면, 봇이 일으킨 열기와 클릭은 걸러져서 워크플로우가 실행되지 않아요. 그래서 자동화가 실제 반응에만 움직여요.
