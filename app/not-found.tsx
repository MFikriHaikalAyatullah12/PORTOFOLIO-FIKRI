import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8">
      <p className="font-display text-7xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-muted-foreground">Tautan yang Anda buka mungkin salah atau sudah dipindahkan.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-accent hover:text-on-accent">
        <ArrowLeft size={16} aria-hidden /> Kembali ke Beranda
      </Link>
    </section>
  );
}
