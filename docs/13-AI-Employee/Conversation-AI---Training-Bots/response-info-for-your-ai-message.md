---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation AI - Training Bots
---

# AI 메시지 응답 정보

대화(Conversations)에서 AI 메시지 세부 정보 활성화 가이드

- [대화에서 AI 메시지 세부 정보 소개](#대화에서-ai-메시지-세부-정보-소개)
- [1단계: 이미지에 표시된 응답 정보 아이콘을 클릭하세요](#1단계-이미지에-표시된-응답-정보-아이콘을-클릭하세요)
- [2단계: 이미지에 표시된 우측 사이드바로 이동하면 프롬프트, 지식 청크, 의도를 확인할 수 있습니다](#2단계-이미지에-표시된-우측-사이드바로-이동하면-프롬프트-지식-청크-의도를-확인할-수-있습니다)
- [3단계: AI 응답 - 사이드바 최상단에 표시되는 사용자에게 전송된 AI 생성 메시지](#3단계-ai-응답---사이드바-최상단에-표시되는-사용자에게-전송된-ai-생성-메시지)
- [4단계: 프롬프트 - AI 메시지 생성에 사용된 프롬프트가 표시되며, '프롬프트 편집' 옵션으로 수정 가능](#4단계-프롬프트---ai-메시지-생성에-사용된-프롬프트가-표시되며-프롬프트-편집-옵션으로-수정-가능)
- [5단계: 데이터 소스 보기 및 편집](#5단계-데이터-소스-보기-및-편집)
- [추가 정보](#추가-정보)

## 대화에서 AI 메시지 세부 정보 소개

이 기능을 통해 사용자는 AI 응답 생성에 관련된 구성 요소를 확인하고, 대화(Conversations) 화면에서 직접 지식 베이스(Knowledge Base)와 기타 데이터 소스를 편집할 수 있습니다. 이를 통해 투명성이 향상되고, 사용자 제어가 가능해지며, 실시간 피드백과 편집을 통해 AI 성능이 개선됩니다.

주요 특징 (작동 원리):

- AI 메시지가 생성되면 AI 메시지 세부 정보 사이드바/모달에서 전체 맥락을 확인할 수 있습니다.
- 사용자는 프롬프트, 의도, AI 응답 생성에 사용된 지식 베이스/데이터 소스 등 AI 메시지 세부 정보를 볼 수 있습니다.
- 지식 베이스에서 데이터 청크를 편집할 수 있습니다.
- 이러한 데이터로부터 AI 생성 응답이 어떻게 구성되는지 이해할 수 있습니다.

## 1단계: 이미지에 표시된 응답 정보 아이콘을 클릭하세요

![응답 정보 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135388/original/UMPZih1TVI59bRQnmS_C5BzVVJQfTGCCAA.png?1728067649)

## 2단계: 이미지에 표시된 우측 사이드바로 이동하면 프롬프트, 지식 청크, 의도를 확인할 수 있습니다

![우측 사이드바 프롬프트 및 지식 청크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135424/original/h0n9dr7kxg29rtqdR0eplE903JzK4RATCw.png?1728067743)

## 3단계: AI 응답 - 사이드바 최상단에 표시되는 사용자에게 전송된 AI 생성 메시지

![AI 응답 표시 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135422/original/eeh6wgA8vV-uJnZyEryyWjaWGsxVWyuVWg.jpeg?1728067728)

## 4단계: 프롬프트 - AI 메시지 생성에 사용된 프롬프트가 표시되며, '프롬프트 편집' 옵션으로 수정 가능

![프롬프트 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135515/original/qoliGYsE0WhxHWtoOF1_iE7LaQRNSqkUAw.png?1728067882)

## 5단계: 데이터 소스 보기 및 편집

- 이미지에 표시된 지식 청크 섹션으로 이동하세요
- AI가 응답을 생성할 때 사용한 지식 베이스 - FAQ와 웹사이트 데이터가 표시됩니다
- 수정이 필요한 지식 청크를 클릭하세요. 봇이 답변을 가져온 데이터 청크가 최대 3개까지 표시됩니다
- 편집 가능한 텍스트 상자가 열리거나 바로 사용할 수 있습니다
- 필요한 변경사항을 적용하고 저장하세요
- 편집 내용이 지식 베이스에 즉시 반영되어 AI가 향후 응답에서 업데이트된 정보를 사용하게 됩니다

![지식 청크 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135573/original/IIhTPBu1wlJ8xYCjKAwh0jBkFXy9lQcBVg.png?1728067995)

![데이터 소스 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135673/original/Tx9ZtNhqqAa-JrqiwGqj3lPbSN8L8r2SQQ.png?1728068210)

참고: AI 응답에 지식 베이스가 사용된 경우에만 데이터 청크(웹사이트 및 FAQ)가 사이드바에 표시됩니다. FAQ가 업데이트되면 기존 FAQ를 삭제하고 새로 생성됩니다.

## 추가 정보

- **가시성**: 이 사이드바는 모든 AI 메시지, AI 워크플로우 액션, 봇 시험 메시지에서 접근 가능합니다.
- **편집된 정보 태깅**: 지식 베이스 웹사이트 정보가 수정되면 학습된 웹사이트 옆에 "편집됨" 태그가 나타나며, 업데이트를 나타내는 툴팁이 표시됩니다.
- **FAQ 및 웹사이트 업데이트**: FAQ를 수정하면 기존 학습된 FAQ가 실시간으로 업데이트됩니다. 업데이트 후 AI 메시지에서 사용된 FAQ는 삭제된 것으로 표시됩니다.
- 웹사이트 정보가 업데이트되면 스크랩된 데이터 모달에 업데이트된 데이터가 반영되며, URL 옆에 "편집됨" 태그가 표시됩니다.

![편집됨 태그 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034136149/original/LQhlMK1RyTq-ig0Rg_IfXYy3I3VsLQHJCA.png?1728069376)

- 프롬프트 섹션은 AI 메시지의 소스(대화 AI(Conversation AI) 하위 계정(Sub-account) 봇 또는 워크플로우 액션)에 따라 변경됩니다.

![프롬프트 섹션 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034135866/original/2PlnQBh-RL_5grIlx9DockZHo3NQ1RaJTA.png?1728068674)

---
*원문 최종 수정: Wed, 16 Oct, 2024 at 1:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*