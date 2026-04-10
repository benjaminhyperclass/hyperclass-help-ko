---

번역일: 2026-04-08
카테고리: 전화 시스템
---

# 물리적 VoIP 데스크폰 (SIP)

**물리적 VoIP 데스크폰**을 Hyperclass에 직접 연동하세요. 이 기능은 원활한 통화 관리를 제공하며, 발신 및 수신 통화와 함께 통화 녹음 및 전사 기능을 지원하고, CRM을 실시간으로 업데이트합니다.

**목차**

- [VoIP 데스크폰 연동이란?](#voip-데스크폰-연동이란)
- [VoIP 데스크폰 설정 권한](#voip-데스크폰-설정-권한)
- [기술적 요구사항 & 권장 데스크폰](#기술적-요구사항--권장-데스크폰)
- [VoIP 데스크폰을 Hyperclass에 연결하기](#voip-데스크폰을-hyperclass에-연결하기)
- [기기 (SIP 사용자) 비밀번호 재설정](#기기-sip-사용자-비밀번호-재설정)-Password)
- [기기 삭제](#기기-삭제)
- [문제 해결](#문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

# VoIP 데스크폰 연동이란?

이 기능을 통해 사용자는 **물리적 VoIP 데스크폰을 Hyperclass에 직접 연결**할 수 있습니다. CRM과 물리적 전화 시스템 간의 안정적인 연결을 제공하여, 발신 통화부터 수신 통화까지 모든 통화 활동이 Hyperclass 내에서 관리되도록 합니다. 이 연동을 활용하면 통화 처리 기능을 향상시키고 고객 데이터와의 일관된 연결을 유지할 수 있습니다.

Hyperclass의 모든 디지털 CRM 기능은 계속 작동하며, 물리적 데스크폰을 사용할 수 있습니다:

- 통화 녹음(Call Recording)
- 통화 전환(Call Transfers)
- 통화 전사(Call Transcription)
- 그 외 다양한 기능!

## VoIP 데스크폰 설정 권한

- 에이전시 관리자 - 모든 하위 계정에서 전체 프로비저닝 권한
- 하위 계정 관리자 - 자신의 하위 계정 내에서만 기기 프로비저닝 가능
- 기타 사용자 - 읽기 전용; "관리자에게 설정을 요청하세요"라는 툴팁이 표시됩니다.

## 기술적 요구사항 & 권장 데스크폰

네트워크 & 프로토콜 전제조건

- UDP, TCP 또는 TLS를 통한 SIP
- SIP 시그널링을 위한 아웃바운드 포트 5060/5061 개방
- RTP 오디오를 위한 UDP 10000-20000 개방
- PoE 스위치 또는 외부 전원 어댑터

하드웨어 구매 시 확인 사항

- 사양서에서 "SIP" 및 "PoE" 확인
- 최소 두 개의 프로그래밍 가능한 라인 키
- 통신사 잠금 또는 독점 프로비저닝 기기 피하기

인기 모델

- Yealink T54W / T58W
- Poly VVX 450
- Grandstream GXP 2170
- Snom D785
- Cisco 7841

## VoIP 데스크폰을 Hyperclass에 연결하기

1단계: 마법사로 이동

로그인 후 하위 계정 설정(Sub-Account Settings) → 전화번호(Phone Numbers) → 고급 설정(Advanced Settings) → VoIP 데스크폰 (SIP) → 시작하기(Get Started)로 이동합니다.

![VoIP 데스크폰 설정 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050093926/original/YS4668PA9CkKqvVzZi-iCSDpL4zwgmAVHw.png?1752866528)

2단계: SIP 서버 구성

- SIP 도메인을 확인하거나 편집합니다. *<LocationName>.sip.ashburn.twilio.com*과 같은 제안된 도메인이 나타납니다.
- 저장하기 전에 한 번 변경할 수 있습니다.

![SIP 서버 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048947940/original/T_RoByQReSUzOcLWvCk_S-OlnygySLa2mg.png?1750964313)

3단계: SIP 사용자

내선번호(숫자 또는 텍스트)와 강력한 비밀번호를 선택하고 안전한 곳에 저장하세요.

![SIP 사용자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048947928/original/MgsSV8OV1wJbZoUkMb7urN7BZExwWyiLVQ.png?1750964269)

4단계: 사용자 할당

각 VoIP 데스크폰은 하위 계정의 사용자에게 연결되어야 합니다. 사용자 할당(Assign to User) 드롭다운에서 한 명의 사용자를 선택하세요.

해당 사용자의 개별 전화 설정이 데스크폰을 사용하도록 구성되어 있는지 확인하세요. **설정(Settings) > 내 직원(My Staff) > 직원 선택 > 편집(Edit) > 통화 및 음성메일 설정(Call & Voicemail Settings)**으로 이동하여 필요한 옵션에 대해 "데스크폰(Deskphone)"을 활성화하세요. 데스크폰에서 자신에게 주소가 지정된 통화를 받으려면 "통화 전달 대상(Forward Calls to)"에서 활성화하세요. "다중 벨링(Ring multiple)"의 일부로 통화를 받고 있고 데스크폰에서 받고 싶다면 "모든 곳에서 벨링(Ring all)" 아래에서 데스크폰을 활성화하세요.

사용자가 IVR의 기본 채널을 데스크폰으로 설정하면, IVR로 라우팅된 통화가 데스크폰에서 울립니다.

![사용자 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048947966/original/L3fI9Oggy2nZ9JE1bPLRwQdMYOycNEvsUw.png?1750964402)

![전화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050752109/original/s6wUPXQfAjDIUvnnGnpzS6V7a2bKE_GdjA.png?1753979052)

5단계: 물리적 전화기 구성

- SIP 도메인, 사용자명, 비밀번호를 전화기의 등록자(Registrar) / 서버(Server) / 프록시(Proxy) 필드에 입력하세요 (전화기 모델 및 제조업체에 따라 다름).

6단계: 내장 테스트 통화 실행 (선택사항)

- VoIP 데스크폰 (SIP) > 테스트 통화(Test Calls) > 통화 시뮬레이션(Simulate Calls)으로 이동합니다.
- 발신 테스트 - 표시된 번호로 전화를 걸어보세요. 성공하면 "This is a test call"이 세 번 들려야 합니다.
- 수신 테스트 - 수신 테스트 통화(Inbound Test Call)를 클릭하면 데스크폰이 울려야 합니다.

![테스트 통화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050094240/original/q3Ukfp7AIe5rXyIjZpLnTQqSp7uBWzIUUw.png?1752867440)

**도움이 필요하신가요?** 테스트가 실패하면 실패한 테스트 통화의 오류 코드와 함께 고객 지원팀에 문의하세요.

## 기기 (SIP 사용자) 비밀번호 재설정

**설정(Settings) > 전화번호(Phone Numbers) > 고급 설정(Advanced Settings) > VIP 데스크톱 (SIP) > 기기 관리(Manage Devices)** 탭으로 이동하여 비밀번호를 재설정할 기기의 **연필 아이콘**을 선택합니다.

![비밀번호 재설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050094265/original/uKVc1XmL5W74kkBCOiueVF7_8Up0fC8H8A.png?1752867520)

## 기기 삭제

**설정(Settings) > 전화번호(Phone Numbers) > 고급 설정(Advanced Settings) > VIP 데스크톱 (SIP) > 기기 관리(Manage Devices)** 탭으로 이동하여 **휴지통 아이콘**을 선택하면 기기를 삭제할 수 있습니다.

**경고:** 이 작업은 즉시 핸드셋의 등록을 해제합니다.

![기기 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050094286/original/HLX6OxRIGnOvDhywfsLHaB5kEnAXQWo7Qw.png?1752867571)

데스크폰 간 통화 전환

## 1. 데스크폰 간 직접 내선 다이얼링

이제 구성된 데스크폰이 있는 팀원에게 내선번호를 다이얼하여 간단히 통화할 수 있습니다. 팀원의 내선번호가 101이라면, 데스크폰에서 101을 다이얼하기만 하면 즉시 연결됩니다. 외부 번호나 추가 라우팅이 필요하지 않습니다.

**주요 세부사항**

- 빠른 내선 간 통화
- 구성된 데스크폰 간에서 작동
- 데스크폰에서만 지원

이 업데이트는 데스크폰을 사용하는 팀의 내부 커뮤니케이션을 더 빠르고 효율적으로 만듭니다.

## 2. 데스크폰 간 IVR 통화 전환

이제 IVR 통화를 한 데스크폰에서 다른 데스크폰으로 직접 전환할 수 있습니다.

작동 방식은?

데스크폰에서 활성 IVR 통화 중:

- 전환을 시작합니다.
- 팀원의 내선번호를 다이얼합니다.

![통화 전환 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065084807/original/hAOdaYjFSw10_XmuBQrArbP9dGoGJGH0Eg.png?1771329355)

- 통화가 그들의 데스크폰으로 직접 라우팅됩니다.

![통화 전환 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065084806/original/XqWn-AXejIHACYzbx0ChB_iERS33xnIURw.png?1771329355)

간단하고 원활합니다.

참고: 블라인드 전환만 지원됩니다. 웜 전환은 현재 사용할 수 없습니다.

### 문제 해결

| 증상 | 가능한 원인 | 해결책 |
|------|-------------|---------|
| 401 / 403 Unauthorized | 잘못된 사용자명 또는 비밀번호 (대소문자 구분) | 자격 증명 재입력 |
| 오디오 없음 | RTP를 차단하는 방화벽 (UDP 10000-20000) | 포트 열기 / SIP ALG 비활성화 |
| 전화는 울리지만 응답하지 않음 | RTP를 방해하는 NAT / SIP ALG | 라우터에서 SIP ALG 비활성화 |
| SIP 도메인을 저장할 수 없음 | 이미 사용 중인 이름 | 도메인 편집 또는 제안된 증분 승인 |
| 여전히 문제가 있나요? | – | SIP 도메인 및 핸드셋 모델과 함께 지원팀에 문의 |

## **자주 묻는 질문**

**Q: 어떤 VoIP 데스크폰이 호환되나요?**
대부분의 오픈 SIP 모델 - 위의 권장 목록을 참조하세요.

**Q: 모든 통화를 녹음하고 전사할 수 있나요?**
네. 한 번 활성화하면 모든 통화가 자동으로 녹음되고 전사됩니다.

**Q: 통화 중에 블라인드 전환을 어떻게 수행하나요?**
데스크폰 UI에서 블라인드 전환(Blind Transfer) 옵션을 사용하세요.

**Q: 데스크폰 사용에 추가 요금이 있나요?**
아니요. 데스크폰 통화는 웹/모바일 통화와 동일한 분당 요금을 공유합니다. 데스크폰으로의 통화 전환에 대한 추가 비용은 없습니다.

**Q: 두 개의 데스크폰이 동일한 Hyperclass 사용자를 가리킬 수 있나요?**
아니요, 각 VoIP 데스크폰에는 하나의 사용자만 연결할 수 있습니다.

**Q: SIP 트렁킹을 지원하나요?**
아니요, 현재 SIP 트렁킹을 지원하지 않습니다. 따라서 현재로서는 기존 PBX/Asterix를 GHL에 연결할 수 없습니다.

**Q: 데스크폰에서 수신 통화를 받을 수 없는 이유는 무엇인가요?**
사용자의 개별 전화 설정이 데스크폰으로 설정되어 있는지 확인하세요. **설정(Settings) > 내 직원(My Staff) > 직원 선택 > 편집(Edit) > 통화 및 음성메일 설정(Call & Voicemail Settings)**으로 이동하여 필요한 옵션에 대해 **"데스크폰(Deskphone)"**을 활성화하세요.

**Q: 데스크폰에서 발신자를 음악과 함께 대기 상태로 둘 수 있나요?**

*핸드셋* 대기 중에 재생되는 음악은 SIP 전화기 모델과 로컬 대기 동작에 따라 다릅니다. Hyperclass는 기기의 대기 버튼으로 트리거되는 대기 중 음악을 **제어하지 않습니다**. 발신자가 *통화 흐름 내에서* 대기하는 동안 오디오를 듣게 하려면 워크플로우에서 오디오 프롬프트와 함께 **IVR** 단계를 사용하세요.

자세한 내용은 *[대화형 음성 응답 (IVR)](interactive-voice-response-ivr-guide-triggers-actions.md)*을 참조하세요.

**Q: 데스크폰에서 다른 사용자의 내선으로 통화를 전환할 수 있나요? 내선이 전화기에 표시되나요?**

네—지원되는 SIP 핸드셋은 다른 사용자의 내선으로 **블라인드 전환**을 수행할 수 있습니다. **웜 전환**은 현재 **지원되지 않습니다**. 데스크폰 화면에 다른 사용자/내선을 표시하는 것은 현재 지원되지 않습니다.

웹에서의 지원 전환은 ***[웹 다이얼러로 발신 통화](outbound-calls-with-dialer-in-web-app-softphone-.md)***를 참조하세요.

**Q: 데스크폰의 음성메일 버튼에서 Hyperclass 음성메일을 확인할 수 있나요?**

Hyperclass로 라우팅되는 음성메일은 **대화(Conversations)**와 **리포팅(Reporting) → 통화 보고서(Call Reporting)**에서 검토됩니다. 전화기의 네이티브 음성메일 기능(있는 경우)은 별개이며 Hyperclass 음성메일에 **액세스하지 않습니다**.

자세한 내용은 *[**회사 및 사용자를 위한 음성메일**](voicemail-for-company-and-for-users.md)*을 참조하세요.

**Q: 모든 통화 녹음을 검토할 수 있는 단일 장소가 있나요?**

네. **리포팅(Reporting) → 통화 보고서(Call Reporting)**를 사용하여 통화 및 녹음의 통합 목록을 확인하세요. 각 연락처의 **대화(Conversations)** 스레드에서도 녹음을 열 수 있습니다. IVR 연결 통화에는 다른 통화 구간에 대한 여러 녹음이 포함될 수 있습니다.

**Q: 특정 SIP 데스크폰과의 알려진 호환성 문제가 있나요?**

표준 SIP 등록이 지원되는 경우 대부분의 오픈 SIP 전화기가 작동합니다. 네트워크 전제조건이 충족되는지 확인하세요 (예: SIP ALG 비활성화; SIP/RTP 허용). 확실하지 않다면 핸드셋 **제조사/모델 및 펌웨어**를 공유해 주시면 최적의 접근 방식을 안내해 드립니다.

**Q: 구성 청사진이나 모델별 설정 가이드가 있나요?**

이 문서의 단계를 따라 SIP 사용자/내선을 생성한 다음, 전화기의 SIP 계정 필드(일반적으로: SIP URI, **사용자명/내선**, **인증/비밀번호**)에 해당 자격 증명을 입력하세요. 전화기 모델을 제공해 주시면 가장 관련성 높은 지침을 공유해 드릴 수 있습니다.

**Q: 발신 통화는 가능하지만 수신 통화가 제대로 작동하지 않습니다. 무엇을 확인해야 하나요?**

발신 통화는 작동하지만 수신 통화가 안 된다면 Keep Alive 설정을 확인하는 것을 권장합니다. Keep Alive가 활성화되고 Options로 설정되어 있는지 확인하세요. 아직 구성되지 않았다면 이 설정을 업데이트하면 종종 수신 통화 문제가 해결됩니다.
계정(Account) → 고급(Advanced) → Keep Alive 유형(Keep Alive Type)으로 이동하여 이 설정을 업데이트할 수 있습니다.

---
*원문 최종 수정: Tue, 31 Mar, 2026 at 7:28 AM*  
*Hyperclass 사용 가이드 — hyperclass.ai*