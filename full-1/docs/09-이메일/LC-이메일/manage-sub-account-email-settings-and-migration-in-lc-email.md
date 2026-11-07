---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002222-manage-sub-account-email-settings-and-migration-in-lc-email
번역일: 2026-11-06
카테고리: 09-이메일
---

# 서브 계정 이메일 설정 관리와 하이퍼클래스 이메일로 옮기기

에이전시 설정에서 서브 계정의 이메일 제공업체를 필터로 찾고, 하나씩 또는 한꺼번에 하이퍼클래스 이메일로 옮길 수 있어요. 이 문서에서는 이메일 제공업체별 필터, 서브 계정 이전, 전용 도메인 지정 방법과 도메인 공유에 관한 자주 묻는 질문을 다뤄요. 에이전시 관리자만 쓸 수 있는 기능이에요.

## 서브 계정의 이메일 제공업체 필터링하기

**에이전시 설정 > 이메일 서비스 > Location Settings**(서브 계정별 설정)로 이동해서 **필터** 버튼을 클릭하세요. 모든 서브 계정의 이메일 서비스 기록이 페이지에 표시돼요.

![에이전시 설정 > 이메일 서비스 > Location Settings 화면의 필터 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252712/original/YmM2wAiqU-5jolPSNg2Yn16al7uTDzUjeA.jpg?1722446880)

필터 옵션은 세 가지예요.

1. **하이퍼클래스**: 기본 이메일 서비스로 하이퍼클래스를 쓰는 서브 계정
2. **Mailgun**: 기본 이메일 서비스로 Mailgun을 쓰는 서브 계정
3. **Others**(기타): 직접 가진 외부 이메일 서비스 제공업체를 쓰는 서브 계정

### 하이퍼클래스로 필터링하기

기본 이메일 서비스로 하이퍼클래스를 쓰는 서브 계정을 모두 찾아요. 필터를 함께 걸어 범위를 더 좁힐 수도 있어요. 예를 들어 도메인 이름과 이메일 인증 상태를 동시에 걸 수 있어요.

- 전용 도메인 이름으로 필터링
- 이메일 인증 사용/사용 안 함으로 필터링

![하이퍼클래스 필터 옵션에서 도메인 이름과 이메일 인증 필터를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252730/original/b3tXfxAa4jIefKeh_KPWLI_n0rYjeUzp-Q.jpg?1722446912)

### Mailgun으로 필터링하기

기본 이메일 서비스로 Mailgun을 쓰는 서브 계정을 모두 찾아요. 특정 Mailgun 전용 도메인으로 필터링할 수도 있어요.

![Mailgun 필터 옵션에서 전용 도메인 필터를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252742/original/8HTaDVlXljCwRhzz-CWLg4TUNIMzjyR3ZQ.jpg?1722446942)

### Others(기타)로 필터링하기

직접 가진 외부 이메일 서비스 제공업체를 쓰는 서브 계정(하이퍼클래스나 Mailgun이 아닌 경우)을 찾아요.

## 서브 계정 하나를 하이퍼클래스 이메일로 옮기기

서브 계정 하나를 하이퍼클래스 이메일로 옮기려면 아래 순서대로 하세요.

1. **에이전시 설정 > 이메일 서비스 > Location Settings**로 이동하세요.
2. 옮기려는 서브 계정을 찾아 옆에 있는 연필(편집) 아이콘을 클릭하세요.

   ![이메일 설정을 편집하는 연필 아이콘이 있는 서브 계정 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252762/original/CbERxgMKRVh0fDJblhrCq0B2pqrYalFiaA.jpg?1722446970)

3. 이메일 서비스로 **하이퍼클래스**를 선택하세요.
4. 전용 도메인을 선택하거나, 대체 설정을 **Default (Agency default domain)**(기본값: 에이전시 기본 도메인)로 지정하세요.
5. 설정을 저장하세요.

   ![하이퍼클래스를 선택하고 전용 도메인 또는 에이전시 기본 도메인으로 대체하도록 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252804/original/_CkxDciIp9pJjtqrwmg3LGbLXZcn9jykQA.jpg?1722447017)

## 서브 계정 여러 개를 한꺼번에 하이퍼클래스 이메일로 옮기기

**필터**와 **관리** 기능을 쓰면 서브 계정 여러 개를 한 번에 옮길 수 있어요. 아래 예시는 Mailgun을 쓰는 서브 계정을 모두 옮기는 과정이에요. 다른 제공업체도 같은 방식으로 하면 돼요.

### 예시: Mailgun 서브 계정을 하이퍼클래스 이메일로 옮기기

Mailgun을 쓰는 서브 계정 전체, 또는 특정 Mailgun 전용 도메인을 쓰는 서브 계정만 옮길 수 있어요.

1. **에이전시 설정 > 이메일 서비스 > Location Settings**로 이동해서 **필터**를 클릭하세요. 아래 두 가지 중에서 고를 수 있어요.
   - **Mailgun**을 선택하면 Mailgun을 쓰는 서브 계정이 모두 필터링돼요.
   - **Mailgun**과 전용 도메인을 함께 선택하면 해당 도메인에 연결된 서브 계정만 필터링돼요.
2. 필터링이 끝나면 아무 로케이션 이름 옆의 체크박스를 클릭하세요. 그다음 표 머리글의 **전체 선택**을 눌러 결과에 나온 서브 계정을 모두 선택하세요.

   ![표 머리글에 전체 선택 체크박스가 보이는 Mailgun 서브 계정 필터 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252823/original/GcbDyOeWRb0jOej7fLya83evVbYNEEnXrA.jpg?1722447049)

3. **관리** 버튼을 클릭하세요. **요청 유형**(Request type)에서 **하이퍼클래스로 마이그레이션**을 선택한 다음 **확인**을 클릭하면 도메인 선택 화면으로 넘어가요. <!-- 검토 필요: 화면에 표시되는 'Migrate to LC' 옵션의 실제 한국어 문구와 '요청 유형' 문구 확인 -->

   ![요청 유형에서 하이퍼클래스로 마이그레이션 옵션을 선택한 관리 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252832/original/o4JAOKGUd8apM_iQShtIMdw_Jh-3lSWOkA.jpg?1722447078)

4. 옮긴 서브 계정에 지정할 하이퍼클래스 전용 도메인을 선택하세요.
5. **확인**을 클릭하면 이전이 완료돼요.

   ![확인 버튼이 있는 일괄 이전용 도메인 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252857/original/g3YFjSvfTOQz18yXlC7aJ_HpfFqTqDkhng.jpg?1722447108)

## 서브 계정에 하이퍼클래스 이메일 전용 도메인 지정하기

에이전시 안의 특정 서브 계정에 하이퍼클래스 이메일 전용 도메인을 지정하거나 바꾸려면 아래 순서대로 하세요.

1. **에이전시 설정 > 이메일 서비스 > Location Settings**로 이동하세요.
2. 서브 계정을 찾아 옆에 있는 연필(편집) 아이콘을 클릭하면 해당 서브 계정의 이메일 설정이 열려요.

   ![서브 계정 옆에 연필 편집 아이콘이 있는 Location Settings 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030252871/original/03vYq26qmaasC-Daqia7g0g4t4NV3ACJ_g.jpg?1722447137)

{% hint style="info" %}
전용 도메인이 따로 지정되지 않은 서브 계정에는 에이전시의 기본 전용 도메인이 자동으로 공유돼요.
{% endhint %}

## 자주 묻는 질문

### 한 서브 계정의 전용 도메인을 다른 서브 계정으로 옮길 수 있나요?
방법은 두 가지예요. 현재 서브 계정에서 도메인을 삭제한 뒤 대상 서브 계정에 다시 추가하면 돼요. 또는 에이전시 수준에서 도메인을 추가한 다음, **관리** > **하이퍼클래스로 마이그레이션** 과정을 거쳐 서브 계정 하나 이상에 공유할 수 있어요.

### 에이전시 전용 도메인을 서브 계정과 공유할 수 있나요?
네, 공유할 수 있어요. 서브 계정을 필터링하거나 검색한 다음 **관리**를 클릭하세요. **요청 유형**에서 **하이퍼클래스로 마이그레이션**을 선택하고 공유할 에이전시 도메인을 고르면 돼요. 참고로 에이전시의 기본 전용 도메인은 자체 도메인이 없는 서브 계정에 이미 기본으로 공유되어 있어요.

### 서브 계정의 전용 도메인을 다른 서브 계정과 공유할 수 있나요?
아니요, 공유할 수 없어요. 서브 계정에서 만든 도메인은 에이전시나 다른 서브 계정과 공유할 수 없어요. 여러 서브 계정에 공유할 수 있는 도메인은 에이전시 수준의 도메인뿐이에요.

### 에이전시 전체를 하이퍼클래스 이메일로 옮기려면 어떻게 하나요?
에이전시 전체를 옮기는 방법은 '하이퍼클래스 이메일로 에이전시 전체 옮기기' 문서를 참고하세요.

### 이전하는 동안 서브 계정의 이메일은 어떻게 되나요?
이전하면 서브 계정의 발송 제공업체가 하이퍼클래스 이메일로 바뀌어요. 이전 이후에 보내는 이메일은 새로 지정한 하이퍼클래스 이메일 도메인을 거쳐 나가요. 이전하는 시점에 발송 중이던 이메일은 영향을 받을 수 있으니, 가능하면 발송이 적은 시간대에 이전하세요.

### 도메인과 이메일 인증 상태를 동시에 필터링할 수 있나요?
네, 할 수 있어요. **하이퍼클래스**로 필터링할 때 도메인 이름 필터와 이메일 인증 사용/사용 안 함 필터를 함께 걸어 결과를 좁힐 수 있어요.

### '에이전시 기본 도메인'으로 대체하는 옵션은 무엇인가요?
서브 계정의 이메일 설정을 편집할 때 도메인을 **Fallback to Default**(기본값으로 대체)로 지정할 수 있어요. 이렇게 하면 서브 계정이 에이전시의 기본 전용 도메인으로 이메일을 보내요. 자체 전용 도메인이 없는 서브 계정에는 이 방식이 자동으로 적용돼요.
