import type { Experience } from "@/data/types";

export default function ExperienceItem({ item, isLast }: { item: Experience; isLast: boolean }) {
  return (
    <li className="relative pl-8">
      <span aria-hidden className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      {!isLast && <span aria-hidden className="absolute left-[5px] top-6 h-[calc(100%-8px)] w-px bg-border" />}
      <div className="pb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.period}</p>
        <h3 className="mt-1 text-lg font-bold">{item.role}</h3>
        <p className="text-sm text-muted-foreground">{item.organization}</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
