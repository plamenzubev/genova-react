import { Leaf } from "lucide-react";
import { images } from "../lib/images";
import { highlights } from "../lib/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={images.aboutInterior}
                alt="Интериор на Osteria Nova"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden aspect-square w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block md:w-52">
              <img
                src={images.aboutAccent}
                alt="Гост, наслаждаващ се на вечеря в Osteria Nova"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Нашата история"
              title="Три поколения италианска кулинарна традиция"
              description="Osteria Nova започна през 2010 г. като малко семейно бистро с една-единствена цел — да пренесе автентичния вкус на Италия у нас. Днес продължаваме да готвим по същите рецепти, с грижа за всяка подробност."
            />

            <ul className="mt-10 space-y-6">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive">
                    <Leaf size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-espresso">{item.title}</h3>
                    <p className="mt-1 text-sm text-espresso/65">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
