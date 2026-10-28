// 테스트 전용 엔트리: fetch(request) 를 가짜 오리진으로, 포인터는 ORIGIN_TEST/pointer.json 으로 돌린다.
import { shouldInject, buildHead } from './index.js';
export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    const base = env.ORIGIN_TEST || 'http://127.0.0.1:18080';
    const [res, ptr] = await Promise.all([
      fetch(new Request(base + u.pathname + u.search, { method: request.method, headers: request.headers })),
      u.searchParams.has('noptr') ? null : fetch(base + '/pointer.json').then(r => r.json()).catch(() => null),
    ]);
    if (!shouldInject(request, res, env)) return res;
    return new HTMLRewriter().on('head', { element(el) { el.prepend(buildHead(env, ptr, u.pathname), { html: true }); } }).transform(res);
  },
};
