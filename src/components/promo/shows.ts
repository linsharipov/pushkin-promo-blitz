import type { Show } from "./ShowCard";
import tartuffe from "@/assets/posters/tartuffe.jpg";
import shakespeare from "@/assets/posters/shakespeare.jpg";
import servant from "@/assets/posters/servant.jpg";
import krasavec from "@/assets/posters/krasavec.jpg";

const base = "https://teatrpushkin.ru/spektakli/detail/";

export const shows: Show[] = [
  { start: "2026-11-28T19:00:00+03:00", title: "Тартюф", discount: 30, poster: tartuffe, href: `${base}tartyuf/` },
  { start: "2026-11-29T19:00:00+03:00", title: "Три Ивана", discount: 30, href: "https://teatrpushkin.ru/afisha/" },
  { start: "2026-11-29T19:00:00+03:00", title: "Слуга двух господ", discount: 30, poster: servant, href: `${base}sluga-dvuh-gospod-russian-edition/` },
  { start: "2026-12-01T19:00:00+03:00", title: "Завтра была война", discount: 30, href: "https://teatrpushkin.ru/afisha/" },
  { start: "2026-12-02T19:00:00+03:00", title: "Идиот", discount: 30, href: "https://teatrpushkin.ru/afisha/" },
  { start: "2026-12-03T19:00:00+03:00", title: "Влюблённый Шекспир", discount: 30, poster: shakespeare, href: `${base}vlyublennyy-shekspir/` },
  { start: "2026-12-12T12:00:00+03:00", title: "Три Ивана", discount: 30, href: "https://teatrpushkin.ru/afisha/" },
  { start: "2026-12-19T19:00:00+03:00", title: "Идиот", discount: 30, href: "https://teatrpushkin.ru/afisha/" },
  { start: "2026-12-24T19:00:00+03:00", title: "Красавец мужчина", discount: 30, poster: krasavec, href: `${base}krasavets-muzhchina/` },
  { start: "2026-12-27T19:00:00+03:00", title: "Три Ивана", discount: 30, href: "https://teatrpushkin.ru/afisha/" },
];

/** Shows still on sale: a card disappears at the moment the performance starts. */
export function upcomingShows(list: Show[], now: number): Show[] {
  return list.filter((s) => now < new Date(s.start).getTime());
}
