#!/usr/bin/env python3
"""합니다체 → 해요체 변환(매뉴얼 말투 통일).

- 목록(번호·글머리) 줄에서 사용자가 하는 동작(목적어 조사가 있는 줄의 동작 동사)은 '~하세요'로.
- 그 밖의 문장은 '~해요/돼요/있어요/이에요' 같은 해요체로.
- 모르는 동사는 건드리지 않는다(안전 우선). 인용(>)·코드는 호출하는 쪽에서 제외한다.
"""
import re

def has_batchim(ch):
    o = ord(ch) - 0xAC00
    return 0 <= o < 11172 and o % 28 != 0

def drop_b(ch):
    """'엽' → '여' (받침 ㅂ 제거)."""
    o = ord(ch) - 0xAC00
    return chr(ord(ch) - 17) if 0 <= o < 11172 and o % 28 == 17 else None

DECL = {  # ㅂ니다/습니다 동사 → 해요체
    "엽니다": "열어요", "켭니다": "켜요", "찾습니다": "찾아요", "고릅니다": "골라요", "누릅니다": "눌러요",
    "만듭니다": "만들어요", "넣습니다": "넣어요", "둡니다": "둬요", "바꿉니다": "바꿔요", "마칩니다": "마쳐요",
    "봅니다": "봐요", "씁니다": "써요", "받습니다": "받아요", "보냅니다": "보내요", "닫습니다": "닫아요",
    "끕니다": "꺼요", "옮깁니다": "옮겨요", "줍니다": "줘요", "납니다": "나요", "갑니다": "가요", "옵니다": "와요",
    "생깁니다": "생겨요", "걸립니다": "걸려요", "나타납니다": "나타나요", "바랍니다": "바라요", "붙입니다": "붙여요",
    "붙여넣습니다": "붙여넣어요", "남깁니다": "남겨요", "늘립니다": "늘려요", "줄입니다": "줄여요", "씁니다": "써요",
    "읽습니다": "읽어요", "끝납니다": "끝나요", "기다립니다": "기다려요", "알립니다": "알려요", "드립니다": "드려요",
    "엽니다.": "열어요.", "돌아갑니다": "돌아가요", "들어갑니다": "들어가요", "나갑니다": "나가요", "지웁니다": "지워요",
    "채웁니다": "채워요", "배웁니다": "배워요", "띄웁니다": "띄워요", "보입니다": "보여요", "쌓입니다": "쌓여요",
    "올립니다": "올려요", "내립니다": "내려요", "누릅니다.": "눌러요.",
}
IMPER_IRREG = {"엽니다": "여세요", "만듭니다": "만드세요", "씁니다": "쓰세요", "끕니다": "끄세요"}
ACTION = re.compile(r"클릭|선택|입력|이동|확인|저장|추가|설정|작성|적용|복사|붙여넣|업로드|다운로드|삭제|연결|검토|시작|"
                    r"완료|사용|편집|활성화|비활성화|게시|보내|닫|끄|열|켜|찾|고르|누르|만들|넣|두|바꾸|마치|지정|변경|"
                    r"생성|등록|체크|해제|드래그|입력|선택|탭|스크롤|검색|새로고침|붙이|지우|채우|올리|내리|읽|기다리|토글")
ACTION_B = ("엽", "켭", "만듭", "고릅", "누릅", "둡", "바꿉", "마칩", "끕", "씁", "봅", "옮깁", "붙입", "지웁", "채웁",
            "올립", "내립", "찾습", "넣습", "닫습", "받습", "붙여넣습", "보냅", "남깁", "읽습")
OBJ = re.compile(r"[을를]\s|에서\s|(?:으)?로\s|에\s|\*\*\s")
WORD = re.compile(r"([가-힣]+)니다(?=[.)!,]|\s|$)")
LIST = re.compile(r"^\s*(?:\d+[.)]|[-*+])\s")

def decl(w):
    full = w + "니다"
    if full in DECL: return DECL[full]
    if w.endswith("합"): return w[:-1] + "해요"
    if w.endswith("됩"): return w[:-1] + "돼요"
    if w.endswith("있습"): return w[:-2] + "있어요"
    if w.endswith("없습"): return w[:-2] + "없어요"
    if w.endswith("않습"): return w[:-2] + "않아요"
    if w.endswith("입") and len(w) >= 2:
        stem = w[:-1]
        return stem + ("이에요" if has_batchim(stem[-1]) else "예요")
    if w.endswith("겠습"): return w[:-2] + "겠어요"
    if w.endswith("였습"): return w[:-2] + "였어요"
    if w.endswith("했습"): return w[:-2] + "했어요"
    if w.endswith("았습") or w.endswith("었습"): return w[:-1] + "어요"
    return None

def imper(w):
    full = w + "니다"
    if full in IMPER_IRREG: return IMPER_IRREG[full]
    if w.endswith("합"): return w[:-1] + "하세요"
    if w.endswith("습") and len(w) >= 2 and has_batchim(w[-2]):
        return w[:-1] + "으세요"
    b = drop_b(w[-1])
    if b: return w[:-1] + b + "세요"
    return None

PROTECT = re.compile(r"\"[^\"\n]*\"|“[^”\n]*”|‘[^’\n]*’|'[^'\n]{2,}'|「[^」\n]*」|예:[^)\n]*|예시:[^)\n]*|e\.g\.[^)\n]*")

def fix_line(line):
    # 따옴표·예시 안은 원래 문구(화면 메시지·샘플 문장)이므로 바꾸지 않는다
    spans = [(m.start(), m.end()) for m in PROTECT.finditer(line)]
    if spans:
        out, last = [], 0
        for a, b in spans:
            out.append(_fix(line[last:a], line)); out.append(line[a:b]); last = b
        out.append(_fix(line[last:], line))
        return "".join(out)
    return _fix(line, line)

def _fix(seg, line):
    return _fix_core(seg, line)

def _fix_core(line, whole):
    if "니다" not in line or whole.lstrip().startswith(">"): return line
    is_list = bool(LIST.match(whole))
    def rep(m):
        w = m.group(1)
        if w.endswith(("있습", "없습", "않습", "됩", "입", "겠습", "였습", "했습", "았습", "었습")):
            r = decl(w)
        elif is_list and (ACTION.search(w) or w.endswith(ACTION_B)) and OBJ.search(whole + " "):
            r = imper(w)
        else:
            r = decl(w)
        return r if r else m.group(0)
    return WORD.sub(rep, line)

def fix_register(text):
    return "\n".join(fix_line(l) for l in text.split("\n"))

if __name__ == "__main__":
    tests = ["1. **설정** 메뉴를 엽니다.", "2. **저장**을 클릭합니다.", "- 원하는 캘린더를 찾습니다.", "3. 토글을 켭니다.",
             "시스템이 자동으로 저장합니다.", "이 기능은 베타입니다.", "도구입니다.", "설정이 완료됩니다.", "변경할 수 있습니다.",
             "- 연락처가 자동으로 생성됩니다.", "4. 새 폴더를 만듭니다.", "- 결과를 확인합니다.", "| 표시합니다 |", "> 인용입니다.", "헤드라인(예: OO에 오신 것을 환영합니다)", '메시지를 입력하세요. 예: "준비되었습니다."', '버튼에 "저장합니다"가 보입니다.']
    for t in tests: print(t, "→", fix_line(t))
