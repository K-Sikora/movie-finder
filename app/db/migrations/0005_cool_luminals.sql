DROP TABLE "users";--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "user_id" varchar(36);--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "movies" DROP COLUMN IF EXISTS "clerk_id";