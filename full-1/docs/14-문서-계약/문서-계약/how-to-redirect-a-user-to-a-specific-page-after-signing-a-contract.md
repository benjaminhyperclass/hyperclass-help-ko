---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004663-how-to-redirect-a-user-to-a-specific-page-after-signing-a-contract-
번역일: 2026-11-07
카테고리: 14-문서-계약
---

# 계약서 서명 후 특정 페이지로 이동시키기

고객이 문서에 서명하거나, 문서로 만든 인보이스를 결제한 뒤에 원하는 웹 페이지로 이동시킬 수 있어요. 감사 페이지, 일정 예약 링크, 추가 서비스 안내 페이지 등으로 연결하면 고객이 끊김 없이 브랜드 경험을 이어 갈 수 있어요.

## 1. 모든 문서에 적용되는 커스텀 URL 리디렉션 켜기

1. 왼쪽 메뉴에서 **결제** > **문서 & 계약**으로 이동하세요.
2. 오른쪽 위의 **설정**(톱니바퀴 아이콘) 버튼을 클릭하세요.
3. 사이드바에서 **Document Settings**(문서 설정)를 선택하세요.
4. **Redirect to a Custom URL**(커스텀 URL로 리디렉션) 토글을 켜세요. 모든 문서에 적용돼요.
5. **URL 입력**에 이동시킬 주소를 입력하세요. 예: `https://example.com`
6. **기존 탭에서 열기** 또는 **새 탭에서 열기**를 선택하세요.
7. **저장**을 클릭하세요.

{% hint style="info" %}
글로벌 설정은 특정 문서나 템플릿에 직접 추가한 커스텀 URL을 덮어쓰지 않아요.
{% endhint %}

![문서 전체에 적용하는 커스텀 URL 리디렉션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041922564/original/oURpW72fxcigb2tqIG8vgLoITdGTOBnoLg.png?1740031834)

## 2. 문서마다 커스텀 URL 지정하기

1. **문서 & 계약**에서 기존 문서를 열거나 **+ 신규**를 클릭해 새 문서를 만드세요.
2. 위쪽에서 **설정** > **Document Settings**를 클릭하세요.
3. **커스텀 URL로 리디렉션 켜기**를 켜세요.
4. 이동시킬 URL을 입력하세요.
5. 같은 탭에서 열지, 새 탭에서 열지 선택하세요.
6. 필요에 따라 **저장** 또는 **보내기**를 클릭하세요.

![문서 설정 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041922577/original/ekAMJJ5Zy0mK-atcOcbAffj8qSU_KW1sXA.png?1740031877)

![문서별 커스텀 URL 리디렉션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041922642/original/CEsC386tgzP0bdfY0gDZAN80nd6Svrqetw.png?1740031990)

## 3. 결제 후 리디렉션

문서에 결제 옵션을 넣었다면, 결제가 끝난 뒤에도 같은 리디렉션 설정이 적용돼요.

- 글로벌 설정: 켜져 있으면 고객의 결제가 처리된 뒤 자동으로 해당 URL로 이동해요.
- 문서별 설정: 문서에서 리디렉션을 켜고 URL을 지정했다면, 그 문서에서는 이 URL이 우선해요.

## 4. 문제 해결과 팁

- 보내기 전에 테스트하기: 문서에서 **미리보기**를 사용해 리디렉션이 의도대로 동작하는지 확인하세요.
- 우선순위 확인하기: 문서별 리디렉션은 글로벌 리디렉션보다 우선해요. 글로벌 리디렉션만 쓰고 싶다면 문서별 설정을 끄거나 URL을 지우세요.

## 5. 이렇게 활용해 보세요

- 감사 페이지: 새로 서명하거나 결제한 고객을 맞춤 감사 페이지나 확인 페이지로 안내해요.
- 온보딩: 서명 직후 고객이 온보딩 단계를 바로 진행하도록 안내해요.
- 추가 판매: 함께 쓰면 좋은 서비스나 일정 예약 페이지를 보여 주어 다음 참여로 이어지게 해요.
- 리뷰: 완료 계약서에 서명한 고객에게 리뷰를 요청해요.
