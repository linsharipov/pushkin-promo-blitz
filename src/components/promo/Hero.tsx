import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowDown } from "lucide-react";
import stage from "@/assets/black_friday_stage.png.asset.json";

export const PROMO_CODE = "ПУШКА30";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      toast.success("Промокод скопирован");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Не удалось скопировать");
    }
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:grid-cols-12">
        <div className="relative md:col-span-7">
          <div className="inline-flex items-center gap-2 border border-accent/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Ноябрь — декабрь 2026 · 10 показов
          </div>

          <h1 className="mt-5 font-display text-[14vw] font-bold uppercase leading-[0.88] tracking-tight sm:text-[clamp(3.5rem,8vw,7rem)]">
            Чёрная
            <br />
            <span className="bg-gold bg-clip-text text-transparent">пятница</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-foreground/75 sm:text-lg">
            Скидка <span className="font-bold text-accent">30%</span> на&nbsp;избранные спектакли
            ноября и&nbsp;декабря. Выбирайте вечер и&nbsp;вводите промокод{" "}
            <span className="font-bold text-foreground">{PROMO_CODE}</span> при покупке билета.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#shows"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:text-base"
            >
              Купить билеты со скидкой
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="relative inline-flex items-center gap-3 border-2 border-dashed border-accent bg-velvet px-5 py-3 text-left transition-transform hover:-translate-y-0.5"
              aria-label={`Скопировать промокод ${PROMO_CODE}`}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                Промокод
              </div>
              <div className="font-display text-xl font-bold tracking-wider text-accent sm:text-2xl">
                {PROMO_CODE}
              </div>
              <div className="flex h-7 w-7 items-center justify-center bg-accent text-accent-foreground">
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </div>
            </button>
          </div>

          <div className="mt-8 text-xs font-semibold uppercase tracking-widest text-foreground/55">
            Касса театра:{" "}
            <a href="tel:+74956941289" className="text-foreground hover:text-accent">
              +7 495 694-12-89
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative mx-auto max-w-sm overflow-hidden border border-accent/40 shadow-glow md:max-w-none">
            <img
              src={stage.url}
              alt="Чёрная пятница в Театре имени Пушкина — скидка 30%"
              width={1024}
              height={1536}
              className="block aspect-[2/3] h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
