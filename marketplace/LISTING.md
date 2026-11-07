# Marketplace listing copy — Korean Language Pack

## App name
Korean Language Pack (한국어 UI 팩)

## Tagline (≤ 80 chars)
- EN: Run your whole sub-account dashboard in natural, consistent Korean.
- KO: 서브계정 화면 전체를 자연스럽고 일관된 한국어로.

## Pricing
Free (무료) — no subscription, no usage fees.

## Category
Productivity / Agency tools (pick the closest available)

## Description (EN)
Korean Language Pack translates the HighLevel sub-account interface into professional Korean for agencies serving Korean-speaking businesses.

- Covers 100,000+ interface strings: dashboard, contacts and contact details, conversations, calendars, opportunities, payments and invoices, sites, memberships admin, reporting, settings and more.
- One consistent glossary across every screen (e.g., Contact = 연락처, Opportunity = 기회, Workflow = 워크플로우), checked automatically for placeholders and terminology on every update.
- Korean date and time formats: 'Sep 28, 2026 02:07 PM' becomes '2026년 9월 28일 오후 2:07' in tables, calendars and timelines.
- White-label friendly: no third-party brand names are shown; platform references are neutral.
- Always current: the translation dictionary is updated continuously as new screens ship — no reinstall needed.
- Safe by design: text-only localization. It does not change how anything works, never reads or sends contact or user data, and can be switched off per browser with `?hcko=off`.

Not included: client portal / communities member sites (separate domains outside the agency app), and screens the platform loads from another domain inside an iframe (e.g., the workflow builder).

## Description (KO)
한국어 UI 팩은 HighLevel 서브계정 화면을 전문적인 한국어로 바꿔 줍니다. 한국 고객을 둔 에이전시를 위한 앱입니다.

- 10만 개가 넘는 화면 문구: 대시보드, 연락처·연락처 상세, 대화, 캘린더, 기회, 결제·인보이스, 사이트, 멤버십 관리, 리포팅, 설정 등
- 모든 화면에 같은 용어(연락처·기회·워크플로우 등)를 쓰고, 갱신할 때마다 자리표시자·용어를 자동 검사합니다.
- 날짜·시각도 한국어 형식으로 보여 줍니다(예: 2026년 9월 28일 오후 2:07 — 표·캘린더·타임라인).
- 화이트라벨에 맞게 외부 브랜드명을 노출하지 않습니다.
- 새 화면이 나오면 사전이 계속 갱신됩니다. 다시 설치할 필요가 없습니다.
- 문구만 바꿉니다. 기능은 그대로이고, 연락처·사용자 데이터를 읽거나 보내지 않습니다. 주소에 `?hcko=off` 를 붙이면 그 브라우저에서 꺼집니다.

포함되지 않음: 클라이언트 포털·커뮤니티(회원용 별도 도메인), 다른 도메인의 iframe 으로 뜨는 화면(예: 워크플로우 빌더).

## Support
- Email: benjamin@hyperclass.ai
- Company: Geunha Inc. (Hyperclass)

## Notes for reviewers (paste into the submission)

This app ships one Custom JS script (agency distribution) that localizes the sub-account UI into Korean.

How it works
- It merges Korean messages into the app's existing vue-i18n instances (`mergeLocaleMessage`) and replaces a fixed list of exact-match UI labels. Text nodes that consist entirely of an English date/time (e.g. 'Sep 28, 2026 02:07 PM') are re-formatted in Korean for display only. It does not change any behaviour, routes, input values or API calls.
- All executable code is inside the reviewed script (no remote scripts, no dynamic imports, no eval/new Function, no console.log, not obfuscated).
- It downloads only **static JSON translation data**, read-only, from a public GitHub repository pinned to an immutable commit:
  - `https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@<commit>/data/hc-ko-app-core.json` (and `hc-ko-app-apps.json`)
  - `https://raw.githubusercontent.com/benjaminhyperclass/hyperclass-help-ko/main/data/hc-ko-app-rev.json` (a small pointer that names the current commit)
  The JSON is parsed as data only and cached in the browser's Cache Storage.
- No user, contact, location or company data is read, stored remotely or transmitted. No analytics or tracking.
- Runs only on sub-account (`/v2/location/...`) screens; agency-level screens are left untouched.
- Off switches: `?hcko=off` in the URL or `localStorage.hcKoOff = '1'` (per browser).
- Performance: dictionaries are ~1 MB compressed on first load and served from cache afterwards; DOM work is batched and debounced.
