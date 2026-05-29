const steps = [
  {
    n: "01",
    title: "Выберите спектакль",
    text: "Откройте афишу акции и выберите дату в июне.",
    tile: "var(--tile-sky)",
  },
  {
    n: "02",
    title: "Введите промокод",
    text: "Укажите промокод ЖАРА при оформлении билета.",
    tile: "var(--tile-pink)",
  },
  {
    n: "03",
    title: "Получите скидку",
    text: "Цена снизится автоматически — до 50% от номинала.",
    tile: "var(--tile-yellow)",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="px-2 text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          <span className="font-display">Как это </span>
          <span className="font-display italic">работает</span>
        </h2>

        <div className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col justify-between rounded-[2rem] p-6 transition-transform hover:-translate-y-1 sm:p-8"
              style={{ background: s.tile, minHeight: "260px" }}
            >
              <span className="inline-flex w-fit items-center rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-medium text-background">
                Шаг {s.n}
              </span>
              <div className="mt-6">
                <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-base text-foreground/75">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
