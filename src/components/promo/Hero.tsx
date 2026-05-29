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
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:grid-cols-12 md:gap-10">
        {/* Left: type */}
        <div className="relative md:col-span-7">
          <div className="inline-flex items-center gap-2 bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            Летняя акция · только 12 спектаклей
          </div>

          <h1 className="mt-5 font-display text-[15vw] font-bold uppercase leading-[0.85] tracking-tight sm:text-[clamp(3.5rem,9vw,8rem)]">
            Жара
            <br />
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute -left-2 -right-2 top-[18%] bottom-[18%] -z-10 bg-accent"
              />
              <span className="relative">в&nbsp;театре</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-foreground/75 sm:text-lg">
            Лето в&nbsp;Театре имени Пушкина — со&nbsp;скидкой до&nbsp;
            <span className="font-bold text-primary">50%</span>. Выбирайте спектакль
            и&nbsp;применяйте промокод <span className="font-bold text-foreground">ЖАРА</span> при
            покупке билета.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#shows"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5 sm:text-base"
            >
              Купить билет со скидкой
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="group inline-flex items-center gap-3 bg-accent px-5 py-3 text-left transition-transform hover:-translate-y-0.5"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                Промокод
              </div>
              <div className="font-display text-xl font-bold tracking-wider sm:text-2xl">
                {code}
              </div>
              <div className="flex h-7 w-7 items-center justify-center bg-foreground text-background">
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </div>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-foreground/55">
            <span>
              <span className="font-display text-xl font-bold text-foreground">12</span>{" "}
              спектаклей
            </span>
            <span>
              <span className="font-display text-xl font-bold text-primary">−50%</span>{" "}
              максимум
            </span>
            <span>
              <span className="font-display text-xl font-bold text-foreground">17</span>{" "}
              дней акции
            </span>
          </div>
        </div>

        {/* Right: accent block */}
        <aside className="relative hidden md:col-span-5 md:block">
          <div className="relative h-full min-h-[360px]">
            <div className="absolute right-0 top-6 h-[78%] w-[78%] bg-accent" aria-hidden />
            <div className="absolute bottom-0 left-0 h-[60%] w-[72%] border-2 border-foreground bg-background p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-foreground/55">
                Касса театра
              </div>
              <a
                href="tel:+74956501896"
                className="mt-2 block font-display text-3xl font-bold leading-none hover:text-primary"
              >
                +7 495 650-18-96
              </a>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-foreground/55">
                Действует на сайте и в кассе
              </div>
              <div className="mt-6 inline-flex items-center gap-2 border-t-2 border-foreground pt-4 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 bg-primary" />
                со 2 по 18 июня 2026
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
