---
원문: /support/solutions/articles/155000003227-workflow-action-add-to-affiliate-manager
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add To Affiliate Manager(제휴 관리자에 추가)

**Add To Affiliate Manager**(제휴 관리자에 추가) 액션은 연락처를 제휴로 등록하는 액션이에요. 이미 있는 연락처나 고객을 제휴 파트너로 등록할 때 쓰세요.

## 개요

**Add To Affiliate Manager** 액션은 연락처를 **제휴 관리자**의 **제휴 목록**에 추가해요. 새로 추가된 제휴의 상태는 기본적으로 활성이에요.

## 액션 이름

**Add To Affiliate Manager**

## 액션 설명

이 액션은 기존 연락처를 서브 계정의 **제휴 관리자**에 제휴로 등록하는 과정을 자동화해요. 새 제휴의 상태는 기본적으로 활성이에요.

## 액션 상세 정보

1. 사용 가능한 액션 목록에서 **Add To Affiliate Manager**를 선택하세요.
2. **Action Name**(액션 이름)에 알아보기 쉬운 이름을 입력하세요. 예를 들면 "연락처를 제휴로 전환"처럼 쓸 수 있어요.

![Add To Affiliate Manager 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031799303/original/eupZ-f0OzJTEmPbY8YEgFDYLZzWNcZOh5w.png?1724837548)

## 예시

연락처에 태그가 추가되면 그 연락처를 제휴로 전환하는 예시예요.

시나리오: 한 업체가 게시물에 댓글을 남겼거나 제휴 네트워크에 관심을 보인 고객을 제휴 파트너로 모집하려고 해요. 이런 연락처에 태그를 추가해 구분해 두고, 그 연락처를 활성 제휴로 전환해요.

**액션 설정**

- 액션: **Add To Affiliate Manager**
- 이름: 연락처를 제휴로 전환

**워크플로우 트리거**

1. **Contact Changed**(연락처 변경): 연락처가 선택한 필터에 맞게 바뀌거나 추가되면 그 연락처가 워크플로우에 들어와요.
2. **Filters**(필터): **Tags added**(태그 추가됨)에서 태그 "제휴"를 선택해요.

**워크플로우 액션**

1. **Add To Affiliate Manager**

**결과**

연락처에 이 태그가 추가될 때마다 그 연락처가 제휴로 전환돼요.
