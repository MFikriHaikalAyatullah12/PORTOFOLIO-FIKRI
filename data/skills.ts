import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    name: "Pemrograman & Pengembangan",
    description: "Membangun aplikasi web full-stack yang responsif, dari desain antarmuka hingga pengujian fungsional.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Next.js", "React", "Node.js", "Java", "Desain UI/UX"],
  },
  {
    name: "Rekayasa Data & Analitik",
    description: "Mengubah data mentah menjadi insight dengan basis data, machine learning, dan pemrosesan bahasa alami.",
    skills: ["Python", "SQL", "PostgreSQL", "Natural Language Processing", "Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
  {
    name: "Jaringan & Infrastruktur",
    description: "Menjaga jaringan dan infrastruktur tetap andal, dari konfigurasi hingga pemecahan masalah.",
    skills: ["Administrasi Jaringan", "Routing & Switching", "Manajemen Bandwidth", "NAT Firewall", "DHCP / DNS / NTP", "Wireless AP & Captive Portal", "Kabel LAN & Diagnostik", "Microsoft Excel"],
  },
  {
    name: "Soft Skills",
    description: "Bekerja efektif bersama orang lain dan memberikan hasil yang andal.",
    skills: ["Public Speaking", "Kepemimpinan", "Kerja Tim Lintas Fungsi", "Manajemen Waktu", "Berpikir Kritis", "Pemecahan Masalah", "Negosiasi & Komunikasi", "Presisi Tinggi"],
  },
];
