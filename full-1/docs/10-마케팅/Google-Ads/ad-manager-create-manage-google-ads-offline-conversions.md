---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005431-ad-manager-create-manage-google-ads-offline-conversions
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 광고 관리자에서 Google Ads 오프라인 전환 만들고 관리하기

하이퍼클래스의 **광고 관리자**(Ad Manager)에서 Google Ads 오프라인 전환 액션을 직접 만들고, 편집하고, 관리할 수 있어요. 자격을 갖춘 리드나 판매처럼 Google Ads가 측정했으면 하는 오프라인 이벤트를 정할 때 쓰세요. 이 이벤트를 실제로 기록하려면 전환 데이터도 Google Ads로 보내야 해요.

{% hint style="info" %}
광고 관리자에서 전환 액션을 만들기 전에 Google 계정과 해당 Google Ads 계정을 하이퍼클래스에 연결하세요. 설정 방법은 'Google Ads를 광고 관리자에 연결하는 방법' 문서를 참고하세요.
{% endhint %}

## 광고 관리자에서 Google Ads 오프라인 전환을 만들고 관리한다는 건 무엇인가요?

Google Ads로 이동하지 않고 하이퍼클래스 안에서 오프라인 전환 액션을 설정하고 관리할 수 있다는 뜻이에요. 오프라인 전환은 자격을 갖춘 리드, 예약 완료, 계약 성사처럼 웹사이트나 앱 밖에서 일어나는 행동이에요. 이런 전환을 측정하면 고객 여정 전체를 파악하는 데 도움이 돼요.

이 기능으로 오프라인 전환 액션을 한곳에서 만들고, 편집하고, 확인할 수 있어요. 전환 이벤트를 Google Ads로 보내면 하이퍼클래스 워크플로우와 함께 리포팅과 최적화에 활용할 수 있어요.

{% hint style="info" %}
이 과정에서 만드는 것은 오프라인 전환 액션(Google Ads가 측정할 이벤트)이에요. 전환 이벤트 자체는 아니에요. 여기서 만든 액션은 연결된 Google Ads 계정과 동기화돼요. 실제 전환 이벤트를 보내려면 **Add to Google Ads**(Google Ads에 추가) 워크플로우 액션이나 지원되는 다른 가져오기 방법을 설정하세요. Google Ads에 이미 있던 전환 액션도 이 화면에 나타날 수 있어요.
{% endhint %}

## 주요 장점

- 간편한 설정: Google Ads 화면으로 이동할 필요 없이 하이퍼클래스 안에서 모두 관리해요.
- 일관된 트래킹: 하이퍼클래스 워크플로우 이벤트와 함께 쓸 수 있는 전환 액션을 정의해요.
- 시간 절약: 클릭 몇 번으로 전환을 빠르게 만들고 관리해요.
- 고급 리포팅: 오프라인 전환 이벤트가 Google Ads로 정상 전송되면 최적화와 어트리뷰션에 도움이 돼요.
- 한곳에서 관리: 동기화된 전환 액션을 확인하고, 지원되는 액션은 한곳에서 관리해요.
- 자동 동기화: 하이퍼클래스에서 만든 전환 액션은 연결된 Google Ads 계정과 동기화돼요.

## 오프라인 전환 만들고 관리하기

아래 순서대로 하이퍼클래스에서 오프라인 전환 액션을 만드세요. 만든 뒤에는 실제 전환 이벤트를 Google Ads로 보내는 방법을 설정해야 해요.

### 1단계: 광고 관리자 열기

1. 왼쪽 메뉴에서 **마케팅**을 클릭하세요.
2. 상단 메뉴에서 **광고 관리자**를 클릭하세요. 광고 도구가 모여 있는 캠페인 대시보드가 열려요.

![광고 관리자 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082989762/original/BSO1TmQJOj6VdV9FwZCnxtkbn6zOgJ1Y8A.png?1791576605)

### 2단계: 광고 관리자 설정 열기

1. 광고 관리자 대시보드에서 **캠페인 만들기** 버튼 옆의 **설정** 톱니바퀴 아이콘을 클릭하세요.
2. **광고 관리자 설정**이 열려요. 여기서 전환 트래킹과 플랫폼 환경을 설정할 수 있어요.

![광고 관리자 설정 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082989799/original/6Hkg39rKmxLFsR7GeJ_kaMdw8HHzuIWjbg.png?1791576754)

### 3단계: Google Ads 전환 화면 열기

1. **광고 관리자 설정**의 **플랫폼 설정**에서 **Google Ads**를 클릭하세요.
2. **전환** 탭으로 이동하세요. 연결된 Google Ads 계정에서 동기화된 전환 액션이 목록으로 나와요. 광고 관리자에서 만든 액션도 포함돼요.

![Google Ads 전환 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082989819/original/0Guzsxe_W7pYWfOcdo78YSQHK_KkD_AAIA.png?1791576794)

### 4단계: 새 전환 만들기

1. **전환** 화면 오른쪽 위의 **+ 새 전환 만들기** 버튼을 클릭하세요.

![새 전환 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082989835/original/ei-zglpzYypZOzVT6tWAkGuoQliR2vycfg.png?1791576833)

### 5단계: 전환 이름 입력

- 폼 맨 위의 **전환 이름**에 알아보기 쉬운 이름을 입력하세요. 나중에 리포트와 워크플로우에서 쉽게 찾을 수 있어요.

  예: 자격을 갖춘 리드 - 상담 예약

![전환 이름 입력](https://jumpshare.com/share/8kzw8iuLAxOkzBLqtw3n+/Screen+Shot+2026-01-30+at+6.16.15+PM.png)

### 6단계: 전환 소스 선택

- 폼의 **Conversion Source**(전환 소스) 드롭다운에서 **옵션을 선택하세요**.
- **전환된 리드**, **자격을 갖춘 리드**, **Purchase**(구매), **Signup**(가입) 같은 옵션은 측정할 전환의 종류를 나타내요. 추적하려는 이벤트와 가장 잘 맞는 것을 고르세요.

![전환 소스 선택](https://jumpshare.com/share/G1dvb7UT2a6lGvQEbCDM+/Screenshot+2026-01-30+at+6.25.18%E2%80%AFPM.png)

### 7단계: 전환 집계 방식 설정

- 광고 클릭 한 번당 전환을 어떻게 셀지 선택하세요.
- 반복 구매처럼 같은 광고 클릭에서 나온 전환을 여러 번 세려면 **클릭당 여러 개**를 선택하세요. 자격을 갖춘 리드처럼 광고 클릭 한 번당 전환을 하나만 세려면 **클릭당 하나**를 선택하세요.

![전환 집계 방식 설정](https://jumpshare.com/share/s4WRNpCmHU1iP0NQSF0u+/Screen+Shot+2026-01-30+at+6.32.03+PM.png)

### 8단계: 전환 값 설정

1. **모든 전환에 동일한 값 사용**: 모든 전환에 고정 금액을 적용해요. **Value**(값)를 입력하고(예: 50) **통화 코드**를 선택하세요(예: USD). 리드, 예약, 판매마다 수익이 거의 비슷할 때 알맞아요.

   ![모든 전환에 동일한 값 사용](https://jumpshare.com/share/geZ7mWXihGDbn0FP50zb+/Screen+Shot+2026-01-30+at+6.38.39+PM.png)
2. **전환마다 다른 값 사용**: 판매 금액이 제각각인 경우처럼 전환마다 수익이 다를 때 선택하세요. 이때도 기본 **Value**와 **통화 코드**를 입력해야 해요. 개별 값이 없을 때 이 기본값이 쓰여요. 전환마다 다른 값을 쓰려면 지원되는 워크플로우나 연동으로 전환 이벤트를 보낼 때 실제 값을 함께 보내세요.

   ![전환마다 다른 값 사용](https://jumpshare.com/share/EUuIvKFakkLcXu38wZUU+/Screen+Shot+2026-01-30+at+6.48.50+PM.png)
3. **Do not use value for this conversion action**(이 전환 액션에 값을 사용하지 않음): 금액 없이 전환 횟수만 추적해요. 값과 통화 필드가 비활성화되므로 설정이 간단해요. 수익이나 광고 지출 대비 수익률(ROAS)을 계산하지 않고, 가입이나 다운로드 같은 사용자 행동을 측정할 때 쓰세요.

   ![이 전환 액션에 값을 사용하지 않음](https://jumpshare.com/share/uNKSUCqYV0fksuS2ts4a+/Screen+Shot+2026-01-30+at+6.53.42+PM.png)

### 9단계: 전환 기간 설정

- 전환은 광고를 클릭하고 한참 뒤에 일어날 수도 있어요. **Conversion Window**(전환 기간)에서 광고 클릭 후 얼마 동안 전환을 추적할지 정하세요. 드롭다운에서 30일, 60일, 90일 같은 기간을 고르거나 직접 기간을 설정할 수 있어요.

![전환 기간 설정](https://jumpshare.com/share/6tD5imzgFagfwbNtkFsy+/Screen+Shot+2026-01-30+at+7.05.42+PM.png)

### 10단계: 전환 액션 저장

- 모든 항목을 입력했으면 **만들기** 버튼을 클릭해 새 오프라인 전환 액션을 저장하세요. 전환 액션은 연결된 Google Ads 계정에 만들어져요. 유효한 전환 데이터를 보내고 처리된 뒤에야 리포팅에 전환 이벤트가 포함돼요.
- 하이퍼클래스가 API로 Google Ads에 전환 액션을 만들기 때문에, Google Ads 화면에서 같은 액션을 따로 만들 필요가 없어요.

![전환 액션 저장](https://jumpshare.com/share/QBdaicP0udDYOtqSOjPn+/Screen+Shot+2026-01-30+at+7.08.33+PM.png)

{% hint style="info" %}
다음 단계: 전환 액션을 만든다고 전환이 자동으로 기록되지는 않아요. 하이퍼클래스에서 전환 이벤트를 보내려면 알맞은 트리거와 전환 액션으로 **Add to Google Ads** 워크플로우 액션을 설정하세요. 어트리뷰션을 위해 필요한 Google 광고 클릭 식별자가 수집되고 있는지도 확인하세요.
{% endhint %}

## 전환 편집하거나 삭제하기

{% hint style="info" %}
이 광고 관리자 과정에서는 어트리뷰션 모델이 데이터 기반(Data-driven)으로 고정되어 있고 여기서 바꿀 수 없어요. 모든 Google Ads 전환 액션이 같은 어트리뷰션 모델을 쓴다는 뜻은 아니에요.
{% endhint %}

하이퍼클래스에서 만든 전환 액션은 해당 옵션이 있을 때 **편집**하거나 **삭제**할 수 있어요. Google Ads에서 직접 만든 기존 액션도 목록에 나타날 수 있지만, 사용할 수 있는 관리 옵션은 다를 수 있어요.

1. 전환 옆의 점 3개 메뉴를 클릭하세요.
2. **편집** 또는 **삭제**를 선택하세요.

![전환 편집·삭제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082989844/original/sf5jKudTI0qSt0SXjxy_LBKRyae4n_s67Q.png?1791576886)

## 자주 묻는 질문

### 이 기능으로 웹사이트 전환 액션도 설정할 수 있나요?

아니요. 이 광고 관리자 과정은 오프라인 전환 액션 전용이에요. 웹사이트 전환 트래킹은 Google Ads의 해당 트래킹 설정에서 따로 해야 해요.

### 하이퍼클래스에서 만든 전환이 Google Ads에도 나타나나요?

네. 전환 액션은 API를 통해 연결된 Google Ads 계정에 만들어져요. 이 액션에 맞는 전환 이벤트가 정상적으로 전송되고 처리되면 리포팅에 나타나요.

### 전환 액션을 만들면 전환 이벤트가 자동으로 전송되나요?

아니요. 액션을 만드는 것은 Google Ads가 무엇을 측정할지 정의하는 일이에요. 실제 전환 이벤트를 보내려면 [**Add to Google Ads** 워크플로우 액션](../../07-워크플로우/Integrations-Workflow-Actions/workflow-action-add-to-google-ads.md)이나 지원되는 다른 가져오기 방법을 설정해야 해요.

### 하이퍼클래스에서 Google Ads에 있는 기존 전환을 편집하거나 삭제할 수 있나요?

하이퍼클래스에서 사용 가능한 Google Ads 전환 액션을 확인할 수 있어요. 하이퍼클래스에서 만든 액션은 점 3개 메뉴로 편집하거나 삭제하세요. Google Ads에서 직접 만든 액션은 어떤 관리 옵션을 쓸 수 있는지 확인해 보세요. 모든 액션이 같은 기능을 지원하지는 않을 수 있어요.

### 어떤 종류의 오프라인 전환을 추적할 수 있나요?

자격을 갖춘 리드, 예약 완료, CRM에 기록된 구매 같은 오프라인 이벤트에 대한 액션을 만들 수 있어요. 이런 이벤트도 지원되는 방법으로 Google Ads에 보내야 전환으로 집계돼요.

### Google Ads에서 바꾼 내용이 하이퍼클래스에도 반영되나요?

연결된 Google Ads 계정에서 지원되는 전환 액션은 동기화되면 이 화면에 나타나요. Google Ads에서 바꾼 내용이 아직 하이퍼클래스에 보이지 않으면 연결된 계정을 확인하고, 정보가 새로 고쳐질 때까지 기다려 보세요.
