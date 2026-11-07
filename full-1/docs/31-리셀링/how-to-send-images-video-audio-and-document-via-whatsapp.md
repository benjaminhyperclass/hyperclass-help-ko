---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005142-how-to-send-images-video-audio-and-document-via-whatsapp
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp으로 이미지, 동영상, 오디오, 문서 보내기

워크플로우에서 **WhatsApp Media**(WhatsApp 미디어) 액션을 사용해 미디어 메시지를 보내는 방법이에요. 이미지, 동영상, 오디오, 문서를 WhatsApp으로 자동 발송하고 싶을 때 따라 하세요.

1. 대시보드에서 **자동화** 탭으로 이동하세요.

   ![대시보드의 자동화 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045580731/original/u8aJHt15WV4o6TlmrA3C5pvxt-_MCPLYUw.png?1745485217)

2. **Create Workflow**(워크플로우 만들기)를 클릭한 다음 **처음부터 시작**을 선택하세요.

   ![워크플로우 만들기 후 처음부터 시작 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045580825/original/zxm_pvd2hKpDcuUwfhiV1uVKIBFHO7cuWg.png?1745485288)

3. **+** 아이콘을 클릭해 새 워크플로우 단계를 추가하세요.

   ![새 워크플로우 단계 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045581489/original/lJB_r3TEqJyspIG6jsV4KnrvLgs9QMfmIw.png?1745485753)

4. **WhatsApp: Customer Service Window Check**(WhatsApp: 고객 서비스 창 확인)를 검색해서 선택하세요. 이 단계는 24시간 창이 열려 있는 동안에만 메시지가 발송되도록 확인해 줘요.

   ![WhatsApp 고객 서비스 창 확인 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045581858/original/U3jhl-Ru6fnVb-9WzReTQ21Yb3FeCeHdPw.png?1745485943)

5. **진행 중** 분기 아래의 **+** 아이콘을 클릭해 다음 단계를 추가하세요.

   ![진행 중 분기 아래에 단계 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045582056/original/prxqdl3Cc38Z8fif9qBqttuQqAQXkYdcIA.png?1745486079)

6. **WhatsApp Media** 액션을 선택하고, **발신 번호**를 고른 다음 **Media Type**(미디어 유형)을 지정하세요. 오디오, 이미지, 동영상, 문서 중에서 선택할 수 있어요.

   ![발신 번호와 미디어 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045582495/original/YYIHFCIxxH8Pmzh8dUmBFNDKn6jPrvUdkA.png?1745486309) ![발신 번호와 미디어 유형 상세 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045582664/original/aLcgcTu0SHWcRNBeQQOL1wRRTIXes6sT_g.png?1745486413)

7. **Save Action**(액션 저장)을 클릭해 단계를 마무리하세요.

   ![액션 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045582765/original/-N8jHztIRqZY3TvcjN2H9O_fzvRt-7TDWg.png?1745486493)

## FAQ

### 워크플로우가 고객 응답 가능 시간 안에서만 실행되게 하려면 어떻게 하나요?
워크플로우를 시작한 뒤 **+** 아이콘을 클릭하고 **WhatsApp: Customer Service Window Check**를 검색해 추가하세요. 이 단계를 넣으면 고객의 24시간 응답 창이 열려 있는 동안에만 메시지가 발송돼요.

### 미디어 메시지를 실시간으로 테스트할 수 있나요?
네, 할 수 있어요. 워크플로우를 설정하고 게시한 뒤 테스트 조건으로 실행하면 미디어가 제대로 발송되는지 확인할 수 있어요.

### WhatsApp으로 어떤 미디어를 보낼 수 있나요?
액션 설정의 **Media Type** 드롭다운에서 오디오 파일, 이미지, 동영상, 문서와 그 밖에 지원되는 파일 형식을 선택해 보낼 수 있어요.

### 미디어 메시지를 보낼 번호는 어떻게 고르나요?
**WhatsApp Media** 액션에서 계정에 이미 연결된 번호를 **발신 번호**로 선택하세요.
