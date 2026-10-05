import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceItem from "@/components/ExperienceItem";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

export const metadata: Metadata = { title: "Project & Experience" };

export default function ProjectPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <SectionTitle
          eyebrow="Project"
          title="Project yang pernah saya kerjakan"
          description="Kumpulan aplikasi web dan analisis data, dari sistem informasi instansi hingga model machine learning."
        />
        <ProjectGrid projects={projects} />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <SectionTitle as="h2" eyebrow="Experience" title="Pengalaman" description="Perjalanan profesional dan peran yang pernah saya jalani." />
          <ol className="max-w-3xl">
            {experience.map((item, i) => (
              <ExperienceItem key={item.role + item.organization} item={item} isLast={i === experience.length - 1} />
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
