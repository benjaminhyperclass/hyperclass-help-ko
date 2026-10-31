
  (function () {
    const KO = {
      'Chat with an Agent': '채팅으로 문의하기',
      'Chat via SMS/Email': '문자·이메일로 문의하기',
      'Chat via Live Chat': '실시간 채팅으로 문의하기',
      'Chat with Instagram': '인스타그램으로 문의하기'
    };

    function replaceDeep(root) {
      // 이 층의 텍스트 노드 치환
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const t = node.textContent.trim();
        if (KO[t]) node.textContent = node.textContent.replace(t, KO[t]);
      }
      // 중첩 shadowRoot로 재귀 진입
      root.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) {
          replaceDeep(el.shadowRoot);
          observeRoot(el.shadowRoot);
        }
      });
    }

    const observed = new WeakSet();
    function observeRoot(root) {
      if (observed.has(root)) return;
      observed.add(root);
      new MutationObserver(() => replaceDeep(root))
        .observe(root, { childList: 참, subtree: 참, characterData: 참 });
    }

    function init() {
      const widget = document.querySelector('chat-widget');
      if (!widget || !widget.shadowRoot) return 거짓;
      replaceDeep(widget.shadowRoot);
      observeRoot(widget.shadowRoot);
      return 참;
    }

    const timer = setInterval(() => { if (init()) clearInterval(timer); }, 500);
    setTimeout(() => clearInterval(timer), 20000);
  })();
