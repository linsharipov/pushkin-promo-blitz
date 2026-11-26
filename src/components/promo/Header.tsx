import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#shows", label: "Афиша" },
  { href: "#how", label: "Как получить" },
  { href: "#faq", label: "F.A.Q." },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <span>Тверской бульвар, 23</span>
            <a
              href="tel:+74956941289"
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Phone className="h-3 w-3" /> +7 495 694-12-89
            </a>
          </div>
          <span className="bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
            Чёрная пятница · до −50%
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="shrink-0">
          <Logo invert />
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

        <a
          href="#shows"
          className="ml-auto inline-flex items-center bg-gold px-4 py-2.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5 lg:ml-0 sm:px-5 sm:text-base"
        >
          Купить билеты
        </a>
      </div>
    </header>
  );
}
