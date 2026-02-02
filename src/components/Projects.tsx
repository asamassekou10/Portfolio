"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
  focus: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "ResumeAnalyzerAI.com",
    url: "https://resumeanalyzerai.com",
    description:
      "AI-powered resume analysis platform providing actionable feedback and ATS scoring. Scaled to 100+ active users.",
    tags: ["Python", "Gemini API", "Flask", "React", "NLP"],
    focus: "AI-Driven Career Tech",
    image: "/Resume Analyzer Landing page.jpg",
  },
  {
    title: "VectorSearch Pro",
    url: "https://github.com/asamassekou10/ITAI-1378-FINAL_VectorSearch",
    description:
      "Multi-modal search engine using OpenAI CLIP and FAISS for text-to-image retrieval across 44k+ items.",
    tags: ["Python", "CLIP", "FAISS", "CV", "Deep Learning"],
    focus: "Computer Vision / AI Search",
    image: "/vector search screenshot.jpg",
  },
  {
    title: "GitSkins.com",
    url: "https://gitskins.com",
    description:
      "Platform for customizing GitHub profiles with unique themes and visual enhancements.",
    tags: ["Next.js", "GitHub API", "TypeScript", "Tailwind"],
    focus: "Developer Experience",
    image: "/gitskins showcase.jpg",
  },
  {
    title: "LootLook",
    url: "https://lootlook.app",
    description:
      "Mobile app using computer vision to identify and price collectible items in real time.",
    tags: ["CV", "React Native", "TensorFlow", "Python"],
    focus: "Mobile AI",
    image: "/beta lootlook form.jpg",
  },
  {
    title: "X Post Cleaner",
    url: "https://chromewebstore.google.com/detail/x-twitter-posts-retweet-c/ciplgeiomelnanfacncbbodkjphhpodc?authuser=0&hl=en",
    description:
      "Browser extension to bulk delete posts. 149+ installs in the first month.",
    tags: ["Extension", "JS", "Automation", "DOM API"],
    focus: "Browser Automation",
    image: "/X Cleaner Banner.png",
  },
  {
    title: "Accounting Data Pro",
    url: "https://accounting-data-pro-2-1.onrender.com/",
    description:
      "Financial data visualization dashboard transforming raw data into interactive insights.",
    tags: ["Python", "Data Viz", "Pandas", "Flask"],
    focus: "Data Visualization",
    image: "/accounting data pro screenshot.jpg",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target={project.url !== "#" ? "_blank" : undefined}
      rel={project.url !== "#" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col border-2 border-white bg-black p-4 transition-all hover:bg-white hover:text-black"
    >
      <div className="mb-4 flex justify-between items-start">
        <span className="font-bold text-xs uppercase tracking-widest border border-white px-2 py-1 group-hover:border-black">
          {project.focus}
        </span>
        <ArrowUpRight className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <h3 className="mb-2 text-2xl font-black uppercase tracking-tighter">
        {project.title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed opacity-70 group-hover:opacity-100">
        {project.description}
      </p>

      {project.image && (
        <div className="relative mb-6 h-56 w-full overflow-hidden border-2 border-white/20 group-hover:border-black/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain bg-neutral-900 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:bg-transparent"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32 border-t border-white/20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
           <div className="flex items-center gap-4 mb-2">
            <span className="h-px flex-1 bg-white/20" />
            <span className="text-sm font-bold uppercase tracking-widest">Index / Work</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <h2 className="text-center text-4xl font-black uppercase tracking-tighter md:text-5xl">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
