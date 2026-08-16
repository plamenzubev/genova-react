import { images } from "../lib/images";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Галерия"
            title="Момент от нашата кухня и трапезария"
            description="Разгледайте атмосферата, преди да резервирате своята маса при нас."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {images.gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.06}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`group overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-square sm:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt="Кадър от Osteria Nova"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
