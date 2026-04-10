---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# 전화 통화 리다이렉트 루프 해결하기

전화 통화에서 같은 메시지가 계속 반복되거나, 대화(Conversations)에서 전화 통화가 연달아 쌓이는 현상이 보인다면, 이는 "리다이렉트" 루프입니다. 이 문제를 해결해보겠습니다.

---

**목차**

- [전화 통화 리다이렉트 루프란?](#전화-통화-리다이렉트-루프란)
- [전화 통화 리다이렉트 루프의 증거](#전화-통화-리다이렉트-루프의-증거)
- [전화 통화 리다이렉트 루프 해결하기](#전화-통화-리다이렉트-루프-해결하기)
  - [사용자 전화번호 확인](#사용자-전화번호-확인)
  - [착신 전환 번호 확인](#착신-전환-번호-확인)
  - [비즈니스 프로필 전화번호 확인](#비즈니스-프로필-전화번호-확인)

---

## **전화 통화 리다이렉트 루프란?**

전화 통화 루프 또는 리다이렉트 루프는 A 번호로 걸려온 전화가 B 번호로 라우팅/리다이렉트/착신 전환되고, 그 B 번호가 다시 A 번호로 라우팅하는 현상입니다.

---

## 전화 통화 리다이렉트 루프의 증거

전화 통화 리다이렉트 루프가 발생했다는 증거는 다음과 같습니다:

- 통화에서 같은 소리가 계속 반복해서 들림
- 수신 전화가 빠르게 쌓임 (1분 이내)

![전화 통화 리다이렉트 루프 증거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045943702/original/5BrixR67mRMjAhZNr1HV-GZa-09KCyyAog.png?1746043671)

---

## **전화 통화 리다이렉트 루프 해결하기**

### 사용자 전화번호 확인

하위 계정(Subaccount) → 설정(Settings) → 내 직원(My Staff) → 특정 사용자 편집으로 이동합니다. 사용자의 전화번호(사용자와 통화하기 위해 걸어야 하는 번호)가 하이레벨 번호(하이레벨에서 받은 번호)와 동일하지 않은지 확인하세요.

![사용자 전화번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045943891/original/wpugk__jahwGb-WtfgO5KW-e4tdVzhWYjg.png?1746044098)

이렇게 되면 전화가 자기 자신에게 걸리는 착신 전환 루프가 생성됩니다. 다음과 같은 오류를 보실 수 있습니다:

![착신 전환 루프 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045940256/original/rvt4vtGqaOK3K54D8Ul5nCs_2IpjwRpRfg.png?1746036512)

### 착신 전환 번호 확인

하위 계정(Subaccount) → 설정(Settings) → 전화번호(Phone Numbers) → 착신 전환 번호(Forwarding Number)도 확인하세요. 착신 전환 번호는 전화번호와 달라야 합니다.

![착신 전환 번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045944295/original/umLo08lZ0J8jtwlTOY3rr9QqFTvIuczLqw.png?1746045174)

### 비즈니스 프로필 전화번호 확인

하위 계정(Subaccount) → 설정(Settings) → 비즈니스 프로필(Business Profile) → 비즈니스 전화번호(Business Phone)도 확인하세요. 이는 수신 전화를 라우팅할 대체 번호입니다. 이 번호를 확인하되, 실제로 이 번호에 전화를 걸어 하이레벨 번호로 라우팅되는지 테스트해보세요. 다른 번호로 보이지만 여전히 하이레벨 번호로 라우팅되도록 설정되어 있을 수 있으므로, 수동으로 테스트해보는 것이 중요합니다.

![비즈니스 프로필 전화번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045944689/original/2xTHdQNtxxWlR2aJRfPWf6pp1xiAKgMXeQ.png?1746045949)

---
*원문 최종 수정: Wed, 30 Apr, 2025 at 3:47 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*