import Image from "next/image";
import { Award, ExternalLink, FileText } from "lucide-react";
import type { Certificate } from "@/data/types";

export default function CertCard({ cert }: { cert: Certificate }) {
  const isPdf = cert.file.endsWith(".pdf");
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted">
        {cert.thumbnail ? (
          <Image
            src={cert.thumbnail}
            alt={`Certificate: ${cert.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            {isPdf ? <FileText size={40} strokeWidth={1.5} /> : <Award size={40} strokeWidth={1.5} />}
            <span className="text-xs font-semibold uppercase tracking-wider">{isPdf ? "PDF" : "Image"}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{cert.year}</p>
        <h3 className="text-lg font-bold leading-snug">{cert.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{cert.issuer}</p>
        <a
          data-print-hide
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-on-primary"
        >
          View Certificate <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}
