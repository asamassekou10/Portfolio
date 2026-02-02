"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Command, 
  Search, 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  ExternalLink 
} from "lucide-react";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  shortcut?: string[];
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Toggle function
  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands: CommandItem[] = [
    {
      id: "home",
      label: "Go to Home",
      icon: Home,
      action: () => {
        router.push("/");
        setIsOpen(false);
      },
    },
    {
      id: "projects",
      label: "View Projects",
      icon: Briefcase,
      action: () => {
        router.push("/#projects");
        setIsOpen(false);
      },
    },
    {
      id: "experience",
      label: "View Experience",
      icon: User,
      action: () => {
        router.push("/#experience");
        setIsOpen(false);
      },
    },
    {
      id: "resume",
      label: "View Resume",
      icon: FileText,
      action: () => {
        router.push("/resume");
        setIsOpen(false);
      },
    },
    {
      id: "contact",
      label: "Contact Me",
      icon: Mail,
      action: () => {
        router.push("/#contact");
        setIsOpen(false);
      },
    },
    {
      id: "github",
      label: "Open GitHub",
      icon: Github,
      action: () => {
        window.open("https://github.com/asamassekou10", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      icon: Linkedin,
      action: () => {
        window.open("https://linkedin.com/in/asamassekou", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  // Handle arrow keys for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl overflow-hidden border-2 border-white bg-black shadow-[0_0_50px_-12px_rgba(255,255,255,0.2)]"
          >
            <div className="flex items-center border-b border-white/20 px-4 py-4">
              <Command className="mr-3 h-5 w-5 text-white/50" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-lg font-mono text-white outline-none placeholder:text-white/30"
              />
              <div className="hidden md:flex items-center gap-1 text-xs text-white/40 font-mono border border-white/20 px-2 py-1 rounded">
                <span>ESC</span>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-white/40 font-mono">
                  No commands found.
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredCommands.map((command, index) => (
                    <button
                      key={command.id}
                      onClick={command.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left font-mono text-sm transition-colors ${
                        index === selectedIndex
                          ? "bg-white text-black"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <command.icon size={16} />
                        <span>{command.label}</span>
                      </div>
                      {index === selectedIndex && (
                        <span className="text-xs opacity-50">↵ Enter</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/20 bg-white/5 px-4 py-2">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40">
                <span>Command Palette</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
