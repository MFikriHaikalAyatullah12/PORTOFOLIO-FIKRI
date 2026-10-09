import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceItem from "@/components/ExperienceItem";
import { projects } from "@/data/projects";
import { experience, organizations } from "@/data/experience";

export const metadata: Metadata = { title: "Projects & Experience" };

export default function ProjectPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <SectionTitle
          eyebrow="Projects"
          title="Projects I have worked on"
          description="A collection of web applications and data analysis work, from institutional information systems to machine learning models."
        />
        <ProjectGrid projects={projects} />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <SectionTitle as="h2" eyebrow="Experience" title="Work experience" description="Professional journey and the roles I have taken on." />
          <ol className="max-w-3xl">
            {experience.map((item, i) => (
              <ExperienceItem key={item.role + item.organization} item={item} isLast={i === experience.length - 1} />
            ))}
          </ol>

          <div className="mt-6 border-t border-border pt-16">
            <SectionTitle as="h2" eyebrow="Organizations" title="Organizational experience" description="Leadership and community involvement outside the workplace." />
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
