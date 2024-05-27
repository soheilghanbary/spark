import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const expenseSchema = z.object({
  id: z.number().positive().min(1),
  title: z.string().min(3).max(100),
  amount: z.number().int().positive()
})

type Expense = z.infer<typeof expenseSchema>

const createPostSchema = expenseSchema.omit({ id: true })

const fakeExpenses: Expense[] = [
  { id: 1, title: 'Buy Yoast AI', amount: 49 },
  { id: 2, title: 'Buy GPT4', amount: 20 },
  { id: 3, title: 'Buy Copilot', amount: 120 },
]

export const expensesRoute = new Hono()
  .get('/', c => {
    return c.json({ expenses: fakeExpenses })
  })
  .get('/:id', async (c) => {
    const id = Number(c.req.param('id'))
    const expense = fakeExpenses.find(e => e.id === id)
    if (!expense) {
      return c.notFound()
    }
    c.status(201)
    return c.json({ expense })
  })
  .post('/', zValidator('json', createPostSchema), async c => {
    const expense = await c.req.valid('json')
    fakeExpenses.push({ ...expense, id: fakeExpenses.length+1 })
    return c.json(expense)
  })