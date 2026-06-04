import React from "react";
import { PortfolioData } from "../types";
import { Terminal, Calendar, Award, BookOpen, AlertCircle, Sparkles } from "lucide-react";

interface ExperienceProps {
  data: PortfolioData;
}

export default function Experience({ data }: ExperienceProps) {
  // Since no industry work roles were present in the attached resume,
  // we represent his Academic & Project Implementation Journey as a Timeline!
  const timelineEvents = [
    {
      period: "Academic Foundation Start",
      title: "Admitted into B.Tech CSE (AI/ML)",
      subtitle: "Kakinada Institute of Engineering and Technology",
      description: "Began deep-dive training into Advanced Mathematics, Data Structures, and Algorithmic Complexity, specializing in artificial intelligence and machine learning pipelines.",
      type: "education",
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />
    },
    {
      period: "System Implementation Era",
      title: "AI Resume Screening System Development",
      subtitle: "Core NLP Pipeline Project",
      description: "Successfully built and routed a full TF-IDF and matching scoring network utilizing python-centered machine learning models to classify resumes swiftly.",
      type: "project",
      icon: <Terminal className="w-4 h-4 text-teal-400" />
    },
    {
      period: "Deep Networks Era",
      title: "Computer Vision Detection System Design",
      subtitle: "TensorFlow & OpenCV Architecture",
      description: "Designed multi-stage Convolutional Neural Networks (CNNs) for image classification. Implemented random augmentations and optimized inference accuracy with opencv preprocess routines.",
      type: "project",
      icon: <Terminal className="w-4 h-4 text-indigo-400 text-purple-400" />
    },
    {
      period: "Full Stack Automation Era",
      title: "Full Stack AI Application Launch",
      subtitle: "FastAPI / Flask Microservices integration",
      description: "Wrapped complex model weights into performant FastAPI models. Designed neat frontend layouts to showcase real-time prediction speeds on high-load payloads.",
      type: "project",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />
    }
  ];

  return (
    <section id="experience-section" className="py-20 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
            <Calendar className="w-4 h-4" />
            <span>Evolution Timeline</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-sans">
            Academic & Implementation Journey
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-lg font-sans">
            Mapping key educational milestones and specialized ML project deployments chronologically.
          </p>
        </div>

        {/* Informative source tag */}
        <div className="max-w-3xl mx-auto mb-10 bg-slate-950/40 p-4 border border-slate-900 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-400 font-sans leading-relaxed">
            <span className="font-bold text-slate-200 block mb-0.5">Note on Professional Experience:</span>
            No standard professional industry roles were listed in Yegireddy's resume. Therefore, this timeline maps his academic progress and intensive project builds dynamically.
          </div>
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-8 border-l border-slate-800 space-y-12">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative group">
              
              {/* Dot bullet marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 p-1.5 bg-slate-950 border border-slate-800 rounded-full group-hover:border-teal-400 transition-colors z-10 shrink-0">
                {evt.icon}
              </div>

              {/* Event card details */}
              <div className="bg-slate-900/15 border border-slate-900 rounded-xl p-5 hover:border-slate-800 transition-colors">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">
                  {evt.period}
                </span>
                
                <h3 className="text-base font-bold text-white tracking-tight font-sans">
                  {evt.title}
                </h3>
                
                <p className="text-xs font-medium text-teal-400 mt-1">
                  {evt.subtitle}
                </p>

                <p className="text-xs text-slate-400 mt-3.5 leading-relaxed font-sans">
                  {evt.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
