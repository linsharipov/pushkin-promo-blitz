const items = [
  {
    q: "Как воспользоваться скидкой?",
    a: "Введите промокод ПУШКА30 (ноябрь–декабрь) или ПУШКА40 (январь) на финальном шаге оформления билета на сайте Театра имени Пушкина. Скидка распространяется на билеты от 1000 рублей.",
  },
  {
    q: "На какие спектакли действует акция?",
    a: "Только на избранные показы из афиши выше — с 28 ноября 2026 по 31 января 2027 года. Скидка 30% на ноябрь–декабрь по ПУШКА30 и 40% на январь по ПУШКА40.",
  },
  {
    q: "Можно ли совмещать со другими скидками?",
    a: "Нет, промокод не суммируется с другими акциями, льготами и специальными предложениями театра.",
  },

];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-end gap-4">
          <div className="h-3 w-12 bg-accent" aria-hidden />
          <h2 className="font-display text-3xl font-bold uppercase leading-none sm:text-5xl">
            F.A.Q.
          </h2>
        </div>
        <dl className="mt-10 divide-y-2 divide-foreground/10 border-y-2 border-foreground/10">
          {items.map((it) => (
            <div key={it.q} className="py-5 sm:py-6">
              <dt className="font-display text-lg font-bold uppercase sm:text-xl">{it.q}</dt>
              <dd className="mt-2 text-foreground/75">{it.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
