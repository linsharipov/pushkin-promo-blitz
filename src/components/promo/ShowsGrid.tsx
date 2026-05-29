import { useMemo, useState } from "react";
import { ShowCard, type Show } from "./ShowCard";
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
    <section id="shows" className="px-3 py-14 sm:px-4 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 px-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-3.5 py-1.5 text-xs font-medium text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              12 спектаклей · промокод ЖАРА
            </span>
            <h2 className="mt-4 text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              <span className="font-display">Афиша </span>
              <span className="font-display italic">со скидкой</span>
            </h2>
          </div>
          <div className="text-sm text-foreground/55">
            Показано {visible.length} из {shows.length}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 lg:sticky lg:top-[88px] lg:z-30 lg:rounded-full lg:border lg:border-foreground/10 lg:bg-background/85 lg:p-2 lg:backdrop-blur">
          <div className="-mx-3 flex items-center gap-2 overflow-x-auto px-3 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:flex-nowrap">
            {filters.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={String(f.value)}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
            <div className="ml-auto hidden items-center gap-1 lg:flex">
              <span className="px-2 text-xs font-medium uppercase tracking-widest text-foreground/45">
                Сорт.
              </span>
              {(["date", "discount"] as Sort[]).map((s) => {
                const active = sort === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSort(s)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "bg-foreground text-background"
                        : "text-foreground/60 hover:bg-foreground/5"
                    }`}
                  >
                    {s === "date" ? "по дате" : "по скидке"}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2 px-1 lg:hidden">
            <span className="text-xs font-medium uppercase tracking-widest text-foreground/45">
              Сортировка:
            </span>
            {(["date", "discount"] as Sort[]).map((s) => {
              const active = sort === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSort(s)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "bg-foreground/5 text-foreground/60"
                  }`}
                >
                  {s === "date" ? "по дате" : "по скидке"}
                </button>
              );
            })}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-foreground/55">Спектаклей с такой скидкой нет.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s, i) => (
              <ShowCard key={`${s.day}-${s.title}`} show={s} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
