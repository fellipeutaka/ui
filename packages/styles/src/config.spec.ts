import type { Config } from "tailwindcss";
import { describe, expect, it } from "vitest";

import { defaultTailwindConfig, defineTailwindConfig } from "./config";

describe("defineTailwindConfig", () => {
  it("should merge the provided config with the default config", () => {
    const providedConfig = {
      content: ["./src/**/*.{astro,tsx}"],
      theme: {
        extend: {
          backgroundImage: {
            "hero-pattern": "url('/img/hero-pattern.svg')",
          },
        },
      },
    } satisfies Config;

    const result = defineTailwindConfig(providedConfig);

    expect(result.content).toStrictEqual([
      ...providedConfig.content,
      ...defaultTailwindConfig.content,
    ]);

    expect(result.theme).toMatchObject(defaultTailwindConfig.theme);
  });
});
