import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  {
    q: "Как воспользоваться скидкой?",
    a: "Введите промокод ЖАРА на финальном шаге оформления билета на сайте Театра имени Пушкина. Скидка распространяется на билеты от 1000 рублей.",
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
    a: "По промокоду можно приобрести до 6 билетов на один спектакль за одну транзакцию.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="px-2 text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          <span className="font-display">Частые </span>
          <span className="font-display italic">вопросы</span>
        </h2>

        <div className="mt-10 space-y-2">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="rounded-[1.5rem] border border-foreground/10 bg-background transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
                    {it.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-base text-foreground/75 sm:px-7 sm:pb-7">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
