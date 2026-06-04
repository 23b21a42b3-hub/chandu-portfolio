import React from "react";
import { PortfolioData } from "../types";
import { Sparkles, Terminal, Mail, Linkedin, MapPin, Eye, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  data: PortfolioData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08)_0,transparent_60%)] pointer-events-none" />
      
      {/* Dark tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Profile Image Avatar Container */}
        {data.profilePicture && (
          <div className="relative w-28 h-28 mx-auto mb-6 group">
            <div className="absolute inset-x-0 -top-1 -bottom-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-xl flex items-center justify-center">
              <img
                src={data.profilePicture}
                alt={data.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Realtime online locator signal */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4 bg-slate-950 border border-slate-900 rounded-full items-center justify-center">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 font-bold"></span>
              </span>
            </span>
          </div>
        )}

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950/60 border border-slate-800 rounded-full mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            {data.education.graduationYear ? `B.Tech CSE (AI/ML) Class of ${data.education.graduationYear}` : "B.Tech CSE (AI/ML) Student"}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-4">
          {data.name}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl font-sans font-medium tracking-wide text-teal-400 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
          AI/ML Engineer & Intelligent Systems Architect
        </p>

        {/* Location & Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 mb-8 max-w-lg mx-auto">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-slate-500" />
            {data.location}
          </span>
          <span className="text-slate-700">•</span>
          <a href={`mailto:${data.socials.email}`} className="flex items-center gap-1 hover:text-teal-400 transition-colors">
            <Mail className="w-4 h-4" />
            {data.socials.email}
          </a>
          <span className="text-slate-700">•</span>
          <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-teal-400 transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        {/* Brand Statement / Objective */}
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
          Designing production-ready machine learning architectures, NLP scoring systems, and computer vision frameworks. 
          Expertly bridging the gap between theoretical models and real-world API workflows.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects-section"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 hover:text-slate-950 font-bold rounded-lg transition-all shadow-md shadow-teal-900/10 cursor-pointer"
          >
            Explore Neural Pipeline
          </a>
          <a
            href="#contact-section"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Initiate Consultation
          </a>
        </div>

        {/* Floating Code Visualizer */}
        <div className="mt-16 bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl text-left font-mono text-[11px] leading-relaxed text-slate-400 shadow-2xl relative">
          <div className="absolute top-3 right-4 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <div className="flex items-center gap-2 border-b border-slate-900 pb-2.5 mb-2.5 text-slate-500 text-[10px]">
            <Terminal className="w-3.5 h-3.5 text-teal-500" />
            <span>chandu_agent_sys.py</span>
          </div>
          <div>
            <span className="text-pink-500">import</span> tensorflow <span className="text-pink-500">as</span> tf<br />
            <span className="text-pink-500">import</span> torch<br />
            <span className="text-pink-500">from</span> transformers <span className="text-pink-500">import</span> pipeline<br /><br />
            
            <span className="text-slate-500"># Model: Yegireddy Chandu AI/ML Architecture</span><br />
            capabilities = &#123;<br />
            &nbsp;&nbsp;<span className="text-amber-300">"NLP"</span>: <span className="text-emerald-400">["Resume Screen", "Feature Extraction", "Similarity Analysis"]</span>,<br />
            &nbsp;&nbsp;<span className="text-amber-300">"Vision"</span>: <span className="text-emerald-400">["Object Detect", "Augmentation Preprocessing", "OpenCV Pipelines"]</span>,<br />
            &nbsp;&nbsp;<span className="text-amber-300">"Deployment"</span>: <span className="text-emerald-400">["FastAPI", "Flask", "REST Systems", "Dual-DB (SQL/NoSQL)"]</span><br />
            &#125;<br />
            <br />
            print(<span className="text-amber-400">"Initiating server-ready environment..."</span>)<br />
            print(f<span className="text-amber-400">"Status: Ready to engineer real-world systems."</span>)
          </div>
        </div>
      </div>
    </section>
  );
}
