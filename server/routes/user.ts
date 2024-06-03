import { Hono } from "hono";
import { db } from "../db";

export const userRoute = new Hono()
.get('/', async  (c) => {
  const users = await db.query.users.findMany()
  return c.json(users)
})