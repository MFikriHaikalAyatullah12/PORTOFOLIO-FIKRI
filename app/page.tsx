import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, GraduationCap, MapPin } from "lucide-react";
import { education, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import ProjectCard from "@/components/ProjectCard";
import RichText from "@/components/RichText";

export default function Home() {
  const featured = projects.slice(0, 3);
  // Hanya tampil di ekspor PDF, saat halaman Tentang digabung ke halaman ini.
  const stats = [
    { value: `${projects.length}+`, label: "Proyek" },
    { value: `${certificates.length}`, label: "Sertifikasi" },
    { value: "4", label: "Bidang keahlian" },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
        <div className="safe-x relative mx-auto grid max-w-6xl items-center gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:py-24">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <MapPin size={12} className="text-accent" aria-hidden /> {profile.location}
            </p>
            <h1 className="text-[2rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
              Halo, saya <span className="text-accent">{profile.name}</span>.
            </h1>
            <p className="mt-4 font-display text-base font-semibold text-muted-foreground sm:text-xl">{profile.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground print:hidden">{profile.summary}</p>
            <RichText text={profile.about} className="mt-5 hidden text-base leading-relaxed text-muted-foreground print:block" />
            <div className="mt-8 hidden print:block">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <GraduationCap size={20} className="text-accent" aria-hidden /> Pendidikan
              </h2>
              <ul className="mt-4 space-y-3">
                {education.map((e) => (
                  <li key={e.institution} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{e.period}</p>
                    <p className="mt-1 font-bold">{e.degree}</p>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div data-print-hide className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/project"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-accent hover:text-on-accent"
              >
                Lihat Proyek <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-semibold transition-colors duration-200 hover:border-primary"
              >
                <FileText size={16} aria-hidden /> Lihat CV
              </a>
            </div>
          </div>

          <div className="animate-fade-up mx-auto w-full max-w-[280px] sm:max-w-xs md:justify-self-end [animation-delay:120ms]">
            <div className="relative">
              <div aria-hidden className="absolute -inset-3 rounded-[1.5rem] border border-border bg-card/60" />
              <div aria-hidden className="absolute -right-3 -top-3 h-20 w-20 rounded-tr-[1.5rem] border-r-4 border-t-4 border-accent" />
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-xl ring-1 ring-border">
                <Image
                  src={profile.photo}
                  alt={`Foto ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 640px) 320px, 280px"
                  className="object-cover object-[50%_15%]"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm print:hidden">
              <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Terbuka untuk</p>
                <p className="text-sm font-bold">Kerja Penuh Waktu (Remote, On-site & Hybrid)</p>
              </div>
            </div>
            <ul className="mt-8 hidden grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card shadow-sm print:grid">
              {stats.map((s) => (
                <li key={s.label} className="px-2 py-4 text-center">
                  <p className="font-display text-2xl font-extrabold text-accent">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {profile.focusAreas.map((area, i) => (
            <div key={area.title} className="bg-card p-6 sm:p-8">
              <p className="font-display text-sm font-bold text-accent">0{i + 1}</p>
              <h2 className="mt-2 text-lg font-bold">{area.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-print-hide className="safe-x mx-auto max-w-6xl py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Proyek Unggulan</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Karya terbaru</h2>
          </div>
          <Link data-print-hide href="/project" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Semua proyek <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
