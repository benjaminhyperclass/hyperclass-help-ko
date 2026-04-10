---

번역일: 2026-04-08
카테고리: 25-애드온-세일즈 > Whitelabel Desktop App
---

# 데스크톱 웹 앱용 화이트라벨 도메인 설정하기

데스크톱 웹 앱용 화이트라벨 도메인을 사용하여 고객에게 완전한 브랜딩 로그인 경험을 제공하세요. 이 가이드에서는 요구사항, 설정 단계, 그리고 문제 해결 방법을 설명합니다. 또한 API 도메인(브랜딩 링크)과의 차이점도 배워서 완전한 브랜딩 경험을 구현할 수 있습니다.

---

**목차**

- [데스크톱 웹 앱용 화이트라벨 도메인이란?](#데스크톱-웹-앱용-화이트라벨-도메인이란)
- [데스크톱 웹 앱용 화이트라벨 도메인의 주요 장점](#데스크톱-웹-앱용-화이트라벨-도메인의-주요-장점)
- [데스크톱 웹 앱용 화이트라벨 도메인 설정하기](#데스크톱-웹-앱용-화이트라벨-도메인-설정하기)
- [API 도메인 vs 화이트라벨 도메인](#api-도메인-vs-화이트라벨-도메인)
- [문제 해결](#문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 데스크톱 웹 앱용 화이트라벨 도메인이란?

화이트라벨 도메인은 여러분이 소유한 서브도메인(예: app.yourdomain.com)으로, 표준 Hyperclass 링크(예: app.gohighlevel.com)와 함께 사용되는 브랜딩된 데스크톱 로그인 및 앱 URL을 제공합니다. 설정 완료 후, 사용자들은 여러분의 브랜딩된 주소로 로그인할 수 있으며, Hyperclass가 애플리케이션을 호스팅하고 보안을 관리합니다.

데스크톱 웹 앱을 화이트라벨로 설정하면, 고객들이 로그인하고 앱을 사용할 때 여러분의 도메인을 사용하게 됩니다. 예를 들어 "app.gohighlevel.com" 대신 "app.myawesomedomain.com"을 사용하게 됩니다.

**참고**: 커스텀/화이트라벨 도메인은 여러분이 소유한 도메인으로 고객이 데스크톱 앱에 로그인할 때 사용합니다(예: app.yourdomain.com). Hyperclass 기본 도메인은 GoHighLevel에서 제공하는 임시 주소입니다(예: yourcompany.gohighlevel.com).

---

## 데스크톱 웹 앱용 화이트라벨 도메인의 주요 장점

이점을 명확히 이해하면 온보딩 체크리스트와 고객 배포에서 이 설정의 우선순위를 정하는 데 도움이 됩니다.

- **브랜드 일관성**: 로그인 및 앱 사용 경험 전반에서 여러분의 이름, 로고, URL을 제시합니다.

- **신뢰와 전문성**: 여러분의 도메인을 사용하여 고객이 올바른 곳에 있다는 확신을 줍니다.

- **간편한 접근**: 사용자에게 기억하기 쉬운 로그인 URL(예: app.yourdomain.com)을 제공합니다.

- **자동 SSL**: DNS가 올바르게 설정되면 Hyperclass가 HTTPS를 자동으로 발급합니다.

- **관심사 분리**: 로그인/앱 도메인을 마케팅 사이트 및 이메일 발송 도메인과 구분합니다.

---

## 데스크톱 웹 앱용 화이트라벨 도메인 설정하기

단계를 순서대로 완료하면 DNS와 SSL이 빠르게 완료되고 로그인 포털이 브랜딩된 URL에서 로드됩니다.

- **DNS 제공업체에서 CNAME 생성**

  호스트/이름: 사용하려는 서브도메인(예: app는 app.myawesomedomain.com을 의미)
  
  값/대상: **whitelabel.ludicrous.cloud**
  
  TTL: 제공업체에서 특정 값을 요구하지 않는 한 기본값으로 둡니다.

![DNS CNAME 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712002/original/xMazT-jvM9UthcQeacI4jAj_3t9-G7PH-g.png?1758909557)

- **Hyperclass에서 도메인 추가(에이전시 설정(Settings))**

  에이전시 뷰(Agency View) → 설정(Settings) → 회사(Company) → 화이트라벨(Whitelabel) → 화이트라벨 도메인(Whitelabel Domain)으로 이동합니다.

![화이트라벨 도메인 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712052/original/TWDsv6DwwdfB5D46DSzjXJJftTMlDogQMQ.png?1758909605)

- 전체 서브도메인(예: app.myawesomedomain.com)을 입력하고 업데이트(Update)를 클릭합니다.

![화이트라벨 도메인 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712088/original/B8qiZeqPt59TV-LYJhgzJhL8sZQTztbCdg.png?1758909671)

- **로고 업로드 및 약관 URL 추가**

  **에이전시 뷰(Agency View) → 설정(Settings) → 회사(Company)**에서 로고를 업로드하고(권장 크기: ~350×180 px, 2.5MB 미만) **개인정보처리방침** 및 **이용약관** URL을 입력합니다.

![로고 및 약관 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712256/original/gL3kUOhXVzUOrZ2iuwAzG6eL7hJvqMUP3A.png?1758909902)

- **전파 및 SSL 확인**

  DNS가 전파될 때까지 기다린 후 **http://app.myawesomedomain.com**을 열어서 브랜딩된 로그인 페이지가 여러분의 로고와 법적 링크와 함께 로드되는지 확인합니다.
  
  SSL/TLS는 DNS가 올바른 CNAME으로 향하면 자동으로 발급됩니다.

**참고:** 이전에 화이트라벨 도메인을 설정했고 whitelabel.ludicrous.cloud에서 실행되도록 업데이트하려면, 먼저 휴지통 아이콘을 사용하여 화이트라벨 도메인 필드를 삭제하고, 회사 업데이트(Update Company)를 클릭하여 저장한 다음, 화이트라벨 도메인(Whitelabel Domain) 필드에 서브도메인을 다시 입력하고 다시 저장해야 합니다.

---

## API 도메인 vs 화이트라벨 도메인

차이점을 이해하면 링크와 로그인 전반의 브랜딩 공백을 방지할 수 있습니다.

- **화이트라벨 도메인**: **데스크톱 로그인 및 앱 URL**(예: app.myawesomedomain.com)을 지원합니다.

- **API 도메인(브랜딩 링크)**: 이메일/SMS의 **시스템 생성 링크**(폼, 설문, 캘린더, 트리거 링크, 단축 링크, 리뷰 링크)를 지원합니다. 연락처가 클릭하는 링크를 브랜딩하려면 에이전시 및/또는 하위 계정 수준에서 설정합니다.

- 팁: 로그인과 링크 전반에서 완전한 브랜딩 경험을 위해 둘 다 설정하세요.

---

## 문제 해결

화이트라벨 도메인 문제 해결은 주로 DNS 설정 확인과 SSL이 제대로 발급되었는지 확인하는 것입니다. 다음은 일반적인 문제와 해결 방법입니다:

- **오류: "클라이언트와 서버가 공통 SSL 프로토콜 버전이나 암호 스위트를 지원하지 않습니다"**

  이는 브라우저나 디바이스가 오래된 보안 프로토콜을 사용하고 있음을 의미합니다. Hyperclass는 TLS 1.2와 1.3만 지원합니다. 브라우저를 업데이트하고 같은 서브도메인에 대해 A 레코드와 CNAME이 모두 있는 등의 충돌하는 DNS 레코드가 없는지 확인하세요. 이런 충돌은 SSL 발급을 막을 수 있습니다.

- **도메인이 로드되지 않음**

  서브도메인이 올바른 CNAME인 **whitelabel.ludicrous.cloud**로 향하는지 다시 확인하세요. DNS 변경사항이 전역적으로 전파되는 데 최대 30분이 걸릴 수 있습니다.

- **"연결이 비공개가 아닙니다" 또는 HTTPS가 작동하지 않음**

  이는 보통 SSL 인증서가 아직 발급되지 않았음을 의미합니다. DNS가 완전히 전파되고 단일 CNAME으로만 향하는지 확인하세요. DNS가 올바르면 Let's Encrypt를 통해 SSL이 자동으로 발급됩니다.

---

## 자주 묻는 질문

**Q: 화이트라벨 로그인에 루트 도메인(apex)을 사용할 수 있나요?**
A: **서브도메인**(예: app.yourdomain.com)을 **CNAME**으로 사용하여 Hyperclass 대상을 향하도록 하세요.

**Q: SSL 발급에 얼마나 걸리나요?**
A: DNS가 올바르면 SSL이 자동으로 발급됩니다. DNS가 전역적으로 전파될 시간을 허용한 후 다시 테스트하세요.

**Q: 화이트라벨 도메인과 API 도메인의 차이점은 무엇인가요?**
A: 화이트라벨 도메인은 **로그인/앱 URL**을 브랜딩합니다. API 도메인은 이메일/SMS에서 사용되는 **시스템 생성 링크**(폼, 설문, 캘린더, 트리거 링크 등)를 브랜딩합니다.

**Q: 화이트라벨링을 위해 로고와 법적 링크를 다시 업로드해야 하나요?**
A: 네. 에이전시 회사 설정(Agency Company Settings)에서 **에이전시 로고**를 업로드하고 **이용약관** 및 **개인정보처리방침** URL을 추가하세요.

**Q: 저희는 Cloudflare를 사용합니다. 주황색 프록시를 켜둬야 하나요?**
A: 아니요. SSL이 제대로 발급될 수 있도록 화이트라벨 CNAME을 **DNS 전용**으로 설정하세요.

**Q: 화이트라벨 서브도메인을 업데이트했는데 왜 이전 로그인이 여전히 나타나나요?**
A: **화이트라벨 도메인(Whitelabel Domain)** 필드의 이전 값을 지우고 **회사 업데이트(Update Company)**를 클릭한 다음, 새 서브도메인을 입력하고 저장하세요. DNS/SSL이 새로고침될 시간을 허용한 후 다시 테스트하세요.

**Q: 어떤 TLS 버전이 지원되나요?**
A: TLS **1.2**와 **1.3**입니다.

**Q: 브랜딩 링크용 API 도메인은 어디서 설정하나요?**
A: 에이전시 수준에서 **설정(Settings) → 회사(Company) → API 도메인(API Domain)**에서, 그리고 선택적으로 클라이언트별 브랜딩을 위해 하위 계정 수준에서 설정할 수 있습니다.

---
*원문 최종 수정: Fri, 26 Sep, 2025 at 1:44 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*