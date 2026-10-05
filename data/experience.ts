import type { Experience } from "./types";

// Sesuaikan nama instansi, periode, dan poin dengan CV.
export const experience: Experience[] = [
  {
    role: "Frontend Developer (Project-based)",
    organization: "Proyek kampus & klien lokal",
    period: "2023 – Sekarang",
    highlights: [
      "Membangun antarmuka NAVI-MU, SIPLAG, dan SIKEU dengan Next.js, TypeScript, dan Tailwind CSS.",
      "Merancang alur UI/UX dari wireframe hingga komponen siap pakai yang responsif.",
      "Mengintegrasikan model machine learning ke dashboard web (prediksi stok obat).",
    ],
  },
  {
    role: "Staf Administrasi & Pengolahan Data Keuangan",
    organization: "Dinas Perindustrian dan Perdagangan Prov. Sulawesi Selatan",
    period: "2025",
    highlights: [
      "Mendukung operasional perkantoran pemerintahan: pengarsipan, surat-menyurat, dan rekapitulasi data.",
      "Mengelola pembukuan dan pemrosesan data keuangan berbasis Excel secara akurat dan tepat waktu.",
      "Menyusun laporan ringkas yang memudahkan pengambilan keputusan pimpinan.",
    ],
  },
];
