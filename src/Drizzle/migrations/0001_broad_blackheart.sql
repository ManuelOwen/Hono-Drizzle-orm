DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('admin', 'user', 'both');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "department" (
	"id" serial PRIMARY KEY NOT NULL,
	" hospital_id" integer NOT NULL,
	"department_name" varchar(255) NOT NULL,
	"specification" varchar(255) NOT NULL,
	"doctor_id" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "doctor" (
	"id" serial PRIMARY KEY NOT NULL,
	"doctor_name" varchar(255) NOT NULL,
	"department_id" integer NOT NULL,
	" hospital_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hospital" (
	"id" serial PRIMARY KEY NOT NULL,
	"hospital_name" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" "role" DEFAULT 'user',
	"contact_phone" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "BookTable";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "department" ADD CONSTRAINT "department_ hospital_id_hospital_id_fk" FOREIGN KEY (" hospital_id") REFERENCES "public"."hospital"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "doctor" ADD CONSTRAINT "doctor_department_id_department_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."department"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "doctor" ADD CONSTRAINT "doctor_ hospital_id_hospital_id_fk" FOREIGN KEY (" hospital_id") REFERENCES "public"."hospital"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
