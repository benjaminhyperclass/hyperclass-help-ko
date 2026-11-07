---
원문: /support/solutions/articles/155000001571-how-to-duplicate-a-dashboard-to-another-sub-account
번역일: 2026-11-07
카테고리: 12-대시보드
---

# 대시보드를 다른 서브 계정으로 복제하기

**대시보드**를 다른 서브 계정으로 복제할 수 있어요. 이 문서에서는 복제하는 절차와, 복제한 뒤 연결이 끊어진 데이터 소스를 처리하는 방법을 안내해요.

## 대시보드 복제란?

**대시보드**는 서브 계정 안에서 만들고 사용해요. 같은 서브 계정 안에 복사본을 만들려면 대시보드를 클론하면 돼요. 다른 서브 계정에 복사본을 만들려면 대시보드를 복제하면 돼요.

{% hint style="warning" %}
대시보드를 복제하려면 두 서브 계정에 모두 접근할 수 있어야 해요.

데이터 소스는 복제되지 않아요. 원본 대시보드의 위젯이 커스텀 값에서 데이터를 가져오고 있었다면, 복제한 대시보드에는 빨간색으로 표시되는 위젯이 생겨요. 이 위젯은 삭제하거나 알맞은 데이터 소스에 연결해야 해요.
{% endhint %}

## 대시보드 복제하기

### 1단계: 다른 서브 계정으로 복제 시작하기

1. 복제할 대시보드가 있는 서브 계정에서 **대시보드**로 이동해요.
2. 작업 메뉴(점 3개)를 클릭해요.
3. **Duplicate to another sub-account**(다른 서브 계정으로 복제) 버튼을 클릭해요.

![대시보드 작업 메뉴에서 다른 서브 계정으로 복제 버튼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044574029/original/O0vLGEhSqiGmFIt4VNamMSXhB6_apE0dLA.png?1743807699)

### 2단계: 설정하고 저장하기

1. **Duplicate to another sub-account** 창에서 새 대시보드의 이름을 입력해요.
2. 복제본을 만들 대상 서브 계정을 선택해요.
3. **중복** 버튼을 클릭해요.

대상 서브 계정에 새 대시보드가 만들어져요.

![복제 창에서 새 대시보드 이름과 대상 서브 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044574066/original/CfhzKZoA-sYi9VuC3Vo-gMX4Uze5Rpy0yQ.png?1743807853)

### 3단계: 끊어진 데이터 소스 연결하기

대시보드의 위젯이 사용하던 데이터 소스가 대상 서브 계정에 없으면, 그 위젯은 빨간색 테두리와 함께 "error while loading data"(데이터를 불러오는 중 오류가 발생했어요)라는 오류 메시지로 표시돼요. 이런 위젯은 삭제하거나 알맞은 데이터 소스에 연결하세요.

![데이터 소스가 없어 빨간 테두리로 표시된 위젯](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015087054/original/Xd5krK3uQ5EeDaHSuHJlZUc6m11FoqnVJA.png?1702455026)

![위젯을 삭제하거나 데이터 소스에 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015087138/original/gSvpp7XniIQCPh8SX63Kc9tq5DUv1Cz_lw.png?1702455110)
