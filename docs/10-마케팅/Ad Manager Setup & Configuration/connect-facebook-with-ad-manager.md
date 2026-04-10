---

번역일: 2026-04-07
카테고리: 10-마케팅 > Ad Manager 설정 및 구성
---

# Ad Manager와 Facebook 연결하기

이 글에서는 다음 내용을 다룹니다:

- 클라이언트가 Ad Manager를 구독하는 방법
- 온보딩 플로우 - Facebook 계정, Meta 광고 계정, Ad Manager에서 사용할 Facebook 페이지를 연결하고 광고 캠페인을 게시하는 과정

## Ad Manager 구독 방법

에이전시가 Ad Manager 리셀링을 위해 어떤 플랜을 선택했는지와 관계없이, 하위 계정(Sub-account)이 구독하기 위해 취해야 할 단계는 다음과 같습니다.

에이전시는 설정(Settings) → 팀(Teams) → 특정 팀원의 권한 편집으로 이동하여 직원 팀원에게 필요한 권한을 제공할 수 있습니다. 역할 및 권한 옵션에서 Ad Manager 체크박스를 활성화할 수 있는 옵션이 있습니다.

완료되면 사용자는 특정 하위 계정 → 마케팅(Marketing) → Ad Manager 탭 아래에 있는 'Ad Manager 활성화(Activate Ad Manager)' 버튼을 클릭하여 에이전시로부터 Ad Manager를 구독할 수 있습니다.

![Ad Manager 활성화 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037533038/original/GngZjLzekYLfT51ayO8xxcrCt812Uf-oDA.png?1733085089)

![구독 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030627096/original/yTiRPqdlA-zeELjJ45HHn9olk5bmTsF7qQ.jpeg?1723054790)

클라이언트가 Ad Manager를 구매하면 시스템에서 클라이언트의 카드와 에이전시의 Stripe 계정 간의 구독을 생성하여 클라이언트로부터 결제를 수금할 수 있습니다.

클라이언트가 '결제 및 구독(Pay and Subscribe)' 버튼을 클릭하면 시스템이 구독을 생성하고, 결제를 처리한 후 Ad Manager 온보딩 플로우로 안내합니다.

참고: 이는 에이전시가 하위 계정에서 Ad Manager를 사용하고 무제한 캠페인을 게시하기 위해 청구하는 월간 구독 금액입니다. 캠페인에 대한 결제는 광고 게시 플랫폼에서 캠페인 게시 승인 후, 사용자가 추가한 Meta 광고 계정 아래의 등록된 카드에서 청구됩니다.

---

## Ad Manager와 Facebook 연결 방법

사용자가 Ad Manager 사용을 구독했으므로, Facebook을 Ad Manager와 연결하는 것은 캠페인 여정을 시작하기 전 또 다른 필수 단계입니다.

**1.** "Facebook 연결(Connect Facebook)" 버튼을 클릭하면 Facebook 자격 증명을 입력하고 LeadConnector에 권한을 허용하는 페이지로 이동합니다. 다른 권한과 함께 비즈니스 매니저에 대한 액세스 권한도 필요합니다.

**참고:** 모든 권한 토글이 활성화되고 체크박스가 선택되어 LeadConnector 앱에 모든 권한을 부여하도록 확인하세요.

![Facebook 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041045021/original/-H-HScaWvVbc7ec-BdCJc6PFriOMTr41cA.png?1738749990)

**2.** Facebook 계정이 연결되고 모든 권한이 부여되면, 연결된 비즈니스 매니저와 연결된 모든 Meta 광고 계정이 '광고 계정 선택(Select Ad Account)' 드롭다운에 표시되며, 이 중 자격을 갖춘 계정 하나를 선택해야 합니다.

![광고 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041045463/original/76C-BQaUST7QEb5vIjXWSrO6YbTalOB2lw.png?1738750254)

광고 계정의 자격은 상태에 따라 정의되며, 다음 목록은 각각의 의미와 Ad Manager 연결에 적합한 상태를 자세히 설명합니다:

- 활성(Active): 완전히 운영되며 제한 없이 광고를 생성하고 실행할 수 있음 - Ad Manager 연결에 적합
- 비활성화됨(Disabled): 광고 계정이 비활성화되어 새 광고를 생성하거나 실행할 수 없음. 이 상태는 일반적으로 Facebook이 정책 위반이나 광고 계정과 관련된 의심스러운 활동을 감지할 때 발생 - Ad Manager와 연결 불가
- 미결제(Unsettled): Facebook과의 미결제 청구 건이 있어 수정이 필요함 - Ad Manager 연결에 적합
- 위험 검토 대기 중(Pending risk review): 계정 정보나 청구 세부사항을 변경한 후 Facebook 팀에서 광고 계정을 검토 중임을 나타냄. 이 기간 동안 광고 생성이나 편집 능력이 제한될 수 있음 - Ad Manager 연결에 적합
- 폐쇄 대기 중(Pending closure): 반복적이거나 심각한 정책 위반으로 인해 광고 계정이 영구 폐쇄 예정임을 의미 - Ad Manager 연결에 적합
- 폐쇄됨(Closed): 광고 계정이 Facebook에 의해 영구적으로 폐쇄되어 이 계정에서는 광고를 생성하거나 실행할 수 없음 - Ad Manager와 연결 불가

**3.** 다음 단계는 연결 가능한 페이지 목록에서 Facebook 페이지를 선택하는 것입니다. 자동으로 연결된 비즈니스 매니저와 연결된 Facebook 페이지만 자격을 갖습니다. Ad Manager와 연결하려는 페이지 옆의 '연결(Connect)'을 클릭하세요.

![Facebook 페이지 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041045480/original/lX1cfVSOXrYv4dL9d4D8ds56YrXIXBw7BQ.png?1738750270)

연결을 클릭하면 페이지가 연결되고 '시작하기(Get Started)'를 클릭하여 캠페인을 생성할 준비가 완료됩니다.

참고: 온보딩 플로우에서는 하나의 Facebook 페이지를 연결할 수 있습니다. 두 개 이상을 연결하려면 Ad Manager 설정 → 페이지(Pages) 탭에서 'Facebook 페이지 연결(Connect Facebook page(s))'을 클릭하여 수행할 수 있습니다.

![캠페인 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030627095/original/sYdq9ioU7QuBjSJUYsJsstUJRDi8MSEbig.jpeg?1723054789)

---
*원문 최종 수정: Sun, 9 Feb, 2025 at 2:38 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*