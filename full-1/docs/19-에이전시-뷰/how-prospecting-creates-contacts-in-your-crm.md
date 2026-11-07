---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008047-how-prospecting-creates-contacts-in-your-crm
번역일: 2026-11-07
카테고리: 19-에이전시-뷰
---

# 잠재고객 발굴로 연락처가 만들어지는 방식

서브 계정에서 **잠재고객 발굴**(Prospecting)을 쓰면 프로스펙트(발굴한 업체)가 CRM에 연락처로 자동 추가돼요. 이 문서에서는 어떤 연락처가 만들어지는지, 찾은 전화번호·이메일·담당자 정보를 어떻게 정리하는지 알려 드려요. 연락처를 만들지, 추가 정보를 찾을지 정하는 두 가지 설정인 **Contact creation**(연락처 생성)과 **Contact enrichment**(연락처 보강)도 설명해요. 프로스펙트를 저장한 뒤 특정 연락처가 보이거나 보이지 않는 이유가 궁금할 때, 또는 프로스펙트가 CRM에 추가되는 방식을 바꾸고 싶을 때 읽어 보세요.

## 기능 1 - 연락처 생성(Contact creation)

![연락처 생성 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074899968/original/Sa4EyCEvo4jYbsUHvEGhjnsIE7XVm46StQ.jpeg?1782883494)

**Contact creation** 설정은 **마케팅 > 잠재고객 발굴 > 설정 > 연락처**에서 관리해요. 기본값은 켜짐이에요.

이 설정이 켜져 있으면 프로스펙트를 저장할 때 CRM에 비즈니스 연락처가 1개 자동으로 만들어져요. 이때 연락처는 그 시점에 확인된 아래 정보로 채워져요.

1. Google 비즈니스 프로필의 전화번호
2. 폼으로 추가한 정보
3. 위젯으로 수집한 정보
4. 직접 입력한 모든 정보

이후 찾은 추가 전화번호와 이메일은 같은 비즈니스 연락처에 들어가요. 그래서 업체마다 깔끔한 기록이 하나씩 남아요. 연락처를 만들지 않고 프로스펙트만 저장하려면 이 설정을 끄세요.

{% hint style="info" %}
**에이전시 단계**에서 사용하면 연락처는 만들어지지 않아요. 프로스펙트만 프로스펙트 대시보드(에이전시 > 잠재고객 발굴)에 저장돼요.
{% endhint %}

![에이전시 단계의 프로스펙트 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074899958/original/AFy3I4SQvvbTycXVlqIuGtY5fc33aq6VsA.png?1782883475)

## 기능 2 - 연락처 보강(Contact enrichment)

![연락처 보강 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074900045/original/g3r1i5eSvuMsPZ5-32AUPQGAn9Bnuz_KSg.png?1782883622)

**Contact enrichment** 설정은 프리미엄 기능이고, 기본값은 꺼짐이에요. 켜면 Google 비즈니스 프로필에 없는 연락처 정보를 더 찾아 줘요.

보강 기능은 아래 정보를 찾아요.

1. 추가 전화번호
2. 추가 이메일
3. 담당자(POC, Point of Contact) — 대표나 매니저처럼 이름이 있는 사람

이 정보는 프로스펙트의 웹사이트, 비즈니스 리스팅, 공개 소셜 프로필을 검색해서 찾아요. 담당자(POC)는 이 보강 기능으로만 찾을 수 있어요. 그래서 다음 섹션의 정리 옵션은 보강 기능을 켰을 때만 적용돼요.

{% hint style="info" %}
**에이전시 단계**에서 사용하면 담당자(POC)의 연락처는 만들어지지 않아요. 담당자 정보는 프로스펙트 대시보드(에이전시 > 잠재고객 발굴)의 프로스펙트 안에 저장돼요.
{% endhint %}

![프로스펙트에 저장된 담당자 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074900005/original/3T-GWVlom4K6byznFTPg9UcCzm9WnmLT5Q.png?1782883555)

## 기능 3 - 찾은 정보를 정리하는 방식

잠재고객 발굴은 찾은 정보를 이름이 있는지에 따라 다르게 처리해요.

1. 이름이 있는 담당자(POC): 직접 연락할 수 있도록 별도 연락처로 저장해요. **Create a separate contact for each POC**(POC마다 별도 연락처 만들기) 토글로 조절하고, 기본값은 켜짐이에요. 이 토글을 끄면 담당자(POC)가 비즈니스 연락처에 함께 추가돼요.
2. 이름이 없는 정보: 이름 없이 찾은 전화번호와 이메일은 항상 비즈니스 연락처에 남아요. CRM을 깔끔하게 유지하기 위한 방식이라서 따로 관리하지 않아도 돼요.

예를 들어 보강 기능을 켜고 담당자(POC)를 별도 연락처로 저장하도록 설정하면, 프로스펙트 하나에서 비즈니스 연락처 1개와 담당자(POC) 연락처 2개가 만들어질 수 있어요. 이름 없이 찾은 정보는 비즈니스 연락처에 그대로 남아요.

### 연락처 필드 매핑

프로스펙트 정보는 연락처의 해당 기본 필드에 자동으로 매핑돼요.

1. **전화번호**: Google 비즈니스 프로필에서 가져와요.
2. **추가 전화번호**: 웹사이트나 비즈니스 리스팅 등에서 전화번호를 2개 이상 찾았을 때 들어가요.
3. **이메일**: 마찬가지로 찾은 이메일이 들어가요.
4. **연락처 소스**: "Prospecting Tool"로 들어가요. 워크플로우에서 태그를 활용해 더 편하게 관리할 수 있어요.
5. **City**(도시)
6. **Country**(국가)
7. **State**(주/도)
8. **Postal code**(우편번호)
9. **웹사이트**: Google 비즈니스 프로필이나 다른 리스팅 프로필에서 찾은 프로스펙트의 웹사이트 주소가 들어가요.
