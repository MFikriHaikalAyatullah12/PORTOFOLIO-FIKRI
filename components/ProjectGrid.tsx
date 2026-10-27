"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project, ProjectCategory } from "@/data/types";

type Filter = "Semua" | ProjectCategory;
const filters: Filter[] = ["Semua", "Web", "Analisis Data"];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("Semua");
  const visible = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div data-print-hide role="tablist" aria-label="Filter proyek berdasarkan kategori" className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            type="button"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`min-h-11 shrink-0 whitespace-nowrap rounded-md border px-4 text-sm font-medium transition-colors duration-200 ${
              active === f
                ? "border-primary bg-primary text-on-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            {f}
            <span className="ml-2 text-xs opacity-70">
              {f === "Semua" ? projects.length : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
