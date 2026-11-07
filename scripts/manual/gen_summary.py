#!/usr/bin/env python3
"""GitBook SUMMARY.md 생성 (매뉴얼 v2).

- 섹션 이름은 한국어 화면 기준(브랜드·영어 병기 없음), 신규 고객 동선 순서(FAQ → 시작하기 → 한국 전용 앱 → 기능별).
- 섹션 안에서는 하위 폴더별로 묶고, 그 안에서 제목 가나다순. 폴더 README.md 는 섹션 맨 앞.
"""
import glob, os, re
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

SECTIONS = [
    ("00-자주묻는질문", "자주 묻는 질문 (FAQ)"),
    ("01-시작하기", "시작하기"),
    ("43-한국-앱", "한국 전용 앱 (Korea Apps) — 토스페이먼츠 · 카카오톡"),
    ("02-연락처", "연락처"),
    ("03-대화", "대화"),
    ("04-캘린더-예약", "캘린더 · 예약"),
    ("05-기회-파이프라인", "기회 관리 · 파이프라인"),
    ("06-사이트", "사이트 · 퍼널 · 폼"),
    ("07-워크플로우", "자동화 · 워크플로우"),
    ("08-결제", "결제"),
    ("09-이메일", "이메일"),
    ("10-마케팅", "마케팅"),
    ("41-평판-리뷰", "평판 관리 · 리뷰"),
    ("17-멤버십-커뮤니티", "멤버십 · 커뮤니티"),
    ("39-클라이언트-포털", "클라이언트 포털"),
    ("37-이커머스-스토어", "온라인 스토어"),
    ("14-문서-계약", "문서 · 계약"),
    ("15-전화-시스템", "전화 시스템"),
    ("13-AI-Employee", "AI 직원"),
    ("22-Eliza", "Eliza 에이전트"),
    ("44-신기능-2026", "2026 신기능 (What's New 2026)"),
    ("12-대시보드", "대시보드"),
    ("18-리포팅", "리포팅"),
    ("11-설정", "설정"),
    ("40-병합필드-변수", "병합 필드 · 변수"),
    ("42-통합", "연동"),
    ("27-앱-마켓", "앱 마켓플레이스"),
    ("30-모바일-데스크톱", "모바일 · 데스크톱 앱"),
    ("32-알림", "알림"),
    ("33-컴플라이언스", "규정 준수"),
    ("34-국제화", "다국어 · 국제화"),
    ("38-인증서", "수료증"),
    ("16-SaaS-설정", "SaaS 설정 (에이전시)"),
    ("19-에이전시-뷰", "에이전시 보기"),
    ("28-에이전시-리포팅", "에이전시 리포팅"),
    ("29-스냅샷", "스냅샷 · 에이전시 (Snapshots)"),
    ("31-리셀링", "리셀링 (에이전시)"),
    ("21-어필리에이트", "제휴 프로그램"),
    ("25-애드온-세일즈", "애드온 · 세일즈"),
    ("26-산업-가이드", "업종별 가이드"),
    ("24-대학", "하이퍼클래스 아카데미"),
    ("23-레거시-자동화", "레거시 자동화"),
    ("20-고객지원", "고객지원"),
    ("35-개발자", "개발자 리소스"),
    ("36-기타", "기타"),
]

import json as _json, sys as _sys
_sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gitbook_urls import slug as _slug
_OLD = _json.load(open(os.path.join(R, "data/manual/old-section-headings.json"), encoding="utf-8"))

def heading(folder, display):
    """GitBook 주소(묶음 slug)가 예전과 같도록 제목을 고른다. 한글 부분은 바꿔도 되고 영문 부분이 주소를 정한다."""
    base = re.sub(r"\s*\((에이전시)\)$", r" · \1", display)
    if "(" in base or folder not in _OLD or _OLD[folder].startswith(("00-", "43-")):
        return base
    old = _OLD[folder]
    m = re.search(r"\(([^)]*)\)\s*$", old)
    eng = m.group(1) if m else ""
    cands = [f"{base} ({eng})" if eng else base, f"{base.replace(' · ', ' & ')} ({eng})" if eng else base,
             old.replace("하이레벨", "하이퍼클래스")]
    for c in cands:
        if _slug(c) == _slug(old):
            return c
    return old.replace("하이레벨", "하이퍼클래스")

def title(p):
    for line in open(p, encoding="utf-8", errors="ignore"):
        if line.startswith("# "):
            return line[2:].strip().replace("[", "(").replace("]", ")")
    return os.path.splitext(os.path.basename(p))[0]

ORDER_43 = ["README.md", "tosspayments-getting-started.md", "part0-website-check.md", "part1-preparation.md",
            "part2-application.md", "part3-app-connection.md", "part4-products-test.md", "part5-payment-path-docs.md",
            "part6-review-response.md", "tosspayments-installation.md", "faq-popup-blocker.md", "faq-cancel-refund.md",
            "appendix.md", "kaka/README.md"]

def entry(p, indent=""):
    rel = os.path.relpath(p, R)
    return f"{indent}* [{title(p)}]({rel.replace(' ', '%20')})"

def emit_dir(d, base, indent=""):
    """폴더 안 문서를 쓴다. 하위 폴더에 README.md 가 있으면 그 아래로 들여 쓴다(가이드 묶음)."""
    lines, seen = [], set()
    files = [f for f in os.listdir(d) if f.endswith(".md") and os.path.getsize(os.path.join(d, f)) > 0]
    subdirs = sorted(x for x in os.listdir(d) if os.path.isdir(os.path.join(d, x)))
    def k(f):
        return (0 if f == "README.md" else 1, f if re.match(r"^(\d|part\d)", f) else title(os.path.join(d, f)))
    if os.path.relpath(d, R) == "docs/43-한국-앱":
        k = lambda f: (ORDER_43.index(f) if f in ORDER_43 else 99, title(os.path.join(d, f)))
    flat = []
    for sd in subdirs:
        full = os.path.join(d, sd)
        if os.path.exists(os.path.join(full, "README.md")):
            continue
        for p in glob.glob(f"{full}/**/*.md", recursive=True):
            if os.path.getsize(p) > 0: flat.append(p)
    for f in sorted(files, key=k):
        lines.append(entry(os.path.join(d, f), indent)); seen.add(os.path.join(d, f))
        if os.path.relpath(d, R) == "docs/43-한국-앱" and f == "appendix.md":
            pass
    for p in sorted(flat, key=lambda p: (os.path.relpath(os.path.dirname(p), d), title(p))):
        lines.append(entry(p, indent)); seen.add(p)
    for sd in subdirs:
        full = os.path.join(d, sd)
        if os.path.exists(os.path.join(full, "README.md")):
            sub, sub_seen = emit_dir_group(full, indent)
            lines += sub; seen |= sub_seen
    return lines, seen

def emit_dir_group(full, indent):
    lines = [entry(os.path.join(full, "README.md"), indent)]
    seen = {os.path.join(full, "README.md")}
    children = [f for f in os.listdir(full) if f.endswith(".md") and f != "README.md" and os.path.getsize(os.path.join(full, f)) > 0]
    for f in sorted(children, key=lambda f: f if re.match(r"^\d", f) else title(os.path.join(full, f))):
        lines.append(entry(os.path.join(full, f), indent + "  ")); seen.add(os.path.join(full, f))
    for p in glob.glob(f"{full}/*/**/*.md", recursive=True):
        if p not in seen and os.path.getsize(p) > 0:
            lines.append(entry(p, indent + "  ")); seen.add(p)
    return lines, seen

def main():
    out = ["# 하이퍼클래스 도움말", ""]
    if os.path.exists(f"{R}/README.md"):
        out += ["* [하이퍼클래스 도움말](README.md)", ""]
    known = {d for d, _ in SECTIONS}
    extra = sorted(d for d in os.listdir(f"{R}/docs") if os.path.isdir(f"{R}/docs/{d}") and d not in known)
    total = 0
    for d, name in SECTIONS + [(d, d) for d in extra]:
        full = f"{R}/docs/{d}"
        if not os.path.isdir(full): continue
        lines, seen = emit_dir(full, full)
        if not lines: continue
        out += [f"## {heading(d, name)}", ""] + lines + [""]
        total += len(seen)
    open(f"{R}/SUMMARY.md", "w", encoding="utf-8").write("\n".join(out))
    print("pages", total)

if __name__ == "__main__":
    main()
