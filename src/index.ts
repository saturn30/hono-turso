import { Hono } from "hono";
import { getD1DB, getTursoDB } from "./db/getDB";
import { randAnimal } from "@ngneat/falso";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/users/create", async (c) => {
  await getTursoDB(c.env).user.create();
  return c.text("done");
});

app.get("/users", async (c) => {
  const start = Date.now();
  const result = await getTursoDB(c.env).user.getAll();
  return c.json({ time: Date.now() - start, result });
});

app.get("/d1/users/create", async (c) => {
  await getD1DB(c.env).user.create();
  return c.text("done");
});

app.get("/d1/users", async (c) => {
  const start = Date.now();
  const result = await getD1DB(c.env).user.getAll();
  return c.json({
    time: Date.now() - start,
    result,
  });
});

app.get("/", (c) => c.text(randAnimal()));

export default app;
