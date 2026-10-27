import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceItem from "@/components/ExperienceItem";
import { projects } from "@/data/projects";
import { experience, organizations } from "@/data/experience";

export const metadata: Metadata = { title: "Proyek & Pengalaman" };

export default function ProjectPage() {
  return (
    <>
      <section className="safe-x mx-auto max-w-6xl py-16 md:py-24">
        <SectionTitle
          eyebrow="Proyek"
          title="Proyek yang pernah saya kerjakan"
          description="Kumpulan aplikasi web dan karya analisis data, dari sistem informasi institusi hingga model machine learning."
        />
        <ProjectGrid projects={projects} />
      </section>

      <section className="border-t border-border bg-card">
        <div className="safe-x mx-auto max-w-6xl py-16 md:py-24">
          <SectionTitle as="h2" eyebrow="Pengalaman" title="Pengalaman kerja" description="Perjalanan profesional dan peran yang pernah saya jalani." />
          <ol className="max-w-3xl">
            {experience.map((item, i) => (
              <ExperienceItem key={item.role + item.organization} item={item} isLast={i === experience.length - 1} />
            ))}
          </ol>

          <div className="mt-6 border-t border-border pt-16">
            <SectionTitle as="h2" eyebrow="Organisasi" title="Pengalaman organisasi" description="Kepemimpinan dan keterlibatan komunitas di luar dunia kerja." />
            <ol className="max-w-3xl">
              {organizations.map((item, i) => (
                <ExperienceItem key={item.role + item.organization} item={item} isLast={i === organizations.length - 1} />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
