import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="border-b border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo className="text-xl sm:text-2xl" />
        <a
          href="#shows"
          className="hidden text-sm font-semibold uppercase tracking-widest text-foreground/70 transition-colors hover:text-primary sm:inline"
        >
          Афиша июня
        </a>
      </div>
    </header>
  );
}
