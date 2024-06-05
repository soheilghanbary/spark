import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js"
import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { cors } from "hono/cors"
import { logger } from 'hono/logger'
import { authConfig } from './lib/auth'
import { userRoute } from './routes/user'

const app = new Hono()

app.use('*', logger())
app.use("*", initAuthConfig(authConfig))
app.use("*", cors({
  origin: (origin) => origin,
  allowHeaders: ["Content-Type"],
  credentials: true,
}))

app.get('/api/hello', c => c.json({ env: [process.env.AUTH_URL] }))

app.use("/api/auth/*", authHandler())
app.use('/api/*', verifyAuth())

app.get('/api/protected', (c) => {
  const auth = c.get("authUser")
  return c.json(auth)
})

const apiRoutes = app.basePath('/api')
  .route('/users', userRoute)

app.get('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
export type ApiRoutes = typeof apiRoutes