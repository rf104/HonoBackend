import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/JSON', (c) =>{
  return c.json({message : 'HelloHono'});
})

app.get('/html', (c) => {
  return c.html('<h1>Hello Aref</h1>');
})

app.get('raw', (c)=>{
  return new Response('Kire TV dekhis kno? Hae??', {
    headers: {contentType : 'text/plain'}
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
