import { drizzle } from "drizzle-orm/libsql";
import { drizzle as d1Drizzle } from "drizzle-orm/d1";
import { createClient } from "@libsql/client";
import { UserRepository } from "./repository/userRepository";

export const getTursoDB = (env: Bindings) => {
  const client = createClient({
    url: env.TURSO_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  });
  const db = drizzle(client);

  return {
    user: new UserRepository(db),
  };
};

export const getD1DB = (env: Bindings) => {
  const db = d1Drizzle(env.DB);

  return {
    user: new UserRepository(db),
  };
};
