import { drizzle } from "drizzle-orm/postgres-js";
import dotenv from "dotenv";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { movies } from "./schema";
dotenv.config();

const migrationConnection = postgres(
  process.env.DATABASE_URL + "?sslmode=require",
  { max: 1 }
);
const queryConnection = postgres(process.env.DATABASE_URL + "?sslmode=require");

const db = drizzle(queryConnection);

const main = async () => {
  await migrate(drizzle(migrationConnection), {
    migrationsFolder: "migrations",
  });
  await migrationConnection.end();

  // await db.insert(user).values([{ name: 'alef' }, { name: 'bolk' }]);
  console.log(await db.select().from(movies));
  process.exit(0);
};

main();
