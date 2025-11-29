// data.js
import Hero from "@/public/assets/hero-img.webp";
import Proyek1 from "@/public/assets/proyek1.webp";
import Proyek2 from "@/public/assets/proyek2.webp";
import Proyek3 from "@/public/assets/proyek3.webp";
import Proyek4 from "@/public/assets/proyek4.webp";
import Proyek5 from "@/public/assets/proyek5.webp";
import Proyek6 from "@/public/assets/proyek6.webp";

// Images
export const Image = {
  Hero,
  Proyek1,
  Proyek2,
  Proyek3,
  Proyek4,
  Proyek5,
  Proyek6,
};

// List Tools
export const listTools = [
  {
    id: 1,
    name: "Visual Studio Code",
    icon: "/assets/tools/vscode.png",
    ket: "Code Editor",
  },
  {
    id: 2,
    name: "React JS",
    icon: "/assets/tools/reactjs.png",
    ket: "Framework",
  },
  {
    id: 3,
    name: "Next JS",
    icon: "/assets/tools/nextjs.png",
    ket: "Framework",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: "/assets/tools/tailwind.png",
    ket: "Framework",
  },
  {
    id: 5,
    name: "Javascript",
    icon: "/assets/tools/js.png",
    ket: "Language",
  },
  {
    id: 6,
    name: "Node JS",
    icon: "/assets/tools/nodejs.png",
    ket: "Javascript Runtime",
  },
  {
    id: 7,
    name: "Github",
    icon: "/assets/tools/github.png",
    ket: "Repository",
  },
  {
    id: 8,
    name: "Canva",
    icon: "/assets/tools/canva.png",
    ket: "Design App",
  },
  {
    id: 9,
    name: "Figma",
    icon: "/assets/tools/figma.png",
    ket: "Design App",
  },
  {
    id: 10,
    name: "HTML",
    icon: "/assets/tools/html.png",
    ket: "Markup Language",
  },
  {
    id: 11,
    name: "CSS",
    icon: "/assets/tools/css.png",
    ket: "Style Sheet",
  },
  {
    id: 12,
    name: "Flutter",
    icon: "/assets/tools/flutter.png",
    ket: "Framework",
  },
];

// List Proyek
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Quiz",
    desk: "Sistem kuis interaktif berbasis web dengan tampilan sederhana dan mudah digunakan.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Warung Kenna App",
    desk: "plikasi kasir sederhana untuk membantu pencatatan transaksi di Warung Kenna.",
    tools: ["Flutter", "Friebase"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Chatbot Peyakit Jantung",
    desk: "Chatbot edukasi kesehatan jantung berbasis AI dengan Flask dan Python.",
    tools: ["Python", "Flask"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Aplikasi Dan Website Yudha Klinik",
    desk: "Sistem klinik terintegrasi berupa aplikasi mobile dan website untuk kebutuhan layanan pasien.",
    tools: ["Flutter", "Laravel", "TablePlus"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Yun's Collection",
    desk: "Website katalog produk untuk menampilkan koleksi fashion dari Yun's Collection.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Website Portfolio",
    desk: "Website portofolio pribadi untuk menampilkan proyek, skill, dan informasi diri.",
    tools: ["ReReact JS", "TailwindCSS"],
    dad: "700",
  },
];

export const journeyData = [
  {
    id: 1,
    logo: "/assets/journey/lepkom.png",
    title: "Partime at Lepkom as Asisten Lab",
  },
  {
    id: 2,
    logo: "/assets/journey/fundex.png",
    title: "Project - Base Virtual Intern: UI/UX - FundEx x Rakamin Academy",
  },
  {
    id: 3,
    logo: "/assets/journey/nuri.png",
    title: "Project - Base Virtual Intern: UI/UX - Nuri x Rakamin Academy",
  },
];

export default { Image, listTools, listProyek, journeyData };
