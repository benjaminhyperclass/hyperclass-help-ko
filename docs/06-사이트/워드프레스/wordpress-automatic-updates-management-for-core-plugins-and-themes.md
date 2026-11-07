---
원문: /support/solutions/articles/155000004715-wordpress-automatic-updates-management-for-core-plugins-and-themes
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 코어·플러그인·테마 자동 업데이트 관리

WordPress 코어, 플러그인, 테마의 자동 업데이트를 각각 따로 켜고 끌 수 있어요. 직접 업데이트하는 수고는 줄이고, 사이트의 보안과 성능은 최신 상태로 유지해 보세요.

## 자동 업데이트의 장점

자동 업데이트를 쓰면 직접 확인하지 않아도 WordPress 사이트를 최신 상태로 유지할 수 있어요.

- 보안 강화: 제때 업데이트해서 보안 취약점을 막아 줘요.
- 성능 개선: 최신 개선 사항이 적용되어 사이트가 최적의 상태를 유지해요.
- 수작업 감소: WordPress 코어, 플러그인, 테마를 일일이 확인하고 업데이트하지 않아도 돼요.
- 원하는 대로 설정: 전체 업데이트, 마이너 업데이트, 자동 업데이트 끄기 중에서 필요에 맞게 고를 수 있어요.
- 간편한 관리: **WordPress Dashboard**(WordPress 대시보드)에서 업데이트를 쉽게 관리할 수 있어요.

## 자동 업데이트 관리 방법

**WordPress Dashboard**에서 WordPress 코어, 플러그인, 테마의 자동 업데이트를 관리할 수 있어요. 아래 순서대로 필요한 설정을 해 보세요.

### WordPress 코어 업데이트 관리

**고급 설정**에서 WordPress 코어 업데이트 방식을 정할 수 있어요.

1. **사이트**로 이동하세요.

   - **사이트 > WordPress Dashboard**로 이동한 다음, 관리할 사이트를 클릭하세요.

     ![사이트 목록에서 관리할 사이트를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080401122/original/VwJVtqMksHM46VDVD2j5ZsHWmBkdWsizZA.png?1788881473)
2. **고급 설정**을 여세요.

   - **고급 설정 > WordPress Management**(WordPress 관리)에서 **Core Update Preferences**(코어 업데이트 환경설정)를 찾으세요.

     ![고급 설정의 코어 업데이트 환경설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080401361/original/UFCI79Mx7t_jOy6RxUv3TQ-Y0oRiMZy-WA.png?1788881605)
3. 원하는 업데이트 방식을 고르세요.

   - **끔**: 자동 업데이트를 사용하지 않아요.
   - **Latest Version**(최신 버전): 사용할 수 있는 가장 최신 버전으로 업데이트해요.
   - **Minor Version**(마이너 버전): 마이너 버전 업데이트만 해요.

### 플러그인 업데이트 관리

설치된 플러그인마다 자동 업데이트를 켜거나 끌 수 있어요.

1. **WordPress Dashboard > 사이트 > 플러그인**으로 이동하세요.
2. 설치된 플러그인 목록을 찾으세요.
3. 자동 업데이트를 켜거나 끄세요.

   - 설치된 플러그인마다 원하는 대로 자동 업데이트를 켜거나 끌 수 있어요.

### 테마 업데이트 관리

설치된 WordPress 테마의 자동 업데이트를 관리할 수 있어요.

1. **WordPress Dashboard > 사이트 > 테마**로 이동하세요.
2. 설정할 테마를 선택하세요.
3. 자동 업데이트를 켜거나 끄세요.

   - 설치된 테마마다 자동 업데이트를 켜거나 끌 수 있어요.

![테마별 자동 업데이트 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080402436/original/YZ5sb3IoOCc0agyssKWGqp5-bS2NjptReQ.png?1788882166)

---

## 추적 및 분석

사용자가 자동 업데이트 설정을 어떻게 쓰는지 파악하기 위해 Pendo 트랙 이벤트를 적용했어요. 이 이벤트는 다음 일을 해요.

- 자동 업데이트 설정이 바뀔 때를 기록해요.
- 사용자가 자동 업데이트를 얼마나 자주 켜거나 끄는지 분석해요.
- 사용자 행동과 피드백을 바탕으로 기능을 개선하는 데 도움을 줘요.

이제 WordPress 자동 업데이트를 더 쉽고 유연하게, 효율적으로 관리할 수 있어요.

---

## 자주 묻는 질문

### 일부 플러그인에만 자동 업데이트를 켤 수 있나요?
네, 가능해요. WordPress Dashboard의 **플러그인**에서 설치된 플러그인마다 자동 업데이트를 따로 관리할 수 있어요.

### 자동 업데이트가 사이트 성능에 영향을 주나요?
자동 업데이트는 성능과 보안을 높이는 데 도움이 돼요. 다만 충돌을 피하려면 자동 업데이트를 켜기 전에 정기적으로 백업해 두는 것이 좋아요.

### 자동 업데이트를 모두 끄려면 어떻게 하나요?
**고급 설정**의 **Core Update Preferences**에서 **끔**을 선택하세요. 그다음 모든 플러그인과 테마의 자동 업데이트도 꺼 주세요.

### WordPress 코어의 마이너 업데이트와 메이저 업데이트를 따로 설정할 수 있나요?
네, 가능해요. 업데이트를 **Minor Versions Only**(마이너 버전만)로 제한하거나, **Latest Version**(최신 버전)까지 허용할 수 있어요.
---

## 다음 단계

- 현재 WordPress 업데이트 설정을 확인하고, 필요에 맞게 조정하세요.
- 중요한 플러그인과 테마에는 자동 업데이트를 켜서 안정적으로 운영하세요.
- Pendo 분석으로 업데이트 변경 내역을 살펴보면 더 나은 결정을 내리는 데 도움이 돼요.
- 충돌을 피하려면 자동 업데이트를 켜기 전에 사이트를 정기적으로 백업하세요.

WordPress 자동 업데이트를 활용하면 적은 노력으로 사이트를 안전하고 최신 상태로, 원활하게 운영할 수 있어요.
