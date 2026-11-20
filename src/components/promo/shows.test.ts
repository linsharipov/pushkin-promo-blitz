import { describe, expect, it } from "vitest";
import { shows, upcomingShows } from "./shows";

describe("Black Friday shows", () => {
  it("has 10 performances, all 30% off", () => {
    expect(shows).toHaveLength(10);
    expect(shows.every((s) => s.discount === 30)).toBe(true);
  });
  it("hides the 12 Dec matinee at 12:00 MSK", () => {
    const before = upcomingShows(shows, Date.parse("2026-12-12T08:59:00Z"));
    const after = upcomingShows(shows, Date.parse("2026-12-12T09:00:00Z"));
    expect(before.some((s) => s.start.startsWith("2026-12-12"))).toBe(true);
    expect(after.some((s) => s.start.startsWith("2026-12-12"))).toBe(false);
  });
  it("hides Тартюф at 19:00 MSK on 28 Nov", () => {
    expect(upcomingShows(shows, Date.parse("2026-11-28T16:00:00Z")).some((s) => s.title === "Тартюф")).toBe(false);
  });
});
