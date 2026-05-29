import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowDown } from "lucide-react";

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
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-sun)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Летняя акция · 2–18 июня
        </div>

        <h1 className="mt-5 font-display text-[16vw] font-bold uppercase leading-[0.85] tracking-tight sm:text-[clamp(3.5rem,10vw,9rem)]">
          <span className="block">ЖАРА</span>
          <span
            className="block bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-heat)" }}
          >
            В&nbsp;ТЕАТРЕ
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-foreground/75 sm:text-lg">
          Лето в&nbsp;Театре имени Пушкина — со&nbsp;скидкой до&nbsp;50%. Выбирайте спектакль
          и&nbsp;применяйте промокод <span className="font-bold text-foreground">ЖАРА</span> при
          покупке билета.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#shows"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            Выбрать спектакль
            <ArrowDown className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="group inline-flex items-center gap-3 rounded-full border-2 border-foreground bg-accent px-5 py-2.5 text-left transition-transform hover:-translate-y-0.5"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
              Промокод
            </div>
            <div className="font-display text-xl font-bold tracking-wider sm:text-2xl">{code}</div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </div>
          </button>

          <a
            href="#how"
            className="text-sm font-semibold uppercase tracking-widest text-foreground/70 underline-offset-4 hover:text-primary hover:underline"
          >
            Как это работает →
          </a>
        </div>
      </div>
    </section>
  );
}
