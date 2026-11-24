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
  it("has 10 Nov–Dec performances at 30% with ПУШКА30 and 12 January at 40% with ПУШКА40", () => {
    expect(shows).toHaveLength(22);
    const jan = shows.filter((s) => s.start.startsWith("2027-01"));
    expect(jan).toHaveLength(12);
    expect(jan.every((s) => s.discount === 40 && s.promoCode === "ПУШКА40")).toBe(true);
    expect(shows.filter((s) => !s.start.startsWith("2027")).every((s) => s.discount === 30 && s.promoCode === "ПУШКА30")).toBe(true);
  });
  it("shows January cards only from 25 Nov 00:00 MSK", () => {
    const jan = (now: number) => upcomingShows(shows, now).filter((s) => s.start.startsWith("2027")).length;
    expect(jan(Date.parse("2026-11-24T20:59:00Z"))).toBe(0);
    expect(jan(Date.parse("2026-11-24T21:00:00Z"))).toBe(12);
  });
  it.each([
    ["2027-01-09T12:00", "Три Ивана", 60719054], ["2027-01-10T12:00", "Аленький цветочек", 60719043],
    ["2027-01-10T19:00", "Тартюф", 60837812], ["2027-01-14T19:00", "Сделка", 61570842],
    ["2027-01-15T19:00", "Идиот", 61544312], ["2027-01-16T19:00", "Завтра была война", 61544424],
    ["2027-01-21T19:00", "Заповедник", 61547284], ["2027-01-26T19:00", "Космос", 61568104],
    ["2027-01-29T19:00", "Завтра была война", 61568113], ["2027-01-30T12:00", "Три Ивана", 61568133],
    ["2027-01-30T19:00", "Идиот", 61568118], ["2027-01-31T19:00", "Слуга двух господ", 61568126],
  ])("January %s %s links to performance %s", (start, title, perf) => {
    const show = shows.find((s) => s.start.startsWith(start) && s.title === title);
    expect(show?.href).toContain(`performanceId=${perf}&agentId=museum110_notmos`);
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
    expect(upcomingShows(shows, Date.parse("2026-11-28T16:00:00Z")).some((s) => s.title === "Тартюф" && s.start.startsWith("2026-11-28"))).toBe(false);
  });
});
