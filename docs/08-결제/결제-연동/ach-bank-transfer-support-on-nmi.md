---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# NMI에서 ACH 은행 이체 지원

## 자주 묻는 질문(FAQ)


**Q. 고객이 방금 결제했는데 ACH 거래가 아직 처리 중으로 표시되고 있어요.**
**A.** 이는 정상적인 현상입니다. ACH 이체는 결제자의 은행에 따라 최종 상태까지 최대 5영업일이 소요될 수 있습니다. 결제 상태가 **성공**으로 변경된 후에만 서비스를 제공하는 것을 권장합니다.


**Q. 인보이스에서 ACH 옵션이 나타나지 않아요.**
**A.** Labs에서 이미 기능이 활성화되어 있다면, NMI 측에서도 ACH가 활성화되어 있는지 확인해주세요. 그래도 문제가 계속된다면 추가 지원을 위해 고객지원팀에 문의해주세요.


**Q. 정기 인보이스와 구독에서 은행 계좌를 추가하는 옵션이 보이지 않아요.**
**A.** 현재 V1 릴리스에서는 예상되는 동작입니다. 현재로서는 정기 인보이스와 구독이 이미 저장된 은행 계좌를 사용해서만 시작할 수 있습니다. 은행 계좌를 저장하려면 먼저 인보이스를 통해 결제를 받아야 합니다. 은행 계좌가 저장되면 정기 인보이스와 구독을 통한 향후 정기 출금에 사용할 수 있습니다. 다음과 같이 표시됩니다 -


![은행 계좌 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066745227/original/_mue_KDC-vqm2EuynGQhjTtyWTuc2vCyaQ.png?1773294789)


**Q. NMI 측에서 다른 것도 활성화해야 하나요?**
**A.** 네. NMI 대시보드에서 정산(settlements) 및 결제 상태 업데이트를 위한 필수 웹훅이 활성화되어 있는지 확인해주세요. 설정 단계는 NMI의 문서를 참조하세요: https://docs.nmi.com/reference/overview#where-to-setup

![NMI 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066745248/original/_luknz0QvbAsEAjw1eMM9PMT5vYb5ovD-w.png?1773294853)


사용할 URL - [https://backend.leadconnectorhq.com/payments/nmi/webhook](https://backend.leadconnectorhq.com/payments/nmi/webhook)

활성화할 이벤트 - 

![활성화할 이벤트 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066745238/original/i6Ygq2T4nGL39aAUOg6V9m0V94_dtkXhyA.png?1773294833)

---
*원문 최종 수정: Thu, 12 Mar, 2026 at 12:54 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*