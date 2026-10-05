interface SectionTitleProps {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionTitle({ eyebrow, eyebrowClassName = "text-xs", title, description, align = "left", as: Heading = "h1" }: SectionTitleProps) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-2 font-semibold uppercase tracking-[0.2em] text-accent ${eyebrowClassName}`}>{eyebrow}</p>
      )}
      <Heading className="text-3xl font-bold sm:text-4xl">{title}</Heading>
      {description && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
