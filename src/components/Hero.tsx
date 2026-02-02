"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-accent uppercase">
              Building the future with AI
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mb-6 text-5xl leading-tight font-bold tracking-tight md:text-7xl lg:text-8xl"
          >
            AI Developer &<br />
            <span className="text-accent">SaaS Builder</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/50 md:mx-0 md:text-lg"
          >
            Associate in CS & AI / Google Data Analytics / AWS Deep Learning /
            Cisco Ethical Hacker certified. I design and build intelligent web
            apps, SaaS platforms, and developer tools that solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="border border-white/20 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-accent hover:bg-accent hover:text-white"
            >
              View Projects
            </a>
            <a
              href="/Resume_Alhassane_Samassekou.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-accent hover:text-accent"
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="shrink-0"
        >
          <div className="relative h-56 w-56 overflow-hidden border border-white/10 md:h-72 md:w-72">
            <Image
              src="/profile picture Alhassane.png"
              alt="Alhassane Samassekou"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#projects" aria-label="Scroll to projects">
          <ArrowDown size={20} className="animate-bounce text-white/30" />
        </a>
      </motion.div>
    </section>
  );
}
