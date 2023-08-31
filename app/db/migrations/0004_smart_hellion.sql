ALTER TABLE "movies" ADD COLUMN "clerk_id" varchar(36);--> statement-breakpoint
ALTER TABLE "movies" DROP COLUMN IF EXISTS "user_id";