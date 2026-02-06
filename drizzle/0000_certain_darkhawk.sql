CREATE TABLE "task" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"age" integer,
	"priority" integer DEFAULT 1 NOT NULL
);
