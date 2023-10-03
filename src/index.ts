import { faker } from "@faker-js/faker";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text(faker.animal.dog()));

export default app;
