"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
      "AI-powered resume analysis platform that provides actionable feedback, keyword optimization, and ATS compatibility scoring for job seekers. Scaled to 100+ active users.",
    tags: ["Python", "Gemini API", "Flask", "React", "NLP", "SaaS"],
    focus: "AI-Driven Career Tech",
    image: "/Resume Analyzer Landing page.jpg",
  },
  {
    title: "VectorSearch Pro",
    url: "https://github.com/asamassekou10/ITAI-1378-FINAL_VectorSearch",
    description:
      "Multi-modal search engine using OpenAI CLIP and FAISS to enable text-to-image and image-to-image retrieval across 44,000+ fashion items with <0.3s latency.",
    tags: ["Python", "CLIP", "FAISS", "Computer Vision", "Deep Learning"],
    focus: "Computer Vision / AI Search",
  },
  {
    title: "GitSkins.com",
    url: "https://gitskins.com",
    description:
      "A platform for developers to customize their GitHub profiles with unique themes, badges, and visual enhancements for personal branding.",
    tags: ["Next.js", "GitHub API", "TypeScript", "Tailwind"],
    focus: "Developer Experience",
    image: "/gitskins showcase.jpg",
  },
  {
    title: "LootLook",
    url: "#",
    description:
      "Mobile app using computer vision to identify and price collectible items in real time through your phone camera.",
    tags: ["Computer Vision", "React Native", "TensorFlow", "Python"],
    focus: "Computer Vision / Mobile UX",
    image: "/Lootlook App Store Sreenshot 1.png",
  },
  {
    title: "X Post & Repost Cleaner",
    url: "#",
    description:
      "Browser extension that bulk deletes posts and reposts from X (Twitter) accounts. 149+ installs in the first month on the Chrome Web Store.",
    tags: ["Browser Extension", "JavaScript", "Automation", "DOM API"],
    focus: "Browser Automation",
    image: "/X Cleaner Banner.png",
  },
  {
    title: "Accounting Data Pro",
    url: "https://accounting-data-pro-2-1.onrender.com/",
    description:
      "Financial data visualization dashboard that transforms raw accounting data into interactive charts, reports, and insights for small businesses.",
    tags: ["Python", "Data Viz", "Pandas", "Flask", "Charts"],
    focus: "Financial Data Visualization",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target={project.url !== "#" ? "_blank" : undefined}
      rel={project.url !== "#" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.05]"
    >
      {project.image && (
        <div className="relative h-44 w-full overflow-hidden border-b border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <span className="font-mono text-[10px] tracking-widest text-accent/70 uppercase">
            {project.focus}
          </span>
          <ExternalLink
            size={14}
            className="text-white/20 transition-colors group-hover:text-accent"
          />
        </div>

        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-white/40">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/10 px-2 py-1 font-mono text-[10px] text-white/40 transition-all duration-300 group-hover:border-accent/30 group-hover:text-accent/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-accent uppercase">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Projects</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
