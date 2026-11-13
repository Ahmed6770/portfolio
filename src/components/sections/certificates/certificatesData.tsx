import type { ReactNode } from "react";
import { Landmark } from "lucide-react";
import { SiMeta } from "react-icons/si";
import metaCertImg from "@/assets/meta-certificate.png";

export type Certificate = {
  title: string;
  issuer: string;
  description: string;
  issuerIcon: ReactNode;
  status: "In Progress" | "Completed";
  image?: string;
};

export const certificatesData: Certificate[] = [
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta · Coursera · 9-Course Program",
    issuerIcon: <SiMeta size={14} className="text-blue-500" />,
    status: "Completed",
    description:
      "A professional program covering frontend development fundamentals and practical skills, including HTML, CSS, JavaScript, React, Bootstrap, version control, and building responsive web experiences.",
    image: metaCertImg,
  },
  {
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University · CS50x",
    issuerIcon: <Landmark size={14} className="text-subtextClass" />,
    status: "In Progress",
    description:
      "An introduction to computer science and programming, covering problem-solving, algorithms, data structures, and programming fundamentals.",
  },
];

