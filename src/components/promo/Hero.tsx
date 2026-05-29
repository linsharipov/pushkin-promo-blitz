import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const code = "ЖАРА";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Промокод скопирован");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Не удалось скопировать");
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-sun)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Летняя акция · 2–18 июня
        </div>

        <h1 className="mt-6 font-display text-[18vw] font-bold uppercase leading-[0.85] tracking-tight sm:text-[clamp(4rem,12vw,11rem)]">
          <span className="block">ЖАРА</span>
          <span
            className="block bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-heat)" }}
          >
            В&nbsp;ТЕАТРЕ
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-foreground/75 sm:text-xl">
          Лето в Театре имени Пушкина — со скидкой до&nbsp;50%. Используйте промокод при покупке
          билетов на&nbsp;спектакли июня и&nbsp;спасайтесь от&nbsp;жары в&nbsp;зрительном зале.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <button
            type="button"
            onClick={handleCopy}
            className="group relative flex items-center gap-4 rounded-2xl border-2 border-foreground bg-accent px-6 py-5 text-left transition-transform hover:-translate-y-1 hover:-translate-x-1"
            style={{ boxShadow: "var(--shadow-bold)" }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
                Промокод
              </div>
              <div className="font-display text-4xl font-bold tracking-wider sm:text-5xl">
                {code}
              </div>
            </div>
            <div className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </div>
          </button>

          <div className="flex flex-col gap-2 text-sm text-foreground/70 sm:pl-2">
            <div>
              <span className="font-bold text-foreground">Скидка до 50%</span> на выбранные
              спектакли
            </div>
            <div>
              <span className="font-bold text-foreground">2 — 18 июня 2026</span> · только по
              промокоду
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
