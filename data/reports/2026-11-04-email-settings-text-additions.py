# 알림 이메일 작업 중 발견한 설정 화면 영어 — 화면 글자층 보강 2026-11-04
# 후보 문구가 텔레메트리(data/telemetry)에 없는 것을 확인했다. Client Portal 만 사이드바 키(sidebar.clientPortal)로 있다.
# Retry·SMS 외 번역은 글로서리(data/glossary/ghl-glossary.json)와 기존 사전 표기를 기준으로 했다.
TEXT = {
# 클라이언트 포털 → 이메일 설정
"Enable or disable email notifications for your group members and customize the emails they receive.": "그룹 멤버의 이메일 알림을 활성화 또는 비활성화하고, 멤버가 받는 이메일을 맞춤 설정하세요.",
"Client Portal": "클라이언트 포털",
# 결제 → 설정 → 구독 (재시도 규칙 1~4, 카탈로그 subscription.settings.retryRules 와 같은 번역)
"Retry 1 day after the previous attempt": "이전 시도 1일 후 재시도",
"Retry 3 day after the previous attempt": "이전 시도 3일 후 재시도",
"Retry 5 day after the previous attempt": "이전 시도 5일 후 재시도",
"Retry 7 day after the previous attempt": "이전 시도 7일 후 재시도",
# 결제 → 설정 → 구독 (날것 키 노출 — 카탈로그에 communicationChannels[1] 이 없다)
"subscription.settings.paymentFailure.communicationChannels[1]": "SMS",
}
