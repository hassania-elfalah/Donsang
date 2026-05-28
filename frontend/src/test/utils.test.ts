import { describe, expect, it } from "vitest";

import { cn, slugify } from "../lib/utils";

describe("utility helpers", () => {
  it("slugifies text for URL-friendly labels", () => {
    expect(slugify("Blood Donation Center 2026!")).toBe("blood-donation-center-2026");
  });

  it("merges Tailwind classes without losing the base styles", () => {
    expect(cn("px-2", "text-sm")).toContain("px-2");
    expect(cn("px-2", "text-sm")).toContain("text-sm");
  });
});
