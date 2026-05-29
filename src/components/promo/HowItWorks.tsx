const steps = [
  { n: "01", title: "Выберите спектакль", text: "Откройте афишу акции и выберите дату в июне." },
  { n: "02", title: "Введите промокод", text: "Укажите промокод ЖАРА при оформлении билета." },
  { n: "03", title: "Получите скидку", text: "Цена снизится автоматически — до 50% от номинала." },
];

export function HowItWorks() {
  return (
    <section className="border-y border-foreground/10 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl font-bold uppercase sm:text-5xl">Как это работает</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border-2 border-foreground bg-background p-6 transition-transform hover:-translate-y-1"
            >
              <div className="font-display text-5xl font-bold text-primary">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{s.title}</h3>
              <p className="mt-2 text-foreground/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
