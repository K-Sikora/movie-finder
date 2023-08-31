ALTER TABLE "users" RENAME TO "movies";--> statement-breakpoint
ALTER TABLE "movies" RENAME COLUMN "name" TO "user_id";--> statement-breakpoint
ALTER TABLE "movies" ALTER COLUMN "user_id" SET DATA TYPE varchar(36);--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "title" varchar(256);--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "poster_url" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "imdb_url" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "rating" numeric(3, 1);--> statement-breakpoint
ALTER TABLE "movies" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "movies" DROP COLUMN IF EXISTS "updated_at";