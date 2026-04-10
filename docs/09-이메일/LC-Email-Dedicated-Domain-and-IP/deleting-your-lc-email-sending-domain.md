---

번역일: 2026-04-07
카테고리: 09-이메일 > LC Email 전용 도메인 및 IP
---

# LC 이메일 발신 도메인 삭제하기

LC 이메일 전용 발신 도메인은 이메일 커뮤니케이션을 보내고 받기 위해 Hyperclass 하위 계정에 연결한 이메일 도메인입니다. 하나의 Hyperclass 로케이션에 여러 개의 도메인과 서브도메인을 연결할 수 있으므로, 전용 발신 도메인을 추가하고 삭제하는 방법을 아는 것이 매우 중요합니다.

[LC 이메일 전용 발신 도메인에 대해 더 알아보기](dedicated-email-sending-domains-overview-setup.md)

---

**목차**

- [도메인을 삭제해야 하는 이유](#도메인을-삭제해야-하는-이유)
- [전용 발신 도메인은 어디서 찾나요?](#전용-발신-도메인은-어디서-찾나요)
- [LC 이메일 전용 발신 도메인 삭제하는 방법](#lc-이메일-전용-발신-도메인-삭제하는-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 도메인을 삭제해야 하는 이유

LC 이메일 전용 발신 도메인을 삭제해야 하는 몇 가지 이유가 있습니다:

### 잘못된 도메인을 추가한 경우
때때로 잘못된 도메인을 추가하는 경우가 있는데, 이는 이메일을 시작하고 실행하기 위해 DNS 서비스를 연결하는 능력에 영향을 줄 수 있습니다. 이런 경우 도메인을 삭제하고 올바른 도메인을 추가해야 합니다.

### 비즈니스 도메인을 변경한 경우
비즈니스의 도메인을 변경한다면, 비즈니스와 일치하도록 주 발신 도메인을 변경하고 싶을 것입니다. 이는 Google과 같은 이메일 서비스 제공업체가 당신이 누구인지 확인하고 사용자를 보호하려는 시도로 발신 도메인이 비즈니스의 신원과 일치하는지 확인하기 때문에 이메일 평판 점수 측면에서도 매우 중요할 수 있습니다.

### 도메인이 스팸으로 표시되어 전송률이 낮은 경우
많은 마케팅 이메일을 보내는 경우, 너무 많이 스팸으로 표시되어 이메일 평판 점수가 영향을 받을 가능성이 있습니다. 이런 상황이 발생하면 이메일 전송률이 떨어지며, 성공률을 높이기 위해 발신 도메인을 변경해야 할 가능성이 높습니다. 이를 위해서는 새 도메인을 추가하기 위해 발신 도메인을 완전히 삭제해야 할 수도 있습니다. 보통은 이런 경우는 아니지만, 스팸 도메인에서 더 이상 발신하지 않기로 결정했다면 해당 하위 계정에 더 이상 연결해둘 이유가 없습니다.

**참고:** 특정 사용 사례와 니치에 따라 발신 도메인을 삭제해야 하는 더 많은 이유가 있을 수 있습니다.

---

## **전용 발신 도메인은 어디서 찾나요?**

모든 이메일 발신 도메인은 하위 계정 로케이션 설정의 EMAIL SERVICES 섹션에서 찾을 수 있습니다.

해당 위치로 이동하려면 `Settings(설정) → Email Services(이메일 서비스)`로 이동하세요.

![Settings에서 Email Services로 이동하는 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032625907/original/2_-VQ3O57oJG2a_uIc8nPUD56YmP2YHiJg.jpg?1725993012)

![Email Services 섹션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032625911/original/n8zdGiX9Wc_BUq9aRnPIfJ-DplDEDh16nw.jpg?1725993021)

---

## **LC 이메일 전용 발신 도메인 삭제하는 방법**

로케이션 설정의 EMAIL SERVICES 섹션에 들어간 후, 다음 단계를 따라 전용 발신 도메인을 삭제하세요:

### **1단계:** 전용 도메인 설정 열기

- 이메일 서비스 섹션에서 화면 오른쪽에 "Dedicated Domain and IP(전용 도메인 및 IP)"라는 제목의 버튼이 보입니다.

- 해당 버튼을 클릭하여 연결된 모든 발신 도메인을 확인하세요.

![Dedicated Domain and IP 버튼 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032625704/original/cbPXDzi8WwYJbMJ17V6rRb9yE6k1zvPhkw.jpg?1725992653)

### **2단계:** 도메인 삭제

- 도메인 왼쪽 상단에 있는 점 세 개 버튼을 클릭하여 도메인의 작업 메뉴를 엽니다.

- "Delete Domain(도메인 삭제)"라는 제목의 버튼을 클릭합니다.

- 도메인 삭제를 확실히 원하는지 확인하는 확인 팝업이 표시됩니다. 확인하면 도메인이 삭제됩니다.

![도메인 작업 메뉴 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032625837/original/JlFhET4WPCO06FGgWFn5zSM4zBi37wcfhw.jpg?1725992863)

![Delete Domain 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032625843/original/86FJLae4GVP0SsYg0uwhOaSXsdJyJB9h2w.jpg?1725992876)

![삭제 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032625847/original/Kt2ypyv0iB2fllZW2Pplzpklok_ZRGBAIQ.jpg?1725992888)

---

## **자주 묻는 질문**

### **Q: 하위 계정에서 이메일 도메인이 삭제되면 어떻게 되나요?**

하위 계정에서 발신 도메인을 삭제하면 해당 도메인에서 DNS 레코드가 제거됩니다. 이를 통해 필요한 경우 해당 도메인을 다른 이메일 서비스에 연결할 수 있습니다.

### **Q: 삭제한 발신 도메인을 나중에 같은 하위 계정에 다시 연결할 수 있나요?**

네! 하위 계정에서 발신 도메인을 삭제/제거하더라도 나중에 언제든지 다시 연결할 수 있습니다. 다만 다시 연결하는 것과 DNS 레코드가 전파되는 시간 사이에 어느 정도 시간이 걸릴 수 있다는 점을 기억하세요. 이는 도메인 호스팅 서비스에 따라 달라집니다.

### **Q: 발신 도메인을 삭제하면 이메일 전송률에 부정적인 영향을 주나요?**

이는 케이스마다 다르며 경우에 따라 달라집니다. 삭제하는 도메인의 전송률이 높다면 대부분 그렇습니다. 새로 추가하는 도메인이 긍정적인 평판 점수를 쌓는 데 시간이 필요하기 때문입니다.

삭제하는 발신 도메인이 이미 낮은 전송률을 가지고 있다면, 새 도메인을 추가하는 것이 실제로 일일, 주간, 월간 기준으로 전달되는 이메일 수를 늘리는 데 도움이 될 수 있습니다!

---
*원문 최종 수정: 2024년 9월 10일*
*Hyperclass 사용 가이드 — hyperclass.ai*