interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-block font-sans text-sm font-semibold tracking-[0.2em] uppercase ${
          light ? "text-gold" : "text-terracotta"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-tight ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-cream/70" : "text-espresso/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
