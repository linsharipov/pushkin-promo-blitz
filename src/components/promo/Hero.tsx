import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowDown, Phone } from "lucide-react";

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
    <section id="top" className="relative px-3 pt-6 sm:px-4 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        {/* Tag row */}
        <div className="flex flex-wrap items-center gap-2 px-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tile-yellow)]" />
            Летняя акция · 2–18 июня
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-3.5 py-1.5 text-xs font-medium text-foreground/70">
            12 спектаклей · скидки до 50%
          </span>
        </div>

        {/* Editorial headline */}
        <h1 className="mt-6 text-[15vw] leading-[0.95] tracking-[-0.03em] sm:text-[clamp(4rem,11vw,10rem)]">
          <span className="font-display">Лето так </span>
          <span className="font-display italic">горячо</span>
          <span className="font-display">,</span>
          <br />
          <span className="font-display">театру&nbsp;— </span>
          <span className="relative inline-block font-display italic">
            <span
              aria-hidden
              className="absolute -inset-x-2 inset-y-3 -z-10 rounded-[2rem]"
              style={{ background: "var(--tile-yellow)" }}
            />
            жарче
          </span>
          <span className="font-display">.</span>
        </h1>

        {/* 3-tile WaxyWeb-style row */}
        <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-3">
          {/* Tile 1: copy + CTA */}
          <div
            className="md:col-span-2 rounded-[2rem] p-6 sm:p-8"
            style={{ background: "var(--tile-pink)" }}
          >
            <p className="max-w-xl text-lg leading-snug text-foreground/85 sm:text-xl">
              Лето в&nbsp;Театре имени Пушкина — со&nbsp;скидкой до&nbsp;
              <span className="font-display italic">50%</span>. Выбирайте спектакль
              и&nbsp;применяйте промокод{" "}
              <span className="font-display italic">ЖАРА</span> при покупке билета.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#shows"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Купить билет со скидкой
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="group inline-flex items-center gap-3 rounded-full border border-foreground/15 bg-background px-5 py-2.5 transition-transform hover:-translate-y-0.5"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/55">
                  Промокод
                </span>
                <span className="font-display text-2xl italic">{code}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 text-xs font-medium uppercase tracking-widest text-foreground/55">
              <span>
                <span className="font-display text-2xl normal-case tracking-normal text-foreground">
                  12
                </span>{" "}
                спектаклей
              </span>
              <span>
                <span className="font-display text-2xl italic normal-case tracking-normal text-foreground">
                  −50%
                </span>{" "}
                максимум
              </span>
              <span>
                <span className="font-display text-2xl normal-case tracking-normal text-foreground">
                  17
                </span>{" "}
                дней акции
              </span>
            </div>
          </div>

          {/* Tile 2: box office */}
          <div
            className="flex flex-col justify-between rounded-[2rem] p-6 sm:p-8"
            style={{ background: "var(--tile-green)" }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-medium text-background">
                <Phone className="h-3 w-3" /> Касса театра
              </div>
              <a
                href="tel:+74956941289"
                className="mt-6 block font-display text-4xl leading-none tracking-tight hover:opacity-70 sm:text-5xl"
              >
                +7 495
                <br />
                <span className="italic">694-12-89</span>
              </a>
            </div>
            <div className="mt-8 text-xs font-medium uppercase tracking-widest text-foreground/65">
              Действует на сайте и в кассе
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
