import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center gap-3 rounded-full border border-foreground/10 bg-background/85 px-3 py-2 backdrop-blur-md transition-shadow sm:px-4 ${
          scrolled ? "shadow-[0_10px_30px_-15px_oklch(0.16_0.01_60/0.35)]" : ""
        }`}
      >
        <a href="#top" className="ml-1 shrink-0">
          <Logo className="!h-8 sm:!h-9" />
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={copy}
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 lg:ml-0"
          aria-label="Скопировать промокод ЖАРА"
        >
          Промокод <span className="font-display italic">ЖАРА</span>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
