import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  bundle: true,
  clean: true,
  dts: true,
});
