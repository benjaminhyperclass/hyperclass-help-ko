---
원문: /support/solutions/articles/48001223558-how-to-integrate-tiktok-lead-ads
번역일: 2026-11-06
카테고리: 42-통합
---

# TikTok Lead Ads 연동하기

TikTok 리드 광고로 모은 리드를 하이퍼클래스로 바로 가져오는 방법을 안내해요. TikTok 계정을 연결하고 폼 필드를 매핑하면 워크플로우로 후속 작업까지 자동화할 수 있어요.

TikTok Lead Ads는 이제 마켓플레이스 기반 연동을 지원해요. 인증과 계정 관리가 더 안전하고 안정적으로 바뀌었고, 기존 TikTok Lead Ads 연결과 워크플로우는 그대로 호환돼요.

이 문서에서는 TikTok Lead Ads를 연결하는 방법, 리드 폼 필드를 매핑하는 방법, 연동을 관리하는 방법, 자주 묻는 질문을 다뤄요.

## TikTok Lead Ads 연동은 이렇게 동작해요

TikTok Lead Ads 연동은 TikTok 리드 생성 폼을 하이퍼클래스에 연결해서, 폼으로 들어온 리드를 CRM에 쌓아 줘요.

TikTok 계정을 연결하고 리드 폼 설정을 마치면, TikTok Lead Ads로 제출된 리드가 하이퍼클래스로 동기화될 수 있어요.

새 리드가 폼을 제출할 때 후속 작업을 자동으로 실행하고 싶다면 **TikTok Form Submitted**(TikTok 폼 제출) 워크플로우 트리거를 쓰세요. 자세한 내용은 [워크플로우 트리거 — TikTok Form Submit](../../07-워크플로우/TikTok-Workflow-Triggers/workflow-trigger-tiktok-form-submit.md) 문서에서 확인할 수 있어요.

## 마켓플레이스 연동에서 달라진 점

TikTok Lead Ads가 마켓플레이스 구조로 옮겨 가면서 다음과 같이 개선됐어요.

- 인증 강화: 새로 만드는 연결은 마켓플레이스 인증 방식을 사용해서 자격 증명을 더 안전하게 다루고 계정 보안도 높아져요.
- 안정성 개선: 마켓플레이스 구조 덕분에 연동을 더 꾸준히 유지·관리할 수 있어요.
- 계정 관리 화면 개편: 연결 확인, 광고 계정 선택, 리드 폼 매핑을 각각 전용 화면에서 할 수 있어요.
- 하위 호환: 기존 연결과 워크플로우는 다시 설정하지 않아도 계속 동작해요.
- 이후 개선 예정: 새 구조를 바탕으로 멀티 계정 지원 같은 기능이 추가될 예정이에요.

{% hint style="warning" %}
하나의 서브 계정에서 여러 계정을 지원하는 기능은 개선 계획 단계예요. 이번 릴리스에서 사용할 수 있다고 확정된 것은 아니에요.
{% endhint %}

## 시작하기 전에

TikTok Lead Ads를 연결하기 전에 다음을 준비하세요.

- 연결할 TikTok Business 계정에 대한 접근 권한
- TikTok 광고 계정
- 리드 생성 캠페인용으로 만든 TikTok 인스턴트 폼
- 리드를 받을 하이퍼클래스 서브 계정에 대한 접근 권한

TikTok 리드 생성 캠페인을 만드는 방법은 [TikTok 공식 문서](https://ads.tiktok.com/)를 참고하세요.

## 마켓플레이스로 TikTok Lead Ads 연결하기

TikTok Lead Ads는 이제 보안, 인증, 계정 관리가 강화된 마켓플레이스 기반 연결을 지원해요. 기존 연결·워크플로우와 호환되고, 앞으로 추가될 기능도 이 구조 위에서 제공될 예정이에요.

얼리 액세스 기간에는 **실험실**에서 마켓플레이스 연동을 켤 수 있어요.

### 1단계: TikTok Lead Ads 연결하기

1. 하이퍼클래스 서브 계정에서 **설정 > 연동**으로 이동하세요.
2. **TikTok Lead Ads**(TikTok 리드 광고)를 찾아 **연결**을 클릭하면 연결 과정이 시작돼요.

![연동 목록에서 TikTok Lead Ads 연결 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084539119/original/sGWzy2pSdU0kcGcQqGa-hoag0cLxDGoeJQ.png?1793296404)

### 2단계: 연결된 계정 확인하기

연결이 끝나면 **외부 연결**을 열어 보세요. TikTok 계정의 이름, 이메일 주소, 연결 상태를 확인할 수 있어요.

![외부 연결 화면에서 TikTok 계정 정보 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084539138/original/GkmkKXG9QLrETfni5dgQYWidffZ7BqyoUQ.png?1793296448)

### 3단계: 광고 계정 선택하기

1. **Manage Tiktok Accounts**(TikTok 계정 관리) **> 광고 계정**을 여세요.
2. 사용할 광고 계정을 선택하고 **저장**을 클릭하세요.

선택한 계정의 동기화 상태가 화면에 표시돼요.

![광고 계정을 선택하고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084539180/original/hKTZwlY1MvYuKW-1qtwlkaAEKtZlIBsNXQ.png?1793296471)

### 4단계: 리드 폼 확인하기

1. **Manage Tiktok Accounts > 폼 필드 매핑**을 여세요.
2. 사용할 수 있는 폼의 **페이지 ID**, **폼명**, **매핑**, **동기화 상태**를 확인하세요.
3. 폼 목록을 새로 불러오려면 **Refresh Forms**(폼 새로고침)를 클릭하세요.

**작업** 열에서는 각 폼의 매핑을 관리할 수 있어요.

![폼 필드 매핑 화면에서 폼 목록 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084539195/original/pLrEP1PP-Y9bhKNnTO6PtgR99DsHwTv7eQ.png?1793296494)

### 5단계: 폼 필드 매핑하기

1. **작업** 열에서 원하는 폼의 편집 아이콘을 클릭하세요.
2. **필드 매핑** 창에서 드롭다운을 사용해 TikTok 폼 필드를 알맞은 CRM 필드와 하나씩 짝지어 주세요.
3. 필드별 상태를 확인하고 **확인**을 클릭해 저장하세요.

매핑이 잘 끝난 필드에는 **매핑됨** 상태가 표시돼요.

![필드 매핑 창에서 TikTok 폼 필드와 CRM 필드 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084539207/original/He2sWasiCRqs9gCgqMrhAu8BsDtIxQ9z9g.png?1793296525)

### 기존 연결은 어떻게 되나요?

기존 TikTok Lead Ads 연결과 워크플로우는 다시 설정하지 않아도 계속 동작해요.

얼리 액세스 기간에는 이전 연결이 기존 구조에 그대로 남아 있어요. 하이퍼클래스는 마켓플레이스 연동이 **실험실**에서 정식 기능으로 전환된 뒤, 사용자가 따로 할 일 없이 기존 연결을 자동으로 이전할 계획이에요.

{% hint style="info" %}
마켓플레이스 구조는 하나의 서브 계정에서 여러 계정을 지원하는 기능을 비롯해 앞으로 추가될 기능의 바탕이 돼요. 이 기능을 사용할 수 있다고 확정된 것은 아직 아니에요.
{% endhint %}

## 자주 묻는 질문

### 마켓플레이스로 옮긴 뒤에 TikTok 계정을 다시 연결해야 하나요?

아니요. 기존 TikTok Lead Ads 연결은 이번 이전 때문에 다시 연결하거나 다시 설정하지 않아도 계속 동작하도록 만들어졌어요.

### 기존 TikTok Lead Ads 워크플로우는 계속 동작하나요?

네. 기존 TikTok Lead Ads 워크플로우는 마켓플레이스 이전 후에도 호환돼요.

### 마켓플레이스 기반 TikTok Lead Ads 연동은 어떻게 사용하나요?

얼리 액세스 기간에는 **실험실**에서 마켓플레이스 연동을 사용할 수 있어요.

### 마켓플레이스 기능이 실험실에 있는 동안 기존 연동은 어떻게 되나요?

얼리 액세스 기간에는 기존 연결이 이전 연동 구조에 그대로 남아 있어요.

하이퍼클래스는 마켓플레이스 기능이 **실험실**에서 정식 기능으로 전환된 뒤 이 연결들을 자동으로 이전할 계획이에요.

### 같은 서브 계정에서 TikTok 계정을 여러 개 관리할 수 있나요?

마켓플레이스 구조는 앞으로 멀티 계정을 지원하기 위한 바탕이 돼요.

다만 현재 릴리스에서 이 기능을 사용할 수 있다고 확정된 것은 아니에요.

### 마켓플레이스로 이전하면 TikTok 리드를 가져오는 방식이 바뀌나요?

기존 리드 수집 워크플로우는 달라지지 않아요. 이번 이전은 연동 구조, 인증, 계정 관리를 개선하는 데 초점을 맞췄어요.

### TikTok 계정이 연결되어 있는지 어떻게 확인하나요?

마켓플레이스 연결이라면 **설정 > 연동 > TikTok Lead Ads > 외부 연결**을 열어 계정의 연결 상태를 확인하세요.

### TikTok 리드 폼 필드 매핑은 어디에서 설정하나요?

마켓플레이스 연결이라면 **설정 > 연동 > TikTok Lead Ads > Manage Tiktok Accounts > 폼 필드 매핑**에서 설정하세요.

## 관련 문서

- [워크플로우 트리거 — TikTok Form Submit](../../07-워크플로우/TikTok-Workflow-Triggers/workflow-trigger-tiktok-form-submit.md)
- [TikTok Ads — 광고 관리자에서 리드 생성 캠페인 시작하기](../../44-신기능-2026/tiktok-ads-launch-lead-gen-campaigns-in-ad-manager.md)
- [TikTok Ads Manager](https://ads.tiktok.com/)
