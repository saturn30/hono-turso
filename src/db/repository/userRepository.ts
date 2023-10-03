import { LibSQLDatabase } from "drizzle-orm/libsql";
import { users } from "../../schema";
import { faker } from "@faker-js/faker";

export class UserRepository {
  constructor(private db: LibSQLDatabase) {}

  getAll = () => {
    return this.db.select().from(users);
  };

  create = () => {
    return this.db.insert(users).values({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      created_at: faker.date.anytime(),
    });
  };
}
