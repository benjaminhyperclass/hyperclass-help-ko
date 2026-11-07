---
원문: https://help.gohighlevel.com/support/solutions/articles/48001239875-workflow-settings-overview
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 Settings(설정) 개요

워크플로우 편집 화면의 **Settings**(설정) 탭에 있는 옵션을 하나씩 설명해요. 연락처 처리 방식, 메시지 발송 시간, 발신자 정보 등을 설정해서 워크플로우가 의도대로 동작하게 만들 수 있어요.

## 워크플로우 Settings란?

워크플로우 Settings는 워크플로우 하나하나를 제어하는 기본 설정이에요. 이 설정으로 하이퍼클래스에서 연락처가 워크플로우에 들어오고 다시 들어오는 방식, 메시지를 보낼 수 있는 시간, 사용할 발신자 정보, 연락처가 답장했을 때의 동작이 정해져요. 설정을 알맞게 해 두면 워크플로우가 일정하게 동작하고, 중복 메시지·발신자 문제·예상치 못한 자동화 동작도 줄일 수 있어요.

![워크플로우 Settings 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056948938/original/f2KNE021rYlrwwCzgKlBeOIjq9SpVfM2xA.png?1761595889)

---

## Settings를 설정하면 좋은 점

워크플로우 Settings를 제대로 설정하면 더 효과적이고 배려 있는 자동화를 만들 수 있어요. 비즈니스 방식에 맞게 워크플로우 동작을 세밀하게 조정해서 연락처의 경험도 높일 수 있어요.

- 연락처 흐름 제어: 연락처가 워크플로우에 두 번 이상 들어올 수 있는지 정해서, 같은 시퀀스를 중복으로 받지 않게 해요.
- 발송 시간 맞춤: 하나의 고정된 시간대 대신 각 연락처의 현지 시간대를 사용해서, 연락처마다 가장 알맞은 시간에 메시지를 보내요.
- 영업 시간 설정: 정해진 시간과 요일에만 메시지를 보내서 연락처의 시간을 존중하고 반응률을 높여요.
- 대화 관리 자동화: 연락처가 답장하면 육성 시퀀스를 자동으로 멈춰서, 팀원이 자연스럽게 대화를 이어받을 수 있어요.
- 브랜드 일관성 유지: 워크플로우의 모든 메시지에 기본 발신자 이름, 이메일 주소, 전화번호를 지정해서 전문적이고 일관된 브랜드 이미지를 유지해요.

---

## Settings 열기

워크플로우의 핵심 설정은 편집 화면의 한 탭에 모여 있어서 쉽게 찾을 수 있어요.

1. 대시보드에서 **자동화** 메뉴로 이동하세요.

2. 기존 워크플로우를 열거나 새 워크플로우를 만드세요.

![자동화 메뉴에서 워크플로우를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083144571/original/AxgRTeNs_0c5FyA1tC0z2W8Xws-R7m4Ogg.png?1791834958)

3. 워크플로우 편집 화면 위쪽에서 **Settings** 탭을 클릭하세요.

![워크플로우 편집 화면 위쪽의 Settings 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056948915/original/BRx-lbYY-XDDuCVm4MB1b6NPnZVFcyxPwQ.png?1761595778)

---

## Contact Settings(연락처 설정)

이 그룹의 설정은 워크플로우 안에서 연락처와 기회 같은 관련 데이터를 어떻게 처리할지 정해요. 누가 들어올 수 있는지, 몇 번까지 들어올 수 있는지, 어떤 동작이 있으면 연락처가 워크플로우에서 빠지는지를 정해요.

![Contact Settings 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056949138/original/nxX3bXnH3EzfS8666CQ9IAZG5fD5oUsx2g.png?1761596041)

---

### Allow Re-entry(재진입 허용)

연락처가 이 워크플로우에 두 번 이상 들어올 수 있는지 정하는 토글이에요.

- **Enabled**(활성화, 파란색): 연락처가 워크플로우를 끝까지 마쳤거나 수동으로 제거된 뒤에 다시 들어올 수 있어요. 예약 알림이나 구매 후 팔로우업처럼 반복되는 과정에 유용해요. 연락처가 아직 워크플로우에서 진행 중이면 다시 들어올 수 없어요.
- **Disabled**(비활성화, 회색): 연락처는 이 워크플로우에 한 번만 들어와서 완료할 수 있어요.

{% hint style="warning" %}
예외: **예약** 또는 **인보이스** 기반 트리거를 쓰는 워크플로우는 이 설정이 **Enabled**든 **Disabled**든 상관없이 연락처가 여러 번 들어올 수 있어요(예약 또는 인보이스마다 한 번씩). 새 예약이나 인보이스가 생길 때마다 자동화가 제대로 시작되도록 하기 위해서예요.
{% endhint %}

---

### Allow multiple Opportunities(다중 기회 허용)

**Pipeline Stage Changed**(파이프라인 단계 변경됨) 트리거처럼 기회와 관련된 동작으로 시작되는 워크플로우에서 꼭 필요한 토글이에요.

- **Enabled**: 한 연락처에게 기회가 여러 개 있으면, 기회마다 별개의 인스턴스로 워크플로우에 들어올 수 있어요. 연락처와 연결된 딜마다 고유한 자동화 시퀀스를 실행할 수 있어요.
- **Disabled**: 트리거 조건을 충족한 첫 번째 기회로만 워크플로우에 들어와요.

기본 동작: 새 워크플로우는 기본적으로 **Enabled**예요. 이 기능이 나오기 전에 만든 워크플로우는 기본적으로 **Disabled**예요.

업데이트 동작: 기회가 워크플로우에서 진행 중일 때 기회 정보가 바뀌어도 워크플로우는 처음부터 다시 시작하지 않아요. 현재 단계에서 바뀐 정보를 사용해 그대로 이어져요.

---

### Stop on Response(응답 시 중지)

연락처가 대화에 응하면 워크플로우에서 자동으로 제거하는 체크박스예요. 연락처가 이미 답장해서 사람의 답변을 기다리고 있는데 자동 메시지가 계속 나가는 일을 막아 줘요.

- **Enabled**: 이 워크플로우에서 보낸 메시지에 연락처가 답하면 그 연락처의 워크플로우가 끝나요. 워크플로우가 관리하는 모든 커뮤니케이션 채널에 적용돼요.
- **Disabled**: 워크플로우가 끝날 때까지 연락처가 계속 진행돼요.

### Stop on Response는 Call 액션과 어떻게 함께 동작하나요?

음성사서함 감지: 워크플로우는 기본적으로 음성사서함 감지를 사용해서, 발신 전화를 사람이 받았는지 자동 응답기가 받았는지 판단해요. 그래서 음성사서함이 **Stop on Response**를 잘못 작동시키는 일을 막아요.

이 감지 때문에 통화 연결이 약간 늦어져요. **Call**(통화) 워크플로우 액션 안의 고급 설정에서 **Disable Voicemail Detect**(음성사서함 감지 끄기)를 선택하면 지연이 없어지지만, 음성사서함도 응답으로 처리되어 워크플로우가 멈춰요. 이럴 때는 통화 타임아웃을 20초 미만으로 설정하면 음성사서함으로 넘어가기 전에 통화가 끝나요.

**Stop On Response**와 **Disable Voicemail Detect**를 함께 쓰는 방법을 설명한 문서도 있어요.

```
Call 액션에서 비즈니스(사용자 쪽)가 하는 일은 Stop on Response와 관계가 없어요. 비즈니스에 먼저 전화가 걸려요. 비즈니스가 받지 않으면 워크플로우는 계속 진행돼요. 비즈니스가 받았는데 연락처가 받지 않아도 워크플로우는 계속 진행돼요. Stop on Response에는 연락처(또는 연락처의 음성사서함)만 영향을 줘요.
```

---

## Communication Settings(커뮤니케이션 설정)

워크플로우에서 보내는 메시지의 발송 시간, 발신자 정보, 대화 속성을 관리하는 설정이에요. 메시지를 알맞은 시간에 전문적으로 보내고 제대로 관리하는 데 사용하세요.

![Communication Settings 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056949928/original/qJnosolbsLkoAxcV0kaefuMW-DyZ3HPmRw.png?1761597900)

---

### Timezone(시간대)

**Wait**(대기) 액션이나 **Time Window**(시간 창)처럼 시간에 따라 움직이는 워크플로우 단계가 어떤 시간대를 쓸지 정하는 드롭다운이에요.

![Timezone 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056950286/original/gaPNyTMXgGf0sJ6nmdgCRaOXtYRKp0q4Dg.png?1761598845)

- **Account Timezone**(계정 시간대): 시간 기반 액션이 모두 계정 전체(로케이션)에 설정된 시간대를 기준으로 실행돼요.
- **Contact Timezone**(연락처 시간대): 액션이 각 연락처의 개별 시간대를 기준으로 실행돼요. 전국 또는 해외 대상 캠페인에 알맞아요. 연락처가 있는 도시의 현지 시간 기준으로 오전 9시에 보내는 식으로, 적절한 현지 시간에 메시지가 나가요. 연락처 프로필에 시간대가 없으면 계정 시간대를 대신 사용해요.

**History**(기록): 워크플로우 **History**에서 액션이 **Account Timezone**과 **Contact Timezone** 중 무엇을 기준으로 실행됐는지 확인할 수 있어요.

![워크플로우 History에서 시간대 기준을 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056950281/original/DTQSI9e4i7HRlh1M0RJN_4_RN_VmgbOzHA.png?1761598819)

---

## Wait에서 멈춘 연락처가 있나요?

연락처가 **Wait** 액션을 지나가지 못한다면 **Wait behavior**(대기 동작)와 **Execution Logs**(실행 로그)를 확인해서 어떤 상황인지 살펴보세요. **Wait** 액션을 수정해도 이미 그 단계에 있는 연락처의 대기에는 영향이 없어요.

- [Workflow Action - Wait](../Internal-Tools-Workflow-Actions/workflow-action-wait.md)
- [Execution Logs & Enrollment History](../시작하기/workflows-improved-execution-logs-enrollment-history.md)

### Time Window(시간 창)

SMS나 이메일 보내기 같은 커뮤니케이션 액션이 실행될 수 있는 시간을 제한하는 기능이에요. 설정한 시간 창 밖에 실행되도록 예약된 액션은 일시 중지됐다가 다음으로 가능한 시간대에 다시 이어져요.

**Specific Time**(특정 시간) 토글을 체크하면 시간 창이 켜져요.

- Start Time(시작 시간): 실행 시간 창이 시작되는 시각을 정해요(예: 오전 9:00).
- End Time(종료 시간): 실행 시간 창이 끝나는 시각을 정해요(예: 오후 5:00).
- Include Days(포함 요일): 시간 창을 적용할 요일을 골라요.

---

### Sender Details(발신자 세부 정보)

**Sender Details**에서는 이 워크플로우에서 보내는 이메일과 SMS의 기본 발신자 정보를 설정해요. 워크플로우의 이메일 액션에 쓸 전용 발신 도메인도 고를 수 있어요.

**Sender domain**(발신 도메인)

**Settings > Communication**(커뮤니케이션) **> Sender details**(발신자 세부 정보)에 있는 **Sender domain** 드롭다운에서 워크플로우의 이메일을 어떻게 보낼지 선택해요.

- All domains(모든 도메인): 서브 계정에 설정된 가중치 분배에 따라, 설정된 여러 도메인으로 이메일을 계속 나눠 보내요. 발신자 이름과 이메일 접두사(예: marketing)를 입력하세요.
- Specific domain(특정 도메인): 인증된 전용 발신 도메인을 고르고 이메일 접두사를 입력하세요. 예를 들어 example.com을 고르고 marketing을 입력하면 marketing@example.com으로 보내요.

드롭다운에는 서브 계정에서 자동화에 쓸 수 있는, 인증된 전용 발신 도메인이 나와요. 설정된 전용 도메인이 없으면 드롭다운이 나타나지 않아요.

![Sender domain 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083348918/original/bf7ZawqIABUWPdDNJ9ljSMfslJtU5_xf8w.png?1792002005)

**Sender details 필드**

- From name(보내는 사람 이름): 이메일 수신자에게 표시되는 기본 발신자 이름이에요.
- From email(보내는 이메일): 기본 발신 이메일 주소예요. 선택한 발신 도메인과 함께 쓰는 이메일 접두사를 입력할 수도 있어요.
- From number(보내는 번호): 워크플로우에서 보내는 SMS에 쓰는 기본 전화번호예요.

발신 도메인을 고르고 발신자 정보를 설정한 뒤, 워크플로우 설정을 저장하세요.

![발신자 세부 정보를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083348934/original/fV8fqs-uMg6hllgcHkbNq88DLF3pNotkjw.png?1792002030)

{% hint style="warning" %}
알아 둘 점

- 도메인 불일치: 선택한 발신 도메인과 다른 도메인의 전체 발신 이메일 주소를 입력하면 선택한 발신 도메인보다 입력한 주소가 우선해요. 이 경우 전달률에 영향을 줄 수 있어서 하이퍼클래스가 **Sender domain mismatch**(발신 도메인 불일치) 경고를 표시해요.
- 이메일 액션 우선 적용: 개별 **Send Email**(이메일 보내기) 액션에 설정한 발신자 정보는 선택한 발신 도메인을 포함해 워크플로우 수준 설정보다 우선해요.
- 전용 도메인 헤더 우선 적용: 전용 도메인 설정에 지정한 이메일 헤더는 워크플로우 수준의 From name, From email 설정보다 우선해요.
{% endhint %}

---

### Sender Details 문제 해결

**Sender Details**가 저장되지 않으면 먼저 이메일 주소와 발신 도메인을 확인하세요.

- **From Email**이 완전하고 올바른 이메일 주소인지 확인하세요.
- 전용 발신 도메인을 쓴다면 **From Email**이 의도한 도메인과 일치하는지 확인하세요.
- 발신 도메인이 여러 개 설정되어 있다면 올바른 도메인을 쓰고 있는지 확인하세요.
- 개별 **Send Email** 액션에 워크플로우 설정을 덮어쓰는 **From Email**이 있는지 확인하세요.
- 하이퍼클래스에 표시된 검증 메시지가 있으면 내용을 확인하고 문제를 고친 뒤 다시 저장하세요.

하이퍼클래스 고객지원에 문의하기 전에 **From Email**, 발신 도메인, 액션 수준에서 덮어쓰는 설정을 확인하고 오류 메시지 내용을 정확히 기록해 두세요.

---

### Conversations - Mark as Read(대화 - 읽음으로 표시)

이 섹션의 설정은 이 워크플로우에서 오가는 상호작용이 플랫폼의 **대화** 화면에 어떻게 표시될지를 정해요.

기본적으로 워크플로우가 메시지를 보내면 해당 대화가 주목을 끌도록 "읽지 않음"으로 표시돼요. 이 토글을 켜면 이 워크플로우가 처리한 모든 대화가 자동으로 "읽음"으로 표시돼요. 관리 작업을 하거나 직접 확인할 필요 없는 안내성 메시지만 보내는 워크플로우에 유용해요.

---

## 자주 묻는 질문

### Allow Re-entry를 끄면 새 예약이 생긴 연락처도 예약 알림 워크플로우에 들어올 수 있나요?

네, 들어올 수 있어요. 예약 기반 트리거를 쓰는 워크플로우는 예외로, **Allow Re-entry** 설정과 상관없이 새 예약마다 연락처가 다시 들어올 수 있어요. 인보이스 기반 트리거도 마찬가지예요.

### Contact Timezone을 선택했는데 연락처 프로필에 시간대가 없으면 어떻게 되나요?

그 연락처에는 계정(로케이션)의 시간대를 기본값으로 사용해요. 워크플로우가 실패하지 않고 대체 시간대를 사용해서 진행돼요.

### Time Window 설정은 모든 워크플로우 액션에 적용되나요?

**Time Window**는 주로 이메일 보내기, SMS 보내기, 전화 걸기 같은 커뮤니케이션 액션에 영향을 줘요. 태그 추가, 필드 업데이트, 기회 생성 같은 내부 액션에는 영향이 없어요.

### 연락처에게 기회가 두 개 있고 Allow multiple Opportunities가 켜져 있으면 이메일을 두 번 따로 받나요?

네, 따로 받아요. **Allow multiple Opportunities**가 **Enabled**이면 트리거 조건을 충족한 기회마다 그 연락처에 대해 새로운 독립 흐름이 워크플로우에서 시작돼요. 그래서 연락처가 딜마다 관련 메시지를 따로 받을 수 있어요.

### 요일마다 다른 Time Window를 설정할 수 있나요?

현재 **Time Window**는 모든 요일에 똑같이 적용돼요. 한 워크플로우 안에서 요일별로 다른 시간 창을 지정할 수는 없어요.

### 워크플로우가 실행 중인데 Account Timezone을 바꾸면 어떻게 되나요?

**Account Timezone**을 바꿔도 이미 워크플로우를 진행 중인 연락처에는 영향이 없어요. 변경 내용은 그 워크플로우에 새로 들어오는 연락처에만 적용돼요.

### 워크플로우 안에서 단계마다 다른 시간대를 설정할 수 있나요?

아니요, **Timezone** 설정은 워크플로우 전체에 적용되고 개별 단계에는 적용할 수 없어요.

### 같은 워크플로우 안에서 액션마다 다른 발신 이메일을 설정할 수 있나요?

네, 가능해요. 워크플로우 **Settings**에서 기본 발신자 정보를 설정하고, 개별 **Send Email** 액션에서 이를 덮어쓸 수 있어요. 액션 수준의 발신자 정보는 선택한 발신 도메인을 포함해 워크플로우 수준 설정보다 우선해요.

### 한 연락처가 답장하면 Stop On Response로 모든 연락처의 워크플로우가 끝나나요?

아니요, **Stop On Response**는 답장한 해당 연락처의 워크플로우만 끝내요. 워크플로우에 있는 다른 연락처에는 영향을 주지 않아요.

### Mark as Read로 읽음 처리할 메시지 종류를 고를 수 있나요?

아니요, **Mark as Read**는 이메일, SMS, 통화, 음성사서함 등 워크플로우에서 나가는 모든 종류의 자동 메시지에 적용돼요.
