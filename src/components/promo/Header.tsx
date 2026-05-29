import { useEffect, useState } from "react";
import { Copy, Check, Phone } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "./Logo";

const links = [
  { href: "#shows", label: "Афиша" },
  { href: "#how", label: "Как получить" },
  { href: "#faq", label: "F.A.Q." },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("ЖАРА");
      setCopied(true);
      toast.success("Промокод ЖАРА скопирован");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Не удалось скопировать");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-border)]" : ""
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden border-b border-border bg-background text-xs text-foreground/70 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <div className="flex items-center gap-6">
            <span className="font-semibold uppercase tracking-widest text-foreground/55">
              Основная сцена
            </span>
            <span>Тверской бульвар, 23</span>
            <a
              href="tel:+74956941289"
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Phone className="h-3 w-3" /> +7 495 694-12-89
            </a>
          </div>
          <span className="bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
            Акция · 2–18 июня
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={copy}
          className="ml-auto inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5 lg:ml-0 sm:px-5 sm:text-base"
          aria-label="Скопировать промокод ЖАРА"
        >
          Промокод ЖАРА
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
