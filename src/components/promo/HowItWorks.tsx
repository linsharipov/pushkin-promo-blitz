const steps = [
  { n: "01", title: "Выберите спектакль", text: "Откройте афишу акции и выберите дату в ноябре или декабре." },
  { n: "02", title: "Введите промокод", text: "Укажите промокод ПУШКА30 при оформлении билета." },
  { n: "03", title: "Получите скидку", text: "Цена снизится автоматически — на 30% от номинала." },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-end gap-4">
          <div className="h-3 w-12 bg-accent" aria-hidden />
          <h2 className="font-display text-3xl font-bold uppercase leading-none sm:text-5xl">
            Как это работает
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative border-t-2 border-accent bg-background pt-6 transition-transform hover:-translate-y-1"
            >
              <div className="relative inline-block">
                <span aria-hidden className="absolute -left-1 -top-1 h-8 w-8 bg-accent" />
                <div className="relative font-display text-5xl font-bold">{s.n}</div>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{s.title}</h3>
              <p className="mt-2 text-foreground/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
