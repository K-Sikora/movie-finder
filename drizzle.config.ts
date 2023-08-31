import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();
export default {
  driver: "pg",
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  },
} satisfies Config;
