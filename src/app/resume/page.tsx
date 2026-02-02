"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex flex-col h-screen">
      <div className="flex justify-between items-center mb-6">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/70 transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Return to System
        </Link>
        
        <a 
          href="/Resume_Alhassane_Samassekou.pdf" 
          download
          className="flex items-center gap-2 border border-white px-4 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full border-2 border-white/20 bg-neutral-900 overflow-hidden"
      >
        <iframe 
          src="/Resume_Alhassane_Samassekou.pdf" 
          className="w-full h-full"
          title="Resume"
        />
      </motion.div>
    </div>
  );
}
