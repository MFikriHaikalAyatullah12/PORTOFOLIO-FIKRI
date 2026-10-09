import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "navi-mu",
    title: "NAVI-MU — Smart Indoor Wayfinding",
    description:
      "Indoor navigation system for RSIA Sitti Khadijah Muhammadiyah Makassar: real-time room map, cross-floor navigation, and 2D/3D modes for patients, families, and staff.",
    image: "/projects/navi-mu.png",
    category: "Web",
    tags: ["Next.js", "TypeScript", "UI/UX", "Interactive Map"],
  },
  {
    slug: "siplag",
    title: "SIPLAG — Campus Plagiarism Checker",
    description:
      "Official plagiarism-check service for theses and journals at Unismuh Makassar with a transparent queue, Turnitin integration, and automatic scores and reports.",
    image: "/projects/plagiasi.jpg",
    category: "Web",
    tags: ["Web App", "Authentication", "Dashboard", "UI/UX"],
  },
  {
    slug: "sikeu",
    title: "SIKEU — Financial Information System",
    description:
      "Finance management application for recording transactions, recaps, and reporting, replacing manual Excel-based bookkeeping.",
    image: "/projects/sikeu.png",
    category: "Web",
    tags: ["Web App", "Finance", "Reporting", "CRUD"],
  },
  {
    slug: "prediksi-stok-obat",
    title: "Health Centre Drug Stock Forecasting",
    description:
      "Drug stock demand forecasting dashboard for UPT Puskesmas Sukamaju using Linear Regression and Moving Average models, complete with MAE/MSE/RMSE evaluation and a 2-year projection.",
    image: "/projects/deteksi-stok-obat.jpg",
    category: "Web",
    tags: ["Machine Learning", "Python", "Dashboard", "Forecasting"],
  },
  {
    slug: "info-loker",
    title: "Info Loker — CV-Based Job Search",
    description:
      "Upload a CV and the system automatically extracts skills, then matches them against job listings from dozens of career portals at once, with city and work-mode filters.",
    image: "/projects/kerjaan-sesuai-cv.jpg",
    category: "Web",
    tags: ["Python", "NLP", "Web Scraping", "Web App"],
  },
  {
    slug: "analisis-data-1",
    title: "Data Exploration & Visualization",
    description:
      "Exploratory data analysis to uncover patterns and insights, visualized in charts that are easy for stakeholders to understand.",
    image: "/projects/data-analysis-1.png",
    category: "Data Analysis",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
  },
  {
    slug: "klasifikasi-umkm",
    title: "SME Business Category Classification",
    description:
      "Multi-class classification model (Processed Food, Vehicle Repair, Bakery & Pastry, Textiles & Apparel) with 96.7% balanced accuracy, evaluated via confusion matrix.",
    image: "/projects/data-analysis-2.png",
    category: "Data Analysis",
    tags: ["Machine Learning", "Scikit-learn", "Classification", "Model Evaluation"],
  },
  {
    slug: "profil-fitur-dataset",
    title: "Dataset Feature Type Profiling",
    description:
      "Analysis of feature type distribution (text, categorical, numeric) as the basis for preprocessing and feature engineering strategy.",
    image: "/projects/data-analysis-3.png",
    category: "Data Analysis",
    tags: ["Python", "Preprocessing", "Feature Engineering"],
  },
];
