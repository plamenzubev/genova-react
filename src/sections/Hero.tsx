import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { images } from "../lib/images";
import { stats } from "../lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Топла атмосфера в ресторант Osteria Nova"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-2 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm font-medium text-cream/80">4.9 от 850+ отзива</span>
          </div>

          <h1 className="font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl md:text-6xl">
            Вкус, който помниш дълго след последната хапка
          </h1>

          <p className="mt-6 max-w-lg text-lg text-cream/75">
            Автентична италианска кухня в сърцето на града — пресни съставки, домашно приготвена
            паста и рецепти, предавани с поколения.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
            >
              Резервирай маса
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Разгледай менюто
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-cream/15 pt-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-medium text-cream sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-cream/60 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
