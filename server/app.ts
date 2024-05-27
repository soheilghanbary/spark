import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { expensesRoute } from './routes/expenses'
const app = new Hono()

app.use('*', logger())

app.get('/', (c) => c.text('Hono is 🔥!'))

app.route('/api/expenses', expensesRoute)

export default app