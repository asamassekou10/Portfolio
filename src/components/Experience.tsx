"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  type: "EDU" | "WORK" | "CERT";
  title: string;
  organization: string;
  period: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    type: "WORK",
    title: "Freelance Full-Stack Developer",
    organization: "Self-Employed (Remote)",
    period: "2025 - Present",
    description:
      "Building full-stack web applications, SaaS platforms, and AI-powered tools for clients. Projects include GKS Logistics (digital tracking system) and Optimum Wp7 (corporate website).",
  },
  {
    type: "EDU",
    title: "Bachelor of Technology in Artificial Intelligence",
    organization: "Houston Community College",
    period: "2023 - 2027",
    description:
      "Focused on machine learning, data science, deep learning, and NLP. Applied AI techniques to real-world projects including computer vision and predictive modeling.",
  },
  {
    type: "CERT",
    title: "Learning AI Through Visualization",
    organization: "Columbia University",
    period: "2025",
    description:
      "Certification covering AI and machine learning concepts through visualization techniques.",
  },
  {
    type: "CERT",
    title: "AWS Academy MLU - Deep Learning",
    organization: "Amazon Web Services (AWS)",
    period: "2025",
    description:
      "Applied deep learning techniques to text and image processing using AWS cloud services.",
  },
  {
    type: "CERT",
    title: "Ethical Hacker",
    organization: "Cisco",
    period: "2025",
    description:
      "Professional certification in ethical hacking covering penetration testing and network security.",
  },
  {
    type: "CERT",
    title: "Google Data Analytics Certificate",
    organization: "Google / Coursera",
    period: "2024",
    description:
      "Data cleaning, analysis, visualization, and storytelling with data using SQL, R, and Tableau.",
  },
  {
    type: "WORK",
    title: "Web Developer Intern",
    organization: "L'Indicible Company (France)",
    period: "2022",
    description:
      "Translated client requirements into functional specifications. Conducted QA testing and debugged code.",
  },
  {
    type: "EDU",
    title: "Associate in Computer Science",
    organization: "University Paris 8 (France)",
    period: "2020 - 2022",
    description:
      "Foundation in core computer science principles including algorithms, data structures, and software engineering.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32 border-t border-white/20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="h-px flex-1 bg-white/20" />
            <span className="text-sm font-bold uppercase tracking-widest">System Logs</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <h2 className="text-center text-4xl font-black uppercase tracking-tighter md:text-5xl">
            Experience_Log
          </h2>
        </motion.div>

        <div className="font-mono text-sm">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group border-l border-white/20 pl-6 pb-12 last:pb-0 hover:border-white transition-colors relative"
            >
              <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 bg-black border border-white group-hover:bg-white transition-colors" />
              
              <div className="flex flex-col md:flex-row md:gap-8 mb-2">
                <div className="shrink-0 w-32 text-white/50 font-bold group-hover:text-white transition-colors">
                  [{item.period}]
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-xs font-bold border ${item.type === 'WORK' ? 'border-white text-white' : 'border-white/40 text-white/60'}`}>
                    {item.type}
                  </span>
                  <span className="text-white/50">::</span>
                  <h3 className="font-bold uppercase tracking-wide">{item.title}</h3>
                </div>
              </div>
              
              <div className="md:pl-40">
                <p className="text-white/70 mb-2">@{item.organization}</p>
                <p className="text-white/50 leading-relaxed max-w-2xl">
                  &gt; {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
