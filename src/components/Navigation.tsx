"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";

const navItems = [
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white bg-black">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tighter hover:bg-white hover:text-black px-2 transition-colors"
        >
          ~/ALHASSANE_SAMASSEKOU
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2 mr-4 text-xs text-white/50 border border-white/20 px-2 py-1 rounded">
            <Command size={12} />
            <span>CMD+K</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:bg-white hover:text-black px-3 py-1 transition-colors"
            >
              [{item.label}]
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hover:bg-white hover:text-black p-1 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-white md:hidden bg-black"
          >
            <div className="flex flex-col border-b border-white">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/20 py-4 px-6 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                >
                  {">"} {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
