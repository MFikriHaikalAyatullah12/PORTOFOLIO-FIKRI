import type { Education } from "./types";

export const profile = {
  name: "M. Fikri Haikal Ayatullah",
  shortName: "M. Fikri Haikal Ayatullah",
  tagline: "Informatics Engineering · Web Developer · Data Analysis · Office Administration · Finance · NLP · Data Science",
  location: "Makassar, South Sulawesi",
  photo: "/profile.jpg",
  cv: "/cv.pdf",
  email: "mfikrihaikalayatullah154@gmail.com",
  github: "https://github.com/MFikriHaikalAyatullah12",
  linkedin: "https://www.linkedin.com/in/m-fikri-haikal-ayatullah/",
  summary:
    "Informatics Engineering graduate specializing in web development, with hands-on experience building responsive full-stack applications using HTML, CSS, JavaScript, TypeScript, Node.js, SQL, Python, and Next.js, supported by practical skills in data processing, data analysis, data science, and AI.",
  // Use **text** for bold emphasis.
  about:
    "Informatics Engineering graduate, specializing in web development, with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, TypeScript, Node.js, SQL, Python, and Next.js. Experienced in full-stack web development, including front-end interface development, back-end implementation, database integration, and functional testing. Also equipped with practical skills in data processing, data analysis, data science, and AI, supported by experience in government data processing and administrative workflows. Detail-oriented, adaptable, and committed to developing reliable and user-focused technology solutions.",
  focusAreas: [
    {
      title: "Full-Stack Web Development",
      description: "Responsive web applications with Next.js, React, TypeScript, Node.js, PHP, and SQL — from design through functional testing.",
    },
    {
      title: "Data Engineering & Analytics",
      description: "Data collection, cleansing, analysis, and insight generation with Python, SQL, and PostgreSQL.",
    },
    {
      title: "Administration & Finance",
      description: "Government data processing, document management, archiving, and finance workflows with Microsoft Office.",
    },
    {
      title: "NLP, AI & Data Science",
      description: "Natural language processing, machine learning, and deep learning applied to real-world decisions.",
    },
  ],
};

export const education: Education[] = [
  {
    institution: "Muhammadiyah University of Makassar",
    degree: "Bachelor of Informatics Engineering — GPA 3.73 / 4.00",
    period: "2022 – 2026",
  },
];
