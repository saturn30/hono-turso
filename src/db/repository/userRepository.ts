import { LibSQLDatabase } from "drizzle-orm/libsql";
import { users } from "../../schema";
import {
  randEmail,
  randPastDate,
  randPhoneNumber,
  randUserName,
} from "@ngneat/falso";
import { DrizzleD1Database } from "drizzle-orm/d1";

export class UserRepository {
  constructor(private db: LibSQLDatabase | DrizzleD1Database) {}

  getAll = () => {
    return this.db.select().from(users);
  };

  create = () => {
    return this.db.insert(users).values({
      name: randUserName(),
      email: randEmail(),
      phone: randPhoneNumber(),
      created_at: randPastDate(),
    });
  };
}
