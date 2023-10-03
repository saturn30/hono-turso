import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name"),
    phone: text("phone"),
    email: text("email").unique(),
    created_at: integer("created_at", { mode: "timestamp" }),
  },
  (table) => ({ emailIdx: uniqueIndex("email_idx").on(table.email) })
);
