#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
hcKo — 신규 머지분을 저장소 전체 사전 관례와 대조

용도: 이번에 머지된 334건은 기존 키와 겹치지 않아 충돌 검사를 받지 못했습니다.
      이 스크립트는 "충돌"이 아니라 "표기 관례 이탈"을 찾습니다.
      기존 9,077건이 어떤 표기를 쓰는지 코퍼스에서 다수결로 뽑아낸 뒤,
      신규분이 소수파 표기를 쓰고 있으면 보고합니다.

실행:
  python3 check-conventions.py <사전.json> <신규머지분.json> [--fix-out fixes.json]

  <사전.json>       배포된 core 사전. _text 를 가진 JSON (9,077건)
  <신규머지분.json>  이번에 추가된 {"영문":"한국어"} 맵

종료코드: 이탈이 있으면 1, 없으면 0 (CI 연결용)
"""
import json, re, sys, argparse, collections

# ── 표기가 갈리기 쉬운 형태소. 필요에 따라 추가하세요 ────────────────────
MORPHEMES = [
    "보험", "계정", "리포트", "리포팅", "포털", "토글", "관리", "설정", "변호사",
    "코칭", "수리", "정비", "요금제", "스냅샷", "템플릿", "퍼널", "대시보드",
    "보기", "검색", "추가", "삭제", "편집", "생성", "연결", "발송", "저장",
    "워크플로우", "파이프라인", "에이전시", "연락처", "인보이스", "구독",
]
BRAND_RE = re.compile(r"HighLevel|Highlevel|GoHighLevel|GHL|LeadConnector")

# ── 형태소 다수결에서 제외할 굳은 명사 ──────────────────────────────────
# 형태소 단위 다수결은 '굳은 명사'와 '목적어+동사'를 구분하지 못한다.
# 실측(2026-08-23): '보기' 는 띄움 173회지만 109종으로 흩어져 있고(정보 보기·설정 보기…),
# 붙임 72회는 6종에 집중돼 있다(미리보기 56·둘러보기 7…). 서로 다른 부류가 한 표로 섞인다.
# 이 목록의 단어는 한 단어로 굳었으므로 띄어쓰기 판정 대상에서 뺀다.
COMPOUND_EXCEPTIONS = {
    "미리보기", "다시보기", "둘러보기", "알아보기", "찾아보기", "살펴보기", "더보기",
    "생명보험", "손해보험", "화재보험", "자동차보험",
}


def load_text_map(path):
    d = json.load(open(path, encoding="utf-8"))
    if isinstance(d, dict) and "_text" in d:
        return d["_text"], d.get("_meta", {})
    if isinstance(d, dict) and all(isinstance(v, str) for v in d.values()):
        return d, {}
    raise SystemExit(f"{path}: _text 를 찾을 수 없습니다. 최상위 키: {list(d)[:8]}")


def spacing_forms(corpus, morph):
    """코퍼스에서 '<선행어절><공백?><형태소>' 형태를 모아 띄움/붙임 빈도를 센다"""
    forms = collections.Counter()
    samples = collections.defaultdict(set)
    pat = re.compile(r"[가-힣]+\s?" + morph)
    for ko in corpus:
        for m in pat.finditer(ko):
            seg = m.group(0)
            form = "띄움" if " " in seg else "붙임"
            forms[form] += 1
            if len(samples[form]) < 6:
                samples[form].add(seg)
    return forms, {k: sorted(v) for k, v in samples.items()}


def corpus_tokens(corpus):
    t = set()
    for ko in corpus:
        t.update(re.findall(r"[가-힣]+", ko))
    return t


def jong(ch):
    o = ord(ch)
    if not (0xAC00 <= o <= 0xD7A3):
        return None, None
    j = (o - 0xAC00) % 28
    return j != 0, j


def josa_issues(ko, tokens):
    """선행 어절이 코퍼스에 독립 등장할 때만 명사+조사로 인정 (오탐 억제)"""
    out = []
    for m in re.finditer(r"([가-힣]+)(을|를|은|는|이|가|과|와|으로|로)(?=\s|$|[.,!?)\]])", ko):
        stem, part = m.group(1), m.group(2)
        if stem not in tokens:
            continue
        has, code = jong(stem[-1])
        if has is None:
            continue
        if part in ("으로", "로"):
            correct = "로" if (not has or code == 8) else "으로"   # ㄹ받침(8)은 '로'
        else:
            pairs = {"을": ("을", "를"), "를": ("을", "를"), "은": ("은", "는"), "는": ("은", "는"),
                     "이": ("이", "가"), "가": ("이", "가"), "과": ("과", "와"), "와": ("과", "와")}
            w, n = pairs[part]
            correct = w if has else n
        if part != correct:
            out.append(f"'{stem}{part}' → '{stem}{correct}'")
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("dict_path")
    ap.add_argument("new_path")
    ap.add_argument("--fix-out")
    ap.add_argument("--min-support", type=int, default=4,
                    help="다수파로 인정할 최소 관측 수 (기본 4)")
    a = ap.parse_args()

    text, meta = load_text_map(a.dict_path)
    new = json.load(open(a.new_path, encoding="utf-8"))
    if isinstance(new, dict) and "_text" in new:
        new = new["_text"]

    # 신규분을 제외한 '기존' 코퍼스가 관례의 기준
    baseline = [v for k, v in text.items() if k not in new]
    tokens = corpus_tokens(text.values())

    print(f"사전 _text: {len(text):,}건  (메타 {meta.get('version','?')} / {meta.get('built','?')})")
    print(f"신규 머지분: {len(new):,}건")
    print(f"관례 기준 코퍼스: {len(baseline):,}건\n")

    deviations, fixes = [], {}

    # ── 1. 표기(띄어쓰기) 관례 이탈 ──────────────────────────────────
    print("=" * 72)
    print("1. 표기 관례 이탈")
    print("=" * 72)
    for morph in MORPHEMES:
        forms, samples = spacing_forms(baseline, morph)
        if not forms:
            continue
        (major, mcount), = forms.most_common(1)
        total = sum(forms.values())
        if mcount < a.min_support or mcount / total < 0.7:
            continue                      # 기존 코퍼스 자체가 갈리면 판정 보류
        pat = re.compile(r"[가-힣]+\s?" + morph)
        for en, ko in new.items():
            for m in pat.finditer(ko):
                seg = m.group(0)
                if seg.replace(" ", "") in COMPOUND_EXCEPTIONS:
                    continue                  # 굳은 명사 — 다수결 대상 아님
                form = "띄움" if " " in seg else "붙임"
                if form != major:
                    fixed = (seg.replace(" ", "") if major == "붙임"
                             else re.sub(r"([가-힣]+)(" + morph + ")", r"\1 \2", seg))
                    deviations.append((morph, en, ko, seg, major, mcount, total, fixed))
                    fixes[en] = ko.replace(seg, fixed)
    if deviations:
        for morph, en, ko, seg, major, mc, tot, fixed in deviations:
            print(f'  [{morph}] 기존 다수파 "{major}" ({mc}/{tot})')
            print(f'      {en[:56]}')
            print(f'      {ko}')
            print(f'      "{seg}" → "{fixed}"\n')
    else:
        print("  이탈 없음\n")

    # ── 2. 동일 영어 용어 → 상이 한국어 ──────────────────────────────
    print("=" * 72)
    print("2. 동일 영어 용어가 기존/신규에서 다르게 번역된 경우")
    print("=" * 72)
    def terms(s):
        return set(w for w in re.findall(r"[A-Za-z][A-Za-z-]{3,}", s))
    base_term = collections.defaultdict(collections.Counter)
    for en, ko in text.items():
        if en in new:
            continue
        if len(en.split()) <= 3:
            for t in terms(en):
                base_term[t.lower()][ko] += 1
    hits = 0
    for en, ko in new.items():
        if len(en.split()) > 3:
            continue
        for t in terms(en):
            cand = base_term.get(t.lower())
            if not cand:
                continue
            (top, n), = cand.most_common(1)
            if n >= a.min_support and ko != top and len(en.split()) == 1:
                print(f'  {en:28} 신규 "{ko}"  vs  기존 다수 "{top}" ({n}회)')
                hits += 1
    if not hits:
        print("  이탈 없음")
    print()

    # ── 3. 조사 ────────────────────────────────────────────────────
    print("=" * 72)
    print("3. 조사 정합성 (신규분)")
    print("=" * 72)
    jc = 0
    for en, ko in new.items():
        for msg in josa_issues(ko, tokens):
            print(f'  {en[:46]:46} | {msg}')
            jc += 1
    if not jc:
        print("  이상 없음")
    print()

    # ── 4. 브랜드 잔존 ──────────────────────────────────────────────
    print("=" * 72)
    print("4. 한국어 값에 브랜드 잔존")
    print("=" * 72)
    bc = 0
    for en, ko in new.items():
        m = BRAND_RE.findall(ko)
        if m:
            print(f'  {en[:46]:46} | {sorted(set(m))} → {ko}')
            bc += 1
    if not bc:
        print("  없음")
    print()

    # ── 5. 사용자 데이터 충돌 위험 (짧은 키) ────────────────────────
    print("=" * 72)
    print("5. 짧은 키 — 사용자 데이터 치환 위험")
    print("=" * 72)
    shorts = sorted(k for k in new if len(k) <= 5)
    if shorts:
        print(f"  5자 이하 {len(shorts)}건: {shorts}")
        print("  → 파이프라인 단계명·태그·서브계정명과 겹칠 수 있습니다. 라이브 대조 권장.")
    else:
        print("  없음")
    print()

    total_issues = len(deviations) + hits + jc + bc
    print("=" * 72)
    print(f"합계: 표기이탈 {len(deviations)} · 용어불일치 {hits} · 조사 {jc} · 브랜드 {bc}")
    print("=" * 72)

    if a.fix_out and fixes:
        json.dump(fixes, open(a.fix_out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print(f"\n표기 이탈 수정안 {len(fixes)}건 → {a.fix_out}")
        print("※ 자동 적용 금지. 사람이 검토한 뒤 머지하세요.")

    sys.exit(1 if total_issues else 0)


if __name__ == "__main__":
    main()
