import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import RichText from "@/components/RichText";
import { education, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = { title: "Tentang Saya" };

export default function TentangPage() {
  const stats = [
    { value: `${projects.length}+`, label: "Project" },
    { value: `${certificates.length}`, label: "Sertifikasi" },
    { value: "4", label: "Bidang keahlian" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <SectionTitle eyebrow="Tentang Saya" title="Siapa saya dan apa yang saya kerjakan" />

      <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="animate-fade-up mx-auto w-full max-w-[280px] sm:max-w-xs lg:sticky lg:top-24">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-[1.5rem] border border-border bg-card/60" />
            <div aria-hidden className="absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-[1.5rem] border-b-4 border-l-4 border-accent" />
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
          <ul className="mt-8 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card shadow-sm">
            {stats.map((s) => (
              <li key={s.label} className="px-2 py-4 text-center">
                <p className="font-display text-2xl font-extrabold text-accent">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="mt-1 font-display font-semibold text-accent">{profile.tagline}</p>
          <RichText text={profile.about} className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg" />

          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <GraduationCap size={20} className="text-accent" aria-hidden /> Pendidikan
            </h3>
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/project" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-accent hover:text-on-accent">
              Lihat Project <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/kontak" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-semibold transition-colors duration-200 hover:border-primary">
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
