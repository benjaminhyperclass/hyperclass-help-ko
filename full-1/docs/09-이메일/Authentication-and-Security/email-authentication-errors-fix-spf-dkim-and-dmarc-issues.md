---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006793-email-authentication-errors-fix-spf-dkim-and-dmarc-issues
번역일: 2026-11-06
카테고리: 09-이메일
---

# 이메일 인증 오류 해결: SPF, DKIM, DMARC 설정하기

받는 쪽 메일 서버가 요구하는 인증 레코드를 설정하고 확인하는 방법을 안내해요. 이메일이 인증 실패로 반송될 때 이 문서를 따라 해 보세요.

## 어떤 문제인가요?

도메인이 받는 쪽 이메일 서버의 인증 검사를 통과하지 못해서 메일이 거부되고 있어요. SPF, DKIM, DMARC는 메일이 위조되지 않은 정상 메일인지 확인하는 보안 규약이에요. 이 인증이 실패하거나 설정되어 있지 않으면 Gmail, Outlook, Yahoo 같은 주요 이메일 서비스가 사용자를 스팸이나 피싱에서 보호하려고 메일을 거부해요.

## 빠른 진단: 인증 실패 메시지 확인하기

반송 메시지에 아래와 같은 문구가 보이면 인증 문제일 가능성이 커요. 반송 메시지는 영어로 표시돼요.

- "The sender's domain failed DMARC authentication, which is required by the recipient's server": 보낸 도메인이 받는 서버가 요구하는 DMARC 인증에 실패했어요.
- "Message rejected due to failing DMARC authentication or related sender policy checks": DMARC 인증 또는 관련 발신자 정책 검사에 실패해서 메일이 거부됐어요.
- "Email rejected due to failed or missing SPF or DMARC authentication for the sending domain": 발신 도메인의 SPF 또는 DMARC 인증이 실패했거나 없어서 거부됐어요.
- "The sender domain lacks proper SPF authentication, causing delivery to be blocked": 발신 도메인에 올바른 SPF 인증이 없어서 발송이 차단됐어요.
- "The sender's domain failed DKIM authentication, not meeting recipient's authentication standards": 발신 도메인이 DKIM 인증에 실패해서 받는 쪽 인증 기준을 충족하지 못했어요.
- "The From header domain does not align with authenticated SPF or DKIM domains": 보낸 사람 헤더의 도메인이 인증된 SPF 또는 DKIM 도메인과 일치하지 않아요.
- "Sender was not authenticated, so delivery to the group was blocked by recipient policy": 발신자가 인증되지 않아서 받는 쪽 정책에 따라 그룹 발송이 차단됐어요.
- "The sending server failed authentication checks or lacks valid security certificates": 발송 서버가 인증 검사에 실패했거나 유효한 보안 인증서가 없어요.

## 이메일 인증 이해하기

### 이메일 인증의 세 가지 축

- SPF(Sender Policy Framework): 내 도메인으로 메일을 보낼 수 있는 서버를 확인해요.
- DKIM(DomainKeys Identified Mail): 디지털 서명을 붙여서 메일이 진짜인지 확인해요.
- DMARC(Domain-based Message Authentication): SPF나 DKIM 검사에 실패했을 때 받는 쪽이 어떻게 처리할지 알려 줘요.
- 도메인 정렬(Domain Alignment): 발신자 주소가 인증된 발송 도메인과 일치해야 해요.

### 인증 실패 유형

SPF 실패

- DNS에 SPF 레코드가 없어요.
- SPF 레코드의 DNS 조회 횟수가 너무 많아요(10회 제한 초과).

DKIM 실패

- DKIM 키가 DNS에 등록되지 않았어요.
- DKIM 서명이 서로 맞지 않아요.

DMARC 실패

- DMARC 정책이 등록되지 않았어요.
- SPF/DKIM을 제대로 설정하지 않은 채 DMARC 정책을 "reject"로 설정했어요.
- 발신자 주소와 인증된 도메인 사이에 도메인 정렬 문제가 있어요.

## 단계별 인증 설정

### 1단계. 전용 도메인 설정하기

1. **이메일 설정** 열기
   - **설정 > 이메일 서비스 > Sending Domain**(발송 도메인)으로 이동해요.
   - **도메인 추가**를 클릭해요.
   - 도메인 이름을 입력해요(예: yourdomain.com).
2. 인증 레코드 확인하기
   - 하이퍼클래스가 필요한 DNS 레코드를 보여 줘요.
   - 제공된 SPF, DKIM, MX, CNAME, DMARC 레코드를 복사해요.
   - 참고할 수 있도록 이 페이지는 열어 두세요.

### 2단계. DNS 레코드 추가하기

1. DNS 제공업체에 접속하기
   - 도메인 등록 업체 또는 DNS 호스팅 업체에 로그인해요.
   - DNS 관리 화면이나 DNS 영역 편집기로 이동해요.
2. SPF 레코드 추가하기
   - 새 TXT 레코드를 만들어요.
   - 이름/호스트: `@`를 입력해요(루트 도메인이면 비워 둬도 돼요).
   - 값: 하이퍼클래스에 표시된 SPF 레코드를 복사해요. 보통 다음과 같은 내용이 들어 있어요: `v=spf1 include:spf.leadconnectorhq.com include:mailgun.org ~all`
3. DKIM 레코드 추가하기
   - 새 TXT 레코드를 만들어요.
   - 이름/호스트: 제공된 DKIM 셀렉터를 입력해요.
   - 값: DKIM 공개 키를 복사해요.
4. MX 레코드 추가하기
   - 새 MX 레코드를 만들어요.
   - 이름/호스트: 제공된 MX 셀렉터를 입력해요.
   - 값: MX 레코드를 복사해요.
5. 추적 URL용 CNAME 레코드 추가하기
   - 새 CNAME 레코드를 만들어요.
   - 이름/호스트: 제공된 CNAME 셀렉터를 입력해요.
   - 값: CNAME 레코드를 복사해요.
6. DMARC 레코드 추가하기
   - 새 TXT 레코드를 만들어요.
   - 이름/호스트: `_dmarc`를 입력해요.
   - 값: `v=DMARC1; p=none;`으로 시작해요.

DNS 변경 내용이 반영됐는지는 아래 항목으로 확인해요.

- 도메인 상태가 **인증됨**으로 표시돼요.
- DNS 조회 도구에서 레코드가 정상적으로 등록된 것으로 나와요.
- 인증 테스트 메일이 SPF/DKIM/DMARC 검사를 통과해요.
- 24~48시간 안에 반송률이 눈에 띄게 줄어요. <!-- 검토 필요: 원문 내용이 서로 다름 (아래 복구 일정 표에서는 반송률 감소를 1~7일 단계로 안내) -->

### 3단계. 인증 설정 확인하기

1. 상태 확인하기
   - **설정 > 이메일 서비스 > Sending Domain**(발송 도메인)으로 다시 돌아가요.
   - **도메인 인증** 버튼을 클릭해요.
   - 모든 인증 항목이 **인증됨**으로 표시될 때까지 기다려요.
2. 외부 도구로 확인하기
   - MXToolbox.com의 SPF/DKIM/DMARC 조회 도구를 사용해요.
   - Mail-Tester.com으로 인증 상태를 종합적으로 분석해요.
   - Gmail/Outlook 계정으로 테스트 메일을 보내고 헤더를 확인해요.

### 4단계. 발신자 주소 업데이트하기

1. 발신자 주소 맞추기
   - 모든 **발신자 주소**를 인증한 도메인으로 바꿔요.
   - 예: "noreply@anydomain.com"을 "noreply@yourdomain.com"으로 바꿔요.
2. 캠페인과 자동화 업데이트하기
   - 기존 이메일 캠페인과 시퀀스를 점검해요.
   - 진행 중인 모든 캠페인과 자동화의 **발신자 주소**를 업데이트해요.
   - 테스트 발송으로 인증이 통과되는지 확인해요.

## 복구 일정과 예상 결과

| 단계 | 진행 내용 | 예상 결과 |
| --- | --- | --- |
| 1단계: DNS 반영(2~48시간) | DNS 레코드가 전 세계로 퍼져요 | 하이퍼클래스에서 도메인이 인증된 것으로 표시되고, 외부 도구에서도 레코드가 확인돼요 |
| 2단계: 인증 인식(1~7일) | 이메일 서비스가 내 인증 설정을 인식해요 | 반송률이 줄고 인증 관련 거부가 멈춰요 |
| 3단계: 평판 쌓기(2~4주) | 인증된 상태로 꾸준히 발송하면 좋은 평판이 쌓여요 | 받은편지함 도달이 좋아지고 전달률이 올라가요 |

## 고급 인증 모니터링

### 꼭 알아 둘 모니터링 도구

무료 인증 검사 도구

- MXToolbox.com: SPF, DKIM, DMARC 레코드 조회 및 검증
- DMARC Analyzer: 무료 DMARC 레코드 검사 및 정책 검증
- Mail-Tester.com: 이메일 인증 종합 테스트
- Google Admin Toolbox: DNS 레코드 확인용 Dig 도구

### DMARC 리포트 설정

1. DMARC 레코드에 리포트를 받을 이메일 주소를 추가해요: `rua=mailto:dmarc-reports@yourdomain.com`
2. DMARC 리포트를 받을 수 있도록 이메일 전달을 설정해요.
3. Postmark의 DMARC Digests 같은 무료 DMARC 분석 도구를 사용해요.
4. 주간 리포트에서 인증 실패가 있는지 살펴봐요.

## 자주 하는 실수

피해야 할 경우

- SPF 레코드를 여러 개 만드는 경우: 도메인당 SPF 레코드는 하나만 쓸 수 있어요.
- 처음부터 DMARC reject 정책을 적용하는 경우: 모니터링을 위해 `p=none`으로 시작하세요.
- include 구문이 빠진 경우: SPF에 발송에 쓰는 모든 서비스가 포함되어 있는지 확인하세요.
- 서브도메인을 헷갈리는 경우: 발신자 주소의 도메인을 인증한 도메인과 정확히 일치시키세요.
- DNS 문법 오류: 불필요한 공백이나 따옴표가 들어가면 인증이 깨질 수 있어요.

## 그래도 해결되지 않나요?

인증 실패가 계속된다면 아래 순서로 확인해 보세요.

1. DNS 레코드를 다시 확인하세요. 여러 DNS 조회 도구로 모든 레코드가 올바르게 입력되고 반영됐는지 확인해요.
2. DMARC 리포트를 검토하세요. 실패 패턴을 분석해서 어떤 인증에 문제가 있는지 찾아요.
3. 다른 수신자로 테스트하세요. Gmail, Outlook, Yahoo로 각각 보내서 특정 서비스에서만 생기는 문제인지 확인해요.
4. 충돌하는 레코드가 없는지 확인하세요. 중복되거나 충돌하는 SPF/DKIM 레코드가 없어야 해요.

## 자주 묻는 질문

### DMARC 레코드의 "p=none"은 정확히 어떤 역할을 하나요?
DMARC를 모니터링 전용 모드로 두는 설정이에요. 인증에 실패한 메일도 그대로 전달되지만, 인증 실패에 대한 리포트를 받아 볼 수 있어요. "quarantine"이나 "reject"로 바꾸기 전에 메일 흐름을 안전하게 살펴볼 수 있어요.

### 루트 도메인 대신 서브도메인에 SPF, DKIM, DMARC를 설정해도 되나요?
네, 가능해요. 특히 마케팅 메일은 발송 평판을 주 도메인과 분리할 수 있어서 서브도메인을 쓰도록 권장하는 경우가 많아요. 인증한 도메인 또는 서브도메인과 **발신자 주소**가 일치하는지만 꼭 확인하세요.

### 추적 URL에 CNAME 레코드가 왜 필요한가요?
추적용 CNAME을 설정하면 클릭·열람 추적 링크가 외부 서비스 주소가 아니라 내 도메인에서 보내는 것처럼 보여요. 브랜딩과 전달률에 모두 도움이 돼요.

### "p=none"은 얼마나 유지한 뒤 quarantine이나 reject로 바꿔야 하나요?
대부분의 발송자는 정책을 강화하기 전에 최소 2~4주 동안 DMARC 리포트를 보면서 정상적인 발송 경로가 모두 인증을 통과하는지 확인해요. 설정에 문제가 있는데 너무 일찍 "reject"로 바꾸면 내 메일이 차단될 수 있어요.

### 인증만 고치면 전달률이 바로 좋아지나요?
인증은 메일이 거부되는 큰 원인 하나를 없애 줘요. 다만 전달률은 발신자 평판, 목록 품질, 콘텐츠에도 영향을 받아요. 인증 관련 반송은 금방 멈추지만, 받은편지함 도달이 전반적으로 좋아지는 데는 이후 몇 주가 걸릴 수 있어요.

### SPF 레코드의 DNS 조회 횟수가 너무 많으면 어떻게 되나요?
SPF는 DNS 조회를 최대 10회까지 허용해요. 이 한도를 넘으면 "permerror"가 발생해요. 이 경우 발송 경로가 정상이어도 SPF가 통째로 실패할 수 있어요. 한도 안에 들어오도록 include를 합치거나 flatten(조회 없이 IP로 풀어 쓰기)하세요.
