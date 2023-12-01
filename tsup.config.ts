import { Options, defineConfig } from "tsup";

export default defineConfig((options): Options => {
  return {
    minify: true,
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
  };
});
