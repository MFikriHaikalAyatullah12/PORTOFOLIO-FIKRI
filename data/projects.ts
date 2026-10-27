import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "navi-mu",
    title: "NAVI-MU — Navigasi Indoor Cerdas",
    description:
      "Sistem navigasi dalam gedung untuk RSIA Sitti Khadijah Muhammadiyah Makassar: peta ruangan real-time, navigasi antar lantai, dan mode 2D/3D untuk pasien, keluarga, dan staf.",
    image: "/projects/navi-mu.png",
    category: "Web",
    tags: ["Next.js", "TypeScript", "UI/UX", "Peta Interaktif"],
  },
  {
    slug: "siplag",
    title: "SIPLAG — Pengecekan Plagiasi Kampus",
    description:
      "Layanan resmi pengecekan plagiasi skripsi dan jurnal di Unismuh Makassar dengan antrean transparan, integrasi Turnitin, serta skor dan laporan otomatis.",
    image: "/projects/plagiasi.jpg",
    category: "Web",
    tags: ["Web App", "Autentikasi", "Dashboard", "UI/UX"],
  },
  {
    slug: "sikeu",
    title: "SIKEU — Sistem Informasi Keuangan",
    description:
      "Aplikasi manajemen keuangan untuk pencatatan transaksi, rekapitulasi, dan pelaporan, menggantikan pembukuan manual berbasis Excel.",
    image: "/projects/sikeu.png",
    category: "Web",
    tags: ["Web App", "Keuangan", "Pelaporan", "CRUD"],
  },
  {
    slug: "prediksi-stok-obat",
    title: "Prediksi Stok Obat Puskesmas",
    description:
      "Dashboard prediksi kebutuhan stok obat untuk UPT Puskesmas Sukamaju menggunakan model Regresi Linear dan Moving Average, lengkap dengan evaluasi MAE/MSE/RMSE dan proyeksi 2 tahun.",
    image: "/projects/deteksi-stok-obat.jpg",
    category: "Web",
    tags: ["Machine Learning", "Python", "Dashboard", "Forecasting"],
  },
  {
    slug: "info-loker",
    title: "Info Loker — Pencarian Kerja Berbasis CV",
    description:
      "Unggah CV dan sistem otomatis mengekstrak keahlian, lalu mencocokkannya dengan lowongan dari puluhan portal karier sekaligus, dilengkapi filter kota dan mode kerja.",
    image: "/projects/kerjaan-sesuai-cv.jpg",
    category: "Web",
    tags: ["Python", "NLP", "Web Scraping", "Web App"],
  },
  {
    slug: "analisis-data-1",
    title: "Eksplorasi & Visualisasi Data",
    description:
      "Analisis data eksploratif untuk menemukan pola dan insight, divisualisasikan dalam grafik yang mudah dipahami pemangku kepentingan.",
    image: "/projects/data-analysis-1.png",
    category: "Analisis Data",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
  },
  {
    slug: "klasifikasi-umkm",
    title: "Klasifikasi Kategori Usaha UMKM",
    description:
      "Model klasifikasi multi-kelas (Makanan Olahan, Bengkel Kendaraan, Roti & Kue, Tekstil & Pakaian) dengan balanced accuracy 96,7%, dievaluasi melalui confusion matrix.",
    image: "/projects/data-analysis-2.png",
    category: "Analisis Data",
    tags: ["Machine Learning", "Scikit-learn", "Klasifikasi", "Evaluasi Model"],
  },
  {
    slug: "profil-fitur-dataset",
    title: "Profil Tipe Fitur Dataset",
    description:
      "Analisis distribusi tipe fitur (teks, kategorikal, numerik) sebagai dasar strategi preprocessing dan feature engineering.",
    image: "/projects/data-analysis-3.png",
    category: "Analisis Data",
    tags: ["Python", "Preprocessing", "Feature Engineering"],
  },
];
