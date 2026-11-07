---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003908-create-sites-using-cloning-functionality
번역일: 2026-11-07
카테고리: 06-사이트
---

# 복제 기능으로 WordPress 사이트 만들기

사이트 복제 기능을 쓰면 기존 WordPress 사이트를 콘텐츠, 설정, 테마, 플러그인까지 통째로 복제해 새 사이트를 만들 수 있어요. 같은 서브 계정 안의 에이전시 소유자, 에이전시 사용자, 계정 사용자가 쓸 수 있어요. 복제한 사이트는 원본과 독립적이라, 원본에 영향을 주지 않고 자유롭게 수정할 수 있어요.

## 1단계: WordPress 대시보드로 이동

1. 하이퍼클래스 계정에서 WordPress 섹션으로 이동하세요.
2. **새로 만들기** 또는 **Select Blank WordPress**(빈 WordPress 선택)를 클릭하세요.

{% hint style="info" %}
복제 옵션을 보려면 역할별 권한(에이전시 소유자, 에이전시 사용자, 계정 사용자)이 있어야 해요.
{% endhint %}

![WordPress 대시보드에서 새로 만들기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036263447/original/bJxAs8rRN1QxT6ddV72jCCJhmHeP9csUrQ.png?1731085495)

## 2단계: 사이트 복제 시작

기존 사이트로 복제하는 옵션이나 **설정 미완료** 카드를 찾아요.

1. **설정 미완료** 카드를 클릭하세요.
2. **Choose From Existing Site**(기존 사이트에서 선택) 옵션을 선택하세요.

{% hint style="info" %}
복제 옵션이 보이지 않으면 사용자 권한이 부족해서일 수 있어요.
{% endhint %}

![설정 미완료 카드에서 기존 사이트 선택 옵션을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036263483/original/aOMQkm3b6832CBkgq41Q6izG8IdndEWKiA.png?1731085522)

## 3단계: 소스 사이트 선택 및 복제 설정

먼저 서브 계정과 소스 사이트를 골라요.

1. 드롭다운 메뉴의 **서브 계정 선택**에서 서브 계정을 선택하세요.
2. **소스 사이트 선택**에서 복제할 사이트를 고르세요.

다음으로 **사이트 세부 정보**를 입력해요.

1. **New Website Name**(새 웹사이트 이름) 필드에 새로 복제할 사이트의 이름을 입력하세요.
2. **복제** 버튼을 클릭하면 복제가 시작돼요.

{% hint style="info" %}
- 복제 상태를 보여 주는 실시간 표시로 진행 상황을 확인할 수 있어요.
- 권한이 복제 요건에 맞지 않으면 일반적인 새 사이트 만들기 흐름으로 진행돼요.
{% endhint %}

![서브 계정과 소스 사이트를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036263584/original/Po75u8xeQxTKo0wV-A57iDS4Vnx_HTbG1g.png?1731085598)
![새 사이트 이름을 입력하고 복제를 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036263745/original/_jugsJHzdCuk6-zT1B8RAc5DkLrkAixdAQ.png?1731085796)

## 4단계: 확인 및 마무리

새로 복제된 사이트를 열어 확인하세요.

- 복제된 사이트는 원본과 완전히 독립적이에요.
- 어느 한쪽 사이트를 수정해도 다른 쪽에는 영향이 없어요.

{% hint style="info" %}
복제한 사이트는 하이퍼클래스 대시보드에서 다른 WordPress 사이트와 똑같이 관리할 수 있어요.
{% endhint %}

![복제된 사이트가 목록에 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036263604/original/kvGemW5DkNV_QAcnUrlUySqtHmv9g40jtQ.png?1731085634)
![복제된 사이트를 관리하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036263654/original/NMrb8UB4qaSxKvVW-xnlMGCeFWHxreIvDA.png?1731085661)

## 알아 두면 좋은 내용

### 사용자 권한과 접근 제어

- 같은 서브 계정 안의 에이전시 소유자, 에이전시 사용자, 계정 사용자처럼 특정 역할을 가진 사용자만 복제 기능을 쓸 수 있어요.
- 사이트를 복제하기 전에 내 역할에 필요한 권한이 있는지 확인하세요.

### 자주 겪는 문제 해결

- **문제**: 복제 옵션이 보이지 않아요.
  - **솔루션**: 내 사용자 역할의 권한을 확인하세요. 에이전시 또는 계정 수준의 권한으로 로그인했는지도 확인하세요.
- **문제**: 복제가 진행되다가 멈췄어요.
  - **솔루션**: 대시보드를 새로고침한 뒤 진행 상태 표시를 확인하세요. 그래도 해결되지 않으면 하이퍼클래스 고객지원에 문의하세요.

사용자 역할과 권한 관리에 대한 자세한 내용은 [WordPress 사용자 역할 안내](https://wordpress.com/support/invite-people/user-roles/)에서 볼 수 있어요.

이 가이드를 따라 하면 WordPress 사이트를 효율적으로 복제하고, 여러 환경에서 일관된 설정을 유지할 수 있어요.
