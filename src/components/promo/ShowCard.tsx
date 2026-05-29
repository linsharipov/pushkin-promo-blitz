export type Show = {
  day: string;
  month: string;
  title: string;
  discount: number;
  poster: string;
  href: string;
};

const TILES = [
  "var(--tile-pink)",
  "var(--tile-green)",
  "var(--tile-yellow)",
  "var(--tile-sky)",
  "var(--tile-lilac)",
  "var(--tile-peach)",
];

export function ShowCard({ show, index = 0 }: { show: Show; index?: number }) {
  const tile = TILES[index % TILES.length];

  return (
    <article className="group flex flex-col">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] p-3"
        style={{ background: tile }}
      >
        <img
          src={show.poster}
          alt={`Афиша спектакля „${show.title}" — Театр имени Пушкина`}
          loading="lazy"
          width={768}
          height={960}
          className="absolute inset-0 h-full w-full rounded-[1.75rem] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* discount pill */}
        <div className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background">
          −{show.discount}%
        </div>

        {/* date pill */}
        <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur">
          <span className="font-display text-base leading-none">{show.day}</span>
          <span className="text-[10px] uppercase tracking-widest text-foreground/55">
            {show.month}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3 px-1">
        <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
          {show.title}
        </h3>
        <a
          href={show.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Купить →
        </a>
      </div>
    </article>
  );
}
