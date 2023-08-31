import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  decimal,
  integer,
} from "drizzle-orm/pg-core";

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 64 }),
  title: varchar("title", { length: 256 }),
  posterUrl: text("poster_url"),
  imdbUrl: text("imdb_url"),
  tmdbId: integer("tmdb_id"),
  rating: decimal("rating", { precision: 3, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Movies = typeof movies.$inferSelect;
