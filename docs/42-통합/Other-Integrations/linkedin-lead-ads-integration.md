---
원문: /support/solutions/articles/155000005860-linkedin-lead-ads-integration
번역일: 2026-11-07
카테고리: 42-통합
---

# LinkedIn Lead Ads 연동

LinkedIn에서 받은 리드를 하이퍼클래스로 바로 가져오는 연동 기능이에요. LinkedIn 계정을 연결하고 폼 필드를 매핑하면 리드가 자동으로 들어와요.

{% hint style="success" %}
🎬 **영상으로 배우기** — 창업 챌린지 강의에서 이 내용을 화면으로 직접 보여 드려요.

* [8강 2부 · LinkedIn 연동 (04:50)](https://www.youtube.com/watch?v=TNUzXx1UteQ&t=290s)

전체 강의 목차: [창업 챌린지 강의 영상으로 배우기](../../01-시작하기/creator-challenge-videos.md)
{% endhint %}

## 작동 방식

### LinkedIn 연동 시작하기

1. **설정 > 연동**으로 이동하세요.
2. LinkedIn 연동을 찾으세요.
3. **Connect**(연결)를 클릭해서 연동을 시작하세요.  
   ![연동 목록에서 LinkedIn 연결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050937037/original/uDbL-RMCZjwizOh3wrnz-RjMMvoPWShZWA.png?1754385847)
4. **Connect**를 클릭하면 LinkedIn 로그인 화면이 나와요. LinkedIn 계정으로 로그인하세요.  
   ![LinkedIn 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050937133/original/J-4GqzyNUDDGAYB-7vYtTDI3n3uL2nNdqw.png?1754385932)
5. 연동이 잘 되도록 요청하는 권한을 모두 허용하세요.
6. 로그인하면 서브 계정에 연결할 광고 계정을 하나 또는 여러 개 선택하세요.

   {% hint style="info" %}
   서브 계정에 연결할 수 있는 광고 계정 수에는 제한이 없어요. 연동하려는 광고 계정에는 LinkedIn 페이지가 연결되어 있어야 해요. 연결된 페이지가 없으면 연동이 되지 않아요.
   {% endhint %}

   [![광고 계정 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050936861/original/8PdeB7nBAXaK1vi3wcBH6TrktQv7reZutQ.png?1754385746)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009528552/original/I0BgY3ZQgjgsLDGA0jhVd0eNBN2avkC19g.png?1696714090)
7. 연동할 광고 계정마다 동기화 시점을 선택하세요.
   - **All leads**(모든 리드): 최근 90일 동안의 리드와 앞으로 생기는 새 리드를 모두 동기화해요.
   - **New leads**(신규 리드): 새로 생기는 리드만 동기화해요.
8. **Connect**를 클릭해 계속 진행하세요.

### 폼 필드 매핑

1. **폼 구성**을 클릭하거나 위쪽의 LinkedIn **폼 필드 매핑** 탭으로 이동하세요.
2. **Map Fields**(필드 매핑) 버튼을 눌러 LinkedIn 폼 필드를 하이퍼클래스 필드와 연결하세요.
3. **확인**을 클릭하면 저장되고 연동이 완료돼요.
4. 특정 폼에서 들어오는 리드를 받고 싶지 않다면 해당 폼의 **Status**(상태) 토글을 끄세요.

[![폼 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050936863/original/9ToHqvcEOanVjbnECWI45BijoIdSQoi11A.png?1754385747)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009528586/original/RwsSsa6B9HJnIVwtCA06DN_U-6yPW5fn0A.png?1696714406)

### 연결이 잘 되었는지 테스트하기

리드가 제대로 동기화되는지 확인하려면 아래 순서로 테스트하세요.

1. LinkedIn 계정에서 광고(Advertise)를 클릭하세요.  
   ![LinkedIn 광고 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050937844/original/KdzBo1kRxtveLSlnGVZEclNH3D-nJ_Hn1w.png?1754386440)
2. 테스트할 광고 계정을 선택하세요.  
   ![광고 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938048/original/Jv_3i5wlgdFUUIfSP8bCqXD23m_25TouZg.png?1754386571)
3. 테스트 리드를 보낼 캠페인 그룹과 광고를 선택하세요.  
   ![캠페인 그룹과 광고 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938156/original/2eTCDPIWXaPx1lLQY6HKdlSkRmCZrjmZLg.png?1754386654)
4. 광고 이름을 클릭해 리드 게시물을 여세요.
5. 폼이 켜져 있고 매핑되어 있는지 확인한 뒤, 하이퍼클래스로 리드를 보내세요.  
   ![테스트 리드 보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938223/original/oTTwtAGP1vc4Z9M9JOovPwI9VPzl39S6Tw.png?1754386716)
6. **연락처** 페이지에서 리드가 들어왔는지 확인하세요.  
   ![연락처 페이지에서 리드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938269/original/Ry-DFWkPJkxLAbvsm_yLdw1TdRu2Z8uyuA.png?1754386755)
