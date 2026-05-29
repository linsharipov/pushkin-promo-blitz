import { Send } from "lucide-react";
import { Logo } from "./Logo";

const nav1 = ["Официальный сайт", "Афиша", "Спектакли", "Труппа"];
const nav2 = ["Оферта", "Контакты", "Политика конфиденциальности и обработки персональных данных"];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-footer-foreground text-footer transition-opacity hover:opacity-80"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="px-3 pb-3 pt-12 sm:px-4 sm:pb-4">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-footer p-8 text-footer-foreground sm:p-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="text-xl" invert />
            <h3 className="mt-8 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
              Увидимся <span className="italic">в&nbsp;театре</span>.
            </h3>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="#" label="ВКонтакте">
                <span className="text-xs font-bold">VK</span>
              </SocialIcon>
              <SocialIcon href="#" label="Telegram">
                <Send className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          <nav className="md:col-span-3">
            <div className="text-xs font-medium uppercase tracking-widest text-footer-muted">
              Театр
            </div>
            <ul className="mt-4 space-y-3">
              {nav1.map((item) => (
                <li key={item}>
                  <a href="#" className="text-base transition-opacity hover:opacity-70">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2">
            <div className="text-xs font-medium uppercase tracking-widest text-footer-muted">
              Документы
            </div>
            <ul className="mt-4 space-y-3">
              {nav2.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm leading-snug transition-opacity hover:opacity-70">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <div className="text-xs font-medium uppercase tracking-widest text-footer-muted">
              Касса
            </div>
            <a
              href="tel:+74956941289"
              className="mt-4 block font-display text-2xl leading-tight hover:opacity-70"
            >
              +7 495 <span className="italic">694-12-89</span>
            </a>
            <div className="mt-4 text-sm text-footer-muted">Тверской бульвар, 23</div>
            <a
              href="mailto:ticket@teatrpushkin.ru"
              className="mt-3 block text-sm italic hover:opacity-70"
            >
              ticket@teatrpushkin.ru
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-footer-foreground/10 pt-6 text-xs leading-relaxed text-footer-muted">
          ГБУК г. Москвы «МДТ им. А.С. Пушкина» · 123104, г. Москва, Тверской б-р, д. 23, стр. 1 ·
          ИНН 7703035553 / ОГРН 1027739449341
        </div>
      </div>
    </footer>
  );
}
