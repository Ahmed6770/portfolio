import movieValueImg from "../../../assets/Movie-Vault-project.webp";
import furnitureImg from "../../../assets/furniture-project.webp";
import scholarshipImg from "../../../assets/scholarship-Miner-project.webp";

export type Project = {
  image: string;
  title: string;
  description: string;
  tools: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projectsData: Project[] = [
  {
    image: movieValueImg,
    title: "Movie Vault",
    description:
      "A movie discovery app where users can search films, check cast details, and save a personal watchlist. Built with TypeScript and TanStack Query to handle API caching and fast search smoothly.",
    tools: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
    ],
    liveUrl: "https://movie-vault-nine-puce.vercel.app/",
    githubUrl: "https://github.com/Ahmed6770/Movie-Vault",
  },
  {
    image: furnitureImg,
    title: "LOOMA Store",
    description:
      "An e-commerce store for furniture with category filtering, product detail pages, and a full shopping cart and checkout flow managed with React Context.",
    tools: ["React", "React Router", "Tailwind CSS", "Context API"],
    liveUrl: "https://furniture-store-delta-two.vercel.app/",
    githubUrl: "https://github.com/Ahmed6770/Furniture-Store",
  },
  {
    image: scholarshipImg,
    title: "Scholarship Miner",
    description:
      "A platform that helps students search and filter scholarships by different criteria, bookmark opportunities, and go straight to application links.",
    tools: ["React", "React Router", "Tailwind CSS", "Context API"],
    liveUrl: "https://scholarship-miner.vercel.app/",
    githubUrl: "https://github.com/Ahmed6770/Scholarship-Miner",
  },
];
