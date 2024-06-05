import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('User', {
  id: text('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phone: varchar('phone', { length: 256 }).notNull(),
});