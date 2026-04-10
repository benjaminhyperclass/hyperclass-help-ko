---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# 자체 Twilio 계정을 사용하려는 고객을 위한 Twilio 재청구 활성화

이 도움말 문서에서는 HighLevel 플랫폼 내에서 자체 Twilio 계정을 사용하려는 고객을 위해 Twilio 재청구를 활성화하는 방법에 대한 포괄적인 가이드를 제공합니다. 재청구 프로세스 설정 및 구성에 필요한 단계를 다루며, 고객이 효율적인 청구 관리를 유지하면서 Twilio 계정을 원활하게 통합할 수 있도록 합니다. 단일 계정을 관리하든 여러 고객을 관리하든, 이 문서는 설정을 간소화하고 모든 것이 원활하게 작동하도록 하는 명확한 지침을 제공합니다.

**목차**

- [1단계: Twilio 계정에 로그인](#1단계-twilio-계정에-로그인)
- [2단계: 텍스트 템플릿 복사](#2단계-텍스트-템플릿-복사하고-누락된-정보-추가)
- [3단계: Twilio 계정에서 지원 티켓 열기](#3단계-twilio-계정에서-지원-티켓-열기)
- [4단계: 텍스트 템플릿의 첫 번째 단락 변경](#4단계-텍스트-템플릿의-첫-번째-단락-변경)
- [5단계: Twilio에서 전송 완료 확인](#5단계-twilio에서-전송-완료-확인)
- [6단계: HighLevel 계정에 로그인](#6단계-highlevel-계정에-로그인)

---

Twilio 재청구가 작동하려면 HighLevel의 고객 하위 계정이 Twilio 계정의 해당 하위 계정에 연결되어야 합니다.

고객의 HighLevel 하위 계정이 현재 고객 자체의 Twilio 계정에 연결되어 있는 경우, SaaS 모드에서 Twilio 재청구를 활성화하기 전에 다음 단계를 따라야 합니다:

## 1단계: Twilio 계정에 로그인
톱니바퀴 아이콘 클릭 → 하위 계정(Sub-accounts) 선택 → 빨간색 + 아이콘을 클릭하여 새 하위 계정을 생성하고, Twilio 재청구를 활성화하려는 고객에 맞게 이름을 지정하세요

![하위 계정 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956311/original/FqqemNrQTtoXA_bHrFYVNJQ3YVDGu-2xRQ.jpg?1726501850)

## 2단계: 텍스트 템플릿 복사하고 누락된 정보 추가

아래 텍스트 템플릿을 복사하고 누락된 정보를 추가하세요:

```
안녕하세요 Twilio,

제 고객 [고객명]의 Twilio 계정이 [고객의 Twilio 계정 이메일]로 등록되어 있으며, 다음 번호들을 그들의 계정에서 제 계정의 하위 계정으로 이동하고자 합니다:
[전화번호 목록]

손실 계정 SID: [전화번호를 포기하는 하위 계정의 SID (HighLevel 계정 → Agency Settings(에이전시 설정) → Twilio 탭에서 고객 이름 옆에서 찾을 수 있습니다)]

획득 계정 SID: [1단계에서 생성한 새 하위 계정의 SID]

위 번호들을 가능한 한 빨리 전송해 주시기 바랍니다. 미리 감사드립니다!
```

## 3단계: Twilio 계정에서 지원 티켓 열기

Twilio 계정에서 물음표 아이콘을 클릭하고 "Submit a Ticket"을 선택하여 지원 티켓을 여세요. 위 템플릿에서 완성한 텍스트를 티켓에 붙여넣고 제출하세요.

![지원 티켓 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956374/original/LJi9ZAUoLbrQ5dCXpAlwdQtGzfHH5KLjYw.jpg?1726501892)

## 4단계: 텍스트 템플릿의 첫 번째 단락 변경

텍스트 템플릿의 첫 번째 단락을 "저는 다음 번호들을 제 Twilio 계정에서 다른 계정으로 전송하고자 합니다:"로 변경하세요. 업데이트된 텍스트 템플릿을 고객에게 보내고, 텍스트 템플릿을 사용하여 Twilio 계정에서 티켓을 열도록 요청하세요. Twilio는 전송을 승인하기 위해 귀하와 고객 양쪽의 티켓이 필요합니다.

## 5단계: Twilio에서 전송 완료 확인

Twilio로부터 전송이 완료되었다는 확인을 받으면, Twilio 계정에서 생성한 새 하위 계정에 해당 번호들이 표시되는 것을 확인할 수 있습니다.

## 6단계: HighLevel 계정에 로그인

HighLevel 계정에 로그인 → Agency Settings(에이전시 설정) → Twilio → 해당 고객까지 스크롤 → 계정명 오른쪽의 점 세 개 아이콘 클릭 → "Update Credentials(자격 증명 업데이트)" 선택하고 SID 및 Auth Token 값을 Twilio 계정의 새 하위 계정에서 가져온 새 SID 및 Token 값으로 교체하세요.

![자격 증명 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956414/original/5j-RlazVj5ZqQ4CAAVCJdgumM4uJppqXag.jpg?1726501927)

새 SID와 Token은 Twilio 계정에 로그인 → 우측 상단의 톱니바퀴 아이콘 클릭 → 하위 계정(Sub-accounts) 선택 → 고객 이름을 클릭하면 해당 두 필드를 확인할 수 있습니다:

![SID와 Token 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956464/original/iMgyUlLUA-JWWQImVop5LEBiCboj8XGnpg.jpg?1726501961)

---

## 자주 묻는 질문

**재청구 활성화 후 고객이 Twilio 연동(Integration)에 문제를 겪으면 어떻게 해야 하나요?**

재청구 활성화 후 고객이 Twilio 연동에 문제를 겪으면, 먼저 가이드에 따라 모든 구성과 설정이 올바르게 적용되었는지 확인하세요. 문제가 지속되면 Twilio 지원팀에 도움을 요청하거나 플랫폼별 문제에 대해서는 HighLevel 지원팀에 문의하는 것을 고려하세요. 또한 Twilio의 API나 청구 설정의 업데이트나 변경 사항을 확인하면 추가적인 통찰을 얻을 수 있습니다.

**고객 자체 계정으로 Twilio 재청구를 사용할 때 제한사항이나 제약이 있나요?**

고객 자체 Twilio 계정을 재청구에 사용하는 것은 유연성을 제공하지만, Twilio의 가격 체계 차이, 기능 가용성 또는 청구나 서비스 기능에 영향을 줄 수 있는 지역적 제한과 같은 제한사항이 있을 수 있습니다. 호환성을 보장하고 잠재적 제약사항을 이해하기 위해 Twilio의 문서와 HighLevel의 연동 기능을 검토하는 것이 중요합니다.

---
*원문 최종 수정: Mon, 16 Sep, 2024 at 11:53 AM*  
*Hyperclass 사용 가이드 — hyperclass.ai*