import { useEffect, useMemo, useState } from "react";
import { ShowCard } from "./ShowCard";
import { shows, upcomingShows } from "./shows";

type Month = "all" | 10 | 11;
const monthOf = (iso: string) => new Date(new Date(iso).getTime() + 3 * 3600_000).getUTCMonth();

export function ShowsGrid() {
  const [month, setMonth] = useState<Month>("all");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const upcoming = useMemo(() => upcomingShows(shows, now), [now]);

  const visible = useMemo(
    () =>
      upcoming
        .filter((s) => month === "all" || monthOf(s.start) === month)
        .sort((a, b) => a.start.localeCompare(b.start)),
    [upcoming, month],
  );

  const pill = (active: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors ${
      active
        ? "border-accent bg-accent text-accent-foreground"
        : "border-border text-foreground/70 hover:border-accent/70"
    }`;

  return (
    <section id="shows" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-none sm:text-6xl">
              Афиша со&nbsp;скидкой
            </h2>
          </div>
          <div className="text-sm font-semibold uppercase tracking-widest text-foreground/60">
            Показано {visible.length} из {upcoming.length}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 lg:sticky lg:top-[72px] lg:z-30 lg:-mx-2 lg:bg-background/85 lg:px-2 lg:py-3 lg:backdrop-blur">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {([["all", "Все даты"], [10, "Ноябрь"], [11, "Декабрь"]] as [Month, string][]).map(
              ([v, l]) => (
                <button key={String(v)} type="button" onClick={() => setMonth(v)} className={pill(month === v)}>
                  {l}
                </button>
              ),
            )}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-foreground/60">По выбранным условиям показов нет.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <ShowCard key={`${s.start}-${s.title}`} show={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
