import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CertCard from "@/components/CertCard";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = { title: "Certifications" };

export default function SertifikasiPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <SectionTitle
        eyebrow="Certifications"
        title="Certificates & training"
        description="Proof of competence in networking, cybersecurity, databases, and other professional training."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <CertCard key={c.file} cert={c} />
        ))}
      </div>
    </section>
  );
}
