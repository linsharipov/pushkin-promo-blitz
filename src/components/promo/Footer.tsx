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
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo className="text-xl" />
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon href="#" label="ВКонтакте">
              <span className="text-xs font-bold">VK</span>
            </SocialIcon>
            <SocialIcon href="#" label="Telegram">
              <Send className="h-4 w-4" />
            </SocialIcon>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-footer-muted">
            Государственное бюджетное учреждение культуры города Москвы «Московский драматический
            театр имени А.С. Пушкина» (ГБУК г. Москвы «МДТ им. А.С. Пушкина»)
          </p>
          <p className="mt-4 text-sm leading-relaxed text-footer-muted">
            Фактический и юридический адрес: 123104, г. Москва, Тверской б-р, д. 23, стр. 1
          </p>
          <p className="mt-4 text-sm text-footer-muted">ИНН 7703035553 / ОГРН 1027739449341</p>
        </div>

        <nav className="md:col-span-3">
          <ul className="space-y-4">
            {nav1.map((item) => (
              <li key={item}>
                <a href="#" className="text-base transition-opacity hover:opacity-70">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-3">
          <ul className="space-y-4">
            {nav2.map((item) => (
              <li key={item}>
                <a href="#" className="text-base leading-snug transition-opacity hover:opacity-70">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <div className="text-sm font-semibold uppercase tracking-wider text-footer-muted">
            Касса
          </div>
          <a href="tel:+74956501896" className="mt-1 block text-base hover:opacity-70">
            +7 495 650-18-96
          </a>
          <div className="mt-6 text-base text-footer-muted">Тверской бульвар, 23</div>
          <a
            href="mailto:ticket@teatrpushkin.ru"
            className="mt-6 block text-base italic hover:opacity-70"
          >
            ticket@teatrpushkin.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
