export async function onRequest(context) {
  const url = new URL(context.request.url)
  const target = 'https://syq-fans-backend-production.up.railway.app' + url.pathname + url.search
  const headers = {}
  const token = context.request.headers.get('token')
  if (token) headers['token'] = token
  const init = {
    method: context.request.method,
    headers: headers,
    body: ['GET', 'HEAD'].includes(context.request.method) ? undefined : context.request.body
  }
  return fetch(target, init)
}
