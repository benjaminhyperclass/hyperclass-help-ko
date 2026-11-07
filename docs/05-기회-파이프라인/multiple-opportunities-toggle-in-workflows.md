---
원문: /support/solutions/articles/155000003440-multiple-opportunities-toggle-in-workflows
번역일: 2026-11-07
카테고리: 05-기회-파이프라인
---

# 워크플로우에서 연락처 한 명의 여러 기회 처리하기

한 연락처에 기회가 여러 개 있을 때, 기회마다 워크플로우를 따로 실행하는 설정을 설명해요. 기존에는 가장 최근 기회 하나만 워크플로우에 들어갔지만, 이 설정을 켜면 모든 기회가 각각 워크플로우에 들어가요.

## 개요

기존에는 연락처에 연결된 기회 중 가장 최근 기회 하나만 워크플로우에 들어갔어요. 이제 **Allow Multiple Opportunity**(여러 기회 허용) 기능을 켜면 같은 연락처의 기회를 여러 개 처리할 수 있어요. 연락처와 기회의 조합마다 워크플로우가 따로 실행되기 때문에, 기회를 더 정확하게 관리할 수 있어요.

## 설정 이름

**Allow Multiple Opportunity**(여러 기회 허용)

## 설정을 켜면 달라지는 점

**Allow Multiple Opportunity** 토글을 켜면 연락처에 연결된 기회마다 워크플로우가 각각 실행돼요.

```
기회를 업데이트해도 워크플로우가 처음부터 다시 시작되지 않아요. 워크플로우는 진행 중인 단계에서 이어서 실행되고, 이후에는 업데이트된 기회 값이 사용돼요.
```

---

## 설정 방법

1. **설정 > 오브젝트 > 기회 관리**(Opportunities)로 이동하세요.

   ![설정 > 오브젝트 > 기회 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067256405/original/E55qlGbBoXq24bbpZ6yiHBRHxM0qcjGvjQ.png?1773859304)
2. **Allow Multiple Opportunity** 토글을 찾으세요.
   - 설정 화면 맨 위에 있고, **Allow Re-entry**(재진입 허용) 옵션과 비슷한 모양이에요.
3. **Allow Multiple Opportunity** 토글을 **켜짐**으로 바꿔 기능을 켜세요.
4. **변경사항 저장**을 눌러 설정을 저장하세요.

---

## 예시

부동산 중개인이 한 고객과 매물 두 곳을 상담하고 있다고 해볼게요. 연락처 **홍길동**에게 "1 Madison Avenue"와 "2 Nice Street"라는 기회가 두 개 있어요.

기회가 업데이트될 때마다 실행되는 워크플로우가 있고, 이 워크플로우는 2일 동안 연락처에게 리마인더 SMS를 보내요.

![기회가 업데이트되면 리마인더 SMS를 보내는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032844678/original/rV7XzET3MI-S_nCYXzPuWQ5hMetF-kpbeA.jpeg?1726238737)

**Allow Multiple Opportunity가 꺼짐일 때**

- 2024년 1월 1일 오전 8시에 1 Madison Avenue가 업데이트되고, 홍길동에게 SMS가 발송돼요.
- 2024년 1월 1일 낮 12시에 2 Nice Street가 업데이트되지만, 나머지 액션은 건너뛰어요.

**Allow Multiple Opportunity가 켜짐일 때**

- 2024년 1월 1일 오전 8시에 1 Madison Avenue가 업데이트되고, 홍길동에게 SMS가 발송돼요.
- 2024년 1월 1일 낮 12시에 2 Nice Street가 업데이트되고, 홍길동에게 SMS가 한 번 더 발송돼요.

이렇게 두 기회가 시스템에서 각각 따로 진행돼요.
