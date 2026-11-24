import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowDown } from "lucide-react";
import stageWide from "@/assets/black_friday_stage_wide.png";

export const PROMO_CODE = "ПУШКА30";
export const PROMO_CODE_JAN = "ПУШКА40";

export function Hero() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      toast.success("Промокод скопирован");
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error("Не удалось скопировать");
    }
  };

  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      {/* blurred ambient fill so the portrait visual spreads across wide screens */}
      <img
        src={stageWide}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover opacity-50 blur-2xl"
      />
      <div className="relative mx-auto -z-10 max-w-3xl md:hidden">
        <img
          src={stageWide}
          alt="Чёрная пятница в Театре имени Пушкина — скидки до 40%"
          width={1570}
          height={1002}
          className="block aspect-[4/5] max-h-[100vh] w-full object-cover object-[center_45%]"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/80 via-background/20 to-transparent" />
      </div>
      <div className="relative -z-10 hidden md:block">
        <img
          src={stageWide}
          alt="Чёрная пятница в Театре имени Пушкина — скидки до 40%"
          width={1570}
          height={1002}
          className="block h-[88vh] min-h-[560px] w-full object-cover object-[center_40%]"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background/80 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[35%] bg-gradient-to-t from-background via-background/70 to-transparent" />

      <h1 className="sr-only">Чёрная пятница в Театре имени Пушкина — скидки до 40% по промокодам {PROMO_CODE} и {PROMO_CODE_JAN}</h1>

      <div className="relative -mt-24 px-4 pb-12 sm:-mt-28 sm:pb-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className=" max-w-xl text-base text-foreground/85 sm:text-lg">
            Скидка <span className="font-bold text-accent">30%</span> на&nbsp;спектакли ноября и&nbsp;декабря
            по&nbsp;промокоду <span className="font-bold text-foreground">{PROMO_CODE}</span> и&nbsp;скидка{" "}
            <span className="font-bold text-accent">40%</span> на&nbsp;спектакли января по&nbsp;промокоду{" "}
            <span className="font-bold text-foreground">{PROMO_CODE_JAN}</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#shows"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:text-base"
            >
              Купить билеты со скидкой
              <ArrowDown className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => handleCopy(PROMO_CODE)}
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
                {copied === PROMO_CODE ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleCopy(PROMO_CODE_JAN)}
              className="relative inline-flex items-center gap-3 border-2 border-dashed border-accent bg-velvet px-5 py-3 text-left transition-transform hover:-translate-y-0.5"
              aria-label={`Скопировать промокод ${PROMO_CODE_JAN}`}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                Промокод
              </div>
              <div className="font-display text-xl font-bold tracking-wider text-accent sm:text-2xl">
                {PROMO_CODE_JAN}
              </div>
              <div className="flex h-7 w-7 items-center justify-center bg-accent text-accent-foreground">
                {copied === PROMO_CODE_JAN ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
