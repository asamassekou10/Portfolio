"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GITHUB",
    href: "https://github.com/asamassekou10",
    icon: Github,
  },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/asamassekou",
    icon: Linkedin,
  },
  {
    label: "EMAIL",
    href: "mailto:alhassane.samassekou@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 border-t border-white/20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-white p-8 md:p-16 text-center bg-black"
        >
          <div className="mb-8 inline-block border border-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Communication Link
          </div>
          
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-6xl">
            Let's Build Something
          </h2>
          
          <p className="mx-auto mb-12 max-w-lg text-lg text-white/70">
            Open for freelance projects, collaborations, and full-time opportunities.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 border-2 border-white bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black md:w-auto"
              >
                <social.icon size={18} />
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <p className="font-mono text-xs uppercase text-white/40">
            © {new Date().getFullYear()} Alhassane Samassekou
          </p>
          <p className="font-mono text-xs uppercase text-white/40">
             End of Line_
          </p>
        </div>
      </div>
    </section>
  );
}
