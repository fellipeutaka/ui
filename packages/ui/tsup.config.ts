import { defineConfig } from "tsup";

const useClientRegex = /['"]use client['"]\s?;/i;

export default defineConfig({
  entry: ["src/**/*.tsx"],
  format: ["cjs", "esm"],
  minify: true,
  bundle: false,
  clean: true,
  dts: true,
  esbuildPlugins: [
    {
      name: "use-client",
      setup(build) {
        build.onEnd((result) => {
          result.outputFiles?.forEach((file) => {
            if (file.text.match(useClientRegex)) {
              Object.defineProperty(file, "text", {
                value:
                  '"use client";\n' + file.text.replace(useClientRegex, ""),
              });
            }
          });
        });
      },
    },
  ],
});
