export async function onRequest() {
  return new Response('HELLO-FUNCTION-OK', { headers: { 'content-type': 'text/plain' } })
}
