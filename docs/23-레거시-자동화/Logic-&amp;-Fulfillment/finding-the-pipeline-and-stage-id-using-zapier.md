---

번역일: 2026-04-08
카테고리: 23-레거시-자동화 > Logic & Fulfillment
---

# Zapier를 사용하여 파이프라인 및 단계 ID 찾기

Zapier를 사용하지 않고 단계 ID와 파이프라인 ID를 찾으려면, Hyperclass에서는 기회를 내보내기하는 방법이 유일합니다.

**중요**: 이 글은 Zapier를 사용하여 파이프라인 및 단계 ID를 찾는 방법만 안내합니다. 다른 서드파티 플랫폼이나 연동은 지원하지 않습니다. 아래 단계들은 Zapier 전용입니다.

**중요**: 기회를 생성할 때는 단계 이름만으로도 충분하므로 실제로는 단계 ID가 더 이상 필요하지 않습니다.

**파이프라인 ID와 기회 ID 정보**

기회 ID는 다른 2가지 방법으로 찾을 수 있습니다:

- 기회 모달을 클릭하면 왼쪽 하단에 기회 ID가 표시됩니다. 링크처럼 보이는 왼쪽 하단의 텍스트를 확인하세요.

![기회 모달에서 ID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047130685/original/3C_V2ErhQLss3B7D4gQLg4WW5JmNb06l7A.png?1748000379)

- 기회를 열었을 때 URL의 끝부분에서도 확인할 수 있습니다.

![URL에서 ID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047130755/original/Oqk5_rX3a2FfxtWf2zUmhHpcJ7nYsbaY_w.png?1748000464)

## **파이프라인 ID와 단계 ID 활용법**

- 파이프라인 ID: 특정 파이프라인에 대한 모든 편집 내역을 감사 로그에서 확인할 때 사용

- 기회 ID의 용도:
  - 감사 로그에서 활동 추적
  - 사용자를 특정 기회로 직접 이동시키기
  - 가져오기 기능을 사용하여 기회 업데이트

이 외에도 이러한 ID들은 웹훅과 API에서 널리 활용됩니다.

---
*원문 최종 수정: Mon, 2 Jun, 2025 at 7:28 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*