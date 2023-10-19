import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn", () => {
  it("should join TailwindCSS classes", () => {
    const result = cn("text-center", "text-white");

    expect(result).toBe("text-center text-white");
  });

  it("should merge TailwindCSS classes", () => {
    const result = cn("text-zinc-900 p-4 mx-12", "text-white mx-2");

    expect(result).toBe("p-4 text-white mx-2");
  });

  it("should apply TailwindCSS classes conditionally", () => {
    const isActive = false;

    const result = cn("text-zinc-900", {
      "opacity-0": isActive,
    });

    expect(result).not.toContain("opacity-0");
    expect(result).toBe("text-zinc-900");
  });
});
