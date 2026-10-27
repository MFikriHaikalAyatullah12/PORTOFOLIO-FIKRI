import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "Keahlian" };

export default function SkillPage() {
  return (
    <section className="safe-x mx-auto max-w-6xl py-16 md:py-24">
      <SectionTitle
        eyebrow="Keahlian"
        title="Keahlian & teknologi"
        description="Dikelompokkan berdasarkan bidang yang saya tekuni."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div key={group.name} className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="font-display text-sm font-bold text-accent">0{i + 1}</p>
            <h2 className="mt-2 text-xl font-bold">{group.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <SkillBadge key={s} name={s} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
