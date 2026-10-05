import { ExternalLink } from "lucide-react";
import GithubIcon from "./GithubIcon";
import ProjectImage from "./ProjectImage";
import type { Project } from "@/data/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <ProjectImage src={project.image} alt={`Tangkapan layar ${project.title}`} />
        <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-semibold backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
        {(project.demoUrl || project.repoUrl) && (
          <div className="mt-1 flex gap-3 text-sm font-medium">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                <ExternalLink size={14} /> Demo
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                <GithubIcon size={14} /> Repo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
