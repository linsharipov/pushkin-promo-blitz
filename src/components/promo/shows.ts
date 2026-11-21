import type { Show } from "./ShowCard";
import tartuffe from "@/assets/posters/tartuffe.jpg";
import shakespeare from "@/assets/posters/shakespeare.jpg";
import servant from "@/assets/posters/servant.jpg";
import krasavec from "@/assets/posters/handsome-man.jpg.asset.json";
import threeIvans from "@/assets/posters/three-ivans-stage.png.asset.json";
import idiot from "@/assets/posters/idiot.jpg.asset.json";
import tomorrowWasWar from "@/assets/posters/tomorrow-was-war.jpg.asset.json";

export const shows: Show[] = [
  { start: "2026-11-28T19:00:00+03:00", title: "Тартюф", discount: 30, poster: tartuffe, href: "https://tickets.mos.ru/widget/wv2/ticket-selection?eventId=71607&performanceId=57299089&agentId=museum110_reserv&system_name=pushkin" },
  { start: "2026-11-29T19:00:00+03:00", title: "Три Ивана", discount: 30, poster: threeIvans.url, href: "https://tickets.mos.ru/widget/wv2/ticket-selection?eventId=71670&performanceId=57298798&agentId=museum110_reserv&system_name=pushkin" },
  { start: "2026-11-29T19:00:00+03:00", title: "Слуга двух господ", discount: 30, poster: servant, href: "https://tickets.mos.ru/widget/wv2/ticket-selection?eventId=68708&performanceId=57299420&agentId=museum110_reserv&system_name=pushkin" },
  { start: "2026-12-01T19:00:00+03:00", title: "Завтра была война", discount: 30, poster: tomorrowWasWar.url, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=68700&performanceId=59543075&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-02T19:00:00+03:00", title: "Идиот", discount: 30, poster: idiot.url, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=116238&performanceId=59543779&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-03T19:00:00+03:00", title: "Влюблённый Шекспир", discount: 30, poster: shakespeare, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=68640&performanceId=59543969&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-12T12:00:00+03:00", title: "Три Ивана", discount: 30, poster: threeIvans.url, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=71670&performanceId=59551212&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-19T19:00:00+03:00", title: "Идиот", discount: 30, poster: idiot.url, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=116238&performanceId=59549609&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-24T19:00:00+03:00", title: "Красавец мужчина", discount: 30, poster: krasavec.url, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=71673&performanceId=59555964&agentId=museum110_notmos&system_name=pushkin" },
  { start: "2026-12-27T19:00:00+03:00", title: "Три Ивана", discount: 30, poster: threeIvans.url, href: "https://tickets-external.mos.ru/widget/wv2/ticket-selection?eventId=71670&performanceId=59551543&agentId=museum110_notmos&system_name=pushkin" },
];

/** Shows still on sale: a card disappears at the moment the performance starts. */
export function upcomingShows(list: Show[], now: number): Show[] {
  return list.filter((s) => now < new Date(s.start).getTime());
}
