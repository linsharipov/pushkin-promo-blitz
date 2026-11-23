import { describe, expect, it } from "vitest";
import { shows, upcomingShows } from "./shows";

describe("Black Friday shows", () => {
  it.each([
    ["2026-11-28", "Тартюф", "tickets.mos.ru", "71607", "57299089", "museum110_reserv"],
    ["2026-11-29", "Три Ивана", "tickets.mos.ru", "71670", "57298798", "museum110_reserv"],
    ["2026-11-29", "Слуга двух господ", "tickets.mos.ru", "68708", "57299420", "museum110_reserv"],
    ["2026-12-01", "Завтра была война", "tickets-external.mos.ru", "68700", "59543075", "museum110_notmos"],
    ["2026-12-02", "Идиот", "tickets-external.mos.ru", "116238", "59543779", "museum110_notmos"],
    ["2026-12-03", "Влюблённый Шекспир", "tickets-external.mos.ru", "68640", "59543969", "museum110_notmos"],
    ["2026-12-12", "Три Ивана", "tickets-external.mos.ru", "71670", "59551212", "museum110_notmos"],
    ["2026-12-19", "Идиот", "tickets-external.mos.ru", "116238", "59549609", "museum110_notmos"],
    ["2026-12-24", "Красавец мужчина", "tickets-external.mos.ru", "71673", "59555964", "museum110_notmos"],
    ["2026-12-27", "Три Ивана", "tickets-external.mos.ru", "71670", "59551543", "museum110_notmos"],
  ])("links %s %s to its specific ticket selection", (date, title, host, event, performance, agent) => {
    const show = shows.find((s) => s.start.startsWith(date) && s.title === title);
    expect(show?.href).toBe(`https://${host}/widget/wv2/ticket-selection?eventId=${event}&performanceId=${performance}&agentId=${agent}&system_name=pushkin`);
  });
  it("has 10 performances, all 30% off", () => {
    expect(shows).toHaveLength(10);
    expect(shows.every((s) => s.discount === 30)).toBe(true);
  });
  it.each(["2026-11-29", "2026-12-12", "2026-12-27"])("starts Три Ивана at 12:00 MSK and hides it at that time on %s", (date) => {
    const show = shows.find((s) => s.title === "Три Ивана" && s.start.startsWith(date));
    expect(show?.start).toBe(`${date}T12:00:00+03:00`);
    const before = upcomingShows(shows, Date.parse(`${date}T08:59:00Z`));
    const after = upcomingShows(shows, Date.parse(`${date}T09:00:00Z`));
    expect(before.some((s) => s === show)).toBe(true);
    expect(after.some((s) => s === show)).toBe(false);
  });
  it("hides Тартюф at 19:00 MSK on 28 Nov", () => {
    expect(upcomingShows(shows, Date.parse("2026-11-28T16:00:00Z")).some((s) => s.title === "Тартюф")).toBe(false);
  });
});
