---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005010-how-to-migrate-a-wordpress-site-to-highlevel
번역일: 2026-08-11
카테고리: 06-사이트 > 워드프레스
---

# 워드프레스 사이트를 하이퍼클래스로 마이그레이션하는 방법

기존 워드프레스 사이트를 하이퍼클래스의 통합 호스팅 플랫폼으로 옮기는 방법은 두 가지가 있어요. LC Migrator 플러그인으로 직접 마이그레이션을 진행하거나, White-Glove 요청을 제출해서 하이퍼클래스 팀이 대신 이전해드리는 방법이에요. 이 플랫폼은 에이전시와 그 고객사 모두를 대상으로 하기 때문에, 로그인한 사용자에 따라 워드프레스 대시보드에 보이는 화면이 다르게 표시돼요. 이 아티클에서는 두 가지 마이그레이션 방법과 사용자 유형별로 진행 중에 보이는 화면, 그리고 보안 액세스 링크를 이용한 White-Glove 마이그레이션 설정 방법을 다룰게요.

## 두 가지 마이그레이션 방법

**LC Migrator 플러그인**. 원본 사이트에 설치해서 직접 마이그레이션을 진행할 수 있는 경량 플러그인이에요. 파일 크기 제한이 없어서 대용량 사이트에도 사용할 수 있어요.

**White-Glove 마이그레이션 (에이전시 사용자 전용)**. 요청을 제출하면 하이퍼클래스 마이그레이션 팀이 대신 사이트를 이전해드려요. 대부분의 이전 작업은 원본 사이트 크기에 따라 영업일 기준 1~3일 이내에 완료돼요.

## 에이전시 화면에서 보이는 내용

에이전시 관리자(Admin)는 전체 과정을 직접 제어할 수 있고, 모든 고객사의 진행 상황을 추적할 수 있어요.

마이그레이션을 시작하려면 Agency Dashboard(에이전시 대시보드) > Sites(사이트) > WordPress(워드프레스)로 이동하세요. 여기서 새 마이그레이션을 시작할 수 있고, LC Migrator로 직접 진행할지 White-Glove 요청을 제출할지 선택할 수 있어요.


## LC Migrator 플러그인으로 마이그레이션하기

직접 마이그레이션을 진행하려면 원본 사이트에 LC Migrator 플러그인을 설치하고 CRM에서 이전 작업을 시작하세요.

- 
대시보드에서 LC Migrator 플러그인을 다운로드하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609155/original/Gu91vhdTS8S-iWcnHpo9ZgwZtIh6SeKzow.png?1783594559)


- 
원본 사이트(이전하려는 워드프레스 사이트)에 플러그인을 설치하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609152/original/1aD4CSPRl4D98QvnCZqJxfS896T4SBPO_Q.png?1783594558)


- 
CRM에 로그인해서 마이그레이션하려는 워드프레스 사이트를 선택하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609154/original/ivr9JwLTLlMfPS3CMhmJgz_8KmVHhXWomg.png?1783594559)


- 
Start migration(마이그레이션 시작)을 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609145/original/ywjCM2azrBohtgydp4CzDsUovc6EVugoJQ.png?1783594558)


- 
플러그인이 마이그레이션을 진행하는 동안 원본 사이트에서 진행률 표시줄을 확인하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609147/original/fq0H4qm_qWibl1WBlMmE3NVNZLKjsYqxNA.png?1783594558)


- 
마이그레이션이 완료되면 View Your New Website(새 웹사이트 보기)를 클릭해서 새로 이전된 사이트를 확인하세요. 원하시면 경험을 평가해서 저희가 서비스를 개선하는 데 도움을 주실 수도 있어요!


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609151/original/2rnoBunsN-D0ZZkR7afUyo9W4Aa4BHgdzQ.png?1783594558)


## 보안 액세스 링크로 White-Glove 마이그레이션 진행하기

White-Glove 마이그레이션에서는 워드프레스 아이디와 비밀번호를 넘기지 않아요. 대신 LC Migrator 플러그인으로 보안 액세스 링크를 생성해서 공유하면 돼요. 이 링크를 통해 하이퍼클래스 전문가가 로그인해서 마이그레이션을 진행할 수 있고, 직접 설정한 기간이 지나면 자동으로 만료되며, 언제든 취소(회수)할 수 있어요. 관리자 권한을 부여하는 링크지만, 하이퍼클래스 전문가만 사용할 수 있도록 되어 있어서 다른 사람은 이 링크로 로그인할 수 없어요.

시작하기 전에 마이그레이션하려는 워드프레스 사이트의 관리자 권한을 갖고 있는지 확인하세요.

### 1단계: LC Migrator 플러그인 설치

- 
LC Migrator 플러그인을 다운로드하세요. .zip 파일 형태로 저장되니, 압축을 풀지 마세요.


- 
워드프레스 관리자 화면에서 Plugins(플러그인) > Add Plugin(플러그인 추가)으로 이동하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609136/original/U7bUCcx2h7Wn8XhjKwSOCPHxLsCrafzVHg.png?1783594558)


- 
Upload Plugin(플러그인 업로드)을 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609135/original/h2R0fjKr3kwOaSzArXIw2Pbc3X66YjyTXA.png?1783594558)


- 
Choose File(파일 선택)을 클릭해서 다운로드한 .zip 파일을 선택한 다음 Install Now(지금 설치)를 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609139/original/71is1f3O9LvJxaQbS18v0vaA9RpnaCqtBQ.png?1783594558)


- 
설치가 완료되면 Activate Plugin(플러그인 활성화)을 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609140/original/1rHlGWP6LdmVrOO7lpPHiAHPkqJ_X-Oqow.png?1783594558)


### 2단계: 보안 액세스 링크 생성하기

- 
워드프레스 관리자 사이드바에서 LC Migrator를 여세요. Welcome(환영) 화면이 나타나요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609149/original/xQWWwT1d4YKvMszrVVQI1YxrMMafEaVtrQ.png?1783594558)


- 
Generate secure access link(보안 액세스 링크 생성)를 클릭하세요. 이 작업을 하려면 별도의 계정 로그인이 필요하지 않아요.


- 
Link active for(링크 유효 기간)에서 링크가 활성 상태로 유지될 기간을 선택하세요. 24시간부터 최대 7일까지 설정 가능하며, 기본값은 3일이에요. 이 기간이 지나면 자동으로 만료되고, 원하면 그 전에 언제든 취소할 수도 있어요.

주말 관련 참고: 금요일, 토요일, 일요일에 링크를 생성하면 최소 기간이 4일로 설정돼요. 그래야 평일이 시작된 후에도 하이퍼클래스 전문가가 링크를 사용할 수 있어요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609153/original/2vtP69AVLuWC-sAAEzX_fX7pd2PRZY9s-w.png?1783594559)


- 
링크가 전체 관리자 권한을 부여하며 하이퍼클래스 전문가만 사용할 수 있다는 안내 문구를 확인하세요.


- 
Generate secure access link(보안 액세스 링크 생성)를 클릭하세요.


- 
확인 창에서 링크의 작동 방식(전체 관리자 권한 부여, 자동 만료, 언제든 취소 가능)을 안내해요. Generate link(링크 생성)를 클릭해서 확정하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609141/original/-m92oTdVJIxG-xaQgnYWCiSon_Ni7aN3fQ.png?1783594558)


### 3단계: 링크 공유 및 요청 제출

- 
이제 링크가 활성화되고 자동으로 클립보드에 복사돼요. 다시 필요할 때는 Copy(복사)를 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609148/original/wGFy3sGu1mmsUvTDUM0KJr4ZZlZAw5WZUA.png?1783594558)


- 
White-Glove Migration(White-Glove 마이그레이션) 요청서의 Secure access link(보안 액세스 링크) 필드에 링크를 붙여넣고 제출하세요. 하이퍼클래스 전문가가 이 링크로 로그인해서 마이그레이션을 진행하며, 비밀번호는 전혀 공유되지 않아요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609150/original/mrEkqfTb396wAksauTNvDzAnwiadUftaDw.png?1783594558)


링크는 다음과 같은 형태예요:

https://your-wordpress-site.com/wp-json/leadconnector-token/secure/<token>

### 링크 관리하기

링크가 활성화된 동안에는 만료까지 남은 시간을 보여주는 카운트다운이 표시돼요. 같은 화면에서 다음 작업도 할 수 있어요:

- 
링크 재생성: 새 링크를 생성하면 기존 링크는 즉시 무효화돼요. 한 번에 하나의 링크만 활성화될 수 있어요.


- 
링크 취소(회수): 즉시 접근 권한이 차단돼요. 이후 다시 접근 권한을 부여하려면 새 링크를 생성해서 공유하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075609144/original/I0PaAqxW2_q-LksK1w1oretTTQbDasyR1A.png?1783594558)


아무 조치를 하지 않으면 설정한 시간이 지나면 링크가 자동으로 작동을 멈춰요.

## 자주 묻는 질문

**안전한가요?** 네, 안전해요. 워드프레스 비밀번호는 전혀 공유되지 않고, 링크는 하이퍼클래스 전문가만 사용할 수 있으며, 자동으로 만료되고, 원하실 때 언제든 취소하실 수 있어요.

**워드프레스 아이디와 비밀번호를 꼭 공유해야 하나요?** 아니요. 보안 액세스 링크가 비밀번호 공유를 대체해요.

**마이그레이션이 실패하면 고객사에게 알림이 가나요?** 아니요. 실패 알림과 오류 로그는 에이전시 화면에만 표시되기 때문에 화이트라벨 경험이 그대로 유지돼요. 문제를 해결하기 전까지 고객사는 마이그레이션이 대기 중이거나 진행 중인 상태로만 보게 돼요.

**하위 계정 사용자가 직접 마이그레이션을 진행하게 할 수 있나요?** 초기 설정(LC Migrator 링크 생성이나 White-Glove 요청서 제출)은 반드시 에이전시 관리자가 먼저 시작해야 해요. 사이트가 정상적으로 운영되기 시작한 후에는, 부여한 권한 범위 내에서 고객사가 직접 관리할 수 있어요.

**White-Glove 마이그레이션은 얼마나 걸리나요?** 원본 사이트의 크기와 복잡도에 따라 대부분 영업일 기준 1~3일 이내에 완료돼요. 에이전시 화면에서 실시간으로 진행 상태를 확인할 수 있어요.

**마이그레이션에 시간이 더 필요해요. 어떻게 해야 하나요?** 새 링크를 생성하면서 더 긴 기간(최대 7일)을 선택하세요.

**지금 바로 접근 권한을 차단하려면 어떻게 하나요?** 보안 액세스 링크 화면을 열고 Revoke link(링크 취소)를 클릭하세요.

**링크가 만료되면 어떻게 되나요?** 자동으로 작동을 멈춰요. 접근 권한이 계속 필요하다면 새 링크를 생성해서 하이퍼클래스 전문가에게 공유하세요.

---

까다로운 마이그레이션에 도움이 필요하신가요? 대시보드에서 White-Glove 요청을 제출하시면 하이퍼클래스 고객지원 팀이 처리해드릴게요.

---
*원문 최종 수정: 2026-07-09*
*Hyperclass 사용 가이드 — hyperclass.ai*