import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const links = [
  { href: "#about", label: "За нас" },
  { href: "#menu", label: "Меню" },
  { href: "#gallery", label: "Галерия" },
  { href: "#testimonials", label: "Отзиви" },
  { href: "#contact", label: "Резервация" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-2 pt-16 pb-8 text-cream/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-espresso text-sm font-bold">
                ON
              </span>
              Osteria Nova
            </a>
            <p className="mt-4 max-w-xs text-sm">
              Автентична италианска кухня, приготвена с обич, в сърцето на София от 2010 г.
            </p>
            <div className="mt-6 flex gap-3">
              {[InstagramIcon, FacebookIcon, TikTokIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/5 transition hover:bg-terracotta hover:text-cream"
                  aria-label="Социална мрежа"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
              Навигация
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
              Контакти
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>ул. „Виа Италия" 24, София</li>
              <li>+359 2 123 4567</li>
              <li>rezervacii@osterianova.bg</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
              Бюлетин
            </h4>
            <p className="mt-4 text-sm">Абонирайте се за новини и специални оферти.</p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Вашият имейл"
                className="w-full min-w-0 rounded-full border border-cream/15 bg-espresso px-4 py-2 text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-cream hover:bg-terracotta-dark"
              >
                ОК
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Osteria Nova. Всички права запазени.</p>
          <p>
            Дизайн и разработка от{" "}
            <a
              href="https://github.com/plamenzubev"
              target="_blank"
              rel="noreferrer"
              className="text-cream/90 underline decoration-terracotta underline-offset-4 hover:text-cream"
            >
              Пламен Зубев
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
