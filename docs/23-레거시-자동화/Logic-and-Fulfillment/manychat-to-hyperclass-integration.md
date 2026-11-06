---

번역일: 2026-04-08
카테고리: 레거시 자동화 > 로직 & 이행
---

# Manychat와 Hyperclass 연동

이 글의 단계들은 고급 연동(Advanced Integration)에 관한 내용으로 참고용입니다. 현재 저희 지원팀은 API나 ManyChat 연동의 복잡성으로 인해 직접적인 서비스나 지원을 제공하지 않지만, 시작하고 연결하는 데 도움이 되는 많은 도구와 그룹이 있습니다! API 관련 도움이 필요하시면 Developer Council Slack 커뮤니티에 참여하실 수 있습니다: [developers.Hyperclass.com](//developers.gohighlevel.com)

또한 매월 Developer Council 줌 통화(둘째 주 마지막 금요일)를 진행하며, 이벤트 캘린더에서 확인하실 수 있습니다: [https://hyperclass.ai/events](https://hyperclass.ai/events)

더 많은 정보와 API 문서 링크는 개발자 웹사이트를 방문해 주세요: [https://developers.hyperclass.ai/](https://developers.hyperclass.ai/)

참고사항:

API URL 엔드포인트: 
- 연락처 생성: [https://api.hyperclass.ai/zapier/contact/add_update](https://api.hyperclass.ai/zapier/contact/add_update)
- 기회 추가/업데이트: [https://api.hyperclass.ai/zapier/contact/add_update](https://api.hyperclass.ai/zapier/contact/add_update)_opportunity

### 데이터 필드
```json
{
  "email": "john@deo.com",
  "phone": "+18887324197",
  "firstName": "John",
  "lastName": "Deo",
  "tags": ["commodo sed aliquip","ut exercitation sunt"]
}
```

# 문제 해결

#### Q1) Manychat에서 중복 연락처가 들어오고 있어요. Hyperclass과 Manychat를 어떻게 동기화하나요?

Hyperclass에서 Manychat 중복 연락처를 방지하려면 아래 동영상을 참고하세요.

연락처를 복제하는 대신 External Request를 사용하여 연락처 업데이트하기

[https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d](https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d)

헤더:
```
AUTHORIZATION = Bearer APIKEY
Content-Type = application/json
```

본문:
```json
{
  "first_name": {{first_name|fallback:""|to_json:true}},
  "last_name": {{last_name|fallback:""|to_json:true}},
  "email": {{email|fallback:""|to_json:true}},
  "phone": {{phone|fallback:""|to_json:true}}
}
```

---
*원문 최종 수정: 2022년 7월 7일*
*Hyperclass 사용 가이드 — hyperclass.ai*