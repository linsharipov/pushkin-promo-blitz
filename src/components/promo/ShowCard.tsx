export type Show = {
  day: string;
  month: string;
  title: string;
  discount: number;
  poster: string;
};

export function ShowCard({ show }: { show: Show }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={show.poster}
          alt={`Афиша спектакля „${show.title}" — Театр имени Пушкина`}
          loading="lazy"
          width={768}
          height={960}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background:
              "linear-gradient(to top, var(--card) 15%, color-mix(in oklab, var(--card) 70%, transparent) 60%, transparent 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute right-3 top-3 rounded-full px-3 py-1.5 font-display text-lg font-bold text-primary-foreground"
          style={{ background: "var(--gradient-heat)", boxShadow: "var(--shadow-soft)" }}
        >
          −{show.discount}%
        </div>
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur">
          <span className="font-display text-lg font-bold leading-none">{show.day}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/60">
            {show.month}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
          {show.title}
        </h3>
        <a
          href="#"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-3 text-sm font-semibold uppercase tracking-widest text-background transition-colors hover:bg-primary"
        >
          Купить со скидкой
        </a>
      </div>
    </article>
  );
}
