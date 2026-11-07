---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Copy Contact(연락처 복사)

**Copy Contact**(연락처 복사) 액션은 한 계정의 연락처를 다른 계정으로 복사해요. 서브 계정을 여러 개 운영하면서 연락처 정보를 서로 공유해야 할 때 쓰세요.

## 개요

**Copy Contact** 액션을 쓰면 한 계정에 있는 연락처를 시스템 안의 다른 계정으로 복제할 수 있어요. 서브 계정을 여러 개 관리하는 조직에서 연락처 정보를 끊김 없이 공유하고 싶을 때 유용해요.

이 액션은 프리미엄 기능이라서 실행할 때마다 추가 요금이 발생해요.

## 액션 이름

**Copy Contact**(연락처 복사)

## 액션 설명

**Copy Contact** 액션은 선택한 연락처를 지정한 다른 계정으로 복사해요. 연락처에 연결된 태그와 커스텀 필드를 함께 복사할 수 있고, 대상 계정에 같은 연락처가 이미 있으면 정보를 업데이트하도록 설정할 수도 있어요. 이렇게 하면 여러 계정의 데이터를 일관되게 유지하고, 선택한 서브 계정에 연락처가 정확하게 반영돼요.

## 액션 설정 항목

![Copy Contact 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032061758/original/z6mqxDsGGVuimRZ7U_xZ7bBlPJyryUQcnA.png?1725271781)

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Select an Account**(계정 선택) | 연락처를 복사할 대상 계정을 선택해요. | 예 |
| **Add Tags to Sub-Account**(서브 계정에 태그 추가) | 서브 계정에 복사된 연락처에 추가할 태그를 선택해요. | 아니요 |
| **Copy Tags**(태그 복사) | 켜면 원본 연락처의 태그를 모두 복사된 연락처에 복사해요. | 아니요 |
| **Copy Custom Fields**(커스텀 필드 복사) | 켜면 원본 연락처의 커스텀 필드를 복사본에 포함해요. | 아니요 |
| **Update Contact if it Already Exists**(이미 있으면 연락처 업데이트) | 켜면 대상 계정에 중복된 연락처가 있을 때 그 연락처를 업데이트해요. | 아니요 |

### 설정 방법

1. **Select an Account**: 연락처를 복사할 대상 계정을 선택하세요. 꼭 입력해야 하는 필수 단계예요.
2. **Add Tags to Sub-Account**: 필요하면 서브 계정의 연락처에 추가할 태그를 선택하세요.
3. **Copy Tags**: 원본 연락처의 기존 태그를 서브 계정의 새 연락처에도 복사하려면 이 옵션을 켜세요.
4. **Copy Custom Fields**: 커스텀 필드 데이터를 새 연락처에 복사하려면 이 옵션을 켜세요.
5. **Update Contact if it Already Exists**: 중복 연락처를 만들지 않고 대상 계정에 있는 기존 연락처 정보를 업데이트하려면 이 옵션을 켜세요.

### 함께 쓰기 좋은 트리거

아래 외에도 다른 트리거와 함께 쓸 수 있어요.

- **Contact Added**(연락처 추가됨): 메인 계정에 새 연락처가 추가될 때마다 다른 계정으로 자동 복사해요.
- **Tag Applied**(태그 적용됨): 연락처에 특정 태그가 적용되면 복사 액션이 실행되어 그 연락처를 서브 계정에 복제해요.
- **Contact Updated**(연락처 업데이트됨): 업데이트된 연락처 정보를 다른 계정으로 복사해서 모든 계정이 최신 연락처 데이터를 갖도록 해요.

### 파일 전송 제한 사항

Copy Contact 액션은 서브 계정 간 파일이나 문서 전송을 지원하지 않아요. 연락처를 복사해도 파일은 독립된 자산으로 대상 서브 계정에 옮겨지지 않아요.

경우에 따라 복사된 연락처에 원본 연락처나 원본 레코드에 의존하는 파일 참조가 보일 수 있어요. 원본 계정에서 원본 연락처를 삭제하면 이런 파일은 열 수 없게 될 수 있어요.

{% hint style="warning" %}
파일에 중요한 정보가 들어 있다면 원본 계정에서 원본 연락처를 삭제하지 마세요.
{% endhint %}

## 사용 예시

지역별 사무소를 여러 곳 운영하고, 사무소마다 별도 계정을 쓴다고 가정해 볼게요. 메인 계정에 새 리드가 추가되고 "VIP" 태그가 붙으면, 이 연락처를 지역 사무소 계정으로 자동 복사하려고 해요.

**워크플로우 설정 예시**

1. **Trigger**(트리거): `Contact Added`
   - **Filters**(필터): Tag = `VIP`
2. **Action**(액션): `Copy Contact`
   - **Select an Account**: `Regional Office Account`(지역 사무소 계정)
   - **Add Tags to Sub-Account**: `VIP`
   - **Copy Tags**: 켜짐
   - **Copy Custom Fields**: 켜짐
   - **Update Contact if it Already Exists**: 켜짐
