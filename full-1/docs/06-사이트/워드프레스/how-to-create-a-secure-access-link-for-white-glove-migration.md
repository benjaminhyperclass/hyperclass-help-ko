---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008151-how-to-create-a-secure-access-link-for-white-glove-migration
번역일: 2026-11-06
카테고리: 06-사이트
---

# White-Glove Migration용 보안 접근 링크 만들기

WordPress 사이트를 하이퍼클래스 전문가에게 맡겨 옮길 때, 아이디와 비밀번호 대신 보안 접근 링크를 전달하는 방법을 안내해요.

White-Glove Migration(하이퍼클래스 전문가가 WordPress 사이트를 대신 옮겨 주는 서비스)을 이용하면 하이퍼클래스 전문가가 사이트 이전을 맡아서 해 줘요. WordPress 아이디와 비밀번호를 공유하는 대신, 하이퍼클래스 마이그레이터 플러그인으로 보안 접근 링크를 만들어 전달하면 돼요.

이 링크로 하이퍼클래스 전문가가 사이트에 로그인해 이전 작업을 진행해요. 링크는 직접 정한 시간이 지나면 자동으로 만료되고, 언제든 폐기할 수 있어요. 보안을 위해 하이퍼클래스 전문가만 이 링크를 쓸 수 있어요. 관리자 권한이 있는 링크지만, 다른 사람은 이 링크로 사이트에 로그인할 수 없어요.

## 시작하기 전에

이전할 WordPress 사이트의 관리자 권한이 필요해요.

## 1단계. 하이퍼클래스 마이그레이터 플러그인 다운로드하고 설치하기

1. [하이퍼클래스 마이그레이터 플러그인](https://storage.googleapis.com/preview-production-assets/wordpress/lc-migrator/lc-migrator-production.zip)을 다운로드하세요. .zip 파일로 저장되는데, 압축은 풀지 마세요.

2. WordPress 관리자 화면에서 **Plugins > Add Plugin**(플러그인 > 새로 추가)으로 이동하세요.

![WordPress 플러그인 메뉴의 Add Plugin](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279632/original/8xIjyyZh2DNc6W244o07Yqvni8UkcDZXWw.png?1782203059)

3. **Upload Plugin**(플러그인 업로드)을 클릭하세요.

![Upload Plugin 버튼이 있는 Add Plugins 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279641/original/JSevGkQqhYnCLRCX271VxvZzORL_HofxzQ.png?1782203060)

4. **Choose File**(파일 선택)을 클릭해 방금 받은 .zip 파일을 고른 다음, **Install Now**(지금 설치)를 클릭하세요.

![파일 선택과 Install Now 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279634/original/HHBO0bizX4h5F6FHdBntl_1fGKaLJoVCzA.png?1782203059)

5. 설치가 끝나면 **Activate Plugin**(플러그인 활성화)을 클릭하세요.

![설치 완료 후 Activate Plugin 버튼이 보이는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279633/original/fLoCMPohjHcqOsqrDeTcDLrOlvLdsuhwcw.png?1782203059)

## 2단계. 보안 접근 링크 만들기

6. WordPress 관리자 왼쪽 사이드바에서 **하이퍼클래스 마이그레이터**를 여세요. **Welcome**(환영) 화면이 나타나요.

![하이퍼클래스 마이그레이터 Welcome 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279645/original/lxraKMdgJZ0g4_Fhr6iWlVdxn7m_4SdQzQ.png?1782203060)

7. **Generate secure access link**(보안 접근 링크 생성)를 클릭하세요. 이 단계에서는 계정에 로그인하지 않아도 돼요.

8. **Link active for**(링크 유효 기간)에서 링크를 유지할 기간을 고르세요. 24시간부터 최대 7일까지 선택할 수 있고, 기본값은 3일이에요. 이 기간이 지나면 링크가 자동으로 만료돼요. 그전에 직접 폐기할 수도 있어요.

{% hint style="info" %}
금요일, 토요일, 일요일에 링크를 만들면 최소 기간이 4일이에요. 업무 주가 시작된 뒤에도 하이퍼클래스 전문가가 링크를 쓸 수 있도록 하기 위해서예요.
{% endhint %}

![링크 유효 기간을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279646/original/aPt3X1TosjtzW7xku-AP77VATrJHRQhsBw.png?1782203061)

9. 안내 문구를 확인하세요. 이 링크는 전체 관리자 권한을 주며, 하이퍼클래스 전문가만 쓸 수 있고 다른 사람은 이 링크로 사이트에 로그인할 수 없다는 내용이에요.

10. **Generate secure access link**를 클릭하세요.

11. 링크의 기능을 설명하는 확인 창이 나타나요. 전체 관리자 권한, 자동 만료, 언제든 폐기할 수 있다는 내용이 들어 있어요. 내용을 확인하고 **링크 생성**을 클릭하세요.

![보안 접근 링크 생성 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279638/original/Y9z3U8anb1FfshVraliuBefYYC5pAY9vMA.png?1782203059)

## 3단계. 링크 전달하고 요청 제출하기

12. 링크가 활성화되고 클립보드에 자동으로 복사돼요. 링크가 다시 필요하면 **Copy**(복사)를 클릭하세요.

![보안 접근 링크가 활성화된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279636/original/f-0Ia0iRflh4D4duRtFl_T5SGYmxCpWmXQ.png?1782203059)

13. White-Glove Migration 요청서의 **Secure access link**(보안 접근 링크) 필드에 링크를 붙여 넣고 제출하세요. 하이퍼클래스 전문가가 이 링크로 로그인해 이전 작업을 진행해요. 비밀번호는 전혀 공유되지 않아요.

![링크를 붙여 넣은 White-Glove Migration 요청서](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279644/original/bkvtbeSv3IMfs3-ezSZucpmNRWuKLAKa1g.png?1782203060)

링크는 아래와 같은 모양이에요.

```
https://your-wordpress-site.com/wp-json/leadconnector-token/secure/<token>
```

## 4단계. 링크 관리하기

링크가 활성화된 동안에는 만료까지 남은 시간이 카운트다운으로 표시돼요. 같은 화면에서 언제든 링크를 관리할 수 있어요.

- **Regenerate**(다시 생성): 새 링크를 만들고, 이전 링크는 즉시 무효화해요. 한 번에 하나의 링크만 활성화할 수 있어요.
- **Revoke link**(링크 폐기): 접근을 즉시 차단해요. 확인 창에서 **Revoke link**를 선택하세요. 나중에 다시 접근 권한을 주려면 새 링크를 만들어 전달하세요.

![보안 접근 링크 폐기 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074279640/original/yuLQ1rnpCk317bsUalFHT24nl1HGvA5eqw.png?1782203060)

- 아무것도 하지 않아도 타이머가 끝나면 링크는 저절로 작동하지 않게 돼요.

## 자주 묻는 질문

### 이 방법은 안전한가요?
네. WordPress 비밀번호는 공유되지 않아요. 링크는 하이퍼클래스 전문가만 쓸 수 있고, 자동으로 만료되며, 언제든 폐기할 수 있어요.

### WordPress 아이디와 비밀번호를 꼭 알려 줘야 하나요?
아니요. 보안 접근 링크가 비밀번호 공유를 완전히 대신해요.

### 이전 작업에 시간이 더 필요해요. 어떻게 하나요?
새 링크를 만들면서 더 긴 기간(최대 7일)을 선택하세요.

### 지금 바로 접근을 막으려면 어떻게 하나요?
보안 접근 링크 화면을 열고 **Revoke link**를 클릭하세요.

### 링크가 만료되면 어떻게 되나요?
링크가 자동으로 작동하지 않게 돼요. 그래도 접근이 필요하면 새 링크를 만들어 하이퍼클래스 전문가에게 전달하세요.
