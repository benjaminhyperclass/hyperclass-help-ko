---

번역일: 2026-04-07
카테고리: 09-이메일 > LC-이메일
---

# 이메일 인증 - DMARC

2024년 2월부터 [Gmail](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)과 [Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)에서 이메일에 DKIM과 DMARC 인증을 필수로 요구합니다. 모든 이메일 발신자에게 DKIM과 DMARC 설정을 강력히 권장합니다.

자세한 내용은 2024년 Google과 Yahoo 인증 변경사항 블로그 게시물을 확인하세요.

**목차**

- [DMARC란 무엇인가요?](#dmarc란-무엇인가요)
- [DMARC 레코드란 무엇인가요?](#dmarc-레코드란-무엇인가요)
- [DMARC는 어떻게 작동하나요?](#dmarc는-어떻게-작동하나요)
- [LC 이메일 공유 도메인 사용자를 위한 DMARC 이메일 오류 해결](#lc-이메일-공유-도메인-사용자를-위한-dmarc-이메일-오류-해결)

## **DMARC란 무엇인가요?**

DMARC(Domain-based Message Authentication Reporting and Conformance)는 SPF와 DKIM 방식을 결합하여 이메일을 검증하는 기술 도구입니다. 무료로 사용할 수 있으며 피싱과 같은 이메일 사기를 방지하는 데 도움이 됩니다. 2012년에 도입된 이 기술은 도메인 소유자가 DMARC 레코드의 정책(p=)을 통해 자신의 이메일 도메인이 무단으로 사용되는 경우를 관리하는 방법을 지정할 수 있게 해줍니다.

**P = NONE**
이메일 트래픽을 모니터링합니다. 추가 조치는 취하지 않습니다.

**P = QUARANTINE**
무단 이메일을 스팸 폴더로 보냅니다.

**P = REJECT**
최종 정책이며 DMARC 구현의 궁극적인 목표입니다. 이 정책은 무단 이메일이 전혀 전달되지 않도록 보장합니다.

---

## **DMARC 레코드란 무엇인가요?**

DMARC 레코드는 _dmarc라는 TXT 타입 DNS 항목에 저장되며, 이메일 서버를 위한 정책과 설정을 설명합니다. 세미콜론으로 구분된 값이 할당된 태그들로 구성됩니다.

다음은 기본적인 DMARC 레코드의 예시입니다:
v=DMARC1; p=none;

DMARC 레코드 설정에 사용되는 주요 태그들은 다음과 같습니다:

**v (DMARC 버전):**
- 기본값: DMARC1
- **의미:** DMARC 프로토콜 버전을 나타냅니다. 항상 "DMARC1"로 설정해야 합니다. 누락되거나 잘못된 경우 전체 DMARC 레코드가 무시됩니다.

**p (정책):**
- **기본값:** none
- **의미:** DMARC 검사에 실패한 이메일에 대한 조치를 지정합니다.
  - none: 기존 흐름에 영향을 주지 않고 피드백만 수집합니다.
  - quarantine: 의심스러운 이메일을 처리하며, 주로 스팸 폴더로 보냅니다.
  - reject: 실패한 모든 이메일을 완전히 거부합니다.

**adkim (DKIM 정렬 모드):**
- 기본값: r
- **의미:** DKIM 서명의 정렬 모드를 지정합니다.
  - "r" (완화 모드): 공통 조직 도메인을 공유하는 DKIM 도메인이 통과할 수 있습니다.
  - "s" (엄격 모드): DKIM과 이메일 헤더-From 도메인 간 정확한 일치를 요구합니다.

**aspf (SPF 정렬 모드):**
- **기본값**: r
- **의미**: adkim과 유사하지만 SPF 인증용입니다.
  - "r" (완화 모드): 공통 조직 도메인을 공유하는 SPF 도메인이 통과할 수 있습니다.
  - "s" (엄격 모드): SPF와 이메일 헤더-From 도메인 간 정확한 일치를 요구합니다.

**sp (하위 도메인 정책):**
- **기본값:** p= 값
- **의미:** 이 DMARC 레코드 하위의 하위 도메인에 대한 정책을 명시적으로 게시할 수 있습니다.

**fo (법의학 보고 옵션):**
- **기본값**: 0
- **의미**: 법의학 보고서 생성 조건을 결정합니다.
  - "0": 모든 기본 인증 메커니즘이 DMARC 통과 결과를 생성하지 못할 때 보고서를 생성합니다.
  - "1": 어떤 메커니즘이라도 실패하면 보고서를 생성합니다.
  - "d": DKIM 서명이 실패하면 보고서를 생성합니다.
  - "s": SPF가 실패하면 보고서를 생성합니다.

**ruf (법의학 보고서용 URI):**
- **기본값**: none
- **의미:** 법의학 보고서를 보낼 위치를 지정합니다("mailto:address@example.org" 형태의 URI).

**rua (XML 피드백용 URI):**
- **기본값**: none
- **의미**: XML 피드백 보고서를 보낼 위치를 지정합니다("mailto:address@example.org" 형태의 URI).

**rf (법의학 보고서의 보고 형식):**
- **기본값**: afrf
- **의미**: 개별 법의학 보고서의 보고 형식을 결정합니다.

**pct (백분율):**
- **기본값**: 100
- **의미**: 정책이 적용되어야 하는 이메일 실패의 백분율을 지정합니다. 백분율 태그가 적용되려면 정책이 "quarantine" 또는 "reject"여야 합니다.

**ri (보고 간격):**
- **기본값**: 86400
- **의미**: 집계 XML 보고서를 받는 빈도를 설정합니다.

각 태그는 DMARC 정책과 인증 및 피드백 메커니즘을 정의하는 특정 역할을 수행하여 이메일 보안과 실패한 검사의 적절한 처리를 보장합니다.

DMARC 레코드 생성에 도움이 필요하시면 [DMARC 생성기 도구](https://dmarcian.com/dmarc-record-wizard/) 사용을 권장합니다.

---

## **DMARC는 어떻게 작동하나요?**

**인증**:
- SPF/DKIM 검사: 수신 서버가 SPF 또는 DKIM 인증 방법을 검증합니다.
- 도메인 정렬: SPF 도메인(Return-Path) 또는 DKIM 도메인(d=)이 이메일 헤더의 "From" 도메인과 일치하는지 확인합니다.
- DMARC 정책: "From" 도메인의 DNS 레코드에서 DMARC 정책을 추출하고 적용합니다.

**설정 예시:**

SPF가 통과하고 "From" 도메인과 일치하면 DMARC 인증이 통과합니다.
`v=DMARC1; p=none; aspf=r;`

DKIM이 통과하고 "From" 도메인과 일치하면 DMARC 인증이 통과합니다.
`v=DMARC1; p=none; adkim=s;`

SPF와 DKIM이 모두 실패하면 DMARC 인증이 실패합니다.
`v=DMARC1; p=reject;`

**정렬 모드:**
- 완화(r) 모드: SPF/DKIM 검사에서 하위 도메인을 허용하며, "From" 도메인과 비교합니다.
- 엄격(s) 모드: SPF/DKIM 도메인과 "From" 도메인의 정확한 일치를 요구합니다.

**보고:**
- 집계 보고서: rua 태그를 사용하여 지정된 이메일 주소로 전송되는 정기 집계 보고서에 통과/실패 결과가 포함됩니다.
- 법의학 보고서: 지정된 주소(ruf)로 전송되는 상세한 실패 보고서이지만, 민감한 정보 우려로 인해 많은 제공업체에서 전송을 피합니다.
- 보고 간격(ri): 집계 XML 보고서 전송 빈도를 결정합니다.

**설정 예시:**

24시간마다 집계 보고서 전송:
`v=DMARC1; p=none; rua=mailto:postmaster@mydomain.com; ri=86400;`

7일마다 법의학 보고서 전송:
`v=DMARC1; p=none; ruf=mailto:postmaster@mydomain.com; ri=604800;`

**적합성(정책):**
- DMARC 정책(p): DMARC 검사 실패를 서버가 처리하는 방법을 정의합니다.
- 백분율(pct): DMARC 검증 대상 메시지 트래픽의 백분율을 지정합니다.

**설정 예시:**

테스트를 위해 quarantine 정책과 50% 검증으로 시작:
`v=DMARC1; p=quarantine; pct=50;`

나중에 reject 정책으로 전환하고 완전한 적용을 위해 pct 태그 제거:
`v=DMARC1; p=reject;`

각 설정은 이메일을 인증하고 발신자의 요구사항과 검증 단계에 따라 보고 및 적용 수준의 유연성을 허용하면서 실패 처리에 대한 정책을 정의하는 역할을 합니다.

---

## **LC 이메일 공유 도메인 사용자를 위한 DMARC 이메일 오류 해결**

LeadConnector 이메일 시스템의 공유 도메인에서 이메일을 보내는 데 DMARC는 필요하지 않습니다.

LC 이메일 시스템으로 전환했거나 자체 Mailgun/SMTP를 설정하지 않은 경우, 모든 이메일이 LC 공유 도메인을 통해 전송됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029885740/original/XbxWJPF5hf31tJ4qc-FOom23fD_efkCL9A.jpg?1721914780)

오류 메시지 내용:

"발신 주소의 도메인(kate@gohighlevel.com)에 p=reject DMARC 정책이 있습니다. 전용 발신 도메인이 설정되지 않은 경우, 대부분의 인박스 제공업체가 메시지를 거부하여 반송률이 높아집니다. 반송률 증가를 피하려면 회사 이메일을 사용하세요."

실제 DMARC 레코드: v=DMARC1; p=reject"

**문제 해결을 위해 DNS에서 DMARC 레코드를 p=none 정책으로 임시 변경하세요**

위의 DMARC 오류 메시지에는 p=reject 또는 p=quarantine이 있습니다. 이는 DMARC에 실패한 이메일이 인박스 폴더로 전송되는 것을 방지합니다. DMARC가 실패하더라도 메시지가 전달되도록 하려면 DNS 제공업체에서 DMARC의 정책을 p=none으로 변경해야 합니다. 더 완화된 정책으로 이동하는 것은 권장되지 않으므로 이 변경은 임시적이어야 합니다.

---

**추가 리소스:**

- 규정 준수 달성: 2024년 Google과 Yahoo의 이메일 발신자 요구사항 충족
- [이메일 발송 가이드: 이메일 모범 사례 및 이메일 워밍업]([email-sending-guide-email-best-practices-email-warm-up](email-sending-guide-email-best-practices-email-warm-up.md))

---
*원문 최종 수정: Thu, 25 Jul, 2024 at 8:44 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*