---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005270-how-to-bulk-manage-saas-sub-accounts
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# SaaS 서브 계정 일괄 관리

하이퍼클래스의 **일괄 작업** 기능을 쓰면 에이전시 관리자가 여러 서브 계정을 한 번에 관리할 수 있어요. SaaS 모드 켜기, 서브 계정 일시정지, 작업 기록 확인을 직접 하나씩 하지 않아도 돼요. 서브 계정이 많아서 결제와 구독 설정을 더 빠르게 하고 싶을 때 이 문서를 참고하세요.

## SaaS 모드 한 번에 켜기

### 1단계: 일괄 작업할 서브 계정 선택

1. 에이전시 사이드바 메뉴에서 **서브 계정**을 클릭해 서브 계정 목록을 열어요.
2. **필터**나 **검색**으로 원하는 계정을 찾아요. 체크박스로 여러 계정을 선택하거나 **전체 선택**을 클릭해요.
3. **일괄 작업** 드롭다운을 클릭하고 **Enable SaaS**(SaaS 활성화)를 선택해요.

![서브 계정 목록에서 일괄 작업 드롭다운을 연 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046645291/original/0Uw6Cu0UEcHEt55VoUjeQfJ9IGPrkDZsPA.png?1747249448)

### 2단계: 결제 제공업체 선택

{% hint style="info" %}
Stripe를 사용하면 에이전시 **설정**에 연결된 계정이 자동으로 쓰여요.
이 단계를 진행하면 선택한 서브 계정마다 새 고객 프로필이 만들어져요.
{% endhint %}

1. 기본 **Stripe** 설정을 쓸지, **기타 결제 제공업체**를 쓸지 선택해요.
2. **기타 결제 제공업체**를 선택했다면, SaaS 모드를 관리할 때 사용할 에이전시 서브 계정도 골라요.

![결제 제공업체를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046645380/original/XM0kn08AHaQlH-hYc3TFGAg08xkWe0toPw.png?1747249649)

### 3단계: SaaS 구독 요금제 선택

{% hint style="warning" %}
SaaS 모드를 켜려면 요금제를 꼭 선택해야 해요. 요금제가 완전히 적용되려면 클라이언트가 결제 수단을 추가해야 해요.
{% endhint %}

계속 진행하기 전에 요금제 내용을 확인하세요. **구독 요금제 선택** 창에서는 요금제별 정보를 더 자세히 보여 줘요. 어떤 요금제를 켜는지 직접 확인할 수 있어요.

1. **선택** 버튼 위에 있는 **Show Full Details**(전체 정보 보기)를 클릭해요.

   ![구독 요금제 선택 창에서 전체 정보 보기를 클릭하는 화면](https://jumpshare.com/share/7v1siL0HSgt6gnu9u2W9+/Screenshot+2025-11-21+at+1.54.11%E2%80%AFPM.png)
2. 다음 항목을 확인할 수 있어요: 재청구 요율, 요금제에 포함된 **애드온**, 요금제에 포함된 **마켓플레이스 앱**, 요금제에 포함된 **사용자 정의 메뉴 링크**.

   ![요금제 상세 정보를 확인하는 화면](https://jumpshare.com/share/rbz3LnVy8nRbmHFpEwF1+/Screenshot+2025-11-21+at+1.55.15%E2%80%AFPM.png)

---

## 서브 계정 한 번에 일시정지하기

### 1단계: 일괄 작업할 서브 계정 선택 후 일시정지 시작

1. 에이전시 사이드바 메뉴에서 **서브 계정**을 클릭해 서브 계정 목록을 열어요.
2. **필터**나 **검색**으로 원하는 계정을 찾아요. 체크박스로 여러 계정을 선택하거나 **전체 선택**을 클릭해요.
3. **일괄 작업** 드롭다운을 클릭하고 **서브 계정 일시정지**를 선택해요.

{% hint style="info" %}
활동 여부나 요금제 상태 같은 조건으로 **필터**를 쓰면 일시정지할 계정을 쉽게 골라낼 수 있어요.
{% endhint %}

![서브 계정 목록에서 일괄 작업 드롭다운을 연 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046645291/original/0Uw6Cu0UEcHEt55VoUjeQfJ9IGPrkDZsPA.png?1747249448)

### 2단계: 일시정지 설정

이 계정들의 SaaS 구독과 전화번호·A2P 캠페인을 어떻게 처리할지 선택해요.

- **Pause active subscriptions**(활성 구독 일시정지): 이후 청구를 막아요.
- **Keep charging the clients**(클라이언트에게 계속 청구): 서브 계정 접근은 일시정지하지만 청구는 계속해요.
- **하이퍼클래스 전화번호 & A2P**: 요금이 나오지 않게 번호와 캠페인을 연결 해제하고 삭제할 수 있어요. 선택 사항이에요.

  ![일시정지 설정을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046645514/original/TrG96JS7PZTjzDP-BqajmUaUNoV8lZASmA.png?1747250153)
- **확인 후 진행**을 클릭해요.

{% hint style="info" %}
하이퍼클래스 전화 계정의 연결을 해제하지 않으면 사용 요금이 계속 청구될 수 있어요.
{% endhint %}

---

## 일괄 작업 기록 확인하기

### 1단계: 일괄 작업 기록 열기

1. **서브 계정** 섹션 아래의 **Bulk Action History**(일괄 작업 기록) 화면으로 이동해요.
2. 최근에 실행한 일괄 작업을 모두 볼 수 있어요. 작업 유형, 날짜, 사용자, 상태가 표시돼요.

![일괄 작업 기록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046645597/original/K0Z_bdvX115lmqCoxa0IUVRldsllY3mUiw.png?1747250395)

### 2단계: 작업 상세 결과 확인

1. 확인하고 싶은 작업 행을 클릭해요.
2. 어떤 서브 계정이 성공적으로 처리됐고, 어떤 계정이 실패했는지, 실패한 이유가 무엇인지 볼 수 있어요. 확인이 필요한 계정을 빠르게 찾을 수 있어요.
