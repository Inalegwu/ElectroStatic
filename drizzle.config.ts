import type { Config } from "drizzle-kit";

export default {
  // tell drizzle-kit where to look for your schema files
  // defaults to shared/schema/*.ts ,
  // you might have shared/schema/*.schema.ts for code readability
  // purposes
  schema: "./src/shared/schema/*.ts",
  // specify the migration output directory
  out: ".drizzle",
  driver: "better-sqlite",
} satisfies Config;
