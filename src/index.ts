import { Hono } from "hono";
import { getDB } from "./db/getDB";
import { randAnimal } from "@ngneat/falso";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/users/create", async (c) => {
  await getDB(c.env).user.create();
  return c.text("done");
});

app.get("/users", async (c) => {
  return c.json(await getDB(c.env).user.getAll());
});

app.get("/", (c) => c.text(randAnimal()));

export default app;
