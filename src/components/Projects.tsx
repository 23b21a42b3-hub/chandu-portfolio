import React from "react";
import { PortfolioData } from "../types";
import { Terminal, Cpu, Database, ClipboardCheck, ArrowUpRight, Code, Brain } from "lucide-react";

interface ProjectsProps {
  data: PortfolioData;
}

export default function Projects({ data }: ProjectsProps) {
  // Let's pair each project with a visual layout/accent to make it feel premium
  const visualAccents = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-emerald-400" />,
      tag: "Natural Language Processing",
      accentBg: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/10 hover:border-emerald-500/30",
      sampleTerminal: `>>> parsed_resumes = parser.scan("resume_batch/")\n>>> ranked_scores = model.classify(parsed_resumes, target_jd)\n>>> print(f"Top Candidate Score: {ranked_scores[0]['match_percent']}%")\n[SYSTEM] Classification Complete: 147 documents categorized.`
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      tag: "Computer Vision & Deep Learning",
      accentBg: "from-indigo-500/10 to-purple-500/5",
      borderColor: "border-indigo-500/10 hover:border-indigo-500/30",
      sampleTerminal: `>>> image_tensor = preprocess_img("frame_04.jpg", augment=True)\n>>> inference = cv_model.forward(image_tensor)\n>>> print(f"Classes Detected: {inference.labels}, Confidence: {inference.bounds}%")\n[INFO] OpenCV pipelines optimized with PyTorch GPU workers.`
    },
    {
      icon: <Database className="w-6 h-6 text-teal-400" />,
      tag: "Full-Stack Deployment",
      accentBg: "from-teal-500/10 to-sky-500/5",
      borderColor: "border-teal-500/10 hover:border-teal-500/30",
      sampleTerminal: `GET /api/v1/inference/predict HTTP/1.1\nHost: fastapi.chandu-engine.local\nStatus: 200 OK - ResponseTime: 12ms\n{"prediction_label": "Software Engineer", "confidence_index": 0.942}`
    }
  ];

  return (
    <section id="projects-section" className="py-20 border-t border-slate-900/60 bg-slate-950/20 relative">
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.03)_0,transparent_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <Terminal className="w-4 h-4" />
            <span>Operational Assets</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-sans">
            AI & Machine Learning Implementations
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg font-sans">
            Exploring natural language classification, computer vision systems, and complete deployment pipelines.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {data.projects.map((proj, idx) => {
            const uiAccent = visualAccents[idx] || visualAccents[0];
            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row gap-8 bg-slate-900/40 border ${uiAccent.borderColor} rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/5`}
              >
                {/* Text Part (Left Component - Col: 7) */}
                <div className="flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Badge Category Tag */}
                    <div className="inline-flex items-center gap-1.5 mb-4 text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                      {uiAccent.icon}
                      <span>{uiAccent.tag}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                      {proj.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mt-3 font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Core Details (Metrics / Key Achievements) */}
                  <div className="space-y-2 bg-slate-950/40 p-4 border border-slate-800/60 rounded-xl">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                      Target Outputs & Milestones
                    </span>
                    <ul className="space-y-1 mt-1.5">
                      {proj.metrics.map((metric, mIdx) => (
                        <li key={mIdx} className="text-xs text-slate-300 flex items-start gap-2 font-sans">
                          <span className="text-teal-400 mt-0.5">•</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[10px] font-mono font-medium text-slate-400 bg-slate-950 border border-slate-800/80 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Console Representation (Right Component - Col: 5) */}
                <div className="w-full lg:w-5/12 bg-slate-950 border border-slate-900 rounded-xl p-4 font-mono text-[10px] leading-relaxed text-slate-400 shadow-inner relative flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-3 text-slate-500">
                      <div className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-teal-500" />
                        <span>Interactive Exec Engine</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-600 font-bold">Inference Mock</span>
                    </div>
                    <pre className="whitespace-pre-wrap text-slate-300 text-[10px] font-mono leading-relaxed bg-slate-950 p-2 rounded max-h-48 overflow-y-auto">
                      {uiAccent.sampleTerminal}
                    </pre>
                  </div>
                  
                  <div className="mt-4 pt-2.5 border-t border-slate-900 flex items-center justify-between text-[11px] text-teal-400 select-none">
                    <span>Engine Standard Outputs</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
