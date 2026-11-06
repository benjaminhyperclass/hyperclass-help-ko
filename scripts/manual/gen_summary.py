#!/usr/bin/env python3
"""GitBook SUMMARY.md 생성 (매뉴얼 v2).

- 섹션 이름은 한국어 화면 기준(브랜드·영어 병기 없음), 신규 고객 동선 순서(FAQ → 시작하기 → 한국 전용 앱 → 기능별).
- 섹션 안에서는 하위 폴더별로 묶고, 그 안에서 제목 가나다순. 폴더 README.md 는 섹션 맨 앞.
"""
import glob, os, re
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

SECTIONS = [
    ("00-자주묻는질문", "자주 묻는 질문"),
    ("01-시작하기", "시작하기"),
    ("43-한국-앱", "한국 전용 앱 (토스페이먼츠 · KAKA)"),
    ("02-연락처", "연락처"),
    ("03-대화", "대화"),
    ("04-캘린더-예약", "캘린더 · 예약"),
    ("05-기회-파이프라인", "기회 관리 · 파이프라인"),
    ("06-사이트", "사이트 (퍼널 · 웹사이트 · 폼)"),
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
    ("44-신기능-2026", "2026 신기능 소개"),
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
    ("19-에이전시-뷰", "에이전시 보기 (에이전시)"),
    ("28-에이전시-리포팅", "에이전시 리포팅 (에이전시)"),
    ("29-스냅샷", "스냅샷 (에이전시)"),
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

def title(p):
    for line in open(p, encoding="utf-8", errors="ignore"):
        if line.startswith("# "):
            return line[2:].strip().replace("[", "(").replace("]", ")")
    return os.path.splitext(os.path.basename(p))[0]

def main():
    out = ["# 하이퍼클래스 도움말", ""]
    if os.path.exists(f"{R}/README.md"):
        out += ["* [하이퍼클래스 도움말](README.md)", ""]
    seen = set()
    known = {d for d, _ in SECTIONS}
    extra = sorted(d for d in os.listdir(f"{R}/docs") if os.path.isdir(f"{R}/docs/{d}") and d not in known)
    for d, name in SECTIONS + [(d, d) for d in extra]:
        files = [p for p in glob.glob(f"{R}/docs/{d}/**/*.md", recursive=True) if os.path.getsize(p) > 0]
        if not files: continue
        def key(p):
            rel = os.path.relpath(p, f"{R}/docs/{d}")
            sub = os.path.dirname(rel)
            return (0 if rel == "README.md" else 1, sub, title(p))
        out += [f"## {name}", ""]
        for p in sorted(files, key=key):
            rel = os.path.relpath(p, R)
            seen.add(rel)
            out.append(f"* [{title(p)}]({rel.replace(' ', '%20')})")
        out.append("")
    open(f"{R}/SUMMARY.md", "w", encoding="utf-8").write("\n".join(out))
    print("pages", len(seen))

if __name__ == "__main__":
    main()
