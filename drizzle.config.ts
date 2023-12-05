import type { Config } from "drizzle-kit";

export default {
  // tell drizzle-kit where to look for your schema files
  schema: "./src/shared/schema/*.ts",
  // specify the migration output directory
  out: ".drizzle",
  driver: "better-sqlite",
} satisfies Config;
