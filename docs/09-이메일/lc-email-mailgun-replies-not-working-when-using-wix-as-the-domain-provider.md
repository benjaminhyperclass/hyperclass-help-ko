---

번역일: 2026-04-06
카테고리: 09-이메일
---

# WIX를 도메인 제공업체로 사용할 때 LC 이메일/Mailgun 회신이 작동하지 않는 문제

WIX용 도메인을 어디서 구매하셨나요?

WIX에서 관리하지 않도록 네임서버를 설정하려면 다음 문서를 참고해야 합니다.

[https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix](https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix)

여기서 네임서버를 변경하세요:

[
![네임서버 변경 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619872/original/B8A4v0q6PZ5YHsAp2mzk6_scZOWKWvgpuA.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048676561/original/YR0RErgqA3H6yrlCTXhhZbT3_wiy8RMiLg.png?1594407818)

그런 다음 "I will use GoDaddy Nameservers"를 선택하세요:

[
![GoDaddy 네임서버 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619871/original/leZXxFFitGVUL_wyqnukiQY8HewiiuhhkA.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048676558/original/c5-qSORu7yueJm6AQ9njZkWqb2793iw4NQ.png?1594407817)

[
![네임서버 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619867/original/xZMIopePhJIuQfvyI2d-FSmtfCGhaDamag.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048676749/original/O1cQxm9xOIXkrWlOOMVa6XthQtecaZmlSQ.png?1594407903)

다음 문서로 이동하여 DNS 레코드에 추가할 레코드를 복사하세요:

[https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix](https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix)

[
![DNS 레코드 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619870/original/waEl3ZyYXtpTn3z8M1YI4SxEItlWK1-Z_g.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048677097/original/Nz7A2Pc9r7o6ifdDElkaDFxYb5GenehFlg.png?1594408059)

오른쪽의 편집 연필 버튼을 클릭하세요:

[
![편집 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619863/original/FcRU58EGiZKcns2K8ALxLueEHPfjdvaznA.png?1594935582)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048677230/original/sF5umzyoh6KeB_H7wBc055xK-5bx8F0Fdg.png?1594408105)

여기에 A 레코드를 붙여넣으세요:

[
![A 레코드 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619868/original/f7c1M2IS1BJN60UZqO2J7yUctTOAlVNHcg.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048677378/original/7eVDwzLLsaC8fNs38La35DMKjtRtaGIzjQ.png?1594408151)

원래 CNAME 레코드를 편집하고 wwwXX.wixdns.net 레코드를 여기에 붙여넣으세요:

[
![CNAME 레코드 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619869/original/MouLyh5lo5A1OLCtk6GsLHRX5O-8vMfaBg.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678085/original/NgYbOPlEF2uAanqP9y07bHcteCHXA4buxQ.png?1594408436)

[https://dnschecker.org/](https://dnschecker.org/)로 이동하세요.

yourdomain.com (A 레코드)을 입력하고 검색하여 작동하는지 확인하세요:

[
![A 레코드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619864/original/mb1xaCvUJdDXFgow1RF-WpnHcGJYh2aTog.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678312/original/RgvRn40F2j_hC6LaTJrhvhm9QtA0S4cN1w.png?1594408555)

[www.yourdomain.com](http://www.yourdomain.com/) (CNAME 레코드)을 입력하고 검색하여 작동하는지 확인하세요:

[
![CNAME 레코드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619866/original/DrKok7JojxLYA6I4l4FBw6YDBT_Qt24NhA.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678393/original/8LRWkWllhraLK1fb3e91NFVM3JV72ywzZg.png?1594408597)

yourdomain.com (NS 레코드)을 입력하고 검색하여 작동하는지 확인하세요:

[
![NS 레코드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619865/original/R1d1SOWBIMaa6Rb2WNTr1ifPPeHnZjxj4g.png?1594935583)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678590/original/vTmfShLRzSvkdM4pmRiTAIzWEU_lxcf0wg.png?1594408694)

웹사이트 yourdomain.com으로 이동하여 웹사이트가 정상 작동하는지 확인하세요.

이제 도메인 제공업체의 DNS 레코드에서 Mailgun을 설정할 수 있습니다! 다음 문서들을 참고하세요:

[Mailgun 단계별 설정 가이드](step-by-step-guide-to-set-up-mailgun.md)

[전용 발신 도메인 설정 방법 (LC 이메일)](LC-Email-Dedicated-Domain-and-IP/dedicated-email-sending-domains-overview-setup.md)

---
*원문 최종 수정: 2023년 7월 27일*
*Hyperclass 사용 가이드 — hyperclass.ai*