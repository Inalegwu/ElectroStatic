import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/shared/schema.ts",
  dialect: "postgresql",
});
