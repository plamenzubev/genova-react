import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#about", label: "За нас" },
  { href: "#menu", label: "Меню" },
  { href: "#gallery", label: "Галерия" },
  { href: "#testimonials", label: "Отзиви" },
  { href: "#contact", label: "Контакти" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-espresso/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-espresso text-sm font-bold">
            ON
          </span>
          Osteria Nova
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+35921234567"
            className="flex items-center gap-2 text-sm font-medium text-cream/80 hover:text-cream"
          >
            <Phone size={16} />
            +359 2 123 4567
          </a>
          <a
            href="#contact"
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Резервирай маса
          </a>
        </div>

        <button
          className="text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Отвори меню"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream/10 bg-espresso px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-cream/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-terracotta px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Резервирай маса
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
