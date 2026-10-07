import type { Education } from "./types";

export const profile = {
  name: "M. Fikri Haikal Ayatullah",
  shortName: "M. Fikri Haikal Ayatullah",
  tagline: "Frontend Developer · Data Analyst · Administrasi & Pengelola Keuangan · AI Enthusiast",
  location: "Makassar, Sulawesi Selatan",
  photo: "/profile.jpg",
  cv: "/cv.pdf",
  email: "mfikrihaikalayatullah154@gmail.com",
  github: "https://github.com/MFikriHaikalAyatullah12",
  linkedin: "https://www.linkedin.com/in/m-fikri-haikal-ayatullah",
  summary:
    "Lulusan Teknik Informatika dengan fokus Pengembangan Front-End dan Desain UI/UX. Membangun aplikasi web modern yang responsif dengan Next.js dan TypeScript, didukung kemampuan analisis data menggunakan Python dan SQL, serta pengalaman praktis dalam administrasi dan pemrosesan data keuangan.",
  // Gunakan **teks** untuk penekanan tebal.
  about:
    "Lulusan Teknik Informatika yang mengkhususkan diri dalam **Pengembangan Front-End dan Desain UI/UX**, dengan fondasi kuat dalam membangun aplikasi web modern dan responsif menggunakan **HTML, CSS, JavaScript, TypeScript, dan Next.js** dengan kompetensi analitis dalam Python, SQL, dan Machine Learning. Berorientasi pada detail, mudah beradaptasi, dan berkomitmen menghadirkan solusi digital yang efisien dan selaras dengan kebutuhan bisnis. **Dipadukan dengan keahlian praktis dalam manajemen administrasi dan pemrosesan data keuangan, termasuk pengalaman operasional perkantoran pemerintahan serta pembukuan berbasis Excel, yang memberikan pemahaman mendalam terhadap alur kerja bisnis.**",
  focusAreas: [
    {
      title: "Frontend Development",
      description: "Antarmuka web responsif dengan Next.js, TypeScript, dan Tailwind CSS.",
    },
    {
      title: "Data Analysis",
      description: "Eksplorasi, visualisasi, dan pemodelan data dengan Python dan SQL.",
    },
    {
      title: "Administrasi & Keuangan",
      description: "Pembukuan berbasis Excel dan operasional perkantoran pemerintahan.",
    },
    {
      title: "AI Enthusiast",
      description: "Menerapkan machine learning dan AI tools ke dalam solusi nyata.",
    },
  ],
};

export const education: Education[] = [
  {
    institution: "Universitas Muhammadiyah Makassar",
    degree: "S1 Teknik Informatika",
    period: "2021 – 2025",
  },
];
