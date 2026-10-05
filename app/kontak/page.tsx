import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import IconButton from "@/components/IconButton";
import GithubIcon from "@/components/GithubIcon";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Kontak" };

export default function KontakPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <SectionTitle
          align="center"
          eyebrow="Kontak"
          eyebrowClassName="text-sm"
          title="Mari terhubung"
          description="Terbuka untuk peluang kerja, magang, dan kolaborasi. Pilih salah satu kanal di bawah ini."
        />
        <div className="grid gap-4">
          <IconButton href={profile.github} icon={GithubIcon} label="GitHub" value={profile.github.replace("https://", "")} />
          <IconButton icon={Mail} label="Gmail" value={profile.email} />
        </div>
      </div>
    </section>
  );
}
