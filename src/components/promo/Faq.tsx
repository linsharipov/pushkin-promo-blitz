const items = [
  {
    q: "Как воспользоваться скидкой?",
    a: "Введите промокод ЖАРА на финальном шаге оформления билета на сайте Театра имени Пушкина.",
  },
  {
    q: "На какие спектакли действует акция?",
    a: "Только на спектакли из афиши выше — со 2 по 18 июня 2026 года. Размер скидки зависит от спектакля.",
  },
  {
    q: "Можно ли совмещать со другими скидками?",
    a: "Нет, промокод не суммируется с другими акциями, льготами и специальными предложениями театра.",
  },
  {
    q: "Сколько билетов можно купить?",
    a: "По промокоду можно приобрести до 4 билетов на один спектакль за одну транзакцию.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-foreground/10 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl font-bold uppercase sm:text-5xl">Условия акции</h2>
        <dl className="mt-10 space-y-4">
          {items.map((it) => (
            <div
              key={it.q}
              className="rounded-xl border-2 border-foreground bg-background p-5 sm:p-6"
            >
              <dt className="font-display text-lg font-bold uppercase sm:text-xl">{it.q}</dt>
              <dd className="mt-2 text-foreground/75">{it.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
