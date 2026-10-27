import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CertCard from "@/components/CertCard";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = { title: "Sertifikasi" };

export default function SertifikasiPage() {
  return (
    <section className="safe-x mx-auto max-w-6xl py-16 md:py-24">
      <SectionTitle
        eyebrow="Sertifikasi"
        title="Sertifikat & pelatihan"
        description="Bukti kompetensi di bidang jaringan, keamanan siber, basis data, dan pelatihan profesional lainnya."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <CertCard key={c.file} cert={c} />
        ))}
      </div>
    </section>
  );
}
