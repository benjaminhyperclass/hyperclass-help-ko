---
원문: https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site
번역일: 2026-04-23
카테고리: 퍼널 & 웹사이트
---

# 워드프레스 사이트에 도메인 추가하기

이 가이드는 워드프레스 웹사이트에 도메인을 추가하고 설정하는 방법을 설명합니다. 이 가이드는 2023년 3월 31일 이후에 설치된 새로운 워드프레스 사이트만을 대상으로 합니다.

#### 이 가이드에서 다루는 내용

#### [**워드프레스 웹사이트에 도메인을 추가하는 방법**](#How-to-add-Domains-to-your-WordPress-website?)

#### [a) 사이트에 도메인 추가하기](#a)-%C2%A0Adding-a-domain-for-your-site%3A)

#### [b) 워드프레스 사이트에 추가 도메인 추가하기](#b)-Adding-additional-domains-for-your-WordPress-site)

#### [c) 워드프레스 사이트에 루트 도메인 추가하기](#c)-Adding-Root-Domain-to-WP-site%3A)

## 워드프레스 웹사이트에 도메인을 추가하는 방법

워드프레스 사이트에 도메인을 추가하면 해당 도메인을 통해 일반 사용자들이 웹사이트에 접속할 수 있게 됩니다. 도메인은 웹사이트의 주소 역할을 하며, 방문자들이 사이트에 접근할 때 사용합니다.

이 가이드에서는 워드프레스 사이트에 기본 도메인, 추가 도메인, 그리고 루트 도메인(apex 도메인 또는 naked 도메인이라고도 함)을 추가하는 단계별 방법을 설명합니다.

워드프레스 웹사이트에 도메인을 연결하기 전에 먼저 스테이징 도메인이 필요할 수 있습니다. 이를 통해 실제 도메인을 연결하기 전에 웹사이트가 어떻게 보이는지 미리 확인할 수 있습니다. GoDaddy에 도메인이 있는 사용자를 위한 특별 안내도 포함되어 있습니다.

### a) 사이트에 도메인 추가하기

1) 첫 번째 도메인을 추가하려면 "도메인 또는 서브도메인 추가" 버튼을 클릭합니다. 도메인 이름을 입력하고 '도메인 추가' 버튼을 클릭하세요. 두 개의 TXT 레코드와 CNAME 레코드(선택사항이지만 웹사이트 트래픽 연결을 위해 필요)가 생성됩니다.

![워드프레스 도메인 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530850/original/coxKVPu6rE2_UnyOTHI7MvX7Rkb4iAGREA.png?1681398600)

![도메인 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530855/original/abdBuhNtt9uFlqErTUyuPja6bQK2ikgmWg.png?1681398600)

![DNS 레코드 정보 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530848/original/n5svUU6tj_fQApPFqWpYZTJ9UxAQwT-OBw.png?1681398599)

2) TXT 레코드와 CNAME 레코드의 키(Key)와 값(Value)을 복사합니다. DNS 제공업체에서 도메인의 TXT 레코드와 CNAME 레코드를 설정하세요.

![DNS 레코드 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292534096/original/oE0CLprQjptAytDcp_Xm-6Ev-ac-7zUMmA.gif?1681399427)

**주의사항:**

Cloudflare를 사용하는 경우, Cloudflare 프록시를 비활성화하고 프록시 상태를 "DNS 전용"으로 변경해야 합니다.

DNS 제공업체에 TXT 레코드와 CNAME 레코드를 입력한 후, 워드프레스 대시보드로 돌아가서 "도메인 제공업체의 DNS 설정에 위 도메인 레코드를 추가했습니다" 체크박스를 선택하고 "레코드 확인" 버튼을 클릭하세요.

![레코드 확인 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530849/original/oAZdGx2nkSb3-JApojyZS_nVQBBzALIvDg.png?1681398599)

3) 설정이 완료되면 해당 도메인이 기본적으로 주 도메인(Primary Domain)으로 설정됩니다.

![주 도메인으로 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530856/original/9iYglnY1MRzECVNg28aHPna2-lXvS0VE2A.png?1681398600)

### b) 워드프레스 사이트에 추가 도메인 추가하기

1) 추가 도메인을 추가하려면 위와 동일한 단계를 따르세요. 이번에는 CNAME 레코드만 추가하면 됩니다.

![추가 도메인 CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530853/original/wK2mm_5hwXBurGgJdMu1VSDlyAaZvs5M2w.png?1681398600)

2) 추가 도메인은 기본적으로 주 도메인으로 설정되지 않으며, 필요한 경우 사용자가 주 도메인으로 설정할 수 있습니다.

3) DNS 확인이 아직 완료되지 않은 추가 도메인에는 "미확인" 태그가 표시됩니다.

![미확인 도메인 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530858/original/Nw8XotE7JEXA5mI6lDTL3oH_-2qeIrpjkg.png?1681398600)

4) "DNS 설정"을 클릭하여 도메인 호스팅 플랫폼에 인증 정보를 추가하세요.

![DNS 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530859/original/z0Za_x_NjIKDtX6kqbOemqkfWOR-7UdUEg.png?1681398600)

![DNS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530857/original/tMNMCLWQ5FA8sNPzD-eLtwMI0SNTWlduwg.png?1681398600)

### c) 워드프레스 사이트에 루트 도메인 추가하기

"루트 도메인(Root Domain)"은 웹사이트의 주요 진입점을 나타내는 도메인 이름으로, 일반적으로 도메인 이름 앞에 "www"를 붙인 형태입니다(www.example.com). "APEX 도메인" 또는 "naked 도메인"은 "www" 접두어가 없는 도메인 이름을 의미합니다(example.com).

루트 도메인(www.example.com)과 APEX 도메인(example.com)의 CNAME 값은 기본적으로 동일합니다. 루트 도메인을 이미 추가한 경우, 루트 도메인의 CNAME 값을 사용하여 APEX 도메인을 설정할 수 있으며, 그 반대도 가능합니다.

![루트 도메인과 APEX 도메인 CNAME 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530772/original/kGpS4j0Hfwg6kwcKiZj-gsqsrkczpMI0kw.png?1681398574)

주 루트 도메인을 추가한 후 APEX 도메인(example.com)을 추가하려고 하면 다음과 같은 정보가 표시됩니다. 여기에 제공된 CNAME 이름과 값을 사용하여 DNS 레코드를 설정하세요.

![APEX 도메인 추가 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530852/original/o6UEM2Lg8E1nVCw2Hy1gYmPodjgsxdiLLg.png?1681398600)

**주의사항:**

GoDaddy에 도메인이 있는 사용자의 경우, '@' 대신 도메인 이름을 Name으로 사용하세요.

---
*원문 최종 수정: Thu, 13 Apr, 2023 at 10:23 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*