---
원문: /support/solutions/articles/48001223053-login-as-user-agency-admin-only-
번역일: 2026-11-07
카테고리: 11-설정
---

# 사용자로 로그인하기 (에이전시 관리자 전용)

에이전시 관리자가 다른 사용자로 로그인해 문제 해결, 설정 변경, 고객 응대를 직접 처리하는 방법을 안내해요. 예전에는 사용자 계정에서 작업하려면 로그아웃과 로그인을 여러 번 반복해야 했어요. 이 기능을 쓰면 그럴 필요가 없어요.

{% hint style="info" %}
에이전시 관리자만 쓸 수 있어요. 다른 역할의 사용자에게는 이 옵션이 보이지 않아요.

에이전시 권한에서 해당 사용자의 **Enable Login As**(다른 사용자로 로그인 허용) 권한이 켜져 있어야 해요. 꺼져 있으면 **로그인** 버튼이 나타나지 않아요.
{% endhint %}

## 사용자로 로그인 기능이란?

사용자로 로그인 기능을 쓰면 에이전시 관리자가 사용자의 로그인 정보 없이도 해당 사용자로 서브 계정에 들어갈 수 있어요.

---

## 누가 쓸 수 있나요?

에이전시 관리자만 쓸 수 있어요. 다른 역할의 사용자에게는 이 옵션이 보이지 않아요.

**로그인** 옵션을 볼 수 있는지는 사용자별 권한으로 정해져요. 에이전시 소유자와 관리자는 기본적으로 **Enable Login As** 권한이 켜져 있어요. 어떤 관리자에게 이 권한을 끄면, 그 관리자에게는 **로그인** 옵션이 보이지 않아요.

![Enable Login As 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059903617/original/NI_ngZZL3eOdlRTPuB1OTSOghKoIEA_wOQ.png?1764855449)

---

## 사용 방법

에이전시 관리자가 사용자로 로그인하는 순서예요.

1. 오른쪽 위에 있는 프로필 아이콘을 클릭하세요.

   ![오른쪽 위 프로필 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034618433/original/px4vo_6QMMjQ_ZYpHxTVqpwU-7sKjkZuwQ.png?1728889199)

2. **로그인** 버튼을 클릭해 접속할 사용자 계정을 선택하는 화면을 여세요.

   ![로그인 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034618460/original/IJ4niJOLeeZr5yXX5wFVv0xL2-TVzn9iTQ.png?1728889222)

3. 로그인할 사용자를 선택하세요. 검색창에 사용자 이름이나 이메일 주소를 입력해도 되고, 목록을 스크롤해서 찾아도 돼요.

   ![사용자 검색 및 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034618833/original/nt6472FJ6iC-2PItze1sonlfhqQgAFdmxA.png?1728889567)

---

## 로그인한 뒤에는 이렇게 쓰세요

다른 사용자로 로그인하면, 예전에는 사용자가 직접 로그인해야 했던 변경 작업을 에이전시 관리자가 계정에서 모두 처리할 수 있어요.

![사용자로 로그인해 작업하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255768432/original/eeqNbXO851vH6i5A9-02i9A_b6Sko0nb6g.gif?1665410588)

계정 전환 옵션을 쓰면 사용자 계정에서 에이전시 관리자 계정으로 다시 돌아갈 수도 있어요.

이 기능에는 검색 기능도 있어요. 사용자의 이메일 주소나 이름으로 검색해서 해당 사용자로 로그인할 수 있어요.

---

## 자주 묻는 질문

### 사용자로 로그인해서 에이전시 관리자가 변경한 내용은 감사 로그에 어떻게 기록되나요?

이번 출시의 첫 번째 단계에서는 **감사 로그** 페이지에 에이전시 관리자가 아니라 계정 사용자의 정보가 변경 기록으로 남아요. 다음 단계가 개발되면 에이전시 관리자와 계정 사용자의 정보가 모두 감사 로그에 기록될 예정이에요.

### "로그인" 옵션이 보이지 않아요.

해당 사용자의 **Enable Login As** 권한이 꺼져 있을 수 있어요. 에이전시 소유자나 관리자에게 **사용자 관리** 권한에서 이 권한을 켜 달라고 요청하세요. 권한이 꺼져 있으면 옵션이 보이지 않아요.

자세한 내용은 을 참고하세요.
