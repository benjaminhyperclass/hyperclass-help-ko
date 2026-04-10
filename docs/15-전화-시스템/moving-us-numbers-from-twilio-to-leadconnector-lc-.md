---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# Twilio에서 LeadConnector(LC)로 미국 전화번호 이전하기

**개요**

이 글은 에이전시나 클라이언트가 Twilio의 미국 지역번호 및 무료전화번호를 LC Phone 하위 계정(Hyperclass 내)으로 이전하여 플랫폼 내에서 SMS와 음성 기능을 원활히 사용할 수 있도록 단계별로 안내합니다.

**중요**: **Twilio에서 LC로** 전화번호를 이전하려면 고객이 Hyperclass 지원팀과 Twilio 지원팀 양쪽에 연락하여 성공적인 마이그레이션을 진행해야 합니다.

**중요**: 이 글은 미국 지역번호나 무료전화번호 이전에만 해당합니다. 미국 외 국가의 국제 전화번호는 [국제 전화번호 이전 (Twilio에서 LC Phone으로)]([migrating-international-numbers-twilio-to-lc-phone-](migrating-international-numbers-twilio-to-lc-phone-.md))를 참고하세요.

---

**목차**

- [미국 Twilio 전화번호 이전 전 확인사항](#미국-twilio-전화번호-이전-전-확인사항)
- [미국 전화번호를 LC로 이전하는 주요 이점](#미국-전화번호를-lc로-이전하는-주요-이점)
- [LC Phone 시스템이란?](#lc-phone-시스템이란)
- [클라이언트의 Twilio에서 LC Phone으로 전화번호 이전하기](#클라이언트의-twilio에서-lc-phone으로-전화번호-이전하기)
- [1단계: 수신 하위 계정 SID 받기](#1단계-수신-하위-계정-sid-받기)
- [2단계: Twilio에 지원 요청 제출](#2단계-twilio에-지원-요청-제출)
- [최종 체크리스트](#최종-체크리스트)
- [자주 묻는 질문](#자주-묻는-질문)

## 미국 Twilio 전화번호 이전 전 확인사항

Twilio 전화번호를 LC Phone 하위 계정으로 원활하고 성공적으로 마이그레이션하기 위해 확인하고 준비해야 할 중요한 사항들이 있습니다. 이 섹션에서는 문제없이 마이그레이션을 완료하는 데 필요한 단계, 접근 권한, 정보를 안내합니다.

- 클라이언트의 Twilio 계정 접근 권한 (계정 소유자여야 함)
- 전화번호가 이전될 Hyperclass 하위 계정의 Location ID
- Hyperclass 지원팀에 수신 하위 계정 SID(해당 로케이션의 LC Phone Twilio 하위 계정 SID)를 받기 위한 지원 요청 제출
- 국제 전화번호인 경우, 필요한 규제 번들과 주소가 Twilio에서 이미 승인되어 있어야 함

## 미국 전화번호를 LC로 이전하는 주요 이점

- 모든 커뮤니케이션을 Hyperclass 생태계 내에서 중앙 집중화
- 통화 추적, 자동화, SMS 워크플로우 등 LC Phone 기능 사용 가능
- 에이전시의 청구 및 전화번호 관리 간소화
- 네이티브 LC Phone 인프라를 통한 더 빠른 지원 및 문제 해결 제공

## LC Phone 시스템이란?

LC Phone은 Twilio ISV(Independent Software Vendor) 연결을 통해 작동하는 Hyperclass의 내장 전화 시스템입니다. 클라이언트의 Twilio 전화번호를 LC Phone 하위 계정으로 이전하면 별도의 Twilio 통합 없이도 Hyperclass 내에서 전화번호가 완전히 관리됩니다. 이를 통해 사용자에게 더 안정적이고 기능이 풍부한 경험을 제공합니다. 자세한 내용은 [LC Phone 시스템이란?](what-is-lc-phone-system-.md)을 참고하세요.

## 클라이언트의 Twilio에서 LC Phone으로 전화번호 이전하기

이 섹션에서는 클라이언트의 Twilio 계정에서 Hyperclass 내 LC Phone 하위 계정으로 전화번호를 마이그레이션하는 단계별 가이드를 제공합니다. 마이그레이션이 성공적으로 완료되어 전화번호가 Hyperclass 플랫폼에 완전히 통합되어 원활한 커뮤니케이션과 관리가 가능하도록 이 지침을 주의깊게 따르세요.

### 1단계: 수신 하위 계정 SID 받기

- Hyperclass에서 전화번호를 이전하려는 하위 계정(로케이션)으로 이동하여 Location ID를 기록하고 Hyperclass 지원팀에 티켓을 생성합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045914528/original/5DfMUuKIRZ_jxYqO-fVDm-8FQtX5SjBR0g.png?1746016502)

- Hyperclass에 지원 티켓을 제출하여 이 Location(하위 계정) ID에 대한 수신 하위 계정 SID를 요청합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045914728/original/B_LUxHgCOD_NfyxmBwM7GYe9vHgzWUYr_g.gif?1746016632)

### 2단계: Twilio에 지원 요청 제출

Hyperclass 지원팀으로부터 수신 하위 계정 SID를 받으면 **Twilio 지원팀에 연락**하여 **마이그레이션 프로세스를 시작**해야 합니다. **Twilio에 지원 티켓을 제출**하려면 다음 단계를 따르세요:

- 클라이언트의 Twilio 계정에 로그인합니다.
- [Twilio 지원](http://www.twilio.com)으로 이동하여 새 티켓을 생성합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045917090/original/cfnDcBV885dz3ce5LIjPYnPa7pct4nmZLQ.gif?1746017948)

**팁**: Twilio 지원팀에 티켓을 생성할 때 사용할 예시 형식

제목: 새 하위 계정으로 전화번호 이전 요청
우선순위: P3 – 일반
참조: migration@leadconnectorhq.com

메시지 템플릿:
안녕하세요 Twilio 지원팀,

다음 전화번호를 새 하위 계정으로 이전하고 싶습니다 - 여기에_TWILIO_전화번호_붙여넣기

**발신 하위 계정 SID** - 예: AC8a0eac4ea7651eba06137bbf1a907df62d. 전화번호가 현재 있는 본인의 Twilio 하위 계정 SID로 교체하세요.

**수신 하위 계정 SID** - ISV 로케이션의 Twilio 하위 계정 SID를 받으려면 Hyperclass 지원팀에 연락해 주세요.

시간 프레임: 최대한 빠르게

이 마이그레이션은 비즈니스 연속성에 필수적입니다. 가능한 한 빠른 시일 내에 이 요청을 처리해 주시기 바랍니다.

감사합니다!

**중요**: 티켓을 제출하면 Twilio에서 요청을 검토하고 제공하신 이메일 주소로 응답합니다. 언제든지 질문이 있거나 도움이 필요하시면 Hyperclass 지원팀에 연락해 주세요. 프로세스 전반에 걸쳐 도움을 드리겠습니다.

---

## 최종 체크리스트

- Twilio 계정 소유자만 전화번호 마이그레이션을 시작하고 승인할 수 있습니다.
- 국제 전화번호를 마이그레이션하는 경우, 요청을 제출하기 전에 Twilio에서 모든 규제 준수 단계(승인된 번들 및 주소 등)가 완료되어 있는지 확인하세요.
- 평균 마이그레이션 시간은 일반적으로 Twilio의 처리 시간에 따라 24-72시간입니다.
- LeadConnector 팀과의 적절한 조정을 위해 지원 티켓에 항상 migration@leadconnectorhq.com을 참조에 추가하세요.

## 자주 묻는 질문

**Q: 이전 중에 SMS 워크플로우나 통화 추적이 중단되나요?**
마이그레이션 중에 잠시 서비스가 중단될 수 있습니다. 트래픽이 적은 시간대에 전화번호를 이전하도록 계획하세요.

**Q: 여러 Twilio 계정의 전화번호를 하나의 LC Phone 계정으로 이전할 수 있나요?**
네, 하지만 각 마이그레이션은 별도로 제출해야 하며 원래 계정 소유자가 승인해야 합니다.

**Q: 마이그레이션 후 청구는 어떻게 되나요?**
전화번호는 클라이언트의 개인 Twilio 계정이 아닌 Hyperclass(LC Phone)를 통해 청구됩니다.

**Q: 이 글은 미국 지역번호나 무료전화번호를 언급합니다. 국제 전화번호도 같은 프로세스를 따를 수 있나요?**
아니요, 이 프로세스는 미국 지역번호 및 무료전화번호에만 적용됩니다. 국제 전화번호 마이그레이션은 이 글을 참고하세요: [국제 전화번호 이전 (Twilio에서 LC Phone으로)]([migrating-international-numbers-twilio-to-lc-phone-](migrating-international-numbers-twilio-to-lc-phone-.md))

---
*원문 최종 수정: 2026년 3월 25일 오전 7:34*
*Hyperclass 사용 가이드 — hyperclass.ai*