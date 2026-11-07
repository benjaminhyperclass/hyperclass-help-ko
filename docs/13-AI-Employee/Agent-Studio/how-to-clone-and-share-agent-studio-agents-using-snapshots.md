---
원문: /support/solutions/articles/155000007504-how-to-clone-and-share-agent-studio-agents-using-snapshots
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 스냅샷으로 에이전트 스튜디오 에이전트 복제하고 공유하기

잘 만든 AI 에이전트를 **계정 스냅샷**에 담아 여러 서브 계정에 복제하고 배포하는 방법을 안내해요. 에이전트와 연결된 자산을 스냅샷에 담고, 다른 계정에 불러오고, 스냅샷 링크나 마켓플레이스로 공유하거나 판매하는 과정까지 다뤄요. 에이전시 보기에서 진행하는 기능이에요.

## 에이전트 스튜디오 스냅샷이란?

에이전트 스튜디오 스냅샷은 AI 에이전트를 하나 이상 **계정 스냅샷**에 담아, 다른 서브 계정에 불러올 수 있게 해 주는 기능이에요.

스냅샷에 포함하면 다음 내용이 그대로 유지돼요.

- 에이전트 플로우 구조
- 노드 설정
- 연결된 지식 베이스
- 버전 상태(**Draft**(초안), **Staging**(스테이징), **Production**(프로덕션))
- 함께 선택한 지원 자산

새 계정마다 에이전트를 처음부터 다시 만들 필요가 없어요.

## 스냅샷으로 에이전트를 배포하면 좋은 점

스냅샷으로 에이전트를 배포하면 에이전시가 더 빠르게 확장하고 일관성도 유지할 수 있어요.

- 에이전트를 바로 복제해요: 복잡한 AI 에이전트도 몇 분 안에 다른 계정으로 복사할 수 있어요.
- 설정이 그대로 유지돼요: 에이전트의 버전 상태와 로직이 그대로 남아요.
- 연관 자산도 함께 옮겨 가요: 지식 베이스와 선택한 자산이 에이전트와 함께 이동해요.
- 온보딩을 표준화해요: 새 고객이 설정이 끝난 AI 자동화로 바로 시작할 수 있어요.
- 배포와 수익화가 가능해요: 스냅샷을 외부에 공유하거나 판매할 수 있어요.

## 에이전트 스냅샷 만들기

에이전트 스튜디오 에이전트를 스냅샷에 담는 방법이에요.

### 1단계: 계정 스냅샷으로 이동

1. **에이전시 보기로 전환**을 선택하세요.
2. **계정 스냅샷**으로 이동하세요.
3. **새 스냅샷 생성**을 클릭하세요.

![계정 스냅샷 화면에서 새 스냅샷 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066819121/original/HleAevJiPdYqrKr6yERei_HgxdWf0ItOwA.png?1773334189)

### 2단계: 이름 입력하고 원본 계정 선택

1. **스냅샷 이름**을 입력하세요.
2. 에이전트가 들어 있는 서브 계정을 선택하세요.
3. **다음**을 클릭하세요.

![스냅샷 이름 입력과 원본 서브 계정 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066819528/original/-3Nvfr6v8TfkHQUk8mvZX-TdVC2J8AiqVQ.png?1773334423)

### 3단계: 에이전트 스튜디오 자산 선택

1. **에이전트 스튜디오** 카테고리를 펼치세요.
2. 스냅샷에 담을 에이전트를 선택하세요.
3. 함께 담을 지원 자산을 선택하세요(예: 지식 베이스, 워크플로우, 커스텀 값).
4. 오른쪽 아래의 **만들기**를 클릭하세요.

선택한 에이전트와 자산이 스냅샷으로 묶여요.

![에이전트 스튜디오 자산 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066819942/original/SlEEvHp3IJoXKKHX2SHt6bdpcEMP-LjuDw.png?1773334679)

{% hint style="warning" %}
에이전트가 지식 베이스를 사용한다면, 스냅샷을 만들 때 그 지식 베이스도 꼭 선택해야 해요. 스냅샷에는 선택한 자산만 담겨요. 연결된 지식 베이스를 선택하지 않으면 에이전트가 참고 자료 없이 불러와질 수 있어요. 진행하기 전에 항상 자산 선택 화면을 확인하세요.

![지식 베이스를 선택하는 자산 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838299/original/awGX4bvcPjZjTuR9X__U2w4lnVrFoZQHVg.png?1773368022)
{% endhint %}

### 4단계: 스냅샷 상세 정보 확인

스냅샷을 만들고 나면 스냅샷 상세 화면을 볼 수 있어요.

이 화면에서 다음 내용을 확인할 수 있어요.

- 포함된 에이전트
- 포함된 지식 베이스
- 전체 자산 수

## 서브 계정에 에이전트 스냅샷 불러오기

스냅샷은 서브 계정 하나에 불러올 수도 있고, 여러 서브 계정에 한꺼번에 배포할 수도 있어요.

### 방법 1: 서브 계정 하나에 불러오기

1. **에이전시 보기 > 서브 계정**으로 이동하세요.

   ![에이전시 보기의 서브 계정 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838348/original/b3ysmTJbUNGOoaztWYjLZTm_vmWP-0x0dw.png?1773368390)
2. 계정 옆의 점 세 개 메뉴를 클릭하고 **고객 관리**를 선택하세요.

   ![점 세 개 메뉴에서 고객 관리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838382/original/TY9XBjHiWjLqh5z1i1EhWozAjazwGEWjTA.png?1773368520)
3. **작업 > Load Snapshot**(스냅샷 불러오기)을 선택하세요.

   ![작업 메뉴에서 Load Snapshot 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838434/original/1nJUggswqmXRs19WqKdwhOfQBO62tkAL0g.png?1773368685)
4. 불러올 스냅샷을 선택하세요.

   ![불러올 스냅샷 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838458/original/TDnGVjFheDThnS-zlInvlNm74t6egphrHA.png?1773368798)
5. **에이전트 스튜디오** 카테고리를 선택하세요(또는 **Select All**(전체 선택)). 그런 다음 가져오기를 확인하세요.

   ![에이전트 스튜디오 카테고리 선택과 가져오기 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838579/original/0RPunN1c3JMGsagchAbL1iJPIyxUvG1xFg.png?1773369214)

불러오기가 끝나면 대상 서브 계정의 **에이전트 스튜디오**에 에이전트가 나타나요.

### 방법 2: 여러 서브 계정에 한꺼번에 배포하기

1. **계정 스냅샷**으로 이동하세요.
2. 스냅샷을 여세요.
3. **Push Snapshot**(스냅샷 푸시)을 클릭하세요.
4. 배포할 서브 계정을 선택하세요.
5. 자산을 선택하세요.
6. 충돌 확인을 진행하세요.

이 방법을 쓰면 여러 계정에 한 번에 배포할 수 있어요.

![여러 서브 계정에 스냅샷을 푸시하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066838680/original/5HmXCmjbP5dgBLNWv7Loo3FNE4t4psGl_Q.png?1773369590)

## 가져올 때 충돌 해결하기

대상 계정에 이름이 같은 자산이 이미 있으면 하이퍼클래스가 충돌을 해결하라고 안내해요.

다음 중에서 선택할 수 있어요.

- 두 사본 모두 유지
- 기존 항목 덮어쓰기
- 충돌 확인으로 계속 진행

마무리하기 전에 충돌 내용을 항상 확인하세요.

## 스냅샷 버전과 새로고침

스냅샷은 버전을 따로 관리해요.

원본 계정에서 에이전트를 수정했다면 다음과 같이 하세요.

1. **계정 스냅샷**으로 돌아가세요.
2. 스냅샷을 선택하세요.
3. **새로고침**을 클릭하세요.

그러면 스냅샷이 최신 에이전트 설정으로 업데이트되고 새 버전이 만들어져요.

이후 업데이트된 버전을 서브 계정에 푸시하면 돼요.

## 에이전트 스냅샷 공유하거나 판매하기

스냅샷은 에이전시 밖으로도 공유할 수 있어요.

공유하는 방법은 다음과 같아요.

1. **계정 스냅샷**으로 이동하세요.
2. 점 세 개 메뉴를 클릭하세요.
3. **스냅샷 공유**를 선택하세요.
4. 공유 링크 또는 마켓플레이스 리스팅을 생성하세요.

받는 사람은 그 스냅샷을 자신의 하이퍼클래스 계정에 불러올 수 있어요.

{% hint style="info" %}
마켓플레이스에서 수익화하려면 SaaS 플랜 요건을 충족해야 해요.
{% endhint %}

## 스냅샷에 포함되지 않는 것

스냅샷에는 다음 항목이 포함되지 않아요.

- 연락처
- 대화 기록
- 메시지
- 실시간 데이터

설정과 선택한 자산만 옮겨져요.

## 필요한 권한

사용자에게 다음 권한이 있어야 해요.

- 스냅샷을 만들려면 **Create Snapshots**(스냅샷 생성) 권한
- 스냅샷을 불러오거나 공유하려면 **Share/Import Snapshots**(스냅샷 공유/가져오기) 권한

권한은 관리자가 관리해요.

## 자주 묻는 질문

### 스냅샷을 불러오면 기존 에이전트가 덮어써지나요?
같은 ID를 가진 에이전트가 있을 때만 덮어써져요. 이때 충돌을 해결하라는 안내가 나와요.
### 지식 베이스도 자동으로 포함되나요?
스냅샷을 만들 때 선택한 경우에만 포함돼요.

### 내 에이전시 밖의 스냅샷도 불러올 수 있나요?
네, 공유 링크나 마켓플레이스 배포를 통해 불러올 수 있어요.

### 버전 상태도 그대로 유지되나요?
네. Draft, Staging, Production 상태가 그대로 유지돼요.

### 가져오면 API 엔드포인트에 영향이 있나요?
API 엔드포인트는 계속 사용할 수 있지만, 계정별 토큰은 업데이트해야 할 수 있어요.
