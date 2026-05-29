type Show = { day: string; month: string; title: string; discount: number };

const shows: Show[] = [
  { day: "2", month: "июня", title: "Инспектор пришёл", discount: 50 },
  { day: "4", month: "июня", title: "Красавец мужчина", discount: 50 },
  { day: "5", month: "июня", title: "Зойкина квартира", discount: 30 },
  { day: "6", month: "июня", title: "Лицей", discount: 20 },
  { day: "7", month: "июня", title: "Мышеловка", discount: 40 },
  { day: "9", month: "июня", title: "Тартюф", discount: 50 },
  { day: "10", month: "июня", title: "Капитанская дочка", discount: 30 },
  { day: "11", month: "июня", title: "Влюблённый Шекспир", discount: 40 },
  { day: "13", month: "июня", title: "Семейка Краузе", discount: 40 },
  { day: "14", month: "июня", title: "Слуга двух господ", discount: 40 },
  { day: "17", month: "июня", title: "Заповедник", discount: 50 },
  { day: "18", month: "июня", title: "Плохие хорошие", discount: 10 },
];

function ShowCard({ show }: { show: Show }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card transition-transform hover:-translate-y-1">
      <div className="flex items-start justify-between border-b-2 border-foreground p-5">
        <div>
          <div className="font-display text-5xl font-bold leading-none">{show.day}</div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-foreground/60">
            {show.month}
          </div>
        </div>
        <div
          className="rounded-full px-3 py-1.5 font-display text-lg font-bold text-primary-foreground"
          style={{ background: "var(--gradient-heat)" }}
        >
          −{show.discount}%
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold uppercase leading-tight">{show.title}</h3>
        <a
          href="#"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-3 text-sm font-semibold uppercase tracking-widest text-background transition-colors hover:bg-primary"
        >
          Купить билет
        </a>
      </div>
    </article>
  );
}

export function ShowsGrid() {
  return (
    <section id="shows" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold uppercase sm:text-5xl">
            Афиша со&nbsp;скидкой
          </h2>
          <div className="hidden text-sm font-semibold uppercase tracking-widest text-foreground/60 sm:block">
            12 спектаклей · промокод ЖАРА
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shows.map((s) => (
            <ShowCard key={`${s.day}-${s.title}`} show={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
