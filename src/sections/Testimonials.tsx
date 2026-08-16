import { Quote, Star } from "lucide-react";
import { testimonials } from "../lib/content";
import { avatar } from "../lib/images";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Отзиви"
            title="Какво споделят нашите гости"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-cream p-8 shadow-sm ring-1 ring-espresso/5">
                <Quote className="text-terracotta/40" size={32} />
                <div className="mt-4 flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-espresso/75">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={avatar(t.avatar)}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display text-sm font-medium text-espresso">{t.name}</div>
                    <div className="text-xs text-espresso/55">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
