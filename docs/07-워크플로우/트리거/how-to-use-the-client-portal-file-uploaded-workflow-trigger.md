---
원문: /support/solutions/articles/155000008244-how-to-use-the-client-portal-file-uploaded-workflow-trigger
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Client Portal File Uploaded(클라이언트 포탈 파일 업로드됨)

연락처가 클라이언트 포탈에서 문서를 올리면 워크플로우가 자동으로 실행되도록 설정하는 방법을 안내해요. 업로드 확인 메시지 보내기, 팀원에게 알림 보내기, 검토 작업 만들기처럼 다음 단계를 바로 시작하고 싶을 때 쓰세요.

하이퍼클래스의 **Client Portal File Uploaded**(클라이언트 포탈 파일 업로드됨) 워크플로우 트리거를 쓰면 연락처 기록을 직접 계속 확인하지 않아도 돼요. 문서를 기반으로 하는 업무도 불필요한 지연 없이 진행할 수 있어요. 온보딩이나 승인 절차의 다음 단계를 시작할 때도 활용할 수 있어요.

## 워크플로우 트리거 Client Portal File Uploaded란?

**Client Portal File Uploaded** 트리거는 연락처가 클라이언트 포탈의 공유 문서 화면에서 파일을 업로드하면 워크플로우를 시작해요. 업로드된 파일은 연락처의 CRM 기록에 연결돼요. 그래서 한곳에서 문서를 관리하고 후속 조치를 챙길 수 있어요.

클라이언트가 업로드를 마치면 워크플로우에서 다음과 같은 액션을 실행할 수 있어요.

- 확인 메시지 보내기
- 내부 사용자에게 알림 보내기
- 작업 만들기
- 연락처 업데이트
- 기회를 다음 단계로 이동

업로드된 파일은 **연락처 > 문서 > 수신됨 > 클라이언트 포탈**에서 계속 볼 수 있어요.

## Client Portal File Uploaded 트리거의 장점

- 수동 확인 줄이기: 연락처 기록을 반복해서 확인하는 대신, 연락처가 파일을 제출하는 즉시 알맞은 워크플로우가 시작돼요.
- 처리 지연 줄이기: 문서가 도착하자마자 검토 담당자에게 알리거나 내부 작업을 만들 수 있어요.
- 클라이언트 소통 개선: 업로드 후 자동 확인 메시지나 다음 단계 안내 메시지를 보낼 수 있어요.
- 빠른 온보딩 지원: 팀원이 새 문서를 발견할 때까지 기다리지 않고 다음 온보딩·승인 단계를 시작할 수 있어요.
- 제출 누락 방지: 워크플로우 액션으로 업로드된 문서를 담당 팀원에게 알릴 수 있어요.
- 일관된 업무 처리: 조건에 맞는 모든 클라이언트 포탈 업로드에 같은 검토·후속 절차를 적용할 수 있어요.

## 클라이언트 포탈 파일 업로드 흐름

업로드 흐름을 알아 두면 워크플로우를 시작시키는 이벤트가 무엇인지, 자동화가 시작된 뒤 파일이 어디에 있는지 쉽게 찾을 수 있어요.

![클라이언트 포탈 파일 업로드 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076273038/original/ZV5PphxelSm2kbVPd3sbo4TcPYDhCNl7KQ.png?1784305031)

## 지원하는 파일 형식

지원하는 형식을 써야 클라이언트의 문서가 정상적으로 업로드되고 연락처 기록에 저장돼요.

클라이언트 포탈은 다음 문서·이미지 형식을 지원해요.

문서 형식

- PDF: `.pdf`
- Microsoft Word: `.doc`, `.docx`
- Microsoft Excel: `.xls`, `.xlsx`
- Microsoft PowerPoint: `.ppt`, `.pptx`
- 일반 텍스트: `.txt`
- 리치 텍스트 형식(RTF): `.rtf`

이미지 형식

- JPEG: `.jpg`, `.jpeg`
- PNG: `.png`
- GIF: `.gif`

MP4, MOV, AVI, MKV, WMV 같은 동영상 형식은 클라이언트 포탈 문서 업로드에서 지원하지 않아요.

## 클라이언트 포탈로 클라이언트에게 파일 공유하기

연락처 기록에서 문서를 공유하면 클라이언트가 문서를 제출하기 전에 안내문, 체크리스트, 참고 파일을 미리 받아볼 수 있어요. 이메일 첨부나 별도의 파일 공유 도구 대신 한곳에서 파일을 주고받을 수 있어요.

**새 파일을 클라이언트에게 공유하려면**

1. **연락처**로 이동해 해당 연락처를 선택하세요.

   ![연락처 목록에서 연락처 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076271046/original/RRSODHNr7g25MIabJLVKMImKlc5YiHjE7A.png?1784303629)
2. 연락처의 **문서** 영역을 여세요.
3. 새 파일을 추가하거나 업로드하는 옵션을 클릭하세요.
4. 기기에서 파일을 선택하세요.
5. **Shared Documents on Client Portal**(클라이언트 포탈의 공유 문서)을 켜거나, 화면에 보이는 클라이언트 포탈 공유 옵션을 켠 다음 파일을 저장하세요.

   ![클라이언트 포탈 공유 옵션을 켜고 파일 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076271108/original/bNxGiNDAlGw9xPL6i28e3Fi2ZiaM4AGaiA.gif?1784303665)

**이미 있는 파일을 공유하려면**

1. 연락처의 **문서** 영역에서 파일을 찾으세요.
2. 점 세 개 메뉴를 클릭한 다음 **Share to Client Portal**(클라이언트 포탈로 공유)을 선택하세요.

   ![점 세 개 메뉴에서 클라이언트 포탈로 공유 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076271638/original/9Th6Zx3pGTkdOI9i-dF-oHs_JZ0izuOhyw.png?1784303931)
3. 공유 확인 창에서 공유를 확인하세요.

   ![공유 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076271664/original/mo6swdgW6bkVthbOGMu8zt8HA98A-ME2Pg.png?1784303950)

공유한 파일은 연락처가 클라이언트 포탈의 공유 문서 영역에서 볼 수 있어요.

파일 공유와 관리 방법을 더 알고 싶다면 [클라이언트 포탈과 CRM으로 문서 공유·관리하기](../../02-연락처/how-to-share-and-manage-documents-via-client-portal-and-crm.md)를 참고하세요.

## 클라이언트 포탈 사용자로 파일 업로드하기

이 트리거가 실행되려면 클라이언트가 클라이언트 포탈에서 직접 파일을 업로드해야 해요. 클라이언트가 보는 화면을 미리 확인해 두면 문서를 요청할 때 정확하게 안내할 수 있어요.

1. 클라이언트 포탈에 로그인하세요.
2. **공유된 파일** 섹션에서 **+ Add Files**(파일 추가)를 클릭하세요.

   ![공유된 파일 섹션의 파일 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076271784/original/xP4mRYyjl8WuficptF3ZQ_Q4P9FbNeqi4A.png?1784304027)
3. 기기에서 지원하는 파일을 하나 이상 선택한 다음 **업로드**를 클릭하세요.

   ![파일 선택 후 업로드 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076271854/original/XazaHEFX8fIPNcjR0Czp3g3LQuAitroEPQ.png?1784304067)

{% hint style="info" %}
클라이언트는 한 번에 최대 10개의 파일을 선택할 수 있어요. 업로드가 끝나면 파일이 연락처의 수신된 클라이언트 포탈 문서에 나타나고, 워크플로우 트리거가 자동으로 실행돼요.
{% endhint %}

## Client Portal File Uploaded 트리거 설정하기

실제 클라이언트 포탈 업로드에 반응하려면 워크플로우를 게시해야 해요. 트리거와 후속 액션을 설정한 다음, 클라이언트 포탈에 접근할 수 있는 연락처로 실제 업로드 테스트를 해 보세요.

1. 사용할 연락처가 클라이언트 포탈에 접근할 수 있고, **문서** 영역이나 공유 문서 영역을 열 수 있는지 확인하세요.
2. **자동화 > 워크플로우**로 이동하세요. **Create Workflow**(워크플로우 만들기)를 클릭하거나 기존 워크플로우를 여세요.

   ![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076272156/original/_ZFk0nu60dLe0_To7S8yHwT09Fl1JtJHXw.png?1784304267)
3. 워크플로우 맨 처음에서 **Add New Trigger**(새 트리거 추가)를 클릭하세요. **Client Portal File Uploaded**(클라이언트 포탈 파일 업로드됨)를 검색해 선택하세요.

   ![Add New Trigger에서 Client Portal File Uploaded 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076272212/original/td8ViNZ9tbyYk7yPSQLJYCbt3UU1nXmudw.png?1784304318)
4. 필요한 트리거 설정이나 필터가 있으면 입력하세요.
5. 트리거 아래의 플러스(+) 버튼을 클릭해 업로드 후 실행할 액션을 추가하세요.

   ![트리거 아래 플러스 버튼으로 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076272413/original/25H4Fbk1NIw7FstmQwTC7N9-LinDQEEqwQ.png?1784304471)

   자주 쓰는 액션은 다음과 같아요.
   - 파일을 받았다는 이메일이나 SMS 보내기
   - 담당 팀원에게 내부 알림 보내기
   - 문서 검토 작업 만들기
   - '문서 수신 완료' 같은 태그 추가
   - 문서 상태를 추적하는 연락처 필드 업데이트
   - 기회를 업데이트하거나 알맞은 파이프라인 단계로 이동
   - 웹훅으로 다른 시스템에 정보 보내기
6. 업무 절차에 필요한 액션, 대기, 조건을 더 추가하세요.

   예를 들면 다음과 같아요.

   - 접수 문서가 도착하면 온보딩 담당자에게 알림 보내기
   - 신청이나 승인 절차의 검토 작업 만들기
   - 클라이언트가 요청한 자료를 제출하면 프로젝트나 기회 업데이트
   - 갱신 문서가 업로드되면 갱신 절차 시작
7. 워크플로우를 저장하세요.

실제 클라이언트 포탈 업로드로 테스트하는 방법이 가장 확실해요. 트리거, 문서 저장, 후속 액션을 한 번에 확인할 수 있기 때문이에요.

## 자주 묻는 질문

### Client Portal File Uploaded 트리거와 Documents & Contracts 트리거는 어떻게 다른가요?

**Client Portal File Uploaded**는 연락처가 클라이언트 포탈의 문서 업로드 화면에서 제출한 파일에 반응해요. **Documents & Contracts**(문서 & 계약) 트리거는 하이퍼클래스 문서와 계약의 진행 이벤트에 반응해요. 예를 들어 문서가 발송되거나, 열람되거나, 서명되거나, 완료되거나, 거절됐을 때예요.

### CRM에서 파일을 공유해도 이 워크플로우가 시작되나요?

이 트리거는 연락처가 클라이언트 포탈의 공유 문서 화면에서 업로드한 파일을 위해 만들어졌어요. CRM에서 파일을 공유하면 클라이언트가 그 파일을 볼 수 있게 될 뿐, 별도의 문서 공유 작업이에요.

### Test Workflow를 써야 하나요, 실제로 업로드해 봐야 하나요?

테스트용 연락처로 실제 업로드를 해 보는 방법을 권해요. 클라이언트 포탈 이벤트, 문서 저장, 워크플로우 액션을 한 번에 확인할 수 있어요. **Test Workflow**(워크플로우 테스트)는 워크플로우 빌더 안의 테스트 기능이에요.

### 워크플로우가 실행되지 않았어요. 어디서 원인을 확인하나요?

워크플로우를 열어 **Execution Logs**(실행 로그)와 **Enrollment History**(등록 기록)를 확인하세요. 아래 항목도 함께 확인하세요.

- 워크플로우가 게시되어 있는지
- 연락처에게 클라이언트 포탈 접근 권한이 있는지
- 지원하는 파일 형식인지
- 업로드가 정상적으로 완료됐는지
