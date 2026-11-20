export type Show = {
  start: string; // ISO with +03:00
  title: string;
  discount: number;
  poster?: string;
  href: string;
};

const MONTHS = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
const WEEKDAYS = ["вс","пн","вт","ср","чт","пт","сб"];

export function showParts(iso: string) {
  // Interpret in Moscow time (UTC+3)
  const d = new Date(new Date(iso).getTime() + 3 * 3600_000);
  return {
    day: String(d.getUTCDate()),
    month: MONTHS[d.getUTCMonth()] ?? "",
    weekday: WEEKDAYS[d.getUTCDay()] ?? "",
    time: `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`,
  };
}

export function ShowCard({ show }: { show: Show }) {
  const p = showParts(show.start);
  return (
    <article className="group relative flex flex-col border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/70">
      <div className="relative aspect-[4/5] overflow-hidden bg-velvet">
        {show.poster ? (
          <img
            src={show.poster}
            alt={`Спектакль „${show.title}" — Театр имени Пушкина`}
            loading="lazy"
            width={768}
            height={960}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <span className="font-display text-3xl font-bold uppercase leading-tight text-accent sm:text-4xl">
              {show.title}
            </span>
          </div>
        )}
        <div className="absolute left-0 top-4 bg-primary px-3 py-1.5 font-display text-lg font-bold uppercase tracking-wider text-primary-foreground">
          −{show.discount}%
        </div>
      </div>

      <div className="flex gap-4 p-5">
        <div className="flex w-14 shrink-0 flex-col items-center border-r border-border pr-4">
          <span className="font-display text-3xl font-bold leading-none text-accent">{p.day}</span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-foreground/60">
            {p.month}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase text-foreground/50">
            {p.weekday} · {p.time}
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="font-display text-lg font-bold uppercase leading-tight sm:text-xl">
            {show.title}
          </h3>
          <a
            href={show.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center self-start bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-85"
          >
            Купить билеты
          </a>
        </div>
      </div>
    </article>
  );
}
