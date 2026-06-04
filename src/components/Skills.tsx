import React from "react";
import { PortfolioData } from "../types";
import { Hammer, Code, Brain, Cpu, Database, CpuIcon } from "lucide-react";

interface SkillsProps {
  data: PortfolioData;
}

export default function Skills({ data }: SkillsProps) {
  // Map icons to categories
  const categories = [
    {
      title: "Programming Languages",
      skills: data.skills.programming,
      icon: <Code className="w-5 h-5 text-teal-400" />,
      color: "from-teal-500/10 to-emerald-500/5",
      border: "border-teal-500/20",
    },
    {
      title: "AI / Machine Learning",
      skills: data.skills.aiMl,
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/10 to-purple-500/5",
      border: "border-indigo-500/20",
    },
    {
      title: "Frameworks & Engines",
      skills: data.skills.frameworks,
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/10 to-pink-500/5",
      border: "border-purple-500/20",
    },
    {
      title: "Development & APIs",
      skills: data.skills.development,
      icon: <CpuIcon className="w-5 h-5 text-sky-400" />,
      color: "from-sky-500/10 to-blue-500/5",
      border: "border-sky-500/20",
    },
    {
      title: "Databases",
      skills: data.skills.databases,
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/10 to-teal-500/5",
      border: "border-emerald-500/20",
    },
    {
      title: "Tools & Ecosystem",
      skills: data.skills.tools,
      icon: <Hammer className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/10 to-orange-500/5",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section id="skills-section" className="py-20 border-t border-slate-900/60 relative">
      {/* Visual background details */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <Hammer className="w-4 h-4" />
            <span>Core Arsenal Spectrum</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Technical Stack & Engineering Modalities
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg">
            A comprehensive profile of frameworks, interfaces, databases, and scientific tools utilized dynamically.
          </p>
        </div>

        {/* Dynamic Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/20 border ${category.border} bg-gradient-to-br ${category.color} rounded-xl p-5 hover:border-slate-700/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-slate-950/60 rounded-lg group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-200">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-slate-300 bg-slate-950/80 border border-slate-800 rounded-md hover:border-teal-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
