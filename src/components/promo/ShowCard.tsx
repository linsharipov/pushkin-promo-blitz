export type Show = {
  day: string;
  month: string;
  title: string;
  discount: number;
  poster: string;
  href: string;
};

export function ShowCard({ show }: { show: Show }) {
  return (
    <article className="group relative flex flex-col bg-background transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={show.poster}
          alt={`Афиша спектакля „${show.title}" — Театр имени Пушкина`}
          loading="lazy"
          width={768}
          height={960}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 object-cover"
        />
        <div className="absolute left-0 top-4 bg-primary px-3 py-1.5 font-display text-lg font-bold uppercase tracking-wider text-primary-foreground">
          −{show.discount}%
        </div>
      </div>

      <div className="relative flex gap-4 pt-5">
        <div className="relative shrink-0">
          <span aria-hidden className="absolute left-1 top-1 h-12 w-12 bg-accent sm:h-14 sm:w-14" />
          <div className="relative flex h-12 w-12 flex-col items-center justify-center sm:h-14 sm:w-14">
            <span className="font-display text-2xl font-bold leading-none sm:text-3xl">
              {show.day}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/60">
              {show.month}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="font-display text-lg font-bold uppercase leading-tight sm:text-xl">
            {show.title}
          </h3>
          <a
            href={show.href}
            className="mt-3 inline-flex items-center justify-center self-start bg-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary"
          >
            Купить билет
          </a>
        </div>
      </div>
    </article>
  );
}
