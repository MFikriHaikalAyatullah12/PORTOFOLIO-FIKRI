"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Lihat gambar penuh: ${alt}`}
        className="group/img relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-muted"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.03]"
        />
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-md bg-background/90 text-foreground opacity-0 shadow backdrop-blur transition-opacity duration-200 group-hover/img:opacity-100">
          <Maximize2 size={16} aria-hidden />
        </span>
      </button>

      {/* Portal: the card has transform/overflow-hidden, which would trap a fixed overlay inside it. */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex h-dvh items-center justify-center bg-black/85 p-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
            >
              <X size={22} />
            </button>
            <div className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" priority />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
