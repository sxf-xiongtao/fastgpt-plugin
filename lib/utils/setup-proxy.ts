import { setGlobalDispatcher, EnvHttpProxyAgent } from 'undici';
import { env } from '@/env';

export function configureProxy() {
  // fetch(undici)自带 headersTimeout/bodyTimeout,默认 300s。这里不跟着 SERVICE_REQUEST_TIMEOUT 走,
  // 请求侧即使把 SERVICE_REQUEST_TIMEOUT 调大,也会在 300s 被 undici 提前掐断。
  const requestTimeout = env.SERVICE_REQUEST_TIMEOUT * 1000;
  const agent = new EnvHttpProxyAgent({
    headersTimeout: requestTimeout,
    bodyTimeout: requestTimeout
  });
  setGlobalDispatcher(agent);

  console.info('✓ HTTP_PROXY: %s', env.HTTP_PROXY);
  console.info('✓ HTTPS_PROXY: %s', env.HTTPS_PROXY);
  console.info('✓ NO_PROXY: %s', env.NO_PROXY);
  console.info('✓ ALL_PROXY: %s', env.ALL_PROXY);
}
