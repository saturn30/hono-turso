import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { UserRepository } from "./repository/userRepository";

export const getDB = (env: Bindings) => {
  const client = createClient({
    url: env.TURSO_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  });
  const db = drizzle(client);

  return {
    user: new UserRepository(db),
  };
};
