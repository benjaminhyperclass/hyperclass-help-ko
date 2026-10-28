// 테스트 전용 엔트리: fetch(request) 를 가짜 오리진으로 돌린다. 배포 엔트리(index.js)와 로직은 같다.
import worker, { shouldInject, buildHead } from './index.js';
export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    const target = (env.ORIGIN_TEST || 'http://127.0.0.1:18080') + u.pathname + u.search;
    const res = await fetch(new Request(target, { method: request.method, headers: request.headers }));
    if (!shouldInject(request, res, env)) return res;
    return new HTMLRewriter().on('head', { element(el) { el.prepend(buildHead(env), { html: true }); } }).transform(res);
  },
};
