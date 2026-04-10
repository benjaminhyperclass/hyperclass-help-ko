---

번역일: 2026-04-08
카테고리: 전화 시스템 > 전화번호
---

# 국제 전화번호 이전하기 (Twilio → LC Phone)

**개요**

Twilio의 국제 전화번호를 LC Phone으로 이전하려는데 프로세스가 멈춘 것처럼 보인다면, 이 가이드를 따라 수동으로 이전을 완료하세요. 이는 마이그레이션 기능의 업그레이드 버전이 출시될 때까지의 임시 프로세스입니다.

![Twilio 이전 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051327391/original/HGQgiI84RMzA0lHZdWrT-hnh-uGiuGzbWw.png?1754908671)

![이전 진행 상태 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051327183/original/vaj_MhszJm_4Mllnb8d3U0ted4pKffEhIg.png?1754908549)

## ✅ **단계별 수동 이전 프로세스**

### **1. 하위 계정을 LC Phone으로 이전하기**

Hyperclass 계정의 전화 연동(Phone Integration) 설정에서 이전을 시작하세요. "Migration in Progress(이전 진행 중)"와 같은 상태 업데이트를 볼 수 있습니다.

💡 참고: 이전이 중단되면 아래 단계를 계속 진행하세요.

### **2. 규제 번들 및 주소 생성하기 - [규제 번들 생성 방법](https://www.twilio.com/en-us/guidelines/regulatory)**

이는 Twilio 규정 준수를 위해 필요합니다:

- Twilio Console로 이동합니다.
- 전화번호와 일치하는 국가/지역에 대한 규제 번들(Regulatory Bundle)을 생성합니다.
- 번들과 연결된 규제 주소(Regulatory Address)를 추가합니다.
- 올바른 번호 유형(예: Mobile, Local, Toll-Free)에 대해 번들이 승인되었는지 확인합니다.

### **3. Hyperclass 고객지원에 주요 정보 요청하기**

Hyperclass 고객지원 또는 파트너 담당자에게 다음 정보를 요청하세요:

- Gaining Account SID
- Regulatory Bundle SID
- Regulatory Address SID

### **4. Twilio에서 수동 이전 시작하기**

Twilio의 고객지원 티켓 시스템을 사용해서 수동으로 번호 이동을 시작하세요:

- Twilio Console에 로그인합니다.
- 현재 계정에서 제공받은 Gaining Account SID로 번호 이전을 요청하는 고객지원 티켓을 생성합니다.
- 티켓에 migration@leadconnectorhq.com을 참조(CC)에 추가합니다.
- LOA, Bundle SID, Address SID를 요청에 포함합니다.

## ⚠️ **일반적인 문제들**

| 문제 | 설명 |
|------|------|
| "Migration in Progress" 상태에서 멈춤 | 규제 요구사항이 완료되지 않았을 때 자주 발생합니다. |
| 규제 승인 누락 | 수동 이전을 시작하기 전에 번들이 완전히 승인되어야 합니다. |
| 번들의 번호 유형 불일치 | 번들이 번호 유형(Local, Mobile, Toll-Free)과 일치해야 합니다. |

---
*원문 최종 수정: Mon, 11 Aug, 2025 at 5:39 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*