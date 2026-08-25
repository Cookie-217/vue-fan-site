export async function onRequest(context) {
  const url = new URL(context.request.url)
  const target = 'https://syq-fans-backend-production.up.railway.app' + url.pathname + url.search
  const headers = new Headers(context.request.headers)
  headers.delete('host')
  headers.delete('content-length')
  headers.delete('connection')
  const init = {
    method: context.request.method,
    headers: headers,
    body: ['GET', 'HEAD'].includes(context.request.method) ? undefined : context.request.body
  }
  return fetch(target, init)
}
