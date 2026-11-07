---
원문: /support/solutions/articles/48001236575-eliza-agent-platform-settings
번역일: 2026-11-06
카테고리: 22-Eliza
---

# Eliza 에이전트 플랫폼 설정

Eliza 에이전트 플랫폼(Eliza Agent Platform, EAP)을 사용하려면 먼저 몇 가지 설정이 필요해요. 이 문서에서는 위치 추가, 팀원 설정, 웹훅, 처리 결과, FAQ, 리포트, 단축키, 공지 설정 방법을 안내해요.

## Eliza 에이전트 플랫폼에 새 위치 추가하기

Eliza 계정을 쓰려면 가장 먼저 계정에 위치를 추가해야 해요.

1. **설정 > 위치**에서 **위치 추가** 버튼을 클릭하세요.

   ![위치 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277242/original/WlVQGxXIL5J52wKCL4014tC2fbeOq349yQ.png?1680196895)

2. 드롭다운에서 위치를 선택하세요. 하이퍼클래스의 위치가 Eliza에 추가돼요.

   ![드롭다운에서 위치 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277257/original/847OCAC4AzsmfBubPCCfCjB2kqEYjBaHYw.jpeg?1680196898)

3. 위치를 선택하면 기본 캘린더(선택 사항)와 우선순위를 정하는 화면이 나와요.

   ![기본 캘린더와 우선순위 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277233/original/dgCCMV_5k9LnB5qh6T0CVdig_X041oe06w.png?1680196890)

   우선순위는 Eliza 에이전트 플랫폼(EAP)에서 기본으로 제공하는 기능이에요. Eliza 계정 안에서 위치마다 처리 순서를 정할 때 써요. 시간대나 특정 위치의 서비스 수준 협약(SLA) 등을 기준으로 위치의 우선순위를 정할 수 있어요.

   ![우선순위 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277232/original/FPpnyueICKgukEvZeocXh-XIlZ12CPBZ4g.png?1680196890)

4. 미리 만들어 둔 에이전트 목록에서 이 위치의 대화를 처리할 에이전트를 선택하세요.

   ![에이전트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277246/original/wwH_FLvvYGUI8iPtoxFLJ11lMrK_ZACSCw.png?1680196898)

5. 에이전트에게 보여 줄 공지 내용을 남길 수 있어요. 이 내용은 **설정 > 공지**에서 확인할 수 있어요. 공지는 이 위치를 맡은 에이전트에게만 보여요.
6. 이 화면에서 선택한 위치를 Eliza에서 제거할 수도 있어요.
7. 위 설정을 모두 마쳤으면 **위치 추가**를 클릭해 계정을 Eliza에 추가하세요.

   ![위치 추가 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277249/original/9CiiPdapVD-qMimTbFU47MR-RJorYUmD6g.png?1680196898)

---

## 팀원 설정하기

**설정 > 팀** 화면에서 팀원을 에이전트나 관리자로 추가할 수 있어요.

![팀 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277250/original/rigWbadRkjfIXF7D4oOE_B4D48ezdE1wvg.png?1680196899)

![팀원 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277251/original/fKBvzdDsvboQRCbKVwF3gQaLpKmO6nugYg.png?1680196899)

새로 추가한 팀원에게는 계정 비밀번호를 설정하는 링크가 담긴 이메일이 가요.

![비밀번호 설정 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277248/original/wso_6V5fO1F199mzJrXt8QbnHQkq0M39aA.png?1680196898)

---

## Eliza 계정 설정

새로 들어오는 대화는 해당 위치를 맡도록 설정된 에이전트에게 라운드 로빈 방식으로 자동 할당돼요. 이때 온라인 상태인 에이전트 사이에서만 순서대로 할당돼요.

특정 에이전트에게 할당된 대화에 새 메시지가 오면, 그 에이전트가 오프라인이어도 같은 에이전트에게 전달돼요.

## 웹훅 설정하기

**설정 > 회사**로 이동하세요.

![회사 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277252/original/_upzFOaiLkVU22YyAH8su4EcS64UmnnrVg.png?1680196899)

아래 상황에서 에이전트에게 알림이 가도록 웹훅을 설정하세요.

| 메시지 유형 | 설명 | 설정된 키 |
| --- | --- | --- |
| 수동 할당 | 에이전트나 관리자가 대시보드에서 대화를 에이전트에게 할당할 때 | `Type`, `LocationName`, `Priority`, `Agent Email`, `Conversation Count`, `contactId`, `contactName` |
| 자동 할당 | 시스템이 대화를 에이전트에게 자동으로 할당할 때 | `Type`, `LocationName`, `Priority`, `Agent Email`, `Conversation Count`, `contactId`, `contactName` |
| 할당 해제 | 에이전트에게서 대화를 회수할 때 | `Type`, `LocationName`, `Priority`, `Agent Email`, `Conversation Count`, `contactId`, `contactName` |
| 새 메시지 | 진행 중인 대화에 새 메시지가 도착할 때 | `Type`, `LocationName`, `Priority`, `Agent Email`, `Conversation Count`, `contactId`, `contactName` |
| 처리 결과 지정 | 처리 결과가 지정될 때마다 | `Type`, `dispositionName`, `dispositionTag`, `LocationName`, `Priority`, `Agent Email`, `Contact Id`, `Contact Name` |
| 예약 완료 | 예약이 완료될 때마다 | `Type`, `dispositionName`, `appointmentId`, `LocationName`, `Priority`, `Agent Email`, `Contact Id`, `Contact Name` |

---

## 처리 결과 설정

처리 결과(Disposition)를 쓰면 대화가 어떤 단계에 있는지 관리하고 추적할 수 있어요.

다음 항목을 입력하세요.

1. 처리 상태 이름
2. 짧은 이름
3. 이 처리 결과를 지정할 때 함께 지정할 태그
4. 처리 결과를 지정할 때 코멘트를 입력할 수 있는지 여부
5. 코멘트 입력을 필수로 할지 여부
6. 이미 만든 처리 결과를 삭제하는 옵션

에이전트는 대화를 끝낼 때 처리 결과를 고를 수 있어요. 처리 결과를 지정하면서 입력한 코멘트는 **설정 > Disposition Comments**(처리 결과 코멘트)에서 볼 수 있어요. 처리 결과의 순서도 바꿀 수 있어요. 바꾼 순서는 **대화** 화면에서 **End chat**(채팅 종료)을 클릭할 때 그대로 보여요.

![처리 결과 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290288548/original/TRSvVX_P-WP0v--i2sGsXzELUYm4XiDNKQ.jpeg?1680201553)

### 시스템 처리 결과

#### 고객 응답 대기(Waiting for the customer's response)

고객의 응답을 기다리는 상태에서 에이전트가 대화를 종료하면 시스템이 자동으로 지정해요.

#### **예약 완료**

에이전트가 예약을 잡을 때마다 자동으로 지정돼요.

#### **Autoclosed**(자동 종료)

다음 상황에서 지정돼요.

- **Pause Conversations**(대화 일시중지)
- **Eliza Bypass** 태그
- **Send to Eliza** 태그

---

## Disposition Comments 탭

![Disposition Comments 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290288533/original/vUBOaJp1sGBq71T9j36WdQM-xwgPOFe1FQ.png?1680201545)

이 탭에는 코멘트를 입력할 수 있도록 설정한 처리 결과만 나와요.

에이전트가 입력한 모든 코멘트는 **설정 > Disposition Comments**에서 볼 수 있어요. 여기서 **위치**, **처리 상태 이름**, 에이전트 이름, 처리 결과 코멘트가 지정된 날짜로 필터링할 수 있어요.

이 화면에서 코멘트를 검토해 업무 방식을 더 효율적으로 바꿀 수 있는지 확인하거나 FAQ를 만들 수 있어요.

### 코멘트 다운로드하기

위치, 처리 상태 이름, 에이전트 같은 조건을 정한 뒤 오른쪽 위의 다운로드 버튼을 누르면 입력된 처리 결과를 엑셀 파일로 내려받을 수 있어요.

![코멘트 다운로드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290289460/original/BMCF86Icz5aM2A7iL7bU2XcOHShIlO8U_g.png?1680201944)

---

## FAQ 관리 — 템플릿과 위치 FAQ

FAQ는 에이전트의 업무 효율을 높이는 데 도움이 돼요.

![FAQ 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290290006/original/xKR0dE1JFdPpSgJDC2c5dWt2uPZh2-qeyQ.png?1680202145)

FAQ를 만들면 시스템이 기본 질문 세트를 제공해요. 다른 질문이 필요하면 **FAQ 추가** 버튼으로 직접 만들 수 있어요.

![FAQ 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290290123/original/vVpURDuGd6rEqSzcBOg9dDFpjlnBr3saDw.png?1680202190)

질문은 직접 정하고 답변은 고객이 입력하게 하려면, 위치에 질문을 입력한 뒤 고객에게 하이퍼클래스에 로그인해 해당 위치의 Eliza FAQ 설정 화면에서 답변을 입력하도록 요청하세요. 입력한 답변은 Eliza 에이전트 플랫폼에서 볼 수 있어요.

{% hint style="info" %}
서브 계정이 **설정 > Eliza 서비스** 탭에 접근할 수 있어야 해요. 해당 사용자의 사용자 권한에서 이 탭을 켜 주세요.
{% endhint %}

답변 입력란 옆의 아이콘을 클릭하면 답변에 커스텀 값을 넣을 수도 있어요.

**할당** 버튼을 클릭하면 템플릿을 하나 이상의 위치에 할당할 수 있어요. 할당은 수학의 합집합처럼 동작해요.

1. 템플릿에만 있고 위치에는 없는 질문은 위치에 새 질문으로 추가돼요.
2. 템플릿에 있는 질문의 답변이 비어 있으면, 위치에 같은 질문이 있고 답변이 입력되어 있더라도 그 답변을 덮어쓰지 않아요.
3. 템플릿에 있는 질문에 답변이 있고 위치에도 답변이 있으면, 템플릿의 답변이 위치의 기존 답변을 덮어써요.
4. 템플릿에 있고 위치에는 없는 질문은 새 질문으로 추가돼요.

![템플릿 할당 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290290305/original/t6OawgWYBtlrD0aZkZ5W9hb5ydZX5BgVOw.png?1680202287)

![템플릿 할당 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290290375/original/i_HVg5Wr90AKvOThtAzrkElh_mvJ-u0q4w.png?1680202317)

### FAQ 템플릿에서 템플릿 파라미터 사용하기

- 다음 항목은 Eliza(FAQ 템플릿 또는 위치 FAQ)에서 사용할 수 없어요.
- 위치의 FAQ에서는 사용할 수 있지만 FAQ 템플릿에서는 사용할 수 없는 파라미터

---

## 리포트

### Eliza 리드 리포트(Eliza Leads Report)

![Eliza 리드 리포트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290290621/original/slnNGIybokdAwfQkj5axiprScJjh-kkjqg.png?1680202437)

이 섹션에는 앞으로 리포트가 더 추가될 예정이에요. 지금은 Eliza 리드 리포트가 있고, 다음 열로 구성돼요.

- 위치 ID
- 위치 이름
- 주소 - 위치의 주소
- 대화 ID - Eliza의 대화 ID
- 연락처 ID - 하이퍼클래스의 연락처 ID
- 리드 이름
- Eliza 에이전트 이름
- 처리 상태 이름
- 채널 - SMS / 이메일 / 전화 / Instagram / Facebook / GMB / 리뷰
- 처리 결과 지정일 - 처리 결과가 지정된 날짜
- 시작일 - 대화 시작 날짜
- 종료일 - 대화 종료 날짜

### [Eliza 리드 리포트 샘플](https://t8631005.p.clickup-attachments.com/t8631005/c0ffb503-5203-419d-af93-0bcaee6d11a7/Eliza%20Report%2012_01_2021%20to%2012_31_2021.xlsx)

### 에이전트 성과 리포트

이 리포트도 리포트 섹션에서 볼 수 있어요. 선택한 위치 또는 전체 위치를 대상으로, 정한 기간의 성과를 확인할 수 있어요.

선택할 수 있는 최대 기간은 90일이에요.

이 리포트에는 다음 열이 있어요.

- 위치 ID
- 위치 이름
- 위치 주소
- 에이전트 이름
- 처리한 총 연락처 수
- 리포트를 실행한 시점의 진행 중인 대화
- 전체 대화 수
- 전송된 응답 수 (해당 서브 계정에서 에이전트가 보낸 응답)
- 평균 응답 시간 = 에이전트가 모든 메시지에 응답하는 데 걸린 총 시간 ÷ 리포트 기간 중 응답한 메시지 수
  형식: HH:MM:SS
- 평균 첫 응답 시간 = 에이전트가 수신 메시지에 첫 응답을 보내는 데 걸린 총 시간 ÷ 리포트 기간 중 에이전트가 보낸 첫 응답 수
  형식: HH:MM:SS
- 예약 완료
- 자동 종료 (에이전트 로그아웃 또는 세션 시간 초과로 인한 종료)
- 고객 응답 대기
- 사용자 지정 처리 결과 (직접 정의한 항목)
- 후속 요청 보내기
- 실패
- 사용자 지정 서비스
- 처리 결과 없이 종료

### [에이전트 성과 리포트 샘플](https://t8631005.p.clickup-attachments.com/t8631005/818c07dc-daad-47ea-a341-ef6fcd8b21ae/Agents%20Performance%20Report%2003_01_2022%20to%2003_28_2022.xlsx)

#### 리포트 설명

평균 응답 시간이나 평균 첫 응답 시간에 NA가 보이면, 해당 서브 계정에서 그 에이전트가 종료한 대화가 없다는 뜻이에요.

이 리포트는 종료된 대화만 포함한 파일로 간주돼요.

프로필 화면에는 다음 항목이 있어요.

- 프로필 사진 변경, 전화번호, 이메일 주소
- 비밀번호 변경
- 로그인했을 때 에이전트에게 알려 주는 벨소리 지정
- 메시지를 보낼 때 Enter 또는 Ctrl + Enter 중 어느 쪽을 쓸지 설정

![프로필 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290291327/original/_F3mKoohzBFZ04Dz1HNtjdCFcHTDLlAyMA.png?1680202723)

---

## 단축키

**대화** 화면에서는 아래 단축키를 쓸 수 있어요.

- 채팅 종료 - Alt E (Mac은 Option E)
- 채팅을 종료하면서 처리 결과 선택 - 처리 결과 버튼 옆에 처리 결과의 일련번호가 표시돼요.
- 다른 에이전트에게 전달 - Alt T (Mac은 Option T)
- Esc 키 - 처리 결과 창과 '다른 에이전트에게 전달' 창을 닫아요.
- 키보드만으로 대화 이동 - Alt + 위쪽 화살표는 이전 대화, Alt + 아래쪽 화살표는 다음 대화로 이동해요.

![단축키 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290292174/original/7N0P7SUV3o3fFDebtOEtzvr20LtQ7dSssg.png?1680203069)

---

## 공지

**위치 편집** 옵션에서 설정한 공지는 에이전트가 이 섹션에서 볼 수 있어요.

에이전트에게는 자신이 맡도록 추가된 위치의 공지만 보여요.

![공지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290292300/original/fVLQqJRfNPEF3E48hk_5jEbD0MxW2DyXfQ.png?1680203124)
