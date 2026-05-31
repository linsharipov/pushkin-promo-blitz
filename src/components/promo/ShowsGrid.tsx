import { useEffect, useMemo, useState } from "react";
import { ShowCard, type Show } from "./ShowCard";

const SEASON_YEAR = 2026;
const MONTHS_RU: Record<string, number> = {
  января: 0, февраля: 1, марта: 2, апреля: 3, мая: 4, июня: 5,
  июля: 6, августа: 7, сентября: 8, октября: 9, ноября: 10, декабря: 11,
};

// 19:00 МСК = 16:00 UTC
function showEndUtcMs(day: string, month: string): number {
  const m = MONTHS_RU[month] ?? 0;
  return Date.UTC(SEASON_YEAR, m, Number(day), 16, 0, 0);
}
import inspector from "@/assets/posters/inspector.jpg";
import krasavec from "@/assets/posters/krasavec.jpg";
import zoyka from "@/assets/posters/zoyka.jpg";
import licey from "@/assets/posters/licey.jpg";
import mousetrap from "@/assets/posters/mousetrap.jpg";
import tartuffe from "@/assets/posters/tartuffe.jpg";
import captain from "@/assets/posters/captain.jpg";
import shakespeare from "@/assets/posters/shakespeare.jpg";
import krause from "@/assets/posters/krause.jpg";
import servant from "@/assets/posters/servant.jpg";
import reserve from "@/assets/posters/reserve.jpg";
import badgood from "@/assets/posters/badgood.jpg";

const shows: Show[] = [
  { day: "2", month: "июня", title: "Инспектор пришёл", discount: 50, poster: inspector, href: "https://teatrpushkin.ru/spektakli/detail/inspektor-prishel/" },
  { day: "4", month: "июня", title: "Красавец мужчина", discount: 50, poster: krasavec, href: "https://teatrpushkin.ru/spektakli/detail/krasavets-muzhchina/" },
  { day: "5", month: "июня", title: "Зойкина квартира", discount: 30, poster: zoyka, href: "https://teatrpushkin.ru/spektakli/detail/zoykina-kvartira/" },
  { day: "6", month: "июня", title: "Лицей", discount: 20, poster: licey, href: "https://teatrpushkin.ru/spektakli/detail/litsey/" },
  { day: "7", month: "июня", title: "Мышеловка", discount: 40, poster: mousetrap, href: "https://teatrpushkin.ru/spektakli/detail/myshelovka/" },
  { day: "9", month: "июня", title: "Тартюф", discount: 50, poster: tartuffe, href: "https://teatrpushkin.ru/spektakli/detail/tartyuf/" },
  { day: "10", month: "июня", title: "Капитанская дочка", discount: 30, poster: captain, href: "https://teatrpushkin.ru/spektakli/detail/kapitanskaya-dochka/" },
  { day: "11", month: "июня", title: "Влюблённый Шекспир", discount: 40, poster: shakespeare, href: "https://teatrpushkin.ru/spektakli/detail/vlyublennyy-shekspir/" },
  { day: "13", month: "июня", title: "Семейка Краузе", discount: 40, poster: krause, href: "https://teatrpushkin.ru/spektakli/detail/semeyka-krauze/" },
  { day: "14", month: "июня", title: "Слуга двух господ", discount: 40, poster: servant, href: "https://teatrpushkin.ru/spektakli/detail/sluga-dvuh-gospod-russian-edition/" },
  { day: "17", month: "июня", title: "Заповедник", discount: 50, poster: reserve, href: "https://teatrpushkin.ru/spektakli/detail/zapovednik/" },
  { day: "18", month: "июня", title: "Плохие хорошие", discount: 10, poster: badgood, href: "https://teatrpushkin.ru/spektakli/detail/plokhie-khoroshie/" },
];

const filters: { value: number | "all"; label: string }[] = [
  { value: "all", label: "Все скидки" },
  { value: 50, label: "−50%" },
  { value: 40, label: "−40%" },
  { value: 30, label: "−30%" },
  { value: 20, label: "−20%" },
  { value: 10, label: "−10%" },
];

type Sort = "date" | "discount";

export function ShowsGrid() {
  const [filter, setFilter] = useState<number | "all">("all");
  const [sort, setSort] = useState<Sort>("date");

  const visible = useMemo(() => {
    const list = filter === "all" ? shows : shows.filter((s) => s.discount === filter);
    return [...list].sort((a, b) => {
      if (sort === "discount") return b.discount - a.discount;
      return Number(a.day) - Number(b.day);
    });
  }, [filter, sort]);

  return (
    <section id="shows" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="h-2 w-2 bg-primary" />
              12 спектаклей · промокод ЖАРА
            </div>
            <h2 className="mt-3 flex items-end gap-4 font-display text-4xl font-bold uppercase leading-none sm:text-6xl">
              <span className="h-3 w-12 bg-accent sm:h-4 sm:w-16" aria-hidden />
              Афиша со&nbsp;скидкой
            </h2>
          </div>
          <div className="text-sm font-semibold uppercase tracking-widest text-foreground/60">
            Показано {visible.length} из {shows.length}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:sticky lg:top-[72px] lg:z-30 lg:-mx-2 lg:bg-background/85 lg:px-2 lg:py-3 lg:backdrop-blur">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {filters.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={String(f.value)}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={`shrink-0 rounded-full border-2 px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/20 bg-background text-foreground/70 hover:border-foreground/50"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold uppercase tracking-widest text-foreground/60">
              Сортировка:
            </span>
            <div className="inline-flex overflow-hidden rounded-full border-2 border-foreground/20">
              {(["date", "discount"] as Sort[]).map((s) => {
                const active = sort === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSort(s)}
                    className={`px-4 py-1.5 text-sm font-semibold uppercase tracking-widest transition-colors ${
                      active ? "bg-foreground text-background" : "text-foreground/70"
                    }`}
                  >
                    {s === "date" ? "по дате" : "по скидке"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-foreground/60">Спектаклей с такой скидкой нет.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <ShowCard key={`${s.day}-${s.title}`} show={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
