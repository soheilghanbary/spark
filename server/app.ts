import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { cors } from "hono/cors"
import { logger } from 'hono/logger'
import { userRoute } from './routes/user'

const app = new Hono()

app.use('*', logger())
app.use("*", cors({
  origin: (origin) => origin,
  allowHeaders: ["Content-Type"],
  credentials: true,
}))

const apiRoutes = app.basePath('/api')
  .route('/users', userRoute)

app.get('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
export type ApiRoutes = typeof apiRoutes