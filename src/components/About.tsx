import React from "react";
import { PortfolioData } from "../types";
import { User, Cpu, Code, Brain } from "lucide-react";

interface AboutProps {
  data: PortfolioData;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about-section" className="py-20 border-t border-slate-900/60 bg-slate-950/40 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand/Bio Core (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest">
              <User className="w-4 h-4" />
              <span>Professional Blueprint</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Engineering solutions centered at the nexus of algorithms and interface.
            </h2>
            
            <p className="text-slate-300 leading-relaxed font-sans">
              Currently pursuing my B.Tech in CSE specializing in AI/ML at the{" "}
              <strong className="text-slate-100">Kakinada Institute of Engineering and Technology, Andhra Pradesh</strong>. 
              My education has been focused deeply on understanding dynamic neural frameworks, training architectures, 
              and crafting robust full-stack pipelines to serve intelligent predictions cleanly.
            </p>
            
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              With a foundation spanning both relational (MySQL) and NoSQL (MongoDB) databases, alongside high-concurrency micro-frameworks 
              such as FastAPI and Flask, I develop solutions that remain highly performant from model loading to user inference.
            </p>

            <div className="border-l-2 border-teal-500/40 pl-4 py-1 italic text-slate-400 text-sm">
              "Seeking environments where implementation-focused learning and rapid scaling drive real-world impact."
            </div>
          </div>

          {/* Core Strengths Bento Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Core Strength 1 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex items-start gap-4">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-200">Continuous Training Loop</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Passionate interest in building real-world pipeline loops containing cleaning, augmentation, feature scoring, and inference.
                </p>
              </div>
            </div>

            {/* Core Strength 2 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex items-start gap-4">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-200">Hardware-Aware Optimizations</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Leveraging computer vision augmentations via OpenCV joined with deep network architectures in PyTorch and TensorFlow.
                </p>
              </div>
            </div>

            {/* Core Strength 3 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-200">API-First Architectures</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Developing robust REST APIs using FastAPI/Flask backed by relational or flexible non-relational database storage structures.
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
