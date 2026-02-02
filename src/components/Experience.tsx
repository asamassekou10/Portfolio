"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  icon: "education" | "work";
  title: string;
  organization: string;
  period: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    icon: "work",
    title: "Freelance Full-Stack Developer",
    organization: "Self-Employed (Remote)",
    period: "Jan 2025 - Present",
    description:
      "Building full-stack web applications, SaaS platforms, and AI-powered tools for clients. Projects include GKS Logistics (digital tracking system) and Optimum Wp7 (corporate website).",
  },
  {
    icon: "education",
    title: "Bachelor of Technology in Artificial Intelligence",
    organization: "Houston Community College",
    period: "2023 - 2027",
    description:
      "Focused on machine learning, data science, deep learning, and NLP. Applied AI techniques to real-world projects including computer vision and predictive modeling.",
  },
  {
    icon: "education",
    title: "Learning AI Through Visualization",
    organization: "Columbia University",
    period: "2025",
    description:
      "Certification covering AI and machine learning concepts through visualization techniques, enhancing understanding of artificial intelligence fundamentals.",
  },
  {
    icon: "education",
    title: "AWS Academy MLU - Application of Deep Learning to Text and Images",
    organization: "Amazon Web Services (AWS)",
    period: "2025",
    description:
      "AWS Academy certification focused on applying deep learning techniques to text and image processing using AWS cloud services and ML tools.",
  },
  {
    icon: "education",
    title: "Ethical Hacker",
    organization: "Cisco",
    period: "2025",
    description:
      "Professional certification in ethical hacking covering penetration testing, network security, vulnerability assessment, and cybersecurity best practices.",
  },
  {
    icon: "education",
    title: "Google Data Analytics Certificate",
    organization: "Google / Coursera",
    period: "2024",
    description:
      "Professional certification covering data cleaning, analysis, visualization, and storytelling with data using SQL, R, and Tableau.",
  },
  {
    icon: "work",
    title: "Web Developer Intern",
    organization: "L'Indicible Company (France)",
    period: "Apr 2022 - Sep 2022",
    description:
      "Translated client requirements into functional specifications for dynamic websites. Conducted QA testing and collaborated with the dev team to debug code and optimize application performance.",
  },
  {
    icon: "education",
    title: "Associate in Computer Science",
    organization: "University Paris 8 (France)",
    period: "2020 - 2022",
    description:
      "Developed a comprehensive foundation in core computer science principles including algorithms, data structures, programming, and software engineering.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-accent uppercase">
            Background
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-[19px] h-full w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon dot */}
              <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-black md:left-1/2 md:-translate-x-1/2">
                {item.icon === "education" ? (
                  <GraduationCap size={16} className="text-accent" />
                ) : (
                  <Briefcase size={16} className="text-accent" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:pl-16 md:text-left"
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest text-accent/70 uppercase">
                  {item.period}
                </span>
                <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/50">
                  {item.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
