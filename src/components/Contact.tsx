"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/asamassekou10",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/asamassekou",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:alhassane.samassekou@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-accent uppercase">
            Contact
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Get in Touch</h2>
          <p className="mb-12 text-base text-white/40">
            Interested in working together or have a project in mind? I am
            always open to discussing new opportunities, collaborations, and
            ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center border border-white/10 text-white/40 transition-all hover:border-accent/40 hover:text-accent"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-6xl border-t border-white/10 pt-8 text-center">
        <p className="font-mono text-xs text-white/20">
          &copy; {new Date().getFullYear()} / Built with Next.js, Tailwind CSS,
          and Framer Motion
        </p>
      </div>
    </section>
  );
}
