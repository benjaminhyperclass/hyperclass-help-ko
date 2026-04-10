---

번역일: 2026-04-06
카테고리: 05-기회-파이프라인
---

# 워크플로우의 다중 기회 토글

## 목차

- [개요](#개요)
- [설정 이름](#설정-이름)
- [설정 설명](#설정-설명)
- [설정 방법](#설정-방법)
- [예시](#예시)

## 개요

현재는 연락처와 연결된 가장 최근 기회 하나만 워크플로우에 진입합니다. 하지만 "다중 기회 허용" 기능이 도입되면서, 사용자는 같은 연락처의 여러 기회를 워크플로우에서 처리할 수 있게 됩니다. 각 연락처-기회 쌍은 별도의 워크플로우 실행을 가지므로, 기회를 더욱 정확하고 효과적으로 관리할 수 있습니다.

## 설정 이름

다중 기회 허용 (Allow Multiple Opportunity)

## 설정 설명

"다중 기회 허용" 토글을 활성화하면:

- 연락처와 연결된 각 기회가 별도의 실행으로 워크플로우에 진입합니다.
- 기회가 업데이트되어도 워크플로우가 다시 시작되지 않습니다. 대신 현재 단계에서 계속 진행되며, 업데이트된 기회 값이 이후 단계에서 사용됩니다.

## 설정 방법

이 기능을 활성화하려면 다음 단계를 따르세요:

- Settings(설정) > Objects(객체) > Opportunities(기회)로 이동합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067256405/original/E55qlGbBoXq24bbpZ6yiHBRHxM0qcjGvjQ.png?1773859304)

- "다중 기회 허용" 토글 찾기: "재진입 허용" 옵션과 유사하게 설정 상단에 있는 새 토글을 찾으세요.

- 토글 활성화: Allow Multiple Opportunity 스위치를 "ON"으로 전환하여 기능을 활성화합니다.

- 변경사항 저장: 설정을 저장하는 것을 잊지 마세요.

## 예시

부동산 중개사인 당신이 한 고객과 두 개의 다른 부동산에 대해 연락하고 있다고 가정해봅시다. 따라서 "John Doe"라는 연락처에 "1 Madison Avenue"와 "2 Nice Street"라는 두 개의 기회가 있습니다.

기회가 업데이트될 때마다 트리거되어 2일 동안 연락처에게 알림 SMS를 보내는 워크플로우가 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032844678/original/rV7XzET3MI-S_nCYXzPuWQ5hMetF-kpbeA.jpeg?1726238737)

**"다중 기회 허용"이 "OFF"인 경우:**

1 Madison Avenue가 2024/1/1 오전 8시에 업데이트되어 John Doe에게 SMS가 전송됩니다.
2 Nice Street가 2024/1/1 오후 12시에 업데이트되지만 나머지 액션들은 건너뛰어집니다.

**반면, "다중 기회 허용"이 "ON"인 경우:**

1 Madison Avenue가 2024/1/1 오전 8시에 업데이트되어 John Doe에게 SMS가 전송됩니다.
2 Nice Street가 2024/1/1 오후 12시에 업데이트되어 John Doe에게 또 다른 SMS가 전송됩니다.

따라서 두 기회가 시스템에서 공존하게 됩니다.

---
*원문 최종 수정: Wed, 18 Mar, 2026 at 1:42 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*