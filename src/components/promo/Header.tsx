import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "./Logo";

const links = [
  { href: "#shows", label: "Афиша" },
  { href: "#how", label: "Как получить" },
  { href: "#faq", label: "FAQ" },
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
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-foreground/10 bg-background/85 backdrop-blur"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-widest text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={copy}
          className="ml-auto inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-3 py-1.5 font-display text-sm font-bold tracking-wider transition-transform hover:-translate-y-0.5 md:ml-0 sm:px-4 sm:py-2 sm:text-base"
          aria-label="Скопировать промокод ЖАРА"
        >
          ЖАРА
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
