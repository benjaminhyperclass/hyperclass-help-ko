#!/usr/bin/env python3
"""번역 결과 후처리 — 게시 전에 결과 폴더의 docs/ 를 제자리에서 고친다.

1. 머리말 `원문:` 에서 도메인을 뺀다(브랜드 도메인 비노출, 추적용 경로·id 는 유지).
2. `<!-- 검토 필요: ... -->` 주석을 문서에서 빼서 검토 목록(JSON)으로 모은다.
3. HighLevel 채널 영상 링크(YouTube·Loom·Vimeo·Wistia·Vidyard)를 뺀다 — 화이트라벨 원칙.
4. 확정 용어집의 띄어쓰기·표기 변형을 화면 표기로 맞춘다(코드·URL 제외).
5. 기술 URL 의 대문자 브랜드 표기(LeadConnectorhq)를 소문자로.
6. 합니다체로 끝난 문장을 해요체로(단계 목록의 동작은 '~하세요').

사용: python3 scripts/manual/postprocess.py <결과 폴더> [--review out.json]
"""
import glob, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from register_fix import fix_register

VIDEO = re.compile(r"https?://(?:www\.)?(?:youtube\.com|youtu\.be|loom\.com|(?:player\.)?vimeo\.com|"
                   r"(?:fast\.)?wistia\.(?:net|com)|[a-z0-9-]+\.wistia\.com|(?:share|play)\.vidyard\.com|watchclueso\.com|jumpshare\.com|app\.supademo\.com|guidejar\.com|scribehow\.com|tella\.tv|screenpal\.com|app\.arcade\.software|speakwith\.us|storage\.googleapis\.com/msgsndr/\S+\.(?:mp4|mov|webm))[^\s)>]*", re.I)
MD_LINK = re.compile(r"!?\[([^\]]*)\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
COMMENT = re.compile(r"[ \t]*<!--\s*(검토 필요[^>]*?)-->[ \t]*\n?", re.S)
CODE = re.compile(r"```.*?```|`[^`\n]*`", re.S)
TERMS = [("작업 흐름", "워크플로우"), ("수신 거부", "수신거부"), ("달력", "캘린더"), ("대행사", "에이전시"),
         ("대화형 AI", "대화 AI"), ("송장", "인보이스"), ("어필리에이트", "제휴"), ("하위 계정", "서브 계정"),
         ("서브계정", "서브 계정"), ("왓츠앱", "WhatsApp"), ("페이스북", "Facebook"), ("워드프레스", "WordPress")]
VIDEO_LINE = re.compile(r"^\s*(?:[-*]\s*)?(?:📺|🎥|▶️)?\s*(?:\*\*)?(?:동영상|영상|비디오|튜토리얼 영상|영상 안내|영상으로 보기|Video)"
                        r"(?:\s*(?:보기|가이드|안내|튜토리얼))?(?:\*\*)?\s*[:：]?\s*$")

def protect(text, fn):
    """코드 영역은 그대로 두고 나머지에만 fn 을 적용한다."""
    out, last = [], 0
    for m in CODE.finditer(text):
        out.append(fn(text[last:m.start()])); out.append(m.group(0)); last = m.end()
    out.append(fn(text[last:]))
    return "".join(out)

AUTOLINK = re.compile(r"<(https?://[^>\s]+)>")
VIDEO_WORD = re.compile(r"영상|동영상|튜토리얼|비디오|Video|웨비나 녹화")

def strip_videos(seg):
    def rep(m):
        label = m.group(1).strip()
        if m.group(0).startswith("!") and not re.search(r"\.(?:mp4|mov|webm)(?:\?|$)", m.group(2), re.I):
            return m.group(0)   # 이미지는 지우지 않는다
        if VIDEO.match(m.group(2)) or re.fullmatch(r"(?:📺\s*)?(?:동영상|영상|비디오|데모)(?:\s*보기)?", label):
            return ""
        if re.match(r"https?://(?:help|support)\.(?:gohighlevel|leadconnectorhq)\.com|https?://(?:www\.)?gohighlevel\.com|https?://ideas\.gohighlevel", m.group(2)):
            return "" if m.group(0).startswith("!") else label   # 연결할 우리 문서가 없는 원문 링크 → 글자만
        return m.group(0)
    seg = AUTOLINK.sub(lambda m: "" if VIDEO.match(m.group(1)) else m.group(0), seg)
    seg = MD_LINK.sub(rep, seg)
    # 마크다운 링크·이미지 밖에 맨주소로 남은 영상 URL만 지운다
    parts, last = [], 0
    for m in MD_LINK.finditer(seg):
        parts.append(VIDEO.sub("", seg[last:m.start()])); parts.append(m.group(0)); last = m.end()
    parts.append(VIDEO.sub("", seg[last:]))
    seg = "".join(parts)
    lines = [l for l in seg.split("\n") if not VIDEO_LINE.match(l)]
    # 영상 소개 줄·제목 뒤에 남은 내용이 없으면 그 줄도 뺀다
    out = []
    for i, l in enumerate(lines):
        st = l.strip().strip("*#-: ")
        if st and len(st) <= 40 and VIDEO_WORD.search(st) and not re.search(r"[.。]$", st):
            rest = []
            for nl in lines[i + 1:]:
                if nl.strip() == "": continue
                rest.append(nl); break
            def is_cand(x):
                y = x.strip().strip("*#-: ")
                return bool(y) and len(y) <= 40 and VIDEO_WORD.search(y) and not re.search(r"[.。]$", y)
            if (not rest or rest[0].lstrip().startswith(("#", "{%", "---")) or is_cand(rest[0])
                    or re.match(r"^\s*[-*]\s*$", rest[0])):
                continue
        out.append(l)
    out = [l for l in out if not re.match(r"^\s*[-*]\s*$", l)]
    return "\n".join(out)

URLISH = re.compile(r"\([^)\s]*\)|https?://\S+|<[^>]+>")

def debrand(seg):
    """링크 주소는 건드리지 않고 보이는 글자의 브랜드만 바꾼다."""
    out, last = [], 0
    for m in URLISH.finditer(seg):
        out.append(re.sub(r"\b(?:GoHighLevel|HighLevel|High Level)\b", "하이퍼클래스", seg[last:m.start()]))
        out.append(m.group(0)); last = m.end()
    out.append(re.sub(r"\b(?:GoHighLevel|HighLevel|High Level)\b", "하이퍼클래스", seg[last:]))
    return "".join(out)

def fix_terms(seg):
    seg = debrand(seg)
    def apply(x):
        for a, b in TERMS:
            x = re.sub(rf"(?<![가-힣A-Za-z]){re.escape(a)}", b, x)
        return x
    out, last = [], 0
    for m in URLISH.finditer(seg):          # 링크 대상·주소는 그대로
        out.append(apply(seg[last:m.start()])); out.append(m.group(0)); last = m.end()
    out.append(apply(seg[last:]))
    return "".join(out)

PRICE = re.compile(r"\$\s?\d")
PRICE_CTX = re.compile(r"요금|플랜|가격|비용|과금|청구|구독료|월 \$|/월")
NOTICE_MARK = "하이퍼클래스에서 실제로 적용되는 요금"

def add_price_notice(path, t):
    if NOTICE_MARK in t: return t
    prose = CODE.sub(" ", t)
    if len(PRICE.findall(prose)) < 1 or not PRICE_CTX.search(prose): return t
    docs_root = path.split("/docs/")[0] + "/docs" if "/docs/" in path else "docs"
    rel = os.path.relpath(os.path.join(docs_root, "00-자주묻는질문"), os.path.dirname(path))
    hint = ("{% hint style=\"info\" %}\n문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. "
            f"하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내]({rel}/pricing-plans.md)와 "
            f"[AI·SMS·음성 사용료]({rel}/usage-costs.md)를 확인하세요.\n{{% endhint %}}\n")
    m = re.search(r"^# .*\n+(?:[^\n#{|!-].*\n)+", t, re.M)   # 제목 + 첫 문단 뒤
    if not m: return t
    return t[:m.end()] + "\n" + hint + t[m.end():]

BOLD = re.compile(r"\*\*([^*\n]+?)\*\*")
CLOSE_P = set(')"\'”’]」.,!?:;')
QUOTES = {'"': '"', "“": "”", "'": "'", "‘": "’", "「": "」"}

def fix_bold(seg):
    """CommonMark 에서 '**…)**을'처럼 닫는 ** 앞이 문장부호이고 뒤가 글자면 굵게가 안 먹는다 → 문장부호를 밖으로 뺀다."""
    def rep(m):
        inner = m.group(1); a = seg[m.start() - 1] if m.start() else " "; b = seg[m.end()] if m.end() < len(seg) else " "
        close_bad = inner[-1] in CLOSE_P and b.isalnum()
        open_bad = inner[0] in "(\"'“‘[「" and a.isalnum()
        if not (close_bad or open_bad): return m.group(0)
        if inner[0] in QUOTES and inner[-1] == QUOTES[inner[0]] and len(inner) > 2:
            return f"{inner[0]}**{inner[1:-1]}**{inner[-1]}"
        if inner.endswith(")") and "(" in inner[1:]:
            k = inner.rfind("(")
            head = inner[:k].rstrip()
            if head: return f"**{head}**{inner[k - (len(inner[:k]) - len(head)):]}"
        lead = re.match(r"^[(\"'“‘\[「]*", inner).group(0) if open_bad else ""
        trail = re.search(r"[)\"'”’\]」.,!?:;]*$", inner).group(0) if close_bad else ""
        core = inner[len(lead):len(inner) - len(trail)] if trail else inner[len(lead):]
        return f"{lead}**{core}**{trail}" if core.strip() else m.group(0)
    return BOLD.sub(rep, seg)

BLOCK_START = re.compile(r"^\s*(?:[-*+]\s|\d+[.)]\s|#|\||>|!\[|\{%|<)")

def split_labels(seg):
    """문단 바로 다음 줄에 붙은 짧은 소제목(예: '설정')을 별도 문단으로 뗀다."""
    L = seg.split("\n")
    out = []
    for i, l in enumerate(L):
        st = l.strip()
        prev = out[-1] if out else ""
        if (st and len(st) <= 15 and re.search(r"[가-힣A-Za-z]", st) and not re.search(r"[.。!?,:;)]$", st)
                and not BLOCK_START.match(l) and prev.strip() and not BLOCK_START.match(prev)
                and not l.startswith(" ")):
            out.append("")
        out.append(l)
    return "\n".join(out)

def process(path, notes):
    t = open(path, encoding="utf-8").read()
    o = t
    # 1) 머리말 원문 도메인 제거
    t = re.sub(r"^(원문:\s*)https?://help\.(?:gohighlevel|leadconnectorhq)\.com", r"\1", t, count=1, flags=re.M)
    # 2) 검토 주석 수집·제거
    for m in COMMENT.finditer(t):
        notes.append(re.sub(r"\s+", " ", m.group(1)).strip())
    t = COMMENT.sub("", t)
    # 3·4) 본문(코드 밖)만
    head, body = (t.split("\n---\n", 1) if t.startswith("---") and "\n---\n" in t[3:] else ("", t))
    body = protect(body, lambda s: fix_terms(strip_videos(s)))
    # 말투 변환은 코드 조각을 자리표시자로 가린 채 줄 전체를 본다(따옴표 안 코드가 따옴표를 끊지 않도록)
    keep = []
    def mask(m):
        keep.append(m.group(0)); return f"\x00{len(keep) - 1}\x00"
    masked = CODE.sub(mask, body)
    masked = fix_register(masked)
    body = re.sub(r"\x00(\d+)\x00", lambda m: keep[int(m.group(1))], masked)
    body = protect(body, split_labels)
    body = protect(body, fix_bold)
    body = re.sub(r"\n{3,}", "\n\n", body)
    t = (head + "\n---\n" + body) if head else body
    # 7) 달러 요금이 나오는 문서에는 하이퍼클래스 요금 안내로 가는 알림을 한 번 붙인다
    t = add_price_notice(path, t)
    # 5) 기술 URL 대문자 표기
    t = re.sub(r"LeadConnectorhq", "leadconnectorhq", t)
    if t != o:
        open(path, "w", encoding="utf-8").write(t)
        return True
    return False

def main():
    root = sys.argv[1]
    review = sys.argv[sys.argv.index("--review") + 1] if "--review" in sys.argv else None
    changed, allnotes = 0, {}
    for p in glob.glob(os.path.join(root, "docs", "**", "*.md"), recursive=True):
        notes = []
        if process(p, notes): changed += 1
        if notes: allnotes["docs/" + os.path.relpath(p, os.path.join(root, "docs"))] = notes
    print(f"postprocess: changed {changed} · review notes {sum(len(v) for v in allnotes.values())} in {len(allnotes)} files")
    if review:
        old = json.load(open(review, encoding="utf-8")) if os.path.exists(review) else {}
        old.update(allnotes)
        json.dump(dict(sorted(old.items())), open(review, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    main()
