"use client";

import { motion } from "framer-motion";

const skills = {
  dependencies: {
    "next.js": "^14.0.0",
    "react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "python": "^3.11.0",
    "flask": "^3.0.0",
    "tensorflow": "^2.15.0",
    "pytorch": "^2.1.0",
    "openai-api": "^4.0.0",
    "aws-sdk": "^3.0.0"
  },
  devDependencies: {
    "git": "^2.40.0",
    "docker": "^24.0.0",
    "figma": "latest",
    "postgresql": "^16.0.0",
    "mongodb": "^6.0.0",
    "linux": "latest"
  }
};

export default function Skills() {
  return (
    <section className="px-6 py-20 border-t border-white/20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 bg-white/20" />
              <span className="text-sm font-bold uppercase tracking-widest">Tech Stack</span>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">
              Dependencies
            </h2>
            <p className="text-white/70 leading-relaxed max-w-md">
              My development environment is built on a robust foundation of modern frameworks and AI tools. 
              Always keeping dependencies up to date.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            <div className="relative border-2 border-white bg-black p-6 font-mono text-sm shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
              <div className="flex gap-2 mb-4 border-b border-white/20 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-white/30">package.json</span>
              </div>
              
              <div className="text-white/80 space-y-1">
                <span className="text-white">{`{`}</span>
                <div className="pl-4">
                  <span className="text-white">"dependencies"</span>: <span className="text-white">{`{`}</span>
                  {Object.entries(skills.dependencies).map(([key, value]) => (
                    <div key={key} className="pl-4 hover:bg-white/5 cursor-default">
                      <span className="text-white/70">"{key}"</span>: <span className="text-green-400">"{value}"</span>,
                    </div>
                  ))}
                  <div className="pl-4">
                    <span className="text-white/30">// ... more</span>
                  </div>
                  <span>{`},`}</span>
                </div>
                
                <div className="pl-4 mt-2">
                  <span className="text-white">"devDependencies"</span>: <span className="text-white">{`{`}</span>
                  {Object.entries(skills.devDependencies).map(([key, value]) => (
                    <div key={key} className="pl-4 hover:bg-white/5 cursor-default">
                      <span className="text-white/70">"{key}"</span>: <span className="text-green-400">"{value}"</span>,
                    </div>
                  ))}
                  <span>{`}`}</span>
                </div>
                <span className="text-white">{`}`}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
