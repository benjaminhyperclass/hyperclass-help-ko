---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007717-google-sheet-integration-for-knowledge-base
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 지식 베이스에 Google Sheets 연결하기

Google Sheets를 하이퍼클래스 **지식 베이스**에 연결하면, 스프레드시트를 다시 업로드하지 않아도 최신 내용을 AI 에이전트가 참고할 수 있어요. 가격, 서비스 세부 정보처럼 자주 바뀌는 정보를 관리할 때 유용해요.

수동 새로고침과 거의 실시간에 가까운 자동 동기화 중에서, 데이터가 바뀌는 빈도에 맞는 방식을 고를 수 있어요.

## Google Sheets 연동이란?

Google Sheets 연동은 Google 스프레드시트를 하이퍼클래스 안에서 실시간 데이터 소스로 연결하는 기능이에요. 값이 바뀔 때마다 파일을 다시 올리는 대신, 시트를 연결해 두면 **지식 베이스**가 변경된 내용을 가져와요. 덕분에 AI 에이전트가 표 형태의 정보로 답할 때 더 최신 데이터를 쓸 수 있어요.

상품 정보, 가격 변경, 영업시간, 서비스 제공 여부, 내부 참고 자료처럼 시간이 지나며 바뀌는 정보를 스프레드시트로 관리한다면 특히 도움이 돼요. 연결된 시트를 쓰면 직접 관리할 일이 줄고, **지식 베이스**를 항상 최신 데이터에 맞춰 둘 수 있어요.

## 주요 장점

- 거의 실시간 동기화: 연결한 Google 시트의 변경 내용을 약 15분마다 **지식 베이스**로 가져와요. AI 에이전트가 더 최신 데이터를 참고할 수 있어요.
- 수동 새로고침: 시트를 수정한 뒤 바로 반영하고 싶을 때 원하는 시점에 소스를 새로고침할 수 있어요.
- 데이터 변경 지원: 열을 추가하거나 삭제하고, 행이나 셀을 수정해도 매번 다시 업로드하지 않고 반영할 수 있어요.
- 관리 부담 감소: 이미 쓰고 있는 스프레드시트를 그대로 쓰면 돼요. 정보가 바뀔 때마다 파일을 내보내고 다시 올리지 않아도 돼요.
- 더 최신인 답변: AI 에이전트가 업데이트된 시트 내용을 더 꾸준히 참고해서, 오래된 정보로 답하는 일이 줄어요.

## 동기화 방식

동기화 방식에 따라 최신성과 통제 정도가 달라져요. 하루 종일 계속 업데이트가 필요한 팀도 있고, 변경 내용을 먼저 검토한 뒤 준비됐을 때만 새로고침하고 싶은 팀도 있어요.

### **Auto Sync (~15 min)**(자동 동기화, 약 15분)

자주 바뀌고 **지식 베이스**와 가깝게 맞춰져야 하는 스프레드시트에 알맞아요. AI 에이전트가 대화에서 참고할 값을 팀이 자주 수정할 때 쓰면 좋아요.

이런 경우에 자동 동기화가 도움이 돼요.

- 가격이 자주 바뀔 때
- 이용 가능 여부나 일정이 바뀔 때
- 서비스 세부 정보가 주중에 계속 바뀔 때
- 여러 팀원이 함께 쓰는 공유 참고 시트가 있을 때

### **Manual Refresh**(수동 새로고침)

**지식 베이스**에 변경 내용이 언제 반영될지 직접 정하고 싶을 때 알맞아요. 변경이 드물거나, AI 에이전트가 쓰기 전에 검토가 필요한 내용에 잘 맞아요.

이런 경우에 수동 새로고침이 도움이 돼요.

- 정기적으로 모아서 업데이트할 때
- 검토나 승인을 거친 스프레드시트 변경만 반영하고 싶을 때
- 자주 바뀌지 않는 내부 데이터 세트일 때
- 업데이트를 테스트한 뒤에만 새로고침하고 싶을 때

![동기화 방식 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069568297/original/RUhoCQdmT2ZYcqp9GunMwuhGnj5pCrtHvQ.png?1776754332)

## Google Sheets로 변하는 콘텐츠 관리하기

내용이 계속 바뀌는 스프레드시트를 고정된 파일로 올려 두면 관리하기 어려워요. Google Sheets를 **지식 베이스**에 직접 연결하면 수작업이 줄고, 표 형태의 데이터를 계속 업데이트하기 쉬워져요. 여러 사람이 함께 정보를 관리하면서 AI 에이전트가 자주 바뀌는 내용의 최신 버전을 참고해야 하는 팀에 특히 유용해요.

이런 표 형태의 정보에 쓸 수 있어요.

- 상품 또는 서비스 가격
- 사무실 또는 고객지원 운영 시간
- 지점별 세부 정보
- 자주 업데이트되는 내부 참고 데이터
- 표 형태로 정리한 영업, 온보딩, 서비스 메모

시트 안에서 계속 일어나는 변경도 지원하기 때문에, 시간이 지나며 바뀌는 실시간 데이터에 실용적이에요. 하이퍼클래스는 다음과 같은 변경을 반영할 수 있어요.

- 셀 값 수정
- 행 추가 또는 삭제
- 열 추가 또는 삭제
- 그 밖의 표 구조 변경

시트를 실시간 소스로 연결해 두면, Google Sheets에서 수정한 뒤 동기화 방식에 따라 **지식 베이스**를 최신 데이터에 맞출 수 있어요.

## Google Sheets 연동 설정하기

스프레드시트를 올바르게 연결하면 **지식 베이스**에서 최신 데이터를 쓸 수 있어요. 시트를 연결한 뒤에는 Google Sheets에서 바꾼 내용이 자동 동기화로 계속 반영돼요.

1. 서브 계정에서 **AI 에이전트**로 이동해 **지식 베이스** 탭을 여세요. 기존 지식 베이스를 열거나 새로 만드세요.

   ![지식 베이스 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069566801/original/p3s01C-cBOAR7j9s5JAgVdDbirz_xDC30Q.png?1776752792)
2. **테이블**을 클릭한 다음 **Import from Google Sheets**(Google Sheets에서 가져오기)를 클릭하세요.

   ![Google Sheets에서 가져오기 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069566972/original/r7GABI-m-ns26-RqmDcaeVGENMGTSlrptw.png?1776752917)
3. 연결된 Google 계정이 없다면 Google 연결을 설정하세요. 하이퍼클래스에서 이미 쓰고 있는 Google Drive 기본 권한을 사용하며, 추가 권한은 필요 없어요.

   ![Google 계정 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069567085/original/p5ZGKmBc1tI0R3WxCBufnLFYZObPm_u-fQ.png?1776753048)
4. 연결된 Google 계정을 선택한 다음, 사용 가능한 계정, 드라이브, 스프레드시트를 둘러보세요.

   ![Google 계정과 드라이브 탐색 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069567586/original/y6HjwgtmfgXV5N5igpA4yc9Q9ZwvpBG6_g.gif?1776753629)
5. 가져올 Google 시트를 선택하세요.

   ![가져올 Google 시트 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069567629/original/YRg-lyN6B-bShmRdmFOngXVPly2kZ8oqEQ.png?1776753702)
6. 시트를 확인하고 알맞은 데이터 유형을 선택하세요. 일반 CSV 업로드 과정과 비슷해요.

   ![데이터 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069568063/original/MWkucSuP6R-kPb-Q0ZAZMcZwefpjeaoHLA.gif?1776754113)
7. 가져오기를 시작하고 처리가 끝날 때까지 기다리세요.

   ![가져오기 진행 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069568054/original/YAND503I_vRE-tCnCBg3dSsIoee0T7l-Fg.png?1776754098)
8. 연결한 Google 시트가 바뀌면 자동 동기화가 **지식 베이스**를 업데이트해요. 보통 약 15~20분 안에 반영돼요. 더 빨리 반영하고 싶다면 **Manual Refresh**(수동 새로고침) 옵션을 사용하세요.

   ![동기화 및 새로고침 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069567707/original/DuRvd3Xwvyii_12EKorIcDxyupWZaqFT8g.png?1776753812)

## 자주 묻는 질문

### 지식 베이스에서 Google Sheets 연동은 어떤 역할을 하나요?
Google 시트를 실시간 **지식 베이스** 소스로 연결하는 기능이에요. 고정된 파일 업로드에만 의존하지 않고, 하이퍼클래스가 스프레드시트 데이터를 쓸 수 있어요.

### 거의 실시간 동기화는 시트 데이터를 얼마나 자주 업데이트하나요?
약 15분 간격으로 업데이트되도록 설계되어 있어요.

### 스프레드시트의 어떤 변경을 감지할 수 있나요?
행 단위 변경, 셀 수정, 열 추가·삭제 같은 구조 변경을 지원해요.

### 지식 베이스에 쓰기에는 Google Sheets의 어떤 데이터가 가장 알맞나요?
가격, 운영 시간, 서비스 세부 정보, 참고 데이터처럼 표 형태로 정리된 정보가 잘 맞아요.

## 관련 문서

- [지식 베이스 개요](../knowledge-base-overview.md)
- [AI 직원 - 지식 베이스 테이블](../ai-employee-knowledge-base-tables.md)
- [대화에서 AI 응답 정보 보기 및 편집하기](../../03-대화/view-edit-ai-response-info-in-conversations.md)
- [음성 AI 에이전트용 지식 베이스 연동](../Voice-AI/knowledge-base-integration-for-voice-ai-agents.md)
- [지식 베이스 학습 링크 자동 새로고침](../auto-refresh-of-knowledge-base-trained-links.md)
