import { useState } from "react";
import { menuCategories } from "../lib/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Менюто ни"
            title="Ястия, приготвени с обич и традиция"
            description="Всяко ястие в менюто ни разказва история — от прясна паста до пица, изпечена на дърва."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-cream/15 bg-cream/5 p-1.5">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active === cat.id
                    ? "bg-terracotta text-cream"
                    : "text-cream/65 hover:text-cream"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl bg-cream/5 ring-1 ring-cream/10 transition hover:ring-terracotta/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-medium text-cream">{item.name}</h3>
                    <span className="whitespace-nowrap font-display text-lg font-medium text-gold">
                      {item.price} лв
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-cream/60">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
