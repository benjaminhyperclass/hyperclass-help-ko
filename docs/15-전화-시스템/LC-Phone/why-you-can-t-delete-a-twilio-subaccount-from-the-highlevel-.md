---

번역일: 2026-04-08
카테고리: 전화 시스템 > LC Phone
---

# Hyperclass에서 Twilio 하위 계정을 삭제할 수 없는 이유

## 개요

Hyperclass 계정에서 하위 계정을 삭제하려고 시도했는데 삭제할 수 없다는 메시지가 나타난다면, 이 가이드에서 그 이유와 해결 방법을 설명해드리겠습니다.

---

## **LC가 아닌 사용자의 경우 Hyperclass에서 계정 삭제 관리 불가**

Hyperclass는 LC/ISV(Independent Software Vendor) 외부에서 생성된 Twilio 계정을 삭제할 권한이 없습니다. 본인 소유의 Twilio 계정을 사용하고 계시다면(즉, LeadConnector의 Twilio ISV 하위 계정이 아닌 경우), 해당 계정의 관리와 폐쇄는 전적으로 Twilio를 통해 직접 처리해야 합니다.

---

## **Hyperclass에서 표시되는 내용**

LC가 아닌 Twilio 계정의 경우, Hyperclass 계정의 Twilio 설정(Twilio Settings) 내에서 배너 알림만 확인할 수 있습니다. 이 배너는 LeadConnector의 Twilio 계정을 사용하지 않고 있음을 알려주는 역할을 합니다. 하지만 이런 계정의 경우 Hyperclass 플랫폼 내에서는 Twilio 계정을 삭제할 수 있는 옵션이 제공되지 않습니다.

---

## 삭제 옵션 대신 경고가 표시되는 이유는 무엇인가요?

일부 계정은 사용자가 직접 관리하는 외부 Twilio 계정에 연결되어 있습니다(즉, Hyperclass에서 프로비저닝하거나 제어하지 않는 계정). 이런 경우:

- Hyperclass는 하위 계정을 삭제할 권한이 없습니다.
- 사용자가 수동으로 삭제하지 않는 한 해당 하위 계정은 Twilio 대시보드에서 활성 상태를 유지합니다.

따라서 사용자가 직접 조치를 취하지 않으면 Twilio에서 해당 하위 계정에 대한 요금이 계속 청구될 수 있습니다.

---

## 이 경우에 해당하는지 확인하는 방법

다음 조건에 해당한다면 이 경우에 해당합니다:

- 하위 계정에 본인 소유의 Twilio 계정을 연결했습니다.
- Hyperclass의 내장 통신사나 메시징 서비스를 사용하지 않는 계정입니다.
- "하위 계정 삭제가 지원되지 않습니다"라는 배너가 표시됩니다.

---

## 대신 할 수 있는 방법

Twilio에서 더 이상 요금이 청구되지 않도록 하려면, 다음 단계에 따라 Twilio 대시보드에서 직접 하위 계정을 삭제하세요:

### 단계별 가이드:

1. Twilio 콘솔에 로그인하세요: [https://console.twilio.com](https://console.twilio.com/)
2. 왼쪽 메뉴에서 Subaccounts(하위 계정)로 이동하세요.
3. 삭제하려는 하위 계정을 찾으세요.
4. 하위 계정 옆의 "..." (더 많은 옵션) 아이콘을 클릭하세요.
5. "Close Subaccount(하위 계정 폐쇄)"를 선택하세요.
6. 대화 창에서 폐쇄를 확인하세요.

완료되면 하위 계정이 폐쇄되고 더 이상 요금이 발생하지 않습니다.

---

## 도움이 필요한가요?

계정이 외부에서 관리되는지 확실하지 않거나 Twilio에서 올바른 하위 계정을 찾는 데 도움이 필요하다면:

- Twilio 공식 가이드를 참조하세요: [How to close a sub account](https://help.twilio.com/articles/223135987-Closing-a-Twilio-subaccount)

---

## 중요 사항:

- 하위 계정 폐쇄는 영구적입니다. 진행하기 전에 해당 데이터가 더 이상 필요하지 않은지 확인하세요.
- Hyperclass 측 삭제는 Hyperclass에서 직접 프로비저닝한 계정에만 영향을 줍니다.
- Twilio 계정의 요금 관리와 모니터링은 사용자의 책임입니다.

---
*원문 최종 수정: Wed, 30 Jul, 2025 at 2:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*