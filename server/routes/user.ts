import { Hono } from "hono";
import { db } from "../lib/db";

export const userRoute = new Hono()
.get('/', async  (c) => {
  const users = await db.user.findMany()
  return await c.json(users)
})