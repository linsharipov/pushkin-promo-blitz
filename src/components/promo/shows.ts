import type { Show } from "./ShowCard";
import tartuffe from "@/assets/posters/tartuffe.jpg";
import shakespeare from "@/assets/posters/shakespeare.jpg";
import servant from "@/assets/posters/servant.jpg";
import krasavec from "@/assets/posters/handsome-man.jpg";
import threeIvans from "@/assets/posters/three-ivans-stage.png";
import idiot from "@/assets/posters/idiot.jpg";
import reserve from "@/assets/posters/reserve.jpg";
import tomorrowWasWar from "@/assets/posters/tomorrow-was-war.jpg";

const JAN_FROM = "2026-11-25T00:00:00+03:00";
const ext = (e: number, p: number) =>
  `https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=${e}&performanceId=${p}&agentId=museum110_notmos&system_name=pushkin`;

export const shows: Show[] = [
  { start: "2026-11-28T19:00:00+03:00", title: "Тартюф", discount: 30, promoCode: "ПУШКА30", poster: tartuffe, href: "https://tickets.mos.ru/widget/wv2/ticket-selection?eventId=71607&performanceId=57299089&agentId=museum110_reserv&system_name=pushkin" },
  { start: "2026-11-29T12:00:00+03:00", title: "Три Ивана", discount: 30, promoCode: "ПУШКА30", poster: threeIvans, href: "https://tickets.mos.ru/widget/wv2/ticket-selection?eventId=71670&performanceId=57298798&agentId=museum110_reserv&system_name=pushkin" },
  { start: "2026-11-29T19:00:00+03:00", title: "Слуга двух господ", discount: 30, promoCode: "ПУШКА30", poster: servant, href: "https://tickets.mos.ru/widget/wv2/ticket-selection?eventId=68708&performanceId=57299420&agentId=museum110_reserv&system_name=pushkin" },
  { start: "2026-12-01T19:00:00+03:00", title: "Завтра была война", discount: 30, promoCode: "ПУШКА30", poster: tomorrowWasWar, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=68700&performanceId=59543075&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-02T19:00:00+03:00", title: "Идиот", discount: 30, promoCode: "ПУШКА30", poster: idiot, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=116238&performanceId=59543779&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-03T19:00:00+03:00", title: "Влюблённый Шекспир", discount: 30, promoCode: "ПУШКА30", poster: shakespeare, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=68640&performanceId=59543969&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-12T12:00:00+03:00", title: "Три Ивана", discount: 30, promoCode: "ПУШКА30", poster: threeIvans, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=71670&performanceId=59551212&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-19T19:00:00+03:00", title: "Идиот", discount: 30, promoCode: "ПУШКА30", poster: idiot, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=116238&performanceId=59549609&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-24T19:00:00+03:00", title: "Красавец мужчина", discount: 30, promoCode: "ПУШКА30", poster: krasavec, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=71673&performanceId=59555964&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-27T12:00:00+03:00", title: "Три Ивана", discount: 30, promoCode: "ПУШКА30", poster: threeIvans, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=71670&performanceId=59551543&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2027-01-09T12:00:00+03:00", title: "Три Ивана", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: threeIvans, href: ext(71670, 60719054) },
  { start: "2027-01-10T12:00:00+03:00", title: "Аленький цветочек", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, href: ext(90922, 60719043) },
  { start: "2027-01-10T19:00:00+03:00", title: "Тартюф", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: tartuffe, href: ext(71607, 60837812) },
  { start: "2027-01-14T19:00:00+03:00", title: "Сделка", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, href: ext(68649, 61570842) },
  { start: "2027-01-15T19:00:00+03:00", title: "Идиот", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: idiot, href: ext(116238, 61544312) },
  { start: "2027-01-16T19:00:00+03:00", title: "Завтра была война", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: tomorrowWasWar, href: ext(68700, 61544424) },
  { start: "2027-01-21T19:00:00+03:00", title: "Заповедник", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: reserve, href: ext(68683, 61547284) },
  { start: "2027-01-26T19:00:00+03:00", title: "Космос", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, href: ext(68709, 61568104) },
  { start: "2027-01-29T19:00:00+03:00", title: "Завтра была война", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: tomorrowWasWar, href: ext(68700, 61568113) },
  { start: "2027-01-30T12:00:00+03:00", title: "Три Ивана", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: threeIvans, href: ext(71670, 61568133) },
  { start: "2027-01-30T19:00:00+03:00", title: "Идиот", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: idiot, href: ext(116238, 61568118) },
  { start: "2027-01-31T19:00:00+03:00", title: "Слуга двух господ", discount: 40, promoCode: "ПУШКА40", availableFrom: JAN_FROM, poster: servant, href: ext(68708, 61568126) },
];

/** Shows still on sale: a card disappears at the moment the performance starts. */
export function upcomingShows(list: Show[], now: number): Show[] {
  return list.filter(
    (s) => now < new Date(s.start).getTime() && (!s.availableFrom || now >= new Date(s.availableFrom).getTime()),
  );
}
