import { LibSQLDatabase } from "drizzle-orm/libsql";
import { users } from "../../schema";
import {
  randEmail,
  randPastDate,
  randPhoneNumber,
  randUserName,
} from "@ngneat/falso";

export class UserRepository {
  constructor(private db: LibSQLDatabase) {}

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
