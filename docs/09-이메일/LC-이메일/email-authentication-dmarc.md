---
원문: /support/solutions/articles/48001224630-email-authentication-dmarc
번역일: 2026-11-06
카테고리: 09-이메일
---

# 이메일 인증 — DMARC 이해하고 설정하기

DMARC가 무엇인지, 레코드를 어떻게 설정하는지, 공유 발신 도메인으로 메일을 보낼 때 생기는 DMARC 실패를 어떻게 해결하는지 알려 드려요.

{% hint style="warning" %}
**Gmail·Yahoo 필수 요건**

2024년 2월부터 [Gmail](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)과 [Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)는 모든 발신자에게 DKIM과 DMARC 인증을 요구해요. 둘 다 설정하길 강력히 권장해요.

자세한 내용은 [2024년 Google·Yahoo 인증 정책 변경](../../06-사이트/기타/achieving-compliance-meeting-google-and-yahoo-s-email-sender-requirements-in-202.md) 문서를 참고하세요.
{% endhint %}

## 이 문서에서 다루는 내용

DMARC(Domain-based Message Authentication Reporting and Conformance)는 SPF와 DKIM을 함께 사용해 이메일을 검증해요. 도메인 소유자는 인증되지 않은 이메일을 어떻게 처리할지 정할 수 있어요. 모니터링만 할 수도 있고, 스팸함으로 보내거나, 아예 거부할 수도 있어요.

이 문서에서는 다음 내용을 설명해요.

- DMARC가 무엇인지
- DMARC 레코드를 읽고 설정하는 방법
- 인증이 진행되는 흐름
- 공유 도메인으로 보낼 때 DMARC 실패를 해결하는 방법

## DMARC란?

DMARC는 SPF와 DKIM을 함께 사용해 이메일을 검증하는 무료 기술 표준이에요. 2012년에 도입되었어요. 도메인 소유자가 정책 태그(`p=`)로 도메인을 무단 사용한 메일을 어떻게 처리할지 정할 수 있어서, 피싱 같은 이메일 사기를 막는 데 도움이 돼요.

정책은 세 가지 단계가 있어요.
`p=none` — 모니터링만 해요. 인증에 실패한 메시지에 아무 조치도 하지 않아요. 처음에 이메일 흐름을 파악할 때 유용해요.`p=quarantine` — 스팸함으로 보내요. 인증되지 않은 이메일이 받는 사람의 받은편지함 대신 스팸함이나 정크 폴더로 가요.`p=reject` — 완전히 차단해요. 가장 엄격한 정책이자 최종 목표로 권장하는 정책이에요. 인증되지 않은 이메일은 아예 전달되지 않아요.

## DMARC 레코드란?

DMARC 레코드는 이름이 `_dmarc`인 TXT 유형의 DNS 항목에 들어가요. 태그에 값을 지정하고 세미콜론(;)으로 구분해서 써요. 가장 단순하게 쓸 수 있는 레코드는 다음과 같아요.

예시 — 최소 DMARC 레코드

```
v=DMARC1; p=none;
```

아래 표에서 사용할 수 있는 모든 태그와 기본값을 확인하세요.

| 태그 | 이름 | 기본값 | 설명 |
| --- | --- | --- | --- |
| `v` | DMARC 버전 | `DMARC1` | 항상 "DMARC1"이어야 해요. 없거나 잘못되면 레코드 전체가 무시돼요. |
| `p` | 정책 | `none` | DMARC 검사에 실패한 이메일에 적용할 조치예요. `none`(모니터링), `quarantine`(스팸 처리), `reject`(차단) 중에서 골라요. |
| `adkim` | DKIM 정렬 | `r` | `r`(느슨함): 같은 조직 도메인(Organizational Domain)을 공유하는 DKIM 도메인은 통과해요. `s`(엄격함): 도메인이 정확히 일치해야 해요. |
| `aspf` | SPF 정렬 | `r` | `adkim`과 같지만 SPF에 적용돼요. SPF 도메인과 From 도메인을 `r`(느슨함) 또는 `s`(엄격함)로 비교해요. |
| `sp` | 하위 도메인 정책 | `p=` 값 | 이 DMARC 레코드 아래 하위 도메인에 적용할 정책이에요. 설정하지 않으면 상위 도메인의 `p=` 값을 따라요. |
| `fo` | 포렌식 리포트 옵션 | `0` | `0`: 모든 인증 방식이 실패하면 리포트해요. `1`: 하나라도 실패하면 리포트해요. `d`: DKIM이 실패하면 리포트해요. `s`: SPF가 실패하면 리포트해요. |
| `ruf` | 포렌식 리포트 주소 | 없음 | 포렌식(실패) 리포트를 받을 주소예요. 형식: `mailto:address@example.org` |
| `rua` | 집계 리포트 주소 | 없음 | 집계 XML 피드백 리포트를 받을 주소예요. 형식: `mailto:address@example.org` |
| `rf` | 리포트 형식 | `afrf` | 개별 포렌식 리포트의 형식이에요. |
| `pct` | 적용 비율 | `100` | 실패한 메시지 중 정책을 적용할 비율이에요. `quarantine` 또는 `reject`와 함께 쓸 때만 유효해요. |
| `ri` | 리포트 주기 | `86400` | 집계 XML 리포트를 받는 주기(초)예요. 기본값 86400초는 24시간이에요. |

{% hint style="info" %}
**팁**

DMARC 레코드를 어떻게 작성할지 모르겠다면 무료 [DMARC 생성 도구](https://dmarcian.com/dmarc-record-wizard/)로 올바른 레코드를 만들 수 있어요.
{% endhint %}

## DMARC는 어떻게 동작하나요?

DMARC는 인증, 리포트, 적합성 검사(정책 적용)의 세 단계로 동작해요.각 설정은 이메일을 인증하고, 실패했을 때 어떻게 처리할지 정해요.

### 1단계. 인증

- SPF / DKIM 검사: 받는 서버가 SPF 또는 DKIM 인증 방식을 확인해요.
- 도메인 정렬: SPF 도메인(Return-Path) 또는 DKIM 도메인(`d=`)이 이메일 헤더의 From 도메인과 일치(정렬)하는지 확인해요.
- DMARC 정책: From 도메인의 DNS 레코드에서 DMARC 정책을 가져와 적용해요.

예시 — 인증

SPF가 통과하고 From 도메인과 정렬되면 DMARC가 통과해요.

```
v=DMARC1; p=none; aspf=r;
```

DKIM이 통과하고 From 도메인과 정렬되면 DMARC가 통과해요.

```
v=DMARC1; p=none; adkim=s;
```

SPF와 DKIM이 모두 실패하면 DMARC도 실패해요.

```
v=DMARC1; p=reject;
```

### 2단계. 정렬 모드

- 느슨함(`r`): SPF/DKIM 검사에서 하위 도메인을 허용하고 From 도메인과 비교해요. 같은 조직 도메인을 공유하는 하위 도메인은 통과해요.
- 엄격함(`s`): SPF/DKIM 도메인이 From 도메인과 정확히 일치해야 해요. 하위 도메인 예외는 없어요.

### 3단계. 리포트

- 집계 리포트(`rua`): 통과/실패 결과를 담은 XML 리포트를 주기적으로 `rua` 태그에 지정한 주소로 보내요.
- 포렌식 리포트(`ruf`): 실패 상세 리포트를 `ruf` 주소로 보내요. 개인정보 보호 문제로 많은 서비스 업체가 이 리포트를 제한해요.
- 리포트 주기(`ri`): 집계 XML 리포트를 얼마나 자주 보낼지 정해요. 기본값은 86400초(24시간)예요.

예시 — 리포트

24시간마다 집계 리포트를 받아요.

```
v=DMARC1; p=none; rua=mailto:postmaster@mydomain.com; ri=86400;
```

7일마다 포렌식 리포트를 받아요.

```
v=DMARC1; p=none; ruf=mailto:postmaster@mydomain.com; ri=604800;
```

### 4단계. 적합성 검사(정책 적용)

- DMARC 정책(`p`): DMARC 검사에 실패한 이메일을 받는 서버가 어떻게 처리할지 정해요. `none`, `quarantine`, `reject` 중에서 골라요.
- 적용 비율(`pct`): 실패한 메시지 중 몇 퍼센트에 정책을 적용할지 정해요. 단계적으로 적용할 때 유용해요.

예시 — 단계적 적용

테스트를 위해 `quarantine`을 50%에만 적용해요.

```
v=DMARC1; p=quarantine; pct=50;
```

이후 `reject`를 전체에 적용해요.

```
v=DMARC1; p=reject;
```

## 공유 도메인에서 DMARC 실패 해결하기

{% hint style="info" %}
하이퍼클래스 이메일 시스템의 공유 도메인으로 이메일을 보낼 때는 DMARC가 필요하지 않아요.
{% endhint %}

하이퍼클래스 이메일 시스템으로 전환했거나 직접 Mailgun이나 SMTP를 설정하지 않았다면, 모든 이메일이 공유 도메인으로 발송돼요. 이때 **발신자 주소**의 도메인에 엄격한 DMARC 정책(`p=reject` 또는 `p=quarantine`)이 설정되어 있으면 아래와 같은 오류가 나타날 수 있어요.

![이메일 발송 화면에 표시된 DMARC 정책 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029885740/original/XbxWJPF5hf31tJ4qc-FOom23fD_efkCL9A.jpg?1721914780)

공유 도메인을 사용할 때 표시되는 DMARC `p=reject` 오류

**오류 메시지**

> "발신자 주소의 도메인에 `p=reject` DMARC 정책이 설정되어 있어요. 전용 발신 도메인을 설정하지 않으면 대부분의 받는 메일 서비스가 메시지를 거부해서 반송이 크게 늘어날 수 있어요. 반송 증가를 막으려면 회사 이메일을 사용하세요."

현재 DMARC 레코드: `v=DMARC1; p=reject`

### 해결 방법

DMARC 정책을 임시로 `p=none`으로 바꿔요.

1. DNS 제공업체에 로그인해요.
2. `_dmarc` TXT 레코드를 열어 정책을 `p=none`으로 수정해요.

이렇게 하면 DMARC가 실패해도 메시지가 전달돼요. 그동안 전용 발신 도메인을 설정하면 돼요.

{% hint style="warning" %}
`p=none`으로 낮추면 도메인 스푸핑(사칭)에 대한 보호 수준이 낮아져요. 임시 조치로만 사용하고, 가능한 한 빨리 전용 발신 도메인을 설정해서 DMARC를 다시 완전하게 적용하세요.
{% endhint %}

## 자주 묻는 질문

### 이메일을 보내려면 DMARC가 꼭 필요한가요?

이메일을 보내는 데 DMARC가 반드시 필요한 것은 아니에요. 다만 Gmail과 Yahoo는 대량 발신자(하루 5,000통 이상)에게 DMARC를 요구해요.그보다 적게 보내더라도 DMARC를 설정하면 전달률이 좋아지고 도메인을 스푸핑으로부터 보호할 수 있어요.

### `p=quarantine`과 `p=reject`는 어떻게 다른가요?

`p=quarantine`은 실패한 메시지를 받는 사람의 스팸함으로 보내요. 그래서 받는 사람이 메시지를 찾아볼 수 있어요. `p=reject`는 받는 서버가 메시지를 완전히 차단하도록 지시해서, 받는 사람에게 아예 전달되지 않아요.

### DMARC 레코드는 어디에 추가하나요?

도메인의 DNS 설정에서 TXT 레코드를 추가해요. 호스트/이름 칸에는 `_dmarc`를 입력하고, 값에는 DMARC 정책 문자열(예: `v=DMARC1; p=none;`)을 입력해요. DNS 제공업체의 관리 화면에서 변경할 수 있어요.

### SPF와 DKIM을 설정했는데 DMARC가 실패하는 이유는 뭔가요?

DMARC는 인증과 정렬이 모두 필요해요. SPF나 DKIM이 기술적으로 통과해도, 인증된 도메인이 이메일 헤더의 From 도메인과 정렬(일치)하지 않으면 DMARC는 실패해요. SPF의 Return-Path 도메인 또는 DKIM의 `d=` 도메인이 발송에 사용하는 From 도메인과 같은지 확인하세요.

### 개인 Gmail이나 Yahoo 주소를 **발신자 주소**로 써도 되나요?

아니요. Gmail과 Yahoo는 자사 도메인에 엄격한 DMARC 정책(`p=reject`)을 적용해요. 외부 플랫폼에서 @gmail.com이나 @yahoo.com 주소로 이메일을 보내면 메시지가 거부돼요. **발신자 주소**에는 항상 직접 소유하고 관리하는 도메인을 사용하세요.

### DMARC 레코드를 바꾸면 얼마나 지나야 적용되나요?

DNS 변경은 보통 15분에서 1시간 안에 반영돼요. 다만 DNS 제공업체와 레코드의 TTL 설정에 따라 전 세계에 완전히 반영되기까지 최대 48시간이 걸릴 수 있어요.

### `p=reject`까지 가는 권장 순서는 어떻게 되나요?

먼저 `p=none`으로 시작해서 집계 리포트를 모으고 이메일 흐름을 파악하세요. 정상적인 발송 출처가 모두 통과하면 `p=quarantine; pct=25`로 바꾸고 비율을 조금씩 올려요. 정상 메일이 모두 통과한다고 확신하면 `p=reject`로 바꿔 완전하게 적용하세요.

## 추가 자료

- [Google·Yahoo 이메일 발신자 요건 충족하기 (2024년)](../../06-사이트/기타/achieving-compliance-meeting-google-and-yahoo-s-email-sender-requirements-in-202.md)
- [이메일 발송 가이드: 모범 사례와 워밍업](email-sending-guide-email-best-practices-email-warm-up.md)
