#!/usr/bin/env python3
"""
dashboard-ko.js 빌드

ghl-i18n-ko.json (새 번역) + 기존 dashboard-ko.js (수동 큐레이션) 머지
→ DOM 교체 사전만 포함한 dashboard-ko.js 생성
→ terser로 min.js 빌드

DOM 교체 사전: TreeWalker로 텍스트 노드 직접 번역
(Vue i18n 주입은 불필요 — DOM 교체만으로 충분)

사용법:
  python3 build-dashboard-ko.py
  python3 build-dashboard-ko.py --stats   # 통계만
"""

import json, os, re, subprocess, sys, argparse
from pathlib import Path

# ── 경로 ────────────────────────────────────────────────────────
import os as _os
VAULT      = Path(_os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
REPO       = Path(_os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
DATA       = VAULT / "data"
JS_SRC     = REPO / "js/dashboard-ko.js"
JS_MIN     = REPO / "js/dashboard-ko.min.js"
TERSER     = Path(_os.environ.get("TERSER_PATH", str(Path.home() / "node_modules/terser/bin/terser")))

# GitHub Actions: data/ 내 파일 우선 사용
_repo_ko = REPO / "data/ghl-i18n-ko.json"
_repo_manual = REPO / "data/manual-dict-v401.json"
EN_FILE    = DATA / "ghl-i18n-en.json"
KO_FILE    = _repo_ko if _repo_ko.exists() else DATA / "ghl-i18n-ko.json"

VERSION    = "5.0.0"   # DOM-only 빌드 (locale 주입 제거)

# ── 기존 dashboard-ko.js에서 딕셔너리 추출 ──────────────────────
def _sanitize_json_strings(raw: str) -> str:
    """Escape bare control characters inside JSON string values."""
    result = []
    in_string = False
    escaped = False
    for ch in raw:
        if escaped:
            result.append(ch)
            escaped = False
        elif ch == '\\':
            result.append(ch)
            escaped = True
        elif ch == '"':
            result.append(ch)
            in_string = not in_string
        elif in_string and ord(ch) < 0x20:
            if ch == '\n':   result.append('\\n')
            elif ch == '\r': result.append('\\r')
            elif ch == '\t': result.append('\\t')
            else:            result.append(f'\\u{ord(ch):04x}')
        else:
            result.append(ch)
    return ''.join(result)


def load_existing_dict() -> dict:
    if not JS_SRC.exists():
        return {}
    src = JS_SRC.read_text(encoding="utf-8")
    m = re.search(r'var t=(\{.*?\});', src, re.DOTALL)
    if not m:
        return {}
    raw = m.group(1)
    raw = re.sub(r'//[^\n]*', '', raw)
    raw = re.sub(r',\s*([}\]])', r'\1', raw)
    try:
        return json.loads(raw)
    except Exception:
        pass
    # fallback: sanitize bare control chars and retry
    try:
        return json.loads(_sanitize_json_strings(raw))
    except Exception as e:
        print(f"⚠️  기존 딕셔너리 파싱 실패: {e}")
        return {}

# ── flat → nested 변환 ────────────────────────────────────────────
def unflatten(flat: dict) -> dict:
    """{"common.save": "저장"} → {"common": {"save": "저장"}}"""
    result = {}
    for key, val in flat.items():
        parts = key.split(".")
        d = result
        for part in parts[:-1]:
            d = d.setdefault(part, {})
        d[parts[-1]] = val
    return result

# ── JS 딕셔너리 문자열 생성 ──────────────────────────────────────
def js_escape(s: str) -> str:
    return (s.replace("\\", "\\\\")
             .replace('"', '\\"')
             .replace("\n", "\\n")
             .replace("\r", "\\r")
             .replace("\t", "\\t"))

def dict_to_js(d: dict) -> str:
    pairs = []
    for k, v in sorted(d.items(), key=lambda x: x[0].lower()):
        pairs.append(f'"{js_escape(k)}":"{js_escape(v)}"')
    return "{" + ",\n  ".join(pairs) + "}"

# ── nested dict를 JS 객체 문자열로 ───────────────────────────────
def nested_to_js(obj, indent=0) -> str:
    pad = "  " * indent
    if isinstance(obj, str):
        return json.dumps(obj, ensure_ascii=False)
    if isinstance(obj, dict):
        if not obj:
            return "{}"
        lines = []
        for k, v in obj.items():
            ek = json.dumps(k, ensure_ascii=False)
            lines.append(f"{pad}  {ek}:{nested_to_js(v, indent+1)}")
        return "{\n" + ",\n".join(lines) + f"\n{pad}}}"
    return json.dumps(obj, ensure_ascii=False)

# ── 메인 ─────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--stats", action="store_true")
    args = parser.parse_args()

    # 데이터 로드
    existing = load_existing_dict()
    print(f"현재 JS 사전: {len(existing):,}개")
    # 황금 수동 번역 항상 포함 (우선순위 최상위)
    MANUAL_BACKUP = DATA / "manual-dict-v401.json"
    manual = {}
    if MANUAL_BACKUP.exists():
        manual = json.loads(MANUAL_BACKUP.read_text(encoding="utf-8"))
        print(f"수동 번역 백업: {len(manual):,}개")

    i18n_en = {}
    i18n_ko = {}

    if EN_FILE.exists() and KO_FILE.exists():
        i18n_en = json.loads(EN_FILE.read_text(encoding="utf-8"))
        i18n_ko = json.loads(KO_FILE.read_text(encoding="utf-8"))
        print(f"i18n EN: {len(i18n_en):,}개 / KO: {len(i18n_ko):,}개")
    else:
        missing = []
        if not EN_FILE.exists(): missing.append(str(EN_FILE))
        if not KO_FILE.exists(): missing.append(str(KO_FILE))
        print(f"⚠️  i18n 파일 없음: {', '.join(missing)}")
        print("   기존 수동 번역(544개)만으로 빌드합니다.")

    # DOM 교체 딕셔너리 구성
    # 우선순위: 기존 수동 번역 > i18n 번역
    dom_dict = {}

    # i18n 번역에서 영문값 → 한국어 매핑 추가
    for key in i18n_ko:
        en_val = i18n_en.get(key, "")
        ko_val = i18n_ko[key]
        if (en_val and ko_val
                and en_val != ko_val           # 미번역 제외
                and len(en_val) >= 2
                and len(en_val) <= 150
                and en_val not in dom_dict):   # 중복 시 첫 번째만
            dom_dict[en_val] = ko_val

    # 우선순위: 수동 백업 > 현재 JS 사전 > i18n 자동 번역
    dom_dict.update(existing)
    dom_dict.update(manual)

    print(f"DOM 교체 사전: {len(dom_dict):,}개")

    if args.stats:
        new_count = len(dom_dict) - len(existing)
        print(f"  기존: {len(existing):,}개 | 신규 추가: {new_count:,}개")
        return

    # ── dashboard-ko.js 생성 ─────────────────────────────────────
    dom_dict_js = dict_to_js(dom_dict)

    js_content = f"""// Hyperclass — GHL 대시보드 한글화
// Version: {VERSION}
// DOM translations: {len(dom_dict)}
// i18n keys: {len(i18n_ko)}
// Auto-built by build-dashboard-ko.py

(function(){{
var t={dom_dict_js};

// DOM 교체 (TreeWalker — 메인 + iframe 모두 커버)
function rDoc(doc){{
  var nodes=[];
  var walker=doc.createTreeWalker(doc.body,NodeFilter.SHOW_TEXT,null,false);
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(function(n){{
    var txt=n.textContent.trim();
    if(!txt||txt.length<2||txt.length>150)return;
    var key=txt.endsWith(' New')?txt.replace(/ New$/,'').trim():txt;
    if(t[key])n.textContent=n.textContent.replace(txt,t[key]);
  }});
  doc.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(function(el){{
    var ph=el.placeholder.trim();
    if(t[ph])el.placeholder=t[ph];
  }});
}}

function r(){{ rDoc(document); }}

function rIframe(){{
  document.querySelectorAll('iframe').forEach(function(f){{
    try{{
      var d=f.contentDocument||f.contentWindow.document;
      if(!d||!d.body)return;
      rDoc(d);
      if(!f._hcObs){{
        f._hcObs=new MutationObserver(function(){{
          clearTimeout(window._hcT2);
          window._hcT2=setTimeout(function(){{r();rIframe();}},300);
        }});
        f._hcObs.observe(d.body,{{childList:true,subtree:true}});
      }}
    }}catch(e){{}}
  }});
}}

function rBurst(){{
  [100,300,600,1000,1800].forEach(function(d){{
    setTimeout(function(){{r();rIframe();}},d);
  }});
}}

rBurst();

new MutationObserver(function(){{
  clearTimeout(window._hcT);
  window._hcT=setTimeout(rBurst,200);
}}).observe(document.body,{{childList:true,subtree:true}});

window.addEventListener('routeChangeEvent',function(){{
  clearTimeout(window._hcT);
  window._hcT=setTimeout(rBurst,400);
}});

document.addEventListener('click',function(e){{
  var tab=e.target.closest('.el-tabs__nav,.el-tabs__header,[class*="hl-tab"],[role="tablist"],[role="tab"]');
  if(tab){{clearTimeout(window._hcT);window._hcT=setTimeout(rBurst,200);}}
}});
}})();
"""

    JS_SRC.write_text(js_content, encoding="utf-8")
    print(f"✅ {JS_SRC} 저장 ({len(js_content):,} bytes)")

    # terser minify
    if not TERSER.exists():
        print(f"⚠️  terser 없음: {TERSER}")
        print("   min.js 생성 건너뜀. npm install terser 후 재실행하세요.")
        return

    result = subprocess.run(
        [str(TERSER), str(JS_SRC), "--compress", "--mangle", "--output", str(JS_MIN)],
        capture_output=True, text=True
    )
    if result.returncode == 0:
        print(f"✅ {JS_MIN} ({JS_MIN.stat().st_size:,} bytes)")
    else:
        print(f"❌ terser 실패:\n{result.stderr}")
        sys.exit(1)


if __name__ == "__main__":
    main()
