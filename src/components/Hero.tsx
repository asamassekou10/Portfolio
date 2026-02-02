"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr] md:items-center">
        {/* Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
          >
            <span className="flex h-3 w-3 animate-pulse bg-white" />
            System Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-8xl"
          >
            Alhassane
            <br />
            <span className="text-white text-transparent">Samassekou</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 space-y-4 border-l-2 border-white pl-6"
          >
            <p className="max-w-lg text-lg leading-relaxed text-white">
              AI Developer & SaaS Builder. I architect intelligent systems and
              scalable web applications.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm uppercase tracking-wider text-white/70">
              <div>&gt; Next.js Expert</div>
              <div>&gt; Python / AI</div>
              <div>&gt; AWS Certified</div>
              <div>&gt; Ethical Hacker</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 border-2 border-white bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#333]"
            >
              <Terminal size={16} />
              View Projects
            </a>
            <a
              href="/resume"
              className="group relative flex items-center gap-2 border-2 border-white bg-black px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mx-auto aspect-square w-full max-w-sm md:mx-0"
        >
          {/* Decorative elements around image */}
          <div className="absolute -top-4 -left-4 h-full w-full border-2 border-white/20" />
          <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-white/20" />
          
          <div className="relative h-full w-full border-2 border-white bg-neutral-900">
            <Image
              src="/new profile picture.jpg"
              alt="Alhassane Samassekou"
              fill
              className="object-cover grayscale filter contrast-125 hover:grayscale-0 transition-all duration-500"
              priority
            />
            {/* Scanline effect */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="h-12 w-[1px] bg-white/20">
          <div className="h-full w-full animate-slide-down bg-white" />
        </div>
      </div>
    </section>
  );
}
