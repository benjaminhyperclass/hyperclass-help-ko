---

번역일: 2026-04-07
카테고리: 06-사이트 > 폼
---

# 폼과 설문의 소스 필드

폼(Forms)과 설문(Surveys)의 소스 필드(Source Field)는 응답자가 어떤 경로나 채널을 통해 폼에 접근했는지에 대한 정보를 수집할 수 있는 중요한 요소입니다. 응답의 출처를 파악하면 마케팅 활동, 광고 캠페인 또는 전반적인 홍보 전략의 효과에 대한 귀중한 인사이트를 얻을 수 있습니다.

## 목차

- [소스 요소 추가하기](#소스-요소-추가하기)
- [이 필드의 활용 사례](#이-필드의-활용-사례)  
- [추가 활용 사례](#추가-활용-사례)

---

## 소스 요소 추가하기

![소스 필드 요소 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013879281/original/CfLvMR33oj2zJeY_JiPSlXl-rBoRb3IZ2A.png?1701232849)

Quick Add(빠른 추가) 아래에서 소스 요소를 찾을 수 있습니다. 이 필드를 폼에 드래그 앤 드롭으로 추가하세요. 오른쪽에서 소스 필드에 값을 입력할 수 있습니다. 여기서는 "sample lead source"라는 값을 입력했습니다. 이 필드는 숨겨져 있어 사용자에게는 표시되지 않습니다.

## 이 필드의 활용 사례

폼 제출 후, 아래와 같이 소스 아래에서 값을 확인할 수 있습니다.

![폼 제출 후 소스 값 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013881274/original/gc3-15mzBZYzk149IWb5Skaup_OPzpeKtw.png?1701235445)

이 정보는 연락처(Contacts)에서도 Contact Source(연락처 소스)로 표시됩니다.

![연락처에서 소스 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013881365/original/t9I4X_T5AinOqH08PdgVjJU_m7kL0zeCaA.png?1701235643)

## 추가 활용 사례

이 필드를 쿼리 매개변수(query parameter)로도 사용할 수 있습니다.

예를 들어:

[https://link.gohighlevel.com/widget/form/WKEnUOXEz9J3cpcQyc1M?source=alternative_source](https://link.gohighlevel.com/widget/form/WKEnUOXEz9J3cpcQyc1M?source=alternative_source)

폼/설문 링크에 `?source=alternative_source`를 추가하여 어떤 소스든지 전달할 수 있습니다.

이렇게 하면 폼 빌더에서 설정한 값을 덮어쓰게 되고, 폼 제출 시 "sample lead source" 대신 "alternative source"가 소스로 포함됩니다.

---
*원문 최종 수정: 2023년 11월 28일 23:32*
*Hyperclass 사용 가이드 — hyperclass.ai*