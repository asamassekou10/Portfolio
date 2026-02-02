"use client";

import { useState, useEffect } from "react";
import { GitBranch, Wifi, Check, AlertCircle } from "lucide-react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-white/20 bg-black text-[10px] font-mono text-white/60 hidden md:block">
      <div className="flex items-center justify-between px-4 py-1.5">
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/asamassekou10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GitBranch size={12} />
            <span>main*</span>
          </a>
          
          <div className="flex items-center gap-1.5">
            <AlertCircle size={12} className="text-white/40" />
            <span>0 errors</span>
            <span className="text-white/40">0 warnings</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
           <div className="flex items-center gap-1.5">
            <span>Ln 1, Col 1</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>UTF-8</span>
          </div>
          
           <div className="flex items-center gap-1.5">
            <span>TypeScript React</span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-help">
            <Check size={12} />
            <span>Prettier</span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Wifi size={12} />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
