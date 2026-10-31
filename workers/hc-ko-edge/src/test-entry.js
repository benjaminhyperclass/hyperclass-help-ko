// 테스트 전용 엔트리: 운영과 같은 handle() 을 쓰되, 오리진·포인터를 가짜 서버(ORIGIN_TEST)로 돌린다.
// x-test-host 헤더로 호스트를 흉내 낸다(links.hyperclass.ai 결제 앱 분기 시험).
import { handle, validPayPointer } from './index.js';
export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    const base = env.ORIGIN_TEST || 'http://127.0.0.1:18080';
    return handle(request, env, {
      host: request.headers.get('x-test-host') || u.hostname,
      fetchOrigin: (r) => fetch(new Request(base + u.pathname + u.search, { method: r.method, headers: r.headers, body: r.method === 'GET' || r.method === 'HEAD' ? undefined : r.body, redirect: 'manual' })),
      readAppPtr: () => (u.searchParams.has('noptr') ? null : fetch(base + '/pointer.json').then(r => r.json()).catch(() => null)),
      readPayPtr: () => (u.searchParams.has('noptr') ? null : fetch(base + (u.searchParams.has('payoff') ? '/pay-pointer-off.json' : u.searchParams.has('slowptr') ? '/pay-pointer-slow.json' : '/pay-pointer.json')).then(r => r.json()).then(validPayPointer).catch(() => null)),
    });
  },
};
