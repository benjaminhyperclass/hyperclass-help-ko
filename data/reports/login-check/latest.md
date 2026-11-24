# 로그인 화면 점검 — 2026-11-24

헤드리스 Chromium · 쿠키 없음 · 확장 없음 (`scripts/login-check.py`). 영문 단어는 브랜드·이메일·URL·약어 제외.

| 앱 | 화면 | 경로 | lang | 로더 | 영문 단어 | 목록 |
|---|---|---|---|---|---|---|
| app | login | `/` | ko | 4.21.25 booted=True preauth=True · boot 1.3.0 stable | 0 |  |
| app | forgot | `/forgot_password` | ko | 4.21.25 booted=True preauth=True · boot 1.3.0 stable | 0 |  |
| app | sso | `/` | ko | 4.21.25 booted=True preauth=True · boot 1.3.0 stable | 0 |  |
| portal | login | `/login` | ko | portal 4.1.3 applied=True rev 3fe299e | 0 |  |
| portal | forgot | `/forgot-password` | ko | portal 4.1.3 applied=True rev 3fe299e | 0 |  |
| portal | signup | `/signup` | ko | portal 4.1.3 applied=True rev 3fe299e | 0 |  |
| pay | payment-link | `/payment-link/6ae596a700921ddbe8ee08a6` | ko | pay 1.0.1 applied=True terms=0 · 탭 '결제 링크' | 8 | FOUND, LINK, NOT, PAYMENT, Payment, found, link, not |
