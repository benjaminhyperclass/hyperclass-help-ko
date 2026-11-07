---
원문: /support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun
번역일: 2026-11-07
카테고리: 09-이메일
---

# Mailgun에서 특정 이메일의 전송 로그 확인하기

Mailgun으로 보낸 이메일의 전달 상태를 확인하고, 자주 생기는 전달 오류를 해결하는 방법을 안내해요. 이전에 반송된 주소, 실수로 구독을 취소한 경우, 인증되지 않은 이메일(DMARC 문제)을 다뤄요.

## Mailgun 전송 로그 확인하기

1. [app.mailgun.com/app/dashboard](https://app.mailgun.com/app/dashboard)에 로그인하세요.
2. **전송 중**을 클릭하세요.

   ![Mailgun 전송 중 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160535/original/JVr72sqsbd8goiu1yWyP9X8LxzQIFiymnA.png?1625007552)

3. **로그**를 클릭하세요.

   ![Mailgun 로그 메뉴 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160533/original/jMWfS1lnuChsOsRrZdbYVxkKEj_FwXl5Ww.png?1625007551)

4. 올바른 도메인이 선택되어 있는지 확인하세요.

   ![Mailgun 로그의 도메인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160536/original/4gc_ywO8KMIJ2gmt_r41V-pqblZouLsulA.png?1625007552)

5. **필터 추가**를 클릭하세요.

   ![필터 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695181/original/_cN2JqLI_-4mgq52yjw5XkN8wD6j70j-fw.png?1644453931)

6. 드롭다운 목록에서 **수신자**를 선택하고, 전달 상태를 확인할 이메일 주소를 붙여 넣으세요.

   ![수신자 필터 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695195/original/4e5JP7AlzSsBZYZOUHSn2mk7YQ0gtx0EAA.png?1644453944)

7. **필터**를 클릭하세요.

   ![필터 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695270/original/5B1sUhnEpr9-WLqcHMifkVuz0WUuxtyCsQ.png?1644454025)

## 결과 확인하기

1. 해당 이메일을 찾았으면 오른쪽의 톱니바퀴(⚙) 아이콘을 클릭하고 **Quick view**(빠른 보기)를 선택하세요.
2. 이메일 미리보기와 전달 상태가 표시돼요.

   ![Mailgun 로그 항목의 Quick view](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695369/original/C19SliRpd7Pl_5q67zgT2hTAWFXDSR3jrg.png?1644454139)

{% hint style="info" %}
상태가 **delivered**(전달 완료)로 나오는데 받는 사람이 이메일을 받지 못했다고 하면, 스팸 폴더를 확인해 보세요. 받는 쪽 이메일 서비스가 조용히 차단하고 있는지는 Mailgun 지원팀에 문의해 확인할 수 있어요.
{% endhint %}

## 자주 발생하는 오류

### 이전에 반송된 주소로 전달되지 않아요

**해결 방법:**

1. **전송 중 > Suppressions**(차단 목록)를 클릭하세요.
2. 맨 위에서 도메인을 선택하세요.
3. 수신자의 이메일 주소를 검색하세요.
4. 수신자를 선택한 뒤 오른쪽의 휴지통 아이콘을 클릭해 **반송** 탭에서 제거하세요.

### 수신자가 실수로 구독을 취소했어요

**해결 방법:** **Unsubscribes**(구독 취소) 탭으로 이동해 그곳에서 해당 이메일을 제거하세요.

![Mailgun의 Unsubscribes 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695886/original/EgH5LxHkk9DeQiKIUhWyFYFOyklyac8D7Q.png?1644454582)

### 사용자 지정 도메인에서 보낸 이메일이 인증되지 않았어요

**해결 방법:** 해당 사용자 지정 도메인의 DMARC를 none으로 설정하세요.

G Suite 이메일을 사용한다면 [여기에서 DMARC를 none으로 설정하는 방법](https://support.google.com/a/answer/10032169?hl=en)을 확인할 수 있어요.

### yahoo.com / hotmail.com / aol.com / outlook.com에서 보낸 이메일이 인증되지 않았어요

**임시 해결 방법:** 발신자 이메일을 yahoo.com, aol.com 같은 무료 이메일 도메인에서 본인 도메인이나 gmail.com으로 바꾸세요.

예를 들어 `name@yahoo.com`을 `name@gmail.com` 또는 `name@your_domain.com`으로 바꾸세요.

발신자 이메일 주소를 설정하는 위치는 캠페인 이메일의 발신자 이름·주소 설정 문서를 참고하세요.

## 자주 묻는 질문

### Mailgun 로그에서 이메일이 전혀 보이지 않아요. 왜 그런가요?
로그 화면에서 올바른 도메인이 선택되어 있는지, 필터와 날짜 범위에 실제 발송 시점이 포함되는지 다시 확인하세요. 로그는 한 번에 도메인 하나씩만 보여 줘요.

### 반송과 구독 취소는 어떻게 다른가요?
반송은 받는 쪽 메일 서비스가 메시지를 거부한 경우예요(없는 주소, 가득 찬 편지함 등). 구독 취소는 수신자가 직접 수신을 거부한 경우예요. 둘 다 이후 발송이 제한되지만, 제거하는 탭이 달라요. 반송은 **반송** 탭에서, 구독 취소는 **Unsubscribes** 탭에서 제거해요.

### Mailgun은 전송 로그를 얼마나 오래 보관하나요?
보관 기간은 Mailgun 요금제에 따라 달라요. 오래된 전달 내역을 확인해야 한다면 사용 중인 Mailgun 요금제의 로그 보관 기간을 확인하거나 Mailgun 지원팀에 직접 문의하세요.

### 여러 도메인의 로그를 한꺼번에 검색할 수 있나요?
아니요. **로그** 화면은 한 번에 도메인 하나씩만 필터링해요. 수신자 필터를 추가하기 전에 올바른 도메인이 선택되어 있는지 확인하세요(4단계).

### DMARC 때문에 "인증되지 않음" 오류가 생기는 이유가 뭔가요?
도메인에 엄격한 DMARC 정책(quarantine 또는 reject)이 있는데 발송 설정이 SPF/DKIM과 완전히 맞지 않으면, 메일 서비스가 해당 메시지를 인증되지 않은 것으로 표시해요. DMARC를 none으로 설정하면 인증 문제를 정리하는 동안 적용 강도가 느슨해져요.

### 이 내용을 확인하려면 제 Mailgun 계정이 꼭 있어야 하나요?
네. 로그를 보고 차단 목록을 직접 관리하려면, 발송 도메인에 연결된 Mailgun 계정과 대시보드에 접근할 수 있어야 해요.
