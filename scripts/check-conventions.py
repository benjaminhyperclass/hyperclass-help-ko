#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
hcKo — 신규 머지분을 저장소 전체 사전 관례와 대조 (v2)

용도: 신규 머지분은 기존 키와 겹치지 않아 충돌 검사를 받지 못합니다.
      이 스크립트는 "충돌"이 아니라 "표기 관례 이탈"을 찾습니다.

v1 → v2 변경 (2026-08-23, 벤자민 설계):
  v1 은 형태소 단위 다수결만 썼습니다. 그 결과 '굳은 명사'(미리보기)와
  '목적어+동사'(가격 보기)가 한 표로 섞여 오탐 4건을 냈습니다.
  v1 은 이를 COMPOUND_EXCEPTIONS 손목록으로 막았는데, 새 굳은 말이 들어올 때마다 썩습니다.

  v2 는 목록 없이 처리합니다.
    ① stem 별 관례 우선  — '미리'+'보기' → 코퍼스 56:0 → 붙임 확정 → 통과
                            '가격'+'보기' → 띄움 확정 → 통과
    ② stem 이 코퍼스에 없을 때만 형태소 다수결로 내려가되,
       유형 다양성(기본 8종)을 요구. 소수 유형에 집중된 표기는 굳은 말일
       가능성이 높아 판정 근거로 쓰지 않습니다.
       (실측: '보기' 띄움 173회는 109종으로 흩어짐 / 붙임 72회는 6종에 집중)
    ③ ②로 판정한 건은 [추정] 으로 따로 표시 — 사람이 확인합니다.

실행:
  python3 check-conventions.py <사전.json> <신규머지분.json> [--fix-out fixes.json]

  <사전.json>       배포된 core 사전. _text 를 가진 JSON
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


def load_text_map(path):
    d = json.load(open(path, encoding="utf-8"))
    if isinstance(d, dict) and "_text" in d:
        return d["_text"], d.get("_meta", {}), d
    if isinstance(d, dict) and all(isinstance(v, str) for v in d.values()):
        return d, {}, {}
    raise SystemExit(f"{path}: _text 를 찾을 수 없습니다. 최상위 키: {list(d)[:8]}")


def leaf_strings(node, out):
    if isinstance(node, dict):
        for v in node.values():
            leaf_strings(v, out)
    elif isinstance(node, str):
        out.append(node)
    return out


def other_layers(core):
    """host(46,088) · flat(706) 도 같은 사람이 같은 관례로 쓴 한국어다.
    _text 8,743 만으로는 stem 관측이 1회에 그쳐 판정이 대부분 보류된다.
    실측(2026-08-23): '생명+보험' _text 1회 → 전 레이어 3회, '미리+보기' 57 → 256."""
    out = []
    leaf_strings(core.get("host", {}), out)
    out.extend(v for v in core.get("flat", {}).values() if isinstance(v, str))
    return out


def seg_pattern(morph):
    return re.compile(r"[가-힣]+\s?" + morph)


def split_seg(seg, morph):
    """'미리보기' → ('미리','붙임') / '가격 보기' → ('가격','띄움')"""
    form = "띄움" if " " in seg else "붙임"
    stem = seg[: -len(morph)].rstrip()
    return stem, form


def build_convention(baseline, morph):
    """코퍼스에서 stem 별 표기와 형태소 전체 표기를 동시에 집계"""
    by_stem = collections.defaultdict(collections.Counter)   # stem → {붙임:n, 띄움:n}
    overall = collections.Counter()                          # 형태소 전체 빈도
    types = collections.defaultdict(set)                     # 표기 → 서로 다른 어절 종류
    pat = seg_pattern(morph)
    for ko in baseline:
        for m in pat.finditer(ko):
            stem, form = split_seg(m.group(0), morph)
            if not stem:
                continue
            by_stem[stem][form] += 1
            overall[form] += 1
            types[form].add(stem)
    return by_stem, overall, types


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


def respace(seg, stem, morph, target):
    return stem + morph if target == "붙임" else stem + " " + morph


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("dict_path")
    ap.add_argument("new_path")
    ap.add_argument("--fix-out")
    ap.add_argument("--min-support", type=int, default=4,
                    help="형태소 다수결을 인정할 최소 관측 수 (기본 4)")
    ap.add_argument("--stem-threshold", type=float, default=0.95,
                    help="stem 관례로 확정할 최소 우세 비율 (기본 0.95)")
    ap.add_argument("--stem-min", type=int, default=2,
                    help="stem 관례로 확정할 최소 관측 수 (기본 2)")
    ap.add_argument("--min-types", type=int, default=8,
                    help="형태소 다수결에 요구할 최소 어절 종류 수 (기본 8)")
    ap.add_argument("--corpus", choices=("all", "text"), default="all",
                    help="관례 코퍼스 범위. all=_text+host+flat (기본), text=_text 만")
    ap.add_argument("--strict", action="store_true",
                    help="[추정] 건도 실패로 계산 (기본은 보고만 하고 종료코드에 넣지 않음)")
    a = ap.parse_args()

    text, meta, core = load_text_map(a.dict_path)
    new = json.load(open(a.new_path, encoding="utf-8"))
    if isinstance(new, dict) and "_text" in new:
        new = new["_text"]

    # 신규분을 제외한 '기존' 문자열이 관례의 기준.
    # _text 뿐 아니라 host·flat 도 넣는다 — 얇은 코퍼스는 판정을 보류시켜 검사를 무력화한다.
    extra = [] if a.corpus == "text" else other_layers(core)
    baseline = [v for k, v in text.items() if k not in new] + extra
    tokens = corpus_tokens(list(text.values()) + extra)

    print(f"사전 _text: {len(text):,}건  (메타 {meta.get('version','?')} / {meta.get('built','?')})")
    print(f"신규 머지분: {len(new):,}건")
    print(f"관례 기준 코퍼스: {len(baseline):,}건"
          + (f"  (_text {len(baseline)-len(extra):,} + host·flat {len(extra):,})" if extra else ""))
    print(f"판정 기준: stem {a.stem_threshold:.0%}/{a.stem_min}회 우선, "
          f"미관측 시 형태소 다수결({a.min_support}회·{a.min_types}종 이상)\n")

    deviations, fixes, tier2 = [], {}, 0

    # ── 1. 표기(띄어쓰기) 관례 이탈 ──────────────────────────────────
    print("=" * 72)
    print("1. 표기 관례 이탈")
    print("=" * 72)
    for morph in MORPHEMES:
        by_stem, overall, types = build_convention(baseline, morph)
        if not overall:
            continue

        # 형태소 단위 다수파 — ② 로 내려갈 때만 쓴다
        (major, mcount), = overall.most_common(1)
        total = sum(overall.values())
        fallback_ok = (
            mcount >= a.min_support
            and mcount / total >= 0.7
            and len(types[major]) >= a.min_types      # 유형 다양성 요구
        )

        pat = seg_pattern(morph)
        for en, ko in new.items():
            for m in pat.finditer(ko):
                seg = m.group(0)
                stem, form = split_seg(seg, morph)
                if not stem:
                    continue

                # ① stem 별 관례 우선
                c = by_stem.get(stem)
                if c:
                    (smaj, sn), = c.most_common(1)
                    st = sum(c.values())
                    if sn >= a.stem_min and sn / st >= a.stem_threshold:
                        if form != smaj:
                            fixed = respace(seg, stem, morph, smaj)
                            deviations.append((morph, en, ko, seg, fixed,
                                               f'stem "{stem}" 관례 {smaj} ({sn}/{st})', False))
                            fixes[en] = ko.replace(seg, fixed)
                        continue          # stem 관례로 판정 완료 — 다수결로 내려가지 않는다
                    continue              # stem 자체가 갈림 — 판정 보류

                # ② stem 미관측 → 형태소 다수결 (유형 다양성 확보된 경우만)
                if fallback_ok and form != major:
                    fixed = respace(seg, stem, morph, major)
                    deviations.append((morph, en, ko, seg, fixed,
                                       f'stem 미관측 · 형태소 다수파 {major} '
                                       f'({mcount}/{total}, {len(types[major])}종)', True))
                    fixes[en] = ko.replace(seg, fixed)
                    tier2 += 1

    if deviations:
        for morph, en, ko, seg, fixed, why, guess in deviations:
            tag = "[추정] " if guess else ""
            print(f'  {tag}[{morph}] {why}')
            print(f'      {en[:56]}')
            print(f'      {ko}')
            print(f'      "{seg}" → "{fixed}"\n')
        if tier2:
            print(f"  ※ [추정] {tier2}건은 stem 관례가 없어 형태소 다수결로 판정했습니다. 사람이 확인하세요.")
            print("     기본값에서는 종료코드에 넣지 않습니다 — 굳은 말일 수 있어 CI 를 막으면 안 됩니다."
                  " (--strict 로 포함)\n")
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
    # _text 는 텍스트 노드 '완전일치' 치환이므로 부분 일치는 원리적으로 불가능하다.
    # ('New Lead' 단계명은 'Lead' 엔트리에 걸리지 않는다.)
    # 따라서 확인할 것은 "단계명·태그에 이 문자열이 단독으로 존재하는가" 하나뿐이다.
    # 주의: 아래는 로케이션 1곳 기준 판단이 아니라 목록 제시일 뿐이다.
    #       ALLOW 개방 시 서브계정 전수 스캔이 필요하다. (2026-08-23 벤자민 실측 기준)
    print("=" * 72)
    print("5. 짧은 키 — 사용자 데이터 치환 위험")
    print("=" * 72)
    shorts = sorted(k for k in new if len(k) <= 5)
    if shorts:
        print(f"  5자 이하 {len(shorts)}건: {shorts}")
        print("  → 완전일치라 부분 매칭 위험은 없습니다. 단계명·태그와 '정확히' 같은지만 확인하세요.")
    else:
        print("  없음")
    print()

    confirmed = len(deviations) - tier2
    total_issues = (len(deviations) if a.strict else confirmed) + hits + jc + bc
    print("=" * 72)
    print(f"합계: 표기이탈 {confirmed}(+추정 {tier2}) · 용어불일치 {hits} · 조사 {jc} · 브랜드 {bc}")
    print("=" * 72)

    if a.fix_out and fixes:
        json.dump(fixes, open(a.fix_out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print(f"\n표기 이탈 수정안 {len(fixes)}건 → {a.fix_out}")
        print("※ 자동 적용 금지. 사람이 검토한 뒤 머지하세요.")

    sys.exit(1 if total_issues else 0)


if __name__ == "__main__":
    main()
